"""Power of one-sided paired t-tests (pure python): t quantiles by numeric integration, power by Monte Carlo."""
import math, random
def tpdf(x, df):
    return math.exp(math.lgamma((df + 1) / 2) - math.lgamma(df / 2)) / math.sqrt(df * math.pi) * (1 + x * x / df) ** (-(df + 1) / 2)
def tcdf(x, df, n=4000):
    # integrate from 0 to |x| with Simpson, symmetric
    a, b = 0.0, abs(x)
    h = (b - a) / n
    s = tpdf(a, df) + tpdf(b, df)
    for i in range(1, n):
        s += (4 if i % 2 else 2) * tpdf(a + i * h, df)
    v = 0.5 + s * h / 3
    return v if x >= 0 else 1 - v
def tq(p, df):
    lo, hi = 0.0, 50.0
    for _ in range(80):
        mid = (lo + hi) / 2
        if tcdf(mid, df) < p: lo = mid
        else: hi = mid
    return (lo + hi) / 2
def power(mu, sigma, n, alpha, reps=40000, seed=1):
    rnd = random.Random(seed)
    tc = tq(1 - alpha, n - 1)
    k = 0
    for _ in range(reps):
        x = [rnd.gauss(mu, sigma) for _ in range(n)]
        m = sum(x) / n
        sd = math.sqrt(sum((v - m) ** 2 for v in x) / (n - 1))
        if m / (sd / math.sqrt(n)) > tc: k += 1
    return k / reps
for n in (3, 5, 8, 10, 20):
    t1, t2 = tq(0.975, n - 1), tq(0.8, n - 1)
    print(f"n={n}: t.975={t1:.3f} t.8={t2:.3f} MDE mult={(t1+t2)/math.sqrt(n):.3f}  t.9875={tq(0.9875, n-1):.3f}")
cases = [("240 V_inf K-S1", 3.72), ("240 V_1x(oracle back)", 3.78), ("240 Vs_1x spare", 1.71), ("II240 V_inf", 3.19),
         ("g24 V_inf", 6.24), ("g24 V_2x", 15.11)]
for name, mu in cases:
    row = []
    for sigma in (0.5, 1.0, 1.5, 2.7):
        row.append("s%.1f:" % sigma + " ".join("n%d=%.2f" % (n, power(mu, sigma, n, 0.025)) for n in (3, 5, 8)))
    print(f"{name:24s} mu={mu:5.2f} | " + " | ".join(row))
