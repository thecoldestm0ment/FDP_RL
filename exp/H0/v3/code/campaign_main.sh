#!/usr/bin/env bash
# H0 v3 main campaign: 3 seeds x {stale, redirect, rewrite}, QD1 latency-off.
# Locked: g24, X = 3x capacity (12 pre chunks), Y = 4x capacity (32 post
# chunks), rate unlimited. Runs in seed order so each seed completes as a set.
# Resumable: a run whose exit-status.json has guest_rc 0 is skipped; a failed
# run directory is renamed aside (failed_<name>_<time>) and retried once.
set -uo pipefail
ROOT=$(cd "$(dirname "$0")/../../../.." && pwd)
RUNS=$ROOT/exp/H0/v3/runs
OPS=$ROOT/exp/H0/v3/_ops
mkdir -p "$OPS"
LOG=$OPS/campaign_main.log
CAP=6291456                       # 4 KiB writes per g24 capacity
log() { echo "$(date '+%F %T') $*" | tee -a "$LOG"; }

preflight() {
    [[ -c /dev/kvm ]] || { log "PREFLIGHT FAIL: /dev/kvm missing"; return 1; }
    findmnt -n /tmp/h0-v2-zram >/dev/null || { log "PREFLIGHT FAIL: zram not mounted"; return 1; }
    pgrep -x qemu-system-x86 >/dev/null && { log "PREFLIGHT FAIL: qemu already running"; return 1; }
    return 0
}

ok() { [[ -f $1/exit-status.json ]] && grep -q '"guest_rc": 0' "$1/exit-status.json"; }

for seed in 42 43 44; do
    for policy in stale redirect rewrite; do
        name=main_g24_${policy}_s${seed}_01
        dir=$RUNS/$name
        if ok "$dir"; then log "SKIP $name (done)"; continue; fi
        for attempt in 1 2; do
            if [[ -e $dir ]]; then
                mv "$dir" "$RUNS/failed_${name}_$(date +%m%d%H%M)"
                log "MOVED failed $name aside"
            fi
            preflight || exit 1
            log "START $name attempt $attempt"
            python3 "$ROOT/exp/H0/v3/code/run_vm.py" --geometry g24 --policy "$policy" \
                --qd 1 --latency off --seed "$seed" \
                --pre-writes $((CAP * 3)) --pre-chunks 12 \
                --post-writes $((CAP * 4)) --post-chunks 32 \
                --result-dir "$dir" >> "$OPS/${name}.stdout" 2>&1
            if ok "$dir"; then log "DONE $name"; break; fi
            log "FAIL $name attempt $attempt"
            [[ $attempt == 2 ]] && { log "STOP: $name failed twice"; exit 1; }
        done
    done
done
log "CAMPAIGN COMPLETE"
