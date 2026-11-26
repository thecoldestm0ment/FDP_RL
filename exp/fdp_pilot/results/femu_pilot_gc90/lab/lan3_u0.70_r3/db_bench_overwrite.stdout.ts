1795582343.996	Initializing RocksDB Options from the specified file
1795582343.996	Initializing RocksDB Options from command-line flags
1795582351.789	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795582351.789	Values:     1024 bytes each (512 bytes after compression)
1795582351.789	Entries:    11678215
1795582351.789	Prefix:    0 bytes
1795582351.789	Keys per prefix:    0
1795582351.789	RawSize:    11582.7 MB (estimated)
1795582351.789	FileSize:   5880.4 MB (estimated)
1795582351.789	Write rate: 0 bytes/second
1795582351.789	Read rate: 0 ops/second
1795582351.789	Compression: NoCompression
1795582351.789	Compression sampling rate: 0
1795582351.789	Memtablerep: SkipListFactory
1795582351.789	Perf Level: 1
1795582351.789	------------------------------------------------
1795582351.789	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795605020.871	overwrite    :    3877.039 micros/op 1030 ops/sec;    1.0 MB/s
1795605025.871	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795605025.872	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795605035.872	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795605045.872	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795605055.901	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795605065.901	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795605075.901	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795605085.901	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795605095.901	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795605095.901	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795605095.901	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795605095.902	
1795605095.902	Level Files Size(MB)
1795605095.902	--------------------
1795605095.902	  0        0        0
1795605095.902	  1        5        2
1795605095.902	  2       59       25
1795605095.902	  3      602      250
1795605095.902	  4     5525     2500
1795605095.902	  5    25838    11770
1795605095.902	  6        0        0
1795605095.902	
1795605095.907	
1795605095.907	
1795605095.907	** Compaction Stats [default] **
1795605095.907	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795605095.907	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795605095.907	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.0     26.3    895.70            394.93     13510    0.066     15K      3       0.0       0.0
1795605095.907	  L1      5/0    2.11 MB   0.8     39.7    23.0     16.7      39.7     23.0       0.0   1.7     28.5     28.5   1426.57           1351.68      6731    0.212     40M   6875       0.0       0.0
1795605095.907	  L2     59/0   24.60 MB   1.0    117.4    23.0     94.5     117.4     22.9       0.0   5.1     27.6     27.6   4355.43           4136.97     49433    0.088    119M    52K       0.0       0.0
1795605095.907	  L3    602/0   249.77 MB   1.0    148.9    22.9    126.0     148.4     22.4       0.0   6.5     27.9     27.8   5462.19           5182.59     52145    0.105    151M   526K       0.0       0.0
1795605095.907	  L4   5525/0    2.44 GB   1.0    149.8    22.4    127.4     144.8     17.4       0.0   6.5     28.3     27.4   5412.29           5135.75     51929    0.104    152M  5078K       0.0       0.0
1795605095.907	  L5  25838/0   11.49 GB   0.5     68.2    17.4     50.8      53.5      2.7       0.0   3.1     31.8     24.9   2197.42           2102.15     37124    0.059     69M    14M       0.0       0.0
1795605095.907	 Sum  32029/0   14.21 GB   0.0    524.1   108.7    415.4     526.8    111.4       0.0  22.9     27.2     27.3  19749.60          18304.06    210872    0.094    532M    20M       0.0       0.0
1795605095.907	 Int      0/0    0.00 KB   0.0      1.0     0.2      0.8       0.8      0.0       0.0 871059038.0     26.9     21.8     38.19             35.67       457    0.084   1017K   193K       0.0       0.0
1795605095.907	
1795605095.907	** Compaction Stats [default] **
1795605095.907	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795605095.907	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795605095.907	 Low      0/0    0.00 KB   0.0    524.1   108.7    415.4     503.9     88.5       0.0   0.0     28.5     27.4  18854.63          17909.86    197364    0.096    532M    20M       0.0       0.0
1795605095.907	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     26.3    894.96            394.20     13507    0.066       0      0       0.0       0.0
1795605095.907	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    189.9      0.00              0.00         1    0.005       0      0       0.0       0.0
1795605095.907	
1795605095.907	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795605095.907	
1795605095.907	Uptime(secs): 22751.9 total, 59.4 interval
1795605095.907	Flush(GB): cumulative 22.966, interval 0.000
1795605095.907	AddFile(GB): cumulative 0.000, interval 0.000
1795605095.907	AddFile(Total Files): cumulative 0, interval 0
1795605095.907	AddFile(L0 Files): cumulative 0, interval 0
1795605095.907	AddFile(Keys): cumulative 0, interval 0
1795605095.907	Cumulative compaction: 526.83 GB write, 23.71 MB/s write, 524.12 GB read, 23.59 MB/s read, 19749.6 seconds
1795605095.907	Interval compaction: 0.81 GB write, 13.99 MB/s write, 1.00 GB read, 17.27 MB/s read, 38.2 seconds
1795605095.907	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 238286 slowdown for pending_compaction_bytes, 24 memtable_compaction, 3 memtable_slowdown, interval 277 total count
1795605095.907	Block cache LRUCache@0x5d6918742a70#40092 capacity: 8.00 MB collections: 127 last_copies: 0 last_secs: 6.9e-05 secs_since: 59
1795605095.907	Block cache entry stats(count,size,portion): Misc(3,8.34 KB,0.101852%)
1795605095.907	
1795605095.907	** File Read Latency Histogram By Level [default] **
1795605095.907	** Level 0 read latency histogram (micros):
1795605095.907	Count: 5901672 Average: 64.7470  StdDev: 281.00
1795605095.907	Min: 9  Median: 46.2170  Max: 130509
1795605095.907	Percentiles: P50: 46.22 P75: 66.56 P99: 225.09 P99.9: 397.84 P99.99: 1045.62
1795605095.907	------------------------------------------------------
1795605095.907	(       6,      10 ]        1   0.000%   0.000% 
1795605095.907	(      10,      15 ]        3   0.000%   0.000% 
1795605095.907	(      15,      22 ]        6   0.000%   0.000% 
1795605095.907	(      34,      51 ]  4106097  69.575%  69.575% ##############
1795605095.907	(      51,      76 ]   514313   8.715%  78.290% ##
1795605095.907	(      76,     110 ]   961364  16.290%  94.580% ###
1795605095.907	(     110,     170 ]   208387   3.531%  98.111% #
1795605095.907	(     170,     250 ]    76222   1.292%  99.402% 
1795605095.907	(     250,     380 ]    28946   0.490%  99.893% 
1795605095.907	(     380,     580 ]     4836   0.082%  99.975% 
1795605095.907	(     580,     870 ]      779   0.013%  99.988% 
1795605095.907	(     870,    1300 ]      313   0.005%  99.993% 
1795605095.907	(    1300,    1900 ]      123   0.002%  99.995% 
1795605095.907	(    1900,    2900 ]       72   0.001%  99.996% 
1795605095.907	(    2900,    4400 ]       47   0.001%  99.997% 
1795605095.907	(    4400,    6600 ]        9   0.000%  99.997% 
1795605095.907	(    6600,    9900 ]        9   0.000%  99.998% 
1795605095.907	(    9900,   14000 ]       10   0.000%  99.998% 
1795605095.907	(   14000,   22000 ]       15   0.000%  99.998% 
1795605095.907	(   22000,   33000 ]       18   0.000%  99.998% 
1795605095.907	(   33000,   50000 ]       46   0.001%  99.999% 
1795605095.907	(   50000,   75000 ]       35   0.001% 100.000% 
1795605095.907	(   75000,  110000 ]       14   0.000% 100.000% 
1795605095.907	(  110000,  170000 ]        7   0.000% 100.000% 
1795605095.907	
1795605095.907	** Level 1 read latency histogram (micros):
1795605095.907	Count: 10489664 Average: 64.0868  StdDev: 329.89
1795605095.907	Min: 5  Median: 46.0354  Max: 138339
1795605095.907	Percentiles: P50: 46.04 P75: 63.70 P99: 213.66 P99.9: 375.54 P99.99: 1030.81
1795605095.907	------------------------------------------------------
1795605095.907	(       4,       6 ]       10   0.000%   0.000% 
1795605095.907	(       6,      10 ]       50   0.000%   0.001% 
1795605095.907	(      10,      15 ]       45   0.000%   0.001% 
1795605095.907	(      15,      22 ]       20   0.000%   0.001% 
1795605095.907	(      22,      34 ]        8   0.000%   0.001% 
1795605095.907	(      34,      51 ]  7408142  70.623%  70.625% ##############
1795605095.907	(      51,      76 ]   903141   8.610%  79.234% ##
1795605095.907	(      76,     110 ]  1659579  15.821%  95.055% ###
1795605095.907	(     110,     170 ]   346689   3.305%  98.360% #
1795605095.907	(     170,     250 ]   122922   1.172%  99.532% 
1795605095.907	(     250,     380 ]    39937   0.381%  99.913% 
1795605095.907	(     380,     580 ]     6794   0.065%  99.978% 
1795605095.907	(     580,     870 ]     1109   0.011%  99.988% 
1795605095.907	(     870,    1300 ]      452   0.004%  99.993% 
1795605095.907	(    1300,    1900 ]      212   0.002%  99.995% 
1795605095.907	(    1900,    2900 ]      114   0.001%  99.996% 
1795605095.907	(    2900,    4400 ]      107   0.001%  99.997% 
1795605095.907	(    4400,    6600 ]       25   0.000%  99.997% 
1795605095.907	(    6600,    9900 ]       16   0.000%  99.997% 
1795605095.907	(    9900,   14000 ]       21   0.000%  99.997% 
1795605095.907	(   14000,   22000 ]       31   0.000%  99.998% 
1795605095.907	(   22000,   33000 ]       30   0.000%  99.998% 
1795605095.907	(   33000,   50000 ]       79   0.001%  99.999% 
1795605095.907	(   50000,   75000 ]       85   0.001% 100.000% 
1795605095.907	(   75000,  110000 ]       53   0.001% 100.000% 
1795605095.907	(  110000,  170000 ]       13   0.000% 100.000% 
1795605095.907	
1795605095.907	** Level 2 read latency histogram (micros):
1795605095.907	Count: 31132700 Average: 64.5500  StdDev: 133.94
1795605095.907	Min: 5  Median: 46.1954  Max: 250961
1795605095.907	Percentiles: P50: 46.20 P75: 66.16 P99: 219.98 P99.9: 376.43 P99.99: 936.76
1795605095.907	------------------------------------------------------
1795605095.907	(       4,       6 ]      139   0.000%   0.000% 
1795605095.907	(       6,      10 ]     2113   0.007%   0.007% 
1795605095.907	(      10,      15 ]     1985   0.006%   0.014% 
1795605095.907	(      15,      22 ]      387   0.001%   0.015% 
1795605095.907	(      22,      34 ]      101   0.000%   0.015% 
1795605095.907	(      34,      51 ] 21692452  69.677%  69.693% ##############
1795605095.907	(      51,      76 ]  2724526   8.751%  78.444% ##
1795605095.907	(      76,     110 ]  5102457  16.389%  94.833% ###
1795605095.907	(     110,     170 ]  1054801   3.388%  98.221% #
1795605095.907	(     170,     250 ]   387977   1.246%  99.468% 
1795605095.907	(     250,     380 ]   138436   0.445%  99.912% 
1795605095.907	(     380,     580 ]    20534   0.066%  99.978% 
1795605095.907	(     580,     870 ]     3455   0.011%  99.989% 
1795605095.907	(     870,    1300 ]     1441   0.005%  99.994% 
1795605095.907	(    1300,    1900 ]      749   0.002%  99.996% 
1795605095.907	(    1900,    2900 ]      426   0.001%  99.998% 
1795605095.907	(    2900,    4400 ]      341   0.001%  99.999% 
1795605095.907	(    4400,    6600 ]      105   0.000%  99.999% 
1795605095.907	(    6600,    9900 ]       65   0.000%  99.999% 
1795605095.907	(    9900,   14000 ]       62   0.000% 100.000% 
1795605095.907	(   14000,   22000 ]       70   0.000% 100.000% 
1795605095.907	(   22000,   33000 ]       71   0.000% 100.000% 
1795605095.907	(   33000,   50000 ]      219   0.001% 100.001% 
1795605095.907	(   50000,   75000 ]      231   0.001% 100.001% 
1795605095.907	(   75000,  110000 ]      101   0.000% 100.002% 
1795605095.907	(  110000,  170000 ]       40   0.000% 100.002% 
1795605095.907	(  170000,  250000 ]        1   0.000% 100.002% 
1795605095.907	(  250000,  380000 ]        1   0.000% 100.002% 
1795605095.907	
1795605095.907	** Level 3 read latency histogram (micros):
1795605095.907	Count: 39380723 Average: 64.9356  StdDev: 58.19
1795605095.907	Min: 5  Median: 46.3201  Max: 294655
1795605095.907	Percentiles: P50: 46.32 P75: 68.32 P99: 222.47 P99.9: 370.74 P99.99: 806.71
1795605095.907	------------------------------------------------------
1795605095.907	(       4,       6 ]       74   0.000%   0.000% 
1795605095.907	(       6,      10 ]     1351   0.003%   0.004% 
1795605095.907	(      10,      15 ]     1306   0.003%   0.007% 
1795605095.907	(      15,      22 ]      394   0.001%   0.008% 
1795605095.907	(      22,      34 ]      109   0.000%   0.008% 
1795605095.907	(      34,      51 ] 27165350  68.981%  68.990% ##############
1795605095.907	(      51,      76 ]  3417188   8.677%  77.667% ##
1795605095.907	(      76,     110 ]  6617323  16.803%  94.470% ###
1795605095.907	(     110,     170 ]  1415212   3.594%  98.064% #
1795605095.907	(     170,     250 ]   562061   1.427%  99.491% 
1795605095.907	(     250,     380 ]   173325   0.440%  99.931% 
1795605095.907	(     380,     580 ]    20602   0.052%  99.984% 
1795605095.907	(     580,     870 ]     3185   0.008%  99.992% 
1795605095.907	(     870,    1300 ]     1446   0.004%  99.995% 
1795605095.907	(    1300,    1900 ]      797   0.002%  99.997% 
1795605095.907	(    1900,    2900 ]      488   0.001%  99.999% 
1795605095.907	(    2900,    4400 ]      364   0.001% 100.000% 
1795605095.907	(    4400,    6600 ]      102   0.000% 100.000% 
1795605095.907	(    6600,    9900 ]       75   0.000% 100.000% 
1795605095.907	(    9900,   14000 ]       60   0.000% 100.000% 
1795605095.907	(   14000,   22000 ]       69   0.000% 100.000% 
1795605095.907	(   22000,   33000 ]       74   0.000% 100.001% 
1795605095.907	(   33000,   50000 ]      261   0.001% 100.001% 
1795605095.907	(   50000,   75000 ]      241   0.001% 100.002% 
1795605095.907	(   75000,  110000 ]      142   0.000% 100.002% 
1795605095.907	(  110000,  170000 ]       39   0.000% 100.002% 
1795605095.907	(  170000,  250000 ]        1   0.000% 100.002% 
1795605095.907	(  250000,  380000 ]        1   0.000% 100.002% 
1795605095.907	
1795605095.907	** Level 4 read latency histogram (micros):
1795605095.907	Count: 38342411 Average: 64.4788  StdDev: 34.46
1795605095.907	Min: 5  Median: 46.2733  Max: 473215
1795605095.907	Percentiles: P50: 46.27 P75: 67.20 P99: 217.70 P99.9: 371.09 P99.99: 898.66
1795605095.907	------------------------------------------------------
1795605095.907	(       4,       6 ]      118   0.000%   0.000% 
1795605095.907	(       6,      10 ]     1518   0.004%   0.004% 
1795605095.907	(      10,      15 ]     1443   0.004%   0.008% 
1795605095.907	(      15,      22 ]      303   0.001%   0.009% 
1795605095.907	(      22,      34 ]      118   0.000%   0.009% 
1795605095.907	(      34,      51 ] 26549563  69.243%  69.252% ##############
1795605095.907	(      51,      76 ]  3400682   8.869%  78.122% ##
1795605095.907	(      76,     110 ]  6350326  16.562%  94.684% ###
1795605095.907	(     110,     170 ]  1359028   3.544%  98.228% #
1795605095.907	(     170,     250 ]   496231   1.294%  99.523% 
1795605095.907	(     250,     380 ]   155393   0.405%  99.928% 
1795605095.907	(     380,     580 ]    20297   0.053%  99.981% 
1795605095.907	(     580,     870 ]     3433   0.009%  99.990% 
1795605095.907	(     870,    1300 ]     1857   0.005%  99.995% 
1795605095.907	(    1300,    1900 ]      932   0.002%  99.997% 
1795605095.907	(    1900,    2900 ]      562   0.001%  99.998% 
1795605095.907	(    2900,    4400 ]      369   0.001%  99.999% 
1795605095.907	(    4400,    6600 ]      150   0.000% 100.000% 
1795605095.907	(    6600,    9900 ]       83   0.000% 100.000% 
1795605095.907	(    9900,   14000 ]       58   0.000% 100.000% 
1795605095.907	(   14000,   22000 ]       68   0.000% 100.000% 
1795605095.907	(   22000,   33000 ]       86   0.000% 100.001% 
1795605095.907	(   33000,   50000 ]      220   0.001% 100.001% 
1795605095.907	(   50000,   75000 ]      238   0.001% 100.002% 
1795605095.907	(   75000,  110000 ]      108   0.000% 100.002% 
1795605095.907	(  110000,  170000 ]       38   0.000% 100.002% 
1795605095.907	(  170000,  250000 ]        3   0.000% 100.002% 
1795605095.907	(  250000,  380000 ]        2   0.000% 100.002% 
1795605095.907	(  380000,  570000 ]        1   0.000% 100.002% 
1795605095.907	
1795605095.907	** Level 5 read latency histogram (micros):
1795605095.907	Count: 13561758 Average: 63.8139  StdDev: 293.15
1795605095.907	Min: 5  Median: 46.0575  Max: 128346
1795605095.907	Percentiles: P50: 46.06 P75: 61.91 P99: 223.18 P99.9: 426.94 P99.99: 1864.27
1795605095.907	------------------------------------------------------
1795605095.907	(       4,       6 ]       54   0.000%   0.000% 
1795605095.907	(       6,      10 ]      941   0.007%   0.007% 
1795605095.907	(      10,      15 ]     1030   0.008%   0.015% 
1795605095.907	(      15,      22 ]      211   0.002%   0.016% 
1795605095.907	(      22,      34 ]       54   0.000%   0.017% 
1795605095.907	(      34,      51 ]  9557193  70.472%  70.489% ##############
1795605095.907	(      51,      76 ]  1402633  10.343%  80.831% ##
1795605095.907	(      76,     110 ]  1937094  14.284%  95.115% ###
1795605095.907	(     110,     170 ]   407626   3.006%  98.120% #
1795605095.907	(     170,     250 ]   179489   1.323%  99.444% 
1795605095.907	(     250,     380 ]    60048   0.443%  99.887% 
1795605095.907	(     380,     580 ]     7768   0.057%  99.944% 
1795605095.907	(     580,     870 ]     3194   0.024%  99.967% 
1795605095.907	(     870,    1300 ]     2464   0.018%  99.986% 
1795605095.907	(    1300,    1900 ]      641   0.005%  99.990% 
1795605095.907	(    1900,    2900 ]      491   0.004%  99.994% 
1795605095.907	(    2900,    4400 ]      416   0.003%  99.997% 
1795605095.907	(    4400,    6600 ]      214   0.002%  99.999% 
1795605095.907	(    6600,    9900 ]       83   0.001%  99.999% 
1795605095.907	(    9900,   14000 ]       17   0.000%  99.999% 
1795605095.907	(   14000,   22000 ]       21   0.000%  99.999% 
1795605095.907	(   22000,   33000 ]       27   0.000% 100.000% 
1795605095.907	(   33000,   50000 ]      106   0.001% 100.000% 
1795605095.907	(   50000,   75000 ]      100   0.001% 100.001% 
1795605095.907	(   75000,  110000 ]       43   0.000% 100.001% 
1795605095.907	(  110000,  170000 ]       13   0.000% 100.002% 
1795605095.907	
1795605095.907	
1795605095.907	** DB Stats **
1795605095.907	Uptime(secs): 22751.9 total, 59.4 interval
1795605095.907	Cumulative writes: 23M writes, 23M keys, 17M commit groups, 1.3 writes per commit group, ingest: 22.91 GB, 1.03 MB/s
1795605095.907	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.91 GB, 1.03 MB/s
1795605095.907	Cumulative stall: 05:25:31.915 H:M:S, 85.8 percent
1795605095.907	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795605095.907	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795605095.907	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795605095.907	
1795605095.908	STATISTICS:
1795605095.908	rocksdb.block.cache.miss COUNT : 133858675
1795605095.908	rocksdb.block.cache.hit COUNT : 0
1795605095.908	rocksdb.block.cache.add COUNT : 0
1795605095.908	rocksdb.block.cache.add.failures COUNT : 0
1795605095.908	rocksdb.block.cache.index.miss COUNT : 0
1795605095.908	rocksdb.block.cache.index.hit COUNT : 0
1795605095.908	rocksdb.block.cache.index.add COUNT : 0
1795605095.908	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795605095.908	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795605095.908	rocksdb.block.cache.filter.miss COUNT : 0
1795605095.908	rocksdb.block.cache.filter.hit COUNT : 0
1795605095.908	rocksdb.block.cache.filter.add COUNT : 0
1795605095.908	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795605095.908	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795605095.908	rocksdb.block.cache.data.miss COUNT : 133858675
1795605095.908	rocksdb.block.cache.data.hit COUNT : 0
1795605095.908	rocksdb.block.cache.data.add COUNT : 0
1795605095.908	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795605095.908	rocksdb.block.cache.bytes.read COUNT : 0
1795605095.908	rocksdb.block.cache.bytes.write COUNT : 0
1795605095.908	rocksdb.bloom.filter.useful COUNT : 0
1795605095.908	rocksdb.bloom.filter.full.positive COUNT : 0
1795605095.908	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795605095.908	rocksdb.bloom.filter.micros COUNT : 0
1795605095.908	rocksdb.persistent.cache.hit COUNT : 0
1795605095.908	rocksdb.persistent.cache.miss COUNT : 0
1795605095.908	rocksdb.sim.block.cache.hit COUNT : 0
1795605095.908	rocksdb.sim.block.cache.miss COUNT : 0
1795605095.908	rocksdb.memtable.hit COUNT : 0
1795605095.908	rocksdb.memtable.miss COUNT : 0
1795605095.908	rocksdb.l0.hit COUNT : 0
1795605095.908	rocksdb.l1.hit COUNT : 0
1795605095.908	rocksdb.l2andup.hit COUNT : 0
1795605095.908	rocksdb.compaction.key.drop.new COUNT : 20600151
1795605095.908	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795605095.908	rocksdb.compaction.key.drop.range_del COUNT : 0
1795605095.908	rocksdb.compaction.key.drop.user COUNT : 0
1795605095.908	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795605095.908	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795605095.908	rocksdb.compaction.cancelled COUNT : 0
1795605095.908	rocksdb.number.keys.written COUNT : 23356432
1795605095.908	rocksdb.number.keys.read COUNT : 0
1795605095.908	rocksdb.number.keys.updated COUNT : 0
1795605095.908	rocksdb.bytes.written COUNT : 24598898844
1795605095.908	rocksdb.bytes.read COUNT : 0
1795605095.908	rocksdb.number.db.seek COUNT : 0
1795605095.908	rocksdb.number.db.next COUNT : 0
1795605095.908	rocksdb.number.db.prev COUNT : 0
1795605095.908	rocksdb.number.db.seek.found COUNT : 0
1795605095.908	rocksdb.number.db.next.found COUNT : 0
1795605095.908	rocksdb.number.db.prev.found COUNT : 0
1795605095.908	rocksdb.db.iter.bytes.read COUNT : 0
1795605095.908	rocksdb.no.file.closes COUNT : 0
1795605095.908	rocksdb.no.file.opens COUNT : 1238447
1795605095.908	rocksdb.no.file.errors COUNT : 0
1795605095.908	rocksdb.l0.slowdown.micros COUNT : 0
1795605095.908	rocksdb.memtable.compaction.micros COUNT : 0
1795605095.908	rocksdb.l0.num.files.stall.micros COUNT : 0
1795605095.908	rocksdb.stall.micros COUNT : 19531914975
1795605095.908	rocksdb.db.mutex.wait.micros COUNT : 0
1795605095.908	rocksdb.rate.limit.delay.millis COUNT : 0
1795605095.908	rocksdb.num.iterators COUNT : 0
1795605095.908	rocksdb.number.multiget.get COUNT : 0
1795605095.908	rocksdb.number.multiget.keys.read COUNT : 0
1795605095.908	rocksdb.number.multiget.bytes.read COUNT : 0
1795605095.908	rocksdb.number.deletes.filtered COUNT : 0
1795605095.908	rocksdb.number.merge.failures COUNT : 0
1795605095.908	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795605095.908	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795605095.908	rocksdb.number.reseeks.iteration COUNT : 0
1795605095.908	rocksdb.getupdatessince.calls COUNT : 0
1795605095.908	rocksdb.block.cachecompressed.miss COUNT : 0
1795605095.908	rocksdb.block.cachecompressed.hit COUNT : 0
1795605095.908	rocksdb.block.cachecompressed.add COUNT : 0
1795605095.908	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795605095.908	rocksdb.wal.synced COUNT : 0
1795605095.908	rocksdb.wal.bytes COUNT : 24598898844
1795605095.908	rocksdb.write.self COUNT : 17898653
1795605095.908	rocksdb.write.other COUNT : 5457779
1795605095.908	rocksdb.write.timeout COUNT : 0
1795605095.908	rocksdb.write.wal COUNT : 23356432
1795605095.908	rocksdb.compact.read.bytes COUNT : 562667748357
1795605095.908	rocksdb.compact.write.bytes COUNT : 541019496527
1795605095.908	rocksdb.flush.write.bytes COUNT : 24662054808
1795605095.908	rocksdb.compact.read.marked.bytes COUNT : 0
1795605095.908	rocksdb.compact.read.periodic.bytes COUNT : 0
1795605095.908	rocksdb.compact.read.ttl.bytes COUNT : 0
1795605095.908	rocksdb.compact.write.marked.bytes COUNT : 0
1795605095.908	rocksdb.compact.write.periodic.bytes COUNT : 0
1795605095.908	rocksdb.compact.write.ttl.bytes COUNT : 0
1795605095.908	rocksdb.number.direct.load.table.properties COUNT : 0
1795605095.908	rocksdb.number.superversion_acquires COUNT : 0
1795605095.908	rocksdb.number.superversion_releases COUNT : 0
1795605095.908	rocksdb.number.superversion_cleanups COUNT : 0
1795605095.908	rocksdb.number.block.compressed COUNT : 0
1795605095.908	rocksdb.number.block.decompressed COUNT : 0
1795605095.908	rocksdb.number.block.not_compressed COUNT : 0
1795605095.908	rocksdb.merge.operation.time.nanos COUNT : 0
1795605095.908	rocksdb.filter.operation.time.nanos COUNT : 0
1795605095.908	rocksdb.row.cache.hit COUNT : 0
1795605095.908	rocksdb.row.cache.miss COUNT : 0
1795605095.908	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795605095.908	rocksdb.read.amp.total.read.bytes COUNT : 0
1795605095.908	rocksdb.number.rate_limiter.drains COUNT : 0
1795605095.908	rocksdb.number.iter.skip COUNT : 0
1795605095.908	rocksdb.blobdb.num.put COUNT : 0
1795605095.908	rocksdb.blobdb.num.write COUNT : 0
1795605095.908	rocksdb.blobdb.num.get COUNT : 0
1795605095.908	rocksdb.blobdb.num.multiget COUNT : 0
1795605095.908	rocksdb.blobdb.num.seek COUNT : 0
1795605095.908	rocksdb.blobdb.num.next COUNT : 0
1795605095.908	rocksdb.blobdb.num.prev COUNT : 0
1795605095.908	rocksdb.blobdb.num.keys.written COUNT : 0
1795605095.908	rocksdb.blobdb.num.keys.read COUNT : 0
1795605095.908	rocksdb.blobdb.bytes.written COUNT : 0
1795605095.908	rocksdb.blobdb.bytes.read COUNT : 0
1795605095.908	rocksdb.blobdb.write.inlined COUNT : 0
1795605095.908	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795605095.908	rocksdb.blobdb.write.blob COUNT : 0
1795605095.908	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795605095.908	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795605095.908	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795605095.908	rocksdb.blobdb.blob.file.synced COUNT : 0
1795605095.908	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795605095.908	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795605095.908	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795605095.908	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795605095.908	rocksdb.blobdb.gc.num.files COUNT : 0
1795605095.908	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795605095.908	rocksdb.blobdb.gc.failures COUNT : 0
1795605095.908	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795605095.908	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795605095.908	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795605095.908	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795605095.908	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795605095.908	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795605095.908	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795605095.908	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795605095.908	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795605095.908	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795605095.908	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795605095.908	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795605095.908	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795605095.908	rocksdb.txn.get.tryagain COUNT : 0
1795605095.909	rocksdb.number.multiget.keys.found COUNT : 0
1795605095.909	rocksdb.num.iterator.created COUNT : 0
1795605095.909	rocksdb.num.iterator.deleted COUNT : 0
1795605095.909	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795605095.909	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795605095.909	rocksdb.block.cache.compression.dict.add COUNT : 0
1795605095.909	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795605095.909	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795605095.909	rocksdb.block.cache.add.redundant COUNT : 0
1795605095.909	rocksdb.block.cache.index.add.redundant COUNT : 0
1795605095.909	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795605095.909	rocksdb.block.cache.data.add.redundant COUNT : 0
1795605095.909	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795605095.909	rocksdb.files.marked.trash COUNT : 0
1795605095.909	rocksdb.files.deleted.immediately COUNT : 1233504
1795605095.909	rocksdb.error.handler.bg.errro.count COUNT : 0
1795605095.909	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795605095.909	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795605095.909	rocksdb.error.handler.autoresume.count COUNT : 0
1795605095.909	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795605095.909	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795605095.909	rocksdb.memtable.payload.bytes.at.flush COUNT : 24476699192
1795605095.909	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1769024
1795605095.909	rocksdb.secondary.cache.hits COUNT : 0
1795605095.909	rocksdb.verify_checksum.read.bytes COUNT : 0
1795605095.909	rocksdb.backup.read.bytes COUNT : 0
1795605095.909	rocksdb.backup.write.bytes COUNT : 0
1795605095.909	rocksdb.remote.compact.read.bytes COUNT : 0
1795605095.909	rocksdb.remote.compact.write.bytes COUNT : 0
1795605095.909	rocksdb.hot.file.read.bytes COUNT : 0
1795605095.909	rocksdb.warm.file.read.bytes COUNT : 0
1795605095.909	rocksdb.cold.file.read.bytes COUNT : 0
1795605095.909	rocksdb.hot.file.read.count COUNT : 0
1795605095.909	rocksdb.warm.file.read.count COUNT : 0
1795605095.909	rocksdb.cold.file.read.count COUNT : 0
1795605095.909	rocksdb.last.level.read.bytes COUNT : 0
1795605095.909	rocksdb.last.level.read.count COUNT : 0
1795605095.909	rocksdb.non.last.level.read.bytes COUNT : 562864190649
1795605095.909	rocksdb.non.last.level.read.count COUNT : 138812463
1795605095.909	rocksdb.block.checksum.compute.count COUNT : 136335569
1795605095.909	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.db.write.micros P50 : 79.402407 P95 : 15423.139900 P99 : 60336.161896 P100 : 5128359.000000 COUNT : 23356432 SUM : 90509796931
1795605095.909	rocksdb.compaction.times.micros P50 : 89897.409094 P95 : 185499.550315 P99 : 248611.851704 P100 : 6622098.000000 COUNT : 197364 SUM : 18854633785
1795605095.909	rocksdb.compaction.times.cpu_micros P50 : 86276.064167 P95 : 168679.724474 P99 : 240434.025316 P100 : 6621093.000000 COUNT : 197364 SUM : 17909862425
1795605095.909	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.table.sync.micros P50 : 24355.814390 P95 : 48597.870281 P99 : 135053.968254 P100 : 1182050.000000 COUNT : 13508 SUM : 360536322
1795605095.909	rocksdb.compaction.outfile.sync.micros P50 : 6051.203484 P95 : 13165.739771 P99 : 22591.175136 P100 : 1133581.000000 COUNT : 1200410 SUM : 8008635094
1795605095.909	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.manifest.file.sync.micros P50 : 486.678199 P95 : 668.000143 P99 : 38999.021922 P100 : 1031323.000000 COUNT : 168974 SUM : 228165047
1795605095.909	rocksdb.table.open.io.micros P50 : 249.829770 P95 : 487.468119 P99 : 760.618340 P100 : 211605.000000 COUNT : 1238447 SUM : 384413610
1795605095.909	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.read.block.compaction.micros P50 : 46.843292 P95 : 118.750423 P99 : 224.210095 P100 : 473219.000000 COUNT : 133858675 SUM : 8790485279
1795605095.909	rocksdb.read.block.get.micros P50 : 61.562046 P95 : 110.262786 P99 : 233.357668 P100 : 104368.000000 COUNT : 1238447 SUM : 86708707
1795605095.909	rocksdb.write.raw.block.micros P50 : 0.549524 P95 : 1.758157 P99 : 47.883937 P100 : 1954182.000000 COUNT : 138193537 SUM : 308877290
1795605095.909	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.numfiles.in.singlecompaction P50 : 5.797810 P95 : 9.584644 P99 : 9.926071 P100 : 47.000000 COUNT : 197940 SUM : 1206994
1795605095.909	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.db.write.stall P50 : 0.666842 P95 : 3537.742531 P99 : 15248.993357 P100 : 5121759.000000 COUNT : 17864309 SUM : 19534301710
1795605095.909	rocksdb.sst.read.micros P50 : 46.227191 P95 : 114.853919 P99 : 220.340334 P100 : 473215.000000 COUNT : 138812463 SUM : 8959211525
1795605095.909	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.bytes.per.write P50 : 1126.804507 P95 : 3490.496498 P99 : 4188.000000 P100 : 4188.000000 COUNT : 17898653 SUM : 24598898844
1795605095.909	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.db.flush.micros P50 : 55872.917605 P95 : 161168.577982 P99 : 305554.335260 P100 : 4947260.000000 COUNT : 13507 SUM : 894964489
1795605095.909	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795605095.909	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1206418 SUM : 0
1795605095.909	
