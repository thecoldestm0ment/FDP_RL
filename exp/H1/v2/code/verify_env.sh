#!/usr/bin/env bash
# Environment check before the H1 v2 campaign (~20 min on the reference PC).
# One short QD1 late_rewrite run: g24, seed 42, pre 0.5x in 2 chunks, post
# 0.5x in 4 chunks, rewrite of the untouched old B after post chunk 2. It
# passes when
#   1. h1_analyze.py check passes against runs/verify_ref_g24_late_rewrite_s42_
#      emberygram, the same run made on the PC that ran H0 v3 (FTL state
#      through post_02, LBA streams, H1_BMAP rewrite accounting), and
#   2. the FTL state hash at every snapshot, including after the rewrite,
#      equals verify_reference.json (recorded from that run).
# A pass means this PC reproduces that PC's FTL bit for bit, so the H0 v3
# runs stay valid as H1 endpoints. campaign.sh refuses to start without it.
# (The H0 v3 equivalence of the H1 code itself is checked by every campaign
# run: its FTL state must equal the H0 v3 main run up to the intervention.)
# Usage: verify_env.sh            (compare)
#        verify_env.sh --record   (write verify_reference.json; reference PC only)
set -uo pipefail
HERE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(cd "$HERE/../../../.." && pwd)
RUNS=$ROOT/exp/H1/v2/runs
OPS=$ROOT/exp/H1/v2/_ops
REF=$HERE/verify_reference.json
mkdir -p "$RUNS" "$OPS"
name=verify_g24_late_rewrite_s42_$(hostname -s)_$(date +%m%d%H%M)
dir=$RUNS/$name
echo "verify run: $dir"
python3 "$HERE/run_vm.py" --geometry g24 --policy late_rewrite --at 2 \
    --qd 1 --latency off --seed 42 \
    --pre-writes 3145728 --pre-chunks 2 --post-writes 3145728 --post-chunks 4 \
    --result-dir "$dir" > "$OPS/$name.stdout" 2>&1
rc=$?
python3 "$ROOT/exp/H1/v2/analysis/h1_analyze.py" check "$dir" \
    --baseline "$RUNS/verify_ref_g24_late_rewrite_s42_emberygram" | tee "$OPS/$name.check"
check=${PIPESTATUS[0]}
python3 - "$dir" "$REF" "$OPS/verify_env.json" "$rc" "$check" "${1:-}" <<'EOF'
import hashlib, json, re, socket, sys, time
from pathlib import Path
run, ref, out, rc, check, mode = Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3]), \
    int(sys.argv[4]), int(sys.argv[5]), sys.argv[6]
order = (run / "guest/snapshot-order.txt").read_text().split() if rc == 0 else []
states = re.findall(r"H0_STATE .*?state=([0-9a-f]+)", (run / "femu.log").read_text(errors="replace")) \
    if rc == 0 else []
got = dict(zip(order, states))
qemu = json.loads((run / "manifest.json").read_text())["qemu_sha256"] if rc == 0 else None
if mode == "--record":
    if rc or check:
        sys.exit("not recording: the run or its check failed")
    ref.write_text(json.dumps({"run": run.name, "qemu_sha256": qemu, "states": got}, indent=2) + "\n")
    print(f"recorded {len(got)} snapshot hashes in {ref}")
want = json.loads(ref.read_text())["states"] if ref.exists() else {}
diff = [t for t in want if got.get(t) != want[t]] if want else ["no reference"]
ok = rc == 0 and check == 0 and not diff and len(got) == len(want)
for t in want:
    print(f"  {t:<12} {got.get(t, '-')[:16]:<16} {'=' if got.get(t) == want[t] else '!= ' + want[t][:16]}")
out.write_text(json.dumps({"pass": ok, "host": socket.gethostname(), "run": run.name,
                           "qemu_sha256": qemu, "run_rc": rc,
                           "check_rc": check, "mismatch": diff,
                           "time": time.strftime("%F %T")}, indent=2) + "\n")
print("VERIFY_ENV_PASS" if ok else f"VERIFY_ENV_FAIL (run rc {rc}, check rc {check}, mismatch {diff[:3]})")
sys.exit(0 if ok else 1)
EOF
