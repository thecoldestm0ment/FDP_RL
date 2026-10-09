#!/usr/bin/env python3
"""Read-only audit and analysis of a frozen list of completed H1-A runs."""
import csv
from collections import Counter
from datetime import datetime,timezone
import hashlib,json,re,struct
from pathlib import Path

ROOT=Path(__file__).resolve().parents[4]
RESULTS=ROOT/'exp/H1/v1/runs'
OUT=ROOT/'exp/H1/v1/analysis/completed_audit_20260928'
FIELDS=('host','gc','nand')

def require(ok,message):
 if not ok:raise ValueError(message)
def fields(line):return dict(re.findall(r'(\w+)=([^\s]+)',line))
def counter(path):return dict(zip(FIELDS,struct.unpack_from('<QQQ',path.read_bytes(),8)))
def sha(path):return hashlib.sha256(path.read_bytes()).hexdigest()

def audit(run):
 manifest=json.loads((run/'manifest.json').read_text())
 phase=json.loads((run/'guest/phases/post.json').read_text())
 gate=json.loads((run/'prestate-check.json').read_text())
 require(json.loads((run/'exit-status.json').read_text())=={'guest_rc':0,'qemu_rc':0},'failed run')
 require(gate['accepted'],'prestate gate rejected')
 require(manifest['pages']==3145728 and manifest['rate']==11000 and manifest['prep_qd']==1,'geometry/rate/QD mismatch')
 require(manifest['mode']=='soft' and manifest['post_application_writes']==12582912,'not completed H1-A')
 for file,key in [('h1_timing_gen.c','generator_source_sha256'),('h0_single_gen.c','prep_generator_source_sha256'),('h1_guest.sh','guest_runner_sha256'),('h1_boundary.sh','boundary_runner_sha256'),('h1_run_vm.py','host_runner_sha256'),('h1_timing_gen','generator_sha256'),('h0_single_gen','prep_generator_sha256')]:
  require(sha(run/file)==manifest[key],f'archive hash mismatch: {file}')
 order=(run/'guest/snapshot-order.txt').read_text().splitlines()
 require(order==['000_before','fill','pre_01','pre_02','pre_03','pre_04','post'],'unexpected/draining post boundaries')
 snapshots=[counter(run/'guest/snapshots'/f'{tag}.c0.bin') for tag in order]
 states=[];components=[];events=[];windows=[];pending=None;all_done=0
 for line in (run/'femu.log').open(errors='replace'):
  if 'H0_STATE ' in line:
   require(pending is None,'GC crosses flush state boundary')
   states.append(fields(line));windows.append(events);events=[]
  elif 'H0_COMPONENT ' in line:components.append(fields(line))
  elif 'H0_GC ' in line:
   require(pending is None,'overlapping GC');pending=fields(line)
   require(sum(int(pending[k]) for k in ('A','B','C','unknown'))==int(pending['vpc']),'GC composition mismatch')
   require(int(pending['unknown'])==0,'unknown composition')
   require(int(pending['vpc'])+int(pending['ipc'])==16384,'RU page sum mismatch')
  elif 'GC_DONE ' in line:
   d=fields(line)
   require(pending is not None and d['victim_ru']==pending['victim_ru'],'GC pairing mismatch')
   require(int(d['pages_migrated'])==int(pending['vpc']),'GC_DONE/VPC mismatch')
   all_done+=int(d['pages_migrated']);events.append(pending);pending=None
 require(len(states)==len(components)==len(order),'trace/snapshot count mismatch')
 require(not events and pending is None,'extra GC after final snapshot')
 require(all_done==snapshots[-1]['gc'],'total GC delta mismatch')
 for i,(snap,state) in enumerate(zip(snapshots,states)):
  require(snap['host']==int(state['host_pages']),'state/vendor count mismatch')
  if not i:require(snap==dict.fromkeys(FIELDS,0),'nonzero start');continue
  h=snap['host']-snapshots[i-1]['host'];n=snap['nand']-snapshots[i-1]['nand'];g=snap['gc']-snapshots[i-1]['gc']
  p=json.loads((run/'guest/phases'/f'{order[i]}.json').read_text())
  require(h==n==p['writes']==p['completed'],'phase completion/counter mismatch')
  require(g==sum(int(x['vpc']) for x in windows[i]),'phase GC mismatch')
 require(states[-2]==gate['observed'],'gate/raw prestate mismatch')
 pre,post=snapshots[-2:];g=post['gc']-pre['gc'];h=post['host']-pre['host'];media=h+g
 require(h==12582912,'application volume mismatch')
 require(phase['paused_ns']==phase['rewrite_reads']==phase['rewrite_writes']==0,'unexpected H1-A intervention')
 ev=windows[-1]
 times=[];cum=0
 for e in ev:
  x=int(e['host_pages'])-pre['host'];require(0<=x<=h,'event outside post phase')
  cum+=int(e['vpc']);times.append((x,cum))
 row=dict(run=run.name,threshold=manifest['gc_background_percent'],seed=manifest['post_seed'],delay=manifest['delay_ru_equivalent'],
   validation='PASS',host_pages=h,gc_pages=g,media_pages=media,media_GiB=media/262144,gc_GiB=g/262144,waf=media/h,
   gc_count=len(ev),forced_gc=sum(e['kind']=='FORCE' for e in ev),
   mean_invalid_percent=100*sum(int(e['ipc']) for e in ev)/(16384*len(ev)),
   gc_min_free=min(int(e['free']) for e in ev),
   composition={k:sum(int(e[k]) for e in ev) for k in ('A','B','C')},
   victim_ruh=dict(Counter(e['victim_ruh'] for e in ev)),
   p99_ms=phase['p99_ns']/1e6,p999_ms=phase['p999_ns']/1e6,
   elapsed_s=phase['elapsed_ns']/1e9,iops=h*1e9/phase['elapsed_ns'],
   logical_hash=phase['logical_hash'],pid_hash=phase['pid_hash'],B=phase['B'],boundary_global=phase['boundary_global'],
   pre_state=states[-2],pre_components=components[-2],input_hashes={k:v for k,v in manifest.items() if k.endswith('_sha256')})
 return row,times

def main():
 status=json.loads((ROOT/'exp/H1/v1/_ops/h1_campaign_01_status.json').read_text())
 runs=[x['run'] for x in status['completed'] if x['stage']=='h1a']
 OUT.mkdir(exist_ok=True)
 (OUT/'campaign_status_at_audit.json').write_text(json.dumps(status,indent=2)+'\n')
 rows=[];curves={}
 for name in runs:
  row,series=audit(RESULTS/name);rows.append(row);curves[name]=series
 for row in rows:
  ref=next(x for x in rows if x['threshold']==row['threshold'] and x['seed']==row['seed'] and x['delay']=='0')
  for k in ('pre_state','pre_components','logical_hash','input_hashes','B'):
   require(row[k]==ref[k],f'cross-case mismatch {k}')
  row['extra_media_GiB']=(row['media_pages']-ref['media_pages'])/262144
  row['extra_media_percent']=100*(row['media_pages']-ref['media_pages'])/ref['media_pages']
 summary={'audit_utc':datetime.now(timezone.utc).isoformat(),'completed_runs_frozen':runs,'validation':'PASS','rows':rows,
          'limits':['single-seed exploration','request hashes are precomputed, not runtime submission hashes']}
 (OUT/'summary.json').write_text(json.dumps(summary,indent=2)+'\n')
 keys=[k for k in rows[0] if k not in ('pre_state','pre_components','input_hashes','composition','victim_ruh')]
 with (OUT/'results.csv').open('w') as f:
  w=csv.DictWriter(f,fieldnames=keys,extrasaction='ignore');w.writeheader();w.writerows(rows)
 with (OUT/'post_gc_cumulative.csv').open('w') as f:
  w=csv.writer(f);w.writerow(['run','post_application_pages','cumulative_gc_pages'])
  for name,points in curves.items():
   for x,y in points:w.writerow([name,x,y])
 for r in rows:print(json.dumps({k:r[k] for k in ('delay','waf','media_GiB','extra_media_GiB','extra_media_percent','gc_count','mean_invalid_percent','p99_ms','p999_ms')},ensure_ascii=False))
 print('AUDIT PASS',len(rows),'completed runs')

if __name__=='__main__':main()
