# H0 — stale placement의 유지 비용과 수정 비용

## v3 (진행 중)

- GC 기준: WARP `run_fdp_WARP256PI10.sh` 설정을 축소 적용 → [GC 기준 메모](../docs/GC_기준_메모.md)
- 실행: `python3 exp/H0/v3/code/run_vm.py --geometry ... --policy ... --result-dir exp/H0/v3/runs/<name>`
- 분석: `analysis/` (`long_compare.txt`, `pilot_summary.txt`, `pilot_cumdiff.png`)
- runs: `smoke_*` → `pilot_g24_*` → `long_g12_01`, `long_g24_01`

## v2 (완료, H1 기준 데이터)

- 결론: H0-A 조건부 지지, H0-B 지지 → [최종보고서](../docs/H0_최종보고서_20260928.md)
- H1이 `v2/runs/g12_*_oracle_serial_01`과 `v2/code/h0_single_gen.c`를 사용함
- `v2/runs/`는 git에 올라가지 않음 (4 GB)

## v1 (폐기)

- `_old/v1/` — 초기 설계. `runs/`는 git에 올라가지 않음
