#!/usr/bin/env python3
"""Aggregate the H0 v3 main campaign across seeds.

For each seed: Stale/Rewrite cumulative Media minus Redirect over post-shift
application writes (as pilot_plot.py), then the per-seed values, mean and
min..max at each chunk. Writes a table (stdout + .txt), a CSV, and an SVG
with thin per-seed lines and a thick mean line per comparison.
Usage: main_aggregate.py RUNS_DIR --seeds 42 43 44 --out PREFIX
"""
from __future__ import annotations

import argparse
import csv
import json
import statistics
from pathlib import Path

from pilot_analyze import analyze
from pilot_plot import GIB, SURFACE, INK, INK2, MUTED, GRID, AXIS, cumulative, nice_step

SERIES = {"stale": ("#2a78d6", "Stale − Redirect"),
          "rewrite": ("#eb6834", "Rewrite − Redirect")}


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("runs", type=Path)
    p.add_argument("--seeds", type=int, nargs="+", required=True)
    p.add_argument("--out", type=Path, required=True)
    a = p.parse_args()
    curves = {k: {} for k in SERIES}
    table = []
    xg = None
    for seed in a.seeds:
        run = {pol: analyze(a.runs / f"main_g24_{pol}_s{seed}_01")
               for pol in ("redirect", "stale", "rewrite")}
        states = {r["pre_end"]["state"] for r in run.values()}
        bx, by = cumulative(run["redirect"])
        xg = [x / GIB for x in bx]
        for pol in SERIES:
            xs, ys = cumulative(run[pol])
            if xs != bx:
                raise SystemExit(f"seed {seed} {pol}: chunk sizes differ")
            curves[pol][seed] = [(y - b) / GIB for y, b in zip(ys, by)]
        rw = run["rewrite"]
        payback = None
        cum = rw["intervention"]["media"]
        for c, b in zip(rw["post"]["chunks"], run["redirect"]["post"]["chunks"]):
            cum += c["media"] - b["media"]
            if payback is None and cum <= 0:
                payback = c["phase"]
        table.append({
            "seed": seed, "same_pre_state": len(states) == 1,
            "pre_waf_last_1x": run["redirect"]["pre_end"]["waf_last_1x"],
            **{f"post_media_per_app_{pol}": run[pol]["post"]["media_per_app"]
               for pol in ("stale", "redirect", "rewrite")},
            "rewrite_total_media_per_app": rw["total"]["media_per_app"],
            "intervention_media_GiB": rw["intervention"]["media"] / GIB,
            "intervention_s": rw["intervention"]["elapsed_s"],
            "stale_minus_redirect_GiB": curves["stale"][seed][-1],
            "rewrite_minus_redirect_GiB": curves["rewrite"][seed][-1],
            "rewrite_post_saving_GiB": (run["redirect"]["post"]["media"]
                                        - rw["post"]["media"]) / GIB,
            "rewrite_payback": payback,
        })

    keys = [k for k in table[0] if k not in ("seed", "same_pre_state", "rewrite_payback")]
    lines = [f"{'metric':<30}" + "".join(f"{'s' + str(t['seed']):>10}" for t in table)
             + f"{'mean':>10}{'min..max':>18}"]
    for k in keys:
        vals = [t[k] for t in table]
        lines.append(f"{k:<30}" + "".join(f"{v:>10.3f}" for v in vals)
                     + f"{statistics.fmean(vals):>10.3f}{min(vals):>9.3f}..{max(vals):.3f}")
    lines.append(f"{'same_pre_state':<30}" + "".join(f"{str(t['same_pre_state']):>10}" for t in table))
    lines.append(f"{'rewrite_payback (<= 4x)':<30}" + "".join(f"{str(t['rewrite_payback']):>10}" for t in table))
    text = "\n".join(lines)
    print(text)
    a.out.with_suffix(".txt").write_text(text + "\n")
    a.out.with_suffix(".json").write_text(json.dumps(table, indent=2) + "\n")
    with a.out.with_suffix(".csv").open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["app_GiB"] + [f"{pol}_s{s}_GiB" for pol in SERIES for s in a.seeds]
                   + [f"{pol}_mean_GiB" for pol in SERIES])
        for i, x in enumerate(xg):
            w.writerow([f"{x:.3f}"] + [f"{curves[pol][s][i]:.3f}" for pol in SERIES for s in a.seeds]
                       + [f"{statistics.fmean(curves[pol][s][i] for s in a.seeds):.3f}" for pol in SERIES])

    W, H, L, R, T, B = 960, 540, 84, 220, 92, 64
    pw, ph = W - L - R, H - T - B
    allv = [v for pol in SERIES for c in curves[pol].values() for v in c]
    step = nice_step((max(allv + [0]) - min(allv + [0])) or 1)
    ymin, ymax = step * (min(allv + [0]) // step), step * -(-max(allv + [0]) // step)
    xmax = xg[-1]
    sx = lambda x: L + pw * x / xmax
    sy = lambda y: T + ph * (ymax - y) / (ymax - ymin)
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
           f'font-family="system-ui, -apple-system, sans-serif">',
           f'<rect width="{W}" height="{H}" fill="{SURFACE}"/>',
           f'<text x="{L}" y="34" font-size="18" font-weight="600" fill="{INK}">'
           f'Cumulative Media difference after shift (vs Redirect)</text>',
           f'<text x="{L}" y="58" font-size="13" fill="{INK2}">g24 main, QD1, seeds '
           f'{", ".join(map(str, a.seeds))} · thin = each seed, thick = mean · '
           f'Rewrite starts at its intervention Media</text>']
    y = ymin
    while y <= ymax + 1e-9:
        zero = abs(y) < 1e-9
        out.append(f'<line x1="{L}" x2="{L + pw}" y1="{sy(y):.1f}" y2="{sy(y):.1f}" '
                   f'stroke="{AXIS if zero else GRID}" stroke-width="{1.5 if zero else 1}"/>')
        out.append(f'<text x="{L - 10}" y="{sy(y) + 4:.1f}" font-size="12" text-anchor="end" '
                   f'fill="{MUTED}">{y:+g}</text>')
        y += step
    for k in range(0, int(xmax // 24) + 1):
        out.append(f'<text x="{sx(k * 24):.1f}" y="{T + ph + 22}" font-size="12" '
                   f'text-anchor="middle" fill="{MUTED}">{k * 24} GiB ({k}×)</text>')
    out.append(f'<text x="{L + pw / 2}" y="{H - 14}" font-size="13" text-anchor="middle" '
               f'fill="{INK2}">Application writes after shift (GiB, 1× = namespace)</text>')
    out.append(f'<text transform="translate(22 {T + ph / 2}) rotate(-90)" font-size="13" '
               f'text-anchor="middle" fill="{INK2}">ΔMedia (GiB)</text>')
    labels = []
    for pol, (color, name) in SERIES.items():
        for s, vals in curves[pol].items():
            pts = " ".join(f"{sx(x):.1f},{sy(v):.1f}" for x, v in zip(xg, vals))
            out.append(f'<polyline points="{pts}" fill="none" stroke="{color}" '
                       f'stroke-opacity="0.35" stroke-width="1.5"/>')
        mean = [statistics.fmean(curves[pol][s][i] for s in a.seeds) for i in range(len(xg))]
        pts = " ".join(f"{sx(x):.1f},{sy(v):.1f}" for x, v in zip(xg, mean))
        out.append(f'<polyline points="{pts}" fill="none" stroke="{color}" stroke-width="2.5" '
                   f'stroke-linejoin="round"/>')
        for i, (x, v) in enumerate(zip(xg, mean)):
            per = ", ".join(f"s{s} {curves[pol][s][i]:+.1f}" for s in a.seeds)
            out.append(f'<circle cx="{sx(x):.1f}" cy="{sy(v):.1f}" r="7" fill="transparent">'
                       f'<title>{name}\nx = {x:.1f} GiB\nmean {v:+.2f} GiB\n{per}</title></circle>')
        lo = min(curves[pol][s][-1] for s in a.seeds)
        hi = max(curves[pol][s][-1] for s in a.seeds)
        labels.append([sy(mean[-1]), pol, mean[-1], lo, hi])
    labels.sort()
    for i in range(1, len(labels)):
        labels[i][0] = max(labels[i][0], labels[i - 1][0] + 32)
    for ly, pol, v, lo, hi in labels:
        color, name = SERIES[pol]
        out.append(f'<rect x="{L + pw + 10}" y="{ly - 5:.1f}" width="10" height="10" rx="2" fill="{color}"/>')
        out.append(f'<text x="{L + pw + 26}" y="{ly + 4:.1f}" font-size="12" fill="{INK}">'
                   f'{name.split(" ")[0]} {round(v, 1) + 0.0:+.1f} GiB</text>')
        out.append(f'<text x="{L + pw + 26}" y="{ly + 20:.1f}" font-size="11" fill="{MUTED}">'
                   f'seeds {lo:+.1f} … {hi:+.1f}</text>')
    lx = L
    for pol, (color, name) in SERIES.items():
        out.append(f'<line x1="{lx}" x2="{lx + 22}" y1="76" y2="76" stroke="{color}" stroke-width="2.5"/>')
        out.append(f'<text x="{lx + 28}" y="80" font-size="12" fill="{INK2}">{name}</text>')
        lx += 28 + 9 * len(name) + 24
    out.append("</svg>")
    a.out.with_suffix(".svg").write_text("\n".join(out) + "\n")


if __name__ == "__main__":
    main()
