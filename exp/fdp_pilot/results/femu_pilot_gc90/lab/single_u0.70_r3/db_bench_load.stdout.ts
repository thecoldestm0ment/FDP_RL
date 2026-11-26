1795576151.272	Initializing RocksDB Options from the specified file
1795576151.273	Initializing RocksDB Options from command-line flags
1795576151.355	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795576151.355	Values:     1024 bytes each (512 bytes after compression)
1795576151.355	Entries:    11678215
1795576151.355	Prefix:    0 bytes
1795576151.355	Keys per prefix:    0
1795576151.355	RawSize:    11582.7 MB (estimated)
1795576151.355	FileSize:   5880.4 MB (estimated)
1795576151.355	Write rate: 0 bytes/second
1795576151.355	Read rate: 0 ops/second
1795576151.355	Compression: NoCompression
1795576151.355	Compression sampling rate: 0
1795576151.355	Memtablerep: SkipListFactory
1795576151.355	Perf Level: 1
1795576151.355	------------------------------------------------
1795576151.358	Initializing RocksDB Options from the specified file
1795576151.358	Initializing RocksDB Options from command-line flags
1795576151.369	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795582227.626	filluniquerandom :     520.307 micros/op 1921 ops/sec;    1.9 MB/s
1795582232.626	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795582232.626	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795582242.627	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795582252.626	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795582262.627	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795582272.627	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795582282.627	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795582282.627	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795582282.627	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795582282.628	STATISTICS:
1795582282.628	rocksdb.block.cache.miss COUNT : 53105262
1795582282.628	rocksdb.block.cache.hit COUNT : 0
1795582282.628	rocksdb.block.cache.add COUNT : 0
1795582282.628	rocksdb.block.cache.add.failures COUNT : 0
1795582282.628	rocksdb.block.cache.index.miss COUNT : 0
1795582282.628	rocksdb.block.cache.index.hit COUNT : 0
1795582282.628	rocksdb.block.cache.index.add COUNT : 0
1795582282.628	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795582282.628	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795582282.628	rocksdb.block.cache.filter.miss COUNT : 0
1795582282.628	rocksdb.block.cache.filter.hit COUNT : 0
1795582282.628	rocksdb.block.cache.filter.add COUNT : 0
1795582282.628	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795582282.628	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795582282.628	rocksdb.block.cache.data.miss COUNT : 53105262
1795582282.628	rocksdb.block.cache.data.hit COUNT : 0
1795582282.628	rocksdb.block.cache.data.add COUNT : 0
1795582282.628	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795582282.628	rocksdb.block.cache.bytes.read COUNT : 0
1795582282.628	rocksdb.block.cache.bytes.write COUNT : 0
1795582282.628	rocksdb.bloom.filter.useful COUNT : 0
1795582282.628	rocksdb.bloom.filter.full.positive COUNT : 0
1795582282.628	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795582282.628	rocksdb.bloom.filter.micros COUNT : 0
1795582282.628	rocksdb.persistent.cache.hit COUNT : 0
1795582282.628	rocksdb.persistent.cache.miss COUNT : 0
1795582282.628	rocksdb.sim.block.cache.hit COUNT : 0
1795582282.628	rocksdb.sim.block.cache.miss COUNT : 0
1795582282.628	rocksdb.memtable.hit COUNT : 0
1795582282.628	rocksdb.memtable.miss COUNT : 0
1795582282.628	rocksdb.l0.hit COUNT : 0
1795582282.628	rocksdb.l1.hit COUNT : 0
1795582282.628	rocksdb.l2andup.hit COUNT : 0
1795582282.628	rocksdb.compaction.key.drop.new COUNT : 0
1795582282.628	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795582282.628	rocksdb.compaction.key.drop.range_del COUNT : 0
1795582282.628	rocksdb.compaction.key.drop.user COUNT : 0
1795582282.628	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795582282.628	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795582282.628	rocksdb.compaction.cancelled COUNT : 0
1795582282.628	rocksdb.number.keys.written COUNT : 11678215
1795582282.628	rocksdb.number.keys.read COUNT : 0
1795582282.628	rocksdb.number.keys.updated COUNT : 0
1795582282.628	rocksdb.bytes.written COUNT : 12332195040
1795582282.628	rocksdb.bytes.read COUNT : 0
1795582282.628	rocksdb.number.db.seek COUNT : 0
1795582282.628	rocksdb.number.db.next COUNT : 0
1795582282.628	rocksdb.number.db.prev COUNT : 0
1795582282.628	rocksdb.number.db.seek.found COUNT : 0
1795582282.628	rocksdb.number.db.next.found COUNT : 0
1795582282.628	rocksdb.number.db.prev.found COUNT : 0
1795582282.628	rocksdb.db.iter.bytes.read COUNT : 0
1795582282.628	rocksdb.no.file.closes COUNT : 0
1795582282.628	rocksdb.no.file.opens COUNT : 485817
1795582282.628	rocksdb.no.file.errors COUNT : 0
1795582282.628	rocksdb.l0.slowdown.micros COUNT : 0
1795582282.628	rocksdb.memtable.compaction.micros COUNT : 0
1795582282.628	rocksdb.l0.num.files.stall.micros COUNT : 0
1795582282.628	rocksdb.stall.micros COUNT : 5698368069
1795582282.628	rocksdb.db.mutex.wait.micros COUNT : 0
1795582282.628	rocksdb.rate.limit.delay.millis COUNT : 0
1795582282.628	rocksdb.num.iterators COUNT : 0
1795582282.628	rocksdb.number.multiget.get COUNT : 0
1795582282.628	rocksdb.number.multiget.keys.read COUNT : 0
1795582282.628	rocksdb.number.multiget.bytes.read COUNT : 0
1795582282.628	rocksdb.number.deletes.filtered COUNT : 0
1795582282.628	rocksdb.number.merge.failures COUNT : 0
1795582282.628	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795582282.628	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795582282.628	rocksdb.number.reseeks.iteration COUNT : 0
1795582282.628	rocksdb.getupdatessince.calls COUNT : 0
1795582282.628	rocksdb.block.cachecompressed.miss COUNT : 0
1795582282.628	rocksdb.block.cachecompressed.hit COUNT : 0
1795582282.628	rocksdb.block.cachecompressed.add COUNT : 0
1795582282.628	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795582282.628	rocksdb.wal.synced COUNT : 0
1795582282.628	rocksdb.wal.bytes COUNT : 12332195040
1795582282.628	rocksdb.write.self COUNT : 11678215
1795582282.628	rocksdb.write.other COUNT : 0
1795582282.628	rocksdb.write.timeout COUNT : 0
1795582282.628	rocksdb.write.wal COUNT : 11678215
1795582282.628	rocksdb.compact.read.bytes COUNT : 223289047709
1795582282.628	rocksdb.compact.write.bytes COUNT : 223280107963
1795582282.628	rocksdb.flush.write.bytes COUNT : 12329001321
1795582282.628	rocksdb.compact.read.marked.bytes COUNT : 0
1795582282.628	rocksdb.compact.read.periodic.bytes COUNT : 0
1795582282.628	rocksdb.compact.read.ttl.bytes COUNT : 0
1795582282.628	rocksdb.compact.write.marked.bytes COUNT : 0
1795582282.628	rocksdb.compact.write.periodic.bytes COUNT : 0
1795582282.628	rocksdb.compact.write.ttl.bytes COUNT : 0
1795582282.628	rocksdb.number.direct.load.table.properties COUNT : 0
1795582282.628	rocksdb.number.superversion_acquires COUNT : 0
1795582282.628	rocksdb.number.superversion_releases COUNT : 0
1795582282.628	rocksdb.number.superversion_cleanups COUNT : 0
1795582282.628	rocksdb.number.block.compressed COUNT : 0
1795582282.628	rocksdb.number.block.decompressed COUNT : 0
1795582282.628	rocksdb.number.block.not_compressed COUNT : 0
1795582282.628	rocksdb.merge.operation.time.nanos COUNT : 0
1795582282.628	rocksdb.filter.operation.time.nanos COUNT : 0
1795582282.628	rocksdb.row.cache.hit COUNT : 0
1795582282.628	rocksdb.row.cache.miss COUNT : 0
1795582282.628	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795582282.628	rocksdb.read.amp.total.read.bytes COUNT : 0
1795582282.628	rocksdb.number.rate_limiter.drains COUNT : 0
1795582282.628	rocksdb.number.iter.skip COUNT : 0
1795582282.628	rocksdb.blobdb.num.put COUNT : 0
1795582282.628	rocksdb.blobdb.num.write COUNT : 0
1795582282.628	rocksdb.blobdb.num.get COUNT : 0
1795582282.628	rocksdb.blobdb.num.multiget COUNT : 0
1795582282.628	rocksdb.blobdb.num.seek COUNT : 0
1795582282.628	rocksdb.blobdb.num.next COUNT : 0
1795582282.628	rocksdb.blobdb.num.prev COUNT : 0
1795582282.628	rocksdb.blobdb.num.keys.written COUNT : 0
1795582282.628	rocksdb.blobdb.num.keys.read COUNT : 0
1795582282.628	rocksdb.blobdb.bytes.written COUNT : 0
1795582282.628	rocksdb.blobdb.bytes.read COUNT : 0
1795582282.628	rocksdb.blobdb.write.inlined COUNT : 0
1795582282.628	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795582282.628	rocksdb.blobdb.write.blob COUNT : 0
1795582282.628	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795582282.628	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795582282.628	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795582282.628	rocksdb.blobdb.blob.file.synced COUNT : 0
1795582282.628	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795582282.628	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795582282.628	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795582282.628	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795582282.628	rocksdb.blobdb.gc.num.files COUNT : 0
1795582282.628	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795582282.628	rocksdb.blobdb.gc.failures COUNT : 0
1795582282.628	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795582282.628	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795582282.628	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795582282.628	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795582282.628	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795582282.628	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795582282.628	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795582282.628	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795582282.628	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795582282.628	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795582282.628	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795582282.628	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795582282.628	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795582282.629	rocksdb.txn.get.tryagain COUNT : 0
1795582282.629	rocksdb.number.multiget.keys.found COUNT : 0
1795582282.629	rocksdb.num.iterator.created COUNT : 0
1795582282.629	rocksdb.num.iterator.deleted COUNT : 0
1795582282.629	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795582282.629	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795582282.629	rocksdb.block.cache.compression.dict.add COUNT : 0
1795582282.629	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795582282.629	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795582282.629	rocksdb.block.cache.add.redundant COUNT : 0
1795582282.629	rocksdb.block.cache.index.add.redundant COUNT : 0
1795582282.629	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795582282.629	rocksdb.block.cache.data.add.redundant COUNT : 0
1795582282.629	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795582282.629	rocksdb.files.marked.trash COUNT : 0
1795582282.629	rocksdb.files.deleted.immediately COUNT : 473654
1795582282.629	rocksdb.error.handler.bg.errro.count COUNT : 0
1795582282.629	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795582282.629	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795582282.629	rocksdb.error.handler.autoresume.count COUNT : 0
1795582282.629	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795582282.629	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795582282.629	rocksdb.memtable.payload.bytes.at.flush COUNT : 12236904928
1795582282.629	rocksdb.memtable.garbage.bytes.at.flush COUNT : 0
1795582282.629	rocksdb.secondary.cache.hits COUNT : 0
1795582282.629	rocksdb.verify_checksum.read.bytes COUNT : 0
1795582282.629	rocksdb.backup.read.bytes COUNT : 0
1795582282.629	rocksdb.backup.write.bytes COUNT : 0
1795582282.629	rocksdb.remote.compact.read.bytes COUNT : 0
1795582282.629	rocksdb.remote.compact.write.bytes COUNT : 0
1795582282.629	rocksdb.hot.file.read.bytes COUNT : 0
1795582282.629	rocksdb.warm.file.read.bytes COUNT : 0
1795582282.629	rocksdb.cold.file.read.bytes COUNT : 0
1795582282.629	rocksdb.hot.file.read.count COUNT : 0
1795582282.629	rocksdb.warm.file.read.count COUNT : 0
1795582282.629	rocksdb.cold.file.read.count COUNT : 0
1795582282.629	rocksdb.last.level.read.bytes COUNT : 0
1795582282.629	rocksdb.last.level.read.count COUNT : 0
1795582282.629	rocksdb.non.last.level.read.bytes COUNT : 223347203685
1795582282.629	rocksdb.non.last.level.read.count COUNT : 55048530
1795582282.629	rocksdb.block.checksum.compute.count COUNT : 54076896
1795582282.629	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.db.write.micros P50 : 2.891247 P95 : 2604.206035 P99 : 7512.514144 P100 : 16648313.000000 COUNT : 11678215 SUM : 6064057503
1795582282.629	rocksdb.compaction.times.micros P50 : 71788.310340 P95 : 161856.104011 P99 : 246185.435507 P100 : 4809516.000000 COUNT : 80818 SUM : 6261997887
1795582282.629	rocksdb.compaction.times.cpu_micros P50 : 60283.356436 P95 : 108701.063547 P99 : 185525.388601 P100 : 4806487.000000 COUNT : 80818 SUM : 5085300585
1795582282.629	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.table.sync.micros P50 : 9313.636364 P95 : 21796.250000 P99 : 39240.000000 P100 : 297600.000000 COUNT : 5952 SUM : 65064025
1795582282.629	rocksdb.compaction.outfile.sync.micros P50 : 2713.408916 P95 : 7121.347862 P99 : 9610.822001 P100 : 468362.000000 COUNT : 479865 SUM : 1567134556
1795582282.629	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.manifest.file.sync.micros P50 : 484.835313 P95 : 579.187095 P99 : 1343.682927 P100 : 398170.000000 COUNT : 91603 SUM : 74864967
1795582282.629	rocksdb.table.open.io.micros P50 : 245.166002 P95 : 490.397919 P99 : 697.716654 P100 : 331753.000000 COUNT : 485817 SUM : 142135698
1795582282.629	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.read.block.compaction.micros P50 : 44.886448 P95 : 102.792102 P99 : 209.245873 P100 : 464174.000000 COUNT : 53105262 SUM : 3085350866
1795582282.629	rocksdb.read.block.get.micros P50 : 54.821912 P95 : 103.112241 P99 : 228.505887 P100 : 120487.000000 COUNT : 485817 SUM : 30552753
1795582282.629	rocksdb.write.raw.block.micros P50 : 0.537577 P95 : 1.601965 P99 : 35.726964 P100 : 22211.000000 COUNT : 57499245 SUM : 105482547
1795582282.629	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.numfiles.in.singlecompaction P50 : 4.657824 P95 : 9.466157 P99 : 9.953284 P100 : 154.000000 COUNT : 96366 SUM : 476872
1795582282.629	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.db.write.stall P50 : 0.584987 P95 : 2599.801153 P99 : 6710.543222 P100 : 16648160.000000 COUNT : 11292823 SUM : 5699331380
1795582282.629	rocksdb.sst.read.micros P50 : 44.575133 P95 : 102.364360 P99 : 208.668746 P100 : 464170.000000 COUNT : 55048530 SUM : 3153110551
1795582282.629	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.bytes.per.write P50 : 1056.000000 P95 : 1056.000000 P99 : 1056.000000 P100 : 1056.000000 COUNT : 11678215 SUM : 12332195040
1795582282.629	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.db.flush.micros P50 : 71875.000000 P95 : 269038.709677 P99 : 368878.709677 P100 : 579667.000000 COUNT : 5952 SUM : 553596799
1795582282.629	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795582282.629	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 461324 SUM : 0
1795582282.629	
