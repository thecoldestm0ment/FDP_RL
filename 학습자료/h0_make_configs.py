#!/usr/bin/env python3
"""Create the fixed H0 case configs selected by the pilot."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


PAGES_PER_NAMESPACE = 786432


def phase(name: str, kind: str, writes: int, weights: dict[str, int],
          pids: dict[str, int], seed: int, unique: bool = False) -> dict:
    item = {
        "name": name,
        "kind": kind,
        "host_writes": writes,
        "weights": weights,
        "pids": pids,
        "randseed_base": seed,
    }
    if unique:
        item["unique_lba"] = True
    return item


def make_case(name: str, precondition_chunks: int,
              measurement_chunks: int) -> dict:
    phases = [phase(
        "initial_fill", "fill", PAGES_PER_NAMESPACE,
        {"A": 25, "B": 25, "C": 50},
        {"A": 0, "B": 1, "C": 1}, 42, True,
    )]
    for index in range(1, precondition_chunks + 1):
        phases.append(phase(
            f"precondition_{index:02d}", "precondition", PAGES_PER_NAMESPACE,
            {"A": 82, "B": 6, "C": 12},
            {"A": 0, "B": 1, "C": 1}, 10000 + index * 100,
        ))

    if name == "stable":
        measure_weights = {"A": 82, "B": 6, "C": 12}
        measure_pids = {"A": 0, "B": 1, "C": 1}
    elif name == "stale":
        measure_weights = {"A": 38, "B": 50, "C": 12}
        measure_pids = {"A": 0, "B": 1, "C": 1}
    else:
        measure_weights = {"A": 38, "B": 50, "C": 12}
        measure_pids = {"A": 0, "B": 2, "C": 1}

    if name in {"rewrite25", "rewrite100"}:
        pages = 49152 if name == "rewrite25" else 196608
        phases.append(phase(
            "intervention", "intervention", pages,
            {"A": 0, "B": 100, "C": 0}, {"B": 2}, 30000, True,
        ))

    for index in range(1, measurement_chunks + 1):
        phases.append(phase(
            f"measurement_{index:02d}", "measurement", PAGES_PER_NAMESPACE,
            measure_weights, measure_pids, 20000 + index * 100,
        ))

    return {
        "case": name,
        "allow_execute": True,
        "device": "/dev/ng0n1",
        "block_device": "/dev/nvme0n1",
        "namespace_bytes": 3221225472,
        "block_size": 4096,
        "seed": 42,
        "iodepth": 32,
        "aggregate_iops": 60000,
        "pilot_selection": {
            "source": "results/h0/pilot/attempt_01",
            "criterion": "first three consecutive precondition chunks with WAF range <= 5 percent of their mean and nonzero GC copied pages",
            "selected_precondition_chunks": precondition_chunks,
            "measurement_chunks": measurement_chunks,
        },
        "regions": {
            "A": {"offset_bytes": 0, "length_bytes": 805306368},
            "B": {"offset_bytes": 805306368, "length_bytes": 805306368},
            "C": {"offset_bytes": 1610612736, "length_bytes": 1610612736},
        },
        "phases": phases,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output-dir", required=True, type=Path)
    parser.add_argument("--precondition-chunks", type=int, default=4)
    parser.add_argument("--measurement-chunks", type=int, default=4)
    args = parser.parse_args()
    args.output_dir.mkdir(parents=True, exist_ok=True)
    for name in ("stable", "oracle", "stale", "rewrite25", "rewrite100"):
        path = args.output_dir / f"{name}.json"
        path.write_text(json.dumps(make_case(
            name, args.precondition_chunks, args.measurement_chunks
        ), indent=2) + "\n")
        print(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
