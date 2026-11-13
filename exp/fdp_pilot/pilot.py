#!/usr/bin/env python3
"""FDP 파일럿 보조 도구.

하위 명령
  calc        config.env 값으로 키 개수·쓰기량·레벨 비중을 계산 (실행 전 확인용)
  get         calc 결과 중 한 값만 출력 (실행 스크립트가 씀)
  counters    장치 카운터를 읽어 "host_bytes media_bytes" 한 줄 출력
  usage       FEMU 사용량 로그(C1h)를 읽어 첫 줄 "valid_bytes capacity_bytes",
              다음 줄부터 RUH마다 "ruh hbmw mbmw live_bytes" 출력 (RUH_METHOD=femu)
  ruh         RUH(PID)별 상태를 읽어 "pid value" 줄들 출력 (RUH_METHOD=fdpstatus·custom)
  lbasize     장치의 LBA 크기(B)를 'nvme id-ns'로 읽어 출력 (RUAMW 단위, run마다 기록)
  ruhtypes    FDP 설정 로그(20h, 'nvme fdp configs')에서 RUH마다 "ruh II|PI" 출력
  pcsummary   인구의 PC 보정 결과 요약 (최대 사용량, 레벨 비중, MANIFEST 비중)
  tsw         (스크립트용) stdin 줄마다 받은 시각을 붙여 저장하고, 정한 줄이 오면 단계 경계 이벤트를 기록
  logopen     (스크립트용) RocksDB LOG 의 "DB pointer" 줄 시각(epoch) 출력 = DB 가 열린 시각
  phasetimes  run 폴더의 phase_events.txt 로 단계별 시간 (time.txt)
  optcheck    RocksDB LOG 의 Options.* 줄을 config.env 기대값과 대조 (실효 옵션 확인)
  pctrack     PC 보정 폴더 하나의 overwrite 진행을 로그로만 추적 (1·2·3배 근처 샘플, L5/L6, stall, 공간)
  pcfit       PC 보정 폴더 여러 개로 "최대 사용량 = 기울기 x 논리 + 고정량"을 맞춰
              config.env 의 SPACE_SLOPE·SPACE_FIXED_GIB 값을 출력
  summary     FEMU run 결과를 모아 WAF 표와 판정 출력

설정은 환경변수로 받음: 셸에서 `set -a; . ./config.env; set +a` 후 실행.
표준 라이브러리만 씀.
"""
import argparse
import bisect
import csv
import glob
import gzip
import json
import math
import os
import re
import struct
import subprocess
import sys
import time

GiB = 1024 ** 3
MiB = 1024 ** 2

# Lan et al. YCSB-A 참고값 (sijielan/FDP_Benchmarking 의 workloada, OPTIONS-000009 의 "usertable" CF)
LAN_REF = {
    "logical_bytes": 40_000_000 * 10 * 4096,   # 레코드 4천만 개 x 필드 10개 x 4 KB
    "level_base": 256 * MiB,
    "target_file": 64 * MiB,
    "num_levels": 7,
    "ru_bytes": 13.08e9,                        # PM9D3a 3.84 TB 의 RU 크기
}


def env(name, cast=str, default=None):
    v = os.environ.get(name)
    if v is None or v == "":
        if default is None:
            sys.exit(f"[pilot] 환경변수 {name} 없음. config.env 를 먼저 읽을 것.")
        return default
    return cast(v)


def level_layout(logical, base, mult, num_levels):
    """동적 레벨 크기를 끈 상태(Lan 설정)에서 L1부터 차례로 채운다고 보고 레벨별 크기를 근사."""
    sizes = {}
    remain = logical
    cap = base
    for lvl in range(1, num_levels):
        last = lvl == num_levels - 1
        take = remain if last else min(remain, cap)
        sizes[lvl] = take
        remain -= take
        cap *= mult
        if remain <= 0:
            break
    return sizes


def last_nonempty_share(sizes, logical):
    lvl = max(k for k, v in sizes.items() if v > 0)
    return lvl, sizes[lvl] / logical


def plan(util):
    cap = env("DEV_CAPACITY_GIB", float) * GiB
    slope = env("SPACE_SLOPE", float)
    fixed = env("SPACE_FIXED_GIB", float) * GiB
    margin = env("SPACE_MARGIN", float, 0.0)
    meta = env("TORFS_META_GIB", float, 0.0) * GiB   # TorFS 메타 영역: 장치에 늘 유효로 남는 최대량
    kv = env("KEY_SIZE", int) + env("VALUE_SIZE", int)
    base = env("LEVEL_BASE_MB", float) * MiB
    mult = env("LEVEL_MULT", float)
    nl = env("NUM_LEVELS", int)
    threads = env("THREADS", int)
    omult = env("OVERWRITE_MULT", float)
    ru = env("RU_MIB", float) * MiB

    # 장치 최대 유효량 = (기울기 x 논리 + 고정량) x (1 + 여유) + TorFS 메타 = 목표 사용률 x 용량
    logical = ((util * cap - meta) / (1 + margin) - fixed) / slope
    if logical <= 0:
        sys.exit(f"[pilot] 사용률 {util}: 고정량 {fixed/GiB:.2f} + 메타 {meta/GiB:.2f} GiB 가 목표 사용량보다 커서 데이터 못 넣음.")
    n = int(logical // kv)
    logical = n * kv
    peak = slope * logical + fixed              # 측정식이 맞을 때 RocksDB 최대 사용량 (메타 제외)
    ow_total = omult * logical
    w_per_thread = int(math.ceil(ow_total / kv / threads))
    target_file = int(env("TARGET_FILE_MB", float, base / 4 / MiB) * MiB)
    write_buffer = int(env("WRITE_BUFFER_MB", float, base / 2 / MiB) * MiB)
    sizes = level_layout(logical, base, mult, nl)
    lvl, share = last_nonempty_share(sizes, logical)
    # 마지막 레벨에 거의 모든 키가 있음 (위 레벨은 같은 키의 새 버전) -> 논리 데이터 전체를 그 레벨 목표와 비교.
    #   1 넘으면 한 레벨 아래로 내려가기 시작해 공간 급증.
    last_target = base * mult ** (lvl - 1)
    return {
        "util": util,
        "N": n,
        "logical_gib": logical / GiB,
        "expected_peak_gib": (peak * (1 + margin) + meta) / GiB,
        "rocks_peak_gib": peak * (1 + margin) / GiB,
        "meta_gib": meta / GiB,
        "torfs_area_gib": (cap - meta) / GiB,       # TorFS 데이터 영역 = 장치 - 메타 영역 (fs_torfs.cc:138)
        "torfs_fill": peak * (1 + margin) / (cap - meta) if cap > meta else float("inf"),
        "space_amp_equiv": peak / logical,
        "peak_util_if_measured": (peak + meta) / cap,
        "last_level_target_gib": last_target / GiB,
        "last_level_fill": logical / last_target if lvl < nl - 1 else 0.0,
        "overwrite_writes_per_thread": w_per_thread,
        "overwrite_total_gib": w_per_thread * threads * kv / GiB,
        "level_base_bytes": int(base),
        "target_file_bytes": target_file,
        "write_buffer_bytes": write_buffer,
        "last_level": lvl,
        "last_level_share": share,
        "files_per_ru": ru / target_file,
        "levels_gib": {k: v / GiB for k, v in sizes.items()},
    }


def cmd_calc(a):
    utils = [float(x) for x in env("TARGET_UTILS").split()]
    lan_sizes = level_layout(LAN_REF["logical_bytes"], LAN_REF["level_base"], 10, LAN_REF["num_levels"])
    lan_lvl, lan_share = last_nonempty_share(lan_sizes, LAN_REF["logical_bytes"])
    print("== 참고: Lan YCSB-A (압축 무시한 근사) ==")
    print(f"  마지막 레벨 L{lan_lvl} 비중 약 {lan_share*100:.0f}%,"
          f" RU 하나당 SST 약 {LAN_REF['ru_bytes']/LAN_REF['target_file']:.0f}개")
    print()
    for u in utils:
        p = plan(u)
        print(f"== 목표 장치 사용률 {u*100:.0f}% ==")
        print(f"  load 키 개수 N            : {p['N']:,}")
        print(f"  논리 데이터               : {p['logical_gib']:.2f} GiB")
        print(f"  공간 식                   : 최대 사용량 = {env('SPACE_SLOPE')} x 논리 + {env('SPACE_FIXED_GIB')} GiB"
              f" (여유 x{1+env('SPACE_MARGIN', float, 0.0):.2f}, 공간 증폭으로 치면 {p['space_amp_equiv']:.3f})")
        print(f"  예상 최대 사용량(여유 포함): {p['expected_peak_gib']:.2f} GiB"
              f" = RocksDB {p['rocks_peak_gib']:.2f} + TorFS 메타 {p['meta_gib']:.2f}"
              f" (사용자 용량 {env('DEV_CAPACITY_GIB')} GiB)")
        print(f"  TorFS 데이터 영역 사용     : {p['rocks_peak_gib']:.2f} / {p['torfs_area_gib']:.2f} GiB"
              f" = {p['torfs_fill']*100:.1f}%")
        print(f"  측정값이 맞으면 최고 사용률: {p['peak_util_if_measured']*100:.1f}%")
        print(f"  overwrite 스레드당 쓰기 수 : {p['overwrite_writes_per_thread']:,}"
              f" (합계 {p['overwrite_total_gib']:.1f} GiB)")
        print(f"  L1 기준 / SST / memtable  : {p['level_base_bytes']/MiB:.2f} / "
              f"{p['target_file_bytes']/MiB:.2f} / {p['write_buffer_bytes']/MiB:.2f} MiB")
        lv = ", ".join(f"L{k} {v:.2f}" for k, v in p["levels_gib"].items())
        print(f"  레벨별 근사 크기(GiB)     : {lv}")
        print(f"  마지막 레벨 L{p['last_level']} 비중     : {p['last_level_share']*100:.0f}%"
              f"  (Lan 약 {lan_share*100:.0f}%)")
        print(f"  RU 하나당 SST 수          : {p['files_per_ru']:.0f}"
              f"  (Lan 약 {LAN_REF['ru_bytes']/LAN_REF['target_file']:.0f})")
        if p["last_level_fill"] > 0:
            print(f"  마지막 레벨 목표 크기 대비 : 논리 {p['logical_gib']:.2f} / L{p['last_level']} 목표"
                  f" {p['last_level_target_gib']:.2f} GiB = {p['last_level_fill']*100:.0f}%")
        if p["expected_peak_gib"] > 0.97 * env("DEV_CAPACITY_GIB", float):
            print("  [경고] 예상 최대 사용량이 용량의 97% 초과. 공간 부족으로 멈출 수 있음.")
        if p["meta_gib"] > 0 and p["torfs_fill"] > 0.95:
            print("  [경고] TorFS 데이터 영역의 95% 초과. TorFS NoSpace 로 멈출 수 있음.")
        if p["last_level_fill"] > 0.9:
            print(f"  [경고] 마지막 레벨(L{p['last_level']}) 크기가 목표에 가까움. 넘으면 L{p['last_level']+1}로 내려가기 시작해"
                  " 같은 키가 두 레벨에 겹쳐 쌓이고, 공간이 기울기+고정량 식보다 커질 수 있음.")
        print()


def cmd_get(a):
    p = plan(float(a.util))
    v = p[a.field]
    print(v if not isinstance(v, float) else f"{v:.6f}")


# ---------------- 장치 카운터 ----------------

def _num(v):
    if isinstance(v, (int, float)):
        return int(v)
    if isinstance(v, str):
        s = v.strip().replace(",", "")
        return int(s, 16) if s.lower().startswith("0x") else int(float(s))
    if isinstance(v, list):          # 128비트 값을 [low, high] 로 주는 경우
        tot = 0
        for i, x in enumerate(v):
            tot += _num(x) << (64 * i)
        return tot
    raise ValueError(v)


def _find_key(obj, pattern):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if re.fullmatch(pattern, str(k), re.I):
                return v
            r = _find_key(v, pattern)
            if r is not None:
                return r
    elif isinstance(obj, list):
        for x in obj:
            r = _find_key(x, pattern)
            if r is not None:
                return r
    return None


def read_fdpstats(dev, endgrp):
    base = ["nvme", "fdp", "stats", dev, "-e", str(endgrp)]
    try:
        out = subprocess.run(base + ["-o", "json"], capture_output=True, text=True, check=True).stdout
        j = json.loads(out)
        h, m = _find_key(j, r"hbmw"), _find_key(j, r"mbmw")
        if h is not None and m is not None:
            return _num(h), _num(m)
    except Exception:
        pass
    out = subprocess.run(base, capture_output=True, text=True, check=True).stdout
    h = re.search(r"HBMW[^\d]*([\d,]+)", out, re.I)
    m = re.search(r"MBMW[^\d]*([\d,]+)", out, re.I)
    if not (h and m):
        sys.exit("[pilot] 'nvme fdp stats' 출력에서 HBMW/MBMW 못 찾음. COUNTER_METHOD=custom 사용.\n" + out)
    return _num(h.group(1)), _num(m.group(1))


def read_counters():
    method = env("COUNTER_METHOD")
    if method == "fdpstats":
        h, m = read_fdpstats(env("NVME_DEV"), env("FDP_ENDGRP", int))
    elif method == "custom":
        out = subprocess.run(env("COUNTER_CMD"), shell=True, capture_output=True, text=True, check=True).stdout
        h, m = (_num(x) for x in out.split()[:2])
    else:
        sys.exit(f"[pilot] 알 수 없는 COUNTER_METHOD={method}")
    return h, m


def cmd_counters(a):
    print(*read_counters())


def cmd_freshcheck(a):
    h, m = read_counters()
    usage = read_femu_usage()
    clean = h == 0 and m == 0 and usage["valid_bytes"] == 0 and usage["invalid_pid_cmds"] == 0
    print(json.dumps({"host_bytes": h, "media_bytes": m,
                      "valid_bytes": usage["valid_bytes"],
                      "invalid_pid_cmds": usage["invalid_pid_cmds"],
                      "fresh": clean}, sort_keys=True))
    if not clean:
        sys.exit(1)


# FEMU 사용량 로그(vendor log C1h, 이 브랜치의 hw/femu/nvme.h FemuFdpUsageLog)
#   머리 64 B: version u16, nruh u16, page_bytes u32, valid_pages u64, capacity_bytes u64,
#             (version 2부터) invalid_pid_cmds u64 = namespace에 없는 PID로 온 쓰기 명령 수
#             (장치가 placement handle 0으로 조용히 보냄. 0 아니면 PID 오류)
#   RUH마다 32 B: hbmw u64, mbmw u64, live_pages u64
#   mbmw = 그 RUH의 host 쓰기 + 그 RUH 소유 RU의 GC 이동량. live_pages = 그 RUH 소유 RU의 유효 페이지.
#   II에서 GC 데이터는 마지막 RUH의 RU로 모임 -> 원래 RUH mbmw엔 첫 이동만, 재이동은 마지막 RUH에 잡힘.
#   즉 RUH별 mbmw는 PID별 GC 비용 아님 (README "II에서 RUH별 값을 읽는 법").
FEMU_USAGE_HDR = struct.Struct("<HHIQQQ32x")
FEMU_USAGE_DESC = struct.Struct("<QQQ8x")


def parse_femu_usage(blob):
    if len(blob) < FEMU_USAGE_HDR.size:
        raise ValueError(f"로그가 {len(blob)} B뿐")
    ver, nruh, page_bytes, valid, cap, invalid = FEMU_USAGE_HDR.unpack_from(blob, 0)
    if ver not in (1, 2):
        raise ValueError(f"모르는 로그 version {ver}")
    if ver < 2:
        invalid = None     # version 1 FEMU 에는 이 카운터 없음
    ruhs = []
    for i in range(nruh):
        off = FEMU_USAGE_HDR.size + i * FEMU_USAGE_DESC.size
        if off + FEMU_USAGE_DESC.size > len(blob):
            raise ValueError(f"RUH {nruh}개인데 로그가 {len(blob)} B에서 끝남")
        h, m, live = FEMU_USAGE_DESC.unpack_from(blob, off)
        ruhs.append((i, h, m, live * page_bytes))
    return {"valid_bytes": valid * page_bytes, "capacity_bytes": cap,
            "invalid_pid_cmds": invalid, "ruhs": ruhs}


def read_femu_usage():
    lid = int(str(env("FEMU_USAGE_LID", str, "0xc1")), 0)
    # 4 KiB 요청해도 장치는 로그 크기만큼만 채우고 나머지는 0 (RUH 126개까지)
    out = subprocess.run(["nvme", "get-log", env("NVME_DEV"), f"--log-id={lid}",
                          "--log-len=4096", "--raw-binary"],
                         capture_output=True, check=True).stdout
    return parse_femu_usage(out)


def cmd_usage(a):
    """첫 줄 "valid_bytes capacity_bytes invalid_pid_cmds"(카운터가 없는 FEMU면 -1),
    다음 줄부터 RUH마다 "ruh hbmw mbmw live_bytes"."""
    u = read_femu_usage()
    inv = u["invalid_pid_cmds"]
    print(u["valid_bytes"], u["capacity_bytes"], -1 if inv is None else inv)
    for ruh, h, m, live in u["ruhs"]:
        print(ruh, h, m, live)


def parse_ruh_status(blob):
    """RUH 상태(IO Management Receive, 'nvme fdp status -b')에서 (pid, ruhid) 목록.
    머리 16 B(바이트 14–15 = 기술자 수), 기술자마다 32 B: pid u16, ruhid u16, earutr u32, ruamw u64.
    = 이 네임스페이스가 쓸 수 있는 placement handle 목록 (FEMU namespace_phls)."""
    if len(blob) < 16:
        raise ValueError(f"RUH 상태가 {len(blob)} B뿐")
    (n,) = struct.unpack_from("<H", blob, 14)
    if 16 + 32 * n > len(blob):
        raise ValueError(f"기술자 {n}개인데 RUH 상태가 {len(blob)} B에서 끝남")
    return [struct.unpack_from("<HH", blob, 16 + 32 * i) for i in range(n)]


def read_placement():
    out = subprocess.run(["nvme", "fdp", "status", env("NVME_DEV"), "-b"],
                         capture_output=True, check=True).stdout
    return parse_ruh_status(out)


def policy_device(policy):
    """정책마다 기대하는 RUH 수와 placement handle 목록 (config.env 의 NRUH_<정책>, PHS_<정책>)."""
    nruh = env(f"NRUH_{policy}", int)
    phs = [int(x) for x in env(f"PHS_{policy}").split(":")]
    return nruh, phs


def cmd_devcheck(a):
    """run 전에 장치가 이 정책에 맞게 떴는지 확인, 결과는 a.out 에 기록.
    - RUH 수 = NRUH_<정책>, 모든 RUH가 EXPECT_RUHT (II)
    - namespace의 placement handle 목록 = PHS_<정책> (GC 전용 마지막 RUH는 없어야 함)
    - 잘못된 PID 쓰기 카운터 0 (새로 띄운 FEMU면 0)
    안 맞으면 이유 출력 후 exit 1."""
    want_nruh, want_phs = policy_device(a.policy)
    want_t = env("EXPECT_RUHT", str, "any")
    types = read_ruh_types()
    pl = read_placement()
    u = read_femu_usage() if env("RUH_METHOD") == "femu" else None
    bad = []
    if len(types) != want_nruh:
        bad.append(f"RUH 수 {len(types)}개, 기대 {want_nruh}개")
    if want_t != "any":
        wrong = [i for i, t in enumerate(types) if RUHT_NAMES.get(t) != want_t]
        if wrong:
            bad.append(f"RUH {wrong} 가 {want_t} 아님")
    got_phs = [ruh for _pid, ruh in sorted(pl)]
    if got_phs != want_phs:
        bad.append(f"placement handle 목록 {got_phs}, 기대 {want_phs}")
    if want_nruh - 1 in got_phs:
        bad.append(f"GC 전용 RUH {want_nruh - 1} 가 namespace에 노출됨")
    inv = u["invalid_pid_cmds"] if u else None
    if u and inv is None:
        bad.append("이 FEMU 사용량 로그에 잘못된 PID 카운터 없음 (version 1). fdp-pilot 브랜치 FEMU인지 확인")
    elif inv:
        bad.append(f"run 전인데 잘못된 PID 쓰기 이미 {inv}번")
    lines = [f"policy={a.policy}",
             f"nruh={len(types)}  (기대 {want_nruh})",
             "ruh_types=" + " ".join(f"{i}:{RUHT_NAMES.get(t, f'?{t}')}" for i, t in enumerate(types)),
             "placement(pid->ruh)=" + " ".join(f"{p}->{r}" for p, r in sorted(pl)),
             f"invalid_pid_cmds_at_start={'-' if inv is None else inv}",
             "check=" + ("OK" if not bad else "FAIL: " + "; ".join(bad))]
    with open(a.out, "w") as f:
        f.write("\n".join(lines) + "\n")
    print("\n".join(lines))
    if bad:
        sys.exit(1)


def cmd_pidcheck(a):
    """run 뒤: 잘못된 PID로 온 쓰기 명령 수. 0이면 OK, 아니면 exit 1 (그 run 폐기)."""
    inv = read_femu_usage()["invalid_pid_cmds"]
    if inv is None:
        print("invalid_pid_cmds=-  (카운터 없는 FEMU)")
        sys.exit(1)
    print(f"invalid_pid_cmds={inv}")
    if inv:
        print("namespace에 없는 PID로 온 쓰기 있음. 장치가 placement handle 0으로 보냄 -> 이 run 폐기.")
        sys.exit(1)


def read_lba_bytes(dev):
    """지금 포맷의 LBA 크기(B). 'nvme id-ns'의 FLBAS가 가리키는 LBA 포맷의 LBADS(2의 지수)로 계산."""
    out = subprocess.run(["nvme", "id-ns", dev, "-o", "json"],
                         capture_output=True, text=True, check=True).stdout
    j = json.loads(out)
    flbas = _num(j["flbas"])
    idx = (flbas & 0xF) | (((flbas >> 5) & 0x3) << 4)   # 포맷이 16개 넘으면 위 2비트가 bit 6:5
    return 1 << _num(j["lbafs"][idx]["ds"])


def cmd_lbasize(a):
    try:
        print(read_lba_bytes(env("NVME_DEV")))
    except Exception as e:
        # 못 읽으면 config 값 사용, 그 사실은 stderr 에 기록
        print(f"[pilot] LBA 크기를 nvme id-ns로 못 읽어 LBA_BYTES={env('LBA_BYTES', int, 512)}를 씀 ({e})",
              file=sys.stderr)
        print(env("LBA_BYTES", int, 512))


RUHT_NAMES = {1: "II", 2: "PI"}


def parse_fdp_configs(blob):
    """FDP 설정 로그(20h)의 첫 설정에서 RUH 종류 목록 (1 = II, 2 = PI).
    머리 16 B 뒤에 설정 기술자: 크기 u16, FDPA u8, VSS u8(벤더 영역 바이트), NRG u32, NRUH u16 …
    기술자 앞 64 B + 벤더 영역 뒤에 RUH마다 4 B (첫 바이트 = RUHT)."""
    if len(blob) < 16 + 64:
        raise ValueError(f"로그가 {len(blob)} B뿐")
    _size, _fdpa, vss, _nrg, nruh = struct.unpack_from("<HBBIH", blob, 16)
    base = 16 + 64 + vss
    if base + 4 * nruh > len(blob):
        raise ValueError(f"RUH {nruh}개인데 로그가 {len(blob)} B에서 끝남")
    return [blob[base + 4 * i] for i in range(nruh)]


def read_ruh_types():
    out = subprocess.run(["nvme", "fdp", "configs", env("NVME_DEV"),
                          "-e", str(env("FDP_ENDGRP", int)), "-b"],
                         capture_output=True, check=True).stdout
    return parse_fdp_configs(out)


def cmd_ruhtypes(a):
    for i, t in enumerate(read_ruh_types()):
        print(i, RUHT_NAMES.get(t, f"?{t}"))


def cmd_ruh(a):
    method = env("RUH_METHOD")
    if method in ("none", "femu"):
        return
    if method == "custom":
        sys.stdout.write(subprocess.run(env("RUH_CMD"), shell=True, capture_output=True,
                                        text=True, check=True).stdout)
        return
    out = subprocess.run(["nvme", "fdp", "status", env("NVME_DEV"), "-o", "json"],
                         capture_output=True, text=True, check=True).stdout
    j = json.loads(out)
    rows = []

    def walk(o):
        if isinstance(o, dict):
            keys = {k.lower(): v for k, v in o.items()}
            if "pid" in keys and "ruamw" in keys:
                rows.append((_num(keys["pid"]), _num(keys["ruamw"])))
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for x in o:
                walk(x)
    walk(j)
    for pid, ruamw in rows:
        print(pid, ruamw)


# ---------------- PC 보정 요약 (인구) ----------------

def parse_levelstats(path):
    sizes = {}
    started = False
    for line in open(path, errors="replace"):
        # levelstats 표 머리만 (아래 Compaction Stats 표의 "Level Files Size Score" 머리에 다시 걸리지 않게)
        if re.search(r"^Level\s+Files\s+Size\(MB\)", line):
            started, sizes = True, {}
            continue
        if started:
            m = re.match(r"\s*(\d+)\s+(\d+)\s+(\d+)\s*$", line)
            if m:
                sizes[int(m.group(1))] = int(m.group(3)) * MiB
            elif sizes and not line.strip().startswith("-"):
                started = False
    return sizes


def parse_cumulative(path):
    """db_bench 통계 출력에서 마지막 누적 compaction 쓰기량과 WAL 쓰기량(GB)을 찾음.
    RocksDB 통계의 "GB" = 2^30 B (internal_stats.cc 의 kGB)."""
    comp = wal = None
    for line in open(path, errors="replace"):
        m = re.search(r"Cumulative compaction:\s*([\d.]+)\s*GB write", line)
        if m:
            comp = float(m.group(1)) * GiB
        m = re.search(r"Cumulative WAL:.*written:\s*([\d.]+)\s*GB", line)
        if m:
            wal = float(m.group(1)) * GiB
    return comp, wal


def pc_point(d):
    """PC 보정 폴더 하나의 (논리 데이터, 최대 사용량, 최대 MANIFEST 크기). 최대 사용량은 du.csv(LOG 제외)의 최고값."""
    rows = list(csv.DictReader(open(os.path.join(d, "du.csv"))))
    logical = float(open(os.path.join(d, "logical_bytes")).read())
    return logical, max(int(r["total_bytes"]) for r in rows), max(int(r["manifest_bytes"]) for r in rows)


def overwrite_tail_usage(d):
    """du.csv 의 overwrite 실행 구간(phase=overwrite, 대기·LOG 저장 제외): (최대, 뒤 1/3 평균) 바이트."""
    ow = [int(r["total_bytes"]) for r in csv.DictReader(open(os.path.join(d, "du.csv")))
          if r["phase"] == "overwrite"]
    if not ow:
        return None
    tail = ow[int(len(ow) * 2 / 3):] if len(ow) >= 3 else ow
    return max(ow), sum(tail) / len(tail)


# ---------------- 단계 경계 (lib/runlib.sh 가 phase_events.txt 에 남김) ----------------
PHASE_ORDER = ["load_open", "load", "load_wait", "load_logsave",
               "overwrite_open", "overwrite", "overwrite_wait", "overwrite_logsave"]


def read_events(d):
    ev = {}
    p = os.path.join(d, "phase_events.txt")
    if os.path.exists(p):
        for line in open(p, encoding="utf-8", errors="replace"):
            parts = line.split()
            if len(parts) >= 2:
                try:
                    ev.setdefault(parts[1], []).append(float(parts[0]))
                except ValueError:
                    pass
    return ev


def phase_windows(d):
    """단계별 (시작, 끝) epoch. 경계: 프로세스 시작 -> DB 열림(LOG "DB pointer") -> 결과 줄 -> 프로세스 끝 -> LOG 저장 끝."""
    ev, w = read_events(d), {}
    first = lambda k: ev[k][0] if k in ev else None
    for ph in ("load", "overwrite"):
        ps, xs, xe = first(f"{ph}_proc_start"), first(f"{ph}_exec_start"), first(f"{ph}_exec_end")
        pe, ls, le = first(f"{ph}_proc_exit"), first(f"{ph}_logsave_start"), first(f"{ph}_logsave_end")
        w[f"{ph}_open"], w[ph], w[f"{ph}_wait"], w[f"{ph}_logsave"] = (ps, xs), (xs, xe), (xe, pe), (ls, le)
        fin = ev.get(f"{ph}_waitforcompaction_finished")
        w[f"{ph}_wait_compaction_done"] = fin[-1] if fin else None   # 마지막 finished 줄 (그 뒤는 levelstats·stats·닫기)
    return w


def _dur(win):
    return (win[1] - win[0]) if win and win[0] is not None and win[1] is not None else None


def cmd_phasetimes(a):
    w = phase_windows(a.dir)
    out = []
    for ph in ("load", "overwrite"):
        parts = []
        for k, label in ((f"{ph}_open", "open"), (ph, "exec"), (f"{ph}_wait", "wait"), (f"{ph}_logsave", "logsave")):
            v = _dur(w.get(k))
            parts.append(f"{ph}_{label}_sec={v:.1f}" if v is not None else f"{ph}_{label}_sec=?")
        cd = w.get(f"{ph}_wait_compaction_done")
        if cd and w[f"{ph}_wait"][0]:
            parts.append(f"{ph}_wait_until_last_finished_sec={cd - w[f'{ph}_wait'][0]:.1f}")
        out.append(" ".join(parts))
    print("\n".join(out))


def cmd_tsw(a):
    """stdin 줄을 --raw 에 그대로, --ts 에 "받은 시각(epoch 초.밀리초)<TAB>줄" 로 저장. 줄마다 바로 씀.
    --once REGEX EVENT PHASE : 처음 맞는 줄에서 이벤트를 남기고 phase 파일을 PHASE 로 (PHASE '-' 면 안 바꿈)
    --every REGEX EVENT      : 맞는 줄마다 이벤트 (EVENT 에 \\1 같은 그룹 참조 가능)"""
    raw, ts = open(a.raw, "ab", buffering=0), open(a.ts, "ab", buffering=0)
    once = [[re.compile(r), e, ph, False] for r, e, ph in (a.once or [])]
    every = [(re.compile(r), e) for r, e in (a.every or [])]

    def emit(t, name):
        if a.events:
            with open(a.events, "a") as f:
                f.write(f"{t:.3f} {name}\n")

    for line in iter(sys.stdin.buffer.readline, b""):
        t = time.time()
        raw.write(line)
        ts.write(f"{t:.3f}\t".encode() + line)
        if not (once or every):
            continue
        txt = line.decode("utf-8", "replace").rstrip("\n")
        for rule in once:
            if not rule[3] and rule[0].search(txt):
                rule[3] = True
                emit(t, rule[1])
                if rule[2] != "-" and a.phase_file:
                    tmp = a.phase_file + ".tsw"
                    with open(tmp, "w") as f:
                        f.write(rule[2] + "\n")
                    os.replace(tmp, a.phase_file)
        for rx, e in every:
            m = rx.search(txt)
            if m:
                emit(t, m.expand(e))


def cmd_logopen(a):
    for line in open(a.log, errors="replace"):
        if "DB pointer" in line:
            m = LOGTS_RE.match(line)
            if m:
                print(f"{_ts(m.group(1)) + float('0.' + m.group(2)):.6f}")
                return
    sys.exit(1)


def du_rows(d):
    return [(float(r["ts"]), r["phase"], int(r["total_bytes"])) for r in csv.DictReader(open(os.path.join(d, "du.csv")))]


def nofsync_note(d):
    p = os.path.join(d, "run_params.txt")
    if os.path.exists(p) and "NOFSYNC=1" in open(p, encoding="utf-8").read():
        return ("  [주의] NOFSYNC=1 (fsync 건너뜀) PC 예비 보정. FEMU 의 검증된 공간 상한이나"
                " 성능(시간) 측정값으로 쓰지 말 것.")
    return None


def dbbench_out(d, phase):
    """db_bench 마지막 결과가 있는 파일: 새 run 은 .stdout, 예전 run 은 stdout·stderr 합본 .log"""
    p = os.path.join(d, f"db_bench_{phase}.stdout")
    return p if os.path.exists(p) else os.path.join(d, f"db_bench_{phase}.log")


def cmd_pcsummary(a):
    logical, peak, manifest = pc_point(a.dir)
    lv = parse_levelstats(os.path.join(a.dir, "levelstats.txt"))
    comp, wal = parse_cumulative(dbbench_out(a.dir, "overwrite"))   # overwrite 프로세스 전체 (실행+대기)
    cap = env("DEV_CAPACITY_GIB", float, 0.0) * GiB
    print(f"== PC 보정 결과: {a.dir} ==")
    print(f"  논리 데이터      : {logical/GiB:.2f} GiB")
    print(f"  최대 사용량      : {peak/GiB:.2f} GiB" + (f" (용량 {cap/GiB:.0f} GiB 대비 {peak/cap*100:.1f}%)" if cap else ""))
    tu = overwrite_tail_usage(a.dir)
    if tu:
        print(f"  overwrite 실행   : 최대 {tu[0]/GiB:.2f} GiB, 뒤 1/3 평균 {tu[1]/GiB:.2f} GiB"
              + (f" (용량 대비 {tu[1]/cap*100:.1f}%)" if cap else "") + " (대기·LOG 저장 제외, du.csv, LOG 파일 제외)")
    rows = du_rows(a.dir)
    w = phase_windows(a.dir)
    if any(ph in PHASE_ORDER for _, ph, _ in rows):
        print("  단계별 (시간 / 공간 최대):")
        for ph in PHASE_ORDER:
            v = [b for _, p_, b in rows if p_ == ph]
            dur = _dur(w.get(ph))
            if v or dur is not None:
                print(f"    {ph:<18} {('%.0f초' % dur) if dur is not None else '?':>8}  "
                      + (f"최대 {max(v)/GiB:.2f} GiB" if v else "샘플 없음"))
        top = max(rows, key=lambda r: r[2])
        print(f"  전체 최대: {top[1]} 단계 ({top[2]/GiB:.2f} GiB)")
    ev = log_file_events(a.dir)
    if ev is not None and w.get("overwrite", (None, None))[0]:
        for ph in ("load", "overwrite"):
            xs, xe = w[ph]
            ws, we = w[f"{ph}_wait"]
            if None in (xs, xe, ws, we):
                continue
            a_ = sum(sz for t, sz in ev[ph] if xs <= t <= xe)
            b_ = sum(sz for t, sz in ev[ph] if ws < t <= we)
            print(f"  SST 쓰기 ({ph}, LOG table_file_creation): 실행 중 {a_/GiB:.2f} GiB, 대기 중 추가 {b_/GiB:.2f} GiB"
                  " (flush+compaction, 대기 중 추가분은 주 수치에서 뺌)")
    note = nofsync_note(a.dir)
    if note:
        print(note)
    print(f"  공간 증폭        : {peak/logical:.3f}   (참고. FEMU 계산은 pcfit 의 기울기+고정량 사용)")
    if lv:
        tot = sum(lv.values())
        print("  레벨별 비중      : " + ", ".join(f"L{k} {v/tot*100:.1f}%" for k, v in sorted(lv.items())))
        print("  레벨별 크기(GiB) : " + ", ".join(f"L{k} {v/GiB:.2f}" for k, v in sorted(lv.items())))
        deepest = max((k for k, v in lv.items() if v > 0), default=0)
        nl = env("NUM_LEVELS", int, 0)
        if nl and deepest == nl - 1:
            print(f"  [주의] 맨 아래 L{deepest}까지 데이터 내려감. 위 레벨과 같은 키가 겹쳐 쌓여"
                  " 공간 증폭이 커졌을 수 있음.")
    if comp:
        allw = comp + (wal or 0)
        print(f"  host 쓰기(근사)  : {allw/GiB:.1f} GiB (compaction+flush {comp/GiB:.1f}, WAL {(wal or 0)/GiB:.1f};"
              " overwrite 프로세스 전체 = 실행+대기)")
        print(f"  MANIFEST 비중    : {manifest/allw*100:.3f}% (최대 파일 크기 기준 근사)")
    else:
        print("  [참고] 누적 compaction 줄을 못 찾아 MANIFEST 비중 계산 안 함.")


def cmd_pcfit(a):
    pts = [(d,) + pc_point(d)[:2] for d in a.dirs]
    if len(pts) < 2:
        sys.exit("[pilot] 기울기·고정량을 맞추려면 보정 폴더 2개 이상 필요.")
    xs, ys = [p[1] for p in pts], [p[2] for p in pts]
    mx, my = sum(xs) / len(xs), sum(ys) / len(ys)
    sxx = sum((x - mx) ** 2 for x in xs)
    if sxx <= 0:
        sys.exit("[pilot] 논리 데이터 크기가 모두 같아 기울기 못 구함.")
    slope = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sxx
    fixed = my - slope * mx
    print("== PC 보정 맞추기: 최대 사용량 = 기울기 x 논리 데이터 + 고정량 ==")
    for d, x, y in pts:
        print(f"  {os.path.basename(os.path.normpath(d))}: 논리 {x/GiB:.2f} GiB, 최대 {y/GiB:.2f} GiB"
              f" (공간 증폭 {y/x:.3f}), 식으로 {(slope*x+fixed)/GiB:.2f} GiB")
    if len(pts) == 2:
        print("  (점 2개라 식이 두 점을 그대로 지남)")
    if slope < 1 or fixed < 0:
        print("  [주의] 기울기 < 1 또는 고정량 < 0. 측정 이상 가능, du.csv 확인.")
    if any(nofsync_note(d) for d, _, _ in pts):
        print("  [주의] NOFSYNC=1 PC 예비 보정으로 맞춘 값. FEMU 의 검증된 공간 상한 아님.")
    print("config.env 에 넣을 값:")
    print(f"SPACE_SLOPE={slope:.4f}")
    print(f"SPACE_FIXED_GIB={fixed/GiB:.3f}")


# ---------------- overwrite 진행 추적 (로그만 읽음: DB를 따로 열거나 compaction 을 건드리지 않음) ----------------
PROGRESS_RE = re.compile(r"^(\d{4}/\d\d/\d\d-\d\d:\d\d:\d\d)\s+\.\.\. thread (\d+): \((\d+),(\d+)\) ops.* in \(([\d.]+),([\d.]+)\) seconds")
LEVEL_ROW_RE = re.compile(r"^\s+L(\d+)\s+(\d+)/(\d+)\s+([\d.]+)\s+(B|KB|MB|GB|TB)\s+([\d.]+)")
UNIT = {"B": 1, "KB": 1024, "MB": MiB, "GB": GiB, "TB": 1024 * GiB}
LOGTS_RE = re.compile(r"^(\d{4}/\d\d/\d\d-\d\d:\d\d:\d\d)\.(\d+)")
PENDING_RE = re.compile(r"Stalling writes because of estimated pending compaction bytes (\d+)")


def _ts(s):
    return time.mktime(time.strptime(s, "%Y/%m/%d-%H:%M:%S"))


def read_run_params(d):
    kv = {}
    p = os.path.join(d, "run_params.txt")
    if os.path.exists(p):
        for line in open(p, encoding="utf-8"):
            m = re.match(r"^([A-Za-z_]+)\(([^)]*)\)=(\d+)|^([A-Za-z_]+)=(\S+)", line)
            if m and m.group(1):
                kv[m.group(1)] = m.group(3)
            elif m:
                kv[m.group(4)] = m.group(5)
    return kv


def parse_progress_and_stats(path):
    """stderr: 스레드별 60초 진행 줄과, thread 0 진행 줄 바로 뒤의 rocksdb.stats (--stats_per_interval=1)."""
    prog, samples, cur = {}, [], None
    for line in open(path, errors="replace"):
        m = PROGRESS_RE.match(line)
        if m:
            t, th, cum, since = _ts(m.group(1)), int(m.group(2)), int(m.group(4)), float(m.group(6))
            prog.setdefault(th, []).append((t, cum))
            if th == 0:
                cur = {"t": t, "start": t - since, "levels": {}, "files": {}}
                samples.append(cur)
            continue
        if cur is None:
            continue
        m = LEVEL_ROW_RE.match(line)
        if m:
            lv = int(m.group(1))
            cur["files"][lv] = int(m.group(2))
            cur["levels"][lv] = float(m.group(4)) * UNIT[m.group(5)]
        elif line.startswith("Cumulative stall:"):
            m2 = re.search(r"([\d.]+) percent", line)
            cur["stall_pct"] = float(m2.group(1)) if m2 else None
        elif line.startswith("Stalls(count):"):
            for key, pat in (("slow_pending", r"(\d+) slowdown for pending_compaction_bytes"),
                             ("stop_pending", r"(\d+) stop for pending_compaction_bytes"),
                             ("slow_l0", r"(\d+) level0_slowdown,"), ("stop_l0", r"(\d+) level0_numfiles,")):
                m2 = re.search(pat, line)
                cur[key] = int(m2.group(1)) if m2 else None
        elif "pending" in line.lower() and "compaction" in line.lower() and re.search(r"\d", line) \
                and not line.startswith("Stalls"):
            cur.setdefault("pending_lines", []).append(line.strip())
    return prog, samples


def est_total_ops(prog, t):
    """시각 t 의 전체 스레드 누적 완료 연산 수 추정: 스레드마다 진행 줄 사이를 직선으로 보간 (진행 줄은 60초 간격)."""
    tot = 0
    for pts in prog.values():
        ts = [x[0] for x in pts]
        i = bisect.bisect_right(ts, t)
        if i == 0:
            continue
        if i == len(pts):
            tot += pts[-1][1]
        else:
            (t0, c0), (t1, c1) = pts[i - 1], pts[i]
            tot += c0 + (c1 - c0) * ((t - t0) / (t1 - t0) if t1 > t0 else 0)
    return tot


def parse_log_events(path):
    """LOG(.gz): compaction 시작 레벨·출력 레벨·크기, trivial move, pending 바이트 stall 경고."""
    opener = gzip.open if path.endswith(".gz") else open
    started, comps, stalls, files = {}, [], [], []
    with opener(path, "rt", errors="replace") as f:
        for line in f:
            if "EVENT_LOG_v1" in line:
                try:
                    j = json.loads(line[line.index("{"):])
                except ValueError:
                    continue
                ev, t = j.get("event"), j.get("time_micros", 0) / 1e6
                if ev == "compaction_started":
                    lv = [int(k[7:]) for k in j if k.startswith("files_L")]
                    started[j.get("job")] = min(lv) if lv else None
                elif ev == "compaction_finished":
                    comps.append((t, started.pop(j.get("job"), None), j.get("output_level"),
                                  j.get("total_output_size", 0), False, j.get("lsm_state")))
                elif ev == "table_file_creation":
                    files.append((t, j.get("file_size", 0)))
                elif ev == "trivial_move":
                    dl = j.get("destination_level")
                    comps.append((t, (dl - 1) if dl is not None else None, dl, j.get("total_files_size", 0), True, None))
            else:
                m = PENDING_RE.search(line)
                if m:
                    mt = LOGTS_RE.match(line)
                    if mt:
                        stalls.append((_ts(mt.group(1)) + float("0." + mt.group(2)), int(m.group(1))))
    return {"comps": comps, "stalls": stalls, "files": files}


def log_file_events(d):
    """load·overwrite LOG(.gz) 의 table_file_creation (시각, 크기). LOG 가 없으면 None."""
    out = {}
    for ph in ("load", "overwrite"):
        p = os.path.join(d, f"rocksdb_LOG_{ph}.gz")
        if not os.path.exists(p):
            return None
        out[ph] = parse_log_events(p)["files"]
    return out


def cmd_pctrack(a):
    d = a.dir
    kv = read_run_params(d)
    n = int(kv.get("N", 0)) or int(float(open(os.path.join(d, "logical_bytes")).read()) // (env("KEY_SIZE", int) + env("VALUE_SIZE", int)))
    threads, w = int(kv.get("THREADS", env("THREADS", int))), int(kv.get("W", 0))
    planned = w * threads if w else None
    err = os.path.join(d, "db_bench_overwrite.stderr")
    if not os.path.exists(err):
        sys.exit(f"[pilot] {err} 없음 (예전 run 은 stderr 를 따로 안 남김).")
    prog, samples = parse_progress_and_stats(err)
    final_ops = None    # overwrite db_bench 의 --statistics 카운터 (이 프로세스에서 쓴 키 수, 정확)
    outp = os.path.join(d, "db_bench_overwrite.stdout")
    if os.path.exists(outp):
        for line in open(outp, errors="replace"):
            m = re.match(r"rocksdb\.number\.keys\.written COUNT : (\d+)", line)
            if m:
                final_ops = int(m.group(1))
    if not samples:
        sys.exit("[pilot] thread 0 진행 줄 없음 (--stats_interval_seconds 확인).")
    w = phase_windows(d)
    t_start = w["overwrite"][0] or samples[0]["start"]      # DB 열린 시각 (없으면 진행 줄로 추정)
    t_exec_end = w["overwrite"][1]                           # 결과 줄 시각 (없으면 None)
    allrows = du_rows(d)
    du = [(t, b) for t, ph, b in allrows if ph == "overwrite"]
    du_t = [x[0] for x in du]
    logp = next((p for p in (os.path.join(d, "rocksdb_LOG_overwrite.gz"), os.path.join(d, "rocksdb_LOG_overwrite"))
                 if os.path.exists(p)), None)
    lev = parse_log_events(logp) if logp else {"comps": [], "stalls": [], "files": []}
    comps, stalls, files = lev["comps"], lev["stalls"], lev["files"]
    deep = env("NUM_LEVELS", int) - 1          # 맨 아래 레벨 (L6)
    has_stats = any(s["levels"] for s in samples)

    def du_at(t):
        i = bisect.bisect_right(du_t, t)
        return du[i - 1][1] if i else None

    def du_peak(t0, t1):
        v = [b for ts, b in du if t0 <= ts <= t1]
        return max(v) if v else None

    rows = []
    for s_ in samples:
        ops = est_total_ops(prog, s_["t"])
        rows.append({"t": s_["t"], "elapsed_s": s_["t"] - t_start, "ops_est": ops, "x_N": ops / n,
                     **{f"L{k}_bytes": int(v) for k, v in sorted(s_["levels"].items())},
                     "stall_pct": s_.get("stall_pct"), "slow_pending": s_.get("slow_pending"),
                     "stop_pending": s_.get("stop_pending"), "du_total": du_at(s_["t"]),
                     "deep_moves_cum": sum(1 for c in comps if c[0] <= s_["t"] and c[1] == deep - 1 and c[2] == deep)})
    keys = sorted({k for r in rows for k in r})
    with open(os.path.join(d, "track.csv"), "w", newline="") as f:
        wr = csv.DictWriter(f, fieldnames=keys)
        wr.writeheader()
        wr.writerows(rows)

    print(f"== overwrite 진행 추적: {d}")
    print(f"  N = {n:,} (키 공간 --num), 스레드 {threads}, 계획 연산 수 = {planned:,}" if planned else f"  N = {n:,}")
    xd = _dur(w.get("overwrite"))
    print(f"  overwrite 실행 구간: DB 열림 ~ 결과 줄 = {xd/60:.1f}분" if xd is not None else
          "  overwrite 실행 구간: 경계 이벤트 없음 (예전 run) -> 진행 줄로 추정")
    print(f"  진행 샘플 {len(samples)}개 (thread 0 진행 줄마다 1개). 연산 수 = 스레드별 진행 줄 보간 추정.")
    print(f"  레벨별 크기 통계(--stats_per_interval): {'있음' if has_stats else '없음 (누락)'}")
    print(f"  끝난 뒤 완료 연산 수 (statistics 카운터, 정확): "
          + (f"{final_ops:,} = {final_ops/n:.6f}N (3N 대비 {final_ops - 3 * n:+,})" if final_ops is not None else "(없음 - 누락)"))
    print("  pending compaction 바이트: 60초 통계(rocksdb.stats)에는 없음 -> 누락."
          f" LOG 의 stall 경고(soft 한도 이상일 때만): {len(stalls)}줄" + ("" if logp else " (LOG 없음)"))
    marks = []
    for k in (1, 2, 3):
        if planned is not None and planned < k * n:
            print(f"  {k}배: 계획 연산 수({planned:,})가 {k}N({k*n:,})보다 적어서 없음")
            continue
        i = next((j for j, r in enumerate(rows) if r["ops_est"] >= k * n), None)
        if i is None:
            last = rows[-1]
            tail = (f" 끝난 뒤 정확한 완료 수는 {final_ops:,} = {final_ops/n:.4f}N 이라 {k}N 은 마지막 진행 샘플"
                    f" (경과 {last['elapsed_s']/60:.1f}분, 추정 {last['x_N']:.3f}N) 뒤, overwrite 가 끝나기 전 어딘가"
                    " (시각은 그 범위로만 알 수 있음)") if final_ops is not None and final_ops >= k * n else ""
            print(f"  {k}배: 진행 샘플 안에서는 {k}N 에 닿지 않음 (마지막 추정 {last['ops_est']:,.0f}회).{tail}")
            continue
        r, prev = rows[i], rows[i - 1] if i else None
        marks.append((k, r))
        print(f"  {k}배 근처 샘플 (정확한 경계 아님): 경과 {r['elapsed_s']/60:.1f}분, 추정 {r['ops_est']:,.0f}회"
              f" = {r['x_N']:.3f}N" + (f" (바로 앞 샘플 {prev['ops_est']/n:.3f}N, {prev['elapsed_s']/60:.1f}분)" if prev else ""))
        lv = " ".join(f"L{l} {r[f'L{l}_bytes']/GiB:.2f}" for l in range(deep + 1) if f"L{l}_bytes" in r)
        print(f"      레벨(GiB): {lv or '(없음)'}; 공간(du) {r['du_total']/GiB:.2f} GiB; stall 누적 {r['stall_pct']}%;"
              f" pending slowdown {r['slow_pending']}회, stop {r['stop_pending']}회" if r["du_total"] else "")
    # 구간: 시작~1배, 1배~2배, 2배~3배, 마지막 이후 (경계는 위의 근처 샘플 시각)
    edges = [("시작", t_start)] + [(f"{k}배", r["t"]) for k, r in marks if t_exec_end is None or r["t"] <= t_exec_end]
    edges.append(("실행 끝", t_exec_end or max([rows[-1]["t"]] + du_t[-1:])))
    print("  실행 구간 (경계 = 근처 샘플 시각, 마지막은 결과 줄 시각):")
    for (n0, t0), (n1, t1) in zip(edges, edges[1:]):
        dm = [c for c in comps if t0 < c[0] <= t1 and c[1] == deep - 1 and c[2] == deep]
        ps = [b for t, b in stalls if t0 < t <= t1]
        pk = du_peak(t0, t1)
        print(f"    {n0}~{n1}: L{deep-1}->L{deep} compaction {sum(1 for c in dm if not c[4])}번"
              f" ({sum(c[3] for c in dm if not c[4])/GiB:.2f} GiB 출력), trivial move {sum(1 for c in dm if c[4])}번;"
              f" 공간 최대 {pk/GiB:.2f} GiB;" if pk else f"    {n0}~{n1}: du 샘플 없음;",
              f"pending stall 경고 {len(ps)}줄" + (f" (최대 {max(ps)/GiB:.2f} GiB)" if ps else ""))
    tu = overwrite_tail_usage(d)
    if tu:
        cap = env("DEV_CAPACITY_GIB", float, 0.0) * GiB
        print(f"  overwrite 실행 전체: 공간 최대 {tu[0]/GiB:.2f} GiB, 뒤 1/3 평균 {tu[1]/GiB:.2f} GiB"
              + (f" (용량 대비 {tu[1]/cap*100:.1f}%)" if cap else "") + " (대기·LOG 저장 제외)")
    ws, we = w.get("overwrite_wait", (None, None))
    if ws and we:
        wv = [b for t, ph, b in allrows if ph == "overwrite_wait"]
        dm = [c for c in comps if ws < c[0] <= we and c[1] == deep - 1 and c[2] == deep]
        sst = sum(sz for t, sz in files if ws < t <= we)
        ps = [b for t, b in stalls if ws < t <= we]
        cd = w.get("overwrite_wait_compaction_done")
        print(f"  대기 구간 (따로, 주 수치에서 뺌): {(we-ws)/60:.1f}분"
              + (f" (마지막 waitforcompaction finished 까지 {(cd-ws)/60:.1f}분)" if cd else "")
              + f"; 추가 SST 쓰기 {sst/GiB:.2f} GiB; L{deep-1}->L{deep} compaction {sum(1 for c in dm if not c[4])}번;"
              + (f" 공간 최대 {max(wv)/GiB:.2f} GiB" if wv else " du 샘플 없음")
              + (f"; pending stall 경고 {len(ps)}줄" if ps else ""))
    peak_all = max(allrows, key=lambda r: r[2]) if allrows else None
    if peak_all:
        print(f"  load·overwrite·대기 전체 공간 최대: {peak_all[2]/GiB:.2f} GiB ({peak_all[1]} 단계)")
    note = nofsync_note(d)
    if note:
        print(note)
    print(f"  샘플별 값: {os.path.join(d, 'track.csv')}")


# ---------------- RocksDB 실효 옵션 확인 ----------------
# LOG 의 옵션 줄 형식 (RocksDB 7.2.2 소스 기준):
#   DB 옵션  options/db_options.cc  ImmutableDBOptions::Dump / MutableDBOptions::Dump
#   CF 옵션  options/options.cc     ColumnFamilyOptions::Dump ("Options for column family [default]:" 다음)
#   - bool 은 대부분 %d 라 0/1 (예: level_compaction_dynamic_level_bytes: 0)
#   - max_bytes_for_level_multiplier 는 %f (10.000000)
#   - 압축 이름은 CompressionTypeToString (kNoCompression -> "NoCompression").
#     compression_per_level 이 비어 있으면 "Options.compression: X" 한 줄만,
#     비어 있지 않으면 "Options.compression[i]: X" 가 레벨마다 찍힘.
#   - bottommost_compression 이 kDisableCompressionOption 이면 "Disabled" (= 따로 안 정함, 위 압축을 따름)
#   - delayed_write_rate 는 콜론 앞에 공백 있음 ("Options.delayed_write_rate : 16777216")
OPT_LINE = re.compile(r"^\S+\s+\S+\s+(?:\(Original Log Time [^)]*\)\s+)?"
                      r"Options\.([A-Za-z0-9_.]+(?:\[\d+\])?)\s*:\s*(.*?)\s*$")
COMPRESSION_NAMES = {"none": "NoCompression", "snappy": "Snappy", "zlib": "Zlib", "bzip2": "BZip2",
                     "lz4": "LZ4", "lz4hc": "LZ4HC", "xpress": "Xpress", "zstd": "ZSTD"}


def parse_log_options(path):
    """LOG 옵션 덤프 -> ({키: [값, ...]}, CF 구간 유무). DB pointer 줄에서 멈춤."""
    vals, cf_seen = {}, False
    for line in open(path, errors="replace"):
        if "Options for column family [default]" in line:
            cf_seen = True
        m = OPT_LINE.match(line.rstrip("\n"))
        if m:
            vals.setdefault(m.group(1), []).append(m.group(2))
        if "DB pointer" in line:
            break
    return vals, cf_seen


def expected_options():
    """config.env 와 lib/dbbench_args.sh 로 넘긴 값에서 LOG 에 찍혀야 할 값. (키, 기대값, 비교 방법)"""
    nl = env("NUM_LEVELS", int)
    comp = str(env("COMPRESSION")).lower()
    exp = [
        ("num_levels", nl, "int"),
        ("max_bytes_for_level_base", int(env("LEVEL_BASE_MB", float) * MiB), "int"),
        ("max_bytes_for_level_multiplier", env("LEVEL_MULT", float), "float"),
        ("target_file_size_base", int(env("TARGET_FILE_MB", float) * MiB), "int"),
        ("target_file_size_multiplier", env("TARGET_FILE_MULT", int), "int"),
        ("write_buffer_size", int(env("WRITE_BUFFER_MB", float) * MiB), "int"),
        ("max_write_buffer_number", env("MAX_WB_NUMBER", int), "int"),
        ("min_write_buffer_number_to_merge", env("MIN_WB_MERGE", int), "int"),
        ("level0_file_num_compaction_trigger", env("L0_TRIGGER", int), "int"),
        ("level0_slowdown_writes_trigger", env("L0_SLOWDOWN", int), "int"),
        ("level0_stop_writes_trigger", env("L0_STOP", int), "int"),
        ("level_compaction_dynamic_level_bytes", 0, "int"),          # false -> 0
        ("soft_pending_compaction_bytes_limit", env("SOFT_PENDING_BYTES", int), "int"),
        ("hard_pending_compaction_bytes_limit", env("HARD_PENDING_BYTES", int), "int"),
        ("delayed_write_rate", env("DELAYED_WRITE_RATE", int), "int"),
        ("max_background_jobs", env("BG_JOBS", int), "int"),
        ("disable_auto_compactions", 0, "int"),                      # 자동 compaction 켜짐
        ("compaction_style", "kCompactionStyleLevel", "str"),
        ("compression", COMPRESSION_NAMES.get(comp, f"?{comp}"), "compression"),
        ("bottommost_compression", "Disabled", "str"),
    ]
    exp += [(f"max_bytes_for_level_multiplier_addtl[{i}]", 1, "int") for i in range(nl)]
    return exp


# 이번엔 일부러 안 넣은 옵션: 관측값만 기록 (RocksDB 7.2.2 기본값과 같으면 "미적용")
INFO_OPTIONS = [
    ("max_log_file_size", "0", "LOG 크기 제한 미적용: DBOption 은 있으나 db_bench 7.2.2 CLI 플래그가 없음 (기본 0 = 제한 없음)"),
    ("keep_log_file_num", "1000", "LOG 개수 제한 미적용: DBOption 은 있으나 db_bench 7.2.2 CLI 플래그가 없음 (기본 1000)"),
    ("stats_dump_period_sec", None, "LOG 통계 출력 간격 (추적용, LSM 동작과 무관)"),
    ("max_open_files", None, "열린 파일 수 제한 (-1 = 제한 없음)"),
]


def _same(kind, want, got):
    try:
        if kind == "int":
            return int(got) == int(want)
        if kind == "float":
            return abs(float(got) - float(want)) < 1e-9
    except ValueError:
        return False
    return got == str(want)


def cmd_optcheck(a):
    vals, cf_seen = parse_log_options(a.log)
    rows, bad, miss = [], 0, 0

    def add(key, want, got, ok, note=""):
        rows.append((key, want, got, ok, note))

    for key, want, kind in expected_options():
        if kind == "compression":
            per = sorted((k for k in vals if re.fullmatch(r"compression\[\d+\]", k)),
                         key=lambda k: int(k[12:-1]))
            if per:   # compression_per_level 이 채워진 경우: 레벨마다 확인
                for k in per:
                    got = vals[k]
                    ok = len(set(got)) == 1 and got[0] == want
                    add(k, want, ",".join(sorted(set(got))), "통과" if ok else "불일치")
                if len(per) != env("NUM_LEVELS", int):
                    add("compression[i] 개수", env("NUM_LEVELS", int), len(per), "불일치")
                continue
            add("compression_per_level", "(비어 있음)", "(compression[i] 줄 없음)", "통과",
                "Options.compression 하나가 모든 레벨에 적용")
        got = vals.get(key)
        if not got:
            add(key, want, "(없음)", "누락")
            continue
        uniq = sorted(set(got))
        if len(uniq) > 1:
            add(key, want, " / ".join(uniq), "불일치", "LOG 안에서 값이 여러 개")
            continue
        add(key, want, uniq[0], "통과" if _same("str" if kind == "compression" else kind, want, uniq[0]) else "불일치")
    if not cf_seen:
        add("CF 옵션 구간", "Options for column family [default]", "(없음)", "누락", "LOG 가 잘렸거나 다른 파일")

    for key, default, note in INFO_OPTIONS:
        got = vals.get(key)
        g = " / ".join(sorted(set(got))) if got else "(없음)"
        if default is not None and got and set(got) == {default}:
            rows.append((key, "(미적용)", g, "정보: 미적용", note))
        else:
            rows.append((key, "-", g, "정보", note))

    bad = sum(1 for r in rows if r[3] == "불일치")
    miss = sum(1 for r in rows if r[3] == "누락")
    good = sum(1 for r in rows if r[3] == "통과")
    print(f"== RocksDB 실효 옵션 확인: {a.log}")
    print("   기대값: config.env (lib/dbbench_args.sh 가 CLI로 넘긴 값). LOG 형식: RocksDB 7.2.2 options/options.cc, options/db_options.cc")
    w = max(len(r[0]) for r in rows)
    print(f"   {'항목':<{w}}  {'기대':>22}  {'관측':>22}  결과")
    for key, want, got, ok, note in rows:
        print(f"   {key:<{w}}  {str(want):>22}  {str(got):>22}  {ok}" + (f"  ({note})" if note else ""))
    print(f"결과: 통과 {good} / 불일치 {bad} / 누락 {miss}")
    sys.exit(0 if bad == 0 and miss == 0 else 2)


# ---------------- FEMU 결과 요약 ----------------

def interpolate(points, t):
    """Linearly interpolate a cumulative counter; never extrapolate."""
    if not points or t < points[0][0] or t > points[-1][0]:
        return None
    i = bisect.bisect_right([p[0] for p in points], t)
    if i == len(points) or points[i - 1][0] == t:
        return points[i - 1][1]
    ta, va = points[i - 1]
    tb, vb = points[i]
    return va + (vb - va) * (t - ta) / (tb - ta)


def phase_slice(rows, phase, lo, hi, bounds=None):
    """Counter delta over [lo, hi] of elapsed phase time, not sample index.

    With event bounds, use adjacent counter samples to interpolate the actual
    execution boundaries. Otherwise legacy diagnostic output uses first/last
    phase-labelled timestamps. No extrapolation is permitted.
    """
    rs = [r for r in rows if r["phase"] == phase]
    if len(rs) < 6:
        return None
    if bounds and None not in bounds:
        start, end = bounds
        samples = rows
    else:
        start, end = float(rs[0]["ts"]), float(rs[-1]["ts"])
        samples = rs
    if end <= start or not 0 <= lo < hi <= 1:
        return None
    left, right = start + (end - start) * lo, start + (end - start) * hi
    deltas = []
    for key in ("host_bytes", "media_bytes"):
        points = [(float(r["ts"]), int(r[key])) for r in samples]
        if any(b[0] < a[0] or b[1] < a[1] for a, b in zip(points, points[1:])):
            return None
        first, last = interpolate(points, left), interpolate(points, right)
        if first is None or last is None:
            return None
        deltas.append(last - first)
    return tuple(deltas) if deltas[0] > 0 else None


def phase_delta(rows, phase, tail_frac=None, bounds=None):
    return phase_slice(rows, phase, 1 - tail_frac if tail_frac else 0, 1, bounds)


def time_mean(points, start, end):
    """Time weighted mean of a linearly interpolated sampled value."""
    if end <= start:
        return None
    first, last = interpolate(points, start), interpolate(points, end)
    if first is None or last is None:
        return None
    selected = [(start, first)] + [p for p in points if start < p[0] < end] + [(end, last)]
    area = sum((b[0] - a[0]) * (a[1] + b[1]) / 2 for a, b in zip(selected, selected[1:]))
    return area / (end - start)


def last_invalid_pid(path):
    """usage.csv 마지막 줄의 잘못된 PID 쓰기 수. 기록이 없으면 None."""
    if not os.path.exists(path):
        return None
    last = None
    for r in csv.DictReader(open(path)):
        v = r.get("invalid_pid_cmds")
        if v not in (None, "", "-1"):
            last = int(v)
    return last


def femu_ruh_shares(path):
    """ruh_usage.csv(RUH_METHOD=femu)의 overwrite 구간 처음·끝 차이로 RUH별 (host 비율, media 비율)."""
    if not os.path.exists(path):
        return None
    first, last = {}, {}
    for r in csv.DictReader(open(path)):
        if r["phase"] != "overwrite":
            continue
        k, v = int(r["ruh"]), (int(r["hbmw"]), int(r["mbmw"]))
        first.setdefault(k, v)
        last[k] = v
    dh = {k: last[k][0] - first[k][0] for k in last}
    dm = {k: last[k][1] - first[k][1] for k in last}
    th, tm = sum(dh.values()), sum(dm.values())
    if th <= 0:
        return None
    return {k: (dh[k] / th, dm[k] / tm if tm else 0.0)
            for k in sorted(dh) if dh[k] > 0 or dm[k] > 0}


def util_stats(path, bounds=None):
    """Peak valid/capacity and time weighted last-third overwrite utilization."""
    if not os.path.exists(path):
        return None
    rows = list(csv.DictReader(open(path)))
    values = [(float(r["ts"]), int(r["valid_bytes"]) / int(r["capacity_bytes"]))
              for r in rows if int(r["capacity_bytes"]) > 0]
    ow = [float(r["ts"]) for r in rows if r["phase"] == "overwrite"]
    if not values:
        return None
    if bounds and None not in bounds:
        start, end = bounds
    elif ow:
        start, end = ow[0], ow[-1]
    else:
        return max(v for _, v in values), None
    mean = time_mean(values, start + (end - start) * 2 / 3, end)
    return max(v for _, v in values), mean


def ruh_shares(path, ru_blocks):
    """ruh.csv(RUH_METHOD=fdpstatus)의 RUAMW 변화로 추정한 RUH별 쓰기 비율 (근사).
    샘플 사이에 RU 2개 넘게 쓰면 과소 집계."""
    if not os.path.exists(path):
        return None
    last, acc = {}, {}
    for r in csv.DictReader(open(path)):
        if r["phase"] != "overwrite":
            continue
        pid, v = int(r["pid"]), int(r["value"])
        if pid in last:
            d = last[pid] - v if v <= last[pid] else last[pid] + (ru_blocks - v)
            acc[pid] = acc.get(pid, 0) + max(d, 0)
        last[pid] = v
    tot = sum(acc.values())
    return {p: acc[p] / tot for p in sorted(acc)} if tot else None


RUN_RE = re.compile(r"^(single6|single|lan)_u([\d.]+)(?:_r(\d+))?$")

GC_LOG_RE = re.compile(r"gc threshold(_high)? \((\d+)%\) (\d+)/(\d+) RU")


def run_gc_units(results, run):
    """run의 FEMU 로그(host_logs/femu_<run>.log)에서 (전체 RU, background 기준 RU, 강제 기준 RU, 출처).
    로그 없으면 해당 run manifest 값만 사용. 현재 config는 과거 run의 근거가 아니다."""
    p = os.path.join(results, "host_logs", f"femu_{run}.log")
    bg = hi = total = None
    if os.path.exists(p):
        with open(p, errors="replace") as f:
            for line in f:
                m = GC_LOG_RE.search(line)
                if m:
                    total = int(m.group(4))
                    if m.group(1):
                        hi = int(m.group(3))
                    else:
                        bg = int(m.group(3))
                if bg is not None and hi is not None:
                    return total, bg, hi, "FEMU 로그"
    try:
        cfg = json.load(open(os.path.join(results, run, "manifest.json")))["config"]
        total = int(cfg["FEMU_BLKS_PER_PL"])
        bg = int((1 - float(cfg["FEMU_GC_THRES"]) / 100) * total)
        hi = max(int((1 - float(cfg["FEMU_GC_THRES_HIGH"]) / 100) * total), 1)
        return total, bg, hi, "run manifest"
    except (OSError, ValueError, KeyError, TypeError):
        return None


def run_nruh(d):
    """device.txt 의 nruh. 없으면 None."""
    p = os.path.join(d, "device.txt")
    if os.path.exists(p):
        m = re.search(r"^nruh=(\d+)", open(p).read(), re.M)
        if m:
            return int(m.group(1))
    return None


def overwrite_valid(path):
    """usage.csv overwrite 구간 [(ts, valid_bytes)]."""
    if not os.path.exists(path):
        return []
    return [(float(r["ts"]), int(r["valid_bytes"])) for r in csv.DictReader(open(path))
            if r["phase"] == "overwrite"]


def valid_drops(v, min_bytes=0.4 * GiB, bounds=None):
    """유효 데이터가 샘플 사이에 min_bytes 넘게 줄어든 지점 [(구간 내 비율, 줄어든 GiB)].
    TorFS 메타 영역 교체(1 GiB 해제)가 이렇게 보임."""
    if len(v) < 2:
        return []
    t0, t1 = bounds if bounds and None not in bounds else (v[0][0], v[-1][0])
    return [((b[0] - t0) / (t1 - t0) if t1 > t0 else 0.0, (a[1] - b[1]) / GiB)
            for a, b in zip(v, v[1:]) if a[1] - b[1] >= min_bytes]


def run_lba_bytes(d):
    """run 폴더에 남긴 장치 LBA 크기. 없으면 config 의 LBA_BYTES."""
    p = os.path.join(d, "lba_bytes")
    if os.path.exists(p):
        try:
            return int(open(p).read().split()[0])
        except (ValueError, IndexError):
            pass
    return env("LBA_BYTES", int, 512)


def cmd_summary(a):
    import runcheck
    res = []
    print("판정 구간: overwrite 실행 시간의 마지막 1/3; timestamp 선형 보간")
    print("WAF = media bytes / host bytes. 총 Media 변화율과 WAF 변화율은 다름.")
    for d in sorted(glob.glob(os.path.join(a.results, "*_u*"))):
        name = os.path.basename(d)
        match = RUN_RE.match(name)
        if not match or not os.path.isfile(os.path.join(d, "counters.csv")):
            continue
        validation = runcheck.validate(d, require_done=True)
        if validation["status"] != "VALID":
            print(f"[INVALID; 판정 제외] {name}: " + "; ".join(validation["errors"]))
            continue
        try:
            manifest = runcheck.load(os.path.join(d, "manifest.json"))
            cfg = manifest["config"]
            key = runcheck.comparison_key(manifest)
            policy, util = match.group(1), float(match.group(2))
            if manifest["policy"] != policy or abs(manifest["util"] - util) > 1e-9:
                raise ValueError("folder and manifest policy/util differ")
            rows = list(csv.DictReader(open(os.path.join(d, "counters.csv"))))
            bounds = phase_windows(d).get("overwrite")
            full = phase_delta(rows, "overwrite", bounds=bounds)
            tail = phase_delta(rows, "overwrite", 1 / 3, bounds)
            mid = phase_slice(rows, "overwrite", 1 / 3, 2 / 3, bounds)
            if not full or not tail or not mid or min(full + tail + mid) <= 0:
                raise ValueError("phase counter interpolation unavailable")
            used = util_stats(os.path.join(d, "usage.csv"), bounds)
            waf_tail, waf_mid = tail[1] / tail[0], mid[1] / mid[0]
            # 안정 확인은 경고만: 판정에서 빼지 않음 (11/13 결정, 메타 영역 교체로 WAF가 흔들림)
            drift = abs(waf_mid - waf_tail) / waf_tail
            stable = drift <= float(cfg.get("STABLE_TOL", .05))
            no_gc = full[1] <= full[0]
            status = "VALID" if not no_gc else "INCONCLUSIVE"
            print(f"{name}: {status}; host {full[0]/GiB:.3f} GiB; total Media {full[1]/GiB:.3f} GiB; "
                  f"WAF {full[1]/full[0]:.4f}; WAF(시간 뒤1/3) {waf_tail:.4f}; "
                  f"가운데1/3 {waf_mid:.4f}; 실제 최고 사용률 {used[0]*100:.2f}%")
            if not stable:
                print(f"  [주의] 가운데→뒤 1/3 WAF 차 {drift*100:.1f}% > {float(cfg.get('STABLE_TOL', .05))*100:g}%."
                      " 아직 변하는 중. 판정에는 쓰고 해석 때 같이 봄")
            if no_gc: print("  GC 쓰기 미관측: GC 메커니즘 판정 보류.")
            for warning in validation["warnings"]:
                print("  참고: " + warning)
            gc = run_gc_units(a.results, name)
            if gc:
                total, bg, hi, source = gc
                print(f"  GC trigger 빈RU {bg}/{hi} of {total} ({source}); 실제 free RU 측정값 아님.")
            else:
                print("  GC trigger unknown (해당 run 로그/manifest 근거 없음).")
            # 여유 RU [추정]: background GC가 빈 RU를 bg개 근처로 유지한다고 보고 계산. 실측 free RU 아님
            nruh = run_nruh(d)
            if gc and nruh and used and used[1] is not None:
                total, bg, hi, _src = gc
                ru = float(cfg.get("RU_MIB", 128)) * MiB
                cap = float(cfg.get("DEV_CAPACITY_GIB", 24)) * GiB
                vru = used[1] * cap / ru
                room = total - bg - nruh
                spare = room - vru
                note = "" if spare > 0 else \
                    f"; background 기준 못 지킴 → 강제 기준 쪽 여유 {total - hi - nruh - vru:.1f} RU"
                print(f"  [추정] 여유 RU (뒤 1/3): 전체 {total} - GC 기준 {bg} - 열린 RU {nruh}"
                      f" - 유효 {vru:.1f} = {spare:.1f} RU ({spare / room * 100:.1f}%){note}")
            shares = femu_ruh_shares(os.path.join(d, "ruh_usage.csv"))
            if shares:
                print("  RUH별 host 비율: " + " ".join(f"{p}:{v[0]*100:.1f}%" for p, v in shares.items()))
                print("  RUH별 media는 source RUH 귀속이며 파일 종류별 GC 비용이 아님.")
            drops = valid_drops(overwrite_valid(os.path.join(d, "usage.csv")), bounds=bounds)
            if drops:
                print("  유효량 급감 (overwrite 시간 비율): " + ", ".join(f"{f*100:.1f}% -{n:.2f} GiB" for f, n in drops))
            if status == "VALID":
                res.append({"run": name, "policy": policy, "util": util, "key": key, "unstable": not stable,
                            "src": runcheck.source_key(manifest),
                            "waf_tail": waf_tail, "config": cfg})
        except (OSError, ValueError, KeyError, TypeError, ZeroDivisionError) as e:
            print(f"[INVALID; 판정 제외] {name}: {e}")
    if not res:
        print("판정 보류: 완료·계측·안정성 검증을 통과한 비교 결과 없음.")
        return
    keys = {r["key"] for r in res}
    if len(keys) != 1:
        print("판정 보류: 컴퓨터·QEMU·빌드·커널·실험 설정이 다른 run이 섞임. 한 컴퓨터·같은 설정 결과만 비교할 것.")
        return
    if len({r["src"] for r in res}) > 1:
        print("[주의] run마다 실행 스크립트 버전이 다름 (실험 설정·빌드는 같음). 버그 수정 등 변경 내용을 같이 기록할 것")
    unstable = [r["run"] for r in res if r.get("unstable")]
    if unstable:
        print("[주의] 아직 변하는 run 포함: " + ", ".join(unstable) + " → 판정 해석 때 같이 볼 것")
    groups = {}
    for r in res:
        groups.setdefault((r["policy"], r["util"]), []).append(r["waf_tail"])
    waf = {k: sum(v) / len(v) for k, v in groups.items()}
    gains = {}
    for u in sorted({r["util"] for r in res}):
        if ("single", u) in waf and ("lan", u) in waf:
            gains[u] = 1 - waf[("lan", u)] / waf[("single", u)]
            print(f"사용률 {u:.2f}: WAF 감소율 {gains[u]*100:+.2f}% = 1 − WAF_lan/WAF_single (시간 뒤1/3)")
        if ("single6", u) in waf and ("single", u) in waf:
            print(f"  추가 열린RU 조건의 WAF 변화율: {(waf[('single6', u)]/waf[('single', u)]-1)*100:+.2f}%")
        if ("single6", u) in waf and ("lan", u) in waf:
            print(f"  열린RU 수 동일 조건의 배치 WAF 감소율: {(1-waf[('lan', u)]/waf[('single6', u)])*100:+.2f}%")
    if .70 not in gains:
        print("판정 보류: 같은 컴퓨터의 유효한 70% single·lan 짝 필요.")
        return
    decision_cfg = res[0]["config"]
    min_gain = float(decision_cfg.get("MIN_GAIN_LOW", .10))
    if gains[.70] < min_gain:
        print(f"판정 보류: 70% WAF 이득이 {min_gain*100:g}% 미만. 93% 본 비교를 진행하지 않음.")
        return
    if .93 not in gains:
        print("70% 관문 통과. 같은 컴퓨터에서 93% single → lan 진행 가능.")
        return
    ratio = gains[.93] / gains[.70]
    cut, band = float(decision_cfg.get("COLLAPSE_RATIO", .5)), float(decision_cfg.get("BORDER_BAND", .1))
    print(f"이득 비율 gain(93%)/gain(70%) = {ratio:.3f}")
    if abs(ratio - cut) <= band:
        print("판정: 경계. 11/26 이전 추가 반복·새 정책 없이 경계 결과로 보고.")
    elif ratio < cut:
        print("판정: 고사용률에서 WAF 이득 감소 관찰 (단일 실행 파일럿).")
    else:
        print("판정: 이번 파일럿에서 큰 이득 감소가 관찰되지 않음. 새 workload는 별도 후속 결정.")
    print("단일 실행 파일럿이며 통계적 우월성이나 열린RU 원인을 확정하지 않음.")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sp = ap.add_subparsers(dest="cmd", required=True)
    sp.add_parser("calc")
    g = sp.add_parser("get")
    g.add_argument("util")
    g.add_argument("field")
    sp.add_parser("counters")
    sp.add_parser("freshcheck")
    sp.add_parser("usage")
    sp.add_parser("ruh")
    sp.add_parser("lbasize")
    sp.add_parser("ruhtypes")
    p = sp.add_parser("devcheck")
    p.add_argument("policy", choices=["single", "lan", "single6"])
    p.add_argument("out")
    sp.add_parser("pidcheck")
    p = sp.add_parser("pcsummary")
    p.add_argument("dir")
    p = sp.add_parser("tsw")
    p.add_argument("--raw", required=True)
    p.add_argument("--ts", required=True)
    p.add_argument("--events")
    p.add_argument("--phase-file", dest="phase_file")
    p.add_argument("--once", nargs=3, action="append", metavar=("REGEX", "EVENT", "PHASE"))
    p.add_argument("--every", nargs=2, action="append", metavar=("REGEX", "EVENT"))
    p = sp.add_parser("logopen")
    p.add_argument("log")
    p = sp.add_parser("phasetimes")
    p.add_argument("dir")
    p = sp.add_parser("pctrack")
    p.add_argument("dir")
    p = sp.add_parser("optcheck")
    p.add_argument("log")
    p = sp.add_parser("pcfit")
    p.add_argument("dirs", nargs="+")
    s = sp.add_parser("summary")
    s.add_argument("results")
    a = ap.parse_args()
    {"calc": cmd_calc, "get": cmd_get, "counters": cmd_counters, "freshcheck": cmd_freshcheck, "usage": cmd_usage,
     "ruh": cmd_ruh, "lbasize": cmd_lbasize, "ruhtypes": cmd_ruhtypes,
     "devcheck": cmd_devcheck, "pidcheck": cmd_pidcheck,
     "pcsummary": cmd_pcsummary, "pcfit": cmd_pcfit, "optcheck": cmd_optcheck, "pctrack": cmd_pctrack,
     "tsw": cmd_tsw, "logopen": cmd_logopen, "phasetimes": cmd_phasetimes,
     "summary": cmd_summary}[a.cmd](a)


if __name__ == "__main__":
    main()
