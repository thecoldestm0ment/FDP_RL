1794583241.709	Initializing RocksDB Options from the specified file
1794583241.709	Initializing RocksDB Options from command-line flags
1794583249.182	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1794583249.182	Values:     1024 bytes each (512 bytes after compression)
1794583249.182	Entries:    11678215
1794583249.182	Prefix:    0 bytes
1794583249.182	Keys per prefix:    0
1794583249.182	RawSize:    11582.7 MB (estimated)
1794583249.182	FileSize:   5880.4 MB (estimated)
1794583249.182	Write rate: 0 bytes/second
1794583249.182	Read rate: 0 ops/second
1794583249.182	Compression: NoCompression
1794583249.182	Compression sampling rate: 0
1794583249.182	Memtablerep: SkipListFactory
1794583249.182	Perf Level: 1
1794583249.182	------------------------------------------------
1794583249.182	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1794628518.157	overwrite    :    7745.590 micros/op 515 ops/sec;    0.5 MB/s
1794628523.272	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794628523.276	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628533.273	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628543.273	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628553.273	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628563.273	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628573.282	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628583.282	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628593.288	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628603.290	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628613.291	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794628623.291	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794628623.292	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794628623.292	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794628623.292	
1794628623.292	Level Files Size(MB)
1794628623.292	--------------------
1794628623.292	  0        1        2
1794628623.292	  1        5        2
1794628623.292	  2       59       25
1794628623.292	  3      615      250
1794628623.292	  4     5540     2500
1794628623.292	  5    25888    11771
1794628623.292	  6        0        0
1794628623.292	
1794628623.293	
1794628623.293	
1794628623.293	** Compaction Stats [default] **
1794628623.293	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794628623.293	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794628623.293	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.0      8.0   2957.02            501.77     12472    0.237     37K     10       0.0       0.0
1794628623.293	  L1      5/0    2.28 MB   0.9     38.6    23.0     15.6      38.6     23.0       0.0   1.7      9.1      9.1   4359.88           1621.98      6207    0.702     39M   7125       0.0       0.0
1794628623.293	  L2     59/0   24.62 MB   1.0    113.4    23.0     90.4     113.3     22.9       0.0   4.9      6.9      6.9  16880.24           5153.05     49132    0.344    115M    52K       0.0       0.0
1794628623.293	  L3    615/0   249.77 MB   1.0    148.4    22.9    125.5     147.9     22.4       0.0   6.5      8.0      8.0  18956.26           6543.47     52107    0.364    150M   523K       0.0       0.0
1794628623.293	  L4   5540/0    2.44 GB   1.0    149.7    22.4    127.3     144.7     17.4       0.0   6.5      7.5      7.3  20421.68           6786.77     51892    0.394    152M  5065K       0.0       0.0
1794628623.293	  L5  25888/0   11.49 GB   0.5     68.4    17.4     51.0      53.7      2.7       0.0   3.1      8.5      6.7   8230.72           2901.75     37209    0.221     69M    14M       0.0       0.0
1794628623.293	 Sum  32108/0   14.21 GB   0.0    518.5   108.7    409.8     521.2    111.4       0.0  22.7      7.4      7.4  71805.80          23508.79    209019    0.344    526M    20M       0.0       0.0
1794628623.294	 Int      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0 14971703.0     22.0     18.1      0.79              0.79         7    0.112     17K   3001       0.0       0.0
1794628623.294	
1794628623.294	** Compaction Stats [default] **
1794628623.294	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794628623.294	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794628623.294	 Low      0/0    0.00 KB   0.0    518.5   108.7    409.8     498.2     88.5       0.0   0.0      7.7      7.4  68855.07          23011.22    196552    0.350    526M    20M       0.0       0.0
1794628623.294	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0      8.0   2950.72            497.57     12466    0.237       0      0       0.0       0.0
1794628623.294	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    221.1      0.00              0.00         1    0.004       0      0       0.0       0.0
1794628623.294	
1794628623.294	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1794628623.294	
1794628623.294	Uptime(secs): 45381.6 total, 2.3 interval
1794628623.294	Flush(GB): cumulative 22.964, interval 0.000
1794628623.294	AddFile(GB): cumulative 0.000, interval 0.000
1794628623.294	AddFile(Total Files): cumulative 0, interval 0
1794628623.294	AddFile(L0 Files): cumulative 0, interval 0
1794628623.294	AddFile(Keys): cumulative 0, interval 0
1794628623.294	Cumulative compaction: 521.21 GB write, 11.76 MB/s write, 518.50 GB read, 11.70 MB/s read, 71805.8 seconds
1794628623.294	Interval compaction: 0.01 GB write, 6.23 MB/s write, 0.02 GB read, 7.55 MB/s read, 0.8 seconds
1794628623.294	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 234376 slowdown for pending_compaction_bytes, 5 memtable_compaction, 2 memtable_slowdown, interval 0 total count
1794628623.297	Block cache LRUCache@0x5d9d7c9dea70#51367 capacity: 8.00 MB collections: 252 last_copies: 1 last_secs: 0.000285 secs_since: 62
1794628623.297	Block cache entry stats(count,size,portion): Misc(4,12.52 KB,0.152779%)
1794628623.297	
1794628623.297	** File Read Latency Histogram By Level [default] **
1794628623.297	** Level 0 read latency histogram (micros):
1794628623.297	Count: 5902020 Average: 87.0874  StdDev: 375.96
1794628623.297	Min: 13  Median: 62.4390  Max: 948449
1794628623.297	Percentiles: P50: 62.44 P75: 88.27 P99: 359.02 P99.9: 970.74 P99.99: 8658.33
1794628623.297	------------------------------------------------------
1794628623.297	(      10,      15 ]        2   0.000%   0.000% 
1794628623.297	(      15,      22 ]        3   0.000%   0.000% 
1794628623.297	(      22,      34 ]       12   0.000%   0.000% 
1794628623.297	(      34,      51 ]  2000193  33.890%  33.890% #######
1794628623.297	(      51,      76 ]  2077986  35.208%  69.098% #######
1794628623.297	(      76,     110 ]   965077  16.352%  85.450% ###
1794628623.297	(     110,     170 ]   536998   9.099%  94.548% ##
1794628623.297	(     170,     250 ]   196001   3.321%  97.869% #
1794628623.297	(     250,     380 ]    79568   1.348%  99.218% 
1794628623.297	(     380,     580 ]    28103   0.476%  99.694% 
1794628623.297	(     580,     870 ]    11158   0.189%  99.883% 
1794628623.297	(     870,    1300 ]     4341   0.074%  99.956% 
1794628623.297	(    1300,    1900 ]      953   0.016%  99.972% 
1794628623.297	(    1900,    2900 ]      408   0.007%  99.979% 
1794628623.297	(    2900,    4400 ]      411   0.007%  99.986% 
1794628623.297	(    4400,    6600 ]      116   0.002%  99.988% 
1794628623.297	(    6600,    9900 ]      160   0.003%  99.991% 
1794628623.297	(    9900,   14000 ]      168   0.003%  99.994% 
1794628623.297	(   14000,   22000 ]       86   0.001%  99.995% 
1794628623.297	(   22000,   33000 ]       16   0.000%  99.996% 
1794628623.297	(   33000,   50000 ]       25   0.000%  99.996% 
1794628623.297	(   50000,   75000 ]      116   0.002%  99.998% 
1794628623.297	(   75000,  110000 ]       16   0.000%  99.998% 
1794628623.297	(  110000,  170000 ]       77   0.001% 100.000% 
1794628623.297	(  170000,  250000 ]        7   0.000% 100.000% 
1794628623.297	(  250000,  380000 ]        6   0.000% 100.000% 
1794628623.297	(  380000,  570000 ]        9   0.000% 100.000% 
1794628623.297	(  570000,  860000 ]        3   0.000% 100.000% 
1794628623.297	(  860000, 1200000 ]        1   0.000% 100.000% 
1794628623.297	
1794628623.297	** Level 1 read latency histogram (micros):
1794628623.297	Count: 10201364 Average: 88.2107  StdDev: 385.75
1794628623.297	Min: 10  Median: 62.1616  Max: 1309738
1794628623.297	Percentiles: P50: 62.16 P75: 86.85 P99: 355.15 P99.9: 868.53 P99.99: 8466.61
1794628623.297	------------------------------------------------------
1794628623.297	(       6,      10 ]        8   0.000%   0.000% 
1794628623.297	(      10,      15 ]       68   0.001%   0.001% 
1794628623.297	(      15,      22 ]        7   0.000%   0.001% 
1794628623.297	(      22,      34 ]       31   0.000%   0.001% 
1794628623.297	(      34,      51 ]  3450184  33.821%  33.822% #######
1794628623.297	(      51,      76 ]  3696551  36.236%  70.058% #######
1794628623.297	(      76,     110 ]  1580081  15.489%  85.547% ###
1794628623.297	(     110,     170 ]   892647   8.750%  94.297% ##
1794628623.297	(     170,     250 ]   363657   3.565%  97.862% #
1794628623.297	(     250,     380 ]   143553   1.407%  99.269% 
1794628623.297	(     380,     580 ]    47581   0.466%  99.735% 
1794628623.297	(     580,     870 ]    16880   0.165%  99.901% 
1794628623.297	(     870,    1300 ]     6188   0.061%  99.961% 
1794628623.297	(    1300,    1900 ]     1428   0.014%  99.975% 
1794628623.297	(    1900,    2900 ]      615   0.006%  99.982% 
1794628623.297	(    2900,    4400 ]      514   0.005%  99.987% 
1794628623.297	(    4400,    6600 ]      184   0.002%  99.988% 
1794628623.297	(    6600,    9900 ]      295   0.003%  99.991% 
1794628623.297	(    9900,   14000 ]      326   0.003%  99.994% 
1794628623.297	(   14000,   22000 ]      115   0.001%  99.996% 
1794628623.297	(   22000,   33000 ]       25   0.000%  99.996% 
1794628623.297	(   33000,   50000 ]       58   0.001%  99.996% 
1794628623.297	(   50000,   75000 ]      208   0.002%  99.998% 
1794628623.297	(   75000,  110000 ]       48   0.000%  99.999% 
1794628623.297	(  110000,  170000 ]      172   0.002% 100.001% 
1794628623.297	(  170000,  250000 ]       13   0.000% 100.001% 
1794628623.297	(  250000,  380000 ]       29   0.000% 100.001% 
1794628623.297	(  380000,  570000 ]       24   0.000% 100.001% 
1794628623.297	(  570000,  860000 ]        2   0.000% 100.001% 
1794628623.297	(  860000, 1200000 ]        2   0.000% 100.001% 
1794628623.297	( 1200000, 1900000 ]        1   0.000% 100.001% 
1794628623.297	
1794628623.297	** Level 2 read latency histogram (micros):
1794628623.297	Count: 30052083 Average: 90.6409  StdDev: 135.50
1794628623.297	Min: 10  Median: 63.4064  Max: 1949991
1794628623.297	Percentiles: P50: 63.41 P75: 90.65 P99: 355.79 P99.9: 815.96 P99.99: 2475.37
1794628623.297	------------------------------------------------------
1794628623.297	(       6,      10 ]       76   0.000%   0.000% 
1794628623.297	(      10,      15 ]     1004   0.003%   0.004% 
1794628623.297	(      15,      22 ]      201   0.001%   0.004% 
1794628623.297	(      22,      34 ]      120   0.000%   0.005% 
1794628623.297	(      34,      51 ]  9705355  32.295%  32.300% ######
1794628623.297	(      51,      76 ] 10718821  35.667%  67.967% #######
1794628623.297	(      76,     110 ]  4904165  16.319%  84.286% ###
1794628623.297	(     110,     170 ]  2819628   9.382%  93.669% ##
1794628623.297	(     170,     250 ]  1200343   3.994%  97.663% #
1794628623.297	(     250,     380 ]   493789   1.643%  99.306% 
1794628623.297	(     380,     580 ]   143954   0.479%  99.785% 
1794628623.297	(     580,     870 ]    42493   0.141%  99.926% 
1794628623.297	(     870,    1300 ]    14631   0.049%  99.975% 
1794628623.297	(    1300,    1900 ]     3610   0.012%  99.987% 
1794628623.297	(    1900,    2900 ]     1543   0.005%  99.992% 
1794628623.297	(    2900,    4400 ]     1376   0.005%  99.997% 
1794628623.297	(    4400,    6600 ]      523   0.002%  99.998% 
1794628623.297	(    6600,    9900 ]      832   0.003% 100.001% 
1794628623.297	(    9900,   14000 ]      772   0.003% 100.004% 
1794628623.297	(   14000,   22000 ]      207   0.001% 100.005% 
1794628623.297	(   22000,   33000 ]       64   0.000% 100.005% 
1794628623.297	(   33000,   50000 ]      185   0.001% 100.005% 
1794628623.297	(   50000,   75000 ]      752   0.003% 100.008% 
1794628623.297	(   75000,  110000 ]      193   0.001% 100.008% 
1794628623.297	(  110000,  170000 ]      507   0.002% 100.010% 
1794628623.297	(  170000,  250000 ]       45   0.000% 100.010% 
1794628623.297	(  250000,  380000 ]       69   0.000% 100.011% 
1794628623.297	(  380000,  570000 ]       77   0.000% 100.011% 
1794628623.297	(  570000,  860000 ]       13   0.000% 100.011% 
1794628623.297	(  860000, 1200000 ]        8   0.000% 100.011% 
1794628623.297	( 1200000, 1900000 ]        2   0.000% 100.011% 
1794628623.297	( 1900000, 2900000 ]        1   0.000% 100.011% 
1794628623.297	
1794628623.297	** Level 3 read latency histogram (micros):
1794628623.297	Count: 39241842 Average: 89.4423  StdDev: 92.48
1794628623.297	Min: 10  Median: 63.6072  Max: 2531456
1794628623.297	Percentiles: P50: 63.61 P75: 91.54 P99: 342.53 P99.9: 671.61 P99.99: 1695.74
1794628623.297	------------------------------------------------------
1794628623.297	(       6,      10 ]      106   0.000%   0.000% 
1794628623.297	(      10,      15 ]      835   0.002%   0.002% 
1794628623.297	(      15,      22 ]      207   0.001%   0.003% 
1794628623.297	(      22,      34 ]      184   0.000%   0.003% 
1794628623.297	(      34,      51 ] 12684242  32.323%  32.327% ######
1794628623.297	(      51,      76 ] 13752803  35.046%  67.373% #######
1794628623.297	(      76,     110 ]  6548734  16.688%  84.061% ###
1794628623.297	(     110,     170 ]  3721198   9.483%  93.544% ##
1794628623.297	(     170,     250 ]  1676963   4.273%  97.817% #
1794628623.297	(     250,     380 ]   652091   1.662%  99.479% 
1794628623.297	(     380,     580 ]   154341   0.393%  99.872% 
1794628623.297	(     580,     870 ]    34494   0.088%  99.960% 
1794628623.297	(     870,    1300 ]     9939   0.025%  99.985% 
1794628623.297	(    1300,    1900 ]     2700   0.007%  99.992% 
1794628623.297	(    1900,    2900 ]     1385   0.004%  99.996% 
1794628623.297	(    2900,    4400 ]     1200   0.003%  99.999% 
1794628623.297	(    4400,    6600 ]      454   0.001% 100.000% 
1794628623.297	(    6600,    9900 ]      696   0.002% 100.002% 
1794628623.297	(    9900,   14000 ]      581   0.001% 100.003% 
1794628623.297	(   14000,   22000 ]      204   0.001% 100.004% 
1794628623.297	(   22000,   33000 ]       64   0.000% 100.004% 
1794628623.297	(   33000,   50000 ]      261   0.001% 100.005% 
1794628623.297	(   50000,   75000 ]     1060   0.003% 100.007% 
1794628623.297	(   75000,  110000 ]      296   0.001% 100.008% 
1794628623.297	(  110000,  170000 ]      601   0.002% 100.010% 
1794628623.297	(  170000,  250000 ]       53   0.000% 100.010% 
1794628623.297	(  250000,  380000 ]       85   0.000% 100.010% 
1794628623.297	(  380000,  570000 ]       63   0.000% 100.010% 
1794628623.297	(  570000,  860000 ]       23   0.000% 100.010% 
1794628623.297	(  860000, 1200000 ]        6   0.000% 100.010% 
1794628623.297	( 1200000, 1900000 ]        1   0.000% 100.010% 
1794628623.297	( 1900000, 2900000 ]        1   0.000% 100.010% 
1794628623.297	
1794628623.297	** Level 4 read latency histogram (micros):
1794628623.297	Count: 38307591 Average: 93.7519  StdDev: 84.56
1794628623.297	Min: 10  Median: 64.8900  Max: 2545505
1794628623.297	Percentiles: P50: 64.89 P75: 94.40 P99: 377.01 P99.9: 905.94 P99.99: 2595.37
1794628623.297	------------------------------------------------------
1794628623.297	(       6,      10 ]       76   0.000%   0.000% 
1794628623.297	(      10,      15 ]      744   0.002%   0.002% 
1794628623.297	(      15,      22 ]      160   0.000%   0.003% 
1794628623.297	(      22,      34 ]      153   0.000%   0.003% 
1794628623.297	(      34,      51 ] 11460101  29.916%  29.919% ######
1794628623.297	(      51,      76 ] 13845490  36.143%  66.062% #######
1794628623.297	(      76,     110 ]  6327971  16.519%  82.581% ###
1794628623.297	(     110,     170 ]  3834003  10.008%  92.589% ##
1794628623.297	(     170,     250 ]  1742883   4.550%  97.139% #
1794628623.297	(     250,     380 ]   729718   1.905%  99.044% 
1794628623.297	(     380,     580 ]   233682   0.610%  99.654% 
1794628623.297	(     580,     870 ]    91883   0.240%  99.894% 
1794628623.297	(     870,    1300 ]    28950   0.076%  99.969% 
1794628623.297	(    1300,    1900 ]     6301   0.016%  99.986% 
1794628623.297	(    1900,    2900 ]     2366   0.006%  99.992% 
1794628623.297	(    2900,    4400 ]     1471   0.004%  99.996% 
1794628623.297	(    4400,    6600 ]      680   0.002%  99.997% 
1794628623.297	(    6600,    9900 ]     1118   0.003% 100.000% 
1794628623.297	(    9900,   14000 ]     1191   0.003% 100.004% 
1794628623.297	(   14000,   22000 ]      379   0.001% 100.005% 
1794628623.297	(   22000,   33000 ]       69   0.000% 100.005% 
1794628623.297	(   33000,   50000 ]      187   0.000% 100.005% 
1794628623.297	(   50000,   75000 ]      988   0.003% 100.008% 
1794628623.297	(   75000,  110000 ]      240   0.001% 100.008% 
1794628623.297	(  110000,  170000 ]      546   0.001% 100.010% 
1794628623.297	(  170000,  250000 ]       52   0.000% 100.010% 
1794628623.297	(  250000,  380000 ]       74   0.000% 100.010% 
1794628623.297	(  380000,  570000 ]       66   0.000% 100.010% 
1794628623.297	(  570000,  860000 ]       33   0.000% 100.010% 
1794628623.297	(  860000, 1200000 ]        5   0.000% 100.010% 
1794628623.297	( 1200000, 1900000 ]        2   0.000% 100.010% 
1794628623.297	( 1900000, 2900000 ]        1   0.000% 100.010% 
1794628623.297	
1794628623.297	** Level 5 read latency histogram (micros):
1794628623.297	Count: 13598284 Average: 99.7816  StdDev: 296.35
1794628623.297	Min: 10  Median: 65.5795  Max: 4547426
1794628623.297	Percentiles: P50: 65.58 P75: 93.12 P99: 570.59 P99.9: 1273.73 P99.99: 4456.48
1794628623.297	------------------------------------------------------
1794628623.297	(       6,      10 ]       70   0.001%   0.001% 
1794628623.297	(      10,      15 ]      811   0.006%   0.006% 
1794628623.297	(      15,      22 ]      207   0.002%   0.008% 
1794628623.297	(      22,      34 ]      129   0.001%   0.009% 
1794628623.297	(      34,      51 ]  3453737  25.398%  25.407% #####
1794628623.297	(      51,      76 ]  5734413  42.170%  67.577% ########
1794628623.297	(      76,     110 ]  2005002  14.745%  82.322% ###
1794628623.297	(     110,     170 ]  1274614   9.373%  91.695% ##
1794628623.297	(     170,     250 ]   594812   4.374%  96.069% #
1794628623.297	(     250,     380 ]   272100   2.001%  98.070% 
1794628623.297	(     380,     580 ]   132645   0.975%  99.046% 
1794628623.297	(     580,     870 ]    84586   0.622%  99.668% 
1794628623.297	(     870,    1300 ]    33613   0.247%  99.915% 
1794628623.297	(    1300,    1900 ]     7125   0.052%  99.967% 
1794628623.297	(    1900,    2900 ]     1969   0.014%  99.982% 
1794628623.297	(    2900,    4400 ]     1077   0.008%  99.990% 
1794628623.297	(    4400,    6600 ]      552   0.004%  99.994% 
1794628623.297	(    6600,    9900 ]      491   0.004%  99.998% 
1794628623.297	(    9900,   14000 ]      231   0.002%  99.999% 
1794628623.297	(   14000,   22000 ]      117   0.001% 100.000% 
1794628623.297	(   22000,   33000 ]       49   0.000% 100.000% 
1794628623.297	(   33000,   50000 ]       69   0.001% 100.001% 
1794628623.297	(   50000,   75000 ]      344   0.003% 100.004% 
1794628623.297	(   75000,  110000 ]       85   0.001% 100.004% 
1794628623.297	(  110000,  170000 ]      195   0.001% 100.006% 
1794628623.297	(  170000,  250000 ]       23   0.000% 100.006% 
1794628623.297	(  250000,  380000 ]       21   0.000% 100.006% 
1794628623.297	(  380000,  570000 ]       32   0.000% 100.006% 
1794628623.297	(  570000,  860000 ]        6   0.000% 100.006% 
1794628623.297	( 4300000, 6500000 ]        2   0.000% 100.006% 
1794628623.297	
1794628623.297	
1794628623.297	** DB Stats **
1794628623.297	Uptime(secs): 45381.6 total, 2.3 interval
1794628623.297	Cumulative writes: 23M writes, 23M keys, 16M commit groups, 1.5 writes per commit group, ingest: 22.89 GB, 0.52 MB/s
1794628623.297	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.89 GB, 0.52 MB/s
1794628623.297	Cumulative stall: 11:24:19.551 H:M:S, 90.5 percent
1794628623.297	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1794628623.297	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1794628623.297	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1794628623.297	
1794628623.297	STATISTICS:
1794628623.297	rocksdb.block.cache.miss COUNT : 132423750
1794628623.297	rocksdb.block.cache.hit COUNT : 0
1794628623.297	rocksdb.block.cache.add COUNT : 0
1794628623.297	rocksdb.block.cache.add.failures COUNT : 0
1794628623.297	rocksdb.block.cache.index.miss COUNT : 0
1794628623.297	rocksdb.block.cache.index.hit COUNT : 0
1794628623.297	rocksdb.block.cache.index.add COUNT : 0
1794628623.297	rocksdb.block.cache.index.bytes.insert COUNT : 0
1794628623.297	rocksdb.block.cache.index.bytes.evict COUNT : 0
1794628623.297	rocksdb.block.cache.filter.miss COUNT : 0
1794628623.297	rocksdb.block.cache.filter.hit COUNT : 0
1794628623.297	rocksdb.block.cache.filter.add COUNT : 0
1794628623.297	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1794628623.297	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1794628623.297	rocksdb.block.cache.data.miss COUNT : 132423750
1794628623.297	rocksdb.block.cache.data.hit COUNT : 0
1794628623.297	rocksdb.block.cache.data.add COUNT : 0
1794628623.297	rocksdb.block.cache.data.bytes.insert COUNT : 0
1794628623.297	rocksdb.block.cache.bytes.read COUNT : 0
1794628623.297	rocksdb.block.cache.bytes.write COUNT : 0
1794628623.297	rocksdb.bloom.filter.useful COUNT : 0
1794628623.297	rocksdb.bloom.filter.full.positive COUNT : 0
1794628623.297	rocksdb.bloom.filter.full.true.positive COUNT : 0
1794628623.297	rocksdb.bloom.filter.micros COUNT : 0
1794628623.297	rocksdb.persistent.cache.hit COUNT : 0
1794628623.297	rocksdb.persistent.cache.miss COUNT : 0
1794628623.297	rocksdb.sim.block.cache.hit COUNT : 0
1794628623.297	rocksdb.sim.block.cache.miss COUNT : 0
1794628623.297	rocksdb.memtable.hit COUNT : 0
1794628623.297	rocksdb.memtable.miss COUNT : 0
1794628623.297	rocksdb.l0.hit COUNT : 0
1794628623.297	rocksdb.l1.hit COUNT : 0
1794628623.297	rocksdb.l2andup.hit COUNT : 0
1794628623.297	rocksdb.compaction.key.drop.new COUNT : 20597377
1794628623.297	rocksdb.compaction.key.drop.obsolete COUNT : 0
1794628623.297	rocksdb.compaction.key.drop.range_del COUNT : 0
1794628623.297	rocksdb.compaction.key.drop.user COUNT : 0
1794628623.297	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1794628623.297	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1794628623.297	rocksdb.compaction.cancelled COUNT : 0
1794628623.297	rocksdb.number.keys.written COUNT : 23356432
1794628623.297	rocksdb.number.keys.read COUNT : 0
1794628623.297	rocksdb.number.keys.updated COUNT : 0
1794628623.297	rocksdb.bytes.written COUNT : 24577299816
1794628623.297	rocksdb.bytes.read COUNT : 0
1794628623.297	rocksdb.number.db.seek COUNT : 0
1794628623.297	rocksdb.number.db.next COUNT : 0
1794628623.297	rocksdb.number.db.prev COUNT : 0
1794628623.297	rocksdb.number.db.seek.found COUNT : 0
1794628623.297	rocksdb.number.db.next.found COUNT : 0
1794628623.297	rocksdb.number.db.prev.found COUNT : 0
1794628623.297	rocksdb.db.iter.bytes.read COUNT : 0
1794628623.297	rocksdb.no.file.closes COUNT : 0
1794628623.297	rocksdb.no.file.opens COUNT : 1224285
1794628623.297	rocksdb.no.file.errors COUNT : 0
1794628623.297	rocksdb.l0.slowdown.micros COUNT : 0
1794628623.297	rocksdb.memtable.compaction.micros COUNT : 0
1794628623.297	rocksdb.l0.num.files.stall.micros COUNT : 0
1794628623.297	rocksdb.stall.micros COUNT : 41059550978
1794628623.297	rocksdb.db.mutex.wait.micros COUNT : 0
1794628623.297	rocksdb.rate.limit.delay.millis COUNT : 0
1794628623.298	rocksdb.num.iterators COUNT : 0
1794628623.298	rocksdb.number.multiget.get COUNT : 0
1794628623.298	rocksdb.number.multiget.keys.read COUNT : 0
1794628623.298	rocksdb.number.multiget.bytes.read COUNT : 0
1794628623.298	rocksdb.number.deletes.filtered COUNT : 0
1794628623.298	rocksdb.number.merge.failures COUNT : 0
1794628623.298	rocksdb.bloom.filter.prefix.checked COUNT : 0
1794628623.298	rocksdb.bloom.filter.prefix.useful COUNT : 0
1794628623.298	rocksdb.number.reseeks.iteration COUNT : 0
1794628623.298	rocksdb.getupdatessince.calls COUNT : 0
1794628623.298	rocksdb.block.cachecompressed.miss COUNT : 0
1794628623.298	rocksdb.block.cachecompressed.hit COUNT : 0
1794628623.298	rocksdb.block.cachecompressed.add COUNT : 0
1794628623.298	rocksdb.block.cachecompressed.add.failures COUNT : 0
1794628623.298	rocksdb.wal.synced COUNT : 0
1794628623.298	rocksdb.wal.bytes COUNT : 24577299816
1794628623.298	rocksdb.write.self COUNT : 16098734
1794628623.298	rocksdb.write.other COUNT : 7257698
1794628623.298	rocksdb.write.timeout COUNT : 0
1794628623.298	rocksdb.write.wal COUNT : 23356432
1794628623.298	rocksdb.compact.read.bytes COUNT : 556634575545
1794628623.298	rocksdb.compact.write.bytes COUNT : 534989434429
1794628623.298	rocksdb.flush.write.bytes COUNT : 24664544146
1794628623.298	rocksdb.compact.read.marked.bytes COUNT : 0
1794628623.298	rocksdb.compact.read.periodic.bytes COUNT : 0
1794628623.298	rocksdb.compact.read.ttl.bytes COUNT : 0
1794628623.298	rocksdb.compact.write.marked.bytes COUNT : 0
1794628623.298	rocksdb.compact.write.periodic.bytes COUNT : 0
1794628623.298	rocksdb.compact.write.ttl.bytes COUNT : 0
1794628623.298	rocksdb.number.direct.load.table.properties COUNT : 0
1794628623.298	rocksdb.number.superversion_acquires COUNT : 0
1794628623.298	rocksdb.number.superversion_releases COUNT : 0
1794628623.298	rocksdb.number.superversion_cleanups COUNT : 0
1794628623.298	rocksdb.number.block.compressed COUNT : 0
1794628623.298	rocksdb.number.block.decompressed COUNT : 0
1794628623.298	rocksdb.number.block.not_compressed COUNT : 0
1794628623.298	rocksdb.merge.operation.time.nanos COUNT : 0
1794628623.298	rocksdb.filter.operation.time.nanos COUNT : 0
1794628623.298	rocksdb.row.cache.hit COUNT : 0
1794628623.298	rocksdb.row.cache.miss COUNT : 0
1794628623.298	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1794628623.298	rocksdb.read.amp.total.read.bytes COUNT : 0
1794628623.298	rocksdb.number.rate_limiter.drains COUNT : 0
1794628623.298	rocksdb.number.iter.skip COUNT : 0
1794628623.298	rocksdb.blobdb.num.put COUNT : 0
1794628623.298	rocksdb.blobdb.num.write COUNT : 0
1794628623.298	rocksdb.blobdb.num.get COUNT : 0
1794628623.298	rocksdb.blobdb.num.multiget COUNT : 0
1794628623.298	rocksdb.blobdb.num.seek COUNT : 0
1794628623.298	rocksdb.blobdb.num.next COUNT : 0
1794628623.298	rocksdb.blobdb.num.prev COUNT : 0
1794628623.298	rocksdb.blobdb.num.keys.written COUNT : 0
1794628623.298	rocksdb.blobdb.num.keys.read COUNT : 0
1794628623.298	rocksdb.blobdb.bytes.written COUNT : 0
1794628623.298	rocksdb.blobdb.bytes.read COUNT : 0
1794628623.298	rocksdb.blobdb.write.inlined COUNT : 0
1794628623.298	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1794628623.298	rocksdb.blobdb.write.blob COUNT : 0
1794628623.298	rocksdb.blobdb.write.blob.ttl COUNT : 0
1794628623.298	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1794628623.298	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1794628623.298	rocksdb.blobdb.blob.file.synced COUNT : 0
1794628623.298	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1794628623.298	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1794628623.298	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1794628623.298	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1794628623.298	rocksdb.blobdb.gc.num.files COUNT : 0
1794628623.298	rocksdb.blobdb.gc.num.new.files COUNT : 0
1794628623.298	rocksdb.blobdb.gc.failures COUNT : 0
1794628623.298	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1794628623.298	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1794628623.298	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1794628623.298	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1794628623.298	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1794628623.298	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1794628623.298	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1794628623.298	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1794628623.298	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1794628623.298	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1794628623.298	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1794628623.298	rocksdb.txn.overhead.duplicate.key COUNT : 0
1794628623.298	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1794628623.298	rocksdb.txn.get.tryagain COUNT : 0
1794628623.298	rocksdb.number.multiget.keys.found COUNT : 0
1794628623.298	rocksdb.num.iterator.created COUNT : 0
1794628623.298	rocksdb.num.iterator.deleted COUNT : 0
1794628623.298	rocksdb.block.cache.compression.dict.miss COUNT : 0
1794628623.298	rocksdb.block.cache.compression.dict.hit COUNT : 0
1794628623.298	rocksdb.block.cache.compression.dict.add COUNT : 0
1794628623.298	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1794628623.298	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1794628623.298	rocksdb.block.cache.add.redundant COUNT : 0
1794628623.298	rocksdb.block.cache.index.add.redundant COUNT : 0
1794628623.298	rocksdb.block.cache.filter.add.redundant COUNT : 0
1794628623.298	rocksdb.block.cache.data.add.redundant COUNT : 0
1794628623.298	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1794628623.298	rocksdb.files.marked.trash COUNT : 0
1794628623.298	rocksdb.files.deleted.immediately COUNT : 1217196
1794628623.298	rocksdb.error.handler.bg.errro.count COUNT : 0
1794628623.298	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1794628623.298	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1794628623.298	rocksdb.error.handler.autoresume.count COUNT : 0
1794628623.298	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1794628623.298	rocksdb.error.handler.autoresume.success.count COUNT : 0
1794628623.298	rocksdb.memtable.payload.bytes.at.flush COUNT : 24476293616
1794628623.298	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1937752
1794628623.298	rocksdb.secondary.cache.hits COUNT : 0
1794628623.298	rocksdb.verify_checksum.read.bytes COUNT : 0
1794628623.298	rocksdb.backup.read.bytes COUNT : 0
1794628623.298	rocksdb.backup.write.bytes COUNT : 0
1794628623.298	rocksdb.remote.compact.read.bytes COUNT : 0
1794628623.298	rocksdb.remote.compact.write.bytes COUNT : 0
1794628623.298	rocksdb.hot.file.read.bytes COUNT : 0
1794628623.298	rocksdb.warm.file.read.bytes COUNT : 0
1794628623.298	rocksdb.cold.file.read.bytes COUNT : 0
1794628623.298	rocksdb.hot.file.read.count COUNT : 0
1794628623.298	rocksdb.warm.file.read.count COUNT : 0
1794628623.298	rocksdb.cold.file.read.count COUNT : 0
1794628623.298	rocksdb.last.level.read.bytes COUNT : 0
1794628623.298	rocksdb.last.level.read.count COUNT : 0
1794628623.298	rocksdb.non.last.level.read.bytes COUNT : 556830032105
1794628623.298	rocksdb.non.last.level.read.count COUNT : 137320890
1794628623.298	rocksdb.block.checksum.compute.count COUNT : 134872320
1794628623.298	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.db.write.micros P50 : 2958.415516 P95 : 24434.948143 P99 : 91603.340276 P100 : 7177480.000000 COUNT : 23356432 SUM : 180847388372
1794628623.298	rocksdb.compaction.times.micros P50 : 257967.504756 P95 : 1035981.742739 P99 : 1441547.683924 P100 : 14881386.000000 COUNT : 196552 SUM : 68855072889
1794628623.298	rocksdb.compaction.times.cpu_micros P50 : 103246.538395 P95 : 244161.595809 P99 : 400522.085048 P100 : 12105780.000000 COUNT : 196552 SUM : 23011218335
1794628623.298	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.table.sync.micros P50 : 30772.903404 P95 : 92112.275449 P99 : 217595.698925 P100 : 1805446.000000 COUNT : 12467 SUM : 480545876
1794628623.298	rocksdb.compaction.outfile.sync.micros P50 : 7190.062600 P95 : 16423.268772 P99 : 39267.582418 P100 : 8854072.000000 COUNT : 1187335 SUM : 10167136413
1794628623.298	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.manifest.file.sync.micros P50 : 490.862947 P95 : 757.958412 P99 : 1780.679245 P100 : 457998.000000 COUNT : 148216 SUM : 207046270
1794628623.298	rocksdb.table.open.io.micros P50 : 265.743755 P95 : 510.729156 P99 : 964.344633 P100 : 223748.000000 COUNT : 1224285 SUM : 491332222
1794628623.298	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.read.block.compaction.micros P50 : 65.791878 P95 : 208.691856 P99 : 372.386742 P100 : 4547465.000000 COUNT : 132423750 SUM : 12313430535
1794628623.298	rocksdb.read.block.get.micros P50 : 64.485464 P95 : 151.184545 P99 : 260.407571 P100 : 129127.000000 COUNT : 1224285 SUM : 101237679
1794628623.298	rocksdb.write.raw.block.micros P50 : 0.522974 P95 : 0.993650 P99 : 12.946467 P100 : 4850185.000000 COUNT : 136716865 SUM : 141240621
1794628623.298	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.numfiles.in.singlecompaction P50 : 5.700377 P95 : 9.570570 P99 : 9.924234 P100 : 63.000000 COUNT : 197097 SUM : 1192722
1794628623.298	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.db.write.stall P50 : 0.990054 P95 : 8457.444864 P99 : 27427.709345 P100 : 7175911.000000 COUNT : 16078254 SUM : 41060982684
1794628623.298	rocksdb.sst.read.micros P50 : 63.995006 P95 : 204.007067 P99 : 369.131796 P100 : 4547426.000000 COUNT : 137320890 SUM : 12602709861
1794628623.298	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.bytes.per.write P50 : 1171.241345 P95 : 3737.123483 P99 : 4188.000000 P100 : 4188.000000 COUNT : 16098734 SUM : 24577299816
1794628623.298	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.db.flush.micros P50 : 104354.082999 P95 : 824655.248619 P99 : 1178926.570048 P100 : 7193999.000000 COUNT : 12466 SUM : 2950721007
1794628623.298	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794628623.298	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1192177 SUM : 0
1794628623.298	
