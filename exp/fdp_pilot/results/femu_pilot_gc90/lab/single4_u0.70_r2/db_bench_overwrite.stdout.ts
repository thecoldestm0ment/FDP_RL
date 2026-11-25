1795446083.945	Initializing RocksDB Options from the specified file
1795446083.945	Initializing RocksDB Options from command-line flags
1795446091.868	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795446091.868	Values:     1024 bytes each (512 bytes after compression)
1795446091.868	Entries:    11678215
1795446091.868	Prefix:    0 bytes
1795446091.868	Keys per prefix:    0
1795446091.868	RawSize:    11582.7 MB (estimated)
1795446091.868	FileSize:   5880.4 MB (estimated)
1795446091.868	Write rate: 0 bytes/second
1795446091.868	Read rate: 0 ops/second
1795446091.868	Compression: NoCompression
1795446091.868	Compression sampling rate: 0
1795446091.868	Memtablerep: SkipListFactory
1795446091.868	Perf Level: 1
1795446091.868	------------------------------------------------
1795446091.868	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795466502.642	overwrite    :    3489.063 micros/op 1144 ops/sec;    1.1 MB/s
1795466507.642	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795466507.642	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466517.665	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466527.666	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466537.666	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466547.666	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466557.666	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795466567.667	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795466567.667	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795466567.667	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795466567.668	
1795466567.668	Level Files Size(MB)
1795466567.668	--------------------
1795466567.668	  0        0        0
1795466567.668	  1        5        2
1795466567.668	  2       59       25
1795466567.668	  3      609      250
1795466567.668	  4     5547     2500
1795466567.668	  5    25813    11770
1795466567.668	  6        0        0
1795466567.668	
1795466567.671	
1795466567.671	
1795466567.671	** Compaction Stats [default] **
1795466567.671	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795466567.671	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795466567.671	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.1     27.6    852.57            412.15     13508    0.063     46K     12       0.0       0.0
1795466567.671	  L1      5/0    2.28 MB   0.9     39.8    23.0     16.8      39.8     23.0       0.0   1.7     28.8     28.9   1412.71           1346.66      6719    0.210     40M   6976       0.0       0.0
1795466567.671	  L2     59/0   24.93 MB   1.0    117.0    23.0     94.0     117.0     22.9       0.0   5.1     27.8     27.8   4312.63           4133.06     49402    0.087    118M    52K       0.0       0.0
1795466567.671	  L3    609/0   249.77 MB   1.0    148.8    22.9    125.9     148.3     22.4       0.0   6.5     28.2     28.1   5407.88           5162.05     52175    0.104    151M   524K       0.0       0.0
1795466567.671	  L4   5547/0    2.44 GB   1.0    149.9    22.4    127.5     144.9     17.4       0.0   6.5     28.5     27.6   5383.46           5141.28     52029    0.103    152M  5079K       0.0       0.0
1795466567.671	  L5  25813/0   11.49 GB   0.5     68.3    17.4     50.9      53.6      2.7       0.0   3.1     31.9     25.1   2189.17           2108.26     37117    0.059     69M    14M       0.0       0.0
1795466567.671	 Sum  32033/0   14.21 GB   0.0    523.8   108.7    415.1     526.6    111.4       0.0  22.9     27.4     27.6  19558.42          18303.46    210950    0.093    532M    20M       0.0       0.0
1795466567.671	 Int      0/0    0.00 KB   0.0      0.1     0.0      0.1       0.1      0.0       0.0 58266904.0     30.0     24.3      2.29              2.29        30    0.076     68K    12K       0.0       0.0
1795466567.671	
1795466567.671	** Compaction Stats [default] **
1795466567.671	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795466567.671	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795466567.671	 Low      0/0    0.00 KB   0.0    523.8   108.7    415.1     503.6     88.5       0.0   0.0     28.7     27.6  18711.19          17896.52    197447    0.095    532M    20M       0.0       0.0
1795466567.671	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     27.8    847.23            406.94     13502    0.063       0      0       0.0       0.0
1795466567.672	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    188.5      0.00              0.00         1    0.005       0      0       0.0       0.0
1795466567.672	
1795466567.672	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795466567.672	
1795466567.672	Uptime(secs): 20483.7 total, 12.3 interval
1795466567.672	Flush(GB): cumulative 22.965, interval 0.000
1795466567.672	AddFile(GB): cumulative 0.000, interval 0.000
1795466567.672	AddFile(Total Files): cumulative 0, interval 0
1795466567.672	AddFile(L0 Files): cumulative 0, interval 0
1795466567.672	AddFile(Keys): cumulative 0, interval 0
1795466567.672	Cumulative compaction: 526.56 GB write, 26.32 MB/s write, 523.85 GB read, 26.19 MB/s read, 19558.4 seconds
1795466567.672	Interval compaction: 0.05 GB write, 4.50 MB/s write, 0.07 GB read, 5.55 MB/s read, 2.3 seconds
1795466567.672	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 238269 slowdown for pending_compaction_bytes, 18 memtable_compaction, 2 memtable_slowdown, interval 0 total count
1795466567.672	Block cache LRUCache@0x5b9b31f00a70#40171 capacity: 8.00 MB collections: 114 last_copies: 2 last_secs: 0.000136 secs_since: 132
1795466567.672	Block cache entry stats(count,size,portion): Misc(2,4.17 KB,0.0509262%)
1795466567.672	
1795466567.672	** File Read Latency Histogram By Level [default] **
1795466567.672	** Level 0 read latency histogram (micros):
1795466567.672	Count: 5909637 Average: 63.7167  StdDev: 445.81
1795466567.672	Min: 7  Median: 45.6087  Max: 211007
1795466567.672	Percentiles: P50: 45.61 P75: 59.74 P99: 226.60 P99.9: 390.61 P99.99: 889.13
1795466567.672	------------------------------------------------------
1795466567.672	(       6,      10 ]        1   0.000%   0.000% 
1795466567.672	(      10,      15 ]        3   0.000%   0.000% 
1795466567.672	(      15,      22 ]        3   0.000%   0.000% 
1795466567.672	(      22,      34 ]        1   0.000%   0.000% 
1795466567.672	(      34,      51 ]  4327078  73.221%  73.221% ###############
1795466567.672	(      51,      76 ]   300913   5.092%  78.313% #
1795466567.672	(      76,     110 ]   969021  16.397%  94.710% ###
1795466567.672	(     110,     170 ]   197560   3.343%  98.053% #
1795466567.672	(     170,     250 ]    79097   1.338%  99.392% 
1795466567.672	(     250,     380 ]    29802   0.504%  99.896% 
1795466567.672	(     380,     580 ]     4680   0.079%  99.975% 
1795466567.672	(     580,     870 ]      874   0.015%  99.990% 
1795466567.672	(     870,    1300 ]      293   0.005%  99.995% 
1795466567.672	(    1300,    1900 ]       82   0.001%  99.996% 
1795466567.672	(    1900,    2900 ]       32   0.001%  99.997% 
1795466567.672	(    2900,    4400 ]       31   0.001%  99.997% 
1795466567.672	(    4400,    6600 ]        4   0.000%  99.997% 
1795466567.672	(    6600,    9900 ]        8   0.000%  99.997% 
1795466567.672	(    9900,   14000 ]        7   0.000%  99.998% 
1795466567.672	(   14000,   22000 ]        2   0.000%  99.998% 
1795466567.672	(   22000,   33000 ]        2   0.000%  99.998% 
1795466567.672	(   33000,   50000 ]        7   0.000%  99.998% 
1795466567.672	(   50000,   75000 ]       91   0.002%  99.999% 
1795466567.672	(   75000,  110000 ]        5   0.000%  99.999% 
1795466567.672	(  110000,  170000 ]       37   0.001% 100.000% 
1795466567.672	(  170000,  250000 ]        3   0.000% 100.000% 
1795466567.672	
1795466567.672	** Level 1 read latency histogram (micros):
1795466567.672	Count: 10524363 Average: 63.3560  StdDev: 343.95
1795466567.672	Min: 6  Median: 45.4549  Max: 214912
1795466567.672	Percentiles: P50: 45.45 P75: 54.88 P99: 210.69 P99.9: 371.77 P99.99: 839.88
1795466567.672	------------------------------------------------------
1795466567.672	(       4,       6 ]       12   0.000%   0.000% 
1795466567.672	(       6,      10 ]       79   0.001%   0.001% 
1795466567.672	(      10,      15 ]       29   0.000%   0.001% 
1795466567.672	(      15,      22 ]        6   0.000%   0.001% 
1795466567.672	(      22,      34 ]        4   0.000%   0.001% 
1795466567.672	(      34,      51 ]  7809311  74.202%  74.203% ###############
1795466567.672	(      51,      76 ]   539679   5.128%  79.331% #
1795466567.672	(      76,     110 ]  1673655  15.903%  95.234% ###
1795466567.672	(     110,     170 ]   333671   3.170%  98.404% #
1795466567.672	(     170,     250 ]   123232   1.171%  99.575% 
1795466567.672	(     250,     380 ]    36469   0.347%  99.922% 
1795466567.672	(     380,     580 ]     6297   0.060%  99.982% 
1795466567.672	(     580,     870 ]      967   0.009%  99.991% 
1795466567.672	(     870,    1300 ]      340   0.003%  99.994% 
1795466567.672	(    1300,    1900 ]      122   0.001%  99.995% 
1795466567.672	(    1900,    2900 ]       61   0.001%  99.996% 
1795466567.672	(    2900,    4400 ]       56   0.001%  99.996% 
1795466567.672	(    4400,    6600 ]       10   0.000%  99.997% 
1795466567.672	(    6600,    9900 ]       30   0.000%  99.997% 
1795466567.672	(    9900,   14000 ]       14   0.000%  99.997% 
1795466567.672	(   14000,   22000 ]        7   0.000%  99.997% 
1795466567.672	(   22000,   33000 ]        5   0.000%  99.997% 
1795466567.672	(   33000,   50000 ]       24   0.000%  99.997% 
1795466567.672	(   50000,   75000 ]      149   0.001%  99.999% 
1795466567.672	(   75000,  110000 ]       56   0.001%  99.999% 
1795466567.672	(  110000,  170000 ]       98   0.001% 100.000% 
1795466567.672	(  170000,  250000 ]        5   0.000% 100.000% 
1795466567.672	
1795466567.672	** Level 2 read latency histogram (micros):
1795466567.672	Count: 31020609 Average: 63.6127  StdDev: 98.58
1795466567.672	Min: 5  Median: 45.6273  Max: 207914
1795466567.672	Percentiles: P50: 45.63 P75: 60.32 P99: 220.11 P99.9: 375.05 P99.99: 827.40
1795466567.672	------------------------------------------------------
1795466567.672	(       4,       6 ]      561   0.002%   0.002% 
1795466567.672	(       6,      10 ]     3833   0.012%   0.014% 
1795466567.672	(      10,      15 ]     1103   0.004%   0.018% 
1795466567.672	(      15,      22 ]      209   0.001%   0.018% 
1795466567.672	(      22,      34 ]       81   0.000%   0.019% 
1795466567.672	(      34,      51 ] 22668738  73.076%  73.095% ###############
1795466567.672	(      51,      76 ]  1584752   5.109%  78.204% #
1795466567.672	(      76,     110 ]  5173604  16.678%  94.882% ###
1795466567.672	(     110,     170 ]  1030587   3.322%  98.204% #
1795466567.672	(     170,     250 ]   394228   1.271%  99.475% 
1795466567.672	(     250,     380 ]   137118   0.442%  99.917% 
1795466567.672	(     380,     580 ]    19713   0.064%  99.980% 
1795466567.672	(     580,     870 ]     3493   0.011%  99.992% 
1795466567.672	(     870,    1300 ]     1301   0.004%  99.996% 
1795466567.672	(    1300,    1900 ]      434   0.001%  99.997% 
1795466567.672	(    1900,    2900 ]      247   0.001%  99.998% 
1795466567.672	(    2900,    4400 ]      219   0.001%  99.999% 
1795466567.672	(    4400,    6600 ]       39   0.000%  99.999% 
1795466567.672	(    6600,    9900 ]       39   0.000%  99.999% 
1795466567.672	(    9900,   14000 ]       37   0.000%  99.999% 
1795466567.672	(   14000,   22000 ]       23   0.000%  99.999% 
1795466567.672	(   22000,   33000 ]       18   0.000%  99.999% 
1795466567.672	(   33000,   50000 ]       63   0.000%  99.999% 
1795466567.672	(   50000,   75000 ]      418   0.001% 100.001% 
1795466567.672	(   75000,  110000 ]       99   0.000% 100.001% 
1795466567.672	(  110000,  170000 ]      194   0.001% 100.002% 
1795466567.672	(  170000,  250000 ]        8   0.000% 100.002% 
1795466567.672	
1795466567.672	** Level 3 read latency histogram (micros):
1795466567.672	Count: 39347577 Average: 63.9952  StdDev: 76.74
1795466567.672	Min: 5  Median: 45.6956  Max: 873275
1795466567.672	Percentiles: P50: 45.70 P75: 62.08 P99: 220.87 P99.9: 369.70 P99.99: 745.71
1795466567.672	------------------------------------------------------
1795466567.672	(       4,       6 ]      401   0.001%   0.001% 
1795466567.672	(       6,      10 ]     1775   0.005%   0.006% 
1795466567.672	(      10,      15 ]      524   0.001%   0.007% 
1795466567.672	(      15,      22 ]      120   0.000%   0.007% 
1795466567.672	(      22,      34 ]       43   0.000%   0.007% 
1795466567.672	(      34,      51 ] 28592414  72.666%  72.674% ###############
1795466567.672	(      51,      76 ]  2066004   5.251%  77.924% #
1795466567.672	(      76,     110 ]  6594226  16.759%  94.683% ###
1795466567.672	(     110,     170 ]  1345752   3.420%  98.103% #
1795466567.672	(     170,     250 ]   554879   1.410%  99.513% 
1795466567.672	(     250,     380 ]   165174   0.420%  99.933% 
1795466567.672	(     380,     580 ]    20488   0.052%  99.985% 
1795466567.672	(     580,     870 ]     3224   0.008%  99.994% 
1795466567.672	(     870,    1300 ]     1127   0.003%  99.996% 
1795466567.672	(    1300,    1900 ]      425   0.001%  99.997% 
1795466567.672	(    1900,    2900 ]      254   0.001%  99.998% 
1795466567.672	(    2900,    4400 ]      211   0.001%  99.999% 
1795466567.672	(    4400,    6600 ]       44   0.000%  99.999% 
1795466567.672	(    6600,    9900 ]       61   0.000%  99.999% 
1795466567.672	(    9900,   14000 ]       46   0.000%  99.999% 
1795466567.672	(   14000,   22000 ]       34   0.000%  99.999% 
1795466567.672	(   22000,   33000 ]       29   0.000%  99.999% 
1795466567.672	(   33000,   50000 ]      107   0.000%  99.999% 
1795466567.672	(   50000,   75000 ]      557   0.001% 100.001% 
1795466567.672	(   75000,  110000 ]      141   0.000% 100.001% 
1795466567.672	(  110000,  170000 ]      268   0.001% 100.002% 
1795466567.672	(  170000,  250000 ]       11   0.000% 100.002% 
1795466567.672	(  860000, 1200000 ]        1   0.000% 100.002% 
1795466567.672	
1795466567.672	** Level 4 read latency histogram (micros):
1795466567.672	Count: 38364742 Average: 64.0939  StdDev: 105.33
1795466567.672	Min: 5  Median: 45.8175  Max: 210134
1795466567.672	Percentiles: P50: 45.82 P75: 65.31 P99: 223.08 P99.9: 370.00 P99.99: 793.44
1795466567.672	------------------------------------------------------
1795466567.672	(       4,       6 ]      424   0.001%   0.001% 
1795466567.672	(       6,      10 ]     2217   0.006%   0.007% 
1795466567.672	(      10,      15 ]      673   0.002%   0.009% 
1795466567.672	(      15,      22 ]      135   0.000%   0.009% 
1795466567.672	(      22,      34 ]       49   0.000%   0.009% 
1795466567.672	(      34,      51 ] 27589554  71.914%  71.923% ##############
1795466567.672	(      51,      76 ]  2062488   5.376%  77.299% #
1795466567.672	(      76,     110 ]  6576639  17.142%  94.441% ###
1795466567.672	(     110,     170 ]  1371578   3.575%  98.016% #
1795466567.672	(     170,     250 ]   568681   1.482%  99.499% 
1795466567.672	(     250,     380 ]   166763   0.435%  99.933% 
1795466567.672	(     380,     580 ]    19367   0.050%  99.984% 
1795466567.673	(     580,     870 ]     3176   0.008%  99.992% 
1795466567.673	(     870,    1300 ]     1540   0.004%  99.996% 
1795466567.673	(    1300,    1900 ]      533   0.001%  99.998% 
1795466567.673	(    1900,    2900 ]      338   0.001%  99.998% 
1795466567.673	(    2900,    4400 ]      347   0.001%  99.999% 
1795466567.673	(    4400,    6600 ]       97   0.000% 100.000% 
1795466567.673	(    6600,    9900 ]       59   0.000% 100.000% 
1795466567.673	(    9900,   14000 ]       40   0.000% 100.000% 
1795466567.673	(   14000,   22000 ]       22   0.000% 100.000% 
1795466567.673	(   22000,   33000 ]       21   0.000% 100.000% 
1795466567.673	(   33000,   50000 ]       91   0.000% 100.000% 
1795466567.673	(   50000,   75000 ]      474   0.001% 100.001% 
1795466567.673	(   75000,  110000 ]       97   0.000% 100.002% 
1795466567.673	(  110000,  170000 ]      219   0.001% 100.002% 
1795466567.673	(  170000,  250000 ]        7   0.000% 100.002% 
1795466567.673	
1795466567.673	** Level 5 read latency histogram (micros):
1795466567.673	Count: 13569317 Average: 63.2337  StdDev: 299.96
1795466567.673	Min: 5  Median: 45.4791  Max: 214147
1795466567.673	Percentiles: P50: 45.48 P75: 55.10 P99: 223.83 P99.9: 394.15 P99.99: 1893.31
1795466567.673	------------------------------------------------------
1795466567.673	(       4,       6 ]      195   0.001%   0.001% 
1795466567.673	(       6,      10 ]     1738   0.013%   0.014% 
1795466567.673	(      10,      15 ]      562   0.004%   0.018% 
1795466567.673	(      15,      22 ]      116   0.001%   0.019% 
1795466567.673	(      22,      34 ]       46   0.000%   0.020% 
1795466567.673	(      34,      51 ] 10043798  74.018%  74.038% ###############
1795466567.673	(      51,      76 ]   796517   5.870%  79.908% #
1795466567.673	(      76,     110 ]  2056368  15.155%  95.063% ###
1795466567.673	(     110,     170 ]   402667   2.967%  98.030% #
1795466567.673	(     170,     250 ]   195596   1.441%  99.471% 
1795466567.673	(     250,     380 ]    57680   0.425%  99.897% 
1795466567.673	(     380,     580 ]     6567   0.048%  99.945% 
1795466567.673	(     580,     870 ]     2968   0.022%  99.967% 
1795466567.673	(     870,    1300 ]     2527   0.019%  99.985% 
1795466567.673	(    1300,    1900 ]      622   0.005%  99.990% 
1795466567.673	(    1900,    2900 ]      503   0.004%  99.994% 
1795466567.673	(    2900,    4400 ]      401   0.003%  99.997% 
1795466567.673	(    4400,    6600 ]      203   0.001%  99.998% 
1795466567.673	(    6600,    9900 ]       94   0.001%  99.999% 
1795466567.673	(    9900,   14000 ]       19   0.000%  99.999% 
1795466567.673	(   14000,   22000 ]        7   0.000%  99.999% 
1795466567.673	(   22000,   33000 ]        3   0.000%  99.999% 
1795466567.673	(   33000,   50000 ]       24   0.000%  99.999% 
1795466567.673	(   50000,   75000 ]      181   0.001% 100.001% 
1795466567.673	(   75000,  110000 ]       27   0.000% 100.001% 
1795466567.673	(  110000,  170000 ]       85   0.001% 100.001% 
1795466567.673	(  170000,  250000 ]        3   0.000% 100.001% 
1795466567.673	
1795466567.673	
1795466567.673	** DB Stats **
1795466567.673	Uptime(secs): 20483.7 total, 12.4 interval
1795466567.673	Cumulative writes: 23M writes, 23M keys, 18M commit groups, 1.3 writes per commit group, ingest: 22.91 GB, 1.15 MB/s
1795466567.673	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.91 GB, 1.15 MB/s
1795466567.673	Cumulative stall: 04:57:53.784 H:M:S, 87.3 percent
1795466567.673	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795466567.673	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795466567.673	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795466567.673	
1795466567.673	STATISTICS:
1795466567.673	rocksdb.block.cache.miss COUNT : 133789736
1795466567.673	rocksdb.block.cache.hit COUNT : 0
1795466567.673	rocksdb.block.cache.add COUNT : 0
1795466567.673	rocksdb.block.cache.add.failures COUNT : 0
1795466567.673	rocksdb.block.cache.index.miss COUNT : 0
1795466567.673	rocksdb.block.cache.index.hit COUNT : 0
1795466567.673	rocksdb.block.cache.index.add COUNT : 0
1795466567.673	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795466567.673	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795466567.673	rocksdb.block.cache.filter.miss COUNT : 0
1795466567.673	rocksdb.block.cache.filter.hit COUNT : 0
1795466567.673	rocksdb.block.cache.filter.add COUNT : 0
1795466567.673	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795466567.673	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795466567.673	rocksdb.block.cache.data.miss COUNT : 133789736
1795466567.673	rocksdb.block.cache.data.hit COUNT : 0
1795466567.673	rocksdb.block.cache.data.add COUNT : 0
1795466567.673	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795466567.673	rocksdb.block.cache.bytes.read COUNT : 0
1795466567.673	rocksdb.block.cache.bytes.write COUNT : 0
1795466567.673	rocksdb.bloom.filter.useful COUNT : 0
1795466567.673	rocksdb.bloom.filter.full.positive COUNT : 0
1795466567.673	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795466567.673	rocksdb.bloom.filter.micros COUNT : 0
1795466567.673	rocksdb.persistent.cache.hit COUNT : 0
1795466567.673	rocksdb.persistent.cache.miss COUNT : 0
1795466567.673	rocksdb.sim.block.cache.hit COUNT : 0
1795466567.673	rocksdb.sim.block.cache.miss COUNT : 0
1795466567.673	rocksdb.memtable.hit COUNT : 0
1795466567.673	rocksdb.memtable.miss COUNT : 0
1795466567.673	rocksdb.l0.hit COUNT : 0
1795466567.673	rocksdb.l1.hit COUNT : 0
1795466567.673	rocksdb.l2andup.hit COUNT : 0
1795466567.673	rocksdb.compaction.key.drop.new COUNT : 20599285
1795466567.673	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795466567.673	rocksdb.compaction.key.drop.range_del COUNT : 0
1795466567.673	rocksdb.compaction.key.drop.user COUNT : 0
1795466567.673	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795466567.673	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795466567.673	rocksdb.compaction.cancelled COUNT : 0
1795466567.673	rocksdb.number.keys.written COUNT : 23356432
1795466567.673	rocksdb.number.keys.read COUNT : 0
1795466567.673	rocksdb.number.keys.updated COUNT : 0
1795466567.673	rocksdb.bytes.written COUNT : 24603674016
1795466567.673	rocksdb.bytes.read COUNT : 0
1795466567.673	rocksdb.number.db.seek COUNT : 0
1795466567.673	rocksdb.number.db.next COUNT : 0
1795466567.673	rocksdb.number.db.prev COUNT : 0
1795466567.673	rocksdb.number.db.seek.found COUNT : 0
1795466567.673	rocksdb.number.db.next.found COUNT : 0
1795466567.673	rocksdb.number.db.prev.found COUNT : 0
1795466567.673	rocksdb.db.iter.bytes.read COUNT : 0
1795466567.673	rocksdb.no.file.closes COUNT : 0
1795466567.673	rocksdb.no.file.opens COUNT : 1237636
1795466567.673	rocksdb.no.file.errors COUNT : 0
1795466567.673	rocksdb.l0.slowdown.micros COUNT : 0
1795466567.673	rocksdb.memtable.compaction.micros COUNT : 0
1795466567.673	rocksdb.l0.num.files.stall.micros COUNT : 0
1795466567.673	rocksdb.stall.micros COUNT : 17873783595
1795466567.673	rocksdb.db.mutex.wait.micros COUNT : 0
1795466567.673	rocksdb.rate.limit.delay.millis COUNT : 0
1795466567.673	rocksdb.num.iterators COUNT : 0
1795466567.673	rocksdb.number.multiget.get COUNT : 0
1795466567.673	rocksdb.number.multiget.keys.read COUNT : 0
1795466567.673	rocksdb.number.multiget.bytes.read COUNT : 0
1795466567.673	rocksdb.number.deletes.filtered COUNT : 0
1795466567.673	rocksdb.number.merge.failures COUNT : 0
1795466567.673	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795466567.673	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795466567.673	rocksdb.number.reseeks.iteration COUNT : 0
1795466567.673	rocksdb.getupdatessince.calls COUNT : 0
1795466567.673	rocksdb.block.cachecompressed.miss COUNT : 0
1795466567.673	rocksdb.block.cachecompressed.hit COUNT : 0
1795466567.673	rocksdb.block.cachecompressed.add COUNT : 0
1795466567.673	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795466567.673	rocksdb.wal.synced COUNT : 0
1795466567.673	rocksdb.wal.bytes COUNT : 24603674016
1795466567.673	rocksdb.write.self COUNT : 18296584
1795466567.673	rocksdb.write.other COUNT : 5059848
1795466567.673	rocksdb.write.timeout COUNT : 0
1795466567.673	rocksdb.write.wal COUNT : 23356432
1795466567.673	rocksdb.compact.read.bytes COUNT : 562378042451
1795466567.673	rocksdb.compact.write.bytes COUNT : 540730725293
1795466567.673	rocksdb.flush.write.bytes COUNT : 24661563167
1795466567.673	rocksdb.compact.read.marked.bytes COUNT : 0
1795466567.673	rocksdb.compact.read.periodic.bytes COUNT : 0
1795466567.673	rocksdb.compact.read.ttl.bytes COUNT : 0
1795466567.673	rocksdb.compact.write.marked.bytes COUNT : 0
1795466567.673	rocksdb.compact.write.periodic.bytes COUNT : 0
1795466567.673	rocksdb.compact.write.ttl.bytes COUNT : 0
1795466567.673	rocksdb.number.direct.load.table.properties COUNT : 0
1795466567.673	rocksdb.number.superversion_acquires COUNT : 0
1795466567.673	rocksdb.number.superversion_releases COUNT : 0
1795466567.673	rocksdb.number.superversion_cleanups COUNT : 0
1795466567.673	rocksdb.number.block.compressed COUNT : 0
1795466567.673	rocksdb.number.block.decompressed COUNT : 0
1795466567.673	rocksdb.number.block.not_compressed COUNT : 0
1795466567.673	rocksdb.merge.operation.time.nanos COUNT : 0
1795466567.673	rocksdb.filter.operation.time.nanos COUNT : 0
1795466567.673	rocksdb.row.cache.hit COUNT : 0
1795466567.673	rocksdb.row.cache.miss COUNT : 0
1795466567.673	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795466567.673	rocksdb.read.amp.total.read.bytes COUNT : 0
1795466567.673	rocksdb.number.rate_limiter.drains COUNT : 0
1795466567.673	rocksdb.number.iter.skip COUNT : 0
1795466567.673	rocksdb.blobdb.num.put COUNT : 0
1795466567.673	rocksdb.blobdb.num.write COUNT : 0
1795466567.673	rocksdb.blobdb.num.get COUNT : 0
1795466567.673	rocksdb.blobdb.num.multiget COUNT : 0
1795466567.673	rocksdb.blobdb.num.seek COUNT : 0
1795466567.673	rocksdb.blobdb.num.next COUNT : 0
1795466567.674	rocksdb.blobdb.num.prev COUNT : 0
1795466567.674	rocksdb.blobdb.num.keys.written COUNT : 0
1795466567.674	rocksdb.blobdb.num.keys.read COUNT : 0
1795466567.674	rocksdb.blobdb.bytes.written COUNT : 0
1795466567.674	rocksdb.blobdb.bytes.read COUNT : 0
1795466567.674	rocksdb.blobdb.write.inlined COUNT : 0
1795466567.674	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795466567.674	rocksdb.blobdb.write.blob COUNT : 0
1795466567.674	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795466567.674	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795466567.674	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795466567.674	rocksdb.blobdb.blob.file.synced COUNT : 0
1795466567.674	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795466567.674	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795466567.674	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795466567.674	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795466567.674	rocksdb.blobdb.gc.num.files COUNT : 0
1795466567.674	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795466567.674	rocksdb.blobdb.gc.failures COUNT : 0
1795466567.674	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795466567.674	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795466567.674	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795466567.674	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795466567.674	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795466567.674	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795466567.674	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795466567.674	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795466567.674	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795466567.674	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795466567.674	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795466567.674	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795466567.674	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795466567.674	rocksdb.txn.get.tryagain COUNT : 0
1795466567.674	rocksdb.number.multiget.keys.found COUNT : 0
1795466567.674	rocksdb.num.iterator.created COUNT : 0
1795466567.674	rocksdb.num.iterator.deleted COUNT : 0
1795466567.674	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795466567.674	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795466567.674	rocksdb.block.cache.compression.dict.add COUNT : 0
1795466567.674	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795466567.674	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795466567.674	rocksdb.block.cache.add.redundant COUNT : 0
1795466567.674	rocksdb.block.cache.index.add.redundant COUNT : 0
1795466567.674	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795466567.674	rocksdb.block.cache.data.add.redundant COUNT : 0
1795466567.674	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795466567.674	rocksdb.files.marked.trash COUNT : 0
1795466567.674	rocksdb.files.deleted.immediately COUNT : 1232648
1795466567.674	rocksdb.error.handler.bg.errro.count COUNT : 0
1795466567.674	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795466567.674	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795466567.674	rocksdb.error.handler.autoresume.count COUNT : 0
1795466567.674	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795466567.674	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795466567.674	rocksdb.memtable.payload.bytes.at.flush COUNT : 24476251696
1795466567.674	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1814088
1795466567.674	rocksdb.secondary.cache.hits COUNT : 0
1795466567.674	rocksdb.verify_checksum.read.bytes COUNT : 0
1795466567.674	rocksdb.backup.read.bytes COUNT : 0
1795466567.674	rocksdb.backup.write.bytes COUNT : 0
1795466567.674	rocksdb.remote.compact.read.bytes COUNT : 0
1795466567.674	rocksdb.remote.compact.write.bytes COUNT : 0
1795466567.674	rocksdb.hot.file.read.bytes COUNT : 0
1795466567.674	rocksdb.warm.file.read.bytes COUNT : 0
1795466567.674	rocksdb.cold.file.read.bytes COUNT : 0
1795466567.674	rocksdb.hot.file.read.count COUNT : 0
1795466567.674	rocksdb.warm.file.read.count COUNT : 0
1795466567.674	rocksdb.cold.file.read.count COUNT : 0
1795466567.674	rocksdb.last.level.read.bytes COUNT : 0
1795466567.674	rocksdb.last.level.read.count COUNT : 0
1795466567.674	rocksdb.non.last.level.read.bytes COUNT : 562574429927
1795466567.674	rocksdb.non.last.level.read.count COUNT : 138740280
1795466567.674	rocksdb.block.checksum.compute.count COUNT : 136265008
1795466567.674	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.db.write.micros P50 : 37.039129 P95 : 13530.332548 P99 : 50734.380883 P100 : 5501363.000000 COUNT : 23356431 SUM : 81452903704
1795466567.674	rocksdb.compaction.times.micros P50 : 88218.814193 P95 : 193528.047942 P99 : 286000.349786 P100 : 2989747.000000 COUNT : 197447 SUM : 18711188370
1795466567.674	rocksdb.compaction.times.cpu_micros P50 : 84725.659743 P95 : 182382.257012 P99 : 257965.724206 P100 : 2626544.000000 COUNT : 197447 SUM : 17896524348
1795466567.674	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.table.sync.micros P50 : 24316.169574 P95 : 49908.120341 P99 : 157216.666667 P100 : 1198108.000000 COUNT : 13503 SUM : 381148765
1795466567.674	rocksdb.compaction.outfile.sync.micros P50 : 6038.673913 P95 : 13135.616044 P99 : 22520.644343 P100 : 1600865.000000 COUNT : 1199642 SUM : 8257137491
1795466567.674	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.manifest.file.sync.micros P50 : 486.651408 P95 : 683.817110 P99 : 90861.484772 P100 : 981389.000000 COUNT : 174278 SUM : 434494058
1795466567.674	rocksdb.table.open.io.micros P50 : 240.224329 P95 : 454.320400 P99 : 709.831488 P100 : 205932.000000 COUNT : 1237636 SUM : 402139807
1795466567.674	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.read.block.compaction.micros P50 : 45.954636 P95 : 118.052824 P99 : 224.732759 P100 : 873281.000000 COUNT : 133789736 SUM : 8647465221
1795466567.674	rocksdb.read.block.get.micros P50 : 54.483024 P95 : 107.578946 P99 : 231.528794 P100 : 138098.000000 COUNT : 1237636 SUM : 84927490
1795466567.674	rocksdb.write.raw.block.micros P50 : 0.539860 P95 : 1.614278 P99 : 40.262435 P100 : 1953699.000000 COUNT : 138122426 SUM : 260115916
1795466567.674	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.numfiles.in.singlecompaction P50 : 5.784631 P95 : 9.581860 P99 : 9.924614 P100 : 53.000000 COUNT : 197945 SUM : 1206101
1795466567.674	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.db.write.stall P50 : 0.643374 P95 : 3121.347643 P99 : 14307.400227 P100 : 5455479.000000 COUNT : 18274274 SUM : 17876311701
1795466567.674	rocksdb.sst.read.micros P50 : 45.669960 P95 : 114.640455 P99 : 221.355923 P100 : 873275.000000 COUNT : 138740280 SUM : 8852024439
1795466567.674	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.bytes.per.write P50 : 1121.477892 P95 : 3398.393627 P99 : 4188.000000 P100 : 4188.000000 COUNT : 18296584 SUM : 24603674016
1795466567.674	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.db.flush.micros P50 : 56095.769683 P95 : 148401.944895 P99 : 242063.456091 P100 : 5135229.000000 COUNT : 13502 SUM : 847229095
1795466567.674	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795466567.674	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1205603 SUM : 0
1795466567.674	
