#!/usr/bin/env bash
# =====================================================================
# 03_host_loop.sh — FEMU 호스트에서 실행
#   run마다: FEMU 새로 띄움(PILOT_POLICY) → ssh로 02_femu_run.sh 한 run → 결과 복사 → FEMU 끔
#   FTL 상태는 FEMU 메모리에만 있음 → 재시작 = 깨끗한 장치
#
#   ./03_host_loop.sh "single lan single6" 0.70  70% 세 run 먼저 (gain < 10%면 93% 생략)
#   ./03_host_loop.sh "single lan" 0.93          93% 두 run
#   REP=2 ./03_host_loop.sh "single lan" 0.93    경계일 때 93% 한 번 더
#   HOST_RESULTS=~/fdp_smoke FORCE=1 OVERWRITE_MULT=0.2 ./03_host_loop.sh lan 0.35   작은 시험 (본 결과와 분리)
#
#   FEMU_START_CMD 비우면 femu/start_femu.sh (single RUH 2, lan·single6 RUH 6)
#
# 준비 (README "호스트 준비")
#   - 호스트 config.env: FEMU_BIN, FEMU_GUEST_IMAGE, GUEST_SSH, GUEST_DIR
#   - 호스트→게스트 ssh 키 접속, 게스트 sudo NOPASSWD, 호스트 sudo -n (FEMU_SUDO=1)
#   - 게스트 디스크 유지 (-snapshot X)
#   - 게스트 config.env: 장치 이름·카운터 방법
# =====================================================================
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
set -a; . "$HERE/config.env"; set +a

POLICIES="${1:-single lan}"
UTILS="${2:-$TARGET_UTILS}"
REP="${REP:-1}"
SUFFIX=""; [[ "$REP" != "1" ]] && SUFFIX="_r$REP"

FEMU_START_CMD="${FEMU_START_CMD:-$HERE/femu/start_femu.sh}"
for v in FEMU_START_CMD GUEST_SSH GUEST_DIR; do
  [[ -n "${!v}" ]] || { echo "config.env 의 $v 비어 있음"; exit 1; }
done
LOGDIR="$HOST_RESULTS/host_logs"; mkdir -p "$LOGDIR"

# shellcheck disable=SC2086
gssh() { ssh -o BatchMode=yes -o ConnectTimeout=5 -o ServerAliveInterval=30 \
             -o StrictHostKeyChecking=accept-new $GUEST_SSH_OPTS "$GUEST_SSH" "$@"; }

# 게스트 결과 폴더 (게스트 config.env 기준)
GUEST_ENV="cd '$GUEST_DIR' && set -a && . ./config.env && set +a"

if [[ "${FORCE:-0}" != "1" ]]; then
  echo "run마다 FEMU 재시작, 게스트 장치 데이터 삭제. 계속: yes"
  read -r ans; [[ "$ans" == "yes" ]] || exit 1
fi

FPID=""
# sudo로 띄운 qemu는 root → 일반 kill은 내 프로세스에만 닿음(성공으로 끝남)
# → 일반 kill + sudo -n kill 둘 다 보냄
signal_femu() {   # $1 = 신호 이름 (TERM, KILL)
  kill "-$1" -- "-$FPID" 2>/dev/null || kill "-$1" "$FPID" 2>/dev/null || true
  sudo -n kill "-$1" -- "-$FPID" 2>/dev/null || true
}
stop_femu() {
  [[ -n "$FPID" ]] || return 0
  gssh "sudo -n poweroff" >/dev/null 2>&1 || true
  local t=0
  while kill -0 "$FPID" 2>/dev/null && (( t < SHUTDOWN_TIMEOUT_SEC )); do sleep 5; t=$((t+5)); done
  if kill -0 "$FPID" 2>/dev/null; then
    echo "[host] FEMU 안 꺼짐 → 강제 종료"
    signal_femu TERM; sleep 10; signal_femu KILL
    t=0
    while kill -0 "$FPID" 2>/dev/null && (( t < 30 )); do sleep 2; t=$((t+2)); done
    if kill -0 "$FPID" 2>/dev/null; then
      # wait 하면 영원히 멈춤 → 알리고 넘어감
      echo "[host] FEMU(pid $FPID) 종료 실패. 수동: sudo kill -KILL -- -$FPID"
      FPID=""; return 1
    fi
  fi
  wait "$FPID" 2>/dev/null || true
  FPID=""
}
trap 'echo "[host] 중단 → FEMU 끔"; stop_femu; exit 130' INT TERM

# 사용률이 바깥 루프: 70% 두 run 먼저 (보류면 93% 생략)
for U in $UTILS; do
  for POL in $POLICIES; do
    TAG="${POL}_u${U}${SUFFIX}"
    if [[ -f "$HOST_RESULTS/$TAG/done" ]]; then
      echo "[건너뜀] $TAG 이미 끝남 ($HOST_RESULTS/$TAG)"; continue
    fi
    echo "[host] ===== $TAG ====="

    # 1) FEMU 띄우기: 별도 프로세스 그룹(통째로 끄려고), PILOT_POLICY로 RUH 구성 결정
    #    실제 명령은 femu_$TAG.log 첫 줄들
    PILOT_POLICY="$POL" setsid bash -c "$FEMU_START_CMD" > "$LOGDIR/femu_$TAG.log" 2>&1 < /dev/null &
    FPID=$!
    echo "[host] FEMU 시작 (pid $FPID), 부팅 대기..."
    t=0
    until gssh true 2>/dev/null; do
      kill -0 "$FPID" 2>/dev/null || { echo "[host] FEMU 바로 꺼짐. $LOGDIR/femu_$TAG.log 확인"; exit 1; }
      (( t >= BOOT_TIMEOUT_SEC )) && { echo "[host] 부팅 시간 초과"; stop_femu; exit 1; }
      sleep 10; t=$((t+10))
    done
    echo "[host] 게스트 접속됨 (${t}초)"

    # 2) (선택) 게스트 준비 명령
    if [[ -n "$GUEST_PREP_CMD" ]]; then
      gssh "$GUEST_PREP_CMD" > "$LOGDIR/prep_$TAG.log" 2>&1 || { echo "[host] GUEST_PREP_CMD 실패"; stop_femu; exit 1; }
    fi

    # 3) 게스트에서 run 하나를 nohup 백그라운드로 (ssh 끊겨도 계속)
    #    OVERWRITE_MULT: 호스트 값 그대로 넘김 (안 넘기면 게스트 config.env 기본값으로 바뀜)
    #    덜 끝난 같은 폴더는 지우고 새로 시작
    #    { nohup … & } 로 감싸야 ssh가 바로 돌아옴 (안 감싸면 서브셸이 run 끝까지 ssh 출력을 쥠)
    gssh "$GUEST_ENV && rm -rf \"\$RESULTS/$TAG\" && \
          { nohup sudo -n -E env WORK=\"\$WORK\" RESULTS=\"\$RESULTS\" FORCE=1 FRESH_FEMU=1 NO_SUMMARY=1 REP=$REP \
              OVERWRITE_MULT=$OVERWRITE_MULT \
              ./02_femu_run.sh '$POL' '$U' > \"\$HOME/fdp_run_$TAG.log\" 2>&1 < /dev/null & \
            echo \$! > \"\$HOME/fdp_run_$TAG.pid\"; } && echo started"

    # 4) 끝날 때까지 대기
    #    ps -p 사용: root 프로세스엔 kill -0 이 권한 오류 → "끝남"으로 오판
    #    ssh 255 = 접속 문제 → 끝남 아님, 재확인
    fails=0
    while :; do
      sleep "$POLL_SEC"
      kill -0 "$FPID" 2>/dev/null || { echo "[host] run 중 FEMU 꺼짐. $LOGDIR/femu_$TAG.log 확인"; FPID=""; exit 1; }
      rc=0; gssh "ps -p \"\$(cat \"\$HOME/fdp_run_$TAG.pid\")\" >/dev/null" || rc=$?
      if (( rc == 0 )); then fails=0; continue; fi
      if (( rc == 255 )); then
        fails=$((fails+1)); echo "[host] 게스트 접속 실패 ($fails번째), 재확인"
        (( fails >= 10 )) && { echo "[host] 게스트 접속 계속 실패 → 중단"; stop_femu; exit 1; }
        continue
      fi
      break   # ps 가 1을 돌려줌 = 프로세스 없음 = run 끝남
    done

    # 5) 결과 가져오기
    gssh "cat \"\$HOME/fdp_run_$TAG.log\"" > "$LOGDIR/run_$TAG.log" 2>/dev/null || true
    mkdir -p "$HOST_RESULTS"
    gssh "$GUEST_ENV && cd \"\$RESULTS\" && tar cf - '$TAG'" | tar xf - -C "$HOST_RESULTS"
    ok=0; [[ -f "$HOST_RESULTS/$TAG/done" ]] && ok=1

    # 6) FEMU 끄기
    stop_femu
    if (( ok )); then
      echo "[host] 완료: $TAG"
    else
      echo "[host] $TAG 미완료 → 중단. $LOGDIR/run_$TAG.log 확인"
      exit 1
    fi
    sleep 5
  done
done

python3 "$HERE/pilot.py" summary "$HOST_RESULTS" | tee "$HOST_RESULTS/summary.txt"
