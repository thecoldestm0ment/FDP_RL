#!/usr/bin/env bash
# H1 v2 campaign: H1-a delay and H1-b late_rewrite at post chunk 2 / 4 / 8
# (B turnover τ = 0.6 / 1.2 / 2.4), QD1 latency-off, H0 v3 lengths
# (g24, pre 3x in 12 chunks, post 4x in 32 chunks, rate unlimited).
#   campaign.sh 42                          stage 1: 6 runs (~3.6 h)
#   campaign.sh 43 44                       stage 2: 12 runs (~7.3 h)
#   H1_RUNS="oracle_rewrite:4" campaign.sh 42 43 44  optional control
# Requires a passing verify_env.sh with the current FEMU binary.
# After every run, h1_analyze.py check compares it with its H0 v3 baseline;
# a failed check stops the campaign, also on a rerun (QD1 is deterministic, so a retry would
# fail the same way). A run that does not complete is moved aside
# (failed_<name>_<time>) and retried once. Completed runs are skipped, so the
# same command resumes. After each seed the summary is refreshed in
# analysis/h1_all.*.
set -uo pipefail
HERE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(cd "$HERE/../../../.." && pwd)
RUNS=$ROOT/exp/H1/v2/runs
OPS=$ROOT/exp/H1/v2/_ops
AN=$ROOT/exp/H1/v2/analysis/h1_analyze.py
mkdir -p "$RUNS" "$OPS"
LOG=$OPS/campaign.log
CAP=6291456                       # 4 KiB writes per g24 capacity
log() { echo "$(date '+%F %T') $*" | tee -a "$LOG"; }

[[ $# -ge 1 ]] || { echo "usage: $0 SEED... (e.g. $0 42)"; exit 2; }
# policy:post-chunk items; chunk c is τ = 0.3 c
PLAN="${H1_RUNS:-delay:2 delay:4 delay:8 late_rewrite:2 late_rewrite:4 late_rewrite:8}"

preflight() {
    [[ -c /dev/kvm ]] || { log "PREFLIGHT FAIL: /dev/kvm missing (setup_host.sh --apply)"; return 1; }
    findmnt -n /tmp/h0-v2-zram >/dev/null || { log "PREFLIGHT FAIL: zram not mounted (setup_host.sh --apply)"; return 1; }
    pgrep -x qemu-system-x86 >/dev/null && { log "PREFLIGHT FAIL: qemu already running"; return 1; }
    python3 - "$OPS/verify_env.json" "$ROOT/build-femu/qemu-system-x86_64" <<'EOF' || { log "PREFLIGHT FAIL: run verify_env.sh first (needs VERIFY_ENV_PASS with this FEMU binary)"; return 1; }
import hashlib, json, socket, sys
from pathlib import Path
v = Path(sys.argv[1])
h = hashlib.sha256(Path(sys.argv[2]).read_bytes()).hexdigest()
r = json.loads(v.read_text()) if v.exists() else {}
ok = r.get("pass") and r.get("qemu_sha256") == h and r.get("host") == socket.gethostname()
sys.exit(0 if ok else 1)
EOF
    return 0
}

ok() { [[ -f $1/exit-status.json ]] && grep -q '"guest_rc": 0' "$1/exit-status.json"; }

name_of() {  # policy at seed
    local tau
    tau=$(awk -v c="$2" 'BEGIN { printf "%.1f", c * 0.3 }')
    case $1 in
        delay)          echo "h1a_g24_delay_t${tau}_s$3_01" ;;
        late_rewrite)   echo "h1b_g24_laterw_t${tau}_s$3_01" ;;
        oracle_rewrite) echo "h1b_g24_oracle_t${tau}_s$3_01" ;;
        *) return 1 ;;
    esac
}

log "CAMPAIGN seeds [$*] plan [$PLAN]"
for seed in "$@"; do
    for b in stale redirect rewrite; do
        [[ -f $ROOT/exp/H0/v3/runs/main_g24_${b}_s${seed}_01/manifest.json ]] || {
            log "STOP: H0 v3 baseline main_g24_${b}_s${seed}_01 missing"; exit 1; }
    done
    for item in $PLAN; do
        policy=${item%%:*} at=${item##*:}
        name=$(name_of "$policy" "$at" "$seed") || { log "STOP: bad plan item $item"; exit 1; }
        dir=$RUNS/$name
        if ok "$dir"; then log "SKIP $name (done)"; fi
        for attempt in 1 2; do
            ok "$dir" && break
            if [[ -e $dir ]]; then
                mv "$dir" "$RUNS/failed_${name}_$(date +%m%d%H%M)"
                log "MOVED failed $name aside"
            fi
            preflight || exit 1
            log "START $name attempt $attempt"
            python3 "$HERE/run_vm.py" --geometry g24 --policy "$policy" --at "$at" \
                --qd 1 --latency off --seed "$seed" \
                --pre-writes $((CAP * 3)) --pre-chunks 12 \
                --post-writes $((CAP * 4)) --post-chunks 32 \
                --result-dir "$dir" >> "$OPS/${name}.stdout" 2>&1
            if ok "$dir"; then log "DONE $name"; break; fi
            log "FAIL $name attempt $attempt"
            [[ $attempt == 2 ]] && { log "STOP: $name failed twice"; exit 1; }
        done
        if python3 "$AN" check "$dir" > "$OPS/${name}.check" 2>&1; then
            log "CHECK PASS $name"
        else
            log "STOP: CHECK FAIL $name (see _ops/${name}.check)"
            exit 1
        fi
    done
    python3 "$AN" summary --seeds 42 43 44 --out "$ROOT/exp/H1/v2/analysis/h1_all" \
        > "$OPS/summary.stdout" 2>&1 && log "SUMMARY updated after seed $seed" \
        || log "SUMMARY failed (see _ops/summary.stdout)"
done
log "CAMPAIGN COMPLETE seeds [$*]"
