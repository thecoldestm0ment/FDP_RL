#!/usr/bin/env python3
"""Summarize H0 v3 policy runs (stale / redirect / rewrite) and compare them.

Counters come from the c0 log at each drained flush (host, GC copy, NAND user
pages); Media = NAND user + GC copy. Per run:
  pre end      : last-1x-capacity WAF and the H0_STATE hash (A/A comparison)
  intervention : rewrite phase only (Media, GC copy, elapsed)
  post         : per chunk and in total (Media/App, GC-copy/App, p99)
  GC copy split: GC-copied pages by stream region (A/B/C = thirds) in post
Comparisons (same seed):
  Stale - Redirect           : post Media difference
  Rewrite - Redirect (net)   : intervention Media + post Media difference,
                               with the cumulative payback point over chunks
Application pages are the denominator; rewrite writes are not application.
Usage: pilot_analyze.py RUN_DIR... [--json OUT]
"""
from __future__ import annotations

import json
import re
import struct
import sys
from pathlib import Path

FIELD = re.compile(r"(\w+)=([^\s]+)")


def c0(path: Path) -> tuple[int, int, int]:
    raw = path.read_bytes()
    return tuple(struct.unpack_from("<Q", raw, o)[0] for o in (8, 16, 24))


def analyze(run: Path) -> dict:
    manifest = json.loads((run / "manifest.json").read_text())
    order = (run / "guest/snapshot-order.txt").read_text().split()
    snap = {t: c0(run / f"guest/snapshots/{t}.c0.bin") for t in order}

    def delta(a: str, b: str) -> dict:
        (h0, g0, n0), (h1, g1, n1) = snap[a], snap[b]
        return {"host": h1 - h0, "gc": g1 - g0, "media": (n1 - n0) + (g1 - g0)}

    def phase_json(tag: str) -> dict:
        return json.loads((run / f"guest/phases/{tag}.json").read_text())

    states, gc_regions, cur = [], [], [0, 0, 0]
    with (run / "femu.log").open(errors="replace") as log:
        for line in log:
            if "H0_GC " in line:
                r = dict(FIELD.findall(line))
                for k, name in enumerate("ABC"):
                    cur[k] += int(r[name])
            elif "H0_STATE " in line:
                states.append(dict(FIELD.findall(line)))
                gc_regions.append(cur)
                cur = [0, 0, 0]
    if len(states) != len(order):
        raise SystemExit(f"{run}: {len(states)} H0_STATE lines for {len(order)} snapshots")
    idx = {t: k for k, t in enumerate(order)}

    pre = [t for t in order if t.startswith("pre_")]
    post = [t for t in order if t.startswith("post_")]
    per = round(len(pre) / manifest["pre_capacity_multiple"]) if pre else 0
    pre_tail = delta(pre[-per - 1] if len(pre) > per else "fill", pre[-1])
    out = {
        "run": run.name, "policy": manifest["policy"], "seed": manifest["seed"],
        "pre_end": {"state": states[idx[pre[-1]]]["state"],
                    "waf_last_1x": pre_tail["media"] / pre_tail["host"]},
    }
    before_post = pre[-1]
    if "rewrite" in idx:
        d = delta(pre[-1], "rewrite")
        out["intervention"] = {**d, "elapsed_s": phase_json("rewrite")["elapsed_ns"] / 1e9}
        before_post = "rewrite"
    else:
        out["intervention"] = {"host": 0, "gc": 0, "media": 0, "elapsed_s": 0.0}
    chunks, prev = [], before_post
    for t in post:
        d = delta(prev, t)
        j = phase_json(t)
        chunks.append({"phase": t, "app": d["host"], "media": d["media"], "gc": d["gc"],
                       "media_per_app": d["media"] / d["host"],
                       "gc_copy_per_app": d["gc"] / d["host"], "p99_us": j["p99_ns"] / 1e3,
                       "iops": j["iops"],
                       "gc_copy_region": dict(zip("ABC", gc_regions[idx[t]]))})
        prev = t
    tot = delta(before_post, post[-1])
    out["post"] = {"app": tot["host"], "media": tot["media"], "gc": tot["gc"],
                   "media_per_app": tot["media"] / tot["host"],
                   "gc_copy_per_app": tot["gc"] / tot["host"], "chunks": chunks}
    total_media = out["intervention"]["media"] + tot["media"]
    out["total"] = {"media": total_media, "media_per_app": total_media / tot["host"],
                    "device_waf": total_media / (tot["host"] + out["intervention"]["host"])}
    return out


def compare(runs: list[dict]) -> list[dict]:
    by = {}
    for r in runs:
        by.setdefault((r["seed"], r["policy"]), r)
    rows = []
    for (seed, pol), r in sorted(by.items()):
        base = by.get((seed, "redirect"))
        if pol == "redirect" or not base:
            continue
        row = {"seed": seed, "policy": pol, "vs": "redirect",
               "post_media_diff": r["post"]["media"] - base["post"]["media"],
               "net_extra_media": r["total"]["media"] - base["total"]["media"],
               "net_extra_per_app": (r["total"]["media"] - base["total"]["media"])
                                    / base["post"]["app"]}
        if pol == "rewrite":
            cum, payback = r["intervention"]["media"], None
            for a, b in zip(r["post"]["chunks"], base["post"]["chunks"]):
                cum += a["media"] - b["media"]
                if payback is None and cum <= 0:
                    payback = a["phase"]
            row["payback_chunk"] = payback
        rows.append(row)
    return rows


def main() -> None:
    args = sys.argv[1:]
    out_json = None
    if "--json" in args:
        k = args.index("--json")
        out_json = Path(args[k + 1])
        del args[k:k + 2]
    runs = [analyze(Path(p)) for p in args]
    for r in runs:
        i, p, t = r["intervention"], r["post"], r["total"]
        print(f"== {r['run']} ({r['policy']}, seed {r['seed']})  pre-end state {r['pre_end']['state']}"
              f"  pre WAF(last 1x) {r['pre_end']['waf_last_1x']:.2f}")
        if i["host"]:
            print(f"   intervention: rewrite {i['host']} pages, media {i['media']}, "
                  f"gc {i['gc']}, {i['elapsed_s']:.1f}s")
        print(f"   {'chunk':<9}{'Media/App':>10}{'GCcopy/App':>11}{'p99 us':>9}{'IOPS':>8}"
              f"{'GC copy A/B/C':>26}")
        for c in p["chunks"]:
            reg = c["gc_copy_region"]
            print(f"   {c['phase']:<9}{c['media_per_app']:>10.2f}{c['gc_copy_per_app']:>11.2f}"
                  f"{c['p99_us']:>9.0f}{c['iops']:>8.0f}{reg['A']:>9}/{reg['B']}/{reg['C']}")
        print(f"   post Media/App {p['media_per_app']:.2f}, total Media/App {t['media_per_app']:.2f}, "
              f"device WAF {t['device_waf']:.2f}")
    rows = compare(runs)
    for row in rows:
        extra = f", payback at {row.get('payback_chunk')}" if row["policy"] == "rewrite" else ""
        print(f"seed {row['seed']}: {row['policy']} - redirect: post media {row['post_media_diff']:+d}, "
              f"net {row['net_extra_media']:+d} ({row['net_extra_per_app']:+.3f}/app){extra}")
    if out_json:
        out_json.write_text(json.dumps({"runs": runs, "comparisons": rows}, indent=2) + "\n")


if __name__ == "__main__":
    main()
