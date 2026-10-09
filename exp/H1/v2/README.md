# H1 v2 — intervention timing (B turnover)

- 상태: **준비 완료**. 본 실험은 다른 PC(노트북)에서 진행한다.
- 설계와 근거: [H1 v2 실험계획](../../docs/H1_v2_실험계획.md)
- H1-a는 redirect 지연 `delay`, H1-b는 덮어써지지 않은 old B만 나중에 rewrite하는 `late_rewrite`다.
- 수준은 τ = 0.6 / 1.2 / 2.4 (post chunk 2 / 4 / 8)이고, seed 42 / 43 / 44로 총 18 run이다.
- 끝점은 H0 v3 main run을 그대로 쓴다: `exp/H0/v3/runs/main_g24_*`.

## 노트북에서 실행 순서

모든 명령은 repo 루트에서 root로 실행한다.

1. **코드 받기:** `git pull`. 처음이면 clone한다.
2. **VM 이미지 복사** (git에 없음). H0 v3 PC의 `.h0-vm/`에서 4개 파일을 노트북 repo의 `.h0-vm/`로 USB나 scp로 옮긴다.
   - `noble-prepared.qcow2` (684 MB), `seed.iso`, `id_ed25519`, `id_ed25519.pub`
3. **환경 준비:**
   ```bash
   bash exp/H1/v2/code/setup_host.sh --apply
   ```
   - 패키지 설치, FEMU 빌드(`build-femu/`, 처음엔 수 분), KVM 로드, zram 32G mount를 한다.
   - VM 이미지 sha256도 H0 v3와 대조한다.
   - `SETUP_OK`가 나와야 한다.
   - FEMU configure가 softfloat·keycodemapdb를 git으로 받으므로 처음엔 인터넷이 필요하다.
   - **재부팅이나 WSL 재시작 뒤에는 이 명령을 다시 실행한다.** KVM과 zram은 재시작하면 사라진다.
4. **환경 재현 확인** (약 20분):
   ```bash
   bash exp/H1/v2/code/verify_env.sh
   ```
   - 짧은 late_rewrite run 하나를 돌린다. 구성은 pre 0.5×, post 0.5×, chunk 2 뒤 rewrite다.
   - H0 v3를 돌린 PC에서 같은 run을 이미 돌려 두었다(`runs/verify_ref_g24_late_rewrite_s42_emberygram`).
   - 이 run과 snapshot마다 FTL state hash가 같은지 대조한다. rewrite 뒤까지 포함하며, 기준값은 [verify_reference.json](code/verify_reference.json)에 있다.
   - 예전에 안내한 `qd1latoff` 기준 hash 8개는 쓰지 않는다. 난수 결함을 고치기 전 생성기로 돌린 run이라서다.
   - `VERIFY_ENV_PASS`가 나와야 H0 v3 run을 끝점으로 쓸 수 있고, 캠페인도 이게 있어야 시작된다.
   - FAIL이면 진행하지 말고 `_ops/verify_*.check`와 출력을 확인한다.
5. **1단계: seed 42, 6 run** (이 PC 기준 약 3.6시간):
   ```bash
   tmux new -s h1                       # 또는 VS Code 터미널을 열어 둔다
   bash exp/H1/v2/code/campaign.sh 42
   ```
   - 진행 확인: `tail -f exp/H1/v2/_ops/campaign.log`
   - 결과: `exp/H1/v2/analysis/h1_all.txt`와 그래프 3개 (`h1_all_h1a.svg`, `h1_all_h1b.svg`, `h1_all_tau.svg`)
   - 결과를 보고 [τ 0.3 추가 규칙](../../docs/H1_v2_실험계획.md#2-독립변수-개입-시점-τ-b-turnover)을 판단한다.
6. **2단계: seed 43·44, 12 run** (약 7.3시간):
   ```bash
   bash exp/H1/v2/code/campaign.sh 43 44
   ```
7. **선택: oracle 대조군** (본 결과를 본 뒤, 예: τ 1.2):
   ```bash
   H1_RUNS="oracle_rewrite:4" bash exp/H1/v2/code/campaign.sh 42 43 44
   ```
8. **결과 올리기:** 아래를 commit하고 push한다.
   - `exp/H1/v2/runs`, `exp/H1/v2/_ops`, `exp/H1/v2/analysis`
   - overlay qcow2는 `.gitignore`로 빠진다.

### 노트북 주의

- **절전·최대 절전을 끈다.** 전원을 연결한 상태로 둔다. 잠들면 VM이 멈추고 SSH가 끊겨 run이 실패할 수 있다.
- **WSL이면 터미널을 닫지 않는다.** 마지막 터미널을 닫으면 WSL이 종료될 수 있다. tmux를 쓰더라도 Windows 터미널이나 VS Code 창은 열어 둔다.
- **RAM이 실행 시간을 좌우한다.** FEMU의 24 GiB 매체는 zram 위 파일에 mmap된다. 그래서 page cache가 클수록 빠르다.
  - 이 PC(WSL 12 GB)에서도 run마다 pre chunk 하나가 65–240초로 2–4배 차이 났다.
  - QD1에서는 FTL 결과가 속도와 무관해서 결과는 그대로이고, 시간만 달라진다.
  - QEMU는 guest 2 GiB를 포함해 약 4–9 GiB를 쓰고, zram은 압축 후 1 GiB 미만이다.
  - WSL이면 `C:\Users\<이름>\.wslconfig`에서 메모리를 가능한 한 크게 잡는다. 이 PC 설정은 다음과 같다.
    ```ini
    [wsl2]
    memory=12GB
    swap=8GB
    nestedVirtualization=true
    ```
  - 바꾼 뒤에는 PowerShell에서 `wsl --shutdown` 하고 다시 연다.
  - run 시간 추정(18 run 약 11시간)은 H0 본 실험 속도 기준이다. 메모리가 적으면 1.5–3배 걸릴 수 있다.
- **한 번에 한 run만 돌린다.** 포트 18082와 zram을 공유하기 때문이다.

### 캠페인 동작

- 끝난 run은 건너뛴다. 중단되면 같은 명령을 다시 실행해 이어 간다.
- VM이나 guest 실패로 끝나지 못한 run은 `failed_<이름>_<시각>`으로 옮기고 한 번 다시 돌린다. 두 번 실패하면 멈춘다.
- run마다 `h1_analyze.py check`를 실행한다. **check가 실패하면 즉시 멈춘다.** QD1은 결정적이라 다시 돌려도 결과가 같기 때문이다. 내용은 `_ops/<run>.check`에 있다.
- seed 하나가 끝날 때마다 `analysis/h1_all.*`를 갱신한다.

## run 이름

| 이름 | 내용 |
|---|---|
| `h1a_g24_delay_t{0.6,1.2,2.4}_s{42,43,44}_01` | H1-a: B를 PID1에 τ까지 두고 이후 PID2 |
| `h1b_g24_laterw_t{0.6,1.2,2.4}_s{42,43,44}_01` | H1-b: 즉시 redirect, τ에 untouched old B rewrite |
| `h1b_g24_oracle_t{τ}_s{seed}_01` | 선택 대조군: 같은 블록을 shift 때 rewrite |
| `verify_ref_g24_late_rewrite_s42_emberygram` | 환경 재현 기준 run (H0 v3 PC) |
| `verify_g24_late_rewrite_s42_<host>_<시각>` | 환경 재현 확인 run (새 PC) |
| `smoke_g24_delay_c2_s42_01` | 준비 smoke: delay τ 0.6, full pre, post 4 chunk. H0 v3 Stale과 비교 |
| `smoke_g24_oracle_c2_s42_01` | 준비 smoke: oracle τ 0.6, 짧은 구성. 기준 run과 비교 |

## 파일

| 파일 | 내용 |
|---|---|
| `code/generator.c` | H0 v3 생성기 + rewrite 대상 지정(`--skip-shift`, `--skip-writes`) |
| `code/guest.sh` | phase 순서. policy와 `AT`(개입 chunk)에 따라 PID 전환·rewrite 위치를 정한다 |
| `code/run_vm.py` | run 하나 실행(`--policy`, `--at`). FEMU `H1_BMAP` trace를 켠다 |
| `code/campaign.sh` | 18 run 캠페인, 자동 check·summary |
| `code/verify_env.sh` | 환경 재현 확인. `verify_reference.json`과 대조한다 |
| `code/setup_host.sh` | 새 PC 준비(패키지·FEMU 빌드·KVM·zram) |
| `analysis/h1_analyze.py` | `check RUN`(검증), `summary --seeds ... --out ...`(집계·그래프) |

- FEMU 변경: `hw/femu/bbssd/ftl-fdp.c`의 `H1_BMAP` trace가 thirds layout(FEMU_H0_THIRDS)에서 B = 가운데 1/3을 센다.
- 이 trace는 읽기만 하므로 FTL 결정에는 영향이 없다. 검증 ①로 확인한다.
