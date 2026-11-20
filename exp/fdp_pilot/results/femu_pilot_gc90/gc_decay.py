#!/usr/bin/env python3
"""gc_decay.py — lan 이득이 overwrite 동안 왜 줄어드는지 GC 복사 출처로 나눔.

  python3 gc_decay.py <결과 폴더> [사용률=0.70]
    결과 폴더: single_u<U>/, lan_u<U>/ 가 있는 곳 (예: 이 파일 옆 ingu, lab)
    예: python3 gc_decay.py lab 0.93
  위치: results 아래 → runcheck 스크립트 해시에서 빠짐 (run 검증·호스트/게스트 대조에 영향 없음)

출력
  1) overwrite를 덮어쓴 양(host 바이트) 기준 10등분: WAF, lan 덜 씀,
     GC 칸 데이터 비중, GC 복사(host 1 B당) = 처음 옮김(데이터 칸) + 다시 옮김(GC 칸), single − lan 차이
  2) lan 데이터 칸별: GC가 그 칸에서 옮긴 양 / 그 칸에 새로 쓴 양 (구간 흐름, 이전 구간 데이터도 포함)
  3) run 전체 누적 칸별 (media − host) / host
  4) GC 전 WAF: media ≤ 20 GiB 구간 (작은 쓰기 등 GC 아닌 media 증가분)
     24 GiB 장치·GC 90%면 빈 RU ≤ 21/211, 즉 media 약 23.75 GiB 전에는 GC가 시작될 수 없음

근거
  - 칸별 합 hbmw·mbmw·live = 장치 카운터 (바이트 단위 일치 확인)
  - GC 복사는 victim RU를 가진 칸에 매김 (hw/femu/bbssd/ftl-fdp.c fdp_count_gc_writes)
    → 데이터 칸의 (mbmw − hbmw) = 처음 옮김 (+ GC 아닌 증가분), GC 칸(마지막 RUH)의 mbmw = 다시 옮김
  - 시간이 아니라 host 바이트로 자름: 두 run 속도가 달라서
"""
import csv
import os
import sys
from collections import defaultdict

GiB = 1 << 30
LAN_NAMES = {0: "WAL", 1: "L0–L3", 2: "L4", 3: "L5+", 4: "MANIFEST"}


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
    base, u = sys.argv[1], (sys.argv[2] if len(sys.argv) > 2 else "0.70")
    S, s_pts, s_gc = tenths(os.path.join(base, f"single_u{u}"))
    L, l_pts, l_gc = tenths(os.path.join(base, f"lan_u{u}"))

    print(f"== 1) overwrite 10등분 (덮어쓴 host 바이트 기준), 사용률 {u}")
    print("구간      | WAF s/l     | lan 덜 씀 | GC칸 비중 s/l | 처음 옮김 s/l | 다시 옮김 s/l | 차이 처음 + 다시 = 합")
    for i, (s, l) in enumerate(zip(S, L)):
        d1, d2 = s["first"] - l["first"], s["re"] - l["re"]
        print(f"{i*10:>3}-{(i+1)*10:>3}% | {s['waf']:.2f}/{l['waf']:.2f} | {1 - l['waf']/s['waf']:+6.1%} |"
              f" {s['gcshare']:4.0%}/{l['gcshare']:4.0%}   | {s['first']:.2f}/{l['first']:.2f}     |"
              f" {s['re']:.2f}/{l['re']:.2f}     | {d1:+.2f} {d2:+.2f} = {d1 + d2:+.2f}")

    print("\n== 2) lan 데이터 칸: GC가 그 칸에서 옮긴 양 / 그 칸에 새로 쓴 양 (구간 흐름)")
    for i in (0, 2, 4, 6, 8, 9):
        own = L[i]["own"]
        print(f"{i*10:>3}-{(i+1)*10:>3}%: " + "  ".join(
            f"{LAN_NAMES.get(r, r)} {v:.2f}" for r, v in sorted(own.items()) if r in (1, 2, 3)))

    print("\n== 3) run 전체 누적 칸별 (media − host) / host  (GC 아닌 증가분 포함)")
    for name, pts, gc, names in (("single", s_pts, s_gc, {0: "데이터"}), ("lan", l_pts, l_gc, LAN_NAMES)):
        last = pts[-1][1]
        parts = [f"{names.get(r, r)} {(m - h) / h:.2f}" for r, (h, m, _l) in sorted(last.items()) if r != gc and h]
        print(f"  {name:<6}: " + "  ".join(parts) + f"   | GC칸 live {last[gc][2]/GiB:.2f} GiB")

    print("\n== 4) GC 전 WAF (media ≤ 20 GiB 인 마지막 샘플, 장치가 차기 전)")
    # GC 칸 media = 0 은 GC 전이라는 뜻이 아님: 처음 옮김은 데이터 칸에 매겨짐
    for name, pts, gc in (("single", s_pts, s_gc), ("lan", l_pts, l_gc)):
        pre = [s for _t, s in pts if 0 < host(s) and sum(v[1] for v in s.values()) <= 20 * GiB]
        if pre:
            s = pre[-1]
            print(f"  {name:<6}: host {host(s)/GiB:.1f} GiB, WAF {sum(v[1] for v in s.values())/host(s):.3f}")


if __name__ == "__main__":
    main()
