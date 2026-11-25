1795475343.386	Initializing RocksDB Options from the specified file
1795475343.387	Initializing RocksDB Options from command-line flags
1795475354.967	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795475354.967	Values:     1024 bytes each (512 bytes after compression)
1795475354.968	Entries:    15273953
1795475354.968	Prefix:    0 bytes
1795475354.968	Keys per prefix:    0
1795475354.968	RawSize:    15149.0 MB (estimated)
1795475354.968	FileSize:   7691.0 MB (estimated)
1795475354.968	Write rate: 0 bytes/second
1795475354.968	Read rate: 0 ops/second
1795475354.968	Compression: NoCompression
1795475354.968	Compression sampling rate: 0
1795475354.968	Memtablerep: SkipListFactory
1795475354.968	Perf Level: 1
1795475354.968	------------------------------------------------
1795475354.968	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795508405.009	overwrite    :    4325.162 micros/op 924 ops/sec;    0.9 MB/s
1795508410.010	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795508410.010	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795508420.010	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795508430.010	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795508440.023	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795508450.060	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795508460.061	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795508470.061	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795508480.061	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795508480.062	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795508480.062	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795508480.062	
1795508480.062	Level Files Size(MB)
1795508480.062	--------------------
1795508480.062	  0        1        2
1795508480.062	  1        5        2
1795508480.062	  2       61       25
1795508480.062	  3      593      250
1795508480.062	  4     5689     2500
1795508480.062	  5    32688    15394
1795508480.062	  6        0        0
1795508480.062	
1795508480.064	
1795508480.064	
1795508480.064	** Compaction Stats [default] **
1795508480.064	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795508480.065	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795508480.065	  L0      1/0    1.79 MB   0.7      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     25.5   1206.73            715.97     17686    0.068     18K      4       0.0       0.0
1795508480.065	  L1      5/0    2.14 MB   0.9     51.4    30.0     21.3      51.4     30.1       0.0   1.7     26.5     26.5   1987.45           1936.59      8821    0.225     52M   6902       0.0       0.0
1795508480.065	  L2     61/0   24.88 MB   1.0    153.2    30.1    123.2     153.2     30.0       0.0   5.1     25.8     25.8   6082.06           5928.97     64616    0.094    155M    51K       0.0       0.0
1795508480.065	  L3    593/0   249.66 MB   1.0    195.3    30.0    165.3     194.8     29.5       0.0   6.5     25.9     25.9   7714.17           7518.77     68313    0.113    198M   518K       0.0       0.0
1795508480.065	  L4   5689/0    2.44 GB   1.0    197.4    29.5    167.9     192.4     24.5       0.0   6.5     26.4     25.7   7668.85           7483.35     68443    0.112    200M  5068K       0.0       0.0
1795508480.065	  L5  32688/0   15.03 GB   0.6    115.6    24.5     91.1      93.8      2.7       0.0   3.8     29.3     23.8   4039.09           3941.16     53213    0.076    117M    22M       0.0       0.0
1795508480.065	 Sum  39037/0   17.75 GB   0.0    712.9   144.1    568.8     715.6    146.8       0.0  23.8     25.4     25.5  28698.36          27524.82    281092    0.102    724M    27M       0.0       0.0
1795508480.065	 Int      0/0    0.00 KB   0.0      0.9     0.2      0.7       0.7      0.0       0.0 772785912.0     25.8     21.4     34.39             34.04       350    0.098    879K   147K       0.0       0.0
1795508480.065	
1795508480.065	** Compaction Stats [default] **
1795508480.065	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795508480.065	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795508480.065	 Low      0/0    0.00 KB   0.0    712.9   144.1    568.8     685.6    116.8       0.0   0.0     26.6     25.5  27492.84          26810.05    263408    0.104    724M    27M       0.0       0.0
1795508480.065	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     25.5   1205.47            714.77     17682    0.068       0      0       0.0       0.0
1795508480.065	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0     34.5      0.05              0.00         2    0.027       0      0       0.0       0.0
1795508480.065	
1795508480.065	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795508480.065	
1795508480.065	Uptime(secs): 33136.7 total, 58.7 interval
1795508480.065	Flush(GB): cumulative 30.038, interval 0.000
1795508480.065	AddFile(GB): cumulative 0.000, interval 0.000
1795508480.065	AddFile(Total Files): cumulative 0, interval 0
1795508480.065	AddFile(L0 Files): cumulative 0, interval 0
1795508480.065	AddFile(Keys): cumulative 0, interval 0
1795508480.065	Cumulative compaction: 715.59 GB write, 22.11 MB/s write, 712.88 GB read, 22.03 MB/s read, 28698.4 seconds
1795508480.065	Interval compaction: 0.72 GB write, 12.55 MB/s write, 0.87 GB read, 15.08 MB/s read, 34.4 seconds
1795508480.065	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 317003 slowdown for pending_compaction_bytes, 30 memtable_compaction, 4 memtable_slowdown, interval 198 total count
1795508480.065	Block cache LRUCache@0x64ef684ada70#55872 capacity: 8.00 MB collections: 184 last_copies: 2 last_secs: 0.000123 secs_since: 178
1795508480.065	Block cache entry stats(count,size,portion): Misc(2,4.19 KB,0.0511169%)
1795508480.065	
1795508480.065	** File Read Latency Histogram By Level [default] **
1795508480.065	** Level 0 read latency histogram (micros):
1795508480.065	Count: 7718238 Average: 66.0837  StdDev: 442.47
1795508480.065	Min: 13  Median: 45.7797  Max: 479921
1795508480.065	Percentiles: P50: 45.78 P75: 65.19 P99: 226.37 P99.9: 407.90 P99.99: 1079.63
1795508480.065	------------------------------------------------------
1795508480.065	(      10,      15 ]        8   0.000%   0.000% 
1795508480.065	(      15,      22 ]        5   0.000%   0.000% 
1795508480.065	(      34,      51 ]  5569330  72.158%  72.158% ##############
1795508480.065	(      51,      76 ]   386562   5.008%  77.167% #
1795508480.065	(      76,     110 ]  1330595  17.240%  94.406% ###
1795508480.065	(     110,     170 ]   281223   3.644%  98.050% #
1795508480.065	(     170,     250 ]   104066   1.348%  99.398% 
1795508480.065	(     250,     380 ]    37848   0.490%  99.889% 
1795508480.065	(     380,     580 ]     6328   0.082%  99.971% 
1795508480.065	(     580,     870 ]     1235   0.016%  99.987% 
1795508480.065	(     870,    1300 ]      546   0.007%  99.994% 
1795508480.065	(    1300,    1900 ]      132   0.002%  99.995% 
1795508480.065	(    1900,    2900 ]       74   0.001%  99.996% 
1795508480.065	(    2900,    4400 ]       58   0.001%  99.997% 
1795508480.065	(    4400,    6600 ]       20   0.000%  99.997% 
1795508480.065	(    6600,    9900 ]       25   0.000%  99.998% 
1795508480.065	(    9900,   14000 ]        9   0.000%  99.998% 
1795508480.065	(   14000,   22000 ]        2   0.000%  99.998% 
1795508480.065	(   22000,   33000 ]        1   0.000%  99.998% 
1795508480.065	(   33000,   50000 ]        3   0.000%  99.998% 
1795508480.065	(   50000,   75000 ]       14   0.000%  99.998% 
1795508480.065	(   75000,  110000 ]       66   0.001%  99.999% 
1795508480.065	(  110000,  170000 ]       14   0.000%  99.999% 
1795508480.065	(  170000,  250000 ]       33   0.000%  99.999% 
1795508480.065	(  250000,  380000 ]       39   0.001% 100.000% 
1795508480.065	(  380000,  570000 ]        2   0.000% 100.000% 
1795508480.065	
1795508480.065	** Level 1 read latency histogram (micros):
1795508480.065	Count: 13588463 Average: 66.8995  StdDev: 273.90
1795508480.065	Min: 6  Median: 45.6720  Max: 454045
1795508480.066	Percentiles: P50: 45.67 P75: 61.84 P99: 221.56 P99.9: 377.97 P99.99: 1009.85
1795508480.066	------------------------------------------------------
1795508480.066	(       4,       6 ]       11   0.000%   0.000% 
1795508480.066	(       6,      10 ]       85   0.001%   0.001% 
1795508480.066	(      10,      15 ]       47   0.000%   0.001% 
1795508480.066	(      15,      22 ]       11   0.000%   0.001% 
1795508480.066	(      22,      34 ]        3   0.000%   0.001% 
1795508480.066	(      34,      51 ]  9895453  72.822%  72.824% ###############
1795508480.066	(      51,      76 ]   681946   5.019%  77.842% #
1795508480.066	(      76,     110 ]  2285417  16.819%  94.661% ###
1795508480.066	(     110,     170 ]   475526   3.499%  98.160% #
1795508480.066	(     170,     250 ]   177017   1.303%  99.463% 
1795508480.066	(     250,     380 ]    60302   0.444%  99.907% 
1795508480.066	(     380,     580 ]     9211   0.068%  99.975% 
1795508480.066	(     580,     870 ]     1854   0.014%  99.988% 
1795508480.066	(     870,    1300 ]      680   0.005%  99.993% 
1795508480.066	(    1300,    1900 ]      216   0.002%  99.995% 
1795508480.066	(    1900,    2900 ]      124   0.001%  99.996% 
1795508480.066	(    2900,    4400 ]       96   0.001%  99.997% 
1795508480.066	(    4400,    6600 ]       22   0.000%  99.997% 
1795508480.066	(    6600,    9900 ]       37   0.000%  99.997% 
1795508480.066	(    9900,   14000 ]       19   0.000%  99.997% 
1795508480.066	(   14000,   22000 ]       14   0.000%  99.997% 
1795508480.066	(   22000,   33000 ]        1   0.000%  99.997% 
1795508480.066	(   33000,   50000 ]        9   0.000%  99.997% 
1795508480.066	(   50000,   75000 ]       35   0.000%  99.998% 
1795508480.066	(   75000,  110000 ]      120   0.001%  99.998% 
1795508480.066	(  110000,  170000 ]       37   0.000%  99.999% 
1795508480.066	(  170000,  250000 ]       86   0.001%  99.999% 
1795508480.066	(  250000,  380000 ]      105   0.001% 100.000% 
1795508480.066	(  380000,  570000 ]        5   0.000% 100.000% 
1795508480.066	
1795508480.066	** Level 2 read latency histogram (micros):
1795508480.066	Count: 40620181 Average: 66.5219  StdDev: 69.85
1795508480.066	Min: 5  Median: 45.8216  Max: 601756
1795508480.066	Percentiles: P50: 45.82 P75: 66.45 P99: 226.75 P99.9: 375.07 P99.99: 870.24
1795508480.066	------------------------------------------------------
1795508480.066	(       4,       6 ]      616   0.002%   0.002% 
1795508480.066	(       6,      10 ]     3177   0.008%   0.009% 
1795508480.066	(      10,      15 ]      868   0.002%   0.011% 
1795508480.066	(      15,      22 ]      164   0.000%   0.012% 
1795508480.066	(      22,      34 ]       58   0.000%   0.012% 
1795508480.066	(      34,      51 ] 29199902  71.885%  71.897% ##############
1795508480.066	(      51,      76 ]  2039241   5.020%  76.917% #
1795508480.066	(      76,     110 ]  7094912  17.466%  94.384% ###
1795508480.066	(     110,     170 ]  1466724   3.611%  97.995% #
1795508480.066	(     170,     250 ]   575615   1.417%  99.412% 
1795508480.066	(     250,     380 ]   206107   0.507%  99.919% 
1795508480.066	(     380,     580 ]    24672   0.061%  99.980% 
1795508480.066	(     580,     870 ]     4062   0.010%  99.990% 
1795508480.066	(     870,    1300 ]     1760   0.004%  99.994% 
1795508480.066	(    1300,    1900 ]      616   0.002%  99.996% 
1795508480.066	(    1900,    2900 ]      447   0.001%  99.997% 
1795508480.066	(    2900,    4400 ]      448   0.001%  99.998% 
1795508480.066	(    4400,    6600 ]      130   0.000%  99.998% 
1795508480.066	(    6600,    9900 ]       95   0.000%  99.999% 
1795508480.066	(    9900,   14000 ]       41   0.000%  99.999% 
1795508480.066	(   14000,   22000 ]       18   0.000%  99.999% 
1795508480.066	(   22000,   33000 ]        4   0.000%  99.999% 
1795508480.066	(   33000,   50000 ]       24   0.000%  99.999% 
1795508480.066	(   50000,   75000 ]       69   0.000%  99.999% 
1795508480.066	(   75000,  110000 ]      333   0.001% 100.000% 
1795508480.066	(  110000,  170000 ]       96   0.000% 100.000% 
1795508480.066	(  170000,  250000 ]      228   0.001% 100.001% 
1795508480.066	(  250000,  380000 ]      218   0.001% 100.001% 
1795508480.066	(  380000,  570000 ]       15   0.000% 100.001% 
1795508480.066	(  570000,  860000 ]        1   0.000% 100.001% 
1795508480.066	
1795508480.067	** Level 3 read latency histogram (micros):
1795508480.067	Count: 51674881 Average: 66.8803  StdDev: 78.44
1795508480.067	Min: 5  Median: 45.9061  Max: 419891
1795508480.067	Percentiles: P50: 45.91 P75: 69.31 P99: 224.79 P99.9: 371.30 P99.99: 827.49
1795508480.067	------------------------------------------------------
1795508480.067	(       4,       6 ]      685   0.001%   0.001% 
1795508480.067	(       6,      10 ]     2931   0.006%   0.007% 
1795508480.067	(      10,      15 ]      823   0.002%   0.009% 
1795508480.067	(      15,      22 ]      189   0.000%   0.009% 
1795508480.067	(      22,      34 ]       61   0.000%   0.009% 
1795508480.067	(      34,      51 ] 36885157  71.379%  71.388% ##############
1795508480.067	(      51,      76 ]  2548648   4.932%  76.320% #
1795508480.067	(      76,     110 ]  9272344  17.944%  94.264% ####
1795508480.067	(     110,     170 ]  1931510   3.738%  98.002% #
1795508480.067	(     170,     250 ]   753077   1.457%  99.459% 
1795508480.067	(     250,     380 ]   244125   0.472%  99.932% 
1795508480.067	(     380,     580 ]    26574   0.051%  99.983% 
1795508480.067	(     580,     870 ]     4206   0.008%  99.991% 
1795508480.067	(     870,    1300 ]     1726   0.003%  99.995% 
1795508480.067	(    1300,    1900 ]      763   0.001%  99.996% 
1795508480.067	(    1900,    2900 ]      533   0.001%  99.997% 
1795508480.067	(    2900,    4400 ]      448   0.001%  99.998% 
1795508480.067	(    4400,    6600 ]      163   0.000%  99.998% 
1795508480.067	(    6600,    9900 ]      112   0.000%  99.998% 
1795508480.067	(    9900,   14000 ]       54   0.000%  99.999% 
1795508480.067	(   14000,   22000 ]       18   0.000%  99.999% 
1795508480.067	(   22000,   33000 ]        9   0.000%  99.999% 
1795508480.067	(   33000,   50000 ]       41   0.000%  99.999% 
1795508480.067	(   50000,   75000 ]      133   0.000%  99.999% 
1795508480.067	(   75000,  110000 ]      429   0.001% 100.000% 
1795508480.067	(  110000,  170000 ]      145   0.000% 100.000% 
1795508480.067	(  170000,  250000 ]      304   0.001% 100.001% 
1795508480.067	(  250000,  380000 ]      291   0.001% 100.001% 
1795508480.067	(  380000,  570000 ]        7   0.000% 100.001% 
1795508480.067	
1795508480.067	** Level 4 read latency histogram (micros):
1795508480.067	Count: 50982677 Average: 66.1399  StdDev: 37.83
1795508480.067	Min: 5  Median: 45.8904  Max: 801608
1795508480.067	Percentiles: P50: 45.89 P75: 68.66 P99: 221.88 P99.9: 370.53 P99.99: 865.00
1795508480.067	------------------------------------------------------
1795508480.067	(       4,       6 ]      551   0.001%   0.001% 
1795508480.067	(       6,      10 ]     2326   0.005%   0.006% 
1795508480.067	(      10,      15 ]      726   0.001%   0.007% 
1795508480.067	(      15,      22 ]      148   0.000%   0.007% 
1795508480.067	(      22,      34 ]       56   0.000%   0.007% 
1795508480.067	(      34,      51 ] 36440163  71.476%  71.483% ##############
1795508480.067	(      51,      76 ]  2537897   4.978%  76.461% #
1795508480.067	(      76,     110 ]  9126736  17.902%  94.363% ####
1795508480.067	(     110,     170 ]  1904497   3.736%  98.098% #
1795508480.067	(     170,     250 ]   708915   1.391%  99.489% 
1795508480.067	(     250,     380 ]   226146   0.444%  99.932% 
1795508480.067	(     380,     580 ]    25071   0.049%  99.981% 
1795508480.067	(     580,     870 ]     4423   0.009%  99.990% 
1795508480.067	(     870,    1300 ]     2127   0.004%  99.994% 
1795508480.067	(    1300,    1900 ]      839   0.002%  99.996% 
1795508480.067	(    1900,    2900 ]      614   0.001%  99.997% 
1795508480.067	(    2900,    4400 ]      535   0.001%  99.998% 
1795508480.067	(    4400,    6600 ]      188   0.000%  99.999% 
1795508480.067	(    6600,    9900 ]      145   0.000%  99.999% 
1795508480.067	(    9900,   14000 ]       53   0.000%  99.999% 
1795508480.067	(   14000,   22000 ]       24   0.000%  99.999% 
1795508480.067	(   22000,   33000 ]        9   0.000%  99.999% 
1795508480.067	(   33000,   50000 ]       24   0.000%  99.999% 
1795508480.067	(   50000,   75000 ]      156   0.000%  99.999% 
1795508480.067	(   75000,  110000 ]      399   0.001% 100.000% 
1795508480.067	(  110000,  170000 ]      141   0.000% 100.000% 
1795508480.067	(  170000,  250000 ]      245   0.000% 100.001% 
1795508480.067	(  250000,  380000 ]      212   0.000% 100.001% 
1795508480.067	(  380000,  570000 ]       17   0.000% 100.001% 
1795508480.067	(  570000,  860000 ]        1   0.000% 100.001% 
1795508480.067	
1795508480.068	** Level 5 read latency histogram (micros):
1795508480.068	Count: 24213621 Average: 65.2195  StdDev: 145.46
1795508480.068	Min: 5  Median: 45.5653  Max: 488759
1795508480.068	Percentiles: P50: 45.57 P75: 57.71 P99: 224.13 P99.9: 376.49 P99.99: 1683.93
1795508480.068	------------------------------------------------------
1795508480.068	(       4,       6 ]      316   0.001%   0.001% 
1795508480.068	(       6,      10 ]     1874   0.008%   0.009% 
1795508480.068	(      10,      15 ]      602   0.002%   0.012% 
1795508480.068	(      15,      22 ]      102   0.000%   0.012% 
1795508480.068	(      22,      34 ]       56   0.000%   0.012% 
1795508480.068	(      34,      51 ] 17791703  73.478%  73.490% ###############
1795508480.068	(      51,      76 ]  1361200   5.622%  79.112% #
1795508480.068	(      76,     110 ]  3818692  15.771%  94.883% ###
1795508480.068	(     110,     170 ]   764211   3.156%  98.039% #
1795508480.068	(     170,     250 ]   343985   1.421%  99.459% 
1795508480.068	(     250,     380 ]   109625   0.453%  99.912% 
1795508480.068	(     380,     580 ]    12079   0.050%  99.962% 
1795508480.068	(     580,     870 ]     3815   0.016%  99.978% 
1795508480.068	(     870,    1300 ]     2509   0.010%  99.988% 
1795508480.068	(    1300,    1900 ]      673   0.003%  99.991% 
1795508480.068	(    1900,    2900 ]      630   0.003%  99.994% 
1795508480.068	(    2900,    4400 ]      616   0.003%  99.996% 
1795508480.068	(    4400,    6600 ]      379   0.002%  99.998% 
1795508480.068	(    6600,    9900 ]      196   0.001%  99.999% 
1795508480.068	(    9900,   14000 ]       45   0.000%  99.999% 
1795508480.068	(   14000,   22000 ]       13   0.000%  99.999% 
1795508480.068	(   22000,   33000 ]        5   0.000%  99.999% 
1795508480.068	(   33000,   50000 ]        9   0.000%  99.999% 
1795508480.068	(   50000,   75000 ]       58   0.000%  99.999% 
1795508480.068	(   75000,  110000 ]      185   0.001% 100.000% 
1795508480.068	(  110000,  170000 ]       44   0.000% 100.000% 
1795508480.068	(  170000,  250000 ]      147   0.001% 100.001% 
1795508480.068	(  250000,  380000 ]      104   0.000% 100.001% 
1795508480.068	(  380000,  570000 ]       10   0.000% 100.001% 
1795508480.068	
1795508480.068	
1795508480.068	** DB Stats **
1795508480.068	Uptime(secs): 33136.7 total, 58.7 interval
1795508480.068	Cumulative writes: 30M writes, 30M keys, 23M commit groups, 1.3 writes per commit group, ingest: 29.96 GB, 0.93 MB/s
1795508480.068	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.96 GB, 0.93 MB/s
1795508480.068	Cumulative stall: 07:56:49.784 H:M:S, 86.3 percent
1795508480.068	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795508480.068	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795508480.068	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795508480.068	
1795508480.068	STATISTICS:
1795508480.068	rocksdb.block.cache.miss COUNT : 182065932
1795508480.068	rocksdb.block.cache.hit COUNT : 0
1795508480.068	rocksdb.block.cache.add COUNT : 0
1795508480.068	rocksdb.block.cache.add.failures COUNT : 0
1795508480.068	rocksdb.block.cache.index.miss COUNT : 0
1795508480.068	rocksdb.block.cache.index.hit COUNT : 0
1795508480.068	rocksdb.block.cache.index.add COUNT : 0
1795508480.068	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795508480.068	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795508480.068	rocksdb.block.cache.filter.miss COUNT : 0
1795508480.068	rocksdb.block.cache.filter.hit COUNT : 0
1795508480.068	rocksdb.block.cache.filter.add COUNT : 0
1795508480.068	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795508480.068	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795508480.068	rocksdb.block.cache.data.miss COUNT : 182065932
1795508480.068	rocksdb.block.cache.data.hit COUNT : 0
1795508480.068	rocksdb.block.cache.data.add COUNT : 0
1795508480.068	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795508480.068	rocksdb.block.cache.bytes.read COUNT : 0
1795508480.068	rocksdb.block.cache.bytes.write COUNT : 0
1795508480.068	rocksdb.bloom.filter.useful COUNT : 0
1795508480.068	rocksdb.bloom.filter.full.positive COUNT : 0
1795508480.068	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795508480.068	rocksdb.bloom.filter.micros COUNT : 0
1795508480.068	rocksdb.persistent.cache.hit COUNT : 0
1795508480.068	rocksdb.persistent.cache.miss COUNT : 0
1795508480.068	rocksdb.sim.block.cache.hit COUNT : 0
1795508480.068	rocksdb.sim.block.cache.miss COUNT : 0
1795508480.068	rocksdb.memtable.hit COUNT : 0
1795508480.068	rocksdb.memtable.miss COUNT : 0
1795508480.068	rocksdb.l0.hit COUNT : 0
1795508480.068	rocksdb.l1.hit COUNT : 0
1795508480.068	rocksdb.l2andup.hit COUNT : 0
1795508480.068	rocksdb.compaction.key.drop.new COUNT : 27788408
1795508480.069	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795508480.069	rocksdb.compaction.key.drop.range_del COUNT : 0
1795508480.069	rocksdb.compaction.key.drop.user COUNT : 0
1795508480.069	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795508480.069	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795508480.069	rocksdb.compaction.cancelled COUNT : 0
1795508480.069	rocksdb.number.keys.written COUNT : 30547908
1795508480.069	rocksdb.number.keys.read COUNT : 0
1795508480.069	rocksdb.number.keys.updated COUNT : 0
1795508480.069	rocksdb.bytes.written COUNT : 32171406924
1795508480.069	rocksdb.bytes.read COUNT : 0
1795508480.069	rocksdb.number.db.seek COUNT : 0
1795508480.069	rocksdb.number.db.next COUNT : 0
1795508480.069	rocksdb.number.db.prev COUNT : 0
1795508480.069	rocksdb.number.db.seek.found COUNT : 0
1795508480.069	rocksdb.number.db.next.found COUNT : 0
1795508480.069	rocksdb.number.db.prev.found COUNT : 0
1795508480.069	rocksdb.db.iter.bytes.read COUNT : 0
1795508480.069	rocksdb.no.file.closes COUNT : 0
1795508480.069	rocksdb.no.file.opens COUNT : 1683881
1795508480.069	rocksdb.no.file.errors COUNT : 0
1795508480.069	rocksdb.l0.slowdown.micros COUNT : 0
1795508480.069	rocksdb.memtable.compaction.micros COUNT : 0
1795508480.069	rocksdb.l0.num.files.stall.micros COUNT : 0
1795508480.069	rocksdb.stall.micros COUNT : 28609784023
1795508480.069	rocksdb.db.mutex.wait.micros COUNT : 0
1795508480.069	rocksdb.rate.limit.delay.millis COUNT : 0
1795508480.069	rocksdb.num.iterators COUNT : 0
1795508480.069	rocksdb.number.multiget.get COUNT : 0
1795508480.069	rocksdb.number.multiget.keys.read COUNT : 0
1795508480.069	rocksdb.number.multiget.bytes.read COUNT : 0
1795508480.069	rocksdb.number.deletes.filtered COUNT : 0
1795508480.069	rocksdb.number.merge.failures COUNT : 0
1795508480.069	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795508480.069	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795508480.069	rocksdb.number.reseeks.iteration COUNT : 0
1795508480.069	rocksdb.getupdatessince.calls COUNT : 0
1795508480.069	rocksdb.block.cachecompressed.miss COUNT : 0
1795508480.069	rocksdb.block.cachecompressed.hit COUNT : 0
1795508480.069	rocksdb.block.cachecompressed.add COUNT : 0
1795508480.069	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795508480.069	rocksdb.wal.synced COUNT : 0
1795508480.069	rocksdb.wal.bytes COUNT : 32171406924
1795508480.069	rocksdb.write.self COUNT : 23282581
1795508480.069	rocksdb.write.other COUNT : 7265327
1795508480.069	rocksdb.write.timeout COUNT : 0
1795508480.069	rocksdb.write.wal COUNT : 30547908
1795508480.069	rocksdb.compact.read.bytes COUNT : 765310068581
1795508480.069	rocksdb.compact.write.bytes COUNT : 736108470186
1795508480.069	rocksdb.flush.write.bytes COUNT : 32255969184
1795508480.069	rocksdb.compact.read.marked.bytes COUNT : 0
1795508480.069	rocksdb.compact.read.periodic.bytes COUNT : 0
1795508480.069	rocksdb.compact.read.ttl.bytes COUNT : 0
1795508480.069	rocksdb.compact.write.marked.bytes COUNT : 0
1795508480.069	rocksdb.compact.write.periodic.bytes COUNT : 0
1795508480.069	rocksdb.compact.write.ttl.bytes COUNT : 0
1795508480.069	rocksdb.number.direct.load.table.properties COUNT : 0
1795508480.069	rocksdb.number.superversion_acquires COUNT : 0
1795508480.069	rocksdb.number.superversion_releases COUNT : 0
1795508480.069	rocksdb.number.superversion_cleanups COUNT : 0
1795508480.069	rocksdb.number.block.compressed COUNT : 0
1795508480.069	rocksdb.number.block.decompressed COUNT : 0
1795508480.069	rocksdb.number.block.not_compressed COUNT : 0
1795508480.069	rocksdb.merge.operation.time.nanos COUNT : 0
1795508480.069	rocksdb.filter.operation.time.nanos COUNT : 0
1795508480.069	rocksdb.row.cache.hit COUNT : 0
1795508480.069	rocksdb.row.cache.miss COUNT : 0
1795508480.069	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795508480.069	rocksdb.read.amp.total.read.bytes COUNT : 0
1795508480.069	rocksdb.number.rate_limiter.drains COUNT : 0
1795508480.069	rocksdb.number.iter.skip COUNT : 0
1795508480.069	rocksdb.blobdb.num.put COUNT : 0
1795508480.069	rocksdb.blobdb.num.write COUNT : 0
1795508480.069	rocksdb.blobdb.num.get COUNT : 0
1795508480.069	rocksdb.blobdb.num.multiget COUNT : 0
1795508480.070	rocksdb.blobdb.num.seek COUNT : 0
1795508480.070	rocksdb.blobdb.num.next COUNT : 0
1795508480.070	rocksdb.blobdb.num.prev COUNT : 0
1795508480.070	rocksdb.blobdb.num.keys.written COUNT : 0
1795508480.070	rocksdb.blobdb.num.keys.read COUNT : 0
1795508480.070	rocksdb.blobdb.bytes.written COUNT : 0
1795508480.070	rocksdb.blobdb.bytes.read COUNT : 0
1795508480.070	rocksdb.blobdb.write.inlined COUNT : 0
1795508480.070	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795508480.070	rocksdb.blobdb.write.blob COUNT : 0
1795508480.070	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795508480.070	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795508480.070	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795508480.070	rocksdb.blobdb.blob.file.synced COUNT : 0
1795508480.070	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795508480.070	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795508480.070	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795508480.070	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795508480.070	rocksdb.blobdb.gc.num.files COUNT : 0
1795508480.070	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795508480.070	rocksdb.blobdb.gc.failures COUNT : 0
1795508480.070	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795508480.070	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795508480.070	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795508480.070	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795508480.070	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795508480.070	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795508480.070	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795508480.070	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795508480.070	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795508480.070	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795508480.070	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795508480.070	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795508480.070	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795508480.070	rocksdb.txn.get.tryagain COUNT : 0
1795508480.070	rocksdb.number.multiget.keys.found COUNT : 0
1795508480.070	rocksdb.num.iterator.created COUNT : 0
1795508480.070	rocksdb.num.iterator.deleted COUNT : 0
1795508480.070	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795508480.070	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795508480.070	rocksdb.block.cache.compression.dict.add COUNT : 0
1795508480.070	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795508480.070	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795508480.070	rocksdb.block.cache.add.redundant COUNT : 0
1795508480.070	rocksdb.block.cache.index.add.redundant COUNT : 0
1795508480.070	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795508480.070	rocksdb.block.cache.data.add.redundant COUNT : 0
1795508480.070	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795508480.070	rocksdb.files.marked.trash COUNT : 0
1795508480.070	rocksdb.files.deleted.immediately COUNT : 1680265
1795508480.070	rocksdb.error.handler.bg.errro.count COUNT : 0
1795508480.070	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795508480.070	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795508480.070	rocksdb.error.handler.autoresume.count COUNT : 0
1795508480.070	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795508480.070	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795508480.070	rocksdb.memtable.payload.bytes.at.flush COUNT : 32012445896
1795508480.070	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1827712
1795508480.070	rocksdb.secondary.cache.hits COUNT : 0
1795508480.070	rocksdb.verify_checksum.read.bytes COUNT : 0
1795508480.070	rocksdb.backup.read.bytes COUNT : 0
1795508480.070	rocksdb.backup.write.bytes COUNT : 0
1795508480.070	rocksdb.remote.compact.read.bytes COUNT : 0
1795508480.070	rocksdb.remote.compact.write.bytes COUNT : 0
1795508480.070	rocksdb.hot.file.read.bytes COUNT : 0
1795508480.070	rocksdb.warm.file.read.bytes COUNT : 0
1795508480.070	rocksdb.cold.file.read.bytes COUNT : 0
1795508480.070	rocksdb.hot.file.read.count COUNT : 0
1795508480.070	rocksdb.warm.file.read.count COUNT : 0
1795508480.070	rocksdb.cold.file.read.count COUNT : 0
1795508480.071	rocksdb.last.level.read.bytes COUNT : 0
1795508480.071	rocksdb.last.level.read.count COUNT : 0
1795508480.071	rocksdb.non.last.level.read.bytes COUNT : 765566897049
1795508480.071	rocksdb.non.last.level.read.count COUNT : 188801456
1795508480.071	rocksdb.block.checksum.compute.count COUNT : 185433694
1795508480.071	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.db.write.micros P50 : 401.295685 P95 : 17951.600909 P99 : 63919.279596 P100 : 5531291.000000 COUNT : 30547903 SUM : 132069309322
1795508480.071	rocksdb.compaction.times.micros P50 : 92117.086386 P95 : 212353.649360 P99 : 493856.709797 P100 : 5133714.000000 COUNT : 263408 SUM : 27492836606
1795508480.071	rocksdb.compaction.times.cpu_micros P50 : 89978.534645 P95 : 205560.863075 P99 : 488752.136091 P100 : 4930713.000000 COUNT : 263408 SUM : 26810049380
1795508480.071	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.table.sync.micros P50 : 26061.538462 P95 : 112188.679245 P99 : 408509.452736 P100 : 1132705.000000 COUNT : 17684 SUM : 684072006
1795508480.071	rocksdb.compaction.outfile.sync.micros P50 : 6382.564353 P95 : 13643.251949 P99 : 24806.017607 P100 : 1198065.000000 COUNT : 1633937 SUM : 13180982689
1795508480.071	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.manifest.file.sync.micros P50 : 488.713594 P95 : 758.480420 P99 : 284754.510623 P100 : 1098587.000000 COUNT : 219446 SUM : 1610033935
1795508480.071	rocksdb.table.open.io.micros P50 : 238.408804 P95 : 424.667671 P99 : 610.505977 P100 : 471188.000000 COUNT : 1683881 SUM : 564516826
1795508480.071	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.read.block.compaction.micros P50 : 46.113476 P95 : 122.899482 P99 : 228.588608 P100 : 801618.000000 COUNT : 182065932 SUM : 12267441583
1795508480.071	rocksdb.read.block.get.micros P50 : 52.823278 P95 : 106.726570 P99 : 218.237920 P100 : 390237.000000 COUNT : 1683881 SUM : 116747667
1795508480.071	rocksdb.write.raw.block.micros P50 : 0.535895 P95 : 1.536373 P99 : 40.061046 P100 : 2137791.000000 COUNT : 187714565 SUM : 350939438
1795508480.071	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.numfiles.in.singlecompaction P50 : 5.838293 P95 : 9.584505 P99 : 9.926137 P100 : 54.000000 COUNT : 264109 SUM : 1645545
1795508480.071	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.db.write.stall P50 : 0.695445 P95 : 3838.346425 P99 : 17145.653279 P100 : 5527476.000000 COUNT : 23262714 SUM : 28613047631
1795508480.071	rocksdb.sst.read.micros P50 : 45.816921 P95 : 119.476951 P99 : 224.263882 P100 : 801608.000000 COUNT : 188801456 SUM : 12528763228
1795508480.071	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.bytes.per.write P50 : 1127.060229 P95 : 3515.422726 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23282581 SUM : 32171406924
1795508480.071	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.db.flush.micros P50 : 54421.768707 P95 : 190043.010753 P99 : 450759.107807 P100 : 5352134.000000 COUNT : 17682 SUM : 1205465437
1795508480.071	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795508480.071	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1644844 SUM : 0
1795508480.071	
