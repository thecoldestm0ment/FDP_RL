# FEMU 파일럿 GC 90/99 결과 (컴퓨터별)

- 설정: GC 90/99, 덮어쓰기 2배, TorFS 메타 포함 공간 식, 모든 RUH II (자세한 값은 `exp/fdp_pilot/config.env`, README)
- 판정은 **한 컴퓨터 안의 run끼리만** (`pilot.py summary` 가 컴퓨터·QEMU·빌드·실험 설정이 다른 run을 섞으면 판정 거부)
- 폴더
  - `ingu/`: user2 PC (본 실험). 70% single·lan, 93% single·lan·single6
  - `lab/`: 연구실 서버 (재현). 93% single·lan·single6 (진행 예정)

## 컴퓨터 환경 비교

| 항목 | user2 PC (`ingu/`) | 연구실 서버 (`lab/`) |
|---|---|---|
| 호스트 이름 (manifest) | 원본 기록 그대로 | lab-server (공개용으로 바꿈) |
| 실행 계정 | user2 (원본 기록은 그대로) | user (공개용으로 바꿈) |
| 호스트 OS | Windows 11 Pro + WSL2 Ubuntu 24.04.5 | Ubuntu 24.04.2 (네이티브, 커널 6.8.0-149) |
| CPU · RAM | Ryzen 7 7800X3D 8코어/16스레드, 31.7 GB (WSL 26 GB, 스왑 8 GB) | 64 CPU, 251 GiB |
| **가속** | **KVM** | **TCG (소프트웨어 가속)**. 계정에 `/dev/kvm` 권한 없음 → 래퍼로 실행 (아래) |
| FEMU 실행 파일 | `build-femu/qemu-system-x86_64` (코드 39353eaf1) | 같은 코드로 빌드 (`make` 로 최신 확인, 11/18). run 기록의 QEMU 해시는 래퍼 파일 것 |
| 장치 데이터 | `FEMU_MBE_FILE` 파일 24 GiB (WSL ext4) | `FEMU_MBE_FILE` 파일 24 GiB (로컬 디스크) |
| FEMU 권한 | `FEMU_SUDO=0` (kvm 그룹) | `FEMU_SUDO=0` (sudo·kvm 그룹 없음) |
| 게스트 이미지 | `make-guest-image.sh` (KVM으로 생성), 64 GB | `make-guest-image.sh --no-kvm`, 64 GB |
| 게스트 사양 | vCPU 4, RAM 8 GB | 같음 |
| 게스트 커널 | 6.8.0-149-generic | 6.8.0-147-generic |
| nvme-cli / libnvme | 2.8 / 1.8 | 2.8 / 1.8 |
| xNVMe | 0.7.5 (SPDK·libvfn 끔) | 0.7.5 (`-Dwith-spdk=disabled -Dwith-libvfn=disabled -Dwith-liburing=enabled`) [빌드 후 확인] |
| RocksDB · Lan 패치 · TorFS | f2f26b15 (v7.2.2) · 752f9c05 · 0a6e399a | 같음 (게스트에서 다시 빌드, 바이너리 해시는 CPU가 달라 다름) |
| 실험 코드 | 39353eaf1 | 호스트 39353eaf1, 게스트 fdp-pilot 최신 (실행 스크립트 같음) |
| 게스트 자동 업데이트 | 끔 | 끔 (`apt-daily*.timer` disable, `unattended-upgrades` mask) |
| 실행 방식 | 한 run씩 순서대로 | 한 run씩 순서대로 |

- 같은 것: `config.env` 의 실험 값 전부 (run 시작 때 호스트·게스트 대조), FEMU 소스, RocksDB·TorFS·Lan 소스
- 영향 [추정]
  - 가속(KVM vs TCG): 게스트 CPU 속도가 달라 run 시간과 RocksDB compaction 타이밍이 달라짐. FEMU GC는 명령 수 기준이라 WAF 계산 방식은 같음
  - 게스트 커널 147 vs 149: 같은 6.8 계열 소폭 차이

## 서버 TCG 래퍼 (`~/tools/femu_tcg/qemu-tcg.sh`, 저장소 밖)

`config.env` 의 `FEMU_BIN` 을 이 파일로 지정. `-enable-kvm` → TCG, `-cpu host` → `max`, 나머지 옵션은 그대로 넘김.

```sh
#!/usr/bin/env bash
real="$HOME/FDP_RL/build-femu/qemu-system-x86_64"
args=()
for a in "$@"; do
  case "$a" in
    -enable-kvm) args+=(-accel tcg,thread=multi,tb-size=1024) ;;
    host)        args+=(max) ;;
    *)           args+=("$a") ;;
  esac
done
exec "$real" "${args[@]}"
```

- 주의: `host_logs/femu_<run>.log` 의 "명령" 줄에는 래퍼에 넘긴 원래 명령(`-enable-kvm`)이 찍힘 → TCG 사용은 이 문서로만 확인 가능

## 비교 방법

- 컴퓨터별로 따로: `python3 exp/fdp_pilot/pilot.py summary exp/fdp_pilot/results/femu_pilot_gc90/<컴퓨터>`
- 숫자가 같을 필요는 없음. 방향이 같은지 봄

| 볼 것 (93%, 뒤 1/3 WAF 기준) | user2 PC | 연구실 서버 |
|---|---|---|
| WAF single / lan / single6 | 8.126 / 8.622 / 9.667 | |
| lan vs single (WAF 감소율) | −6.10% (lan이 더 씀) | |
| 열린 RU 비용 (single → single6) | +18.96% | |
| 배치 효과 (single6 → lan, WAF 감소율) | +10.81% | |
| 순서 | single < lan < single6 | |

- 70% 관문: user2 PC gain +8.85% (< 10%) → 규칙상 판정 보류, 93%는 관찰용 (`ingu/summary.txt`)

## 서버 결과를 저장소에 올릴 때

공개 저장소라 서버 이름·계정을 바꿔서 올림 (모든 서버 run에 똑같이 → 같은 컴퓨터 판정은 그대로 동작).

서버에서 실행 (실제 이름은 `hostname`, `id -un` 으로 읽음. 저장소에는 안 적음):
```sh
cd <서버 결과 복사본>
H=$(hostname); U=$(id -un)
grep -rlI -e "$H" -e "$U" . | xargs -r sed -i -e "s/$H/lab-server/g" -e "s/$U/user/g"
grep -rI -e "$H" -e "$U" . | head
find . -name '*.gz' -exec zgrep -l -e "$H" -e "$U" {} +
```
- 마지막 두 줄은 아무것도 안 나와야 함
- 호스트 정보 파일: `{ lscpu | head -20; uname -srm; free -g; } > host_info.txt` (`uname -a` 는 호스트 이름이 들어가서 안 씀)
