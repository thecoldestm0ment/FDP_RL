1795312933.033	Initializing RocksDB Options from the specified file
1795312933.033	Initializing RocksDB Options from command-line flags
1795312944.898	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795312944.898	Values:     1024 bytes each (512 bytes after compression)
1795312944.898	Entries:    17191679
1795312944.898	Prefix:    0 bytes
1795312944.898	Keys per prefix:    0
1795312944.898	RawSize:    17051.1 MB (estimated)
1795312944.898	FileSize:   8656.7 MB (estimated)
1795312944.898	Write rate: 0 bytes/second
1795312944.898	Read rate: 0 ops/second
1795312944.898	Compression: NoCompression
1795312944.898	Compression sampling rate: 0
1795312944.898	Memtablerep: SkipListFactory
1795312944.898	Perf Level: 1
1795312944.898	------------------------------------------------
1795312944.898	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795355209.605	overwrite    :    4914.213 micros/op 813 ops/sec;    0.8 MB/s
1795355214.605	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795355214.626	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355224.626	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355234.628	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355244.628	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355254.628	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355264.628	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355274.628	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355284.629	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795355284.630	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795355284.630	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795355284.631	
1795355284.631	Level Files Size(MB)
1795355284.631	--------------------
1795355284.631	  0        0        0
1795355284.631	  1        5        2
1795355284.631	  2       60       25
1795355284.631	  3      606      250
1795355284.631	  4     5748     2500
1795355284.631	  5    36044    17326
1795355284.632	  6        0        0
1795355284.632	
1795355284.637	
1795355284.637	
1795355284.637	** Compaction Stats [default] **
1795355284.637	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795355284.637	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795355284.637	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     21.3   1628.37           1117.28     19941    0.082     38K      7       0.0       0.0
1795355284.637	  L1      5/0    2.09 MB   0.8     57.5    33.8     23.7      57.6     33.8       0.0   1.7     24.1     24.1   2448.03           2395.35      9953    0.246     58M   6591       0.0       0.0
1795355284.637	  L2     60/0   24.68 MB   1.0    172.3    33.8    138.5     172.3     33.8       0.0   5.1     23.3     23.3   7562.71           7389.89     72844    0.104    174M    51K       0.0       0.0
1795355284.637	  L3    606/0   250.00 MB   1.0    220.4    33.8    186.6     219.8     33.3       0.0   6.5     23.9     23.8   9448.41           9249.15     76813    0.123    223M   514K       0.0       0.0
1795355284.637	  L4   5748/0    2.44 GB   1.0    222.5    33.3    189.2     217.5     28.3       0.0   6.5     23.1     22.6   9860.47           9657.40     77184    0.128    225M  5053K       0.0       0.0
1795355284.637	  L5  36044/0   16.92 GB   0.7    144.9    28.3    116.6     119.3      2.7       0.0   4.2     25.3     20.8   5867.49           5745.20     62710    0.094    147M    26M       0.0       0.0
1795355284.637	 Sum  42463/0   19.63 GB   0.0    817.6   163.0    654.6     820.3    165.7       0.0  24.3     22.7     22.8  36815.49          35554.27    319445    0.115    830M    31M       0.0       0.0
1795355284.637	 Int      0/0    0.00 KB   0.0      0.4     0.1      0.4       0.4      0.0       0.0 406979800.0     22.4     18.9     20.51             20.42       154    0.133    455K    69K       0.0       0.0
1795355284.637	
1795355284.637	** Compaction Stats [default] **
1795355284.637	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795355284.637	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795355284.637	 Low      0/0    0.00 KB   0.0    817.6   163.0    654.6     786.5    131.9       0.0   0.0     23.8     22.9  35190.83          34440.70    299508    0.117    830M    31M       0.0       0.0
1795355284.637	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     21.3   1624.66           1113.57     19936    0.081       0      0       0.0       0.0
1795355284.637	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    233.7      0.00              0.00         1    0.004       0      0       0.0       0.0
1795355284.637	
1795355284.637	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795355284.637	
1795355284.637	Uptime(secs): 42351.6 total, 31.5 interval
1795355284.637	Flush(GB): cumulative 33.810, interval 0.000
1795355284.637	AddFile(GB): cumulative 0.000, interval 0.000
1795355284.637	AddFile(Total Files): cumulative 0, interval 0
1795355284.637	AddFile(L0 Files): cumulative 0, interval 0
1795355284.637	AddFile(Keys): cumulative 0, interval 0
1795355284.637	Cumulative compaction: 820.34 GB write, 19.83 MB/s write, 817.63 GB read, 19.77 MB/s read, 36815.5 seconds
1795355284.637	Interval compaction: 0.38 GB write, 12.33 MB/s write, 0.45 GB read, 14.57 MB/s read, 20.5 seconds
1795355284.637	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 359949 slowdown for pending_compaction_bytes, 15 memtable_compaction, 2 memtable_slowdown, interval 26 total count
1795355284.637	Block cache LRUCache@0x5f7831fa0a70#66823 capacity: 8.00 MB collections: 236 last_copies: 0 last_secs: 5.7e-05 secs_since: 31
1795355284.637	Block cache entry stats(count,size,portion): Misc(2,4.17 KB,0.0509262%)
1795355284.637	
1795355284.637	** File Read Latency Histogram By Level [default] **
1795355284.637	** Level 0 read latency histogram (micros):
1795355284.637	Count: 8692314 Average: 74.0416  StdDev: 453.49
1795355284.637	Min: 7  Median: 45.9330  Max: 762878
1795355284.637	Percentiles: P50: 45.93 P75: 69.88 P99: 227.57 P99.9: 416.93 P99.99: 1537.43
1795355284.637	------------------------------------------------------
1795355284.637	(       6,      10 ]        3   0.000%   0.000% 
1795355284.637	(      10,      15 ]        9   0.000%   0.000% 
1795355284.637	(      15,      22 ]        6   0.000%   0.000% 
1795355284.637	(      34,      51 ]  6191594  71.231%  71.231% ##############
1795355284.637	(      51,      76 ]   433744   4.990%  76.221% #
1795355284.637	(      76,     110 ]  1550759  17.841%  94.061% ####
1795355284.637	(     110,     170 ]   336984   3.877%  97.938% #
1795355284.637	(     170,     250 ]   128246   1.475%  99.414% 
1795355284.637	(     250,     380 ]    40959   0.471%  99.885% 
1795355284.637	(     380,     580 ]     7136   0.082%  99.967% 
1795355284.637	(     580,     870 ]     1340   0.015%  99.982% 
1795355284.637	(     870,    1300 ]      588   0.007%  99.989% 
1795355284.637	(    1300,    1900 ]      194   0.002%  99.991% 
1795355284.637	(    1900,    2900 ]       88   0.001%  99.992% 
1795355284.637	(    2900,    4400 ]       53   0.001%  99.993% 
1795355284.638	(    4400,    6600 ]       11   0.000%  99.993% 
1795355284.638	(    6600,    9900 ]        7   0.000%  99.993% 
1795355284.638	(    9900,   14000 ]        4   0.000%  99.993% 
1795355284.638	(   14000,   22000 ]        1   0.000%  99.993% 
1795355284.638	(   22000,   33000 ]        2   0.000%  99.993% 
1795355284.638	(   33000,   50000 ]        1   0.000%  99.993% 
1795355284.638	(   50000,   75000 ]       21   0.000%  99.994% 
1795355284.638	(   75000,  110000 ]      360   0.004%  99.998% 
1795355284.638	(  110000,  170000 ]       30   0.000%  99.998% 
1795355284.638	(  170000,  250000 ]       70   0.001%  99.999% 
1795355284.638	(  250000,  380000 ]       71   0.001% 100.000% 
1795355284.638	(  380000,  570000 ]       24   0.000% 100.000% 
1795355284.638	(  570000,  860000 ]        9   0.000% 100.000% 
1795355284.638	
1795355284.638	** Level 1 read latency histogram (micros):
1795355284.638	Count: 15225607 Average: 81.2783  StdDev: 176.65
1795355284.638	Min: 5  Median: 45.8515  Max: 643259
1795355284.638	Percentiles: P50: 45.85 P75: 67.37 P99: 226.32 P99.9: 463.02 P99.99: 83331.16
1795355284.638	------------------------------------------------------
1795355284.638	(       4,       6 ]       25   0.000%   0.000% 
1795355284.638	(       6,      10 ]       82   0.001%   0.001% 
1795355284.638	(      10,      15 ]       45   0.000%   0.001% 
1795355284.638	(      15,      22 ]       14   0.000%   0.001% 
1795355284.638	(      22,      34 ]        4   0.000%   0.001% 
1795355284.638	(      34,      51 ] 10919714  71.719%  71.721% ##############
1795355284.638	(      51,      76 ]   762612   5.009%  76.729% #
1795355284.638	(      76,     110 ]  2664082  17.497%  94.227% ###
1795355284.638	(     110,     170 ]   572540   3.760%  97.987% #
1795355284.638	(     170,     250 ]   219091   1.439%  99.426% 
1795355284.638	(     250,     380 ]    66340   0.436%  99.862% 
1795355284.638	(     380,     580 ]    14051   0.092%  99.954% 
1795355284.638	(     580,     870 ]     3170   0.021%  99.975% 
1795355284.638	(     870,    1300 ]     1214   0.008%  99.983% 
1795355284.638	(    1300,    1900 ]      288   0.002%  99.985% 
1795355284.638	(    1900,    2900 ]      139   0.001%  99.986% 
1795355284.638	(    2900,    4400 ]      121   0.001%  99.986% 
1795355284.638	(    4400,    6600 ]       19   0.000%  99.986% 
1795355284.638	(    6600,    9900 ]       20   0.000%  99.987% 
1795355284.638	(    9900,   14000 ]       10   0.000%  99.987% 
1795355284.638	(   14000,   22000 ]        4   0.000%  99.987% 
1795355284.638	(   22000,   33000 ]        3   0.000%  99.987% 
1795355284.638	(   33000,   50000 ]       15   0.000%  99.987% 
1795355284.638	(   50000,   75000 ]      157   0.001%  99.988% 
1795355284.638	(   75000,  110000 ]     1363   0.009%  99.997% 
1795355284.638	(  110000,  170000 ]       78   0.001%  99.997% 
1795355284.638	(  170000,  250000 ]      200   0.001%  99.999% 
1795355284.638	(  250000,  380000 ]      136   0.001% 100.000% 
1795355284.638	(  380000,  570000 ]       78   0.001% 100.000% 
1795355284.638	(  570000,  860000 ]       15   0.000% 100.000% 
1795355284.638	
1795355284.638	** Level 2 read latency histogram (micros):
1795355284.638	Count: 45682609 Average: 74.8923  StdDev: 57.27
1795355284.638	Min: 5  Median: 46.0226  Max: 738203
1795355284.638	Percentiles: P50: 46.02 P75: 72.10 P99: 229.87 P99.9: 377.65 P99.99: 1299.94
1795355284.638	------------------------------------------------------
1795355284.638	(       4,       6 ]      537   0.001%   0.001% 
1795355284.638	(       6,      10 ]     2730   0.006%   0.007% 
1795355284.638	(      10,      15 ]      736   0.002%   0.009% 
1795355284.638	(      15,      22 ]      166   0.000%   0.009% 
1795355284.638	(      22,      34 ]       53   0.000%   0.009% 
1795355284.638	(      34,      51 ] 32291687  70.687%  70.696% ##############
1795355284.638	(      51,      76 ]  2329171   5.099%  75.795% #
1795355284.638	(      76,     110 ]  8280389  18.126%  93.921% ####
1795355284.638	(     110,     170 ]  1773506   3.882%  97.803% #
1795355284.638	(     170,     250 ]   730653   1.599%  99.402% 
1795355284.638	(     250,     380 ]   231478   0.507%  99.909% 
1795355284.638	(     380,     580 ]    29777   0.065%  99.974% 
1795355284.638	(     580,     870 ]     5244   0.011%  99.986% 
1795355284.638	(     870,    1300 ]     1914   0.004%  99.990% 
1795355284.638	(    1300,    1900 ]      662   0.001%  99.991% 
1795355284.638	(    1900,    2900 ]      433   0.001%  99.992% 
1795355284.638	(    2900,    4400 ]      450   0.001%  99.993% 
1795355284.638	(    4400,    6600 ]      118   0.000%  99.994% 
1795355284.638	(    6600,    9900 ]       56   0.000%  99.994% 
1795355284.638	(    9900,   14000 ]       27   0.000%  99.994% 
1795355284.638	(   14000,   22000 ]       14   0.000%  99.994% 
1795355284.638	(   22000,   33000 ]        9   0.000%  99.994% 
1795355284.638	(   33000,   50000 ]       23   0.000%  99.994% 
1795355284.638	(   50000,   75000 ]      183   0.000%  99.994% 
1795355284.638	(   75000,  110000 ]     2093   0.005%  99.999% 
1795355284.638	(  110000,  170000 ]      195   0.000%  99.999% 
1795355284.638	(  170000,  250000 ]      443   0.001% 100.000% 
1795355284.638	(  250000,  380000 ]      364   0.001% 100.001% 
1795355284.638	(  380000,  570000 ]      151   0.000% 100.001% 
1795355284.638	(  570000,  860000 ]       13   0.000% 100.001% 
1795355284.638	
1795355284.638	** Level 3 read latency histogram (micros):
1795355284.638	Count: 58327788 Average: 74.7074  StdDev: 67.99
1795355284.638	Min: 5  Median: 46.0543  Max: 755449
1795355284.638	Percentiles: P50: 46.05 P75: 73.95 P99: 226.14 P99.9: 373.97 P99.99: 1281.34
1795355284.638	------------------------------------------------------
1795355284.638	(       4,       6 ]      783   0.001%   0.001% 
1795355284.638	(       6,      10 ]     3197   0.005%   0.007% 
1795355284.638	(      10,      15 ]      930   0.002%   0.008% 
1795355284.638	(      15,      22 ]      239   0.000%   0.009% 
1795355284.638	(      22,      34 ]       76   0.000%   0.009% 
1795355284.638	(      34,      51 ] 41121945  70.501%  70.510% ##############
1795355284.638	(      51,      76 ]  2852607   4.891%  75.401% #
1795355284.638	(      76,     110 ] 10815892  18.543%  93.944% ####
1795355284.638	(     110,     170 ]  2310367   3.961%  97.905% #
1795355284.638	(     170,     250 ]   909884   1.560%  99.465% 
1795355284.638	(     250,     380 ]   265866   0.456%  99.921% 
1795355284.638	(     380,     580 ]    32101   0.055%  99.976% 
1795355284.638	(     580,     870 ]     5847   0.010%  99.986% 
1795355284.638	(     870,    1300 ]     2322   0.004%  99.990% 
1795355284.638	(    1300,    1900 ]      798   0.001%  99.992% 
1795355284.638	(    1900,    2900 ]      571   0.001%  99.993% 
1795355284.638	(    2900,    4400 ]      496   0.001%  99.993% 
1795355284.638	(    4400,    6600 ]      162   0.000%  99.994% 
1795355284.638	(    6600,    9900 ]       91   0.000%  99.994% 
1795355284.638	(    9900,   14000 ]       30   0.000%  99.994% 
1795355284.638	(   14000,   22000 ]       17   0.000%  99.994% 
1795355284.638	(   22000,   33000 ]        4   0.000%  99.994% 
1795355284.638	(   33000,   50000 ]       13   0.000%  99.994% 
1795355284.638	(   50000,   75000 ]      187   0.000%  99.994% 
1795355284.638	(   75000,  110000 ]     2598   0.004%  99.999% 
1795355284.638	(  110000,  170000 ]      230   0.000%  99.999% 
1795355284.638	(  170000,  250000 ]      583   0.001% 100.000% 
1795355284.638	(  250000,  380000 ]      400   0.001% 100.001% 
1795355284.638	(  380000,  570000 ]      202   0.000% 100.001% 
1795355284.638	(  570000,  860000 ]       44   0.000% 100.001% 
1795355284.638	
1795355284.638	** Level 4 read latency histogram (micros):
1795355284.638	Count: 57627516 Average: 75.3492  StdDev: 59.11
1795355284.638	Min: 5  Median: 46.0552  Max: 871279
1795355284.638	Percentiles: P50: 46.06 P75: 73.63 P99: 224.47 P99.9: 373.89 P99.99: 1473.91
1795355284.638	------------------------------------------------------
1795355284.639	(       4,       6 ]      526   0.001%   0.001% 
1795355284.639	(       6,      10 ]     2155   0.004%   0.005% 
1795355284.639	(      10,      15 ]      592   0.001%   0.006% 
1795355284.639	(      15,      22 ]      138   0.000%   0.006% 
1795355284.639	(      22,      34 ]       59   0.000%   0.006% 
1795355284.639	(      34,      51 ] 40627618  70.500%  70.506% ##############
1795355284.639	(      51,      76 ]  2860946   4.965%  75.471% #
1795355284.639	(      76,     110 ] 10681228  18.535%  94.006% ####
1795355284.639	(     110,     170 ]  2285527   3.966%  97.972% #
1795355284.639	(     170,     250 ]   870145   1.510%  99.482% 
1795355284.639	(     250,     380 ]   252835   0.439%  99.921% 
1795355284.639	(     380,     580 ]    30484   0.053%  99.974% 
1795355284.639	(     580,     870 ]     6105   0.011%  99.984% 
1795355284.639	(     870,    1300 ]     3117   0.005%  99.990% 
1795355284.639	(    1300,    1900 ]      960   0.002%  99.991% 
1795355284.639	(    1900,    2900 ]      607   0.001%  99.992% 
1795355284.639	(    2900,    4400 ]      530   0.001%  99.993% 
1795355284.639	(    4400,    6600 ]      192   0.000%  99.993% 
1795355284.639	(    6600,    9900 ]       71   0.000%  99.994% 
1795355284.639	(    9900,   14000 ]       34   0.000%  99.994% 
1795355284.639	(   14000,   22000 ]       17   0.000%  99.994% 
1795355284.639	(   22000,   33000 ]        6   0.000%  99.994% 
1795355284.639	(   33000,   50000 ]       17   0.000%  99.994% 
1795355284.639	(   50000,   75000 ]      210   0.000%  99.994% 
1795355284.639	(   75000,  110000 ]     2552   0.004%  99.999% 
1795355284.639	(  110000,  170000 ]      255   0.000%  99.999% 
1795355284.639	(  170000,  250000 ]      617   0.001% 100.000% 
1795355284.639	(  250000,  380000 ]      432   0.001% 100.001% 
1795355284.639	(  380000,  570000 ]      221   0.000% 100.001% 
1795355284.639	(  570000,  860000 ]       41   0.000% 100.001% 
1795355284.639	(  860000, 1200000 ]        2   0.000% 100.001% 
1795355284.639	
1795355284.639	** Level 5 read latency histogram (micros):
1795355284.639	Count: 30972757 Average: 72.3923  StdDev: 96.82
1795355284.639	Min: 5  Median: 45.6867  Max: 764320
1795355284.639	Percentiles: P50: 45.69 P75: 61.19 P99: 225.33 P99.9: 376.81 P99.99: 1964.83
1795355284.639	------------------------------------------------------
1795355284.639	(       4,       6 ]      289   0.001%   0.001% 
1795355284.639	(       6,      10 ]     1710   0.006%   0.006% 
1795355284.639	(      10,      15 ]      497   0.002%   0.008% 
1795355284.639	(      15,      22 ]       86   0.000%   0.008% 
1795355284.639	(      22,      34 ]       42   0.000%   0.008% 
1795355284.639	(      34,      51 ] 22523303  72.720%  72.728% ###############
1795355284.639	(      51,      76 ]  1726036   5.573%  78.301% #
1795355284.639	(      76,     110 ]  5054596  16.319%  94.620% ###
1795355284.639	(     110,     170 ]  1032860   3.335%  97.955% #
1795355284.639	(     170,     250 ]   467857   1.511%  99.466% 
1795355284.639	(     250,     380 ]   137888   0.445%  99.911% 
1795355284.639	(     380,     580 ]    14646   0.047%  99.958% 
1795355284.639	(     580,     870 ]     4896   0.016%  99.974% 
1795355284.639	(     870,    1300 ]     4099   0.013%  99.987% 
1795355284.639	(    1300,    1900 ]      812   0.003%  99.990% 
1795355284.639	(    1900,    2900 ]      659   0.002%  99.992% 
1795355284.639	(    2900,    4400 ]      647   0.002%  99.994% 
1795355284.639	(    4400,    6600 ]      332   0.001%  99.995% 
1795355284.639	(    6600,    9900 ]      172   0.001%  99.996% 
1795355284.639	(    9900,   14000 ]       41   0.000%  99.996% 
1795355284.639	(   14000,   22000 ]        9   0.000%  99.996% 
1795355284.639	(   22000,   33000 ]        4   0.000%  99.996% 
1795355284.639	(   33000,   50000 ]        2   0.000%  99.996% 
1795355284.639	(   50000,   75000 ]        8   0.000%  99.996% 
1795355284.639	(   75000,  110000 ]      926   0.003%  99.999% 
1795355284.639	(  110000,  170000 ]      125   0.000%  99.999% 
1795355284.639	(  170000,  250000 ]      288   0.001% 100.000% 
1795355284.639	(  250000,  380000 ]      279   0.001% 100.001% 
1795355284.639	(  380000,  570000 ]      111   0.000% 100.001% 
1795355284.639	(  570000,  860000 ]       17   0.000% 100.002% 
1795355284.639	
1795355284.639	
1795355284.639	** DB Stats **
1795355284.639	Uptime(secs): 42351.6 total, 31.5 interval
1795355284.639	Cumulative writes: 34M writes, 34M keys, 25M commit groups, 1.3 writes per commit group, ingest: 33.72 GB, 0.82 MB/s
1795355284.639	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.72 GB, 0.82 MB/s
1795355284.639	Cumulative stall: 10:06:5.363 H:M:S, 85.9 percent
1795355284.639	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795355284.639	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795355284.639	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795355284.639	
1795355284.639	STATISTICS:
1795355284.639	rocksdb.block.cache.miss COUNT : 208817063
1795355284.639	rocksdb.block.cache.hit COUNT : 0
1795355284.639	rocksdb.block.cache.add COUNT : 0
1795355284.639	rocksdb.block.cache.add.failures COUNT : 0
1795355284.639	rocksdb.block.cache.index.miss COUNT : 0
1795355284.639	rocksdb.block.cache.index.hit COUNT : 0
1795355284.639	rocksdb.block.cache.index.add COUNT : 0
1795355284.639	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795355284.639	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795355284.639	rocksdb.block.cache.filter.miss COUNT : 0
1795355284.639	rocksdb.block.cache.filter.hit COUNT : 0
1795355284.639	rocksdb.block.cache.filter.add COUNT : 0
1795355284.639	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795355284.639	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795355284.639	rocksdb.block.cache.data.miss COUNT : 208817063
1795355284.639	rocksdb.block.cache.data.hit COUNT : 0
1795355284.639	rocksdb.block.cache.data.add COUNT : 0
1795355284.639	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795355284.639	rocksdb.block.cache.bytes.read COUNT : 0
1795355284.639	rocksdb.block.cache.bytes.write COUNT : 0
1795355284.639	rocksdb.bloom.filter.useful COUNT : 0
1795355284.639	rocksdb.bloom.filter.full.positive COUNT : 0
1795355284.639	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795355284.639	rocksdb.bloom.filter.micros COUNT : 0
1795355284.639	rocksdb.persistent.cache.hit COUNT : 0
1795355284.639	rocksdb.persistent.cache.miss COUNT : 0
1795355284.639	rocksdb.sim.block.cache.hit COUNT : 0
1795355284.639	rocksdb.sim.block.cache.miss COUNT : 0
1795355284.639	rocksdb.memtable.hit COUNT : 0
1795355284.639	rocksdb.memtable.miss COUNT : 0
1795355284.639	rocksdb.l0.hit COUNT : 0
1795355284.639	rocksdb.l1.hit COUNT : 0
1795355284.639	rocksdb.l2andup.hit COUNT : 0
1795355284.639	rocksdb.compaction.key.drop.new COUNT : 31627206
1795355284.639	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795355284.639	rocksdb.compaction.key.drop.range_del COUNT : 0
1795355284.639	rocksdb.compaction.key.drop.user COUNT : 0
1795355284.639	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795355284.639	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795355284.639	rocksdb.compaction.cancelled COUNT : 0
1795355284.639	rocksdb.number.keys.written COUNT : 34383360
1795355284.639	rocksdb.number.keys.read COUNT : 0
1795355284.639	rocksdb.number.keys.updated COUNT : 0
1795355284.639	rocksdb.bytes.written COUNT : 36204289128
1795355284.639	rocksdb.bytes.read COUNT : 0
1795355284.639	rocksdb.number.db.seek COUNT : 0
1795355284.639	rocksdb.number.db.next COUNT : 0
1795355284.639	rocksdb.number.db.prev COUNT : 0
1795355284.639	rocksdb.number.db.seek.found COUNT : 0
1795355284.640	rocksdb.number.db.next.found COUNT : 0
1795355284.640	rocksdb.number.db.prev.found COUNT : 0
1795355284.640	rocksdb.db.iter.bytes.read COUNT : 0
1795355284.640	rocksdb.no.file.closes COUNT : 0
1795355284.640	rocksdb.no.file.opens COUNT : 1928884
1795355284.640	rocksdb.no.file.errors COUNT : 0
1795355284.640	rocksdb.l0.slowdown.micros COUNT : 0
1795355284.640	rocksdb.memtable.compaction.micros COUNT : 0
1795355284.640	rocksdb.l0.num.files.stall.micros COUNT : 0
1795355284.640	rocksdb.stall.micros COUNT : 36365363316
1795355284.640	rocksdb.db.mutex.wait.micros COUNT : 0
1795355284.640	rocksdb.rate.limit.delay.millis COUNT : 0
1795355284.640	rocksdb.num.iterators COUNT : 0
1795355284.640	rocksdb.number.multiget.get COUNT : 0
1795355284.640	rocksdb.number.multiget.keys.read COUNT : 0
1795355284.640	rocksdb.number.multiget.bytes.read COUNT : 0
1795355284.640	rocksdb.number.deletes.filtered COUNT : 0
1795355284.640	rocksdb.number.merge.failures COUNT : 0
1795355284.640	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795355284.640	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795355284.640	rocksdb.number.reseeks.iteration COUNT : 0
1795355284.640	rocksdb.getupdatessince.calls COUNT : 0
1795355284.640	rocksdb.block.cachecompressed.miss COUNT : 0
1795355284.640	rocksdb.block.cachecompressed.hit COUNT : 0
1795355284.640	rocksdb.block.cachecompressed.add COUNT : 0
1795355284.640	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795355284.640	rocksdb.wal.synced COUNT : 0
1795355284.640	rocksdb.wal.bytes COUNT : 36204289128
1795355284.640	rocksdb.write.self COUNT : 25671774
1795355284.640	rocksdb.write.other COUNT : 8711586
1795355284.640	rocksdb.write.timeout COUNT : 0
1795355284.640	rocksdb.write.wal COUNT : 34383360
1795355284.640	rocksdb.compact.read.bytes COUNT : 877766041492
1795355284.640	rocksdb.compact.write.bytes COUNT : 844529013227
1795355284.640	rocksdb.flush.write.bytes COUNT : 36309184752
1795355284.640	rocksdb.compact.read.marked.bytes COUNT : 0
1795355284.640	rocksdb.compact.read.periodic.bytes COUNT : 0
1795355284.640	rocksdb.compact.read.ttl.bytes COUNT : 0
1795355284.640	rocksdb.compact.write.marked.bytes COUNT : 0
1795355284.640	rocksdb.compact.write.periodic.bytes COUNT : 0
1795355284.640	rocksdb.compact.write.ttl.bytes COUNT : 0
1795355284.640	rocksdb.number.direct.load.table.properties COUNT : 0
1795355284.640	rocksdb.number.superversion_acquires COUNT : 0
1795355284.640	rocksdb.number.superversion_releases COUNT : 0
1795355284.640	rocksdb.number.superversion_cleanups COUNT : 0
1795355284.640	rocksdb.number.block.compressed COUNT : 0
1795355284.640	rocksdb.number.block.decompressed COUNT : 0
1795355284.640	rocksdb.number.block.not_compressed COUNT : 0
1795355284.640	rocksdb.merge.operation.time.nanos COUNT : 0
1795355284.640	rocksdb.filter.operation.time.nanos COUNT : 0
1795355284.640	rocksdb.row.cache.hit COUNT : 0
1795355284.640	rocksdb.row.cache.miss COUNT : 0
1795355284.640	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795355284.640	rocksdb.read.amp.total.read.bytes COUNT : 0
1795355284.640	rocksdb.number.rate_limiter.drains COUNT : 0
1795355284.640	rocksdb.number.iter.skip COUNT : 0
1795355284.640	rocksdb.blobdb.num.put COUNT : 0
1795355284.640	rocksdb.blobdb.num.write COUNT : 0
1795355284.640	rocksdb.blobdb.num.get COUNT : 0
1795355284.640	rocksdb.blobdb.num.multiget COUNT : 0
1795355284.640	rocksdb.blobdb.num.seek COUNT : 0
1795355284.640	rocksdb.blobdb.num.next COUNT : 0
1795355284.640	rocksdb.blobdb.num.prev COUNT : 0
1795355284.640	rocksdb.blobdb.num.keys.written COUNT : 0
1795355284.640	rocksdb.blobdb.num.keys.read COUNT : 0
1795355284.640	rocksdb.blobdb.bytes.written COUNT : 0
1795355284.640	rocksdb.blobdb.bytes.read COUNT : 0
1795355284.640	rocksdb.blobdb.write.inlined COUNT : 0
1795355284.640	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795355284.640	rocksdb.blobdb.write.blob COUNT : 0
1795355284.640	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795355284.640	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795355284.640	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795355284.640	rocksdb.blobdb.blob.file.synced COUNT : 0
1795355284.640	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795355284.640	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795355284.640	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795355284.640	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795355284.640	rocksdb.blobdb.gc.num.files COUNT : 0
1795355284.640	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795355284.640	rocksdb.blobdb.gc.failures COUNT : 0
1795355284.640	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795355284.640	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795355284.640	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795355284.640	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795355284.640	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795355284.640	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795355284.640	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795355284.640	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795355284.640	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795355284.640	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795355284.640	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795355284.640	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795355284.640	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795355284.640	rocksdb.txn.get.tryagain COUNT : 0
1795355284.640	rocksdb.number.multiget.keys.found COUNT : 0
1795355284.640	rocksdb.num.iterator.created COUNT : 0
1795355284.640	rocksdb.num.iterator.deleted COUNT : 0
1795355284.640	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795355284.640	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795355284.640	rocksdb.block.cache.compression.dict.add COUNT : 0
1795355284.640	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795355284.640	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795355284.640	rocksdb.block.cache.add.redundant COUNT : 0
1795355284.640	rocksdb.block.cache.index.add.redundant COUNT : 0
1795355284.640	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795355284.640	rocksdb.block.cache.data.add.redundant COUNT : 0
1795355284.640	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795355284.640	rocksdb.files.marked.trash COUNT : 0
1795355284.640	rocksdb.files.deleted.immediately COUNT : 1926334
1795355284.640	rocksdb.error.handler.bg.errro.count COUNT : 0
1795355284.640	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795355284.640	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795355284.640	rocksdb.error.handler.autoresume.count COUNT : 0
1795355284.640	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795355284.640	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795355284.640	rocksdb.memtable.payload.bytes.at.flush COUNT : 36033573688
1795355284.640	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1820376
1795355284.640	rocksdb.secondary.cache.hits COUNT : 0
1795355284.640	rocksdb.verify_checksum.read.bytes COUNT : 0
1795355284.640	rocksdb.backup.read.bytes COUNT : 0
1795355284.640	rocksdb.backup.write.bytes COUNT : 0
1795355284.640	rocksdb.remote.compact.read.bytes COUNT : 0
1795355284.640	rocksdb.remote.compact.write.bytes COUNT : 0
1795355284.640	rocksdb.hot.file.read.bytes COUNT : 0
1795355284.640	rocksdb.warm.file.read.bytes COUNT : 0
1795355284.640	rocksdb.cold.file.read.bytes COUNT : 0
1795355284.640	rocksdb.hot.file.read.count COUNT : 0
1795355284.641	rocksdb.warm.file.read.count COUNT : 0
1795355284.641	rocksdb.cold.file.read.count COUNT : 0
1795355284.641	rocksdb.last.level.read.bytes COUNT : 0
1795355284.641	rocksdb.last.level.read.count COUNT : 0
1795355284.641	rocksdb.non.last.level.read.bytes COUNT : 878054977875
1795355284.641	rocksdb.non.last.level.read.count COUNT : 216532599
1795355284.641	rocksdb.block.checksum.compute.count COUNT : 212674831
1795355284.641	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.db.write.micros P50 : 1962.524339 P95 : 20121.808804 P99 : 69707.906823 P100 : 5930202.000000 COUNT : 34383360 SUM : 168901583160
1795355284.641	rocksdb.compaction.times.micros P50 : 95170.111438 P95 : 250651.874861 P99 : 743547.663551 P100 : 6117462.000000 COUNT : 299508 SUM : 35190829869
1795355284.641	rocksdb.compaction.times.cpu_micros P50 : 93492.254251 P95 : 246981.106726 P99 : 733977.192982 P100 : 5859412.000000 COUNT : 299508 SUM : 34440695225
1795355284.641	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.table.sync.micros P50 : 27457.558220 P95 : 291498.437500 P99 : 569878.793103 P100 : 1269995.000000 COUNT : 19937 SUM : 1093913886
1795355284.641	rocksdb.compaction.outfile.sync.micros P50 : 6608.540487 P95 : 13827.321856 P99 : 26961.327711 P100 : 1988263.000000 COUNT : 1872648 SUM : 17166169978
1795355284.641	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.manifest.file.sync.micros P50 : 489.856789 P95 : 854.831279 P99 : 429750.199045 P100 : 1897833.000000 COUNT : 240025 SUM : 3025263139
1795355284.641	rocksdb.table.open.io.micros P50 : 237.616766 P95 : 418.901359 P99 : 648.883049 P100 : 860738.000000 COUNT : 1928884 SUM : 785203735
1795355284.641	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.read.block.compaction.micros P50 : 46.307128 P95 : 127.707057 P99 : 230.406920 P100 : 871944.000000 COUNT : 208817063 SUM : 15826350336
1795355284.641	rocksdb.read.block.get.micros P50 : 50.832815 P95 : 106.604063 P99 : 214.525006 P100 : 617225.000000 COUNT : 1928884 SUM : 133385979
1795355284.641	rocksdb.write.raw.block.micros P50 : 0.537889 P95 : 1.590912 P99 : 39.813802 P100 : 2130027.000000 COUNT : 215187833 SUM : 402265006
1795355284.641	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.numfiles.in.singlecompaction P50 : 5.849657 P95 : 9.585228 P99 : 9.925639 P100 : 40.000000 COUNT : 300270 SUM : 1887183
1795355284.641	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.db.write.stall P50 : 0.738876 P95 : 4170.925217 P99 : 18925.742486 P100 : 5929815.000000 COUNT : 25652516 SUM : 36369367934
1795355284.641	rocksdb.sst.read.micros P50 : 45.974872 P95 : 124.444727 P99 : 226.537218 P100 : 871279.000000 COUNT : 216532599 SUM : 16244820287
1795355284.641	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.bytes.per.write P50 : 1130.496797 P95 : 3600.168554 P99 : 4188.000000 P100 : 4188.000000 COUNT : 25671774 SUM : 36204289128
1795355284.641	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.db.flush.micros P50 : 51569.488156 P95 : 341191.176471 P99 : 649401.550388 P100 : 5116035.000000 COUNT : 19936 SUM : 1624655185
1795355284.641	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355284.641	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1886421 SUM : 0
1795355284.641	
