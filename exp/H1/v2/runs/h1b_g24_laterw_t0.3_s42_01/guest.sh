#!/usr/bin/env bash
# H1 v2 guest sequence: H0 v3 phases with the intervention moved to post
# chunk AT. Every phase drains before the next one, and each boundary is an
# NVMe flush, which makes FEMU emit H0_STATE (and H1_BMAP).
#   stale / redirect / rewrite : H0 v3 policies (endpoints, validation)
#   delay AT          : B stays on PID1 for post chunks 1..AT, PID2 after   (H1-a)
#   late_rewrite AT   : B on PID2 from the shift; after post chunk AT, rewrite
#                       the old B that chunks 1..AT did not overwrite        (H1-b)
#   oracle_rewrite AT : B on PID2 from the shift; at the shift, rewrite the
#                       old B that chunks 1..AT will not overwrite  (H1-b control:
#                       same blocks as late_rewrite AT, moved early)
# Post chunk seeds and sizes are the H0 v3 ones, so the application request
# stream is the same for every policy; only PIDs and the rewrite differ.
set -euo pipefail
POLICY=$1          # stale | redirect | rewrite | delay | late_rewrite | oracle_rewrite
PRE_WRITES=$2      # 4 KiB preconditioning writes in total
PRE_CHUNKS=$3
POST_WRITES=$4     # 4 KiB post-shift writes in total
RATE=$5            # IOPS cap; 0 = unthrottled
SEED=$6
BLOCKS=$7          # namespace in 128 KiB units: 49152 / 98304 / 196608 (6 / 12 / 24 GiB)
POST_CHUNKS=$8
QD=$9              # 1 (deterministic order) or 32
AT=${10}           # post chunk index of the intervention (0 for H0 policies)
OUT=/tmp/h1-v2-output
DEV=/dev/ng0n1
NS=/dev/nvme0n1
CTRL=/dev/nvme0
GEN=/tmp/h1-v2-input/generator
mkdir -p "$OUT/phases" "$OUT/snapshots"
exec > >(tee "$OUT/guest.log") 2> >(tee "$OUT/guest.stderr" >&2)
test -c "$DEV"
test -b "$NS"
test "$(blockdev --getsize64 "$NS")" -eq "$((BLOCKS * 131072))"
test -z "$(lsblk -nr -o MOUNTPOINT "$NS" | tr -d '[:space:]')"
test "$((PRE_WRITES % PRE_CHUNKS))" -eq 0
test "$((POST_WRITES % POST_CHUNKS))" -eq 0
CHUNK=$((POST_WRITES / POST_CHUNKS))
# switch: last post chunk with B on PID1. rewrite_at: rewrite after this many
# post chunks (-1 = none). skip: post chunks whose B writes the rewrite excludes.
switch=0 rewrite_at=-1 skip=0
case $POLICY in
    stale)          switch=$POST_CHUNKS ;;
    redirect)       ;;
    rewrite)        rewrite_at=0 ;;
    delay)          switch=$AT ;;
    late_rewrite)   rewrite_at=$AT skip=$AT ;;
    oracle_rewrite) rewrite_at=0 skip=$AT ;;
    *) echo "unknown policy $POLICY" >&2; exit 2 ;;
esac
case $POLICY in
    stale|redirect|rewrite) test "$AT" -eq 0 ;;
    *) test "$AT" -ge 1 && test "$AT" -lt "$POST_CHUNKS" ;;
esac
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
    local name=$1
    shift
    "$GEN" --device "$DEV" --namespace-blocks "$BLOCKS" --qd "$QD" --rate "$RATE" "$@" \
        > "$OUT/phases/${name}.json" 2> "$OUT/phases/${name}.stderr"
    snapshot "$name"
}
rewrite() {
    local args=()
    for ((j=1;j<=skip;j++)); do args+=(--skip-shift "$((SEED + j * 7919))"); done
    (( skip )) && args+=(--skip-writes "$CHUNK")
    phase rewrite --phase rewrite --placement redirect --seed "$SEED" "${args[@]}"
}
# Placement only affects the shift phase; fill and pre use the same PIDs under
# both labels. The label follows post chunk 1 so phase JSON matches its H0 run.
first=redirect
(( switch >= 1 )) && first=stale
snapshot 000_before
phase fill --phase fill --placement "$first" --writes "$BLOCKS" --seed "$SEED"
for ((i=1;i<=PRE_CHUNKS;i++)); do
    phase "pre_$(printf '%02d' "$i")" --phase initial --placement "$first" \
        --writes "$((PRE_WRITES / PRE_CHUNKS))" --seed "$((SEED + i * 1009))"
done
(( rewrite_at == 0 )) && rewrite
# Post chunk seeds depend only on the chunk index, never on the policy.
for ((i=1;i<=POST_CHUNKS;i++)); do
    placement=redirect
    (( i <= switch )) && placement=stale
    phase "post_$(printf '%02d' "$i")" --phase shift --placement "$placement" \
        --writes "$CHUNK" --seed "$((SEED + i * 7919))"
    (( i == rewrite_at )) && rewrite
done
sync
chmod -R a+rX "$OUT"
echo H1V2_GUEST_PASS
