# FEMU 파일럿 GC 90/99 결과 (컴퓨터별)

- 설정: GC 90/99, 덮어쓰기 2배, TorFS 메타 포함 공간 식, 모든 RUH II (자세한 값은 `exp/fdp_pilot/config.env`, README)
- 판정은 **한 컴퓨터 안의 run끼리만** (`pilot.py summary` 가 컴퓨터·QEMU·빌드·실험 설정이 다른 run을 섞으면 판정 거부)
- 폴더
  - `ingu/`: user2 PC (본 실험). 70% single·lan·single6, 93% single·lan·single6
  - `lab/`: 연구실 서버 (재현). 93% single·lan·single6 (11/18–20), 85% single·lan·single6 (11/20–21, 세 run 동시)
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
| 실행 방식 | 한 run씩 순서대로 | 93%: 같음 (single → lan → single6). 85%: **세 run 동시** (게스트 이미지 복사본 2개, 포트 18080·18081·18082, 장치 파일·QMP 소켓 따로) |
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

### 사용률별 (뒤 1/3 WAF)

| | 70% user2 PC | 85% 서버 | 93% 서버 | 93% user2 PC |
|---|---|---|---|---|
| WAF single / lan / single6 | 2.773 / 2.527 / 2.908 | 4.482 / 4.606 / 4.968 | 7.733 / 8.180 / 9.236 | 8.126 / 8.622 / 9.667 |
| lan vs single (WAF 감소율) | +8.85% | −2.77% | −5.78% | −6.10% |
| 열린 RU 비용 (single → single6) | +4.88% | +10.84% | +19.43% | +18.96% |
| 배치 효과 (single6 → lan) | +13.10% | +7.28% | +11.43% | +10.81% |
| [추정] 여유 RU single / lan | 58.9 / 54.2 | 30.8 / 26.8 | 16.0 / 12.0 | 15.5 / 11.6 |
| 실제 최고 사용률 | 69.1% | 83.7–83.8% | 91.8% | 91.8% |

- 70% single6: user2 PC (`ingu/single6_u0.70`, PR #6)
- 85% 예측 (11/20, 결과 전, Obsidian 기록): lan vs single 약 0% ±3%, 열린 RU 비용 약 +12%, 배치 효과 +11~13%
  - lan vs single −2.77%, 열린 RU 비용 +10.84% → 예측 범위 안
  - 배치 효과 +7.28% → 예측보다 낮음
- 열린 RU 비용 ≈ 0.78 × 4 / 여유 RU(single) 식 하나로 세 사용률이 맞음: 70% 식 +5.3 (실측 +4.9), 85% 식 +10.1 (실측 +10.8), 93% 계수 맞춘 점 [계산]
- 뒤집히는 지점: 70%와 85% 사이 (두 점이 다른 컴퓨터)

## GC 복사 분해 (`gc_decay.py`)

- `python3 gc_decay.py <ingu|lab> <0.70|0.93>` (이 폴더에서)
- overwrite를 덮어쓴 host 바이트로 10등분 (두 run 속도가 달라서 시간 대신)
- GC 복사(host 1 B당)를 둘로 나눔
  - 처음 옮김: 데이터 칸 → GC 칸
  - 다시 옮김: GC 칸 → GC 칸
- 근거: GC 복사는 victim RU를 가진 칸에 매김 (`hw/femu/bbssd/ftl-fdp.c` `fdp_count_gc_writes`)

| single − lan (+면 lan이 덜 옮김) | 70% (user2 PC) | 93% (user2 PC) | 93% (서버) |
|---|---|---|---|
| 처음 옮김 차이 | +0.27 → +0.07~0.10 | −0.02 ~ +0.05 | −0.04 ~ +0.07 |
| 다시 옮김 차이 | +0.17 ~ +0.30 | 0 → −0.1 ~ −1.07 | 첫 구간 +0.25, 이후 −0.2 ~ −0.95 |
| GC 칸 유효 비중 single / lan | 77–90% / 13–35% | 98–100% / 64–93% | 97–100% / 48–93% |
| lan L0–L3 옮긴 양 / 쓴 양 (구간) | 0.38 → 0.95 | 0.94 → 1.43 | 0.81 → 1.36 |
| GC 전 WAF (작은 쓰기 등) | 1.09 | 1.09 | 1.09 |

- 70%: lan이 두 경로 모두에서 덜 옮김. 뒤 30%에서 처음 옮김 이득이 줄어 % 이득 감소
- 93%: 처음 옮김 이득 0 (분리 효과 소멸). 손해는 전부 다시 옮김
  - 모든 RUH II → GC된 데이터가 GC 칸 하나에 섞임
  - lan은 열린 RU 4개 더 → 여유 RU 16 → 12 → 다시 옮김 증가 [추정]
- 93%에서는 수명 짧은 L0–L3도 쓴 양보다 많이 옮겨짐 → 여유 6.5%에서는 짧은 데이터도 무효화 전에 GC에 잡힘 [추정]
- 두 컴퓨터 같은 패턴. lan 손해가 특정 구간(50–60%, 70–90%)에서 튐 (−8 ~ −13%), 원인 미확인
- 한계: victim별 기록 없음 (RU 단위 유효율·나이 모름) → 다음 배치에서 GC victim 로깅

배치 효과 분해 (single6 − lan, overwrite 뒤 30% 구간, host 1 B당; `gc_decay.py <폴더> <사용률> single6 lan`):

| | 70% (user2 PC) | 85% (서버) | 93% (서버) |
|---|---|---|---|
| 처음 옮김 차이 | +0.10 ~ +0.12 | +0.04 ~ +0.08 | +0.07 ~ +0.08 |
| 다시 옮김 차이 | +0.26 ~ +0.31 | +0.28 ~ +0.33 | +0.64 ~ +1.27 |
| 합 (WAF 대비) | 0.38 ~ 0.42 (WAF 약 2.9) | 0.35 ~ 0.39 (WAF 약 5) | 0.71 ~ 1.34 (WAF 약 9) |
| lan GC 칸 유효 비중 | 29–35% | 60–73% | 92–93% |

- 배치 효과(%) = 아낀 양 ÷ WAF. 아낀 양은 70%·85% 비슷 (약 0.4)한데 85%는 WAF가 약 2배 → %가 절반 [계산]
- 93%는 다시 옮김에서 아끼는 양이 커져서 % 가 다시 오름 → 사용률에 따라 오르내림 (13.1 → 7.3 → 11.4%)
- 85%는 세 run 동시, 70%는 다른 컴퓨터 → 조건 차이가 섞여 있음. run 1번씩 [추정: 해석]

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
