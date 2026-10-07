#!/usr/bin/env python3
"""One fresh FEMU H1 timing run; preserve raw artifacts and never analyze."""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
from pathlib import Path
import shutil
import socket
import subprocess
import time

ROOT = Path(__file__).resolve().parents[3]
QEMU = ROOT / "build-femu/qemu-system-x86_64"
QEMU_IMG = ROOT / "build-femu/qemu-img"
BASE = ROOT / ".h0-vm/noble-prepared.qcow2"
ISO = ROOT / ".h0-vm/seed.iso"
KEY = ROOT / ".h0-vm/id_ed25519"
SOURCE = ROOT / "exp/H1/code/h1_timing_gen.c"
PREP_SOURCE = ROOT / "exp/H0/v2/code/h0_single_gen.c"
SCRIPT = ROOT / "exp/H1/code/h1_guest.sh"
BOUNDARY = ROOT / "exp/H1/code/h1_boundary.sh"
PORT = 18081


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
    p.add_argument("--geometry", choices=["g3", "g12"], required=True)
    p.add_argument("--mode", choices=["soft", "sham", "rewrite25"], required=True)
    p.add_argument("--delay-ru", required=True)
    p.add_argument("--seed", type=int, default=42)
    p.add_argument("--result-dir", type=Path, required=True)
    p.add_argument("--gc-background", type=int, choices=[75, 90], required=True)
    p.add_argument("--rate", type=int, default=11000)
    p.add_argument("--smoke-writes", type=int, default=0)
    p.add_argument("--prestate-reference", type=Path)
    a = p.parse_args()
    if a.seed < 0 or a.rate <= 0 or a.smoke_writes < 0:
        p.error("invalid seed/rate/count")
    if a.delay_ru != "never":
        if not a.delay_ru.isdecimal() or int(a.delay_ru) not in (0,1,4,16,64,128):
            p.error("unsupported predeclared delay")
    elif a.mode != "soft":
        p.error("Never only applies to H1-A soft mode")
    if a.smoke_writes and a.prestate_reference:
        p.error("smoke cannot use prestate reference")
    if not a.smoke_writes and not a.prestate_reference:
        p.error("full H1 run requires a prestate reference")
    result = a.result_dir.resolve()
    if result.exists():
        p.error(f"result directory exists: {result}")
    with socket.socket() as sock:
        if sock.connect_ex(("127.0.0.1", PORT)) == 0:
            p.error(f"TCP port {PORT} is in use")
    for path in (QEMU, QEMU_IMG, BASE, ISO, KEY, SOURCE, PREP_SOURCE, SCRIPT, BOUNDARY):
        if not path.exists():
            p.error(f"missing: {path}")
    pages = 786432 if a.geometry == "g3" else 3145728
    nru = 64 if a.geometry == "g3" else 256
    blocks_per_plane = 64 if a.geometry == "g3" else 256
    memory = "4G" if a.geometry == "g3" else "2G"
    expected_state = None
    reference_manifest = None
    if a.prestate_reference:
        reference_manifest = json.loads((a.prestate_reference / "manifest.json").read_text())
        target_host = pages * 5
        for line in (a.prestate_reference / "femu.log").open():
            if "H0_STATE " in line:
                record = dict(re.findall(r"(\w+)=([^\s]+)", line))
                if int(record["host_pages"]) == target_host:
                    expected_state = record
                    break
        if expected_state is None:
            p.error("reference has no matching pre-shift host count")
        for key, value in {"geometry": a.geometry, "pages": pages,
                           "pre_chunks": 4, "prep_qd": 1,
                           "gc_background_percent": a.gc_background,
                           "gc_forced_percent": 95}.items():
            if reference_manifest.get(key) != value:
                p.error(f"reference setting differs: {key}")
    result.mkdir(parents=True)
    backend_path = None
    if a.geometry == "g12":
        zram_dir = Path("/tmp/h0-v2-zram")
        if not zram_dir.is_mount():
            p.error("missing mounted zram backend: /tmp/h0-v2-zram")
        backend_path = zram_dir / f"h0-v2-{result.name}.bin"
        if backend_path.exists():
            p.error(f"backend file exists: {backend_path}")
    binary = result / "h1_timing_gen"
    prep_binary = result / "h0_single_gen"
    for src in (SOURCE, PREP_SOURCE, SCRIPT, BOUNDARY, Path(__file__)):
        shutil.copy2(src, result / src.name)
    with (result / "femu-source.patch").open("w") as patch_file:
        run(["git", "diff", "--binary", "--", ".gitignore",
             "hw/femu/backend/dram.c", "hw/femu/backend/dram.h",
             "hw/femu/bbssd/ftl.c", "hw/femu/bbssd/ftl.h",
             "hw/femu/bbssd/ftl-internal.h", "hw/femu/bbssd/ftl-fdp.c"],
            cwd=ROOT, stdout=patch_file)
    run(["cc", "-O2", "-Wall", "-Wextra", "-Werror", "-static",
         str(SOURCE), "-luring", "-o", str(binary)])
    run(["cc", "-O2", "-Wall", "-Wextra", "-Werror", "-static",
         str(PREP_SOURCE), "-luring", "-o", str(prep_binary)])
    overlay = result / "guest-overlay.qcow2"
    with (result / "qemu-img.log").open("w") as log:
        run([str(QEMU_IMG), "create", "-f", "qcow2", "-F", "qcow2",
             "-b", str(BASE), str(overlay)], stdout=log)
    manifest = {
        "commit": run(["git", "rev-parse", "HEAD"], cwd=ROOT,
                      capture_output=True, text=True).stdout.strip(),
        "study": "H1-A" if a.mode == "soft" else "H1-B",
        "geometry": a.geometry, "mode": a.mode, "delay_ru_equivalent": a.delay_ru,
        "post_seed": a.seed, "pages": pages,
        "post_application_writes": a.smoke_writes or 4 * pages,
        "pre_chunks": 0 if a.smoke_writes else 4, "rate": a.rate,
        "smoke_writes": a.smoke_writes, "prep_qd": 1,
        "rewrite_writes": pages // 16 if a.mode == "rewrite25" else 0,
        "rewrite_target_seed": 42,
        "prestate_reference": str(a.prestate_reference.resolve()) if a.prestate_reference else None,
        "expected_pre_state": expected_state,
        "gc_background_percent": a.gc_background,
        "gc_forced_percent": 95,
        "qemu_sha256": sha256(QEMU), "generator_sha256": sha256(binary),
        "generator_source_sha256": sha256(SOURCE),
        "prep_generator_sha256": sha256(prep_binary),
        "prep_generator_source_sha256": sha256(PREP_SOURCE),
        "guest_runner_sha256": sha256(SCRIPT),
        "boundary_runner_sha256": sha256(BOUNDARY),
        "host_runner_sha256": sha256(Path(__file__)),
        "base_sha256": sha256(BASE), "fresh_qemu": True,
        "fresh_overlay": True,
        "backend": "zram-file" if backend_path else "dram",
        "backend_path": str(backend_path) if backend_path else None,
        "backend_retained": False if backend_path else None,
    }
    if reference_manifest:
        for key in ("base_sha256",):
            if manifest[key] != reference_manifest[key]:
                p.error(f"reference binary/image differs: {key}")
    (result / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    qmp = result / "qmp.sock"
    command = [
        str(QEMU), "-name", f"h1-{a.geometry}-{a.mode}-{a.delay_ru}",
        "-accel", "kvm", "-cpu", "host", "-smp", "4", "-m", memory,
        "-L", str(ROOT / "pc-bios"), "-device", "virtio-scsi-pci,id=scsi0",
        "-drive", f"file={overlay},if=none,format=qcow2,id=osdisk",
        "-device", "scsi-hd,drive=osdisk",
        "-netdev", f"user,id=net0,hostfwd=tcp:127.0.0.1:{PORT}-:22",
        "-device", "virtio-net-pci,netdev=net0", "-display", "none",
        "-serial", f"file:{result / 'serial.log'}", "-monitor", "none",
        "-qmp", f"unix:{qmp},server=on,wait=off",
        "-device", f"femu-subsys,id=femu-subsys-0,nqn=subsys0,fdp=on,fdp.nruh=4,fdp.nrg=1,fdp.nru={nru},fdp.isolation_mode=0",
        "-device", f"femu,id=nvme0,devsz_mb={pages // 256},namespaces=1,secsz=512,secs_per_pg=8,pgs_per_blk=256,blks_per_pl={blocks_per_plane},pls_per_lun=1,luns_per_ch=8,nchs=8,pg_rd_lat=40000,pg_wr_lat=200000,blk_er_lat=2000000,ch_xfer_lat=0,gc_thres_pcent={a.gc_background},gc_thres_pcent_high=95,gc_strategy=0,buffer_size=0,femu_mode=1,subsys=femu-subsys-0",
        "-drive", f"file={ISO},format=raw,media=cdrom,readonly=on",
        "-boot", "order=c",
    ]
    (result / "vm-command.json").write_text(json.dumps(command, indent=2) + "\n")
    env = os.environ.copy()
    env["FEMU_FDP_DEBUG"] = "1"
    if a.mode != "soft":
        env["FEMU_H1_STALE"] = "1"
    if backend_path:
        env["FEMU_MBE_FILE"] = str(backend_path)
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
            run(ssh() + ["mkdir -p /tmp/h0-v2-input && rm -rf /tmp/h0-v2-output"])
            run(scp() + [str(binary), str(prep_binary), str(SCRIPT), str(BOUNDARY),
                         "femu@127.0.0.1:/tmp/h0-v2-input/"])
            cmd = ["sudo", "bash", "/tmp/h0-v2-input/h1_guest.sh",
                   str(pages), str(a.rate), a.mode, a.delay_ru, str(a.seed),
                   "1" if expected_state else "0", str(a.smoke_writes)]
            with (result / "guest-command.stdout").open("w") as gout, \
                 (result / "guest-command.stderr").open("w") as gerr:
                guest = subprocess.Popen(ssh() + cmd, stdout=gout, stderr=gerr)
                guest_deadline = time.monotonic() + 8 * 60 * 60
                if expected_state:
                    # Read new phase-boundary trace lines only; no workload progress polling.
                    with (result / "femu.log").open(errors="replace") as trace:
                        while guest.poll() is None and time.monotonic() < guest_deadline:
                            matched = False
                            for line in trace:
                                if "H0_STATE " not in line:
                                    continue
                                observed = dict(re.findall(r"(\w+)=([^\s]+)", line))
                                if observed.get("host_pages") != expected_state["host_pages"]:
                                    continue
                                accepted = all(observed[k] == expected_state[k]
                                               for k in ("state", "victim_queue"))
                                (result / "prestate-check.json").write_text(json.dumps({
                                    "accepted": accepted, "expected": expected_state,
                                    "observed": observed,
                                }, indent=2) + "\n")
                                marker = "prestate.ok" if accepted else "prestate.reject"
                                run(ssh() + [f"touch /tmp/h0-v2-input/{marker}"])
                                matched = True
                                break
                            if matched:
                                break
                            time.sleep(5)
                guest_rc = guest.wait(timeout=max(1, guest_deadline - time.monotonic()))
            run(scp() + ["-r", "femu@127.0.0.1:/tmp/h0-v2-output",
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
            if backend_path and backend_path.exists():
                backend_path.unlink()
    if guest_rc:
        raise SystemExit(f"guest run failed: {guest_rc}")
    print(f"H1_RUN_PASS {result}")


if __name__ == "__main__":
    main()
