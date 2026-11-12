/* liblinebuf.so: db_bench stdout 을 줄 단위 버퍼로 (LD_PRELOAD).
 *   db_bench 7.2.2 는 결과 줄(Report) 뒤엔 fflush 하지만 "waitforcompaction(...): started / active / finished"
 *   줄은 안 함 -> 파일·파이프로 받으면 늦게 나와 대기 끝 경계 시각이 틀어짐.
 * stdbuf 안 쓰는 이유: 이 PC 의 stdbuf(uutils coreutils 0.8.0)가 LD_PRELOAD 를 덮어써 libnofsync.so 가 빠짐
 *   (fsync 200번: nofsync 0 ms, stdbuf+nofsync 1291 ms 로 확인).
 * 빌드: gcc -O2 -shared -fPIC -o liblinebuf.so linebuf.c   (없으면 lib/runlib.sh 가 빌드) */
#include <stdio.h>
__attribute__((constructor)) static void linebuf_init(void) { setvbuf(stdout, NULL, _IOLBF, 0); }
