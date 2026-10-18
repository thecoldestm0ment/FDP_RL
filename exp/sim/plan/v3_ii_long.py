"""V3: (a) II (shared GC destination) at nru 240 and 212: persistent K/S1/R1 and revert D=0.5x,1x,2x with lag-1 swap-back,
spare stay; horizon 6x. (b) PI nru 240 and 212 long horizon (12x) for full accounting: persistent K,S1,R1 and revert
D=2x,4x,6x (lag-1 back)."""
import sys
sys.path.insert(0, "/tmp/claude-0/-root-FDP-RL/b4a630b2-b1ee-48a3-9565-6cd1e282ecfe/scratchpad/plan")
from drv import *
SEEDS = list(range(42, 52))
def arms(N, Ds):
    A = {"K": [seg(1, N, S_POST, PRE)],
         "S1": [seg(1, 1, S_POST, PRE), seg(2, N, S_POST, SWP)],
         "R1": [seg(1, 1, S_POST, PRE), seg(2, N, S_POST, RED)]}
    for D in Ds:
        A[f"K_{D}"] = [seg(1, D, S_POST, PRE), seg(D + 1, N, S_PRE, PRE, "i")]
        A[f"S_{D}"] = [seg(1, 1, S_POST, PRE), seg(2, D, S_POST, SWP), seg(D + 1, D + 1, S_PRE, SWP, "i"),
                       seg(D + 2, N, S_PRE, PRE, "i")]
        A[f"Rs_{D}"] = [seg(1, 1, S_POST, PRE), seg(2, D, S_POST, RED), seg(D + 1, N, S_PRE, RED, "i")]
    return A
jobs, keys = [], []
NA = 48; DA = (4, 8, 16)
for nru in (240, 212):
    for a, sp in arms(NA, DA).items():
        for s in SEEDS:
            jobs.append((s, [f"post={NA}", f"nru={nru}", "ii=1"] + sp)); keys.append(("II", nru, a, s))
NB = 96; DB = (16, 32, 48)
for nru in (240, 212):
    for a, sp in arms(NB, DB).items():
        if a.startswith("Rs"): continue
        for s in SEEDS:
            jobs.append((s, [f"post={NB}", f"nru={nru}"] + sp)); keys.append(("PIL", nru, a, s))
R = dict(zip(keys, pmap(jobs, workers=15)))
cm = {k: cum_media(v) for k, v in R.items()}
for nru in (240, 212):
    pw = [R[("II", nru, 'K', s)]['pre'] for s in SEEDS]
    print(f"===== II nru {nru}: pre-shift WAF {st.fmean(pw):.3f}")
    def c(a, b, k): return [cm[("II", nru, a, s)][k] - cm[("II", nru, b, s)][k] for s in SEEDS]
    for a, b in (("K", "S1"), ("K", "R1"), ("S1", "R1")):
        print(f"  persistent {a}-{b}", " | ".join(f(c(a, b, k)) for k in (8, 16, 32, 48)))
    for D in DA:
        print(f"  D={D/8:.2f}x V=K_D-S_D at D/D+1x/4x/6x", " | ".join(f(c(f'K_{D}', f'S_{D}', k)) for k in (D, D + 8, 32, 48)),
              " || Vs", " | ".join(f(c(f'K_{D}', f'Rs_{D}', k)) for k in (D, 32, 48)))
for nru in (240, 212):
    print(f"===== PI long nru {nru}")
    def c(a, b, k): return [cm[("PIL", nru, a, s)][k] - cm[("PIL", nru, b, s)][k] for s in SEEDS]
    print("  persistent K-S1 at 2/4/6/8/10/12x", " | ".join(f(c('K', 'S1', k)) for k in (16, 32, 48, 64, 80, 96)))
    print("  persistent K-R1 at 2/4/6/8/10/12x", " | ".join(f(c('K', 'R1', k)) for k in (16, 32, 48, 64, 80, 96)))
    print("  persistent S1-R1 at 2/4/6/8/10/12x", " | ".join(f(c('S1', 'R1', k)) for k in (16, 32, 48, 64, 80, 96)))
    for D in DB:
        print(f"  D={D/8:.0f}x V=K_D-S_D at 4/6/8/10/12x", " | ".join(f(c(f'K_{D}', f'S_{D}', k)) for k in (32, 48, 64, 80, 96)))
