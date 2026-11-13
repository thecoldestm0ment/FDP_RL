#!/usr/bin/env bash
# =====================================================================
# femu/start_femu.sh — 호스트에서 파일럿용 FEMU를 foreground로 띄움
#   PILOT_POLICY=single|lan|single6 에 따라 RUH 수·placement handle만 다름 (나머지 공통, 값은 config.env)
#     single : RUH 2개 (0 데이터, 1 GC), handle 0
#     lan    : RUH 6개 (0–4 데이터, 5 GC), handle 0–4
#     single6: RUH 6개 (0 데이터, 1–4 빈 채로 열림, 5 GC), handle 0  — 열린 RU 비용 대조용
#   03_host_loop.sh 가 run마다 호출. 손으로: PILOT_POLICY=lan ./femu/start_femu.sh
#   끄기: 게스트에서 sudo poweroff (또는 QMP quit)
# =====================================================================
set -euo pipefail
HERE="$(cd "$(dirname "$0")/.." && pwd)"
set -a; . "$HERE/config.env"; set +a

FEMU_RUN_ID="${FEMU_RUN_ID:-$(python3 -c 'import uuid; print(uuid.uuid4())')}"
POL="${PILOT_POLICY:-}"
[[ "$POL" == "single" || "$POL" == "lan" || "$POL" == "single6" ]] || { echo "PILOT_POLICY=single|lan|single6 필요"; exit 1; }
nruh_var="NRUH_$POL"; phs_var="PHS_$POL"
NRUH="${!nruh_var}"; PHS="${!phs_var}"

[[ -x "$FEMU_BIN" ]] || { echo "FEMU_BIN=$FEMU_BIN 없음 (fdp-pilot 브랜치 build-femu 빌드 확인)"; exit 1; }
[[ -f "$FEMU_GUEST_IMAGE" ]] || { echo "게스트 이미지 FEMU_GUEST_IMAGE=$FEMU_GUEST_IMAGE 없음"; exit 1; }

# 데이터 파일: FEMU는 기존 파일 거부(매번 새 장치) → 이전 run 것 삭제
#   비우면 RAM에 올림 (24 GiB, RAM 32 GB 호스트에선 부족)
if [[ -n "$FEMU_MBE_FILE" ]]; then
  mkdir -p "$(dirname "$FEMU_MBE_FILE")"
  rm -f "$FEMU_MBE_FILE"
fi

SUBSYS="femu-subsys,id=fdpss,nqn=fdpss,fdp=on,fdp.nruh=$NRUH,fdp.nrg=1"
SUBSYS+=",fdp.nru=$FEMU_BLKS_PER_PL,fdp.isolation_mode=$FEMU_ISOLATION_MODE"

DEV="femu,devsz_mb=$FEMU_DEVSZ_MB,namespaces=1,femu_mode=1"
DEV+=",secsz=$FEMU_SECSZ,secs_per_pg=$FEMU_SECS_PER_PG,pgs_per_blk=$FEMU_PGS_PER_BLK"
DEV+=",blks_per_pl=$FEMU_BLKS_PER_PL,pls_per_lun=$FEMU_PLS_PER_LUN"
DEV+=",luns_per_ch=$FEMU_LUNS_PER_CH,nchs=$FEMU_NCHS"
DEV+=",gc_thres_pcent=$FEMU_GC_THRES,gc_thres_pcent_high=$FEMU_GC_THRES_HIGH"
DEV+=",$FEMU_NAND_LAT"
DEV+=",namespace_phls=$PHS,subsys=fdpss"

CMD=("$FEMU_BIN"
  -name "FEMU-FDP-pilot-$POL,debug-threads=on"
  -uuid "$FEMU_RUN_ID"
  -enable-kvm -cpu host -smp "$FEMU_GUEST_CPUS" -m "$FEMU_GUEST_MEM"
  -device "$SUBSYS"
  -device virtio-scsi-pci,id=scsi0 -device scsi-hd,drive=hd0
  -drive "file=$FEMU_GUEST_IMAGE,if=none,aio=native,cache=none,format=qcow2,id=hd0"
  -device "$DEV"
  -net "user,hostfwd=tcp::${FEMU_SSH_PORT}-:22" -net nic,model=virtio
  -nographic
  -qmp "unix:${FEMU_QMP_SOCK},server,nowait")

echo "[femu] policy=$POL nruh=$NRUH namespace_phls=$PHS isolation_mode=$FEMU_ISOLATION_MODE"
echo "[femu] RU ${FEMU_BLKS_PER_PL}개, 사용자 ${FEMU_DEVSZ_MB} MiB, GC ${FEMU_GC_THRES}/${FEMU_GC_THRES_HIGH}, 데이터 파일 ${FEMU_MBE_FILE:-없음(RAM)}"
echo "[femu] 명령: FEMU_MBE_FILE=${FEMU_MBE_FILE} $(printf '%q ' "${CMD[@]}")"

if [[ "$FEMU_SUDO" == "1" ]]; then
  exec sudo -n env FEMU_MBE_FILE="$FEMU_MBE_FILE" "${CMD[@]}"
else
  exec env FEMU_MBE_FILE="$FEMU_MBE_FILE" "${CMD[@]}"
fi
