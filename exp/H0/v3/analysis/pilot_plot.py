#!/usr/bin/env python3
"""Cumulative Media difference after the shift, vs application write volume.

  dMedia_stale(x)   = Media_Stale(x)   - Media_Redirect(x)
  dMedia_rewrite(x) = Media_Rewrite(x) - Media_Redirect(x)   (starts at the
                      rewrite's intervention Media, since it happens at x = 0)
  A/A reference     = Media_Redirect_rep(x) - Media_Redirect(x)  (run-to-run noise)

x is cumulative post-shift application writes; Media = NAND user + GC copy
pages, from c0 counters at each drained post chunk. Writes an SVG (stdlib only)
and a CSV with the same numbers.
Usage: pilot_plot.py --redirect R --stale S --rewrite W [--aa R2] --out PREFIX
"""
from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path

from pilot_analyze import analyze

GIB = 2 ** 30 / 4096  # 4 KiB pages per GiB
# Reference palette (dataviz skill, palette.md): categorical slots 1-2 are
# documented as passing all-pairs CVD/normal-vision checks; chrome tokens below.
SURFACE, INK, INK2, MUTED = "#fcfcfb", "#0b0b0b", "#52514e", "#898781"
GRID, AXIS = "#e1e0d9", "#c3c2b7"
SERIES = {"stale": ("#2a78d6", "Stale − Redirect"),
          "rewrite": ("#eb6834", "Rewrite − Redirect"),
          "aa": (MUTED, "Redirect repeat − Redirect (A/A)")}
SHORT = {"stale": "Stale", "rewrite": "Rewrite", "aa": "A/A"}


def cumulative(run: dict) -> tuple[list[int], list[int]]:
    xs, ys = [0], [run["intervention"]["media"]]
    for c in run["post"]["chunks"]:
        xs.append(xs[-1] + c["app"])
        ys.append(ys[-1] + c["media"])
    return xs, ys


def nice_step(span: float) -> float:
    raw = span / 6
    for m in (1, 2, 2.5, 5, 10):
        step = m * 10 ** (len(str(int(raw))) - 1) if raw >= 1 else m * 0.1
        if step >= raw:
            return step
    return raw


def main() -> None:
    p = argparse.ArgumentParser()
    for name in ("redirect", "stale", "rewrite"):
        p.add_argument(f"--{name}", type=Path, required=True)
    p.add_argument("--aa", type=Path)
    p.add_argument("--out", type=Path, required=True)
    p.add_argument("--label", default="pilot", help="run set name for the subtitle")
    a = p.parse_args()
    base = analyze(a.redirect)
    bx, by = cumulative(base)
    runs = {"stale": a.stale, "rewrite": a.rewrite}
    if a.aa:
        runs["aa"] = a.aa
    series = {}
    for key, path in runs.items():
        xs, ys = cumulative(analyze(path))
        if xs != bx:
            raise SystemExit(f"{path}: post chunk sizes differ from redirect")
        series[key] = [(y - b) / GIB for y, b in zip(ys, by)]
    xg = [x / GIB for x in bx]
    manifest = json.loads((a.redirect / "manifest.json").read_text())
    capacity_gib = manifest["geometry"]["devsz_mb"] / 1024  # 1x = namespace size

    with a.out.with_suffix(".csv").open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["app_GiB"] + [f"{k}_dMedia_GiB" for k in series])
        for i, x in enumerate(xg):
            w.writerow([f"{x:.3f}"] + [f"{series[k][i]:.3f}" for k in series])

    W, H, L, R, T, B = 960, 540, 84, 200, 92, 64
    pw, ph = W - L - R, H - T - B
    ymin = min(0.0, *(min(v) for v in series.values()))
    ymax = max(0.0, *(max(v) for v in series.values()))
    step = nice_step(ymax - ymin or 1)
    ymin, ymax = step * (ymin // step), step * -(-ymax // step)
    if ymax == ymin:
        ymax = ymin + step
    xmax = xg[-1]
    sx = lambda x: L + pw * x / xmax
    sy = lambda y: T + ph * (ymax - y) / (ymax - ymin)
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
           f'font-family="system-ui, -apple-system, \'Noto Sans KR\', sans-serif">',
           f'<rect width="{W}" height="{H}" fill="{SURFACE}"/>',
           f'<text x="{L}" y="34" font-size="18" font-weight="600" fill="{INK}">'
           f'Cumulative Media difference after shift (vs Redirect)</text>',
           f'<text x="{L}" y="58" font-size="13" fill="{INK2}">g24 {a.label}, seed '
           f'{base["seed"]} · Media = NAND user + GC copy · Rewrite starts at its '
           f'intervention Media (x = 0)</text>']
    y = ymin
    while y <= ymax + 1e-9:
        out.append(f'<line x1="{L}" x2="{L + pw}" y1="{sy(y):.1f}" y2="{sy(y):.1f}" '
                   f'stroke="{AXIS if abs(y) < 1e-9 else GRID}" '
                   f'stroke-width="{1.5 if abs(y) < 1e-9 else 1}"/>')
        out.append(f'<text x="{L - 10}" y="{sy(y) + 4:.1f}" font-size="12" '
                   f'text-anchor="end" fill="{MUTED}">{y:+g}</text>')
        y += step
    k = 0
    while k * capacity_gib <= xmax + 1e-9:
        x = k * capacity_gib
        out.append(f'<text x="{sx(x):.1f}" y="{T + ph + 22}" font-size="12" '
                   f'text-anchor="middle" fill="{MUTED}">{x:g} GiB ({k}×)</text>')
        k += 1
    out.append(f'<text x="{L + pw / 2}" y="{H - 14}" font-size="13" text-anchor="middle" '
               f'fill="{INK2}">Application writes after shift (GiB, 1× = namespace)</text>')
    out.append(f'<text transform="translate(22 {T + ph / 2}) rotate(-90)" font-size="13" '
               f'text-anchor="middle" fill="{INK2}">ΔMedia (GiB)</text>')
    labels = []
    for key, vals in series.items():
        color, name = SERIES[key]
        dash = ' stroke-dasharray="6 5"' if key == "aa" else ""
        pts = " ".join(f"{sx(x):.1f},{sy(v):.1f}" for x, v in zip(xg, vals))
        out.append(f'<polyline points="{pts}" fill="none" stroke="{color}" '
                   f'stroke-width="2" stroke-linejoin="round"{dash}/>')
        for x, v in zip(xg, vals):  # hover targets larger than the line
            out.append(f'<circle cx="{sx(x):.1f}" cy="{sy(v):.1f}" r="7" fill="transparent">'
                       f'<title>{name}\nx = {x:.1f} GiB\nΔMedia = {v:+.2f} GiB</title></circle>')
        if key == "rewrite":
            out.append(f'<circle cx="{sx(0):.1f}" cy="{sy(vals[0]):.1f}" r="4.5" '
                       f'fill="{color}" stroke="{SURFACE}" stroke-width="2"/>')
        labels.append([sy(vals[-1]), key, vals[-1]])
    labels.sort()
    for i in range(1, len(labels)):  # keep end labels 16px apart
        labels[i][0] = max(labels[i][0], labels[i - 1][0] + 16)
    for ly, key, v in labels:
        color, name = SERIES[key]
        out.append(f'<rect x="{L + pw + 10}" y="{ly - 5:.1f}" width="10" height="10" '
                   f'rx="2" fill="{color}"/>')
        out.append(f'<text x="{L + pw + 26}" y="{ly + 4:.1f}" font-size="12" fill="{INK}">'
                   f'{SHORT[key]} {round(v, 1) + 0.0:+.1f} GiB</text>')
    lx = L
    for key in series:  # legend row (always present for >= 2 series)
        color, name = SERIES[key]
        dash = ' stroke-dasharray="6 5"' if key == "aa" else ""
        out.append(f'<line x1="{lx}" x2="{lx + 22}" y1="76" y2="76" stroke="{color}" '
                   f'stroke-width="2"{dash}/>')
        out.append(f'<text x="{lx + 28}" y="80" font-size="12" fill="{INK2}">{name}</text>')
        lx += 28 + 9 * len(name) + 24
    out.append("</svg>")
    a.out.with_suffix(".svg").write_text("\n".join(out) + "\n")
    print(f"wrote {a.out.with_suffix('.svg')} and {a.out.with_suffix('.csv')}")


if __name__ == "__main__":
    main()
