import re,struct,sys,json
from pathlib import Path
F=re.compile(r"(\w+)=([^\s]+)")
run=Path(sys.argv[1]); per=int(sys.argv[2])  # chunks per 1x capacity
order=(run/"guest/snapshot-order.txt").read_text().split()
def c0(t):
    r=(run/f"guest/snapshots/{t}.c0.bin").read_bytes(); return [struct.unpack_from("<Q",r,o)[0] for o in (8,16,24)]
ruh={}; states=[]; gcu=[]; cur=[]
for line in open(run/"femu.log",errors="replace"):
    if "H0_RUH " in line:
        d=dict(F.findall(line)); ruh[(d["host_pages"],d["ruhid"])]=d
    elif "H0_GC " in line:
        d=dict(F.findall(line)); v,i=int(d["vpc"]),int(d["ipc"]); cur.append(v/(v+i))
    elif "H0_STATE " in line:
        states.append(dict(F.findall(line))["host_pages"]); gcu.append(cur); cur=[]
pre=[k for k,t in enumerate(order) if t.startswith("pre_")]
print("capX  WAF   util_mean  ruh0_inv ruh1_inv (RU)")
for j in range(per-1,len(pre),per):
    k=pre[j]; k0=pre[j-per+1]-1
    a,b=c0(order[k0]),c0(order[k])
    app=b[0]-a[0]; waf=(b[1]-a[1]+b[2]-a[2])/app
    u=[x for kk in range(k0+1,k+1) for x in gcu[kk]]
    hp=states[k]; i0=int(ruh[(hp,"0")]["ipc"])/32768; i1=int(ruh[(hp,"1")]["ipc"])/32768
    print(f"{(j+1)//per:>4}  {waf:5.2f}  {sum(u)/len(u):.3f}     {i0:5.1f}   {i1:5.1f}")
