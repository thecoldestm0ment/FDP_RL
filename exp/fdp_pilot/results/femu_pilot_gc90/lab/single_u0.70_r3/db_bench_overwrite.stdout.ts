1795582351.815	Initializing RocksDB Options from the specified file
1795582351.815	Initializing RocksDB Options from command-line flags
1795582359.627	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795582359.627	Values:     1024 bytes each (512 bytes after compression)
1795582359.627	Entries:    11678215
1795582359.627	Prefix:    0 bytes
1795582359.627	Keys per prefix:    0
1795582359.627	RawSize:    11582.7 MB (estimated)
1795582359.627	FileSize:   5880.4 MB (estimated)
1795582359.627	Write rate: 0 bytes/second
1795582359.627	Read rate: 0 ops/second
1795582359.627	Compression: NoCompression
1795582359.627	Compression sampling rate: 0
1795582359.627	Memtablerep: SkipListFactory
1795582359.627	Perf Level: 1
1795582359.627	------------------------------------------------
1795582359.627	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795602492.366	overwrite    :    3441.585 micros/op 1160 ops/sec;    1.2 MB/s
1795602497.368	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795602497.368	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602507.368	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602517.368	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602527.372	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602537.372	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602547.374	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795602557.373	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795602557.373	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795602557.373	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795602557.373	
1795602557.374	Level Files Size(MB)
1795602557.374	--------------------
1795602557.374	  0        1        2
1795602557.374	  1        5        2
1795602557.374	  2       61       25
1795602557.374	  3      602      250
1795602557.374	  4     5553     2500
1795602557.374	  5    25914    11771
1795602557.374	  6        0        0
1795602557.374	
1795602557.378	
1795602557.378	
1795602557.378	** Compaction Stats [default] **
1795602557.378	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795602557.378	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795602557.378	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.0     27.5    855.52            411.77     13515    0.063     33K     11       0.0       0.0
1795602557.378	  L1      5/0    2.13 MB   0.9     39.8    23.0     16.8      39.8     23.0       0.0   1.7     29.0     29.0   1406.48           1338.53      6722    0.209     40M   7028       0.0       0.0
1795602557.378	  L2     61/0   24.70 MB   1.0    117.1    23.0     94.1     117.0     22.9       0.0   5.1     27.8     27.8   4312.37           4115.02     49410    0.087    118M    52K       0.0       0.0
1795602557.378	  L3    602/0   249.69 MB   1.0    149.0    22.9    126.1     148.5     22.4       0.0   6.5     28.2     28.1   5407.11           5147.38     52143    0.104    151M   524K       0.0       0.0
1795602557.378	  L4   5553/0    2.44 GB   1.0    149.9    22.4    127.5     144.9     17.4       0.0   6.5     28.6     27.6   5369.98           5110.31     52041    0.103    152M  5075K       0.0       0.0
1795602557.378	  L5  25914/0   11.49 GB   0.5     68.3    17.4     50.8      53.6      2.7       0.0   3.1     32.1     25.2   2178.94           2095.13     37177    0.059     69M    14M       0.0       0.0
1795602557.378	 Sum  32136/0   14.21 GB   0.0    524.1   108.7    415.4     526.8    111.4       0.0  22.9     27.5     27.6  19530.40          18218.15    211008    0.093    532M    20M       0.0       0.0
1795602557.378	 Int      0/0    0.00 KB   0.0      0.6     0.1      0.5       0.5      0.0       0.0 497948978.0     27.7     22.4     21.18             20.90       262    0.081    581K   110K       0.0       0.0
1795602557.378	
1795602557.378	** Compaction Stats [default] **
1795602557.378	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795602557.378	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795602557.378	 Low      0/0    0.00 KB   0.0    524.1   108.7    415.4     503.9     88.5       0.0   0.0     28.7     27.6  18677.08          17808.46    197497    0.095    532M    20M       0.0       0.0
1795602557.378	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     27.6    853.31            409.69     13509    0.063       0      0       0.0       0.0
1795602557.378	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    163.4      0.01              0.00         2    0.005       0      0       0.0       0.0
1795602557.378	
1795602557.378	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795602557.378	
1795602557.378	Uptime(secs): 20205.5 total, 34.3 interval
1795602557.378	Flush(GB): cumulative 22.967, interval 0.000
1795602557.378	AddFile(GB): cumulative 0.000, interval 0.000
1795602557.378	AddFile(Total Files): cumulative 0, interval 0
1795602557.378	AddFile(L0 Files): cumulative 0, interval 0
1795602557.378	AddFile(Keys): cumulative 0, interval 0
1795602557.378	Cumulative compaction: 526.83 GB write, 26.70 MB/s write, 524.12 GB read, 26.56 MB/s read, 19530.4 seconds
1795602557.378	Interval compaction: 0.46 GB write, 13.86 MB/s write, 0.57 GB read, 17.11 MB/s read, 21.2 seconds
1795602557.378	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 238380 slowdown for pending_compaction_bytes, 19 memtable_compaction, 2 memtable_slowdown, interval 78 total count
1795602557.378	Block cache LRUCache@0x64cec8ed6a70#40174 capacity: 8.00 MB collections: 113 last_copies: 0 last_secs: 0.000202 secs_since: 34
1795602557.378	Block cache entry stats(count,size,portion): Misc(2,4.19 KB,0.0511169%)
1795602557.378	
1795602557.378	** File Read Latency Histogram By Level [default] **
1795602557.379	** Level 0 read latency histogram (micros):
1795602557.379	Count: 5906429 Average: 63.1952  StdDev: 405.13
1795602557.379	Min: 12  Median: 45.5792  Max: 205737
1795602557.379	Percentiles: P50: 45.58 P75: 58.95 P99: 224.09 P99.9: 379.26 P99.99: 812.91
1795602557.379	------------------------------------------------------
1795602557.379	(      10,      15 ]        6   0.000%   0.000% 
1795602557.379	(      22,      34 ]        1   0.000%   0.000% 
1795602557.379	(      34,      51 ]  4335754  73.407%  73.407% ###############
1795602557.379	(      51,      76 ]   295797   5.008%  78.416% #
1795602557.379	(      76,     110 ]   965275  16.343%  94.758% ###
1795602557.379	(     110,     170 ]   198029   3.353%  98.111% #
1795602557.379	(     170,     250 ]    77647   1.315%  99.426% 
1795602557.379	(     250,     380 ]    28173   0.477%  99.903% 
1795602557.379	(     380,     580 ]     4607   0.078%  99.981% 
1795602557.379	(     580,     870 ]      684   0.012%  99.992% 
1795602557.379	(     870,    1300 ]      202   0.003%  99.996% 
1795602557.379	(    1300,    1900 ]       68   0.001%  99.997% 
1795602557.379	(    1900,    2900 ]       24   0.000%  99.997% 
1795602557.379	(    2900,    4400 ]       15   0.000%  99.998% 
1795602557.379	(    4400,    6600 ]        6   0.000%  99.998% 
1795602557.379	(    6600,    9900 ]        5   0.000%  99.998% 
1795602557.379	(    9900,   14000 ]        6   0.000%  99.998% 
1795602557.379	(   14000,   22000 ]        6   0.000%  99.998% 
1795602557.379	(   22000,   33000 ]        2   0.000%  99.998% 
1795602557.379	(   33000,   50000 ]       10   0.000%  99.998% 
1795602557.379	(   50000,   75000 ]       67   0.001%  99.999% 
1795602557.379	(   75000,  110000 ]       12   0.000%  99.999% 
1795602557.379	(  110000,  170000 ]       31   0.001% 100.000% 
1795602557.379	(  170000,  250000 ]        2   0.000% 100.000% 
1795602557.379	
1795602557.379	** Level 1 read latency histogram (micros):
1795602557.379	Count: 10525274 Average: 62.9223  StdDev: 275.04
1795602557.379	Min: 5  Median: 45.4294  Max: 302845
1795602557.379	Percentiles: P50: 45.43 P75: 54.12 P99: 212.07 P99.9: 373.45 P99.99: 837.75
1795602557.379	------------------------------------------------------
1795602557.379	(       4,       6 ]       20   0.000%   0.000% 
1795602557.379	(       6,      10 ]       94   0.001%   0.001% 
1795602557.379	(      10,      15 ]       48   0.000%   0.002% 
1795602557.379	(      15,      22 ]       12   0.000%   0.002% 
1795602557.379	(      22,      34 ]        3   0.000%   0.002% 
1795602557.379	(      34,      51 ]  7827358  74.367%  74.369% ###############
1795602557.379	(      51,      76 ]   532626   5.060%  79.429% #
1795602557.379	(      76,     110 ]  1662518  15.795%  95.225% ###
1795602557.379	(     110,     170 ]   332027   3.155%  98.379% #
1795602557.379	(     170,     250 ]   124212   1.180%  99.560% 
1795602557.379	(     250,     380 ]    37732   0.358%  99.918% 
1795602557.379	(     380,     580 ]     6640   0.063%  99.981% 
1795602557.379	(     580,     870 ]     1048   0.010%  99.991% 
1795602557.379	(     870,    1300 ]      345   0.003%  99.994% 
1795602557.379	(    1300,    1900 ]      114   0.001%  99.995% 
1795602557.379	(    1900,    2900 ]       74   0.001%  99.996% 
1795602557.379	(    2900,    4400 ]       75   0.001%  99.997% 
1795602557.379	(    4400,    6600 ]       18   0.000%  99.997% 
1795602557.379	(    6600,    9900 ]       10   0.000%  99.997% 
1795602557.379	(    9900,   14000 ]       12   0.000%  99.997% 
1795602557.379	(   14000,   22000 ]       11   0.000%  99.997% 
1795602557.379	(   22000,   33000 ]        4   0.000%  99.997% 
1795602557.379	(   33000,   50000 ]       31   0.000%  99.998% 
1795602557.379	(   50000,   75000 ]      126   0.001%  99.999% 
1795602557.379	(   75000,  110000 ]       40   0.000%  99.999% 
1795602557.379	(  110000,  170000 ]       94   0.001% 100.000% 
1795602557.379	(  170000,  250000 ]        1   0.000% 100.000% 
1795602557.379	(  250000,  380000 ]        1   0.000% 100.000% 
1795602557.379	
1795602557.379	** Level 2 read latency histogram (micros):
1795602557.379	Count: 31036002 Average: 63.3728  StdDev: 107.12
1795602557.379	Min: 5  Median: 45.5908  Max: 205208
1795602557.379	Percentiles: P50: 45.59 P75: 59.38 P99: 219.29 P99.9: 374.85 P99.99: 826.18
1795602557.379	------------------------------------------------------
1795602557.379	(       4,       6 ]      758   0.002%   0.002% 
1795602557.379	(       6,      10 ]     3578   0.012%   0.014% 
1795602557.379	(      10,      15 ]      925   0.003%   0.017% 
1795602557.379	(      15,      22 ]      172   0.001%   0.018% 
1795602557.379	(      22,      34 ]       70   0.000%   0.018% 
1795602557.379	(      34,      51 ] 22751811  73.308%  73.326% ###############
1795602557.379	(      51,      76 ]  1550605   4.996%  78.322% #
1795602557.379	(      76,     110 ]  5152378  16.601%  94.923% ###
1795602557.379	(     110,     170 ]  1023383   3.297%  98.220% #
1795602557.379	(     170,     250 ]   392687   1.265%  99.486% 
1795602557.379	(     250,     380 ]   133902   0.431%  99.917% 
1795602557.379	(     380,     580 ]    19783   0.064%  99.981% 
1795602557.379	(     580,     870 ]     3353   0.011%  99.992% 
1795602557.379	(     870,    1300 ]     1237   0.004%  99.996% 
1795602557.379	(    1300,    1900 ]      420   0.001%  99.997% 
1795602557.379	(    1900,    2900 ]      267   0.001%  99.998% 
1795602557.379	(    2900,    4400 ]      247   0.001%  99.999% 
1795602557.379	(    4400,    6600 ]       39   0.000%  99.999% 
1795602557.379	(    6600,    9900 ]       45   0.000%  99.999% 
1795602557.379	(    9900,   14000 ]       42   0.000%  99.999% 
1795602557.379	(   14000,   22000 ]       24   0.000%  99.999% 
1795602557.379	(   22000,   33000 ]       20   0.000%  99.999% 
1795602557.379	(   33000,   50000 ]      100   0.000%  99.999% 
1795602557.379	(   50000,   75000 ]      405   0.001% 100.001% 
1795602557.379	(   75000,  110000 ]       89   0.000% 100.001% 
1795602557.379	(  110000,  170000 ]      182   0.001% 100.002% 
1795602557.379	(  170000,  250000 ]        5   0.000% 100.002% 
1795602557.379	
1795602557.379	** Level 3 read latency histogram (micros):
1795602557.379	Count: 39405083 Average: 63.7352  StdDev: 73.68
1795602557.379	Min: 5  Median: 45.6651  Max: 260376
1795602557.379	Percentiles: P50: 45.67 P75: 61.36 P99: 221.60 P99.9: 370.64 P99.99: 758.57
1795602557.379	------------------------------------------------------
1795602557.379	(       4,       6 ]      623   0.002%   0.002% 
1795602557.379	(       6,      10 ]     1868   0.005%   0.006% 
1795602557.379	(      10,      15 ]      509   0.001%   0.008% 
1795602557.379	(      15,      22 ]      105   0.000%   0.008% 
1795602557.379	(      22,      34 ]       40   0.000%   0.008% 
1795602557.379	(      34,      51 ] 28708568  72.855%  72.863% ###############
1795602557.379	(      51,      76 ]  2031625   5.156%  78.019% #
1795602557.379	(      76,     110 ]  6563404  16.656%  94.675% ###
1795602557.379	(     110,     170 ]  1343436   3.409%  98.084% #
1795602557.379	(     170,     250 ]   559503   1.420%  99.504% 
1795602557.379	(     250,     380 ]   168096   0.427%  99.931% 
1795602557.379	(     380,     580 ]    21344   0.054%  99.985% 
1795602557.379	(     580,     870 ]     3283   0.008%  99.993% 
1795602557.379	(     870,    1300 ]     1193   0.003%  99.996% 
1795602557.379	(    1300,    1900 ]      392   0.001%  99.997% 
1795602557.379	(    1900,    2900 ]      326   0.001%  99.998% 
1795602557.379	(    2900,    4400 ]      205   0.001%  99.999% 
1795602557.379	(    4400,    6600 ]       41   0.000%  99.999% 
1795602557.379	(    6600,    9900 ]       79   0.000%  99.999% 
1795602557.379	(    9900,   14000 ]       58   0.000%  99.999% 
1795602557.379	(   14000,   22000 ]       29   0.000%  99.999% 
1795602557.379	(   22000,   33000 ]       20   0.000%  99.999% 
1795602557.379	(   33000,   50000 ]      117   0.000%  99.999% 
1795602557.380	(   50000,   75000 ]      496   0.001% 100.001% 
1795602557.380	(   75000,  110000 ]      152   0.000% 100.001% 
1795602557.380	(  110000,  170000 ]      230   0.001% 100.002% 
1795602557.380	(  170000,  250000 ]        9   0.000% 100.002% 
1795602557.380	(  250000,  380000 ]        2   0.000% 100.002% 
1795602557.380	
1795602557.380	** Level 4 read latency histogram (micros):
1795602557.380	Count: 38371750 Average: 64.0007  StdDev: 75.89
1795602557.380	Min: 5  Median: 45.7864  Max: 258709
1795602557.380	Percentiles: P50: 45.79 P75: 64.63 P99: 223.17 P99.9: 370.47 P99.99: 818.75
1795602557.380	------------------------------------------------------
1795602557.380	(       4,       6 ]      603   0.002%   0.002% 
1795602557.380	(       6,      10 ]     2200   0.006%   0.007% 
1795602557.380	(      10,      15 ]      622   0.002%   0.009% 
1795602557.380	(      15,      22 ]      131   0.000%   0.009% 
1795602557.380	(      22,      34 ]       38   0.000%   0.009% 
1795602557.380	(      34,      51 ] 27667487  72.104%  72.113% ##############
1795602557.380	(      51,      76 ]  2032379   5.297%  77.410% #
1795602557.380	(      76,     110 ]  6539998  17.044%  94.453% ###
1795602557.380	(     110,     170 ]  1366171   3.560%  98.014% #
1795602557.380	(     170,     250 ]   569383   1.484%  99.498% 
1795602557.380	(     250,     380 ]   166577   0.434%  99.932% 
1795602557.380	(     380,     580 ]    19677   0.051%  99.983% 
1795602557.380	(     580,     870 ]     3215   0.008%  99.991% 
1795602557.380	(     870,    1300 ]     1693   0.004%  99.996% 
1795602557.380	(    1300,    1900 ]      550   0.001%  99.997% 
1795602557.380	(    1900,    2900 ]      345   0.001%  99.998% 
1795602557.380	(    2900,    4400 ]      279   0.001%  99.999% 
1795602557.380	(    4400,    6600 ]       88   0.000%  99.999% 
1795602557.380	(    6600,    9900 ]       63   0.000%  99.999% 
1795602557.380	(    9900,   14000 ]       51   0.000%  99.999% 
1795602557.380	(   14000,   22000 ]       40   0.000% 100.000% 
1795602557.380	(   22000,   33000 ]       22   0.000% 100.000% 
1795602557.380	(   33000,   50000 ]      121   0.000% 100.000% 
1795602557.380	(   50000,   75000 ]      494   0.001% 100.001% 
1795602557.380	(   75000,  110000 ]      121   0.000% 100.002% 
1795602557.380	(  110000,  170000 ]      176   0.000% 100.002% 
1795602557.380	(  170000,  250000 ]        8   0.000% 100.002% 
1795602557.380	(  250000,  380000 ]        1   0.000% 100.002% 
1795602557.380	
1795602557.380	** Level 5 read latency histogram (micros):
1795602557.380	Count: 13567654 Average: 63.0514  StdDev: 270.49
1795602557.380	Min: 5  Median: 45.4401  Max: 138973
1795602557.380	Percentiles: P50: 45.44 P75: 54.06 P99: 223.51 P99.9: 379.94 P99.99: 2047.26
1795602557.380	------------------------------------------------------
1795602557.380	(       4,       6 ]      190   0.001%   0.001% 
1795602557.380	(       6,      10 ]     1515   0.011%   0.013% 
1795602557.380	(      10,      15 ]      538   0.004%   0.017% 
1795602557.380	(      15,      22 ]       94   0.001%   0.017% 
1795602557.380	(      22,      34 ]       33   0.000%   0.017% 
1795602557.380	(      34,      51 ] 10077267  74.274%  74.292% ###############
1795602557.380	(      51,      76 ]   784257   5.780%  80.072% #
1795602557.380	(      76,     110 ]  2038138  15.022%  95.094% ###
1795602557.380	(     110,     170 ]   398615   2.938%  98.032% #
1795602557.380	(     170,     250 ]   196359   1.447%  99.479% 
1795602557.380	(     250,     380 ]    57107   0.421%  99.900% 
1795602557.380	(     380,     580 ]     6785   0.050%  99.950% 
1795602557.380	(     580,     870 ]     2804   0.021%  99.971% 
1795602557.380	(     870,    1300 ]     1989   0.015%  99.986% 
1795602557.380	(    1300,    1900 ]      541   0.004%  99.990% 
1795602557.380	(    1900,    2900 ]      443   0.003%  99.993% 
1795602557.380	(    2900,    4400 ]      439   0.003%  99.996% 
1795602557.380	(    4400,    6600 ]      243   0.002%  99.998% 
1795602557.380	(    6600,    9900 ]      103   0.001%  99.999% 
1795602557.380	(    9900,   14000 ]       23   0.000%  99.999% 
1795602557.380	(   14000,   22000 ]       12   0.000%  99.999% 
1795602557.380	(   22000,   33000 ]        5   0.000%  99.999% 
1795602557.380	(   33000,   50000 ]       28   0.000%  99.999% 
1795602557.380	(   50000,   75000 ]      197   0.001% 100.001% 
1795602557.380	(   75000,  110000 ]       30   0.000% 100.001% 
1795602557.380	(  110000,  170000 ]       75   0.001% 100.001% 
1795602557.381	
1795602557.381	
1795602557.381	** DB Stats **
1795602557.381	Uptime(secs): 20205.5 total, 34.3 interval
1795602557.381	Cumulative writes: 23M writes, 23M keys, 18M commit groups, 1.3 writes per commit group, ingest: 22.91 GB, 1.16 MB/s
1795602557.381	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.91 GB, 1.16 MB/s
1795602557.381	Cumulative stall: 04:55:26.362 H:M:S, 87.7 percent
1795602557.381	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795602557.381	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795602557.381	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795602557.381	
1795602557.381	STATISTICS:
1795602557.381	rocksdb.block.cache.miss COUNT : 133859642
1795602557.381	rocksdb.block.cache.hit COUNT : 0
1795602557.381	rocksdb.block.cache.add COUNT : 0
1795602557.381	rocksdb.block.cache.add.failures COUNT : 0
1795602557.381	rocksdb.block.cache.index.miss COUNT : 0
1795602557.381	rocksdb.block.cache.index.hit COUNT : 0
1795602557.381	rocksdb.block.cache.index.add COUNT : 0
1795602557.381	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795602557.381	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795602557.381	rocksdb.block.cache.filter.miss COUNT : 0
1795602557.381	rocksdb.block.cache.filter.hit COUNT : 0
1795602557.381	rocksdb.block.cache.filter.add COUNT : 0
1795602557.381	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795602557.381	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795602557.381	rocksdb.block.cache.data.miss COUNT : 133859642
1795602557.381	rocksdb.block.cache.data.hit COUNT : 0
1795602557.381	rocksdb.block.cache.data.add COUNT : 0
1795602557.381	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795602557.381	rocksdb.block.cache.bytes.read COUNT : 0
1795602557.381	rocksdb.block.cache.bytes.write COUNT : 0
1795602557.381	rocksdb.bloom.filter.useful COUNT : 0
1795602557.381	rocksdb.bloom.filter.full.positive COUNT : 0
1795602557.381	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795602557.381	rocksdb.bloom.filter.micros COUNT : 0
1795602557.381	rocksdb.persistent.cache.hit COUNT : 0
1795602557.381	rocksdb.persistent.cache.miss COUNT : 0
1795602557.381	rocksdb.sim.block.cache.hit COUNT : 0
1795602557.381	rocksdb.sim.block.cache.miss COUNT : 0
1795602557.381	rocksdb.memtable.hit COUNT : 0
1795602557.381	rocksdb.memtable.miss COUNT : 0
1795602557.381	rocksdb.l0.hit COUNT : 0
1795602557.381	rocksdb.l1.hit COUNT : 0
1795602557.381	rocksdb.l2andup.hit COUNT : 0
1795602557.381	rocksdb.compaction.key.drop.new COUNT : 20598859
1795602557.381	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795602557.381	rocksdb.compaction.key.drop.range_del COUNT : 0
1795602557.381	rocksdb.compaction.key.drop.user COUNT : 0
1795602557.381	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795602557.381	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795602557.381	rocksdb.compaction.cancelled COUNT : 0
1795602557.381	rocksdb.number.keys.written COUNT : 23356432
1795602557.381	rocksdb.number.keys.read COUNT : 0
1795602557.381	rocksdb.number.keys.updated COUNT : 0
1795602557.381	rocksdb.bytes.written COUNT : 24603297132
1795602557.381	rocksdb.bytes.read COUNT : 0
1795602557.381	rocksdb.number.db.seek COUNT : 0
1795602557.381	rocksdb.number.db.next COUNT : 0
1795602557.381	rocksdb.number.db.prev COUNT : 0
1795602557.381	rocksdb.number.db.seek.found COUNT : 0
1795602557.381	rocksdb.number.db.next.found COUNT : 0
1795602557.381	rocksdb.number.db.prev.found COUNT : 0
1795602557.381	rocksdb.db.iter.bytes.read COUNT : 0
1795602557.381	rocksdb.no.file.closes COUNT : 0
1795602557.381	rocksdb.no.file.opens COUNT : 1239069
1795602557.381	rocksdb.no.file.errors COUNT : 0
1795602557.381	rocksdb.l0.slowdown.micros COUNT : 0
1795602557.381	rocksdb.memtable.compaction.micros COUNT : 0
1795602557.381	rocksdb.l0.num.files.stall.micros COUNT : 0
1795602557.381	rocksdb.stall.micros COUNT : 17726361894
1795602557.381	rocksdb.db.mutex.wait.micros COUNT : 0
1795602557.381	rocksdb.rate.limit.delay.millis COUNT : 0
1795602557.381	rocksdb.num.iterators COUNT : 0
1795602557.381	rocksdb.number.multiget.get COUNT : 0
1795602557.381	rocksdb.number.multiget.keys.read COUNT : 0
1795602557.381	rocksdb.number.multiget.bytes.read COUNT : 0
1795602557.381	rocksdb.number.deletes.filtered COUNT : 0
1795602557.381	rocksdb.number.merge.failures COUNT : 0
1795602557.381	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795602557.381	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795602557.381	rocksdb.number.reseeks.iteration COUNT : 0
1795602557.382	rocksdb.getupdatessince.calls COUNT : 0
1795602557.382	rocksdb.block.cachecompressed.miss COUNT : 0
1795602557.382	rocksdb.block.cachecompressed.hit COUNT : 0
1795602557.382	rocksdb.block.cachecompressed.add COUNT : 0
1795602557.382	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795602557.382	rocksdb.wal.synced COUNT : 0
1795602557.382	rocksdb.wal.bytes COUNT : 24603297132
1795602557.382	rocksdb.write.self COUNT : 18265177
1795602557.382	rocksdb.write.other COUNT : 5091255
1795602557.382	rocksdb.write.timeout COUNT : 0
1795602557.382	rocksdb.write.wal COUNT : 23356432
1795602557.382	rocksdb.compact.read.bytes COUNT : 562671031016
1795602557.382	rocksdb.compact.write.bytes COUNT : 541025112896
1795602557.382	rocksdb.flush.write.bytes COUNT : 24662701927
1795602557.382	rocksdb.compact.read.marked.bytes COUNT : 0
1795602557.382	rocksdb.compact.read.periodic.bytes COUNT : 0
1795602557.382	rocksdb.compact.read.ttl.bytes COUNT : 0
1795602557.382	rocksdb.compact.write.marked.bytes COUNT : 0
1795602557.382	rocksdb.compact.write.periodic.bytes COUNT : 0
1795602557.382	rocksdb.compact.write.ttl.bytes COUNT : 0
1795602557.382	rocksdb.number.direct.load.table.properties COUNT : 0
1795602557.382	rocksdb.number.superversion_acquires COUNT : 0
1795602557.382	rocksdb.number.superversion_releases COUNT : 0
1795602557.382	rocksdb.number.superversion_cleanups COUNT : 0
1795602557.382	rocksdb.number.block.compressed COUNT : 0
1795602557.382	rocksdb.number.block.decompressed COUNT : 0
1795602557.382	rocksdb.number.block.not_compressed COUNT : 0
1795602557.382	rocksdb.merge.operation.time.nanos COUNT : 0
1795602557.382	rocksdb.filter.operation.time.nanos COUNT : 0
1795602557.382	rocksdb.row.cache.hit COUNT : 0
1795602557.382	rocksdb.row.cache.miss COUNT : 0
1795602557.382	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795602557.382	rocksdb.read.amp.total.read.bytes COUNT : 0
1795602557.382	rocksdb.number.rate_limiter.drains COUNT : 0
1795602557.382	rocksdb.number.iter.skip COUNT : 0
1795602557.382	rocksdb.blobdb.num.put COUNT : 0
1795602557.382	rocksdb.blobdb.num.write COUNT : 0
1795602557.382	rocksdb.blobdb.num.get COUNT : 0
1795602557.382	rocksdb.blobdb.num.multiget COUNT : 0
1795602557.382	rocksdb.blobdb.num.seek COUNT : 0
1795602557.382	rocksdb.blobdb.num.next COUNT : 0
1795602557.382	rocksdb.blobdb.num.prev COUNT : 0
1795602557.382	rocksdb.blobdb.num.keys.written COUNT : 0
1795602557.382	rocksdb.blobdb.num.keys.read COUNT : 0
1795602557.382	rocksdb.blobdb.bytes.written COUNT : 0
1795602557.382	rocksdb.blobdb.bytes.read COUNT : 0
1795602557.382	rocksdb.blobdb.write.inlined COUNT : 0
1795602557.382	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795602557.382	rocksdb.blobdb.write.blob COUNT : 0
1795602557.382	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795602557.382	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795602557.382	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795602557.382	rocksdb.blobdb.blob.file.synced COUNT : 0
1795602557.382	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795602557.382	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795602557.382	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795602557.382	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795602557.382	rocksdb.blobdb.gc.num.files COUNT : 0
1795602557.382	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795602557.382	rocksdb.blobdb.gc.failures COUNT : 0
1795602557.382	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795602557.382	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795602557.382	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795602557.382	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795602557.382	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795602557.382	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795602557.382	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795602557.382	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795602557.382	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795602557.382	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795602557.382	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795602557.382	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795602557.382	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795602557.382	rocksdb.txn.get.tryagain COUNT : 0
1795602557.382	rocksdb.number.multiget.keys.found COUNT : 0
1795602557.382	rocksdb.num.iterator.created COUNT : 0
1795602557.382	rocksdb.num.iterator.deleted COUNT : 0
1795602557.382	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795602557.382	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795602557.382	rocksdb.block.cache.compression.dict.add COUNT : 0
1795602557.382	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795602557.382	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795602557.382	rocksdb.block.cache.add.redundant COUNT : 0
1795602557.382	rocksdb.block.cache.index.add.redundant COUNT : 0
1795602557.382	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795602557.382	rocksdb.block.cache.data.add.redundant COUNT : 0
1795602557.382	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795602557.382	rocksdb.files.marked.trash COUNT : 0
1795602557.382	rocksdb.files.deleted.immediately COUNT : 1233989
1795602557.382	rocksdb.error.handler.bg.errro.count COUNT : 0
1795602557.382	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795602557.382	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795602557.382	rocksdb.error.handler.autoresume.count COUNT : 0
1795602557.382	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795602557.382	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795602557.382	rocksdb.memtable.payload.bytes.at.flush COUNT : 24477319608
1795602557.382	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1748064
1795602557.382	rocksdb.secondary.cache.hits COUNT : 0
1795602557.382	rocksdb.verify_checksum.read.bytes COUNT : 0
1795602557.382	rocksdb.backup.read.bytes COUNT : 0
1795602557.382	rocksdb.backup.write.bytes COUNT : 0
1795602557.382	rocksdb.remote.compact.read.bytes COUNT : 0
1795602557.382	rocksdb.remote.compact.write.bytes COUNT : 0
1795602557.382	rocksdb.hot.file.read.bytes COUNT : 0
1795602557.382	rocksdb.warm.file.read.bytes COUNT : 0
1795602557.382	rocksdb.cold.file.read.bytes COUNT : 0
1795602557.382	rocksdb.hot.file.read.count COUNT : 0
1795602557.382	rocksdb.warm.file.read.count COUNT : 0
1795602557.382	rocksdb.cold.file.read.count COUNT : 0
1795602557.382	rocksdb.last.level.read.bytes COUNT : 0
1795602557.382	rocksdb.last.level.read.count COUNT : 0
1795602557.382	rocksdb.non.last.level.read.bytes COUNT : 562867433173
1795602557.382	rocksdb.non.last.level.read.count COUNT : 138815918
1795602557.382	rocksdb.block.checksum.compute.count COUNT : 136337780
1795602557.382	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.db.write.micros P50 : 38.506850 P95 : 13463.546277 P99 : 49653.768868 P100 : 5269427.000000 COUNT : 23356432 SUM : 80344155273
1795602557.382	rocksdb.compaction.times.micros P50 : 88076.350741 P95 : 192667.822736 P99 : 275778.021505 P100 : 3790608.000000 COUNT : 197497 SUM : 18677080084
1795602557.382	rocksdb.compaction.times.cpu_micros P50 : 84490.114058 P95 : 180320.805805 P99 : 248769.890610 P100 : 2775872.000000 COUNT : 197497 SUM : 17808459797
1795602557.382	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.table.sync.micros P50 : 24351.028349 P95 : 50251.736111 P99 : 156135.042735 P100 : 1182538.000000 COUNT : 13511 SUM : 382942696
1795602557.382	rocksdb.compaction.outfile.sync.micros P50 : 6010.580283 P95 : 13103.837222 P99 : 21961.462621 P100 : 1084196.000000 COUNT : 1201065 SUM : 8202565286
1795602557.382	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.manifest.file.sync.micros P50 : 486.619476 P95 : 682.514003 P99 : 88965.236052 P100 : 1016222.000000 COUNT : 174422 SUM : 426288569
1795602557.382	rocksdb.table.open.io.micros P50 : 238.966992 P95 : 450.163841 P99 : 697.946204 P100 : 303098.000000 COUNT : 1239069 SUM : 393220981
1795602557.382	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.read.block.compaction.micros P50 : 45.909845 P95 : 117.764335 P99 : 224.697909 P100 : 260389.000000 COUNT : 133859642 SUM : 8626393008
1795602557.382	rocksdb.read.block.get.micros P50 : 52.936435 P95 : 107.556515 P99 : 232.759031 P100 : 137043.000000 COUNT : 1239069 SUM : 84745157
1795602557.382	rocksdb.write.raw.block.micros P50 : 0.534286 P95 : 1.492207 P99 : 40.175251 P100 : 2007807.000000 COUNT : 138197310 SUM : 258091934
1795602557.382	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.numfiles.in.singlecompaction P50 : 5.778200 P95 : 9.582025 P99 : 9.925885 P100 : 50.000000 COUNT : 198044 SUM : 1207480
1795602557.382	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.db.write.stall P50 : 0.644862 P95 : 3106.227376 P99 : 14332.465384 P100 : 5268497.000000 COUNT : 18243497 SUM : 17728827926
1795602557.382	rocksdb.sst.read.micros P50 : 45.637494 P95 : 114.397562 P99 : 221.361523 P100 : 302845.000000 COUNT : 138815918 SUM : 8825553251
1795602557.382	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.bytes.per.write P50 : 1121.626326 P95 : 3410.453015 P99 : 4188.000000 P100 : 4188.000000 COUNT : 18265177 SUM : 24603297132
1795602557.382	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.382	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.db.flush.micros P50 : 54986.616702 P95 : 154056.318681 P99 : 243420.105820 P100 : 5204379.000000 COUNT : 13509 SUM : 853313355
1795602557.383	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795602557.383	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1206933 SUM : 0
1795602557.383	
