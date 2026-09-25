#!/usr/bin/env bash
set -euo pipefail

CASE=$1
PAGES=$2
PRE_CHUNKS=$3
POST_CHUNKS=$4
RATE=$5
SMOKE_WRITES=$6
OUT=/tmp/h0-v2-output
DEV=/dev/ng0n1
NS=/dev/nvme0n1
CTRL=/dev/nvme0
GEN=/tmp/h0-v2-input/h0_single_gen

mkdir -p "$OUT/phases" "$OUT/snapshots"
exec > >(tee "$OUT/guest.log") 2> >(tee "$OUT/guest.stderr" >&2)

test -c "$DEV"
test -b "$NS"
test "$(blockdev --getsize64 "$NS")" -eq "$((PAGES * 4096))"
test -z "$(lsblk -nr -o MOUNTPOINT "$NS" | tr -d '[:space:]')"
nvme fdp configs "$DEV" -e 1 -o json > "$OUT/fdp-config.json"
uname -a > "$OUT/kernel.txt"
fio --version > "$OUT/fio-version.txt"
nvme version > "$OUT/nvme-version.txt"
lsblk -b -o NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT > "$OUT/lsblk.txt"

snapshot() {
    local tag=$1
    nvme flush "$NS" -n 1
    nvme get-log "$CTRL" --log-id=0xc0 --log-len=512 --raw-binary \
        > "$OUT/snapshots/${tag}.c0.bin"
    nvme fdp status "$DEV" -o json > "$OUT/snapshots/${tag}.fdp-status.json"
}

run_phase() {
    local name=$1 mode=$2 writes=$3 seed=$4 qd=$5 rate=$6
    echo "PHASE_BEGIN $name writes=$writes seed=$seed qd=$qd rate=$rate"
    "$GEN" --device "$DEV" --phase "$mode" --placement "$CASE" \
        --namespace-pages "$PAGES" --writes "$writes" --seed "$seed" \
        --qd "$qd" --rate "$rate" \
        > "$OUT/phases/${name}.json" 2> "$OUT/phases/${name}.stderr"
    snapshot "$name"
    echo "PHASE_END $name"
}

snapshot 000_before
if [[ "$SMOKE_WRITES" -gt 0 ]]; then
    run_phase smoke initial "$SMOKE_WRITES" 42 32 0
else
    run_phase fill fill "$PAGES" 42 32 "$RATE"
    for ((i=1; i<=PRE_CHUNKS; i++)); do
        run_phase "pre_$(printf '%02d' "$i")" initial "$PAGES" \
            "$((42 + i * 1009))" 32 "$RATE"
    done
    for ((i=1; i<=POST_CHUNKS; i++)); do
        run_phase "post_$(printf '%02d' "$i")" shift "$PAGES" \
            "$((10042 + i * 1009))" 32 "$RATE"
    done
fi

sync
chmod -R a+rX "$OUT"
echo H0_V2_GUEST_PASS
