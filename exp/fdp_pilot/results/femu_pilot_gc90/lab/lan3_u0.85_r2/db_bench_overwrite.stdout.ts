1795476362.513	Initializing RocksDB Options from the specified file
1795476362.513	Initializing RocksDB Options from command-line flags
1795476374.008	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795476374.008	Values:     1024 bytes each (512 bytes after compression)
1795476374.008	Entries:    15273953
1795476374.008	Prefix:    0 bytes
1795476374.008	Keys per prefix:    0
1795476374.008	RawSize:    15149.0 MB (estimated)
1795476374.008	FileSize:   7691.0 MB (estimated)
1795476374.008	Write rate: 0 bytes/second
1795476374.008	Read rate: 0 ops/second
1795476374.008	Compression: NoCompression
1795476374.008	Compression sampling rate: 0
1795476374.008	Memtablerep: SkipListFactory
1795476374.008	Perf Level: 1
1795476374.008	------------------------------------------------
1795476374.008	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795510007.082	overwrite    :    4398.849 micros/op 908 ops/sec;    0.9 MB/s
1795510012.083	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795510012.083	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795510022.112	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795510032.112	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795510042.112	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795510052.118	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795510062.118	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795510072.118	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795510082.118	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795510082.119	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795510082.119	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795510082.120	
1795510082.120	Level Files Size(MB)
1795510082.120	--------------------
1795510082.120	  0        1        2
1795510082.120	  1        5        2
1795510082.120	  2       63       25
1795510082.120	  3      609      250
1795510082.120	  4     5702     2500
1795510082.120	  5    32682    15394
1795510082.120	  6        0        0
1795510082.120	
1795510082.125	
1795510082.125	
1795510082.125	** Compaction Stats [default] **
1795510082.125	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795510082.125	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795510082.125	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     25.9   1190.35            705.97     17707    0.067     31K      6       0.0       0.0
1795510082.126	  L1      5/0    2.40 MB   1.0     51.3    30.0     21.3      51.4     30.1       0.0   1.7     26.5     26.5   1983.47           1933.84      8830    0.225     52M   6716       0.0       0.0
1795510082.126	  L2     63/0   24.73 MB   1.0    153.4    30.1    123.3     153.3     30.0       0.0   5.1     26.0     25.9   6049.71           5901.31     64630    0.094    155M    52K       0.0       0.0
1795510082.126	  L3    609/0   249.75 MB   1.0    195.3    30.0    165.3     194.8     29.5       0.0   6.5     26.0     25.9   7697.56           7510.23     68238    0.113    198M   518K       0.0       0.0
1795510082.126	  L4   5702/0    2.44 GB   1.0    197.4    29.5    167.9     192.4     24.5       0.0   6.5     26.3     25.6   7689.04           7507.09     68398    0.112    200M  5067K       0.0       0.0
1795510082.126	  L5  32682/0   15.03 GB   0.6    115.5    24.5     91.0      93.7      2.7       0.0   3.8     29.3     23.8   4041.74           3949.14     53258    0.076    117M    22M       0.0       0.0
1795510082.126	 Sum  39062/0   17.75 GB   0.0    713.0   144.1    568.9     715.7    146.8       0.0  23.8     25.5     25.6  28651.87          27507.58    281061    0.102    724M    27M       0.0       0.0
1795510082.126	 Int      0/0    0.00 KB   0.0      0.5     0.1      0.4       0.4      0.0       0.0 469104370.0     25.6     21.4     20.94             20.77       210    0.100    532K    88K       0.0       0.0
1795510082.126	
1795510082.126	** Compaction Stats [default] **
1795510082.126	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795510082.126	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795510082.126	 Low      0/0    0.00 KB   0.0    713.0   144.1    568.9     685.7    116.8       0.0   0.0     26.6     25.6  27464.29          26804.35    263357    0.104    724M    27M       0.0       0.0
1795510082.126	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     25.9   1187.56            703.23     17702    0.067       0      0       0.0       0.0
1795510082.126	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    180.7      0.01              0.00         2    0.005       0      0       0.0       0.0
1795510082.126	
1795510082.126	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795510082.126	
1795510082.126	Uptime(secs): 33719.6 total, 41.2 interval
1795510082.126	Flush(GB): cumulative 30.038, interval 0.000
1795510082.126	AddFile(GB): cumulative 0.000, interval 0.000
1795510082.126	AddFile(Total Files): cumulative 0, interval 0
1795510082.126	AddFile(L0 Files): cumulative 0, interval 0
1795510082.126	AddFile(Keys): cumulative 0, interval 0
1795510082.126	Cumulative compaction: 715.69 GB write, 21.73 MB/s write, 712.98 GB read, 21.65 MB/s read, 28651.9 seconds
1795510082.126	Interval compaction: 0.44 GB write, 10.87 MB/s write, 0.52 GB read, 13.03 MB/s read, 20.9 seconds
1795510082.126	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 317011 slowdown for pending_compaction_bytes, 18 memtable_compaction, 2 memtable_slowdown, interval 63 total count
1795510082.126	Block cache LRUCache@0x5bc595eb5a70#58889 capacity: 8.00 MB collections: 188 last_copies: 0 last_secs: 0.000124 secs_since: 41
1795510082.126	Block cache entry stats(count,size,portion): Misc(3,8.34 KB,0.101852%)
1795510082.126	
1795510082.126	** File Read Latency Histogram By Level [default] **
1795510082.126	** Level 0 read latency histogram (micros):
1795510082.126	Count: 7721893 Average: 67.7144  StdDev: 429.11
1795510082.126	Min: 9  Median: 45.8217  Max: 384515
1795510082.126	Percentiles: P50: 45.82 P75: 66.11 P99: 226.54 P99.9: 394.50 P99.99: 1093.57
1795510082.126	------------------------------------------------------
1795510082.126	(       6,      10 ]        1   0.000%   0.000% 
1795510082.126	(      10,      15 ]        4   0.000%   0.000% 
1795510082.126	(      34,      51 ]  5552173  71.902%  71.902% ##############
1795510082.126	(      51,      76 ]   395873   5.127%  77.028% #
1795510082.126	(      76,     110 ]  1337685  17.323%  94.352% ###
1795510082.126	(     110,     170 ]   284507   3.684%  98.036% #
1795510082.126	(     170,     250 ]   105319   1.364%  99.400% 
1795510082.126	(     250,     380 ]    38169   0.494%  99.894% 
1795510082.126	(     380,     580 ]     6071   0.079%  99.973% 
1795510082.126	(     580,     870 ]     1089   0.014%  99.987% 
1795510082.126	(     870,    1300 ]      442   0.006%  99.993% 
1795510082.126	(    1300,    1900 ]      134   0.002%  99.994% 
1795510082.126	(    1900,    2900 ]       79   0.001%  99.996% 
1795510082.126	(    2900,    4400 ]       82   0.001%  99.997% 
1795510082.126	(    4400,    6600 ]       11   0.000%  99.997% 
1795510082.126	(    6600,    9900 ]       10   0.000%  99.997% 
1795510082.126	(    9900,   14000 ]       11   0.000%  99.997% 
1795510082.126	(   14000,   22000 ]        2   0.000%  99.997% 
1795510082.126	(   22000,   33000 ]        2   0.000%  99.997% 
1795510082.126	(   33000,   50000 ]        2   0.000%  99.997% 
1795510082.126	(   50000,   75000 ]       12   0.000%  99.997% 
1795510082.126	(   75000,  110000 ]       74   0.001%  99.998% 
1795510082.126	(  110000,  170000 ]       25   0.000%  99.998% 
1795510082.126	(  170000,  250000 ]       57   0.001%  99.999% 
1795510082.126	(  250000,  380000 ]       58   0.001% 100.000% 
1795510082.126	(  380000,  570000 ]        1   0.000% 100.000% 
1795510082.126	
1795510082.126	** Level 1 read latency histogram (micros):
1795510082.126	Count: 13584685 Average: 67.1757  StdDev: 260.17
1795510082.126	Min: 6  Median: 45.7067  Max: 1057703
1795510082.126	Percentiles: P50: 45.71 P75: 62.76 P99: 221.51 P99.9: 377.72 P99.99: 1057.99
1795510082.126	------------------------------------------------------
1795510082.126	(       4,       6 ]        6   0.000%   0.000% 
1795510082.126	(       6,      10 ]       72   0.001%   0.001% 
1795510082.126	(      10,      15 ]       48   0.000%   0.001% 
1795510082.126	(      15,      22 ]       11   0.000%   0.001% 
1795510082.126	(      22,      34 ]        4   0.000%   0.001% 
1795510082.126	(      34,      51 ]  9863383  72.607%  72.608% ###############
1795510082.126	(      51,      76 ]   690978   5.086%  77.694% #
1795510082.126	(      76,     110 ]  2298033  16.916%  94.610% ###
1795510082.126	(     110,     170 ]   481029   3.541%  98.151% #
1795510082.126	(     170,     250 ]   179023   1.318%  99.469% 
1795510082.126	(     250,     380 ]    59560   0.438%  99.908% 
1795510082.126	(     380,     580 ]     9236   0.068%  99.976% 
1795510082.126	(     580,     870 ]     1648   0.012%  99.988% 
1795510082.126	(     870,    1300 ]      676   0.005%  99.993% 
1795510082.126	(    1300,    1900 ]      226   0.002%  99.994% 
1795510082.126	(    1900,    2900 ]      137   0.001%  99.995% 
1795510082.126	(    2900,    4400 ]      122   0.001%  99.996% 
1795510082.126	(    4400,    6600 ]       23   0.000%  99.997% 
1795510082.126	(    6600,    9900 ]       27   0.000%  99.997% 
1795510082.126	(    9900,   14000 ]       23   0.000%  99.997% 
1795510082.126	(   14000,   22000 ]        8   0.000%  99.997% 
1795510082.126	(   22000,   33000 ]        6   0.000%  99.997% 
1795510082.126	(   33000,   50000 ]       22   0.000%  99.997% 
1795510082.126	(   50000,   75000 ]       28   0.000%  99.997% 
1795510082.126	(   75000,  110000 ]      132   0.001%  99.998% 
1795510082.126	(  110000,  170000 ]       55   0.000%  99.999% 
1795510082.126	(  170000,  250000 ]       98   0.001%  99.999% 
1795510082.126	(  250000,  380000 ]       92   0.001% 100.000% 
1795510082.126	(  860000, 1200000 ]        1   0.000% 100.000% 
1795510082.126	
1795510082.126	** Level 2 read latency histogram (micros):
1795510082.126	Count: 40654641 Average: 66.9375  StdDev: 58.97
1795510082.126	Min: 5  Median: 45.8544  Max: 387695
1795510082.126	Percentiles: P50: 45.85 P75: 67.19 P99: 226.70 P99.9: 374.49 P99.99: 932.61
1795510082.126	------------------------------------------------------
1795510082.126	(       4,       6 ]      587   0.001%   0.001% 
1795510082.126	(       6,      10 ]     3179   0.008%   0.009% 
1795510082.126	(      10,      15 ]      809   0.002%   0.011% 
1795510082.126	(      15,      22 ]      169   0.000%   0.012% 
1795510082.126	(      22,      34 ]       70   0.000%   0.012% 
1795510082.126	(      34,      51 ] 29143825  71.686%  71.698% ##############
1795510082.126	(      51,      76 ]  2073079   5.099%  76.797% #
1795510082.126	(      76,     110 ]  7140066  17.563%  94.360% ####
1795510082.126	(     110,     170 ]  1474585   3.627%  97.987% #
1795510082.126	(     170,     250 ]   580914   1.429%  99.416% 
1795510082.126	(     250,     380 ]   205414   0.505%  99.921% 
1795510082.126	(     380,     580 ]    23411   0.058%  99.979% 
1795510082.127	(     580,     870 ]     4212   0.010%  99.989% 
1795510082.127	(     870,    1300 ]     1755   0.004%  99.994% 
1795510082.127	(    1300,    1900 ]      616   0.002%  99.995% 
1795510082.127	(    1900,    2900 ]      448   0.001%  99.996% 
1795510082.127	(    2900,    4400 ]      503   0.001%  99.998% 
1795510082.127	(    4400,    6600 ]      149   0.000%  99.998% 
1795510082.127	(    6600,    9900 ]       58   0.000%  99.998% 
1795510082.127	(    9900,   14000 ]       35   0.000%  99.998% 
1795510082.127	(   14000,   22000 ]       26   0.000%  99.998% 
1795510082.127	(   22000,   33000 ]        8   0.000%  99.998% 
1795510082.127	(   33000,   50000 ]       33   0.000%  99.998% 
1795510082.127	(   50000,   75000 ]       50   0.000%  99.998% 
1795510082.127	(   75000,  110000 ]      352   0.001%  99.999% 
1795510082.127	(  110000,  170000 ]      149   0.000% 100.000% 
1795510082.127	(  170000,  250000 ]      282   0.001% 100.000% 
1795510082.127	(  250000,  380000 ]      217   0.001% 100.001% 
1795510082.127	(  380000,  570000 ]        3   0.000% 100.001% 
1795510082.127	
1795510082.127	** Level 3 read latency histogram (micros):
1795510082.127	Count: 51688757 Average: 67.1053  StdDev: 31.53
1795510082.127	Min: 5  Median: 45.9254  Max: 836233
1795510082.127	Percentiles: P50: 45.93 P75: 69.65 P99: 223.89 P99.9: 370.52 P99.99: 842.85
1795510082.127	------------------------------------------------------
1795510082.127	(       4,       6 ]      592   0.001%   0.001% 
1795510082.127	(       6,      10 ]     3015   0.006%   0.007% 
1795510082.127	(      10,      15 ]      897   0.002%   0.009% 
1795510082.127	(      15,      22 ]      197   0.000%   0.009% 
1795510082.127	(      22,      34 ]       71   0.000%   0.009% 
1795510082.127	(      34,      51 ] 36835013  71.263%  71.272% ##############
1795510082.127	(      51,      76 ]  2582307   4.996%  76.268% #
1795510082.127	(      76,     110 ]  9308147  18.008%  94.276% ####
1795510082.127	(     110,     170 ]  1938699   3.751%  98.027% #
1795510082.127	(     170,     250 ]   746554   1.444%  99.471% 
1795510082.127	(     250,     380 ]   239001   0.462%  99.934% 
1795510082.127	(     380,     580 ]    25360   0.049%  99.983% 
1795510082.127	(     580,     870 ]     4121   0.008%  99.991% 
1795510082.127	(     870,    1300 ]     1884   0.004%  99.994% 
1795510082.127	(    1300,    1900 ]      745   0.001%  99.996% 
1795510082.127	(    1900,    2900 ]      572   0.001%  99.997% 
1795510082.127	(    2900,    4400 ]      466   0.001%  99.998% 
1795510082.127	(    4400,    6600 ]      168   0.000%  99.998% 
1795510082.127	(    6600,    9900 ]       91   0.000%  99.998% 
1795510082.127	(    9900,   14000 ]       41   0.000%  99.998% 
1795510082.127	(   14000,   22000 ]       22   0.000%  99.998% 
1795510082.127	(   22000,   33000 ]       10   0.000%  99.998% 
1795510082.127	(   33000,   50000 ]       55   0.000%  99.999% 
1795510082.127	(   50000,   75000 ]       94   0.000%  99.999% 
1795510082.127	(   75000,  110000 ]      482   0.001% 100.000% 
1795510082.127	(  110000,  170000 ]      166   0.000% 100.000% 
1795510082.127	(  170000,  250000 ]      325   0.001% 100.001% 
1795510082.127	(  250000,  380000 ]      290   0.001% 100.001% 
1795510082.127	(  380000,  570000 ]        4   0.000% 100.001% 
1795510082.127	(  570000,  860000 ]        1   0.000% 100.001% 
1795510082.127	
1795510082.127	** Level 4 read latency histogram (micros):
1795510082.127	Count: 50967817 Average: 66.4791  StdDev: 78.16
1795510082.127	Min: 5  Median: 45.9015  Max: 738810
1795510082.127	Percentiles: P50: 45.90 P75: 68.70 P99: 221.07 P99.9: 370.25 P99.99: 890.43
1795510082.127	------------------------------------------------------
1795510082.127	(       4,       6 ]      454   0.001%   0.001% 
1795510082.127	(       6,      10 ]     2521   0.005%   0.006% 
1795510082.127	(      10,      15 ]      705   0.001%   0.007% 
1795510082.127	(      15,      22 ]      147   0.000%   0.008% 
1795510082.127	(      22,      34 ]       49   0.000%   0.008% 
1795510082.127	(      34,      51 ] 36395531  71.409%  71.416% ##############
1795510082.127	(      51,      76 ]  2579460   5.061%  76.477% #
1795510082.127	(      76,     110 ]  9135682  17.924%  94.402% ####
1795510082.127	(     110,     170 ]  1898988   3.726%  98.128% #
1795510082.127	(     170,     250 ]   696421   1.366%  99.494% 
1795510082.127	(     250,     380 ]   223663   0.439%  99.933% 
1795510082.127	(     380,     580 ]    24227   0.048%  99.980% 
1795510082.127	(     580,     870 ]     4761   0.009%  99.990% 
1795510082.127	(     870,    1300 ]     2341   0.005%  99.994% 
1795510082.127	(    1300,    1900 ]      794   0.002%  99.996% 
1795510082.127	(    1900,    2900 ]      595   0.001%  99.997% 
1795510082.127	(    2900,    4400 ]      479   0.001%  99.998% 
1795510082.127	(    4400,    6600 ]      187   0.000%  99.998% 
1795510082.127	(    6600,    9900 ]      115   0.000%  99.999% 
1795510082.127	(    9900,   14000 ]       50   0.000%  99.999% 
1795510082.127	(   14000,   22000 ]       25   0.000%  99.999% 
1795510082.127	(   22000,   33000 ]        7   0.000%  99.999% 
1795510082.127	(   33000,   50000 ]       34   0.000%  99.999% 
1795510082.127	(   50000,   75000 ]      103   0.000%  99.999% 
1795510082.127	(   75000,  110000 ]      400   0.001% 100.000% 
1795510082.127	(  110000,  170000 ]      140   0.000% 100.000% 
1795510082.127	(  170000,  250000 ]      323   0.001% 100.001% 
1795510082.127	(  250000,  380000 ]      241   0.000% 100.001% 
1795510082.127	(  380000,  570000 ]        6   0.000% 100.001% 
1795510082.127	(  570000,  860000 ]        1   0.000% 100.001% 
1795510082.127	
1795510082.127	** Level 5 read latency histogram (micros):
1795510082.127	Count: 24205959 Average: 65.7625  StdDev: 94.00
1795510082.127	Min: 5  Median: 45.5780  Max: 380106
1795510082.127	Percentiles: P50: 45.58 P75: 57.96 P99: 224.06 P99.9: 376.77 P99.99: 1805.17
1795510082.127	------------------------------------------------------
1795510082.127	(       4,       6 ]      213   0.001%   0.001% 
1795510082.127	(       6,      10 ]     1721   0.007%   0.008% 
1795510082.127	(      10,      15 ]      579   0.002%   0.010% 
1795510082.127	(      15,      22 ]       91   0.000%   0.011% 
1795510082.127	(      22,      34 ]       28   0.000%   0.011% 
1795510082.127	(      34,      51 ] 17766982  73.399%  73.410% ###############
1795510082.127	(      51,      76 ]  1381689   5.708%  79.118% #
1795510082.127	(      76,     110 ]  3821551  15.788%  94.906% ###
1795510082.127	(     110,     170 ]   761249   3.145%  98.051% #
1795510082.127	(     170,     250 ]   340089   1.405%  99.456% 
1795510082.127	(     250,     380 ]   110299   0.456%  99.911% 
1795510082.127	(     380,     580 ]    11311   0.047%  99.958% 
1795510082.127	(     580,     870 ]     4039   0.017%  99.975% 
1795510082.127	(     870,    1300 ]     3023   0.012%  99.987% 
1795510082.127	(    1300,    1900 ]      801   0.003%  99.991% 
1795510082.127	(    1900,    2900 ]      663   0.003%  99.993% 
1795510082.127	(    2900,    4400 ]      621   0.003%  99.996% 
1795510082.127	(    4400,    6600 ]      341   0.001%  99.997% 
1795510082.127	(    6600,    9900 ]      186   0.001%  99.998% 
1795510082.127	(    9900,   14000 ]       54   0.000%  99.998% 
1795510082.127	(   14000,   22000 ]        9   0.000%  99.998% 
1795510082.127	(   22000,   33000 ]        3   0.000%  99.998% 
1795510082.127	(   33000,   50000 ]       16   0.000%  99.998% 
1795510082.127	(   50000,   75000 ]       51   0.000%  99.999% 
1795510082.127	(   75000,  110000 ]      254   0.001% 100.000% 
1795510082.127	(  110000,  170000 ]       76   0.000% 100.000% 
1795510082.127	(  170000,  250000 ]      166   0.001% 100.001% 
1795510082.127	(  250000,  380000 ]      108   0.000% 100.001% 
1795510082.127	(  380000,  570000 ]        1   0.000% 100.001% 
1795510082.127	
1795510082.127	
1795510082.128	** DB Stats **
1795510082.128	Uptime(secs): 33719.6 total, 41.2 interval
1795510082.128	Cumulative writes: 30M writes, 30M keys, 23M commit groups, 1.3 writes per commit group, ingest: 29.96 GB, 0.91 MB/s
1795510082.128	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.96 GB, 0.91 MB/s
1795510082.128	Cumulative stall: 08:01:44.760 H:M:S, 85.7 percent
1795510082.128	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795510082.128	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795510082.128	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795510082.128	
1795510082.128	STATISTICS:
1795510082.128	rocksdb.block.cache.miss COUNT : 182091303
1795510082.128	rocksdb.block.cache.hit COUNT : 0
1795510082.128	rocksdb.block.cache.add COUNT : 0
1795510082.128	rocksdb.block.cache.add.failures COUNT : 0
1795510082.128	rocksdb.block.cache.index.miss COUNT : 0
1795510082.128	rocksdb.block.cache.index.hit COUNT : 0
1795510082.128	rocksdb.block.cache.index.add COUNT : 0
1795510082.128	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795510082.128	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795510082.128	rocksdb.block.cache.filter.miss COUNT : 0
1795510082.128	rocksdb.block.cache.filter.hit COUNT : 0
1795510082.128	rocksdb.block.cache.filter.add COUNT : 0
1795510082.128	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795510082.128	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795510082.128	rocksdb.block.cache.data.miss COUNT : 182091303
1795510082.128	rocksdb.block.cache.data.hit COUNT : 0
1795510082.128	rocksdb.block.cache.data.add COUNT : 0
1795510082.128	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795510082.128	rocksdb.block.cache.bytes.read COUNT : 0
1795510082.128	rocksdb.block.cache.bytes.write COUNT : 0
1795510082.128	rocksdb.bloom.filter.useful COUNT : 0
1795510082.128	rocksdb.bloom.filter.full.positive COUNT : 0
1795510082.128	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795510082.128	rocksdb.bloom.filter.micros COUNT : 0
1795510082.128	rocksdb.persistent.cache.hit COUNT : 0
1795510082.128	rocksdb.persistent.cache.miss COUNT : 0
1795510082.128	rocksdb.sim.block.cache.hit COUNT : 0
1795510082.128	rocksdb.sim.block.cache.miss COUNT : 0
1795510082.128	rocksdb.memtable.hit COUNT : 0
1795510082.128	rocksdb.memtable.miss COUNT : 0
1795510082.128	rocksdb.l0.hit COUNT : 0
1795510082.128	rocksdb.l1.hit COUNT : 0
1795510082.128	rocksdb.l2andup.hit COUNT : 0
1795510082.128	rocksdb.compaction.key.drop.new COUNT : 27788231
1795510082.128	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795510082.128	rocksdb.compaction.key.drop.range_del COUNT : 0
1795510082.128	rocksdb.compaction.key.drop.user COUNT : 0
1795510082.128	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795510082.128	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795510082.128	rocksdb.compaction.cancelled COUNT : 0
1795510082.128	rocksdb.number.keys.written COUNT : 30547908
1795510082.128	rocksdb.number.keys.read COUNT : 0
1795510082.128	rocksdb.number.keys.updated COUNT : 0
1795510082.128	rocksdb.bytes.written COUNT : 32171162712
1795510082.128	rocksdb.bytes.read COUNT : 0
1795510082.128	rocksdb.number.db.seek COUNT : 0
1795510082.128	rocksdb.number.db.next COUNT : 0
1795510082.128	rocksdb.number.db.prev COUNT : 0
1795510082.128	rocksdb.number.db.seek.found COUNT : 0
1795510082.128	rocksdb.number.db.next.found COUNT : 0
1795510082.128	rocksdb.number.db.prev.found COUNT : 0
1795510082.128	rocksdb.db.iter.bytes.read COUNT : 0
1795510082.128	rocksdb.no.file.closes COUNT : 0
1795510082.128	rocksdb.no.file.opens COUNT : 1683890
1795510082.128	rocksdb.no.file.errors COUNT : 0
1795510082.128	rocksdb.l0.slowdown.micros COUNT : 0
1795510082.128	rocksdb.memtable.compaction.micros COUNT : 0
1795510082.128	rocksdb.l0.num.files.stall.micros COUNT : 0
1795510082.128	rocksdb.stall.micros COUNT : 28904759854
1795510082.128	rocksdb.db.mutex.wait.micros COUNT : 0
1795510082.128	rocksdb.rate.limit.delay.millis COUNT : 0
1795510082.128	rocksdb.num.iterators COUNT : 0
1795510082.128	rocksdb.number.multiget.get COUNT : 0
1795510082.128	rocksdb.number.multiget.keys.read COUNT : 0
1795510082.128	rocksdb.number.multiget.bytes.read COUNT : 0
1795510082.128	rocksdb.number.deletes.filtered COUNT : 0
1795510082.129	rocksdb.number.merge.failures COUNT : 0
1795510082.129	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795510082.129	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795510082.129	rocksdb.number.reseeks.iteration COUNT : 0
1795510082.129	rocksdb.getupdatessince.calls COUNT : 0
1795510082.129	rocksdb.block.cachecompressed.miss COUNT : 0
1795510082.129	rocksdb.block.cachecompressed.hit COUNT : 0
1795510082.129	rocksdb.block.cachecompressed.add COUNT : 0
1795510082.129	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795510082.129	rocksdb.wal.synced COUNT : 0
1795510082.129	rocksdb.wal.bytes COUNT : 32171162712
1795510082.129	rocksdb.write.self COUNT : 23262230
1795510082.129	rocksdb.write.other COUNT : 7285678
1795510082.129	rocksdb.write.timeout COUNT : 0
1795510082.129	rocksdb.write.wal COUNT : 30547908
1795510082.129	rocksdb.compact.read.bytes COUNT : 765417290105
1795510082.129	rocksdb.compact.write.bytes COUNT : 736215840461
1795510082.129	rocksdb.flush.write.bytes COUNT : 32256225903
1795510082.129	rocksdb.compact.read.marked.bytes COUNT : 0
1795510082.129	rocksdb.compact.read.periodic.bytes COUNT : 0
1795510082.129	rocksdb.compact.read.ttl.bytes COUNT : 0
1795510082.129	rocksdb.compact.write.marked.bytes COUNT : 0
1795510082.129	rocksdb.compact.write.periodic.bytes COUNT : 0
1795510082.129	rocksdb.compact.write.ttl.bytes COUNT : 0
1795510082.129	rocksdb.number.direct.load.table.properties COUNT : 0
1795510082.129	rocksdb.number.superversion_acquires COUNT : 0
1795510082.129	rocksdb.number.superversion_releases COUNT : 0
1795510082.129	rocksdb.number.superversion_cleanups COUNT : 0
1795510082.129	rocksdb.number.block.compressed COUNT : 0
1795510082.129	rocksdb.number.block.decompressed COUNT : 0
1795510082.129	rocksdb.number.block.not_compressed COUNT : 0
1795510082.129	rocksdb.merge.operation.time.nanos COUNT : 0
1795510082.129	rocksdb.filter.operation.time.nanos COUNT : 0
1795510082.129	rocksdb.row.cache.hit COUNT : 0
1795510082.129	rocksdb.row.cache.miss COUNT : 0
1795510082.129	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795510082.129	rocksdb.read.amp.total.read.bytes COUNT : 0
1795510082.129	rocksdb.number.rate_limiter.drains COUNT : 0
1795510082.129	rocksdb.number.iter.skip COUNT : 0
1795510082.129	rocksdb.blobdb.num.put COUNT : 0
1795510082.129	rocksdb.blobdb.num.write COUNT : 0
1795510082.129	rocksdb.blobdb.num.get COUNT : 0
1795510082.129	rocksdb.blobdb.num.multiget COUNT : 0
1795510082.129	rocksdb.blobdb.num.seek COUNT : 0
1795510082.129	rocksdb.blobdb.num.next COUNT : 0
1795510082.129	rocksdb.blobdb.num.prev COUNT : 0
1795510082.129	rocksdb.blobdb.num.keys.written COUNT : 0
1795510082.129	rocksdb.blobdb.num.keys.read COUNT : 0
1795510082.129	rocksdb.blobdb.bytes.written COUNT : 0
1795510082.129	rocksdb.blobdb.bytes.read COUNT : 0
1795510082.129	rocksdb.blobdb.write.inlined COUNT : 0
1795510082.129	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795510082.129	rocksdb.blobdb.write.blob COUNT : 0
1795510082.129	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795510082.129	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795510082.129	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795510082.129	rocksdb.blobdb.blob.file.synced COUNT : 0
1795510082.129	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795510082.129	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795510082.129	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795510082.129	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795510082.129	rocksdb.blobdb.gc.num.files COUNT : 0
1795510082.129	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795510082.129	rocksdb.blobdb.gc.failures COUNT : 0
1795510082.129	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795510082.129	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795510082.129	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795510082.129	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795510082.129	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795510082.129	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795510082.129	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795510082.129	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795510082.129	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795510082.129	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795510082.129	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795510082.129	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795510082.129	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795510082.129	rocksdb.txn.get.tryagain COUNT : 0
1795510082.129	rocksdb.number.multiget.keys.found COUNT : 0
1795510082.129	rocksdb.num.iterator.created COUNT : 0
1795510082.129	rocksdb.num.iterator.deleted COUNT : 0
1795510082.129	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795510082.129	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795510082.129	rocksdb.block.cache.compression.dict.add COUNT : 0
1795510082.129	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795510082.129	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795510082.129	rocksdb.block.cache.add.redundant COUNT : 0
1795510082.129	rocksdb.block.cache.index.add.redundant COUNT : 0
1795510082.129	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795510082.129	rocksdb.block.cache.data.add.redundant COUNT : 0
1795510082.129	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795510082.129	rocksdb.files.marked.trash COUNT : 0
1795510082.129	rocksdb.files.deleted.immediately COUNT : 1680271
1795510082.129	rocksdb.error.handler.bg.errro.count COUNT : 0
1795510082.129	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795510082.129	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795510082.129	rocksdb.error.handler.autoresume.count COUNT : 0
1795510082.129	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795510082.129	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795510082.129	rocksdb.memtable.payload.bytes.at.flush COUNT : 32012649208
1795510082.129	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1823520
1795510082.129	rocksdb.secondary.cache.hits COUNT : 0
1795510082.129	rocksdb.verify_checksum.read.bytes COUNT : 0
1795510082.130	rocksdb.backup.read.bytes COUNT : 0
1795510082.130	rocksdb.backup.write.bytes COUNT : 0
1795510082.130	rocksdb.remote.compact.read.bytes COUNT : 0
1795510082.130	rocksdb.remote.compact.write.bytes COUNT : 0
1795510082.130	rocksdb.hot.file.read.bytes COUNT : 0
1795510082.130	rocksdb.warm.file.read.bytes COUNT : 0
1795510082.130	rocksdb.cold.file.read.bytes COUNT : 0
1795510082.130	rocksdb.hot.file.read.count COUNT : 0
1795510082.130	rocksdb.warm.file.read.count COUNT : 0
1795510082.130	rocksdb.cold.file.read.count COUNT : 0
1795510082.130	rocksdb.last.level.read.bytes COUNT : 0
1795510082.130	rocksdb.last.level.read.count COUNT : 0
1795510082.130	rocksdb.non.last.level.read.bytes COUNT : 765674114348
1795510082.130	rocksdb.non.last.level.read.count COUNT : 188826863
1795510082.130	rocksdb.block.checksum.compute.count COUNT : 185459083
1795510082.130	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.db.write.micros P50 : 462.320744 P95 : 18059.814051 P99 : 65743.376239 P100 : 6055613.000000 COUNT : 30547908 SUM : 134318025840
1795510082.130	rocksdb.compaction.times.micros P50 : 92150.111352 P95 : 215491.685282 P99 : 485082.574598 P100 : 5640838.000000 COUNT : 263357 SUM : 27464294041
1795510082.130	rocksdb.compaction.times.cpu_micros P50 : 90091.161974 P95 : 208992.774369 P99 : 478447.991071 P100 : 5250259.000000 COUNT : 263357 SUM : 26804347806
1795510082.130	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.table.sync.micros P50 : 26095.288115 P95 : 114758.620690 P99 : 367997.087379 P100 : 1249135.000000 COUNT : 17704 SUM : 672715703
1795510082.130	rocksdb.compaction.outfile.sync.micros P50 : 6352.692976 P95 : 13672.592799 P99 : 25529.640760 P100 : 1220057.000000 COUNT : 1633945 SUM : 13096852453
1795510082.130	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.manifest.file.sync.micros P50 : 487.971869 P95 : 748.103280 P99 : 266195.701541 P100 : 1204952.000000 COUNT : 218778 SUM : 1596129624
1795510082.130	rocksdb.table.open.io.micros P50 : 239.856738 P95 : 435.767817 P99 : 669.281475 P100 : 484672.000000 COUNT : 1683890 SUM : 587421292
1795510082.130	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.read.block.compaction.micros P50 : 46.141132 P95 : 122.818870 P99 : 228.107058 P100 : 1057708.000000 COUNT : 182091303 SUM : 12331627847
1795510082.130	rocksdb.read.block.get.micros P50 : 52.751736 P95 : 106.833887 P99 : 220.180270 P100 : 377930.000000 COUNT : 1683890 SUM : 115660006
1795510082.130	rocksdb.write.raw.block.micros P50 : 0.535377 P95 : 1.523280 P99 : 40.674093 P100 : 2102875.000000 COUNT : 187740161 SUM : 357025890
1795510082.130	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.numfiles.in.singlecompaction P50 : 5.836886 P95 : 9.583313 P99 : 9.925049 P100 : 50.000000 COUNT : 264057 SUM : 1645528
1795510082.130	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.db.write.stall P50 : 0.695984 P95 : 3867.115417 P99 : 17066.375009 P100 : 6055273.000000 COUNT : 23240023 SUM : 28908249285
1795510082.130	rocksdb.sst.read.micros P50 : 45.838157 P95 : 119.358541 P99 : 223.789987 P100 : 1057703.000000 COUNT : 188826863 SUM : 12605780768
1795510082.130	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.bytes.per.write P50 : 1127.299077 P95 : 3518.651502 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23262230 SUM : 32171162712
1795510082.130	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.db.flush.micros P50 : 53935.698448 P95 : 181212.851406 P99 : 402740.625000 P100 : 5359460.000000 COUNT : 17702 SUM : 1187563558
1795510082.130	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795510082.130	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1644828 SUM : 0
1795510082.130	
