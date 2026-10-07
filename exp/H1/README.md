# H1 — intervention timing

- 상태: **일시정지**, 28회 중 8회 완료 → [실험 준비](../docs/H1_실험준비.md)
- 결론(중간): 큰 지연·Never에서 비용 증가, 4 RU가 Immediate보다 1.5% 낮음. 단일 seed라 최적 timing 근거는 아님 → [중간점검](../docs/H1_완료데이터_중간점검_20260928.md)

| run | 내용 |
|---|---|
| `h1a_g12_90_s42_soft_d{0,1,4,16,64,128,never}_01` | H1-A G12-90 delay sweep (완료) |
| `h1a_g12_75_s42_soft_d0_01` | H1-A G12-75 첫 run |
| `h1_g3_rewrite_smoke_0{1,2}` | smoke |

- 재개: `_ops/h1_campaign_01_status.json`, 남은 계획 `_ops/h1_seed42_remaining_plan.json`
- 기준 데이터: `../H0/v2/runs/g12_*_oracle_serial_01`
- 감사 결과: `analysis/completed_audit_20260928/`
