1795446131.217	Initializing RocksDB Options from the specified file
1795446131.217	Initializing RocksDB Options from command-line flags
1795446139.011	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795446139.011	Values:     1024 bytes each (512 bytes after compression)
1795446139.011	Entries:    11678215
1795446139.011	Prefix:    0 bytes
1795446139.011	Keys per prefix:    0
1795446139.011	RawSize:    11582.7 MB (estimated)
1795446139.011	FileSize:   5880.4 MB (estimated)
1795446139.011	Write rate: 0 bytes/second
1795446139.011	Read rate: 0 ops/second
1795446139.011	Compression: NoCompression
1795446139.011	Compression sampling rate: 0
1795446139.011	Memtablerep: SkipListFactory
1795446139.011	Perf Level: 1
1795446139.011	------------------------------------------------
1795446139.011	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795466510.565	overwrite    :    3487.251 micros/op 1146 ops/sec;    1.1 MB/s
1795466515.566	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795466515.570	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466525.570	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466535.606	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466545.604	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466555.604	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466565.604	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466575.604	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795466575.604	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795466575.604	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795466575.605	
1795466575.605	Level Files Size(MB)
1795466575.605	--------------------
1795466575.605	  0        1        2
1795466575.605	  1        6        2
1795466575.606	  2       59       25
1795466575.606	  3      596      250
1795466575.606	  4     5558     2500
1795466575.606	  5    25910    11771
1795466575.606	  6        0        0
1795466575.606	
1795466575.610	
1795466575.610	
1795466575.610	** Compaction Stats [default] **
1795466575.610	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795466575.610	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795466575.610	  L0      1/0    1.88 MB   0.8      0.1     0.0      0.1      23.0     23.0       0.0   1.0      0.1     28.9    814.73            387.25     13516    0.060     55K     15       0.0       0.0
1795466575.610	  L1      6/0    2.28 MB   0.9     39.7    23.0     16.8      39.7     23.0       0.0   1.7     29.5     29.5   1380.99           1318.49      6727    0.205     40M   6975       0.0       0.0
1795466575.610	  L2     59/0   24.60 MB   1.0    117.4    23.0     94.4     117.3     22.9       0.0   5.1     28.5     28.4   4224.41           4046.91     49419    0.085    119M    52K       0.0       0.0
1795466575.610	  L3    596/0   249.89 MB   1.0    148.9    22.9    126.0     148.4     22.4       0.0   6.5     28.9     28.8   5275.42           5038.31     52192    0.101    151M   525K       0.0       0.0
1795466575.610	  L4   5558/0    2.44 GB   1.0    149.8    22.4    127.4     144.8     17.4       0.0   6.5     29.2     28.2   5251.72           5014.85     51936    0.101    152M  5076K       0.0       0.0
1795466575.610	  L5  25910/0   11.49 GB   0.5     68.2    17.4     50.8      53.5      2.7       0.0   3.1     32.8     25.7   2133.28           2053.93     37143    0.057     69M    14M       0.0       0.0
1795466575.610	 Sum  32130/0   14.21 GB   0.0    524.2   108.7    415.4     526.9    111.4       0.0  22.9     28.1     28.3  19080.54          17859.74    210933    0.090    532M    20M       0.0       0.0
1795466575.610	 Int      0/0    0.00 KB   0.0      0.5     0.1      0.4       0.4      0.0       0.0 443971228.0     29.2     23.7     17.88             17.60       223    0.080    517K    97K       0.0       0.0
1795466575.610	
1795466575.610	** Compaction Stats [default] **
1795466575.610	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795466575.610	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795466575.610	 Low      0/0    0.00 KB   0.0    524.2   108.7    415.4     503.9     88.5       0.0   0.0     29.4     28.2  18269.08          17475.66    197423    0.093    532M    20M       0.0       0.0
1795466575.610	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     29.0    811.46            384.09     13509    0.060       0      0       0.0       0.0
1795466575.610	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    217.0      0.00              0.00         1    0.004       0      0       0.0       0.0
1795466575.610	
1795466575.610	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795466575.610	
1795466575.610	Uptime(secs): 20444.4 total, 33.2 interval
1795466575.610	Flush(GB): cumulative 22.965, interval 0.000
1795466575.610	AddFile(GB): cumulative 0.000, interval 0.000
1795466575.610	AddFile(Total Files): cumulative 0, interval 0
1795466575.610	AddFile(L0 Files): cumulative 0, interval 0
1795466575.610	AddFile(Keys): cumulative 0, interval 0
1795466575.610	Cumulative compaction: 526.87 GB write, 26.39 MB/s write, 524.15 GB read, 26.25 MB/s read, 19080.5 seconds
1795466575.610	Interval compaction: 0.41 GB write, 12.77 MB/s write, 0.51 GB read, 15.74 MB/s read, 17.9 seconds
1795466575.610	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 238296 slowdown for pending_compaction_bytes, 19 memtable_compaction, 2 memtable_slowdown, interval 47 total count
1795466575.610	Block cache LRUCache@0x5b41a7cf2a70#40444 capacity: 8.00 MB collections: 114 last_copies: 1 last_secs: 6e-05 secs_since: 93
1795466575.610	Block cache entry stats(count,size,portion): Misc(1,0.00 KB,0%)
1795466575.610	
1795466575.610	** File Read Latency Histogram By Level [default] **
1795466575.610	** Level 0 read latency histogram (micros):
1795466575.610	Count: 5911744 Average: 62.9051  StdDev: 298.05
1795466575.610	Min: 7  Median: 45.6138  Max: 129010
1795466575.610	Percentiles: P50: 45.61 P75: 59.55 P99: 223.50 P99.9: 379.61 P99.99: 839.73
1795466575.610	------------------------------------------------------
1795466575.610	(       6,      10 ]        1   0.000%   0.000% 
1795466575.610	(      10,      15 ]        4   0.000%   0.000% 
1795466575.610	(      15,      22 ]        2   0.000%   0.000% 
1795466575.610	(      34,      51 ]  4326710  73.188%  73.189% ###############
1795466575.610	(      51,      76 ]   313156   5.297%  78.486% #
1795466575.610	(      76,     110 ]   963224  16.293%  94.779% ###
1795466575.610	(     110,     170 ]   198003   3.349%  98.128% #
1795466575.610	(     170,     250 ]    77053   1.303%  99.432% 
1795466575.610	(     250,     380 ]    27763   0.470%  99.901% 
1795466575.610	(     380,     580 ]     4566   0.077%  99.979% 
1795466575.610	(     580,     870 ]      749   0.013%  99.991% 
1795466575.610	(     870,    1300 ]      208   0.004%  99.995% 
1795466575.610	(    1300,    1900 ]       66   0.001%  99.996% 
1795466575.610	(    1900,    2900 ]       35   0.001%  99.997% 
1795466575.610	(    2900,    4400 ]       33   0.001%  99.997% 
1795466575.610	(    4400,    6600 ]       11   0.000%  99.997% 
1795466575.610	(    6600,    9900 ]       11   0.000%  99.997% 
1795466575.610	(    9900,   14000 ]       16   0.000%  99.998% 
1795466575.610	(   14000,   22000 ]       12   0.000%  99.998% 
1795466575.610	(   22000,   33000 ]       11   0.000%  99.998% 
1795466575.610	(   33000,   50000 ]       36   0.001%  99.999% 
1795466575.610	(   50000,   75000 ]       52   0.001% 100.000% 
1795466575.610	(   75000,  110000 ]       15   0.000% 100.000% 
1795466575.610	(  110000,  170000 ]        8   0.000% 100.000% 
1795466575.610	
1795466575.610	** Level 1 read latency histogram (micros):
1795466575.610	Count: 10507353 Average: 61.9914  StdDev: 313.46
1795466575.610	Min: 6  Median: 45.4737  Max: 178704
1795466575.610	Percentiles: P50: 45.47 P75: 55.26 P99: 210.59 P99.9: 371.84 P99.99: 824.97
1795466575.610	------------------------------------------------------
1795466575.610	(       4,       6 ]        9   0.000%   0.000% 
1795466575.610	(       6,      10 ]       77   0.001%   0.001% 
1795466575.610	(      10,      15 ]       44   0.000%   0.001% 
1795466575.610	(      15,      22 ]        5   0.000%   0.001% 
1795466575.610	(      22,      34 ]        1   0.000%   0.001% 
1795466575.610	(      34,      51 ]  7783931  74.081%  74.082% ###############
1795466575.610	(      51,      76 ]   565397   5.381%  79.463% #
1795466575.610	(      76,     110 ]  1659737  15.796%  95.259% ###
1795466575.610	(     110,     170 ]   331482   3.155%  98.414% #
1795466575.610	(     170,     250 ]   121414   1.156%  99.569% 
1795466575.610	(     250,     380 ]    37075   0.353%  99.922% 
1795466575.610	(     380,     580 ]     6234   0.059%  99.981% 
1795466575.610	(     580,     870 ]     1061   0.010%  99.992% 
1795466575.610	(     870,    1300 ]      337   0.003%  99.995% 
1795466575.610	(    1300,    1900 ]      106   0.001%  99.996% 
1795466575.610	(    1900,    2900 ]       84   0.001%  99.997% 
1795466575.610	(    2900,    4400 ]       76   0.001%  99.997% 
1795466575.610	(    4400,    6600 ]       10   0.000%  99.997% 
1795466575.610	(    6600,    9900 ]       21   0.000%  99.998% 
1795466575.610	(    9900,   14000 ]       17   0.000%  99.998% 
1795466575.610	(   14000,   22000 ]       13   0.000%  99.998% 
1795466575.610	(   22000,   33000 ]       36   0.000%  99.998% 
1795466575.610	(   33000,   50000 ]       68   0.001%  99.999% 
1795466575.610	(   50000,   75000 ]       79   0.001% 100.000% 
1795466575.610	(   75000,  110000 ]       45   0.000% 100.000% 
1795466575.610	(  110000,  170000 ]       11   0.000% 100.000% 
1795466575.610	(  170000,  250000 ]        1   0.000% 100.000% 
1795466575.610	
1795466575.610	** Level 2 read latency histogram (micros):
1795466575.610	Count: 31122412 Average: 62.6708  StdDev: 112.15
1795466575.610	Min: 5  Median: 45.6110  Max: 766958
1795466575.610	Percentiles: P50: 45.61 P75: 59.47 P99: 218.16 P99.9: 374.15 P99.99: 821.87
1795466575.610	------------------------------------------------------
1795466575.610	(       4,       6 ]      641   0.002%   0.002% 
1795466575.610	(       6,      10 ]     3680   0.012%   0.014% 
1795466575.610	(      10,      15 ]     1006   0.003%   0.017% 
1795466575.610	(      15,      22 ]      191   0.001%   0.018% 
1795466575.610	(      22,      34 ]       60   0.000%   0.018% 
1795466575.610	(      34,      51 ] 22775492  73.180%  73.198% ###############
1795466575.610	(      51,      76 ]  1654775   5.317%  78.515% #
1795466575.610	(      76,     110 ]  5125304  16.468%  94.983% ###
1795466575.610	(     110,     170 ]  1016959   3.268%  98.251% #
1795466575.610	(     170,     250 ]   387165   1.244%  99.495% 
1795466575.610	(     250,     380 ]   131959   0.424%  99.919% 
1795466575.610	(     380,     580 ]    19207   0.062%  99.981% 
1795466575.610	(     580,     870 ]     3430   0.011%  99.992% 
1795466575.610	(     870,    1300 ]     1220   0.004%  99.996% 
1795466575.610	(    1300,    1900 ]      424   0.001%  99.997% 
1795466575.610	(    1900,    2900 ]      308   0.001%  99.998% 
1795466575.610	(    2900,    4400 ]      242   0.001%  99.999% 
1795466575.610	(    4400,    6600 ]       45   0.000%  99.999% 
1795466575.610	(    6600,    9900 ]       41   0.000%  99.999% 
1795466575.610	(    9900,   14000 ]       53   0.000%  99.999% 
1795466575.610	(   14000,   22000 ]       70   0.000% 100.000% 
1795466575.610	(   22000,   33000 ]       68   0.000% 100.000% 
1795466575.610	(   33000,   50000 ]      196   0.001% 100.000% 
1795466575.610	(   50000,   75000 ]      214   0.001% 100.001% 
1795466575.610	(   75000,  110000 ]      114   0.000% 100.001% 
1795466575.610	(  110000,  170000 ]       39   0.000% 100.002% 
1795466575.610	(  170000,  250000 ]        1   0.000% 100.002% 
1795466575.610	(  570000,  860000 ]        1   0.000% 100.002% 
1795466575.610	
1795466575.610	** Level 3 read latency histogram (micros):
1795466575.610	Count: 39379626 Average: 63.0999  StdDev: 37.27
1795466575.610	Min: 5  Median: 45.7359  Max: 131324
1795466575.610	Percentiles: P50: 45.74 P75: 62.85 P99: 222.01 P99.9: 369.10 P99.99: 703.69
1795466575.610	------------------------------------------------------
1795466575.610	(       4,       6 ]      397   0.001%   0.001% 
1795466575.610	(       6,      10 ]     1958   0.005%   0.006% 
1795466575.610	(      10,      15 ]      527   0.001%   0.007% 
1795466575.610	(      15,      22 ]      109   0.000%   0.008% 
1795466575.610	(      22,      34 ]       46   0.000%   0.008% 
1795466575.610	(      34,      51 ] 28517185  72.416%  72.424% ##############
1795466575.610	(      51,      76 ]  2140216   5.435%  77.859% #
1795466575.610	(      76,     110 ]  6596801  16.752%  94.610% ###
1795466575.610	(     110,     170 ]  1359064   3.451%  98.062% #
1795466575.610	(     170,     250 ]   568409   1.443%  99.505% 
1795466575.610	(     250,     380 ]   169771   0.431%  99.936% 
1795466575.610	(     380,     580 ]    19969   0.051%  99.987% 
1795466575.610	(     580,     870 ]     2898   0.007%  99.994% 
1795466575.610	(     870,    1300 ]     1036   0.003%  99.997% 
1795466575.610	(    1300,    1900 ]      407   0.001%  99.998% 
1795466575.610	(    1900,    2900 ]      322   0.001%  99.999% 
1795466575.610	(    2900,    4400 ]      210   0.001%  99.999% 
1795466575.610	(    4400,    6600 ]       43   0.000%  99.999% 
1795466575.610	(    6600,    9900 ]       61   0.000%  99.999% 
1795466575.610	(    9900,   14000 ]       60   0.000% 100.000% 
1795466575.610	(   14000,   22000 ]       76   0.000% 100.000% 
1795466575.610	(   22000,   33000 ]       82   0.000% 100.000% 
1795466575.610	(   33000,   50000 ]      277   0.001% 100.001% 
1795466575.610	(   50000,   75000 ]      200   0.001% 100.001% 
1795466575.610	(   75000,  110000 ]      148   0.000% 100.002% 
1795466575.610	(  110000,  170000 ]       47   0.000% 100.002% 
1795466575.610	
1795466575.610	** Level 4 read latency histogram (micros):
1795466575.610	Count: 38335537 Average: 62.7252  StdDev: 69.77
1795466575.610	Min: 5  Median: 45.6924  Max: 133612
1795466575.610	Percentiles: P50: 45.69 P75: 61.46 P99: 217.45 P99.9: 369.11 P99.99: 782.92
1795466575.610	------------------------------------------------------
1795466575.610	(       4,       6 ]      456   0.001%   0.001% 
1795466575.610	(       6,      10 ]     2303   0.006%   0.007% 
1795466575.610	(      10,      15 ]      620   0.002%   0.009% 
1795466575.610	(      15,      22 ]      122   0.000%   0.009% 
1795466575.610	(      22,      34 ]       54   0.000%   0.009% 
1795466575.610	(      34,      51 ] 27863495  72.683%  72.692% ###############
1795466575.610	(      51,      76 ]  2113560   5.513%  78.206% #
1795466575.610	(      76,     110 ]  6362852  16.598%  94.804% ###
1795466575.610	(     110,     170 ]  1308775   3.414%  98.218% #
1795466575.610	(     170,     250 ]   505748   1.319%  99.537% 
1795466575.610	(     250,     380 ]   151940   0.396%  99.933% 
1795466575.610	(     380,     580 ]    19638   0.051%  99.984% 
1795466575.610	(     580,     870 ]     3059   0.008%  99.992% 
1795466575.610	(     870,    1300 ]     1398   0.004%  99.996% 
1795466575.610	(    1300,    1900 ]      532   0.001%  99.997% 
1795466575.610	(    1900,    2900 ]      396   0.001%  99.998% 
1795466575.610	(    2900,    4400 ]      331   0.001%  99.999% 
1795466575.610	(    4400,    6600 ]       87   0.000% 100.000% 
1795466575.610	(    6600,    9900 ]       69   0.000% 100.000% 
1795466575.610	(    9900,   14000 ]       67   0.000% 100.000% 
1795466575.610	(   14000,   22000 ]       56   0.000% 100.000% 
1795466575.610	(   22000,   33000 ]       85   0.000% 100.000% 
1795466575.610	(   33000,   50000 ]      228   0.001% 100.001% 
1795466575.610	(   50000,   75000 ]      245   0.001% 100.002% 
1795466575.610	(   75000,  110000 ]      119   0.000% 100.002% 
1795466575.610	(  110000,  170000 ]       42   0.000% 100.002% 
1795466575.610	
1795466575.610	** Level 5 read latency histogram (micros):
1795466575.610	Count: 13562352 Average: 61.6775  StdDev: 280.62
1795466575.610	Min: 5  Median: 45.3481  Max: 133741
1795466575.610	Percentiles: P50: 45.35 P75: 51.44 P99: 218.80 P99.9: 376.79 P99.99: 2295.91
1795466575.610	------------------------------------------------------
1795466575.611	(       4,       6 ]      190   0.001%   0.001% 
1795466575.611	(       6,      10 ]     1507   0.011%   0.013% 
1795466575.611	(      10,      15 ]      500   0.004%   0.016% 
1795466575.611	(      15,      22 ]       65   0.000%   0.017% 
1795466575.611	(      22,      34 ]       27   0.000%   0.017% 
1795466575.611	(      34,      51 ] 10155133  74.877%  74.894% ###############
1795466575.611	(      51,      76 ]   820708   6.051%  80.946% #
1795466575.611	(      76,     110 ]  1957391  14.433%  95.378% ###
1795466575.611	(     110,     170 ]   383929   2.831%  98.209% #
1795466575.611	(     170,     250 ]   175869   1.297%  99.506% 
1795466575.611	(     250,     380 ]    54824   0.404%  99.910% 
1795466575.611	(     380,     580 ]     6818   0.050%  99.960% 
1795466575.611	(     580,     870 ]     2062   0.015%  99.975% 
1795466575.611	(     870,    1300 ]     1361   0.010%  99.985% 
1795466575.611	(    1300,    1900 ]      434   0.003%  99.989% 
1795466575.611	(    1900,    2900 ]      449   0.003%  99.992% 
1795466575.611	(    2900,    4400 ]      414   0.003%  99.995% 
1795466575.611	(    4400,    6600 ]      235   0.002%  99.997% 
1795466575.611	(    6600,    9900 ]      144   0.001%  99.998% 
1795466575.611	(    9900,   14000 ]       50   0.000%  99.998% 
1795466575.611	(   14000,   22000 ]       28   0.000%  99.998% 
1795466575.611	(   22000,   33000 ]       22   0.000%  99.999% 
1795466575.611	(   33000,   50000 ]       76   0.001%  99.999% 
1795466575.611	(   50000,   75000 ]      105   0.001% 100.000% 
1795466575.611	(   75000,  110000 ]       31   0.000% 100.000% 
1795466575.611	(  110000,  170000 ]       16   0.000% 100.000% 
1795466575.611	
1795466575.611	
1795466575.611	** DB Stats **
1795466575.611	Uptime(secs): 20444.4 total, 33.2 interval
1795466575.611	Cumulative writes: 23M writes, 23M keys, 18M commit groups, 1.3 writes per commit group, ingest: 22.91 GB, 1.15 MB/s
1795466575.611	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.91 GB, 1.15 MB/s
1795466575.611	Cumulative stall: 04:56:47.961 H:M:S, 87.1 percent
1795466575.611	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795466575.611	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795466575.611	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795466575.611	
1795466575.611	STATISTICS:
1795466575.611	rocksdb.block.cache.miss COUNT : 133868111
1795466575.611	rocksdb.block.cache.hit COUNT : 0
1795466575.611	rocksdb.block.cache.add COUNT : 0
1795466575.611	rocksdb.block.cache.add.failures COUNT : 0
1795466575.611	rocksdb.block.cache.index.miss COUNT : 0
1795466575.611	rocksdb.block.cache.index.hit COUNT : 0
1795466575.611	rocksdb.block.cache.index.add COUNT : 0
1795466575.611	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795466575.611	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795466575.611	rocksdb.block.cache.filter.miss COUNT : 0
1795466575.611	rocksdb.block.cache.filter.hit COUNT : 0
1795466575.611	rocksdb.block.cache.filter.add COUNT : 0
1795466575.611	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795466575.611	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795466575.611	rocksdb.block.cache.data.miss COUNT : 133868111
1795466575.611	rocksdb.block.cache.data.hit COUNT : 0
1795466575.611	rocksdb.block.cache.data.add COUNT : 0
1795466575.611	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795466575.611	rocksdb.block.cache.bytes.read COUNT : 0
1795466575.611	rocksdb.block.cache.bytes.write COUNT : 0
1795466575.611	rocksdb.bloom.filter.useful COUNT : 0
1795466575.611	rocksdb.bloom.filter.full.positive COUNT : 0
1795466575.611	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795466575.611	rocksdb.bloom.filter.micros COUNT : 0
1795466575.611	rocksdb.persistent.cache.hit COUNT : 0
1795466575.611	rocksdb.persistent.cache.miss COUNT : 0
1795466575.611	rocksdb.sim.block.cache.hit COUNT : 0
1795466575.611	rocksdb.sim.block.cache.miss COUNT : 0
1795466575.611	rocksdb.memtable.hit COUNT : 0
1795466575.611	rocksdb.memtable.miss COUNT : 0
1795466575.611	rocksdb.l0.hit COUNT : 0
1795466575.611	rocksdb.l1.hit COUNT : 0
1795466575.611	rocksdb.l2andup.hit COUNT : 0
1795466575.611	rocksdb.compaction.key.drop.new COUNT : 20597377
1795466575.611	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795466575.611	rocksdb.compaction.key.drop.range_del COUNT : 0
1795466575.611	rocksdb.compaction.key.drop.user COUNT : 0
1795466575.611	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795466575.611	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795466575.611	rocksdb.compaction.cancelled COUNT : 0
1795466575.611	rocksdb.number.keys.written COUNT : 23356432
1795466575.611	rocksdb.number.keys.read COUNT : 0
1795466575.611	rocksdb.number.keys.updated COUNT : 0
1795466575.611	rocksdb.bytes.written COUNT : 24602072220
1795466575.611	rocksdb.bytes.read COUNT : 0
1795466575.611	rocksdb.number.db.seek COUNT : 0
1795466575.611	rocksdb.number.db.next COUNT : 0
1795466575.611	rocksdb.number.db.prev COUNT : 0
1795466575.611	rocksdb.number.db.seek.found COUNT : 0
1795466575.611	rocksdb.number.db.next.found COUNT : 0
1795466575.611	rocksdb.number.db.prev.found COUNT : 0
1795466575.611	rocksdb.db.iter.bytes.read COUNT : 0
1795466575.611	rocksdb.no.file.closes COUNT : 0
1795466575.611	rocksdb.no.file.opens COUNT : 1238640
1795466575.611	rocksdb.no.file.errors COUNT : 0
1795466575.611	rocksdb.l0.slowdown.micros COUNT : 0
1795466575.611	rocksdb.memtable.compaction.micros COUNT : 0
1795466575.611	rocksdb.l0.num.files.stall.micros COUNT : 0
1795466575.611	rocksdb.stall.micros COUNT : 17807961030
1795466575.611	rocksdb.db.mutex.wait.micros COUNT : 0
1795466575.611	rocksdb.rate.limit.delay.millis COUNT : 0
1795466575.611	rocksdb.num.iterators COUNT : 0
1795466575.611	rocksdb.number.multiget.get COUNT : 0
1795466575.611	rocksdb.number.multiget.keys.read COUNT : 0
1795466575.611	rocksdb.number.multiget.bytes.read COUNT : 0
1795466575.611	rocksdb.number.deletes.filtered COUNT : 0
1795466575.611	rocksdb.number.merge.failures COUNT : 0
1795466575.611	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795466575.611	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795466575.611	rocksdb.number.reseeks.iteration COUNT : 0
1795466575.611	rocksdb.getupdatessince.calls COUNT : 0
1795466575.611	rocksdb.block.cachecompressed.miss COUNT : 0
1795466575.611	rocksdb.block.cachecompressed.hit COUNT : 0
1795466575.611	rocksdb.block.cachecompressed.add COUNT : 0
1795466575.611	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795466575.611	rocksdb.wal.synced COUNT : 0
1795466575.611	rocksdb.wal.bytes COUNT : 24602072220
1795466575.611	rocksdb.write.self COUNT : 18163101
1795466575.611	rocksdb.write.other COUNT : 5193331
1795466575.611	rocksdb.write.timeout COUNT : 0
1795466575.611	rocksdb.write.wal COUNT : 23356432
1795466575.611	rocksdb.compact.read.bytes COUNT : 562706933091
1795466575.611	rocksdb.compact.write.bytes COUNT : 541061589390
1795466575.611	rocksdb.flush.write.bytes COUNT : 24661740576
1795466575.611	rocksdb.compact.read.marked.bytes COUNT : 0
1795466575.611	rocksdb.compact.read.periodic.bytes COUNT : 0
1795466575.612	rocksdb.compact.read.ttl.bytes COUNT : 0
1795466575.612	rocksdb.compact.write.marked.bytes COUNT : 0
1795466575.612	rocksdb.compact.write.periodic.bytes COUNT : 0
1795466575.612	rocksdb.compact.write.ttl.bytes COUNT : 0
1795466575.612	rocksdb.number.direct.load.table.properties COUNT : 0
1795466575.612	rocksdb.number.superversion_acquires COUNT : 0
1795466575.612	rocksdb.number.superversion_releases COUNT : 0
1795466575.612	rocksdb.number.superversion_cleanups COUNT : 0
1795466575.612	rocksdb.number.block.compressed COUNT : 0
1795466575.612	rocksdb.number.block.decompressed COUNT : 0
1795466575.612	rocksdb.number.block.not_compressed COUNT : 0
1795466575.612	rocksdb.merge.operation.time.nanos COUNT : 0
1795466575.612	rocksdb.filter.operation.time.nanos COUNT : 0
1795466575.612	rocksdb.row.cache.hit COUNT : 0
1795466575.612	rocksdb.row.cache.miss COUNT : 0
1795466575.612	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795466575.612	rocksdb.read.amp.total.read.bytes COUNT : 0
1795466575.612	rocksdb.number.rate_limiter.drains COUNT : 0
1795466575.612	rocksdb.number.iter.skip COUNT : 0
1795466575.612	rocksdb.blobdb.num.put COUNT : 0
1795466575.612	rocksdb.blobdb.num.write COUNT : 0
1795466575.612	rocksdb.blobdb.num.get COUNT : 0
1795466575.612	rocksdb.blobdb.num.multiget COUNT : 0
1795466575.612	rocksdb.blobdb.num.seek COUNT : 0
1795466575.612	rocksdb.blobdb.num.next COUNT : 0
1795466575.612	rocksdb.blobdb.num.prev COUNT : 0
1795466575.612	rocksdb.blobdb.num.keys.written COUNT : 0
1795466575.612	rocksdb.blobdb.num.keys.read COUNT : 0
1795466575.612	rocksdb.blobdb.bytes.written COUNT : 0
1795466575.612	rocksdb.blobdb.bytes.read COUNT : 0
1795466575.612	rocksdb.blobdb.write.inlined COUNT : 0
1795466575.612	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795466575.612	rocksdb.blobdb.write.blob COUNT : 0
1795466575.612	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795466575.612	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795466575.612	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795466575.612	rocksdb.blobdb.blob.file.synced COUNT : 0
1795466575.612	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795466575.612	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795466575.612	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795466575.612	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795466575.612	rocksdb.blobdb.gc.num.files COUNT : 0
1795466575.612	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795466575.612	rocksdb.blobdb.gc.failures COUNT : 0
1795466575.612	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795466575.612	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795466575.612	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795466575.612	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795466575.612	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795466575.612	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795466575.612	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795466575.612	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795466575.612	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795466575.612	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795466575.612	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795466575.612	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795466575.612	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795466575.612	rocksdb.txn.get.tryagain COUNT : 0
1795466575.612	rocksdb.number.multiget.keys.found COUNT : 0
1795466575.612	rocksdb.num.iterator.created COUNT : 0
1795466575.612	rocksdb.num.iterator.deleted COUNT : 0
1795466575.612	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795466575.612	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795466575.612	rocksdb.block.cache.compression.dict.add COUNT : 0
1795466575.612	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795466575.612	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795466575.612	rocksdb.block.cache.add.redundant COUNT : 0
1795466575.612	rocksdb.block.cache.index.add.redundant COUNT : 0
1795466575.612	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795466575.612	rocksdb.block.cache.data.add.redundant COUNT : 0
1795466575.612	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795466575.612	rocksdb.files.marked.trash COUNT : 0
1795466575.612	rocksdb.files.deleted.immediately COUNT : 1233565
1795466575.612	rocksdb.error.handler.bg.errro.count COUNT : 0
1795466575.612	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795466575.612	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795466575.612	rocksdb.error.handler.autoresume.count COUNT : 0
1795466575.612	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795466575.612	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795466575.612	rocksdb.memtable.payload.bytes.at.flush COUNT : 24476397368
1795466575.612	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1815136
1795466575.612	rocksdb.secondary.cache.hits COUNT : 0
1795466575.612	rocksdb.verify_checksum.read.bytes COUNT : 0
1795466575.612	rocksdb.backup.read.bytes COUNT : 0
1795466575.612	rocksdb.backup.write.bytes COUNT : 0
1795466575.612	rocksdb.remote.compact.read.bytes COUNT : 0
1795466575.612	rocksdb.remote.compact.write.bytes COUNT : 0
1795466575.612	rocksdb.hot.file.read.bytes COUNT : 0
1795466575.612	rocksdb.warm.file.read.bytes COUNT : 0
1795466575.612	rocksdb.cold.file.read.bytes COUNT : 0
1795466575.612	rocksdb.hot.file.read.count COUNT : 0
1795466575.612	rocksdb.warm.file.read.count COUNT : 0
1795466575.612	rocksdb.cold.file.read.count COUNT : 0
1795466575.612	rocksdb.last.level.read.bytes COUNT : 0
1795466575.612	rocksdb.last.level.read.count COUNT : 0
1795466575.612	rocksdb.non.last.level.read.bytes COUNT : 562903355753
1795466575.612	rocksdb.non.last.level.read.count COUNT : 138822671
1795466575.612	rocksdb.block.checksum.compute.count COUNT : 136345391
1795466575.612	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.db.write.micros P50 : 44.307909 P95 : 13508.023930 P99 : 49971.246928 P100 : 5207673.000000 COUNT : 23356432 SUM : 81410986167
1795466575.612	rocksdb.compaction.times.micros P50 : 87876.347630 P95 : 172229.588980 P99 : 242982.596035 P100 : 3381394.000000 COUNT : 197423 SUM : 18269080567
1795466575.612	rocksdb.compaction.times.cpu_micros P50 : 84468.347193 P95 : 167817.467724 P99 : 238176.062992 P100 : 3245775.000000 COUNT : 197423 SUM : 17475656659
1795466575.612	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.table.sync.micros P50 : 24058.491631 P95 : 48708.464774 P99 : 137162.561576 P100 : 946506.000000 COUNT : 13510 SUM : 357456006
1795466575.612	rocksdb.compaction.outfile.sync.micros P50 : 5977.010169 P95 : 13090.318084 P99 : 21852.201493 P100 : 1059770.000000 COUNT : 1200610 SUM : 7917222865
1795466575.612	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.manifest.file.sync.micros P50 : 486.417832 P95 : 655.598526 P99 : 43572.475083 P100 : 946852.000000 COUNT : 173261 SUM : 242009588
1795466575.612	rocksdb.table.open.io.micros P50 : 239.677460 P95 : 447.698957 P99 : 643.230137 P100 : 129779.000000 COUNT : 1238640 SUM : 367527406
1795466575.612	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.read.block.compaction.micros P50 : 45.952859 P95 : 115.779696 P99 : 222.664930 P100 : 766964.000000 COUNT : 133868111 SUM : 8533492092
1795466575.612	rocksdb.read.block.get.micros P50 : 54.157099 P95 : 107.311314 P99 : 227.782896 P100 : 109740.000000 COUNT : 1238640 SUM : 83506155
1795466575.612	rocksdb.write.raw.block.micros P50 : 0.535852 P95 : 1.566316 P99 : 41.350442 P100 : 1987263.000000 COUNT : 138204226 SUM : 264853671
1795466575.612	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.numfiles.in.singlecompaction P50 : 5.800981 P95 : 9.585706 P99 : 9.926719 P100 : 38.000000 COUNT : 197952 SUM : 1207039
1795466575.612	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.db.write.stall P50 : 0.646735 P95 : 3159.567050 P99 : 14070.155735 P100 : 5206671.000000 COUNT : 18141311 SUM : 17810563159
1795466575.612	rocksdb.sst.read.micros P50 : 45.631920 P95 : 112.222332 P99 : 219.025738 P100 : 766958.000000 COUNT : 138822671 SUM : 8699960305
1795466575.612	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.bytes.per.write P50 : 1123.464286 P95 : 3422.347548 P99 : 4188.000000 P100 : 4188.000000 COUNT : 18163101 SUM : 24602072220
1795466575.612	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.db.flush.micros P50 : 55292.553191 P95 : 128212.171053 P99 : 219485.714286 P100 : 5080992.000000 COUNT : 13509 SUM : 811459489
1795466575.612	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466575.612	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1206510 SUM : 0
1795466575.612	
