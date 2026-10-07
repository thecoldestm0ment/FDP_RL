/* H1 continuous 48 GiB application stream and optional paused Rewrite25. */
#define main h0_legacy_main
#include "h0_single_gen.c"
#undef main
#include <sys/wait.h>

struct h1_opts {
    const char *device, *mode, *hook;
    uint64_t pages, base_seed, delay_b, writes, requested_writes;
    uint32_t rate, qd;
    bool dry_run, never;
};

static void h1_usage(void)
{
    fputs("h1_timing_gen --mode soft|sham|rewrite25 --delay-ru N|never "
          "--namespace-pages N --seed N --rate N --hook PATH [--dry-run]\n", stderr);
    exit(2);
}

static struct h1_opts h1_parse(int argc, char **argv)
{
    struct h1_opts x = { .device="/dev/ng0n1", .base_seed=42, .rate=11000, .qd=32 };
    const char *delay=NULL;
    for (int i=1;i<argc;i++) {
        if (!strcmp(argv[i],"--dry-run")) { x.dry_run=true; continue; }
        if (i+1==argc) h1_usage();
        const char *k=argv[i], *v=argv[++i];
        if (!strcmp(k,"--mode")) x.mode=v;
        else if (!strcmp(k,"--delay-ru")) delay=v;
        else if (!strcmp(k,"--namespace-pages")) x.pages=number(v);
        else if (!strcmp(k,"--seed")) x.base_seed=number(v);
        else if (!strcmp(k,"--writes")) x.requested_writes=number(v);
        else if (!strcmp(k,"--rate")) x.rate=number(v);
        else if (!strcmp(k,"--device")) x.device=v;
        else if (!strcmp(k,"--hook")) x.hook=v;
        else h1_usage();
    }
    if (!x.mode || !delay || !x.pages || x.pages%4 || x.pages>UINT64_MAX/4 ||
        (strcmp(x.mode,"soft") && strcmp(x.mode,"sham") && strcmp(x.mode,"rewrite25"))) h1_usage();
    x.never=!strcmp(delay,"never");
    if (x.never && strcmp(x.mode,"soft")) h1_usage();
    if (!x.never) {
        uint64_t d=number(delay);
        if (d>UINT64_MAX/16384) h1_usage();
        x.delay_b=d*16384;
    }
    x.writes=x.requested_writes?x.requested_writes:x.pages*4;
    if (x.writes>x.pages*4) h1_usage();
    if (!strcmp(x.mode,"soft") && !x.never && x.delay_b>0) {
        /* Soft timing can also be delayed; mode alone does not mean immediate. */
    }
    if (strcmp(x.mode,"soft") && ((!x.hook && !x.dry_run) || x.delay_b>x.writes)) h1_usage();
    return x;
}

static void h1_request(const struct h1_opts *x, uint64_t global,
                       uint64_t *lpn, uint8_t *region)
{
    struct options o={.phase="shift",.placement="oracle",.pages=x->pages,
                      .seed=10000+x->base_seed+1009*(global/x->pages+1)};
    uint16_t pid;
    request(&o,global%x->pages,lpn,region,&pid);
}

static int h1_hook(const char *path, const char *tag)
{
    pid_t child=fork();
    if (child<0) return -errno;
    if (child==0) {
        execl("/bin/bash","bash",path,tag,(char *)NULL);
        _exit(127);
    }
    int status;
    if (waitpid(child,&status,0)<0) return -errno;
    return WIFEXITED(status) && WEXITSTATUS(status)==0 ? 0 : -EIO;
}

static int h1_rewrite(struct io_uring *ring,int fd,uint64_t pages,
                      uint64_t *reads,uint64_t *writes)
{
    struct slot s={0};
    if (posix_memalign(&s.buf,BS,BS)) return -ENOMEM;
    for (uint64_t i=0;i<pages/16;i++) {
        s.lpn=pages/4+(i*85+42)%(pages/4);
        s.pid=2;
        int rc=submit_io(ring,fd,&s,2);
        if (rc) { free(s.buf);return rc; }
        struct slot *got;uint64_t latency;
        rc=wait_one(ring,&got,&latency);
        if (rc || got!=&s) {free(s.buf);return rc?rc:-EIO;}
        (*reads)++;
        rc=submit_io(ring,fd,&s,1);
        if (rc) {free(s.buf);return rc;}
        rc=wait_one(ring,&got,&latency);
        if (rc || got!=&s) {free(s.buf);return rc?rc:-EIO;}
        (*writes)++;
    }
    free(s.buf);
    return 0;
}

int main(int argc,char **argv)
{
    struct h1_opts x=h1_parse(argc,argv);
    uint64_t logical=UINT64_C(14695981039346656037),
             pid_hash=UINT64_C(14695981039346656037),
             b_count=0,boundary=x.never?UINT64_MAX:0;
    uint64_t region_counts[3]={0};
    for (uint64_t i=0;i<x.writes;i++) {
        uint64_t lpn;uint8_t region;
        h1_request(&x,i,&lpn,&region);
        logical=hash_u64(hash_u64(logical,i),lpn);
        region_counts[region]++;
        uint16_t pid=region==0?0:(region==2?1:
                     ((!strcmp(x.mode,"soft") && (x.never || b_count<x.delay_b))?1:2));
        pid_hash=hash_u64(pid_hash,pid);
        if (region==1) {
            b_count++;
            if (!x.never && b_count==x.delay_b) boundary=i+1;
        }
    }
    if (!x.never && x.delay_b && boundary==0) h1_usage();
    if (x.dry_run) {
        printf("{\"logical_hash\":\"%016" PRIx64 "\",\"pid_hash\":\"%016" PRIx64
               "\",\"boundary_global\":%" PRIu64 ",\"B\":%" PRIu64 "}\n",
               logical,pid_hash,boundary,b_count);
        return 0;
    }
    int fd=open(x.device,O_RDWR);
    if (fd<0) {perror(x.device);return 1;}
    struct io_uring ring;
    struct io_uring_params params={.flags=IORING_SETUP_SQE128|IORING_SETUP_CQE32};
    int rc=io_uring_queue_init_params(x.qd,&ring,&params);
    if (rc) goto fail_ring;
    struct slot slots[32]={0};
    for (unsigned j=0;j<x.qd;j++) if (posix_memalign(&slots[j].buf,BS,BS)) {rc=-ENOMEM;goto fail;}
    uint64_t *latencies=malloc(x.writes*sizeof(*latencies));
    if (!latencies) {rc=-ENOMEM;goto fail;}
    uint64_t begin=now_ns(),pace_origin=begin,paused_ns=0;
    uint64_t issued=0,done=0,seen_b=0,reads=0,rewrite_writes=0,active=0;
    uint64_t stop_ns=0,drain_ns=0,pre_ns=0,rewrite_ns=0,post_ns=0,resume_ns=0;
    bool intervened=!strcmp(x.mode,"soft");
    while (done<x.writes) {
        if (!intervened && issued==boundary) {
            stop_ns=now_ns();
            while (active) {
                struct slot *got;uint64_t lat;
                rc=wait_one(&ring,&got,&lat);
                if (rc) goto fail_runtime;
                latencies[done++]=lat;got->busy=false;active--;
            }
            drain_ns=now_ns();
            if (done!=issued) {rc=-EIO;goto fail_runtime;}
            rc=h1_hook(x.hook,"pre"); if (rc) goto fail_runtime;
            pre_ns=now_ns();
            if (!strcmp(x.mode,"rewrite25")) {
                rc=h1_rewrite(&ring,fd,x.pages,&reads,&rewrite_writes);
                if (rc) goto fail_runtime;
            }
            rewrite_ns=now_ns();
            rc=h1_hook(x.hook,"post"); if (rc) goto fail_runtime;
            post_ns=now_ns();
            resume_ns=now_ns();
            paused_ns+=resume_ns-stop_ns;
            pace_origin+=resume_ns-stop_ns;
            /* Start a fresh pacing interval; no catch-up credit is retained. */
            uint64_t next_due=resume_ns+1000000000ull/x.rate;
            uint64_t nominal=pace_origin+issued*1000000000ull/x.rate;
            if (nominal<next_due) pace_origin+=next_due-nominal;
            intervened=true;
        }
        while (active<x.qd && issued<x.writes && (intervened || issued<boundary)) {
            struct slot *s=NULL;
            for (unsigned j=0;j<x.qd;j++) if (!slots[j].busy) {s=&slots[j];break;}
            if (!s) {rc=-EFAULT;goto fail_runtime;}
            h1_request(&x,issued,&s->lpn,&s->region);
            s->pid=s->region==0?0:(s->region==2?1:
                  ((!strcmp(x.mode,"soft") && (x.never || seen_b<x.delay_b))?1:2));
            if (s->region==1) seen_b++;
            s->ordinal=issued;
            memset(s->buf,0,BS);
            ((uint64_t *)s->buf)[0]=s->lpn;
            ((uint64_t *)s->buf)[1]=issued%x.pages;
            pace(pace_origin,issued,x.rate);
            rc=submit_io(&ring,fd,s,1);
            if (rc) goto fail_runtime;
            s->busy=true;issued++;active++;
        }
        if (active) {
            struct slot *got;uint64_t lat;
            rc=wait_one(&ring,&got,&lat);
            if (rc) goto fail_runtime;
            latencies[done++]=lat;got->busy=false;active--;
        }
    }
    uint64_t elapsed=now_ns()-begin;
    qsort(latencies,x.writes,sizeof(*latencies),compare_u64);
    printf("{\"writes\":%" PRIu64 ",\"completed\":%" PRIu64 ",\"B\":%" PRIu64
           ",\"logical_hash\":\"%016" PRIx64 "\",\"pid_hash\":\"%016" PRIx64
           "\",\"boundary_global\":%" PRIu64 ",\"intervention_submitted\":%" PRIu64
           ",\"intervention_completed\":%" PRIu64 ",\"intervention_B\":%" PRIu64
           ",\"rewrite_reads\":%" PRIu64 ",\"rewrite_writes\":%" PRIu64
           ",\"elapsed_ns\":%" PRIu64 ",\"paused_ns\":%" PRIu64
           ",\"stop_ns\":%" PRIu64 ",\"drain_ns\":%" PRIu64
           ",\"pre_ns\":%" PRIu64 ",\"rewrite_ns\":%" PRIu64
           ",\"post_ns\":%" PRIu64 ",\"resume_ns\":%" PRIu64
           ",\"p99_ns\":%" PRIu64 ",\"p999_ns\":%" PRIu64 "}\n",
           x.writes,done,b_count,logical,pid_hash,boundary,
           boundary==UINT64_MAX?0:boundary,boundary==UINT64_MAX?0:boundary,
           x.delay_b,reads,rewrite_writes,elapsed,paused_ns,stop_ns,drain_ns,
           pre_ns,rewrite_ns,post_ns,resume_ns,
           latencies[(x.writes*99+99)/100-1],latencies[(x.writes*999+999)/1000-1]);
    free(latencies);
    for (unsigned j=0;j<x.qd;j++) free(slots[j].buf);
    io_uring_queue_exit(&ring);close(fd);return 0;
fail_runtime:
    fprintf(stderr,"H1 I/O failed issued=%" PRIu64 " done=%" PRIu64 " active=%" PRIu64 " rc=%d\n",issued,done,active,rc);
    free(latencies);
fail:
    for (unsigned j=0;j<x.qd;j++) free(slots[j].buf);
    io_uring_queue_exit(&ring);
fail_ring:
    close(fd);return 1;
}
