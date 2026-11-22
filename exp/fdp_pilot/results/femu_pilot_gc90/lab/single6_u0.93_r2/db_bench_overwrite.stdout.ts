1795313032.460	Initializing RocksDB Options from the specified file
1795313032.460	Initializing RocksDB Options from command-line flags
1795313045.134	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795313045.134	Values:     1024 bytes each (512 bytes after compression)
1795313045.134	Entries:    17191679
1795313045.134	Prefix:    0 bytes
1795313045.134	Keys per prefix:    0
1795313045.134	RawSize:    17051.1 MB (estimated)
1795313045.134	FileSize:   8656.7 MB (estimated)
1795313045.134	Write rate: 0 bytes/second
1795313045.134	Read rate: 0 ops/second
1795313045.134	Compression: NoCompression
1795313045.134	Compression sampling rate: 0
1795313045.134	Memtablerep: SkipListFactory
1795313045.134	Perf Level: 1
1795313045.134	------------------------------------------------
1795313045.134	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795355281.010	overwrite    :    4908.531 micros/op 814 ops/sec;    0.8 MB/s
1795355286.010	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795355286.011	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355296.011	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355306.010	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355316.032	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355326.031	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355336.031	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355346.031	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795355346.032	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795355346.032	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795355346.034	
1795355346.034	Level Files Size(MB)
1795355346.034	--------------------
1795355346.034	  0        0        0
1795355346.034	  1        4        2
1795355346.034	  2       58       25
1795355346.034	  3      602      250
1795355346.034	  4     5692     2500
1795355346.034	  5    36069    17326
1795355346.034	  6        0        0
1795355346.034	
1795355346.040	
1795355346.040	
1795355346.040	** Compaction Stats [default] **
1795355346.040	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795355346.040	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795355346.040	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     21.4   1620.97           1139.96     18398    0.088     14K      2       0.0       0.0
1795355346.040	  L1      4/0    2.02 MB   0.8     55.7    33.8     21.9      55.8     33.9       0.0   1.6     23.0     23.0   2483.77           2424.31      9191    0.270     56M   6793       0.0       0.0
1795355346.040	  L2     58/0   24.60 MB   1.0    167.2    33.8    133.3     167.1     33.8       0.0   4.9     22.1     22.1   7755.46           7574.72     72450    0.107    169M    51K       0.0       0.0
1795355346.040	  L3    602/0   249.56 MB   1.0    219.3    33.8    185.6     218.8     33.3       0.0   6.5     23.0     23.0   9753.03           9544.90     76690    0.127    222M   514K       0.0       0.0
1795355346.040	  L4   5692/0    2.44 GB   1.0    222.3    33.3    189.0     217.3     28.3       0.0   6.5     22.2     21.7  10242.24          10029.63     77174    0.133    225M  5052K       0.0       0.0
1795355346.040	  L5  36069/0   16.92 GB   0.7    145.1    28.3    116.8     119.5      2.7       0.0   4.2     23.8     19.6   6243.36           6109.61     62762    0.099    147M    26M       0.0       0.0
1795355346.040	 Sum  42425/0   19.63 GB   0.0    809.6   163.0    646.6     812.3    165.7       0.0  24.0     21.8     21.8  38098.83          36823.13    316665    0.120    822M    31M       0.0       0.0
1795355346.040	 Int      0/0    0.00 KB   0.0      0.9     0.2      0.8       0.8      0.0       0.0 844731063.0     23.6     20.0     40.27             39.82       330    0.122    941K   141K       0.0       0.0
1795355346.040	
1795355346.040	** Compaction Stats [default] **
1795355346.040	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795355346.040	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795355346.040	 Low      0/0    0.00 KB   0.0    809.6   163.0    646.6     778.5    131.9       0.0   0.0     22.7     21.9  36478.76          35684.07    298269    0.122    822M    31M       0.0       0.0
1795355346.040	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     21.4   1620.06           1139.06     18395    0.088       0      0       0.0       0.0
1795355346.040	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    204.2      0.00              0.00         1    0.005       0      0       0.0       0.0
1795355346.040	
1795355346.040	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795355346.040	
1795355346.040	Uptime(secs): 42313.5 total, 52.2 interval
1795355346.040	Flush(GB): cumulative 33.808, interval 0.000
1795355346.040	AddFile(GB): cumulative 0.000, interval 0.000
1795355346.040	AddFile(Total Files): cumulative 0, interval 0
1795355346.040	AddFile(L0 Files): cumulative 0, interval 0
1795355346.040	AddFile(Keys): cumulative 0, interval 0
1795355346.040	Cumulative compaction: 812.35 GB write, 19.66 MB/s write, 809.64 GB read, 19.59 MB/s read, 38098.8 seconds
1795355346.040	Interval compaction: 0.79 GB write, 15.42 MB/s write, 0.93 GB read, 18.15 MB/s read, 40.3 seconds
1795355346.040	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 354080 slowdown for pending_compaction_bytes, 18 memtable_compaction, 5 memtable_slowdown, interval 197 total count
1795355346.040	Block cache LRUCache@0x5d899306fa70#67406 capacity: 8.00 MB collections: 235 last_copies: 2 last_secs: 7.2e-05 secs_since: 172
1795355346.040	Block cache entry stats(count,size,portion): Misc(1,0.00 KB,0%)
1795355346.040	
1795355346.040	** File Read Latency Histogram By Level [default] **
1795355346.040	** Level 0 read latency histogram (micros):
1795355346.040	Count: 8680226 Average: 82.0888  StdDev: 100.91
1795355346.040	Min: 8  Median: 45.8623  Max: 761279
1795355346.040	Percentiles: P50: 45.86 P75: 69.07 P99: 229.13 P99.9: 448.37 P99.99: 88589.99
1795355346.040	------------------------------------------------------
1795355346.040	(       6,      10 ]        1   0.000%   0.000% 
1795355346.040	(      10,      15 ]        9   0.000%   0.000% 
1795355346.040	(      15,      22 ]        2   0.000%   0.000% 
1795355346.040	(      22,      34 ]        3   0.000%   0.000% 
1795355346.040	(      34,      51 ]  6219844  71.655%  71.655% ##############
1795355346.040	(      51,      76 ]   401627   4.627%  76.282% #
1795355346.040	(      76,     110 ]  1541610  17.760%  94.042% ####
1795355346.040	(     110,     170 ]   334731   3.856%  97.899% #
1795355346.040	(     170,     250 ]   129331   1.490%  99.389% 
1795355346.040	(     250,     380 ]    41885   0.483%  99.871% 
1795355346.040	(     380,     580 ]     7321   0.084%  99.956% 
1795355346.040	(     580,     870 ]     1527   0.018%  99.973% 
1795355346.040	(     870,    1300 ]      685   0.008%  99.981% 
1795355346.040	(    1300,    1900 ]      181   0.002%  99.983% 
1795355346.040	(    1900,    2900 ]       88   0.001%  99.984% 
1795355346.040	(    2900,    4400 ]       57   0.001%  99.985% 
1795355346.040	(    4400,    6600 ]       16   0.000%  99.985% 
1795355346.040	(    6600,    9900 ]        6   0.000%  99.985% 
1795355346.040	(    9900,   14000 ]        3   0.000%  99.985% 
1795355346.040	(   14000,   22000 ]        3   0.000%  99.985% 
1795355346.040	(   22000,   33000 ]        2   0.000%  99.985% 
1795355346.040	(   33000,   50000 ]        5   0.000%  99.985% 
1795355346.040	(   50000,   75000 ]       49   0.001%  99.986% 
1795355346.040	(   75000,  110000 ]      958   0.011%  99.997% 
1795355346.040	(  110000,  170000 ]       87   0.001%  99.998% 
1795355346.040	(  170000,  250000 ]      105   0.001%  99.999% 
1795355346.040	(  250000,  380000 ]       59   0.001% 100.000% 
1795355346.040	(  380000,  570000 ]       23   0.000% 100.000% 
1795355346.040	(  570000,  860000 ]        8   0.000% 100.000% 
1795355346.040	
1795355346.040	** Level 1 read latency histogram (micros):
1795355346.040	Count: 14743688 Average: 100.8085  StdDev: 270.00
1795355346.040	Min: 5  Median: 45.8026  Max: 861374
1795355346.040	Percentiles: P50: 45.80 P75: 66.80 P99: 228.94 P99.9: 513.13 P99.99: 102598.80
1795355346.040	------------------------------------------------------
1795355346.040	(       4,       6 ]       42   0.000%   0.000% 
1795355346.040	(       6,      10 ]      129   0.001%   0.001% 
1795355346.040	(      10,      15 ]       45   0.000%   0.001% 
1795355346.040	(      15,      22 ]       11   0.000%   0.002% 
1795355346.040	(      22,      34 ]        3   0.000%   0.002% 
1795355346.040	(      34,      51 ] 10617801  72.016%  72.017% ##############
1795355346.040	(      51,      76 ]   695720   4.719%  76.736% #
1795355346.040	(      76,     110 ]  2567247  17.413%  94.149% ###
1795355346.040	(     110,     170 ]   553003   3.751%  97.900% #
1795355346.040	(     170,     250 ]   220225   1.494%  99.393% 
1795355346.040	(     250,     380 ]    65472   0.444%  99.837% 
1795355346.040	(     380,     580 ]    13891   0.094%  99.932% 
1795355346.040	(     580,     870 ]     3279   0.022%  99.954% 
1795355346.040	(     870,    1300 ]     1341   0.009%  99.963% 
1795355346.040	(    1300,    1900 ]      317   0.002%  99.965% 
1795355346.040	(    1900,    2900 ]      138   0.001%  99.966% 
1795355346.040	(    2900,    4400 ]      140   0.001%  99.967% 
1795355346.040	(    4400,    6600 ]       20   0.000%  99.967% 
1795355346.040	(    6600,    9900 ]       15   0.000%  99.967% 
1795355346.040	(    9900,   14000 ]        5   0.000%  99.967% 
1795355346.040	(   14000,   22000 ]        5   0.000%  99.967% 
1795355346.040	(   22000,   33000 ]        4   0.000%  99.967% 
1795355346.040	(   33000,   50000 ]       17   0.000%  99.967% 
1795355346.040	(   50000,   75000 ]      374   0.003%  99.970% 
1795355346.040	(   75000,  110000 ]     3766   0.026%  99.995% 
1795355346.040	(  110000,  170000 ]      170   0.001%  99.997% 
1795355346.040	(  170000,  250000 ]      380   0.003%  99.999% 
1795355346.040	(  250000,  380000 ]       85   0.001% 100.000% 
1795355346.040	(  380000,  570000 ]       40   0.000% 100.000% 
1795355346.040	(  570000,  860000 ]       32   0.000% 100.000% 
1795355346.040	(  860000, 1200000 ]        1   0.000% 100.000% 
1795355346.040	
1795355346.040	** Level 2 read latency histogram (micros):
1795355346.040	Count: 44323390 Average: 83.6821  StdDev: 81.45
1795355346.040	Min: 5  Median: 45.9858  Max: 762687
1795355346.040	Percentiles: P50: 45.99 P75: 72.38 P99: 232.91 P99.9: 392.63 P99.99: 85944.58
1795355346.040	------------------------------------------------------
1795355346.040	(       4,       6 ]      537   0.001%   0.001% 
1795355346.040	(       6,      10 ]     2348   0.005%   0.007% 
1795355346.040	(      10,      15 ]      577   0.001%   0.008% 
1795355346.040	(      15,      22 ]      121   0.000%   0.008% 
1795355346.040	(      22,      34 ]       51   0.000%   0.008% 
1795355346.040	(      34,      51 ] 31427808  70.906%  70.914% ##############
1795355346.040	(      51,      76 ]  2117641   4.778%  75.692% #
1795355346.041	(      76,     110 ]  8009714  18.071%  93.763% ####
1795355346.041	(     110,     170 ]  1734752   3.914%  97.677% #
1795355346.041	(     170,     250 ]   745975   1.683%  99.360% 
1795355346.041	(     250,     380 ]   237633   0.536%  99.896% 
1795355346.041	(     380,     580 ]    30242   0.068%  99.964% 
1795355346.041	(     580,     870 ]     5554   0.013%  99.976% 
1795355346.041	(     870,    1300 ]     2110   0.005%  99.981% 
1795355346.041	(    1300,    1900 ]      670   0.002%  99.983% 
1795355346.041	(    1900,    2900 ]      450   0.001%  99.984% 
1795355346.041	(    2900,    4400 ]      470   0.001%  99.985% 
1795355346.041	(    4400,    6600 ]      135   0.000%  99.985% 
1795355346.041	(    6600,    9900 ]       59   0.000%  99.985% 
1795355346.041	(    9900,   14000 ]       18   0.000%  99.985% 
1795355346.041	(   14000,   22000 ]       10   0.000%  99.985% 
1795355346.041	(   22000,   33000 ]        7   0.000%  99.985% 
1795355346.041	(   33000,   50000 ]       18   0.000%  99.985% 
1795355346.041	(   50000,   75000 ]      360   0.001%  99.986% 
1795355346.041	(   75000,  110000 ]     5429   0.012%  99.998% 
1795355346.041	(  110000,  170000 ]      397   0.001%  99.999% 
1795355346.041	(  170000,  250000 ]      543   0.001% 100.001% 
1795355346.041	(  250000,  380000 ]      256   0.001% 100.001% 
1795355346.041	(  380000,  570000 ]      124   0.000% 100.001% 
1795355346.041	(  570000,  860000 ]       41   0.000% 100.001% 
1795355346.041	
1795355346.041	** Level 3 read latency histogram (micros):
1795355346.041	Count: 58062769 Average: 82.4429  StdDev: 55.75
1795355346.041	Min: 5  Median: 45.9991  Max: 758025
1795355346.041	Percentiles: P50: 46.00 P75: 73.88 P99: 228.27 P99.9: 376.75 P99.99: 85104.66
1795355346.041	------------------------------------------------------
1795355346.041	(       4,       6 ]      734   0.001%   0.001% 
1795355346.041	(       6,      10 ]     2502   0.004%   0.006% 
1795355346.041	(      10,      15 ]      808   0.001%   0.007% 
1795355346.041	(      15,      22 ]      159   0.000%   0.007% 
1795355346.041	(      22,      34 ]       52   0.000%   0.007% 
1795355346.041	(      34,      51 ] 41124790  70.828%  70.835% ##############
1795355346.041	(      51,      76 ]  2642094   4.550%  75.386% #
1795355346.041	(      76,     110 ] 10721728  18.466%  93.852% ####
1795355346.041	(     110,     170 ]  2301178   3.963%  97.815% #
1795355346.041	(     170,     250 ]   944718   1.627%  99.442% 
1795355346.041	(     250,     380 ]   272753   0.470%  99.912% 
1795355346.041	(     380,     580 ]    32565   0.056%  99.968% 
1795355346.041	(     580,     870 ]     5911   0.010%  99.978% 
1795355346.041	(     870,    1300 ]     2410   0.004%  99.982% 
1795355346.041	(    1300,    1900 ]      860   0.001%  99.984% 
1795355346.041	(    1900,    2900 ]      542   0.001%  99.985% 
1795355346.041	(    2900,    4400 ]      521   0.001%  99.985% 
1795355346.041	(    4400,    6600 ]      177   0.000%  99.986% 
1795355346.041	(    6600,    9900 ]       66   0.000%  99.986% 
1795355346.041	(    9900,   14000 ]       17   0.000%  99.986% 
1795355346.041	(   14000,   22000 ]       15   0.000%  99.986% 
1795355346.041	(   22000,   33000 ]        4   0.000%  99.986% 
1795355346.041	(   33000,   50000 ]       17   0.000%  99.986% 
1795355346.041	(   50000,   75000 ]      410   0.001%  99.987% 
1795355346.041	(   75000,  110000 ]     6691   0.012%  99.998% 
1795355346.041	(  110000,  170000 ]      456   0.001%  99.999% 
1795355346.041	(  170000,  250000 ]      786   0.001% 100.000% 
1795355346.041	(  250000,  380000 ]      322   0.001% 100.001% 
1795355346.041	(  380000,  570000 ]      145   0.000% 100.001% 
1795355346.041	(  570000,  860000 ]       47   0.000% 100.001% 
1795355346.041	
1795355346.041	** Level 4 read latency histogram (micros):
1795355346.041	Count: 57575244 Average: 83.8066  StdDev: 31.21
1795355346.041	Min: 5  Median: 46.0417  Max: 862808
1795355346.041	Percentiles: P50: 46.04 P75: 74.70 P99: 228.58 P99.9: 376.90 P99.99: 86415.57
1795355346.041	------------------------------------------------------
1795355346.041	(       4,       6 ]      518   0.001%   0.001% 
1795355346.041	(       6,      10 ]     1813   0.003%   0.004% 
1795355346.041	(      10,      15 ]      499   0.001%   0.005% 
1795355346.041	(      15,      22 ]      119   0.000%   0.005% 
1795355346.041	(      22,      34 ]       37   0.000%   0.005% 
1795355346.041	(      34,      51 ] 40636907  70.581%  70.586% ##############
1795355346.041	(      51,      76 ]  2681239   4.657%  75.243% #
1795355346.041	(      76,     110 ] 10673614  18.539%  93.781% ####
1795355346.041	(     110,     170 ]  2318201   4.026%  97.808% #
1795355346.041	(     170,     250 ]   937594   1.628%  99.436% 
1795355346.041	(     250,     380 ]   273663   0.475%  99.911% 
1795355346.041	(     380,     580 ]    31376   0.054%  99.966% 
1795355346.041	(     580,     870 ]     6070   0.011%  99.976% 
1795355346.041	(     870,    1300 ]     2837   0.005%  99.981% 
1795355346.041	(    1300,    1900 ]      888   0.002%  99.983% 
1795355346.041	(    1900,    2900 ]      539   0.001%  99.984% 
1795355346.041	(    2900,    4400 ]      528   0.001%  99.985% 
1795355346.041	(    4400,    6600 ]      215   0.000%  99.985% 
1795355346.041	(    6600,    9900 ]       97   0.000%  99.985% 
1795355346.041	(    9900,   14000 ]       39   0.000%  99.985% 
1795355346.041	(   14000,   22000 ]       13   0.000%  99.985% 
1795355346.041	(   22000,   33000 ]        7   0.000%  99.985% 
1795355346.041	(   33000,   50000 ]       24   0.000%  99.985% 
1795355346.041	(   50000,   75000 ]      504   0.001%  99.986% 
1795355346.041	(   75000,  110000 ]     6578   0.011%  99.998% 
1795355346.041	(  110000,  170000 ]      678   0.001%  99.999% 
1795355346.041	(  170000,  250000 ]      829   0.001% 100.000% 
1795355346.041	(  250000,  380000 ]      404   0.001% 100.001% 
1795355346.041	(  380000,  570000 ]      140   0.000% 100.001% 
1795355346.041	(  570000,  860000 ]       37   0.000% 100.001% 
1795355346.041	(  860000, 1200000 ]        1   0.000% 100.001% 
1795355346.041	
1795355346.041	** Level 5 read latency histogram (micros):
1795355346.041	Count: 31021058 Average: 76.6041  StdDev: 120.35
1795355346.041	Min: 5  Median: 45.6689  Max: 866529
1795355346.041	Percentiles: P50: 45.67 P75: 61.19 P99: 228.16 P99.9: 377.80 P99.99: 5405.42
1795355346.041	------------------------------------------------------
1795355346.041	(       4,       6 ]      336   0.001%   0.001% 
1795355346.041	(       6,      10 ]     1772   0.006%   0.007% 
1795355346.041	(      10,      15 ]      463   0.001%   0.008% 
1795355346.041	(      15,      22 ]       83   0.000%   0.009% 
1795355346.041	(      22,      34 ]       45   0.000%   0.009% 
1795355346.041	(      34,      51 ] 22592817  72.831%  72.839% ###############
1795355346.041	(      51,      76 ]  1643681   5.299%  78.138% #
1795355346.041	(      76,     110 ]  5054976  16.295%  94.433% ###
1795355346.041	(     110,     170 ]  1052077   3.391%  97.825% #
1795355346.041	(     170,     250 ]   501525   1.617%  99.441% 
1795355346.041	(     250,     380 ]   144710   0.466%  99.908% 
1795355346.041	(     380,     580 ]    15548   0.050%  99.958% 
1795355346.041	(     580,     870 ]     4565   0.015%  99.973% 
1795355346.041	(     870,    1300 ]     3032   0.010%  99.983% 
1795355346.041	(    1300,    1900 ]      861   0.003%  99.985% 
1795355346.041	(    1900,    2900 ]      600   0.002%  99.987% 
1795355346.041	(    2900,    4400 ]      699   0.002%  99.989% 
1795355346.041	(    4400,    6600 ]      363   0.001%  99.991% 
1795355346.041	(    6600,    9900 ]      244   0.001%  99.991% 
1795355346.041	(    9900,   14000 ]       70   0.000%  99.992% 
1795355346.041	(   14000,   22000 ]       21   0.000%  99.992% 
1795355346.041	(   22000,   33000 ]        5   0.000%  99.992% 
1795355346.041	(   33000,   50000 ]        1   0.000%  99.992% 
1795355346.041	(   50000,   75000 ]        6   0.000%  99.992% 
1795355346.041	(   75000,  110000 ]     2133   0.007%  99.999% 
1795355346.041	(  110000,  170000 ]      326   0.001% 100.000% 
1795355346.041	(  170000,  250000 ]      273   0.001% 100.001% 
1795355346.041	(  250000,  380000 ]      237   0.001% 100.001% 
1795355346.041	(  380000,  570000 ]       83   0.000% 100.002% 
1795355346.041	(  570000,  860000 ]       13   0.000% 100.002% 
1795355346.041	(  860000, 1200000 ]        1   0.000% 100.002% 
1795355346.041	
1795355346.041	
1795355346.041	** DB Stats **
1795355346.041	Uptime(secs): 42313.5 total, 52.3 interval
1795355346.041	Cumulative writes: 34M writes, 34M keys, 25M commit groups, 1.3 writes per commit group, ingest: 33.72 GB, 0.82 MB/s
1795355346.041	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.72 GB, 0.82 MB/s
1795355346.041	Cumulative stall: 10:09:32.385 H:M:S, 86.4 percent
1795355346.041	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795355346.041	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795355346.041	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795355346.041	
1795355346.041	STATISTICS:
1795355346.041	rocksdb.block.cache.miss COUNT : 206777426
1795355346.041	rocksdb.block.cache.hit COUNT : 0
1795355346.041	rocksdb.block.cache.add COUNT : 0
1795355346.041	rocksdb.block.cache.add.failures COUNT : 0
1795355346.041	rocksdb.block.cache.index.miss COUNT : 0
1795355346.041	rocksdb.block.cache.index.hit COUNT : 0
1795355346.041	rocksdb.block.cache.index.add COUNT : 0
1795355346.041	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795355346.041	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795355346.041	rocksdb.block.cache.filter.miss COUNT : 0
1795355346.041	rocksdb.block.cache.filter.hit COUNT : 0
1795355346.041	rocksdb.block.cache.filter.add COUNT : 0
1795355346.041	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795355346.041	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795355346.041	rocksdb.block.cache.data.miss COUNT : 206777426
1795355346.041	rocksdb.block.cache.data.hit COUNT : 0
1795355346.041	rocksdb.block.cache.data.add COUNT : 0
1795355346.041	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795355346.041	rocksdb.block.cache.bytes.read COUNT : 0
1795355346.041	rocksdb.block.cache.bytes.write COUNT : 0
1795355346.041	rocksdb.bloom.filter.useful COUNT : 0
1795355346.041	rocksdb.bloom.filter.full.positive COUNT : 0
1795355346.041	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795355346.041	rocksdb.bloom.filter.micros COUNT : 0
1795355346.041	rocksdb.persistent.cache.hit COUNT : 0
1795355346.041	rocksdb.persistent.cache.miss COUNT : 0
1795355346.041	rocksdb.sim.block.cache.hit COUNT : 0
1795355346.041	rocksdb.sim.block.cache.miss COUNT : 0
1795355346.041	rocksdb.memtable.hit COUNT : 0
1795355346.041	rocksdb.memtable.miss COUNT : 0
1795355346.041	rocksdb.l0.hit COUNT : 0
1795355346.041	rocksdb.l1.hit COUNT : 0
1795355346.041	rocksdb.l2andup.hit COUNT : 0
1795355346.041	rocksdb.compaction.key.drop.new COUNT : 31626702
1795355346.041	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795355346.041	rocksdb.compaction.key.drop.range_del COUNT : 0
1795355346.041	rocksdb.compaction.key.drop.user COUNT : 0
1795355346.041	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795355346.041	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795355346.041	rocksdb.compaction.cancelled COUNT : 0
1795355346.041	rocksdb.number.keys.written COUNT : 34383360
1795355346.041	rocksdb.number.keys.read COUNT : 0
1795355346.041	rocksdb.number.keys.updated COUNT : 0
1795355346.041	rocksdb.bytes.written COUNT : 36203782848
1795355346.041	rocksdb.bytes.read COUNT : 0
1795355346.041	rocksdb.number.db.seek COUNT : 0
1795355346.041	rocksdb.number.db.next COUNT : 0
1795355346.041	rocksdb.number.db.prev COUNT : 0
1795355346.041	rocksdb.number.db.seek.found COUNT : 0
1795355346.041	rocksdb.number.db.next.found COUNT : 0
1795355346.041	rocksdb.number.db.prev.found COUNT : 0
1795355346.041	rocksdb.db.iter.bytes.read COUNT : 0
1795355346.041	rocksdb.no.file.closes COUNT : 0
1795355346.041	rocksdb.no.file.opens COUNT : 1908275
1795355346.041	rocksdb.no.file.errors COUNT : 0
1795355346.041	rocksdb.l0.slowdown.micros COUNT : 0
1795355346.041	rocksdb.memtable.compaction.micros COUNT : 0
1795355346.041	rocksdb.l0.num.files.stall.micros COUNT : 0
1795355346.041	rocksdb.stall.micros COUNT : 36572384856
1795355346.041	rocksdb.db.mutex.wait.micros COUNT : 0
1795355346.042	rocksdb.rate.limit.delay.millis COUNT : 0
1795355346.042	rocksdb.num.iterators COUNT : 0
1795355346.042	rocksdb.number.multiget.get COUNT : 0
1795355346.042	rocksdb.number.multiget.keys.read COUNT : 0
1795355346.042	rocksdb.number.multiget.bytes.read COUNT : 0
1795355346.042	rocksdb.number.deletes.filtered COUNT : 0
1795355346.042	rocksdb.number.merge.failures COUNT : 0
1795355346.042	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795355346.042	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795355346.042	rocksdb.number.reseeks.iteration COUNT : 0
1795355346.042	rocksdb.getupdatessince.calls COUNT : 0
1795355346.042	rocksdb.block.cachecompressed.miss COUNT : 0
1795355346.042	rocksdb.block.cachecompressed.hit COUNT : 0
1795355346.042	rocksdb.block.cachecompressed.add COUNT : 0
1795355346.042	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795355346.042	rocksdb.wal.synced COUNT : 0
1795355346.042	rocksdb.wal.bytes COUNT : 36203782848
1795355346.042	rocksdb.write.self COUNT : 25629584
1795355346.042	rocksdb.write.other COUNT : 8753776
1795355346.042	rocksdb.write.timeout COUNT : 0
1795355346.042	rocksdb.write.wal COUNT : 34383360
1795355346.042	rocksdb.compact.read.bytes COUNT : 869188401294
1795355346.042	rocksdb.compact.write.bytes COUNT : 835952254761
1795355346.042	rocksdb.flush.write.bytes COUNT : 36306169440
1795355346.042	rocksdb.compact.read.marked.bytes COUNT : 0
1795355346.042	rocksdb.compact.read.periodic.bytes COUNT : 0
1795355346.042	rocksdb.compact.read.ttl.bytes COUNT : 0
1795355346.042	rocksdb.compact.write.marked.bytes COUNT : 0
1795355346.042	rocksdb.compact.write.periodic.bytes COUNT : 0
1795355346.042	rocksdb.compact.write.ttl.bytes COUNT : 0
1795355346.042	rocksdb.number.direct.load.table.properties COUNT : 0
1795355346.042	rocksdb.number.superversion_acquires COUNT : 0
1795355346.042	rocksdb.number.superversion_releases COUNT : 0
1795355346.042	rocksdb.number.superversion_cleanups COUNT : 0
1795355346.042	rocksdb.number.block.compressed COUNT : 0
1795355346.042	rocksdb.number.block.decompressed COUNT : 0
1795355346.042	rocksdb.number.block.not_compressed COUNT : 0
1795355346.042	rocksdb.merge.operation.time.nanos COUNT : 0
1795355346.042	rocksdb.filter.operation.time.nanos COUNT : 0
1795355346.042	rocksdb.row.cache.hit COUNT : 0
1795355346.042	rocksdb.row.cache.miss COUNT : 0
1795355346.042	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795355346.042	rocksdb.read.amp.total.read.bytes COUNT : 0
1795355346.042	rocksdb.number.rate_limiter.drains COUNT : 0
1795355346.042	rocksdb.number.iter.skip COUNT : 0
1795355346.042	rocksdb.blobdb.num.put COUNT : 0
1795355346.042	rocksdb.blobdb.num.write COUNT : 0
1795355346.042	rocksdb.blobdb.num.get COUNT : 0
1795355346.042	rocksdb.blobdb.num.multiget COUNT : 0
1795355346.042	rocksdb.blobdb.num.seek COUNT : 0
1795355346.042	rocksdb.blobdb.num.next COUNT : 0
1795355346.042	rocksdb.blobdb.num.prev COUNT : 0
1795355346.042	rocksdb.blobdb.num.keys.written COUNT : 0
1795355346.042	rocksdb.blobdb.num.keys.read COUNT : 0
1795355346.042	rocksdb.blobdb.bytes.written COUNT : 0
1795355346.042	rocksdb.blobdb.bytes.read COUNT : 0
1795355346.042	rocksdb.blobdb.write.inlined COUNT : 0
1795355346.042	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795355346.042	rocksdb.blobdb.write.blob COUNT : 0
1795355346.042	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795355346.042	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795355346.042	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795355346.042	rocksdb.blobdb.blob.file.synced COUNT : 0
1795355346.042	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795355346.042	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795355346.042	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795355346.042	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795355346.042	rocksdb.blobdb.gc.num.files COUNT : 0
1795355346.042	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795355346.042	rocksdb.blobdb.gc.failures COUNT : 0
1795355346.042	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795355346.042	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795355346.042	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795355346.042	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795355346.042	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795355346.042	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795355346.042	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795355346.042	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795355346.042	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795355346.042	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795355346.042	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795355346.042	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795355346.042	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795355346.042	rocksdb.txn.get.tryagain COUNT : 0
1795355346.042	rocksdb.number.multiget.keys.found COUNT : 0
1795355346.042	rocksdb.num.iterator.created COUNT : 0
1795355346.042	rocksdb.num.iterator.deleted COUNT : 0
1795355346.042	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795355346.042	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795355346.042	rocksdb.block.cache.compression.dict.add COUNT : 0
1795355346.042	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795355346.042	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795355346.042	rocksdb.block.cache.add.redundant COUNT : 0
1795355346.042	rocksdb.block.cache.index.add.redundant COUNT : 0
1795355346.042	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795355346.042	rocksdb.block.cache.data.add.redundant COUNT : 0
1795355346.042	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795355346.042	rocksdb.files.marked.trash COUNT : 0
1795355346.042	rocksdb.files.deleted.immediately COUNT : 1902704
1795355346.042	rocksdb.error.handler.bg.errro.count COUNT : 0
1795355346.042	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795355346.042	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795355346.042	rocksdb.error.handler.autoresume.count COUNT : 0
1795355346.042	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795355346.042	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795355346.042	rocksdb.memtable.payload.bytes.at.flush COUNT : 36032944888
1795355346.042	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1973384
1795355346.042	rocksdb.secondary.cache.hits COUNT : 0
1795355346.042	rocksdb.verify_checksum.read.bytes COUNT : 0
1795355346.042	rocksdb.backup.read.bytes COUNT : 0
1795355346.042	rocksdb.backup.write.bytes COUNT : 0
1795355346.042	rocksdb.remote.compact.read.bytes COUNT : 0
1795355346.042	rocksdb.remote.compact.write.bytes COUNT : 0
1795355346.042	rocksdb.hot.file.read.bytes COUNT : 0
1795355346.042	rocksdb.warm.file.read.bytes COUNT : 0
1795355346.042	rocksdb.cold.file.read.bytes COUNT : 0
1795355346.042	rocksdb.hot.file.read.count COUNT : 0
1795355346.042	rocksdb.warm.file.read.count COUNT : 0
1795355346.042	rocksdb.cold.file.read.count COUNT : 0
1795355346.042	rocksdb.last.level.read.bytes COUNT : 0
1795355346.042	rocksdb.last.level.read.count COUNT : 0
1795355346.042	rocksdb.non.last.level.read.bytes COUNT : 869475991501
1795355346.042	rocksdb.non.last.level.read.count COUNT : 214410526
1795355346.042	rocksdb.block.checksum.compute.count COUNT : 210593976
1795355346.042	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.db.write.micros P50 : 1927.268599 P95 : 19847.426089 P99 : 70103.742645 P100 : 6031933.000000 COUNT : 34383360 SUM : 168706001796
1795355346.042	rocksdb.compaction.times.micros P50 : 96785.190148 P95 : 302568.774155 P99 : 729403.897457 P100 : 6277693.000000 COUNT : 298269 SUM : 36478763698
1795355346.042	rocksdb.compaction.times.cpu_micros P50 : 94988.287692 P95 : 295067.435068 P99 : 718445.126582 P100 : 6045646.000000 COUNT : 298269 SUM : 35684071557
1795355346.042	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.table.sync.micros P50 : 29733.723734 P95 : 238451.612903 P99 : 729139.459459 P100 : 3923002.000000 COUNT : 18396 SUM : 1117204488
1795355346.042	rocksdb.compaction.outfile.sync.micros P50 : 6604.456334 P95 : 13839.027832 P99 : 32525.226756 P100 : 4180743.000000 COUNT : 1853563 SUM : 16847629912
1795355346.042	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.manifest.file.sync.micros P50 : 492.333098 P95 : 34127.895250 P99 : 422026.676907 P100 : 4106644.000000 COUNT : 239101 SUM : 2873560086
1795355346.042	rocksdb.table.open.io.micros P50 : 236.682982 P95 : 413.731624 P99 : 603.477615 P100 : 868355.000000 COUNT : 1908275 SUM : 866208282
1795355346.042	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.read.block.compaction.micros P50 : 46.218454 P95 : 129.873456 P99 : 233.056345 P100 : 866537.000000 COUNT : 206777426 SUM : 17384063525
1795355346.042	rocksdb.read.block.get.micros P50 : 50.285418 P95 : 106.587750 P99 : 214.713401 P100 : 506514.000000 COUNT : 1908275 SUM : 139835221
1795355346.042	rocksdb.write.raw.block.micros P50 : 0.538275 P95 : 1.585609 P99 : 42.592159 P100 : 2321773.000000 COUNT : 213086273 SUM : 426267308
1795355346.042	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.numfiles.in.singlecompaction P50 : 5.787372 P95 : 9.572894 P99 : 9.922650 P100 : 62.000000 COUNT : 299015 SUM : 1866596
1795355346.042	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.db.write.stall P50 : 0.728656 P95 : 4146.332123 P99 : 19916.890506 P100 : 6029327.000000 COUNT : 25611934 SUM : 36575914471
1795355346.042	rocksdb.sst.read.micros P50 : 45.939758 P95 : 126.668556 P99 : 229.469751 P100 : 866529.000000 COUNT : 214410526 SUM : 17897082797
1795355346.042	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.bytes.per.write P50 : 1130.562447 P95 : 3607.618691 P99 : 4188.000000 P100 : 4188.000000 COUNT : 25629584 SUM : 36203782848
1795355346.042	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.db.flush.micros P50 : 55490.101612 P95 : 313995.786517 P99 : 747754.156770 P100 : 5834601.000000 COUNT : 18395 SUM : 1620063389
1795355346.042	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355346.042	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1865850 SUM : 0
1795355346.042	
