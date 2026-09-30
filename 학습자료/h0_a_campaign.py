#!/usr/bin/env python3
"""Run the authorized G12 H0-A pairs sequentially, with validity gates."""
from __future__ import annotations

import json
from pathlib import Path
import subprocess
import sys

from h0_v2_analyze import summarize

ROOT = Path(__file__).resolve().parents[1]
RESULTS = ROOT / "results/h0_v2"
RUNNER = ROOT / "학습자료/h0_v2_run_vm.py"
COMPARE = ROOT / "학습자료/h0_v2_compare.py"
RATE = 11000
PRE_CHUNKS = 4
POST_CHUNKS = 4
PREP_QD = 1


def run_case(threshold: int, case: str) -> Path:
    result = RESULTS / f"g12_{threshold}_{case}_serial_01"
    cmd = [sys.executable, str(RUNNER), "--geometry", "g12",
           "--case", case, "--result-dir", str(result),
           "--pre-chunks", str(PRE_CHUNKS), "--post-chunks", str(POST_CHUNKS),
           "--rate", str(RATE), "--prep-qd", str(PREP_QD),
           "--gc-background", str(threshold)]
    subprocess.run(cmd, cwd=ROOT, check=True)
    analysis = summarize(result)
    (result / "analysis.json").write_text(json.dumps(analysis, indent=2) + "\n")
    print(f"CASE_DONE {threshold} {case} {result}", flush=True)
    return result


def compare(threshold: int, oracle: Path, stale: Path) -> dict:
    proc = subprocess.run([sys.executable, str(COMPARE), str(oracle), str(stale)],
                          cwd=ROOT, text=True, capture_output=True)
    record = json.loads(proc.stdout)
    (RESULTS / f"g12_{threshold}_comparison_serial_01.json").write_text(
        json.dumps(record, indent=2) + "\n")
    if proc.returncode:
        raise RuntimeError(f"G12-{threshold} Oracle/Stale validity gate failed: {record['errors']}")
    print(f"PAIR_ACCEPTED G12-{threshold}", flush=True)
    return record


def exact_fraction(oracle: Path, stale: Path) -> tuple[int, int]:
    exact = total = 0
    for path in (oracle, stale):
        analysis = summarize(path)
        for phase in analysis["phases"]:
            if phase["phase"].startswith("post_"):
                total += phase["gc_events"] - phase["gc_force"]
                exact += phase["gc_exact_nonforced_ipc_12_5"]
    return exact, total


def main() -> None:
    if any((RESULTS / f"g12_{threshold}_{case}_serial_01").exists()
           for threshold in (75, 90) for case in ("oracle", "stale")):
        raise SystemExit("campaign result directory already exists")
    o75 = run_case(75, "oracle")
    s75 = run_case(75, "stale")
    compare(75, o75, s75)
    exact, total = exact_fraction(o75, s75)
    sensitivity = total > 0 and exact / total >= 0.95
    (RESULTS / "g12_90_decision_serial_01.json").write_text(json.dumps({
        "g12_75_post_nonforced_gc": total,
        "g12_75_post_exact_ipc_12_5_gc": exact,
        "fraction": exact / total if total else None,
        "run_g12_90": sensitivity,
    }, indent=2) + "\n")
    print(f"SENSITIVITY_DECISION {exact}/{total} run={sensitivity}", flush=True)
    if sensitivity:
        o90 = run_case(90, "oracle")
        s90 = run_case(90, "stale")
        compare(90, o90, s90)
    print("H0_A_CAMPAIGN_PASS", flush=True)


if __name__ == "__main__":
    main()
