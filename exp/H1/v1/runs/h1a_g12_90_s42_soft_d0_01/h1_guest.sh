#!/usr/bin/env bash
set -euo pipefail
PAGES=$1
RATE=$2
MODE=$3
DELAY=$4
SEED=$5
PRESTATE_GATE=$6
SMOKE_WRITES=$7
OUT=/tmp/h0-v2-output
DEV=/dev/ng0n1
NS=/dev/nvme0n1
CTRL=/dev/nvme0
PREP=/tmp/h0-v2-input/h0_single_gen
GEN=/tmp/h0-v2-input/h1_timing_gen
mkdir -p "$OUT/phases" "$OUT/snapshots"
exec > >(tee "$OUT/guest.log") 2> >(tee "$OUT/guest.stderr" >&2)
test -c "$DEV"
test -b "$NS"
test "$(blockdev --getsize64 "$NS")" -eq "$((PAGES * 4096))"
test -z "$(lsblk -nr -o MOUNTPOINT "$NS" | tr -d '[:space:]')"
nvme fdp configs "$DEV" -e 1 -o json > "$OUT/fdp-config.json"
uname -a > "$OUT/kernel.txt"
fio --version > "$OUT/fio-version.txt"
lsblk -b -o NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT > "$OUT/lsblk.txt"
snapshot() {
    local tag=$1
    nvme flush "$NS" -n 1
    nvme get-log "$CTRL" --log-id=0xc0 --log-len=512 --raw-binary > "$OUT/snapshots/${tag}.c0.bin"
    nvme fdp status "$DEV" -o json > "$OUT/snapshots/${tag}.fdp-status.json"
    echo "$tag" >> "$OUT/snapshot-order.txt"
}
run_prep() {
    local name=$1 phase=$2 seed=$3
    "$PREP" --device "$DEV" --phase "$phase" --placement oracle \
        --namespace-pages "$PAGES" --writes "$PAGES" --seed "$seed" \
        --qd 1 --rate "$RATE" > "$OUT/phases/${name}.json" \
        2> "$OUT/phases/${name}.stderr"
    snapshot "$name"
}
snapshot 000_before
if [[ "$SMOKE_WRITES" -gt 0 ]]; then
    "$PREP" --device "$DEV" --phase initial --placement oracle \
        --namespace-pages "$PAGES" --writes "$SMOKE_WRITES" --seed 42 \
        --qd 1 --rate 0 > "$OUT/phases/smoke_prep.json"
    snapshot smoke_prep
else
run_prep fill fill 42
for ((i=1;i<=4;i++)); do
    run_prep "pre_$(printf '%02d' "$i")" initial "$((42+i*1009))"
done
if [[ "$PRESTATE_GATE" -eq 1 ]]; then
    for ((wait_count=0;wait_count<600;wait_count++)); do
        if [[ -f /tmp/h0-v2-input/prestate.reject ]]; then exit 31; fi
        [[ -f /tmp/h0-v2-input/prestate.ok ]] && break
        sleep 1
    done
    test -f /tmp/h0-v2-input/prestate.ok
fi
fi
"$GEN" --device "$DEV" --mode "$MODE" --delay-ru "$DELAY" \
    --namespace-pages "$PAGES" --seed "$SEED" --rate "$RATE" \
    --writes "$([[ "$SMOKE_WRITES" -gt 0 ]] && echo "$SMOKE_WRITES" || echo "$((PAGES*4))")" \
    --hook /tmp/h0-v2-input/h1_boundary.sh \
    > "$OUT/phases/post.json" 2> "$OUT/phases/post.stderr"
snapshot post
sync
chmod -R a+rX "$OUT"
echo H1_GUEST_PASS
