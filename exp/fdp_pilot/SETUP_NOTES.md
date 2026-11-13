# 연구실 서버 준비 메모

2026-11-13. 한 컴퓨터 안에서 모든 사용률·정책을 실행하고 판정한다. 이 문서는 환경 준비 안내이며 실험 시작 지시가 아니다. 본 실행 순서는 [README.md](README.md)에 있다.

## 현재 확인과 미확인

연구실 서버의 사양·계정 정보는 공개 저장소에 적지 않음 (개인 노트에 기록). 확인할 것: 일반 계정이 sudo 권한 없이 `/dev/kvm` 을 읽고 쓸 수 있는지. 그룹 가입만으로 실행 권한이 확인된 것은 아님.

홈에는 오래된 FDP_RL 폴더와 u20s.qcow2/femu-vm.tar.xz가 있다. 해당 폴더에서 현재 FEMU 바이너리는 발견되지 않았다. **기존 폴더·이미지를 삭제하거나 덮어쓰지 말고**, 먼저 저장소/이미지 내용과 공용 실행 경로를 확인한다. qcow2 파일명이나 생성 날짜만으로 guest OS·kernel을 확정할 수 없다.

일반 계정으로 QEMU를 빌드하는 데 전체 sudo 권한이 필요하지는 않다. KVM을 이용해 실행하려면 관리자에게 허용받은 KVM 접근 또는 root 실행 경로가 필요하다. root 소유의 디렉터리/파일을 일반 계정으로 실행하는 것만으로 root 권한이 생기지는 않는다. 공용 실행기를 쓴다면 run마다 재시작·UUID 확인·허용된 종료까지 가능한지 확인한다. 관리자 승인 없이 실행 파일 권한을 바꾸지 않는다.

## 의존성

호스트 FEMU 빌드에 필요한 Ubuntu 패키지:

```text
build-essential pkg-config python3-venv python3-pip python3-setuptools
ninja-build libglib2.0-dev libfdt-dev libpixman-1-dev zlib1g-dev
libdw-dev libaio-dev libslirp-dev libnuma-dev
```

이미 설치돼 있으면 사용자 홈에서 빌드할 수 있다. 없고 sudo가 없으면 관리자에게 필요한 패키지만 요청한다. 실험용 머신을 위해 전체 sudo 권한을 요청할 필요는 없다. 관리자 승인된 권한 경로와 패키지가 준비된 뒤, 현재 수정본을 **새 폴더**에 배치한다.

게스트에는 git, build-essential, cmake, python3, pkg-config, meson, ninja-build, libgflags-dev, libsnappy-dev, liblz4-dev, libzstd-dev, zlib1g-dev, liburing-dev, FDP를 지원하는 nvme-cli 및 xNVMe가 필요하다. guest OS24.04/kernel6.8 계열과 도구 버전을 실행 전에 기록한다. 오래된 u20s 이미지는 이 조건을 확인하기 전에는 사용하지 않는다.

xNVMe는 검증한 한 버전으로 고정한다. 기존 준비 환경에서 v0.7.5를 사용했지만 이 저장소가 자동 설치하지는 않는다. 설치 버전과 build 옵션을 기록하고 guest의 `pkg-config --modversion xnvme`가 성공해야 한다. 사용자 prefix에 설치한 경우 실제 prefix에 맞게 PKG_CONFIG_PATH와 런타임 라이브러리 검색 경로를 지정한다. host에 설치한 xNVMe가 guest에 자동으로 설치되는 것은 아니다.

## 빌드와 경로

호스트의 FEMU 소스와 게스트의 실험 스크립트는 같은 수정본을 사용한다. 이번 수정이 아직 원격 저장소에 배포되지 않았다면 예전 branch를 clone한 것만으로 최신 수정본이 되지는 않는다. 전달받은 패치/소스의 commit·파일 hash를 확인한다.

호스트 빌드 예시는 새 소스 폴더의 `build-femu`에서 다음과 같다. 기존 빌드가 있는 경로에 그대로 적용하지 않는다.

```bash
../configure --enable-kvm --target-list=x86_64-softmmu \
  --enable-slirp --disable-libnfs --disable-libiscsi --disable-curl
make -j8
```

게스트 실험 폴더에서는:

```bash
JOBS=8 ./00_build.sh femu
```

빌드가 성공하면 `db_bench_torfs`와 `db_bench_torfs.build.json`을 함께 유지한다. 중간 실패한 tree는 자동 삭제하지 않는다. 원인을 확인하거나 새 WORK에서 다시 빌드한다.

호스트 config에서 채울 항목:

```bash
FEMU_BIN=/실제/새소스/build-femu/qemu-system-x86_64
FEMU_GUEST_IMAGE=/실제/검증한/guest.qcow2
GUEST_SSH="femu@localhost"
GUEST_SSH_OPTS="-p 8080 -i /실제/게스트키 -o IdentitiesOnly=yes"
GUEST_DIR="/home/femu/실제저장소/exp/fdp_pilot"
```

FEMU_SUDO=1은 현재 기본값이지만 실제 sudo 실행 권한이 있어야 한다. sudo가 없는 계정에서는 이 기본값만으로 동작하지 않는다. 일반 계정에 KVM 접근이 허용된 경우 FEMU_SUDO=0을 사용한다. 기관 공용 실행기를 쓴다면 그 실행기가 PILOT_POLICY와 FEMU_RUN_ID를 전달하고 foreground로 실행하며, 허용된 종료 방법도 지원해야 한다.

게스트 CPU4·메모리8GiB, 장치24GiB 파일 backend는 모든 정책에서 고정한다. RAM이 많다는 이유로 run 중 또는 정책별로 바꾸지 않는다. 서버의 실험 전용 작업 디렉터리와 충분한 디스크 여유, 장시간 실행 가능한 자원 사용 범위를 확인한다.

## 실행 유지와 회수

SSH로 접속한 서버의 tmux 안에서 호스트 loop를 실행하면 접속 종료와 실험 실행을 분리할 수 있다. 서버 재부팅이나 강제 종료를 복구하는 기능은 아니다. 공용 서버가 scheduler를 사용한다면 해당 자원 할당 규칙을 따른다.

새 결과 폴더를 사용하고 작은 시험을 먼저 끝낸다. 완료 후 결과 루트 전체를 회수한다. `summary.txt`만 가져오거나 host_logs를 빼먹지 않는다. 계정 비밀번호나 개인 SSH키는 결과/manifest에 포함하지 않는다.
