1795523511.013	Initializing RocksDB Options from the specified file
1795523511.013	Initializing RocksDB Options from command-line flags
1795523524.034	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795523524.034	Values:     1024 bytes each (512 bytes after compression)
1795523524.034	Entries:    17191679
1795523524.034	Prefix:    0 bytes
1795523524.034	Keys per prefix:    0
1795523524.034	RawSize:    17051.1 MB (estimated)
1795523524.034	FileSize:   8656.7 MB (estimated)
1795523524.034	Write rate: 0 bytes/second
1795523524.034	Read rate: 0 ops/second
1795523524.034	Compression: NoCompression
1795523524.034	Compression sampling rate: 0
1795523524.034	Memtablerep: SkipListFactory
1795523524.034	Perf Level: 1
1795523524.034	------------------------------------------------
1795523524.034	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795566071.282	overwrite    :    4946.450 micros/op 808 ops/sec;    0.8 MB/s
1795566076.283	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795566076.308	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795566086.308	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795566096.309	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795566106.329	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795566116.329	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795566126.361	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795566136.362	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795566146.363	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795566146.363	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795566146.363	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795566146.363	
1795566146.363	Level Files Size(MB)
1795566146.363	--------------------
1795566146.363	  0        0        0
1795566146.363	  1        4        2
1795566146.363	  2       58       25
1795566146.364	  3      601      250
1795566146.364	  4     5700     2500
1795566146.364	  5    36059    17326
1795566146.364	  6        0        0
1795566146.364	
1795566146.366	
1795566146.366	
1795566146.366	** Compaction Stats [default] **
1795566146.366	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795566146.366	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795566146.366	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     20.8   1663.79           1171.67     18401    0.090     19K      6       0.0       0.0
1795566146.366	  L1      4/0    2.02 MB   0.8     55.7    33.8     21.9      55.8     33.9       0.0   1.6     23.6     23.6   2419.13           2364.06      9187    0.263     56M   6906       0.0       0.0
1795566146.366	  L2     58/0   24.79 MB   1.0    167.2    33.8    133.3     167.1     33.8       0.0   4.9     23.3     23.3   7359.94           7195.12     72474    0.102    169M    51K       0.0       0.0
1795566146.366	  L3    601/0   249.97 MB   1.0    219.3    33.8    185.5     218.8     33.3       0.0   6.5     23.7     23.7   9460.48           9267.40     76710    0.123    222M   513K       0.0       0.0
1795566146.366	  L4   5700/0    2.44 GB   1.0    222.5    33.3    189.3     217.6     28.3       0.0   6.5     23.6     23.1   9655.93           9458.94     77274    0.125    226M  5050K       0.0       0.0
1795566146.366	  L5  36059/0   16.92 GB   0.7    145.1    28.3    116.8     119.5      2.7       0.0   4.2     25.7     21.1   5790.75           5669.38     62763    0.092    147M    26M       0.0       0.0
1795566146.366	 Sum  42422/0   19.63 GB   0.0    809.9   163.0    646.9     812.6    165.7       0.0  24.0     22.8     22.9  36350.03          35126.58    316809    0.115    822M    31M       0.0       0.0
1795566146.366	 Int      0/0    0.00 KB   0.0      0.1     0.0      0.1       0.1      0.0       0.0 56186281.0     30.2     25.4      2.11              2.11        22    0.096     63K    10K       0.0       0.0
1795566146.366	
1795566146.366	** Compaction Stats [default] **
1795566146.366	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795566146.366	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795566146.366	 Low      0/0    0.00 KB   0.0    809.9   163.0    646.9     778.8    131.9       0.0   0.0     23.9     23.0  34688.39          33957.06    298410    0.116    822M    31M       0.0       0.0
1795566146.366	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     20.8   1661.63           1169.52     18398    0.090       0      0       0.0       0.0
1795566146.366	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    125.2      0.01              0.00         1    0.008       0      0       0.0       0.0
1795566146.366	
1795566146.366	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795566146.366	
1795566146.366	Uptime(secs): 42635.3 total, 14.2 interval
1795566146.366	Flush(GB): cumulative 33.809, interval 0.000
1795566146.366	AddFile(GB): cumulative 0.000, interval 0.000
1795566146.366	AddFile(Total Files): cumulative 0, interval 0
1795566146.366	AddFile(L0 Files): cumulative 0, interval 0
1795566146.366	AddFile(Keys): cumulative 0, interval 0
1795566146.366	Cumulative compaction: 812.64 GB write, 19.52 MB/s write, 809.93 GB read, 19.45 MB/s read, 36350.0 seconds
1795566146.366	Interval compaction: 0.05 GB write, 3.79 MB/s write, 0.06 GB read, 4.50 MB/s read, 2.1 seconds
1795566146.366	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 354231 slowdown for pending_compaction_bytes, 22 memtable_compaction, 3 memtable_slowdown, interval 0 total count
1795566146.366	Block cache LRUCache@0x61be0eef1a70#69143 capacity: 8.00 MB collections: 237 last_copies: 2 last_secs: 0.000142 secs_since: 134
1795566146.366	Block cache entry stats(count,size,portion): Misc(3,8.36 KB,0.102043%)
1795566146.366	
1795566146.366	** File Read Latency Histogram By Level [default] **
1795566146.366	** Level 0 read latency histogram (micros):
1795566146.366	Count: 8681610 Average: 74.2058  StdDev: 359.60
1795566146.366	Min: 6  Median: 45.9266  Max: 833150
1795566146.366	Percentiles: P50: 45.93 P75: 68.43 P99: 228.05 P99.9: 430.99 P99.99: 1291.28
1795566146.366	------------------------------------------------------
1795566146.366	(       4,       6 ]        1   0.000%   0.000% 
1795566146.366	(       6,      10 ]        3   0.000%   0.000% 
1795566146.366	(      10,      15 ]        9   0.000%   0.000% 
1795566146.366	(      15,      22 ]        1   0.000%   0.000% 
1795566146.366	(      22,      34 ]        4   0.000%   0.000% 
1795566146.366	(      34,      51 ]  6187301  71.269%  71.269% ##############
1795566146.366	(      51,      76 ]   464454   5.350%  76.619% #
1795566146.366	(      76,     110 ]  1526261  17.580%  94.200% ####
1795566146.366	(     110,     170 ]   328451   3.783%  97.983% #
1795566146.366	(     170,     250 ]   121694   1.402%  99.385% 
1795566146.366	(     250,     380 ]    42829   0.493%  99.878% 
1795566146.366	(     380,     580 ]     7532   0.087%  99.965% 
1795566146.366	(     580,     870 ]     1566   0.018%  99.983% 
1795566146.366	(     870,    1300 ]      649   0.007%  99.990% 
1795566146.366	(    1300,    1900 ]      202   0.002%  99.992% 
1795566146.366	(    1900,    2900 ]      108   0.001%  99.994% 
1795566146.366	(    2900,    4400 ]       68   0.001%  99.995% 
1795566146.366	(    4400,    6600 ]       13   0.000%  99.995% 
1795566146.366	(    6600,    9900 ]       14   0.000%  99.995% 
1795566146.366	(    9900,   14000 ]        7   0.000%  99.995% 
1795566146.366	(   14000,   22000 ]        4   0.000%  99.995% 
1795566146.366	(   22000,   33000 ]        1   0.000%  99.995% 
1795566146.366	(   33000,   50000 ]        4   0.000%  99.995% 
1795566146.366	(   50000,   75000 ]       15   0.000%  99.995% 
1795566146.366	(   75000,  110000 ]      162   0.002%  99.997% 
1795566146.366	(  110000,  170000 ]       15   0.000%  99.997% 
1795566146.366	(  170000,  250000 ]       80   0.001%  99.998% 
1795566146.366	(  250000,  380000 ]      102   0.001%  99.999% 
1795566146.366	(  380000,  570000 ]       45   0.001% 100.000% 
1795566146.366	(  570000,  860000 ]       15   0.000% 100.000% 
1795566146.366	
1795566146.366	** Level 1 read latency histogram (micros):
1795566146.366	Count: 14745756 Average: 77.1691  StdDev: 149.23
1795566146.366	Min: 5  Median: 45.8330  Max: 753979
1795566146.366	Percentiles: P50: 45.83 P75: 65.80 P99: 226.23 P99.9: 478.71 P99.99: 2503.51
1795566146.366	------------------------------------------------------
1795566146.366	(       4,       6 ]       17   0.000%   0.000% 
1795566146.366	(       6,      10 ]       84   0.001%   0.001% 
1795566146.366	(      10,      15 ]       55   0.000%   0.001% 
1795566146.366	(      15,      22 ]       16   0.000%   0.001% 
1795566146.366	(      22,      34 ]        7   0.000%   0.001% 
1795566146.366	(      34,      51 ] 10592066  71.831%  71.832% ##############
1795566146.366	(      51,      76 ]   789226   5.352%  77.185% #
1795566146.366	(      76,     110 ]  2532928  17.177%  94.362% ###
1795566146.366	(     110,     170 ]   540327   3.664%  98.026% #
1795566146.366	(     170,     250 ]   204277   1.385%  99.412% 
1795566146.366	(     250,     380 ]    64821   0.440%  99.851% 
1795566146.366	(     380,     580 ]    14560   0.099%  99.950% 
1795566146.366	(     580,     870 ]     3832   0.026%  99.976% 
1795566146.366	(     870,    1300 ]     1560   0.011%  99.987% 
1795566146.366	(    1300,    1900 ]      398   0.003%  99.989% 
1795566146.366	(    1900,    2900 ]      178   0.001%  99.990% 
1795566146.366	(    2900,    4400 ]      161   0.001%  99.992% 
1795566146.366	(    4400,    6600 ]       42   0.000%  99.992% 
1795566146.366	(    6600,    9900 ]       38   0.000%  99.992% 
1795566146.366	(    9900,   14000 ]       17   0.000%  99.992% 
1795566146.366	(   14000,   22000 ]        7   0.000%  99.992% 
1795566146.366	(   22000,   33000 ]        4   0.000%  99.992% 
1795566146.366	(   33000,   50000 ]        9   0.000%  99.992% 
1795566146.366	(   50000,   75000 ]       99   0.001%  99.993% 
1795566146.366	(   75000,  110000 ]      544   0.004%  99.997% 
1795566146.366	(  110000,  170000 ]       64   0.000%  99.997% 
1795566146.366	(  170000,  250000 ]      185   0.001%  99.998% 
1795566146.366	(  250000,  380000 ]      149   0.001%  99.999% 
1795566146.366	(  380000,  570000 ]       76   0.001% 100.000% 
1795566146.366	(  570000,  860000 ]       39   0.000% 100.000% 
1795566146.366	
1795566146.366	** Level 2 read latency histogram (micros):
1795566146.366	Count: 44319368 Average: 73.3293  StdDev: 81.42
1795566146.366	Min: 5  Median: 46.0047  Max: 762693
1795566146.366	Percentiles: P50: 46.00 P75: 70.43 P99: 230.25 P99.9: 378.49 P99.99: 1111.71
1795566146.366	------------------------------------------------------
1795566146.366	(       4,       6 ]      315   0.001%   0.001% 
1795566146.366	(       6,      10 ]     2320   0.005%   0.006% 
1795566146.366	(      10,      15 ]      719   0.002%   0.008% 
1795566146.366	(      15,      22 ]      125   0.000%   0.008% 
1795566146.366	(      22,      34 ]       59   0.000%   0.008% 
1795566146.366	(      34,      51 ] 31375670  70.794%  70.802% ##############
1795566146.366	(      51,      76 ]  2394139   5.402%  76.204% #
1795566146.366	(      76,     110 ]  7903665  17.833%  94.038% ####
1795566146.366	(     110,     170 ]  1682976   3.797%  97.835% #
1795566146.366	(     170,     250 ]   685350   1.546%  99.382% 
1795566146.366	(     250,     380 ]   232419   0.524%  99.906% 
1795566146.366	(     380,     580 ]    30076   0.068%  99.974% 
1795566146.366	(     580,     870 ]     5935   0.013%  99.987% 
1795566146.366	(     870,    1300 ]     2078   0.005%  99.992% 
1795566146.366	(    1300,    1900 ]      712   0.002%  99.994% 
1795566146.366	(    1900,    2900 ]      472   0.001%  99.995% 
1795566146.366	(    2900,    4400 ]      479   0.001%  99.996% 
1795566146.366	(    4400,    6600 ]      150   0.000%  99.996% 
1795566146.366	(    6600,    9900 ]       63   0.000%  99.996% 
1795566146.366	(    9900,   14000 ]       28   0.000%  99.996% 
1795566146.366	(   14000,   22000 ]       18   0.000%  99.996% 
1795566146.366	(   22000,   33000 ]       10   0.000%  99.996% 
1795566146.366	(   33000,   50000 ]       14   0.000%  99.996% 
1795566146.366	(   50000,   75000 ]       96   0.000%  99.997% 
1795566146.366	(   75000,  110000 ]     1010   0.002%  99.999% 
1795566146.366	(  110000,  170000 ]      131   0.000%  99.999% 
1795566146.366	(  170000,  250000 ]      410   0.001% 100.000% 
1795566146.366	(  250000,  380000 ]      383   0.001% 100.001% 
1795566146.366	(  380000,  570000 ]      207   0.000% 100.001% 
1795566146.366	(  570000,  860000 ]       38   0.000% 100.002% 
1795566146.366	
1795566146.366	** Level 3 read latency histogram (micros):
1795566146.366	Count: 58058214 Average: 72.0094  StdDev: 43.47
1795566146.366	Min: 5  Median: 46.0348  Max: 792963
1795566146.366	Percentiles: P50: 46.03 P75: 72.25 P99: 225.77 P99.9: 374.05 P99.99: 1065.22
1795566146.366	------------------------------------------------------
1795566146.366	(       4,       6 ]      529   0.001%   0.001% 
1795566146.366	(       6,      10 ]     2847   0.005%   0.006% 
1795566146.366	(      10,      15 ]      929   0.002%   0.007% 
1795566146.366	(      15,      22 ]      206   0.000%   0.008% 
1795566146.366	(      22,      34 ]       81   0.000%   0.008% 
1795566146.366	(      34,      51 ] 40999026  70.617%  70.625% ##############
1795566146.366	(      51,      76 ]  2988387   5.147%  75.772% #
1795566146.366	(      76,     110 ] 10624382  18.300%  94.072% ####
1795566146.366	(     110,     170 ]  2249923   3.875%  97.947% #
1795566146.366	(     170,     250 ]   876968   1.510%  99.458% 
1795566146.366	(     250,     380 ]   269207   0.464%  99.921% 
1795566146.366	(     380,     580 ]    32162   0.055%  99.977% 
1795566146.366	(     580,     870 ]     6623   0.011%  99.988% 
1795566146.366	(     870,    1300 ]     2507   0.004%  99.992% 
1795566146.366	(    1300,    1900 ]      907   0.002%  99.994% 
1795566146.366	(    1900,    2900 ]      661   0.001%  99.995% 
1795566146.366	(    2900,    4400 ]      570   0.001%  99.996% 
1795566146.366	(    4400,    6600 ]      256   0.000%  99.996% 
1795566146.366	(    6600,    9900 ]       72   0.000%  99.997% 
1795566146.366	(    9900,   14000 ]       24   0.000%  99.997% 
1795566146.366	(   14000,   22000 ]       12   0.000%  99.997% 
1795566146.366	(   22000,   33000 ]        6   0.000%  99.997% 
1795566146.366	(   33000,   50000 ]       10   0.000%  99.997% 
1795566146.366	(   50000,   75000 ]      139   0.000%  99.997% 
1795566146.366	(   75000,  110000 ]     1223   0.002%  99.999% 
1795566146.366	(  110000,  170000 ]      134   0.000%  99.999% 
1795566146.366	(  170000,  250000 ]      498   0.001% 100.000% 
1795566146.366	(  250000,  380000 ]      443   0.001% 100.001% 
1795566146.366	(  380000,  570000 ]      205   0.000% 100.001% 
1795566146.366	(  570000,  860000 ]       51   0.000% 100.001% 
1795566146.366	
1795566146.366	** Level 4 read latency histogram (micros):
1795566146.366	Count: 57648861 Average: 72.0889  StdDev: 25.81
1795566146.366	Min: 5  Median: 46.0443  Max: 861964
1795566146.366	Percentiles: P50: 46.04 P75: 72.45 P99: 224.13 P99.9: 373.16 P99.99: 1127.93
1795566146.366	------------------------------------------------------
1795566146.366	(       4,       6 ]      347   0.001%   0.001% 
1795566146.366	(       6,      10 ]     1984   0.003%   0.004% 
1795566146.366	(      10,      15 ]      695   0.001%   0.005% 
1795566146.366	(      15,      22 ]      162   0.000%   0.006% 
1795566146.366	(      22,      34 ]       54   0.000%   0.006% 
1795566146.366	(      34,      51 ] 40679824  70.565%  70.570% ##############
1795566146.366	(      51,      76 ]  2975974   5.162%  75.733% #
1795566146.366	(      76,     110 ] 10592270  18.374%  94.106% ####
1795566146.366	(     110,     170 ]  2247822   3.899%  98.006% #
1795566146.366	(     170,     250 ]   847262   1.470%  99.475% 
1795566146.366	(     250,     380 ]   258406   0.448%  99.924% 
1795566146.366	(     380,     580 ]    30150   0.052%  99.976% 
1795566146.366	(     580,     870 ]     6352   0.011%  99.987% 
1795566146.366	(     870,    1300 ]     2991   0.005%  99.992% 
1795566146.366	(    1300,    1900 ]     1088   0.002%  99.994% 
1795566146.366	(    1900,    2900 ]      626   0.001%  99.995% 
1795566146.366	(    2900,    4400 ]      572   0.001%  99.996% 
1795566146.366	(    4400,    6600 ]      283   0.000%  99.997% 
1795566146.366	(    6600,    9900 ]      108   0.000%  99.997% 
1795566146.366	(    9900,   14000 ]       55   0.000%  99.997% 
1795566146.366	(   14000,   22000 ]       22   0.000%  99.997% 
1795566146.366	(   22000,   33000 ]        4   0.000%  99.997% 
1795566146.366	(   33000,   50000 ]       11   0.000%  99.997% 
1795566146.366	(   50000,   75000 ]       96   0.000%  99.997% 
1795566146.366	(   75000,  110000 ]     1132   0.002%  99.999% 
1795566146.366	(  110000,  170000 ]      149   0.000%  99.999% 
1795566146.366	(  170000,  250000 ]      476   0.001% 100.000% 
1795566146.366	(  250000,  380000 ]      418   0.001% 100.001% 
1795566146.366	(  380000,  570000 ]      224   0.000% 100.001% 
1795566146.366	(  570000,  860000 ]       61   0.000% 100.001% 
1795566146.366	(  860000, 1200000 ]        3   0.000% 100.001% 
1795566146.366	
1795566146.366	** Level 5 read latency histogram (micros):
1795566146.366	Count: 31032272 Average: 71.6645  StdDev: 80.43
1795566146.366	Min: 5  Median: 45.6801  Max: 763459
1795566146.366	Percentiles: P50: 45.68 P75: 60.54 P99: 224.84 P99.9: 375.59 P99.99: 2142.41
1795566146.366	------------------------------------------------------
1795566146.366	(       4,       6 ]      226   0.001%   0.001% 
1795566146.366	(       6,      10 ]     1668   0.005%   0.006% 
1795566146.366	(      10,      15 ]      581   0.002%   0.008% 
1795566146.366	(      15,      22 ]      112   0.000%   0.008% 
1795566146.366	(      22,      34 ]       50   0.000%   0.008% 
1795566146.366	(      34,      51 ] 22579477  72.761%  72.770% ###############
1795566146.366	(      51,      76 ]  1813814   5.845%  78.615% #
1795566146.366	(      76,     110 ]  4999995  16.112%  94.727% ###
1795566146.366	(     110,     170 ]  1013923   3.267%  97.994% #
1795566146.366	(     170,     250 ]   455255   1.467%  99.461% 
1795566146.366	(     250,     380 ]   140918   0.454%  99.915% 
1795566146.366	(     380,     580 ]    14429   0.046%  99.962% 
1795566146.366	(     580,     870 ]     4497   0.014%  99.976% 
1795566146.366	(     870,    1300 ]     3102   0.010%  99.986% 
1795566146.366	(    1300,    1900 ]      915   0.003%  99.989% 
1795566146.366	(    1900,    2900 ]      853   0.003%  99.992% 
1795566146.366	(    2900,    4400 ]      772   0.002%  99.995% 
1795566146.366	(    4400,    6600 ]      413   0.001%  99.996% 
1795566146.366	(    6600,    9900 ]      244   0.001%  99.997% 
1795566146.366	(    9900,   14000 ]       48   0.000%  99.997% 
1795566146.366	(   14000,   22000 ]       13   0.000%  99.997% 
1795566146.366	(   22000,   33000 ]        2   0.000%  99.997% 
1795566146.366	(   33000,   50000 ]        1   0.000%  99.997% 
1795566146.366	(   50000,   75000 ]        1   0.000%  99.997% 
1795566146.366	(   75000,  110000 ]      554   0.002%  99.999% 
1795566146.366	(  110000,  170000 ]       45   0.000%  99.999% 
1795566146.366	(  170000,  250000 ]      283   0.001% 100.000% 
1795566146.366	(  250000,  380000 ]      316   0.001% 100.001% 
1795566146.366	(  380000,  570000 ]      139   0.000% 100.001% 
1795566146.366	(  570000,  860000 ]       26   0.000% 100.001% 
1795566146.366	
1795566146.366	
1795566146.366	** DB Stats **
1795566146.366	Uptime(secs): 42635.3 total, 14.2 interval
1795566146.366	Cumulative writes: 34M writes, 34M keys, 25M commit groups, 1.3 writes per commit group, ingest: 33.72 GB, 0.81 MB/s
1795566146.366	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.72 GB, 0.81 MB/s
1795566146.366	Cumulative stall: 10:10:40.119 H:M:S, 85.9 percent
1795566146.366	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795566146.366	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795566146.366	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795566146.366	
1795566146.366	STATISTICS:
1795566146.366	rocksdb.block.cache.miss COUNT : 206853215
1795566146.366	rocksdb.block.cache.hit COUNT : 0
1795566146.366	rocksdb.block.cache.add COUNT : 0
1795566146.366	rocksdb.block.cache.add.failures COUNT : 0
1795566146.366	rocksdb.block.cache.index.miss COUNT : 0
1795566146.366	rocksdb.block.cache.index.hit COUNT : 0
1795566146.366	rocksdb.block.cache.index.add COUNT : 0
1795566146.366	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795566146.366	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795566146.366	rocksdb.block.cache.filter.miss COUNT : 0
1795566146.366	rocksdb.block.cache.filter.hit COUNT : 0
1795566146.366	rocksdb.block.cache.filter.add COUNT : 0
1795566146.366	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795566146.366	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795566146.366	rocksdb.block.cache.data.miss COUNT : 206853215
1795566146.366	rocksdb.block.cache.data.hit COUNT : 0
1795566146.366	rocksdb.block.cache.data.add COUNT : 0
1795566146.366	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795566146.366	rocksdb.block.cache.bytes.read COUNT : 0
1795566146.366	rocksdb.block.cache.bytes.write COUNT : 0
1795566146.366	rocksdb.bloom.filter.useful COUNT : 0
1795566146.366	rocksdb.bloom.filter.full.positive COUNT : 0
1795566146.366	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795566146.366	rocksdb.bloom.filter.micros COUNT : 0
1795566146.366	rocksdb.persistent.cache.hit COUNT : 0
1795566146.366	rocksdb.persistent.cache.miss COUNT : 0
1795566146.366	rocksdb.sim.block.cache.hit COUNT : 0
1795566146.366	rocksdb.sim.block.cache.miss COUNT : 0
1795566146.366	rocksdb.memtable.hit COUNT : 0
1795566146.366	rocksdb.memtable.miss COUNT : 0
1795566146.366	rocksdb.l0.hit COUNT : 0
1795566146.366	rocksdb.l1.hit COUNT : 0
1795566146.366	rocksdb.l2andup.hit COUNT : 0
1795566146.366	rocksdb.compaction.key.drop.new COUNT : 31626842
1795566146.366	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795566146.366	rocksdb.compaction.key.drop.range_del COUNT : 0
1795566146.366	rocksdb.compaction.key.drop.user COUNT : 0
1795566146.366	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795566146.366	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795566146.366	rocksdb.compaction.cancelled COUNT : 0
1795566146.366	rocksdb.number.keys.written COUNT : 34383360
1795566146.366	rocksdb.number.keys.read COUNT : 0
1795566146.366	rocksdb.number.keys.updated COUNT : 0
1795566146.366	rocksdb.bytes.written COUNT : 36204215712
1795566146.366	rocksdb.bytes.read COUNT : 0
1795566146.366	rocksdb.number.db.seek COUNT : 0
1795566146.366	rocksdb.number.db.next COUNT : 0
1795566146.366	rocksdb.number.db.prev COUNT : 0
1795566146.366	rocksdb.number.db.seek.found COUNT : 0
1795566146.366	rocksdb.number.db.next.found COUNT : 0
1795566146.366	rocksdb.number.db.prev.found COUNT : 0
1795566146.366	rocksdb.db.iter.bytes.read COUNT : 0
1795566146.366	rocksdb.no.file.closes COUNT : 0
1795566146.366	rocksdb.no.file.opens COUNT : 1909258
1795566146.366	rocksdb.no.file.errors COUNT : 0
1795566146.366	rocksdb.l0.slowdown.micros COUNT : 0
1795566146.366	rocksdb.memtable.compaction.micros COUNT : 0
1795566146.366	rocksdb.l0.num.files.stall.micros COUNT : 0
1795566146.366	rocksdb.stall.micros COUNT : 36640118589
1795566146.366	rocksdb.db.mutex.wait.micros COUNT : 0
1795566146.366	rocksdb.rate.limit.delay.millis COUNT : 0
1795566146.366	rocksdb.num.iterators COUNT : 0
1795566146.366	rocksdb.number.multiget.get COUNT : 0
1795566146.366	rocksdb.number.multiget.keys.read COUNT : 0
1795566146.366	rocksdb.number.multiget.bytes.read COUNT : 0
1795566146.366	rocksdb.number.deletes.filtered COUNT : 0
1795566146.366	rocksdb.number.merge.failures COUNT : 0
1795566146.366	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795566146.367	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795566146.367	rocksdb.number.reseeks.iteration COUNT : 0
1795566146.367	rocksdb.getupdatessince.calls COUNT : 0
1795566146.367	rocksdb.block.cachecompressed.miss COUNT : 0
1795566146.367	rocksdb.block.cachecompressed.hit COUNT : 0
1795566146.367	rocksdb.block.cachecompressed.add COUNT : 0
1795566146.367	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795566146.367	rocksdb.wal.synced COUNT : 0
1795566146.367	rocksdb.wal.bytes COUNT : 36204215712
1795566146.367	rocksdb.write.self COUNT : 25665656
1795566146.367	rocksdb.write.other COUNT : 8717704
1795566146.367	rocksdb.write.timeout COUNT : 0
1795566146.367	rocksdb.write.wal COUNT : 34383360
1795566146.367	rocksdb.compact.read.bytes COUNT : 869503369717
1795566146.367	rocksdb.compact.write.bytes COUNT : 836267073926
1795566146.367	rocksdb.flush.write.bytes COUNT : 36306831553
1795566146.367	rocksdb.compact.read.marked.bytes COUNT : 0
1795566146.367	rocksdb.compact.read.periodic.bytes COUNT : 0
1795566146.367	rocksdb.compact.read.ttl.bytes COUNT : 0
1795566146.367	rocksdb.compact.write.marked.bytes COUNT : 0
1795566146.367	rocksdb.compact.write.periodic.bytes COUNT : 0
1795566146.367	rocksdb.compact.write.ttl.bytes COUNT : 0
1795566146.367	rocksdb.number.direct.load.table.properties COUNT : 0
1795566146.367	rocksdb.number.superversion_acquires COUNT : 0
1795566146.367	rocksdb.number.superversion_releases COUNT : 0
1795566146.367	rocksdb.number.superversion_cleanups COUNT : 0
1795566146.367	rocksdb.number.block.compressed COUNT : 0
1795566146.367	rocksdb.number.block.decompressed COUNT : 0
1795566146.367	rocksdb.number.block.not_compressed COUNT : 0
1795566146.367	rocksdb.merge.operation.time.nanos COUNT : 0
1795566146.367	rocksdb.filter.operation.time.nanos COUNT : 0
1795566146.367	rocksdb.row.cache.hit COUNT : 0
1795566146.367	rocksdb.row.cache.miss COUNT : 0
1795566146.367	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795566146.367	rocksdb.read.amp.total.read.bytes COUNT : 0
1795566146.367	rocksdb.number.rate_limiter.drains COUNT : 0
1795566146.367	rocksdb.number.iter.skip COUNT : 0
1795566146.367	rocksdb.blobdb.num.put COUNT : 0
1795566146.367	rocksdb.blobdb.num.write COUNT : 0
1795566146.367	rocksdb.blobdb.num.get COUNT : 0
1795566146.367	rocksdb.blobdb.num.multiget COUNT : 0
1795566146.367	rocksdb.blobdb.num.seek COUNT : 0
1795566146.367	rocksdb.blobdb.num.next COUNT : 0
1795566146.367	rocksdb.blobdb.num.prev COUNT : 0
1795566146.367	rocksdb.blobdb.num.keys.written COUNT : 0
1795566146.367	rocksdb.blobdb.num.keys.read COUNT : 0
1795566146.367	rocksdb.blobdb.bytes.written COUNT : 0
1795566146.367	rocksdb.blobdb.bytes.read COUNT : 0
1795566146.367	rocksdb.blobdb.write.inlined COUNT : 0
1795566146.367	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795566146.367	rocksdb.blobdb.write.blob COUNT : 0
1795566146.367	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795566146.367	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795566146.367	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795566146.367	rocksdb.blobdb.blob.file.synced COUNT : 0
1795566146.367	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795566146.367	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795566146.367	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795566146.367	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795566146.367	rocksdb.blobdb.gc.num.files COUNT : 0
1795566146.367	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795566146.367	rocksdb.blobdb.gc.failures COUNT : 0
1795566146.367	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795566146.367	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795566146.367	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795566146.367	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795566146.367	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795566146.367	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795566146.367	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795566146.367	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795566146.367	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795566146.367	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795566146.367	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795566146.367	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795566146.367	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795566146.367	rocksdb.txn.get.tryagain COUNT : 0
1795566146.367	rocksdb.number.multiget.keys.found COUNT : 0
1795566146.367	rocksdb.num.iterator.created COUNT : 0
1795566146.367	rocksdb.num.iterator.deleted COUNT : 0
1795566146.367	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795566146.367	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795566146.367	rocksdb.block.cache.compression.dict.add COUNT : 0
1795566146.367	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795566146.367	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795566146.367	rocksdb.block.cache.add.redundant COUNT : 0
1795566146.367	rocksdb.block.cache.index.add.redundant COUNT : 0
1795566146.367	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795566146.367	rocksdb.block.cache.data.add.redundant COUNT : 0
1795566146.367	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795566146.367	rocksdb.files.marked.trash COUNT : 0
1795566146.367	rocksdb.files.deleted.immediately COUNT : 1903690
1795566146.367	rocksdb.error.handler.bg.errro.count COUNT : 0
1795566146.367	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795566146.367	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795566146.367	rocksdb.error.handler.autoresume.count COUNT : 0
1795566146.367	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795566146.367	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795566146.367	rocksdb.memtable.payload.bytes.at.flush COUNT : 36033437448
1795566146.367	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1973384
1795566146.367	rocksdb.secondary.cache.hits COUNT : 0
1795566146.367	rocksdb.verify_checksum.read.bytes COUNT : 0
1795566146.367	rocksdb.backup.read.bytes COUNT : 0
1795566146.367	rocksdb.backup.write.bytes COUNT : 0
1795566146.367	rocksdb.remote.compact.read.bytes COUNT : 0
1795566146.367	rocksdb.remote.compact.write.bytes COUNT : 0
1795566146.367	rocksdb.hot.file.read.bytes COUNT : 0
1795566146.367	rocksdb.warm.file.read.bytes COUNT : 0
1795566146.367	rocksdb.cold.file.read.bytes COUNT : 0
1795566146.367	rocksdb.hot.file.read.count COUNT : 0
1795566146.367	rocksdb.warm.file.read.count COUNT : 0
1795566146.367	rocksdb.cold.file.read.count COUNT : 0
1795566146.367	rocksdb.last.level.read.bytes COUNT : 0
1795566146.367	rocksdb.last.level.read.count COUNT : 0
1795566146.367	rocksdb.non.last.level.read.bytes COUNT : 869790919595
1795566146.367	rocksdb.non.last.level.read.count COUNT : 214490247
1795566146.367	rocksdb.block.checksum.compute.count COUNT : 210671731
1795566146.367	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.db.write.micros P50 : 1935.166872 P95 : 19937.878667 P99 : 70485.955350 P100 : 5760448.000000 COUNT : 34383360 SUM : 170009632089
1795566146.367	rocksdb.compaction.times.micros P50 : 93257.847345 P95 : 242003.725696 P99 : 775637.369626 P100 : 5850112.000000 COUNT : 298410 SUM : 34688392722
1795566146.367	rocksdb.compaction.times.cpu_micros P50 : 91590.183492 P95 : 237546.705998 P99 : 767855.579003 P100 : 5813055.000000 COUNT : 298410 SUM : 33957060701
1795566146.367	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.table.sync.micros P50 : 28852.922837 P95 : 382177.083333 P99 : 733754.353562 P100 : 1524614.000000 COUNT : 18399 SUM : 1145017324
1795566146.367	rocksdb.compaction.outfile.sync.micros P50 : 6490.575973 P95 : 13733.957274 P99 : 26288.265734 P100 : 1193920.000000 COUNT : 1854589 SUM : 17275128597
1795566146.367	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.manifest.file.sync.micros P50 : 488.590467 P95 : 804.256825 P99 : 484146.525215 P100 : 1451865.000000 COUNT : 237445 SUM : 3399404287
1795566146.367	rocksdb.table.open.io.micros P50 : 238.627706 P95 : 414.908608 P99 : 579.912324 P100 : 869093.000000 COUNT : 1909258 SUM : 751181916
1795566146.367	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.read.block.compaction.micros P50 : 46.302886 P95 : 126.315937 P99 : 230.485874 P100 : 862334.000000 COUNT : 206853215 SUM : 15213960064
1795566146.367	rocksdb.read.block.get.micros P50 : 52.463415 P95 : 106.679048 P99 : 213.989457 P100 : 624294.000000 COUNT : 1909258 SUM : 137525629
1795566146.367	rocksdb.write.raw.block.micros P50 : 0.535123 P95 : 1.507907 P99 : 40.118270 P100 : 2110547.000000 COUNT : 213165244 SUM : 402302861
1795566146.367	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.numfiles.in.singlecompaction P50 : 5.783681 P95 : 9.572753 P99 : 9.923172 P100 : 56.000000 COUNT : 299159 SUM : 1867585
1795566146.367	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.db.write.stall P50 : 0.734754 P95 : 4153.234258 P99 : 19257.339075 P100 : 5706063.000000 COUNT : 25643395 SUM : 36644220484
1795566146.367	rocksdb.sst.read.micros P50 : 45.960336 P95 : 122.882694 P99 : 226.346912 P100 : 861964.000000 COUNT : 214490247 SUM : 15592932572
1795566146.367	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.bytes.per.write P50 : 1131.072436 P95 : 3595.208606 P99 : 4188.000000 P100 : 4188.000000 COUNT : 25665656 SUM : 36204215712
1795566146.367	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.db.flush.micros P50 : 55118.601748 P95 : 418337.944664 P99 : 765702.845528 P100 : 5636382.000000 COUNT : 18398 SUM : 1661629055
1795566146.367	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795566146.367	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1866836 SUM : 0
1795566146.367	
