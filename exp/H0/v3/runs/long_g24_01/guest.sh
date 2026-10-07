#!/usr/bin/env bash
# H0 v3 guest sequence. Every phase drains before the next one, and each
# boundary is an NVMe flush, which makes FEMU emit H0_STATE.
#   smoke:  fill -> precondition chunks
#   policy: fill -> precondition chunks -> [rewrite] -> post (shift)
set -euo pipefail
POLICY=$1          # smoke | stale | redirect | rewrite
PRE_WRITES=$2      # 4 KiB preconditioning writes in total
PRE_CHUNKS=$3
POST_WRITES=$4     # 4 KiB post-shift writes (ignored by smoke)
RATE=$5            # IOPS cap; 0 = unthrottled
SEED=$6
BLOCKS=$7          # namespace in 128 KiB units: 49152 / 98304 / 196608 (6 / 12 / 24 GiB)
OUT=/tmp/h0-v3-output
DEV=/dev/ng0n1
NS=/dev/nvme0n1
CTRL=/dev/nvme0
GEN=/tmp/h0-v3-input/generator
mkdir -p "$OUT/phases" "$OUT/snapshots"
exec > >(tee "$OUT/guest.log") 2> >(tee "$OUT/guest.stderr" >&2)
test -c "$DEV"
test -b "$NS"
test "$(blockdev --getsize64 "$NS")" -eq "$((BLOCKS * 131072))"
test -z "$(lsblk -nr -o MOUNTPOINT "$NS" | tr -d '[:space:]')"
test "$((PRE_WRITES % PRE_CHUNKS))" -eq 0
nvme fdp configs "$DEV" -e 1 -o json > "$OUT/fdp-config.json"
uname -a > "$OUT/kernel.txt"
lsblk -b -o NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT > "$OUT/lsblk.txt"
snapshot() {
    local tag=$1
    nvme flush "$NS" -n 1
    nvme get-log "$CTRL" --log-id=0xc0 --log-len=512 --raw-binary > "$OUT/snapshots/${tag}.c0.bin"
    nvme fdp status "$DEV" -o json > "$OUT/snapshots/${tag}.fdp-status.json"
    echo "$tag" >> "$OUT/snapshot-order.txt"
}
phase() {
    local name=$1 kind=$2 placement=$3 writes=$4 seed=$5
    "$GEN" --device "$DEV" --phase "$kind" --placement "$placement" \
        --namespace-blocks "$BLOCKS" --writes "$writes" --seed "$seed" \
        --qd 32 --rate "$RATE" > "$OUT/phases/${name}.json" \
        2> "$OUT/phases/${name}.stderr"
    snapshot "$name"
}
# Placement only affects the shift phase; earlier phases use the same PIDs.
placement=stale
[[ "$POLICY" == redirect || "$POLICY" == rewrite ]] && placement=redirect
snapshot 000_before
phase fill fill "$placement" "$BLOCKS" "$SEED"
for ((i=1;i<=PRE_CHUNKS;i++)); do
    phase "pre_$(printf '%02d' "$i")" initial "$placement" \
        "$((PRE_WRITES / PRE_CHUNKS))" "$((SEED + i * 1009))"
done
if [[ "$POLICY" != smoke ]]; then
    if [[ "$POLICY" == rewrite ]]; then
        phase rewrite rewrite redirect "$((BLOCKS * 32 / 3))" "$SEED"
    fi
    phase post shift "$placement" "$POST_WRITES" "$SEED"
fi
sync
chmod -R a+rX "$OUT"
echo H0V3_GUEST_PASS
