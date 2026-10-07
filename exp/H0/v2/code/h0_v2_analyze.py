#!/usr/bin/env python3
"""Summarize H0 v2 raw counters and FTL trace without changing artifacts."""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import re
import struct


def stats(path: Path) -> dict[str, int]:
    raw = path.read_bytes()
    if len(raw) < 32:
        raise ValueError(f"short vendor log: {path}")
    return {
        "waf_x1000": struct.unpack_from("<I", raw, 0)[0],
        "host_pages": struct.unpack_from("<Q", raw, 8)[0],
        "gc_pages": struct.unpack_from("<Q", raw, 16)[0],
        "nand_pages": struct.unpack_from("<Q", raw, 24)[0],
    }


def fields(line: str) -> dict[str, str]:
    return dict(re.findall(r"(\w+)=([^\s]+)", line))


def summarize(run: Path) -> dict:
    guest = run / "guest"
    snapshots = sorted((guest / "snapshots").glob("*.c0.bin"),
                       key=lambda path: stats(path)["host_pages"])
    if not snapshots:
        raise ValueError(f"no snapshots: {run}")
    rows = []
    prior = stats(snapshots[0])
    for path in snapshots[1:]:
        current = stats(path)
        delta = {key: current[key] - prior[key]
                 for key in ("host_pages", "gc_pages", "nand_pages")}
        phase = path.stem.removesuffix(".c0")
        phase_json = guest / "phases" / f"{phase}.json"
        data = json.loads(phase_json.read_text()) if phase_json.exists() else {}
        row = {"phase": phase, **delta,
               "waf": (delta["nand_pages"] + delta["gc_pages"]) /
                      delta["host_pages"] if delta["host_pages"] else None,
               "iops": data.get("iops"), "p99_ns": data.get("p99_ns"),
               "p999_ns": data.get("p999_ns"),
               "logical_hash": data.get("logical_hash"),
               "pid_hash": data.get("pid_hash"),
               "submitted": data.get("writes"),
               "completed": data.get("completed")}
        row["counter_invariant"] = (
            delta["host_pages"] == data.get("completed") ==
            delta["nand_pages"]
        )
        rows.append(row)
        prior = current
    states = []
    components = []
    gcs = []
    done = []
    for line in (run / "femu.log").open(errors="replace"):
        if "H0_STATE " in line:
            states.append(fields(line))
        elif "H0_COMPONENT " in line:
            components.append(fields(line))
        elif "H0_GC " in line:
            gcs.append(fields(line))
        elif "GC_DONE " in line:
            done.append(fields(line))
    malformed = [gc for gc in gcs if
                 sum(int(gc[k]) for k in ("A", "B", "C", "unknown"))
                 != int(gc["vpc"])]
    prior_host = 0
    for row in rows:
        end_host = prior_host + row["host_pages"]
        phase_gcs = [gc for gc in gcs if prior_host < int(gc["host_pages"]) <= end_host]
        row["gc_events"] = len(phase_gcs)
        row["gc_exact_ipc_12_5"] = sum(int(gc["ipc"]) == 2048 for gc in phase_gcs)
        row["gc_exact_nonforced_ipc_12_5"] = sum(
            gc["kind"] == "BACK" and int(gc["ipc"]) == 2048 for gc in phase_gcs)
        row["gc_force"] = sum(gc["kind"] == "FORCE" for gc in phase_gcs)
        row["gc_A_pages"] = sum(int(gc["A"]) for gc in phase_gcs)
        row["gc_B_pages"] = sum(int(gc["B"]) for gc in phase_gcs)
        row["gc_C_pages"] = sum(int(gc["C"]) for gc in phase_gcs)
        row["gc_unknown_pages"] = sum(int(gc["unknown"]) for gc in phase_gcs)
        row["gc_trace_pages_match"] = sum(int(gc["vpc"]) for gc in phase_gcs) == row["gc_pages"]
        row["gc_min_free"] = min((int(gc["free"]) for gc in phase_gcs), default=None)
        prior_host = end_host
    return {"run": str(run), "phases": rows, "states": states,
            "components": components,
            "gc_trace_pages_match": sum(int(gc["vpc"]) for gc in gcs) == stats(snapshots[-1])["gc_pages"],
            "gc_done_pages_match": sum(int(gc["pages_migrated"]) for gc in done) == stats(snapshots[-1])["gc_pages"],
            "gc_count": len(gcs), "gc_done_count": len(done),
            "gc_composition_mismatch": len(malformed),
            "gc_ipc": [int(gc["ipc"]) for gc in gcs],
            "gc_types": {kind: sum(gc["kind"] == kind for gc in gcs)
                         for kind in ("BACK", "FORCE")}}


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("run", type=Path)
    args = parser.parse_args()
    print(json.dumps(summarize(args.run), indent=2))
