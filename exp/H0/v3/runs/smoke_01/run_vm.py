#!/usr/bin/env python3
"""One fresh FEMU H0 v3 run; preserve raw artifacts and never analyze.

Geometry: 6 GiB exposed, 53 physical RU x 128 MiB (target OP 10%, actual
10.42%), 3 RUH all PI, greedy GC with BG 90% / FG 99% (ceil -> 1 RU) and
WARP lazy GC 5%. See GC_기준_메모.md.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import socket
import subprocess
import time

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
QEMU = ROOT / "build-femu/qemu-system-x86_64"
QEMU_IMG = ROOT / "build-femu/qemu-img"
BASE = ROOT / ".h0-vm/noble-prepared.qcow2"
ISO = ROOT / ".h0-vm/seed.iso"
KEY = ROOT / ".h0-vm/id_ed25519"
SOURCE = HERE / "generator.c"
SCRIPT = HERE / "guest.sh"
PORT = 18082

BLOCKS = 49152                 # 128 KiB units in 6 GiB
CAPACITY_4K = BLOCKS * 32      # 4 KiB writes per namespace capacity
NRU = 53
GEOMETRY = {
    "devsz_mb": 6144, "nru": NRU, "ru_mib": 128, "nruh": 3,
    "isolation": "PI (local fdp.isolation_mode=0)",
    "secsz": 512, "secs_per_pg": 8, "pgs_per_blk": 512, "blks_per_pl": NRU,
    "pls_per_lun": 1, "luns_per_ch": 8, "nchs": 8,
    "gc_thres_pcent": 90, "gc_thres_pcent_high": 99, "lazy_gc_pcent": 5,
    "gc_strategy": 0,
}


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for data in iter(lambda: f.read(1024 * 1024), b""):
            h.update(data)
    return h.hexdigest()


def ssh() -> list[str]:
    return ["ssh", "-p", str(PORT), "-i", str(KEY), "-o", "BatchMode=yes",
            "-o", "StrictHostKeyChecking=no", "-o", "UserKnownHostsFile=/dev/null",
            "-o", "ConnectTimeout=5", "femu@127.0.0.1"]


def scp() -> list[str]:
    return ["scp", "-P", str(PORT), "-i", str(KEY), "-o", "BatchMode=yes",
            "-o", "StrictHostKeyChecking=no", "-o", "UserKnownHostsFile=/dev/null"]


def run(cmd: list[str], **kwargs) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, check=True, **kwargs)


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--policy", choices=["smoke", "stale", "redirect", "rewrite"],
                   required=True)
    p.add_argument("--pre-writes", type=int, required=True,
                   help="4 KiB preconditioning writes in total")
    p.add_argument("--pre-chunks", type=int, default=8)
    p.add_argument("--post-writes", type=int, default=0)
    p.add_argument("--rate", type=int, default=0, help="IOPS cap; 0 = unthrottled")
    p.add_argument("--seed", type=int, default=42)
    p.add_argument("--result-dir", type=Path, required=True)
    a = p.parse_args()
    if a.pre_writes <= 0 or a.pre_chunks <= 0 or a.pre_writes % a.pre_chunks:
        p.error("pre-writes must be a positive multiple of pre-chunks")
    if a.rate < 0 or a.seed < 0 or a.post_writes < 0:
        p.error("invalid rate/seed/post-writes")
    if (a.policy == "smoke") != (a.post_writes == 0):
        p.error("smoke has no post phase; policy runs need --post-writes")
    result = a.result_dir.resolve()
    if result.exists():
        p.error(f"result directory exists: {result}")
    with socket.socket() as sock:
        if sock.connect_ex(("127.0.0.1", PORT)) == 0:
            p.error(f"TCP port {PORT} is in use")
    for path in (QEMU, QEMU_IMG, BASE, ISO, KEY, SOURCE, SCRIPT):
        if not path.exists():
            p.error(f"missing: {path}")
    result.mkdir(parents=True)
    binary = result / "generator"
    for src in (SOURCE, SCRIPT, Path(__file__)):
        shutil.copy2(src, result / src.name)
    with (result / "femu-source.patch").open("w") as patch_file:
        run(["git", "diff", "--binary", "--", "hw/femu"], cwd=ROOT, stdout=patch_file)
    run(["cc", "-O2", "-Wall", "-Wextra", "-Werror", "-static",
         str(SOURCE), "-luring", "-o", str(binary)])
    overlay = result / "guest-overlay.qcow2"
    with (result / "qemu-img.log").open("w") as log:
        run([str(QEMU_IMG), "create", "-f", "qcow2", "-F", "qcow2",
             "-b", str(BASE), str(overlay)], stdout=log)
    g = GEOMETRY
    manifest = {
        "commit": run(["git", "rev-parse", "HEAD"], cwd=ROOT,
                      capture_output=True, text=True).stdout.strip(),
        "study": "H0-v3", "policy": a.policy, "seed": a.seed,
        "geometry": g, "actual_op_percent": round((NRU * 128 / g["devsz_mb"] - 1) * 100, 2),
        "request_bytes": {"fill": 131072, "precondition": 4096,
                          "rewrite": 4096, "post": 4096},
        "qd": 32, "rate": a.rate,
        "fill_writes": BLOCKS, "pre_writes": a.pre_writes,
        "pre_capacity_multiple": a.pre_writes / CAPACITY_4K,
        "pre_chunks": a.pre_chunks, "post_writes": a.post_writes,
        "rewrite_writes": CAPACITY_4K // 3 if a.policy == "rewrite" else 0,
        "qemu_sha256": sha256(QEMU), "generator_sha256": sha256(binary),
        "generator_source_sha256": sha256(SOURCE),
        "guest_runner_sha256": sha256(SCRIPT),
        "host_runner_sha256": sha256(Path(__file__)),
        "base_sha256": sha256(BASE), "fresh_qemu": True, "fresh_overlay": True,
        "backend": "dram",
    }
    (result / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    qmp = result / "qmp.sock"
    command = [
        str(QEMU), "-name", f"h0v3-{a.policy}-s{a.seed}",
        "-accel", "kvm", "-cpu", "host", "-smp", "4", "-m", "2G",
        "-L", str(ROOT / "pc-bios"), "-device", "virtio-scsi-pci,id=scsi0",
        "-drive", f"file={overlay},if=none,format=qcow2,id=osdisk",
        "-device", "scsi-hd,drive=osdisk",
        "-netdev", f"user,id=net0,hostfwd=tcp:127.0.0.1:{PORT}-:22",
        "-device", "virtio-net-pci,netdev=net0", "-display", "none",
        "-serial", f"file:{result / 'serial.log'}", "-monitor", "none",
        "-qmp", f"unix:{qmp},server=on,wait=off",
        "-device", f"femu-subsys,id=femu-subsys-0,nqn=subsys0,fdp=on,"
                   f"fdp.nruh={g['nruh']},fdp.nrg=1,fdp.nru={g['nru']},fdp.isolation_mode=0",
        "-device", f"femu,id=nvme0,devsz_mb={g['devsz_mb']},namespaces=1,"
                   f"secsz={g['secsz']},secs_per_pg={g['secs_per_pg']},"
                   f"pgs_per_blk={g['pgs_per_blk']},blks_per_pl={g['blks_per_pl']},"
                   f"pls_per_lun={g['pls_per_lun']},luns_per_ch={g['luns_per_ch']},"
                   f"nchs={g['nchs']},pg_rd_lat=40000,pg_wr_lat=200000,"
                   f"blk_er_lat=2000000,ch_xfer_lat=0,"
                   f"gc_thres_pcent={g['gc_thres_pcent']},"
                   f"gc_thres_pcent_high={g['gc_thres_pcent_high']},"
                   f"lazy_gc_pcent={g['lazy_gc_pcent']},gc_strategy={g['gc_strategy']},"
                   f"buffer_size=0,femu_mode=1,subsys=femu-subsys-0",
        "-drive", f"file={ISO},format=raw,media=cdrom,readonly=on",
        "-boot", "order=c",
    ]
    (result / "vm-command.json").write_text(json.dumps(command, indent=2) + "\n")
    env = os.environ.copy()
    env["FEMU_FDP_DEBUG"] = "1"
    with (result / "qemu.stdout").open("w") as out, \
         (result / "femu.log").open("w") as err:
        vm = subprocess.Popen(command, cwd=ROOT, env=env, stdout=out, stderr=err)
        guest_rc = 1
        try:
            deadline = time.monotonic() + 240
            while time.monotonic() < deadline:
                if vm.poll() is not None:
                    raise RuntimeError(f"QEMU exited early: {vm.returncode}")
                probe = subprocess.run(ssh() + ["sudo -n true"],
                                       stdout=subprocess.DEVNULL,
                                       stderr=subprocess.DEVNULL)
                if probe.returncode == 0:
                    break
                time.sleep(2)
            else:
                raise RuntimeError("guest SSH did not become ready")
            run(ssh() + ["mkdir -p /tmp/h0-v3-input && rm -rf /tmp/h0-v3-output"])
            run(scp() + [str(binary), str(SCRIPT), "femu@127.0.0.1:/tmp/h0-v3-input/"])
            cmd = ["sudo", "bash", "/tmp/h0-v3-input/guest.sh", a.policy,
                   str(a.pre_writes), str(a.pre_chunks), str(a.post_writes),
                   str(a.rate), str(a.seed)]
            with (result / "guest-command.stdout").open("w") as gout, \
                 (result / "guest-command.stderr").open("w") as gerr:
                guest = subprocess.Popen(ssh() + cmd, stdout=gout, stderr=gerr)
                guest_rc = guest.wait(timeout=8 * 60 * 60)
            run(scp() + ["-r", "femu@127.0.0.1:/tmp/h0-v3-output",
                         str(result / "guest")])
        finally:
            subprocess.run(ssh() + ["sudo poweroff"],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            try:
                vm.wait(timeout=60)
            except subprocess.TimeoutExpired:
                vm.terminate()
                vm.wait(timeout=30)
            (result / "exit-status.json").write_text(json.dumps({
                "guest_rc": guest_rc, "qemu_rc": vm.returncode,
            }, indent=2) + "\n")
    if guest_rc:
        raise SystemExit(f"guest run failed: {guest_rc}")
    print(f"H0V3_RUN_PASS {result}")


if __name__ == "__main__":
    main()
