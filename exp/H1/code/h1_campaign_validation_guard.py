#!/usr/bin/env python3
"""Wait without polling; recover only the known completed-sham validation error.
The running VM, generator, and original campaign inputs are never modified.
"""
import json,os,select,subprocess,sys
from pathlib import Path
import h1_campaign as campaign
from h1_campaign_validate_fixed import validate

HERE=Path(__file__).resolve()
FIX=HERE.with_name('h1_campaign_validate_fixed.py')
GUARD_STATE=campaign.OPS/'h1_validation_guard_status.json'

def main():
 parent=int((campaign.OPS/'h1_campaign_01.pid').read_text())
 fixed_hashes={str(p):campaign.digest(p) for p in (HERE,FIX)}
 guard={'status':'waiting_for_original_campaign_exit','parent_pid':parent,
        'guard_pid':os.getpid(),'created_utc':campaign.now(),'patch_sha256':fixed_hashes,
        'scope':'sham fixed target cardinality/denominator only'}
 def save_guard():GUARD_STATE.write_text(json.dumps(guard,indent=2)+'\n')
 save_guard()
 fd=os.pidfd_open(parent)
 poll=select.poll();poll.register(fd,select.POLLIN);poll.poll();os.close(fd)
 state=json.loads(campaign.STATUS.read_text())
 if state['status']=='complete':
  guard['status']='not_needed_original_completed';save_guard();return
 active=state.get('active')
 if state['status']!='failed' or not active or active['stage']!='h1b' or active['mode']!='sham':
  guard['status']='stopped_on_unrelated_failure';save_guard();return
 for path,wanted in state['input_sha256'].items():
  if campaign.digest(Path(path))!=wanted:raise RuntimeError(f'original input changed: {path}')
 job=(active['stage'],active['threshold'],active['seed'],active['mode'],active['delay_ru_equivalent'])
 # If any real run/counter/state invariant fails, propagate the error and do not resume.
 verdict=validate(job,Path(active['result']))
 backup=campaign.OPS/'h1_campaign_01_before_validation_fix.json'
 if backup.exists():raise RuntimeError('validation recovery already attempted')
 backup.write_text(json.dumps(state,indent=2)+'\n')
 state.setdefault('validation_revisions',[]).append({'at_utc':campaign.now(),
   'reason':'sham target count and fraction denominator must be 196608, while rewrite count is zero',
   'patch_sha256':fixed_hashes,'validated_failed_run':Path(active['result']).name})
 state['completed'].append({'run':Path(active['result']).name,'stage':'h1b',**verdict})
 state['status']='running';state['active']=None
 state.pop('error',None);state.pop('failed_utc',None)
 def save():campaign.STATUS.write_text(json.dumps(state,indent=2)+'\n')
 save();(campaign.OPS/'h1_campaign_01.pid').write_text(str(os.getpid())+'\n')
 guard['status']='continuing_campaign';save_guard()
 done={x['run'] for x in state['completed']}
 try:
  for job in campaign.jobs():
   name=campaign.names(*job)
   if name in done:continue
   for path,wanted in {**state['input_sha256'],**fixed_hashes}.items():
    if campaign.digest(Path(path))!=wanted:raise RuntimeError(f'campaign input changed: {path}')
   stage,threshold,seed,mode,delay=job;result=campaign.RESULTS/name
   if result.exists():raise RuntimeError(f'preserved incomplete path exists: {result}')
   reference=campaign.ROOT/'exp/H0/v2/runs'/f'g12_{threshold}_oracle_serial_01' if stage=='h1a' else campaign.RESULTS/campaign.names('h1a',threshold,seed,'soft','0')
   state['active']=dict(stage=stage,threshold=threshold,seed=seed,mode=mode,
                        delay_ru_equivalent=delay,result=str(result));save()
   cmd=[sys.executable,str(campaign.RUNNER),'--geometry','g12','--mode',mode,
        '--delay-ru',delay,'--seed',str(seed),'--gc-background',str(threshold),
        '--result-dir',str(result),'--prestate-reference',str(reference)]
   with (campaign.OPS/'h1_campaign_01_run.log').open('a') as out:
    out.write(f'{campaign.now()} START {name} validator=fixed\n');out.flush()
    subprocess.run(cmd,cwd=campaign.ROOT,stdout=out,stderr=subprocess.STDOUT,check=True)
   verdict=validate(job,result)
   state['completed'].append({'run':name,'stage':stage,**verdict});state['active']=None;save()
  state['status']='complete';state['completed_utc']=campaign.now();save()
  guard['status']='complete';save_guard()
 except Exception as exc:
  state['status']='failed';state['error']=repr(exc);state['failed_utc']=campaign.now();save()
  guard['status']='failed';guard['error']=repr(exc);save_guard();raise

if __name__=='__main__':
 try:main()
 except Exception as exc:
  data=json.loads(GUARD_STATE.read_text()) if GUARD_STATE.exists() else {}
  data.update(status='failed',error=repr(exc));GUARD_STATE.write_text(json.dumps(data,indent=2)+'\n');raise
