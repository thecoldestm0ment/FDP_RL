#!/usr/bin/env python3
"""Where the delayed-redirect cost comes from: post-shift GC copies minus Redirect.

For Stale and each delay level, two diverging bars per row: extra copies of cold
C (up) and of hot B (down) relative to Redirect, summed over 4x after the shift
and averaged over seeds; the net (A + B + C, equal to ΔMedia because application
writes are equal) is listed at the right with its seed range. Reads
h1_mechanism.json. Writes PREFIX.svg (and PREFIX.png when cairosvg is importable).
Colors: reference categorical slots 1-2 (dataviz skill palette), ink for text.
Usage: h1_gcflow_plot.py h1_mechanism.json --out h1_gcflow
"""
from __future__ import annotations

import argparse
import json
import statistics
from pathlib import Path

SURFACE, INK, INK2, MUTED = "#fcfcfb", "#0b0b0b", "#52514e", "#898781"
GRID, AXIS = "#e1e0d9", "#c3c2b7"
C_COL, B_COL = "#2a78d6", "#eb6834"   # slot 1 blue = cold C, slot 2 orange = hot B
ROWS = [("delay:2", "Delay τ=0.6"), ("delay:4", "Delay τ=1.2"),
        ("delay:8", "Delay τ=2.4"), ("stale:None", "Stale (never)")]


def bar(x0: float, x1: float, y: float, hgt: float, color: str, r: float = 4) -> str:
    """Horizontal bar from the baseline x0 to x1; only the far end is rounded."""
    if abs(x1 - x0) < 2 * r:
        r = abs(x1 - x0) / 2
    s = 1 if x1 >= x0 else -1
    xe = x1 - s * r
    return (f'<path d="M{x0:.1f},{y:.1f} H{xe:.1f} '
            f'A{r},{r} 0 0 {1 if s > 0 else 0} {x1:.1f},{y + r:.1f} V{y + hgt - r:.1f} '
            f'A{r},{r} 0 0 {1 if s > 0 else 0} {xe:.1f},{y + hgt:.1f} H{x0:.1f} Z" '
            f'fill="{color}"/>')


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("mech", type=Path)
    p.add_argument("--out", type=Path, required=True)
    a = p.parse_args()
    mech = json.loads(a.mech.read_text())
    rows = []
    for key, label in ROWS:
        runs = list(mech[key].values())
        c = [r["gc_post"]["C"] for r in runs]
        b = [r["gc_post"]["B"] for r in runs]
        net = [sum(r["gc_post"].values()) for r in runs]
        rows.append((label, c, b, net))
    W, L, R, T = 960, 150, 230, 108
    band, bh, gap = 64, 18, 2
    H = T + band * len(rows) + 70
    pw = W - L - R
    lo, hi = -175, 215
    sx = lambda v: L + pw * (v - lo) / (hi - lo)
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
           f'font-family="system-ui, -apple-system, sans-serif">',
           f'<rect width="{W}" height="{H}" fill="{SURFACE}"/>',
           f'<text x="24" y="34" font-size="18" font-weight="600" fill="{INK}">'
           f'Why delaying the redirect costs little: GC copies shift between regions</text>',
           f'<text x="24" y="58" font-size="13" fill="{INK2}">Post-shift GC copies minus Redirect, '
           f'summed over 4× (GiB), mean of seeds 42/43/44 · net = A + B + C = ΔMedia</text>']
    lx = 24
    for color, name in ((C_COL, "cold C copies"), (B_COL, "hot B copies")):
        out.append(f'<rect x="{lx}" y="74" width="12" height="12" rx="2" fill="{color}"/>')
        out.append(f'<text x="{lx + 18}" y="84" font-size="12" fill="{INK2}">{name}</text>')
        lx += 18 + 7.2 * len(name) + 28
    for v in range(-150, 201, 50):
        x = sx(v)
        out.append(f'<line x1="{x:.1f}" x2="{x:.1f}" y1="{T - 8}" y2="{T + band * len(rows)}" '
                   f'stroke="{AXIS if v == 0 else GRID}" stroke-width="{1.5 if v == 0 else 1}"/>')
        out.append(f'<text x="{x:.1f}" y="{T + band * len(rows) + 20}" font-size="12" '
                   f'text-anchor="middle" fill="{MUTED}">{v:+d}</text>')
    out.append(f'<text x="{sx(0):.1f}" y="{H - 16}" font-size="13" text-anchor="middle" '
               f'fill="{INK2}">GC copies vs Redirect (GiB)  ← fewer · more →</text>')
    out.append(f'<text x="{W - R + 24}" y="{T - 14}" font-size="12" fill="{MUTED}">net ΔMedia (seed range)</text>')
    for i, (label, c, b, net) in enumerate(rows):
        y0 = T + band * i + (band - 2 * bh - gap) / 2
        out.append(f'<text x="{L - 14}" y="{y0 + bh + 5:.1f}" font-size="13" text-anchor="end" '
                   f'fill="{INK}">{label}</text>')
        for y, vals, color, name in ((y0, c, C_COL, "cold C"), (y0 + bh + gap, b, B_COL, "hot B")):
            m = statistics.fmean(vals)
            out.append(bar(sx(0), sx(m), y, bh, color))
            per = ", ".join(f"{v:+.1f}" for v in vals)
            out.append(f'<rect x="{min(sx(0), sx(m)) - 4:.1f}" y="{y - 2:.1f}" '
                       f'width="{abs(sx(m) - sx(0)) + 8:.1f}" height="{bh + 4}" fill="transparent">'
                       f'<title>{label} · {name} copies vs Redirect\nmean {m:+.1f} GiB\n'
                       f'seeds 42/43/44: {per}</title></rect>')
            tx = sx(m) + (8 if m >= 0 else -8)
            out.append(f'<text x="{tx:.1f}" y="{y + bh - 4:.1f}" font-size="12" '
                       f'text-anchor="{"start" if m >= 0 else "end"}" fill="{INK2}">{m:+.1f}</text>')
        n = statistics.fmean(net)
        out.append(f'<text x="{W - R + 24}" y="{y0 + bh + 6:.1f}" font-size="14" font-weight="600" '
                   f'fill="{INK}">{n:+.1f} GiB</text>')
        out.append(f'<text x="{W - R + 24 + 96}" y="{y0 + bh + 6:.1f}" font-size="12" fill="{MUTED}">'
                   f'({min(net):+.1f} … {max(net):+.1f})</text>')
    out.append("</svg>")
    a.out.with_suffix(".svg").write_text("\n".join(out) + "\n")
    try:
        import cairosvg
        cairosvg.svg2png(url=str(a.out.with_suffix(".svg")), write_to=str(a.out.with_suffix(".png")),
                         output_width=1440)
    except ImportError:
        pass
    print(f"wrote {a.out.with_suffix('.svg')}")


if __name__ == "__main__":
    main()
