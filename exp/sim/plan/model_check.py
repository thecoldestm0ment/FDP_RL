"""One-parameter residue model: excess Media rate = rho * (GiB of cold data residing in a handle that receives the hot stream).
rho fitted ONLY from the persistent keep-vs-spare rent (K-R1 rate 1x-4x / 8 GiB). Compare with sim means (V1/V5)."""
import math
def V(rho, D, H, lag=0.125, kA=0.3, kBpost=0.3, kBhot=2.4):
    # keep: C (8 GiB) co-located with hot B while shifted
    keep = rho * 8 * min(D, H)
    # swap: rent until lag, then residue old A in PID0 decaying exp(-kA x)
    t1 = min(D, H)
    s = rho * 8 * min(lag, t1)
    if t1 > lag:
        s += rho * 8 * (math.exp(-kA * lag) - math.exp(-kA * t1)) / kA
    if D < H:
        vb = 8 * (1 - math.exp(-kBhot * (D - lag)))
        s += rho * vb * (1 - math.exp(-kBpost * (H - D))) / kBpost
    return keep - s
sim = {240: {('inf', 1): 0.12, ('inf', 2): 0.50, ('inf', 4): 3.72, ('inf', 6): 7.54, ('inf', 8): 11.81,
             (1, 2): -1.54, (1, 4): -3.86, (1, 6): -5.30, (1, 8): -6.08, (2, 4): -2.84, (2, 6): -4.74, (2, 8): -5.87,
             (3, 4): 0.31, (3, 6): -2.53},
       212: {('inf', 1): -1.28, ('inf', 2): 0.68, ('inf', 4): 6.24, ('inf', 6): 14.69, ('inf', 8): 25.08,
             (1, 4): -17.52, (1, 6): -26.80, (2, 4): -15.11, (2, 6): -23.33, (3, 4): -4.59, (3, 6): -14.34}}
rho = {240: 2.34 / 8, 212: 5.08 / 8}
for nru in (240, 212):
    print(f"nru {nru}: rho = {rho[nru]:.3f} GiB per GiB-cold-in-hot per 1x")
    for (D, H), sv in sim[nru].items():
        d = 1e9 if D == 'inf' else D
        mv = V(rho[nru], d, H)
        print(f"   D={D!s:>3} H={H}x  model {mv:+6.2f}  sim {sv:+6.2f}  diff {mv - sv:+5.2f}")
# full-accounting break-even persistence D* (H -> large) under the model
for nru in (240, 212):
    for H in (4, 8, 12, 40):
        lo, hi = 0.2, H
        f = lambda D: V(rho[nru], D, H)
        if f(hi - 1e-9) < 0: print(f"nru {nru} H={H}: V<0 for all D<H"); continue
        for _ in range(60):
            mid = (lo + hi) / 2
            if f(mid) < 0: lo = mid
            else: hi = mid
        print(f"nru {nru}: model D*(H={H}x) = {lo:.2f}x")
