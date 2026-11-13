#!/usr/bin/env python3
"""Run provenance and completion/measurement checks; never queries the device."""
import csv
import hashlib
import json
import os
from pathlib import Path
import re
import socket
import subprocess
import sys

# Credentials/SSH command strings are deliberately excluded.
KEYS = '''KEY_SIZE VALUE_SIZE ROCKSDB_TAG ROCKSDB_COMMIT TORFS_COMMIT LAN_REPO_COMMIT
LEVEL_BASE_MB TARGET_FILE_MB TARGET_FILE_MULT WRITE_BUFFER_MB LEVEL_MULT NUM_LEVELS
L0_TRIGGER L0_SLOWDOWN L0_STOP MIN_WB_MERGE MAX_WB_NUMBER SOFT_PENDING_BYTES
HARD_PENDING_BYTES DELAYED_WRITE_RATE BG_JOBS COMPRESSION DEV_CAPACITY_GIB RU_MIB
EXPECT_RUHT NRUH_single NRUH_lan NRUH_single6 PHS_single PHS_lan PHS_single6
SPACE_SLOPE SPACE_FIXED_GIB SPACE_MARGIN TORFS_META_GIB OVERWRITE_MULT THREADS SEED
TRACK_STATS STATS_INTERVAL_SEC OPTCHECK_STRICT SAVE_FULL_LOG RUH_METHOD COUNTER_METHOD FDP_ENDGRP FEMU_USAGE_LID LBA_BYTES SAMPLE_SEC UTIL_TOL MAX_SAMPLE_GAP_FACTOR STABLE_TOL MIN_GAIN_LOW COLLAPSE_RATIO BORDER_BAND
FEMU_BLKS_PER_PL FEMU_GC_THRES FEMU_GC_THRES_HIGH FEMU_ISOLATION_MODE FEMU_NAND_LAT
FEMU_GUEST_MEM FEMU_GUEST_CPUS FEMU_DEVSZ_MB FEMU_SECSZ FEMU_SECS_PER_PG
FEMU_PGS_PER_BLK FEMU_PLS_PER_LUN FEMU_LUNS_PER_CH FEMU_NCHS'''.split()


# 판정 기준값: 실험 조건이 아니라 해석 규칙 → 일치 검사·비교에서 뺌
JUDGE_KEYS = {'UTIL_TOL', 'STABLE_TOL', 'MIN_GAIN_LOW', 'COLLAPSE_RATIO', 'BORDER_BAND', 'MAX_SAMPLE_GAP_FACTOR'}


def exp_config(cfg):
    """실험 조건만 (판정 기준값 제외)."""
    return {k: v for k, v in cfg.items() if k not in JUDGE_KEYS}


def run_scripts(src):
    """run 동작에 쓰는 스크립트 해시만 (test_*.py 제외). git commit은 문서만 바뀌어도 달라져서 안 봄."""
    return {k: v for k, v in src.get('scripts', {}).items() if not Path(k).name.startswith('test_')}


def sha(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        for b in iter(lambda: f.read(1024 * 1024), b''):
            h.update(b)
    return h.hexdigest()


def command(*args):
    return subprocess.check_output(args, text=True, stderr=subprocess.DEVNULL).strip()


def config():
    return {k: os.environ[k] for k in KEYS if k in os.environ}


def source():
    here = Path(__file__).resolve().parent
    return {'commit': command('git', '-C', str(here), 'rev-parse', 'HEAD'),
            'scripts': {str(p.relative_to(here)): sha(p) for p in sorted(here.rglob('*'))
                        if p.is_file() and p.suffix in ('.py', '.sh', '.patch', '.c')
                        and 'results' not in p.parts and '__pycache__' not in p.parts}}


def save(path, data):
    p = Path(path)
    tmp = p.with_name(p.name + '.tmp')
    tmp.write_text(json.dumps(data, indent=2, sort_keys=True) + '\n')
    tmp.replace(p)


def load(path):
    return json.loads(Path(path).read_text())


def build(binary, tree, patch):
    tree = Path(tree)
    data = {'binary_sha256': sha(binary), 'rocksdb': command('git', '-C', str(tree), 'rev-parse', 'HEAD'),
            'rocksdb_tag': command('git', '-C', str(tree), 'describe', '--tags', '--exact-match', 'HEAD'),
            'lan_commit': command('git', '-C', str(Path(patch).parent), 'rev-parse', 'HEAD'),
            'rocksdb_patch_sha256': sha(patch),
            'rocksdb_diff_sha256': hashlib.sha256(subprocess.check_output(['git', '-C', str(tree), 'diff'])).hexdigest()}
    torfs = tree / 'plugin/torfs'
    if torfs.exists():
        data['torfs'] = command('git', '-C', str(torfs), 'rev-parse', 'HEAD')
        data['torfs_diff_sha256'] = hashlib.sha256(subprocess.check_output(['git', '-C', str(torfs), 'diff'])).hexdigest()
        data['xnvme'] = command('pkg-config', '--modversion', 'xnvme')
    save(str(binary) + '.build.json', data)


def host(path, run_id):
    data = {'schema': 1, 'run_id': run_id, 'hostname': socket.gethostname(),
            'config': config(), 'source': source(), 'qemu_sha256': sha(os.environ['FEMU_BIN']),
            'guest_image': os.environ['FEMU_GUEST_IMAGE']}
    save(path, data)


def guest(path, binary, policy, util, n, w):
    build_data = load(binary + '.build.json')
    if build_data['binary_sha256'] != sha(binary):
        raise ValueError('db_bench differs from recorded build')
    if build_data.get('lan_commit') != os.environ['LAN_REPO_COMMIT'] or build_data.get('rocksdb_tag') != os.environ['ROCKSDB_TAG'] or build_data.get('rocksdb') != os.environ['ROCKSDB_COMMIT'] or build_data.get('torfs') != os.environ['TORFS_COMMIT']:
        raise ValueError('built source versions differ from config')
    if 'nofsync' in os.environ.get('LD_PRELOAD', ''):
        raise ValueError('NOFSYNC is not permitted for FEMU measurement')
    host_data = load('/tmp/fdp-pilot-host.json')
    if run_scripts(host_data['source']) != run_scripts(source()) or exp_config(host_data['config']) != exp_config(config()):
        raise ValueError('host/guest source or experiment config mismatch')
    guest_uuid = Path('/sys/class/dmi/id/product_uuid').read_text().strip().lower()
    if guest_uuid != host_data['run_id'].lower() or os.environ.get('FEMU_RUN_ID', '').lower() != guest_uuid:
        raise ValueError('guest UUID and host attempt manifest mismatch')
    data = {'schema': 1, 'policy': policy, 'util': float(util), 'N': int(n),
            'expected_writes': int(w) * int(os.environ['THREADS']), 'config': config(),
            'source': source(), 'build': build_data, 'host': host_data,
            'kernel': command('uname', '-r'), 'nvme': command('nvme', 'version'),
            'tail_basis': 'overwrite elapsed time; last third; timestamp interpolation'}
    save(path, data)


def comparison_key(manifest):
    """같이 비교해도 되는 run인지: 실험 조건·빌드·커널·nvme·컴퓨터·QEMU가 같아야 함.
    run UUID·목표 사용률·판정 기준값·스크립트 해시는 뺌 (스크립트 차이는 source_key 로 [주의]만)."""
    return json.dumps({'config': exp_config(manifest['config'])} |
                      {k: manifest[k] for k in ('build', 'kernel', 'nvme')} |
                      {'host': {k: manifest['host'][k] for k in ('hostname', 'qemu_sha256')}}, sort_keys=True)


def source_key(manifest):
    """run 동작 스크립트 해시. run끼리 다르면 summary가 [주의]만 표시."""
    return json.dumps(run_scripts(manifest['source']), sort_keys=True)


def validate(directory, require_done=True):
    d = Path(directory)
    errors, warnings = [], []
    m = None
    try:
        m = load(d / 'manifest.json')
        if require_done and not (d / 'done').is_file(): errors.append('done missing')
        if (d / 'sampler.failed').exists(): errors.append('sampler failed')
        if (d / 'sampler.exit').read_text().strip() != '0': errors.append('sampler nonzero')
        if 'check=OK' not in (d / 'device.txt').read_text(): errors.append('device check failed')
        if (d / 'pid_check.txt').read_text().strip() != 'invalid_pid_cmds=0': errors.append('PID check failed')
        event_text = (d / 'phase_events.txt').read_text()
        for ph, expected in (('load', m['N']), ('overwrite', m['expected_writes'])):
            if not re.search(rf'{ph}_proc_exit rc=0(?:\s|$)', event_text): errors.append(ph + ' exit missing/nonzero')
            check = (d / f'options_check_{ph}.txt').read_text()
            if not re.search(r'결과: 통과 \d+ / 불일치 0 / 누락 0', check): errors.append(ph + ' option check failed')
            stdout = (d / f'db_bench_{ph}.stdout').read_text()
            counts = re.findall(r'rocksdb.number.keys.written COUNT\s*:\s*(\d+)', stdout)
            if not counts or int(counts[-1]) != expected: errors.append(ph + ' completed application ops mismatch')
        # Fixed namespace test: L6 must be empty after waitforcompaction.
        levels = {int(a): int(b) for a, b in re.findall(r'^\s*(\d+)\s+(\d+)\s+\d+\s*$', (d / 'levelstats.txt').read_text(), re.M)}
        if 6 not in levels or levels[6] != 0: errors.append('L6 missing/nonempty')
        # Detect transient L6 outputs as well as the final levelstats.
        import gzip
        for ph in ('load', 'overwrite'):
            log = d / f'rocksdb_LOG_{ph}.gz'
            if not log.exists(): errors.append(ph + ' full LOG missing'); continue
            with gzip.open(log, 'rt', errors='replace') as f:
                if any(re.search(r'"output_level"\s*:\s*6\b', line) for line in f):
                    errors.append(ph + ' L6 compaction observed')
        with (d / 'counters.csv').open() as f:
            counters = list(csv.DictReader(f))
        with (d / 'usage.csv').open() as f:
            usage = list(csv.DictReader(f))
        interval = float(m['config']['SAMPLE_SEC'])
        gap_limit = interval * float(m['config'].get('MAX_SAMPLE_GAP_FACTOR', 3))
        for rows, columns, label in ((counters, ('host_bytes', 'media_bytes'), 'counter'),
                                     (usage, ('invalid_pid_cmds',), 'usage')):
            if len(rows) < 6: errors.append(label + ' insufficient samples'); continue
            max_gap = 0.0
            for prev, row in zip(rows, rows[1:]):
                gap = float(row['ts']) - float(prev['ts'])
                if gap < 0: errors.append(label + ' order invalid'); break
                max_gap = max(max_gap, gap)
                if any(int(row[k]) < int(prev[k]) for k in columns): errors.append(label + ' nonmonotonic'); break
            if max_gap > gap_limit:
                warnings.append(f'{label} 최대 샘플 간격 {max_gap:.0f}s > {gap_limit:.0f}s (누적 카운터라 WAF는 그대로, 경계 위치만 덜 정확)')
            for ph in ('load', 'overwrite'):
                start = re.search(rf'([0-9.]+) {ph}_exec_start\s', event_text)
                end = re.search(rf'([0-9.]+) {ph}_exec_end\s', event_text)
                segment = [r for r in rows if r['phase'] == ph]
                if not start or not end or len(segment) < 6: errors.append(label + ' phase boundary missing'); continue
                if abs(float(segment[0]['ts']) - float(start[1])) > gap_limit or abs(float(segment[-1]['ts']) - float(end[1])) > gap_limit:
                    warnings.append(label + ' phase 경계 근처 샘플 간격이 큼 (경계는 시각 보간)')
        if any(int(r['invalid_pid_cmds']) != 0 for r in usage): errors.append('invalid/unknown PID counter')
        if any(not 0 <= int(r['valid_bytes']) <= int(r['capacity_bytes']) for r in usage): errors.append('invalid usage')
        if usage:
            peak = max(int(r['valid_bytes']) / int(r['capacity_bytes']) for r in usage)
            # 실제 사용률은 기록·경고만 (run을 버리지 않음): 공간 식 외삽 오차가 클 수 있음
            tol = float(m['config'].get('UTIL_TOL', .03))
            if abs(peak - m['util']) > tol:
                warnings.append(f'actual peak utilization {peak*100:.1f}% vs target {m["util"]*100:.0f}% '
                                f'(outside ±{tol*100:g}%p; 해석 때 실제 사용률 기준으로 볼 것)')
        ow = [r for r in counters if r['phase'] == 'overwrite']
        if ow:
            h = int(ow[-1]['host_bytes']) - int(ow[0]['host_bytes'])
            media = int(ow[-1]['media_bytes']) - int(ow[0]['media_bytes'])
            if h <= 0 or media < h: errors.append('invalid host/media delta')
            if media == h: warnings.append('no GC writes measured; mechanism not established')
    except (OSError, ValueError, KeyError, TypeError, ZeroDivisionError) as e:
        errors.append(str(e))
    return {'schema': 1, 'status': 'VALID' if not errors else 'INVALID',
            'errors': list(dict.fromkeys(errors)), 'warnings': warnings}


def main():
    op, *args = sys.argv[1:]
    if op == 'build': build(*args)
    elif op == 'host': host(*args)
    elif op == 'guest': guest(*args)
    elif op == 'validate':
        result = validate(args[0], require_done=False)
        save(Path(args[0]) / 'validation.json', result)
        print(json.dumps(result, ensure_ascii=False))
        raise SystemExit(result['status'] != 'VALID')
    else: raise ValueError(op)


if __name__ == '__main__': main()
