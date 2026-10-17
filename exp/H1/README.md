# H1 — intervention timing

## v2 (본 실험 완료, 2026-10-17)

- 개입 시점을 B turnover τ로 두고(H1-a 0.6/1.2/2.4, H1-b 0.3/0.6/1.2/2.4, oracle 0.6), H0 v3 main run을 τ=0과 never 끝점으로 재사용 → [실험계획](../docs/H1_v2_실험계획.md)
- H1-a `delay`: redirect 지연. H1-b `late_rewrite`: 즉시 redirect 후, 덮어써지지 않은 old B만 τ에 rewrite
- 실행 순서와 파일: [v2/README.md](v2/README.md)

## v1 (중단, v2로 대체)

- 28회 중 8회 완료 → [실험 준비](../docs/H1_실험준비.md) · [중간점검](../docs/H1_완료데이터_중간점검_20260928.md)
- H0 v2 생성기(`h1_timing_gen.c`)에 H0 v3에서 고친 난수 결함(chunk마다 같은 LBA 집합)이 그대로 있어, 결과를 workload 해석에 쓰지 않음
- `v1/` (예전 `code/ analysis/ _ops/ runs/`). 기준 데이터: `../H0/v2/runs/g12_*_oracle_serial_01`
