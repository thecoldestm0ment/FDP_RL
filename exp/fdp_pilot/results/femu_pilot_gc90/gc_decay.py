#!/usr/bin/env python3
"""gc_decay.py — 두 정책의 GC 복사를 출처로 나눠 비교 (기본 single vs lan).

  python3 gc_decay.py <결과 폴더> [사용률=0.70] [정책A=single] [정책B=lan]
    결과 폴더: <정책>_u<U>/ 가 있는 곳 (예: 이 파일 옆 ingu, lab)
    예: python3 gc_decay.py lab 0.93
        python3 gc_decay.py ingu 0.93 lan lan3      (lan3 0번 칸 vs lan L0–L3 칸 비교)
        python3 gc_decay.py ingu 0.93 single4 lan3  (열린 RU 4개 조건의 배치 효과)
  위치: results 아래 → runcheck 스크립트 해시에서 빠짐 (run 검증·호스트/게스트 대조에 영향 없음)

출력 (A = 정책A, B = 정책B)
  1) overwrite를 덮어쓴 양(host 바이트) 기준 10등분: WAF, B 덜 씀,
     GC 칸 데이터 비중, GC 복사(host 1 B당) = 처음 옮김(데이터 칸) + 다시 옮김(GC 칸), A − B 차이
  2) 데이터 칸이 여럿인 정책: 칸별 GC가 그 칸에서 옮긴 양 / 그 칸에 새로 쓴 양 (구간 흐름, 이전 구간 데이터도 포함)
  3) run 전체 누적 칸별 (media − host) / host
  4) GC 전 WAF: media ≤ 20 GiB 구간 (작은 쓰기 등 GC 아닌 media 증가분)
     24 GiB 장치·GC 90%면 빈 RU ≤ 21/211, 즉 media 약 23.75 GiB 전에는 GC가 시작될 수 없음

근거
  - 칸별 합 hbmw·mbmw·live = 장치 카운터 (바이트 단위 일치 확인)
  - GC 복사는 victim RU를 가진 칸에 매김 (hw/femu/bbssd/ftl-fdp.c fdp_count_gc_writes)
    → 데이터 칸의 (mbmw − hbmw) = 처음 옮김 (+ GC 아닌 증가분), GC 칸(마지막 RUH = RUH 수 − 1)의 mbmw = 다시 옮김
  - 시간이 아니라 host 바이트로 자름: 두 run 속도가 달라서
"""
import csv
import os
import sys
from collections import defaultdict

GiB = 1 << 30
# 정책별 데이터 칸 이름 (없는 정책 = 칸 하나 "데이터")
NAMES = {"lan": {0: "WAL", 1: "L0–L3", 2: "L4", 3: "L5+", 4: "MANIFEST"},
         "lan3": {0: "WAL·MANIFEST·L0–L3", 1: "L4", 2: "L5+"}}
# 2)에서 볼 칸 (lan은 WAL·MANIFEST 빼고 SST 칸만)
LEVEL_RUHS = {"lan": (1, 2, 3), "lan3": (0, 1, 2)}


def names(policy):
    return NAMES.get(policy, {0: "데이터"})


def nruh(d):
    for line in open(os.path.join(d, "device.txt")):
        if line.startswith("nruh="):
            return int(line.split("=")[1].split()[0])
    raise SystemExit(f"{d}/device.txt 에 nruh 없음")


def load(d):
    ev = {}
    for line in open(os.path.join(d, "phase_events.txt")):
        t, name = line.split()[:2]
        ev.setdefault(name, float(t))
    by = defaultdict(dict)
    for r in csv.DictReader(open(os.path.join(d, "ruh_usage.csv"))):
        by[float(r["ts"])][int(r["ruh"])] = (int(r["hbmw"]), int(r["mbmw"]), int(r["live_bytes"]))
    return ev, [(t, by[t]) for t in sorted(by)]


def host(s):
    return sum(v[0] for v in s.values())


def at_host(pts, h):
    """누적 host 가 h 이상인 첫 샘플."""
    for _t, s in pts:
        if host(s) >= h:
            return s
    return pts[-1][1]


def tenths(d):
    gc = nruh(d) - 1                       # 마지막 RUH = GC 전용
    ev, pts = load(d)
    a, b = ev["overwrite_exec_start"], ev["overwrite_exec_end"]
    ow = [p for p in pts if a <= p[0] <= b]
    h0, h1 = host(ow[0][1]), host(ow[-1][1])
    rows = []
    for i in range(10):
        s0, s1 = at_host(ow, h0 + (h1 - h0) * i / 10), at_host(ow, h0 + (h1 - h0) * (i + 1) / 10)
        dh = {r: s1[r][0] - s0[r][0] for r in s1}
        dm = {r: s1[r][1] - s0[r][1] for r in s1}
        hb = sum(dh.values())
        src = {r: dm[r] - dh[r] for r in s1}          # 그 칸이 가진 RU에서 옮긴 양
        live = sum(v[2] for v in s1.values())
        rows.append({
            "waf": sum(dm.values()) / hb,
            "first": sum(v for r, v in src.items() if r != gc) / hb,
            "re": src[gc] / hb,
            "gcshare": s1[gc][2] / live if live else 0.0,
            "own": {r: src[r] / dh[r] for r in s1 if r != gc and dh[r] > 0},
        })
    return rows, pts, gc


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    base = sys.argv[1]
    u = sys.argv[2] if len(sys.argv) > 2 else "0.70"
    pa = sys.argv[3] if len(sys.argv) > 3 else "single"
    pb = sys.argv[4] if len(sys.argv) > 4 else "lan"
    S, s_pts, s_gc = tenths(os.path.join(base, f"{pa}_u{u}"))
    L, l_pts, l_gc = tenths(os.path.join(base, f"{pb}_u{u}"))

    print(f"== 1) overwrite 10등분 (덮어쓴 host 바이트 기준), 사용률 {u}, A={pa} B={pb}")
    print(f"구간      | WAF A/B     | {pb} 덜 씀 | GC칸 비중 A/B | 처음 옮김 A/B | 다시 옮김 A/B | 차이 처음 + 다시 = 합")
    for i, (s, l) in enumerate(zip(S, L)):
        d1, d2 = s["first"] - l["first"], s["re"] - l["re"]
        print(f"{i*10:>3}-{(i+1)*10:>3}% | {s['waf']:.2f}/{l['waf']:.2f} | {1 - l['waf']/s['waf']:+6.1%} |"
              f" {s['gcshare']:4.0%}/{l['gcshare']:4.0%}   | {s['first']:.2f}/{l['first']:.2f}     |"
              f" {s['re']:.2f}/{l['re']:.2f}     | {d1:+.2f} {d2:+.2f} = {d1 + d2:+.2f}")

    for pol, rows in ((pa, S), (pb, L)):
        if pol not in LEVEL_RUHS:
            continue
        print(f"\n== 2) {pol} 데이터 칸: GC가 그 칸에서 옮긴 양 / 그 칸에 새로 쓴 양 (구간 흐름)")
        for i in (0, 2, 4, 6, 8, 9):
            own = rows[i]["own"]
            print(f"{i*10:>3}-{(i+1)*10:>3}%: " + "  ".join(
                f"{names(pol).get(r, r)} {v:.2f}" for r, v in sorted(own.items()) if r in LEVEL_RUHS[pol]))

    print("\n== 3) run 전체 누적 칸별 (media − host) / host  (GC 아닌 증가분 포함)")
    for name, pts, gc in ((pa, s_pts, s_gc), (pb, l_pts, l_gc)):
        last = pts[-1][1]
        parts = [f"{names(name).get(r, r)} {(m - h) / h:.2f}" for r, (h, m, _l) in sorted(last.items()) if r != gc and h]
        print(f"  {name:<7}: " + "  ".join(parts) + f"   | GC칸({gc}) live {last[gc][2]/GiB:.2f} GiB")

    print("\n== 4) GC 전 WAF (media ≤ 20 GiB 인 마지막 샘플, 장치가 차기 전)")
    # GC 칸 media = 0 은 GC 전이라는 뜻이 아님: 처음 옮김은 데이터 칸에 매겨짐
    for name, pts, gc in ((pa, s_pts, s_gc), (pb, l_pts, l_gc)):
        pre = [s for _t, s in pts if 0 < host(s) and sum(v[1] for v in s.values()) <= 20 * GiB]
        if pre:
            s = pre[-1]
            print(f"  {name:<7}: host {host(s)/GiB:.1f} GiB, WAF {sum(v[1] for v in s.values())/host(s):.3f}")


if __name__ == "__main__":
    main()
