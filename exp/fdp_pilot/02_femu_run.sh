#!/usr/bin/env bash
# =====================================================================
# 02_femu_run.sh — 지윤 담당. FEMU 게스트 안에서 실행.
#   정책 2개(single, lan) x 사용률(TARGET_UTILS) 를 한 번씩 돌리고
#   장치 카운터(host/media 쓰기량)와 RUH별 상태를 SAMPLE_SEC 마다 기록.
#
#   sudo -E ./02_femu_run.sh                 전부 (single·lan x 모든 사용률)
#   sudo -E ./02_femu_run.sh lan 0.93        하나만
#   REP=2 sudo -E ./02_femu_run.sh ...       두 번째 반복 (폴더 이름 끝에 _r2)
#
# 보통은 호스트의 ./03_host_loop.sh 가 run마다 FEMU를 새로 띄우고
# 이 스크립트를 FRESH_FEMU=1 로 run 하나씩 호출.
#
# 주의: NG_DEV 장치 데이터 전부 삭제. FEMU 전용 장치에서만 실행.
# 필요: ./00_build.sh femu, nvme-cli(fdp 지원), python3
# =====================================================================
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
OVERWRITE_MULT_FROM_ENV="${OVERWRITE_MULT:-}"     # config.env 읽기 전, 밖에서 받은 값 기록
set -a; . "$HERE/config.env"; set +a
. "$HERE/lib/dbbench_args.sh"
. "$HERE/lib/runlib.sh"

DB_BENCH="$WORK/bin/db_bench_torfs"
TORFS_DB_DIR="${TORFS_DB_DIR:-$WORK/torfs_db}"   # TorFS가 쓰는 로컬 보조 폴더 (Lan도 이렇게 씀)
                                                 #   RocksDB LOG 도 여기 로컬 파일로 생김 (lib/runlib.sh 참고)
FS_URI="torfs:xnvme:${NG_DEV}?be=io_uring_cmd"
[[ -x "$DB_BENCH" ]] || { echo "먼저 ./00_build.sh femu 실행 필요."; exit 1; }

POLICIES="${1:-single lan}"
UTILS="${2:-$TARGET_UTILS}"
REP="${REP:-1}"
SUFFIX=""; [[ "$REP" != "1" ]] && SUFFIX="_r$REP"

if [[ "${FORCE:-0}" != "1" ]]; then
  echo "장치 $NG_DEV ($NVME_DEV) 데이터 삭제 예정. 계속하려면 yes 입력."
  read -r ans; [[ "$ans" == "yes" ]] || exit 1
fi

# 카운터 읽기가 되는지 먼저 확인
if ! python3 "$HERE/pilot.py" counters >/dev/null; then
  echo "장치 카운터 못 읽음. config.env 의 COUNTER_METHOD / COUNTER_CMD 확인."; exit 1
fi
if [[ "$RUH_METHOD" == "femu" ]] && ! python3 "$HERE/pilot.py" usage >/dev/null; then
  echo "FEMU 사용량 로그(C1h) 못 읽음. 이 브랜치(fdp-pilot) FEMU인지, NVME_DEV 확인."; exit 1
fi
# 정책별 장치 설정(RUH 수, II, placement handle 목록)은 run마다 아래 devcheck 로 확인.
#   single 은 RUH 2개·handle 0, lan 은 RUH 6개·handle 0–4 (config.env NRUH_*, PHS_*).
#   정책마다 FEMU를 따로 띄움 -> 한 FEMU로는 그 정책 run만 (03_host_loop.sh).

sample() {   # $1 = run 폴더, $2 = phase 이름 (없으면 phase 파일)
  local d="$1" ph="${2:-}" ts
  [[ -n "$ph" ]] || ph=$(cat "$d/phase" 2>/dev/null || echo end)
  ts=$(now_ms)
  read -r H M < <(python3 "$HERE/pilot.py" counters)
  echo "$ts,$ph,$H,$M" >> "$d/counters.csv"
  case "$RUH_METHOD" in
    femu)   # 실제 사용률과 RUH별 쓰기량을 한 번에
            #   첫 줄 = 유효 데이터·용량·잘못된 PID 쓰기 수, 다음 줄부터 RUH별
      python3 "$HERE/pilot.py" usage 2>/dev/null | {
        read -r V C I && echo "$ts,$ph,$V,$C,$I" >> "$d/usage.csv"
        while read -r pid hb mb live; do echo "$ts,$ph,$pid,$hb,$mb,$live" >> "$d/ruh_usage.csv"; done
      } || true ;;
    none) ;;
    *)
      python3 "$HERE/pilot.py" ruh 2>/dev/null | while read -r pid val; do
        echo "$ts,$ph,$pid,$val" >> "$d/ruh.csv"
      done ;;
  esac
}

for POL in $POLICIES; do
  for U in $UTILS; do
    RUN="$RESULTS/${POL}_u${U}${SUFFIX}"
    if [[ -e "$RUN" ]]; then echo "[건너뜀] $RUN 이미 있음 (다시 돌리려면 폴더 삭제)"; continue; fi
    mkdir -p "$RUN"

    # 1) FEMU 초기화
    if [[ "${FRESH_FEMU:-0}" == "1" ]]; then
      echo "[femu] 새로 띄운 FEMU라 초기화 생략."
    elif [[ -n "$FEMU_RESET_CMD" ]]; then
      echo "[femu] 초기화: $FEMU_RESET_CMD"; bash -c "$FEMU_RESET_CMD"
    else
      echo "[femu] FEMU 새로 띄워 장치 초기화 후 Enter ($POL, 사용률 $U)"; read -r _
    fi
    rm -rf "$TORFS_DB_DIR"; mkdir -p "$TORFS_DB_DIR"

    # 2) 정책
    if [[ "$POL" == "single" ]]; then export TORFS_FORCE_PID=0; else unset TORFS_FORCE_PID; fi

    N=$(python3 "$HERE/pilot.py" get "$U" N)
    W=$(python3 "$HERE/pilot.py" get "$U" overwrite_writes_per_thread)
    # 장치 LBA 크기 (RUAMW 단위). summary 는 장치 없는 호스트에서 돌아서 여기 기록
    python3 "$HERE/pilot.py" lbasize > "$RUN/lba_bytes"
    # 정책 확인: RUH 수, 모든 RUH가 II, placement handle 목록, 잘못된 PID 0.
    #   결과(RUH 수·종류, pid->RUH 매핑)는 device.txt, meta.txt 에 기록.
    if ! python3 "$HERE/pilot.py" devcheck "$POL" "$RUN/device.txt"; then
      echo "[femu] 장치 설정이 $POL 정책과 불일치 ($RUN/device.txt). FEMU를 이 정책으로 띄웠는지 확인."
      exit 1
    fi
    dbbench_common_args "$U"
    write_run_params "$RUN" \
      "script=02_femu_run.sh" "policy=$POL" "util=$U" "REP=$REP" "SCALE=1 (FEMU는 크기 줄이기 없음)" \
      "TORFS_FORCE_PID=${TORFS_FORCE_PID:-unset}  (single=0, lan=unset -> Lan 패치의 레벨별 hint)" \
      "N(--num)=$N" "W(--writes, 스레드당)=$W" \
      "overwrite 전체 연산 수 = W x THREADS = $((W * THREADS))" \
      "논리 데이터 대비 배수 = W x THREADS / N = $(python3 -c "print(f'{$W*$THREADS/$N:.4f}')")" \
      "logical_bytes = N x (KEY_SIZE + VALUE_SIZE) = $(( N * (KEY_SIZE + VALUE_SIZE) ))" \
      "TORFS_DB_DIR=$TORFS_DB_DIR" "FS_URI=$FS_URI" "RESULTS=$RESULTS" "db_bench=$DB_BENCH"
    { echo "policy=$POL util=$U N=$N W_per_thread=$W threads=$THREADS lba_bytes=$(cat "$RUN/lba_bytes")"
      echo "TORFS_FORCE_PID=${TORFS_FORCE_PID:-unset} fs_uri=$FS_URI"
      echo "device:"; sed 's/^/  /' "$RUN/device.txt"
      echo "config:"; grep -v '^\s*#' "$HERE/config.env" | grep -v '^\s*$'
      echo "db_args:"; printf '  %s\n' "${DB_ARGS[@]}"; } > "$RUN/meta.txt"

    echo "ts,phase,host_bytes,media_bytes" > "$RUN/counters.csv"
    case "$RUH_METHOD" in
      femu) echo "ts,phase,valid_bytes,capacity_bytes,invalid_pid_cmds" > "$RUN/usage.csv"
            echo "ts,phase,ruh,hbmw,mbmw,live_bytes" > "$RUN/ruh_usage.csv" ;;
      none) ;;
      *)    echo "ts,phase,pid,value" > "$RUN/ruh.csv" ;;
    esac

    # 3) 샘플러: SAMPLE_SEC 마다 + 단계가 바뀔 때 (바뀌기 전·후 이름으로 한 번씩, lib/runlib.sh start_sampler)
    #    단계: idle -> load_open -> load -> load_wait -> load_logsave
    #          -> overwrite_open -> overwrite -> overwrite_wait -> overwrite_logsave -> end
    #    주 WAF·뒤 1/3·RUH 비율은 overwrite(실제 실행) 구간만, 대기·LOG 저장 중 쓰기는 summary 에 따로 표시.
    set_phase "$RUN" idle
    start_sampler "$RUN" "$SAMPLE_SEC" sample

    # 4) load: 키 N개를 겹치지 않게 랜덤 순서로 한 번씩
    #    stdout·stderr 는 db_bench_load.stdout / .stderr 로 따로, LOG 옵션 대조는 options_check_load.txt
    rc=0
    run_dbbench load "$RUN" "$TORFS_DB_DIR" \
      "$DB_BENCH" --db="$TORFS_DB_DIR" --fs_uri="$FS_URI" "${DB_ARGS[@]}" \
      --benchmarks=filluniquerandom,waitforcompaction --threads=1 --num="$N" || rc=$?
    if [[ $rc -ne 0 ]]; then
      rm -f "$RUN/phase"; wait "$SAMPLER" 2>/dev/null || true; echo "[femu] load 실패 (rc=$rc): $RUN"; exit $rc
    fi

    # 5) overwrite: 같은 키들을 랜덤으로 덮어쓰기 (이 구간의 WAF 를 봄). load 와 따로 한 프로세스, 중간에 다시 열지 않음
    run_dbbench overwrite "$RUN" "$TORFS_DB_DIR" \
      "$DB_BENCH" --db="$TORFS_DB_DIR" --fs_uri="$FS_URI" "${DB_ARGS[@]}" --use_existing_db=1 \
      --benchmarks=overwrite,waitforcompaction,levelstats,stats --threads="$THREADS" \
      --num="$N" --writes="$W" || rc=$?
    if [[ $rc -ne 0 ]]; then
      rm -f "$RUN/phase"; wait "$SAMPLER" 2>/dev/null || true; echo "[femu] overwrite 실패 (rc=$rc): $RUN"; exit $rc
    fi
    grep -A 12 "Level Files Size" "$RUN/db_bench_overwrite.stdout" > "$RUN/levelstats.txt" || true

    set_phase "$RUN" end; sleep 2
    rm -f "$RUN/phase"; wait "$SAMPLER" 2>/dev/null || true
    python3 "$HERE/pilot.py" phasetimes "$RUN" > "$RUN/time.txt" || true
    unset TORFS_FORCE_PID
    # namespace에 없는 PID로 온 쓰기 = 장치가 handle 0 으로 보냄 -> 이 run 폐기.
    #   done 없이 멈춤 (호스트 03_host_loop.sh 도 여기서 멈춤).
    if ! python3 "$HERE/pilot.py" pidcheck > "$RUN/pid_check.txt"; then
      cat "$RUN/pid_check.txt"; echo "[femu] 잘못된 PID 쓰기 있음, 이 run 폐기: $RUN"; exit 1
    fi
    date +%s > "$RUN/done"
    echo "[femu] 완료: $RUN"
  done
done

if [[ "${NO_SUMMARY:-0}" != "1" ]]; then
  python3 "$HERE/pilot.py" summary "$RESULTS" | tee "$RESULTS/summary.txt"
fi
