#!/usr/bin/env python3
"""Analyze completed H0-B raw artifacts; never starts a VM or workload."""
import argparse
import csv
from datetime import datetime, timezone
import hashlib
import json
from collections import Counter
from pathlib import Path
from h0_v2_analyze import fields, stats

CASES = ('soft', 'rewrite25', 'rewrite100')
GIB_PAGES = 262144

def require(condition, message):
    if not condition:
        raise ValueError(message)

def analyze(run):
    guest = run / 'guest'
    order = (guest / 'snapshot-order.txt').read_text().splitlines()
    require(order == ['000_before','fill','pre_01','pre_02','pre_03','pre_04','intervention','post_01','post_02','post_03','post_04'], 'unexpected phase order')
    snapshots = [stats(guest / 'snapshots' / f'{p}.c0.bin') for p in order]
    boundaries, events, components = [], [], []
    pending = None
    for line in (run / 'femu.log').open(errors='replace'):
        if 'H0_COMPONENT ' in line:
            components.append(fields(line))
        elif 'H0_STATE ' in line:
            require(pending is None, 'GC crosses flush boundary')
            boundaries.append((fields(line), events))
            events = []
        elif 'H0_GC ' in line:
            require(pending is None, 'overlapping GC trace')
            pending = fields(line)
        elif 'GC_DONE ' in line:
            done = fields(line)
            require(pending is not None, 'unmatched GC_DONE')
            require(pending['victim_ru'] == done['victim_ru'], 'victim mismatch')
            require(int(pending['vpc']) == int(done['pages_migrated']), 'copied pages mismatch')
            require(sum(int(pending[k]) for k in ('A','B','C','unknown')) == int(pending['vpc']), 'composition mismatch')
            require(int(pending['unknown']) == 0, 'unknown composition')
            events.append(pending)
            pending = None
    require(pending is None and not events, 'GC after final snapshot')
    require(len(order) == len(boundaries) == len(components), 'boundary count mismatch')
    require(not boundaries[0][1], 'GC before initial snapshot')
    require(all(snapshots[0][k] == 0 for k in ('host_pages','gc_pages','nand_pages')), 'nonzero initial counters')
    rows = []
    for i, name in enumerate(order):
        state, gc = boundaries[i]
        require(int(state['host_pages']) == snapshots[i]['host_pages'], 'state counter mismatch')
        require(components[i]['host_pages'] == state['host_pages'], 'component counter mismatch')
        if not i:
            continue
        data = json.loads((guest / 'phases' / f'{name}.json').read_text())
        delta = {k: snapshots[i][k] - snapshots[i-1][k] for k in ('host_pages','gc_pages','nand_pages')}
        require(delta['host_pages'] == delta['nand_pages'] == data['writes'] == data['completed'], 'I/O counter mismatch')
        require(delta['gc_pages'] == sum(int(g['vpc']) for g in gc), 'trace/counter mismatch')
        require(all(snapshots[i-1]['host_pages'] <= int(g['host_pages']) <= snapshots[i]['host_pages'] for g in gc), 'GC outside phase')
        row = dict(phase=name, **delta, media_pages=delta['nand_pages']+delta['gc_pages'],
                   reads=data.get('reads',0), elapsed_ns=data['elapsed_ns'],
                   logical_hash=data.get('logical_hash'), pid_hash=data.get('pid_hash'),
                   p99_ns=data.get('p99_ns'), p999_ns=data.get('p999_ns'), iops=data.get('iops'),
                   gc_events=len(gc), gc_force=sum(g['kind']=='FORCE' for g in gc),
                   gc_exact_ipc_12_5=sum(int(g['ipc'])==2048 for g in gc),
                   gc_mean_invalid_percent=100*sum(int(g['ipc']) for g in gc)/(16384*len(gc)) if gc else None,
                   gc_min_free=min((int(g['free']) for g in gc),default=None),
                   gc_composition={k:sum(int(g[k]) for g in gc) for k in ('A','B','C')},
                   gc_victim_ruh=dict(Counter(g['victim_ruh'] for g in gc)))
        row['waf'] = row['media_pages']/row['host_pages'] if row['host_pages'] else None
        rows.append(row)
    by_phase={r['phase']:r for r in rows}
    manifest=json.loads((run/'manifest.json').read_text())
    gate=json.loads((run/'prestate-check.json').read_text())
    require(gate['accepted'], 'prestate rejected')
    require(json.loads((run/'exit-status.json').read_text()) == {'guest_rc':0,'qemu_rc':0}, 'run failed')
    for file,key in [('h0_single_gen.c','generator_source_sha256'),('h0_v2_guest.sh','guest_runner_sha256'),('h0_v2_run_vm.py','host_runner_sha256')]:
        require(hashlib.sha256((run/file).read_bytes()).hexdigest()==manifest[key], 'archived source hash mismatch')
    pre_index=order.index('pre_04')
    require(boundaries[pre_index][0] == gate['observed'], 'gate/raw state mismatch')
    intervention=by_phase['intervention']
    expected={'soft':0,'rewrite25':196608,'rewrite100':786432}[manifest['intervention']]
    require(intervention['host_pages']==intervention['reads']==expected, 'intervention size mismatch')
    post=[by_phase[f'post_{i:02}'] for i in range(1,5)]
    require(all(r['host_pages']==3145728 for r in post),'post volume mismatch')
    total={k:sum(r[k] for r in post) for k in ('host_pages','gc_pages','media_pages','elapsed_ns','gc_events','gc_force','gc_exact_ipc_12_5')}
    total['waf']=total['media_pages']/total['host_pages']
    total['iops']=total['host_pages']/(total['elapsed_ns']/1e9)
    total['gc_composition']={k:sum(r['gc_composition'][k] for r in post) for k in ('A','B','C')}
    total['gc_victim_ruh']=dict(sum((Counter(r['gc_victim_ruh']) for r in post),Counter()))
    total['gc_mean_invalid_percent']=sum(r['gc_mean_invalid_percent']*r['gc_events'] for r in post)/total['gc_events']
    total['gc_min_free']=min(r['gc_min_free'] for r in post)
    total['intervention_plus_post_media_pages']=intervention['media_pages']+total['media_pages']
    total['media_per_application_write']=total['intervention_plus_post_media_pages']/total['host_pages']
    start=snapshots[order.index('intervention')]['host_pages']
    post_events=[(int(g['host_pages'])-start,int(g['vpc'])) for i,(_,gc) in enumerate(boundaries) if order[i].startswith('post_') for g in gc]
    result=dict(run=str(run), validation='PASS', manifest=manifest, pre_state=boundaries[pre_index][0],
                pre_components=components[pre_index], phases=rows, post=total)
    return result, post_events

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root',type=Path,default=Path('exp/H0/v2/runs'))
    args=parser.parse_args()
    results,events={},{}
    for case in CASES:
        results[case],events[case]=analyze(args.root/f'h0b_g12_75_{case}_01')
    soft=results['soft']
    for case,result in results.items():
        require(result['pre_state']==soft['pre_state'], 'prestate mismatch between cases')
        require(result['pre_components']==soft['pre_components'], 'component mismatch between cases')
        for key in ('commit','geometry','pages','pre_chunks','post_chunks','rate','prep_qd','gc_background_percent','gc_forced_percent','qemu_sha256','generator_sha256','generator_source_sha256','guest_runner_sha256','host_runner_sha256','base_sha256'):
            require(result['manifest'][key]==soft['manifest'][key],f'environment mismatch: {key}')
        for row,ref in zip(result['phases'],soft['phases']):
            if row['phase']=='intervention':
                continue
            require(all(row[k]==ref[k] for k in ('host_pages','logical_hash','pid_hash')), 'request stream mismatch')
    comparisons={}
    for case in CASES[1:]:
        r=results[case]
        debt=r['phases'][5]['media_pages']-soft['phases'][5]['media_pages']
        points=[dict(post_GiB=0,net_extra_media_pages=debt)]
        net=debt
        for row,ref in zip(r['phases'][6:],soft['phases'][6:]):
            net+=row['media_pages']-ref['media_pages']
            points.append(dict(post_GiB=len(points)*12,net_extra_media_pages=net))
        # Compare cumulative GC programs at common post logical-host-page indices.
        # Application writes cancel; intervention programs form the initial debt.
        changes=Counter()
        for x,copies in events[case]: changes[x]+=copies
        for x,copies in events['soft']: changes[x]-=copies
        running=debt
        minimum=(debt,0)
        first=None
        for x in sorted(changes):
            running+=changes[x]
            if running<minimum[0]: minimum=(running,x)
            if running<=0 and first is None: first=x
        require(running==net, 'payback curve/final delta mismatch')
        benefit=soft['post']['media_pages']-r['post']['media_pages']
        comparisons[case]=dict(initial_debt_media_pages=debt,post_media_saved_pages=benefit,
             net_extra_media_pages=net,net_extra_percent=100*net/soft['post']['intervention_plus_post_media_pages'],
             debt_recovered_percent=100*benefit/debt,checkpoints=points,
             first_nonpositive_extra_at_post_pages=first,min_extra_media_pages=minimum[0],
             min_extra_at_post_pages=minimum[1],payback_observed=first is not None)
    output=dict(analyzed_utc=datetime.now(timezone.utc).isoformat(), analyzer_sha256=hashlib.sha256(Path(__file__).read_bytes()).hexdigest(), validation='PASS',counter_definition='media_pages = nand_pages + gc_pages; nand_pages excludes GC',
                phase_assignment='snapshot-order.txt paired with sequential H0_STATE flush boundaries',
                cases=results,comparisons=comparisons)
    destination=args.root/'h0b_analysis_01'
    destination.mkdir(exist_ok=True)
    (destination/'summary.json').write_text(json.dumps(output,indent=2)+'\n')
    with (destination/'phases.csv').open('w') as f:
        columns=['case']+[k for k in soft['phases'][0] if k not in ('gc_composition','gc_victim_ruh')]
        writer=csv.DictWriter(f,fieldnames=columns,extrasaction='ignore'); writer.writeheader()
        for case,result in results.items():
            for row in result['phases']: writer.writerow(dict(case=case,**row))
    print(json.dumps({c:dict(intervention=r['phases'][5],post=r['post']) for c,r in results.items()},indent=2))
    print(json.dumps(comparisons,indent=2))

if __name__=='__main__':
    main()
