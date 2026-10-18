# 페이지 단위 FDP 시뮬레이터 (설계 도구)

2026-10-18 Keep/Swap 실험을 설계하며 만든 도구다. 주장은 FEMU 결과로만 하고, 이 시뮬레이터는 수준 선택, 검정력 계산, 사전 등록 예측, 정책의 넓은 범위 평가에만 쓴다.

- `plan/sim2.c`: 페이지 단위 PI/II greedy GC 시뮬레이터 (sha256 `7ea8a77de2b074c2...`).
  - FEMU g24 설정을 모사한다: RU 32,768 page, 노출 192 RU, RUH 3, free 3 RU에서 forced GC, global greedy, 복사본은 victim RUH의 gc frontier로.
  - 요청열은 `exp/H1/v2/code/generator.c`를 그대로 재현한다(같은 mix(), phase key, chunk seed). 그래서 같은 seed면 LBA 열이 FEMU와 같다.
  - FEMU의 tie-break 혼돈은 별도 tie seed로 통계적으로만 모사한다.
- `validation/`: H0 v3·H1 v2의 FEMU 33 run과 비교한 검증(`validate_out.txt`).
- `plan/v1~v5_*.py`, `model_check.py`, `power.py`: 계획에 인용한 예측·검정력 계산과 그 출력(`*_out.txt`).

주의: 스크립트의 경로는 작성 당시의 임시 폴더(`/tmp/claude-0/.../scratchpad/...`)로 되어 있다. 다시 돌리려면 `drv.py`의 `SIM` 경로와 `validate.py`의 `sys.path`를 이 폴더로 바꾸고 `gcc -O2 -o plan/sim2 plan/sim2.c`로 빌드한다.
