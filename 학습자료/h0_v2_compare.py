#!/usr/bin/env python3
"""Gate paired H0-A runs on shared pre-shift state and raw counter checks."""
from __future__ import annotations

import argparse
import json
from pathlib import Path

from h0_v2_analyze import summarize


def inspect(path: Path) -> tuple[dict, dict, dict]:
    manifest = json.loads((path / "manifest.json").read_text())
    exit_status = json.loads((path / "exit-status.json").read_text())
    result = summarize(path)
    return manifest, exit_status, result


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("oracle", type=Path)
    parser.add_argument("stale", type=Path)
    args = parser.parse_args()
    left = inspect(args.oracle)
    right = inspect(args.stale)
    m1, e1, a1 = left
    m2, e2, a2 = right
    errors = []

    for label, manifest, exits, analysis in (("oracle", *left), ("stale", *right)):
        if manifest["case"] != label:
            errors.append(f"{label}: manifest case={manifest['case']}")
        if exits != {"guest_rc": 0, "qemu_rc": 0}:
            errors.append(f"{label}: failed exit {exits}")
        if not analysis["gc_trace_pages_match"] or not analysis["gc_done_pages_match"]:
            errors.append(f"{label}: GC trace/counter mismatch")
        if analysis["gc_composition_mismatch"] or analysis["gc_count"] != analysis["gc_done_count"]:
            errors.append(f"{label}: GC event/composition mismatch")
        for phase in analysis["phases"]:
            if not phase["counter_invariant"] or not phase["gc_trace_pages_match"]:
                errors.append(f"{label}: {phase['phase']} counter mismatch")

    keys = ("geometry", "pages", "pre_chunks", "post_chunks", "rate",
            "prep_qd", "gc_background_percent", "gc_forced_percent",
            "qemu_sha256", "generator_sha256", "guest_runner_sha256", "base_sha256")
    for key in keys:
        if m1.get(key) != m2.get(key):
            errors.append(f"different {key}: {m1.get(key)} vs {m2.get(key)}")

    p1 = {p["phase"]: p for p in a1["phases"]}
    p2 = {p["phase"]: p for p in a2["phases"]}
    if p1.keys() != p2.keys():
        errors.append("phase sets differ")
    for phase in p1.keys() & p2.keys():
        x, y = p1[phase], p2[phase]
        for key in ("logical_hash", "submitted", "completed", "host_pages"):
            if x[key] != y[key]:
                errors.append(f"{phase}: {key} differs")
        if phase == "fill" or phase.startswith("pre_"):
            if x["pid_hash"] != y["pid_hash"]:
                errors.append(f"{phase}: pre-shift PID stream differs")
        elif phase.startswith("post_") and x["pid_hash"] == y["pid_hash"]:
            errors.append(f"{phase}: Oracle/Stale PID streams did not diverge")

    pre_host = (m1["pre_chunks"] + 1) * m1["pages"]
    def state_at(analysis: dict) -> dict | None:
        return next((s for s in analysis["states"]
                     if int(s["host_pages"]) == pre_host), None)
    s1, s2 = state_at(a1), state_at(a2)
    if s1 is None or s2 is None:
        errors.append("missing pre-shift state")
    else:
        for key in ("state", "victim_queue"):
            if s1[key] != s2[key]:
                errors.append(f"pre-shift {key} differs: {s1[key]} vs {s2[key]}")

    output = {"accepted": not errors, "errors": errors,
              "pre_host_pages": pre_host, "oracle_pre_state": s1,
              "stale_pre_state": s2,
              "oracle_post": [p for p in a1["phases"] if p["phase"].startswith("post_")],
              "stale_post": [p for p in a2["phases"] if p["phase"].startswith("post_")]}
    print(json.dumps(output, indent=2))
    if errors:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
