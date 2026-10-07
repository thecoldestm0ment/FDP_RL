#!/usr/bin/env python3
"""Summarize the GC regime of an H0 v3 smoke run from femu.log.

Reports, per preconditioning chunk (between drained-flush H0_STATE lines):
free RU, background/forced GC counts, victim valid ratio, copied pages per GC,
and lazy deferrals. Reads raw trace only; writes smoke-summary.json.
"""
from __future__ import annotations

import json
import re
import statistics
import sys
from pathlib import Path

FIELD = re.compile(r"(\w+)=([^\s]+)")
PAGES_PER_RU = 512 * 64  # pgs_per_blk x LUNs


def pct(values: list[float], q: float) -> float | None:
    if not values:
        return None
    s = sorted(values)
    return s[min(len(s) - 1, int(q * len(s)))]


def main() -> None:
    result = Path(sys.argv[1])
    order = (result / "guest/snapshot-order.txt").read_text().split()
    windows, gcs, states = [], [], []
    with (result / "femu.log").open(errors="replace") as log:
        for line in log:
            if "H0_GC " in line:
                r = dict(FIELD.findall(line))
                gcs.append(r)
            elif "H0_STATE " in line:
                states.append(dict(FIELD.findall(line)))
                windows.append(gcs)
                gcs = []
    if len(states) != len(order):
        raise SystemExit(f"{len(states)} H0_STATE lines for {len(order)} snapshots")
    rows = []
    prev_delayed = 0
    for tag, state, window in zip(order, states, windows):
        vpc = [int(g["vpc"]) for g in window]
        util = [int(g["vpc"]) / max(1, int(g["vpc"]) + int(g["ipc"])) for g in window]
        free = [int(g["free"]) for g in window]
        forced = sum(g["kind"] == "FORCE" for g in window)
        delayed = int(state["gc_delayed"])
        rows.append({
            "phase": tag, "host_pages": int(state["host_pages"]),
            "gc_total": len(window), "gc_background": len(window) - forced,
            "gc_forced": forced,
            "forced_share": forced / len(window) if window else None,
            "lazy_deferrals": delayed - prev_delayed,
            "free_ru_at_gc": {"min": min(free, default=None),
                              "median": statistics.median(free) if free else None,
                              "max": max(free, default=None)},
            "victim_valid_ratio": {"p50": pct(util, 0.5), "p90": pct(util, 0.9),
                                   "max": max(util, default=None),
                                   "share_over_5pct": (sum(u > 0.05 for u in util) / len(util))
                                   if util else None},
            "copied_pages_per_gc": {"mean": statistics.fmean(vpc) if vpc else None,
                                    "p90": pct(vpc, 0.9)},
            "copied_pages_total": sum(vpc),
        })
        prev_delayed = delayed
    out = {"pages_per_ru": PAGES_PER_RU, "phases": rows}
    (result / "smoke-summary.json").write_text(json.dumps(out, indent=2) + "\n")
    print(f"{'phase':<12}{'GC':>7}{'BG':>7}{'FG':>7}{'FG%':>6}{'defer':>9}"
          f"{'free min/med':>13}{'util p50/p90':>14}{'>5%':>6}{'copy/GC':>9}")
    for r in rows:
        f, u, c = r["free_ru_at_gc"], r["victim_valid_ratio"], r["copied_pages_per_gc"]
        fmt = lambda v, s="{:.2f}": "-" if v is None else s.format(v)
        print(f"{r['phase']:<12}{r['gc_total']:>7}{r['gc_background']:>7}{r['gc_forced']:>7}"
              f"{fmt(r['forced_share'], '{:.0%}'):>6}{r['lazy_deferrals']:>9}"
              f"{fmt(f['min'], '{}') + '/' + fmt(f['median'], '{:g}'):>13}"
              f"{fmt(u['p50']) + '/' + fmt(u['p90']):>14}"
              f"{fmt(u['share_over_5pct'], '{:.0%}'):>6}{fmt(c['mean'], '{:.0f}'):>9}")


if __name__ == "__main__":
    main()
