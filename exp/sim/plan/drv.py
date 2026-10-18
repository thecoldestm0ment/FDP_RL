"""Driver for the copied page-level FDP simulator (sim2.c, identical to design/skeptic/sim2.c).
Runs scenarios x seeds in parallel, caches raw output under plan/cache, parses per-chunk rows."""
import hashlib
import json
import re
import statistics as st
import subprocess
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

HERE = Path(__file__).resolve().parent
CACHE = HERE / "cache"
CACHE.mkdir(exist_ok=True)
SIM = str(HERE / "sim2")
GIB = 2 ** 30 / 4096
CH_RE = re.compile(r"CH (\d+) host=(\d+) gc=(\d+) cA=(\d+) cB=(\d+) cC=(\d+) v=(\d+),(\d+),(\d+) "
                   r"res=([\d,|]+) free=(\d+)")
MIG_RE = re.compile(r"MIG at=(\d+) reg=(\d+) from=(\d+) to=(\d+) moved=(\d+) media=(\d+)")
PRE = "0,1,1"
RED = "0,2,1"
SWP = "1,0,1"
S_POST = "10,80,10"
S_PRE = "80,10,10"


def seg(a, b, shares, pids, key="s"):
    return f"seg={a}:{b}:{shares}:{pids}:{key}"


def run(seed, spec, tie=1):
    spec = list(spec)
    tag = hashlib.sha1(json.dumps([seed, tie, spec]).encode()).hexdigest()[:16]
    out = CACHE / f"{tag}.txt"
    if not out.exists():
        res = subprocess.run([SIM, str(seed), str(tie)] + spec, capture_output=True, text=True)
        if res.returncode:
            raise RuntimeError(res.stderr + " " + " ".join(spec))
        tmp = out.with_suffix(".tmp")
        tmp.write_text(json.dumps([seed, tie, spec]) + "\n" + res.stdout)
        tmp.rename(out)
    return parse(out.read_text())


def parse(txt):
    chunks, migs, pre = [], [], None
    for line in txt.splitlines():
        if line.startswith("PRE"):
            pre = float(line.split("waf_last1x=")[1].split()[0])
        m = CH_RE.match(line)
        if m:
            g = list(map(int, m.groups()[:9]))
            res = [[int(x) for x in grp.split(",")] for grp in m.group(10).split("|")]
            chunks.append({"c": g[0], "host": g[1], "gc": g[2], "cp": g[3:6], "v": g[6:9], "res": res,
                           "free": int(m.group(11))})
        m = MIG_RE.match(line)
        if m:
            migs.append(dict(zip(["at", "reg", "frm", "to", "moved", "media"], map(int, m.groups()))))
    return {"pre": pre, "chunks": chunks, "migs": migs}


def cum_media(r):
    n = len(r["chunks"])
    cum = [0.0] * (n + 1)
    add = [0.0] * (n + 1)
    for m in r["migs"]:
        add[m["at"]] += m["media"] / GIB
    s = add[0]
    cum[0] = s
    for i, c in enumerate(r["chunks"], 1):
        s += (c["host"] + c["gc"]) / GIB + add[i]
        cum[i] = s
    return cum


def pmap(jobs, workers=14):
    with ThreadPoolExecutor(workers) as ex:
        return list(ex.map(lambda j: run(*j), jobs))


def f(v):
    if len(v) > 1:
        return f"{st.fmean(v):+7.2f} sd {st.stdev(v):5.2f}"
    return f"{v[0]:+7.2f}"
