# FDP 파일럿: 꽉 찬 SSD에서 FDP 이득이 무너지는가

본 실험 전 확인: FEMU에서도 Lan et al.처럼 사용률이 높을 때 FDP 이득이 줄어드는가.
줄어들면 → 방향 A (무너짐 원인 연구).

## 한눈에

| 항목 | 값 |
|---|---|
| 정책 | **single** (전부 PID 0) · **lan** (WAL 0 / L0–L3 1 / L4 2 / L5+ 3 / MANIFEST 4) · 대조 **single6** (single 배치, 열린 RU는 lan과 같게) |
| 사용률 | 70%, 93% (삭제 대기 파일 포함 최대 사용량 ÷ 사용자 용량) |
| workload | load(`filluniquerandom`, 키 N개) → overwrite(균등 랜덤, 데이터 **2배**) |
| 장치 | FEMU bbssd, 모든 RUH II, RU 128 MiB × 211 (OP 9.9%), 사용자 24 GiB, **GC 90/99** (WARP §4.3 GC 시작 기준 참고). RUH: single 2 · lan 6 · single6 6 |
| 측정 | overwrite 구간 WAF (media ÷ host), RUH별 쓰기, 실제 사용률, 여유 RU 추정, 가운데·뒤 1/3 WAF 차 (안정 확인) |
| 공간 | (PC 보정 식 1.0134 × 논리 + 3.047 GiB) × 1.02 + TorFS 메타 2 GiB = 목표 × 24 GiB → 논리 70% 11.3 GiB, 93% 16.6 GiB |
| 반복 | 1번. 경계면 93%만 `REP=2` |
| 순서 | **70% 세 run 먼저** (single · lan · single6) → gain ≥ 10%면 93% 두 run (single · lan) |
| 초기화 | run마다 호스트가 FEMU 재시작 (`03_host_loop.sh` → `femu/start_femu.sh`) |

### 판정

gain = 1 − WAF_lan / WAF_single (overwrite 뒤 1/3)

| 조건 | 결과 | 다음 |
|---|---|---|
| gain(70%) < 10% | 보류 | 93% 생략 |
| gain(93%) ÷ gain(70%) < 0.4 | **무너짐** | 방향 A |
| 0.4 ~ 0.6 | 경계 | 93% 한 번 더 (`REP=2`) |
| > 0.6 | 안 무너짐 | 공간 증폭·실제 사용률 확인 → zipfian |

- 기준값: `config.env`의 `MIN_GAIN_LOW` 0.10, `COLLAPSE_RATIO` 0.5, `BORDER_BAND` 0.1
- 잘못된 PID 쓰기가 있는 run은 판정에서 제외 (summary 경고)
- 대조 single6으로 gain 나누기 (판정 자체는 위 표 그대로, 해석용)
  - 열린 RU 비용 = WAF_single6 / WAF_single − 1 (RUH 4개를 더 열어 둔 값)
  - 배치 효과 = 1 − WAF_lan / WAF_single6 (열린 RU 수가 같을 때 lan 배치 몫)

### 왜 호스트에서 돌리나

- FTL·GC 상태는 FEMU 프로세스 메모리에만 있음 → FEMU 재시작 = 새 SSD
- 게스트 안 스크립트는 FEMU와 같이 꺼짐 → 호스트의 `03_host_loop.sh`가 run마다 FEMU 켜기 → ssh로 run → 결과 복사 → 끄기

## 순서

| # | 담당 | 할 일 | 명령 |
|---|---|---|---|
| 1–4 | 인구 | PC 보정 → 공간 식 (**끝남**, 1배) | `results/pc_calib_v3_1x/` |
| 5 | 지윤 | 호스트: FEMU 빌드, 게스트 이미지 | 아래 "호스트 준비" |
| 6 | 지윤 | 게스트: TorFS 포함 db_bench 빌드 | `./00_build.sh femu` |
| 7 | 지윤 | 게스트 `config.env` ★ 칸 (장치 이름) | — |
| 8 | 지윤 | 장치 확인 (정책별) | 아래 "처음 띄웠을 때 확인" |
| 9 | 지윤 | 작은 시험 한 바퀴 | `HOST_RESULTS=~/fdp_smoke FORCE=1 OVERWRITE_MULT=0.2 ./03_host_loop.sh lan 0.35` |
| 10 | 지윤 | 70% 세 run → (gain ≥ 10%) 93% 두 run | `./03_host_loop.sh "single lan single6" 0.70` → `./03_host_loop.sh "single lan" 0.93` |
| 11 | 같이 | 해석, 경계면 `REP=2` | `$HOST_RESULTS/summary.txt` |

- 게스트·호스트 `config.env`는 같은 파일 (같은 브랜치를 양쪽에 받기)
- 9번: FEMU run은 `SCALE` 없음 → 낮은 사용률(35%, 논리 3.2 GiB) + 짧은 덮어쓰기로 대신. 메타 2 GiB 몫 때문에 30% 아래는 데이터가 거의 안 들어감. 결과 폴더 분리 필수 (끝난 run은 건너뛰므로)
- 이미 끝난 run은 건너뜀, 실패하면 FEMU 끄고 중단
- **GC 75/95 예비 run 결과 폴더는 이름을 바꿔 둘 것** (`mv ~/fdp_pilot_results ~/fdp_pilot_results_gc75`). 안 바꾸면 같은 이름 run을 건너뛰고 summary가 섞임
- 시간 (추정, 인구 PC 기준): 70% run 하나 약 10~12시간, 93% run 하나 약 20~30시간 → 70% 세 run 약 1.5일, 93% 두 run 약 2~3일

## 호스트 준비 (Windows + WSL2, RAM 32 GB)

**먼저 확인**
- KVM: WSL에서 `ls -l /dev/kvm`. 없으면 `sudo modprobe kvm_intel` (AMD는 `kvm_amd`), Windows 쪽 가상화(BIOS VT-x, WSL nested virtualization) 확인
- 듀얼부팅 리눅스가 있으면 그쪽 권장 (메모리·I/O 여유, WSL 재시작 문제 없음)

**WSL 메모리** — `%UserProfile%\.wslconfig`
```ini
[wsl2]
memory=26GB      # 기본(RAM 50%)이면 게스트 8 GB + 장치 데이터 캐시에 부족
swap=8GB
```
적용: PowerShell `wsl --shutdown` 후 다시 열기 (그 뒤 KVM 모듈 다시 확인)

**메모리 예산**
- 게스트 8 GB (`FEMU_GUEST_MEM`)
- 장치 데이터 24 GiB → `FEMU_MBE_FILE` 파일 (RAM 대신, page cache로 올라감. 모자라면 디스크로 빠지고 느려질 뿐 WAF는 그대로)
- 파일 위치는 WSL 리눅스 쪽 (`~/…`, ext4). `/mnt/c` 금지 (9P라 매우 느림)
- 디스크 여유: 장치 파일 24 GiB + 게스트 이미지(64 GB 이하) + 결과

**빌드·이미지**
```sh
git clone -b fdp-pilot https://github.com/thecoldestm0ment/FDP_RL.git && cd FDP_RL
mkdir build-femu && cd build-femu
cp ../femu-scripts/femu-copy-scripts.sh . && ./femu-copy-scripts.sh
sudo ./pkgdep.sh
./femu-compile.sh                    # → build-femu/qemu-system-x86_64
./make-guest-image.sh -s 64G --packages git,build-essential,cmake,python3,libgflags-dev,libsnappy-dev,liblz4-dev,libzstd-dev,zlib1g-dev,liburing-dev,pkg-config,meson,ninja-build
#   → ~/images/u20s.qcow2, 사용자 femu, ssh 키 ~/images/femu-guest-key, sudo 비밀번호 없음, nvme-cli
```
- 게스트 안: 같은 브랜치 clone, xNVMe 설치, `./00_build.sh femu`

**호스트 `config.env`**
```sh
FEMU_BIN=~/FDP_RL/build-femu/qemu-system-x86_64
FEMU_GUEST_IMAGE=~/images/u20s.qcow2
GUEST_SSH="femu@localhost"
GUEST_SSH_OPTS="-p 8080 -i $HOME/images/femu-guest-key -o IdentitiesOnly=yes"
GUEST_DIR="/home/femu/FDP_RL/exp/fdp_pilot"
```
- `FEMU_SUDO=1`(기본)이면 호스트 `sudo -n` 필요. 내 계정이 `/dev/kvm`을 열 수 있으면 `FEMU_SUDO=0`
- 게스트 디스크 유지 필수 (`-snapshot` X, `start_femu.sh`는 안 씀)
- `GUEST_PREP_CMD`: 부팅마다 필요한 게스트 명령 (선택)
- 손으로 한 run: 게스트에서 `sudo -E ./02_femu_run.sh lan 0.70` (run마다 FEMU 재시작 질문)
- 셸에서 `pilot.py` 직접 쓸 때: 먼저 `set -a; . ./config.env; set +a`

**처음 띄웠을 때 확인 (8번)**
```sh
PILOT_POLICY=lan ./femu/start_femu.sh          # 호스트, 터미널 1
# 게스트 (GUEST_DIR 에서):
sudo nvme list                                  # 장치 이름 → config.env NG_DEV·NVME_DEV
set -a; . ./config.env; set +a
sudo -E python3 pilot.py devcheck lan /tmp/dev.txt && cat /tmp/dev.txt   # check=OK
sudo -E python3 pilot.py counters               # host media 두 숫자
sudo -E python3 pilot.py usage                  # valid cap invalid
```
- 1 GB 쓰고 host 값 +1 GB 확인
- single·single6도 같은 방법 (`PILOT_POLICY=single`, `devcheck single` 등)
- 아직 실제 게스트에서 안 돌려 본 것: `nvme fdp status -b`, `nvme fdp configs -e -b`, `nvme get-log --log-id=0xc1 --raw-binary` 옵션 이름. 다르면 `pilot.py` 해당 함수 수정

## Lan과 비교

| 항목 | Lan | 파일럿 | 이유 |
|---|---|---|---|
| RocksDB | 7.2.2 + 레벨별 hint 패치 | 같음 (Lan 패치 그대로) | TorFS 동작 확인된 조합 |
| TorFS | 0a6e399 | 같음 + `TORFS_FORCE_PID` 패치 | single을 같은 바이너리로 |
| LSM 기준 | OPTIONS의 `usertable` CF | 같음 | `default` CF는 YCSB가 안 씀 |
| 레벨 수 | 7 | 7 | — |
| L1 : SST : memtable | 256 : 64 : 128 MiB | 2.5 : 0.5 : 1 MiB | 작은 장치. RU당 SST 수 비슷 (Lan 약 195, 파일럿 256) |
| 레벨 목표 (×10) | L1 256 MiB … L5 2.44 TiB | L1 2.5 … L5 25,000 MiB (24.41 GiB) | L1 2 MiB면 93% 논리(약 19.1 GiB)가 L5 목표(19.53 GiB)의 98% → L6로 넘쳐 키 중복 |
| L0 trigger / slowdown / stop | 4 / 20 / 36 | 같음 | — |
| merge, memtable 수 | 2, 24 | 같음 | — |
| pending 한도 soft / hard | 64 / 256 GiB | 0.5 / 2 GiB (1/128) | 그대로면 밀린 양이 장치를 채움 |
| `delayed_write_rate` | 16 MiB/s | 같음 | db_bench 기본 8 MiB/s라 직접 지정 |
| LOG 크기 제한 | 없음 | 없음 | db_bench 7.2.2 CLI에 플래그 없음 |
| dynamic level bytes | false | false | 레벨 번호 = 매핑 |
| 압축 | L2부터 LZ4 | 없음 | 쓰기량이 압축률에 안 흔들리게 (Lan db_bench도 끔) |
| 값 크기 | 40 KB | 1 KB | 40 KB면 SST 하나에 12개 |
| workload | YCSB-A (zipfian 0.99) | db_bench overwrite (균등) | TorFS 연결이 가장 간단. 파일럿은 무너짐 여부만 |
| 백그라운드 작업 | 64 | 4 | 작은 장치·FEMU 속도 |

## 장치 설정과 근거

Lan 논문은 OP·물리 용량·RU 개수·II/PI 미공개 (RUH 8개, RU 약 13.08 GB만).
→ OP·격리 방식·GC 시작 기준은 실제 FDP SSD에 보정한 **WARP(FAST'26)** 값 참고, 나머지는 FEMU 제약 안에서.

| 항목 | 값 | 근거 |
|---|---|---|
| 격리 | 모든 RUH II (`fdp.isolation_mode=2`) | WARP §2: 상용 FDP SSD는 II. 원본 FEMU 모드 1은 마지막 RUH만 II → 이 브랜치에 모드 2 추가 |
| RUH 수 | **single 2, lan 6** (데이터 + GC 전용 1), 대조 **single6 6** | FEMU는 안 쓰는 RUH에도 RU를 하나씩 열어 둠 (`ftl-fdp.c` 초기화). 8개 vs 6개 시험에서 media +18% → 쓰는 RUH만 둠. lan 구성(데이터 5 + GC 1)은 Lan과 같음. single6은 열린 RU 수만 lan과 맞춘 대조 |
| placement handle | single·single6 `0`, lan `0:1:2:3:4` (`namespace_phls`) | GC RUH는 노출 안 함 |
| RU 크기 | 128 MiB = 채널 8 × LUN 8 × 512페이지 × 4 KiB | bbssd RU = superblock. WARP 공개 스크립트의 128 MiB 배치와 같음 |
| 사용자 용량 | 24 GiB (RU 192개) | Lan 장치 RU 수(3.84 TB ÷ 13.08 GB ≈ 294)와 규모 비슷, 시간·메모리 안 |
| OP | 10% → **RU 211개 (실제 9.9%)**, `blks_per_pl=211`, `fdp.nru=211` | WARP §5 기본값 OP 10%. WARP 스크립트 식: 24 × 1.1 × 1024 ÷ 128 = 211.2 → 211. `op_pcent=10`은 사용자 용량이 23.98 GiB가 돼서 RU 개수로 지정 |
| GC | **90 / 99**: 빈 RU ≤ 21개 background, ≤ 2개 강제 | WARP §4.3 GC 시작 기준 참고. 원본 기본 75/95는 빈 RU 52개를 늘 비워 둬서 OP(19개)보다 큼 → 아래 "예비 run". lazy GC·블록 재매핑은 원본 FEMU에 없음 → WAF 절댓값은 WARP와 다를 수 있음, 같은 조건 안 비교로만 사용 |
| 장치 데이터 | `FEMU_MBE_FILE` 파일 24 GiB | 원본은 RAM + `mlock`. RAM 32 GB 호스트용으로 이 브랜치에 추가 (`backend/dram.c`) |

**FEMU 하한** — RUH마다 열린 RU 1개 + 강제 GC용 빈 RU를 빼고 사용자 RU 192개가 남아야 시작 (`bb_fdp_reserve_units`)
- 강제 기준 95(빈 RU 5%): RUH 8개 RU 210개(OP 9.4%)부터, RUH 6개 208개(8.3%)부터. 직접 띄워 확인
- 강제 기준 99(빈 RU 1%): RUH 6개 199개(OP 3.6%)부터 (계산만, 띄워서 확인 안 함) → 본 실험 OP 7%도 가능
- 실제 설정(RU 211개, 90/99)은 single·lan·single6 모두 원래 크기로 띄워 확인 (빈 RU 기준 21/211, 2/211)

**100% 채우기 시험** (qtest `pilot-fill-*`, RU 크기만 축소, RU 개수 211): 모두 II, 100% 채운 뒤 4배 랜덤 덮어쓰기

| GC | 설정 | 쓰기 실패 | 최소 빈 RU | WAF |
|---|---|---|---|---|
| **90/99** | single2 · lan6 · single6 | 0 · 0 · 0 | 10 · 8 · 6 | 6.54 · 6.56 · 6.54 |
| 90/95 (참고) | single2 · lan6 · single6 | 0 · 0 · 0 | 10 · 11 · 10 | 6.60 · 8.44 · 9.76 |

- 90/99: 강제 기준(2개)까지 안 내려감, 데이터 전부 최신 버전으로 읽힘, 매핑 손실 0 → GC 안 막힘
- 90/95는 강제 GC가 빈 RU 10개를 붙잡아 RUH 6개 설정에서 WAF가 큼
- 균등 랜덤·PID 랜덤·100%라 숫자는 파일럿 예측 아님 (lan6도 실제 배치 효과 없음). GC가 막히는지만 봄
- 이전 시험(75/95, RUH 8·6개): 실패 0, 빈 RU 최소 11개, RUH 8개는 RUH 5·6이 빈 RU를 끝까지 붙잡음

## 예비 run: GC 75/95 (11/12~13, 인구 PC)

결과: `results/femu_pilot/` (판정에 안 씀). 덮어쓰기 1배, 원래 공간 식.

| run | WAF 뒤 1/3 | 실제 최고 사용률 | 가운데→뒤 1/3 | overwrite 시간 |
|---|---|---|---|---|
| single | 6.978 | 75.9% | +10.5% | 10.65 h |
| lan | 7.827 | 75.9% | +16.1% | 6.91 h |

gain −12.2% → 보류. 시계열로 본 원인:
1. **여유 RU가 WAF를 정함** — background GC가 빈 RU 52개를 유지 → 데이터 몫 211 − 52 − 열린 RU → 여유 single 14, lan 10 RU. WAF가 1/(2 × 여유 비율)을 따라감 (lan은 거의 일치)
2. **lan 패배는 열린 RU 4개 탓일 가능성** — 같은 여유 비율 지점끼리 보면 lan WAF가 0~16% 낮음 (서로 다른 시점 비교라 추정)
3. **+1.7 GiB는 TorFS 메타 영역** — FEMU 유효 − PC du: +0.7 → +1.67 GiB, 두 run 모두 overwrite 88%에서 −0.7 GiB (영역 교체). deallocate 지연이면 차이가 거의 일정해야 함
4. **II에서 분리는 첫 GC까지** — lan 유효 데이터 중 GC RUH 비중: load 끝 26% → overwrite 1/3 76% → 2/3 91%. GC 복사본이 전부 마지막 RUH로 가는 건 FEMU II 구현 → "FEMU의 II 모델에서"로 범위 한정
5. **1배로 안정 안 됨** — 유효 데이터가 끝까지 늘어 여유가 계속 줄어듦 (16.0 → 18.2 GiB)
6. single이 처음부터 느림 (50 vs 63 GiB/h), 원인 모름. FEMU GC는 I/O 기준이라 WAF엔 영향 없다고 봄

**바꾼 것** (본 run 전에 고정, 결과 보고 다시 안 바꿈)

| 항목 | 전 | 후 | 이유 |
|---|---|---|---|
| GC 기준 | 75/95 | 90/99 | 1번. WARP §4.3 GC 시작 기준 참고. 100% 채우기 시험 통과 |
| 공간 식 | RocksDB 몫만 | + TorFS 메타 2 GiB, TorFS 데이터 영역 22 GiB 검사 | 3번 |
| 덮어쓰기 | 1배 | 2배 (70%·93% 같게) | 5번 |
| 정책 | single · lan | + 대조 single6 | 2번을 직접 나눔 |
| summary | — | 보류 규칙(70%만 있어도), gain 부호 문구, 여유 RU 추정, 메타 급감 표시 | 도구 결함 |

새 설정 예상 여유 (추정): 70% 유효 최대 약 134 RU → 여유 약 50~54 RU (약 28%). 93%는 background 기준(21개)을 못 지켜 강제 기준 쪽으로 내려감 → 여유가 크게 줄어드는 구간

## run마다 자동 확인

| 시점 | 명령 | 기록 | 실패 시 |
|---|---|---|---|
| DB 열기 전 | `pilot.py devcheck <정책>` | `device.txt` | RUH 수 = `NRUH_<정책>`, 모든 RUH II, handle 목록 = `PHS_<정책>`, GC RUH 비노출, 잘못된 PID 0 중 하나라도 틀리면 중단 |
| DB 연 직후 | `pilot.py optcheck` | `options_check_*.txt` | LOG `Options.*` ≠ `config.env` 이면 중단 (`OPTCHECK_STRICT=0`이면 기록만) |
| 끝난 뒤 | `pilot.py pidcheck` | `pid_check.txt` | 잘못된 PID 쓰기 > 0 이면 `done` 없이 중단 |

**잘못된 PID** — namespace에 없는 PID로 온 쓰기
- FEMU는 오류 없이 handle 0으로 보냄. FDP 이벤트(63개 링)에만 남음
- "0으로 clamp" `ftl_err`는 RUH 번호 ≥ nruh 경우만 → 이 경우엔 안 찍힘
- → 이 브랜치 C1h 로그 v2에 `invalid_pid_cmds` 카운터 추가, `usage.csv`에 매 샘플 기록

## 측정과 해석

**장치 카운터** — `nvme fdp stats` (FDP 통계 로그 22h)의 HBMW(host), MBMW(media). 없는 장치면 `COUNTER_METHOD=custom` + `COUNTER_CMD`

**FEMU 사용량 로그 (C1h, `RUH_METHOD=femu`)** — 이 브랜치 추가 (`hw/femu/nvme.h` `FemuFdpUsageLog` v2)
- RUH별 host·media 쓰기, RUH별 RU의 유효 페이지, 장치 전체 유효 페이지·용량, 잘못된 PID 쓰기 수
- 필요한 이유: 원본은 RUH Usage 로그(21h)를 8바이트로 줄임 (커밋 1bc8508a6) / 장치가 PC 보정보다 더 참 (TorFS 메타 영역 등) → 실제 사용률을 장치에서 직접
- qtest `fdp-usage-log`로 확인 (query-femu·FDP 통계와 일치, 유효 페이지 = FTL 매핑)

**II에서 RUH별 값 읽기 (주의)**
- GC로 옮긴 데이터는 마지막 RUH(GC 전용)의 RU에 모임 → 유효 페이지도 거기 잡힘
- media: 원래 RUH의 RU에서 **처음 옮길 때만** 원래 RUH, 그다음 GC는 GC RUH에 잡힘
- → RUH별 media ≠ 데이터 종류별 GC 비용. 시험(100% 후 4배)에서 GC RUH가 media 81%, 유효 데이터 93%
- 파일럿 판정(전체 WAF)엔 영향 없음. 종류별 GC 비용은 갈래 A에서 FEMU가 페이지별 첫 RUH를 기억하게 고쳐야 함

**RUAMW 방식 (`RUH_METHOD=fdpstatus`)** — C1h 없는 실제 SSD용 근사
- `nvme fdp status` RUAMW 변화로 추정, LBA 단위 (run마다 `nvme id-ns` → `lba_bytes`, 못 읽으면 `LBA_BYTES`)
- 샘플 사이 RU 2개 넘게 쓰면 덜 셈

**덮어쓰기 2배와 안정 확인**
- 1배 예비 run: 장치에 용량 10~20배를 써도 유효 데이터가 끝까지 늘어 WAF 안정 안 됨 → 안정은 쓰기량이 아니라 유효 데이터·여유 RU가 멈추는지에 달림
- summary가 overwrite 가운데 1/3과 뒤 1/3 WAF 비교, 차 > `STABLE_TOL`(5%)이면 "변하는 중" 표시 → 그 run은 해석 주의
- TorFS 메타 영역 교체(유효 −0.7 GiB)가 뒤 1/3에 있으면 summary가 같이 표시. 여유가 갑자기 늘어 WAF가 흔들림
- 3배는 PC에서 run 하나 41시간이라 제외

**공간**
- 장치 최대 유효량 = (1.0134 × 논리 + 3.047 GiB) × 1.02 + TorFS 메타 2 GiB = 목표 × 24 GiB
  - RocksDB 몫: PC 보정, 1배까지 최대, 두 점(논리 13.3·18.6 GiB)을 지남. 70% 새 논리 11.3 GiB는 범위 밖 외삽 → `usage.csv`로 확인
  - TorFS 메타: 1 GiB × 2 영역(`fs_torfs.h`), 늘 1~2 GiB 유효. 최대치 2 GiB로 잡음
  - TorFS 데이터 영역 = 24 − 2 = 22 GiB (`fs_torfs.cc:138`). 93% RocksDB 최대 20.3 GiB = 92% → `calc`가 95% 넘으면 경고
- 곱하기 하나가 아닌 이유: 레벨 크기 고정 → L1~L4 거의 일정 → 데이터 작을수록 공간 증폭 큼
- `calc`가 논리 데이터를 마지막 레벨 목표와 비교. 100% 넘으면 아래 레벨로 넘쳐 같은 키가 두 레벨에 → 공간이 식보다 커짐
- NOFSYNC PC 예비값 → FEMU `usage.csv`의 실제 사용률로 재확인. 93%는 공간이 예상보다 크면 장치가 넘칠 수 있음

**단계 경계** (PC·FEMU 같음, `lib/runlib.sh`)
- db_bench는 load 1번, overwrite 1번만 염 (다시 열면 WAL 복구·flush로 상태 변함)
- `<단계>_open` 시작 → DB 열림 (LOG `DB pointer`) / `<단계>` 실행 → 결과 줄 / `<단계>_wait` waitforcompaction + 통계 / `<단계>_logsave` LOG 저장
- 기록: `phase_events.txt`, 줄별 시각 `db_bench_<단계>.stdout.ts`·`.stderr.ts`, 단계별 시간 `time.txt`
- stdout 줄 버퍼: `liblinebuf.so`(`lib/linebuf.c`) LD_PRELOAD. `stdbuf`는 LD_PRELOAD를 덮어써서 안 씀. 실제 로드 목록은 `cmd_<단계>.txt`
- 샘플러는 1초마다 단계 확인, 바뀌면 전·후 이름으로 한 번씩 → 경계 1~2초 안
- WAF·뒤 1/3·RUH 비율은 `overwrite` 구간만. 대기·LOG 저장 중 쓰기는 따로. 공간·사용률 최대는 전체 구간

**기록**
- `run_params.txt`: SCALE·OVERWRITE_MULT(밖에서 받은 값 포함)·SEED·THREADS·`--num`·`--writes`·전체 연산 수·정책·`TORFS_FORCE_PID`
- 실제 명령 `cmd_<단계>.txt`, 출력 `db_bench_<단계>.stdout`·`.stderr`
- 키 공간은 늘 `--num=N`, 덮어쓰기 양은 `--writes` × 스레드 수로만

**LOG**
- 큼: L1 2 MiB 70% load 2시간에 1.37 GB (대부분 SST별 `table_file_creation`). 게스트 로컬 디스크 여유 확인
- 끝날 때 gzip으로 run 폴더에 (`SAVE_FULL_LOG=0`이면 안 남김). gzip은 원본의 약 1/16
- TorFS는 LOG를 로컬 파일시스템으로 넘김 (`TORFS_DB_DIR/LOG`)

**진행 추적** — `TRACK_STATS=1`: 60초마다 레벨별 크기·compaction·stall 통계. `pilot.py pctrack <run 폴더>`로 1·2·3배 근처 샘플, L5·L6 크기, stall 정리

**PC 보정 (참고)**
- fsync 건너뜀 (`libnofsync.so`, WSL fsync 9~17 ms) → 공간 식·시간은 예비값
- DB 폴더는 `/dev/loop0` ext4 이미지(50 GiB), 결과 폴더는 WSL 루트

## 시험한 것 / 안 한 것

- FEMU qtest: `fdp-all-ii`(모드 2), `fdp-usage-log`(C1h v2, PID 9 쓰기 → `invalid_pid_cmds` 1·RUH 0 +4096 B), `query-fdp`, `pilot-fill-*`(90/99 100% 채우기) 통과. `FEMU_MBE_FILE` 켜고 `fdp-all-ii` 통과, 기존 파일은 거부
- `start_femu.sh`: 실제 설정값으로 띄움 (TCG, 게스트 없이) → single `nruh=2`·handle 1개, lan `nruh=6`·handle 5개, single6 `nruh=6`·handle 1개, GC 21/211·2/211, 24 GiB 장치 파일
- summary: 예비 run 결과로 보류 판정·여유 RU·메타 급감 표시 확인, 복사본으로 single6 분해·93%만 있을 때 확인
- `devcheck`·C1h v1/v2 파싱: 가짜 장치 응답으로 정상·오류 경우 확인
- `03_host_loop.sh`: 가짜 FEMU·ssh로 4 run 반복, `REP=2`, 건너뛰기, 실패 시 중단, 접속 끊김 재확인, 판정 4가지 확인
- 빌드: Lan·TorFS 패치 적용과 db_bench 7.2.2 옵션 존재 확인. GCC 13+ 대비 `-include cstdint`
- 진짜 FEMU 게스트 + db_bench + TorFS: GC 75/95 예비 run 70% 두 개 (인구 PC)
- **안 함**: GC 90/99로 진짜 run

**한계** — run 1번, 균등 랜덤 → 숫자를 논문에 쓰면 안 됨. "FEMU에서도 무너짐이 보이는가"만 판단

## 결과 폴더

```
지윤 호스트: $HOST_RESULTS/   (게스트 $WORK/results/ 에서 run마다 복사)
├── single_u0.70/       counters.csv, usage.csv(실제 사용률·잘못된 PID), ruh_usage.csv, device.txt, pid_check.txt,
│                       lba_bytes, meta.txt, run_params.txt, options_check_*.txt, db_bench_*, done
├── lan_u0.70/
├── single6_u0.70/      (대조)
├── single_u0.93/
├── lan_u0.93/
├── single_u0.93_r2/    (경계일 때만)
├── host_logs/          femu_<run>.log (실제 FEMU 명령 포함), run_<run>.log
└── summary.txt         WAF 표, 안정 확인, 판정

저장소: results/pc_calib_v3_1x/ (인구 PC 보정), results/femu_pilot/ (GC 75/95 예비 run, 판정에 안 씀)
        새 run은 results/femu_pilot_gc90/ 같은 새 폴더로
```

## 출처

- Lan et al., FDP: The Data Placement Promise of Modern NVMe SSDs — https://arxiv.org/html/2610.02676v2
- Lan 실험 저장소 (RocksDB 패치, OPTIONS, 스크립트) — https://github.com/sijielan/FDP_Benchmarking
- Song et al., Characterizing and Emulating FDP SSDs with WARP (FAST'26) — https://www.usenix.org/system/files/fast26-song.pdf
- WARP 공개 스크립트 (FEMU 설정, OP 식) — https://github.com/MoatLab/WARP-FAST26-AE
- TorFS — https://github.com/SamsungDS/TorFS
