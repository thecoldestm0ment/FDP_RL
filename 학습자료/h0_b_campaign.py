#!/usr/bin/env python3
"""Execute H0-B sequentially and preserve raw artifacts; analysis is deferred."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import subprocess
import sys
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parents[1]
RESULTS = ROOT / "results/h0_v2"
RUNNER = ROOT / "학습자료/h0_v2_run_vm.py"
REFERENCE = RESULTS / "g12_75_oracle_serial_01"
CASES = ("soft", "rewrite25", "rewrite100")
STATUS = RESULTS / "h0b_campaign_01_status.json"


def fingerprint(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as src:
        for data in iter(lambda: src.read(1024 * 1024), b""):
            digest.update(data)
    return digest.hexdigest()


def main() -> None:
    paths = {case: RESULTS / f"h0b_g12_75_{case}_01" for case in CASES}
    if STATUS.exists() or any(path.exists() for path in paths.values()):
        raise SystemExit("H0-B campaign artifacts already exist; refusing overwrite")
    inputs = [RUNNER, ROOT / "학습자료/h0_v2_guest.sh",
              ROOT / "학습자료/h0_single_gen.c", ROOT / "build-femu/qemu-system-x86_64"]
    hashes = {str(path): fingerprint(path) for path in inputs}
    status = {"status": "running", "analysis": "pending_user_request",
              "started_utc": datetime.now(timezone.utc).isoformat(),
              "input_sha256": hashes, "completed": [], "active": None}
    def save() -> None:
        STATUS.write_text(json.dumps(status, indent=2) + "\n")
    save()
    try:
        for case, result in paths.items():
            if any(fingerprint(path) != hashes[str(path)] for path in inputs):
                raise RuntimeError("campaign input changed between cases")
            status["active"] = case
            save()
            cmd = [sys.executable, str(RUNNER), "--geometry", "g12",
                   "--case", "oracle", "--result-dir", str(result),
                   "--pre-chunks", "4", "--post-chunks", "4",
                   "--rate", "11000", "--prep-qd", "1",
                   "--gc-background", "75", "--intervention", case,
                   "--prestate-reference", str(REFERENCE)]
            subprocess.run(cmd, cwd=ROOT, check=True)
            exits = json.loads((result / "exit-status.json").read_text())
            gate = json.loads((result / "prestate-check.json").read_text())
            if exits != {"guest_rc": 0, "qemu_rc": 0} or not gate["accepted"]:
                raise RuntimeError(f"{case}: execution/state gate failed")
            expected = 0 if case == "soft" else (196608 if case == "rewrite25" else 786432)
            intervention = json.loads((result / "guest/phases/intervention.json").read_text())
            if (intervention["writes"], intervention["completed"], intervention["reads"]) != (expected, expected, expected):
                raise RuntimeError(f"{case}: incomplete intervention I/O")
            for index in range(1, 5):
                phase = json.loads((result / "guest/phases" / f"post_{index:02d}.json").read_text())
                if phase["writes"] != 3145728 or phase["completed"] != 3145728:
                    raise RuntimeError(f"{case}: incomplete post-shift phase")
            status["completed"].append({"case": case, "result": str(result),
                                        "exit_status": exits, "prestate_accepted": True})
            save()
            print(f"H0_B_CASE_COMPLETE {case}", flush=True)
        status["status"] = "complete"
        status["active"] = None
        status["completed_utc"] = datetime.now(timezone.utc).isoformat()
        save()
        print("H0_B_CAMPAIGN_COMPLETE ANALYSIS_DEFERRED", flush=True)
    except Exception as exc:
        status["status"] = "failed"
        status["error"] = str(exc)
        save()
        raise


if __name__ == "__main__":
    main()
