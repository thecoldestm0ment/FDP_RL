#!/usr/bin/env bash
# Prepare a PC (Ubuntu 24.04 / WSL2, as root) for the H1 v2 campaign.
#   setup_host.sh            check only; lists what is missing
#   setup_host.sh --apply    also install packages, build FEMU, load KVM and
#                            mount the zram backend (rerun after every reboot /
#                            WSL restart: KVM and zram do not persist)
# Copy these from the H0 v3 PC into <repo>/.h0-vm/ first (not in git):
#   noble-prepared.qcow2  seed.iso  id_ed25519  id_ed25519.pub
# The image is checked against base_sha256 in the H0 v3 manifests.
set -uo pipefail
HERE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(cd "$HERE/../../../.." && pwd)
APPLY=0
[[ ${1:-} == --apply ]] && APPLY=1
ZRAM=/tmp/h0-v2-zram
PKGS="build-essential git meson ninja-build pkg-config python3 python3-venv python3-pip
      flex bison libglib2.0-dev libpixman-1-dev libslirp-dev libaio-dev libattr1-dev
      libcap-ng-dev libdw-dev libfdt-dev libgtk-3-dev libnuma-dev libseccomp-dev libssl-dev
      libusb-1.0-0-dev liburing-dev zlib1g-dev libzstd-dev openssh-client util-linux
      e2fsprogs kmod tmux"
bad=0
say()  { printf '%-8s %s\n' "$1" "$2"; }
fail() { say MISSING "$1"; bad=1; }

[[ $(id -u) == 0 ]] || { echo "run as root"; exit 2; }
. /etc/os-release
say INFO "$PRETTY_NAME, $(nproc) CPUs, $(awk '/MemTotal/ {printf "%.1f GiB", $2/1048576}' /proc/meminfo) RAM"
awk '/MemTotal/ { exit !($2 >= 11*1048576) }' /proc/meminfo \
    || say WARN "under 12 GB RAM: runs get slower (page cache holds the 24 GiB media); results are unaffected. WSL: raise memory= in .wslconfig"

# 1. packages
missing=$(for p in $PKGS; do dpkg -s "$p" >/dev/null 2>&1 || echo "$p"; done | tr '\n' ' ')
if [[ -z $missing ]]; then
    say ok "packages"
elif (( APPLY )); then
    apt-get update && apt-get install -y $missing && say ok "packages installed" \
        || fail "apt install $missing"
else
    fail "packages: $missing"
fi

# 2. VM image and key (copied by hand)
VM=$ROOT/.h0-vm
want=$(python3 -c "import json; print(json.load(open('$ROOT/exp/H0/v3/runs/main_g24_redirect_s42_01/manifest.json'))['base_sha256'])")
for f in noble-prepared.qcow2 seed.iso id_ed25519 id_ed25519.pub; do
    [[ -f $VM/$f ]] || fail ".h0-vm/$f (copy from the H0 v3 PC)"
done
if [[ -f $VM/noble-prepared.qcow2 ]]; then
    chmod 600 "$VM/id_ed25519" 2>/dev/null
    got=$(sha256sum "$VM/noble-prepared.qcow2" | cut -d' ' -f1)
    [[ $got == "$want" ]] && say ok "VM image sha256 = H0 v3" \
        || fail "VM image sha256 $got != H0 v3 $want (copy it again)"
fi

# 3. FEMU build (same configure line as the H0 v3 PC; wraps are downloaded)
QEMU=$ROOT/build-femu/qemu-system-x86_64
if (( APPLY )); then
    if [[ ! -f $ROOT/build-femu/build.ninja ]]; then
        mkdir -p "$ROOT/build-femu"
        (cd "$ROOT/build-femu" && ../configure --enable-kvm --target-list=x86_64-softmmu \
            --enable-slirp --disable-libnfs --disable-libiscsi --disable-curl) \
            || fail "FEMU configure (see output above)"
    fi
    [[ -f $ROOT/build-femu/build.ninja ]] && { ninja -C "$ROOT/build-femu" qemu-system-x86_64 qemu-img \
        || fail "FEMU build"; }
fi
if [[ -x $QEMU && -x $ROOT/build-femu/qemu-img ]]; then
    if grep -q "FEMU_H0_THIRDS" "$ROOT/hw/femu/bbssd/ftl-fdp.c" && \
       [[ $QEMU -nt $ROOT/hw/femu/bbssd/ftl-fdp.c ]]; then
        say ok "FEMU build ($(sha256sum "$QEMU" | cut -c1-16))"
    else
        fail "FEMU binary older than hw/femu sources (setup_host.sh --apply rebuilds)"
    fi
else
    fail "FEMU build (setup_host.sh --apply)"
fi

# 4. KVM
if [[ ! -c /dev/kvm ]] && (( APPLY )); then
    grep -q GenuineIntel /proc/cpuinfo && modprobe kvm_intel || modprobe kvm_amd
fi
[[ -c /dev/kvm ]] && say ok "/dev/kvm" \
    || fail "/dev/kvm (BIOS virtualization on; on WSL2 set nestedVirtualization=true in .wslconfig)"

# 5. zram backend for the 24 GiB FEMU media (compresses to well under 1 GiB)
if ! findmnt -n "$ZRAM" >/dev/null && (( APPLY )); then
    modprobe zram 2>/dev/null
    dev=$(zramctl --find --size 32G) && mkfs.ext4 -q "$dev" && mkdir -p "$ZRAM" \
        && mount "$dev" "$ZRAM" || fail "zram setup"
fi
findmnt -n "$ZRAM" >/dev/null && say ok "zram mounted at $ZRAM" || fail "zram at $ZRAM"

# 6. static liburing for the guest generator, and the SSH port
[[ -f /usr/lib/x86_64-linux-gnu/liburing.a ]] && say ok "liburing.a" || fail "liburing.a (liburing-dev)"
python3 -c "import socket,sys; s=socket.socket(); sys.exit(s.connect_ex(('127.0.0.1',18082))==0)" \
    && say ok "port 18082 free" || fail "port 18082 in use"

if (( bad )); then
    echo "SETUP_INCOMPLETE"; exit 1
fi
echo "SETUP_OK  next: bash exp/H1/v2/code/verify_env.sh"
