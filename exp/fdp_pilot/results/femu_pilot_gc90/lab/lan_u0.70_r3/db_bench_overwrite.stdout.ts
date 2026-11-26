1795582336.129	Initializing RocksDB Options from the specified file
1795582336.129	Initializing RocksDB Options from command-line flags
1795582343.783	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795582343.783	Values:     1024 bytes each (512 bytes after compression)
1795582343.783	Entries:    11678215
1795582343.783	Prefix:    0 bytes
1795582343.783	Keys per prefix:    0
1795582343.783	RawSize:    11582.7 MB (estimated)
1795582343.783	FileSize:   5880.4 MB (estimated)
1795582343.783	Write rate: 0 bytes/second
1795582343.783	Read rate: 0 ops/second
1795582343.783	Compression: NoCompression
1795582343.783	Compression sampling rate: 0
1795582343.783	Memtablerep: SkipListFactory
1795582343.783	Perf Level: 1
1795582343.783	------------------------------------------------
1795582343.783	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795602822.783	overwrite    :    3502.822 micros/op 1140 ops/sec;    1.1 MB/s
1795602827.783	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795602827.783	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602837.783	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602847.783	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602857.783	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602867.817	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602877.817	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602887.817	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795602887.817	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795602887.817	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795602887.819	
1795602887.819	Level Files Size(MB)
1795602887.819	--------------------
1795602887.819	  0        1        2
1795602887.819	  1        6        2
1795602887.819	  2       57       25
1795602887.819	  3      607      250
1795602887.819	  4     5542     2500
1795602887.819	  5    25868    11771
1795602887.819	  6        0        0
1795602887.819	
1795602887.824	
1795602887.824	
1795602887.824	** Compaction Stats [default] **
1795602887.824	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795602887.824	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795602887.824	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.0     28.6    822.06            392.25     13505    0.061     18K      3       0.0       0.0
1795602887.824	  L1      6/0    2.27 MB   0.9     39.7    23.0     16.8      39.7     23.0       0.0   1.7     29.3     29.4   1385.94           1320.36      6729    0.206     40M   6972       0.0       0.0
1795602887.824	  L2     57/0   24.66 MB   1.0    117.4    23.0     94.4     117.4     22.9       0.0   5.1     28.5     28.4   4224.29           4039.75     49377    0.086    119M    52K       0.0       0.0
1795602887.824	  L3    607/0   249.80 MB   1.0    148.9    22.9    126.0     148.4     22.4       0.0   6.5     28.7     28.6   5321.34           5072.89     52205    0.102    151M   524K       0.0       0.0
1795602887.824	  L4   5542/0    2.44 GB   1.0    149.9    22.4    127.5     144.9     17.4       0.0   6.5     29.1     28.1   5272.28           5024.09     52026    0.101    152M  5074K       0.0       0.0
1795602887.824	  L5  25868/0   11.49 GB   0.5     68.3    17.4     50.8      53.6      2.7       0.0   3.1     32.7     25.6   2140.65           2057.49     37142    0.058     69M    14M       0.0       0.0
1795602887.824	 Sum  32081/0   14.21 GB   0.0    524.2   108.7    415.5     526.9    111.4       0.0  22.9     28.0     28.2  19166.56          17906.83    210984    0.091    532M    20M       0.0       0.0
1795602887.824	 Int      0/0    0.00 KB   0.0      0.3     0.1      0.2       0.3      0.0       0.0 268981262.0     29.6     23.9     10.71             10.66       140    0.077    314K    59K       0.0       0.0
1795602887.824	
1795602887.824	** Compaction Stats [default] **
1795602887.824	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795602887.824	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795602887.824	 Low      0/0    0.00 KB   0.0    524.2   108.7    415.5     504.0     88.5       0.0   0.0     29.3     28.1  18347.10          17517.15    197481    0.093    532M    20M       0.0       0.0
1795602887.824	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     28.7    819.44            389.67     13501    0.061       0      0       0.0       0.0
1795602887.824	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    191.1      0.01              0.00         2    0.005       0      0       0.0       0.0
1795602887.824	
1795602887.824	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795602887.824	
1795602887.824	Uptime(secs): 20551.7 total, 20.1 interval
1795602887.824	Flush(GB): cumulative 22.967, interval 0.000
1795602887.824	AddFile(GB): cumulative 0.000, interval 0.000
1795602887.824	AddFile(Total Files): cumulative 0, interval 0
1795602887.824	AddFile(L0 Files): cumulative 0, interval 0
1795602887.824	AddFile(Keys): cumulative 0, interval 0
1795602887.824	Cumulative compaction: 526.93 GB write, 26.25 MB/s write, 524.21 GB read, 26.12 MB/s read, 19166.6 seconds
1795602887.824	Interval compaction: 0.25 GB write, 12.76 MB/s write, 0.31 GB read, 15.76 MB/s read, 10.7 seconds
1795602887.824	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 238384 slowdown for pending_compaction_bytes, 26 memtable_compaction, 6 memtable_slowdown, interval 0 total count
1795602887.824	Block cache LRUCache@0x594625964a70#40086 capacity: 8.00 MB collections: 115 last_copies: 0 last_secs: 6.8e-05 secs_since: 20
1795602887.824	Block cache entry stats(count,size,portion): Misc(3,8.36 KB,0.102043%)
1795602887.824	
1795602887.824	** File Read Latency Histogram By Level [default] **
1795602887.824	** Level 0 read latency histogram (micros):
1795602887.824	Count: 5902735 Average: 62.7239  StdDev: 435.95
1795602887.824	Min: 9  Median: 45.5554  Max: 820369
1795602887.824	Percentiles: P50: 45.56 P75: 58.24 P99: 224.07 P99.9: 383.88 P99.99: 866.33
1795602887.824	------------------------------------------------------
1795602887.824	(       6,      10 ]        1   0.000%   0.000% 
1795602887.824	(      10,      15 ]        5   0.000%   0.000% 
1795602887.824	(      34,      51 ]  4341953  73.558%  73.558% ###############
1795602887.824	(      51,      76 ]   293945   4.980%  78.538% #
1795602887.824	(      76,     110 ]   959623  16.257%  94.795% ###
1795602887.824	(     110,     170 ]   196066   3.322%  98.117% #
1795602887.824	(     170,     250 ]    77102   1.306%  99.423% 
1795602887.824	(     250,     380 ]    28048   0.475%  99.898% 
1795602887.824	(     380,     580 ]     4600   0.078%  99.976% 
1795602887.824	(     580,     870 ]      812   0.014%  99.990% 
1795602887.824	(     870,    1300 ]      283   0.005%  99.995% 
1795602887.824	(    1300,    1900 ]       68   0.001%  99.996% 
1795602887.824	(    1900,    2900 ]       45   0.001%  99.997% 
1795602887.824	(    2900,    4400 ]       36   0.001%  99.997% 
1795602887.824	(    4400,    6600 ]        9   0.000%  99.998% 
1795602887.824	(    6600,    9900 ]       19   0.000%  99.998% 
1795602887.824	(    9900,   14000 ]       12   0.000%  99.998% 
1795602887.824	(   14000,   22000 ]        7   0.000%  99.998% 
1795602887.824	(   22000,   33000 ]        9   0.000%  99.998% 
1795602887.824	(   33000,   50000 ]       33   0.001%  99.999% 
1795602887.824	(   50000,   75000 ]       37   0.001% 100.000% 
1795602887.824	(   75000,  110000 ]        9   0.000% 100.000% 
1795602887.824	(  110000,  170000 ]       12   0.000% 100.000% 
1795602887.824	(  570000,  860000 ]        1   0.000% 100.000% 
1795602887.824	
1795602887.824	** Level 1 read latency histogram (micros):
1795602887.824	Count: 10507976 Average: 62.1364  StdDev: 350.76
1795602887.824	Min: 6  Median: 45.4206  Max: 135331
1795602887.824	Percentiles: P50: 45.42 P75: 53.83 P99: 210.35 P99.9: 372.63 P99.99: 854.41
1795602887.824	------------------------------------------------------
1795602887.824	(       4,       6 ]        8   0.000%   0.000% 
1795602887.824	(       6,      10 ]       82   0.001%   0.001% 
1795602887.824	(      10,      15 ]       49   0.000%   0.001% 
1795602887.824	(      15,      22 ]       11   0.000%   0.001% 
1795602887.824	(      22,      34 ]        6   0.000%   0.001% 
1795602887.824	(      34,      51 ]  7820531  74.425%  74.426% ###############
1795602887.824	(      51,      76 ]   532149   5.064%  79.490% #
1795602887.824	(      76,     110 ]  1660978  15.807%  95.297% ###
1795602887.824	(     110,     170 ]   327762   3.119%  98.416% #
1795602887.824	(     170,     250 ]   121585   1.157%  99.574% 
1795602887.824	(     250,     380 ]    36370   0.346%  99.920% 
1795602887.824	(     380,     580 ]     6359   0.061%  99.980% 
1795602887.824	(     580,     870 ]     1094   0.010%  99.991% 
1795602887.824	(     870,    1300 ]      390   0.004%  99.994% 
1795602887.824	(    1300,    1900 ]      113   0.001%  99.995% 
1795602887.824	(    1900,    2900 ]       78   0.001%  99.996% 
1795602887.824	(    2900,    4400 ]       81   0.001%  99.997% 
1795602887.824	(    4400,    6600 ]       19   0.000%  99.997% 
1795602887.824	(    6600,    9900 ]       33   0.000%  99.997% 
1795602887.824	(    9900,   14000 ]       21   0.000%  99.998% 
1795602887.824	(   14000,   22000 ]       17   0.000%  99.998% 
1795602887.824	(   22000,   33000 ]       19   0.000%  99.998% 
1795602887.824	(   33000,   50000 ]       73   0.001%  99.999% 
1795602887.824	(   50000,   75000 ]       92   0.001%  99.999% 
1795602887.824	(   75000,  110000 ]       62   0.001% 100.000% 
1795602887.824	(  110000,  170000 ]       16   0.000% 100.000% 
1795602887.824	
1795602887.824	** Level 2 read latency histogram (micros):
1795602887.824	Count: 31124603 Average: 62.5313  StdDev: 37.92
1795602887.824	Min: 5  Median: 45.5642  Max: 293410
1795602887.824	Percentiles: P50: 45.56 P75: 58.46 P99: 218.72 P99.9: 375.62 P99.99: 841.48
1795602887.824	------------------------------------------------------
1795602887.824	(       4,       6 ]      719   0.002%   0.002% 
1795602887.824	(       6,      10 ]     3701   0.012%   0.014% 
1795602887.824	(      10,      15 ]     1110   0.004%   0.018% 
1795602887.824	(      15,      22 ]      174   0.001%   0.018% 
1795602887.824	(      22,      34 ]       60   0.000%   0.019% 
1795602887.824	(      34,      51 ] 22869014  73.476%  73.494% ###############
1795602887.824	(      51,      76 ]  1571143   5.048%  78.542% #
1795602887.824	(      76,     110 ]  5124415  16.464%  95.006% ###
1795602887.824	(     110,     170 ]  1007468   3.237%  98.243% #
1795602887.824	(     170,     250 ]   386821   1.243%  99.486% 
1795602887.824	(     250,     380 ]   133350   0.428%  99.914% 
1795602887.824	(     380,     580 ]    20137   0.065%  99.979% 
1795602887.824	(     580,     870 ]     3747   0.012%  99.991% 
1795602887.824	(     870,    1300 ]     1460   0.005%  99.996% 
1795602887.824	(    1300,    1900 ]      452   0.001%  99.997% 
1795602887.824	(    1900,    2900 ]      272   0.001%  99.998% 
1795602887.824	(    2900,    4400 ]      225   0.001%  99.999% 
1795602887.824	(    4400,    6600 ]       45   0.000%  99.999% 
1795602887.824	(    6600,    9900 ]       75   0.000%  99.999% 
1795602887.824	(    9900,   14000 ]       65   0.000% 100.000% 
1795602887.824	(   14000,   22000 ]       45   0.000% 100.000% 
1795602887.824	(   22000,   33000 ]       51   0.000% 100.000% 
1795602887.824	(   33000,   50000 ]      163   0.001% 100.000% 
1795602887.824	(   50000,   75000 ]      200   0.001% 100.001% 
1795602887.824	(   75000,  110000 ]      114   0.000% 100.001% 
1795602887.824	(  110000,  170000 ]       48   0.000% 100.002% 
1795602887.824	(  250000,  380000 ]        3   0.000% 100.002% 
1795602887.824	
1795602887.824	** Level 3 read latency histogram (micros):
1795602887.824	Count: 39368624 Average: 63.2032  StdDev: 72.38
1795602887.824	Min: 5  Median: 45.6992  Max: 286187
1795602887.824	Percentiles: P50: 45.70 P75: 62.34 P99: 222.72 P99.9: 370.31 P99.99: 770.41
1795602887.824	------------------------------------------------------
1795602887.824	(       4,       6 ]      592   0.002%   0.002% 
1795602887.824	(       6,      10 ]     1750   0.004%   0.006% 
1795602887.824	(      10,      15 ]      493   0.001%   0.007% 
1795602887.824	(      15,      22 ]      117   0.000%   0.007% 
1795602887.824	(      22,      34 ]       46   0.000%   0.008% 
1795602887.824	(      34,      51 ] 28598785  72.644%  72.651% ###############
1795602887.824	(      51,      76 ]  2037947   5.177%  77.828% #
1795602887.824	(      76,     110 ]  6606157  16.780%  94.608% ###
1795602887.824	(     110,     170 ]  1351582   3.433%  98.041% #
1795602887.824	(     170,     250 ]   572772   1.455%  99.496% 
1795602887.824	(     250,     380 ]   171819   0.436%  99.933% 
1795602887.824	(     380,     580 ]    20381   0.052%  99.984% 
1795602887.824	(     580,     870 ]     3421   0.009%  99.993% 
1795602887.824	(     870,    1300 ]     1299   0.003%  99.996% 
1795602887.824	(    1300,    1900 ]      477   0.001%  99.997% 
1795602887.824	(    1900,    2900 ]      272   0.001%  99.998% 
1795602887.824	(    2900,    4400 ]      222   0.001%  99.999% 
1795602887.824	(    4400,    6600 ]       60   0.000%  99.999% 
1795602887.824	(    6600,    9900 ]       81   0.000%  99.999% 
1795602887.824	(    9900,   14000 ]       84   0.000%  99.999% 
1795602887.824	(   14000,   22000 ]       68   0.000%  99.999% 
1795602887.824	(   22000,   33000 ]       68   0.000% 100.000% 
1795602887.824	(   33000,   50000 ]      221   0.001% 100.000% 
1795602887.824	(   50000,   75000 ]      303   0.001% 100.001% 
1795602887.824	(   75000,  110000 ]      139   0.000% 100.001% 
1795602887.824	(  110000,  170000 ]       67   0.000% 100.002% 
1795602887.824	(  170000,  250000 ]        1   0.000% 100.002% 
1795602887.824	(  250000,  380000 ]        2   0.000% 100.002% 
1795602887.824	
1795602887.824	** Level 4 read latency histogram (micros):
1795602887.824	Count: 38363064 Average: 62.7447  StdDev: 74.12
1795602887.824	Min: 5  Median: 45.6573  Max: 256576
1795602887.824	Percentiles: P50: 45.66 P75: 60.91 P99: 217.93 P99.9: 369.77 P99.99: 795.69
1795602887.824	------------------------------------------------------
1795602887.824	(       4,       6 ]      493   0.001%   0.001% 
1795602887.824	(       6,      10 ]     2170   0.006%   0.007% 
1795602887.824	(      10,      15 ]      701   0.002%   0.009% 
1795602887.824	(      15,      22 ]      114   0.000%   0.009% 
1795602887.824	(      22,      34 ]       34   0.000%   0.009% 
1795602887.824	(      34,      51 ] 27967661  72.903%  72.912% ###############
1795602887.824	(      51,      76 ]  2020303   5.266%  78.178% #
1795602887.824	(      76,     110 ]  6376461  16.621%  94.799% ###
1795602887.824	(     110,     170 ]  1306075   3.405%  98.204% #
1795602887.824	(     170,     250 ]   509744   1.329%  99.533% 
1795602887.824	(     250,     380 ]   152981   0.399%  99.931% 
1795602887.824	(     380,     580 ]    19988   0.052%  99.983% 
1795602887.824	(     580,     870 ]     3365   0.009%  99.992% 
1795602887.824	(     870,    1300 ]     1460   0.004%  99.996% 
1795602887.824	(    1300,    1900 ]      493   0.001%  99.997% 
1795602887.824	(    1900,    2900 ]      330   0.001%  99.998% 
1795602887.824	(    2900,    4400 ]      321   0.001%  99.999% 
1795602887.824	(    4400,    6600 ]       98   0.000%  99.999% 
1795602887.824	(    6600,    9900 ]      132   0.000% 100.000% 
1795602887.824	(    9900,   14000 ]       67   0.000% 100.000% 
1795602887.824	(   14000,   22000 ]       59   0.000% 100.000% 
1795602887.824	(   22000,   33000 ]       66   0.000% 100.000% 
1795602887.824	(   33000,   50000 ]      169   0.000% 100.001% 
1795602887.824	(   50000,   75000 ]      298   0.001% 100.001% 
1795602887.824	(   75000,  110000 ]      100   0.000% 100.002% 
1795602887.824	(  110000,  170000 ]       74   0.000% 100.002% 
1795602887.824	(  170000,  250000 ]        1   0.000% 100.002% 
1795602887.824	(  250000,  380000 ]        1   0.000% 100.002% 
1795602887.824	
1795602887.824	** Level 5 read latency histogram (micros):
1795602887.824	Count: 13567025 Average: 61.7193  StdDev: 290.50
1795602887.824	Min: 5  Median: 45.3221  Max: 300278
1795602887.824	Percentiles: P50: 45.32 P75: 50.99 P99: 219.22 P99.9: 376.98 P99.99: 2201.09
1795602887.824	------------------------------------------------------
1795602887.824	(       4,       6 ]      240   0.002%   0.002% 
1795602887.824	(       6,      10 ]     1589   0.012%   0.013% 
1795602887.824	(      10,      15 ]      564   0.004%   0.018% 
1795602887.824	(      15,      22 ]       86   0.001%   0.018% 
1795602887.824	(      22,      34 ]       29   0.000%   0.018% 
1795602887.824	(      34,      51 ] 10181580  75.047%  75.065% ###############
1795602887.824	(      51,      76 ]   787641   5.806%  80.871% #
1795602887.824	(      76,     110 ]  1966559  14.495%  95.366% ###
1795602887.824	(     110,     170 ]   384002   2.830%  98.196% #
1795602887.824	(     170,     250 ]   177277   1.307%  99.503% 
1795602887.824	(     250,     380 ]    55171   0.407%  99.909% 
1795602887.824	(     380,     580 ]     6837   0.050%  99.960% 
1795602887.824	(     580,     870 ]     2014   0.015%  99.975% 
1795602887.824	(     870,    1300 ]     1515   0.011%  99.986% 
1795602887.824	(    1300,    1900 ]      427   0.003%  99.989% 
1795602887.824	(    1900,    2900 ]      456   0.003%  99.992% 
1795602887.824	(    2900,    4400 ]      431   0.003%  99.996% 
1795602887.824	(    4400,    6600 ]      248   0.002%  99.997% 
1795602887.824	(    6600,    9900 ]      167   0.001%  99.999% 
1795602887.824	(    9900,   14000 ]       66   0.000%  99.999% 
1795602887.824	(   14000,   22000 ]       22   0.000%  99.999% 
1795602887.824	(   22000,   33000 ]       15   0.000%  99.999% 
1795602887.824	(   33000,   50000 ]       79   0.001% 100.000% 
1795602887.824	(   50000,   75000 ]      119   0.001% 100.001% 
1795602887.824	(   75000,  110000 ]       23   0.000% 100.001% 
1795602887.824	(  110000,  170000 ]       15   0.000% 100.001% 
1795602887.824	(  250000,  380000 ]        1   0.000% 100.001% 
1795602887.824	
1795602887.824	
1795602887.824	** DB Stats **
1795602887.824	Uptime(secs): 20551.7 total, 20.1 interval
1795602887.824	Cumulative writes: 23M writes, 23M keys, 18M commit groups, 1.3 writes per commit group, ingest: 22.91 GB, 1.14 MB/s
1795602887.824	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.91 GB, 1.14 MB/s
1795602887.824	Cumulative stall: 04:58:11.077 H:M:S, 87.1 percent
1795602887.824	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795602887.824	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795602887.824	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795602887.824	
1795602887.825	STATISTICS:
1795602887.825	rocksdb.block.cache.miss COUNT : 133882578
1795602887.825	rocksdb.block.cache.hit COUNT : 0
1795602887.825	rocksdb.block.cache.add COUNT : 0
1795602887.825	rocksdb.block.cache.add.failures COUNT : 0
1795602887.825	rocksdb.block.cache.index.miss COUNT : 0
1795602887.825	rocksdb.block.cache.index.hit COUNT : 0
1795602887.825	rocksdb.block.cache.index.add COUNT : 0
1795602887.825	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795602887.825	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795602887.825	rocksdb.block.cache.filter.miss COUNT : 0
1795602887.825	rocksdb.block.cache.filter.hit COUNT : 0
1795602887.825	rocksdb.block.cache.filter.add COUNT : 0
1795602887.825	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795602887.825	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795602887.825	rocksdb.block.cache.data.miss COUNT : 133882578
1795602887.825	rocksdb.block.cache.data.hit COUNT : 0
1795602887.825	rocksdb.block.cache.data.add COUNT : 0
1795602887.825	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795602887.825	rocksdb.block.cache.bytes.read COUNT : 0
1795602887.825	rocksdb.block.cache.bytes.write COUNT : 0
1795602887.825	rocksdb.bloom.filter.useful COUNT : 0
1795602887.825	rocksdb.bloom.filter.full.positive COUNT : 0
1795602887.825	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795602887.825	rocksdb.bloom.filter.micros COUNT : 0
1795602887.825	rocksdb.persistent.cache.hit COUNT : 0
1795602887.825	rocksdb.persistent.cache.miss COUNT : 0
1795602887.825	rocksdb.sim.block.cache.hit COUNT : 0
1795602887.825	rocksdb.sim.block.cache.miss COUNT : 0
1795602887.825	rocksdb.memtable.hit COUNT : 0
1795602887.825	rocksdb.memtable.miss COUNT : 0
1795602887.825	rocksdb.l0.hit COUNT : 0
1795602887.825	rocksdb.l1.hit COUNT : 0
1795602887.825	rocksdb.l2andup.hit COUNT : 0
1795602887.825	rocksdb.compaction.key.drop.new COUNT : 20598682
1795602887.825	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795602887.825	rocksdb.compaction.key.drop.range_del COUNT : 0
1795602887.825	rocksdb.compaction.key.drop.user COUNT : 0
1795602887.825	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795602887.825	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795602887.825	rocksdb.compaction.cancelled COUNT : 0
1795602887.825	rocksdb.number.keys.written COUNT : 23356432
1795602887.825	rocksdb.number.keys.read COUNT : 0
1795602887.825	rocksdb.number.keys.updated COUNT : 0
1795602887.825	rocksdb.bytes.written COUNT : 24603128556
1795602887.825	rocksdb.bytes.read COUNT : 0
1795602887.825	rocksdb.number.db.seek COUNT : 0
1795602887.825	rocksdb.number.db.next COUNT : 0
1795602887.825	rocksdb.number.db.prev COUNT : 0
1795602887.825	rocksdb.number.db.seek.found COUNT : 0
1795602887.825	rocksdb.number.db.next.found COUNT : 0
1795602887.825	rocksdb.number.db.prev.found COUNT : 0
1795602887.825	rocksdb.db.iter.bytes.read COUNT : 0
1795602887.825	rocksdb.no.file.closes COUNT : 0
1795602887.825	rocksdb.no.file.opens COUNT : 1238672
1795602887.825	rocksdb.no.file.errors COUNT : 0
1795602887.825	rocksdb.l0.slowdown.micros COUNT : 0
1795602887.825	rocksdb.memtable.compaction.micros COUNT : 0
1795602887.825	rocksdb.l0.num.files.stall.micros COUNT : 0
1795602887.825	rocksdb.stall.micros COUNT : 17891076626
1795602887.825	rocksdb.db.mutex.wait.micros COUNT : 0
1795602887.825	rocksdb.rate.limit.delay.millis COUNT : 0
1795602887.825	rocksdb.num.iterators COUNT : 0
1795602887.825	rocksdb.number.multiget.get COUNT : 0
1795602887.825	rocksdb.number.multiget.keys.read COUNT : 0
1795602887.825	rocksdb.number.multiget.bytes.read COUNT : 0
1795602887.825	rocksdb.number.deletes.filtered COUNT : 0
1795602887.825	rocksdb.number.merge.failures COUNT : 0
1795602887.825	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795602887.825	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795602887.825	rocksdb.number.reseeks.iteration COUNT : 0
1795602887.825	rocksdb.getupdatessince.calls COUNT : 0
1795602887.825	rocksdb.block.cachecompressed.miss COUNT : 0
1795602887.825	rocksdb.block.cachecompressed.hit COUNT : 0
1795602887.825	rocksdb.block.cachecompressed.add COUNT : 0
1795602887.825	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795602887.825	rocksdb.wal.synced COUNT : 0
1795602887.825	rocksdb.wal.bytes COUNT : 24603128556
1795602887.825	rocksdb.write.self COUNT : 18251129
1795602887.825	rocksdb.write.other COUNT : 5105303
1795602887.825	rocksdb.write.timeout COUNT : 0
1795602887.825	rocksdb.write.wal COUNT : 23356432
1795602887.825	rocksdb.compact.read.bytes COUNT : 562770300238
1795602887.825	rocksdb.compact.write.bytes COUNT : 541124601686
1795602887.825	rocksdb.flush.write.bytes COUNT : 24662686848
1795602887.825	rocksdb.compact.read.marked.bytes COUNT : 0
1795602887.825	rocksdb.compact.read.periodic.bytes COUNT : 0
1795602887.825	rocksdb.compact.read.ttl.bytes COUNT : 0
1795602887.825	rocksdb.compact.write.marked.bytes COUNT : 0
1795602887.825	rocksdb.compact.write.periodic.bytes COUNT : 0
1795602887.825	rocksdb.compact.write.ttl.bytes COUNT : 0
1795602887.825	rocksdb.number.direct.load.table.properties COUNT : 0
1795602887.825	rocksdb.number.superversion_acquires COUNT : 0
1795602887.825	rocksdb.number.superversion_releases COUNT : 0
1795602887.825	rocksdb.number.superversion_cleanups COUNT : 0
1795602887.825	rocksdb.number.block.compressed COUNT : 0
1795602887.825	rocksdb.number.block.decompressed COUNT : 0
1795602887.825	rocksdb.number.block.not_compressed COUNT : 0
1795602887.825	rocksdb.merge.operation.time.nanos COUNT : 0
1795602887.825	rocksdb.filter.operation.time.nanos COUNT : 0
1795602887.825	rocksdb.row.cache.hit COUNT : 0
1795602887.825	rocksdb.row.cache.miss COUNT : 0
1795602887.825	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795602887.825	rocksdb.read.amp.total.read.bytes COUNT : 0
1795602887.825	rocksdb.number.rate_limiter.drains COUNT : 0
1795602887.825	rocksdb.number.iter.skip COUNT : 0
1795602887.825	rocksdb.blobdb.num.put COUNT : 0
1795602887.825	rocksdb.blobdb.num.write COUNT : 0
1795602887.825	rocksdb.blobdb.num.get COUNT : 0
1795602887.825	rocksdb.blobdb.num.multiget COUNT : 0
1795602887.825	rocksdb.blobdb.num.seek COUNT : 0
1795602887.825	rocksdb.blobdb.num.next COUNT : 0
1795602887.825	rocksdb.blobdb.num.prev COUNT : 0
1795602887.825	rocksdb.blobdb.num.keys.written COUNT : 0
1795602887.825	rocksdb.blobdb.num.keys.read COUNT : 0
1795602887.826	rocksdb.blobdb.bytes.written COUNT : 0
1795602887.826	rocksdb.blobdb.bytes.read COUNT : 0
1795602887.826	rocksdb.blobdb.write.inlined COUNT : 0
1795602887.826	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795602887.826	rocksdb.blobdb.write.blob COUNT : 0
1795602887.826	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795602887.826	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795602887.826	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795602887.826	rocksdb.blobdb.blob.file.synced COUNT : 0
1795602887.826	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795602887.826	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795602887.826	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795602887.826	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795602887.826	rocksdb.blobdb.gc.num.files COUNT : 0
1795602887.826	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795602887.826	rocksdb.blobdb.gc.failures COUNT : 0
1795602887.826	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795602887.826	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795602887.826	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795602887.826	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795602887.826	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795602887.826	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795602887.826	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795602887.826	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795602887.826	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795602887.826	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795602887.826	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795602887.826	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795602887.826	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795602887.826	rocksdb.txn.get.tryagain COUNT : 0
1795602887.826	rocksdb.number.multiget.keys.found COUNT : 0
1795602887.826	rocksdb.num.iterator.created COUNT : 0
1795602887.826	rocksdb.num.iterator.deleted COUNT : 0
1795602887.826	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795602887.826	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795602887.826	rocksdb.block.cache.compression.dict.add COUNT : 0
1795602887.826	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795602887.826	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795602887.826	rocksdb.block.cache.add.redundant COUNT : 0
1795602887.826	rocksdb.block.cache.index.add.redundant COUNT : 0
1795602887.826	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795602887.826	rocksdb.block.cache.data.add.redundant COUNT : 0
1795602887.826	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795602887.826	rocksdb.files.marked.trash COUNT : 0
1795602887.826	rocksdb.files.deleted.immediately COUNT : 1233658
1795602887.826	rocksdb.error.handler.bg.errro.count COUNT : 0
1795602887.826	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795602887.826	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795602887.826	rocksdb.error.handler.autoresume.count COUNT : 0
1795602887.826	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795602887.826	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795602887.826	rocksdb.memtable.payload.bytes.at.flush COUNT : 24477326944
1795602887.826	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1769024
1795602887.826	rocksdb.secondary.cache.hits COUNT : 0
1795602887.826	rocksdb.verify_checksum.read.bytes COUNT : 0
1795602887.826	rocksdb.backup.read.bytes COUNT : 0
1795602887.826	rocksdb.backup.write.bytes COUNT : 0
1795602887.826	rocksdb.remote.compact.read.bytes COUNT : 0
1795602887.826	rocksdb.remote.compact.write.bytes COUNT : 0
1795602887.826	rocksdb.hot.file.read.bytes COUNT : 0
1795602887.826	rocksdb.warm.file.read.bytes COUNT : 0
1795602887.826	rocksdb.cold.file.read.bytes COUNT : 0
1795602887.826	rocksdb.hot.file.read.count COUNT : 0
1795602887.826	rocksdb.warm.file.read.count COUNT : 0
1795602887.826	rocksdb.cold.file.read.count COUNT : 0
1795602887.826	rocksdb.last.level.read.bytes COUNT : 0
1795602887.826	rocksdb.last.level.read.count COUNT : 0
1795602887.826	rocksdb.non.last.level.read.bytes COUNT : 562966708868
1795602887.826	rocksdb.non.last.level.read.count COUNT : 138837266
1795602887.826	rocksdb.block.checksum.compute.count COUNT : 136359922
1795602887.826	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.db.write.micros P50 : 41.819672 P95 : 13567.250740 P99 : 50971.214636 P100 : 5116813.000000 COUNT : 23356432 SUM : 81774973614
1795602887.826	rocksdb.compaction.times.micros P50 : 87641.407931 P95 : 177786.788751 P99 : 246670.503597 P100 : 2689240.000000 COUNT : 197481 SUM : 18347104706
1795602887.826	rocksdb.compaction.times.cpu_micros P50 : 84184.774163 P95 : 168391.213167 P99 : 240821.793883 P100 : 2585478.000000 COUNT : 197481 SUM : 17517151855
1795602887.826	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.table.sync.micros P50 : 24222.686734 P95 : 48851.098901 P99 : 141557.391304 P100 : 1098191.000000 COUNT : 13503 SUM : 361429636
1795602887.826	rocksdb.compaction.outfile.sync.micros P50 : 5997.019503 P95 : 13070.754544 P99 : 21739.225468 P100 : 1098862.000000 COUNT : 1200669 SUM : 7978873125
1795602887.826	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.manifest.file.sync.micros P50 : 487.702086 P95 : 705.732043 P99 : 50195.561720 P100 : 908375.000000 COUNT : 172836 SUM : 265805480
1795602887.826	rocksdb.table.open.io.micros P50 : 239.565468 P95 : 445.114224 P99 : 624.197712 P100 : 293690.000000 COUNT : 1238672 SUM : 366629975
1795602887.826	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.read.block.compaction.micros P50 : 45.881073 P95 : 115.625841 P99 : 223.183092 P100 : 820375.000000 COUNT : 133882578 SUM : 8536316491
1795602887.826	rocksdb.read.block.get.micros P50 : 53.075945 P95 : 107.052468 P99 : 225.389131 P100 : 293423.000000 COUNT : 1238672 SUM : 84212445
1795602887.826	rocksdb.write.raw.block.micros P50 : 0.534357 P95 : 1.500783 P99 : 41.019217 P100 : 1929383.000000 COUNT : 138219000 SUM : 263028847
1795602887.826	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.numfiles.in.singlecompaction P50 : 5.788229 P95 : 9.583614 P99 : 9.926166 P100 : 36.000000 COUNT : 198053 SUM : 1207163
1795602887.826	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.db.write.stall P50 : 0.646011 P95 : 3145.098176 P99 : 13996.132899 P100 : 5114145.000000 COUNT : 18229375 SUM : 17893651507
1795602887.826	rocksdb.sst.read.micros P50 : 45.592247 P95 : 112.131347 P99 : 219.548042 P100 : 820369.000000 COUNT : 138837266 SUM : 8702350880
1795602887.826	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.bytes.per.write P50 : 1122.370235 P95 : 3404.724187 P99 : 4188.000000 P100 : 4188.000000 COUNT : 18251129 SUM : 24603128556
1795602887.826	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.db.flush.micros P50 : 54098.493003 P95 : 137620.234604 P99 : 231425.000000 P100 : 4847964.000000 COUNT : 13501 SUM : 819443860
1795602887.826	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602887.826	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1206591 SUM : 0
1795602887.826	
