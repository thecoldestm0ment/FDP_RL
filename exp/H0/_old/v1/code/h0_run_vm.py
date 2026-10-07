#!/usr/bin/env python3
"""Run one H0 workload config in a fresh FEMU process and guest overlay."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import socket
import subprocess
import sys
import time


REPO = Path(__file__).resolve().parents[5]
QEMU = REPO / "build-femu/qemu-system-x86_64"
QEMU_IMG = REPO / "build-femu/qemu-img"
BASE_IMAGE = REPO / ".h0-vm/noble-prepared.qcow2"
SSH_KEY = REPO / ".h0-vm/id_ed25519"
SEED_ISO = REPO / ".h0-vm/seed.iso"
GENERATOR = REPO / "exp/H0/_old/v1/code/fdp_workload.py"
GUEST_RUNNER = REPO / "exp/H0/_old/v1/code/h0_guest_run.sh"
PORT = 18080


def run(args: list[str], **kwargs) -> subprocess.CompletedProcess:
    return subprocess.run(args, check=True, text=True, **kwargs)


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def ssh_base() -> list[str]:
    return [
        "ssh", "-p", str(PORT), "-i", str(SSH_KEY),
        "-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=no",
        "-o", "UserKnownHostsFile=/dev/null", "-o", "ConnectTimeout=5",
        "femu@127.0.0.1",
    ]


def scp_base() -> list[str]:
    return [
        "scp", "-P", str(PORT), "-i", str(SSH_KEY),
        "-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=no",
        "-o", "UserKnownHostsFile=/dev/null",
    ]


def wait_for_guest(timeout: int = 180) -> None:
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        probe = subprocess.run(
            ssh_base() + ["sudo -n true"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        if probe.returncode == 0:
            return
        time.sleep(2)
    raise RuntimeError("guest SSH or passwordless sudo did not become ready")


def port_is_open() -> bool:
    with socket.socket() as sock:
        sock.settimeout(0.3)
        return sock.connect_ex(("127.0.0.1", PORT)) == 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", required=True, type=Path)
    parser.add_argument("--result-dir", required=True, type=Path)
    args = parser.parse_args()

    config = args.config.resolve()
    result = args.result_dir.resolve()
    if result.exists():
        raise SystemExit(f"result directory already exists: {result}")
    if port_is_open():
        raise SystemExit(f"TCP port {PORT} is already in use")
    for path in (QEMU, QEMU_IMG, BASE_IMAGE, SSH_KEY, SEED_ISO,
                 GENERATOR, GUEST_RUNNER, config):
        if not path.exists():
            raise SystemExit(f"missing required path: {path}")

    result.mkdir(parents=True)
    generated = result / "input"
    overlay = result / "guest-overlay.qcow2"
    shutil.copy2(config, result / "workload-config.json")
    shutil.copy2(GUEST_RUNNER, result / "h0_guest_run.sh")
    run([
        sys.executable, str(GENERATOR), "--config", str(config),
        "--output-dir", str(generated),
    ], stdout=(result / "rendered-plan.stdout").open("w"))
    shutil.copy2(GUEST_RUNNER, generated / "h0_guest_run.sh")
    run([
        str(QEMU_IMG), "create", "-f", "qcow2", "-F", "qcow2",
        "-b", str(BASE_IMAGE), str(overlay),
    ], stdout=(result / "qemu-img.log").open("w"))

    commit = run(["git", "rev-parse", "HEAD"], cwd=REPO,
                 capture_output=True).stdout.strip()
    manifest = {
        "commit": commit,
        "config": str(config),
        "config_sha256": sha256(config),
        "qemu_sha256": sha256(QEMU),
        "base_image": str(BASE_IMAGE),
        "base_image_sha256": sha256(BASE_IMAGE),
        "seed": json.loads(config.read_text())["seed"],
        "fresh_femu_process": True,
        "fresh_guest_overlay": True,
        "fdp_debug_trace": True,
    }
    (result / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")

    serial = result / "serial.log"
    qmp = result / "qmp.sock"
    cmd = [
        str(QEMU), "-name", f"h0-{json.loads(config.read_text()).get('case', 'run')}",
        "-accel", "kvm", "-cpu", "host", "-smp", "4", "-m", "4G",
        "-L", str(REPO / "pc-bios"),
        "-device", "virtio-scsi-pci,id=scsi0",
        "-drive", f"file={overlay},if=none,format=qcow2,id=osdisk",
        "-device", "scsi-hd,drive=osdisk",
        "-netdev", f"user,id=net0,hostfwd=tcp:127.0.0.1:{PORT}-:22",
        "-device", "virtio-net-pci,netdev=net0",
        "-display", "none", "-serial", f"file:{serial}", "-monitor", "none",
        "-qmp", f"unix:{qmp},server=on,wait=off",
        "-device", "femu-subsys,id=femu-subsys-0,nqn=subsys0,fdp=on,fdp.nruh=4,fdp.nrg=1,fdp.nru=64,fdp.isolation_mode=0",
        "-device", "femu,id=nvme0,devsz_mb=3072,namespaces=1,secsz=512,secs_per_pg=8,pgs_per_blk=256,blks_per_pl=64,pls_per_lun=1,luns_per_ch=8,nchs=8,pg_rd_lat=40000,pg_wr_lat=200000,blk_er_lat=2000000,ch_xfer_lat=0,gc_thres_pcent=75,gc_thres_pcent_high=95,gc_strategy=0,buffer_size=0,femu_mode=1,subsys=femu-subsys-0",
        "-drive", f"file={SEED_ISO},format=raw,media=cdrom,readonly=on",
        "-boot", "order=c",
    ]
    (result / "vm-command.json").write_text(json.dumps(cmd, indent=2) + "\n")
    env = os.environ.copy()
    env["FEMU_FDP_DEBUG"] = "1"
    qemu_stdout = (result / "qemu.stdout").open("w")
    qemu_stderr = (result / "femu.log").open("w")
    qemu = subprocess.Popen(cmd, cwd=REPO, env=env,
                            stdout=qemu_stdout, stderr=qemu_stderr)
    workload_rc = 1
    try:
        wait_for_guest()
        run(ssh_base() + ["rm -rf /tmp/h0-input /tmp/h0-output && mkdir -p /tmp/h0-input"])
        run(scp_base() + ["-r", f"{generated}/.", "femu@127.0.0.1:/tmp/h0-input/"])
        with (result / "guest-command.stdout").open("w") as out, \
             (result / "guest-command.stderr").open("w") as err:
            proc = subprocess.run(
                ssh_base() + ["sudo bash /tmp/h0-input/h0_guest_run.sh /tmp/h0-input /tmp/h0-output"],
                stdout=out, stderr=err, timeout=4 * 60 * 60,
            )
            workload_rc = proc.returncode
        run(scp_base() + ["-r", "femu@127.0.0.1:/tmp/h0-output", str(result / "guest")])
    finally:
        subprocess.run(ssh_base() + ["sudo poweroff"],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        try:
            qemu.wait(timeout=60)
        except subprocess.TimeoutExpired:
            qemu.terminate()
            qemu.wait(timeout=20)
        qemu_stdout.close()
        qemu_stderr.close()
        (result / "exit-status.json").write_text(json.dumps({
            "workload_rc": workload_rc,
            "qemu_rc": qemu.returncode,
        }, indent=2) + "\n")

    if workload_rc:
        raise SystemExit(f"guest workload failed with rc={workload_rc}")
    print(f"H0_RUN_PASS {result}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
