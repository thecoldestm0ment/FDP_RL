#!/usr/bin/env python3
"""Compare the stable window of H0 v3 smoke runs across geometries.

Stable window = the second half of preconditioning (pre_04 flush -> last
pre_NN flush, i.e. 1x..2x capacity for an 8-chunk 2x run). Per run:
  Media/App   = (NAND user + GC copy pages) / application pages  (c0 deltas)
  GC-copy/App = GC copy pages / application pages
  WAF         = Media / all host pages (equals Media/App: no rewrite in smoke)
  victim utilization = vpc / (vpc + ipc) of each GC in the window (H0_GC)
  open-slack/OP = unwritten pages in assigned RUs / OP pages, at each flush
Writes nothing; prints a table and JSON.
"""
from __future__ import annotations

import json
import re
import statistics
import struct
import sys
from pathlib import Path

FIELD = re.compile(r"(\w+)=([^\s]+)")


def c0(path: Path) -> dict:
    raw = path.read_bytes()
    return {"host": struct.unpack_from("<Q", raw, 8)[0],
            "gc": struct.unpack_from("<Q", raw, 16)[0],
            "nand": struct.unpack_from("<Q", raw, 24)[0]}


def analyze(run: Path) -> dict:
    manifest = json.loads((run / "manifest.json").read_text())
    g = manifest["geometry"]
    ppr = g["pgs_per_blk"] * g["luns_per_ch"] * g["nchs"]
    exposed_ru = g["devsz_mb"] // g["ru_mib"]
    op_pages = (g["nru"] - exposed_ru) * ppr
    order = (run / "guest/snapshot-order.txt").read_text().split()
    pre = [t for t in order if t.startswith("pre_")]
    start_tag, window_tags = pre[len(pre) // 2 - 1], pre[len(pre) // 2:]
    snap = run / "guest/snapshots"
    a, b = c0(snap / f"{start_tag}.c0.bin"), c0(snap / f"{window_tags[-1]}.c0.bin")
    app, gc, nand = b["host"] - a["host"], b["gc"] - a["gc"], b["nand"] - a["nand"]

    # Walk the trace: flush boundaries are H0_STATE lines, in snapshot order.
    states, ruh, last_ruh = [], [], {}
    util, forced, total, free = [], 0, 0, []
    boundary = 0
    in_window = False
    with (run / "femu.log").open(errors="replace") as log:
        for line in log:
            if "H0_RUH " in line:
                r = dict(FIELD.findall(line))
                last_ruh[(r["host_pages"], r["ruhid"])] = r
            elif "H0_GC " in line and in_window:
                r = dict(FIELD.findall(line))
                v, i = int(r["vpc"]), int(r["ipc"])
                util.append(v / max(1, v + i))
                forced += r["kind"] == "FORCE"
                total += 1
                free.append(int(r["free"]))
            elif "H0_STATE " in line:
                tag = order[boundary]
                boundary += 1
                hp = dict(FIELD.findall(line))["host_pages"]
                if tag in window_tags:
                    rows = [v for (h, _), v in last_ruh.items() if h == hp]
                    assigned = sum(int(r["assigned"]) for r in rows)
                    vpc = sum(int(r["vpc"]) for r in rows)
                    ipc = sum(int(r["ipc"]) for r in rows)
                    ruh.append((assigned * ppr - vpc - ipc) / op_pages)
                in_window = tag == start_tag or tag in window_tags[:-1]
    if boundary != len(order) or len(ruh) != len(window_tags):
        raise SystemExit(f"{run}: trace/snapshot mismatch")
    return {
        "run": run.name, "exposed_ru": exposed_ru, "physical_ru": g["nru"],
        "op_ru": g["nru"] - exposed_ru,
        "window": f"{start_tag}->{window_tags[-1]}",
        "app_pages": app,
        "media_per_app": (nand + gc) / app, "gc_copy_per_app": gc / app,
        "waf": (nand + gc) / app,
        "victim_util": {"p10": sorted(util)[len(util) // 10],
                        "p50": statistics.median(util),
                        "mean": statistics.fmean(util),
                        "p90": sorted(util)[len(util) * 9 // 10]},
        "open_slack_per_op": {"mean": statistics.fmean(ruh), "min": min(ruh),
                              "max": max(ruh)},
        "gc_count": total, "forced_share": forced / total,
        "free_ru_at_gc_median": statistics.median(free),
    }


def main() -> None:
    rows = [analyze(Path(p)) for p in sys.argv[1:]]
    print(f"{'run':<16}{'expRU':>6}{'OP RU':>6}{'Media/App':>10}{'GCcopy/App':>11}"
          f"{'WAF':>6}{'util p50':>9}{'util mean':>10}{'slack/OP':>9}{'(min-max)':>12}"
          f"{'FG%':>6}{'free':>5}")
    for r in rows:
        s, u = r["open_slack_per_op"], r["victim_util"]
        print(f"{r['run']:<16}{r['exposed_ru']:>6}{r['op_ru']:>6}{r['media_per_app']:>10.2f}"
              f"{r['gc_copy_per_app']:>11.2f}{r['waf']:>6.2f}{u['p50']:>9.3f}{u['mean']:>10.3f}"
              f"{s['mean']:>9.2f}{s['min']:>6.2f}-{s['max']:.2f}"
              f"{r['forced_share']:>6.0%}{r['free_ru_at_gc_median']:>5g}")
    print(json.dumps(rows, indent=2))


if __name__ == "__main__":
    main()
