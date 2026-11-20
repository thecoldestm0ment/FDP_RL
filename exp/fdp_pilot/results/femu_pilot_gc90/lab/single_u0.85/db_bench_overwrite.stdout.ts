1795158145.186	Initializing RocksDB Options from the specified file
1795158145.186	Initializing RocksDB Options from command-line flags
1795158156.531	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795158156.532	Values:     1024 bytes each (512 bytes after compression)
1795158156.532	Entries:    15273953
1795158156.532	Prefix:    0 bytes
1795158156.532	Keys per prefix:    0
1795158156.532	RawSize:    15149.0 MB (estimated)
1795158156.532	FileSize:   7691.0 MB (estimated)
1795158156.532	Write rate: 0 bytes/second
1795158156.532	Read rate: 0 ops/second
1795158156.532	Compression: NoCompression
1795158156.532	Compression sampling rate: 0
1795158156.532	Memtablerep: SkipListFactory
1795158156.532	Perf Level: 1
1795158156.532	------------------------------------------------
1795158156.532	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795191484.529	overwrite    :    4360.210 micros/op 916 ops/sec;    0.9 MB/s
1795191489.530	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795191489.531	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795191499.553	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795191509.566	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795191519.567	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795191529.572	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795191539.572	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795191549.572	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795191549.572	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795191549.572	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795191549.573	
1795191549.573	Level Files Size(MB)
1795191549.573	--------------------
1795191549.573	  0        1        2
1795191549.573	  1        5        2
1795191549.573	  2       60       25
1795191549.573	  3      608      250
1795191549.573	  4     5696     2500
1795191549.573	  5    32687    15394
1795191549.573	  6        0        0
1795191549.573	
1795191549.576	
1795191549.576	
1795191549.576	** Compaction Stats [default] **
1795191549.576	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795191549.576	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795191549.576	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     29.5   1045.24            726.43     17670    0.059     38K      6       0.0       0.0
1795191549.576	  L1      5/0    2.26 MB   0.9     51.3    30.0     21.3      51.3     30.1       0.0   1.7     26.3     26.3   2000.20           1970.16      8814    0.227     52M   6773       0.0       0.0
1795191549.576	  L2     60/0   24.77 MB   1.0    153.2    30.1    123.2     153.2     30.0       0.0   5.1     25.5     25.5   6151.04           6050.54     64628    0.095    155M    52K       0.0       0.0
1795191549.576	  L3    608/0   249.65 MB   1.0    195.3    30.0    165.3     194.8     29.5       0.0   6.5     25.7     25.6   7780.72           7661.94     68284    0.114    198M   518K       0.0       0.0
1795191549.576	  L4   5696/0    2.44 GB   1.0    197.3    29.5    167.8     192.3     24.5       0.0   6.5     26.2     25.5   7725.90           7607.75     68489    0.113    200M  5064K       0.0       0.0
1795191549.576	  L5  32687/0   15.03 GB   0.6    115.6    24.5     91.1      93.8      2.7       0.0   3.8     29.2     23.7   4061.32           4004.24     53183    0.076    117M    22M       0.0       0.0
1795191549.576	 Sum  39057/0   17.75 GB   0.0    712.9   144.1    568.7     715.6    146.8       0.0  23.8     25.4     25.5  28764.42          28021.06    281068    0.102    724M    27M       0.0       0.0
1795191549.576	 Int      0/0    0.00 KB   0.0      0.3     0.1      0.3       0.3      0.0       0.0 290808838.0     25.8     21.5     12.88             12.85       132    0.098    329K    54K       0.0       0.0
1795191549.576	
1795191549.576	** Compaction Stats [default] **
1795191549.576	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795191549.576	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795191549.576	 Low      0/0    0.00 KB   0.0    712.9   144.1    568.7     685.5    116.8       0.0   0.0     26.3     25.3  27722.36          27297.77    263402    0.105    724M    27M       0.0       0.0
1795191549.576	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     29.5   1042.05            723.29     17665    0.059       0      0       0.0       0.0
1795191549.576	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    164.4      0.01              0.00         1    0.005       0      0       0.0       0.0
1795191549.576	
1795191549.576	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795191549.576	
1795191549.576	Uptime(secs): 33404.4 total, 25.9 interval
1795191549.576	Flush(GB): cumulative 30.038, interval 0.000
1795191549.576	AddFile(GB): cumulative 0.000, interval 0.000
1795191549.576	AddFile(Total Files): cumulative 0, interval 0
1795191549.576	AddFile(L0 Files): cumulative 0, interval 0
1795191549.576	AddFile(Keys): cumulative 0, interval 0
1795191549.576	Cumulative compaction: 715.58 GB write, 21.94 MB/s write, 712.87 GB read, 21.85 MB/s read, 28764.4 seconds
1795191549.576	Interval compaction: 0.27 GB write, 10.69 MB/s write, 0.32 GB read, 12.81 MB/s read, 12.9 seconds
1795191549.576	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 316939 slowdown for pending_compaction_bytes, 19 memtable_compaction, 2 memtable_slowdown, interval 0 total count
1795191549.576	Block cache LRUCache@0x5935880cba70#48890 capacity: 8.00 MB collections: 186 last_copies: 1 last_secs: 4.3e-05 secs_since: 85
1795191549.576	Block cache entry stats(count,size,portion): Misc(3,8.38 KB,0.102234%)
1795191549.576	
1795191549.576	** File Read Latency Histogram By Level [default] **
1795191549.576	** Level 0 read latency histogram (micros):
1795191549.576	Count: 7723443 Average: 69.1496  StdDev: 352.73
1795191549.576	Min: 11  Median: 46.2622  Max: 377968
1795191549.576	Percentiles: P50: 46.26 P75: 70.18 P99: 227.11 P99.9: 426.24 P99.99: 1201.98
1795191549.576	------------------------------------------------------
1795191549.576	(      10,      15 ]        4   0.000%   0.000% 
1795191549.576	(      15,      22 ]        7   0.000%   0.000% 
1795191549.576	(      22,      34 ]        1   0.000%   0.000% 
1795191549.576	(      34,      51 ]  5353788  69.319%  69.319% ##############
1795191549.576	(      51,      76 ]   571834   7.404%  76.723% #
1795191549.576	(      76,     110 ]  1344360  17.406%  94.129% ###
1795191549.576	(     110,     170 ]   299596   3.879%  98.008% #
1795191549.576	(     170,     250 ]   107337   1.390%  99.398% 
1795191549.576	(     250,     380 ]    37181   0.481%  99.879% 
1795191549.576	(     380,     580 ]     6970   0.090%  99.969% 
1795191549.576	(     580,     870 ]     1202   0.016%  99.985% 
1795191549.576	(     870,    1300 ]      506   0.007%  99.991% 
1795191549.576	(    1300,    1900 ]      234   0.003%  99.995% 
1795191549.576	(    1900,    2900 ]      115   0.001%  99.996% 
1795191549.576	(    2900,    4400 ]       52   0.001%  99.997% 
1795191549.576	(    4400,    6600 ]       23   0.000%  99.997% 
1795191549.576	(    6600,    9900 ]        8   0.000%  99.997% 
1795191549.576	(    9900,   14000 ]        4   0.000%  99.997% 
1795191549.576	(   14000,   22000 ]        1   0.000%  99.997% 
1795191549.576	(   22000,   33000 ]        1   0.000%  99.997% 
1795191549.576	(   50000,   75000 ]       13   0.000%  99.997% 
1795191549.576	(   75000,  110000 ]       59   0.001%  99.998% 
1795191549.576	(  110000,  170000 ]       31   0.000%  99.998% 
1795191549.576	(  170000,  250000 ]       61   0.001%  99.999% 
1795191549.576	(  250000,  380000 ]       55   0.001% 100.000% 
1795191549.576	
1795191549.576	** Level 1 read latency histogram (micros):
1795191549.576	Count: 13571990 Average: 68.9867  StdDev: 234.29
1795191549.576	Min: 6  Median: 46.0866  Max: 469357
1795191549.576	Percentiles: P50: 46.09 P75: 67.43 P99: 221.88 P99.9: 410.91 P99.99: 1247.65
1795191549.576	------------------------------------------------------
1795191549.576	(       4,       6 ]        1   0.000%   0.000% 
1795191549.576	(       6,      10 ]       50   0.000%   0.000% 
1795191549.576	(      10,      15 ]       19   0.000%   0.001% 
1795191549.576	(      15,      22 ]       35   0.000%   0.001% 
1795191549.576	(      22,      34 ]       18   0.000%   0.001% 
1795191549.576	(      34,      51 ]  9544402  70.324%  70.325% ##############
1795191549.576	(      51,      76 ]   965464   7.114%  77.439% #
1795191549.576	(      76,     110 ]  2305327  16.986%  94.425% ###
1795191549.576	(     110,     170 ]   502897   3.705%  98.130% #
1795191549.576	(     170,     250 ]   182061   1.341%  99.472% 
1795191549.576	(     250,     380 ]    56399   0.416%  99.887% 
1795191549.576	(     380,     580 ]    11292   0.083%  99.970% 
1795191549.576	(     580,     870 ]     1945   0.014%  99.985% 
1795191549.576	(     870,    1300 ]      823   0.006%  99.991% 
1795191549.576	(    1300,    1900 ]      432   0.003%  99.994% 
1795191549.576	(    1900,    2900 ]      212   0.002%  99.995% 
1795191549.576	(    2900,    4400 ]      142   0.001%  99.997% 
1795191549.576	(    4400,    6600 ]       35   0.000%  99.997% 
1795191549.576	(    6600,    9900 ]       12   0.000%  99.997% 
1795191549.576	(    9900,   14000 ]        8   0.000%  99.997% 
1795191549.576	(   14000,   22000 ]        2   0.000%  99.997% 
1795191549.576	(   22000,   33000 ]        2   0.000%  99.997% 
1795191549.576	(   33000,   50000 ]        2   0.000%  99.997% 
1795191549.576	(   50000,   75000 ]       28   0.000%  99.997% 
1795191549.576	(   75000,  110000 ]      136   0.001%  99.998% 
1795191549.576	(  110000,  170000 ]       53   0.000%  99.999% 
1795191549.576	(  170000,  250000 ]      113   0.001%  99.999% 
1795191549.576	(  250000,  380000 ]      105   0.001% 100.000% 
1795191549.576	(  380000,  570000 ]        1   0.000% 100.000% 
1795191549.576	
1795191549.576	** Level 2 read latency histogram (micros):
1795191549.576	Count: 40623574 Average: 68.9616  StdDev: 101.12
1795191549.576	Min: 5  Median: 46.2931  Max: 374136
1795191549.576	Percentiles: P50: 46.29 P75: 71.09 P99: 228.79 P99.9: 378.51 P99.99: 995.83
1795191549.576	------------------------------------------------------
1795191549.576	(       4,       6 ]       60   0.000%   0.000% 
1795191549.576	(       6,      10 ]     2075   0.005%   0.005% 
1795191549.576	(      10,      15 ]     1517   0.004%   0.009% 
1795191549.576	(      15,      22 ]      368   0.001%   0.010% 
1795191549.576	(      22,      34 ]      112   0.000%   0.010% 
1795191549.576	(      34,      51 ] 28083226  69.130%  69.141% ##############
1795191549.576	(      51,      76 ]  2961813   7.291%  76.431% #
1795191549.576	(      76,     110 ]  7153442  17.609%  94.041% ####
1795191549.576	(     110,     170 ]  1560139   3.840%  97.881% #
1795191549.576	(     170,     250 ]   618608   1.523%  99.404% 
1795191549.576	(     250,     380 ]   203925   0.502%  99.906% 
1795191549.576	(     380,     580 ]    28986   0.071%  99.977% 
1795191549.576	(     580,     870 ]     4711   0.012%  99.989% 
1795191549.576	(     870,    1300 ]     1810   0.004%  99.993% 
1795191549.576	(    1300,    1900 ]      979   0.002%  99.996% 
1795191549.576	(    1900,    2900 ]      567   0.001%  99.997% 
1795191549.576	(    2900,    4400 ]      464   0.001%  99.998% 
1795191549.576	(    4400,    6600 ]      125   0.000%  99.998% 
1795191549.576	(    6600,    9900 ]       51   0.000%  99.999% 
1795191549.576	(    9900,   14000 ]       12   0.000%  99.999% 
1795191549.576	(   14000,   22000 ]        7   0.000%  99.999% 
1795191549.576	(   22000,   33000 ]        2   0.000%  99.999% 
1795191549.576	(   33000,   50000 ]        1   0.000%  99.999% 
1795191549.576	(   50000,   75000 ]       84   0.000%  99.999% 
1795191549.576	(   75000,  110000 ]      381   0.001% 100.000% 
1795191549.576	(  110000,  170000 ]      140   0.000% 100.000% 
1795191549.576	(  170000,  250000 ]      314   0.001% 100.001% 
1795191549.576	(  250000,  380000 ]      225   0.001% 100.001% 
1795191549.576	
1795191549.576	** Level 3 read latency histogram (micros):
1795191549.576	Count: 51694969 Average: 68.7731  StdDev: 78.80
1795191549.576	Min: 5  Median: 46.3716  Max: 374513
1795191549.576	Percentiles: P50: 46.37 P75: 72.99 P99: 227.17 P99.9: 373.71 P99.99: 901.40
1795191549.576	------------------------------------------------------
1795191549.576	(       4,       6 ]       44   0.000%   0.000% 
1795191549.576	(       6,      10 ]     2183   0.004%   0.004% 
1795191549.576	(      10,      15 ]     1315   0.003%   0.007% 
1795191549.576	(      15,      22 ]      447   0.001%   0.008% 
1795191549.576	(      22,      34 ]      124   0.000%   0.008% 
1795191549.576	(      34,      51 ] 35511684  68.695%  68.703% ##############
1795191549.576	(      51,      76 ]  3700793   7.159%  75.862% #
1795191549.576	(      76,     110 ]  9321081  18.031%  93.892% ####
1795191549.576	(     110,     170 ]  2056148   3.977%  97.870% #
1795191549.576	(     170,     250 ]   817483   1.581%  99.451% 
1795191549.576	(     250,     380 ]   243773   0.472%  99.923% 
1795191549.576	(     380,     580 ]    29996   0.058%  99.981% 
1795191549.576	(     580,     870 ]     4582   0.009%  99.990% 
1795191549.576	(     870,    1300 ]     2006   0.004%  99.994% 
1795191549.576	(    1300,    1900 ]     1065   0.002%  99.996% 
1795191549.576	(    1900,    2900 ]      623   0.001%  99.997% 
1795191549.576	(    2900,    4400 ]      527   0.001%  99.998% 
1795191549.576	(    4400,    6600 ]      179   0.000%  99.998% 
1795191549.576	(    6600,    9900 ]       70   0.000%  99.998% 
1795191549.576	(    9900,   14000 ]       15   0.000%  99.998% 
1795191549.576	(   14000,   22000 ]        9   0.000%  99.998% 
1795191549.576	(   22000,   33000 ]        2   0.000%  99.998% 
1795191549.576	(   33000,   50000 ]        6   0.000%  99.998% 
1795191549.576	(   50000,   75000 ]      148   0.000%  99.999% 
1795191549.576	(   75000,  110000 ]      429   0.001% 100.000% 
1795191549.576	(  110000,  170000 ]      214   0.000% 100.000% 
1795191549.576	(  170000,  250000 ]      380   0.001% 100.001% 
1795191549.576	(  250000,  380000 ]      228   0.000% 100.001% 
1795191549.576	
1795191549.576	** Level 4 read latency histogram (micros):
1795191549.576	Count: 50950560 Average: 68.3938  StdDev: 33.77
1795191549.576	Min: 5  Median: 46.4327  Max: 1166690
1795191549.576	Percentiles: P50: 46.43 P75: 73.44 P99: 226.80 P99.9: 373.39 P99.99: 1065.02
1795191549.576	------------------------------------------------------
1795191549.576	(       4,       6 ]       41   0.000%   0.000% 
1795191549.576	(       6,      10 ]     1560   0.003%   0.003% 
1795191549.576	(      10,      15 ]     1039   0.002%   0.005% 
1795191549.576	(      15,      22 ]      340   0.001%   0.006% 
1795191549.576	(      22,      34 ]      102   0.000%   0.006% 
1795191549.576	(      34,      51 ] 34829707  68.360%  68.366% ##############
1795191549.576	(      51,      76 ]  3765486   7.390%  75.756% #
1795191549.576	(      76,     110 ]  9226522  18.109%  93.865% ####
1795191549.576	(     110,     170 ]  2050485   4.024%  97.890% #
1795191549.576	(     170,     250 ]   796871   1.564%  99.454% 
1795191549.576	(     250,     380 ]   239646   0.470%  99.924% 
1795191549.576	(     380,     580 ]    27701   0.054%  99.978% 
1795191549.576	(     580,     870 ]     4827   0.009%  99.988% 
1795191549.576	(     870,    1300 ]     2509   0.005%  99.993% 
1795191549.576	(    1300,    1900 ]     1308   0.003%  99.995% 
1795191549.576	(    1900,    2900 ]      704   0.001%  99.997% 
1795191549.576	(    2900,    4400 ]      614   0.001%  99.998% 
1795191549.576	(    4400,    6600 ]      218   0.000%  99.998% 
1795191549.576	(    6600,    9900 ]       95   0.000%  99.998% 
1795191549.576	(    9900,   14000 ]       15   0.000%  99.998% 
1795191549.576	(   14000,   22000 ]        7   0.000%  99.999% 
1795191549.576	(   22000,   33000 ]        5   0.000%  99.999% 
1795191549.576	(   50000,   75000 ]      152   0.000%  99.999% 
1795191549.576	(   75000,  110000 ]      368   0.001% 100.000% 
1795191549.576	(  110000,  170000 ]      164   0.000% 100.000% 
1795191549.576	(  170000,  250000 ]      315   0.001% 100.000% 
1795191549.576	(  250000,  380000 ]      208   0.000% 100.001% 
1795191549.576	(  860000, 1200000 ]        1   0.000% 100.001% 
1795191549.576	
1795191549.576	** Level 5 read latency histogram (micros):
1795191549.576	Count: 24233333 Average: 67.0275  StdDev: 61.29
1795191549.576	Min: 5  Median: 46.0475  Max: 376048
1795191549.576	Percentiles: P50: 46.05 P75: 64.79 P99: 226.83 P99.9: 377.95 P99.99: 2899.53
1795191549.576	------------------------------------------------------
1795191549.576	(       4,       6 ]       23   0.000%   0.000% 
1795191549.576	(       6,      10 ]      878   0.004%   0.004% 
1795191549.576	(      10,      15 ]      682   0.003%   0.007% 
1795191549.576	(      15,      22 ]      172   0.001%   0.007% 
1795191549.576	(      22,      34 ]       55   0.000%   0.007% 
1795191549.576	(      34,      51 ] 17095017  70.543%  70.551% ##############
1795191549.576	(      51,      76 ]  1954976   8.067%  78.618% ##
1795191549.576	(      76,     110 ]  3862606  15.939%  94.557% ###
1795191549.576	(     110,     170 ]   811470   3.349%  97.906% #
1795191549.576	(     170,     250 ]   373190   1.540%  99.446% 
1795191549.576	(     250,     380 ]   111793   0.461%  99.907% 
1795191549.576	(     380,     580 ]    12562   0.052%  99.959% 
1795191549.576	(     580,     870 ]     3517   0.015%  99.974% 
1795191549.576	(     870,    1300 ]     2304   0.010%  99.983% 
1795191549.576	(    1300,    1900 ]      953   0.004%  99.987% 
1795191549.576	(    1900,    2900 ]      712   0.003%  99.990% 
1795191549.576	(    2900,    4400 ]      679   0.003%  99.993% 
1795191549.576	(    4400,    6600 ]      406   0.002%  99.994% 
1795191549.576	(    6600,    9900 ]      249   0.001%  99.996% 
1795191549.576	(    9900,   14000 ]       52   0.000%  99.996% 
1795191549.576	(   14000,   22000 ]        9   0.000%  99.996% 
1795191549.576	(   22000,   33000 ]        1   0.000%  99.996% 
1795191549.576	(   50000,   75000 ]       31   0.000%  99.996% 
1795191549.576	(   75000,  110000 ]      246   0.001%  99.997% 
1795191549.576	(  110000,  170000 ]       55   0.000%  99.997% 
1795191549.576	(  170000,  250000 ]      157   0.001%  99.998% 
1795191549.576	(  250000,  380000 ]       99   0.000%  99.998% 
1795191549.576	
1795191549.576	
1795191549.576	** DB Stats **
1795191549.576	Uptime(secs): 33404.4 total, 25.9 interval
1795191549.576	Cumulative writes: 30M writes, 30M keys, 23M commit groups, 1.3 writes per commit group, ingest: 29.96 GB, 0.92 MB/s
1795191549.576	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.96 GB, 0.92 MB/s
1795191549.576	Cumulative stall: 07:49:23.188 H:M:S, 84.3 percent
1795191549.576	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795191549.576	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795191549.576	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795191549.576	
1795191549.576	STATISTICS:
1795191549.576	rocksdb.block.cache.miss COUNT : 182064562
1795191549.576	rocksdb.block.cache.hit COUNT : 0
1795191549.576	rocksdb.block.cache.add COUNT : 0
1795191549.576	rocksdb.block.cache.add.failures COUNT : 0
1795191549.576	rocksdb.block.cache.index.miss COUNT : 0
1795191549.576	rocksdb.block.cache.index.hit COUNT : 0
1795191549.576	rocksdb.block.cache.index.add COUNT : 0
1795191549.576	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795191549.576	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795191549.576	rocksdb.block.cache.filter.miss COUNT : 0
1795191549.576	rocksdb.block.cache.filter.hit COUNT : 0
1795191549.576	rocksdb.block.cache.filter.add COUNT : 0
1795191549.576	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795191549.576	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795191549.576	rocksdb.block.cache.data.miss COUNT : 182064562
1795191549.576	rocksdb.block.cache.data.hit COUNT : 0
1795191549.576	rocksdb.block.cache.data.add COUNT : 0
1795191549.576	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795191549.576	rocksdb.block.cache.bytes.read COUNT : 0
1795191549.576	rocksdb.block.cache.bytes.write COUNT : 0
1795191549.576	rocksdb.bloom.filter.useful COUNT : 0
1795191549.576	rocksdb.bloom.filter.full.positive COUNT : 0
1795191549.576	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795191549.576	rocksdb.bloom.filter.micros COUNT : 0
1795191549.576	rocksdb.persistent.cache.hit COUNT : 0
1795191549.576	rocksdb.persistent.cache.miss COUNT : 0
1795191549.576	rocksdb.sim.block.cache.hit COUNT : 0
1795191549.576	rocksdb.sim.block.cache.miss COUNT : 0
1795191549.576	rocksdb.memtable.hit COUNT : 0
1795191549.576	rocksdb.memtable.miss COUNT : 0
1795191549.576	rocksdb.l0.hit COUNT : 0
1795191549.576	rocksdb.l1.hit COUNT : 0
1795191549.576	rocksdb.l2andup.hit COUNT : 0
1795191549.576	rocksdb.compaction.key.drop.new COUNT : 27789557
1795191549.576	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795191549.576	rocksdb.compaction.key.drop.range_del COUNT : 0
1795191549.576	rocksdb.compaction.key.drop.user COUNT : 0
1795191549.576	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795191549.576	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795191549.576	rocksdb.compaction.cancelled COUNT : 0
1795191549.576	rocksdb.number.keys.written COUNT : 30547908
1795191549.576	rocksdb.number.keys.read COUNT : 0
1795191549.576	rocksdb.number.keys.updated COUNT : 0
1795191549.576	rocksdb.bytes.written COUNT : 32171046912
1795191549.576	rocksdb.bytes.read COUNT : 0
1795191549.576	rocksdb.number.db.seek COUNT : 0
1795191549.576	rocksdb.number.db.next COUNT : 0
1795191549.576	rocksdb.number.db.prev COUNT : 0
1795191549.576	rocksdb.number.db.seek.found COUNT : 0
1795191549.576	rocksdb.number.db.next.found COUNT : 0
1795191549.576	rocksdb.number.db.prev.found COUNT : 0
1795191549.577	rocksdb.db.iter.bytes.read COUNT : 0
1795191549.577	rocksdb.no.file.closes COUNT : 0
1795191549.577	rocksdb.no.file.opens COUNT : 1684030
1795191549.577	rocksdb.no.file.errors COUNT : 0
1795191549.577	rocksdb.l0.slowdown.micros COUNT : 0
1795191549.577	rocksdb.memtable.compaction.micros COUNT : 0
1795191549.577	rocksdb.l0.num.files.stall.micros COUNT : 0
1795191549.577	rocksdb.stall.micros COUNT : 28163188460
1795191549.577	rocksdb.db.mutex.wait.micros COUNT : 0
1795191549.577	rocksdb.rate.limit.delay.millis COUNT : 0
1795191549.577	rocksdb.num.iterators COUNT : 0
1795191549.577	rocksdb.number.multiget.get COUNT : 0
1795191549.577	rocksdb.number.multiget.keys.read COUNT : 0
1795191549.577	rocksdb.number.multiget.bytes.read COUNT : 0
1795191549.577	rocksdb.number.deletes.filtered COUNT : 0
1795191549.577	rocksdb.number.merge.failures COUNT : 0
1795191549.577	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795191549.577	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795191549.577	rocksdb.number.reseeks.iteration COUNT : 0
1795191549.577	rocksdb.getupdatessince.calls COUNT : 0
1795191549.577	rocksdb.block.cachecompressed.miss COUNT : 0
1795191549.577	rocksdb.block.cachecompressed.hit COUNT : 0
1795191549.577	rocksdb.block.cachecompressed.add COUNT : 0
1795191549.577	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795191549.577	rocksdb.wal.synced COUNT : 0
1795191549.577	rocksdb.wal.bytes COUNT : 32171046912
1795191549.577	rocksdb.write.self COUNT : 23252580
1795191549.577	rocksdb.write.other COUNT : 7295328
1795191549.577	rocksdb.write.timeout COUNT : 0
1795191549.577	rocksdb.write.wal COUNT : 30547908
1795191549.577	rocksdb.compact.read.bytes COUNT : 765304730644
1795191549.577	rocksdb.compact.write.bytes COUNT : 736100901166
1795191549.577	rocksdb.flush.write.bytes COUNT : 32257481401
1795191549.577	rocksdb.compact.read.marked.bytes COUNT : 0
1795191549.577	rocksdb.compact.read.periodic.bytes COUNT : 0
1795191549.577	rocksdb.compact.read.ttl.bytes COUNT : 0
1795191549.577	rocksdb.compact.write.marked.bytes COUNT : 0
1795191549.577	rocksdb.compact.write.periodic.bytes COUNT : 0
1795191549.577	rocksdb.compact.write.ttl.bytes COUNT : 0
1795191549.577	rocksdb.number.direct.load.table.properties COUNT : 0
1795191549.577	rocksdb.number.superversion_acquires COUNT : 0
1795191549.577	rocksdb.number.superversion_releases COUNT : 0
1795191549.577	rocksdb.number.superversion_cleanups COUNT : 0
1795191549.577	rocksdb.number.block.compressed COUNT : 0
1795191549.577	rocksdb.number.block.decompressed COUNT : 0
1795191549.577	rocksdb.number.block.not_compressed COUNT : 0
1795191549.577	rocksdb.merge.operation.time.nanos COUNT : 0
1795191549.577	rocksdb.filter.operation.time.nanos COUNT : 0
1795191549.577	rocksdb.row.cache.hit COUNT : 0
1795191549.577	rocksdb.row.cache.miss COUNT : 0
1795191549.577	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795191549.577	rocksdb.read.amp.total.read.bytes COUNT : 0
1795191549.577	rocksdb.number.rate_limiter.drains COUNT : 0
1795191549.577	rocksdb.number.iter.skip COUNT : 0
1795191549.577	rocksdb.blobdb.num.put COUNT : 0
1795191549.577	rocksdb.blobdb.num.write COUNT : 0
1795191549.577	rocksdb.blobdb.num.get COUNT : 0
1795191549.577	rocksdb.blobdb.num.multiget COUNT : 0
1795191549.577	rocksdb.blobdb.num.seek COUNT : 0
1795191549.577	rocksdb.blobdb.num.next COUNT : 0
1795191549.577	rocksdb.blobdb.num.prev COUNT : 0
1795191549.577	rocksdb.blobdb.num.keys.written COUNT : 0
1795191549.577	rocksdb.blobdb.num.keys.read COUNT : 0
1795191549.577	rocksdb.blobdb.bytes.written COUNT : 0
1795191549.577	rocksdb.blobdb.bytes.read COUNT : 0
1795191549.577	rocksdb.blobdb.write.inlined COUNT : 0
1795191549.577	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795191549.577	rocksdb.blobdb.write.blob COUNT : 0
1795191549.577	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795191549.577	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795191549.577	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795191549.577	rocksdb.blobdb.blob.file.synced COUNT : 0
1795191549.577	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795191549.577	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795191549.577	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795191549.577	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795191549.577	rocksdb.blobdb.gc.num.files COUNT : 0
1795191549.577	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795191549.577	rocksdb.blobdb.gc.failures COUNT : 0
1795191549.577	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795191549.577	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795191549.577	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795191549.577	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795191549.577	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795191549.577	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795191549.577	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795191549.577	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795191549.577	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795191549.577	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795191549.577	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795191549.577	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795191549.577	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795191549.577	rocksdb.txn.get.tryagain COUNT : 0
1795191549.577	rocksdb.number.multiget.keys.found COUNT : 0
1795191549.577	rocksdb.num.iterator.created COUNT : 0
1795191549.577	rocksdb.num.iterator.deleted COUNT : 0
1795191549.577	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795191549.577	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795191549.577	rocksdb.block.cache.compression.dict.add COUNT : 0
1795191549.577	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795191549.577	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795191549.577	rocksdb.block.cache.add.redundant COUNT : 0
1795191549.577	rocksdb.block.cache.index.add.redundant COUNT : 0
1795191549.577	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795191549.577	rocksdb.block.cache.data.add.redundant COUNT : 0
1795191549.577	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795191549.577	rocksdb.files.marked.trash COUNT : 0
1795191549.577	rocksdb.files.deleted.immediately COUNT : 1680342
1795191549.577	rocksdb.error.handler.bg.errro.count COUNT : 0
1795191549.577	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795191549.577	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795191549.577	rocksdb.error.handler.autoresume.count COUNT : 0
1795191549.577	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795191549.577	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795191549.577	rocksdb.memtable.payload.bytes.at.flush COUNT : 32013585072
1795191549.577	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1835048
1795191549.577	rocksdb.secondary.cache.hits COUNT : 0
1795191549.577	rocksdb.verify_checksum.read.bytes COUNT : 0
1795191549.577	rocksdb.backup.read.bytes COUNT : 0
1795191549.577	rocksdb.backup.write.bytes COUNT : 0
1795191549.577	rocksdb.remote.compact.read.bytes COUNT : 0
1795191549.577	rocksdb.remote.compact.write.bytes COUNT : 0
1795191549.577	rocksdb.hot.file.read.bytes COUNT : 0
1795191549.577	rocksdb.warm.file.read.bytes COUNT : 0
1795191549.577	rocksdb.cold.file.read.bytes COUNT : 0
1795191549.577	rocksdb.hot.file.read.count COUNT : 0
1795191549.577	rocksdb.warm.file.read.count COUNT : 0
1795191549.577	rocksdb.cold.file.read.count COUNT : 0
1795191549.577	rocksdb.last.level.read.bytes COUNT : 0
1795191549.577	rocksdb.last.level.read.count COUNT : 0
1795191549.577	rocksdb.non.last.level.read.bytes COUNT : 765561555934
1795191549.577	rocksdb.non.last.level.read.count COUNT : 188800682
1795191549.577	rocksdb.block.checksum.compute.count COUNT : 185432622
1795191549.577	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.db.write.micros P50 : 109.058019 P95 : 17921.755311 P99 : 67930.154583 P100 : 5731822.000000 COUNT : 30547908 SUM : 133141021471
1795191549.577	rocksdb.compaction.times.micros P50 : 93183.786087 P95 : 221381.298841 P99 : 474169.342762 P100 : 4289434.000000 COUNT : 263402 SUM : 27722362612
1795191549.577	rocksdb.compaction.times.cpu_micros P50 : 91926.965184 P95 : 217430.417076 P99 : 467704.368932 P100 : 4241039.000000 COUNT : 263402 SUM : 27297772821
1795191549.577	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.table.sync.micros P50 : 26652.643547 P95 : 141136.094675 P99 : 369704.000000 P100 : 1293773.000000 COUNT : 17666 SUM : 691403937
1795191549.577	rocksdb.compaction.outfile.sync.micros P50 : 6533.527100 P95 : 13657.350211 P99 : 23445.036765 P100 : 1470741.000000 COUNT : 1634090 SUM : 13213217776
1795191549.577	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.manifest.file.sync.micros P50 : 487.908135 P95 : 749.760535 P99 : 243804.289014 P100 : 1403533.000000 COUNT : 212374 SUM : 1529610447
1795191549.577	rocksdb.table.open.io.micros P50 : 240.048590 P95 : 425.119618 P99 : 586.136221 P100 : 376686.000000 COUNT : 1684030 SUM : 532399462
1795191549.577	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.read.block.compaction.micros P50 : 46.771586 P95 : 128.390458 P99 : 231.213292 P100 : 1166696.000000 COUNT : 182064562 SUM : 12714170805
1795191549.577	rocksdb.read.block.get.micros P50 : 57.459129 P95 : 108.178264 P99 : 220.365407 P100 : 366160.000000 COUNT : 1684030 SUM : 118997755
1795191549.577	rocksdb.write.raw.block.micros P50 : 0.541102 P95 : 1.651008 P99 : 36.117494 P100 : 2165774.000000 COUNT : 187713425 SUM : 348801964
1795191549.577	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.numfiles.in.singlecompaction P50 : 5.835578 P95 : 9.583545 P99 : 9.925594 P100 : 49.000000 COUNT : 264102 SUM : 1645673
1795191549.577	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.db.write.stall P50 : 0.691472 P95 : 3828.546703 P99 : 15652.865802 P100 : 5729519.000000 COUNT : 23230191 SUM : 28166169962
1795191549.577	rocksdb.sst.read.micros P50 : 46.303316 P95 : 124.786948 P99 : 227.068132 P100 : 1166690.000000 COUNT : 188800682 SUM : 12936326795
1795191549.577	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.bytes.per.write P50 : 1125.255468 P95 : 3550.904579 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23252580 SUM : 32171046912
1795191549.577	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.db.flush.micros P50 : 42733.601430 P95 : 187279.411765 P99 : 386665.745856 P100 : 5570760.000000 COUNT : 17665 SUM : 1042051593
1795191549.577	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795191549.577	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1644973 SUM : 0
1795191549.577	
