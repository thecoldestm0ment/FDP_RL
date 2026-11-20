1795006944.016	Initializing RocksDB Options from the specified file
1795006944.016	Initializing RocksDB Options from command-line flags
1795006955.570	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795006955.570	Values:     1024 bytes each (512 bytes after compression)
1795006955.570	Entries:    17191679
1795006955.570	Prefix:    0 bytes
1795006955.570	Keys per prefix:    0
1795006955.570	RawSize:    17051.1 MB (estimated)
1795006955.570	FileSize:   8656.7 MB (estimated)
1795006955.570	Write rate: 0 bytes/second
1795006955.570	Read rate: 0 ops/second
1795006955.570	Compression: NoCompression
1795006955.570	Compression sampling rate: 0
1795006955.570	Memtablerep: SkipListFactory
1795006955.570	Perf Level: 1
1795006955.570	------------------------------------------------
1795006955.570	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795043609.878	overwrite    :    4262.213 micros/op 938 ops/sec;    0.9 MB/s
1795043614.878	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795043614.879	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795043624.879	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795043634.880	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795043644.910	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795043654.913	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795043664.913	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795043674.913	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795043674.913	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795043674.913	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795043674.915	
1795043674.915	Level Files Size(MB)
1795043674.915	--------------------
1795043674.915	  0        0        0
1795043674.915	  1        5        2
1795043674.915	  2       61       25
1795043674.915	  3      609      250
1795043674.915	  4     5715     2500
1795043674.915	  5    36022    17326
1795043674.915	  6        0        0
1795043674.915	
1795043674.920	
1795043674.920	
1795043674.920	** Compaction Stats [default] **
1795043674.920	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795043674.920	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795043674.920	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     24.3   1426.56           1162.91     18400    0.078    8392      3       0.0       0.0
1795043674.920	  L1      5/0    2.11 MB   0.8     55.8    33.8     22.0      55.9     33.8       0.0   1.7     23.7     23.7   2413.79           2384.24      9184    0.263     56M   6704       0.0       0.0
1795043674.920	  L2     61/0   24.79 MB   1.0    167.4    33.8    133.5     167.3     33.8       0.0   4.9     23.2     23.2   7390.40           7295.01     72488    0.102    169M    51K       0.0       0.0
1795043674.920	  L3    609/0   249.77 MB   1.0    218.7    33.8    184.9     218.2     33.3       0.0   6.5     23.7     23.7   9431.76           9322.62     76604    0.123    222M   514K       0.0       0.0
1795043674.920	  L4   5715/0    2.44 GB   1.0    222.3    33.3    189.1     217.4     28.3       0.0   6.5     23.7     23.1   9625.14           9515.64     77142    0.125    225M  5051K       0.0       0.0
1795043674.920	  L5  36022/0   16.92 GB   0.7    145.0    28.3    116.7     119.4      2.7       0.0   4.2     25.7     21.2   5773.88           5702.77     62750    0.092    147M    26M       0.0       0.0
1795043674.920	 Sum  42412/0   19.63 GB   0.0    809.3   163.0    646.3     812.0    165.7       0.0  24.0     23.0     23.1  36061.53          35383.18    316568    0.114    822M    31M       0.0       0.0
1795043674.920	 Int      0/0    0.00 KB   0.0      0.9     0.2      0.8       0.8      0.0       0.0 826243388.0     22.8     19.4     40.70             40.51       308    0.132    919K   138K       0.0       0.0
1795043674.920	
1795043674.920	** Compaction Stats [default] **
1795043674.920	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795043674.920	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795043674.920	 Low      0/0    0.00 KB   0.0    809.3   163.0    646.3     778.2    131.9       0.0   0.0     23.9     23.0  34636.16          34221.42    298169    0.116    822M    31M       0.0       0.0
1795043674.920	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     24.3   1425.37           1161.76     18398    0.077       0      0       0.0       0.0
1795043674.920	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    182.7      0.01              0.00         1    0.005       0      0       0.0       0.0
1795043674.920	
1795043674.920	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795043674.920	
1795043674.920	Uptime(secs): 36730.9 total, 52.5 interval
1795043674.920	Flush(GB): cumulative 33.807, interval 0.000
1795043674.920	AddFile(GB): cumulative 0.000, interval 0.000
1795043674.920	AddFile(Total Files): cumulative 0, interval 0
1795043674.920	AddFile(L0 Files): cumulative 0, interval 0
1795043674.920	AddFile(Keys): cumulative 0, interval 0
1795043674.920	Cumulative compaction: 812.01 GB write, 22.64 MB/s write, 809.30 GB read, 22.56 MB/s read, 36061.5 seconds
1795043674.920	Interval compaction: 0.77 GB write, 15.02 MB/s write, 0.91 GB read, 17.67 MB/s read, 40.7 seconds
1795043674.920	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 353971 slowdown for pending_compaction_bytes, 19 memtable_compaction, 2 memtable_slowdown, interval 180 total count
1795043674.920	Block cache LRUCache@0x5b6323426a70#49051 capacity: 8.00 MB collections: 204 last_copies: 2 last_secs: 0.000111 secs_since: 172
1795043674.920	Block cache entry stats(count,size,portion): Misc(3,8.36 KB,0.102043%)
1795043674.920	
1795043674.920	** File Read Latency Histogram By Level [default] **
1795043674.920	** Level 0 read latency histogram (micros):
1795043674.920	Count: 8678302 Average: 75.1540  StdDev: 288.42
1795043674.920	Min: 11  Median: 46.2639  Max: 725081
1795043674.920	Percentiles: P50: 46.26 P75: 73.18 P99: 232.62 P99.9: 446.04 P99.99: 1392.77
1795043674.920	------------------------------------------------------
1795043674.920	(      10,      15 ]        2   0.000%   0.000% 
1795043674.920	(      15,      22 ]        8   0.000%   0.000% 
1795043674.920	(      34,      51 ]  6014816  69.309%  69.309% ##############
1795043674.920	(      51,      76 ]   556635   6.414%  75.723% #
1795043674.920	(      76,     110 ]  1559844  17.974%  93.697% ####
1795043674.920	(     110,     170 ]   352272   4.059%  97.756% #
1795043674.920	(     170,     250 ]   137894   1.589%  99.345% 
1795043674.920	(     250,     380 ]    45357   0.523%  99.868% 
1795043674.920	(     380,     580 ]     8467   0.098%  99.965% 
1795043674.920	(     580,     870 ]     1568   0.018%  99.983% 
1795043674.920	(     870,    1300 ]      537   0.006%  99.990% 
1795043674.920	(    1300,    1900 ]      221   0.003%  99.992% 
1795043674.920	(    1900,    2900 ]      141   0.002%  99.994% 
1795043674.920	(    2900,    4400 ]       83   0.001%  99.995% 
1795043674.920	(    4400,    6600 ]       23   0.000%  99.995% 
1795043674.920	(    6600,    9900 ]        4   0.000%  99.995% 
1795043674.920	(    9900,   14000 ]        2   0.000%  99.995% 
1795043674.920	(   33000,   50000 ]        2   0.000%  99.995% 
1795043674.920	(   50000,   75000 ]       14   0.000%  99.995% 
1795043674.920	(   75000,  110000 ]      168   0.002%  99.997% 
1795043674.920	(  110000,  170000 ]       26   0.000%  99.997% 
1795043674.920	(  170000,  250000 ]       73   0.001%  99.998% 
1795043674.920	(  250000,  380000 ]       82   0.001%  99.999% 
1795043674.920	(  380000,  570000 ]       50   0.001% 100.000% 
1795043674.920	(  570000,  860000 ]       13   0.000% 100.000% 
1795043674.920	
1795043674.920	** Level 1 read latency histogram (micros):
1795043674.920	Count: 14774564 Average: 77.1328  StdDev: 258.61
1795043674.920	Min: 6  Median: 46.0876  Max: 1797751
1795043674.920	Percentiles: P50: 46.09 P75: 70.20 P99: 227.58 P99.9: 424.07 P99.99: 1789.82
1795043674.920	------------------------------------------------------
1795043674.920	(       4,       6 ]        5   0.000%   0.000% 
1795043674.920	(       6,      10 ]      123   0.001%   0.001% 
1795043674.920	(      10,      15 ]       42   0.000%   0.001% 
1795043674.920	(      15,      22 ]       36   0.000%   0.001% 
1795043674.920	(      22,      34 ]        4   0.000%   0.001% 
1795043674.920	(      34,      51 ] 10389204  70.318%  70.320% ##############
1795043674.920	(      51,      76 ]   900478   6.095%  76.414% #
1795043674.920	(      76,     110 ]  2599663  17.596%  94.010% ####
1795043674.920	(     110,     170 ]   575490   3.895%  97.905% #
1795043674.920	(     170,     250 ]   224778   1.521%  99.426% 
1795043674.920	(     250,     380 ]    67190   0.455%  99.881% 
1795043674.920	(     380,     580 ]    12601   0.085%  99.966% 
1795043674.920	(     580,     870 ]     2286   0.015%  99.982% 
1795043674.920	(     870,    1300 ]      860   0.006%  99.988% 
1795043674.920	(    1300,    1900 ]      400   0.003%  99.990% 
1795043674.920	(    1900,    2900 ]      235   0.002%  99.992% 
1795043674.920	(    2900,    4400 ]      109   0.001%  99.993% 
1795043674.920	(    4400,    6600 ]       26   0.000%  99.993% 
1795043674.920	(    6600,    9900 ]        8   0.000%  99.993% 
1795043674.920	(    9900,   14000 ]        2   0.000%  99.993% 
1795043674.920	(   33000,   50000 ]        4   0.000%  99.993% 
1795043674.920	(   50000,   75000 ]       57   0.000%  99.993% 
1795043674.920	(   75000,  110000 ]      506   0.003%  99.997% 
1795043674.920	(  110000,  170000 ]       77   0.001%  99.997% 
1795043674.920	(  170000,  250000 ]      173   0.001%  99.999% 
1795043674.920	(  250000,  380000 ]      114   0.001%  99.999% 
1795043674.920	(  380000,  570000 ]       91   0.001% 100.000% 
1795043674.920	(  570000,  860000 ]       30   0.000% 100.000% 
1795043674.920	( 1200000, 1900000 ]        2   0.000% 100.000% 
1795043674.920	
1795043674.920	** Level 2 read latency histogram (micros):
1795043674.920	Count: 44373977 Average: 74.2106  StdDev: 58.55
1795043674.920	Min: 5  Median: 46.3578  Max: 963780
1795043674.920	Percentiles: P50: 46.36 P75: 76.22 P99: 233.48 P99.9: 378.76 P99.99: 1097.49
1795043674.920	------------------------------------------------------
1795043674.920	(       4,       6 ]      130   0.000%   0.000% 
1795043674.920	(       6,      10 ]     2423   0.005%   0.006% 
1795043674.920	(      10,      15 ]      656   0.001%   0.007% 
1795043674.920	(      15,      22 ]      253   0.001%   0.008% 
1795043674.920	(      22,      34 ]       62   0.000%   0.008% 
1795043674.920	(      34,      51 ] 30516561  68.771%  68.779% ##############
1795043674.920	(      51,      76 ]  2706769   6.100%  74.879% #
1795043674.920	(      76,     110 ]  8253450  18.600%  93.479% ####
1795043674.920	(     110,     170 ]  1846541   4.161%  97.640% #
1795043674.920	(     170,     250 ]   760439   1.714%  99.354% 
1795043674.920	(     250,     380 ]   244650   0.551%  99.905% 
1795043674.920	(     380,     580 ]    31380   0.071%  99.976% 
1795043674.920	(     580,     870 ]     5149   0.012%  99.988% 
1795043674.920	(     870,    1300 ]     2035   0.005%  99.992% 
1795043674.920	(    1300,    1900 ]      967   0.002%  99.994% 
1795043674.920	(    1900,    2900 ]      524   0.001%  99.996% 
1795043674.920	(    2900,    4400 ]      414   0.001%  99.996% 
1795043674.920	(    4400,    6600 ]      131   0.000%  99.997% 
1795043674.920	(    6600,    9900 ]       25   0.000%  99.997% 
1795043674.920	(    9900,   14000 ]        9   0.000%  99.997% 
1795043674.920	(   14000,   22000 ]        2   0.000%  99.997% 
1795043674.920	(   22000,   33000 ]        4   0.000%  99.997% 
1795043674.920	(   33000,   50000 ]        7   0.000%  99.997% 
1795043674.920	(   50000,   75000 ]       79   0.000%  99.997% 
1795043674.920	(   75000,  110000 ]      942   0.002%  99.999% 
1795043674.920	(  110000,  170000 ]      135   0.000%  99.999% 
1795043674.920	(  170000,  250000 ]      330   0.001% 100.000% 
1795043674.920	(  250000,  380000 ]      326   0.001% 100.001% 
1795043674.920	(  380000,  570000 ]      229   0.001% 100.001% 
1795043674.920	(  570000,  860000 ]       35   0.000% 100.002% 
1795043674.920	(  860000, 1200000 ]        2   0.000% 100.002% 
1795043674.920	
1795043674.920	** Level 3 read latency histogram (micros):
1795043674.920	Count: 57896775 Average: 73.9550  StdDev: 56.46
1795043674.920	Min: 5  Median: 46.3448  Max: 756885
1795043674.920	Percentiles: P50: 46.34 P75: 76.26 P99: 230.71 P99.9: 374.88 P99.99: 1019.81
1795043674.920	------------------------------------------------------
1795043674.920	(       4,       6 ]       93   0.000%   0.000% 
1795043674.920	(       6,      10 ]     2575   0.004%   0.005% 
1795043674.920	(      10,      15 ]      693   0.001%   0.006% 
1795043674.920	(      15,      22 ]      336   0.001%   0.006% 
1795043674.920	(      22,      34 ]       93   0.000%   0.007% 
1795043674.920	(      34,      51 ] 39859556  68.846%  68.852% ##############
1795043674.920	(      51,      76 ]  3476258   6.004%  74.857% #
1795043674.920	(      76,     110 ] 10810277  18.672%  93.528% ####
1795043674.920	(     110,     170 ]  2413263   4.168%  97.697% #
1795043674.920	(     170,     250 ]   994444   1.718%  99.414% 
1795043674.920	(     250,     380 ]   292820   0.506%  99.920% 
1795043674.920	(     380,     580 ]    34266   0.059%  99.979% 
1795043674.920	(     580,     870 ]     5486   0.009%  99.989% 
1795043674.920	(     870,    1300 ]     2369   0.004%  99.993% 
1795043674.920	(    1300,    1900 ]     1114   0.002%  99.995% 
1795043674.920	(    1900,    2900 ]      637   0.001%  99.996% 
1795043674.920	(    2900,    4400 ]      522   0.001%  99.997% 
1795043674.920	(    4400,    6600 ]      175   0.000%  99.997% 
1795043674.921	(    6600,    9900 ]       43   0.000%  99.997% 
1795043674.921	(    9900,   14000 ]       11   0.000%  99.997% 
1795043674.921	(   14000,   22000 ]        3   0.000%  99.997% 
1795043674.921	(   22000,   33000 ]        1   0.000%  99.997% 
1795043674.921	(   33000,   50000 ]        1   0.000%  99.997% 
1795043674.921	(   50000,   75000 ]       94   0.000%  99.997% 
1795043674.921	(   75000,  110000 ]     1216   0.002%  99.999% 
1795043674.921	(  110000,  170000 ]      171   0.000% 100.000% 
1795043674.921	(  170000,  250000 ]      491   0.001% 100.000% 
1795043674.921	(  250000,  380000 ]      403   0.001% 100.001% 
1795043674.921	(  380000,  570000 ]      287   0.000% 100.002% 
1795043674.921	(  570000,  860000 ]       50   0.000% 100.002% 
1795043674.921	
1795043674.921	** Level 4 read latency histogram (micros):
1795043674.921	Count: 57594756 Average: 73.7274  StdDev: 52.04
1795043674.921	Min: 5  Median: 46.4463  Max: 871627
1795043674.921	Percentiles: P50: 46.45 P75: 76.73 P99: 230.80 P99.9: 375.10 P99.99: 1079.37
1795043674.921	------------------------------------------------------
1795043674.921	(       4,       6 ]       91   0.000%   0.000% 
1795043674.921	(       6,      10 ]     1804   0.003%   0.003% 
1795043674.921	(      10,      15 ]      524   0.001%   0.004% 
1795043674.921	(      15,      22 ]      262   0.000%   0.005% 
1795043674.921	(      22,      34 ]       58   0.000%   0.005% 
1795043674.921	(      34,      51 ] 39329747  68.287%  68.292% ##############
1795043674.921	(      51,      76 ]  3630769   6.304%  74.596% #
1795043674.921	(      76,     110 ] 10853431  18.844%  93.440% ####
1795043674.921	(     110,     170 ]  2455873   4.264%  97.704% #
1795043674.921	(     170,     250 ]   981956   1.705%  99.409% 
1795043674.921	(     250,     380 ]   293715   0.510%  99.919% 
1795043674.921	(     380,     580 ]    33849   0.059%  99.978% 
1795043674.921	(     580,     870 ]     5654   0.010%  99.988% 
1795043674.921	(     870,    1300 ]     2595   0.005%  99.992% 
1795043674.921	(    1300,    1900 ]     1205   0.002%  99.994% 
1795043674.921	(    1900,    2900 ]      756   0.001%  99.996% 
1795043674.921	(    2900,    4400 ]      516   0.001%  99.997% 
1795043674.921	(    4400,    6600 ]      193   0.000%  99.997% 
1795043674.921	(    6600,    9900 ]       65   0.000%  99.997% 
1795043674.921	(    9900,   14000 ]       23   0.000%  99.997% 
1795043674.921	(   14000,   22000 ]        7   0.000%  99.997% 
1795043674.921	(   33000,   50000 ]        6   0.000%  99.997% 
1795043674.921	(   50000,   75000 ]      112   0.000%  99.997% 
1795043674.921	(   75000,  110000 ]     1154   0.002%  99.999% 
1795043674.921	(  110000,  170000 ]      148   0.000% 100.000% 
1795043674.921	(  170000,  250000 ]      489   0.001% 100.000% 
1795043674.921	(  250000,  380000 ]      426   0.001% 100.001% 
1795043674.921	(  380000,  570000 ]      214   0.000% 100.002% 
1795043674.921	(  570000,  860000 ]       47   0.000% 100.002% 
1795043674.921	(  860000, 1200000 ]        4   0.000% 100.002% 
1795043674.921	
1795043674.921	** Level 5 read latency histogram (micros):
1795043674.921	Count: 30996198 Average: 71.1503  StdDev: 124.35
1795043674.921	Min: 5  Median: 46.0605  Max: 764557
1795043674.921	Percentiles: P50: 46.06 P75: 67.21 P99: 229.72 P99.9: 377.47 P99.99: 1790.68
1795043674.921	------------------------------------------------------
1795043674.921	(       4,       6 ]       73   0.000%   0.000% 
1795043674.921	(       6,      10 ]     1707   0.006%   0.006% 
1795043674.921	(      10,      15 ]      484   0.002%   0.007% 
1795043674.921	(      15,      22 ]      159   0.001%   0.008% 
1795043674.921	(      22,      34 ]       43   0.000%   0.008% 
1795043674.921	(      34,      51 ] 21841947  70.467%  70.474% ##############
1795043674.921	(      51,      76 ]  2163284   6.979%  77.454% #
1795043674.921	(      76,     110 ]  5192505  16.752%  94.206% ###
1795043674.921	(     110,     170 ]  1107975   3.575%  97.780% #
1795043674.921	(     170,     250 ]   506446   1.634%  99.414% 
1795043674.921	(     250,     380 ]   153564   0.495%  99.910% 
1795043674.921	(     380,     580 ]    16436   0.053%  99.963% 
1795043674.921	(     580,     870 ]     4706   0.015%  99.978% 
1795043674.921	(     870,    1300 ]     3026   0.010%  99.988% 
1795043674.921	(    1300,    1900 ]      909   0.003%  99.991% 
1795043674.921	(    1900,    2900 ]      747   0.002%  99.993% 
1795043674.921	(    2900,    4400 ]      730   0.002%  99.995% 
1795043674.921	(    4400,    6600 ]      428   0.001%  99.997% 
1795043674.921	(    6600,    9900 ]      244   0.001%  99.997% 
1795043674.921	(    9900,   14000 ]       56   0.000%  99.998% 
1795043674.921	(   14000,   22000 ]       11   0.000%  99.998% 
1795043674.921	(   33000,   50000 ]        1   0.000%  99.998% 
1795043674.921	(   50000,   75000 ]       13   0.000%  99.998% 
1795043674.921	(   75000,  110000 ]      516   0.002%  99.999% 
1795043674.921	(  110000,  170000 ]       66   0.000% 100.000% 
1795043674.921	(  170000,  250000 ]      183   0.001% 100.000% 
1795043674.921	(  250000,  380000 ]      213   0.001% 100.001% 
1795043674.921	(  380000,  570000 ]      117   0.000% 100.001% 
1795043674.921	(  570000,  860000 ]       22   0.000% 100.001% 
1795043674.921	
1795043674.921	
1795043674.921	** DB Stats **
1795043674.921	Uptime(secs): 36730.9 total, 52.5 interval
1795043674.921	Cumulative writes: 34M writes, 34M keys, 26M commit groups, 1.3 writes per commit group, ingest: 33.73 GB, 0.94 MB/s
1795043674.921	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.73 GB, 0.94 MB/s
1795043674.921	Cumulative stall: 08:46:17.399 H:M:S, 86.0 percent
1795043674.921	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795043674.921	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795043674.921	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795043674.921	
1795043674.921	STATISTICS:
1795043674.921	rocksdb.block.cache.miss COUNT : 206691223
1795043674.921	rocksdb.block.cache.hit COUNT : 0
1795043674.921	rocksdb.block.cache.add COUNT : 0
1795043674.921	rocksdb.block.cache.add.failures COUNT : 0
1795043674.921	rocksdb.block.cache.index.miss COUNT : 0
1795043674.921	rocksdb.block.cache.index.hit COUNT : 0
1795043674.921	rocksdb.block.cache.index.add COUNT : 0
1795043674.921	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795043674.921	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795043674.921	rocksdb.block.cache.filter.miss COUNT : 0
1795043674.921	rocksdb.block.cache.filter.hit COUNT : 0
1795043674.921	rocksdb.block.cache.filter.add COUNT : 0
1795043674.921	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795043674.921	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795043674.921	rocksdb.block.cache.data.miss COUNT : 206691223
1795043674.921	rocksdb.block.cache.data.hit COUNT : 0
1795043674.921	rocksdb.block.cache.data.add COUNT : 0
1795043674.921	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795043674.921	rocksdb.block.cache.bytes.read COUNT : 0
1795043674.921	rocksdb.block.cache.bytes.write COUNT : 0
1795043674.921	rocksdb.bloom.filter.useful COUNT : 0
1795043674.921	rocksdb.bloom.filter.full.positive COUNT : 0
1795043674.921	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795043674.921	rocksdb.bloom.filter.micros COUNT : 0
1795043674.921	rocksdb.persistent.cache.hit COUNT : 0
1795043674.921	rocksdb.persistent.cache.miss COUNT : 0
1795043674.921	rocksdb.sim.block.cache.hit COUNT : 0
1795043674.921	rocksdb.sim.block.cache.miss COUNT : 0
1795043674.921	rocksdb.memtable.hit COUNT : 0
1795043674.921	rocksdb.memtable.miss COUNT : 0
1795043674.921	rocksdb.l0.hit COUNT : 0
1795043674.921	rocksdb.l1.hit COUNT : 0
1795043674.921	rocksdb.l2andup.hit COUNT : 0
1795043674.921	rocksdb.compaction.key.drop.new COUNT : 31625378
1795043674.921	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795043674.921	rocksdb.compaction.key.drop.range_del COUNT : 0
1795043674.921	rocksdb.compaction.key.drop.user COUNT : 0
1795043674.921	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795043674.921	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795043674.921	rocksdb.compaction.cancelled COUNT : 0
1795043674.921	rocksdb.number.keys.written COUNT : 34383360
1795043674.921	rocksdb.number.keys.read COUNT : 0
1795043674.921	rocksdb.number.keys.updated COUNT : 0
1795043674.921	rocksdb.bytes.written COUNT : 36214063980
1795043674.921	rocksdb.bytes.read COUNT : 0
1795043674.921	rocksdb.number.db.seek COUNT : 0
1795043674.921	rocksdb.number.db.next COUNT : 0
1795043674.921	rocksdb.number.db.prev COUNT : 0
1795043674.921	rocksdb.number.db.seek.found COUNT : 0
1795043674.921	rocksdb.number.db.next.found COUNT : 0
1795043674.921	rocksdb.number.db.prev.found COUNT : 0
1795043674.921	rocksdb.db.iter.bytes.read COUNT : 0
1795043674.921	rocksdb.no.file.closes COUNT : 0
1795043674.921	rocksdb.no.file.opens COUNT : 1906837
1795043674.921	rocksdb.no.file.errors COUNT : 0
1795043674.921	rocksdb.l0.slowdown.micros COUNT : 0
1795043674.921	rocksdb.memtable.compaction.micros COUNT : 0
1795043674.921	rocksdb.l0.num.files.stall.micros COUNT : 0
1795043674.921	rocksdb.stall.micros COUNT : 31577399191
1795043674.921	rocksdb.db.mutex.wait.micros COUNT : 0
1795043674.921	rocksdb.rate.limit.delay.millis COUNT : 0
1795043674.921	rocksdb.num.iterators COUNT : 0
1795043674.921	rocksdb.number.multiget.get COUNT : 0
1795043674.921	rocksdb.number.multiget.keys.read COUNT : 0
1795043674.921	rocksdb.number.multiget.bytes.read COUNT : 0
1795043674.921	rocksdb.number.deletes.filtered COUNT : 0
1795043674.921	rocksdb.number.merge.failures COUNT : 0
1795043674.921	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795043674.921	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795043674.922	rocksdb.number.reseeks.iteration COUNT : 0
1795043674.922	rocksdb.getupdatessince.calls COUNT : 0
1795043674.922	rocksdb.block.cachecompressed.miss COUNT : 0
1795043674.922	rocksdb.block.cachecompressed.hit COUNT : 0
1795043674.922	rocksdb.block.cachecompressed.add COUNT : 0
1795043674.922	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795043674.922	rocksdb.wal.synced COUNT : 0
1795043674.922	rocksdb.wal.bytes COUNT : 36214063980
1795043674.922	rocksdb.write.self COUNT : 26486345
1795043674.922	rocksdb.write.other COUNT : 7897015
1795043674.922	rocksdb.write.timeout COUNT : 0
1795043674.922	rocksdb.write.wal COUNT : 34383360
1795043674.922	rocksdb.compact.read.bytes COUNT : 868825746987
1795043674.922	rocksdb.compact.write.bytes COUNT : 835590975197
1795043674.922	rocksdb.flush.write.bytes COUNT : 36304462996
1795043674.922	rocksdb.compact.read.marked.bytes COUNT : 0
1795043674.922	rocksdb.compact.read.periodic.bytes COUNT : 0
1795043674.922	rocksdb.compact.read.ttl.bytes COUNT : 0
1795043674.922	rocksdb.compact.write.marked.bytes COUNT : 0
1795043674.922	rocksdb.compact.write.periodic.bytes COUNT : 0
1795043674.922	rocksdb.compact.write.ttl.bytes COUNT : 0
1795043674.922	rocksdb.number.direct.load.table.properties COUNT : 0
1795043674.922	rocksdb.number.superversion_acquires COUNT : 0
1795043674.922	rocksdb.number.superversion_releases COUNT : 0
1795043674.922	rocksdb.number.superversion_cleanups COUNT : 0
1795043674.922	rocksdb.number.block.compressed COUNT : 0
1795043674.922	rocksdb.number.block.decompressed COUNT : 0
1795043674.922	rocksdb.number.block.not_compressed COUNT : 0
1795043674.922	rocksdb.merge.operation.time.nanos COUNT : 0
1795043674.922	rocksdb.filter.operation.time.nanos COUNT : 0
1795043674.922	rocksdb.row.cache.hit COUNT : 0
1795043674.922	rocksdb.row.cache.miss COUNT : 0
1795043674.922	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795043674.922	rocksdb.read.amp.total.read.bytes COUNT : 0
1795043674.922	rocksdb.number.rate_limiter.drains COUNT : 0
1795043674.922	rocksdb.number.iter.skip COUNT : 0
1795043674.922	rocksdb.blobdb.num.put COUNT : 0
1795043674.922	rocksdb.blobdb.num.write COUNT : 0
1795043674.922	rocksdb.blobdb.num.get COUNT : 0
1795043674.922	rocksdb.blobdb.num.multiget COUNT : 0
1795043674.922	rocksdb.blobdb.num.seek COUNT : 0
1795043674.922	rocksdb.blobdb.num.next COUNT : 0
1795043674.922	rocksdb.blobdb.num.prev COUNT : 0
1795043674.922	rocksdb.blobdb.num.keys.written COUNT : 0
1795043674.922	rocksdb.blobdb.num.keys.read COUNT : 0
1795043674.922	rocksdb.blobdb.bytes.written COUNT : 0
1795043674.922	rocksdb.blobdb.bytes.read COUNT : 0
1795043674.922	rocksdb.blobdb.write.inlined COUNT : 0
1795043674.922	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795043674.922	rocksdb.blobdb.write.blob COUNT : 0
1795043674.922	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795043674.922	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795043674.922	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795043674.922	rocksdb.blobdb.blob.file.synced COUNT : 0
1795043674.922	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795043674.922	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795043674.922	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795043674.922	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795043674.922	rocksdb.blobdb.gc.num.files COUNT : 0
1795043674.922	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795043674.922	rocksdb.blobdb.gc.failures COUNT : 0
1795043674.922	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795043674.922	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795043674.922	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795043674.922	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795043674.922	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795043674.922	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795043674.922	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795043674.922	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795043674.922	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795043674.922	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795043674.922	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795043674.922	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795043674.922	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795043674.922	rocksdb.txn.get.tryagain COUNT : 0
1795043674.922	rocksdb.number.multiget.keys.found COUNT : 0
1795043674.922	rocksdb.num.iterator.created COUNT : 0
1795043674.922	rocksdb.num.iterator.deleted COUNT : 0
1795043674.922	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795043674.922	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795043674.922	rocksdb.block.cache.compression.dict.add COUNT : 0
1795043674.922	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795043674.922	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795043674.922	rocksdb.block.cache.add.redundant COUNT : 0
1795043674.922	rocksdb.block.cache.index.add.redundant COUNT : 0
1795043674.922	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795043674.922	rocksdb.block.cache.data.add.redundant COUNT : 0
1795043674.922	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795043674.922	rocksdb.files.marked.trash COUNT : 0
1795043674.922	rocksdb.files.deleted.immediately COUNT : 1901286
1795043674.922	rocksdb.error.handler.bg.errro.count COUNT : 0
1795043674.922	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795043674.922	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795043674.922	rocksdb.error.handler.autoresume.count COUNT : 0
1795043674.922	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795043674.922	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795043674.922	rocksdb.memtable.payload.bytes.at.flush COUNT : 36031878024
1795043674.922	rocksdb.memtable.garbage.bytes.at.flush COUNT : 2075040
1795043674.922	rocksdb.secondary.cache.hits COUNT : 0
1795043674.922	rocksdb.verify_checksum.read.bytes COUNT : 0
1795043674.922	rocksdb.backup.read.bytes COUNT : 0
1795043674.922	rocksdb.backup.write.bytes COUNT : 0
1795043674.922	rocksdb.remote.compact.read.bytes COUNT : 0
1795043674.922	rocksdb.remote.compact.write.bytes COUNT : 0
1795043674.922	rocksdb.hot.file.read.bytes COUNT : 0
1795043674.922	rocksdb.warm.file.read.bytes COUNT : 0
1795043674.922	rocksdb.cold.file.read.bytes COUNT : 0
1795043674.922	rocksdb.hot.file.read.count COUNT : 0
1795043674.922	rocksdb.warm.file.read.count COUNT : 0
1795043674.922	rocksdb.cold.file.read.count COUNT : 0
1795043674.922	rocksdb.last.level.read.bytes COUNT : 0
1795043674.922	rocksdb.last.level.read.count COUNT : 0
1795043674.922	rocksdb.non.last.level.read.bytes COUNT : 869113303311
1795043674.922	rocksdb.non.last.level.read.count COUNT : 214318571
1795043674.922	rocksdb.block.checksum.compute.count COUNT : 210504897
1795043674.922	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.db.write.micros P50 : 63.145683 P95 : 17280.858910 P99 : 66732.425200 P100 : 5798404.000000 COUNT : 34383360 SUM : 146495097106
1795043674.922	rocksdb.compaction.times.micros P50 : 93802.612329 P95 : 247386.622391 P99 : 761977.861357 P100 : 5119496.000000 COUNT : 298169 SUM : 34636157693
1795043674.922	rocksdb.compaction.times.cpu_micros P50 : 93029.586122 P95 : 244912.743556 P99 : 753874.010090 P100 : 5055201.000000 COUNT : 298169 SUM : 34221422145
1795043674.922	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.table.sync.micros P50 : 30102.832208 P95 : 354531.045752 P99 : 717451.966292 P100 : 1320058.000000 COUNT : 18399 SUM : 1142657295
1795043674.922	rocksdb.compaction.outfile.sync.micros P50 : 6831.548459 P95 : 13891.352046 P99 : 26461.655869 P100 : 2281496.000000 COUNT : 1852154 SUM : 17578058008
1795043674.922	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.manifest.file.sync.micros P50 : 488.852769 P95 : 797.050266 P99 : 450162.692590 P100 : 927579.000000 COUNT : 242635 SUM : 3089457471
1795043674.922	rocksdb.table.open.io.micros P50 : 231.487199 P95 : 379.252930 P99 : 573.148382 P100 : 873004.000000 COUNT : 1906837 SUM : 608507878
1795043674.922	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.read.block.compaction.micros P50 : 46.684482 P95 : 133.239397 P99 : 234.882835 P100 : 1798202.000000 COUNT : 206691223 SUM : 15514392626
1795043674.922	rocksdb.read.block.get.micros P50 : 49.068065 P95 : 107.060757 P99 : 217.143660 P100 : 525955.000000 COUNT : 1906837 SUM : 137259327
1795043674.922	rocksdb.write.raw.block.micros P50 : 0.527729 P95 : 1.141604 P99 : 23.342532 P100 : 2150103.000000 COUNT : 212995895 SUM : 298460100
1795043674.922	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.numfiles.in.singlecompaction P50 : 5.787135 P95 : 9.572390 P99 : 9.922227 P100 : 48.000000 COUNT : 298887 SUM : 1865143
1795043674.922	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.db.write.stall P50 : 0.679567 P95 : 3719.537126 P99 : 17016.905450 P100 : 5795327.000000 COUNT : 26469077 SUM : 31580378842
1795043674.922	rocksdb.sst.read.micros P50 : 46.311361 P95 : 130.114994 P99 : 231.123613 P100 : 1797751.000000 COUNT : 214318571 SUM : 15818673873
1795043674.922	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.bytes.per.write P50 : 1120.420500 P95 : 3533.584498 P99 : 4188.000000 P100 : 4188.000000 COUNT : 26486345 SUM : 36214063980
1795043674.922	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.db.flush.micros P50 : 41512.867091 P95 : 389278.210117 P99 : 740561.428571 P100 : 5349468.000000 COUNT : 18398 SUM : 1425368070
1795043674.922	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795043674.922	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1864425 SUM : 0
1795043674.922	
