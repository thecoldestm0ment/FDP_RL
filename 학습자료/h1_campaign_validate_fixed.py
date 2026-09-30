#!/usr/bin/env python3
"""Validation-only correction: fixed target cardinality is not rewrite I/O count."""
import json,re
from h1_campaign import counters,parse_trace

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
   assert sum(int(record[f'target_{k}']) for k in ('stale','correct','other','unmapped'))==196608
   assert int(record['target_other'])==int(record['target_unmapped'])==0
   assert sum(int(record[f'all_{k}']) for k in ('stale','correct','other','unmapped'))==3145728//4
  assert before['target_hash']==after['target_hash']
  assert int(after['host_pages'])-int(before['host_pages'])==expected_rewrite
  assert phase['intervention_completed']==phase['intervention_submitted']
  assert phase['intervention_submitted']<expected_app
  diagnostic={'pre':before,'post':after,
              'useful_rewrite_fraction':int(before['target_stale'])/196608,
              'rewrite_performed':mode=='rewrite25'}
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

