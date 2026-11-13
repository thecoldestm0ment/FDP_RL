#!/usr/bin/env bash
# =====================================================================
# 03_host_loop.sh — FEMU 호스트에서 실행
#   run마다 FEMU를 새로 띄우고, 게스트 UUID가 이 run의 UUID인지 확인한 뒤에만 실행
#   한 컴퓨터 안에서: ./03_host_loop.sh "single lan" 0.70 → summary 확인 → ./03_host_loop.sh "single lan" 0.93
#   (시간 남으면) ./03_host_loop.sh single6 0.93
#   작은 시험: HOST_RESULTS=~/fdp_smoke_gc90 FORCE=1 OVERWRITE_MULT=0.2 ./03_host_loop.sh lan 0.35
#   준비: README "호스트 준비". 게스트 sudo NOPASSWD, 호스트·게스트 스크립트·config.env 동일
# =====================================================================
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
set -a; . "$HERE/config.env"; set +a
POLICIES="${1:-single lan}"
UTILS="${2:-0.70}"
REP="${REP:-1}"
SUFFIX=""; [[ "$REP" != 1 ]] && SUFFIX="_r$REP"
FEMU_START_CMD="${FEMU_START_CMD:-$(printf '%q' "$HERE/femu/start_femu.sh")}"
for v in FEMU_START_CMD FEMU_BIN FEMU_GUEST_IMAGE GUEST_SSH GUEST_DIR; do
  [[ -n "${!v}" ]] || { echo "config.env 의 $v 비어 있음"; exit 1; }
done
[[ "$REP" =~ ^[1-9][0-9]*$ ]] || { echo "REP 값 이상"; exit 1; }
for POL in $POLICIES; do
  [[ "$POL" == single || "$POL" == lan || "$POL" == single6 ]] || { echo "정책 이름 이상: $POL"; exit 1; }
done
for U in $UTILS; do [[ "$U" =~ ^0\.[0-9]+$ ]] || { echo "사용률 값 이상: $U"; exit 1; }; done
LOGDIR="$HOST_RESULTS/host_logs"
mkdir -p "$LOGDIR" "$(dirname "$FEMU_QMP_SOCK")"
# 같은 QMP·장치 파일·SSH 포트를 쓰는 실험 두 개가 동시에 돌지 않게 잠금
exec 9>"${FEMU_QMP_SOCK}.campaign.lock"
flock -n 9 || { echo "다른 실험이 $FEMU_QMP_SOCK 사용 중"; exit 1; }
# shellcheck disable=SC2086
gssh() { ssh -o BatchMode=yes -o ConnectTimeout=5 -o ServerAliveInterval=30 \
  -o StrictHostKeyChecking=accept-new $GUEST_SSH_OPTS "$GUEST_SSH" "$@"; }
GUEST_ENV="cd $(printf '%q' "$GUEST_DIR") && set -a && . ./config.env && set +a"
if [[ "${FORCE:-0}" != 1 ]]; then
  echo "run마다 FEMU 재시작, 전용 장치 데이터 삭제. 계속: yes"
  read -r ans; [[ "$ans" == yes ]] || exit 1
fi
FPID=""; VM_VERIFIED=0
signal_femu() {
  [[ -n "$FPID" ]] || return 0
  kill "-$1" -- "-$FPID" 2>/dev/null || kill "-$1" "$FPID" 2>/dev/null || true
  if [[ "$FEMU_SUDO" == 1 ]]; then sudo -n kill "-$1" -- "-$FPID" 2>/dev/null || true; fi
}
stop_femu() {
  [[ -n "$FPID" ]] || return 0
  # UUID 확인 전의 SSH 대상은 다른 VM일 수 있음 → poweroff 안 보냄
  if (( VM_VERIFIED )); then gssh "sudo -n poweroff" >/dev/null 2>&1 || true
  else signal_femu TERM
  fi
  local t=0
  while kill -0 "$FPID" 2>/dev/null && (( t < SHUTDOWN_TIMEOUT_SEC )); do sleep 2; t=$((t+2)); done
  if kill -0 "$FPID" 2>/dev/null; then
    signal_femu TERM; sleep 2; signal_femu KILL
    t=0
    while kill -0 "$FPID" 2>/dev/null && ((t < 30)); do sleep 1; t=$((t+1)); done
    if kill -0 "$FPID" 2>/dev/null; then echo "FEMU(pid $FPID) 종료 실패. 수동: sudo kill -KILL -- -$FPID" >&2; return 1; fi
  fi
  wait "$FPID" 2>/dev/null || true
  FPID=""; VM_VERIFIED=0
}
cleanup_host() {
  local rc=$?
  trap - EXIT
  stop_femu || rc=1
  exit "$rc"
}
trap cleanup_host EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

for U in $UTILS; do
  for POL in $POLICIES; do
    TAG="${POL}_u${U}${SUFFIX}"
    RUN_ID=$(python3 -c 'import uuid; print(uuid.uuid4())')
    HOST_MANIFEST="$LOGDIR/host_${TAG}_${RUN_ID}.json"
    python3 "$HERE/runcheck.py" host "$HOST_MANIFEST" "$RUN_ID"
    if [[ -f "$HOST_RESULTS/$TAG/done" ]]; then
      # Reuse only a complete run with this source/config/host/QEMU provenance.
      python3 - "$HERE" "$HOST_RESULTS/$TAG" "$HOST_MANIFEST" <<'PY'
import sys
sys.path.insert(0, sys.argv[1])
import runcheck
run, current = sys.argv[2:]
m = runcheck.load(run + '/manifest.json')
h = runcheck.load(current)
if runcheck.validate(run)['status'] != 'VALID':
    raise SystemExit('이미 끝난 run이 검증 실패. attempts/ 로 옮긴 뒤 다시')
for key in ('hostname', 'qemu_sha256'):
    if m['host'][key] != h[key]:
        raise SystemExit('이미 끝난 run과 설정이 다름: ' + key + '. 새 결과 폴더(HOST_RESULTS)를 쓸 것')
if runcheck.exp_config(m['host']['config']) != runcheck.exp_config(h['config']):
    raise SystemExit('이미 끝난 run과 실험 설정이 다름. 새 결과 폴더(HOST_RESULTS)를 쓸 것')
if runcheck.run_scripts(m['host']['source']) != runcheck.run_scripts(h['source']):
    print('[주의] 이미 끝난 run과 실행 스크립트 버전이 다름 (실험 설정은 같아서 재사용)')
PY
      echo "[건너뜀] $TAG 완료·설정 검증 통과"
      continue
    fi
    if [[ -e "$HOST_RESULTS/$TAG" ]]; then
      mkdir -p "$HOST_RESULTS/attempts"
      mv "$HOST_RESULTS/$TAG" "$HOST_RESULTS/attempts/${TAG}_${RUN_ID}"
    fi
    [[ ! -e "$FEMU_QMP_SOCK" ]] || { echo "QMP 소켓이 이미 있음 (다른 FEMU 실행 중?): $FEMU_QMP_SOCK"; exit 1; }
    python3 - "$FEMU_SSH_PORT" <<'PY'
import socket, sys
import time
# SO_REUSEADDR: 앞 run이 남긴 TIME_WAIT 는 통과, 실제로 LISTEN 중인 포트만 사용 중으로 봄. 90초까지 재시도
for i in range(7):
    with socket.socket() as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            s.bind(('127.0.0.1', int(sys.argv[1])))
            break
        except OSError as e:
            err = e
    time.sleep(15)
else:
    raise SystemExit('SSH 포트를 다른 프로세스가 사용 중: ' + str(err))
PY
    FEMU_LOG="$LOGDIR/femu_${TAG}_${RUN_ID}.log"
    # 시도마다 로그를 따로 남김. femu_<run>.log 는 마지막 시도로 가는 링크
    if [[ -e "$LOGDIR/femu_$TAG.log" && ! -L "$LOGDIR/femu_$TAG.log" ]]; then
      mkdir -p "$LOGDIR/attempts"
      mv "$LOGDIR/femu_$TAG.log" "$LOGDIR/attempts/femu_${TAG}_${RUN_ID}.previous.log"
    fi
    ln -sfn "$(basename "$FEMU_LOG")" "$LOGDIR/femu_$TAG.log"
    PILOT_POLICY="$POL" FEMU_RUN_ID="$RUN_ID" setsid bash -c "$FEMU_START_CMD" > "$FEMU_LOG" 2>&1 < /dev/null &
    FPID=$!; VM_VERIFIED=0
    echo "[host] $TAG FEMU pid=$FPID uuid=$RUN_ID"
    t=0
    while :; do
      kill -0 "$FPID" 2>/dev/null || { echo "새 FEMU가 꺼짐 (New FEMU exited): $FEMU_LOG"; exit 1; }
      if uuid=$(gssh 'sudo -n cat /sys/class/dmi/id/product_uuid' 2>/dev/null); then
        kill -0 "$FPID" 2>/dev/null || { echo "SSH 확인 중 새 FEMU가 꺼짐 (New FEMU exited)"; exit 1; }
        [[ "${uuid,,}" == "$RUN_ID" ]] || { echo "게스트 UUID 불일치 (UUID mismatch) → 실행 거부"; exit 1; }
        VM_VERIFIED=1
        break
      fi
      (( t < BOOT_TIMEOUT_SEC )) || { echo "게스트 부팅 시간 초과"; exit 1; }
      sleep 5; t=$((t+5))
    done
    gssh 'cat > /tmp/fdp-pilot-host.json' < "$HOST_MANIFEST"
    if [[ -n "$GUEST_PREP_CMD" ]]; then
      gssh "$GUEST_PREP_CMD" > "$LOGDIR/prep_${TAG}_${RUN_ID}.log" 2>&1
    fi
    # 덜 끝난 결과는 게스트가 attempts/ 로 옮김. 여기서는 아무것도 안 지움
    REMOTE_LOG="fdp_run_${TAG}_${RUN_ID}.log"
    REMOTE_PID="fdp_run_${TAG}_${RUN_ID}.pid"
    gssh "$GUEST_ENV && { nohup sudo -n -E env WORK=\"\$WORK\" RESULTS=\"\$RESULTS\" FORCE=1 FRESH_FEMU=1 NO_SUMMARY=1 REP=$REP FEMU_RUN_ID=$RUN_ID OVERWRITE_MULT=$OVERWRITE_MULT ./02_femu_run.sh '$POL' '$U' > \"\$HOME/$REMOTE_LOG\" 2>&1 < /dev/null & echo \$! > \"\$HOME/$REMOTE_PID\"; } && echo started"
    fails=0
    while :; do
      sleep "$POLL_SEC"
      kill -0 "$FPID" 2>/dev/null || { echo "run 중 FEMU 꺼짐: $FEMU_LOG"; exit 1; }
      rc=0; gssh "ps -p \"\$(cat \"\$HOME/$REMOTE_PID\")\" >/dev/null" || rc=$?
      if ((rc == 0)); then fails=0; continue; fi
      if ((rc == 255)); then
        fails=$((fails+1)); echo "[host] 게스트 접속 실패 ($fails/10)"
        ((fails < 10)) || exit 1
        continue
      fi
      break
    done
    # 결과 회수: 접속이 잠깐 끊겨도 run을 버리지 않게 3번까지 재시도 (원본은 게스트에 남음)
    got=0
    for i in 1 2 3; do
      if gssh "cat \"\$HOME/$REMOTE_LOG\"" > "$LOGDIR/run_${TAG}_${RUN_ID}.log" \
         && gssh "$GUEST_ENV && cd \"\$RESULTS\" && tar cf - '$TAG'" | tar xf - -C "$HOST_RESULTS"; then
        got=1; break
      fi
      echo "[host] 결과 회수 실패 ($i/3), 10초 뒤 재시도"; sleep 10
    done
    (( got )) || { echo "[host] 결과 회수 실패. 게스트 결과 폴더의 $TAG 에 원본 있음"; exit 1; }
    stop_femu
    [[ -f "$HOST_RESULTS/$TAG/done" ]] || { echo "[host] $TAG 미완료/검증 실패; 원본 보존 후 중단"; exit 1; }
    echo "[host] $TAG 완료"
  done
done
python3 "$HERE/pilot.py" summary "$HOST_RESULTS" | tee "$HOST_RESULTS/summary.txt"
