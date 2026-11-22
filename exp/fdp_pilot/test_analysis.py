#!/usr/bin/env python3
"""Regression checks for result admission and timestamp window semantics."""
import contextlib
import csv
import gzip
import io
import json
import os
import re
from pathlib import Path
import tempfile
import types
import unittest
from unittest.mock import patch

import pilot
import runcheck


def fixture(root, policy='single', waf=2, host='same-host', util=.70, build='same', suffix='', cfg_extra=None):
    d = root / f'{policy}_u{util:.2f}{suffix}'
    d.mkdir()
    # 실제 manifest처럼 모든 run config에 lan3 매핑 값이 들어 있음 (자기 정책 것만 의미 있음)
    cfg = {'SAMPLE_SEC':'30', 'MAX_SAMPLE_GAP_FACTOR':'3', 'UTIL_TOL':'.03', 'STABLE_TOL':'.05',
           'TORFS_PID_MAP_lan3':'0,0,1,2,0', 'TORFS_PID_MAP_lan5':'0,1,2,3,0'} | (cfg_extra or {})
    m = {'schema':1, 'N':10, 'expected_writes':20, 'policy':policy, 'util':util,
         'config':cfg, 'source':{'commit':'fixed'}, 'build':{'binary_sha256':build},
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

    def test_build_only_difference_is_reference_not_verdict(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            fixture(root,'single',2); fixture(root,'lan',2.5); fixture(root,'single4',2.2)
            fixture(root,'lan3',2.0,build='map')
            text=summarize(root)
            self.assertIn('사용률 0.70: WAF 감소율',text)
            self.assertIn('[빌드 다름: 판정·주 비교에서 뺌',text)
            self.assertIn('lan3_u0.70 (build(binary_sha256))',text)   # 빌드만 다른 예외는 PID 매핑 정책(lan3)뿐
            self.assertIn('열린RU +2 칸 비용 (WAF_single4/WAF_single − 1): +10.0',text)
            self.assertIn('[참고, 빌드 다름] lan3_u0.70',text)
            self.assertIn('lan3 개선율 (1 − WAF_lan3/WAF_lan): +20.0',text)
            self.assertIn('열린RU 수 동일(4) 배치 효과 (1 − WAF_lan3/WAF_single4): +9.0',text)
            self.assertNotIn('다른 run이 섞임',text)

    def test_lan5_reference_lines_include_lan3_vs_lan5(self):
        """lan3·lan5 둘 다 참고 run (매핑 바이너리) → lan5 줄과 lan3 vs lan5 줄이 참고 run끼리 계산됨."""
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            fixture(root,'single',2); fixture(root,'lan',2.5)
            fixture(root,'lan3',2.0,build='map'); fixture(root,'lan5',2.25,build='map')
            text=summarize(root)
            self.assertIn('사용률 0.70: WAF 감소율',text)
            self.assertIn('[참고, 빌드 다름] lan5_u0.70',text)
            self.assertIn('MANIFEST 칸 제거 효과 (1 − WAF_lan5/WAF_lan): +10.0',text)
            self.assertIn('WAL 칸 합침 효과 (1 − WAF_lan3/WAF_lan5): +11.1',text)
            self.assertIn('lan5 vs single WAF 감소율 (1 − WAF_lan5/WAF_single): -12.5',text)
            self.assertNotIn('다른 run이 섞임',text)

    def test_plain_policy_build_change_refused(self):
        """(a) single·lan 70% 빌드 A + 93% 빌드 B → 예전처럼 판정 보류 (93% 짝이 빠져 관문 통과로 가면 안 됨)."""
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            fixture(root,'single',2.0); fixture(root,'lan',1.6)
            fixture(root,'single',2.0,util=.93,build='B'); fixture(root,'lan',2.1,util=.93,build='B')
            text=summarize(root)
            self.assertIn('판정 보류: 컴퓨터·QEMU·빌드',text)
            self.assertIn('build(binary_sha256)',text)
            self.assertNotIn('관문 통과',text); self.assertNotIn('사용률 0.70: WAF 감소율',text)

    def test_rep_with_other_build_refused(self):
        """(b) 빌드가 다른 single_u0.93_r2가 섞이면 판정 보류."""
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            for u in (.70,.93): fixture(root,'single',2.0,util=u); fixture(root,'lan',1.6,util=u)
            fixture(root,'single',2.0,util=.93,build='B',suffix='_r2')
            text=summarize(root)
            self.assertIn('판정 보류: 컴퓨터·QEMU·빌드',text)
            self.assertIn('single_u0.93_r2',text)
            self.assertNotIn('이득 비율',text)

    def test_reference_lines_use_own_waf(self):
        """참고 run마다 자기 WAF로 계산 (기준 묶음의 같은 정책 값이 아니라)."""
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            fixture(root,'single',2.0); fixture(root,'lan',2.5); fixture(root,'lan3',2.4)
            fixture(root,'lan3',2.0,build='map',suffix='_r2'); fixture(root,'lan3',2.25,build='map',suffix='_r3')
            text=summarize(root)
            lan=float(re.search(r'^lan_u0\.70: .*WAF\(시간 뒤1/3\) ([\d.]+)',text,re.M).group(1))
            for run in ('lan3_u0.70_r2','lan3_u0.70_r3'):
                block=text[text.index(f'[참고, 빌드 다름] {run}'):]
                head=float(re.search(r'WAF 뒤1/3 ([\d.]+)',block).group(1))
                pct=float(re.search(r'lan3 개선율 \(1 − WAF_lan3/WAF_lan\): ([+-][\d.]+)%',block).group(1))
                self.assertAlmostEqual(pct,(1-head/lan)*100,places=1)
            self.assertIn('lan3 개선율 (1 − WAF_lan3/WAF_lan): +4.0',text)   # 기준 묶음 lan3 (2.4)

    def test_same_policy_with_different_table_refused(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            fixture(root,'single',2.0,cfg_extra={'NRUH_single':'2'}); fixture(root,'lan',1.6)
            fixture(root,'single',2.0,suffix='_r2',cfg_extra={'NRUH_single':'3'})
            text=summarize(root)
            self.assertIn('장치 표(NRUH·PHS·TORFS_PID_MAP)가 다른 run이 섞임',text)
            self.assertNotIn('사용률 0.70: WAF 감소율',text)

    def test_decision_thresholds_from_single_lan(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            fixture(root,'single',2.0); fixture(root,'lan',1.6)
            fixture(root,'lan3',1.7,cfg_extra={'MIN_GAIN_LOW':'.5'})   # 이름순 첫 run
            text=summarize(root)
            self.assertIn('70% 관문 통과',text)

    def test_build_and_host_difference_still_refused(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp); fixture(root); fixture(root,'lan',1.5); fixture(root,'lan3',1.4,host='other-host',build='map')
            text=summarize(root)
            self.assertIn('다른 run이 섞임',text)
            self.assertNotIn('사용률 0.70: WAF 감소율',text)

    def test_same_build_variants_in_main_comparison(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            for pol,w in (('single',2),('lan',2.5),('single4',2.2),('lan3',2.0)): fixture(root,pol,w)
            text=summarize(root)
            self.assertNotIn('빌드 다름',text)
            self.assertIn('  lan3 개선율 (1 − WAF_lan3/WAF_lan): +20.0',text)

    def test_policy_names_match_config_and_run_names(self):
        cfg=(Path(pilot.__file__).parent/'config.env').read_text()
        line=[l for l in cfg.splitlines() if l.startswith('POLICY_NAMES=')][0]
        self.assertEqual(tuple(line.split('"')[1].split()), pilot.POLICIES)
        for pol in pilot.POLICIES:
            self.assertEqual(pilot.RUN_RE.match(f'{pol}_u0.93').group(1), pol)
            self.assertIn(f'NRUH_{pol}', runcheck.KEYS)

    def test_variant_lines_formulas(self):
        waf={('single',.93):8.0,('single4',.93):8.8,('lan',.93):8.6,('lan3',.93):7.9}
        lines=pilot.variant_lines(waf,.93)
        self.assertIn('열린RU +2 칸 비용 (WAF_single4/WAF_single − 1): +10.00%',lines)
        self.assertIn('열린RU 수 동일(4) 배치 효과 (1 − WAF_lan3/WAF_single4): +10.23%',lines)
        self.assertIn('lan3 개선율 (1 − WAF_lan3/WAF_lan): +8.14%',lines)
        self.assertEqual(pilot.variant_lines(waf,.70),[])
        lines=pilot.variant_lines(waf|{('lan5',.93):8.2},.93,only='lan5')
        self.assertEqual(lines,['MANIFEST 칸 제거 효과 (1 − WAF_lan5/WAF_lan): +4.65%',
                                'WAL 칸 합침 효과 (1 − WAF_lan3/WAF_lan5): +3.66%',
                                'lan5 vs single WAF 감소율 (1 − WAF_lan5/WAF_single): -2.50%'])

    def devcheck(self, policy, pid_map, placement, nruh=4):
        envs={'NRUH_lan3':'4','PHS_lan3':'0:1:2','NRUH_single4':'4','PHS_single4':'0','EXPECT_RUHT':'II',
              'NRUH_lan5':'5','PHS_lan5':'0:1:2:3','RUH_METHOD':'femu','TORFS_PID_MAP_lan3':'0,0,1,2,0',
              f'TORFS_PID_MAP_{policy}':pid_map}
        with tempfile.TemporaryDirectory() as tmp, patch.dict(os.environ,envs), \
             patch.object(pilot,'read_ruh_types',return_value=[1]*nruh), \
             patch.object(pilot,'read_placement',return_value=placement), \
             patch.object(pilot,'read_femu_usage',return_value={'invalid_pid_cmds':0}), \
             contextlib.redirect_stdout(io.StringIO()):
            out=Path(tmp)/'device.txt'
            try: pilot.cmd_devcheck(types.SimpleNamespace(policy=policy,out=str(out))); rc=0
            except SystemExit as e: rc=e.code
            return rc, out.read_text()

    def test_devcheck_lan3_and_single4(self):
        rc,text=self.devcheck('lan3','0,0,1,2,0',[(0,0),(1,1),(2,2)])
        self.assertEqual(rc,0,text); self.assertIn('torfs_pid_map=0,0,1,2,0',text); self.assertIn('nruh=4',text)
        rc,text=self.devcheck('single4','',[(0,0)])
        self.assertEqual(rc,0,text)
        rc,text=self.devcheck('lan3','0,0,1,3,0',[(0,0),(1,1),(2,2)])
        self.assertEqual(rc,1); self.assertIn('TORFS_PID_MAP_lan3',text)
        rc,text=self.devcheck('lan3','0,0,1,2,0',[(0,0),(1,1),(2,3)])
        self.assertEqual(rc,1); self.assertIn('GC 전용 RUH 3',text)
        for bad,msg in (('0,0,1','숫자 5개'),('0,a,1,2,0','숫자 5개'),('0,0,1,1,0','안 쓰는 handle')):
            rc,text=self.devcheck('lan3',bad,[(0,0),(1,1),(2,2)])
            self.assertEqual(rc,1,bad); self.assertIn(msg,text)

    def test_devcheck_lan5(self):
        rc,text=self.devcheck('lan5','0,1,2,3,0',[(0,0),(1,1),(2,2),(3,3)],nruh=5)
        self.assertEqual(rc,0,text); self.assertIn('torfs_pid_map=0,1,2,3,0',text); self.assertIn('nruh=5',text)
        rc,text=self.devcheck('lan5','0,1,2,4,0',[(0,0),(1,1),(2,2),(3,3)],nruh=5)
        self.assertEqual(rc,1); self.assertIn('TORFS_PID_MAP_lan5',text)
        rc,text=self.devcheck('lan5','0,0,1,2,0',[(0,0),(1,1),(2,2),(3,3)],nruh=5)
        self.assertEqual(rc,1); self.assertIn('안 쓰는 handle',text)

    def test_no_current_config_fallback_for_old_gc(self):
        with tempfile.TemporaryDirectory() as tmp, patch.dict(os.environ,{'FEMU_BLKS_PER_PL':'211','FEMU_GC_THRES':'90'}):
            self.assertIsNone(pilot.run_gc_units(tmp,'single_u0.70'))

    def test_freshcheck_rejects_existing_data(self):
        with patch.object(pilot,'read_counters',return_value=(1,1)), patch.object(pilot,'read_femu_usage',return_value={'valid_bytes':0,'invalid_pid_cmds':0}), contextlib.redirect_stdout(io.StringIO()):
            with self.assertRaises(SystemExit): pilot.cmd_freshcheck(None)


if __name__=='__main__': unittest.main()
