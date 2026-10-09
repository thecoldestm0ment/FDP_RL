/* H1 v2 request stream: the H0 v3 generator plus a targeted rewrite.
 * Fill uses 128 KiB requests; initial/shift (pre/post) and rewrite use 4 KiB,
 * following the WARP steady-state random-overwrite workload, so the
 * intervention has the same I/O granularity as the application.
 * Rewrite visits B in the H0 v3 stride-85 order and skips every B block that
 * the shift chunks given by --skip-shift wrote, so it moves only the old B
 * that no application write has overwritten. With no --skip-shift it is the
 * H0 v3 full-B rewrite, request for request.
 * Build: cc -O2 -Wall -Wextra generator.c -luring -o generator
 * Only run against the unmounted FEMU guest namespace character device. */
#define _POSIX_C_SOURCE 200809L
#include <errno.h>
#include <fcntl.h>
#include <inttypes.h>
#include <liburing.h>
#include <linux/nvme_ioctl.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <unistd.h>

#define BS 131072          /* fill request, buffer size */
#define BS_SMALL 4096      /* initial/shift/rewrite request */
#define MAX_QD 128
#define MAX_SKIP 64        /* shift chunks a rewrite can exclude */

struct options {
    const char *device;
    const char *phase;
    const char *placement;
    uint64_t pages;
    uint64_t writes;
    uint64_t seed;
    uint32_t qd;
    uint32_t rate;
    bool dry_run;
    uint64_t skip[MAX_SKIP];   /* seeds of shift chunks whose B writes to exclude */
    uint32_t nskip;
    uint64_t skip_writes;      /* writes per excluded shift chunk */
    uint64_t *targets;         /* rewrite LPNs in issue order */
};

struct slot {
    void *buf;
    bool busy;
    bool reading;
    uint64_t start_ns;
    uint64_t lpn;
    uint8_t region;
    uint16_t pid;
    uint64_t ordinal;
};

/* Request size of a phase; LPNs are in units of this size. */
static uint32_t phase_bs(const char *phase)
{
    return strcmp(phase, "fill") ? BS_SMALL : BS;
}

static uint64_t now_ns(void)
{
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return (uint64_t)ts.tv_sec * 1000000000ull + ts.tv_nsec;
}

static uint64_t mix(uint64_t x)
{
    x += UINT64_C(0x9e3779b97f4a7c15);
    x = (x ^ (x >> 30)) * UINT64_C(0xbf58476d1ce4e5b9);
    x = (x ^ (x >> 27)) * UINT64_C(0x94d049bb133111eb);
    return x ^ (x >> 31);
}

static uint64_t hash_u64(uint64_t h, uint64_t v)
{
    for (int i = 0; i < 8; i++) {
        h = (h ^ (uint8_t)(v >> (i * 8))) * UINT64_C(1099511628211);
    }
    return h;
}

static void usage(const char *prog)
{
    fprintf(stderr, "usage: %s --phase fill|initial|shift|rewrite "
            "--placement redirect|stale --namespace-blocks N --writes N "
            "[--device /dev/ng0n1] [--seed 42] [--qd 1|32] [--rate IOPS] [--dry-run]\n"
            "  rewrite: no --writes; [--skip-writes N --skip-shift SEED ...]\n", prog);
}

static uint64_t number(const char *s)
{
    char *end;
    errno = 0;
    uint64_t n = strtoull(s, &end, 0);
    if (errno || !s[0] || s[0] == '-' || *end) {
        fprintf(stderr, "invalid number: %s\n", s);
        exit(2);
    }
    return n;
}

static struct options parse(int argc, char **argv)
{
    struct options o = { .device = "/dev/ng0n1", .seed = 42, .qd = 32 };
    for (int i = 1; i < argc; i++) {
        if (!strcmp(argv[i], "--dry-run")) {
            o.dry_run = true;
            continue;
        }
        if (i + 1 == argc) {
            usage(argv[0]);
            exit(2);
        }
        const char *v = argv[++i];
        if (!strcmp(argv[i-1], "--device")) o.device = v;
        else if (!strcmp(argv[i-1], "--phase")) o.phase = v;
        else if (!strcmp(argv[i-1], "--placement")) o.placement = v;
        else if (!strcmp(argv[i-1], "--namespace-blocks")) o.pages = number(v);
        else if (!strcmp(argv[i-1], "--writes")) o.writes = number(v);
        else if (!strcmp(argv[i-1], "--seed")) o.seed = number(v);
        else if (!strcmp(argv[i-1], "--qd")) {
            uint64_t q = number(v);
            /* QD1 is the deterministic setting; QD32 the WARP-like one. */
            if (q != 1 && q != 32) { fprintf(stderr, "H0 v3 allows QD 1 or 32\n"); exit(2); }
            o.qd = q;
        }
        else if (!strcmp(argv[i-1], "--skip-shift")) {
            if (o.nskip == MAX_SKIP) { fprintf(stderr, "too many --skip-shift\n"); exit(2); }
            o.skip[o.nskip++] = number(v);
        }
        else if (!strcmp(argv[i-1], "--skip-writes")) o.skip_writes = number(v);
        else if (!strcmp(argv[i-1], "--rate")) {
            uint64_t rate = number(v);
            if (rate > UINT32_MAX) exit(2);
            o.rate = rate;
        }
        else { usage(argv[0]); exit(2); }
    }
    bool rw = o.phase && !strncmp(o.phase, "rewrite", 7);
    if (!o.phase || !o.placement || !o.pages || (!o.writes && !rw) ||
        (o.qd != 1 && o.qd != 32) || o.writes > SIZE_MAX / sizeof(uint64_t) ||
        (o.pages != 49152 && o.pages != 98304 && o.pages != 196608) ||
        (strcmp(o.phase, "fill") && strcmp(o.phase, "initial") &&
         strcmp(o.phase, "shift") && strcmp(o.phase, "rewrite")) ||
        (strcmp(o.placement, "redirect") && strcmp(o.placement, "stale"))) {
        usage(argv[0]);
        exit(2);
    }
    if (!strcmp(o.phase, "fill") && o.writes != o.pages) {
        fprintf(stderr, "fill requires exactly one write per LBA\n");
        exit(2);
    }
    /* The rewrite length is the number of untouched B blocks, found below. */
    if (rw && o.writes) {
        fprintf(stderr, "rewrite takes no --writes; its targets set the count\n");
        exit(2);
    }
    if ((o.nskip || o.skip_writes) && (!rw || !o.nskip || !o.skip_writes)) {
        fprintf(stderr, "--skip-shift and --skip-writes go together, rewrite only\n");
        exit(2);
    }
    return o;
}

/* The logical stream depends only on seed, phase, and ordinal. Placement does
 * not enter this function, so Redirect and Stale submit identical LBA requests. */
static void request(const struct options *o, uint64_t ordinal,
                    uint64_t *lpn, uint8_t *region, uint16_t *pid)
{
    /* A 64-bit stream key per (phase, seed), then a counter. mix(seed ^ ordinal)
     * gave every chunk the same draws: chunk seeds are below 2^18 and chunk
     * sizes are multiples of 2^18, so XOR only permuted one shared set. */
    uint64_t key = mix(o->seed ^ ((uint64_t)(uint8_t)o->phase[0] << 56));
    uint64_t r = mix(key + ordinal);
    uint64_t units = o->pages * (BS / phase_bs(o->phase));
    uint64_t a = units / 3, b = a, c = a;
    if (!strcmp(o->phase, "fill")) {
        /* Namespace = 49152/98304/196608 (6/12/24 GiB) blocks; all coprime with 85. */
        *lpn = (ordinal * 85 + o->seed) % o->pages;
        *region = *lpn < a ? 0 : (*lpn < a+b ? 1 : 2);
    } else if (!strncmp(o->phase, "rewrite", 7)) {
        /* Untouched B blocks, each once; targets do not depend on policy. */
        *lpn = o->targets[ordinal];
        *region = 1;
    } else {
        uint32_t draw = r % 100;
        bool initial = !strcmp(o->phase, "initial");
        uint32_t wa = initial ? 80 : 10;
        uint32_t wb = initial ? 10 : 80;
        *region = draw < wa ? 0 : (draw < wa + wb ? 1 : 2);
        uint64_t size = *region == 0 ? a : (*region == 1 ? b : c);
        uint64_t base = *region == 0 ? 0 : (*region == 1 ? a : a + b);
        *lpn = base + mix(r) % size;
    }
    *pid = *region == 0 ? 0 : (*region == 2 ? 1 :
           (!strcmp(o->phase, "shift") &&
            !strcmp(o->placement, "redirect") ? 2 : 1));
    if (!strncmp(o->phase, "rewrite", 7)) *pid = 2;
}

/* Rewrite targets: the stride-85 walk over B (H0 v3 order), minus every B
 * block written by the excluded shift chunks. The chunks are replayed with
 * request(), so the excluded set is exactly what the guest submitted. */
static void build_targets(struct options *o)
{
    uint64_t b = o->pages * (BS / BS_SMALL) / 3, a = b;
    uint8_t *touched = calloc(b, 1);
    o->targets = malloc(b * sizeof(*o->targets));
    if (!touched || !o->targets) { perror("allocation"); exit(1); }
    struct options shift = *o;
    shift.phase = "shift";
    for (uint32_t k = 0; k < o->nskip; k++) {
        shift.seed = o->skip[k];
        for (uint64_t i = 0; i < o->skip_writes; i++) {
            uint64_t lpn;
            uint8_t region;
            uint16_t pid;
            request(&shift, i, &lpn, &region, &pid);
            if (region == 1) touched[lpn - a] = 1;
        }
    }
    o->writes = 0;
    for (uint64_t k = 0; k < b; k++) {
        uint64_t idx = (k * 85 + o->seed) % b;
        if (!touched[idx]) o->targets[o->writes++] = a + idx;
    }
    free(touched);
    if (!o->writes) { fprintf(stderr, "rewrite has no untouched B block\n"); exit(2); }
}

static int submit_io(struct io_uring *ring, int fd, struct slot *s,
                     uint8_t opcode, uint32_t bs)
{
    struct io_uring_sqe *sqe = io_uring_get_sqe(ring);
    if (!sqe) return -EAGAIN;
    struct nvme_uring_cmd cmd = {
        .opcode = opcode, .nsid = 1,
        .addr = (uintptr_t)s->buf, .data_len = bs,
        .cdw10 = (uint32_t)(s->lpn * (bs / 512)),
        .cdw11 = (uint32_t)((s->lpn * (bs / 512)) >> 32),
        .cdw12 = (bs / 512 - 1) | (opcode == 1 ? 2u << 20 : 0),
        .cdw13 = opcode == 1 ? (uint32_t)s->pid << 16 : 0,
    };
    sqe->opcode = IORING_OP_URING_CMD;
    sqe->fd = fd;
    sqe->cmd_op = NVME_URING_CMD_IO;
    memcpy((void *)sqe->cmd, &cmd, sizeof(cmd));
    io_uring_sqe_set_data(sqe, s);
    s->start_ns = now_ns();
    int submitted = io_uring_submit(ring);
    return submitted == 1 ? 0 : (submitted < 0 ? submitted : -EIO);
}

static int wait_one(struct io_uring *ring, struct slot **slot,
                    uint64_t *latency)
{
    struct io_uring_cqe *cqe;
    int rc = io_uring_wait_cqe(ring, &cqe);
    if (rc) return rc;
    *slot = io_uring_cqe_get_data(cqe);
    *latency = now_ns() - (*slot)->start_ns;
    rc = cqe->res;
    io_uring_cqe_seen(ring, cqe);
    return rc;
}

/* No accumulated tokens: after a stall the schedule restarts at now. */
static void pace(uint64_t *next_ns, uint32_t rate)
{
    if (!rate) return;
    uint64_t now = now_ns();
    if (*next_ns > now) {
        struct timespec ts = { .tv_sec = *next_ns / 1000000000ull,
                              .tv_nsec = *next_ns % 1000000000ull };
        while (clock_nanosleep(CLOCK_MONOTONIC, TIMER_ABSTIME, &ts, NULL) == EINTR) {}
    }
    *next_ns = now_ns() + 1000000000ull / rate;
}

static int compare_u64(const void *a, const void *b)
{
    uint64_t x = *(const uint64_t *)a, y = *(const uint64_t *)b;
    return (x > y) - (x < y);
}

int main(int argc, char **argv)
{
    struct options o = parse(argc, argv);
    uint64_t logical = UINT64_C(14695981039346656037);
    uint64_t pid_hash = UINT64_C(14695981039346656037);
    uint64_t regions[3] = {0};
    bool rewrite = !strncmp(o.phase, "rewrite", 7);
    if (rewrite) build_targets(&o);
    uint32_t bs = phase_bs(o.phase);
    for (uint64_t i = 0; i < o.writes; i++) {
        uint64_t lpn;
        uint8_t region;
        uint16_t pid;
        request(&o, i, &lpn, &region, &pid);
        logical = hash_u64(hash_u64(logical, i), lpn);
        pid_hash = hash_u64(pid_hash, pid);
        regions[region]++;
    }
    if (o.dry_run) {
        printf("{\"phase\":\"%s\",\"placement\":\"%s\",\"writes\":%" PRIu64
               ",\"logical_hash\":\"%016" PRIx64 "\",\"pid_hash\":\"%016" PRIx64
               "\",\"A\":%" PRIu64 ",\"B\":%" PRIu64 ",\"C\":%" PRIu64
               ",\"skip_chunks\":%u}\n",
               o.phase, o.placement, o.writes, logical, pid_hash,
               regions[0], regions[1], regions[2], o.nskip);
        return 0;
    }

    int fd = open(o.device, O_RDWR);
    if (fd < 0) { perror(o.device); return 1; }
    struct io_uring ring;
    struct io_uring_params params = { .flags = IORING_SETUP_SQE128 | IORING_SETUP_CQE32 };
    int rc = io_uring_queue_init_params(o.qd, &ring, &params);
    if (rc) { fprintf(stderr, "io_uring init: %s\n", strerror(-rc)); return 1; }
    struct slot *slots = calloc(o.qd, sizeof(*slots));
    uint64_t *latencies = malloc(o.writes * sizeof(*latencies));
    if (!slots || !latencies) { perror("allocation"); return 1; }
    for (uint32_t j = 0; j < o.qd; j++) {
        if (posix_memalign(&slots[j].buf, BS, BS)) { perror("buffer"); return 1; }
    }

    uint64_t begin = now_ns(), next_ns = begin, issued = 0, done = 0, reads = 0;
    uint64_t issued_hash = UINT64_C(14695981039346656037);
    uint32_t max_active = 0;
    uint32_t active = 0;
    while (done < o.writes) {
        while (active < o.qd && issued < o.writes) {
            struct slot *s = NULL;
            for (uint32_t j = 0; j < o.qd; j++) {
                if (!slots[j].busy) { s = &slots[j]; break; }
            }
            if (!s) { rc = -EFAULT; goto error; }
            request(&o, issued, &s->lpn, &s->region, &s->pid);
            s->ordinal = issued;
            /* Data content is deterministic; rewrite uses read contents below. */
            memset(s->buf, 0, bs);
            ((uint64_t *)s->buf)[0] = s->lpn;
            ((uint64_t *)s->buf)[1] = issued;
            pace(&next_ns, o.rate);
            s->reading = rewrite;
            rc = submit_io(&ring, fd, s, rewrite ? 2 : 1, bs);
            if (rc) goto error;
            issued_hash = hash_u64(hash_u64(issued_hash, issued), s->lpn);
            s->busy = true;
            issued++;
            active++;
            if (active > max_active) max_active = active;
        }
        struct slot *s;
        uint64_t latency;
        rc = wait_one(&ring, &s, &latency);
        if (rc) goto error;
        if (s->reading) {
            reads++;
            s->reading = false;
            /* Same LBA, same buffer: READ has completed before WRITE. */
            rc = submit_io(&ring, fd, s, 1, bs);
            if (rc) goto error;
            continue;
        }
        latencies[done++] = latency;
        s->busy = false;
        active--;
    }
    if (active || issued != done || issued_hash != logical ||
        (rewrite && reads != done)) { rc = -EFAULT; goto error; }
    uint64_t elapsed = now_ns() - begin;
    qsort(latencies, o.writes, sizeof(*latencies), compare_u64);
    printf("{\"phase\":\"%s\",\"placement\":\"%s\",\"writes\":%" PRIu64
           ",\"completed\":%" PRIu64 ",\"reads\":%" PRIu64
           ",\"logical_hash\":\"%016" PRIx64 "\",\"pid_hash\":\"%016" PRIx64
           "\",\"A\":%" PRIu64 ",\"B\":%" PRIu64 ",\"C\":%" PRIu64
           ",\"elapsed_ns\":%" PRIu64 ",\"iops\":%.2f,\"p99_ns\":%" PRIu64
           ",\"p999_ns\":%" PRIu64
           ",\"request_bytes\":%u,\"max_outstanding\":%u,\"drained\":true"
           ",\"issued_logical_hash\":\"%016" PRIx64 "\",\"skip_chunks\":%u}\n",
           o.phase, o.placement, o.writes, done, reads, logical, pid_hash,
           regions[0], regions[1], regions[2], elapsed,
           (double)done * 1e9 / elapsed,
           latencies[(o.writes * 99 + 99) / 100 - 1],
           latencies[(o.writes * 999 + 999) / 1000 - 1], bs, max_active, issued_hash,
           o.nskip);
    for (uint32_t j = 0; j < o.qd; j++) free(slots[j].buf);
    free(slots);
    free(latencies);
    free(o.targets);
    io_uring_queue_exit(&ring);
    close(fd);
    return 0;
error:
    fprintf(stderr, "I/O failed at issued=%" PRIu64 " done=%" PRIu64
            " rc=%d (%s)\n", issued, done, rc,
            rc < 0 ? strerror(-rc) : "NVMe status");
    return 1;
}
