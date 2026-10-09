#!/usr/bin/env python3
"""Run the prespecified H1-A then H1-B campaign sequentially; no analysis."""
from __future__ import annotations
import hashlib
import json
from pathlib import Path
import re
import struct
import subprocess
import sys
from datetime import datetime, timezone

ROOT=Path(__file__).resolve().parents[4]
RESULTS=ROOT/'exp/H1/v1/runs'
OPS=ROOT/'exp/H1/v1/_ops'
RUNNER=ROOT/'exp/H1/v1/code/h1_run_vm.py'
STATUS=OPS/'h1_campaign_01_status.json'
SOURCES=[ROOT/('exp/H0/v2/code' if name.startswith('h0') else 'exp/H1/v1/code')/name for name in (
 'h1_timing_gen.c','h0_single_gen.c','h1_guest.sh','h1_boundary.sh',
 'h1_run_vm.py','h1_campaign.py')]+[ROOT/'build-femu/qemu-system-x86_64']
DELAYS=('0','1','4','16','64','128','never')
ANCHORS=('0','16','128','never')
B_ANCHORS=('0','16','128')

def digest(path):
 h=hashlib.sha256()
 with path.open('rb') as f:
  for data in iter(lambda:f.read(1024*1024),b''):h.update(data)
 return h.hexdigest()

def now():return datetime.now(timezone.utc).isoformat()

def counters(path):
 b=path.read_bytes()
 if len(b)<32:raise ValueError(f'short vendor log: {path}')
 return struct.unpack_from('<QQQ',b,8)

def names(stage,threshold,seed,mode,delay):
 return f'{stage}_g12_{threshold}_s{seed}_{mode}_d{delay}_01'

def jobs():
 # Exploration covers all seven delays in both GC configurations.
 for threshold in (90,75):
  for delay in DELAYS:
   yield ('h1a',threshold,42,'soft',delay)
 # Seed 42 anchor cases are already in the exploration; do not rerun them.
 for threshold in (90,75):
  for seed in (43,44):
   for delay in ANCHORS:
    yield ('h1a',threshold,seed,'soft',delay)
 # H1-B exploration fixes Rewrite25 volume and target permutation.
 for threshold in (90,75):
  for delay in DELAYS[:-1]:
   yield ('h1b',threshold,42,'rewrite25',delay)
  for delay in B_ANCHORS:
   yield ('h1b',threshold,42,'sham',delay)
 # Confirmation of the prespecified H1-B anchor timings.
 for threshold in (90,75):
  for seed in (43,44):
   for delay in B_ANCHORS:
    for mode in ('rewrite25','sham'):
     yield ('h1b',threshold,seed,mode,delay)

def parse_trace(result):
 trace=(result/'femu.log').read_text(errors='replace')
 return [dict(re.findall(r'(\w+)=([^\s]+)',line))
         for line in trace.splitlines() if 'H1_BMAP ' in line]

def validate(job,result):
 stage,threshold,seed,mode,delay=job
 exit_codes=json.loads((result/'exit-status.json').read_text())
 gate=json.loads((result/'prestate-check.json').read_text())
 assert exit_codes=={'guest_rc':0,'qemu_rc':0},exit_codes
 assert gate['accepted'] and gate['observed']['state']==gate['expected']['state']
 phase=json.loads((result/'guest/phases/post.json').read_text())
 expected_app=4*3145728
 expected_rewrite=196608 if mode=='rewrite25' else 0
 assert phase['writes']==phase['completed']==expected_app
 assert phase['rewrite_reads']==phase['rewrite_writes']==expected_rewrite
 order=(result/'guest/snapshot-order.txt').read_text().splitlines()
 if mode=='soft':
  assert order==['000_before','fill','pre_01','pre_02','pre_03','pre_04','post']
 else:
  assert order==['000_before','fill','pre_01','pre_02','pre_03','pre_04',
                 'intervention_pre','intervention_post','post']
 start=counters(result/'guest/snapshots/pre_04.c0.bin')
 end=counters(result/'guest/snapshots/post.c0.bin')
 assert start[0]==5*3145728
 assert end[0]-start[0]==expected_app+expected_rewrite
 assert end[2]-start[2]==end[0]-start[0]
 bmaps=parse_trace(result) if mode!='soft' else []
 diagnostic=None
 if mode!='soft':
  assert len(bmaps)==len(order),len(bmaps)
  before=bmaps[order.index('intervention_pre')]
  after=bmaps[order.index('intervention_post')]
  assert before['old_ruh']=='1' and before['new_ruh']=='2'
  for record in (before,after):
   assert sum(int(record[f'target_{k}']) for k in ('stale','correct','other','unmapped'))==expected_rewrite
   assert int(record['target_other'])==int(record['target_unmapped'])==0
   assert sum(int(record[f'all_{k}']) for k in ('stale','correct','other','unmapped'))==3145728//4
  assert before['target_hash']==after['target_hash']
  assert int(after['host_pages'])-int(before['host_pages'])==expected_rewrite
  assert phase['intervention_completed']==phase['intervention_submitted']
  assert phase['intervention_submitted']<expected_app
  diagnostic={'pre':before,'post':after,
              'useful_rewrite_fraction':int(before['target_stale'])/expected_rewrite}
  (result/'boundary-diagnostic.json').write_text(json.dumps(diagnostic,indent=2)+'\n')
 # Read-only validity checks; defer all comparison and effect-size analysis.
 gc_copied=0
 gc_events=0
 for line in (result/'femu.log').open(errors='replace'):
  if 'GC_DONE ' in line:
   match=re.search(r'pages_migrated=(\d+)',line)
   assert match is not None
   gc_copied+=int(match.group(1));gc_events+=1
 assert gc_copied==end[1],('GC trace/counter mismatch',gc_copied,end[1])
 return {'exit_status':exit_codes,'prestate_accepted':True,
         'application_writes':expected_app,'rewrite_writes':expected_rewrite,
         'counter_invariant':'PASS','trace_counter_invariant':'PASS',
         'boundary_stale_recorded':diagnostic is not None}

def main():
 RESULTS.mkdir(parents=True,exist_ok=True)
 plan=list(jobs())
 assert len(plan)==72,len(plan)
 assert len(set(plan))==72
 if STATUS.exists():raise SystemExit('status exists; refusing overwrite')
 for job in plan:
  if (RESULTS/names(*job)).exists():raise SystemExit(f'run path exists: {job}')
 expected={str(p):digest(p) for p in SOURCES}
 state={'status':'running','analysis':'deferred_by_user',
        'started_utc':now(),'planned_runs':len(plan),
        'h1a_runs':30,'h1b_runs':42,
        'plan':[dict(stage=j[0],threshold=j[1],seed=j[2],mode=j[3],
                     delay_ru_equivalent=j[4],result=names(*j)) for j in plan],
        'input_sha256':expected,'completed':[],'active':None}
 def save():STATUS.write_text(json.dumps(state,indent=2)+'\n')
 save()
 try:
  for job in plan:
   if any(digest(p)!=expected[str(p)] for p in SOURCES):
    raise RuntimeError('campaign input changed between cases')
   stage,threshold,seed,mode,delay=job
   result=RESULTS/names(*job)
   reference=ROOT/'exp/H0/v2/runs'/f'g12_{threshold}_oracle_serial_01' if stage=='h1a' else RESULTS/names('h1a',threshold,seed,'soft','0')
   assert reference.exists(),reference
   state['active']=dict(stage=stage,threshold=threshold,seed=seed,mode=mode,
                        delay_ru_equivalent=delay,result=str(result))
   save()
   cmd=[sys.executable,str(RUNNER),'--geometry','g12','--mode',mode,
        '--delay-ru',delay,'--seed',str(seed),'--gc-background',str(threshold),
        '--result-dir',str(result),'--prestate-reference',str(reference)]
   with (OPS/'h1_campaign_01_run.log').open('a') as out:
    out.write(f'{now()} START {result.name}\n');out.flush()
    subprocess.run(cmd,cwd=ROOT,stdout=out,stderr=subprocess.STDOUT,check=True)
   verdict=validate(job,result)
   state['completed'].append({'run':result.name,'stage':stage,**verdict})
   state['active']=None
   save()
   with (OPS/'h1_campaign_01_run.log').open('a') as out:
    out.write(f'{now()} PASS {result.name}\n')
  state['status']='complete';state['completed_utc']=now();save()
 except Exception as exc:
  state['status']='failed';state['error']=repr(exc);state['failed_utc']=now();save()
  raise

if __name__=='__main__':main()
