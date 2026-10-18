/* Page-level PI greedy-GC simulator mimicking the FEMU g24 FDP configuration
 * used in H0 v3 / H1 v2 (scratch tool for experiment design; not repo code).
 *  - 212 RU x 32768 pages (4 KiB), 192 RU exposed, 3 RUH, all PI
 *  - each RUH gets a host frontier (curr) at init; a GC frontier (gc) at first GC
 *  - frontiers are refilled eagerly from a FIFO free list when they fill
 *  - forced GC at the start of every write command while free <= 3
 *  - victim = full RU with min valid count (global greedy); copies -> victim RUH gc
 *  - request stream = exact replica of exp/H1/v2/code/generator.c (same mix(),
 *    phase keys, chunk seeds), so LBA streams equal FEMU's for the same seed.
 * Scenario: post chunks carry a share vector (A,B,C %) and a mapping (A,B,C -> PID).
 * Output: one line per post chunk with host/gc pages and per-region copies.
 * Usage: sim SEED TIESEED SPEC
 *   SPEC is a list of tokens:
 *     post=N            number of post chunks (3 GiB each)
 *     seg=FROM:TO:sa,sb,sc:pa,pb,pc:key   chunks FROM..TO (1-based, inclusive):
 *                       shares and PIDs; key = s (shift stream) or i (initial stream)
 *     mig=AT:REG:FROMPID:TOPID   after post chunk AT (0 = at shift) rewrite every
 *                       page of region REG currently in RUH FROMPID into TOPID
 *     perturb=AT        after post chunk AT write one extra page (lpn 0) to its PID
 *   defaults: post=32, all chunks 10/80/10 mapping 0,1,1 (Stale).
 */
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NRUMAX 320
static int NRU = 212;
static int II = 0; /* 1: all GC copies go to one shared GC frontier (pseudo-RUH 3) */
#define PPR 32768u
#define NRUH 4  /* 3 host RUHs + pseudo GC RUH for II */
#define FLOOR 3
#define LP (192u * PPR)          /* 6291456 exposed 4 KiB pages */
#define REG (LP / 3u)            /* 2097152 */
#define FILLB 196608u            /* 128 KiB blocks */
#define NONE 0xffffffffu
#define MAXC 200

static uint32_t *l2p, *p2l;
static int vpc[NRUMAX], wp[NRUMAX], own[NRUMAX], st[NRUMAX]; /* st: 0 free 1 open 2 full */
static int fq[NRUMAX + 1], fh, ft, fcnt;
static int curr[NRUH], gcf[NRUH];
static uint64_t host_pages, gc_pages, regcopy[3], victims[NRUH];
static uint64_t tie_state;

static uint64_t mix(uint64_t x)
{
    x += UINT64_C(0x9e3779b97f4a7c15);
    x = (x ^ (x >> 30)) * UINT64_C(0xbf58476d1ce4e5b9);
    x = (x ^ (x >> 27)) * UINT64_C(0x94d049bb133111eb);
    return x ^ (x >> 31);
}
static uint64_t tie_rand(void) { tie_state += UINT64_C(0x9e3779b97f4a7c15); return mix(tie_state); }

static int alloc_ru(int ruh)
{
    if (!fcnt) { fprintf(stderr, "device full\n"); exit(3); }
    int r = fq[fh]; fh = (fh + 1) % (NRUMAX + 1); fcnt--;
    st[r] = 1; own[r] = ruh; wp[r] = 0; vpc[r] = 0;
    return r;
}
static void free_ru(int r)
{
    st[r] = 0; vpc[r] = 0; wp[r] = 0;
    fq[ft] = r; ft = (ft + 1) % (NRUMAX + 1); fcnt++;
}
static inline int region_of(uint32_t lpn) { return lpn < REG ? 0 : (lpn < 2 * REG ? 1 : 2); }

/* program one page into frontier *fr of ruh; refill eagerly */
static void program(int *fr, int ruh, uint32_t lpn)
{
    int r = *fr;
    uint32_t ppa = (uint32_t)r * PPR + (uint32_t)wp[r];
    p2l[ppa] = lpn; l2p[lpn] = ppa; vpc[r]++; wp[r]++;
    if (wp[r] == (int)PPR) { st[r] = 2; *fr = alloc_ru(ruh); }
}
static void invalidate(uint32_t lpn)
{
    uint32_t old = l2p[lpn];
    if (old == NONE) return;
    p2l[old] = NONE; vpc[old / PPR]--; l2p[lpn] = NONE;
}
static int gc_one(void)
{
    int best = -1, nt = 0;
    for (int r = 0; r < NRU; r++) {
        if (st[r] != 2) continue;
        if (best < 0 || vpc[r] < vpc[best]) { best = r; nt = 1; }
        else if (vpc[r] == vpc[best]) {
            nt++;
            if (tie_rand() % (uint64_t)nt == 0) best = r;
        }
    }
    if (best < 0) return -1;
    int ruh = own[best];
    victims[ruh]++;
    int dst = II ? 3 : ruh;
    if (gcf[dst] < 0) gcf[dst] = alloc_ru(dst);
    uint32_t base = (uint32_t)best * PPR;
    for (uint32_t o = 0; o < PPR; o++) {
        uint32_t lpn = p2l[base + o];
        if (lpn == NONE) continue;
        p2l[base + o] = NONE;
        vpc[best]--;
        regcopy[region_of(lpn)]++;
        gc_pages++;
        program(&gcf[dst], dst, lpn);
    }
    free_ru(best);
    return 0;
}
static void write_cmd(uint32_t lpn0, uint32_t npg, int ruh)
{
    while (fcnt <= FLOOR) if (gc_one() < 0) break;
    for (uint32_t j = 0; j < npg; j++) {
        uint32_t lpn = lpn0 + j;
        invalidate(lpn);
        program(&curr[ruh], ruh, lpn);
        host_pages++;
    }
}

/* generator.c request() for 4 KiB phases */
static void req4k(uint64_t seed, char phase, uint64_t ord, const int sh[3], uint32_t *lpn, int *reg)
{
    uint64_t key = mix(seed ^ ((uint64_t)(uint8_t)phase << 56));
    uint64_t r = mix(key + ord);
    uint32_t draw = (uint32_t)(r % 100);
    int g = draw < (uint32_t)sh[0] ? 0 : (draw < (uint32_t)(sh[0] + sh[1]) ? 1 : 2);
    *reg = g;
    *lpn = (uint32_t)g * REG + (uint32_t)(mix(r) % REG);
}

struct seg { int from, to, sh[3], pid[3]; char key; };
struct mig { int at, reg, from, to; };

int main(int argc, char **argv)
{
    if (argc < 3) { fprintf(stderr, "usage: sim SEED TIESEED [spec...]\n"); return 2; }
    uint64_t seed = strtoull(argv[1], 0, 0);
    tie_state = strtoull(argv[2], 0, 0) * UINT64_C(0x2545F4914F6CDD1D) + 12345;
    int post = 32, nseg = 0, nmig = 0, perturb = -1;
    struct seg sg[64]; struct mig mg[16];
    for (int i = 3; i < argc; i++) {
        if (!strncmp(argv[i], "post=", 5)) post = atoi(argv[i] + 5);
        else if (!strncmp(argv[i], "seg=", 4)) {
            struct seg *s = &sg[nseg++];
            if (sscanf(argv[i] + 4, "%d:%d:%d,%d,%d:%d,%d,%d:%c", &s->from, &s->to,
                       &s->sh[0], &s->sh[1], &s->sh[2], &s->pid[0], &s->pid[1], &s->pid[2], &s->key) != 9) {
                fprintf(stderr, "bad seg %s\n", argv[i]); return 2; }
        } else if (!strncmp(argv[i], "mig=", 4)) {
            struct mig *m = &mg[nmig++];
            if (sscanf(argv[i] + 4, "%d:%d:%d:%d", &m->at, &m->reg, &m->from, &m->to) != 4) {
                fprintf(stderr, "bad mig\n"); return 2; }
        } else if (!strncmp(argv[i], "perturb=", 8)) perturb = atoi(argv[i] + 8);
        else if (!strncmp(argv[i], "nru=", 4)) NRU = atoi(argv[i] + 4);
        else if (!strncmp(argv[i], "ii=", 3)) II = atoi(argv[i] + 3);
        else { fprintf(stderr, "bad token %s\n", argv[i]); return 2; }
    }
    if (post > MAXC) return 2;
    /* per-chunk table */
    int csh[MAXC + 1][3], cpid[MAXC + 1][3]; char ckey[MAXC + 1];
    for (int c = 1; c <= post; c++) {
        csh[c][0] = 10; csh[c][1] = 80; csh[c][2] = 10;
        cpid[c][0] = 0; cpid[c][1] = 1; cpid[c][2] = 1; ckey[c] = 's';
    }
    for (int k = 0; k < nseg; k++)
        for (int c = sg[k].from; c <= sg[k].to && c <= post; c++) {
            memcpy(csh[c], sg[k].sh, sizeof csh[c]); memcpy(cpid[c], sg[k].pid, sizeof cpid[c]);
            ckey[c] = sg[k].key;
        }
    l2p = malloc(sizeof(uint32_t) * LP);
    p2l = malloc(sizeof(uint32_t) * (size_t)NRUMAX * PPR);
    if (!l2p || !p2l) return 1;
    memset(l2p, 0xff, sizeof(uint32_t) * LP);
    memset(p2l, 0xff, sizeof(uint32_t) * (size_t)NRUMAX * PPR);
    for (int r = 0; r < NRU; r++) { fq[ft] = r; ft = (ft + 1) % (NRUMAX + 1); fcnt++; st[r] = 0; }
    if (NRU < 200 || NRU > NRUMAX) return 2;
    for (int h = 0; h < 3; h++) { curr[h] = alloc_ru(h); }
    for (int h = 0; h < NRUH; h++) gcf[h] = -1;
    /* fill: 128 KiB, permutation, A->0, B/C->1 */
    for (uint64_t o = 0; o < FILLB; o++) {
        uint32_t blk = (uint32_t)((o * 85 + seed) % FILLB);
        int reg = blk < FILLB / 3 ? 0 : (blk < 2 * (FILLB / 3) ? 1 : 2);
        write_cmd(blk * 32u, 32, reg == 0 ? 0 : 1);
    }
    /* pre: 12 chunks x 1572864, 80/10/10, key 'i', seed+i*1009 */
    const int pre_sh[3] = {80, 10, 10};
    uint64_t h_pre0 = 0, m_pre0 = 0;
    for (int i = 1; i <= 12; i++) {
        if (i == 5) { h_pre0 = host_pages; m_pre0 = host_pages + gc_pages; }
        for (uint64_t o = 0; o < 1572864; o++) {
            uint32_t lpn; int reg;
            req4k(seed + (uint64_t)i * 1009, 'i', o, pre_sh, &lpn, &reg);
            write_cmd(lpn, 1, reg == 0 ? 0 : 1);
        }
    }
    double pre_waf = (double)(host_pages + gc_pages - m_pre0) / (double)(host_pages - h_pre0);
    printf("PRE waf_last1x=%.4f free=%d\n", pre_waf, fcnt);
    /* residency helper: count region pages per RUH */
    #define RESID(out) do { memset(out, 0, sizeof(out)); \
        for (uint32_t l = 0; l < LP; l++) if (l2p[l] != NONE) out[region_of(l)][own[l2p[l] / PPR]]++; } while (0)
    uint64_t res[3][NRUH];
    for (int c = 0; c <= post; c++) {
        /* migrations and perturbation after chunk c */
        for (int k = 0; k < nmig; k++) {
            if (mg[k].at != c) continue;
            uint64_t h0 = host_pages, g0 = gc_pages, moved = 0;
            uint32_t lo = (uint32_t)mg[k].reg * REG;
            for (uint64_t q = 0; q < REG; q++) {
                uint32_t lpn = lo + (uint32_t)((q * 85 + seed) % REG);
                if (l2p[lpn] == NONE || own[l2p[lpn] / PPR] != mg[k].from) continue;
                write_cmd(lpn, 1, mg[k].to); moved++;
            }
            printf("MIG at=%d reg=%d from=%d to=%d moved=%llu media=%llu\n", c, mg[k].reg,
                   mg[k].from, mg[k].to, (unsigned long long)moved,
                   (unsigned long long)((host_pages - h0) + (gc_pages - g0)));
            /* migration media is charged; host pages from migration excluded from app count below */
        }
        if (perturb == c) write_cmd(0, 1, c >= 1 ? cpid[c][0] : 0);
        if (c == post) break;
        int cc = c + 1;
        uint64_t h0 = host_pages, g0 = gc_pages, rc0[3], v0[NRUH];
        memcpy(rc0, regcopy, sizeof rc0); memcpy(v0, victims, sizeof v0);
        for (uint64_t o = 0; o < 786432; o++) {
            uint32_t lpn; int reg;
            req4k(seed + (uint64_t)cc * 7919, ckey[cc], o, csh[cc], &lpn, &reg);
            write_cmd(lpn, 1, cpid[cc][reg]);
        }
        RESID(res);
        printf("CH %d host=%llu gc=%llu cA=%llu cB=%llu cC=%llu v=%llu,%llu,%llu "
               "res=%llu,%llu,%llu|%llu,%llu,%llu|%llu,%llu,%llu free=%d vG=%llu resG=%llu,%llu,%llu\n", cc,
               (unsigned long long)(host_pages - h0), (unsigned long long)(gc_pages - g0),
               (unsigned long long)(regcopy[0] - rc0[0]), (unsigned long long)(regcopy[1] - rc0[1]),
               (unsigned long long)(regcopy[2] - rc0[2]),
               (unsigned long long)(victims[0] - v0[0]), (unsigned long long)(victims[1] - v0[1]),
               (unsigned long long)(victims[2] - v0[2]),
               (unsigned long long)res[0][0], (unsigned long long)res[0][1], (unsigned long long)res[0][2],
               (unsigned long long)res[1][0], (unsigned long long)res[1][1], (unsigned long long)res[1][2],
               (unsigned long long)res[2][0], (unsigned long long)res[2][1], (unsigned long long)res[2][2],
               fcnt, (unsigned long long)(victims[3] - v0[3]),
               (unsigned long long)res[0][3], (unsigned long long)res[1][3], (unsigned long long)res[2][3]);
    }
    return 0;
}
