# FEMU 파일럿 GC 90/99 결과 (컴퓨터별)

- 설정: GC 90/99, 덮어쓰기 2배, TorFS 메타 포함 공간 식, 모든 RUH II (자세한 값은 `exp/fdp_pilot/config.env`, README)
- 판정은 **한 컴퓨터 안의 run끼리만** (`pilot.py summary` 가 컴퓨터·QEMU·빌드·실험 설정이 다른 run을 섞으면 판정 거부)
- 폴더
  - `ingu/`: user2 PC (본 실험). 70% single·lan·single6, 93% single·lan·single6
    - 93% lan3: 끝 (VALID, 11/22). 아직 브랜치 `femu-pilot-gc90-lan3-93` (938243a0)에만 있음, 이 폴더·`ingu/summary.txt` 에는 없음
    - 93% single4: 진행 중. 끝나면 lan3 브랜치 병합과 `ingu/summary.txt` 재생성
  - `lab/`: 연구실 서버 (재현). 93% single·lan·single6 (11/18–20, 하나씩), 85%·70% single·lan·single6 (11/20–21, 사용률마다 세 run 동시)
    - 93% 두 번째 묶음 (11/22, 다섯 run 동시): `single_u0.93_r2`·`lan_u0.93_r2`·`single6_u0.93_r2` (반복) + `single4_u0.93`·`lan3_u0.93` (새 정책)
    - `summary.txt` = 폴더 전체, `summary_r2batch.txt` = 두 번째 묶음 다섯 run만 (링크 폴더로 따로 실행)
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
| 실행 방식 | 한 run씩 순서대로 | 93%: 같음 (single → lan → single6). 85%·70%: **세 run 동시** (게스트 이미지 복사본 2개, 포트 18080·18081·18082, 장치 파일·QMP 소켓 따로). 93% 두 번째 묶음: **다섯 run 동시** (복사본 4개, 포트 18080–18084) |
| 93% run 길이 | 24–25 h | 하나씩 12.3–12.6 h, 다섯 동시 14.5–14.6 h (single4만 15.8 h) |

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

| 볼 것 (93%, 뒤 1/3 WAF 기준) | user2 PC | 연구실 서버 (첫 묶음, 하나씩) |
|---|---|---|
| WAF single / lan / single6 | 8.126 / 8.622 / 9.667 | 7.733 / 8.180 / 9.236 |
| lan vs single (WAF 감소율) | −6.10% (lan이 더 씀) | −5.78% (lan이 더 씀) |
| 열린 RU 비용 (single → single6) | +18.96% | +19.43% |
| 배치 효과 (single6 → lan, WAF 감소율) | +10.81% | +11.43% |
| 순서 | single < lan < single6 | 같음 |

| 참고 (single / lan / single6) | user2 PC | 연구실 서버 (첫 묶음) |
|---|---|---|
| run 전체 WAF | 6.940 / 7.362 / 8.282 | 6.356 / 6.678 / 7.481 |
| 가운데→뒤 1/3 WAF 변화 (뒤 대비) | 8.3 / 8.6 / 9.0% | 7.2 / 7.0 / 7.6% |
| [추정] 여유 RU (뒤 1/3) | 15.5 / 11.6 / 11.7 | 16.0 / 12.0 / 11.9 |
| 유효량 급감 (TorFS 메타데이터 정리, overwrite 시간 %) | 3번: 약 25 / 55 / 86% | 2번: 약 62 / 90% |
| 실제 최고 사용률 | 91.76 / 91.79 / 91.75% | 91.77 / 91.80 / 91.75% |

- 역전 재현: 93%에서 lan이 single보다 WAF 높음. 분해(열린 RU 비용 +19%, 배치 효과 +11%)도 두 컴퓨터 차이 0.6%p 이내
- 절대 WAF는 서버가 약 5% 낮음 (세 run 모두). 원인 미확인. 차이 나는 것: 메타데이터 정리 횟수·시점, run 속도
- 두 컴퓨터 모두 가운데→뒤 1/3 WAF 변화 > 5% (아직 변하는 중)
- 70% 관문: user2 PC gain +8.85% (< 10%) → 규칙상 판정 보류, 93%는 관찰용 (`ingu/summary.txt`)
- 서버: gain 70% +10.10% (관문 통과), gain93/gain70 = **−0.547** (두 묶음 평균, `lab/summary.txt`) → "고사용률에서 WAF 이득 감소 관찰"
  - `lab/summary.txt` 는 93% 두 묶음(`_u0.93`, `_u0.93_r2`)을 합쳐 계산: 93% gain −5.53%, 열린 RU 비용 +18.56%, 배치 효과 +10.99%
  - 묶음별: 첫 묶음만 (하나씩) −5.78 / +19.43 / +11.43%, 비율 −0.572. 둘째 묶음만 (다섯 run 동시, `summary_r2batch.txt`) −5.28 / +17.68 / +10.54%, 비율 −5.28 / 10.10 = −0.523 [계산]
  - 셋 다 0.5 아래라 판정 문구는 같음
  - **두 컴퓨터 판정이 다름**: 70% gain이 관문(10%) 바로 근처(8.85 / 10.10%)라 갈림. 기준은 결과 보고 안 바꿈
  - 서버 판정 안의 조건 차이: 70%·85%는 세 run 동시, 93%는 첫 묶음 하나씩 + 둘째 묶음 다섯 run 동시

### 사용률별 (뒤 1/3 WAF)

| | 70% user2 PC | 70% 서버 | 85% 서버 | 93% 서버 (첫 묶음) | 93% user2 PC |
|---|---|---|---|---|---|
| WAF single / lan / single6 | 2.773 / 2.527 / 2.908 | 2.669 / 2.400 / 2.780 | 4.482 / 4.606 / 4.968 | 7.733 / 8.180 / 9.236 | 8.126 / 8.622 / 9.667 |
| lan vs single (WAF 감소율) | +8.85% | +10.10% | −2.77% | −5.78% | −6.10% |
| 열린 RU 비용 (single → single6) | +4.88% | +4.15% | +10.84% | +19.43% | +18.96% |
| 배치 효과 (single6 → lan) | +13.10% | +13.68% | +7.28% | +11.43% | +10.81% |
| [추정] 여유 RU single / lan | 58.9 / 54.2 | 58.5 / 54.3 | 30.8 / 26.8 | 16.0 / 12.0 | 15.5 / 11.6 |
| 실제 최고 사용률 | 69.1% | 69.2% | 83.7–83.8% | 91.8% | 91.8% |

- 70% single6: user2 PC (`ingu/single6_u0.70`, PR #6)
- 85% 예측 (11/20, 결과 전, Obsidian 기록): lan vs single 약 0% ±3%, 열린 RU 비용 약 +12%, 배치 효과 +11~13%
  - lan vs single −2.77% → 예측 범위(±3%) 안
  - 열린 RU 비용 +10.84% → 예측은 범위가 아니라 한 점(약 +12%). 가까움
  - 배치 효과 +7.28% → 예측보다 낮음
- 열린 RU 비용 ≈ 0.78 × 4 / 여유 RU(single) 식 하나로 세 사용률이 맞음: 70% 식 +5.3 (실측 +4.9), 85% 식 +10.1 (실측 +10.8), 93% 계수 맞춘 점 [계산]
- 서버 70% 예측 (11/21, 결과 전): 열린 RU 비용 +5.3%, 배치 효과 +12~14%, lan vs single +8~10% → 실측 +4.15 / +13.68 / +10.10%
  - lan vs single +10.10% 는 예측 범위(+8~10%) 바로 밖
  - 배치 효과가 같은 컴퓨터에서도 85%만 낮음 (13.7 → 7.3 → 11.4%) → 85%는 희석 (아래 분해)
- 뒤집히는 지점: 70%와 85% 사이 (서버 한 컴퓨터 안에서 확인). 서버 +10.10% (실제 69.2%) → −2.77% (실제 83.7%), 직선으로 0이 되는 곳 약 80.6% [계산]
- `lab/summary.txt` 의 "사용률 0.93" 줄은 두 묶음을 합친 값 (−5.53 / +18.56 / +10.99%). 위 표 93% 서버 칸은 첫 묶음만

### 93% 두 번째 묶음 (서버, 11/22, 다섯 run 동시)

- run: single·lan·single6 반복 (`_r2`) + single4·lan3. 모두 VALID, 실제 최고 사용률 91.79–91.83%
- lan3는 `db_bench_torfs_map` (빌드 다름 → summary "[참고, 빌드 다름]" 줄). 나머지는 기존 바이너리
  - `TORFS_PID_MAP=0,0,1,2,0`, RUH별 host 0:60.8% 1:25.4% 2:13.8% 3:0.0%, `invalid_pid_cmds=0`

반복 차이 (같은 컴퓨터, 첫 묶음 하나씩 vs 두 번째 묶음 동시; 반복 잡음 + 동시 실행 영향이 섞임):

| 뒤 1/3 WAF | 첫 묶음 (하나씩) | 두 번째 묶음 (동시) | 차이 |
|---|---|---|---|
| single | 7.733 | 7.701 | −0.4% |
| lan | 8.180 | 8.108 | −0.9% |
| single6 | 9.236 | 9.063 | −1.9% |
| lan vs single | −5.78% | −5.28% | 0.5%p |
| 열린 RU 비용 (single → single6) | +19.43% | +17.68% | 1.8%p |
| 배치 효과 (single6 → lan) | +11.43% | +10.54% | 0.9%p |

- 뒤 1/3 WAF 차이 2% 이내 → lan·single 차이(5–6%)보다 작음. 역전 재현
- run 전체 WAF는 세 정책 모두 약 7–8% 높음 (single 6.356 → 6.826, lan 6.678 → 7.219, single6 7.481 → 8.060)
  - 유효량 급감(TorFS 메타 정리)이 첫 묶음 2번 (약 62·90%) → 두 번째 묶음 3번 (약 32·63·92%). run이 느려지며 정리 횟수가 바뀐 것으로 보임 [추정]
  - 비율·뒤 1/3 값은 거의 그대로 → 판정 구간 영향 작음
- 85%·70% (세 run 동시)도 같은 크기의 조건 차이로 봄 [추정: 93% 한 점 근거]

두 번째 묶음 안 비교 (lan3·single4는 이 묶음과만 비교):

| 뒤 1/3 WAF | single | single4 | single6 | lan | lan3 |
|---|---|---|---|---|---|
| WAF | 7.701 | 8.285 | 9.063 | 8.108 | 7.568 |
| 열린 RU (데이터 칸 + GC 칸) | 2 | 4 | 6 | 6 | 4 |
| [추정] 여유 RU (뒤 1/3) | 16.0 | 14.3 | 12.1 | 12.1 | 14.0 |

| 비교 | 값 |
|---|---|
| 열린 RU +2 비용 (single4 / single − 1) | +7.58% |
| 열린 RU +4 비용 (single6 / single − 1) | +17.68% |
| 3그룹 배치 효과 (1 − lan3 / single4) | +8.65% |
| 5그룹 배치 효과 (1 − lan / single6) | +10.54% |
| lan3 개선율 (1 − lan3 / lan) | **+6.66%** |
| lan3 vs single (1 − lan3 / single) | **+1.73%** |

- 위 값은 `summary_r2batch.txt` (같은 조건, 다섯 run 동시) 기준이고 이것을 주 값으로 씀. `lab/summary.txt` (폴더 전체)는 93% single·lan 기준값을 두 묶음 평균으로 잡아서 single4 칸 비용 +7.36%, lan3 vs lan +7.07%, lan3 vs single +1.93%로 조금 다름 (3그룹 배치 효과 +8.65%는 같음)
- 열린 RU 비용: RU 1개당 +3.8% (2개) / +4.4% (4개). 거의 비례, 약간 볼록 [계산]
- lan3: 칸 비용(+7.6%)이 배치 효과(+8.7%)보다 조금 작아 single을 근소하게 이김
- 사전 예측 (11/20, 결과 전, Obsidian 03 문서. 서버 첫 묶음 값 기준)
  - single4 +8 ~ +10% → +7.58% (범위 바로 아래)
  - lan3 vs lan −8 ~ −9% (넓게 −5%까지) → −6.66% (넓은 범위 안, 핵심 범위 밖)
  - lan3 vs single −2 ~ −4% → −1.73% (범위 바로 아래)
  - 판정 기준: 개선율 ≥ 5% → "그룹을 줄이면 회복됨"
- user2 PC 93% lan3 (11/22 끝, 브랜치 `femu-pilot-gc90-lan3-93` 에만 있음, summary 재생성 전)
  - VALID, `db_bench_torfs_map`, `TORFS_PID_MAP=0,0,1,2,0`, RUH별 host 60.7 / 25.4 / 13.8 / 0%, `invalid_pid_cmds=0`
  - 뒤 1/3 WAF 8.0606 (run 전체 6.4499, 가운데 1/3 7.3650). `pilot.py` 의 `phase_delta`·`phase_slice` 로 계산 (같은 방법으로 user2 PC lan 8.6217·single 8.1262 재현) [계산]
  - lan 대비 개선율 1 − 8.0606 / 8.6217 = **+6.51%** (≥ 5% → 기준 통과), single 대비 +0.81% [계산]
  - 사전 예측 (user2 PC lan3 7.83 ~ 7.94, 넓게 ~ 8.19) → 8.061: 넓은 범위 안, 핵심 범위 밖
  - single4 진행 중 → user2 PC 칸 비용(열린 RU +2)·3그룹 배치 효과는 아직 없음
- 70% 관문 규칙상 93% 결과는 관찰용 (서버는 관문 통과, user2 PC는 보류)

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

lan3 분해 (두 번째 묶음, `gc_decay.py <링크 폴더> 0.93 <A> <B>`; `_r2` 는 이름에서 떼고 링크):

| host 1 B당, 구간 | single4 − lan3 (열린 RU 같음) | lan − lan3 (그룹 5 → 3) | single − lan (반복) |
|---|---|---|---|
| 처음 옮김 차이 | −0.01 ~ +0.08 | −0.02 ~ 0 | −0.02 ~ +0.06 |
| 다시 옮김 차이 | +0.24·+0.52 → 이후 +0.67 ~ +0.90 | +0.12·+0.25 → 이후 +0.32 ~ +0.93 | +0.01 → −0.16 ~ −0.74 |
| GC 칸 유효 비중 | 99–100% / 59–92% | 66–92% / 59–92% | 98–100% / 66–92% |

- lan3가 아낀 양은 거의 전부 다시 옮김. 처음 옮김(칸 나눈 효과)은 single4·lan과 같음
- lan3 0번 칸 (WAL·MANIFEST·L0–L3) 옮긴 양 / 쓴 양 0.96 → 1.32 = lan 0·1·4번 칸 합 0.92 → 1.30 → WAL·MANIFEST를 섞은 손해 안 보임 [확인: 숫자]
- 정리: 그룹을 줄인 이득 = 열린 RU 2개가 줄어 여유 RU가 늘고(12.1 → 14.0) 다시 옮김이 줄어든 것 [추정]
- 3그룹 배치 효과(8.65%)가 5그룹(10.54%)보다 1.9%p 작음. 처음 옮김 차이는 둘 다 작아서 원인은 다시 옮김 쪽 [추정, 원인 미확인]

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
- 동시 묶음이 끝날 때마다 `summary.txt` 가 다시 써짐 (먼저 끝난 run 기준) → 마지막 run 뒤 `pilot.py summary` 로 다시 만듦
- 묶음 하나만 summary: 링크 폴더에 그 run들과 `host_logs` 를 `ln -s` → `pilot.py summary <링크 폴더>` (폴더 이름이 정책·사용률과 맞아야 함)
- 터미널 폭보다 긴 줄을 붙여넣으면 뒤가 잘림 (서버 tmux에서 확인) → 긴 명령은 변수로 나눠 짧은 줄로
