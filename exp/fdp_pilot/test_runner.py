#!/usr/bin/env python3
"""Regression checks for sampler failures and verifying the newly started VM."""
import os
from pathlib import Path
import subprocess
import tempfile
import unittest

HERE = Path(__file__).resolve().parent


class RunnerTests(unittest.TestCase):
    def shell(self, body):
        with tempfile.TemporaryDirectory(prefix='fdp-runner-') as temp:
            return subprocess.run(['bash', '-c', 'set -euo pipefail\n'
                + 'source "$RUNLIB"\n' + body], env=os.environ | {
                    'RUNLIB': str(HERE / 'lib/runlib.sh'), 'TEST_OUT': temp,
                    'HERE': str(HERE), 'WORK': temp},
                text=True, capture_output=True, timeout=15)

    def test_sampler_failure_propagates_and_leaves_no_success_status(self):
        result = self.shell('''
set_phase "$TEST_OUT" overwrite
fail_sample() { return 7; }
start_sampler "$TEST_OUT" 1 fail_sample
rc=0; wait "$SAMPLER" || rc=$?
[[ "$rc" == 7 ]]
[[ "$(cat "$TEST_OUT/sampler.exit")" == 7 ]]
[[ -f "$TEST_OUT/sampler.failed" ]]
! sampler_ok "$TEST_OUT"
''')
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_sampler_clean_finish_is_recorded(self):
        result = self.shell('''
set_phase "$TEST_OUT" overwrite
ok_sample() { echo "$2" >> "$1/seen"; }
start_sampler "$TEST_OUT" 1 ok_sample
sleep 2
rm "$TEST_OUT/phase"
wait "$SAMPLER"
[[ "$(cat "$TEST_OUT/sampler.exit")" == 0 ]]
[[ ! -f "$TEST_OUT/sampler.failed" ]]
[[ -s "$TEST_OUT/seen" ]]
''')
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_workload_killed_when_sampler_fails(self):
        result = self.shell('''
mkdir "$TEST_OUT/db"
ensure_linebuf() { LINEBUF_LIB=""; }
check_options() { return 0; }
set_phase "$TEST_OUT" idle
fail_later() { sleep 2; return 7; }
start_sampler "$TEST_OUT" 1 fail_later
rc=0
run_dbbench overwrite "$TEST_OUT" "$TEST_OUT/db" bash -c 'sleep 30' || rc=$?
[[ "$rc" == 91 ]]
[[ -z "$DB_PID" ]]
wait "$SAMPLER" || true
''')
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_dead_new_vm_cannot_be_accepted_by_existing_ssh(self):
        script = (HERE / '03_host_loop.sh').read_text()
        loop = script[script.index('    while :; do\n      kill -0 "$FPID"'):script.index("    gssh 'cat > /tmp/fdp-pilot-host.json'")]
        result = self.shell('''FEMU_LOG=mock.log; FPID=999999999; RUN_ID=expected; VM_VERIFIED=0; t=0; BOOT_TIMEOUT_SEC=1
gssh() { echo expected; }
''' + loop)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('New FEMU exited', result.stdout)

    def test_live_wrong_guest_uuid_is_rejected(self):
        script = (HERE / '03_host_loop.sh').read_text()
        loop = script[script.index('    while :; do\n      kill -0 "$FPID"'):script.index("    gssh 'cat > /tmp/fdp-pilot-host.json'")]
        result = self.shell('''FPID=$$; RUN_ID=expected; VM_VERIFIED=0; t=0; BOOT_TIMEOUT_SEC=1
gssh() { echo somebody-elses-guest; }
''' + loop)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('UUID mismatch', result.stdout)

    def test_host_port_preflight_precedes_femu_and_checks_uuid(self):
        # Structural guard for the controller; functional probe below exercises OS binding.
        script = (HERE / '03_host_loop.sh').read_text()
        self.assertLess(script.index("s.bind(('127.0.0.1'"), script.index('setsid bash'))
        self.assertIn('[[ "${uuid,,}" == "$RUN_ID" ]]', script)
        self.assertIn('if (( VM_VERIFIED )); then gssh', script)
        import socket
        with socket.socket() as occupied:
            occupied.bind(('127.0.0.1', 0))
            port = occupied.getsockname()[1]
            with socket.socket() as candidate:
                with self.assertRaises(OSError):
                    candidate.bind(('127.0.0.1', port))


if __name__ == '__main__': unittest.main()
