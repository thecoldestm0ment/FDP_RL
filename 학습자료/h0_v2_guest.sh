#!/usr/bin/env bash
set -euo pipefail

CASE=$1
PAGES=$2
PRE_CHUNKS=$3
POST_CHUNKS=$4
RATE=$5
SMOKE_WRITES=$6
PREP_QD=${7:-32}
INTERVENTION=${8:-none}
PRESTATE_GATE=${9:-0}
VERIFY_REWRITE_SAMPLES=${10:-0}
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
    echo "$tag" >> "$OUT/snapshot-order.txt"
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
    run_phase fill fill "$PAGES" 42 "$PREP_QD" "$RATE"
    for ((i=1; i<=PRE_CHUNKS; i++)); do
        run_phase "pre_$(printf '%02d' "$i")" initial "$PAGES" \
            "$((42 + i * 1009))" "$PREP_QD" "$RATE"
    done
    if [[ "$PRESTATE_GATE" -eq 1 ]]; then
        echo PRESTATE_GATE_WAIT
        for ((gate_wait=0; gate_wait<600; gate_wait++)); do
            if [[ -f /tmp/h0-v2-input/prestate.reject ]]; then
                echo "pre-shift state mismatch" >&2
                exit 31
            fi
            [[ -f /tmp/h0-v2-input/prestate.ok ]] && break
            sleep 1
        done
        test -f /tmp/h0-v2-input/prestate.ok
        echo PRESTATE_GATE_PASS
    fi
    if [[ "$INTERVENTION" == rewrite25 || "$INTERVENTION" == rewrite100 ]]; then
        rewrite_writes=$((PAGES / 4))
        [[ "$INTERVENTION" == rewrite25 ]] && rewrite_writes=$((PAGES / 16))
        if [[ "$VERIFY_REWRITE_SAMPLES" -eq 1 ]]; then
            mkdir -p "$OUT/rewrite-samples"
            for ((sample=0; sample<16; sample++)); do
                ordinal=$((sample * (rewrite_writes - 1) / 15))
                lpn=$((PAGES / 4 + (ordinal * 85 + 42) % (PAGES / 4)))
                echo "$sample $ordinal $lpn" >> "$OUT/rewrite-samples/targets.txt"
                dd if="$NS" of="$OUT/rewrite-samples/${sample}.before" bs=4096 skip="$lpn" count=1 iflag=direct status=none
            done
        fi
        run_phase intervention "$INTERVENTION" "$rewrite_writes" 42 1 0
        if [[ "$VERIFY_REWRITE_SAMPLES" -eq 1 ]]; then
            while read -r sample ordinal lpn; do
                dd if="$NS" of="$OUT/rewrite-samples/${sample}.after" bs=4096 skip="$lpn" count=1 iflag=direct status=none
                cmp "$OUT/rewrite-samples/${sample}.before" "$OUT/rewrite-samples/${sample}.after"
            done < "$OUT/rewrite-samples/targets.txt"
            echo REWRITE_SAMPLES_PASS > "$OUT/rewrite-samples/status.txt"
        fi
    elif [[ "$INTERVENTION" == soft ]]; then
        echo '{"phase":"soft","placement":"oracle","writes":0,"completed":0,"reads":0,"elapsed_ns":0}' > "$OUT/phases/intervention.json"
        snapshot intervention
    fi
    for ((i=1; i<=POST_CHUNKS; i++)); do
        run_phase "post_$(printf '%02d' "$i")" shift "$PAGES" \
            "$((10042 + i * 1009))" 32 "$RATE"
    done
fi

sync
chmod -R a+rX "$OUT"
echo H0_V2_GUEST_PASS
