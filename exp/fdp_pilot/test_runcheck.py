#!/usr/bin/env python3
"""Failed measurements must never appear as completed experiments; no VM."""
import csv
import gzip
import json
from pathlib import Path
import tempfile
import unittest
import runcheck

class ValidationTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(); self.addCleanup(self.tmp.cleanup)
        self.d = Path(self.tmp.name)
        self.m = {'schema': 1, 'policy': 'single', 'util': .70, 'N': 100, 'expected_writes': 200,
                  'config': {'SAMPLE_SEC': '30', 'UTIL_TOL': '.03'}, 'source': {}, 'build': {},
                  'kernel': 'test', 'nvme': 'test',
                  'host': {'hostname': 'lab', 'qemu_sha256': 'qemu', 'run_id': 'first'}}
        self.manifest()
        for name, value in {'done':'1', 'sampler.exit':'0', 'device.txt':'check=OK',
                'pid_check.txt':'invalid_pid_cmds=0', 'levelstats.txt':'  5 10 100\n  6 0 0\n',
                'phase_events.txt':'0.000 load_exec_start\n300.000 load_exec_end\n301.000 load_proc_exit rc=0\n330.000 overwrite_exec_start\n630.000 overwrite_exec_end\n631.000 overwrite_proc_exit rc=0\n'}.items():
            (self.d/name).write_text(value)
        counter, usage = [], []
        for ph, start in (('load', 0), ('overwrite', 330)):
            for i in range(11):
                t = start + i*30
                counter.append(dict(ts=t, phase=ph, host_bytes=t*100, media_bytes=t*150))
                usage.append(dict(ts=t, phase=ph, valid_bytes=700, capacity_bytes=1000, invalid_pid_cmds=0))
        self.csv('counters.csv', counter); self.csv('usage.csv', usage)
        for ph, n in (('load',100), ('overwrite',200)):
            (self.d/f'options_check_{ph}.txt').write_text('결과: 통과 28 / 불일치 0 / 누락 0\n')
            (self.d/f'db_bench_{ph}.stdout').write_text(f'rocksdb.number.keys.written COUNT : {n}\n')
            with gzip.open(self.d/f'rocksdb_LOG_{ph}.gz', 'wt') as f: f.write('{"output_level":5}\n')

    def manifest(self): (self.d/'manifest.json').write_text(json.dumps(self.m))
    def csv(self, name, rows):
        with (self.d/name).open('w') as f:
            w=csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
    def rows(self, name):
        with (self.d/name).open() as f: return list(csv.DictReader(f))
    def invalid(self, match):
        v=runcheck.validate(self.d); self.assertEqual(v['status'],'INVALID',v)
        self.assertTrue(any(match in e for e in v['errors']),v)
    def test_valid(self): self.assertEqual(runcheck.validate(self.d)['status'],'VALID')
    def test_done(self):
        (self.d/'done').unlink(); self.invalid('done')
        self.assertEqual(runcheck.validate(self.d,require_done=False)['status'],'VALID')
    def test_sampler(self): (self.d/'sampler.exit').write_text('7'); self.invalid('sampler')
    def test_usage_missing(self): (self.d/'usage.csv').unlink(); self.invalid('usage.csv')
    def test_ops(self):
        (self.d/'db_bench_overwrite.stdout').write_text('rocksdb.number.keys.written COUNT : 199\n')
        self.invalid('completed application ops')
    def test_gap(self):
        # 샘플 간격이 벌어져도 누적 카운터라 run은 유지, 경고만
        r=self.rows('counters.csv'); self.csv('counters.csv',r[:2]+r[7:])
        out=runcheck.validate(self.d)
        self.assertEqual(out['status'],'VALID')
        self.assertTrue(any('샘플 간격' in w for w in out['warnings']))
    def test_order(self):
        r=self.rows('counters.csv'); r[3],r[4]=r[4],r[3]; self.csv('counters.csv',r); self.invalid('order')
    def test_counter_reset(self):
        r=self.rows('counters.csv'); r[15]['host_bytes']='1'; self.csv('counters.csv',r); self.invalid('nonmonotonic')
    def test_l6(self):
        with gzip.open(self.d/'rocksdb_LOG_overwrite.gz','wt') as f: f.write('{"output_level":6}\n')
        self.invalid('L6 compaction')
    def test_util(self):
        self.m['util']=.93; self.manifest()
        r=runcheck.validate(self.d)
        self.assertEqual(r['status'],'VALID')
        self.assertTrue(any('utilization' in w for w in r['warnings']))
    def test_pid_unknown(self):
        r=self.rows('usage.csv'); r[-1]['invalid_pid_cmds']='-1'; self.csv('usage.csv',r); self.invalid('PID')
    def test_comparison_ignores_judge_keys_and_scripts(self):
        before=runcheck.comparison_key(self.m)
        self.m['config']['UTIL_TOL']='.05'; self.m['source']={'commit':'x','scripts':{'pilot.py':'other'}}
        self.assertEqual(before,runcheck.comparison_key(self.m))
        self.m['config']['SAMPLE_SEC']='10'
        self.assertNotEqual(before,runcheck.comparison_key(self.m))
    def test_host_comparison(self):
        before=runcheck.comparison_key(self.m); self.m['host']['run_id']='second'
        self.assertEqual(before,runcheck.comparison_key(self.m));self.m['host']['hostname']='other'
        self.assertNotEqual(before,runcheck.comparison_key(self.m))

if __name__=='__main__': unittest.main()
