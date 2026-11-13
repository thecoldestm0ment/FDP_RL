#!/usr/bin/env python3
"""Build guard regression checks; no network, compiler or VM is launched."""
from pathlib import Path
import os
import shutil
import subprocess
import tempfile
import unittest

HERE = Path(__file__).resolve().parent


class BuildGuardTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(prefix='fdp-build-guard-')
        self.addCleanup(self.tmp.cleanup)
        self.base = Path(self.tmp.name)
        self.here = self.base / 'scripts'
        self.here.mkdir()
        self.work = self.base / 'work'
        self.lan = self.work / 'src/lan_bench'
        self.lan.mkdir(parents=True)
        shutil.copy2(HERE / '00_build.sh', self.here / '00_build.sh')
        shutil.copy2(HERE / 'config.env', self.here / 'config.env')
        subprocess.run(['git', 'init', '-q', str(self.lan)], check=True)
        (self.lan / 'tracked').write_text('original\n')
        subprocess.run(['git', '-C', str(self.lan), 'add', 'tracked'], check=True)
        subprocess.run(['git', '-C', str(self.lan), '-c', 'user.name=Test', '-c',
                        'user.email=test@example.invalid', 'commit', '-qm', 'fixture'], check=True)

    def run_build(self):
        env = os.environ | {'WORK': str(self.work), 'JOBS': '1'}
        return subprocess.run(['bash', str(self.here / '00_build.sh'), 'pc'],
                              env=env, text=True, capture_output=True)

    def test_dirty_lan_is_preserved_and_rejected_before_fetch(self):
        f = self.lan / 'tracked'
        f.write_text('user change\n')
        result = self.run_build()
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('Lan 저장소에 변경 사항', result.stderr)
        self.assertEqual(f.read_text(), 'user change\n')
        self.assertFalse((self.work / 'src/rocksdb-pc').exists())

    def test_partial_rocksdb_directory_is_rejected_with_recovery_guidance(self):
        commit = subprocess.check_output(['git', '-C', str(self.lan), 'rev-parse', 'HEAD'], text=True).strip()
        # This fixture tests an existing partial source tree without any network.
        with (self.here / 'config.env').open('a') as f:
            f.write(f'\nLAN_REPO_COMMIT="{commit}"\n')
        tree = self.work / 'src/rocksdb-pc'
        tree.mkdir()
        sentinel = tree / 'preserve-me'
        sentinel.write_text('partial build\n')
        result = self.run_build()
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('RocksDB base mismatch', result.stderr)
        self.assertIn('WORK=새_절대경로', result.stderr)
        self.assertEqual(sentinel.read_text(), 'partial build\n')


if __name__ == '__main__':
    unittest.main()
