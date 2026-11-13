#!/usr/bin/env python3
"""Regression checks for result admission and timestamp window semantics."""
import contextlib
import csv
import gzip
import io
import json
import os
from pathlib import Path
import tempfile
import types
import unittest
from unittest.mock import patch

import pilot
import runcheck


def fixture(root, policy='single', waf=2, host='same-host', util=.70):
    d = root / f'{policy}_u{util:.2f}'
    d.mkdir()
    cfg = {'SAMPLE_SEC':'30', 'MAX_SAMPLE_GAP_FACTOR':'3', 'UTIL_TOL':'.03', 'STABLE_TOL':'.05'}
    m = {'schema':1, 'N':10, 'expected_writes':20, 'policy':policy, 'util':util,
         'config':cfg, 'source':{'commit':'fixed'}, 'build':{'binary_sha256':'same'},
         'kernel':'same', 'nvme':'same', 'host':{'hostname':host, 'qemu_sha256':'same'}}
    (d/'manifest.json').write_text(json.dumps(m))
    for name, data in {'done':'1', 'sampler.exit':'0', 'device.txt':'check=OK',
                       'pid_check.txt':'invalid_pid_cmds=0', 'levelstats.txt':'6 0 0\n'}.items():
        (d/name).write_text(data)
    events=[]
    for ph,start,count in [('load',0,10), ('overwrite',200,20)]:
        events += [f'{start} {ph}_exec_start', f'{start+120} {ph}_exec_end', f'{start+121} {ph}_proc_exit rc=0']
        (d/f'options_check_{ph}.txt').write_text('결과: 통과 28 / 불일치 0 / 누락 0')
        (d/f'db_bench_{ph}.stdout').write_text(f'rocksdb.number.keys.written COUNT : {count}\n')
        with gzip.open(d/f'rocksdb_LOG_{ph}.gz', 'wt') as f: f.write('LOG\n')
    (d/'phase_events.txt').write_text('\n'.join(events)+'\n')
    with (d/'counters.csv').open('w') as f:
        w=csv.writer(f); w.writerow(['ts','phase','host_bytes','media_bytes'])
        for ph,start in [('load',0), ('overwrite',200)]:
            for i in range(7):
                t=start+i*20
                w.writerow([t, ph, t+2, int((t+2)*waf)])
    with (d/'usage.csv').open('w') as f:
        w=csv.writer(f); w.writerow(['ts','phase','valid_bytes','capacity_bytes','invalid_pid_cmds'])
        for ph,start in [('load',0), ('overwrite',200)]:
            for i in range(7): w.writerow([start+i*20, ph,round(util*100),100,0])
    return d


def summarize(path):
    buf=io.StringIO()
    with contextlib.redirect_stdout(buf):
        pilot.cmd_summary(types.SimpleNamespace(results=str(path)))
    return buf.getvalue()


class AnalysisRegression(unittest.TestCase):
    def test_irregular_sampling_uses_time_not_sample_index(self):
        rows=[{'ts':t,'phase':'overwrite','host_bytes':t,'media_bytes':2*t}
              for t in [0,1,2,3,90,100]]
        h,m=pilot.phase_delta(rows,'overwrite',1/3)
        self.assertAlmostEqual(h,100/3)
        self.assertAlmostEqual(m,200/3)
        self.assertIsNone(pilot.interpolate([(1,2),(2,4)],0))

    def test_boundaries_interpolated_from_adjacent_phases(self):
        rows=[{'ts':t,'phase':'overwrite' if 1<=t<=7 else 'wait',
               'host_bytes':10*t,'media_bytes':20*t} for t in range(10)]
        self.assertEqual(pilot.phase_slice(rows,'overwrite',0,1,(.5,7.5)),(70,140))

    def test_manifestless_and_incomplete_never_make_gain(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp); a=fixture(root); fixture(root,'lan',1.5)
            (a/'done').unlink()
            text=summarize(root)
            self.assertIn('[INVALID;',text)
            self.assertNotIn('사용률 0.70: WAF 감소율',text)
            (a/'manifest.json').unlink()
            self.assertNotIn('사용률 0.70: WAF 감소율',summarize(root))

    def test_sampler_failed_never_makes_gain(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp); a=fixture(root); fixture(root,'lan',1.5)
            (a/'sampler.failed').write_text('7')
            text=summarize(root)
            self.assertIn('sampler failed',text)
            self.assertNotIn('사용률 0.70: WAF 감소율',text)

    def test_valid_waf_expression_not_total_media_claim(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp); a=fixture(root); fixture(root,'lan',1.5)
            self.assertEqual(runcheck.validate(a)['status'],'VALID')
            text=summarize(root)
            self.assertIn('WAF 감소율 +25.00%',text)
            self.assertNotIn('Media를',text)
            self.assertIn('70% 관문 통과',text)

    def test_unequal_host_bytes_keep_waf_and_total_separate(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp); fixture(root); b=fixture(root,'lan',1.5)
            with (b/'counters.csv').open() as f:
                rows=list(csv.DictReader(f))
            for row in rows:
                for key in ('host_bytes','media_bytes'): row[key]=int(row[key])*2
            with (b/'counters.csv').open('w') as f:
                w=csv.DictWriter(f,fieldnames=rows[0]);w.writeheader();w.writerows(rows)
            text=summarize(root)
            self.assertIn('WAF 감소율 +25.00%',text)
            self.assertNotIn('Media를',text)

    def test_gc_fallback_uses_run_manifest_not_current_settings(self):
        with tempfile.TemporaryDirectory() as tmp, patch.dict(os.environ,{'FEMU_GC_THRES':'90','FEMU_GC_THRES_HIGH':'99'}):
            root=Path(tmp); d=fixture(root)
            manifest=json.loads((d/'manifest.json').read_text())
            manifest['config'].update(FEMU_BLKS_PER_PL='211',FEMU_GC_THRES='75',FEMU_GC_THRES_HIGH='95')
            (d/'manifest.json').write_text(json.dumps(manifest))
            self.assertEqual(pilot.run_gc_units(tmp,d.name),(211,52,10,'run manifest'))

    def test_unstable_is_flagged_but_kept(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp); fixture(root); b=fixture(root,'lan',1.5)
            rows=list(csv.DictReader((b/'counters.csv').open()))
            for row in rows:
                t=int(row['ts']); row['media_bytes']=int(float(row['media_bytes']))+(3*(t-280) if t>280 else 0)
            with (b/'counters.csv').open('w') as f:
                w=csv.DictWriter(f,fieldnames=rows[0]);w.writeheader();w.writerows(rows)
            text=summarize(root)
            self.assertIn('아직 변하는 중',text)
            self.assertIn('사용률 0.70: WAF 감소율',text)
            self.assertIn('아직 변하는 run 포함',text)

    def test_mixed_hosts_refuse_combined_conclusion(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp); fixture(root); fixture(root,'lan',1.5,host='other-host')
            text=summarize(root)
            self.assertIn('다른 run이 섞임',text)
            self.assertNotIn('사용률 0.70: WAF 감소율',text)

    def test_no_current_config_fallback_for_old_gc(self):
        with tempfile.TemporaryDirectory() as tmp, patch.dict(os.environ,{'FEMU_BLKS_PER_PL':'211','FEMU_GC_THRES':'90'}):
            self.assertIsNone(pilot.run_gc_units(tmp,'single_u0.70'))

    def test_freshcheck_rejects_existing_data(self):
        with patch.object(pilot,'read_counters',return_value=(1,1)), patch.object(pilot,'read_femu_usage',return_value={'valid_bytes':0,'invalid_pid_cmds':0}), contextlib.redirect_stdout(io.StringIO()):
            with self.assertRaises(SystemExit): pilot.cmd_freshcheck(None)


if __name__=='__main__': unittest.main()
