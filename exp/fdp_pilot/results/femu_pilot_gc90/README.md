# FEMU 파일럿 GC 90/99 결과 (컴퓨터별)

- 설정: GC 90/99, 덮어쓰기 2배, TorFS 메타 포함 공간 식, 모든 RUH II (자세한 값은 `exp/fdp_pilot/config.env`, README)
- 판정은 **한 컴퓨터 안의 run끼리만** (`pilot.py summary` 가 컴퓨터·QEMU·빌드·실험 설정이 다른 run을 섞으면 판정 거부)
- 폴더
  - `ingu/`: user2 PC (본 실험). 70% single·lan, 93% single·lan·single6
  - `lab/`: 연구실 서버 (재현). 93% single·lan·single6 (11/18–20)
- 올린 파일: `rocksdb_LOG_*.gz`(전체 LOG), `db_bench_*.stderr*` 제외 (두 컴퓨터 같은 규칙). 원본은 각 컴퓨터에 보관
  - `summary` 는 전체 LOG가 있어야 VALID 판정 → `summary.txt` 는 각 컴퓨터에서 run 직후 생성한 것 (저장소 사본으로 다시 돌리면 INVALID)

## 컴퓨터 환경 비교

| 항목 | user2 PC (`ingu/`) | 연구실 서버 (`lab/`) |
|---|---|---|
| 호스트 이름 (manifest) | 원본 기록 그대로 | lab-server (공개용으로 바꿈) |
| 실행 계정 | user2 (원본 기록은 그대로) | user (공개용으로 바꿈) |
| 호스트 OS | Windows 11 Pro + WSL2 Ubuntu 24.04.5 | Ubuntu 24.04.2 (네이티브, 커널 6.8.0-149) |
| CPU · RAM | Ryzen 7 7800X3D 8코어/16스레드, 31.7 GB (WSL 26 GB, 스왑 8 GB) | Xeon Gold 6226R 2소켓 × 16코어 (64 스레드), 251 GiB (`lab/host_info.txt`) |
| **가속** | KVM | KVM (FEMU를 sudo로 root 실행, 아래 래퍼) |
| FEMU 실행 파일 | `build-femu/qemu-system-x86_64` (코드 39353eaf1) | 같은 코드로 빌드. run 기록의 QEMU 해시는 래퍼 파일 것 |
| FEMU 권한 | `FEMU_SUDO=0` (kvm 그룹) | `FEMU_SUDO=0` + sudo 래퍼 (kvm 그룹 없음, 이 실행 파일만 sudo 허용) |
| 장치 데이터 | `FEMU_MBE_FILE` 파일 24 GiB (WSL ext4) | 같음 (로컬 디스크, root 소유로 생성) |
| 게스트 ssh 포트 | 8080 | 18080 (공용 서버라 8080 충돌. 실험 값 아님) |
| 게스트 이미지 | `make-guest-image.sh` (KVM으로 생성), 64 GB | `make-guest-image.sh --no-kvm` (권한 받기 전 TCG로 생성), 64 GB |
| 게스트 사양 | vCPU 4, RAM 8 GB | 같음 |
| 게스트 커널 | 6.8.0-149-generic | 6.8.0-147-generic |
| nvme-cli / libnvme | 2.8 / 1.8 | 2.8 / 1.8 |
| xNVMe | 0.7.5 (SPDK·libvfn 끔) | 0.7.5 (`-Dwith-spdk=disabled -Dwith-libvfn=disabled -Dwith-liburing=enabled`) |
| 게스트 추가 패키지 | README 목록 | README 목록 + `libssl-dev` (db_bench 링크에 `-lcrypto` 필요. PC는 xNVMe 의존성 설치 때 들어온 것으로 보임 [추정]) |
| RocksDB · Lan 패치 · TorFS | f2f26b15 (v7.2.2) · 752f9c05 · 0a6e399a | 같음 (`.build.json` 소스·패치 해시 전부 일치). db_bench 해시만 다름 (게스트 CPU에 맞춰 컴파일) |
| 게스트 db_bench 빌드 | KVM | KVM (TCG 빌드는 버리고 `make clean` 후 다시) |
| 실험 코드 | 39353eaf1 | 호스트 39353eaf1, 게스트 016e93edd (실행 스크립트 같음) |
| 게스트 자동 업데이트 | 끔 | 끔 (`apt-daily*.timer` disable, `unattended-upgrades` mask) |
| 실행 방식 | 한 run씩 순서대로 | 같음 (single → lan → single6) |
| 93% run 길이 | 24–25 h | 12.3–12.6 h |

- 같은 것: `config.env` 의 실험 값 전부 (run 시작 때 호스트·게스트 대조), FEMU 소스, RocksDB·TorFS·Lan 소스, 가속(KVM)
- 영향 [추정]
  - 속도: 서버가 run 2배 빠름 → RocksDB compaction·TorFS 메타데이터 정리 시점이 달라짐. FEMU GC는 명령 수 기준이라 WAF 계산 방식은 같음
  - 게스트 커널 147 vs 149: 같은 6.8 계열 소폭 차이
  - root 실행: FEMU 동작은 같음. 장치 데이터 파일·QMP 소켓만 root 소유

## 서버 sudo 래퍼 (`~/tools/femu_sudo/`, 저장소 밖)

- 관리자 sudo 규칙: `build-femu/qemu-system-x86_64` 하나만 root 실행 허용 (`SETENV`, 비번 필요)
- `03_host_loop.sh` 는 FEMU를 터미널 없이 띄움 (`setsid … < /dev/null`) → 비번 입력 불가 → askpass로 넘김
- `FEMU_SUDO=1` 은 `sudo -n env …` 형태라 규칙과 안 맞음 → `FEMU_SUDO=0`, `FEMU_BIN` 을 래퍼로

`qemu-sudo.sh` (실제 파일은 `$HOME` 이 펼쳐진 절대 경로. sudo 규칙이 경로를 정확히 비교):
```sh
#!/usr/bin/env bash
export SUDO_ASKPASS=$HOME/tools/femu_sudo/askpass.sh
exec sudo -A FEMU_MBE_FILE="$FEMU_MBE_FILE" $HOME/FDP_RL/build-femu/qemu-system-x86_64 "$@"
```
- `askpass.sh`: 비번 파일(권한 600, 저장소 밖)을 `cat`
- 확인: 게스트 `systemd-detect-virt` → `kvm`
- 주의
  - `host_logs/femu_<run>.log` 의 "명령" 줄에는 래퍼 경로가 찍힘
  - 종료: 게스트 poweroff·TERM은 sudo가 FEMU에 전달. FEMU가 완전히 멈추면 일반 계정으로 강제 종료 불가 → 관리자
  - FEMU가 비정상 종료하면 root 소유 `qmp.sock` 이 남아 다음 run이 멈춤 → `rm -f` (일반 계정 폴더라 지울 수 있음)

## 비교 방법

- 컴퓨터별로 따로: `python3 exp/fdp_pilot/pilot.py summary <컴퓨터 원본 결과 폴더>` (전체 LOG 필요)
- 숫자가 같을 필요는 없음. 방향이 같은지 봄

| 볼 것 (93%, 뒤 1/3 WAF 기준) | user2 PC | 연구실 서버 |
|---|---|---|
| WAF single / lan / single6 | 8.126 / 8.622 / 9.667 | 7.733 / 8.180 / 9.236 |
| lan vs single (WAF 감소율) | −6.10% (lan이 더 씀) | −5.78% (lan이 더 씀) |
| 열린 RU 비용 (single → single6) | +18.96% | +19.43% |
| 배치 효과 (single6 → lan, WAF 감소율) | +10.81% | +11.43% |
| 순서 | single < lan < single6 | 같음 |

| 참고 (single / lan / single6) | user2 PC | 연구실 서버 |
|---|---|---|
| run 전체 WAF | 6.940 / 7.362 / 8.282 | 6.356 / 6.678 / 7.481 |
| 가운데→뒤 1/3 WAF 변화 (뒤 대비) | 8.3 / 8.6 / 9.0% | 7.2 / 7.0 / 7.6% |
| [추정] 여유 RU (뒤 1/3) | 15.5 / 11.6 / 11.7 | 16.0 / 12.0 / 11.9 |
| 유효량 급감 (TorFS 메타데이터 정리, overwrite 시간 %) | 3번: 약 25 / 55 / 86% | 2번: 약 62 / 90% |
| 실제 최고 사용률 | 91.76 / 91.79 / 91.75% | 91.77 / 91.80 / 91.75% |

- 역전 재현: 93%에서 lan이 single보다 WAF 높음. 분해(열린 RU 비용 +19%, 배치 효과 +11%)도 두 컴퓨터 차이 0.6%p 이내
- 절대 WAF는 서버가 약 5% 낮음 (세 run 모두). 원인 미확인. 차이 나는 것: 메타데이터 정리 횟수·시점, run 속도
- 두 컴퓨터 모두 가운데→뒤 1/3 WAF 변화 > 5% (아직 변하는 중)
- 70% 관문: user2 PC gain +8.85% (< 10%) → 규칙상 판정 보류, 93%는 관찰용 (`ingu/summary.txt`). 서버는 70% 안 돌림 → 서버 summary도 판정 보류

## 서버 결과를 저장소에 올릴 때

공개 저장소라 서버 이름·계정을 바꿔서 올림 (모든 서버 run에 똑같이 → 같은 컴퓨터 판정은 그대로 동작).

서버에서 실행 (실제 이름은 `hostname`, `id -un` 으로 읽음. 저장소에는 안 적음):
- `summary.txt` 는 `03_host_loop.sh` 가 끝날 때 결과 폴더에 자동 생성 (전체 LOG 있는 상태)
```sh
rm -rf ~/lab_upload && cp -r <서버 결과 폴더> ~/lab_upload && cd ~/lab_upload
H=$(hostname); U=$(id -un)
grep -rlI -e "$H" -e "$U" . | xargs -r sed -i -e "s/$H/lab-server/g" -e "s/$U/user/g"
grep -rI -e "$H" -e "$U" . | head
find . -name '*.gz' -exec zgrep -l -e "$H" -e "$U" {} +
{ lscpu | head -20; uname -srm; free -g; } > host_info.txt
cd ~ && tar czf lab_upload.tar.gz --exclude='*.gz' --exclude='*.stderr' --exclude='*.stderr.ts' -C ~/lab_upload .
```
- 중간 `grep`·`find` 두 줄은 아무것도 안 나와야 함
- 호스트 정보는 `uname -a` 대신 위 명령 (`uname -a` 는 호스트 이름이 들어감)
- 받은 뒤 한 번 더: `grep -rIl -i -E '<서버 이름>|<계정>|<서버 IP>' lab/` 결과 없어야 함
