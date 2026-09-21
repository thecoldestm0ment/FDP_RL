#!/usr/bin/env python3
"""Render and optionally run count-bounded FDP fio phases.

The default action only writes job files and a plan.  Execution requires both
allow_execute=true in the config and an exact --confirm-device argument.
"""

from __future__ import annotations

import argparse
import json
import math
import os
from pathlib import Path
import shutil
import subprocess
import sys


REGION_ORDER = ("A", "B", "C")


def fail(message: str) -> None:
    raise ValueError(message)


def aligned(value: int, block_size: int) -> bool:
    return value >= 0 and value % block_size == 0


def allocate(total: int, weights: dict[str, int], minimum_one: bool) -> dict[str, int]:
    active = [name for name in REGION_ORDER if weights.get(name, 0) > 0]
    if not active:
        fail("at least one region weight must be positive")
    base = {name: 0 for name in REGION_ORDER}
    remaining = total
    if minimum_one:
        if total < len(active):
            fail(f"total {total} is smaller than active region count {len(active)}")
        for name in active:
            base[name] = 1
        remaining -= len(active)
    weight_sum = sum(weights[name] for name in active)
    raw = {name: remaining * weights[name] / weight_sum for name in active}
    for name in active:
        base[name] += math.floor(raw[name])
    left = total - sum(base.values())
    ranked = sorted(active, key=lambda name: (-(raw[name] - math.floor(raw[name])), REGION_ORDER.index(name)))
    for name in ranked[:left]:
        base[name] += 1
    return base


def validate(config: dict) -> None:
    for key in ("device", "block_device", "namespace_bytes", "block_size", "seed", "iodepth", "regions", "phases"):
        if key not in config:
            fail(f"missing config field: {key}")
    block_size = int(config["block_size"])
    namespace_bytes = int(config["namespace_bytes"])
    if block_size != 4096:
        fail("H0 minimum generator requires block_size=4096")
    if not aligned(namespace_bytes, block_size) or namespace_bytes == 0:
        fail("namespace_bytes must be a positive block-aligned value")
    intervals = []
    for name in REGION_ORDER:
        region = config["regions"].get(name)
        if not region:
            fail(f"missing region: {name}")
        offset = int(region["offset_bytes"])
        length = int(region["length_bytes"])
        if not aligned(offset, block_size) or not aligned(length, block_size) or length == 0:
            fail(f"region {name} is not block aligned")
        if offset + length > namespace_bytes:
            fail(f"region {name} exceeds namespace")
        intervals.append((offset, offset + length, name))
    intervals.sort()
    for (_, end, left), (start, _, right) in zip(intervals, intervals[1:]):
        if end > start:
            fail(f"regions overlap: {left}, {right}")
    if int(config["iodepth"]) < 1:
        fail("iodepth must be positive")
    if not config["phases"]:
        fail("at least one phase is required")
    seen = set()
    for phase in config["phases"]:
        name = phase.get("name", "")
        if not name or name in seen or not name.replace("_", "").replace("-", "").isalnum():
            fail(f"invalid or duplicate phase name: {name!r}")
        seen.add(name)
        writes = int(phase.get("host_writes", 0))
        if writes < 1:
            fail(f"phase {name}: host_writes must be positive")
        weights = phase.get("weights", {})
        pids = phase.get("pids", {})
        for region in REGION_ORDER:
            weight = int(weights.get(region, 0))
            if weight < 0:
                fail(f"phase {name}: negative weight for {region}")
            if weight and region not in pids:
                fail(f"phase {name}: missing PID for active region {region}")
            if region in pids and not 0 <= int(pids[region]) <= 0xFFFF:
                fail(f"phase {name}: invalid PID for {region}")


def build_plan(config: dict) -> dict:
    total_iops = config.get("aggregate_iops")
    cumulative = 0
    phases = []
    for phase_index, phase in enumerate(config["phases"]):
        weights = {name: int(phase.get("weights", {}).get(name, 0)) for name in REGION_ORDER}
        writes = int(phase["host_writes"])
        counts = allocate(writes, weights, minimum_one=False)
        if phase.get("unique_lba", False):
            for name in REGION_ORDER:
                capacity = int(config["regions"][name]["length_bytes"]) // int(config["block_size"])
                if counts[name] > capacity:
                    fail(f"phase {phase['name']}: unique writes exceed region {name} capacity")
        active_weights = {name: counts[name] for name in REGION_ORDER}
        depths = allocate(int(config["iodepth"]), active_weights, minimum_one=True)
        rates = allocate(int(total_iops), active_weights, minimum_one=True) if total_iops else None
        jobs = []
        phase_seed = int(phase.get(
            "randseed_base", int(config["seed"]) + phase_index * 1009
        ))
        for region_index, name in enumerate(REGION_ORDER):
            if counts[name] == 0:
                continue
            region = config["regions"][name]
            jobs.append({
                "region": name,
                "offset_bytes": int(region["offset_bytes"]),
                "length_bytes": int(region["length_bytes"]),
                "host_writes": counts[name],
                "pid": int(phase["pids"][name]),
                "iodepth": depths[name],
                "rate_iops": rates[name] if rates else None,
                "randseed": phase_seed + region_index,
                "unique_lba": bool(phase.get("unique_lba", False)),
            })
        phases.append({
            "name": phase["name"],
            "kind": phase.get("kind", "workload"),
            "start_host_write": cumulative,
            "end_host_write": cumulative + writes,
            "host_writes": writes,
            "jobs": jobs,
        })
        cumulative += writes
    return {
        "case": config.get("case", "unspecified"),
        "seed": int(config["seed"]),
        "block_size": int(config["block_size"]),
        "namespace_bytes": int(config["namespace_bytes"]),
        "aggregate_iops": total_iops,
        "total_host_writes": cumulative,
        "phases": phases,
    }


def render_job(config: dict, phase: dict) -> str:
    lines = [
        "[global]",
        f"filename={config['device']}",
        "ioengine=io_uring_cmd",
        "cmd_type=nvme",
        "rw=randwrite",
        f"bs={config['block_size']}",
        "fdp=1",
        "thread=1",
        "numjobs=1",
        "time_based=0",
        "group_reporting=0",
        "percentile_list=99.0:99.9",
        "",
    ]
    for job in phase["jobs"]:
        lines.extend([
            f"[{phase['name']}_{job['region']}]",
            f"offset={job['offset_bytes']}",
            f"size={job['length_bytes']}",
            f"io_size={job['host_writes'] * int(config['block_size'])}",
            f"iodepth={job['iodepth']}",
            f"fdp_pli={job['pid']}",
            f"randseed={job['randseed']}",
            "randrepeat=1",
            f"norandommap={0 if job['unique_lba'] else 1}",
        ])
        if job["rate_iops"] is not None:
            lines.append(f"rate_iops={job['rate_iops']}")
        lines.append("")
    return "\n".join(lines)


def ensure_device(config: dict, confirm_device: str | None) -> None:
    if confirm_device != config["device"]:
        fail(f"--confirm-device must exactly match {config['device']}")
    for key in ("device", "block_device"):
        if not os.path.exists(config[key]):
            fail(f"device is missing: {config[key]}")
    size = int(subprocess.check_output(["blockdev", "--getsize64", config["block_device"]], text=True).strip())
    if size != int(config["namespace_bytes"]):
        fail(f"namespace size mismatch: expected {config['namespace_bytes']}, got {size}")
    mounts = subprocess.check_output(["lsblk", "-nr", "-o", "MOUNTPOINT", config["block_device"]], text=True)
    if any(line.strip() for line in mounts.splitlines()):
        fail(f"experimental namespace is mounted: {config['block_device']}")


def execute(config: dict, plan: dict, output_dir: Path) -> None:
    for phase in plan["phases"]:
        job_path = output_dir / f"{phase['name']}.fio"
        json_path = output_dir / f"{phase['name']}.json"
        stderr_path = output_dir / f"{phase['name']}.stderr"
        with stderr_path.open("w") as stderr:
            result = subprocess.run(
                ["fio", "--output-format=json+", f"--output={json_path}", str(job_path)],
                text=True,
                stderr=stderr,
                check=False,
            )
        if result.returncode != 0:
            fail(f"fio failed in phase {phase['name']} with exit {result.returncode}")
        data = json.loads(json_path.read_text())
        completed = sum(int(job["write"]["io_bytes"]) // int(config["block_size"]) for job in data["jobs"])
        if completed != phase["host_writes"]:
            fail(f"phase {phase['name']}: expected {phase['host_writes']} writes, completed {completed}")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", required=True, type=Path)
    parser.add_argument("--output-dir", required=True, type=Path)
    parser.add_argument("--execute", action="store_true")
    parser.add_argument("--confirm-device")
    args = parser.parse_args()

    config = json.loads(args.config.read_text())
    validate(config)
    plan = build_plan(config)
    if args.output_dir.exists() and any(args.output_dir.iterdir()):
        fail(f"output directory is not empty: {args.output_dir}")
    args.output_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(args.config, args.output_dir / "config.json")
    (args.output_dir / "plan.json").write_text(json.dumps(plan, indent=2) + "\n")
    for phase in plan["phases"]:
        (args.output_dir / f"{phase['name']}.fio").write_text(render_job(config, phase))

    if args.execute:
        if not config.get("allow_execute", False):
            fail("config has allow_execute=false")
        ensure_device(config, args.confirm_device)
        execute(config, plan, args.output_dir)
    else:
        print(json.dumps(plan, indent=2))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"fdp_workload: {exc}", file=sys.stderr)
        raise SystemExit(2)
