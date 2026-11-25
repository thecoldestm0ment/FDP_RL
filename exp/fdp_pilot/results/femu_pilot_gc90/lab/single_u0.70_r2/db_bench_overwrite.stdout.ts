1795446078.054	Initializing RocksDB Options from the specified file
1795446078.054	Initializing RocksDB Options from command-line flags
1795446085.748	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795446085.748	Values:     1024 bytes each (512 bytes after compression)
1795446085.748	Entries:    11678215
1795446085.748	Prefix:    0 bytes
1795446085.748	Keys per prefix:    0
1795446085.748	RawSize:    11582.7 MB (estimated)
1795446085.748	FileSize:   5880.4 MB (estimated)
1795446085.748	Write rate: 0 bytes/second
1795446085.748	Read rate: 0 ops/second
1795446085.748	Compression: NoCompression
1795446085.748	Compression sampling rate: 0
1795446085.748	Memtablerep: SkipListFactory
1795446085.748	Perf Level: 1
1795446085.748	------------------------------------------------
1795446085.748	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795466508.072	overwrite    :    3494.919 micros/op 1143 ops/sec;    1.1 MB/s
1795466513.070	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795466513.070	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466523.070	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466533.070	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466543.076	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466553.076	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466563.076	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466573.076	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795466573.076	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795466573.076	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795466573.077	
1795466573.077	Level Files Size(MB)
1795466573.077	--------------------
1795466573.077	  0        1        2
1795466573.077	  1        5        2
1795466573.077	  2       60       25
1795466573.077	  3      612      250
1795466573.077	  4     5563     2500
1795466573.077	  5    25867    11771
1795466573.077	  6        0        0
1795466573.077	
1795466573.079	
1795466573.079	
1795466573.079	** Compaction Stats [default] **
1795466573.079	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795466573.079	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795466573.079	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.0     29.5    797.57            402.10     12487    0.064     19K      8       0.0       0.0
1795466573.079	  L1      5/0    2.23 MB   0.9     38.6    23.0     15.7      38.6     23.0       0.0   1.7     29.0     29.0   1364.72           1299.90      6222    0.219     39M   7224       0.0       0.0
1795466573.079	  L2     60/0   24.78 MB   1.0    113.7    23.0     90.7     113.6     22.9       0.0   4.9     27.9     27.9   4166.29           3995.60     49205    0.085    115M    52K       0.0       0.0
1795466573.079	  L3    612/0   249.56 MB   1.0    148.3    22.9    125.4     147.8     22.4       0.0   6.4     28.5     28.4   5331.23           5097.55     52054    0.102    150M   525K       0.0       0.0
1795466573.079	  L4   5563/0    2.44 GB   1.0    149.7    22.4    127.3     144.7     17.4       0.0   6.5     28.6     27.7   5356.51           5121.23     51933    0.103    152M  5075K       0.0       0.0
1795466573.079	  L5  25867/0   11.49 GB   0.5     68.2    17.4     50.8      53.5      2.7       0.0   3.1     32.1     25.2   2176.56           2100.17     37065    0.059     69M    14M       0.0       0.0
1795466573.079	 Sum  32108/0   14.21 GB   0.0    518.5   108.7    409.8     521.2    111.4       0.0  22.7     27.7     27.8  19192.88          18016.54    208966    0.092    526M    20M       0.0       0.0
1795466573.079	 Int      0/0    0.00 KB   0.0      0.3     0.1      0.2       0.3      0.0       0.0 272381576.0     29.4     23.8     10.92             10.84       138    0.079    318K    60K       0.0       0.0
1795466573.079	
1795466573.079	** Compaction Stats [default] **
1795466573.079	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795466573.079	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795466573.079	 Low      0/0    0.00 KB   0.0    518.5   108.7    409.8     498.2     88.4       0.0   0.0     28.9     27.7  18397.54          17616.64    196481    0.094    526M    20M       0.0       0.0
1795466573.079	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     29.6    795.33            399.89     12484    0.064       0      0       0.0       0.0
1795466573.079	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    232.0      0.00              0.00         1    0.004       0      0       0.0       0.0
1795466573.079	
1795466573.079	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795466573.079	
1795466573.079	Uptime(secs): 20495.0 total, 24.0 interval
1795466573.079	Flush(GB): cumulative 22.964, interval 0.000
1795466573.079	AddFile(GB): cumulative 0.000, interval 0.000
1795466573.079	AddFile(Total Files): cumulative 0, interval 0
1795466573.079	AddFile(L0 Files): cumulative 0, interval 0
1795466573.079	AddFile(Keys): cumulative 0, interval 0
1795466573.079	Cumulative compaction: 521.19 GB write, 26.04 MB/s write, 518.47 GB read, 25.90 MB/s read, 19192.9 seconds
1795466573.079	Interval compaction: 0.25 GB write, 10.84 MB/s write, 0.31 GB read, 13.39 MB/s read, 10.9 seconds
1795466573.079	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 234338 slowdown for pending_compaction_bytes, 17 memtable_compaction, 2 memtable_slowdown, interval 0 total count
1795466573.079	Block cache LRUCache@0x58c884da3a70#40248 capacity: 8.00 MB collections: 114 last_copies: 2 last_secs: 5.4e-05 secs_since: 143
1795466573.079	Block cache entry stats(count,size,portion): Misc(2,4.19 KB,0.0511169%)
1795466573.079	
1795466573.079	** File Read Latency Histogram By Level [default] **
1795466573.079	** Level 0 read latency histogram (micros):
1795466573.079	Count: 5898113 Average: 63.9309  StdDev: 481.47
1795466573.079	Min: 9  Median: 45.5809  Max: 200435
1795466573.079	Percentiles: P50: 45.58 P75: 58.70 P99: 223.37 P99.9: 394.08 P99.99: 926.76
1795466573.079	------------------------------------------------------
1795466573.079	(       6,      10 ]        1   0.000%   0.000% 
1795466573.079	(      10,      15 ]        7   0.000%   0.000% 
1795466573.079	(      15,      22 ]        5   0.000%   0.000% 
1795466573.079	(      34,      51 ]  4329011  73.397%  73.397% ###############
1795466573.079	(      51,      76 ]   306959   5.204%  78.601% #
1795466573.079	(      76,     110 ]   957561  16.235%  94.836% ###
1795466573.079	(     110,     170 ]   194640   3.300%  98.136% #
1795466573.079	(     170,     250 ]    76369   1.295%  99.431% 
1795466573.079	(     250,     380 ]    27325   0.463%  99.894% 
1795466573.079	(     380,     580 ]     4787   0.081%  99.975% 
1795466573.079	(     580,     870 ]      824   0.014%  99.989% 
1795466573.079	(     870,    1300 ]      259   0.004%  99.994% 
1795466573.079	(    1300,    1900 ]       77   0.001%  99.995% 
1795466573.079	(    1900,    2900 ]       54   0.001%  99.996% 
1795466573.079	(    2900,    4400 ]       32   0.001%  99.997% 
1795466573.079	(    4400,    6600 ]       10   0.000%  99.997% 
1795466573.079	(    6600,    9900 ]       15   0.000%  99.997% 
1795466573.079	(    9900,   14000 ]        4   0.000%  99.997% 
1795466573.079	(   14000,   22000 ]        5   0.000%  99.997% 
1795466573.079	(   22000,   33000 ]        3   0.000%  99.997% 
1795466573.079	(   33000,   50000 ]        7   0.000%  99.997% 
1795466573.079	(   50000,   75000 ]       95   0.002%  99.999% 
1795466573.079	(   75000,  110000 ]       13   0.000%  99.999% 
1795466573.079	(  110000,  170000 ]       48   0.001% 100.000% 
1795466573.079	(  170000,  250000 ]        2   0.000% 100.000% 
1795466573.079	
1795466573.079	** Level 1 read latency histogram (micros):
1795466573.079	Count: 10215524 Average: 62.9508  StdDev: 273.96
1795466573.079	Min: 5  Median: 45.4151  Max: 202733
1795466573.079	Percentiles: P50: 45.42 P75: 53.58 P99: 209.92 P99.9: 372.06 P99.99: 826.83
1795466573.079	------------------------------------------------------
1795466573.079	(       4,       6 ]       10   0.000%   0.000% 
1795466573.079	(       6,      10 ]       97   0.001%   0.001% 
1795466573.079	(      10,      15 ]       41   0.000%   0.001% 
1795466573.079	(      15,      22 ]       11   0.000%   0.002% 
1795466573.079	(      22,      34 ]        3   0.000%   0.002% 
1795466573.079	(      34,      51 ]  7606496  74.460%  74.462% ###############
1795466573.079	(      51,      76 ]   533286   5.220%  79.682% #
1795466573.079	(      76,     110 ]  1600017  15.663%  95.345% ###
1795466573.079	(     110,     170 ]   314861   3.082%  98.427% #
1795466573.079	(     170,     250 ]   117341   1.149%  99.576% 
1795466573.079	(     250,     380 ]    35301   0.346%  99.921% 
1795466573.079	(     380,     580 ]     6172   0.060%  99.982% 
1795466573.079	(     580,     870 ]     1018   0.010%  99.991% 
1795466573.079	(     870,    1300 ]      304   0.003%  99.994% 
1795466573.079	(    1300,    1900 ]       88   0.001%  99.995% 
1795466573.079	(    1900,    2900 ]       67   0.001%  99.996% 
1795466573.079	(    2900,    4400 ]       59   0.001%  99.997% 
1795466573.079	(    4400,    6600 ]       18   0.000%  99.997% 
1795466573.079	(    6600,    9900 ]       24   0.000%  99.997% 
1795466573.079	(    9900,   14000 ]       13   0.000%  99.997% 
1795466573.079	(   14000,   22000 ]       10   0.000%  99.997% 
1795466573.079	(   22000,   33000 ]        9   0.000%  99.997% 
1795466573.079	(   33000,   50000 ]       28   0.000%  99.998% 
1795466573.079	(   50000,   75000 ]      139   0.001%  99.999% 
1795466573.079	(   75000,  110000 ]       33   0.000%  99.999% 
1795466573.079	(  110000,  170000 ]       91   0.001% 100.000% 
1795466573.079	(  170000,  250000 ]        5   0.000% 100.000% 
1795466573.079	
1795466573.079	** Level 2 read latency histogram (micros):
1795466573.079	Count: 30129096 Average: 63.4651  StdDev: 76.77
1795466573.079	Min: 5  Median: 45.6119  Max: 207468
1795466573.079	Percentiles: P50: 45.61 P75: 59.78 P99: 217.94 P99.9: 374.06 P99.99: 845.29
1795466573.079	------------------------------------------------------
1795466573.079	(       4,       6 ]      459   0.002%   0.002% 
1795466573.079	(       6,      10 ]     3533   0.012%   0.013% 
1795466573.079	(      10,      15 ]     1011   0.003%   0.017% 
1795466573.079	(      15,      22 ]      181   0.001%   0.017% 
1795466573.079	(      22,      34 ]       74   0.000%   0.017% 
1795466573.079	(      34,      51 ] 22047095  73.175%  73.193% ###############
1795466573.079	(      51,      76 ]  1550204   5.145%  78.338% #
1795466573.079	(      76,     110 ]  5010803  16.631%  94.969% ###
1795466573.079	(     110,     170 ]   990590   3.288%  98.257% #
1795466573.079	(     170,     250 ]   373534   1.240%  99.497% 
1795466573.079	(     250,     380 ]   127297   0.423%  99.919% 
1795466573.079	(     380,     580 ]    18179   0.060%  99.980% 
1795466573.079	(     580,     870 ]     3414   0.011%  99.991% 
1795466573.079	(     870,    1300 ]     1307   0.004%  99.995% 
1795466573.079	(    1300,    1900 ]      459   0.002%  99.997% 
1795466573.079	(    1900,    2900 ]      231   0.001%  99.998% 
1795466573.079	(    2900,    4400 ]      266   0.001%  99.998% 
1795466573.079	(    4400,    6600 ]       37   0.000%  99.999% 
1795466573.079	(    6600,    9900 ]       36   0.000%  99.999% 
1795466573.079	(    9900,   14000 ]       35   0.000%  99.999% 
1795466573.079	(   14000,   22000 ]       24   0.000%  99.999% 
1795466573.079	(   22000,   33000 ]       24   0.000%  99.999% 
1795466573.079	(   33000,   50000 ]       72   0.000%  99.999% 
1795466573.079	(   50000,   75000 ]      390   0.001% 100.001% 
1795466573.079	(   75000,  110000 ]      100   0.000% 100.001% 
1795466573.079	(  110000,  170000 ]      187   0.001% 100.001% 
1795466573.079	(  170000,  250000 ]        5   0.000% 100.001% 
1795466573.079	
1795466573.079	** Level 3 read latency histogram (micros):
1795466573.079	Count: 39206747 Average: 63.3913  StdDev: 30.03
1795466573.079	Min: 5  Median: 45.6477  Max: 205536
1795466573.079	Percentiles: P50: 45.65 P75: 60.62 P99: 219.24 P99.9: 368.96 P99.99: 735.34
1795466573.079	------------------------------------------------------
1795466573.079	(       4,       6 ]      324   0.001%   0.001% 
1795466573.079	(       6,      10 ]     1662   0.004%   0.005% 
1795466573.079	(      10,      15 ]      527   0.001%   0.006% 
1795466573.079	(      15,      22 ]      102   0.000%   0.007% 
1795466573.079	(      22,      34 ]       26   0.000%   0.007% 
1795466573.079	(      34,      51 ] 28607570  72.966%  72.973% ###############
1795466573.079	(      51,      76 ]  2064696   5.266%  78.239% #
1795466573.079	(      76,     110 ]  6496660  16.570%  94.809% ###
1795466573.079	(     110,     170 ]  1313641   3.351%  98.160% #
1795466573.079	(     170,     250 ]   535286   1.365%  99.525% 
1795466573.079	(     250,     380 ]   160690   0.410%  99.935% 
1795466573.079	(     380,     580 ]    19978   0.051%  99.986% 
1795466573.079	(     580,     870 ]     3107   0.008%  99.994% 
1795466573.079	(     870,    1300 ]     1105   0.003%  99.996% 
1795466573.079	(    1300,    1900 ]      431   0.001%  99.998% 
1795466573.079	(    1900,    2900 ]      256   0.001%  99.998% 
1795466573.079	(    2900,    4400 ]      188   0.000%  99.999% 
1795466573.079	(    4400,    6600 ]       47   0.000%  99.999% 
1795466573.079	(    6600,    9900 ]       62   0.000%  99.999% 
1795466573.079	(    9900,   14000 ]       39   0.000%  99.999% 
1795466573.079	(   14000,   22000 ]       33   0.000%  99.999% 
1795466573.079	(   22000,   33000 ]       22   0.000%  99.999% 
1795466573.079	(   33000,   50000 ]      139   0.000% 100.000% 
1795466573.079	(   50000,   75000 ]      459   0.001% 100.001% 
1795466573.079	(   75000,  110000 ]      131   0.000% 100.001% 
1795466573.079	(  110000,  170000 ]      197   0.001% 100.002% 
1795466573.079	(  170000,  250000 ]        5   0.000% 100.002% 
1795466573.079	
1795466573.079	** Level 4 read latency histogram (micros):
1795466573.079	Count: 38307622 Average: 64.0108  StdDev: 76.13
1795466573.079	Min: 5  Median: 45.7943  Max: 212678
1795466573.079	Percentiles: P50: 45.79 P75: 64.64 P99: 222.76 P99.9: 370.45 P99.99: 819.99
1795466573.079	------------------------------------------------------
1795466573.079	(       4,       6 ]      318   0.001%   0.001% 
1795466573.079	(       6,      10 ]     2244   0.006%   0.007% 
1795466573.079	(      10,      15 ]      616   0.002%   0.008% 
1795466573.079	(      15,      22 ]      125   0.000%   0.009% 
1795466573.079	(      22,      34 ]       48   0.000%   0.009% 
1795466573.079	(      34,      51 ] 27603066  72.056%  72.065% ##############
1795466573.079	(      51,      76 ]  2060211   5.378%  77.443% #
1795466573.079	(      76,     110 ]  6532001  17.051%  94.495% ###
1795466573.079	(     110,     170 ]  1358034   3.545%  98.040% #
1795466573.079	(     170,     250 ]   557782   1.456%  99.496% 
1795466573.079	(     250,     380 ]   167155   0.436%  99.932% 
1795466573.079	(     380,     580 ]    19342   0.050%  99.983% 
1795466573.079	(     580,     870 ]     3443   0.009%  99.992% 
1795466573.079	(     870,    1300 ]     1723   0.004%  99.996% 
1795466573.079	(    1300,    1900 ]      558   0.001%  99.998% 
1795466573.079	(    1900,    2900 ]      317   0.001%  99.998% 
1795466573.079	(    2900,    4400 ]      306   0.001%  99.999% 
1795466573.079	(    4400,    6600 ]       76   0.000%  99.999% 
1795466573.079	(    6600,    9900 ]       70   0.000% 100.000% 
1795466573.079	(    9900,   14000 ]       31   0.000% 100.000% 
1795466573.079	(   14000,   22000 ]       22   0.000% 100.000% 
1795466573.079	(   22000,   33000 ]       15   0.000% 100.000% 
1795466573.079	(   33000,   50000 ]       97   0.000% 100.000% 
1795466573.079	(   50000,   75000 ]      469   0.001% 100.001% 
1795466573.079	(   75000,  110000 ]      100   0.000% 100.001% 
1795466573.079	(  110000,  170000 ]      202   0.001% 100.002% 
1795466573.079	(  170000,  250000 ]        8   0.000% 100.002% 
1795466573.079	
1795466573.079	** Level 5 read latency histogram (micros):
1795466573.079	Count: 13554628 Average: 63.4074  StdDev: 298.94
1795466573.079	Min: 5  Median: 45.4782  Max: 212919
1795466573.079	Percentiles: P50: 45.48 P75: 55.03 P99: 225.21 P99.9: 423.09 P99.99: 1808.25
1795466573.079	------------------------------------------------------
1795466573.079	(       4,       6 ]      155   0.001%   0.001% 
1795466573.079	(       6,      10 ]     1633   0.012%   0.013% 
1795466573.079	(      10,      15 ]      521   0.004%   0.017% 
1795466573.079	(      15,      22 ]       99   0.001%   0.018% 
1795466573.079	(      22,      34 ]       37   0.000%   0.018% 
1795466573.079	(      34,      51 ] 10034059  74.027%  74.045% ###############
1795466573.079	(      51,      76 ]   802304   5.919%  79.964% #
1795466573.079	(      76,     110 ]  2040017  15.050%  95.014% ###
1795466573.079	(     110,     170 ]   402993   2.973%  97.987% #
1795466573.079	(     170,     250 ]   198892   1.467%  99.455% 
1795466573.079	(     250,     380 ]    58907   0.435%  99.889% 
1795466573.079	(     380,     580 ]     6759   0.050%  99.939% 
1795466573.079	(     580,     870 ]     3386   0.025%  99.964% 
1795466573.079	(     870,    1300 ]     2954   0.022%  99.986% 
1795466573.079	(    1300,    1900 ]      657   0.005%  99.991% 
1795466573.079	(    1900,    2900 ]      455   0.003%  99.994% 
1795466573.079	(    2900,    4400 ]      402   0.003%  99.997% 
1795466573.079	(    4400,    6600 ]      149   0.001%  99.998% 
1795466573.079	(    6600,    9900 ]       65   0.000%  99.999% 
1795466573.079	(    9900,   14000 ]       18   0.000%  99.999% 
1795466573.079	(   14000,   22000 ]        7   0.000%  99.999% 
1795466573.079	(   22000,   33000 ]        6   0.000%  99.999% 
1795466573.079	(   33000,   50000 ]       15   0.000%  99.999% 
1795466573.079	(   50000,   75000 ]      205   0.002% 100.000% 
1795466573.079	(   75000,  110000 ]       21   0.000% 100.001% 
1795466573.079	(  110000,  170000 ]       87   0.001% 100.001% 
1795466573.079	(  170000,  250000 ]        3   0.000% 100.001% 
1795466573.079	
1795466573.079	
1795466573.079	** DB Stats **
1795466573.079	Uptime(secs): 20495.0 total, 24.0 interval
1795466573.079	Cumulative writes: 23M writes, 23M keys, 18M commit groups, 1.3 writes per commit group, ingest: 22.91 GB, 1.14 MB/s
1795466573.079	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.91 GB, 1.14 MB/s
1795466573.079	Cumulative stall: 04:59:35.975 H:M:S, 87.7 percent
1795466573.079	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795466573.079	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795466573.079	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795466573.079	
1795466573.079	STATISTICS:
1795466573.079	rocksdb.block.cache.miss COUNT : 132418325
1795466573.079	rocksdb.block.cache.hit COUNT : 0
1795466573.079	rocksdb.block.cache.add COUNT : 0
1795466573.079	rocksdb.block.cache.add.failures COUNT : 0
1795466573.079	rocksdb.block.cache.index.miss COUNT : 0
1795466573.079	rocksdb.block.cache.index.hit COUNT : 0
1795466573.079	rocksdb.block.cache.index.add COUNT : 0
1795466573.080	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795466573.080	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795466573.080	rocksdb.block.cache.filter.miss COUNT : 0
1795466573.080	rocksdb.block.cache.filter.hit COUNT : 0
1795466573.080	rocksdb.block.cache.filter.add COUNT : 0
1795466573.080	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795466573.080	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795466573.080	rocksdb.block.cache.data.miss COUNT : 132418325
1795466573.080	rocksdb.block.cache.data.hit COUNT : 0
1795466573.080	rocksdb.block.cache.data.add COUNT : 0
1795466573.080	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795466573.080	rocksdb.block.cache.bytes.read COUNT : 0
1795466573.080	rocksdb.block.cache.bytes.write COUNT : 0
1795466573.080	rocksdb.bloom.filter.useful COUNT : 0
1795466573.080	rocksdb.bloom.filter.full.positive COUNT : 0
1795466573.080	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795466573.080	rocksdb.bloom.filter.micros COUNT : 0
1795466573.080	rocksdb.persistent.cache.hit COUNT : 0
1795466573.080	rocksdb.persistent.cache.miss COUNT : 0
1795466573.080	rocksdb.sim.block.cache.hit COUNT : 0
1795466573.080	rocksdb.sim.block.cache.miss COUNT : 0
1795466573.080	rocksdb.memtable.hit COUNT : 0
1795466573.080	rocksdb.memtable.miss COUNT : 0
1795466573.080	rocksdb.l0.hit COUNT : 0
1795466573.080	rocksdb.l1.hit COUNT : 0
1795466573.080	rocksdb.l2andup.hit COUNT : 0
1795466573.080	rocksdb.compaction.key.drop.new COUNT : 20597244
1795466573.080	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795466573.080	rocksdb.compaction.key.drop.range_del COUNT : 0
1795466573.080	rocksdb.compaction.key.drop.user COUNT : 0
1795466573.080	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795466573.080	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795466573.080	rocksdb.compaction.cancelled COUNT : 0
1795466573.080	rocksdb.number.keys.written COUNT : 23356432
1795466573.080	rocksdb.number.keys.read COUNT : 0
1795466573.080	rocksdb.number.keys.updated COUNT : 0
1795466573.080	rocksdb.bytes.written COUNT : 24603877224
1795466573.080	rocksdb.bytes.read COUNT : 0
1795466573.080	rocksdb.number.db.seek COUNT : 0
1795466573.080	rocksdb.number.db.next COUNT : 0
1795466573.080	rocksdb.number.db.prev COUNT : 0
1795466573.080	rocksdb.number.db.seek.found COUNT : 0
1795466573.080	rocksdb.number.db.next.found COUNT : 0
1795466573.080	rocksdb.number.db.prev.found COUNT : 0
1795466573.080	rocksdb.db.iter.bytes.read COUNT : 0
1795466573.080	rocksdb.no.file.closes COUNT : 0
1795466573.080	rocksdb.no.file.opens COUNT : 1224211
1795466573.080	rocksdb.no.file.errors COUNT : 0
1795466573.080	rocksdb.l0.slowdown.micros COUNT : 0
1795466573.080	rocksdb.memtable.compaction.micros COUNT : 0
1795466573.080	rocksdb.l0.num.files.stall.micros COUNT : 0
1795466573.080	rocksdb.stall.micros COUNT : 17975975229
1795466573.080	rocksdb.db.mutex.wait.micros COUNT : 0
1795466573.080	rocksdb.rate.limit.delay.millis COUNT : 0
1795466573.080	rocksdb.num.iterators COUNT : 0
1795466573.080	rocksdb.number.multiget.get COUNT : 0
1795466573.080	rocksdb.number.multiget.keys.read COUNT : 0
1795466573.080	rocksdb.number.multiget.bytes.read COUNT : 0
1795466573.080	rocksdb.number.deletes.filtered COUNT : 0
1795466573.080	rocksdb.number.merge.failures COUNT : 0
1795466573.080	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795466573.080	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795466573.080	rocksdb.number.reseeks.iteration COUNT : 0
1795466573.080	rocksdb.getupdatessince.calls COUNT : 0
1795466573.080	rocksdb.block.cachecompressed.miss COUNT : 0
1795466573.080	rocksdb.block.cachecompressed.hit COUNT : 0
1795466573.080	rocksdb.block.cachecompressed.add COUNT : 0
1795466573.080	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795466573.080	rocksdb.wal.synced COUNT : 0
1795466573.080	rocksdb.wal.bytes COUNT : 24603877224
1795466573.080	rocksdb.write.self COUNT : 18313518
1795466573.080	rocksdb.write.other COUNT : 5042914
1795466573.080	rocksdb.write.timeout COUNT : 0
1795466573.080	rocksdb.write.wal COUNT : 23356432
1795466573.080	rocksdb.compact.read.bytes COUNT : 556611221380
1795466573.080	rocksdb.compact.write.bytes COUNT : 534966204702
1795466573.080	rocksdb.flush.write.bytes COUNT : 24659724882
1795466573.080	rocksdb.compact.read.marked.bytes COUNT : 0
1795466573.080	rocksdb.compact.read.periodic.bytes COUNT : 0
1795466573.080	rocksdb.compact.read.ttl.bytes COUNT : 0
1795466573.080	rocksdb.compact.write.marked.bytes COUNT : 0
1795466573.080	rocksdb.compact.write.periodic.bytes COUNT : 0
1795466573.080	rocksdb.compact.write.ttl.bytes COUNT : 0
1795466573.080	rocksdb.number.direct.load.table.properties COUNT : 0
1795466573.080	rocksdb.number.superversion_acquires COUNT : 0
1795466573.080	rocksdb.number.superversion_releases COUNT : 0
1795466573.080	rocksdb.number.superversion_cleanups COUNT : 0
1795466573.080	rocksdb.number.block.compressed COUNT : 0
1795466573.080	rocksdb.number.block.decompressed COUNT : 0
1795466573.080	rocksdb.number.block.not_compressed COUNT : 0
1795466573.080	rocksdb.merge.operation.time.nanos COUNT : 0
1795466573.080	rocksdb.filter.operation.time.nanos COUNT : 0
1795466573.080	rocksdb.row.cache.hit COUNT : 0
1795466573.080	rocksdb.row.cache.miss COUNT : 0
1795466573.080	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795466573.080	rocksdb.read.amp.total.read.bytes COUNT : 0
1795466573.080	rocksdb.number.rate_limiter.drains COUNT : 0
1795466573.080	rocksdb.number.iter.skip COUNT : 0
1795466573.080	rocksdb.blobdb.num.put COUNT : 0
1795466573.080	rocksdb.blobdb.num.write COUNT : 0
1795466573.080	rocksdb.blobdb.num.get COUNT : 0
1795466573.080	rocksdb.blobdb.num.multiget COUNT : 0
1795466573.080	rocksdb.blobdb.num.seek COUNT : 0
1795466573.080	rocksdb.blobdb.num.next COUNT : 0
1795466573.080	rocksdb.blobdb.num.prev COUNT : 0
1795466573.080	rocksdb.blobdb.num.keys.written COUNT : 0
1795466573.080	rocksdb.blobdb.num.keys.read COUNT : 0
1795466573.080	rocksdb.blobdb.bytes.written COUNT : 0
1795466573.080	rocksdb.blobdb.bytes.read COUNT : 0
1795466573.080	rocksdb.blobdb.write.inlined COUNT : 0
1795466573.080	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795466573.080	rocksdb.blobdb.write.blob COUNT : 0
1795466573.080	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795466573.080	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795466573.080	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795466573.080	rocksdb.blobdb.blob.file.synced COUNT : 0
1795466573.080	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795466573.080	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795466573.080	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795466573.080	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795466573.080	rocksdb.blobdb.gc.num.files COUNT : 0
1795466573.080	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795466573.080	rocksdb.blobdb.gc.failures COUNT : 0
1795466573.080	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795466573.080	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795466573.080	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795466573.080	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795466573.080	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795466573.080	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795466573.080	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795466573.080	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795466573.080	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795466573.080	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795466573.080	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795466573.080	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795466573.080	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795466573.080	rocksdb.txn.get.tryagain COUNT : 0
1795466573.080	rocksdb.number.multiget.keys.found COUNT : 0
1795466573.080	rocksdb.num.iterator.created COUNT : 0
1795466573.080	rocksdb.num.iterator.deleted COUNT : 0
1795466573.080	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795466573.080	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795466573.080	rocksdb.block.cache.compression.dict.add COUNT : 0
1795466573.080	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795466573.080	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795466573.080	rocksdb.block.cache.add.redundant COUNT : 0
1795466573.080	rocksdb.block.cache.index.add.redundant COUNT : 0
1795466573.080	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795466573.080	rocksdb.block.cache.data.add.redundant COUNT : 0
1795466573.080	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795466573.080	rocksdb.files.marked.trash COUNT : 0
1795466573.080	rocksdb.files.deleted.immediately COUNT : 1217140
1795466573.080	rocksdb.error.handler.bg.errro.count COUNT : 0
1795466573.080	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795466573.080	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795466573.080	rocksdb.error.handler.autoresume.count COUNT : 0
1795466573.080	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795466573.080	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795466573.080	rocksdb.memtable.payload.bytes.at.flush COUNT : 24475943584
1795466573.080	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1895832
1795466573.080	rocksdb.secondary.cache.hits COUNT : 0
1795466573.080	rocksdb.verify_checksum.read.bytes COUNT : 0
1795466573.080	rocksdb.backup.read.bytes COUNT : 0
1795466573.080	rocksdb.backup.write.bytes COUNT : 0
1795466573.080	rocksdb.remote.compact.read.bytes COUNT : 0
1795466573.080	rocksdb.remote.compact.write.bytes COUNT : 0
1795466573.080	rocksdb.hot.file.read.bytes COUNT : 0
1795466573.080	rocksdb.warm.file.read.bytes COUNT : 0
1795466573.080	rocksdb.cold.file.read.bytes COUNT : 0
1795466573.080	rocksdb.hot.file.read.count COUNT : 0
1795466573.080	rocksdb.warm.file.read.count COUNT : 0
1795466573.080	rocksdb.cold.file.read.count COUNT : 0
1795466573.080	rocksdb.last.level.read.bytes COUNT : 0
1795466573.080	rocksdb.last.level.read.count COUNT : 0
1795466573.080	rocksdb.non.last.level.read.bytes COUNT : 556806739095
1795466573.080	rocksdb.non.last.level.read.count COUNT : 137315169
1795466573.080	rocksdb.block.checksum.compute.count COUNT : 134866747
1795466573.080	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.db.write.micros P50 : 38.645873 P95 : 13111.777264 P99 : 51713.948880 P100 : 5048184.000000 COUNT : 23356432 SUM : 81589887041
1795466573.080	rocksdb.compaction.times.micros P50 : 87059.929957 P95 : 190872.297838 P99 : 276491.061453 P100 : 3965429.000000 COUNT : 196481 SUM : 18397543101
1795466573.080	rocksdb.compaction.times.cpu_micros P50 : 83707.323214 P95 : 180672.026073 P99 : 248976.121673 P100 : 3255132.000000 COUNT : 196481 SUM : 17616643776
1795466573.080	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.table.sync.micros P50 : 25777.472527 P95 : 52739.197531 P99 : 158111.111111 P100 : 1065408.000000 COUNT : 12485 SUM : 372237587
1795466573.080	rocksdb.compaction.outfile.sync.micros P50 : 5976.892743 P95 : 13076.429457 P99 : 22063.655407 P100 : 224657.000000 COUNT : 1187190 SUM : 8071304343
1795466573.080	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.manifest.file.sync.micros P50 : 486.640492 P95 : 682.345248 P99 : 86613.389392 P100 : 986711.000000 COUNT : 172202 SUM : 406327565
1795466573.080	rocksdb.table.open.io.micros P50 : 240.517297 P95 : 460.422254 P99 : 761.397931 P100 : 206924.000000 COUNT : 1224211 SUM : 388342364
1795466573.080	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.read.block.compaction.micros P50 : 45.939274 P95 : 116.728880 P99 : 223.667673 P100 : 212926.000000 COUNT : 132418325 SUM : 8537208508
1795466573.080	rocksdb.read.block.get.micros P50 : 54.466418 P95 : 107.674866 P99 : 234.254460 P100 : 130915.000000 COUNT : 1224211 SUM : 84625303
1795466573.080	rocksdb.write.raw.block.micros P50 : 0.536546 P95 : 1.578010 P99 : 41.401138 P100 : 2002170.000000 COUNT : 136710999 SUM : 264289457
1795466573.080	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.numfiles.in.singlecompaction P50 : 5.709199 P95 : 9.571050 P99 : 9.923328 P100 : 55.000000 COUNT : 197036 SUM : 1192658
1795466573.080	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.db.write.stall P50 : 0.641524 P95 : 3040.676578 P99 : 14124.010690 P100 : 5047863.000000 COUNT : 18295014 SUM : 17978551801
1795466573.080	rocksdb.sst.read.micros P50 : 45.642874 P95 : 113.308621 P99 : 220.344777 P100 : 212919.000000 COUNT : 137315169 SUM : 8729516531
1795466573.080	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.bytes.per.write P50 : 1121.625081 P95 : 3389.277806 P99 : 4188.000000 P100 : 4188.000000 COUNT : 18313518 SUM : 24603877224
1795466573.080	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.db.flush.micros P50 : 57295.409182 P95 : 148179.966044 P99 : 237294.395280 P100 : 4908777.000000 COUNT : 12484 SUM : 795334290
1795466573.080	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466573.080	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1192103 SUM : 0
1795466573.080	
