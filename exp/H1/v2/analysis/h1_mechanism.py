#!/usr/bin/env python3
"""H1 v2 mechanism tables for the report (reads the same runs as h1_analyze summary).

Per policy level, mean and min..max over seeds 42/43/44:
  horizon   ΔMedia vs Redirect at 1x / 2x / 4x after the shift (GiB)
  slope     growth of ΔMedia over 2x..4x (least squares, GiB per 1x of app writes)
  gc_post   post-shift GC copies by region A/B/C and victims by RUH, minus Redirect (GiB)
  gc_int    GC copies during the rewrite by region, victim RUH, Media per rewritten GiB
  bmap      fraction of B on PID1's RUH at chunk boundaries (H1_BMAP)
GC events (H0_GC) are assigned to the snapshot interval in which they occur; every
event in these runs is a forced GC (lazy 5% defers all background GC).
Usage: h1_mechanism.py --seeds 42 43 44 --out PREFIX   (writes PREFIX.txt / .json)
"""
from __future__ import annotations

import argparse
import json
import re
import statistics
from pathlib import Path

import h1_analyze as h

FIELD = re.compile(r"(\w+)=([^\s]+)")
GIB = h.GIB


def gc_intervals(run: Path, order: list[str]) -> dict:
    """GC copies per snapshot interval: region pages, victim-RUH counts, vpc/ipc sums."""
    out, cur = {}, None
    tags = iter(order)

    def fresh():
        return {"A": 0, "B": 0, "C": 0, "n": 0, "ruh": [0, 0, 0], "vpc": 0, "ipc": 0}
    cur = fresh()
    with (run / "femu.log").open(errors="replace") as log:
        for line in log:
            if "H0_GC " in line:
                d = dict(FIELD.findall(line))
                for k in "ABC":
                    cur[k] += int(d[k])
                cur["n"] += 1
                cur["ruh"][int(d["victim_ruh"])] += 1
                cur["vpc"] += int(d["vpc"])
                cur["ipc"] += int(d["ipc"])
            elif "H0_STATE " in line:
                out[next(tags)] = cur
                cur = fresh()
    return out


def per_run(r: dict, red: dict, red_gc: dict) -> dict:
    w = h.walk(r)
    order = r["order"]
    gc = gc_intervals(r["dir"], order)
    pre_end = w["pre_end"]
    post = order[order.index(pre_end) + 1:]
    dy = [(y - b) / GIB for y, b in zip(w["y"], red["y"])]
    xs = [x / GIB / 24 for x in red["x"]]          # in capacity multiples (g24: 24 GiB)
    tail = [(x, v) for x, v in zip(xs, dy) if x >= 2 - 1e-9]
    mx = statistics.fmean(x for x, _ in tail)
    my = statistics.fmean(v for _, v in tail)
    slope = sum((x - mx) * (v - my) for x, v in tail) / sum((x - mx) ** 2 for x, _ in tail)

    def total(tags, key):
        return sum(gc[t][key] for t in tags)
    post_tags = [t for t in post if t != "rewrite"]
    red_post = [t for t in red_gc if t.startswith("post_")]
    res = {
        "horizon": {"1x": dy[8], "2x": dy[16], "4x": dy[32]},
        "slope_2x_4x": slope,
        "gc_post": {k: (total(post_tags, k) - sum(red_gc[t][k] for t in red_post)) / GIB
                    for k in "ABC"},
        "gc_post_abs": {k: total(post_tags, k) / GIB for k in "ABC"},
        "victims_post": [sum(gc[t]["ruh"][i] for t in post_tags) for i in range(3)],
        "util_post": total(post_tags, "vpc") / (total(post_tags, "vpc") + total(post_tags, "ipc")),
    }
    if "rewrite" in order:
        g = gc["rewrite"]
        inter = w["intervention"]
        res["gc_int"] = {"A": g["A"] / GIB, "B": g["B"] / GIB, "C": g["C"] / GIB,
                         "victims": g["ruh"], "util": g["vpc"] / max(1, g["vpc"] + g["ipc"]),
                         "rewrite_GiB": inter["host"] / GIB,
                         "media_per_rewrite_GiB": inter["media"] / inter["host"]}
    bm = r["bmap"]
    if all(bm.get(t) for t in post_tags):
        bsize = r["manifest"]["geometry"]["blocks"] * 32 // 3
        res["bmap_pid1"] = {t: bm[t]["all_stale"] / bsize for t in post_tags}
    return res


def fmt(vals, f="{:+.1f}"):
    return f"{f.format(statistics.fmean(vals))} ({f.format(min(vals))}..{f.format(max(vals))})"


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--seeds", type=int, nargs="+", required=True)
    p.add_argument("--out", type=Path, required=True)
    a = p.parse_args()
    found = h.discover(a.seeds)
    levels = [("redirect", 0), ("stale", None), ("rewrite", 0)] + sorted(
        {(pol, at) for pol, at, _ in found}, key=lambda k: (k[0], k[1]))
    res = {}
    for seed in a.seeds:
        base = {pol: h.load(h.H0RUNS / f"main_g24_{pol}_s{seed}_01")
                for pol in ("redirect", "stale", "rewrite")}
        red = h.walk(base["redirect"])
        red_gc = gc_intervals(base["redirect"]["dir"], base["redirect"]["order"])
        for pol, at in levels:
            r = base[pol] if pol in base else (h.load(found[(pol, at, seed)])
                                                if (pol, at, seed) in found else None)
            if r is None:
                continue
            res.setdefault(f"{pol}:{at}", {})[seed] = per_run(r, red, red_gc)

    def name(key):
        pol, at = key.split(":")
        return pol if at in ("0", "None") and pol in ("redirect", "stale", "rewrite") \
            else f"{pol} τ{0.3 * int(at):.1f}"
    L = []
    L.append("ΔMedia vs Redirect by horizon (GiB; mean (min..max) over seeds)")
    L.append(f"{'level':<22}{'1x':>22}{'2x':>22}{'4x':>22}{'slope 2x-4x /1x':>24}")
    for key, by in res.items():
        v = list(by.values())
        L.append(f"{name(key):<22}" + "".join(f"{fmt([x['horizon'][k] for x in v]):>22}"
                                             for k in ("1x", "2x", "4x"))
                 + f"{fmt([x['slope_2x_4x'] for x in v], '{:+.2f}'):>24}")
    L.append("")
    L.append("Post-shift GC copies by region minus Redirect (GiB; rewrite phase excluded)")
    L.append(f"{'level':<22}{'A':>20}{'B':>20}{'C':>20}{'victim util':>14}  victims RUH0/1/2")
    for key, by in res.items():
        v = list(by.values())
        vic = [statistics.fmean(x["victims_post"][i] for x in v) for i in range(3)]
        L.append(f"{name(key):<22}" + "".join(f"{fmt([x['gc_post'][k] for x in v]):>20}" for k in "ABC")
                 + f"{statistics.fmean(x['util_post'] for x in v):>14.3f}  "
                 + "/".join(f"{c:.0f}" for c in vic))
    red_abs = list(res["redirect:0"].values())
    L.append(f"{'(Redirect absolute)':<22}" + "".join(
        f"{fmt([x['gc_post_abs'][k] for x in red_abs], '{:.1f}'):>20}" for k in "ABC"))
    L.append("")
    L.append("Rewrite phase: GC copies by region (GiB), victims, Media per rewritten GiB")
    L.append(f"{'level':<22}{'rewrite GiB':>12}{'A':>8}{'B':>8}{'C':>8}{'util':>8}{'Media/GiB':>11}  victims RUH0/1/2")
    for key, by in res.items():
        v = [x["gc_int"] for x in by.values() if "gc_int" in x]
        if not v:
            continue
        L.append(f"{name(key):<22}{statistics.fmean(x['rewrite_GiB'] for x in v):>12.2f}"
                 + "".join(f"{statistics.fmean(x[k] for x in v):>8.1f}" for k in "ABC")
                 + f"{statistics.fmean(x['util'] for x in v):>8.3f}"
                 + f"{statistics.fmean(x['media_per_rewrite_GiB'] for x in v):>11.2f}  "
                 + "/".join(f"{statistics.fmean(x['victims'][i] for x in v):.0f}" for i in range(3)))
    L.append("")
    L.append("B on PID1's RUH after chunk c (fraction of B; mean over seeds)")
    marks = ["post_01", "post_02", "post_04", "post_08", "post_12", "post_16", "post_24", "post_32"]
    L.append(f"{'level':<22}" + "".join(f"{m[5:]:>8}" for m in marks))
    for key, by in res.items():
        v = [x["bmap_pid1"] for x in by.values() if "bmap_pid1" in x]
        if v:
            L.append(f"{name(key):<22}" + "".join(f"{statistics.fmean(x[m] for x in v):>8.3f}"
                                                 for m in marks))
    text = "\n".join(L)
    print(text)
    a.out.with_suffix(".txt").write_text(text + "\n")
    a.out.with_suffix(".json").write_text(json.dumps(res, indent=1) + "\n")


if __name__ == "__main__":
    main()
