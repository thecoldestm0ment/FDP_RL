#!/usr/bin/env bash
# =====================================================================
# 00_build.sh — RocksDB 7.2.2 + Lan 패치로 db_bench 빌드
#
#   ./00_build.sh pc     인구: PC용 (TorFS 없음, 일반 파일시스템)
#   ./00_build.sh femu   지윤: FEMU 게스트용 (TorFS + Single PID 패치)
#
# 결과: $WORK/bin/db_bench_pc 또는 $WORK/bin/db_bench_torfs
# 필요한 것(직접 설치):
#   공통: git, make, g++, libgflags-dev, libsnappy-dev, liblz4-dev, libzstd-dev, zlib1g-dev
#   femu: + liburing, xNVMe (TorFS README / Lan 저장소 compile/readme.md 참고)
# =====================================================================
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
set -a; . "$HERE/config.env"; set +a

MODE="${1:-}"
if [[ "$MODE" != "pc" && "$MODE" != "femu" ]]; then
  echo "사용법: $0 pc|femu"; exit 1
fi

JOBS="${JOBS:-8}"
[[ "$JOBS" =~ ^[1-9][0-9]*$ ]] || { echo "JOBS는 양의 정수여야 함"; exit 1; }
fail_tree() {
  echo "[build] $*" >&2
  echo "기존 소스는 그대로 둠. 원인 확인 후 다시, 또는 WORK=새_절대경로 ./00_build.sh $MODE 로 따로 빌드" >&2
  exit 1
}
SRC="$WORK/src"; BIN="$WORK/bin"
mkdir -p "$SRC" "$BIN"

# 1) Lan 저장소 (패치와 OPTIONS 파일 참고용)
if [[ ! -d "$SRC/lan_bench" ]]; then
  git clone https://github.com/sijielan/FDP_Benchmarking.git "$SRC/lan_bench"
fi
git -C "$SRC/lan_bench" rev-parse --is-inside-work-tree >/dev/null 2>&1 || fail_tree "Lan 경로가 Git 저장소가 아님"
[[ -z "$(git -C "$SRC/lan_bench" status --porcelain)" ]] || fail_tree "Lan 저장소에 변경 사항이 있음. 자동 checkout 중단"
[[ "$LAN_REPO_COMMIT" =~ ^[0-9a-f]{40}$ ]] || { echo "LAN_REPO_COMMIT은 전체 SHA(40자)여야 함"; exit 1; }
if ! git -C "$SRC/lan_bench" cat-file -e "$LAN_REPO_COMMIT^{commit}"; then
  git -C "$SRC/lan_bench" fetch origin "$LAN_REPO_COMMIT"
fi
git -C "$SRC/lan_bench" checkout --detach "$LAN_REPO_COMMIT"
[[ "$(git -C "$SRC/lan_bench" rev-parse HEAD)" == "$LAN_REPO_COMMIT" ]] || fail_tree "Lan commit mismatch"
LAN_PATCH="$SRC/lan_bench/RocksDB/compile/rocksDB_patch.txt"

# 2) RocksDB 7.2.2 (모드별 별도 트리: TorFS가 빌드 시 플러그인으로 들어감)
TREE="$SRC/rocksdb-$MODE"
if [[ ! -d "$TREE" ]]; then
  git clone --depth 1 --branch "$ROCKSDB_TAG" https://github.com/facebook/rocksdb.git "$TREE"
  [[ "$(git -C "$TREE" rev-parse HEAD)" == "$ROCKSDB_COMMIT" ]] || fail_tree "RocksDB tag does not resolve to fixed commit"
  ( cd "$TREE" && git apply "$LAN_PATCH" ) || fail_tree "Lan 패치 적용 실패"
  echo "[build] Lan 패치 적용: L0–L3 -> MEDIUM, L4 -> LONG, L5+ -> EXTREME"
fi

PLUGINS=""
if [[ "$MODE" == "femu" ]]; then
  # 3) TorFS: Lan이 쓴 커밋 + Single PID 패치(TORFS_FORCE_PID 환경변수)
  if [[ ! -d "$TREE/plugin/torfs" ]]; then
    git clone https://github.com/SamsungDS/TorFS.git "$TREE/plugin/torfs"
    ( cd "$TREE/plugin/torfs" && git checkout -q "$TORFS_COMMIT" \
        && git apply "$HERE/patches/torfs_force_pid.patch" ) || fail_tree "TorFS checkout/PID 패치 적용 실패"
    echo "[build] TorFS $TORFS_COMMIT + torfs_force_pid.patch 적용"
  fi
  if ! pkg-config --exists xnvme 2>/dev/null; then
    echo "[build] xNVMe pkg-config 정보 없음. 설치 및 PKG_CONFIG_PATH 확인 후 재실행."; exit 1
  fi
  PLUGINS="torfs"
fi

# 재실행에서도 commit·패치 검증. 중간 실패 디렉터리를 정상 소스로 취급하지 않음.
[[ "$(git -C "$TREE" rev-parse HEAD)" == "$ROCKSDB_COMMIT" ]] || fail_tree "RocksDB base mismatch"
git -C "$TREE" apply --reverse --check "$LAN_PATCH" || fail_tree "Lan patch missing/different"
if [[ "$MODE" == femu ]]; then
  [[ "$(git -C "$TREE/plugin/torfs" rev-parse HEAD)" == "$TORFS_COMMIT" ]] || fail_tree "TorFS commit mismatch"
  git -C "$TREE/plugin/torfs" apply --reverse --check "$HERE/patches/torfs_force_pid.patch" || fail_tree "PID patch missing/different"
fi

# 4) 빌드
#   GCC 13+ 에서 옛 RocksDB가 <cstdint> 누락으로 실패 -> 미리 include
cd "$TREE"
DEBUG_LEVEL=0 ROCKSDB_DISABLE_JEMALLOC=true DISABLE_WARNING_AS_ERROR=1 \
EXTRA_CXXFLAGS="-include cstdint" ROCKSDB_PLUGINS="$PLUGINS" \
  make -j"$JOBS" db_bench

OUT="$BIN/db_bench_$([[ $MODE == femu ]] && echo torfs || echo pc)"
cp db_bench "$OUT"
python3 "$HERE/runcheck.py" build "$OUT" "$TREE" "$LAN_PATCH"
echo "[build] 완료: $OUT"
"$OUT" --version 2>/dev/null || true
