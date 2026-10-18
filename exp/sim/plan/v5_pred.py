"""V5: frozen-style predictions for the planned FEMU arms.
(1) 240-PI, 8x horizon: K, S1, S0, R1; revert D=1x (K_8, So_8 oracle swap-back, Rs_8 spare stay); revert D=2x (K_16, So_16);
    late swaps (BEAR-like) at 2x and 2.75x persistent.
(2) 240-II, 4x horizon: K, S0, S1, R1, K_8, So_8, Rs_8.
Seeds 42-49."""
import sys
sys.path.insert(0, "/tmp/claude-0/-root-FDP-RL/b4a630b2-b1ee-48a3-9565-6cd1e282ecfe/scratchpad/plan")
from drv import *
SEEDS = list(range(42, 50))
def arms(N):
    A = {"K": [seg(1, N, S_POST, PRE)],
         "S0": [seg(1, N, S_POST, SWP)],
         "S1": [seg(1, 1, S_POST, PRE), seg(2, N, S_POST, SWP)],
         "R1": [seg(1, 1, S_POST, PRE), seg(2, N, S_POST, RED)]}
    for D in (8, 16):
        A[f"K_{D}"] = [seg(1, D, S_POST, PRE), seg(D + 1, N, S_PRE, PRE, "i")]
        A[f"So_{D}"] = [seg(1, 1, S_POST, PRE), seg(2, D, S_POST, SWP), seg(D + 1, N, S_PRE, PRE, "i")]
        A[f"Rs_{D}"] = [seg(1, 1, S_POST, PRE), seg(2, D, S_POST, RED), seg(D + 1, N, S_PRE, RED, "i")]
    for L in (16, 22):
        A[f"SL{L}"] = [seg(1, L, S_POST, PRE), seg(L + 1, N, S_POST, SWP)]
    return A
jobs, keys = [], []
for a, sp in arms(64).items():
    for s in SEEDS:
        jobs.append((s, ["post=64", "nru=240"] + sp)); keys.append(("PI", a, s))
for a, sp in arms(32).items():
    if a.startswith("SL") or a.endswith("_16"): continue
    for s in SEEDS:
        jobs.append((s, ["post=32", "nru=240", "ii=1"] + sp)); keys.append(("II", a, s))
R = dict(zip(keys, pmap(jobs, workers=15)))
cm = {k: cum_media(v) for k, v in R.items()}
def c(m, a, b, k): return [cm[(m, a, s)][k] - cm[(m, b, s)][k] for s in SEEDS]
print("===== 240-PI (8 seeds): contrasts at 1x/2x/4x/6x/8x")
for a, b in (("K", "S1"), ("K", "S0"), ("S1", "S0"), ("K", "R1"), ("S1", "R1"), ("K", "SL16"), ("K", "SL22"), ("S1", "SL22")):
    print(f"  {a}-{b:5s}", " | ".join(f(c('PI', a, b, k)) for k in (8, 16, 32, 48, 64)))
for D in (8, 16):
    print(f"  D={D/8:.0f}x  K_D-So_D", " | ".join(f(c('PI', f'K_{D}', f'So_{D}', k)) for k in (8, 16, 32, 48, 64)))
    print(f"  D={D/8:.0f}x  K_D-Rs_D", " | ".join(f(c('PI', f'K_{D}', f'Rs_{D}', k)) for k in (8, 16, 32, 48, 64)))
def win(m, a, b, k0, k1): return [(cm[(m, a, s)][k1] - cm[(m, b, s)][k1]) - (cm[(m, a, s)][k0] - cm[(m, b, s)][k0]) for s in SEEDS]
print("  one-time net switching cost S1-K over [chunk1, +1x] =", f(win('PI', 'S1', 'K', 1, 9)))
print("  swap-back net cost So_8-K_8 over [1x, 2x] =", f(win('PI', 'So_8', 'K_8', 8, 16)), " So_16-K_16 over [2x,3x] =", f(win('PI', 'So_16', 'K_16', 16, 24)))
print("  post-branch increments [1x,4x]: persistent K-S1", f(win('PI', 'K', 'S1', 8, 32)), " revert K_8-So_8", f(win('PI', 'K_8', 'So_8', 8, 32)))
def rate(m, a, b, k0, k1): return [x / ((k1 - k0) / 8) for x in win(m, a, b, k0, k1)]
print("  rates [1x,4x]: K-R1", f(rate('PI', 'K', 'R1', 8, 32)), " S1-R1", f(rate('PI', 'S1', 'R1', 8, 32)), " K-S1", f(rate('PI', 'K', 'S1', 8, 32)))
print("  rates [4x,8x]: K-R1", f(rate('PI', 'K', 'R1', 32, 64)), " S1-R1", f(rate('PI', 'S1', 'R1', 32, 64)))
print("  residue A in RUH0 under S1 at 1x/2x/4x (fraction of A):",
      [round(st.fmean(R[('PI', 'S1', s)]['chunks'][k - 1]['res'][0][0] / 2097152 for s in SEEDS), 3) for k in (8, 16, 32)])
print("  residue B in RUH0 under So_8 at 1x+1ch/2x/4x:",
      [round(st.fmean(R[('PI', 'So_8', s)]['chunks'][k - 1]['res'][1][0] / 2097152 for s in SEEDS), 3) for k in (9, 16, 32)])
print("===== 240-II (8 seeds): contrasts at 1x/2x/4x")
for a, b in (("K", "S1"), ("K", "S0"), ("S1", "S0"), ("K", "R1")):
    print(f"  {a}-{b:5s}", " | ".join(f(c('II', a, b, k)) for k in (8, 16, 32)))
print("  D=1x K_8-So_8", " | ".join(f(c('II', 'K_8', 'So_8', k)) for k in (8, 16, 32)), " K_8-Rs_8", " | ".join(f(c('II', 'K_8', 'Rs_8', k)) for k in (8, 16, 32)))
print("  II pre-shift WAF", round(st.fmean(R[('II', 'K', s)]['pre'] for s in SEEDS), 3), " PI pre-shift WAF", round(st.fmean(R[('PI', 'K', s)]['pre'] for s in SEEDS), 3))
