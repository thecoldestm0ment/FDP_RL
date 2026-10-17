#!/usr/bin/env python3
"""H1 v2 analysis: per-run checks and the timing summary.

  check RUN [--baseline H0RUN]   verify one run against its H0 v3 baseline;
                                 exit 1 on any failure (campaign.sh runs this
                                 after every run and stops on failure)
  summary --seeds 42 43 44 --out PREFIX
                                 ΔMedia vs Redirect for every timing level:
                                 table (.txt), rows (.json/.csv), and SVGs
                                 (PREFIX_h1a.svg, PREFIX_h1b.svg, PREFIX_tau.svg)

Media = NAND user + GC copy pages (c0 log at each drained flush), counted from
the end of preconditioning. x = application writes after the shift (rewrite
writes excluded); a rewrite's Media is charged at the chunk boundary where it
runs. τ = B turnover at the intervention (0.3 per post chunk). Endpoints come
from the H0 v3 main runs: Redirect (H1-a τ=0, H1-b never), Stale (H1-a never),
Rewrite (H1-b τ=0).

Checks: same FTL state hash and counters as the baseline at every snapshot
before the intervention; same application LBA stream in every chunk; expected
placement labels; and from H1_BMAP (owner RUH of each B block) that a rewrite
moved exactly the old B still on PID1's RUH, leaving none behind.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import statistics
import struct
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
H0RUNS = ROOT / "exp/H0/v3/runs"
H1RUNS = ROOT / "exp/H1/v2/runs"
FIELD = re.compile(r"(\w+)=([^\s]+)")
GIB = 2 ** 30 / 4096  # 4 KiB pages per GiB
BASE_OF = {"delay": "stale", "late_rewrite": "redirect", "oracle_rewrite": "redirect"}
SURFACE, INK, INK2, MUTED = "#fcfcfb", "#0b0b0b", "#52514e", "#898781"
GRID, AXIS = "#e1e0d9", "#c3c2b7"
BLUE, ORANGE = "#2a78d6", "#eb6834"
# post chunk of each planned level (τ = 0.3 per chunk)
LEVELS = {"delay": (2, 4, 8), "late_rewrite": (1, 2, 4, 8), "oracle_rewrite": (2,)}
RAMP = {"delay": ["#6aa5e6", "#2a78d6", "#1b4f91"],
        "late_rewrite": ["#f0a06a", "#e57a3c", "#c75a1e", "#8f3a0f"],
        "oracle_rewrite": ["#7b4fb0"]}


def c0(path: Path) -> tuple[int, int, int]:
    raw = path.read_bytes()
    return tuple(struct.unpack_from("<Q", raw, o)[0] for o in (8, 16, 24))


def load(run: Path) -> dict:
    manifest = json.loads((run / "manifest.json").read_text())
    order = (run / "guest/snapshot-order.txt").read_text().split()
    states, bmaps, pending = [], [], None
    with (run / "femu.log").open(errors="replace") as log:
        for line in log:
            if "H1_BMAP " in line:
                pending = {k: int(v) if v.isdigit() else v for k, v in FIELD.findall(line)}
            elif "H0_STATE " in line:
                states.append(dict(FIELD.findall(line)))
                bmaps.append(pending)
                pending = None
    if len(states) != len(order):
        raise SystemExit(f"{run}: {len(states)} H0_STATE lines for {len(order)} snapshots")
    phases = {t: json.loads((run / f"guest/phases/{t}.json").read_text())
              for t in order if t != "000_before"}
    return {"dir": run, "name": run.name, "manifest": manifest, "order": order,
            "c0": {t: c0(run / f"guest/snapshots/{t}.c0.bin") for t in order},
            "state": dict(zip(order, (s["state"] for s in states))),
            "bmap": dict(zip(order, bmaps)), "phase": phases}


def policy_of(r: dict) -> tuple[str, int]:
    m = r["manifest"]
    return m["policy"], m.get("at_chunk", 0)


def walk(r: dict) -> dict:
    """Cumulative Media after preconditioning, on the post-chunk grid.
    y[i] includes a rewrite that ran right after chunk i; pts keeps the
    rewrite as its own (chunk index, y) point so plots show a vertical step."""
    order = r["order"]
    pre_end = [t for t in order if t.startswith("pre_")][-1]
    prev, x, y = pre_end, 0, 0
    xs, ys, pts, inter = [0], [0], [(0, 0)], None
    for t in order[order.index(pre_end) + 1:]:
        (h0, g0, n0), (h1, g1, n1) = r["c0"][prev], r["c0"][t]
        media = (n1 - n0) + (g1 - g0)
        if t == "rewrite":
            inter = {"host": h1 - h0, "media": media, "gc": g1 - g0, "at_chunk": len(xs) - 1,
                     "elapsed_s": r["phase"][t]["elapsed_ns"] / 1e9}
            y += media
            ys[-1] = y
        else:
            x += h1 - h0
            y += media
            xs.append(x)
            ys.append(y)
        pts.append((len(xs) - 1, y))
        prev = t
    return {"pre_end": pre_end, "x": xs, "y": ys, "pts": pts, "intervention": inter}


# ---------------------------------------------------------------- check
def check(run: Path, baseline: Path | None) -> int:
    r = load(run)
    pol, at = policy_of(r)
    seed = r["manifest"]["seed"]
    bdir = baseline or H0RUNS / f"main_g24_{BASE_OF.get(pol, pol)}_s{seed}_01"
    b = load(bdir)
    fails, notes = [], []
    order = r["order"]
    pre_end = [t for t in order if t.startswith("pre_")][-1]
    # Before the intervention the run must be the baseline, snapshot by snapshot.
    last = {"delay": f"post_{at:02d}", "late_rewrite": f"post_{at:02d}",
            "oracle_rewrite": pre_end}.get(pol, order[-1])
    prefix = order[:order.index(last) + 1]
    for t in prefix:
        if t not in b["state"]:
            fails.append(f"baseline has no snapshot {t}")
            break
        if r["state"][t] != b["state"][t] or r["c0"][t] != b["c0"][t]:
            fails.append(f"FTL state differs from baseline at {t} "
                         f"({r['state'][t][:8]} vs {b['state'][t][:8]})")
            break
    else:
        notes.append(f"FTL state = baseline at all {len(prefix)} snapshots through {last}")
    # Application request stream: identical LBAs in every chunk.
    app = [t for t in order if t == "fill" or t.startswith(("pre_", "post_"))]
    bad = [t for t in app if t not in b["phase"]
           or r["phase"][t]["logical_hash"] != b["phase"][t]["logical_hash"]
           or r["phase"][t]["writes"] != b["phase"][t]["writes"]]
    if bad:
        fails.append(f"application LBA stream differs in {', '.join(bad[:4])}")
    else:
        notes.append(f"application LBA stream = baseline in all {len(app)} chunks")
    # Placement labels follow the policy (the generator derives PIDs from them).
    for t in (t for t in order if t.startswith("post_")):
        i = int(t[5:])
        want = "stale" if pol == "stale" or (pol == "delay" and i <= at) else "redirect"
        if r["phase"][t]["placement"] != want:
            fails.append(f"{t} placement {r['phase'][t]['placement']}, expected {want}")
    # Owner RUH of every B block (H1_BMAP).
    bm = r["bmap"]
    bsize = r["manifest"]["geometry"]["blocks"] * 32 // 3
    if any(bm[t] is None for t in order):
        fails.append("H1_BMAP missing (FEMU without the H1 v2 trace?)")
    else:
        if bm[pre_end]["all_stale"] != bsize:
            fails.append(f"at shift {bm[pre_end]['all_stale']} of {bsize} B blocks on PID1")
        stray = [t for t in order[order.index("fill"):]
                 if bm[t]["all_other"] or bm[t]["all_unmapped"]]
        if stray:
            fails.append(f"B blocks outside PID1/PID2 or unmapped at {stray[0]}")
        if "rewrite" in order:
            rw = r["phase"]["rewrite"]
            k = rw.get("skip_chunks", 0)
            before = order[order.index("rewrite") - 1]
            want_k = at if pol in ("late_rewrite", "oracle_rewrite") else 0
            if k != want_k:
                fails.append(f"rewrite excluded {k} chunks, expected {want_k}")
            if pol == "late_rewrite" or pol == "rewrite":
                # Host-replayed untouched set size = FTL count of old B on PID1.
                if bm[before]["all_stale"] != rw["writes"]:
                    fails.append(f"rewrite wrote {rw['writes']} but {bm[before]['all_stale']} "
                                 f"old B blocks were on PID1")
                if bm["rewrite"]["all_stale"]:
                    fails.append(f"{bm['rewrite']['all_stale']} old B blocks left on PID1")
            if pol == "oracle_rewrite":
                if bm["rewrite"]["all_stale"] != bsize - rw["writes"]:
                    fails.append("oracle: PID1 B after rewrite != B - rewritten")
                if bm[f"post_{at:02d}"]["all_stale"]:
                    fails.append(f"oracle: {bm[f'post_{at:02d}']['all_stale']} old B blocks "
                                 f"on PID1 after chunk {at}")
            if not fails:
                notes.append(f"rewrite moved {rw['writes']} blocks "
                             f"({rw['writes'] / bsize:.1%} of B); PID1 B before "
                             f"{bm[before]['all_stale']}, after {bm['rewrite']['all_stale']}")
    print(f"{run.name}: {pol} at {at}, seed {seed}, baseline {bdir.name}")
    for n in notes:
        print(f"  ok   {n}")
    for f in fails:
        print(f"  FAIL {f}")
    print("H1V2_CHECK_PASS" if not fails else "H1V2_CHECK_FAIL")
    return 1 if fails else 0


# ---------------------------------------------------------------- summary
def tau_of(r: dict, at: int) -> float:
    m = r["manifest"]
    return at * (m["post_writes"] // m["post_chunks"]) * 0.8 / (m["geometry"]["blocks"] * 32 / 3)


def discover(seeds: list[int]) -> dict:
    runs = {}
    for mf in sorted(H1RUNS.glob("h1*/manifest.json")):
        d = mf.parent
        st = d / "exit-status.json"
        if not st.exists() or json.loads(st.read_text())["guest_rc"] != 0:
            continue
        m = json.loads(mf.read_text())
        if (m.get("study") != "H1-v2" or m["seed"] not in seeds or m["qd"] != 1
                or m["post_chunks"] != 32 or m["pre_chunks"] != 12
                or m["nand_latency"]["pg_wr_lat"] != 0):
            continue
        runs[(m["policy"], m["at_chunk"], m["seed"])] = d
    return runs


def summary(seeds: list[int], out: Path) -> None:
    found = discover(seeds)
    rows, curves, paths, missing = [], {}, {}, []
    for seed in seeds:
        base = {p: load(H0RUNS / f"main_g24_{p}_s{seed}_01") for p in ("redirect", "stale", "rewrite")}
        bw = {p: walk(r) for p, r in base.items()}
        red = bw["redirect"]
        sgap = bw["stale"]["y"][-1] - red["y"][-1]
        tau_chunk = tau_of(base["redirect"], 1)
        entries = [("h1a", "redirect", 0, base["redirect"]), ("h1a", "stale", None, base["stale"]),
                   ("h1b", "rewrite", 0, base["rewrite"]), ("h1b", "redirect", None, base["redirect"])]
        for (pol, at, s), d in sorted(found.items()):
            if s == seed:
                entries.append(("h1a" if pol == "delay" else "h1b", pol, at, load(d)))
        for exp, pol, at, r in entries:
            w = bw.get(pol) if r is base.get(pol) else walk(r)
            if w["x"] != red["x"]:
                raise SystemExit(f"{r['name']}: chunk grid differs from Redirect")
            dy = [(y - b) / GIB for y, b in zip(w["y"], red["y"])]
            row = {"experiment": exp, "policy": pol, "at_chunk": at,
                   "tau": None if at is None else at * tau_chunk, "seed": seed, "run": r["name"],
                   "dmedia_end_GiB": dy[-1], "stale_gap_GiB": sgap / GIB}
            if pol == "delay":
                row["dmedia_at_switch_GiB"] = dy[at]
                row["dmedia_after_switch_GiB"] = dy[-1] - dy[at]
                row["share_of_stale_gap"] = dy[-1] / (sgap / GIB)
            inter = w["intervention"]
            if inter:
                bsize = r["manifest"]["geometry"]["blocks"] * 32 // 3
                payback = next((f"post_{i:02d}" for i in range(inter["at_chunk"], len(dy))
                                if dy[i] <= 0), None)
                a = inter["at_chunk"]
                row.update({"rewrite_GiB": inter["host"] / GIB,
                            "rewrite_share_of_B": inter["host"] / bsize,
                            "intervention_media_GiB": inter["media"] / GIB,
                            "intervention_s": inter["elapsed_s"],
                            "post_saving_GiB": ((red["y"][-1] - red["y"][a])
                                                - (w["y"][-1] - w["y"][a])) / GIB,
                            "payback": payback})
            rows.append(row)
            curves.setdefault((exp, pol, at), {})[seed] = dy
            # plot path, and the point where the policy acts (switch or after rewrite)
            path = [(i, (y - red["y"][i]) / GIB) for i, y in w["pts"]]
            act = (at if pol == "delay" else
                   w["pts"].index((inter["at_chunk"], w["y"][inter["at_chunk"]])) if inter else None)
            paths.setdefault((exp, pol, at), {})[seed] = (path, act)
        xg = [x / GIB for x in red["x"]]
    for pol, ats in LEVELS.items():
        for at in ats:
            for s in seeds:
                if (pol, at, s) not in found:
                    missing.append(f"{pol} at {at} s{s}")

    def fmt(v):
        return "-" if v is None else (f"{v:.3f}" if isinstance(v, float) else str(v))

    lines = []
    for exp, title in (("h1a", "H1-a delayed redirect: ΔMedia vs Redirect at 4x (GiB)"),
                       ("h1b", "H1-b late rewrite of untouched old B: ΔMedia vs Redirect at 4x (GiB)")):
        lines.append(title)
        lines.append(f"{'level':<26}" + "".join(f"{'s' + str(s):>9}" for s in seeds)
                     + f"{'mean':>9}{'min..max':>17}  extra (mean)")
        keys = sorted({(r["policy"], r["at_chunk"]) for r in rows if r["experiment"] == exp},
                      key=lambda k: (k[1] is None, k[1] if k[1] is not None else 0, k[0]))
        for pol, at in keys:
            sel = {r["seed"]: r for r in rows if r["experiment"] == exp
                   and r["policy"] == pol and r["at_chunk"] == at}
            vals = [sel[s]["dmedia_end_GiB"] for s in seeds if s in sel]
            one = next(iter(sel.values()))
            label = (f"{pol} τ={one['tau']:.1f}" if at is not None else f"{pol} (never)")
            if pol in ("redirect", "rewrite", "stale"):
                label += " [H0]"
            extra = []
            for k, name in (("share_of_stale_gap", "of Stale gap"),
                            ("dmedia_at_switch_GiB", "GiB by switch"),
                            ("rewrite_share_of_B", "of B rewritten"),
                            ("intervention_media_GiB", "GiB rewrite Media"),
                            ("post_saving_GiB", "GiB saved after")):
                if k in one:
                    m = statistics.fmean(sel[s][k] for s in sel)
                    extra.append(f"{m:.0%} {name}" if "share" in k else f"{m:.1f} {name}")
            if "payback" in one:
                extra.append("payback " + "/".join(str(sel[s]["payback"]) for s in sel))
            lines.append(f"{label:<26}" + "".join(f"{fmt(sel[s]['dmedia_end_GiB']) if s in sel else '-':>9}"
                                                  for s in seeds)
                         + f"{statistics.fmean(vals):>9.2f}{min(vals):>8.2f}..{max(vals):.2f}  "
                         + ", ".join(extra))
        lines.append("")
    # Oracle split: late(τ) - Rewrite(0) = [oracle(τ) - Rewrite(0)] + [late(τ) - oracle(τ)]
    by = {(r["policy"], r["at_chunk"], r["seed"]): r["dmedia_end_GiB"] for r in rows}
    for at in LEVELS["oracle_rewrite"]:
        have = [s for s in seeds if all(k in by for k in
                (("late_rewrite", at, s), ("oracle_rewrite", at, s), ("rewrite", 0, s)))]
        if not have:
            continue
        lines.append(f"H1-b split at τ={0.3 * at:.1f}: late - Rewrite(τ=0) = volume + timing (GiB at 4x)")
        lines.append(f"{'part':<26}" + "".join(f"{'s' + str(s):>9}" for s in have) + f"{'mean':>9}")
        parts = (("volume (oracle - Rewrite)", lambda s: by[("oracle_rewrite", at, s)] - by[("rewrite", 0, s)]),
                 ("timing (late - oracle)", lambda s: by[("late_rewrite", at, s)] - by[("oracle_rewrite", at, s)]),
                 ("total (late - Rewrite)", lambda s: by[("late_rewrite", at, s)] - by[("rewrite", 0, s)]))
        for name, f in parts:
            vals = [f(s) for s in have]
            lines.append(f"{name:<26}" + "".join(f"{v:>9.3f}" for v in vals)
                         + f"{statistics.fmean(vals):>9.2f}")
        lines.append("")
    if missing:
        lines.append("missing H1 runs: " + ", ".join(missing))
    text = "\n".join(lines)
    print(text)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.with_suffix(".txt").write_text(text + "\n")
    out.with_suffix(".json").write_text(json.dumps(rows, indent=2, ensure_ascii=False) + "\n")
    cols = list(dict.fromkeys(k for r in rows for k in r))
    with out.with_suffix(".csv").open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols)
        w.writeheader()
        w.writerows(rows)
    plot_curves(out.parent / f"{out.name}_h1a.svg", "h1a", paths, xg, seeds)
    plot_curves(out.parent / f"{out.name}_h1b.svg", "h1b", paths, xg, seeds)
    plot_tau(out.parent / f"{out.name}_tau.svg", rows, seeds)


# ---------------------------------------------------------------- SVG
def nice_step(span: float) -> float:
    raw = span / 6
    mag = 10 ** (len(str(int(raw))) - 1) if raw >= 1 else 0.1
    return next(m * mag for m in (1, 2, 2.5, 5, 10) if m * mag >= raw)


def frame(W, H, L, R, T, B, ymin, ymax, title, subtitle, ylabel):
    step = nice_step((ymax - ymin) or 1)
    ymin, ymax = step * (ymin // step), step * -(-ymax // step)
    if ymax == ymin:
        ymax = ymin + step
    pw, ph = W - L - R, H - T - B
    sy = lambda y: T + ph * (ymax - y) / (ymax - ymin)
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
           f'font-family="system-ui, -apple-system, sans-serif">',
           f'<rect width="{W}" height="{H}" fill="{SURFACE}"/>',
           f'<text x="{L}" y="34" font-size="18" font-weight="600" fill="{INK}">{title}</text>',
           f'<text x="{L}" y="58" font-size="13" fill="{INK2}">{subtitle}</text>',
           f'<text transform="translate(22 {T + ph / 2}) rotate(-90)" font-size="13" '
           f'text-anchor="middle" fill="{INK2}">{ylabel}</text>']
    y = ymin
    while y <= ymax + 1e-9:
        zero = abs(y) < 1e-9
        out.append(f'<line x1="{L}" x2="{L + pw}" y1="{sy(y):.1f}" y2="{sy(y):.1f}" '
                   f'stroke="{AXIS if zero else GRID}" stroke-width="{1.5 if zero else 1}"/>')
        out.append(f'<text x="{L - 10}" y="{sy(y) + 4:.1f}" font-size="12" text-anchor="end" '
                   f'fill="{MUTED}">{y + 0.0:+g}</text>')
        y += step
    return out, sy, pw, ph


def end_labels(out, labels, x0):
    labels.sort()
    for i in range(1, len(labels)):
        labels[i][0] = max(labels[i][0], labels[i - 1][0] + 30)
    for ly, color, name, sub in labels:
        out.append(f'<rect x="{x0}" y="{ly - 5:.1f}" width="10" height="10" rx="2" fill="{color}"/>')
        out.append(f'<text x="{x0 + 16}" y="{ly + 4:.1f}" font-size="12" fill="{INK}">{name}</text>')
        out.append(f'<text x="{x0 + 16}" y="{ly + 19:.1f}" font-size="11" fill="{MUTED}">{sub}</text>')


def plot_curves(path: Path, exp: str, curves: dict, xg: list[float], seeds: list[int]) -> None:
    """curves[key][seed] = ([(chunk index, ΔMedia GiB), ...], index of the action point)."""
    series = []  # (key, color, dash, name)
    if exp == "h1a":
        series.append((("h1a", "stale", None), INK2, "6 5", "Stale (never) [H0]"))
        for i, at in enumerate(LEVELS["delay"]):
            series.append((("h1a", "delay", at), RAMP["delay"][i], "", f"Delay τ={0.3 * at:.1f}"))
        title = "H1-a: cost of delaying the redirect"
    else:
        series.append((("h1b", "rewrite", 0), INK2, "6 5", "Rewrite τ=0 [H0]"))
        for i, at in enumerate(LEVELS["late_rewrite"]):
            series.append((("h1b", "late_rewrite", at), RAMP["late_rewrite"][i], "",
                           f"Late rewrite τ={0.3 * at:.1f}"))
        for i, at in enumerate(LEVELS["oracle_rewrite"]):
            if ("h1b", "oracle_rewrite", at) in curves:
                series.append((("h1b", "oracle_rewrite", at), RAMP["oracle_rewrite"][i], "2 4",
                               f"Oracle rewrite τ={0.3 * at:.1f}"))
        title = "H1-b: rewriting the untouched old B later"
    series = [s for s in series if s[0] in curves]
    if not series:
        return
    means = {}
    for key, *_ in series:
        have = [curves[key][s][0] for s in seeds if s in curves[key]]
        means[key] = [(have[0][j][0], statistics.fmean(p[j][1] for p in have))
                      for j in range(len(have[0]))]
    allv = [v for m in means.values() for _, v in m] + [0]
    W, H, L, R, T, B = 960, 560, 84, 230, 92, 64
    out, sy, pw, ph = frame(W, H, L, R, T, B, min(allv), max(allv), title,
                            f"g24, QD1, mean of seeds {', '.join(map(str, seeds))} · vs Redirect "
                            f"(0 line) · dot = switch / rewrite point", "ΔMedia (GiB)")
    xmax = xg[-1]
    sx = lambda x: L + pw * x / xmax
    for k in range(0, int(xmax // 24) + 1):
        out.append(f'<text x="{sx(k * 24):.1f}" y="{T + ph + 22}" font-size="12" '
                   f'text-anchor="middle" fill="{MUTED}">{k * 24} GiB ({k}×)</text>')
    out.append(f'<text x="{L + pw / 2}" y="{H - 14}" font-size="13" text-anchor="middle" '
               f'fill="{INK2}">Application writes after shift (GiB, 1× = namespace, 0.125× = τ 0.3)</text>')
    labels = []
    for key, color, dash, name in series:
        m = means[key]
        pts = " ".join(f"{sx(xg[i]):.1f},{sy(v):.1f}" for i, v in m)
        d = f' stroke-dasharray="{dash}"' if dash else ""
        out.append(f'<polyline points="{pts}" fill="none" stroke="{color}" stroke-width="2.5" '
                   f'stroke-linejoin="round"{d}/>')
        for j, (i, v) in enumerate(m):
            per = ", ".join(f"s{s} {curves[key][s][0][j][1]:+.1f}" for s in seeds if s in curves[key])
            out.append(f'<circle cx="{sx(xg[i]):.1f}" cy="{sy(v):.1f}" r="6" fill="transparent">'
                       f'<title>{name}\nx = {xg[i]:.1f} GiB\nmean {v:+.2f} GiB\n{per}</title></circle>')
        act = next(iter(curves[key].values()))[1]
        if act is not None and key[1] not in ("stale", "redirect"):
            i, v = m[act]
            out.append(f'<circle cx="{sx(xg[i]):.1f}" cy="{sy(v):.1f}" r="4.5" fill="{color}" '
                       f'stroke="{SURFACE}" stroke-width="2"/>')
        ends = [curves[key][s][0][-1][1] for s in seeds if s in curves[key]]
        labels.append([sy(m[-1][1]), color, f"{name} {round(m[-1][1], 1) + 0.0:+.1f}",
                       f"seeds {min(ends):+.1f} … {max(ends):+.1f} (n={len(ends)})"])
    end_labels(out, labels, L + pw + 10)
    out.append("</svg>")
    path.write_text("\n".join(out) + "\n")


def plot_tau(path: Path, rows: list[dict], seeds: list[int]) -> None:
    """ΔMedia at 4x vs intervention τ; 'never' sits past a break on the right."""
    pts = {}
    for r in rows:
        if r["policy"] == "oracle_rewrite":
            continue
        pts.setdefault((r["experiment"], r["tau"]), []).append(r["dmedia_end_GiB"])
    allv = [v for vs in pts.values() for v in vs] + [0]
    W, H, L, R, T, B = 960, 540, 84, 230, 92, 64
    out, sy, pw, ph = frame(W, H, L, R, T, B, min(allv), max(allv),
                            "Total cost vs intervention timing",
                            f"ΔMedia vs Redirect at 4× after shift · dot = mean, bar = seed range "
                            f"(seeds {', '.join(map(str, seeds))})", "ΔMedia at 4× (GiB)")
    never = 3.2
    sx = lambda t: L + pw * (never if t is None else t) / 3.4
    for t in (0, 0.6, 1.2, 1.8, 2.4):
        out.append(f'<text x="{sx(t):.1f}" y="{T + ph + 22}" font-size="12" text-anchor="middle" '
                   f'fill="{MUTED}">{t:g}</text>')
    out.append(f'<text x="{sx(None):.1f}" y="{T + ph + 22}" font-size="12" text-anchor="middle" '
               f'fill="{MUTED}">never</text>')
    bx = sx(2.8)
    out.append(f'<line x1="{bx - 4}" x2="{bx + 4}" y1="{T + ph + 4}" y2="{T + ph - 4}" stroke="{MUTED}"/>')
    out.append(f'<text x="{L + pw / 2}" y="{H - 14}" font-size="13" text-anchor="middle" '
               f'fill="{INK2}">Intervention at B turnover τ (old B left ≈ e^-τ)</text>')
    labels = []
    for exp, color, name in (("h1a", BLUE, "H1-a delayed redirect"),
                             ("h1b", ORANGE, "H1-b late rewrite")):
        keys = sorted((t for e, t in pts if e == exp), key=lambda t: never if t is None else t)
        if not keys:
            continue
        mean = [(t, statistics.fmean(pts[(exp, t)])) for t in keys]
        line = " ".join(f"{sx(t):.1f},{sy(v):.1f}" for t, v in mean if t is not None)
        out.append(f'<polyline points="{line}" fill="none" stroke="{color}" stroke-width="2.5"/>')
        for t, v in mean:
            vs = pts[(exp, t)]
            out.append(f'<line x1="{sx(t):.1f}" x2="{sx(t):.1f}" y1="{sy(min(vs)):.1f}" '
                       f'y2="{sy(max(vs)):.1f}" stroke="{color}" stroke-width="2"/>')
            out.append(f'<circle cx="{sx(t):.1f}" cy="{sy(v):.1f}" r="4.5" fill="{color}" '
                       f'stroke="{SURFACE}" stroke-width="2"><title>{name}\nτ = '
                       f'{"never" if t is None else f"{t:.1f}"}\nmean {v:+.2f} GiB\n'
                       f'{", ".join(f"{x:+.1f}" for x in vs)}</title></circle>')
        labels.append([sy(mean[-1][1]), color, name,
                       "never = Stale" if exp == "h1a" else "never = Redirect (0)"])
    end_labels(out, labels, L + pw + 10)
    out.append("</svg>")
    path.write_text("\n".join(out) + "\n")


def main() -> None:
    p = argparse.ArgumentParser()
    sub = p.add_subparsers(dest="cmd", required=True)
    c = sub.add_parser("check")
    c.add_argument("run", type=Path)
    c.add_argument("--baseline", type=Path)
    s = sub.add_parser("summary")
    s.add_argument("--seeds", type=int, nargs="+", required=True)
    s.add_argument("--out", type=Path, required=True)
    a = p.parse_args()
    if a.cmd == "check":
        sys.exit(check(a.run, a.baseline))
    summary(a.seeds, a.out)


if __name__ == "__main__":
    main()
