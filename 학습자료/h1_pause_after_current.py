#!/usr/bin/env python3
"""Let the active VM runner finish, validate its archive, then mark H1 paused."""
import json,os,select,signal
from pathlib import Path
import h1_campaign as campaign
from h1_campaign_validate_fixed import validate

REQUEST=campaign.RESULTS/'pause_after_current_request.json'
STATE=campaign.RESULTS/'pause_after_current_status.json'

def write(path,data):
 tmp=path.with_suffix(path.suffix+'.tmp')
 tmp.write_text(json.dumps(data,indent=2)+'\n');tmp.replace(path)

def main():
 request=json.loads(REQUEST.read_text())
 parent=request['campaign_pid'];runner=request['runner_pid'];active=request['active']
 state={'status':'waiting_for_current_run','started_utc':campaign.now(),
        'finalizer_pid':os.getpid(),'run':active['result']}
 write(STATE,state)
 try:
  try:fd=os.pidfd_open(runner)
  except ProcessLookupError:fd=None
  if fd is not None:
   poll=select.poll();poll.register(fd,select.POLLIN);poll.poll();os.close(fd)
  result=Path(active['result'])
  job=(active['stage'],active['threshold'],active['seed'],active['mode'],active['delay_ru_equivalent'])
  verdict=validate(job,result)
  for name in ('femu.log','serial.log','manifest.json','vm-command.json','prestate-check.json','exit-status.json','guest/guest.log','guest/phases/post.json','guest/snapshots/post.c0.bin'):
   if not (result/name).is_file():raise RuntimeError(f'missing archive: {name}')
  manifest=json.loads((result/'manifest.json').read_text())
  backend=manifest.get('backend_path')
  if backend and Path(backend).exists():raise RuntimeError('runner did not remove its backend')
  status=json.loads(campaign.STATUS.read_text())
  if status['active']!=active:raise RuntimeError('active run changed despite boundary stop')
  if result.name not in {x['run'] for x in status['completed']}:
   status['completed'].append({'run':result.name,'stage':active['stage'],**verdict})
  status['status']='paused';status['active']=None
  status['paused_utc']=campaign.now();status['pause_reason']='user requested pause after active run archive and validation'
  status['last_completed_run']=result.name
  status.pop('pause_after_current_requested',None)
  write(campaign.STATUS,status)
  with (campaign.RESULTS/'h1_campaign_01_run.log').open('a') as log:
   log.write(f'{campaign.now()} PASS {result.name} pause_finalizer\n')
   log.write(f'{campaign.now()} PAUSED_BY_USER completed={len(status["completed"])}\n')
  state.update(status='paused',completed_runs=len(status['completed']),
               completed_utc=campaign.now(),validation=verdict)
  write(STATE,state)
 except Exception as exc:
  state.update(status='failed_stopped',error=repr(exc),failed_utc=campaign.now());write(STATE,state)
  status=json.loads(campaign.STATUS.read_text())
  status.update(status='failed',error=repr(exc),pause_requested=True,failed_utc=campaign.now())
  write(campaign.STATUS,status)
  raise
 finally:
  # Only the stopped orchestration process; the VM runner has already exited.
  proc=Path(f'/proc/{parent}/cmdline')
  if proc.exists() and b'h1_campaign.py' in proc.read_bytes():
   os.kill(parent,signal.SIGTERM);os.kill(parent,signal.SIGCONT)

if __name__=='__main__':main()
