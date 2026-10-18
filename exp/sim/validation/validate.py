"""Validate sim against FEMU H0 v3 / H1 v2 results (seeds 42-44) and get sim noise (42-51)."""
import statistics as st
import sys
sys.path.insert(0, "/tmp/claude-0/-root-FDP-RL/b4a630b2-b1ee-48a3-9565-6cd1e282ecfe/scratchpad/design")
from drv import *  # noqa

SEEDS = list(range(42, 52))
POL = {
    "stale": [seg(1, 32, S_POST, PRE)],
    "redirect": [seg(1, 32, S_POST, RED)],
    "rewrite": [seg(1, 32, S_POST, RED), "mig=0:1:1:2"],
    "delay2": [seg(1, 2, S_POST, PRE), seg(3, 32, S_POST, RED)],
    "delay4": [seg(1, 4, S_POST, PRE), seg(5, 32, S_POST, RED)],
    "delay8": [seg(1, 8, S_POST, PRE), seg(9, 32, S_POST, RED)],
    "late1": [seg(1, 32, S_POST, RED), "mig=1:1:1:2"],
    "late2": [seg(1, 32, S_POST, RED), "mig=2:1:1:2"],
    "late4": [seg(1, 32, S_POST, RED), "mig=4:1:1:2"],
    "late8": [seg(1, 32, S_POST, RED), "mig=8:1:1:2"],
    "redirect_p": [seg(1, 32, S_POST, RED), "perturb=0"],
    "stale_p": [seg(1, 32, S_POST, PRE), "perturb=0"],
}
FEMU = {  # dMedia@4x vs Redirect, s42/s43/s44
    "stale": (17.42, 19.45, 18.41), "rewrite": (34.92, 40.22, 36.40),
    "delay2": (-2.22, 0.71, -2.53), "delay4": (1.52, 5.99, 2.78), "delay8": (1.74, 6.85, 4.55),
    "late1": (23.82, 28.12, 24.65), "late2": (20.32, 25.35, 27.78), "late4": (9.40, 14.09, 13.36),
    "late8": (2.77, -0.63, 4.07),
}
jobs = [(s, POL[p]) for s in SEEDS for p in POL]
res = dict(zip([(s, p) for s in SEEDS for p in POL], pmap(jobs)))
print("pre WAF:", ["%.3f" % res[(s, 'stale')]["pre"] for s in SEEDS])
cm = {k: cum_media(v) for k, v in res.items()}
print("\n dMedia vs Redirect at 1x/2x/4x (sim, seeds 42-44 | FEMU 4x) and sim mean/SD over 10 seeds at 4x")
for p in POL:
    if p == "redirect":
        continue
    d = {s: [cm[(s, p)][k] - cm[(s, "redirect")][k] for k in (8, 16, 32)] for s in SEEDS}
    s3 = "  ".join("%+6.1f/%+6.1f/%+6.1f" % tuple(d[s]) for s in SEEDS[:3])
    f = FEMU.get(p)
    fs = " FEMU " + "/".join("%+.1f" % x for x in f) + " mean %+.1f" % st.fmean(f) if f else ""
    v4 = [d[s][2] for s in SEEDS]
    print(f"{p:11s} {s3}  | sim10 mean {st.fmean(v4):+6.2f} sd {st.stdev(v4):5.2f}  sim3 mean {st.fmean(v4[:3]):+6.2f}{fs}")
# increments for stale
print("\nStale-Redirect per-1x increments (sim mean over 10 seeds): ",
      ["%+.2f" % st.fmean(cm[(s, 'stale')][k] - cm[(s, 'redirect')][k] - (cm[(s, 'stale')][k - 8] - cm[(s, 'redirect')][k - 8])
                          for s in SEEDS) for k in (8, 16, 24, 32)], " FEMU +3.4 +4.7 +5.7 +4.7")
# rate 2x-4x
r = [((cm[(s, 'stale')][32] - cm[(s, 'redirect')][32]) - (cm[(s, 'stale')][16] - cm[(s, 'redirect')][16])) / 2 for s in SEEDS]
print("Stale rate 2x-4x GiB/1x: mean %.2f sd %.2f (FEMU 5.17)" % (st.fmean(r), st.stdev(r)))
# copies by region over 0-4x
for p in ("redirect", "stale"):
    cps = [[sum(c["cp"][g] for c in res[(s, p)]["chunks"]) / GIB for g in range(3)] for s in SEEDS]
    vs = [[sum(c["v"][h] for c in res[(s, p)]["chunks"]) for h in range(3)] for s in SEEDS]
    print(p, "copies A/B/C GiB mean:", ["%.1f" % st.fmean(x[g] for x in cps) for g in range(3)],
          "victims RUH0/1/2:", ["%.0f" % st.fmean(x[h] for x in vs) for h in range(3)])
print("FEMU redirect copies 66.8/463.9/100.0 victims 612/1130/4072; stale copies 67.1/315.3/266.7 victims 614/5347/0")
for p in ("rewrite", "late1", "late2", "late4", "late8"):
    mm = [res[(s, p)]["migs"][0] for s in SEEDS]
    print(p, "moved GiB %.2f media GiB %.1f per moved %.2f" % (
        st.fmean(m["moved"] / GIB for m in mm), st.fmean(m["media"] / GIB for m in mm),
        st.fmean(m["media"] / m["moved"] for m in mm)))
print("FEMU rewrite media 45.1 (5.64/GiB); late t0.3 35.8, t0.6 28.5, t1.2 15.3, t2.4 5.0")
# perturbation null
for p, ref in (("redirect_p", "redirect"), ("stale_p", "stale")):
    v = [cm[(s, p)][32] - cm[(s, ref)][32] for s in SEEDS]
    v1 = [cm[(s, p)][8] - cm[(s, ref)][8] for s in SEEDS]
    print(f"perturbation null {p}-{ref}: 1x sd {st.stdev(v1):.2f} mean {st.fmean(v1):+.2f}; 4x sd {st.stdev(v):.2f} mean {st.fmean(v):+.2f}  (values {['%+.1f' % x for x in v]})")
