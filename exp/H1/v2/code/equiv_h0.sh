#!/usr/bin/env bash
# One-time check that the H1 v2 code reproduces the H0 v3 Rewrite endpoint
# (H1-b τ = 0), which is reused instead of rerun (~25 min at H0 v3 speed).
# Runs the H0 policy `rewrite` with the H1 v2 generator / guest / FEMU trace:
# g24, seed 42, QD1 latency-off, the full H0 v3 pre (3x in 12 chunks), the
# full-B rewrite, then post 0.5x in 4 chunks. h1_analyze.py check must find the
# FTL state hash and c0 counters equal to main_g24_rewrite_s42_01 at every
# snapshot (the Stale and Redirect paths are checked by every campaign run up
# to its intervention). QD1 is deterministic, so equal state at post_04 with
# equal later input stays equal to the end of the H0 run.
# Result: exp/H1/v2/_ops/equiv_h0.json, which campaign.sh requires.
set -uo pipefail
HERE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(cd "$HERE/../../../.." && pwd)
RUNS=$ROOT/exp/H1/v2/runs
OPS=$ROOT/exp/H1/v2/_ops
mkdir -p "$RUNS" "$OPS"
name=equiv_g24_rewrite_s42_$(hostname -s)
dir=$RUNS/$name
[[ -e $dir ]] && dir=${dir}_$(date +%m%d%H%M)
echo "equivalence run: $dir"
python3 "$HERE/run_vm.py" --geometry g24 --policy rewrite --qd 1 --latency off --seed 42 \
    --pre-writes 18874368 --pre-chunks 12 --post-writes 3145728 --post-chunks 4 \
    --result-dir "$dir" > "$OPS/$(basename "$dir").stdout" 2>&1
rc=$?
python3 "$ROOT/exp/H1/v2/analysis/h1_analyze.py" check "$dir" \
    --baseline "$ROOT/exp/H0/v3/runs/main_g24_rewrite_s42_01" | tee "$OPS/$(basename "$dir").check"
check=${PIPESTATUS[0]}
python3 - "$dir" "$OPS/equiv_h0.json" "$rc" "$check" <<'EOF'
import json, socket, sys, time
from pathlib import Path
run, out, rc, check = Path(sys.argv[1]), Path(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
qemu = json.loads((run / "manifest.json").read_text())["qemu_sha256"] if rc == 0 else None
ok = rc == 0 and check == 0
out.write_text(json.dumps({"pass": ok, "host": socket.gethostname(), "run": run.name,
                           "qemu_sha256": qemu, "run_rc": rc, "check_rc": check,
                           "time": time.strftime("%F %T")}, indent=2) + "\n")
print("EQUIV_H0_PASS" if ok else f"EQUIV_H0_FAIL (run rc {rc}, check rc {check})")
sys.exit(0 if ok else 1)
EOF
