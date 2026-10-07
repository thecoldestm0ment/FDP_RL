#!/bin/bash
set -euo pipefail

INPUT=${1:-/tmp/h0-input}
OUT=${2:-/tmp/h0-output}
DEV=/dev/ng0n1
NS=/dev/nvme0n1
CTRL=/dev/nvme0
BS=4096

mkdir -p "$OUT/snapshots" "$OUT/phases"
exec > >(tee "$OUT/guest-run.log") 2> >(tee "$OUT/guest-run.stderr" >&2)

size=$(blockdev --getsize64 "$NS")
mounts=$(lsblk -nr -o MOUNTPOINT "$NS" | sed '/^[[:space:]]*$/d')
if [[ "$size" != "3221225472" ]]; then
    echo "unexpected namespace size: $size" >&2
    exit 1
fi
if [[ -n "$mounts" ]]; then
    echo "experimental namespace is mounted: $mounts" >&2
    exit 1
fi

uname -a > "$OUT/kernel.txt"
fio --version > "$OUT/fio-version.txt"
nvme version > "$OUT/nvme-version.txt"
lsblk -b -o NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT > "$OUT/lsblk.txt"
nvme list -o json > "$OUT/nvme-list.json"
nvme fdp configs "$DEV" -e 1 -o json > "$OUT/fdp-config.json"

snapshot() {
    local tag=$1
    nvme get-log "$CTRL" --log-id=0xc0 --log-len=512 --raw-binary \
        > "$OUT/snapshots/${tag}.c0.bin"
    nvme fdp stats "$CTRL" -e 1 -o json \
        > "$OUT/snapshots/${tag}.fdp-stats.json"
    nvme fdp status "$DEV" -o json \
        > "$OUT/snapshots/${tag}.fdp-status.json"
}

phase_field() {
    local phase=$1
    local field=$2
    python3 - "$INPUT/plan.json" "$phase" "$field" <<'PY'
import json, sys
plan, name, field = sys.argv[1:]
for phase in json.load(open(plan))["phases"]:
    if phase["name"] == name:
        print(phase[field])
        break
else:
    raise SystemExit(f"unknown phase: {name}")
PY
}

completed_pages() {
    local path=$1
    local op=$2
    python3 - "$path" "$op" "$BS" <<'PY'
import json, sys
path, op, bs = sys.argv[1], sys.argv[2], int(sys.argv[3])
d = json.load(open(path))
print(sum(int(j[op]["io_bytes"]) // bs for j in d["jobs"]))
PY
}

make_read_job() {
    local source=$1
    local target=$2
    python3 - "$source" "$target" <<'PY'
import sys
src, dst = sys.argv[1:]
lines = []
for line in open(src):
    if line.startswith("rw=randwrite"):
        line = "rw=randread\n"
    if line.startswith("fdp=1") or line.startswith("fdp_pli="):
        continue
    lines.append(line)
open(dst, "w").writelines(lines)
PY
}

printf 'phase,kind,start_epoch,end_epoch,expected_write_pages,actual_write_pages,read_pages,rc\n' \
    > "$OUT/phase-status.csv"
snapshot "000_before"

mapfile -t phases < <(python3 - "$INPUT/plan.json" <<'PY'
import json, sys
for phase in json.load(open(sys.argv[1]))["phases"]:
    print(phase["name"])
PY
)

index=0
for phase in "${phases[@]}"; do
    index=$((index + 1))
    kind=$(phase_field "$phase" kind)
    expected=$(phase_field "$phase" host_writes)
    start=$(date +%s.%N)
    read_pages=0
    rc=0

    echo "PHASE_BEGIN $index $phase $kind"
    if [[ "$kind" == "intervention" ]]; then
        make_read_job "$INPUT/${phase}.fio" "$OUT/phases/${phase}.read.fio"
        if fio --output-format=json+ \
            --output="$OUT/phases/${phase}.read.json" \
            "$OUT/phases/${phase}.read.fio" \
            2> "$OUT/phases/${phase}.read.stderr"; then
            :
        else
            rc=$?
        fi
        if [[ "$rc" -eq 0 ]]; then
            read_pages=$(completed_pages "$OUT/phases/${phase}.read.json" read)
            if [[ "$read_pages" != "$expected" ]]; then
                echo "$phase read mismatch: expected=$expected actual=$read_pages" >&2
                rc=90
            fi
        fi
    fi

    if [[ "$rc" -eq 0 ]]; then
        if fio --output-format=json+ \
            --output="$OUT/phases/${phase}.json" \
            "$INPUT/${phase}.fio" \
            2> "$OUT/phases/${phase}.stderr"; then
            :
        else
            rc=$?
        fi
    fi

    actual=0
    if [[ "$rc" -eq 0 ]]; then
        actual=$(completed_pages "$OUT/phases/${phase}.json" write)
        if [[ "$actual" != "$expected" ]]; then
            echo "$phase write mismatch: expected=$expected actual=$actual" >&2
            rc=91
        fi
    fi
    end=$(date +%s.%N)
    printf '%s,%s,%s,%s,%s,%s,%s,%s\n' \
        "$phase" "$kind" "$start" "$end" "$expected" "$actual" "$read_pages" "$rc" \
        >> "$OUT/phase-status.csv"
    snapshot "$(printf '%03d' "$index")_${phase}"
    echo "PHASE_END $index $phase rc=$rc writes=$actual reads=$read_pages"
    if [[ "$rc" -ne 0 ]]; then
        chmod -R a+rX "$OUT"
        exit "$rc"
    fi
done

sync
chmod -R a+rX "$OUT"
echo H0_GUEST_RUN_PASS
