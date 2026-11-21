1795202901.612	Initializing RocksDB Options from the specified file
1795202901.612	Initializing RocksDB Options from command-line flags
1795202909.215	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795202909.215	Values:     1024 bytes each (512 bytes after compression)
1795202909.215	Entries:    11678215
1795202909.215	Prefix:    0 bytes
1795202909.215	Keys per prefix:    0
1795202909.215	RawSize:    11582.7 MB (estimated)
1795202909.215	FileSize:   5880.4 MB (estimated)
1795202909.215	Write rate: 0 bytes/second
1795202909.215	Read rate: 0 ops/second
1795202909.215	Compression: NoCompression
1795202909.215	Compression sampling rate: 0
1795202909.215	Memtablerep: SkipListFactory
1795202909.215	Perf Level: 1
1795202909.215	------------------------------------------------
1795202909.215	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795220360.950	overwrite    :    2986.889 micros/op 1338 ops/sec;    1.3 MB/s
1795220365.950	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795220365.950	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795220375.950	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795220385.950	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795220395.957	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795220405.957	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795220415.958	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795220425.958	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795220425.958	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795220425.958	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795220425.958	
1795220425.958	Level Files Size(MB)
1795220425.958	--------------------
1795220425.958	  0        0        0
1795220425.958	  1        5        2
1795220425.958	  2       61       25
1795220425.958	  3      611      250
1795220425.958	  4     5555     2500
1795220425.958	  5    25898    11770
1795220425.958	  6        0        0
1795220425.958	
1795220425.960	
1795220425.960	
1795220425.960	** Compaction Stats [default] **
1795220425.960	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795220425.960	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795220425.960	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.0     35.6    661.83            395.28     13480    0.049     25K      9       0.0       0.0
1795220425.960	  L1      5/0    2.26 MB   0.9     39.7    23.0     16.8      39.8     23.0       0.0   1.7     29.6     29.6   1374.16           1331.03      6709    0.205     40M   6874       0.0       0.0
1795220425.960	  L2     61/0   24.69 MB   1.0    117.1    23.0     94.1     117.0     22.9       0.0   5.1     28.3     28.3   4230.43           4106.29     49326    0.086    118M    52K       0.0       0.0
1795220425.960	  L3    611/0   249.62 MB   1.0    148.8    22.9    125.9     148.3     22.4       0.0   6.5     28.9     28.8   5271.86           5115.26     52117    0.101    151M   525K       0.0       0.0
1795220425.960	  L4   5555/0    2.44 GB   1.0    149.9    22.4    127.5     144.9     17.4       0.0   6.5     29.4     28.4   5218.86           5067.89     52064    0.100    152M  5076K       0.0       0.0
1795220425.960	  L5  25898/0   11.49 GB   0.5     68.2    17.4     50.8      53.5      2.7       0.0   3.1     33.1     26.0   2109.39           2062.75     37120    0.057     69M    14M       0.0       0.0
1795220425.960	 Sum  32130/0   14.21 GB   0.0    523.8   108.7    415.1     526.5    111.4       0.0  22.9     28.4     28.6  18866.54          18078.49    210816    0.089    532M    20M       0.0       0.0
1795220425.960	 Int      0/0    0.00 KB   0.0      1.1     0.2      0.9       0.9      0.0       0.0 943341606.0     28.6     23.1     38.96             38.63       496    0.079   1104K   212K       0.0       0.0
1795220425.960	
1795220425.960	** Compaction Stats [default] **
1795220425.960	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795220425.960	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795220425.960	 Low      0/0    0.00 KB   0.0    523.8   108.7    415.1     503.5     88.5       0.0   0.0     29.5     28.3  18207.03          17685.48    197339    0.092    532M    20M       0.0       0.0
1795220425.960	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     35.7    659.50            393.01     13475    0.049       0      0       0.0       0.0
1795220425.960	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    215.8      0.01              0.00         2    0.004       0      0       0.0       0.0
1795220425.960	
1795220425.960	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795220425.960	
1795220425.960	Uptime(secs): 17524.3 total, 54.4 interval
1795220425.960	Flush(GB): cumulative 22.967, interval 0.000
1795220425.960	AddFile(GB): cumulative 0.000, interval 0.000
1795220425.960	AddFile(Total Files): cumulative 0, interval 0
1795220425.960	AddFile(L0 Files): cumulative 0, interval 0
1795220425.960	AddFile(Keys): cumulative 0, interval 0
1795220425.960	Cumulative compaction: 526.51 GB write, 30.77 MB/s write, 523.80 GB read, 30.61 MB/s read, 18866.5 seconds
1795220425.960	Interval compaction: 0.88 GB write, 16.55 MB/s write, 1.09 GB read, 20.49 MB/s read, 39.0 seconds
1795220425.960	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 238144 slowdown for pending_compaction_bytes, 11 memtable_compaction, 2 memtable_slowdown, interval 319 total count
1795220425.960	Block cache LRUCache@0x5d4cd4d11a70#29464 capacity: 8.00 MB collections: 98 last_copies: 0 last_secs: 0.000127 secs_since: 54
1795220425.960	Block cache entry stats(count,size,portion): Misc(2,4.19 KB,0.0511169%)
1795220425.960	
1795220425.960	** File Read Latency Histogram By Level [default] **
1795220425.960	** Level 0 read latency histogram (micros):
1795220425.960	Count: 5904369 Average: 63.0620  StdDev: 320.41
1795220425.960	Min: 7  Median: 45.5773  Max: 134575
1795220425.960	Percentiles: P50: 45.58 P75: 60.27 P99: 228.45 P99.9: 425.34 P99.99: 954.64
1795220425.960	------------------------------------------------------
1795220425.960	(       6,      10 ]        2   0.000%   0.000% 
1795220425.960	(      10,      15 ]        8   0.000%   0.000% 
1795220425.960	(      15,      22 ]        2   0.000%   0.000% 
1795220425.960	(      22,      34 ]        1   0.000%   0.000% 
1795220425.960	(      34,      51 ]  4334943  73.419%  73.419% ###############
1795220425.960	(      51,      76 ]   251550   4.260%  77.680% #
1795220425.960	(      76,     110 ]   987526  16.725%  94.405% ###
1795220425.960	(     110,     170 ]   208701   3.535%  97.940% #
1795220425.960	(     170,     250 ]    85674   1.451%  99.391% 
1795220425.960	(     250,     380 ]    28788   0.488%  99.878% 
1795220425.960	(     380,     580 ]     5601   0.095%  99.973% 
1795220425.960	(     580,     870 ]      918   0.016%  99.989% 
1795220425.960	(     870,    1300 ]      328   0.006%  99.994% 
1795220425.960	(    1300,    1900 ]      101   0.002%  99.996% 
1795220425.960	(    1900,    2900 ]       33   0.001%  99.997% 
1795220425.960	(    2900,    4400 ]       30   0.001%  99.997% 
1795220425.961	(    4400,    6600 ]        7   0.000%  99.997% 
1795220425.961	(    6600,    9900 ]       14   0.000%  99.998% 
1795220425.961	(    9900,   14000 ]        5   0.000%  99.998% 
1795220425.961	(   14000,   22000 ]       14   0.000%  99.998% 
1795220425.961	(   22000,   33000 ]        7   0.000%  99.998% 
1795220425.961	(   33000,   50000 ]       28   0.000%  99.999% 
1795220425.961	(   50000,   75000 ]       60   0.001% 100.000% 
1795220425.961	(   75000,  110000 ]       20   0.000% 100.000% 
1795220425.961	(  110000,  170000 ]        9   0.000% 100.000% 
1795220425.961	
1795220425.961	** Level 1 read latency histogram (micros):
1795220425.961	Count: 10514355 Average: 62.2422  StdDev: 367.37
1795220425.961	Min: 5  Median: 45.4274  Max: 136790
1795220425.961	Percentiles: P50: 45.43 P75: 54.61 P99: 217.82 P99.9: 377.78 P99.99: 833.45
1795220425.961	------------------------------------------------------
1795220425.961	(       4,       6 ]       29   0.000%   0.000% 
1795220425.961	(       6,      10 ]       99   0.001%   0.001% 
1795220425.961	(      10,      15 ]       29   0.000%   0.001% 
1795220425.961	(      15,      22 ]        4   0.000%   0.002% 
1795220425.961	(      22,      34 ]        1   0.000%   0.002% 
1795220425.961	(      34,      51 ]  7820636  74.381%  74.382% ###############
1795220425.961	(      51,      76 ]   450408   4.284%  78.666% #
1795220425.961	(      76,     110 ]  1704700  16.213%  94.879% ###
1795220425.961	(     110,     170 ]   350683   3.335%  98.214% #
1795220425.961	(     170,     250 ]   138228   1.315%  99.529% 
1795220425.961	(     250,     380 ]    39703   0.378%  99.906% 
1795220425.961	(     380,     580 ]     7678   0.073%  99.979% 
1795220425.961	(     580,     870 ]     1265   0.012%  99.992% 
1795220425.961	(     870,    1300 ]      379   0.004%  99.995% 
1795220425.961	(    1300,    1900 ]      121   0.001%  99.996% 
1795220425.961	(    1900,    2900 ]       58   0.001%  99.997% 
1795220425.961	(    2900,    4400 ]       56   0.001%  99.997% 
1795220425.961	(    4400,    6600 ]       12   0.000%  99.997% 
1795220425.961	(    6600,    9900 ]       25   0.000%  99.998% 
1795220425.961	(    9900,   14000 ]       11   0.000%  99.998% 
1795220425.961	(   14000,   22000 ]       12   0.000%  99.998% 
1795220425.961	(   22000,   33000 ]       16   0.000%  99.998% 
1795220425.961	(   33000,   50000 ]       62   0.001%  99.999% 
1795220425.961	(   50000,   75000 ]       80   0.001%  99.999% 
1795220425.961	(   75000,  110000 ]       52   0.000% 100.000% 
1795220425.961	(  110000,  170000 ]       33   0.000% 100.000% 
1795220425.961	
1795220425.961	** Level 2 read latency histogram (micros):
1795220425.961	Count: 31030726 Average: 63.1008  StdDev: 108.18
1795220425.961	Min: 5  Median: 45.6327  Max: 154922
1795220425.961	Percentiles: P50: 45.63 P75: 62.51 P99: 225.71 P99.9: 379.79 P99.99: 827.37
1795220425.961	------------------------------------------------------
1795220425.961	(       4,       6 ]     1319   0.004%   0.004% 
1795220425.961	(       6,      10 ]     2924   0.009%   0.014% 
1795220425.961	(      10,      15 ]      631   0.002%   0.016% 
1795220425.961	(      15,      22 ]      132   0.000%   0.016% 
1795220425.961	(      22,      34 ]       68   0.000%   0.016% 
1795220425.961	(      34,      51 ] 22666603  73.046%  73.062% ###############
1795220425.961	(      51,      76 ]  1305685   4.208%  77.270% #
1795220425.961	(      76,     110 ]  5328466  17.172%  94.441% ###
1795220425.961	(     110,     170 ]  1101608   3.550%  97.991% #
1795220425.961	(     170,     250 ]   449463   1.448%  99.440% 
1795220425.961	(     250,     380 ]   143029   0.461%  99.901% 
1795220425.961	(     380,     580 ]    24033   0.077%  99.978% 
1795220425.961	(     580,     870 ]     4293   0.014%  99.992% 
1795220425.961	(     870,    1300 ]     1315   0.004%  99.996% 
1795220425.961	(    1300,    1900 ]      368   0.001%  99.997% 
1795220425.961	(    1900,    2900 ]      224   0.001%  99.998% 
1795220425.961	(    2900,    4400 ]      213   0.001%  99.999% 
1795220425.961	(    4400,    6600 ]       25   0.000%  99.999% 
1795220425.961	(    6600,    9900 ]       66   0.000%  99.999% 
1795220425.961	(    9900,   14000 ]       32   0.000%  99.999% 
1795220425.961	(   14000,   22000 ]       40   0.000%  99.999% 
1795220425.961	(   22000,   33000 ]       38   0.000% 100.000% 
1795220425.961	(   33000,   50000 ]      159   0.001% 100.000% 
1795220425.961	(   50000,   75000 ]      246   0.001% 100.001% 
1795220425.961	(   75000,  110000 ]      132   0.000% 100.001% 
1795220425.961	(  110000,  170000 ]       63   0.000% 100.001% 
1795220425.961	
1795220425.961	** Level 3 read latency histogram (micros):
1795220425.961	Count: 39350825 Average: 63.7029  StdDev: 33.48
1795220425.961	Min: 5  Median: 45.7409  Max: 203546
1795220425.961	Percentiles: P50: 45.74 P75: 65.75 P99: 229.23 P99.9: 373.60 P99.99: 745.14
1795220425.961	------------------------------------------------------
1795220425.961	(       4,       6 ]      978   0.002%   0.002% 
1795220425.961	(       6,      10 ]     1640   0.004%   0.007% 
1795220425.961	(      10,      15 ]      396   0.001%   0.008% 
1795220425.961	(      15,      22 ]       74   0.000%   0.008% 
1795220425.961	(      22,      34 ]       35   0.000%   0.008% 
1795220425.961	(      34,      51 ] 28484106  72.385%  72.393% ##############
1795220425.961	(      51,      76 ]  1738790   4.419%  76.812% #
1795220425.961	(      76,     110 ]  6773607  17.213%  94.025% ###
1795220425.961	(     110,     170 ]  1459016   3.708%  97.733% #
1795220425.961	(     170,     250 ]   673574   1.712%  99.444% 
1795220425.961	(     250,     380 ]   188547   0.479%  99.924% 
1795220425.961	(     380,     580 ]    24168   0.061%  99.985% 
1795220425.961	(     580,     870 ]     3440   0.009%  99.994% 
1795220425.961	(     870,    1300 ]     1143   0.003%  99.997% 
1795220425.961	(    1300,    1900 ]      389   0.001%  99.998% 
1795220425.961	(    1900,    2900 ]      202   0.001%  99.998% 
1795220425.961	(    2900,    4400 ]      182   0.000%  99.999% 
1795220425.961	(    4400,    6600 ]       38   0.000%  99.999% 
1795220425.961	(    6600,    9900 ]       86   0.000%  99.999% 
1795220425.961	(    9900,   14000 ]       71   0.000%  99.999% 
1795220425.961	(   14000,   22000 ]       60   0.000%  99.999% 
1795220425.961	(   22000,   33000 ]       63   0.000%  99.999% 
1795220425.961	(   33000,   50000 ]      273   0.001% 100.000% 
1795220425.961	(   50000,   75000 ]      337   0.001% 100.001% 
1795220425.961	(   75000,  110000 ]      126   0.000% 100.001% 
1795220425.961	(  110000,  170000 ]       89   0.000% 100.002% 
1795220425.961	(  170000,  250000 ]        1   0.000% 100.002% 
1795220425.961	
1795220425.961	** Level 4 read latency histogram (micros):
1795220425.961	Count: 38367735 Average: 63.0662  StdDev: 91.61
1795220425.961	Min: 5  Median: 45.6961  Max: 890149
1795220425.961	Percentiles: P50: 45.70 P75: 63.83 P99: 225.06 P99.9: 373.48 P99.99: 777.53
1795220425.961	------------------------------------------------------
1795220425.961	(       4,       6 ]     1001   0.003%   0.003% 
1795220425.961	(       6,      10 ]     1694   0.004%   0.007% 
1795220425.961	(      10,      15 ]      365   0.001%   0.008% 
1795220425.961	(      15,      22 ]       93   0.000%   0.008% 
1795220425.961	(      22,      34 ]       33   0.000%   0.008% 
1795220425.961	(      34,      51 ] 27878745  72.662%  72.670% ###############
1795220425.961	(      51,      76 ]  1741542   4.539%  77.209% #
1795220425.961	(      76,     110 ]  6541025  17.048%  94.258% ###
1795220425.961	(     110,     170 ]  1407502   3.668%  97.926% #
1795220425.961	(     170,     250 ]   598731   1.561%  99.487% 
1795220425.961	(     250,     380 ]   167017   0.435%  99.922% 
1795220425.961	(     380,     580 ]    23694   0.062%  99.984% 
1795220425.961	(     580,     870 ]     3606   0.009%  99.993% 
1795220425.961	(     870,    1300 ]     1265   0.003%  99.996% 
1795220425.961	(    1300,    1900 ]      439   0.001%  99.997% 
1795220425.961	(    1900,    2900 ]      310   0.001%  99.998% 
1795220425.961	(    2900,    4400 ]      289   0.001%  99.999% 
1795220425.961	(    4400,    6600 ]      109   0.000%  99.999% 
1795220425.961	(    6600,    9900 ]      101   0.000% 100.000% 
1795220425.961	(    9900,   14000 ]       48   0.000% 100.000% 
1795220425.961	(   14000,   22000 ]       37   0.000% 100.000% 
1795220425.961	(   22000,   33000 ]       56   0.000% 100.000% 
1795220425.961	(   33000,   50000 ]      171   0.000% 100.000% 
1795220425.961	(   50000,   75000 ]      336   0.001% 100.001% 
1795220425.961	(   75000,  110000 ]      105   0.000% 100.002% 
1795220425.961	(  110000,  170000 ]       54   0.000% 100.002% 
1795220425.961	(  170000,  250000 ]        2   0.000% 100.002% 
1795220425.961	(  860000, 1200000 ]        1   0.000% 100.002% 
1795220425.961	
1795220425.961	** Level 5 read latency histogram (micros):
1795220425.961	Count: 13556354 Average: 61.5173  StdDev: 268.25
1795220425.962	Min: 5  Median: 45.2702  Max: 135252
1795220425.962	Percentiles: P50: 45.27 P75: 50.91 P99: 223.54 P99.9: 402.52 P99.99: 1793.34
1795220425.962	------------------------------------------------------
1795220425.962	(       4,       6 ]      391   0.003%   0.003% 
1795220425.962	(       6,      10 ]     1213   0.009%   0.012% 
1795220425.962	(      10,      15 ]      267   0.002%   0.014% 
1795220425.962	(      15,      22 ]       63   0.000%   0.014% 
1795220425.962	(      22,      34 ]       45   0.000%   0.015% 
1795220425.962	(      34,      51 ] 10221216  75.398%  75.413% ###############
1795220425.962	(      51,      76 ]   633446   4.673%  80.085% #
1795220425.962	(      76,     110 ]  2027356  14.955%  95.040% ###
1795220425.962	(     110,     170 ]   406512   2.999%  98.039% #
1795220425.962	(     170,     250 ]   194650   1.436%  99.475% 
1795220425.962	(     250,     380 ]    56828   0.419%  99.894% 
1795220425.962	(     380,     580 ]     7199   0.053%  99.947% 
1795220425.962	(     580,     870 ]     3031   0.022%  99.969% 
1795220425.962	(     870,    1300 ]     2376   0.018%  99.987% 
1795220425.962	(    1300,    1900 ]      493   0.004%  99.991% 
1795220425.962	(    1900,    2900 ]      447   0.003%  99.994% 
1795220425.962	(    2900,    4400 ]      412   0.003%  99.997% 
1795220425.962	(    4400,    6600 ]      166   0.001%  99.998% 
1795220425.962	(    6600,    9900 ]      103   0.001%  99.999% 
1795220425.962	(    9900,   14000 ]       20   0.000%  99.999% 
1795220425.962	(   14000,   22000 ]       10   0.000%  99.999% 
1795220425.962	(   22000,   33000 ]       11   0.000%  99.999% 
1795220425.962	(   33000,   50000 ]       45   0.000% 100.000% 
1795220425.962	(   50000,   75000 ]      109   0.001% 100.000% 
1795220425.962	(   75000,  110000 ]       23   0.000% 100.001% 
1795220425.962	(  110000,  170000 ]       16   0.000% 100.001% 
1795220425.962	
1795220425.962	
1795220425.962	** DB Stats **
1795220425.962	Uptime(secs): 17524.3 total, 54.4 interval
1795220425.962	Cumulative writes: 23M writes, 23M keys, 18M commit groups, 1.3 writes per commit group, ingest: 22.92 GB, 1.34 MB/s
1795220425.962	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.92 GB, 1.34 MB/s
1795220425.962	Cumulative stall: 04:15:48.171 H:M:S, 87.6 percent
1795220425.962	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795220425.962	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795220425.962	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795220425.962	
1795220425.962	STATISTICS:
1795220425.962	rocksdb.block.cache.miss COUNT : 133776966
1795220425.962	rocksdb.block.cache.hit COUNT : 0
1795220425.962	rocksdb.block.cache.add COUNT : 0
1795220425.962	rocksdb.block.cache.add.failures COUNT : 0
1795220425.962	rocksdb.block.cache.index.miss COUNT : 0
1795220425.962	rocksdb.block.cache.index.hit COUNT : 0
1795220425.962	rocksdb.block.cache.index.add COUNT : 0
1795220425.962	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795220425.962	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795220425.962	rocksdb.block.cache.filter.miss COUNT : 0
1795220425.962	rocksdb.block.cache.filter.hit COUNT : 0
1795220425.962	rocksdb.block.cache.filter.add COUNT : 0
1795220425.962	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795220425.962	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795220425.962	rocksdb.block.cache.data.miss COUNT : 133776966
1795220425.962	rocksdb.block.cache.data.hit COUNT : 0
1795220425.962	rocksdb.block.cache.data.add COUNT : 0
1795220425.962	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795220425.962	rocksdb.block.cache.bytes.read COUNT : 0
1795220425.962	rocksdb.block.cache.bytes.write COUNT : 0
1795220425.962	rocksdb.bloom.filter.useful COUNT : 0
1795220425.962	rocksdb.bloom.filter.full.positive COUNT : 0
1795220425.962	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795220425.962	rocksdb.bloom.filter.micros COUNT : 0
1795220425.962	rocksdb.persistent.cache.hit COUNT : 0
1795220425.962	rocksdb.persistent.cache.miss COUNT : 0
1795220425.962	rocksdb.sim.block.cache.hit COUNT : 0
1795220425.962	rocksdb.sim.block.cache.miss COUNT : 0
1795220425.962	rocksdb.memtable.hit COUNT : 0
1795220425.962	rocksdb.memtable.miss COUNT : 0
1795220425.962	rocksdb.l0.hit COUNT : 0
1795220425.962	rocksdb.l1.hit COUNT : 0
1795220425.962	rocksdb.l2andup.hit COUNT : 0
1795220425.962	rocksdb.compaction.key.drop.new COUNT : 20600268
1795220425.962	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795220425.962	rocksdb.compaction.key.drop.range_del COUNT : 0
1795220425.962	rocksdb.compaction.key.drop.user COUNT : 0
1795220425.962	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795220425.962	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795220425.962	rocksdb.compaction.cancelled COUNT : 0
1795220425.962	rocksdb.number.keys.written COUNT : 23356432
1795220425.962	rocksdb.number.keys.read COUNT : 0
1795220425.962	rocksdb.number.keys.updated COUNT : 0
1795220425.962	rocksdb.bytes.written COUNT : 24605731560
1795220425.962	rocksdb.bytes.read COUNT : 0
1795220425.962	rocksdb.number.db.seek COUNT : 0
1795220425.962	rocksdb.number.db.next COUNT : 0
1795220425.962	rocksdb.number.db.prev COUNT : 0
1795220425.962	rocksdb.number.db.seek.found COUNT : 0
1795220425.962	rocksdb.number.db.next.found COUNT : 0
1795220425.962	rocksdb.number.db.prev.found COUNT : 0
1795220425.962	rocksdb.db.iter.bytes.read COUNT : 0
1795220425.962	rocksdb.no.file.closes COUNT : 0
1795220425.962	rocksdb.no.file.opens COUNT : 1237591
1795220425.962	rocksdb.no.file.errors COUNT : 0
1795220425.962	rocksdb.l0.slowdown.micros COUNT : 0
1795220425.962	rocksdb.memtable.compaction.micros COUNT : 0
1795220425.962	rocksdb.l0.num.files.stall.micros COUNT : 0
1795220425.962	rocksdb.stall.micros COUNT : 15348170914
1795220425.962	rocksdb.db.mutex.wait.micros COUNT : 0
1795220425.962	rocksdb.rate.limit.delay.millis COUNT : 0
1795220425.962	rocksdb.num.iterators COUNT : 0
1795220425.962	rocksdb.number.multiget.get COUNT : 0
1795220425.962	rocksdb.number.multiget.keys.read COUNT : 0
1795220425.962	rocksdb.number.multiget.bytes.read COUNT : 0
1795220425.962	rocksdb.number.deletes.filtered COUNT : 0
1795220425.962	rocksdb.number.merge.failures COUNT : 0
1795220425.962	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795220425.962	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795220425.962	rocksdb.number.reseeks.iteration COUNT : 0
1795220425.962	rocksdb.getupdatessince.calls COUNT : 0
1795220425.962	rocksdb.block.cachecompressed.miss COUNT : 0
1795220425.962	rocksdb.block.cachecompressed.hit COUNT : 0
1795220425.962	rocksdb.block.cachecompressed.add COUNT : 0
1795220425.962	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795220425.962	rocksdb.wal.synced COUNT : 0
1795220425.962	rocksdb.wal.bytes COUNT : 24605731560
1795220425.962	rocksdb.write.self COUNT : 18468046
1795220425.962	rocksdb.write.other COUNT : 4888386
1795220425.962	rocksdb.write.timeout COUNT : 0
1795220425.962	rocksdb.write.wal COUNT : 23356432
1795220425.962	rocksdb.compact.read.bytes COUNT : 562325243619
1795220425.962	rocksdb.compact.write.bytes COUNT : 540677881800
1795220425.962	rocksdb.flush.write.bytes COUNT : 24662252349
1795220425.962	rocksdb.compact.read.marked.bytes COUNT : 0
1795220425.962	rocksdb.compact.read.periodic.bytes COUNT : 0
1795220425.962	rocksdb.compact.read.ttl.bytes COUNT : 0
1795220425.962	rocksdb.compact.write.marked.bytes COUNT : 0
1795220425.962	rocksdb.compact.write.periodic.bytes COUNT : 0
1795220425.962	rocksdb.compact.write.ttl.bytes COUNT : 0
1795220425.962	rocksdb.number.direct.load.table.properties COUNT : 0
1795220425.962	rocksdb.number.superversion_acquires COUNT : 0
1795220425.962	rocksdb.number.superversion_releases COUNT : 0
1795220425.962	rocksdb.number.superversion_cleanups COUNT : 0
1795220425.962	rocksdb.number.block.compressed COUNT : 0
1795220425.962	rocksdb.number.block.decompressed COUNT : 0
1795220425.962	rocksdb.number.block.not_compressed COUNT : 0
1795220425.963	rocksdb.merge.operation.time.nanos COUNT : 0
1795220425.963	rocksdb.filter.operation.time.nanos COUNT : 0
1795220425.963	rocksdb.row.cache.hit COUNT : 0
1795220425.963	rocksdb.row.cache.miss COUNT : 0
1795220425.963	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795220425.963	rocksdb.read.amp.total.read.bytes COUNT : 0
1795220425.963	rocksdb.number.rate_limiter.drains COUNT : 0
1795220425.963	rocksdb.number.iter.skip COUNT : 0
1795220425.963	rocksdb.blobdb.num.put COUNT : 0
1795220425.963	rocksdb.blobdb.num.write COUNT : 0
1795220425.963	rocksdb.blobdb.num.get COUNT : 0
1795220425.963	rocksdb.blobdb.num.multiget COUNT : 0
1795220425.963	rocksdb.blobdb.num.seek COUNT : 0
1795220425.963	rocksdb.blobdb.num.next COUNT : 0
1795220425.963	rocksdb.blobdb.num.prev COUNT : 0
1795220425.963	rocksdb.blobdb.num.keys.written COUNT : 0
1795220425.963	rocksdb.blobdb.num.keys.read COUNT : 0
1795220425.963	rocksdb.blobdb.bytes.written COUNT : 0
1795220425.963	rocksdb.blobdb.bytes.read COUNT : 0
1795220425.963	rocksdb.blobdb.write.inlined COUNT : 0
1795220425.963	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795220425.963	rocksdb.blobdb.write.blob COUNT : 0
1795220425.963	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795220425.963	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795220425.963	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795220425.963	rocksdb.blobdb.blob.file.synced COUNT : 0
1795220425.963	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795220425.963	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795220425.963	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795220425.963	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795220425.963	rocksdb.blobdb.gc.num.files COUNT : 0
1795220425.963	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795220425.963	rocksdb.blobdb.gc.failures COUNT : 0
1795220425.963	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795220425.963	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795220425.963	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795220425.963	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795220425.963	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795220425.963	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795220425.963	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795220425.963	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795220425.963	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795220425.963	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795220425.963	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795220425.963	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795220425.963	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795220425.963	rocksdb.txn.get.tryagain COUNT : 0
1795220425.963	rocksdb.number.multiget.keys.found COUNT : 0
1795220425.963	rocksdb.num.iterator.created COUNT : 0
1795220425.963	rocksdb.num.iterator.deleted COUNT : 0
1795220425.963	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795220425.963	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795220425.963	rocksdb.block.cache.compression.dict.add COUNT : 0
1795220425.963	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795220425.963	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795220425.963	rocksdb.block.cache.add.redundant COUNT : 0
1795220425.963	rocksdb.block.cache.index.add.redundant COUNT : 0
1795220425.963	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795220425.963	rocksdb.block.cache.data.add.redundant COUNT : 0
1795220425.963	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795220425.963	rocksdb.files.marked.trash COUNT : 0
1795220425.963	rocksdb.files.deleted.immediately COUNT : 1232461
1795220425.963	rocksdb.error.handler.bg.errro.count COUNT : 0
1795220425.963	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795220425.963	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795220425.963	rocksdb.error.handler.autoresume.count COUNT : 0
1795220425.963	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795220425.963	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795220425.963	rocksdb.memtable.payload.bytes.at.flush COUNT : 24476831240
1795220425.963	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1756448
1795220425.963	rocksdb.secondary.cache.hits COUNT : 0
1795220425.963	rocksdb.verify_checksum.read.bytes COUNT : 0
1795220425.963	rocksdb.backup.read.bytes COUNT : 0
1795220425.963	rocksdb.backup.write.bytes COUNT : 0
1795220425.963	rocksdb.remote.compact.read.bytes COUNT : 0
1795220425.963	rocksdb.remote.compact.write.bytes COUNT : 0
1795220425.963	rocksdb.hot.file.read.bytes COUNT : 0
1795220425.963	rocksdb.warm.file.read.bytes COUNT : 0
1795220425.963	rocksdb.cold.file.read.bytes COUNT : 0
1795220425.963	rocksdb.hot.file.read.count COUNT : 0
1795220425.963	rocksdb.warm.file.read.count COUNT : 0
1795220425.963	rocksdb.cold.file.read.count COUNT : 0
1795220425.963	rocksdb.last.level.read.bytes COUNT : 0
1795220425.963	rocksdb.last.level.read.count COUNT : 0
1795220425.963	rocksdb.non.last.level.read.bytes COUNT : 562521663490
1795220425.963	rocksdb.non.last.level.read.count COUNT : 138727330
1795220425.963	rocksdb.block.checksum.compute.count COUNT : 136252148
1795220425.963	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.db.write.micros P50 : 14.083757 P95 : 11798.006732 P99 : 45659.408043 P100 : 5444756.000000 COUNT : 23356432 SUM : 69730547795
1795220425.963	rocksdb.compaction.times.micros P50 : 87293.258427 P95 : 173952.182249 P99 : 245169.595128 P100 : 4770786.000000 COUNT : 197339 SUM : 18207034703
1795220425.963	rocksdb.compaction.times.cpu_micros P50 : 85097.565989 P95 : 169130.245023 P99 : 241696.696844 P100 : 4153752.000000 COUNT : 197339 SUM : 17685480679
1795220425.963	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.table.sync.micros P50 : 25050.240563 P95 : 48924.316703 P99 : 142027.102804 P100 : 769047.000000 COUNT : 13477 SUM : 370534705
1795220425.963	rocksdb.compaction.outfile.sync.micros P50 : 6296.537860 P95 : 13327.091872 P99 : 21814.596234 P100 : 1166790.000000 COUNT : 1199570 SUM : 8267471957
1795220425.963	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.manifest.file.sync.micros P50 : 488.158601 P95 : 720.046920 P99 : 58542.124542 P100 : 1032014.000000 COUNT : 173216 SUM : 287965822
1795220425.963	rocksdb.table.open.io.micros P50 : 230.386443 P95 : 410.025364 P99 : 606.976605 P100 : 139832.000000 COUNT : 1237591 SUM : 344050159
1795220425.963	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.read.block.compaction.micros P50 : 45.865853 P95 : 123.930215 P99 : 229.178002 P100 : 890162.000000 COUNT : 133776966 SUM : 8576914714
1795220425.963	rocksdb.read.block.get.micros P50 : 47.878233 P95 : 106.541516 P99 : 228.890422 P100 : 121222.000000 COUNT : 1237591 SUM : 81832844
1795220425.963	rocksdb.write.raw.block.micros P50 : 0.528847 P95 : 1.235318 P99 : 30.798218 P100 : 2014715.000000 COUNT : 138109488 SUM : 219321805
1795220425.963	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.numfiles.in.singlecompaction P50 : 5.785951 P95 : 9.581575 P99 : 9.924246 P100 : 50.000000 COUNT : 197884 SUM : 1206006
1795220425.963	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.db.write.stall P50 : 0.626677 P95 : 2862.719393 P99 : 12251.656503 P100 : 5441743.000000 COUNT : 18451254 SUM : 15350291030
1795220425.963	rocksdb.sst.read.micros P50 : 45.625950 P95 : 120.774482 P99 : 226.104175 P100 : 890149.000000 COUNT : 138727324 SUM : 8745517974
1795220425.963	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.bytes.per.write P50 : 1116.416780 P95 : 3407.541797 P99 : 4188.000000 P100 : 4188.000000 COUNT : 18468046 SUM : 24605731560
1795220425.963	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.db.flush.micros P50 : 42351.419032 P95 : 106486.884368 P99 : 197552.447552 P100 : 5171976.000000 COUNT : 13475 SUM : 659495208
1795220425.963	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.963	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.964	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.964	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.964	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.964	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795220425.964	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1205461 SUM : 0
1795220425.964	
