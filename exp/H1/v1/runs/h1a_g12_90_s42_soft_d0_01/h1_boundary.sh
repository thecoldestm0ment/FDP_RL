#!/usr/bin/env bash
set -euo pipefail
case "${1:-}" in pre|post) ;; *) exit 2 ;; esac
out=/tmp/h0-v2-output/snapshots
nvme flush /dev/nvme0n1 -n 1 >/dev/null
nvme get-log /dev/nvme0 --log-id=0xc0 --log-len=512 --raw-binary > "$out/intervention_${1}.c0.bin"
nvme fdp status /dev/ng0n1 -o json > "$out/intervention_${1}.fdp-status.json"
echo "intervention_${1}" >> /tmp/h0-v2-output/snapshot-order.txt
