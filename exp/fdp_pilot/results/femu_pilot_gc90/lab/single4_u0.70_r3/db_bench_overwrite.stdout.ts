1795582754.095	Initializing RocksDB Options from the specified file
1795582754.095	Initializing RocksDB Options from command-line flags
1795582762.665	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795582762.665	Values:     1024 bytes each (512 bytes after compression)
1795582762.665	Entries:    11678215
1795582762.665	Prefix:    0 bytes
1795582762.665	Keys per prefix:    0
1795582762.665	RawSize:    11582.7 MB (estimated)
1795582762.665	FileSize:   5880.4 MB (estimated)
1795582762.665	Write rate: 0 bytes/second
1795582762.665	Read rate: 0 ops/second
1795582762.665	Compression: NoCompression
1795582762.665	Compression sampling rate: 0
1795582762.665	Memtablerep: SkipListFactory
1795582762.665	Perf Level: 1
1795582762.665	------------------------------------------------
1795582762.665	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795603159.672	overwrite    :    3487.093 micros/op 1145 ops/sec;    1.1 MB/s
1795603164.674	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795603164.675	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795603174.675	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795603184.689	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795603194.694	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795603204.706	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795603214.706	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795603224.706	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795603234.706	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795603234.706	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795603234.706	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795603234.707	
1795603234.707	Level Files Size(MB)
1795603234.707	--------------------
1795603234.707	  0        1        2
1795603234.707	  1        5        2
1795603234.707	  2       58       25
1795603234.707	  3      607      250
1795603234.707	  4     5538     2500
1795603234.707	  5    25909    11771
1795603234.707	  6        0        0
1795603234.707	
1795603234.709	
1795603234.709	
1795603234.709	** Compaction Stats [default] **
1795603234.709	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795603234.709	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795603234.709	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.1     29.4    801.03            400.51     12505    0.064     45K     11       0.0       0.0
1795603234.709	  L1      5/0    2.20 MB   0.9     38.7    23.0     15.7      38.7     23.0       0.0   1.7     29.0     29.0   1366.52           1298.61      6223    0.220     39M   7127       0.0       0.0
1795603234.709	  L2     58/0   24.82 MB   1.0    113.3    23.0     90.3     113.3     22.9       0.0   4.9     28.0     28.0   4144.13           3975.10     49175    0.084    115M    52K       0.0       0.0
1795603234.709	  L3    607/0   249.85 MB   1.0    148.3    22.9    125.3     147.8     22.4       0.0   6.4     28.5     28.4   5333.58           5092.54     52050    0.102    150M   525K       0.0       0.0
1795603234.709	  L4   5538/0    2.44 GB   1.0    149.8    22.4    127.4     144.8     17.4       0.0   6.5     28.7     27.7   5347.32           5105.73     52003    0.103    152M  5075K       0.0       0.0
1795603234.709	  L5  25909/0   11.49 GB   0.5     68.3    17.4     50.9      53.6      2.7       0.0   3.1     32.1     25.2   2174.93           2092.38     37141    0.059     69M    14M       0.0       0.0
1795603234.709	 Sum  32118/0   14.21 GB   0.0    518.4   108.7    409.7     521.1    111.4       0.0  22.7     27.7     27.8  19167.52          17964.87    209097    0.092    526M    20M       0.0       0.0
1795603234.709	 Int      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0 21558595.0     32.5     26.4      0.78              0.78        11    0.071     25K   4734       0.0       0.0
1795603234.709	
1795603234.709	** Compaction Stats [default] **
1795603234.709	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795603234.709	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795603234.709	 Low      0/0    0.00 KB   0.0    518.4   108.7    409.7     498.2     88.5       0.0   0.0     28.9     27.8  18369.72          17567.46    196597    0.093    526M    20M       0.0       0.0
1795603234.709	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     29.5    797.80            397.40     12498    0.064       0      0       0.0       0.0
1795603234.709	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    251.6      0.01              0.00         2    0.004       0      0       0.0       0.0
1795603234.709	
1795603234.709	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795603234.709	
1795603234.709	Uptime(secs): 20480.6 total, 8.3 interval
1795603234.709	Flush(GB): cumulative 22.965, interval 0.000
1795603234.709	AddFile(GB): cumulative 0.000, interval 0.000
1795603234.709	AddFile(Total Files): cumulative 0, interval 0
1795603234.709	AddFile(L0 Files): cumulative 0, interval 0
1795603234.709	AddFile(Keys): cumulative 0, interval 0
1795603234.709	Cumulative compaction: 521.13 GB write, 26.06 MB/s write, 518.41 GB read, 25.92 MB/s read, 19167.5 seconds
1795603234.709	Interval compaction: 0.02 GB write, 2.48 MB/s write, 0.02 GB read, 3.06 MB/s read, 0.8 seconds
1795603234.709	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 234418 slowdown for pending_compaction_bytes, 15 memtable_compaction, 2 memtable_slowdown, interval 0 total count
1795603234.709	Block cache LRUCache@0x6324b4c08a70#42760 capacity: 8.00 MB collections: 114 last_copies: 2 last_secs: 7e-05 secs_since: 128
1795603234.709	Block cache entry stats(count,size,portion): Misc(3,8.38 KB,0.102234%)
1795603234.709	
1795603234.709	** File Read Latency Histogram By Level [default] **
1795603234.709	** Level 0 read latency histogram (micros):
1795603234.709	Count: 5904554 Average: 63.7068  StdDev: 440.09
1795603234.709	Min: 13  Median: 45.6498  Max: 199987
1795603234.709	Percentiles: P50: 45.65 P75: 59.67 P99: 223.24 P99.9: 410.37 P99.99: 934.43
1795603234.709	------------------------------------------------------
1795603234.709	(      10,      15 ]        6   0.000%   0.000% 
1795603234.709	(      15,      22 ]        2   0.000%   0.000% 
1795603234.709	(      22,      34 ]        1   0.000%   0.000% 
1795603234.709	(      34,      51 ]  4308113  72.963%  72.963% ###############
1795603234.709	(      51,      76 ]   346742   5.872%  78.835% #
1795603234.709	(      76,     110 ]   949009  16.072%  94.908% ###
1795603234.709	(     110,     170 ]   191886   3.250%  98.157% #
1795603234.709	(     170,     250 ]    74757   1.266%  99.424% 
1795603234.709	(     250,     380 ]    27365   0.463%  99.887% 
1795603234.709	(     380,     580 ]     5060   0.086%  99.973% 
1795603234.709	(     580,     870 ]      974   0.016%  99.989% 
1795603234.709	(     870,    1300 ]      324   0.005%  99.995% 
1795603234.709	(    1300,    1900 ]       59   0.001%  99.996% 
1795603234.709	(    1900,    2900 ]       47   0.001%  99.996% 
1795603234.709	(    2900,    4400 ]       34   0.001%  99.997% 
1795603234.709	(    4400,    6600 ]        6   0.000%  99.997% 
1795603234.709	(    6600,    9900 ]       13   0.000%  99.997% 
1795603234.709	(    9900,   14000 ]        3   0.000%  99.997% 
1795603234.709	(   14000,   22000 ]        6   0.000%  99.998% 
1795603234.709	(   22000,   33000 ]        3   0.000%  99.998% 
1795603234.709	(   33000,   50000 ]       15   0.000%  99.998% 
1795603234.709	(   50000,   75000 ]       85   0.001%  99.999% 
1795603234.709	(   75000,  110000 ]        8   0.000%  99.999% 
1795603234.709	(  110000,  170000 ]       36   0.001% 100.000% 
1795603234.709	(  170000,  250000 ]        2   0.000% 100.000% 
1795603234.709	
1795603234.709	** Level 1 read latency histogram (micros):
1795603234.709	Count: 10240108 Average: 63.4589  StdDev: 335.36
1795603234.709	Min: 6  Median: 45.4955  Max: 216206
1795603234.709	Percentiles: P50: 45.50 P75: 55.48 P99: 210.17 P99.9: 374.30 P99.99: 865.19
1795603234.709	------------------------------------------------------
1795603234.709	(       4,       6 ]       11   0.000%   0.000% 
1795603234.709	(       6,      10 ]       94   0.001%   0.001% 
1795603234.709	(      10,      15 ]       43   0.000%   0.001% 
1795603234.709	(      15,      22 ]       11   0.000%   0.002% 
1795603234.709	(      22,      34 ]        4   0.000%   0.002% 
1795603234.709	(      34,      51 ]  7571521  73.940%  73.941% ###############
1795603234.709	(      51,      76 ]   605349   5.912%  79.853% #
1795603234.709	(      76,     110 ]  1590592  15.533%  95.386% ###
1795603234.709	(     110,     170 ]   311708   3.044%  98.430% #
1795603234.709	(     170,     250 ]   116247   1.135%  99.565% 
1795603234.709	(     250,     380 ]    35859   0.350%  99.915% 
1795603234.709	(     380,     580 ]     6576   0.064%  99.980% 
1795603234.709	(     580,     870 ]     1087   0.011%  99.990% 
1795603234.709	(     870,    1300 ]      378   0.004%  99.994% 
1795603234.709	(    1300,    1900 ]      118   0.001%  99.995% 
1795603234.709	(    1900,    2900 ]       77   0.001%  99.996% 
1795603234.709	(    2900,    4400 ]       62   0.001%  99.996% 
1795603234.709	(    4400,    6600 ]       13   0.000%  99.997% 
1795603234.709	(    6600,    9900 ]       22   0.000%  99.997% 
1795603234.709	(    9900,   14000 ]       15   0.000%  99.997% 
1795603234.709	(   14000,   22000 ]        9   0.000%  99.997% 
1795603234.709	(   22000,   33000 ]        4   0.000%  99.997% 
1795603234.709	(   33000,   50000 ]       22   0.000%  99.997% 
1795603234.709	(   50000,   75000 ]      165   0.002%  99.999% 
1795603234.709	(   75000,  110000 ]       33   0.000%  99.999% 
1795603234.709	(  110000,  170000 ]      106   0.001% 100.000% 
1795603234.709	(  170000,  250000 ]        5   0.000% 100.000% 
1795603234.709	
1795603234.709	** Level 2 read latency histogram (micros):
1795603234.709	Count: 30041648 Average: 63.6120  StdDev: 94.89
1795603234.709	Min: 5  Median: 45.6734  Max: 206431
1795603234.709	Percentiles: P50: 45.67 P75: 60.41 P99: 219.53 P99.9: 376.57 P99.99: 847.65
1795603234.709	------------------------------------------------------
1795603234.709	(       4,       6 ]      495   0.002%   0.002% 
1795603234.709	(       6,      10 ]     3423   0.011%   0.013% 
1795603234.709	(      10,      15 ]     1260   0.004%   0.017% 
1795603234.709	(      15,      22 ]      256   0.001%   0.018% 
1795603234.709	(      22,      34 ]       85   0.000%   0.018% 
1795603234.709	(      34,      51 ] 21866756  72.788%  72.807% ###############
1795603234.709	(      51,      76 ]  1751519   5.830%  78.637% #
1795603234.709	(      76,     110 ]  4916183  16.365%  95.001% ###
1795603234.709	(     110,     170 ]   970226   3.230%  98.231% #
1795603234.709	(     170,     250 ]   373143   1.242%  99.473% 
1795603234.709	(     250,     380 ]   131731   0.438%  99.912% 
1795603234.709	(     380,     580 ]    20499   0.068%  99.980% 
1795603234.709	(     580,     870 ]     3324   0.011%  99.991% 
1795603234.709	(     870,    1300 ]     1341   0.004%  99.995% 
1795603234.709	(    1300,    1900 ]      453   0.002%  99.997% 
1795603234.709	(    1900,    2900 ]      290   0.001%  99.998% 
1795603234.709	(    2900,    4400 ]      259   0.001%  99.999% 
1795603234.709	(    4400,    6600 ]       37   0.000%  99.999% 
1795603234.709	(    6600,    9900 ]       26   0.000%  99.999% 
1795603234.709	(    9900,   14000 ]       31   0.000%  99.999% 
1795603234.709	(   14000,   22000 ]       31   0.000%  99.999% 
1795603234.709	(   22000,   33000 ]       20   0.000%  99.999% 
1795603234.709	(   33000,   50000 ]       73   0.000%  99.999% 
1795603234.709	(   50000,   75000 ]      353   0.001% 100.001% 
1795603234.709	(   75000,  110000 ]       85   0.000% 100.001% 
1795603234.709	(  110000,  170000 ]      203   0.001% 100.002% 
1795603234.709	(  170000,  250000 ]        4   0.000% 100.002% 
1795603234.709	
1795603234.709	** Level 3 read latency histogram (micros):
1795603234.709	Count: 39205218 Average: 63.8110  StdDev: 59.56
1795603234.709	Min: 5  Median: 45.7349  Max: 300850
1795603234.709	Percentiles: P50: 45.73 P75: 61.75 P99: 219.70 P99.9: 370.45 P99.99: 751.23
1795603234.709	------------------------------------------------------
1795603234.709	(       4,       6 ]      380   0.001%   0.001% 
1795603234.709	(       6,      10 ]     1613   0.004%   0.005% 
1795603234.709	(      10,      15 ]      544   0.001%   0.006% 
1795603234.709	(      15,      22 ]      141   0.000%   0.007% 
1795603234.709	(      22,      34 ]       46   0.000%   0.007% 
1795603234.709	(      34,      51 ] 28393674  72.423%  72.430% ##############
1795603234.709	(      51,      76 ]  2342192   5.974%  78.404% #
1795603234.709	(      76,     110 ]  6444052  16.437%  94.841% ###
1795603234.709	(     110,     170 ]  1299207   3.314%  98.155% #
1795603234.709	(     170,     250 ]   533334   1.360%  99.515% 
1795603234.709	(     250,     380 ]   162792   0.415%  99.931% 
1795603234.709	(     380,     580 ]    21423   0.055%  99.985% 
1795603234.709	(     580,     870 ]     3217   0.008%  99.993% 
1795603234.709	(     870,    1300 ]     1138   0.003%  99.996% 
1795603234.709	(    1300,    1900 ]      417   0.001%  99.997% 
1795603234.709	(    1900,    2900 ]      274   0.001%  99.998% 
1795603234.709	(    2900,    4400 ]      222   0.001%  99.999% 
1795603234.709	(    4400,    6600 ]       48   0.000%  99.999% 
1795603234.709	(    6600,    9900 ]       51   0.000%  99.999% 
1795603234.709	(    9900,   14000 ]       36   0.000%  99.999% 
1795603234.709	(   14000,   22000 ]       30   0.000%  99.999% 
1795603234.709	(   22000,   33000 ]       18   0.000%  99.999% 
1795603234.709	(   33000,   50000 ]      115   0.000%  99.999% 
1795603234.709	(   50000,   75000 ]      509   0.001% 100.001% 
1795603234.709	(   75000,  110000 ]      130   0.000% 100.001% 
1795603234.709	(  110000,  170000 ]      244   0.001% 100.002% 
1795603234.709	(  170000,  250000 ]        6   0.000% 100.002% 
1795603234.709	(  250000,  380000 ]        1   0.000% 100.002% 
1795603234.709	
1795603234.709	** Level 4 read latency histogram (micros):
1795603234.709	Count: 38327119 Average: 64.2716  StdDev: 105.20
1795603234.709	Min: 5  Median: 45.8895  Max: 258249
1795603234.709	Percentiles: P50: 45.89 P75: 65.21 P99: 222.95 P99.9: 371.30 P99.99: 811.42
1795603234.709	------------------------------------------------------
1795603234.709	(       4,       6 ]      371   0.001%   0.001% 
1795603234.709	(       6,      10 ]     1946   0.005%   0.006% 
1795603234.709	(      10,      15 ]      728   0.002%   0.008% 
1795603234.709	(      15,      22 ]      179   0.000%   0.008% 
1795603234.709	(      22,      34 ]       42   0.000%   0.009% 
1795603234.709	(      34,      51 ] 27395994  71.479%  71.488% ##############
1795603234.709	(      51,      76 ]  2368556   6.180%  77.668% #
1795603234.709	(      76,     110 ]  6462991  16.863%  94.530% ###
1795603234.709	(     110,     170 ]  1343660   3.506%  98.036% #
1795603234.709	(     170,     250 ]   558132   1.456%  99.492% 
1795603234.709	(     250,     380 ]   167396   0.437%  99.929% 
1795603234.709	(     380,     580 ]    20697   0.054%  99.983% 
1795603234.709	(     580,     870 ]     3251   0.008%  99.992% 
1795603234.709	(     870,    1300 ]     1419   0.004%  99.995% 
1795603234.709	(    1300,    1900 ]      560   0.001%  99.997% 
1795603234.709	(    1900,    2900 ]      376   0.001%  99.998% 
1795603234.709	(    2900,    4400 ]      318   0.001%  99.999% 
1795603234.709	(    4400,    6600 ]       79   0.000%  99.999% 
1795603234.709	(    6600,    9900 ]       83   0.000%  99.999% 
1795603234.709	(    9900,   14000 ]       42   0.000%  99.999% 
1795603234.709	(   14000,   22000 ]       22   0.000%  99.999% 
1795603234.709	(   22000,   33000 ]       14   0.000%  99.999% 
1795603234.709	(   33000,   50000 ]       95   0.000% 100.000% 
1795603234.709	(   50000,   75000 ]      480   0.001% 100.001% 
1795603234.709	(   75000,  110000 ]       83   0.000% 100.001% 
1795603234.709	(  110000,  170000 ]      219   0.001% 100.002% 
1795603234.709	(  170000,  250000 ]       16   0.000% 100.002% 
1795603234.709	(  250000,  380000 ]        1   0.000% 100.002% 
1795603234.709	
1795603234.709	** Level 5 read latency histogram (micros):
1795603234.709	Count: 13573097 Average: 63.3969  StdDev: 75.14
1795603234.709	Min: 5  Median: 45.5492  Max: 244058
1795603234.709	Percentiles: P50: 45.55 P75: 56.25 P99: 223.51 P99.9: 378.00 P99.99: 2326.93
1795603234.709	------------------------------------------------------
1795603234.709	(       4,       6 ]      114   0.001%   0.001% 
1795603234.709	(       6,      10 ]     1271   0.009%   0.010% 
1795603234.709	(      10,      15 ]      594   0.004%   0.015% 
1795603234.709	(      15,      22 ]      111   0.001%   0.015% 
1795603234.709	(      22,      34 ]       37   0.000%   0.016% 
1795603234.709	(      34,      51 ]  9986443  73.575%  73.591% ###############
1795603234.709	(      51,      76 ]   910427   6.708%  80.299% #
1795603234.709	(      76,     110 ]  2010328  14.811%  95.110% ###
1795603234.709	(     110,     170 ]   395465   2.914%  98.023% #
1795603234.709	(     170,     250 ]   198201   1.460%  99.483% 
1795603234.709	(     250,     380 ]    57418   0.423%  99.907% 
1795603234.709	(     380,     580 ]     6713   0.049%  99.956% 
1795603234.709	(     580,     870 ]     2330   0.017%  99.973% 
1795603234.709	(     870,    1300 ]     1604   0.012%  99.985% 
1795603234.709	(    1300,    1900 ]      492   0.004%  99.989% 
1795603234.709	(    1900,    2900 ]      449   0.003%  99.992% 
1795603234.709	(    2900,    4400 ]      440   0.003%  99.995% 
1795603234.709	(    4400,    6600 ]      231   0.002%  99.997% 
1795603234.709	(    6600,    9900 ]      154   0.001%  99.998% 
1795603234.709	(    9900,   14000 ]       24   0.000%  99.998% 
1795603234.709	(   14000,   22000 ]       16   0.000%  99.998% 
1795603234.709	(   22000,   33000 ]        9   0.000%  99.998% 
1795603234.709	(   33000,   50000 ]       15   0.000%  99.998% 
1795603234.709	(   50000,   75000 ]      201   0.001% 100.000% 
1795603234.709	(   75000,  110000 ]       30   0.000% 100.000% 
1795603234.709	(  110000,  170000 ]       78   0.001% 100.001% 
1795603234.709	(  170000,  250000 ]        7   0.000% 100.001% 
1795603234.709	
1795603234.709	
1795603234.709	** DB Stats **
1795603234.709	Uptime(secs): 20480.6 total, 8.3 interval
1795603234.709	Cumulative writes: 23M writes, 23M keys, 18M commit groups, 1.3 writes per commit group, ingest: 22.91 GB, 1.15 MB/s
1795603234.709	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.91 GB, 1.15 MB/s
1795603234.709	Cumulative stall: 04:59:8.560 H:M:S, 87.6 percent
1795603234.709	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795603234.709	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795603234.709	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795603234.709	
1795603234.709	STATISTICS:
1795603234.709	rocksdb.block.cache.miss COUNT : 132402615
1795603234.709	rocksdb.block.cache.hit COUNT : 0
1795603234.709	rocksdb.block.cache.add COUNT : 0
1795603234.709	rocksdb.block.cache.add.failures COUNT : 0
1795603234.709	rocksdb.block.cache.index.miss COUNT : 0
1795603234.709	rocksdb.block.cache.index.hit COUNT : 0
1795603234.709	rocksdb.block.cache.index.add COUNT : 0
1795603234.709	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795603234.709	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795603234.709	rocksdb.block.cache.filter.miss COUNT : 0
1795603234.709	rocksdb.block.cache.filter.hit COUNT : 0
1795603234.709	rocksdb.block.cache.filter.add COUNT : 0
1795603234.709	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795603234.709	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795603234.709	rocksdb.block.cache.data.miss COUNT : 132402615
1795603234.709	rocksdb.block.cache.data.hit COUNT : 0
1795603234.709	rocksdb.block.cache.data.add COUNT : 0
1795603234.709	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795603234.709	rocksdb.block.cache.bytes.read COUNT : 0
1795603234.709	rocksdb.block.cache.bytes.write COUNT : 0
1795603234.709	rocksdb.bloom.filter.useful COUNT : 0
1795603234.709	rocksdb.bloom.filter.full.positive COUNT : 0
1795603234.709	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795603234.709	rocksdb.bloom.filter.micros COUNT : 0
1795603234.709	rocksdb.persistent.cache.hit COUNT : 0
1795603234.709	rocksdb.persistent.cache.miss COUNT : 0
1795603234.709	rocksdb.sim.block.cache.hit COUNT : 0
1795603234.709	rocksdb.sim.block.cache.miss COUNT : 0
1795603234.709	rocksdb.memtable.hit COUNT : 0
1795603234.709	rocksdb.memtable.miss COUNT : 0
1795603234.709	rocksdb.l0.hit COUNT : 0
1795603234.709	rocksdb.l1.hit COUNT : 0
1795603234.709	rocksdb.l2andup.hit COUNT : 0
1795603234.709	rocksdb.compaction.key.drop.new COUNT : 20597210
1795603234.709	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795603234.709	rocksdb.compaction.key.drop.range_del COUNT : 0
1795603234.709	rocksdb.compaction.key.drop.user COUNT : 0
1795603234.709	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795603234.709	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795603234.709	rocksdb.compaction.cancelled COUNT : 0
1795603234.709	rocksdb.number.keys.written COUNT : 23356432
1795603234.709	rocksdb.number.keys.read COUNT : 0
1795603234.709	rocksdb.number.keys.updated COUNT : 0
1795603234.709	rocksdb.bytes.written COUNT : 24603669336
1795603234.709	rocksdb.bytes.read COUNT : 0
1795603234.709	rocksdb.number.db.seek COUNT : 0
1795603234.709	rocksdb.number.db.next COUNT : 0
1795603234.709	rocksdb.number.db.prev COUNT : 0
1795603234.709	rocksdb.number.db.seek.found COUNT : 0
1795603234.709	rocksdb.number.db.next.found COUNT : 0
1795603234.709	rocksdb.number.db.prev.found COUNT : 0
1795603234.709	rocksdb.db.iter.bytes.read COUNT : 0
1795603234.709	rocksdb.no.file.closes COUNT : 0
1795603234.709	rocksdb.no.file.opens COUNT : 1223046
1795603234.709	rocksdb.no.file.errors COUNT : 0
1795603234.709	rocksdb.l0.slowdown.micros COUNT : 0
1795603234.709	rocksdb.memtable.compaction.micros COUNT : 0
1795603234.709	rocksdb.l0.num.files.stall.micros COUNT : 0
1795603234.709	rocksdb.stall.micros COUNT : 17948559699
1795603234.709	rocksdb.db.mutex.wait.micros COUNT : 0
1795603234.709	rocksdb.rate.limit.delay.millis COUNT : 0
1795603234.709	rocksdb.num.iterators COUNT : 0
1795603234.709	rocksdb.number.multiget.get COUNT : 0
1795603234.709	rocksdb.number.multiget.keys.read COUNT : 0
1795603234.709	rocksdb.number.multiget.bytes.read COUNT : 0
1795603234.709	rocksdb.number.deletes.filtered COUNT : 0
1795603234.709	rocksdb.number.merge.failures COUNT : 0
1795603234.709	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795603234.709	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795603234.709	rocksdb.number.reseeks.iteration COUNT : 0
1795603234.709	rocksdb.getupdatessince.calls COUNT : 0
1795603234.709	rocksdb.block.cachecompressed.miss COUNT : 0
1795603234.709	rocksdb.block.cachecompressed.hit COUNT : 0
1795603234.709	rocksdb.block.cachecompressed.add COUNT : 0
1795603234.709	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795603234.709	rocksdb.wal.synced COUNT : 0
1795603234.709	rocksdb.wal.bytes COUNT : 24603669336
1795603234.709	rocksdb.write.self COUNT : 18296194
1795603234.709	rocksdb.write.other COUNT : 5060238
1795603234.709	rocksdb.write.timeout COUNT : 0
1795603234.709	rocksdb.write.wal COUNT : 23356432
1795603234.709	rocksdb.compact.read.bytes COUNT : 556547069154
1795603234.709	rocksdb.compact.write.bytes COUNT : 534903086466
1795603234.709	rocksdb.flush.write.bytes COUNT : 24660153222
1795603234.709	rocksdb.compact.read.marked.bytes COUNT : 0
1795603234.709	rocksdb.compact.read.periodic.bytes COUNT : 0
1795603234.709	rocksdb.compact.read.ttl.bytes COUNT : 0
1795603234.709	rocksdb.compact.write.marked.bytes COUNT : 0
1795603234.709	rocksdb.compact.write.periodic.bytes COUNT : 0
1795603234.709	rocksdb.compact.write.ttl.bytes COUNT : 0
1795603234.709	rocksdb.number.direct.load.table.properties COUNT : 0
1795603234.709	rocksdb.number.superversion_acquires COUNT : 0
1795603234.709	rocksdb.number.superversion_releases COUNT : 0
1795603234.709	rocksdb.number.superversion_cleanups COUNT : 0
1795603234.709	rocksdb.number.block.compressed COUNT : 0
1795603234.709	rocksdb.number.block.decompressed COUNT : 0
1795603234.709	rocksdb.number.block.not_compressed COUNT : 0
1795603234.709	rocksdb.merge.operation.time.nanos COUNT : 0
1795603234.709	rocksdb.filter.operation.time.nanos COUNT : 0
1795603234.709	rocksdb.row.cache.hit COUNT : 0
1795603234.709	rocksdb.row.cache.miss COUNT : 0
1795603234.709	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795603234.709	rocksdb.read.amp.total.read.bytes COUNT : 0
1795603234.709	rocksdb.number.rate_limiter.drains COUNT : 0
1795603234.709	rocksdb.number.iter.skip COUNT : 0
1795603234.709	rocksdb.blobdb.num.put COUNT : 0
1795603234.709	rocksdb.blobdb.num.write COUNT : 0
1795603234.709	rocksdb.blobdb.num.get COUNT : 0
1795603234.709	rocksdb.blobdb.num.multiget COUNT : 0
1795603234.709	rocksdb.blobdb.num.seek COUNT : 0
1795603234.709	rocksdb.blobdb.num.next COUNT : 0
1795603234.709	rocksdb.blobdb.num.prev COUNT : 0
1795603234.709	rocksdb.blobdb.num.keys.written COUNT : 0
1795603234.709	rocksdb.blobdb.num.keys.read COUNT : 0
1795603234.709	rocksdb.blobdb.bytes.written COUNT : 0
1795603234.709	rocksdb.blobdb.bytes.read COUNT : 0
1795603234.710	rocksdb.blobdb.write.inlined COUNT : 0
1795603234.710	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795603234.710	rocksdb.blobdb.write.blob COUNT : 0
1795603234.710	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795603234.710	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795603234.710	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795603234.710	rocksdb.blobdb.blob.file.synced COUNT : 0
1795603234.710	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795603234.710	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795603234.710	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795603234.710	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795603234.710	rocksdb.blobdb.gc.num.files COUNT : 0
1795603234.710	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795603234.710	rocksdb.blobdb.gc.failures COUNT : 0
1795603234.710	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795603234.710	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795603234.710	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795603234.710	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795603234.710	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795603234.710	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795603234.710	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795603234.710	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795603234.710	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795603234.710	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795603234.710	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795603234.710	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795603234.710	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795603234.710	rocksdb.txn.get.tryagain COUNT : 0
1795603234.710	rocksdb.number.multiget.keys.found COUNT : 0
1795603234.710	rocksdb.num.iterator.created COUNT : 0
1795603234.710	rocksdb.num.iterator.deleted COUNT : 0
1795603234.710	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795603234.710	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795603234.710	rocksdb.block.cache.compression.dict.add COUNT : 0
1795603234.710	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795603234.710	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795603234.710	rocksdb.block.cache.add.redundant COUNT : 0
1795603234.710	rocksdb.block.cache.index.add.redundant COUNT : 0
1795603234.710	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795603234.710	rocksdb.block.cache.data.add.redundant COUNT : 0
1795603234.710	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795603234.710	rocksdb.files.marked.trash COUNT : 0
1795603234.710	rocksdb.files.deleted.immediately COUNT : 1215964
1795603234.710	rocksdb.error.handler.bg.errro.count COUNT : 0
1795603234.710	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795603234.710	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795603234.710	rocksdb.error.handler.autoresume.count COUNT : 0
1795603234.710	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795603234.710	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795603234.710	rocksdb.memtable.payload.bytes.at.flush COUNT : 24476287328
1795603234.710	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1897928
1795603234.710	rocksdb.secondary.cache.hits COUNT : 0
1795603234.710	rocksdb.verify_checksum.read.bytes COUNT : 0
1795603234.710	rocksdb.backup.read.bytes COUNT : 0
1795603234.710	rocksdb.backup.write.bytes COUNT : 0
1795603234.710	rocksdb.remote.compact.read.bytes COUNT : 0
1795603234.710	rocksdb.remote.compact.write.bytes COUNT : 0
1795603234.710	rocksdb.hot.file.read.bytes COUNT : 0
1795603234.710	rocksdb.warm.file.read.bytes COUNT : 0
1795603234.710	rocksdb.cold.file.read.bytes COUNT : 0
1795603234.710	rocksdb.hot.file.read.count COUNT : 0
1795603234.710	rocksdb.warm.file.read.count COUNT : 0
1795603234.710	rocksdb.cold.file.read.count COUNT : 0
1795603234.710	rocksdb.last.level.read.bytes COUNT : 0
1795603234.710	rocksdb.last.level.read.count COUNT : 0
1795603234.710	rocksdb.non.last.level.read.bytes COUNT : 556742570087
1795603234.710	rocksdb.non.last.level.read.count COUNT : 137294799
1795603234.710	rocksdb.block.checksum.compute.count COUNT : 134848707
1795603234.710	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.db.write.micros P50 : 39.288974 P95 : 13072.318826 P99 : 51212.300790 P100 : 5338852.000000 COUNT : 23356408 SUM : 81408163616
1795603234.710	rocksdb.compaction.times.micros P50 : 86430.529692 P95 : 194379.892631 P99 : 288001.538462 P100 : 3411978.000000 COUNT : 196597 SUM : 18369715074
1795603234.710	rocksdb.compaction.times.cpu_micros P50 : 83219.529840 P95 : 182354.173415 P99 : 252264.715190 P100 : 3237519.000000 COUNT : 196597 SUM : 17567460167
1795603234.710	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.table.sync.micros P50 : 25566.068186 P95 : 53782.894737 P99 : 161538.461538 P100 : 1093860.000000 COUNT : 12500 SUM : 370303824
1795603234.710	rocksdb.compaction.outfile.sync.micros P50 : 5908.501687 P95 : 12984.509051 P99 : 22362.770833 P100 : 1305025.000000 COUNT : 1186036 SUM : 8017943533
1795603234.710	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.manifest.file.sync.micros P50 : 486.589894 P95 : 681.070315 P99 : 90147.659176 P100 : 1286361.000000 COUNT : 172067 SUM : 424160121
1795603234.710	rocksdb.table.open.io.micros P50 : 240.866124 P95 : 456.414519 P99 : 690.411872 P100 : 232072.000000 COUNT : 1223046 SUM : 391010983
1795603234.710	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.read.block.compaction.micros P50 : 46.061289 P95 : 116.074511 P99 : 224.212458 P100 : 300860.000000 COUNT : 132402615 SUM : 8566439158
1795603234.710	rocksdb.read.block.get.micros P50 : 55.204173 P95 : 107.879361 P99 : 231.821760 P100 : 141883.000000 COUNT : 1223046 SUM : 85272886
1795603234.710	rocksdb.write.raw.block.micros P50 : 0.536418 P95 : 1.556835 P99 : 41.816294 P100 : 1984904.000000 COUNT : 136692250 SUM : 266319475
1795603234.710	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.numfiles.in.singlecompaction P50 : 5.690131 P95 : 9.568771 P99 : 9.923435 P100 : 46.000000 COUNT : 197098 SUM : 1191429
1795603234.710	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.db.write.stall P50 : 0.640467 P95 : 3015.000835 P99 : 14194.376849 P100 : 5336311.000000 COUNT : 18276417 SUM : 17951160958
1795603234.710	rocksdb.sst.read.micros P50 : 45.723615 P95 : 112.589377 P99 : 220.675226 P100 : 300850.000000 COUNT : 137294799 SUM : 8762948015
1795603234.710	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.bytes.per.write P50 : 1121.794515 P95 : 3395.715956 P99 : 4188.000000 P100 : 4188.000000 COUNT : 18296194 SUM : 24603669336
1795603234.710	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.db.flush.micros P50 : 55767.095915 P95 : 156012.441680 P99 : 243688.421053 P100 : 5010282.000000 COUNT : 12498 SUM : 797795409
1795603234.710	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795603234.710	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1190928 SUM : 0
1795603234.710	
