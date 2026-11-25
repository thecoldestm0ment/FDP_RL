1795477030.352	Initializing RocksDB Options from the specified file
1795477030.352	Initializing RocksDB Options from command-line flags
1795477041.876	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795477041.876	Values:     1024 bytes each (512 bytes after compression)
1795477041.876	Entries:    15273953
1795477041.876	Prefix:    0 bytes
1795477041.876	Keys per prefix:    0
1795477041.876	RawSize:    15149.0 MB (estimated)
1795477041.876	FileSize:   7691.0 MB (estimated)
1795477041.876	Write rate: 0 bytes/second
1795477041.876	Read rate: 0 ops/second
1795477041.876	Compression: NoCompression
1795477041.876	Compression sampling rate: 0
1795477041.876	Memtablerep: SkipListFactory
1795477041.876	Perf Level: 1
1795477041.876	------------------------------------------------
1795477041.877	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795513826.641	overwrite    :    4814.506 micros/op 830 ops/sec;    0.8 MB/s
1795513831.638	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795513831.639	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795513841.638	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795513851.638	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795513861.687	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795513871.687	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795513881.717	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795513891.717	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795513901.717	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795513911.717	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795513921.717	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795513921.717	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795513921.717	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795513921.718	
1795513921.718	Level Files Size(MB)
1795513921.718	--------------------
1795513921.718	  0        0        0
1795513921.718	  1        4        2
1795513921.718	  2       59       25
1795513921.718	  3      607      250
1795513921.718	  4     5722     2500
1795513921.719	  5    32649    15394
1795513921.719	  6        0        0
1795513921.719	
1795513921.722	
1795513921.722	
1795513921.722	** Compaction Stats [default] **
1795513921.722	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795513921.722	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795513921.722	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     24.6   1250.10            728.77     17708    0.071     19K      4       0.0       0.0
1795513921.722	  L1      4/0    2.02 MB   0.8     51.3    30.0     21.3      51.3     30.1       0.0   1.7     25.7     25.7   2042.64           1990.14      8839    0.231     52M   6801       0.0       0.0
1795513921.722	  L2     59/0   24.73 MB   1.0    153.2    30.1    123.1     153.2     30.0       0.0   5.1     24.9     24.9   6301.03           6133.67     64566    0.098    155M    52K       0.0       0.0
1795513921.722	  L3    607/0   249.73 MB   1.0    195.6    30.0    165.6     195.1     29.5       0.0   6.5     25.0     25.0   7997.12           7780.76     68354    0.117    198M   518K       0.0       0.0
1795513921.722	  L4   5722/0    2.44 GB   1.0    197.5    29.5    168.0     192.6     24.5       0.0   6.5     25.5     24.8   7944.47           7742.01     68435    0.116    200M  5067K       0.0       0.0
1795513921.722	  L5  32649/0   15.03 GB   0.6    115.5    24.5     91.0      93.7      2.7       0.0   3.8     28.5     23.1   4152.14           4053.11     53173    0.078    117M    22M       0.0       0.0
1795513921.722	 Sum  39041/0   17.74 GB   0.0    713.2   144.1    569.1     715.9    146.8       0.0  23.8     24.6     24.7  29687.51          28428.47    281075    0.106    724M    27M       0.0       0.0
1795513921.722	 Int      0/0    0.00 KB   0.0      0.3     0.0      0.2       0.2      0.0       0.0 234355610.0     24.9     20.8     10.74             10.44       105    0.102    264K    43K       0.0       0.0
1795513921.722	
1795513921.722	** Compaction Stats [default] **
1795513921.722	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795513921.722	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795513921.722	 Low      0/0    0.00 KB   0.0    713.2   144.1    569.1     685.9    116.8       0.0   0.0     25.7     24.7  28439.14          27701.42    263369    0.108    724M    27M       0.0       0.0
1795513921.722	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     24.6   1248.36            727.05     17705    0.071       0      0       0.0       0.0
1795513921.722	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    143.1      0.01              0.00         1    0.006       0      0       0.0       0.0
1795513921.722	
1795513921.722	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795513921.722	
1795513921.722	Uptime(secs): 36891.3 total, 31.2 interval
1795513921.722	Flush(GB): cumulative 30.038, interval 0.000
1795513921.722	AddFile(GB): cumulative 0.000, interval 0.000
1795513921.722	AddFile(Total Files): cumulative 0, interval 0
1795513921.722	AddFile(L0 Files): cumulative 0, interval 0
1795513921.722	AddFile(Keys): cumulative 0, interval 0
1795513921.722	Cumulative compaction: 715.92 GB write, 19.87 MB/s write, 713.20 GB read, 19.80 MB/s read, 29687.5 seconds
1795513921.722	Interval compaction: 0.22 GB write, 7.15 MB/s write, 0.26 GB read, 8.55 MB/s read, 10.7 seconds
1795513921.722	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 316991 slowdown for pending_compaction_bytes, 21 memtable_compaction, 4 memtable_slowdown, interval 0 total count
1795513921.722	Block cache LRUCache@0x5f7eeda51a70#63117 capacity: 8.00 MB collections: 205 last_copies: 2 last_secs: 0.000206 secs_since: 151
1795513921.722	Block cache entry stats(count,size,portion): Misc(3,8.36 KB,0.102043%)
1795513921.722	
1795513921.722	** File Read Latency Histogram By Level [default] **
1795513921.722	** Level 0 read latency histogram (micros):
1795513921.722	Count: 7718668 Average: 69.3124  StdDev: 262.31
1795513921.722	Min: 13  Median: 46.5118  Max: 383077
1795513921.722	Percentiles: P50: 46.51 P75: 70.56 P99: 227.21 P99.9: 441.75 P99.99: 1302.63
1795513921.722	------------------------------------------------------
1795513921.722	(      10,      15 ]        4   0.000%   0.000% 
1795513921.722	(      15,      22 ]        4   0.000%   0.000% 
1795513921.722	(      22,      34 ]        4   0.000%   0.000% 
1795513921.722	(      34,      51 ]  5243708  67.935%  67.936% ##############
1795513921.722	(      51,      76 ]   696871   9.028%  76.964% ##
1795513921.722	(      76,     110 ]  1329253  17.221%  94.185% ###
1795513921.722	(     110,     170 ]   298610   3.869%  98.054% #
1795513921.722	(     170,     250 ]   102113   1.323%  99.377% 
1795513921.722	(     250,     380 ]    38203   0.495%  99.872% 
1795513921.722	(     380,     580 ]     7059   0.091%  99.963% 
1795513921.722	(     580,     870 ]     1465   0.019%  99.982% 
1795513921.722	(     870,    1300 ]      601   0.008%  99.990% 
1795513921.722	(    1300,    1900 ]      259   0.003%  99.993% 
1795513921.722	(    1900,    2900 ]      149   0.002%  99.995% 
1795513921.722	(    2900,    4400 ]       95   0.001%  99.997% 
1795513921.722	(    4400,    6600 ]       37   0.000%  99.997% 
1795513921.722	(    6600,    9900 ]       11   0.000%  99.997% 
1795513921.722	(    9900,   14000 ]        8   0.000%  99.997% 
1795513921.722	(   14000,   22000 ]        8   0.000%  99.997% 
1795513921.722	(   22000,   33000 ]        2   0.000%  99.997% 
1795513921.722	(   50000,   75000 ]       10   0.000%  99.997% 
1795513921.722	(   75000,  110000 ]       63   0.001%  99.998% 
1795513921.722	(  110000,  170000 ]       18   0.000%  99.999% 
1795513921.722	(  170000,  250000 ]       66   0.001%  99.999% 
1795513921.722	(  250000,  380000 ]       46   0.001% 100.000% 
1795513921.722	(  380000,  570000 ]        1   0.000% 100.000% 
1795513921.722	
1795513921.722	** Level 1 read latency histogram (micros):
1795513921.722	Count: 13576088 Average: 70.3418  StdDev: 280.77
1795513921.722	Min: 6  Median: 46.3763  Max: 382798
1795513921.722	Percentiles: P50: 46.38 P75: 68.61 P99: 222.17 P99.9: 429.37 P99.99: 1549.22
1795513921.722	------------------------------------------------------
1795513921.722	(       4,       6 ]        5   0.000%   0.000% 
1795513921.722	(       6,      10 ]       60   0.000%   0.000% 
1795513921.722	(      10,      15 ]       58   0.000%   0.001% 
1795513921.722	(      15,      22 ]       39   0.000%   0.001% 
1795513921.722	(      22,      34 ]        9   0.000%   0.001% 
1795513921.722	(      34,      51 ]  9323764  68.678%  68.679% ##############
1795513921.722	(      51,      76 ]  1218431   8.975%  77.654% ##
1795513921.722	(      76,     110 ]  2279307  16.789%  94.443% ###
1795513921.722	(     110,     170 ]   504607   3.717%  98.160% #
1795513921.722	(     170,     250 ]   174876   1.288%  99.448% 
1795513921.722	(     250,     380 ]    58527   0.431%  99.879% 
1795513921.723	(     380,     580 ]    11460   0.084%  99.964% 
1795513921.723	(     580,     870 ]     2363   0.017%  99.981% 
1795513921.723	(     870,    1300 ]     1003   0.007%  99.988% 
1795513921.723	(    1300,    1900 ]      533   0.004%  99.992% 
1795513921.723	(    1900,    2900 ]      253   0.002%  99.994% 
1795513921.723	(    2900,    4400 ]      172   0.001%  99.995% 
1795513921.723	(    4400,    6600 ]       68   0.001%  99.996% 
1795513921.723	(    6600,    9900 ]       55   0.000%  99.996% 
1795513921.723	(    9900,   14000 ]       29   0.000%  99.997% 
1795513921.723	(   14000,   22000 ]       19   0.000%  99.997% 
1795513921.723	(   22000,   33000 ]       13   0.000%  99.997% 
1795513921.723	(   33000,   50000 ]        6   0.000%  99.997% 
1795513921.723	(   50000,   75000 ]       27   0.000%  99.997% 
1795513921.723	(   75000,  110000 ]      147   0.001%  99.998% 
1795513921.723	(  110000,  170000 ]       61   0.000%  99.999% 
1795513921.723	(  170000,  250000 ]      112   0.001%  99.999% 
1795513921.723	(  250000,  380000 ]      124   0.001% 100.000% 
1795513921.723	(  380000,  570000 ]        2   0.000% 100.000% 
1795513921.723	
1795513921.723	** Level 2 read latency histogram (micros):
1795513921.723	Count: 40616590 Average: 69.7888  StdDev: 70.38
1795513921.723	Min: 5  Median: 46.5785  Max: 823414
1795513921.723	Percentiles: P50: 46.58 P75: 71.03 P99: 228.83 P99.9: 379.23 P99.99: 1129.59
1795513921.723	------------------------------------------------------
1795513921.723	(       4,       6 ]       59   0.000%   0.000% 
1795513921.723	(       6,      10 ]     1637   0.004%   0.004% 
1795513921.723	(      10,      15 ]     2060   0.005%   0.009% 
1795513921.723	(      15,      22 ]      480   0.001%   0.010% 
1795513921.723	(      22,      34 ]      114   0.000%   0.011% 
1795513921.723	(      34,      51 ] 27441041  67.561%  67.572% ##############
1795513921.723	(      51,      76 ]  3765081   9.270%  76.842% ##
1795513921.723	(      76,     110 ]  7018166  17.279%  94.121% ###
1795513921.723	(     110,     170 ]  1548985   3.814%  97.934% #
1795513921.723	(     170,     250 ]   588576   1.449%  99.384% 
1795513921.723	(     250,     380 ]   211021   0.520%  99.903% 
1795513921.723	(     380,     580 ]    28952   0.071%  99.974% 
1795513921.723	(     580,     870 ]     5062   0.012%  99.987% 
1795513921.723	(     870,    1300 ]     2144   0.005%  99.992% 
1795513921.723	(    1300,    1900 ]     1109   0.003%  99.995% 
1795513921.723	(    1900,    2900 ]      696   0.002%  99.997% 
1795513921.723	(    2900,    4400 ]      638   0.002%  99.998% 
1795513921.723	(    4400,    6600 ]      221   0.001%  99.999% 
1795513921.723	(    6600,    9900 ]      128   0.000%  99.999% 
1795513921.723	(    9900,   14000 ]       44   0.000%  99.999% 
1795513921.723	(   14000,   22000 ]       30   0.000%  99.999% 
1795513921.723	(   22000,   33000 ]       16   0.000%  99.999% 
1795513921.723	(   33000,   50000 ]        4   0.000%  99.999% 
1795513921.723	(   50000,   75000 ]       70   0.000%  99.999% 
1795513921.723	(   75000,  110000 ]      414   0.001% 100.000% 
1795513921.723	(  110000,  170000 ]      150   0.000% 100.001% 
1795513921.723	(  170000,  250000 ]      302   0.001% 100.002% 
1795513921.723	(  250000,  380000 ]      258   0.001% 100.002% 
1795513921.723	(  380000,  570000 ]        7   0.000% 100.002% 
1795513921.723	(  570000,  860000 ]        3   0.000% 100.002% 
1795513921.723	
1795513921.723	** Level 3 read latency histogram (micros):
1795513921.723	Count: 51766800 Average: 69.8834  StdDev: 52.39
1795513921.723	Min: 5  Median: 46.6906  Max: 748756
1795513921.723	Percentiles: P50: 46.69 P75: 73.19 P99: 227.23 P99.9: 374.78 P99.99: 1006.81
1795513921.723	------------------------------------------------------
1795513921.723	(       4,       6 ]       73   0.000%   0.000% 
1795513921.723	(       6,      10 ]     1767   0.003%   0.004% 
1795513921.723	(      10,      15 ]     2254   0.004%   0.008% 
1795513921.723	(      15,      22 ]      588   0.001%   0.009% 
1795513921.723	(      22,      34 ]      151   0.000%   0.009% 
1795513921.723	(      34,      51 ] 34666388  66.966%  66.976% #############
1795513921.723	(      51,      76 ]  4679017   9.039%  76.014% ##
1795513921.723	(      76,     110 ]  9269878  17.907%  93.921% ####
1795513921.723	(     110,     170 ]  2066829   3.993%  97.914% #
1795513921.723	(     170,     250 ]   785881   1.518%  99.432% 
1795513921.723	(     250,     380 ]   252348   0.487%  99.920% 
1795513921.723	(     380,     580 ]    30761   0.059%  99.979% 
1795513921.723	(     580,     870 ]     4975   0.010%  99.989% 
1795513921.723	(     870,    1300 ]     2242   0.004%  99.993% 
1795513921.723	(    1300,    1900 ]     1238   0.002%  99.995% 
1795513921.723	(    1900,    2900 ]      799   0.002%  99.997% 
1795513921.723	(    2900,    4400 ]      668   0.001%  99.998% 
1795513921.723	(    4400,    6600 ]      303   0.001%  99.999% 
1795513921.723	(    6600,    9900 ]      164   0.000%  99.999% 
1795513921.723	(    9900,   14000 ]       52   0.000%  99.999% 
1795513921.723	(   14000,   22000 ]       19   0.000%  99.999% 
1795513921.723	(   22000,   33000 ]       11   0.000%  99.999% 
1795513921.723	(   33000,   50000 ]       14   0.000%  99.999% 
1795513921.723	(   50000,   75000 ]      125   0.000% 100.000% 
1795513921.723	(   75000,  110000 ]      441   0.001% 100.000% 
1795513921.723	(  110000,  170000 ]      212   0.000% 100.001% 
1795513921.723	(  170000,  250000 ]      432   0.001% 100.002% 
1795513921.723	(  250000,  380000 ]      272   0.001% 100.002% 
1795513921.723	(  380000,  570000 ]        6   0.000% 100.002% 
1795513921.723	(  570000,  860000 ]        1   0.000% 100.002% 
1795513921.723	
1795513921.723	** Level 4 read latency histogram (micros):
1795513921.723	Count: 51011826 Average: 69.2895  StdDev: 83.66
1795513921.723	Min: 5  Median: 46.7039  Max: 677823
1795513921.723	Percentiles: P50: 46.70 P75: 73.37 P99: 225.27 P99.9: 373.32 P99.99: 1085.50
1795513921.723	------------------------------------------------------
1795513921.723	(       4,       6 ]       56   0.000%   0.000% 
1795513921.723	(       6,      10 ]     1437   0.003%   0.003% 
1795513921.723	(      10,      15 ]     1595   0.003%   0.006% 
1795513921.723	(      15,      22 ]      409   0.001%   0.007% 
1795513921.723	(      22,      34 ]      109   0.000%   0.007% 
1795513921.723	(      34,      51 ] 34126580  66.899%  66.906% #############
1795513921.723	(      51,      76 ]  4614490   9.046%  75.952% ##
1795513921.723	(      76,     110 ]  9190494  18.016%  93.969% ####
1795513921.723	(     110,     170 ]  2045307   4.009%  97.978% #
1795513921.723	(     170,     250 ]   754382   1.479%  99.457% 
1795513921.723	(     250,     380 ]   238187   0.467%  99.924% 
1795513921.723	(     380,     580 ]    27722   0.054%  99.978% 
1795513921.723	(     580,     870 ]     4731   0.009%  99.988% 
1795513921.723	(     870,    1300 ]     2446   0.005%  99.992% 
1795513921.723	(    1300,    1900 ]     1288   0.003%  99.995% 
1795513921.723	(    1900,    2900 ]      889   0.002%  99.997% 
1795513921.723	(    2900,    4400 ]      634   0.001%  99.998% 
1795513921.723	(    4400,    6600 ]      272   0.001%  99.998% 
1795513921.723	(    6600,    9900 ]      173   0.000%  99.999% 
1795513921.723	(    9900,   14000 ]       75   0.000%  99.999% 
1795513921.723	(   14000,   22000 ]       30   0.000%  99.999% 
1795513921.723	(   22000,   33000 ]        9   0.000%  99.999% 
1795513921.723	(   33000,   50000 ]        4   0.000%  99.999% 
1795513921.723	(   50000,   75000 ]      154   0.000%  99.999% 
1795513921.723	(   75000,  110000 ]      416   0.001% 100.000% 
1795513921.723	(  110000,  170000 ]      172   0.000% 100.000% 
1795513921.723	(  170000,  250000 ]      365   0.001% 100.001% 
1795513921.723	(  250000,  380000 ]      241   0.000% 100.002% 
1795513921.723	(  380000,  570000 ]        2   0.000% 100.002% 
1795513921.723	(  570000,  860000 ]        1   0.000% 100.002% 
1795513921.723	
1795513921.723	** Level 5 read latency histogram (micros):
1795513921.723	Count: 24194925 Average: 67.9704  StdDev: 171.10
1795513921.723	Min: 5  Median: 46.3298  Max: 680922
1795513921.723	Percentiles: P50: 46.33 P75: 66.14 P99: 225.58 P99.9: 377.46 P99.99: 2655.72
1795513921.723	------------------------------------------------------
1795513921.723	(       4,       6 ]       26   0.000%   0.000% 
1795513921.723	(       6,      10 ]      902   0.004%   0.004% 
1795513921.723	(      10,      15 ]     1140   0.005%   0.009% 
1795513921.723	(      15,      22 ]      257   0.001%   0.010% 
1795513921.723	(      22,      34 ]       62   0.000%   0.010% 
1795513921.723	(      34,      51 ] 16676339  68.925%  68.935% ##############
1795513921.723	(      51,      76 ]  2422842  10.014%  78.949% ##
1795513921.723	(      76,     110 ]  3804872  15.726%  94.675% ###
1795513921.723	(     110,     170 ]   804093   3.323%  97.998% #
1795513921.723	(     170,     250 ]   348974   1.442%  99.440% 
1795513921.723	(     250,     380 ]   113443   0.469%  99.909% 
1795513921.723	(     380,     580 ]    12761   0.053%  99.962% 
1795513921.723	(     580,     870 ]     3388   0.014%  99.976% 
1795513921.723	(     870,    1300 ]     1996   0.008%  99.984% 
1795513921.723	(    1300,    1900 ]      815   0.003%  99.988% 
1795513921.723	(    1900,    2900 ]      788   0.003%  99.991% 
1795513921.723	(    2900,    4400 ]      774   0.003%  99.994% 
1795513921.723	(    4400,    6600 ]      452   0.002%  99.996% 
1795513921.723	(    6600,    9900 ]      221   0.001%  99.997% 
1795513921.723	(    9900,   14000 ]       45   0.000%  99.997% 
1795513921.723	(   14000,   22000 ]        8   0.000%  99.997% 
1795513921.723	(   22000,   33000 ]        2   0.000%  99.997% 
1795513921.723	(   33000,   50000 ]        2   0.000%  99.997% 
1795513921.723	(   50000,   75000 ]       28   0.000%  99.997% 
1795513921.723	(   75000,  110000 ]      235   0.001%  99.998% 
1795513921.723	(  110000,  170000 ]       64   0.000%  99.998% 
1795513921.723	(  170000,  250000 ]      183   0.001%  99.999% 
1795513921.723	(  250000,  380000 ]      126   0.001% 100.000% 
1795513921.723	(  380000,  570000 ]        3   0.000% 100.000% 
1795513921.723	(  570000,  860000 ]        1   0.000% 100.000% 
1795513921.723	
1795513921.723	
1795513921.723	** DB Stats **
1795513921.723	Uptime(secs): 36891.3 total, 31.2 interval
1795513921.723	Cumulative writes: 30M writes, 30M keys, 22M commit groups, 1.3 writes per commit group, ingest: 29.96 GB, 0.83 MB/s
1795513921.724	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.96 GB, 0.83 MB/s
1795513921.724	Cumulative stall: 08:40:17.925 H:M:S, 84.6 percent
1795513921.724	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795513921.724	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795513921.724	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795513921.724	
1795513921.724	STATISTICS:
1795513921.724	rocksdb.block.cache.miss COUNT : 182149455
1795513921.724	rocksdb.block.cache.hit COUNT : 0
1795513921.724	rocksdb.block.cache.add COUNT : 0
1795513921.724	rocksdb.block.cache.add.failures COUNT : 0
1795513921.724	rocksdb.block.cache.index.miss COUNT : 0
1795513921.724	rocksdb.block.cache.index.hit COUNT : 0
1795513921.724	rocksdb.block.cache.index.add COUNT : 0
1795513921.724	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795513921.724	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795513921.724	rocksdb.block.cache.filter.miss COUNT : 0
1795513921.724	rocksdb.block.cache.filter.hit COUNT : 0
1795513921.724	rocksdb.block.cache.filter.add COUNT : 0
1795513921.724	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795513921.724	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795513921.724	rocksdb.block.cache.data.miss COUNT : 182149455
1795513921.724	rocksdb.block.cache.data.hit COUNT : 0
1795513921.724	rocksdb.block.cache.data.add COUNT : 0
1795513921.724	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795513921.724	rocksdb.block.cache.bytes.read COUNT : 0
1795513921.724	rocksdb.block.cache.bytes.write COUNT : 0
1795513921.724	rocksdb.bloom.filter.useful COUNT : 0
1795513921.724	rocksdb.bloom.filter.full.positive COUNT : 0
1795513921.724	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795513921.724	rocksdb.bloom.filter.micros COUNT : 0
1795513921.724	rocksdb.persistent.cache.hit COUNT : 0
1795513921.724	rocksdb.persistent.cache.miss COUNT : 0
1795513921.724	rocksdb.sim.block.cache.hit COUNT : 0
1795513921.724	rocksdb.sim.block.cache.miss COUNT : 0
1795513921.724	rocksdb.memtable.hit COUNT : 0
1795513921.724	rocksdb.memtable.miss COUNT : 0
1795513921.724	rocksdb.l0.hit COUNT : 0
1795513921.724	rocksdb.l1.hit COUNT : 0
1795513921.724	rocksdb.l2andup.hit COUNT : 0
1795513921.724	rocksdb.compaction.key.drop.new COUNT : 27790847
1795513921.724	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795513921.724	rocksdb.compaction.key.drop.range_del COUNT : 0
1795513921.724	rocksdb.compaction.key.drop.user COUNT : 0
1795513921.724	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795513921.724	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795513921.724	rocksdb.compaction.cancelled COUNT : 0
1795513921.724	rocksdb.number.keys.written COUNT : 30547908
1795513921.724	rocksdb.number.keys.read COUNT : 0
1795513921.724	rocksdb.number.keys.updated COUNT : 0
1795513921.724	rocksdb.bytes.written COUNT : 32166020412
1795513921.724	rocksdb.bytes.read COUNT : 0
1795513921.724	rocksdb.number.db.seek COUNT : 0
1795513921.724	rocksdb.number.db.next COUNT : 0
1795513921.724	rocksdb.number.db.prev COUNT : 0
1795513921.724	rocksdb.number.db.seek.found COUNT : 0
1795513921.724	rocksdb.number.db.next.found COUNT : 0
1795513921.724	rocksdb.number.db.prev.found COUNT : 0
1795513921.724	rocksdb.db.iter.bytes.read COUNT : 0
1795513921.724	rocksdb.no.file.closes COUNT : 0
1795513921.724	rocksdb.no.file.opens COUNT : 1684890
1795513921.724	rocksdb.no.file.errors COUNT : 0
1795513921.724	rocksdb.l0.slowdown.micros COUNT : 0
1795513921.724	rocksdb.memtable.compaction.micros COUNT : 0
1795513921.724	rocksdb.l0.num.files.stall.micros COUNT : 0
1795513921.724	rocksdb.stall.micros COUNT : 31217924951
1795513921.724	rocksdb.db.mutex.wait.micros COUNT : 0
1795513921.724	rocksdb.rate.limit.delay.millis COUNT : 0
1795513921.724	rocksdb.num.iterators COUNT : 0
1795513921.724	rocksdb.number.multiget.get COUNT : 0
1795513921.724	rocksdb.number.multiget.keys.read COUNT : 0
1795513921.724	rocksdb.number.multiget.bytes.read COUNT : 0
1795513921.724	rocksdb.number.deletes.filtered COUNT : 0
1795513921.724	rocksdb.number.merge.failures COUNT : 0
1795513921.724	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795513921.724	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795513921.724	rocksdb.number.reseeks.iteration COUNT : 0
1795513921.724	rocksdb.getupdatessince.calls COUNT : 0
1795513921.724	rocksdb.block.cachecompressed.miss COUNT : 0
1795513921.724	rocksdb.block.cachecompressed.hit COUNT : 0
1795513921.724	rocksdb.block.cachecompressed.add COUNT : 0
1795513921.724	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795513921.724	rocksdb.wal.synced COUNT : 0
1795513921.724	rocksdb.wal.bytes COUNT : 32166020412
1795513921.724	rocksdb.write.self COUNT : 22833705
1795513921.724	rocksdb.write.other COUNT : 7714203
1795513921.724	rocksdb.write.timeout COUNT : 0
1795513921.724	rocksdb.write.wal COUNT : 30547908
1795513921.724	rocksdb.compact.read.bytes COUNT : 765662162984
1795513921.724	rocksdb.compact.write.bytes COUNT : 736456980426
1795513921.724	rocksdb.flush.write.bytes COUNT : 32257359927
1795513921.724	rocksdb.compact.read.marked.bytes COUNT : 0
1795513921.724	rocksdb.compact.read.periodic.bytes COUNT : 0
1795513921.724	rocksdb.compact.read.ttl.bytes COUNT : 0
1795513921.724	rocksdb.compact.write.marked.bytes COUNT : 0
1795513921.724	rocksdb.compact.write.periodic.bytes COUNT : 0
1795513921.724	rocksdb.compact.write.ttl.bytes COUNT : 0
1795513921.724	rocksdb.number.direct.load.table.properties COUNT : 0
1795513921.724	rocksdb.number.superversion_acquires COUNT : 0
1795513921.724	rocksdb.number.superversion_releases COUNT : 0
1795513921.724	rocksdb.number.superversion_cleanups COUNT : 0
1795513921.724	rocksdb.number.block.compressed COUNT : 0
1795513921.724	rocksdb.number.block.decompressed COUNT : 0
1795513921.724	rocksdb.number.block.not_compressed COUNT : 0
1795513921.724	rocksdb.merge.operation.time.nanos COUNT : 0
1795513921.724	rocksdb.filter.operation.time.nanos COUNT : 0
1795513921.724	rocksdb.row.cache.hit COUNT : 0
1795513921.724	rocksdb.row.cache.miss COUNT : 0
1795513921.724	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795513921.724	rocksdb.read.amp.total.read.bytes COUNT : 0
1795513921.724	rocksdb.number.rate_limiter.drains COUNT : 0
1795513921.724	rocksdb.number.iter.skip COUNT : 0
1795513921.724	rocksdb.blobdb.num.put COUNT : 0
1795513921.724	rocksdb.blobdb.num.write COUNT : 0
1795513921.724	rocksdb.blobdb.num.get COUNT : 0
1795513921.724	rocksdb.blobdb.num.multiget COUNT : 0
1795513921.724	rocksdb.blobdb.num.seek COUNT : 0
1795513921.724	rocksdb.blobdb.num.next COUNT : 0
1795513921.724	rocksdb.blobdb.num.prev COUNT : 0
1795513921.724	rocksdb.blobdb.num.keys.written COUNT : 0
1795513921.724	rocksdb.blobdb.num.keys.read COUNT : 0
1795513921.724	rocksdb.blobdb.bytes.written COUNT : 0
1795513921.724	rocksdb.blobdb.bytes.read COUNT : 0
1795513921.724	rocksdb.blobdb.write.inlined COUNT : 0
1795513921.724	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795513921.724	rocksdb.blobdb.write.blob COUNT : 0
1795513921.724	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795513921.724	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795513921.724	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795513921.724	rocksdb.blobdb.blob.file.synced COUNT : 0
1795513921.724	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795513921.724	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795513921.724	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795513921.724	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795513921.724	rocksdb.blobdb.gc.num.files COUNT : 0
1795513921.724	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795513921.724	rocksdb.blobdb.gc.failures COUNT : 0
1795513921.724	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795513921.724	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795513921.724	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795513921.724	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795513921.724	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795513921.724	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795513921.724	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795513921.724	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795513921.724	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795513921.724	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795513921.724	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795513921.724	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795513921.724	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795513921.724	rocksdb.txn.get.tryagain COUNT : 0
1795513921.724	rocksdb.number.multiget.keys.found COUNT : 0
1795513921.724	rocksdb.num.iterator.created COUNT : 0
1795513921.724	rocksdb.num.iterator.deleted COUNT : 0
1795513921.724	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795513921.724	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795513921.724	rocksdb.block.cache.compression.dict.add COUNT : 0
1795513921.724	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795513921.724	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795513921.724	rocksdb.block.cache.add.redundant COUNT : 0
1795513921.724	rocksdb.block.cache.index.add.redundant COUNT : 0
1795513921.724	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795513921.724	rocksdb.block.cache.data.add.redundant COUNT : 0
1795513921.724	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795513921.724	rocksdb.files.marked.trash COUNT : 0
1795513921.724	rocksdb.files.deleted.immediately COUNT : 1681320
1795513921.724	rocksdb.error.handler.bg.errro.count COUNT : 0
1795513921.724	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795513921.724	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795513921.724	rocksdb.error.handler.autoresume.count COUNT : 0
1795513921.724	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795513921.725	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795513921.725	rocksdb.memtable.payload.bytes.at.flush COUNT : 32013140720
1795513921.725	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1875920
1795513921.725	rocksdb.secondary.cache.hits COUNT : 0
1795513921.725	rocksdb.verify_checksum.read.bytes COUNT : 0
1795513921.725	rocksdb.backup.read.bytes COUNT : 0
1795513921.725	rocksdb.backup.write.bytes COUNT : 0
1795513921.725	rocksdb.remote.compact.read.bytes COUNT : 0
1795513921.725	rocksdb.remote.compact.write.bytes COUNT : 0
1795513921.725	rocksdb.hot.file.read.bytes COUNT : 0
1795513921.725	rocksdb.warm.file.read.bytes COUNT : 0
1795513921.725	rocksdb.cold.file.read.bytes COUNT : 0
1795513921.725	rocksdb.hot.file.read.count COUNT : 0
1795513921.725	rocksdb.warm.file.read.count COUNT : 0
1795513921.725	rocksdb.cold.file.read.count COUNT : 0
1795513921.725	rocksdb.last.level.read.bytes COUNT : 0
1795513921.725	rocksdb.last.level.read.count COUNT : 0
1795513921.725	rocksdb.non.last.level.read.bytes COUNT : 765919018614
1795513921.725	rocksdb.non.last.level.read.count COUNT : 188889015
1795513921.725	rocksdb.block.checksum.compute.count COUNT : 185519235
1795513921.725	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.db.write.micros P50 : 1253.343677 P95 : 19802.562992 P99 : 70276.775017 P100 : 6215956.000000 COUNT : 30547908 SUM : 147008647669
1795513921.725	rocksdb.compaction.times.micros P50 : 94917.524674 P95 : 228320.759193 P99 : 491831.344086 P100 : 5938824.000000 COUNT : 263369 SUM : 28439136456
1795513921.725	rocksdb.compaction.times.cpu_micros P50 : 92720.904255 P95 : 220301.316701 P99 : 485969.913011 P100 : 5726058.000000 COUNT : 263369 SUM : 27701422428
1795513921.725	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.table.sync.micros P50 : 26229.001939 P95 : 127926.380368 P99 : 377676.455696 P100 : 1018570.000000 COUNT : 17706 SUM : 690287636
1795513921.725	rocksdb.compaction.outfile.sync.micros P50 : 6456.424512 P95 : 13737.829437 P99 : 25648.673947 P100 : 1774202.000000 COUNT : 1634920 SUM : 13343421933
1795513921.725	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.manifest.file.sync.micros P50 : 487.904312 P95 : 755.456254 P99 : 263729.677419 P100 : 1704868.000000 COUNT : 211145 SUM : 1615066740
1795513921.725	rocksdb.table.open.io.micros P50 : 251.709367 P95 : 480.517435 P99 : 664.487660 P100 : 823614.000000 COUNT : 1684890 SUM : 635255527
1795513921.725	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.read.block.compaction.micros P50 : 47.359333 P95 : 127.460252 P99 : 231.007211 P100 : 748767.000000 COUNT : 182149455 SUM : 12837072032
1795513921.725	rocksdb.read.block.get.micros P50 : 62.051291 P95 : 110.869996 P99 : 223.746526 P100 : 823432.000000 COUNT : 1684890 SUM : 123223236
1795513921.725	rocksdb.write.raw.block.micros P50 : 0.550293 P95 : 1.765956 P99 : 47.446028 P100 : 2914641.000000 COUNT : 187800380 SUM : 427540483
1795513921.725	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.numfiles.in.singlecompaction P50 : 5.839588 P95 : 9.584059 P99 : 9.925476 P100 : 54.000000 COUNT : 264022 SUM : 1646502
1795513921.725	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.db.write.stall P50 : 0.726507 P95 : 4103.880712 P99 : 17847.897339 P100 : 6212955.000000 COUNT : 22813776 SUM : 31221613171
1795513921.725	rocksdb.sst.read.micros P50 : 46.592687 P95 : 123.715124 P99 : 226.585170 P100 : 823414.000000 COUNT : 188889015 SUM : 13121707352
1795513921.725	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.bytes.per.write P50 : 1131.459381 P95 : 3590.632438 P99 : 4188.000000 P100 : 4188.000000 COUNT : 22833705 SUM : 32166020412
1795513921.725	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.db.flush.micros P50 : 55529.042258 P95 : 201418.439716 P99 : 432002.173913 P100 : 6070270.000000 COUNT : 17705 SUM : 1248364121
1795513921.725	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795513921.725	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1645849 SUM : 0
1795513921.725	
