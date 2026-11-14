1794634556.088	Initializing RocksDB Options from the specified file
1794634556.088	Initializing RocksDB Options from command-line flags
1794634563.770	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1794634563.770	Values:     1024 bytes each (512 bytes after compression)
1794634563.770	Entries:    11678215
1794634563.770	Prefix:    0 bytes
1794634563.770	Keys per prefix:    0
1794634563.770	RawSize:    11582.7 MB (estimated)
1794634563.770	FileSize:   5880.4 MB (estimated)
1794634563.770	Write rate: 0 bytes/second
1794634563.770	Read rate: 0 ops/second
1794634563.770	Compression: NoCompression
1794634563.770	Compression sampling rate: 0
1794634563.770	Memtablerep: SkipListFactory
1794634563.770	Perf Level: 1
1794634563.770	------------------------------------------------
1794634563.770	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1794670946.380	overwrite    :    6226.507 micros/op 641 ops/sec;    0.6 MB/s
1794670951.378	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794670951.382	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794670961.381	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794670971.381	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794670981.381	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794670991.382	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794671001.382	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794671011.383	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794671021.385	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794671031.386	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794671041.386	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794671051.386	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794671061.387	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794671071.387	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794671071.388	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794671071.388	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794671071.397	
1794671071.397	Level Files Size(MB)
1794671071.397	--------------------
1794671071.397	  0        0        0
1794671071.397	  1        6        2
1794671071.397	  2       62       25
1794671071.397	  3      599      250
1794671071.397	  4     5548     2500
1794671071.397	  5    25844    11771
1794671071.397	  6        0        0
1794671071.397	
1794671071.407	
1794671071.407	
1794671071.407	** Compaction Stats [default] **
1794671071.407	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794671071.407	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794671071.407	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.0      9.5   2485.87            484.92     12474    0.199     33K      8       0.0       0.0
1794671071.407	  L1      6/0    2.44 MB   1.0     38.7    23.0     15.7      38.7     23.0       0.0   1.7     11.1     11.1   3567.85           1638.46      6209    0.575     39M   7042       0.0       0.0
1794671071.407	  L2     62/0   24.56 MB   1.0    113.4    23.0     90.4     113.3     22.9       0.0   4.9      8.7      8.7  13385.29           5208.24     49093    0.273    115M    52K       0.0       0.0
1794671071.407	  L3    599/0   249.83 MB   1.0    147.9    22.9    125.0     147.4     22.4       0.0   6.4     10.0      9.9  15191.03           6576.54     51969    0.292    150M   524K       0.0       0.0
1794671071.407	  L4   5548/0    2.44 GB   1.0    149.7    22.4    127.3     144.8     17.4       0.0   6.5      9.3      9.0  16476.96           6891.94     51992    0.317    152M  5069K       0.0       0.0
1794671071.407	  L5  25844/0   11.49 GB   0.5     68.4    17.4     50.9      53.6      2.7       0.0   3.1     10.4      8.2   6725.80           2974.46     37119    0.181     69M    14M       0.0       0.0
1794671071.407	 Sum  32059/0   14.21 GB   0.0    518.1   108.7    409.4     520.9    111.4       0.0  22.7      9.2      9.2  57832.81          23774.57    208856    0.277    526M    20M       0.0       0.0
1794671071.407	 Int      0/0    0.00 KB   0.0      0.1     0.0      0.1       0.1      0.0       0.0 116411705.0     16.4     13.4      8.29              7.00        58    0.143    135K    25K       0.0       0.0
1794671071.407	
1794671071.407	** Compaction Stats [default] **
1794671071.407	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794671071.407	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794671071.407	 Low      0/0    0.00 KB   0.0    518.1   108.7    409.4     497.9     88.5       0.0   0.0      9.6      9.2  55350.21          23292.87    196386    0.282    526M    20M       0.0       0.0
1794671071.407	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0      9.5   2482.60            481.70     12469    0.199       0      0       0.0       0.0
1794671071.407	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    207.5      0.00              0.00         1    0.004       0      0       0.0       0.0
1794671071.407	
1794671071.407	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1794671071.407	
1794671071.407	Uptime(secs): 36515.3 total, 20.1 interval
1794671071.407	Flush(GB): cumulative 22.964, interval 0.000
1794671071.407	AddFile(GB): cumulative 0.000, interval 0.000
1794671071.407	AddFile(Total Files): cumulative 0, interval 0
1794671071.407	AddFile(L0 Files): cumulative 0, interval 0
1794671071.407	AddFile(Keys): cumulative 0, interval 0
1794671071.407	Cumulative compaction: 520.85 GB write, 14.61 MB/s write, 518.14 GB read, 14.53 MB/s read, 57832.8 seconds
1794671071.407	Interval compaction: 0.11 GB write, 5.51 MB/s write, 0.13 GB read, 6.77 MB/s read, 8.3 seconds
1794671071.407	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 234196 slowdown for pending_compaction_bytes, 9 memtable_compaction, 1 memtable_slowdown, interval 0 total count
1794671071.407	Block cache LRUCache@0x642cc068da70#38548 capacity: 8.00 MB collections: 203 last_copies: 1 last_secs: 7e-05 secs_since: 80
1794671071.407	Block cache entry stats(count,size,portion): Misc(3,8.34 KB,0.101852%)
1794671071.407	
1794671071.407	** File Read Latency Histogram By Level [default] **
1794671071.407	** Level 0 read latency histogram (micros):
1794671071.407	Count: 5901332 Average: 89.3286  StdDev: 506.43
1794671071.407	Min: 22  Median: 64.3666  Max: 571663
1794671071.407	Percentiles: P50: 64.37 P75: 91.18 P99: 375.73 P99.9: 1178.76 P99.99: 8714.35
1794671071.407	------------------------------------------------------
1794671071.407	(      15,      22 ]        2   0.000%   0.000% 
1794671071.407	(      22,      34 ]        7   0.000%   0.000% 
1794671071.407	(      34,      51 ]  1736235  29.421%  29.421% ######
1794671071.407	(      51,      76 ]  2271379  38.489%  67.910% ########
1794671071.407	(      76,     110 ]   936977  15.877%  83.788% ###
1794671071.407	(     110,     170 ]   593836  10.063%  93.851% ##
1794671071.407	(     170,     250 ]   217175   3.680%  97.531% #
1794671071.407	(     250,     380 ]    89652   1.519%  99.050% 
1794671071.407	(     380,     580 ]    32132   0.544%  99.594% 
1794671071.407	(     580,     870 ]    13769   0.233%  99.828% 
1794671071.407	(     870,    1300 ]     5942   0.101%  99.928% 
1794671071.407	(    1300,    1900 ]     1793   0.030%  99.959% 
1794671071.407	(    1900,    2900 ]      854   0.014%  99.973% 
1794671071.407	(    2900,    4400 ]      659   0.011%  99.984% 
1794671071.407	(    4400,    6600 ]      162   0.003%  99.987% 
1794671071.407	(    6600,    9900 ]      262   0.004%  99.992% 
1794671071.407	(    9900,   14000 ]      212   0.004%  99.995% 
1794671071.407	(   14000,   22000 ]       63   0.001%  99.996% 
1794671071.407	(   22000,   33000 ]       23   0.000%  99.997% 
1794671071.407	(   33000,   50000 ]       44   0.001%  99.997% 
1794671071.407	(   50000,   75000 ]       67   0.001%  99.999% 
1794671071.407	(   75000,  110000 ]       27   0.000%  99.999% 
1794671071.407	(  110000,  170000 ]       31   0.001% 100.000% 
1794671071.407	(  170000,  250000 ]        5   0.000% 100.000% 
1794671071.407	(  250000,  380000 ]       19   0.000% 100.000% 
1794671071.407	(  380000,  570000 ]        4   0.000% 100.000% 
1794671071.407	(  570000,  860000 ]        1   0.000% 100.000% 
1794671071.407	
1794671071.407	** Level 1 read latency histogram (micros):
1794671071.407	Count: 10231533 Average: 90.6330  StdDev: 255.36
1794671071.407	Min: 10  Median: 64.1065  Max: 950017
1794671071.407	Percentiles: P50: 64.11 P75: 90.15 P99: 373.56 P99.9: 1110.73 P99.99: 8896.16
1794671071.407	------------------------------------------------------
1794671071.407	(       6,      10 ]       11   0.000%   0.000% 
1794671071.407	(      10,      15 ]       81   0.001%   0.001% 
1794671071.408	(      15,      22 ]       33   0.000%   0.001% 
1794671071.408	(      22,      34 ]       46   0.000%   0.002% 
1794671071.408	(      34,      51 ]  3014138  29.459%  29.461% ######
1794671071.408	(      51,      76 ]  4008419  39.177%  68.638% ########
1794671071.408	(      76,     110 ]  1563657  15.283%  83.921% ###
1794671071.408	(     110,     170 ]   993020   9.705%  93.626% ##
1794671071.408	(     170,     250 ]   397893   3.889%  97.515% #
1794671071.408	(     250,     380 ]   159840   1.562%  99.077% 
1794671071.408	(     380,     580 ]    56417   0.551%  99.629% 
1794671071.408	(     580,     870 ]    22596   0.221%  99.850% 
1794671071.408	(     870,    1300 ]     9200   0.090%  99.940% 
1794671071.408	(    1300,    1900 ]     2617   0.026%  99.965% 
1794671071.408	(    1900,    2900 ]     1220   0.012%  99.977% 
1794671071.408	(    2900,    4400 ]      777   0.008%  99.985% 
1794671071.408	(    4400,    6600 ]      254   0.002%  99.987% 
1794671071.408	(    6600,    9900 ]      418   0.004%  99.991% 
1794671071.408	(    9900,   14000 ]      349   0.003%  99.995% 
1794671071.408	(   14000,   22000 ]      104   0.001%  99.996% 
1794671071.408	(   22000,   33000 ]       53   0.001%  99.996% 
1794671071.408	(   33000,   50000 ]      123   0.001%  99.997% 
1794671071.408	(   50000,   75000 ]      164   0.002%  99.999% 
1794671071.408	(   75000,  110000 ]       83   0.001% 100.000% 
1794671071.408	(  110000,  170000 ]       72   0.001% 100.001% 
1794671071.408	(  170000,  250000 ]       25   0.000% 100.001% 
1794671071.408	(  250000,  380000 ]       26   0.000% 100.001% 
1794671071.408	(  380000,  570000 ]        6   0.000% 100.001% 
1794671071.408	(  570000,  860000 ]        8   0.000% 100.001% 
1794671071.408	(  860000, 1200000 ]        4   0.000% 100.001% 
1794671071.408	
1794671071.408	** Level 2 read latency histogram (micros):
1794671071.408	Count: 30053273 Average: 92.3202  StdDev: 107.30
1794671071.408	Min: 10  Median: 65.1348  Max: 5086073
1794671071.408	Percentiles: P50: 65.13 P75: 93.67 P99: 371.60 P99.9: 1003.36 P99.99: 4064.40
1794671071.408	------------------------------------------------------
1794671071.408	(       6,      10 ]       65   0.000%   0.000% 
1794671071.408	(      10,      15 ]     1102   0.004%   0.004% 
1794671071.408	(      15,      22 ]      318   0.001%   0.005% 
1794671071.408	(      22,      34 ]      189   0.001%   0.006% 
1794671071.408	(      34,      51 ]  8494775  28.266%  28.271% ######
1794671071.408	(      51,      76 ] 11549836  38.431%  66.703% ########
1794671071.408	(      76,     110 ]  4798702  15.967%  82.670% ###
1794671071.408	(     110,     170 ]  3095136  10.299%  92.969% ##
1794671071.408	(     170,     250 ]  1300525   4.327%  97.296% #
1794671071.408	(     250,     380 ]   547471   1.822%  99.118% 
1794671071.408	(     380,     580 ]   170497   0.567%  99.685% 
1794671071.408	(     580,     870 ]    57722   0.192%  99.877% 
1794671071.408	(     870,    1300 ]    22189   0.074%  99.951% 
1794671071.408	(    1300,    1900 ]     6681   0.022%  99.973% 
1794671071.408	(    1900,    2900 ]     3348   0.011%  99.984% 
1794671071.408	(    2900,    4400 ]     2205   0.007%  99.992% 
1794671071.408	(    4400,    6600 ]      699   0.002%  99.994% 
1794671071.408	(    6600,    9900 ]     1015   0.003%  99.997% 
1794671071.408	(    9900,   14000 ]      834   0.003% 100.000% 
1794671071.408	(   14000,   22000 ]      379   0.001% 100.001% 
1794671071.408	(   22000,   33000 ]      174   0.001% 100.002% 
1794671071.408	(   33000,   50000 ]      347   0.001% 100.003% 
1794671071.408	(   50000,   75000 ]      587   0.002% 100.005% 
1794671071.408	(   75000,  110000 ]      292   0.001% 100.006% 
1794671071.408	(  110000,  170000 ]      164   0.001% 100.007% 
1794671071.408	(  170000,  250000 ]       50   0.000% 100.007% 
1794671071.408	(  250000,  380000 ]       87   0.000% 100.007% 
1794671071.408	(  380000,  570000 ]       33   0.000% 100.007% 
1794671071.408	(  570000,  860000 ]       14   0.000% 100.007% 
1794671071.408	(  860000, 1200000 ]        3   0.000% 100.007% 
1794671071.408	( 1200000, 1900000 ]        1   0.000% 100.007% 
1794671071.408	( 4300000, 6500000 ]        1   0.000% 100.007% 
1794671071.408	
1794671071.408	** Level 3 read latency histogram (micros):
1794671071.408	Count: 39114466 Average: 91.1671  StdDev: 65.77
1794671071.408	Min: 10  Median: 65.4431  Max: 5114245
1794671071.408	Percentiles: P50: 65.44 P75: 94.93 P99: 357.88 P99.9: 815.65 P99.99: 3440.73
1794671071.408	------------------------------------------------------
1794671071.408	(       6,      10 ]       60   0.000%   0.000% 
1794671071.408	(      10,      15 ]      838   0.002%   0.002% 
1794671071.408	(      15,      22 ]      222   0.001%   0.003% 
1794671071.408	(      22,      34 ]      211   0.001%   0.003% 
1794671071.408	(      34,      51 ] 11068096  28.297%  28.300% ######
1794671071.408	(      51,      76 ] 14691833  37.561%  65.861% ########
1794671071.408	(      76,     110 ]  6421045  16.416%  82.277% ###
1794671071.408	(     110,     170 ]  4082891  10.438%  92.716% ##
1794671071.408	(     170,     250 ]  1840995   4.707%  97.422% #
1794671071.408	(     250,     380 ]   743690   1.901%  99.324% 
1794671071.408	(     380,     580 ]   184109   0.471%  99.794% 
1794671071.408	(     580,     870 ]    50902   0.130%  99.924% 
1794671071.408	(     870,    1300 ]    16702   0.043%  99.967% 
1794671071.408	(    1300,    1900 ]     5136   0.013%  99.980% 
1794671071.408	(    1900,    2900 ]     3056   0.008%  99.988% 
1794671071.408	(    2900,    4400 ]     2132   0.005%  99.993% 
1794671071.408	(    4400,    6600 ]      800   0.002%  99.996% 
1794671071.408	(    6600,    9900 ]      992   0.003%  99.998% 
1794671071.408	(    9900,   14000 ]      735   0.002% 100.000% 
1794671071.408	(   14000,   22000 ]      375   0.001% 100.001% 
1794671071.408	(   22000,   33000 ]      206   0.001% 100.001% 
1794671071.408	(   33000,   50000 ]      488   0.001% 100.003% 
1794671071.408	(   50000,   75000 ]      677   0.002% 100.004% 
1794671071.408	(   75000,  110000 ]      387   0.001% 100.005% 
1794671071.408	(  110000,  170000 ]      232   0.001% 100.006% 
1794671071.408	(  170000,  250000 ]       49   0.000% 100.006% 
1794671071.408	(  250000,  380000 ]       92   0.000% 100.006% 
1794671071.408	(  380000,  570000 ]       18   0.000% 100.006% 
1794671071.408	(  570000,  860000 ]       23   0.000% 100.006% 
1794671071.408	(  860000, 1200000 ]        3   0.000% 100.006% 
1794671071.408	( 4300000, 6500000 ]        1   0.000% 100.006% 
1794671071.408	
1794671071.408	** Level 4 read latency histogram (micros):
1794671071.408	Count: 38321372 Average: 95.9012  StdDev: 65.38
1794671071.408	Min: 10  Median: 66.3585  Max: 1658810
1794671071.408	Percentiles: P50: 66.36 P75: 96.94 P99: 454.78 P99.9: 1149.98 P99.99: 3766.78
1794671071.408	------------------------------------------------------
1794671071.408	(       6,      10 ]       55   0.000%   0.000% 
1794671071.408	(      10,      15 ]      758   0.002%   0.002% 
1794671071.408	(      15,      22 ]      235   0.001%   0.003% 
1794671071.408	(      22,      34 ]      202   0.001%   0.003% 
1794671071.408	(      34,      51 ]  9868014  25.751%  25.754% #####
1794671071.408	(      51,      76 ] 15124213  39.467%  65.221% ########
1794671071.408	(      76,     110 ]  6086168  15.882%  81.103% ###
1794671071.408	(     110,     170 ]  4182469  10.914%  92.017% ##
1794671071.408	(     170,     250 ]  1792571   4.678%  96.695% #
1794671071.408	(     250,     380 ]   776324   2.026%  98.720% 
1794671071.408	(     380,     580 ]   286582   0.748%  99.468% 
1794671071.408	(     580,     870 ]   134771   0.352%  99.820% 
1794671071.408	(     870,    1300 ]    47133   0.123%  99.943% 
1794671071.408	(    1300,    1900 ]    11621   0.030%  99.973% 
1794671071.408	(    1900,    2900 ]     4855   0.013%  99.986% 
1794671071.408	(    2900,    4400 ]     2715   0.007%  99.993% 
1794671071.408	(    4400,    6600 ]     1077   0.003%  99.996% 
1794671071.408	(    6600,    9900 ]     1466   0.004% 100.000% 
1794671071.408	(    9900,   14000 ]     1208   0.003% 100.003% 
1794671071.408	(   14000,   22000 ]      415   0.001% 100.004% 
1794671071.408	(   22000,   33000 ]      216   0.001% 100.004% 
1794671071.408	(   33000,   50000 ]      406   0.001% 100.005% 
1794671071.408	(   50000,   75000 ]      699   0.002% 100.007% 
1794671071.408	(   75000,  110000 ]      274   0.001% 100.008% 
1794671071.408	(  110000,  170000 ]      247   0.001% 100.009% 
1794671071.408	(  170000,  250000 ]       52   0.000% 100.009% 
1794671071.408	(  250000,  380000 ]       87   0.000% 100.009% 
1794671071.408	(  380000,  570000 ]       24   0.000% 100.009% 
1794671071.408	(  570000,  860000 ]       25   0.000% 100.009% 
1794671071.408	(  860000, 1200000 ]        3   0.000% 100.009% 
1794671071.408	( 1200000, 1900000 ]        4   0.000% 100.009% 
1794671071.408	
1794671071.408	** Level 5 read latency histogram (micros):
1794671071.408	Count: 13590179 Average: 103.5752  StdDev: 184.13
1794671071.408	Min: 10  Median: 67.3324  Max: 1231852
1794671071.408	Percentiles: P50: 67.33 P75: 96.40 P99: 689.13 P99.9: 1687.67 P99.99: 5922.82
1794671071.408	------------------------------------------------------
1794671071.408	(       6,      10 ]       53   0.000%   0.000% 
1794671071.408	(      10,      15 ]      928   0.007%   0.007% 
1794671071.408	(      15,      22 ]      275   0.002%   0.009% 
1794671071.408	(      22,      34 ]      187   0.001%   0.011% 
1794671071.408	(      34,      51 ]  2615837  19.248%  19.259% ####
1794671071.408	(      51,      76 ]  6394989  47.056%  66.315% #########
1794671071.408	(      76,     110 ]  1967598  14.478%  80.793% ###
1794671071.408	(     110,     170 ]  1390338  10.230%  91.023% ##
1794671071.408	(     170,     250 ]   604874   4.451%  95.474% #
1794671071.408	(     250,     380 ]   289774   2.132%  97.606% 
1794671071.408	(     380,     580 ]   149833   1.103%  98.709% 
1794671071.408	(     580,     870 ]   105207   0.774%  99.483% 
1794671071.408	(     870,    1300 ]    48441   0.356%  99.839% 
1794671071.408	(    1300,    1900 ]    12776   0.094%  99.933% 
1794671071.408	(    1900,    2900 ]     5026   0.037%  99.970% 
1794671071.408	(    2900,    4400 ]     2115   0.016%  99.986% 
1794671071.408	(    4400,    6600 ]      822   0.006%  99.992% 
1794671071.408	(    6600,    9900 ]      631   0.005%  99.997% 
1794671071.408	(    9900,   14000 ]      323   0.002%  99.999% 
1794671071.408	(   14000,   22000 ]      153   0.001% 100.000% 
1794671071.408	(   22000,   33000 ]       75   0.001% 100.001% 
1794671071.408	(   33000,   50000 ]      148   0.001% 100.002% 
1794671071.408	(   50000,   75000 ]      263   0.002% 100.004% 
1794671071.408	(   75000,  110000 ]      140   0.001% 100.005% 
1794671071.408	(  110000,  170000 ]       80   0.001% 100.005% 
1794671071.408	(  170000,  250000 ]       18   0.000% 100.005% 
1794671071.408	(  250000,  380000 ]       31   0.000% 100.006% 
1794671071.408	(  380000,  570000 ]       11   0.000% 100.006% 
1794671071.408	(  570000,  860000 ]        2   0.000% 100.006% 
1794671071.408	( 1200000, 1900000 ]        1   0.000% 100.006% 
1794671071.408	
1794671071.408	
1794671071.408	** DB Stats **
1794671071.408	Uptime(secs): 36515.3 total, 20.1 interval
1794671071.408	Cumulative writes: 23M writes, 23M keys, 16M commit groups, 1.4 writes per commit group, ingest: 22.89 GB, 0.64 MB/s
1794671071.408	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.89 GB, 0.64 MB/s
1794671071.408	Cumulative stall: 09:16:44.157 H:M:S, 91.5 percent
1794671071.408	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1794671071.408	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1794671071.408	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1794671071.408	
1794671071.408	STATISTICS:
1794671071.408	rocksdb.block.cache.miss COUNT : 132332879
1794671071.408	rocksdb.block.cache.hit COUNT : 0
1794671071.408	rocksdb.block.cache.add COUNT : 0
1794671071.408	rocksdb.block.cache.add.failures COUNT : 0
1794671071.408	rocksdb.block.cache.index.miss COUNT : 0
1794671071.408	rocksdb.block.cache.index.hit COUNT : 0
1794671071.408	rocksdb.block.cache.index.add COUNT : 0
1794671071.408	rocksdb.block.cache.index.bytes.insert COUNT : 0
1794671071.408	rocksdb.block.cache.index.bytes.evict COUNT : 0
1794671071.408	rocksdb.block.cache.filter.miss COUNT : 0
1794671071.408	rocksdb.block.cache.filter.hit COUNT : 0
1794671071.408	rocksdb.block.cache.filter.add COUNT : 0
1794671071.408	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1794671071.408	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1794671071.408	rocksdb.block.cache.data.miss COUNT : 132332879
1794671071.408	rocksdb.block.cache.data.hit COUNT : 0
1794671071.408	rocksdb.block.cache.data.add COUNT : 0
1794671071.408	rocksdb.block.cache.data.bytes.insert COUNT : 0
1794671071.408	rocksdb.block.cache.bytes.read COUNT : 0
1794671071.408	rocksdb.block.cache.bytes.write COUNT : 0
1794671071.408	rocksdb.bloom.filter.useful COUNT : 0
1794671071.408	rocksdb.bloom.filter.full.positive COUNT : 0
1794671071.408	rocksdb.bloom.filter.full.true.positive COUNT : 0
1794671071.408	rocksdb.bloom.filter.micros COUNT : 0
1794671071.408	rocksdb.persistent.cache.hit COUNT : 0
1794671071.408	rocksdb.persistent.cache.miss COUNT : 0
1794671071.408	rocksdb.sim.block.cache.hit COUNT : 0
1794671071.408	rocksdb.sim.block.cache.miss COUNT : 0
1794671071.408	rocksdb.memtable.hit COUNT : 0
1794671071.408	rocksdb.memtable.miss COUNT : 0
1794671071.408	rocksdb.l0.hit COUNT : 0
1794671071.408	rocksdb.l1.hit COUNT : 0
1794671071.408	rocksdb.l2andup.hit COUNT : 0
1794671071.408	rocksdb.compaction.key.drop.new COUNT : 20598502
1794671071.408	rocksdb.compaction.key.drop.obsolete COUNT : 0
1794671071.408	rocksdb.compaction.key.drop.range_del COUNT : 0
1794671071.408	rocksdb.compaction.key.drop.user COUNT : 0
1794671071.408	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1794671071.408	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1794671071.408	rocksdb.compaction.cancelled COUNT : 0
1794671071.408	rocksdb.number.keys.written COUNT : 23356432
1794671071.408	rocksdb.number.keys.read COUNT : 0
1794671071.408	rocksdb.number.keys.updated COUNT : 0
1794671071.408	rocksdb.bytes.written COUNT : 24579953220
1794671071.408	rocksdb.bytes.read COUNT : 0
1794671071.408	rocksdb.number.db.seek COUNT : 0
1794671071.408	rocksdb.number.db.next COUNT : 0
1794671071.408	rocksdb.number.db.prev COUNT : 0
1794671071.408	rocksdb.number.db.seek.found COUNT : 0
1794671071.408	rocksdb.number.db.next.found COUNT : 0
1794671071.408	rocksdb.number.db.prev.found COUNT : 0
1794671071.408	rocksdb.db.iter.bytes.read COUNT : 0
1794671071.408	rocksdb.no.file.closes COUNT : 0
1794671071.408	rocksdb.no.file.opens COUNT : 1223012
1794671071.408	rocksdb.no.file.errors COUNT : 0
1794671071.408	rocksdb.l0.slowdown.micros COUNT : 0
1794671071.408	rocksdb.memtable.compaction.micros COUNT : 0
1794671071.408	rocksdb.l0.num.files.stall.micros COUNT : 0
1794671071.408	rocksdb.stall.micros COUNT : 33404156600
1794671071.408	rocksdb.db.mutex.wait.micros COUNT : 0
1794671071.408	rocksdb.rate.limit.delay.millis COUNT : 0
1794671071.408	rocksdb.num.iterators COUNT : 0
1794671071.408	rocksdb.number.multiget.get COUNT : 0
1794671071.408	rocksdb.number.multiget.keys.read COUNT : 0
1794671071.408	rocksdb.number.multiget.bytes.read COUNT : 0
1794671071.408	rocksdb.number.deletes.filtered COUNT : 0
1794671071.408	rocksdb.number.merge.failures COUNT : 0
1794671071.408	rocksdb.bloom.filter.prefix.checked COUNT : 0
1794671071.408	rocksdb.bloom.filter.prefix.useful COUNT : 0
1794671071.408	rocksdb.number.reseeks.iteration COUNT : 0
1794671071.408	rocksdb.getupdatessince.calls COUNT : 0
1794671071.408	rocksdb.block.cachecompressed.miss COUNT : 0
1794671071.408	rocksdb.block.cachecompressed.hit COUNT : 0
1794671071.408	rocksdb.block.cachecompressed.add COUNT : 0
1794671071.408	rocksdb.block.cachecompressed.add.failures COUNT : 0
1794671071.408	rocksdb.wal.synced COUNT : 0
1794671071.408	rocksdb.wal.bytes COUNT : 24579953220
1794671071.408	rocksdb.write.self COUNT : 16319851
1794671071.408	rocksdb.write.other COUNT : 7036581
1794671071.408	rocksdb.write.timeout COUNT : 0
1794671071.408	rocksdb.write.wal COUNT : 23356432
1794671071.408	rocksdb.compact.read.bytes COUNT : 556253361314
1794671071.408	rocksdb.compact.write.bytes COUNT : 534607023103
1794671071.408	rocksdb.flush.write.bytes COUNT : 24663166490
1794671071.408	rocksdb.compact.read.marked.bytes COUNT : 0
1794671071.408	rocksdb.compact.read.periodic.bytes COUNT : 0
1794671071.408	rocksdb.compact.read.ttl.bytes COUNT : 0
1794671071.408	rocksdb.compact.write.marked.bytes COUNT : 0
1794671071.408	rocksdb.compact.write.periodic.bytes COUNT : 0
1794671071.408	rocksdb.compact.write.ttl.bytes COUNT : 0
1794671071.408	rocksdb.number.direct.load.table.properties COUNT : 0
1794671071.408	rocksdb.number.superversion_acquires COUNT : 0
1794671071.408	rocksdb.number.superversion_releases COUNT : 0
1794671071.408	rocksdb.number.superversion_cleanups COUNT : 0
1794671071.408	rocksdb.number.block.compressed COUNT : 0
1794671071.408	rocksdb.number.block.decompressed COUNT : 0
1794671071.408	rocksdb.number.block.not_compressed COUNT : 0
1794671071.408	rocksdb.merge.operation.time.nanos COUNT : 0
1794671071.408	rocksdb.filter.operation.time.nanos COUNT : 0
1794671071.408	rocksdb.row.cache.hit COUNT : 0
1794671071.408	rocksdb.row.cache.miss COUNT : 0
1794671071.408	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1794671071.408	rocksdb.read.amp.total.read.bytes COUNT : 0
1794671071.408	rocksdb.number.rate_limiter.drains COUNT : 0
1794671071.408	rocksdb.number.iter.skip COUNT : 0
1794671071.408	rocksdb.blobdb.num.put COUNT : 0
1794671071.408	rocksdb.blobdb.num.write COUNT : 0
1794671071.408	rocksdb.blobdb.num.get COUNT : 0
1794671071.408	rocksdb.blobdb.num.multiget COUNT : 0
1794671071.408	rocksdb.blobdb.num.seek COUNT : 0
1794671071.408	rocksdb.blobdb.num.next COUNT : 0
1794671071.408	rocksdb.blobdb.num.prev COUNT : 0
1794671071.408	rocksdb.blobdb.num.keys.written COUNT : 0
1794671071.408	rocksdb.blobdb.num.keys.read COUNT : 0
1794671071.408	rocksdb.blobdb.bytes.written COUNT : 0
1794671071.408	rocksdb.blobdb.bytes.read COUNT : 0
1794671071.408	rocksdb.blobdb.write.inlined COUNT : 0
1794671071.408	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1794671071.408	rocksdb.blobdb.write.blob COUNT : 0
1794671071.408	rocksdb.blobdb.write.blob.ttl COUNT : 0
1794671071.408	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1794671071.408	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1794671071.408	rocksdb.blobdb.blob.file.synced COUNT : 0
1794671071.408	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1794671071.408	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1794671071.408	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1794671071.408	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1794671071.408	rocksdb.blobdb.gc.num.files COUNT : 0
1794671071.408	rocksdb.blobdb.gc.num.new.files COUNT : 0
1794671071.408	rocksdb.blobdb.gc.failures COUNT : 0
1794671071.408	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1794671071.408	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1794671071.408	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1794671071.408	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1794671071.408	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1794671071.408	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1794671071.409	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1794671071.409	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1794671071.409	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1794671071.409	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1794671071.409	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1794671071.409	rocksdb.txn.overhead.duplicate.key COUNT : 0
1794671071.409	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1794671071.409	rocksdb.txn.get.tryagain COUNT : 0
1794671071.409	rocksdb.number.multiget.keys.found COUNT : 0
1794671071.409	rocksdb.num.iterator.created COUNT : 0
1794671071.409	rocksdb.num.iterator.deleted COUNT : 0
1794671071.409	rocksdb.block.cache.compression.dict.miss COUNT : 0
1794671071.409	rocksdb.block.cache.compression.dict.hit COUNT : 0
1794671071.409	rocksdb.block.cache.compression.dict.add COUNT : 0
1794671071.409	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1794671071.409	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1794671071.409	rocksdb.block.cache.add.redundant COUNT : 0
1794671071.409	rocksdb.block.cache.index.add.redundant COUNT : 0
1794671071.409	rocksdb.block.cache.filter.add.redundant COUNT : 0
1794671071.409	rocksdb.block.cache.data.add.redundant COUNT : 0
1794671071.409	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1794671071.409	rocksdb.files.marked.trash COUNT : 0
1794671071.409	rocksdb.files.deleted.immediately COUNT : 1215973
1794671071.409	rocksdb.error.handler.bg.errro.count COUNT : 0
1794671071.409	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1794671071.409	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1794671071.409	rocksdb.error.handler.autoresume.count COUNT : 0
1794671071.409	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1794671071.409	rocksdb.error.handler.autoresume.success.count COUNT : 0
1794671071.409	rocksdb.memtable.payload.bytes.at.flush COUNT : 24475743416
1794671071.409	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1981768
1794671071.409	rocksdb.secondary.cache.hits COUNT : 0
1794671071.409	rocksdb.verify_checksum.read.bytes COUNT : 0
1794671071.409	rocksdb.backup.read.bytes COUNT : 0
1794671071.409	rocksdb.backup.write.bytes COUNT : 0
1794671071.409	rocksdb.remote.compact.read.bytes COUNT : 0
1794671071.409	rocksdb.remote.compact.write.bytes COUNT : 0
1794671071.409	rocksdb.hot.file.read.bytes COUNT : 0
1794671071.409	rocksdb.warm.file.read.bytes COUNT : 0
1794671071.409	rocksdb.cold.file.read.bytes COUNT : 0
1794671071.409	rocksdb.hot.file.read.count COUNT : 0
1794671071.409	rocksdb.warm.file.read.count COUNT : 0
1794671071.409	rocksdb.cold.file.read.count COUNT : 0
1794671071.409	rocksdb.last.level.read.bytes COUNT : 0
1794671071.409	rocksdb.last.level.read.count COUNT : 0
1794671071.409	rocksdb.non.last.level.read.bytes COUNT : 556448856283
1794671071.409	rocksdb.non.last.level.read.count COUNT : 137224927
1794671071.409	rocksdb.block.checksum.compute.count COUNT : 134778903
1794671071.409	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.db.write.micros P50 : 2527.270255 P95 : 20644.055555 P99 : 72790.362382 P100 : 11927219.000000 COUNT : 23356432 SUM : 145365269566
1794671071.409	rocksdb.compaction.times.micros P50 : 211980.088496 P95 : 769076.681974 P99 : 1118815.078175 P100 : 9734550.000000 COUNT : 196386 SUM : 55350206782
1794671071.409	rocksdb.compaction.times.cpu_micros P50 : 106150.970297 P95 : 239520.004427 P99 : 377699.695722 P100 : 7524710.000000 COUNT : 196386 SUM : 23292871901
1794671071.409	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.table.sync.micros P50 : 31278.393352 P95 : 74560.742972 P99 : 192555.555556 P100 : 1477827.000000 COUNT : 12470 SUM : 467537235
1794671071.409	rocksdb.compaction.outfile.sync.micros P50 : 7365.396136 P95 : 17638.575772 P99 : 33356.484848 P100 : 9399227.000000 COUNT : 1186018 SUM : 10091910568
1794671071.409	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.manifest.file.sync.micros P50 : 494.828393 P95 : 803.637646 P99 : 2364.358974 P100 : 643330.000000 COUNT : 150656 SUM : 169148364
1794671071.409	rocksdb.table.open.io.micros P50 : 281.441607 P95 : 557.449833 P99 : 1259.517095 P100 : 416423.000000 COUNT : 1223012 SUM : 492739318
1794671071.409	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.read.block.compaction.micros P50 : 67.264793 P95 : 218.563729 P99 : 422.296470 P100 : 5114434.000000 COUNT : 132332879 SUM : 12612678233
1794671071.409	rocksdb.read.block.get.micros P50 : 65.862904 P95 : 160.361068 P99 : 328.545245 P100 : 129983.000000 COUNT : 1223012 SUM : 107557869
1794671071.409	rocksdb.write.raw.block.micros P50 : 0.527235 P95 : 1.096714 P99 : 13.860500 P100 : 5574538.000000 COUNT : 136621600 SUM : 157608595
1794671071.409	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.numfiles.in.singlecompaction P50 : 5.698483 P95 : 9.570340 P99 : 9.924351 P100 : 57.000000 COUNT : 196925 SUM : 1191492
1794671071.409	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.db.write.stall P50 : 0.879672 P95 : 6554.820490 P99 : 21756.632399 P100 : 11922532.000000 COUNT : 16298031 SUM : 33406006273
1794671071.409	rocksdb.sst.read.micros P50 : 65.714963 P95 : 214.264292 P99 : 410.249649 P100 : 5114245.000000 COUNT : 137224927 SUM : 12882542779
1794671071.409	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.bytes.per.write P50 : 1161.759908 P95 : 3718.778496 P99 : 4188.000000 P100 : 4188.000000 COUNT : 16319851 SUM : 24579953220
1794671071.409	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.db.flush.micros P50 : 90481.236970 P95 : 645867.907801 P99 : 1032749.382716 P100 : 9363544.000000 COUNT : 12469 SUM : 2482596064
1794671071.409	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794671071.409	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1190953 SUM : 0
1794671071.409	
