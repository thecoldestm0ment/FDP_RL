/* Single H0 request stream: 4 KiB NVMe io_uring_cmd writes with FDP PIDs.
 * Build: cc -O2 -Wall -Wextra h0_single_gen.c -luring -o h0_single_gen
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

#define BS 4096
#define MAX_QD 128

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
};

struct slot {
    void *buf;
    bool busy;
    uint64_t start_ns;
    uint64_t lpn;
    uint8_t region;
    uint16_t pid;
    uint64_t ordinal;
};

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
    fprintf(stderr, "usage: %s --phase fill|initial|shift|rewrite25|rewrite100 "
            "--placement oracle|stale|stable --namespace-pages N --writes N "
            "[--device /dev/ng0n1] [--seed 42] [--qd 32] [--rate IOPS] [--dry-run]\n", prog);
}

static uint64_t number(const char *s)
{
    char *end;
    errno = 0;
    uint64_t n = strtoull(s, &end, 0);
    if (errno || !s[0] || *end) {
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
        else if (!strcmp(argv[i-1], "--namespace-pages")) o.pages = number(v);
        else if (!strcmp(argv[i-1], "--writes")) o.writes = number(v);
        else if (!strcmp(argv[i-1], "--seed")) o.seed = number(v);
        else if (!strcmp(argv[i-1], "--qd")) o.qd = number(v);
        else if (!strcmp(argv[i-1], "--rate")) o.rate = number(v);
        else { usage(argv[0]); exit(2); }
    }
    if (!o.phase || !o.placement || !o.pages || !o.writes ||
        !o.qd || o.qd > MAX_QD || o.pages % 4 ||
        (strcmp(o.phase, "fill") && strcmp(o.phase, "initial") &&
         strcmp(o.phase, "shift") && strcmp(o.phase, "rewrite25") &&
         strcmp(o.phase, "rewrite100")) ||
        (strcmp(o.placement, "oracle") && strcmp(o.placement, "stale") &&
         strcmp(o.placement, "stable"))) {
        usage(argv[0]);
        exit(2);
    }
    if (!strcmp(o.phase, "fill") && o.writes != o.pages) {
        fprintf(stderr, "fill requires exactly one write per LBA\n");
        exit(2);
    }
    if (!strncmp(o.phase, "rewrite", 7) &&
        o.writes > o.pages / 4) {
        fprintf(stderr, "rewrite count exceeds B region\n");
        exit(2);
    }
    return o;
}

/* The logical stream depends only on seed, phase, and ordinal. Placement does
 * not enter this function, so Oracle and Stale submit identical LBA requests. */
static void request(const struct options *o, uint64_t ordinal,
                    uint64_t *lpn, uint8_t *region, uint16_t *pid)
{
    uint64_t r = mix(o->seed ^ ordinal);
    uint64_t a = o->pages / 4, b = o->pages / 4, c = o->pages / 2;
    if (!strcmp(o->phase, "fill")) {
        /* 85 is coprime to 3*2^k (G3/G12), and validated below at runtime. */
        *lpn = (ordinal * 85 + o->seed) % o->pages;
        *region = *lpn < a ? 0 : (*lpn < a+b ? 1 : 2);
    } else if (!strncmp(o->phase, "rewrite", 7)) {
        /* A single permutation, with Rewrite25 as the Rewrite100 prefix. */
        *lpn = a + (ordinal * 85 + o->seed) % b;
        *region = 1;
    } else {
        uint32_t draw = r % 100;
        bool initial = !strcmp(o->phase, "initial") ||
                       !strcmp(o->placement, "stable");
        uint32_t wa = initial ? 82 : 38;
        uint32_t wb = initial ? 6 : 50;
        *region = draw < wa ? 0 : (draw < wa + wb ? 1 : 2);
        uint64_t size = *region == 0 ? a : (*region == 1 ? b : c);
        uint64_t base = *region == 0 ? 0 : (*region == 1 ? a : a + b);
        *lpn = base + mix(r) % size;
    }
    *pid = *region == 0 ? 0 : (*region == 2 ? 1 :
           (!strcmp(o->phase, "shift") &&
            !strcmp(o->placement, "oracle") ? 2 : 1));
    if (!strncmp(o->phase, "rewrite", 7)) *pid = 2;
}

static int submit_io(struct io_uring *ring, int fd, struct slot *s,
                     uint8_t opcode)
{
    struct io_uring_sqe *sqe = io_uring_get_sqe(ring);
    if (!sqe) return -EAGAIN;
    struct nvme_uring_cmd cmd = {
        .opcode = opcode, .nsid = 1,
        .addr = (uintptr_t)s->buf, .data_len = BS,
        .cdw10 = (uint32_t)(s->lpn * 8),
        .cdw11 = (uint32_t)((s->lpn * 8) >> 32),
        .cdw12 = 7 | (opcode == 1 ? 2u << 20 : 0),
        .cdw13 = opcode == 1 ? (uint32_t)s->pid << 16 : 0,
    };
    sqe->opcode = IORING_OP_URING_CMD;
    sqe->fd = fd;
    sqe->cmd_op = NVME_URING_CMD_IO;
    memcpy((void *)sqe->cmd, &cmd, sizeof(cmd));
    io_uring_sqe_set_data(sqe, s);
    s->start_ns = now_ns();
    return io_uring_submit(ring) < 0 ? -EIO : 0;
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

static void pace(uint64_t start, uint64_t ordinal, uint32_t rate)
{
    if (!rate) return;
    uint64_t due = start + ordinal * 1000000000ull / rate;
    uint64_t now = now_ns();
    if (due <= now) return;
    struct timespec ts = { .tv_sec = due / 1000000000ull,
                           .tv_nsec = due % 1000000000ull };
    clock_nanosleep(CLOCK_MONOTONIC, TIMER_ABSTIME, &ts, NULL);
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
               "\",\"A\":%" PRIu64 ",\"B\":%" PRIu64 ",\"C\":%" PRIu64 "}\n",
               o.phase, o.placement, o.writes, logical, pid_hash,
               regions[0], regions[1], regions[2]);
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

    uint64_t begin = now_ns(), issued = 0, done = 0, reads = 0;
    uint32_t active = 0;
    while (done < o.writes) {
        while (!rewrite && active < o.qd && issued < o.writes) {
            struct slot *s = NULL;
            for (uint32_t j = 0; j < o.qd; j++) {
                if (!slots[j].busy) { s = &slots[j]; break; }
            }
            if (!s) { rc = -EFAULT; goto error; }
            request(&o, issued, &s->lpn, &s->region, &s->pid);
            s->ordinal = issued;
            /* Data content is deterministic; rewrite uses read contents below. */
            memset(s->buf, 0, BS);
            ((uint64_t *)s->buf)[0] = s->lpn;
            ((uint64_t *)s->buf)[1] = issued;
            pace(begin, issued, o.rate);
            rc = submit_io(&ring, fd, s, 1);
            if (rc) goto error;
            s->busy = true;
            issued++;
            active++;
        }
        if (rewrite) {
            struct slot *s = &slots[0];
            request(&o, issued, &s->lpn, &s->region, &s->pid);
            s->ordinal = issued;
            rc = submit_io(&ring, fd, s, 2);
            if (rc) goto error;
            struct slot *complete;
            uint64_t latency;
            rc = wait_one(&ring, &complete, &latency);
            if (rc || complete != s) goto error;
            reads++;
            /* Exactly the bytes returned by READ are sent to the same LBA. */
            rc = submit_io(&ring, fd, s, 1);
            if (rc) goto error;
            issued++;
            active = 1;
        }
        struct slot *s;
        uint64_t latency;
        rc = wait_one(&ring, &s, &latency);
        if (rc) goto error;
        latencies[done++] = latency;
        s->busy = false;
        active--;
    }
    qsort(latencies, o.writes, sizeof(*latencies), compare_u64);
    uint64_t elapsed = now_ns() - begin;
    printf("{\"phase\":\"%s\",\"placement\":\"%s\",\"writes\":%" PRIu64
           ",\"completed\":%" PRIu64 ",\"reads\":%" PRIu64
           ",\"logical_hash\":\"%016" PRIx64 "\",\"pid_hash\":\"%016" PRIx64
           "\",\"A\":%" PRIu64 ",\"B\":%" PRIu64 ",\"C\":%" PRIu64
           ",\"elapsed_ns\":%" PRIu64 ",\"iops\":%.2f,\"p99_ns\":%" PRIu64
           ",\"p999_ns\":%" PRIu64 "}\n",
           o.phase, o.placement, o.writes, done, reads, logical, pid_hash,
           regions[0], regions[1], regions[2], elapsed,
           (double)done * 1e9 / elapsed,
           latencies[(o.writes * 99 + 99) / 100 - 1],
           latencies[(o.writes * 999 + 999) / 1000 - 1]);
    return 0;
error:
    fprintf(stderr, "I/O failed at issued=%" PRIu64 " done=%" PRIu64
            " rc=%d (%s)\n", issued, done, rc,
            rc < 0 ? strerror(-rc) : "NVMe status");
    return 1;
}
