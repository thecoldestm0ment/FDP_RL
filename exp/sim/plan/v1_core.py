"""V1: core arms (keep / swap lag0,1 / spare-redirect lag1) persistent and with revert at D=1x,2x,3x,
horizon 6x, at nru 212 (g24) and 240 (WAF~3), PI. Lag-1 swap-back and oracle swap-back variants, spare 'stay'."""
import sys, json
sys.path.insert(0, "/tmp/claude-0/-root-FDP-RL/b4a630b2-b1ee-48a3-9565-6cd1e282ecfe/scratchpad/plan")
from drv import *
N = 48
SEEDS = list(range(42, 52))
def arms():
    A = {"K": [seg(1, N, S_POST, PRE)],
         "S0": [seg(1, N, S_POST, SWP)],
         "S1": [seg(1, 1, S_POST, PRE), seg(2, N, S_POST, SWP)],
         "R1": [seg(1, 1, S_POST, PRE), seg(2, N, S_POST, RED)]}
    for D in (8, 16, 24):
        A[f"K_{D}"] = [seg(1, D, S_POST, PRE), seg(D + 1, N, S_PRE, PRE, "i")]
        A[f"S_{D}"] = [seg(1, 1, S_POST, PRE), seg(2, D, S_POST, SWP), seg(D + 1, D + 1, S_PRE, SWP, "i"),
                       seg(D + 2, N, S_PRE, PRE, "i")]
        A[f"So_{D}"] = [seg(1, 1, S_POST, PRE), seg(2, D, S_POST, SWP), seg(D + 1, N, S_PRE, PRE, "i")]
        A[f"Rs_{D}"] = [seg(1, 1, S_POST, PRE), seg(2, D, S_POST, RED), seg(D + 1, N, S_PRE, RED, "i")]
    return A
A = arms()
jobs, keys = [], []
for nru in (212, 240):
    for a, sp in A.items():
        for s in SEEDS:
            jobs.append((s, [f"post={N}", f"nru={nru}"] + sp)); keys.append((nru, a, s))
R = dict(zip(keys, pmap(jobs, workers=15)))
cm = {k: cum_media(v) for k, v in R.items()}
out = {}
for nru in (212, 240):
    pw = [R[(nru, 'K', s)]['pre'] for s in SEEDS]
    print(f"===== nru {nru}: pre-shift WAF {st.fmean(pw):.3f} sd {st.stdev(pw):.3f}")
    def c(a, b, k): return [cm[(nru, a, s)][k] - cm[(nru, b, s)][k] for s in SEEDS]
    print(" persistent, contrasts at 1x/2x/4x/6x (GiB; + = second arm cheaper)")
    for a, b in (("K", "S1"), ("K", "S0"), ("K", "R1"), ("S1", "R1"), ("S1", "S0")):
        print(f"  {a}-{b:3s}", " | ".join(f(c(a, b, k)) for k in (8, 16, 32, 48)))
    # rates
    def rate(a, b, k0, k1): return [((cm[(nru, a, s)][k1] - cm[(nru, b, s)][k1]) - (cm[(nru, a, s)][k0] - cm[(nru, b, s)][k0])) / ((k1 - k0) / 8) for s in SEEDS]
    print("  rate 1x-4x K-R1", f(rate('K', 'R1', 8, 32)), " K-S1", f(rate('K', 'S1', 8, 32)), " S1-R1", f(rate('S1', 'R1', 8, 32)))
    print("  rate 2x-6x K-R1", f(rate('K', 'R1', 16, 48)), " K-S1", f(rate('K', 'S1', 16, 48)), " S1-R1", f(rate('S1', 'R1', 16, 48)))
    abs_rate = [(cm[(nru, 'K', s)][32] - cm[(nru, 'K', s)][16]) / 2 for s in SEEDS]
    print("  absolute keep Media per 1x (2x-4x):", f(abs_rate))
    for D in (8, 16, 24):
        print(f" revert D={D/8:.0f}x: V=K_D-S_D (lag1 back), Vo=K_D-So_D (oracle back), Vs=K_D-Rs_D (spare stay) at D, D+1x, 4x, 6x")
        ks = [D, D + 8, 32, 48]
        print("   V  ", " | ".join(f(c(f'K_{D}', f'S_{D}', k)) for k in ks))
        print("   Vo ", " | ".join(f(c(f'K_{D}', f'So_{D}', k)) for k in ks))
        print("   Vs ", " | ".join(f(c(f'K_{D}', f'Rs_{D}', k)) for k in ks))
for k, v in cm.items():
    out["%d|%s|%d" % k] = v
json.dump(out, open("/tmp/claude-0/-root-FDP-RL/b4a630b2-b1ee-48a3-9565-6cd1e282ecfe/scratchpad/plan/v1_core.json", "w"))
