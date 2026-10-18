"""V2: (a) no-shift activation control: keep layout vs 3-handle layout under 80/10/10 for 6x;
(b) migration vs OP: spare Rewrite (H0) vs Redirect, scarce swap+migrate-old-A vs swap, at nru 212 and 240;
(c) frozen-A scenario (post shares 0/80/20): keep, swap(lag0), swap+migrate old A, spare redirect."""
import sys
sys.path.insert(0, "/tmp/claude-0/-root-FDP-RL/b4a630b2-b1ee-48a3-9565-6cd1e282ecfe/scratchpad/plan")
from drv import *
SEEDS = list(range(42, 50))
N = 48
F = "0,80,20"
A = {
 "base": [seg(1, N, S_PRE, PRE, "i")],
 "sep3": [seg(1, N, S_PRE, RED, "i")],
 "R0": [seg(1, N, S_POST, RED)],
 "RW0": [seg(1, N, S_POST, RED), "mig=0:1:1:2"],
 "K": [seg(1, N, S_POST, PRE)],
 "S0": [seg(1, N, S_POST, SWP)],
 "SM0": [seg(1, N, S_POST, SWP), "mig=0:0:0:1"],
 "SM8": [seg(1, N, S_POST, SWP), "mig=8:0:0:1"],
 "fK": [seg(1, N, F, PRE)],
 "fS0": [seg(1, N, F, SWP)],
 "fSM0": [seg(1, N, F, SWP), "mig=0:0:0:1"],
 "fR0": [seg(1, N, F, RED)],
}
jobs, keys = [], []
for nru in (212, 240):
    for a, sp in A.items():
        for s in SEEDS:
            jobs.append((s, [f"post={N}", f"nru={nru}"] + sp)); keys.append((nru, a, s))
R = dict(zip(keys, pmap(jobs, workers=15)))
cm = {k: cum_media(v) for k, v in R.items()}
for nru in (212, 240):
    print(f"===== nru {nru}")
    def c(a, b, k): return [cm[(nru, a, s)][k] - cm[(nru, b, s)][k] for s in SEEDS]
    print(" (a) no-shift: sep3-base at 1x/2x/4x/6x", " | ".join(f(c('sep3', 'base', k)) for k in (8, 16, 32, 48)))
    mg = lambda a: [R[(nru, a, s)]['migs'][0] for s in SEEDS]
    for a in ("RW0", "SM0", "SM8", "fSM0"):
        m = mg(a)
        mv = st.fmean(x['moved'] for x in m) / GIB; md = st.fmean(x['media'] for x in m) / GIB
        print(f"  {a}: moved {mv:.2f} GiB, migration Media {md:.2f} GiB ({md/mv:.2f}/GiB)")
    print(" (b) RW0-R0 (rewrite vs redirect, + = rewrite costs more) at 1x/2x/4x/6x", " | ".join(f(c('RW0', 'R0', k)) for k in (8, 16, 32, 48)))
    print("     SM0-S0 (swap+migrate A vs swap)                     ", " | ".join(f(c('SM0', 'S0', k)) for k in (8, 16, 32, 48)))
    print("     SM8-S0 (swap, migrate A at 1x)                      ", " | ".join(f(c('SM8', 'S0', k)) for k in (8, 16, 32, 48)))
    print("     K-SM0                                              ", " | ".join(f(c('K', 'SM0', k)) for k in (8, 16, 32, 48)))
    print(" (c) frozen A: fK-fS0", " | ".join(f(c('fK', 'fS0', k)) for k in (8, 16, 32, 48)))
    print("               fSM0-fS0", " | ".join(f(c('fSM0', 'fS0', k)) for k in (8, 16, 32, 48)))
    print("               fK-fR0", " | ".join(f(c('fK', 'fR0', k)) for k in (8, 16, 32, 48)))
    def rate(a, b, k0, k1): return [((cm[(nru, a, s)][k1] - cm[(nru, b, s)][k1]) - (cm[(nru, a, s)][k0] - cm[(nru, b, s)][k0])) / ((k1 - k0) / 8) for s in SEEDS]
    print("     rates 4x-6x: SM0-S0", f(rate('SM0', 'S0', 32, 48)), " fSM0-fS0", f(rate('fSM0', 'fS0', 32, 48)), " sep3-base", f(rate('sep3', 'base', 16, 48)))
