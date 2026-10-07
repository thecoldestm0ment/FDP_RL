#!/usr/bin/env python3
"""Build H0 counter, fio latency, and RUH summaries from selected attempts."""

from __future__ import annotations

import csv
import json
import math
from pathlib import Path
import re
import struct


REPO = Path(__file__).resolve().parents[5]
RESULT = REPO / "exp/H0/_old/v1/runs"
BS = 4096
CASES = ("stable", "oracle", "stale", "rewrite25", "rewrite100")
KV_RE = re.compile(r"([a-zA-Z0-9_]+)=([^ ]+)")


def c0(path: Path) -> dict[str, int]:
    waf_x1000, host, gc, nand = struct.unpack_from("<QQQQ", path.read_bytes(), 0)
    return {"waf_x1000": waf_x1000, "host": host, "gc": gc, "nand": nand}


def delta(before: dict[str, int], after: dict[str, int]) -> dict[str, int]:
    return {key: after[key] - before[key] for key in ("host", "gc", "nand")}


def percentile(bins: dict[int, int], fraction: float) -> int:
    target = math.ceil(sum(bins.values()) * fraction)
    seen = 0
    for upper, count in sorted(bins.items()):
        seen += count
        if seen >= target:
            return upper
    return 0


def fio_metrics(paths: list[Path], op: str = "write") -> dict[str, float | int]:
    pages = 0
    runtime_ms = 0
    bins: dict[int, int] = {}
    for path in paths:
        data = json.loads(path.read_text())
        jobs = data["jobs"]
        if any(int(job["error"]) for job in jobs):
            raise ValueError(f"fio error in {path}")
        pages += sum(int(job[op]["io_bytes"]) // BS for job in jobs)
        runtime_ms += max(int(job[op]["runtime"]) for job in jobs)
        for job in jobs:
            for upper, count in job[op]["clat_ns"].get("bins", {}).items():
                bins[int(upper)] = bins.get(int(upper), 0) + int(count)
    return {
        "pages": pages,
        "iops": pages / (runtime_ms / 1000),
        "p99_ns": percentile(bins, 0.99),
        "p999_ns": percentile(bins, 0.999),
    }


def parse_trace(path: Path) -> dict:
    gc_pages = 0
    gc_count = 0
    rotations = 0
    gc_points: dict[int, list[int]] = {0: [0, 0]}
    host_points: dict[int, dict[str, int]] = {}
    timeseries: list[dict[str, int]] = []
    current_state: dict[str, int] | None = None
    with path.open(errors="replace") as source:
        for line in source:
            if "GC_DONE " in line:
                fields = dict(KV_RE.findall(line))
                gc_count += 1
                gc_pages += int(fields["pages_migrated"])
                point = gc_points.setdefault(gc_pages, [gc_count, gc_count])
                point[1] = gc_count
            elif "RU_ROTATE " in line:
                rotations += 1
            elif "H0_SNAPSHOT " in line:
                fields = {k: int(v) for k, v in KV_RE.findall(line)}
                current_state = {
                    "host_write_pages": fields["host_pages"],
                    "free_ru": fields["free"],
                    "victim_ru": fields["victim"],
                    "full_ru": fields["full"],
                    "gc_count": gc_count,
                    "gc_copied_pages": gc_pages,
                    "ru_rotation_count": rotations,
                }
                host_points[fields["host_pages"]] = current_state.copy()
            elif "H0_RUH " in line and current_state is not None:
                fields = {k: int(v) for k, v in KV_RE.findall(line)}
                row = current_state.copy()
                row.update({
                    "ruhid": fields["ruhid"],
                    "assigned_ru": fields["assigned"],
                    "vpc": fields["vpc"],
                    "ipc": fields["ipc"],
                    "in_use_ru": fields["in_use"],
                    "curr_ru": fields["curr_ru"],
                    "gc_ru": fields["gc_ru"],
                })
                timeseries.append(row)
    return {
        "gc_pages": gc_pages,
        "gc_count": gc_count,
        "rotations": rotations,
        "gc_points": gc_points,
        "host_points": host_points,
        "timeseries": timeseries,
    }


def boundary_gc(trace: dict, counter: dict[str, int]) -> tuple[int, int]:
    host = counter["host"]
    if host == 0:
        return 0, 0
    if host in trace["host_points"]:
        point = trace["host_points"][host]
        if point["gc_copied_pages"] != counter["gc"]:
            raise ValueError(f"trace/counter mismatch at host_pages={host}")
        return point["gc_count"], 0
    low, high = trace["gc_points"][counter["gc"]]
    return high, high - low


def phase_name(plan: dict, host_pages: int) -> str:
    for item in plan["phases"]:
        if item["start_host_write"] < host_pages <= item["end_host_write"]:
            return item["name"]
    return "before" if host_pages == 0 else "after"


def write_csv(path: Path, rows: list[dict], fields: list[str] | None = None) -> None:
    if not rows:
        return
    fields = fields or list(rows[0])
    with path.open("w", newline="") as output:
        writer = csv.DictWriter(output, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def analyze_case(name: str) -> tuple[dict, list[dict], list[dict], dict]:
    root = RESULT / name / "attempt_01"
    exit_status = json.loads((root / "exit-status.json").read_text())
    if exit_status != {"workload_rc": 0, "qemu_rc": 0}:
        raise ValueError(f"failed selected attempt: {name}: {exit_status}")
    plan = json.loads((root / "input/plan.json").read_text())
    status = list(csv.DictReader((root / "guest/phase-status.csv").open()))
    if len(status) != len(plan["phases"]):
        raise ValueError(f"phase count mismatch: {name}")
    for row in status:
        if int(row["rc"]) or int(row["expected_write_pages"]) != int(row["actual_write_pages"]):
            raise ValueError(f"failed phase: {name}: {row}")

    snapshot_paths = sorted((root / "guest/snapshots").glob("*.c0.bin"))
    counters = [c0(path) for path in snapshot_paths]
    if len(counters) != len(plan["phases"]) + 1:
        raise ValueError(f"snapshot count mismatch: {name}")
    trace = parse_trace(root / "femu.log")
    if trace["gc_pages"] != counters[-1]["gc"]:
        raise ValueError(f"final GC trace mismatch: {name}")
    if counters[-1]["nand"] != counters[-1]["host"]:
        raise ValueError(f"final NAND/host mismatch: {name}")

    phase_rows = []
    previous_gc_count, previous_ambiguity = boundary_gc(trace, counters[0])
    for index, item in enumerate(plan["phases"], 1):
        d = delta(counters[index - 1], counters[index])
        gc_count, ambiguity = boundary_gc(trace, counters[index])
        metric = fio_metrics([root / "guest/phases" / f"{item['name']}.json"])
        phase_rows.append({
            "case": name,
            "phase": item["name"],
            "kind": item["kind"],
            "host_write_pages": d["host"],
            "nand_write_pages": d["nand"],
            "gc_copied_pages": d["gc"],
            "total_media_pages": d["nand"] + d["gc"],
            "waf": (d["nand"] + d["gc"]) / d["host"],
            "gc_count": gc_count - previous_gc_count,
            "gc_count_boundary_ambiguity": ambiguity + previous_ambiguity,
            "iops": metric["iops"],
            "p99_latency_ns": metric["p99_ns"],
            "p999_latency_ns": metric["p999_ns"],
            "counter_invariant": "PASS" if d["host"] == d["nand"] else "FAIL",
        })
        previous_gc_count, previous_ambiguity = gc_count, ambiguity

    pre_index = max(i for i, item in enumerate(plan["phases"], 1)
                    if item["kind"] == "precondition")
    intervention_indices = [i for i, item in enumerate(plan["phases"], 1)
                            if item["kind"] == "intervention"]
    measurement_indices = [i for i, item in enumerate(plan["phases"], 1)
                           if item["kind"] == "measurement"]
    measure_start = intervention_indices[-1] if intervention_indices else pre_index
    measure_end = measurement_indices[-1]
    background = delta(counters[measure_start], counters[measure_end])
    total = delta(counters[pre_index], counters[measure_end])
    intervention = (delta(counters[pre_index], counters[intervention_indices[-1]])
                    if intervention_indices else {"host": 0, "gc": 0, "nand": 0})

    bg_names = [plan["phases"][i - 1]["name"] for i in measurement_indices]
    bg_fio = fio_metrics([root / "guest/phases" / f"{p}.json" for p in bg_names])
    start_gc_count, start_ambiguity = boundary_gc(trace, counters[measure_start])
    end_gc_count, end_ambiguity = boundary_gc(trace, counters[measure_end])
    intervention_reads = sum(int(row["read_pages"]) for row in status
                             if row["kind"] == "intervention")
    summary = {
        "case": name,
        "seed": plan["seed"],
        "source_run": f"exp/H0/_old/v1/runs/{name}/attempt_01",
        "host_write_bytes": background["host"] * BS,
        "nand_write_bytes": background["nand"] * BS,
        "gc_write_bytes": background["gc"] * BS,
        "intervention_write_bytes": intervention["host"] * BS,
        "intervention_read_bytes": intervention_reads * BS,
        "intervention_gc_write_bytes": intervention["gc"] * BS,
        "intervention_media_write_bytes": (intervention["nand"] + intervention["gc"]) * BS,
        "total_media_write_bytes": (background["nand"] + background["gc"]) * BS,
        "waf": (background["nand"] + background["gc"]) / background["host"],
        "gc_count": end_gc_count - start_gc_count,
        "gc_count_boundary_ambiguity": start_ambiguity + end_ambiguity,
        "gc_copied_pages": background["gc"],
        "iops": bg_fio["iops"],
        "p99_latency_ns": bg_fio["p99_ns"],
        "p999_latency_ns": bg_fio["p999_ns"],
        "total_window_host_write_bytes": total["host"] * BS,
        "total_window_media_write_bytes": (total["nand"] + total["gc"]) * BS,
        "total_window_waf": (total["nand"] + total["gc"]) / total["host"],
        "counter_invariant": "PASS" if background["host"] == background["nand"] else "FAIL",
    }

    timeseries = []
    for row in trace["timeseries"]:
        item = {"case": name, "phase": phase_name(plan, row["host_write_pages"])}
        item.update(row)
        timeseries.append(item)
    validation = {
        "case": name,
        "selected_attempt": str(root.relative_to(REPO)),
        "fio_phase_count": len(status),
        "fio_all_exit_zero": True,
        "counter_invariant": "PASS",
        "final_host_pages": counters[-1]["host"],
        "final_nand_pages": counters[-1]["nand"],
        "final_gc_pages": counters[-1]["gc"],
        "trace_gc_pages": trace["gc_pages"],
        "trace_gc_count": trace["gc_count"],
        "trace_ru_rotation_count": trace["rotations"],
    }
    return summary, phase_rows, timeseries, validation


def main() -> int:
    summaries = []
    phases = []
    timeseries = []
    validations = []
    for name in CASES:
        summary, phase_rows, series, validation = analyze_case(name)
        summaries.append(summary)
        phases.extend(phase_rows)
        timeseries.extend(series)
        validations.append(validation)

    oracle = next(row for row in summaries if row["case"] == "oracle")
    soft = oracle.copy()
    soft["case"] = "soft_redirect"
    soft["source_run"] = oracle["source_run"]
    summaries.insert(3, soft)

    write_csv(RESULT / "h0_summary.csv", summaries)
    write_csv(RESULT / "h0_phase_summary.csv", phases)
    write_csv(RESULT / "metrics_timeseries.csv", timeseries)

    pilot_root = RESULT / "pilot/attempt_01"
    pilot_plan = json.loads((pilot_root / "input/plan.json").read_text())
    pilot_counters = [c0(path) for path in sorted(
        (pilot_root / "guest/snapshots").glob("*.c0.bin")
    )]
    pilot_rows = []
    for index, item in enumerate(pilot_plan["phases"], 1):
        d = delta(pilot_counters[index - 1], pilot_counters[index])
        pilot_rows.append({
            "phase": item["name"],
            "host_write_pages": d["host"],
            "gc_copied_pages": d["gc"],
            "waf": (d["nand"] + d["gc"]) / d["host"],
        })
    write_csv(RESULT / "pilot_summary.csv", pilot_rows)

    ruh1_rows = []
    final_hosts = {row["case"]: row["final_host_pages"] for row in validations}
    for name in CASES:
        rows = [row for row in timeseries
                if row["case"] == name and row["ruhid"] == 1]
        pre = max((row for row in rows if row["phase"] == "precondition_04"),
                  key=lambda row: row["host_write_pages"])
        end = max(rows, key=lambda row: row["host_write_pages"])
        ruh1_rows.append({
            "case": name,
            "precondition_host_pages": pre["host_write_pages"],
            "precondition_vpc": pre["vpc"],
            "precondition_ipc": pre["ipc"],
            "end_snapshot_host_pages": end["host_write_pages"],
            "end_snapshot_lag_pages": final_hosts[name] - end["host_write_pages"],
            "end_vpc": end["vpc"],
            "end_ipc": end["ipc"],
            "end_assigned_ru": end["assigned_ru"],
            "end_free_ru": end["free_ru"],
            "end_victim_ru": end["victim_ru"],
            "end_full_ru": end["full_ru"],
        })
    write_csv(RESULT / "ruh1_summary.csv", ruh1_rows)
    selected = {
        "pilot": "exp/H0/_old/v1/runs/pilot/attempt_01",
        "pilot_criterion": "first three consecutive precondition chunks with WAF range <= 5 percent of their mean and nonzero GC copied pages",
        "precondition_chunks": 4,
        "measurement_chunks": 4,
        "soft_redirect_reuses": "exp/H0/_old/v1/runs/oracle/attempt_01",
        "cases": validations,
    }
    (RESULT / "selected_attempts.json").write_text(json.dumps(selected, indent=2) + "\n")
    print(json.dumps(summaries, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
