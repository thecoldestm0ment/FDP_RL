"""V4: periodic regimes (excursion E chunks shifted 10/80/10, then E chunks back to 80/10/10, repeating) over 8x,
policies = follow-with-lag L (swap during believed excursions; L=inf = never), plus spare-stay reference.
PI and II at nru 240. Gives the scale of policy differences the method evaluation must resolve, and whether II has a
thrash-regime trade-off."""
import sys
sys.path.insert(0, "/tmp/claude-0/-root-FDP-RL/b4a630b2-b1ee-48a3-9565-6cd1e282ecfe/scratchpad/plan")
from drv import *
N = 64
SEEDS = list(range(42, 48))
INF = 10 ** 6
def phase(c, E):  # True if chunk c (1-based) is in a shifted excursion
    return ((c - 1) // E) % 2 == 0
def spec(E, L, spare=False):
    toks = []
    rows = []
    for c in range(1, N + 1):
        sh = phase(c, E)
        shares, key = (S_POST, "s") if sh else (S_PRE, "i")
        if spare:
            pid = PRE if c == 1 else RED
        else:
            b = c - L
            believed = phase(b, E) if (L < INF and b >= 1) else False
            pid = SWP if believed else PRE
        rows.append((shares, pid, key))
    s = 1
    while s <= N:
        e = s
        while e + 1 <= N and rows[e] == rows[s - 1]:
            e += 1
        toks.append(seg(s, e, rows[s - 1][0], rows[s - 1][1], rows[s - 1][2]))
        s = e + 1
    return toks
Es = (2, 4, 8, 16, 32)
Ls = (0, 1, 4, 8, INF)
jobs, keys = [], []
for mode in (0, 1):
    for E in Es:
        for L in Ls:
            for s in SEEDS:
                jobs.append((s, [f"post={N}", "nru=240", f"ii={mode}"] + spec(E, L))); keys.append((mode, E, L, s))
        for s in SEEDS:
            jobs.append((s, [f"post={N}", "nru=240", f"ii={mode}"] + spec(E, 1, spare=True))); keys.append((mode, E, 'spare', s))
R = dict(zip(keys, pmap(jobs, workers=15)))
cm = {k: cum_media(v) for k, v in R.items()}
for mode in (0, 1):
    print(f"===== {'II' if mode else 'PI'} nru 240: total Media over 8x relative to never (L=inf); + = cheaper than never")
    for E in Es:
        line = f" E={E/8:.3f}x:"
        for L in list(Ls) + ['spare']:
            if L == INF: continue
            v = [cm[(mode, E, INF, s)][N] - cm[(mode, E, L, s)][N] for s in SEEDS]
            lab = 'spare' if L == 'spare' else f"L{L}"
            line += f"  {lab} {f(v)}"
        print(line)
