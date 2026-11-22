1795314013.220	Initializing RocksDB Options from the specified file
1795314013.220	Initializing RocksDB Options from command-line flags
1795314027.075	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795314027.075	Values:     1024 bytes each (512 bytes after compression)
1795314027.075	Entries:    17191679
1795314027.075	Prefix:    0 bytes
1795314027.075	Keys per prefix:    0
1795314027.075	RawSize:    17051.1 MB (estimated)
1795314027.075	FileSize:   8656.7 MB (estimated)
1795314027.075	Write rate: 0 bytes/second
1795314027.075	Read rate: 0 ops/second
1795314027.075	Compression: NoCompression
1795314027.075	Compression sampling rate: 0
1795314027.075	Memtablerep: SkipListFactory
1795314027.075	Perf Level: 1
1795314027.075	------------------------------------------------
1795314027.075	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795359677.593	overwrite    :    5308.149 micros/op 753 ops/sec;    0.7 MB/s
1795359682.594	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795359682.594	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795359692.594	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795359702.610	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795359712.610	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795359722.610	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795359732.610	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795359742.610	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795359742.611	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795359742.611	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795359742.612	
1795359742.612	Level Files Size(MB)
1795359742.612	--------------------
1795359742.612	  0        1        2
1795359742.612	  1        5        2
1795359742.612	  2       60       25
1795359742.612	  3      602      250
1795359742.612	  4     5724     2500
1795359742.612	  5    36036    17326
1795359742.612	  6        0        0
1795359742.612	
1795359742.618	
1795359742.618	
1795359742.618	** Compaction Stats [default] **
1795359742.618	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795359742.618	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795359742.618	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     21.6   1605.32           1147.38     18404    0.087     14K      2       0.0       0.0
1795359742.618	  L1      5/0    2.12 MB   0.8     55.7    33.8     21.9      55.7     33.8       0.0   1.6     22.9     22.9   2486.91           2434.90      9190    0.271     56M   6773       0.0       0.0
1795359742.618	  L2     60/0   24.96 MB   1.0    166.8    33.8    133.0     166.8     33.8       0.0   4.9     22.2     22.2   7692.30           7520.42     72379    0.106    169M    51K       0.0       0.0
1795359742.618	  L3    602/0   249.96 MB   1.0    219.8    33.8    186.0     219.3     33.3       0.0   6.5     22.5     22.5   9993.92           9786.33     76595    0.130    223M   514K       0.0       0.0
1795359742.618	  L4   5724/0    2.44 GB   1.0    222.3    33.3    189.1     217.4     28.3       0.0   6.5     22.2     21.7  10259.74          10067.87     77119    0.133    225M  5048K       0.0       0.0
1795359742.618	  L5  36036/0   16.92 GB   0.7    145.0    28.3    116.7     119.4      2.7       0.0   4.2     24.1     19.9   6150.18           6031.21     62845    0.098    147M    26M       0.0       0.0
1795359742.618	 Sum  42428/0   19.63 GB   0.0    809.7   163.0    646.6     812.4    165.7       0.0  24.0     21.7     21.8  38188.36          36988.11    316532    0.121    822M    31M       0.0       0.0
1795359742.618	 Int      0/0    0.00 KB   0.0      0.7     0.1      0.6       0.6      0.0       0.0 665037369.0     23.8     20.2     31.38             31.26       249    0.126    741K   112K       0.0       0.0
1795359742.618	
1795359742.618	** Compaction Stats [default] **
1795359742.618	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795359742.618	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795359742.618	 Low      0/0    0.00 KB   0.0    809.7   163.0    646.6     778.6    131.9       0.0   0.0     22.7     21.8  36586.26          35843.89    298130    0.123    822M    31M       0.0       0.0
1795359742.618	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     21.6   1602.09           1144.22     18401    0.087       0      0       0.0       0.0
1795359742.618	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0     10.1      0.00              0.00         1    0.001       0      0       0.0       0.0
1795359742.618	
1795359742.618	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795359742.618	
1795359742.618	Uptime(secs): 45729.4 total, 45.1 interval
1795359742.618	Flush(GB): cumulative 33.807, interval 0.000
1795359742.618	AddFile(GB): cumulative 0.000, interval 0.000
1795359742.618	AddFile(Total Files): cumulative 0, interval 0
1795359742.618	AddFile(L0 Files): cumulative 0, interval 0
1795359742.618	AddFile(Keys): cumulative 0, interval 0
1795359742.618	Cumulative compaction: 812.37 GB write, 18.19 MB/s write, 809.66 GB read, 18.13 MB/s read, 38188.4 seconds
1795359742.618	Interval compaction: 0.62 GB write, 14.05 MB/s write, 0.73 GB read, 16.56 MB/s read, 31.4 seconds
1795359742.618	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 353984 slowdown for pending_compaction_bytes, 2 memtable_compaction, 2 memtable_slowdown, interval 124 total count
1795359742.618	Block cache LRUCache@0x64e3de83da70#73588 capacity: 8.00 MB collections: 254 last_copies: 2 last_secs: 6.1e-05 secs_since: 165
1795359742.618	Block cache entry stats(count,size,portion): Misc(3,8.36 KB,0.102043%)
1795359742.618	
1795359742.618	** File Read Latency Histogram By Level [default] **
1795359742.618	** Level 0 read latency histogram (micros):
1795359742.618	Count: 8678952 Average: 79.4116  StdDev: 464.83
1795359742.618	Min: 10  Median: 46.5061  Max: 862206
1795359742.618	Percentiles: P50: 46.51 P75: 72.58 P99: 232.60 P99.9: 468.77 P99.99: 3938.98
1795359742.618	------------------------------------------------------
1795359742.618	(       6,      10 ]        3   0.000%   0.000% 
1795359742.618	(      10,      15 ]        4   0.000%   0.000% 
1795359742.618	(      15,      22 ]       13   0.000%   0.000% 
1795359742.618	(      22,      34 ]        2   0.000%   0.000% 
1795359742.618	(      34,      51 ]  5898790  67.967%  67.967% ##############
1795359742.618	(      51,      76 ]   707017   8.146%  76.113% ##
1795359742.618	(      76,     110 ]  1533648  17.671%  93.784% ####
1795359742.618	(     110,     170 ]   349536   4.027%  97.811% #
1795359742.618	(     170,     250 ]   131818   1.519%  99.330% 
1795359742.618	(     250,     380 ]    45951   0.529%  99.860% 
1795359742.618	(     380,     580 ]     7865   0.091%  99.950% 
1795359742.618	(     580,     870 ]     1830   0.021%  99.971% 
1795359742.618	(     870,    1300 ]     1010   0.012%  99.983% 
1795359742.618	(    1300,    1900 ]      384   0.004%  99.988% 
1795359742.618	(    1900,    2900 ]      157   0.002%  99.989% 
1795359742.618	(    2900,    4400 ]       81   0.001%  99.990% 
1795359742.618	(    4400,    6600 ]       43   0.000%  99.991% 
1795359742.618	(    6600,    9900 ]       16   0.000%  99.991% 
1795359742.618	(    9900,   14000 ]        8   0.000%  99.991% 
1795359742.618	(   14000,   22000 ]        1   0.000%  99.991% 
1795359742.618	(   22000,   33000 ]        6   0.000%  99.991% 
1795359742.618	(   33000,   50000 ]        4   0.000%  99.991% 
1795359742.618	(   50000,   75000 ]       51   0.001%  99.992% 
1795359742.618	(   75000,  110000 ]      437   0.005%  99.997% 
1795359742.618	(  110000,  170000 ]       59   0.001%  99.997% 
1795359742.618	(  170000,  250000 ]       95   0.001%  99.999% 
1795359742.618	(  250000,  380000 ]       74   0.001%  99.999% 
1795359742.618	(  380000,  570000 ]       39   0.000% 100.000% 
1795359742.618	(  570000,  860000 ]        9   0.000% 100.000% 
1795359742.618	(  860000, 1200000 ]        1   0.000% 100.000% 
1795359742.618	
1795359742.618	** Level 1 read latency histogram (micros):
1795359742.618	Count: 14728294 Average: 91.3475  StdDev: 109.34
1795359742.618	Min: 7  Median: 46.4537  Max: 745040
1795359742.618	Percentiles: P50: 46.45 P75: 71.47 P99: 230.06 P99.9: 526.30 P99.99: 94687.20
1795359742.618	------------------------------------------------------
1795359742.618	(       6,      10 ]       66   0.000%   0.000% 
1795359742.618	(      10,      15 ]       37   0.000%   0.001% 
1795359742.618	(      15,      22 ]       52   0.000%   0.001% 
1795359742.618	(      22,      34 ]       11   0.000%   0.001% 
1795359742.618	(      34,      51 ] 10052224  68.251%  68.252% ##############
1795359742.618	(      51,      76 ]  1213722   8.241%  76.493% ##
1795359742.618	(      76,     110 ]  2565892  17.422%  93.915% ###
1795359742.618	(     110,     170 ]   583217   3.960%  97.874% #
1795359742.618	(     170,     250 ]   220833   1.499%  99.374% 
1795359742.618	(     250,     380 ]    67036   0.455%  99.829% 
1795359742.618	(     380,     580 ]    14321   0.097%  99.926% 
1795359742.618	(     580,     870 ]     4377   0.030%  99.956% 
1795359742.618	(     870,    1300 ]     1803   0.012%  99.968% 
1795359742.618	(    1300,    1900 ]     1162   0.008%  99.976% 
1795359742.618	(    1900,    2900 ]      337   0.002%  99.978% 
1795359742.618	(    2900,    4400 ]      173   0.001%  99.979% 
1795359742.618	(    4400,    6600 ]       55   0.000%  99.980% 
1795359742.618	(    6600,    9900 ]       27   0.000%  99.980% 
1795359742.618	(    9900,   14000 ]       11   0.000%  99.980% 
1795359742.618	(   14000,   22000 ]        6   0.000%  99.980% 
1795359742.618	(   22000,   33000 ]        4   0.000%  99.980% 
1795359742.618	(   33000,   50000 ]       31   0.000%  99.980% 
1795359742.618	(   50000,   75000 ]      311   0.002%  99.982% 
1795359742.618	(   75000,  110000 ]     1979   0.013%  99.996% 
1795359742.618	(  110000,  170000 ]      128   0.001%  99.997% 
1795359742.618	(  170000,  250000 ]      290   0.002%  99.999% 
1795359742.618	(  250000,  380000 ]      126   0.001% 100.000% 
1795359742.618	(  380000,  570000 ]       73   0.000% 100.000% 
1795359742.618	(  570000,  860000 ]       30   0.000% 100.000% 
1795359742.618	
1795359742.618	** Level 2 read latency histogram (micros):
1795359742.618	Count: 44227093 Average: 80.6325  StdDev: 66.38
1795359742.618	Min: 5  Median: 46.6573  Max: 1286819
1795359742.618	Percentiles: P50: 46.66 P75: 73.92 P99: 234.05 P99.9: 410.44 P99.99: 3241.73
1795359742.618	------------------------------------------------------
1795359742.618	(       4,       6 ]       27   0.000%   0.000% 
1795359742.618	(       6,      10 ]     1366   0.003%   0.003% 
1795359742.618	(      10,      15 ]     1249   0.003%   0.006% 
1795359742.618	(      15,      22 ]      281   0.001%   0.007% 
1795359742.618	(      22,      34 ]      101   0.000%   0.007% 
1795359742.618	(      34,      51 ] 29696725  67.146%  67.153% #############
1795359742.618	(      51,      76 ]  3785815   8.560%  75.713% ##
1795359742.618	(      76,     110 ]  7902459  17.868%  93.581% ####
1795359742.618	(     110,     170 ]  1794298   4.057%  97.638% #
1795359742.618	(     170,     250 ]   752589   1.702%  99.339% 
1795359742.618	(     250,     380 ]   242985   0.549%  99.889% 
1795359742.618	(     380,     580 ]    32663   0.074%  99.963% 
1795359742.618	(     580,     870 ]     7017   0.016%  99.978% 
1795359742.618	(     870,    1300 ]     2807   0.006%  99.985% 
1795359742.618	(    1300,    1900 ]     1513   0.003%  99.988% 
1795359742.618	(    1900,    2900 ]      655   0.001%  99.990% 
1795359742.618	(    2900,    4400 ]      528   0.001%  99.991% 
1795359742.618	(    4400,    6600 ]      165   0.000%  99.991% 
1795359742.618	(    6600,    9900 ]       96   0.000%  99.992% 
1795359742.618	(    9900,   14000 ]       14   0.000%  99.992% 
1795359742.618	(   14000,   22000 ]       12   0.000%  99.992% 
1795359742.618	(   22000,   33000 ]       10   0.000%  99.992% 
1795359742.618	(   33000,   50000 ]       44   0.000%  99.992% 
1795359742.618	(   50000,   75000 ]      319   0.001%  99.992% 
1795359742.618	(   75000,  110000 ]     2921   0.007%  99.999% 
1795359742.618	(  110000,  170000 ]      290   0.001% 100.000% 
1795359742.618	(  170000,  250000 ]      496   0.001% 100.001% 
1795359742.618	(  250000,  380000 ]      314   0.001% 100.002% 
1795359742.618	(  380000,  570000 ]      168   0.000% 100.002% 
1795359742.618	(  570000,  860000 ]       40   0.000% 100.002% 
1795359742.618	( 1200000, 1900000 ]        1   0.000% 100.002% 
1795359742.618	
1795359742.618	** Level 3 read latency histogram (micros):
1795359742.618	Count: 58178291 Average: 80.5567  StdDev: 62.09
1795359742.618	Min: 6  Median: 46.6998  Max: 861942
1795359742.618	Percentiles: P50: 46.70 P75: 75.52 P99: 230.40 P99.9: 378.04 P99.99: 2897.73
1795359742.619	------------------------------------------------------
1795359742.619	(       4,       6 ]       46   0.000%   0.000% 
1795359742.619	(       6,      10 ]     1904   0.003%   0.003% 
1795359742.619	(      10,      15 ]     1644   0.003%   0.006% 
1795359742.619	(      15,      22 ]      482   0.001%   0.007% 
1795359742.619	(      22,      34 ]      144   0.000%   0.007% 
1795359742.619	(      34,      51 ] 38933212  66.921%  66.928% #############
1795359742.619	(      51,      76 ]  4787594   8.229%  75.157% ##
1795359742.619	(      76,     110 ] 10704472  18.399%  93.556% ####
1795359742.619	(     110,     170 ]  2426851   4.171%  97.728% #
1795359742.619	(     170,     250 ]   980308   1.685%  99.413% 
1795359742.619	(     250,     380 ]   287786   0.495%  99.907% 
1795359742.619	(     380,     580 ]    35158   0.060%  99.968% 
1795359742.619	(     580,     870 ]     7533   0.013%  99.981% 
1795359742.619	(     870,    1300 ]     2995   0.005%  99.986% 
1795359742.619	(    1300,    1900 ]     1539   0.003%  99.989% 
1795359742.619	(    1900,    2900 ]      807   0.001%  99.990% 
1795359742.619	(    2900,    4400 ]      753   0.001%  99.991% 
1795359742.619	(    4400,    6600 ]      281   0.000%  99.992% 
1795359742.619	(    6600,    9900 ]      147   0.000%  99.992% 
1795359742.619	(    9900,   14000 ]       46   0.000%  99.992% 
1795359742.619	(   14000,   22000 ]       18   0.000%  99.992% 
1795359742.619	(   22000,   33000 ]       12   0.000%  99.992% 
1795359742.619	(   33000,   50000 ]       40   0.000%  99.992% 
1795359742.619	(   50000,   75000 ]      315   0.001%  99.993% 
1795359742.619	(   75000,  110000 ]     3697   0.006%  99.999% 
1795359742.619	(  110000,  170000 ]      315   0.001% 100.000% 
1795359742.619	(  170000,  250000 ]      740   0.001% 100.001% 
1795359742.619	(  250000,  380000 ]      436   0.001% 100.002% 
1795359742.619	(  380000,  570000 ]      212   0.000% 100.002% 
1795359742.619	(  570000,  860000 ]       68   0.000% 100.002% 
1795359742.619	(  860000, 1200000 ]        1   0.000% 100.002% 
1795359742.619	
1795359742.619	** Level 4 read latency histogram (micros):
1795359742.619	Count: 57595622 Average: 81.2253  StdDev: 34.01
1795359742.619	Min: 5  Median: 46.7200  Max: 863222
1795359742.619	Percentiles: P50: 46.72 P75: 75.68 P99: 229.26 P99.9: 377.68 P99.99: 3430.57
1795359742.619	------------------------------------------------------
1795359742.619	(       4,       6 ]       33   0.000%   0.000% 
1795359742.619	(       6,      10 ]     1388   0.002%   0.002% 
1795359742.619	(      10,      15 ]     1096   0.002%   0.004% 
1795359742.619	(      15,      22 ]      330   0.001%   0.005% 
1795359742.619	(      22,      34 ]      115   0.000%   0.005% 
1795359742.619	(      34,      51 ] 38483646  66.817%  66.822% #############
1795359742.619	(      51,      76 ]  4772013   8.285%  75.107% ##
1795359742.619	(      76,     110 ] 10627395  18.452%  93.559% ####
1795359742.619	(     110,     170 ]  2427882   4.215%  97.775% #
1795359742.619	(     170,     250 ]   952720   1.654%  99.429% 
1795359742.619	(     250,     380 ]   276332   0.480%  99.909% 
1795359742.619	(     380,     580 ]    33507   0.058%  99.967% 
1795359742.619	(     580,     870 ]     7052   0.012%  99.979% 
1795359742.619	(     870,    1300 ]     3323   0.006%  99.985% 
1795359742.619	(    1300,    1900 ]     1829   0.003%  99.988% 
1795359742.619	(    1900,    2900 ]      974   0.002%  99.990% 
1795359742.619	(    2900,    4400 ]      643   0.001%  99.991% 
1795359742.619	(    4400,    6600 ]      311   0.001%  99.991% 
1795359742.619	(    6600,    9900 ]      153   0.000%  99.992% 
1795359742.619	(    9900,   14000 ]       43   0.000%  99.992% 
1795359742.619	(   14000,   22000 ]        8   0.000%  99.992% 
1795359742.619	(   22000,   33000 ]       17   0.000%  99.992% 
1795359742.619	(   33000,   50000 ]       49   0.000%  99.992% 
1795359742.619	(   50000,   75000 ]      317   0.001%  99.992% 
1795359742.619	(   75000,  110000 ]     3664   0.006%  99.999% 
1795359742.619	(  110000,  170000 ]      442   0.001%  99.999% 
1795359742.619	(  170000,  250000 ]      682   0.001% 100.001% 
1795359742.619	(  250000,  380000 ]      481   0.001% 100.001% 
1795359742.619	(  380000,  570000 ]      203   0.000% 100.002% 
1795359742.619	(  570000,  860000 ]       82   0.000% 100.002% 
1795359742.619	(  860000, 1200000 ]        1   0.000% 100.002% 
1795359742.619	
1795359742.619	** Level 5 read latency histogram (micros):
1795359742.619	Count: 31002935 Average: 75.8405  StdDev: 70.49
1795359742.619	Min: 6  Median: 46.2651  Max: 761819
1795359742.619	Percentiles: P50: 46.27 P75: 66.77 P99: 227.53 P99.9: 378.23 P99.99: 3656.55
1795359742.619	------------------------------------------------------
1795359742.619	(       4,       6 ]       21   0.000%   0.000% 
1795359742.619	(       6,      10 ]      954   0.003%   0.003% 
1795359742.619	(      10,      15 ]      755   0.002%   0.006% 
1795359742.619	(      15,      22 ]      175   0.001%   0.006% 
1795359742.619	(      22,      34 ]       51   0.000%   0.006% 
1795359742.619	(      34,      51 ] 21483015  69.293%  69.300% ##############
1795359742.619	(      51,      76 ]  2802249   9.039%  78.338% ##
1795359742.619	(      76,     110 ]  4978824  16.059%  94.398% ###
1795359742.619	(     110,     170 ]  1075887   3.470%  97.868% #
1795359742.619	(     170,     250 ]   488017   1.574%  99.442% 
1795359742.619	(     250,     380 ]   143947   0.464%  99.906% 
1795359742.619	(     380,     580 ]    16819   0.054%  99.961% 
1795359742.619	(     580,     870 ]     4271   0.014%  99.974% 
1795359742.619	(     870,    1300 ]     2411   0.008%  99.982% 
1795359742.619	(    1300,    1900 ]     1003   0.003%  99.985% 
1795359742.619	(    1900,    2900 ]      950   0.003%  99.988% 
1795359742.619	(    2900,    4400 ]      963   0.003%  99.992% 
1795359742.619	(    4400,    6600 ]      530   0.002%  99.993% 
1795359742.619	(    6600,    9900 ]      260   0.001%  99.994% 
1795359742.619	(    9900,   14000 ]       81   0.000%  99.994% 
1795359742.619	(   14000,   22000 ]        4   0.000%  99.994% 
1795359742.619	(   22000,   33000 ]        5   0.000%  99.994% 
1795359742.619	(   33000,   50000 ]        3   0.000%  99.994% 
1795359742.619	(   50000,   75000 ]        4   0.000%  99.994% 
1795359742.619	(   75000,  110000 ]     1244   0.004%  99.998% 
1795359742.619	(  110000,  170000 ]      208   0.001%  99.999% 
1795359742.619	(  170000,  250000 ]      310   0.001% 100.000% 
1795359742.619	(  250000,  380000 ]      257   0.001% 100.001% 
1795359742.619	(  380000,  570000 ]      108   0.000% 100.001% 
1795359742.619	(  570000,  860000 ]       19   0.000% 100.001% 
1795359742.619	
1795359742.619	
1795359742.619	** DB Stats **
1795359742.619	Uptime(secs): 45729.4 total, 45.1 interval
1795359742.619	Cumulative writes: 34M writes, 34M keys, 25M commit groups, 1.4 writes per commit group, ingest: 33.71 GB, 0.75 MB/s
1795359742.619	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.71 GB, 0.75 MB/s
1795359742.619	Cumulative stall: 10:45:52.161 H:M:S, 84.7 percent
1795359742.619	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795359742.619	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795359742.619	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795359742.619	
1795359742.619	STATISTICS:
1795359742.619	rocksdb.block.cache.miss COUNT : 206782698
1795359742.619	rocksdb.block.cache.hit COUNT : 0
1795359742.619	rocksdb.block.cache.add COUNT : 0
1795359742.619	rocksdb.block.cache.add.failures COUNT : 0
1795359742.619	rocksdb.block.cache.index.miss COUNT : 0
1795359742.619	rocksdb.block.cache.index.hit COUNT : 0
1795359742.619	rocksdb.block.cache.index.add COUNT : 0
1795359742.619	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795359742.619	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795359742.619	rocksdb.block.cache.filter.miss COUNT : 0
1795359742.619	rocksdb.block.cache.filter.hit COUNT : 0
1795359742.619	rocksdb.block.cache.filter.add COUNT : 0
1795359742.619	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795359742.619	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795359742.619	rocksdb.block.cache.data.miss COUNT : 206782698
1795359742.619	rocksdb.block.cache.data.hit COUNT : 0
1795359742.619	rocksdb.block.cache.data.add COUNT : 0
1795359742.619	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795359742.619	rocksdb.block.cache.bytes.read COUNT : 0
1795359742.619	rocksdb.block.cache.bytes.write COUNT : 0
1795359742.619	rocksdb.bloom.filter.useful COUNT : 0
1795359742.619	rocksdb.bloom.filter.full.positive COUNT : 0
1795359742.619	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795359742.619	rocksdb.bloom.filter.micros COUNT : 0
1795359742.619	rocksdb.persistent.cache.hit COUNT : 0
1795359742.619	rocksdb.persistent.cache.miss COUNT : 0
1795359742.619	rocksdb.sim.block.cache.hit COUNT : 0
1795359742.619	rocksdb.sim.block.cache.miss COUNT : 0
1795359742.619	rocksdb.memtable.hit COUNT : 0
1795359742.619	rocksdb.memtable.miss COUNT : 0
1795359742.620	rocksdb.l0.hit COUNT : 0
1795359742.620	rocksdb.l1.hit COUNT : 0
1795359742.620	rocksdb.l2andup.hit COUNT : 0
1795359742.620	rocksdb.compaction.key.drop.new COUNT : 31624092
1795359742.620	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795359742.620	rocksdb.compaction.key.drop.range_del COUNT : 0
1795359742.620	rocksdb.compaction.key.drop.user COUNT : 0
1795359742.620	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795359742.620	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795359742.620	rocksdb.compaction.cancelled COUNT : 0
1795359742.620	rocksdb.number.keys.written COUNT : 34383360
1795359742.620	rocksdb.number.keys.read COUNT : 0
1795359742.620	rocksdb.number.keys.updated COUNT : 0
1795359742.620	rocksdb.bytes.written COUNT : 36200841600
1795359742.620	rocksdb.bytes.read COUNT : 0
1795359742.620	rocksdb.number.db.seek COUNT : 0
1795359742.620	rocksdb.number.db.next COUNT : 0
1795359742.620	rocksdb.number.db.prev COUNT : 0
1795359742.620	rocksdb.number.db.seek.found COUNT : 0
1795359742.620	rocksdb.number.db.next.found COUNT : 0
1795359742.620	rocksdb.number.db.prev.found COUNT : 0
1795359742.620	rocksdb.db.iter.bytes.read COUNT : 0
1795359742.620	rocksdb.no.file.closes COUNT : 0
1795359742.620	rocksdb.no.file.opens COUNT : 1908319
1795359742.620	rocksdb.no.file.errors COUNT : 0
1795359742.620	rocksdb.l0.slowdown.micros COUNT : 0
1795359742.620	rocksdb.memtable.compaction.micros COUNT : 0
1795359742.620	rocksdb.l0.num.files.stall.micros COUNT : 0
1795359742.620	rocksdb.stall.micros COUNT : 38752161384
1795359742.620	rocksdb.db.mutex.wait.micros COUNT : 0
1795359742.620	rocksdb.rate.limit.delay.millis COUNT : 0
1795359742.620	rocksdb.num.iterators COUNT : 0
1795359742.620	rocksdb.number.multiget.get COUNT : 0
1795359742.620	rocksdb.number.multiget.keys.read COUNT : 0
1795359742.620	rocksdb.number.multiget.bytes.read COUNT : 0
1795359742.620	rocksdb.number.deletes.filtered COUNT : 0
1795359742.620	rocksdb.number.merge.failures COUNT : 0
1795359742.620	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795359742.620	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795359742.620	rocksdb.number.reseeks.iteration COUNT : 0
1795359742.620	rocksdb.getupdatessince.calls COUNT : 0
1795359742.620	rocksdb.block.cachecompressed.miss COUNT : 0
1795359742.620	rocksdb.block.cachecompressed.hit COUNT : 0
1795359742.620	rocksdb.block.cachecompressed.add COUNT : 0
1795359742.620	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795359742.620	rocksdb.wal.synced COUNT : 0
1795359742.620	rocksdb.wal.bytes COUNT : 36200841600
1795359742.620	rocksdb.write.self COUNT : 25384480
1795359742.620	rocksdb.write.other COUNT : 8998880
1795359742.620	rocksdb.write.timeout COUNT : 0
1795359742.620	rocksdb.write.wal COUNT : 34383360
1795359742.620	rocksdb.compact.read.bytes COUNT : 869210472243
1795359742.620	rocksdb.compact.write.bytes COUNT : 835976088237
1795359742.620	rocksdb.flush.write.bytes COUNT : 36307105145
1795359742.620	rocksdb.compact.read.marked.bytes COUNT : 0
1795359742.620	rocksdb.compact.read.periodic.bytes COUNT : 0
1795359742.620	rocksdb.compact.read.ttl.bytes COUNT : 0
1795359742.620	rocksdb.compact.write.marked.bytes COUNT : 0
1795359742.620	rocksdb.compact.write.periodic.bytes COUNT : 0
1795359742.620	rocksdb.compact.write.ttl.bytes COUNT : 0
1795359742.620	rocksdb.number.direct.load.table.properties COUNT : 0
1795359742.620	rocksdb.number.superversion_acquires COUNT : 0
1795359742.620	rocksdb.number.superversion_releases COUNT : 0
1795359742.620	rocksdb.number.superversion_cleanups COUNT : 0
1795359742.620	rocksdb.number.block.compressed COUNT : 0
1795359742.620	rocksdb.number.block.decompressed COUNT : 0
1795359742.620	rocksdb.number.block.not_compressed COUNT : 0
1795359742.620	rocksdb.merge.operation.time.nanos COUNT : 0
1795359742.620	rocksdb.filter.operation.time.nanos COUNT : 0
1795359742.620	rocksdb.row.cache.hit COUNT : 0
1795359742.620	rocksdb.row.cache.miss COUNT : 0
1795359742.620	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795359742.620	rocksdb.read.amp.total.read.bytes COUNT : 0
1795359742.620	rocksdb.number.rate_limiter.drains COUNT : 0
1795359742.620	rocksdb.number.iter.skip COUNT : 0
1795359742.620	rocksdb.blobdb.num.put COUNT : 0
1795359742.620	rocksdb.blobdb.num.write COUNT : 0
1795359742.620	rocksdb.blobdb.num.get COUNT : 0
1795359742.620	rocksdb.blobdb.num.multiget COUNT : 0
1795359742.620	rocksdb.blobdb.num.seek COUNT : 0
1795359742.620	rocksdb.blobdb.num.next COUNT : 0
1795359742.620	rocksdb.blobdb.num.prev COUNT : 0
1795359742.620	rocksdb.blobdb.num.keys.written COUNT : 0
1795359742.620	rocksdb.blobdb.num.keys.read COUNT : 0
1795359742.620	rocksdb.blobdb.bytes.written COUNT : 0
1795359742.620	rocksdb.blobdb.bytes.read COUNT : 0
1795359742.620	rocksdb.blobdb.write.inlined COUNT : 0
1795359742.620	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795359742.620	rocksdb.blobdb.write.blob COUNT : 0
1795359742.620	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795359742.620	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795359742.620	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795359742.620	rocksdb.blobdb.blob.file.synced COUNT : 0
1795359742.620	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795359742.620	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795359742.620	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795359742.620	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795359742.620	rocksdb.blobdb.gc.num.files COUNT : 0
1795359742.620	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795359742.620	rocksdb.blobdb.gc.failures COUNT : 0
1795359742.620	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795359742.620	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795359742.620	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795359742.620	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795359742.620	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795359742.620	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795359742.620	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795359742.620	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795359742.620	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795359742.620	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795359742.620	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795359742.620	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795359742.620	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795359742.620	rocksdb.txn.get.tryagain COUNT : 0
1795359742.620	rocksdb.number.multiget.keys.found COUNT : 0
1795359742.620	rocksdb.num.iterator.created COUNT : 0
1795359742.620	rocksdb.num.iterator.deleted COUNT : 0
1795359742.620	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795359742.620	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795359742.620	rocksdb.block.cache.compression.dict.add COUNT : 0
1795359742.620	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795359742.620	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795359742.620	rocksdb.block.cache.add.redundant COUNT : 0
1795359742.620	rocksdb.block.cache.index.add.redundant COUNT : 0
1795359742.620	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795359742.620	rocksdb.block.cache.data.add.redundant COUNT : 0
1795359742.620	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795359742.620	rocksdb.files.marked.trash COUNT : 0
1795359742.620	rocksdb.files.deleted.immediately COUNT : 1902745
1795359742.620	rocksdb.error.handler.bg.errro.count COUNT : 0
1795359742.620	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795359742.620	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795359742.620	rocksdb.error.handler.autoresume.count COUNT : 0
1795359742.620	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795359742.620	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795359742.620	rocksdb.memtable.payload.bytes.at.flush COUNT : 36032867336
1795359742.620	rocksdb.memtable.garbage.bytes.at.flush COUNT : 2000632
1795359742.620	rocksdb.secondary.cache.hits COUNT : 0
1795359742.620	rocksdb.verify_checksum.read.bytes COUNT : 0
1795359742.620	rocksdb.backup.read.bytes COUNT : 0
1795359742.620	rocksdb.backup.write.bytes COUNT : 0
1795359742.620	rocksdb.remote.compact.read.bytes COUNT : 0
1795359742.620	rocksdb.remote.compact.write.bytes COUNT : 0
1795359742.620	rocksdb.hot.file.read.bytes COUNT : 0
1795359742.620	rocksdb.warm.file.read.bytes COUNT : 0
1795359742.620	rocksdb.cold.file.read.bytes COUNT : 0
1795359742.620	rocksdb.hot.file.read.count COUNT : 0
1795359742.620	rocksdb.warm.file.read.count COUNT : 0
1795359742.620	rocksdb.cold.file.read.count COUNT : 0
1795359742.620	rocksdb.last.level.read.bytes COUNT : 0
1795359742.620	rocksdb.last.level.read.count COUNT : 0
1795359742.620	rocksdb.non.last.level.read.bytes COUNT : 869498062337
1795359742.620	rocksdb.non.last.level.read.count COUNT : 214415974
1795359742.620	rocksdb.block.checksum.compute.count COUNT : 210599336
1795359742.620	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.db.write.micros P50 : 2023.689049 P95 : 21135.286203 P99 : 74253.278267 P100 : 10270975.000000 COUNT : 34383359 SUM : 182439887819
1795359742.620	rocksdb.compaction.times.micros P50 : 97213.871053 P95 : 297575.052854 P99 : 767895.179124 P100 : 8629639.000000 COUNT : 298130 SUM : 36586263545
1795359742.620	rocksdb.compaction.times.cpu_micros P50 : 95533.264178 P95 : 288900.778210 P99 : 758803.767898 P100 : 8621705.000000 COUNT : 298130 SUM : 35843892274
1795359742.620	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.table.sync.micros P50 : 29543.817334 P95 : 295048.979592 P99 : 728446.153846 P100 : 2349975.000000 COUNT : 18402 SUM : 1122016851
1795359742.620	rocksdb.compaction.outfile.sync.micros P50 : 6685.263244 P95 : 13823.005626 P99 : 28856.063957 P100 : 2409002.000000 COUNT : 1853602 SUM : 17352973076
1795359742.620	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.manifest.file.sync.micros P50 : 490.433845 P95 : 14633.898305 P99 : 470887.549478 P100 : 4305085.000000 COUNT : 230365 SUM : 3112051648
1795359742.620	rocksdb.table.open.io.micros P50 : 245.686299 P95 : 457.187791 P99 : 614.887612 P100 : 871287.000000 COUNT : 1908319 SUM : 809491385
1795359742.620	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.read.block.compaction.micros P50 : 47.292189 P95 : 132.573096 P99 : 234.554492 P100 : 1286836.000000 COUNT : 206782698 SUM : 16914263028
1795359742.620	rocksdb.read.block.get.micros P50 : 60.864317 P95 : 109.458026 P99 : 221.443453 P100 : 531817.000000 COUNT : 1908319 SUM : 146174390
1795359742.620	rocksdb.write.raw.block.micros P50 : 0.548024 P95 : 1.735296 P99 : 45.555754 P100 : 1941049.000000 COUNT : 213092119 SUM : 458441258
1795359742.620	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.numfiles.in.singlecompaction P50 : 5.788632 P95 : 9.574397 P99 : 9.924171 P100 : 44.000000 COUNT : 298884 SUM : 1866645
1795359742.620	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.db.write.stall P50 : 0.756763 P95 : 4304.612995 P99 : 19372.984103 P100 : 10267669.000000 COUNT : 25363402 SUM : 38755695149
1795359742.620	rocksdb.sst.read.micros P50 : 46.607072 P95 : 129.080205 P99 : 230.619869 P100 : 1286819.000000 COUNT : 214415974 SUM : 17317616347
1795359742.620	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.bytes.per.write P50 : 1132.787786 P95 : 3642.250709 P99 : 4188.000000 P100 : 4188.000000 COUNT : 25384480 SUM : 36200841600
1795359742.620	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.db.flush.micros P50 : 53055.860304 P95 : 351045.454545 P99 : 749610.585586 P100 : 4932745.000000 COUNT : 18401 SUM : 1602094197
1795359742.620	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795359742.620	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1865891 SUM : 0
1795359742.620	
