1795157402.644	Initializing RocksDB Options from the specified file
1795157402.644	Initializing RocksDB Options from command-line flags
1795157412.806	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795157412.806	Values:     1024 bytes each (512 bytes after compression)
1795157412.806	Entries:    15273953
1795157412.806	Prefix:    0 bytes
1795157412.806	Keys per prefix:    0
1795157412.806	RawSize:    15149.0 MB (estimated)
1795157412.806	FileSize:   7691.0 MB (estimated)
1795157412.806	Write rate: 0 bytes/second
1795157412.806	Read rate: 0 ops/second
1795157412.806	Compression: NoCompression
1795157412.806	Compression sampling rate: 0
1795157412.806	Memtablerep: SkipListFactory
1795157412.806	Perf Level: 1
1795157412.806	------------------------------------------------
1795157412.806	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795187097.804	overwrite    :    3882.705 micros/op 1029 ops/sec;    1.0 MB/s
1795187102.804	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795187102.805	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795187112.838	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795187122.866	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795187132.863	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795187142.864	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795187152.864	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795187162.864	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795187162.864	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795187162.864	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795187162.865	
1795187162.865	Level Files Size(MB)
1795187162.865	--------------------
1795187162.865	  0        1        2
1795187162.865	  1        4        2
1795187162.865	  2       59       25
1795187162.865	  3      599      250
1795187162.865	  4     5705     2500
1795187162.865	  5    32712    15394
1795187162.865	  6        0        0
1795187162.865	
1795187162.867	
1795187162.867	
1795187162.867	** Compaction Stats [default] **
1795187162.867	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795187162.867	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795187162.867	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     30.0   1027.16            727.12     16358    0.063     33K      9       0.0       0.0
1795187162.867	  L1      4/0    2.02 MB   0.8     49.8    30.0     19.8      49.9     30.1       0.0   1.7     26.6     26.6   1917.56           1880.60      8154    0.235     50M   6881       0.0       0.0
1795187162.867	  L2     59/0   24.89 MB   1.0    148.8    30.1    118.7     148.8     30.0       0.0   4.9     25.7     25.7   5921.35           5818.00     64385    0.092    151M    51K       0.0       0.0
1795187162.867	  L3    599/0   249.95 MB   1.0    194.2    30.0    164.2     193.7     29.5       0.0   6.5     26.2     26.2   7576.68           7439.86     68020    0.111    197M   518K       0.0       0.0
1795187162.867	  L4   5705/0    2.44 GB   1.0    197.2    29.5    167.7     192.3     24.5       0.0   6.5     26.4     25.7   7656.75           7521.43     68424    0.112    200M  5063K       0.0       0.0
1795187162.867	  L5  32712/0   15.03 GB   0.6    115.6    24.5     91.1      93.8      2.7       0.0   3.8     29.4     23.8   4027.60           3966.11     53195    0.076    117M    22M       0.0       0.0
1795187162.867	 Sum  39080/0   17.75 GB   0.0    705.7   144.1    561.5     708.4    146.8       0.0  23.6     25.7     25.8  28127.10          27353.12    278536    0.101    716M    27M       0.0       0.0
1795187162.867	 Int      0/0    0.00 KB   0.0      0.8     0.1      0.6       0.6      0.0       0.0 689016043.0     25.4     21.1     31.11             30.84       318    0.098    784K   132K       0.0       0.0
1795187162.867	
1795187162.867	** Compaction Stats [default] **
1795187162.867	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795187162.867	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795187162.867	 Low      0/0    0.00 KB   0.0    705.7   144.1    561.5     678.3    116.8       0.0   0.0     26.7     25.6  27103.66          26629.63    262182    0.103    716M    27M       0.0       0.0
1795187162.867	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     30.1   1023.44            723.49     16352    0.063       0      0       0.0       0.0
1795187162.867	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    213.5      0.01              0.00         2    0.004       0      0       0.0       0.0
1795187162.867	
1795187162.867	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795187162.867	
1795187162.867	Uptime(secs): 29760.2 total, 44.4 interval
1795187162.867	Flush(GB): cumulative 30.037, interval 0.000
1795187162.867	AddFile(GB): cumulative 0.000, interval 0.000
1795187162.867	AddFile(Total Files): cumulative 0, interval 0
1795187162.867	AddFile(L0 Files): cumulative 0, interval 0
1795187162.867	AddFile(Keys): cumulative 0, interval 0
1795187162.867	Cumulative compaction: 708.38 GB write, 24.37 MB/s write, 705.66 GB read, 24.28 MB/s read, 28127.1 seconds
1795187162.867	Interval compaction: 0.64 GB write, 14.78 MB/s write, 0.77 GB read, 17.78 MB/s read, 31.1 seconds
1795187162.867	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 311745 slowdown for pending_compaction_bytes, 17 memtable_compaction, 3 memtable_slowdown, interval 164 total count
1795187162.867	Block cache LRUCache@0x5b34ae7c5a70#44005 capacity: 8.00 MB collections: 166 last_copies: 0 last_secs: 0.000187 secs_since: 44
1795187162.867	Block cache entry stats(count,size,portion): Misc(3,8.34 KB,0.101852%)
1795187162.867	
1795187162.867	** File Read Latency Histogram By Level [default] **
1795187162.867	** Level 0 read latency histogram (micros):
1795187162.867	Count: 7716236 Average: 66.1174  StdDev: 423.22
1795187162.867	Min: 8  Median: 45.7369  Max: 384041
1795187162.867	Percentiles: P50: 45.74 P75: 65.84 P99: 227.33 P99.9: 410.24 P99.99: 903.75
1795187162.867	------------------------------------------------------
1795187162.867	(       6,      10 ]        1   0.000%   0.000% 
1795187162.867	(      10,      15 ]       10   0.000%   0.000% 
1795187162.867	(      34,      51 ]  5588156  72.421%  72.421% ##############
1795187162.867	(      51,      76 ]   335245   4.345%  76.766% #
1795187162.867	(      76,     110 ]  1348801  17.480%  94.246% ###
1795187162.867	(     110,     170 ]   286374   3.711%  97.957% #
1795187162.867	(     170,     250 ]   112317   1.456%  99.413% 
1795187162.867	(     250,     380 ]    36588   0.474%  99.887% 
1795187162.867	(     380,     580 ]     6797   0.088%  99.975% 
1795187162.867	(     580,     870 ]     1145   0.015%  99.990% 
1795187162.867	(     870,    1300 ]      387   0.005%  99.995% 
1795187162.867	(    1300,    1900 ]      106   0.001%  99.996% 
1795187162.867	(    1900,    2900 ]       54   0.001%  99.997% 
1795187162.867	(    2900,    4400 ]       32   0.000%  99.997% 
1795187162.867	(    4400,    6600 ]        6   0.000%  99.997% 
1795187162.867	(    6600,    9900 ]       17   0.000%  99.997% 
1795187162.867	(    9900,   14000 ]        6   0.000%  99.997% 
1795187162.867	(   14000,   22000 ]        1   0.000%  99.997% 
1795187162.867	(   33000,   50000 ]        5   0.000%  99.998% 
1795187162.867	(   50000,   75000 ]       21   0.000%  99.998% 
1795187162.867	(   75000,  110000 ]       73   0.001%  99.999% 
1795187162.867	(  110000,  170000 ]       10   0.000%  99.999% 
1795187162.867	(  170000,  250000 ]       46   0.001% 100.000% 
1795187162.867	(  250000,  380000 ]       38   0.000% 100.000% 
1795187162.867	(  380000,  570000 ]        1   0.000% 100.000% 
1795187162.867	
1795187162.867	** Level 1 read latency histogram (micros):
1795187162.867	Count: 13178934 Average: 66.4992  StdDev: 209.84
1795187162.867	Min: 5  Median: 45.6149  Max: 485846
1795187162.867	Percentiles: P50: 45.61 P75: 61.38 P99: 220.07 P99.9: 376.76 P99.99: 857.21
1795187162.867	------------------------------------------------------
1795187162.867	(       4,       6 ]       23   0.000%   0.000% 
1795187162.867	(       6,      10 ]       87   0.001%   0.001% 
1795187162.867	(      10,      15 ]       45   0.000%   0.001% 
1795187162.867	(      15,      22 ]       10   0.000%   0.001% 
1795187162.867	(      22,      34 ]        2   0.000%   0.001% 
1795187162.867	(      34,      51 ]  9644324  73.180%  73.181% ###############
1795187162.867	(      51,      76 ]   577474   4.382%  77.563% #
1795187162.867	(      76,     110 ]  2244665  17.032%  94.595% ###
1795187162.867	(     110,     170 ]   467447   3.547%  98.142% #
1795187162.867	(     170,     250 ]   180671   1.371%  99.513% 
1795187162.867	(     250,     380 ]    52312   0.397%  99.910% 
1795187162.867	(     380,     580 ]     8954   0.068%  99.978% 
1795187162.867	(     580,     870 ]     1676   0.013%  99.991% 
1795187162.867	(     870,    1300 ]      527   0.004%  99.995% 
1795187162.867	(    1300,    1900 ]      140   0.001%  99.996% 
1795187162.867	(    1900,    2900 ]       73   0.001%  99.996% 
1795187162.867	(    2900,    4400 ]       82   0.001%  99.997% 
1795187162.867	(    4400,    6600 ]       15   0.000%  99.997% 
1795187162.867	(    6600,    9900 ]       18   0.000%  99.997% 
1795187162.867	(    9900,   14000 ]        3   0.000%  99.997% 
1795187162.867	(   14000,   22000 ]        5   0.000%  99.997% 
1795187162.867	(   22000,   33000 ]        2   0.000%  99.997% 
1795187162.867	(   33000,   50000 ]        8   0.000%  99.997% 
1795187162.867	(   50000,   75000 ]       34   0.000%  99.997% 
1795187162.867	(   75000,  110000 ]      134   0.001%  99.998% 
1795187162.867	(  110000,  170000 ]       42   0.000%  99.999% 
1795187162.867	(  170000,  250000 ]       94   0.001%  99.999% 
1795187162.867	(  250000,  380000 ]       85   0.001% 100.000% 
1795187162.867	(  380000,  570000 ]        6   0.000% 100.000% 
1795187162.867	
1795187162.867	** Level 2 read latency histogram (micros):
1795187162.867	Count: 39449706 Average: 66.9587  StdDev: 65.27
1795187162.867	Min: 5  Median: 45.8625  Max: 820349
1795187162.867	Percentiles: P50: 45.86 P75: 70.21 P99: 228.57 P99.9: 375.62 P99.99: 832.54
1795187162.867	------------------------------------------------------
1795187162.867	(       4,       6 ]     1038   0.003%   0.003% 
1795187162.867	(       6,      10 ]     2635   0.007%   0.009% 
1795187162.867	(      10,      15 ]      523   0.001%   0.011% 
1795187162.867	(      15,      22 ]      141   0.000%   0.011% 
1795187162.867	(      22,      34 ]       48   0.000%   0.011% 
1795187162.867	(      34,      51 ] 28261243  71.639%  71.650% ##############
1795187162.867	(      51,      76 ]  1720366   4.361%  76.011% #
1795187162.867	(      76,     110 ]  7117702  18.042%  94.053% ####
1795187162.867	(     110,     170 ]  1501948   3.807%  97.860% #
1795187162.867	(     170,     250 ]   614057   1.557%  99.417% 
1795187162.867	(     250,     380 ]   197201   0.500%  99.917% 
1795187162.867	(     380,     580 ]    25037   0.063%  99.980% 
1795187162.867	(     580,     870 ]     4389   0.011%  99.991% 
1795187162.867	(     870,    1300 ]     1478   0.004%  99.995% 
1795187162.867	(    1300,    1900 ]      503   0.001%  99.996% 
1795187162.867	(    1900,    2900 ]      317   0.001%  99.997% 
1795187162.867	(    2900,    4400 ]      342   0.001%  99.998% 
1795187162.867	(    4400,    6600 ]       66   0.000%  99.998% 
1795187162.867	(    6600,    9900 ]       68   0.000%  99.998% 
1795187162.867	(    9900,   14000 ]       28   0.000%  99.999% 
1795187162.867	(   14000,   22000 ]        5   0.000%  99.999% 
1795187162.867	(   22000,   33000 ]        2   0.000%  99.999% 
1795187162.867	(   33000,   50000 ]       24   0.000%  99.999% 
1795187162.867	(   50000,   75000 ]       96   0.000%  99.999% 
1795187162.867	(   75000,  110000 ]      327   0.001% 100.000% 
1795187162.867	(  110000,  170000 ]       96   0.000% 100.000% 
1795187162.867	(  170000,  250000 ]      205   0.001% 100.000% 
1795187162.867	(  250000,  380000 ]      244   0.001% 100.001% 
1795187162.867	(  380000,  570000 ]       12   0.000% 100.001% 
1795187162.867	(  570000,  860000 ]        1   0.000% 100.001% 
1795187162.867	
1795187162.867	** Level 3 read latency histogram (micros):
1795187162.867	Count: 51385571 Average: 66.8293  StdDev: 70.02
1795187162.867	Min: 5  Median: 45.8877  Max: 483940
1795187162.867	Percentiles: P50: 45.89 P75: 71.08 P99: 226.99 P99.9: 371.27 P99.99: 761.42
1795187162.867	------------------------------------------------------
1795187162.867	(       4,       6 ]     1002   0.002%   0.002% 
1795187162.867	(       6,      10 ]     2050   0.004%   0.006% 
1795187162.867	(      10,      15 ]      539   0.001%   0.007% 
1795187162.867	(      15,      22 ]       89   0.000%   0.007% 
1795187162.867	(      22,      34 ]       46   0.000%   0.007% 
1795187162.867	(      34,      51 ] 36736663  71.492%  71.499% ##############
1795187162.867	(      51,      76 ]  2239138   4.358%  75.857% #
1795187162.867	(      76,     110 ]  9319427  18.136%  93.993% ####
1795187162.867	(     110,     170 ]  1983237   3.860%  97.853% #
1795187162.867	(     170,     250 ]   827498   1.610%  99.463% 
1795187162.867	(     250,     380 ]   240661   0.468%  99.931% 
1795187162.867	(     380,     580 ]    27475   0.053%  99.985% 
1795187162.867	(     580,     870 ]     4168   0.008%  99.993% 
1795187162.867	(     870,    1300 ]     1502   0.003%  99.996% 
1795187162.867	(    1300,    1900 ]      575   0.001%  99.997% 
1795187162.867	(    1900,    2900 ]      368   0.001%  99.998% 
1795187162.867	(    2900,    4400 ]      330   0.001%  99.998% 
1795187162.867	(    4400,    6600 ]       70   0.000%  99.999% 
1795187162.867	(    6600,    9900 ]       62   0.000%  99.999% 
1795187162.867	(    9900,   14000 ]       25   0.000%  99.999% 
1795187162.867	(   14000,   22000 ]        9   0.000%  99.999% 
1795187162.867	(   22000,   33000 ]        5   0.000%  99.999% 
1795187162.867	(   33000,   50000 ]       27   0.000%  99.999% 
1795187162.867	(   50000,   75000 ]      130   0.000%  99.999% 
1795187162.867	(   75000,  110000 ]      409   0.001% 100.000% 
1795187162.867	(  110000,  170000 ]      160   0.000% 100.000% 
1795187162.867	(  170000,  250000 ]      303   0.001% 100.001% 
1795187162.867	(  250000,  380000 ]      274   0.001% 100.001% 
1795187162.867	(  380000,  570000 ]       14   0.000% 100.001% 
1795187162.867	
1795187162.867	** Level 4 read latency histogram (micros):
1795187162.867	Count: 50931233 Average: 66.8239  StdDev: 45.72
1795187162.867	Min: 5  Median: 45.9101  Max: 482202
1795187162.867	Percentiles: P50: 45.91 P75: 71.42 P99: 225.01 P99.9: 371.15 P99.99: 793.87
1795187162.867	------------------------------------------------------
1795187162.867	(       4,       6 ]      804   0.002%   0.002% 
1795187162.868	(       6,      10 ]     1639   0.003%   0.005% 
1795187162.868	(      10,      15 ]      462   0.001%   0.006% 
1795187162.868	(      15,      22 ]       77   0.000%   0.006% 
1795187162.868	(      22,      34 ]       27   0.000%   0.006% 
1795187162.868	(      34,      51 ] 36344317  71.360%  71.365% ##############
1795187162.868	(      51,      76 ]  2265938   4.449%  75.815% #
1795187162.868	(      76,     110 ]  9280601  18.222%  94.036% ####
1795187162.868	(     110,     170 ]  1986481   3.900%  97.937% #
1795187162.868	(     170,     250 ]   787649   1.546%  99.483% 
1795187162.868	(     250,     380 ]   227816   0.447%  99.930% 
1795187162.868	(     380,     580 ]    27109   0.053%  99.984% 
1795187162.868	(     580,     870 ]     4366   0.009%  99.992% 
1795187162.868	(     870,    1300 ]     1582   0.003%  99.995% 
1795187162.868	(    1300,    1900 ]      622   0.001%  99.997% 
1795187162.868	(    1900,    2900 ]      433   0.001%  99.997% 
1795187162.868	(    2900,    4400 ]      402   0.001%  99.998% 
1795187162.868	(    4400,    6600 ]      120   0.000%  99.998% 
1795187162.868	(    6600,    9900 ]      106   0.000%  99.999% 
1795187162.868	(    9900,   14000 ]       39   0.000%  99.999% 
1795187162.868	(   14000,   22000 ]        5   0.000%  99.999% 
1795187162.868	(   22000,   33000 ]        4   0.000%  99.999% 
1795187162.868	(   33000,   50000 ]       21   0.000%  99.999% 
1795187162.868	(   50000,   75000 ]      168   0.000%  99.999% 
1795187162.868	(   75000,  110000 ]      397   0.001% 100.000% 
1795187162.868	(  110000,  170000 ]      124   0.000% 100.000% 
1795187162.868	(  170000,  250000 ]      286   0.001% 100.001% 
1795187162.868	(  250000,  380000 ]      291   0.001% 100.001% 
1795187162.868	(  380000,  570000 ]       16   0.000% 100.001% 
1795187162.868	
1795187162.868	** Level 5 read latency histogram (micros):
1795187162.868	Count: 24217164 Average: 65.2656  StdDev: 56.74
1795187162.868	Min: 5  Median: 45.5390  Max: 487009
1795187162.868	Percentiles: P50: 45.54 P75: 57.91 P99: 224.21 P99.9: 373.78 P99.99: 1693.55
1795187162.868	------------------------------------------------------
1795187162.868	(       4,       6 ]      446   0.002%   0.002% 
1795187162.868	(       6,      10 ]     1361   0.006%   0.007% 
1795187162.868	(      10,      15 ]      367   0.002%   0.009% 
1795187162.868	(      15,      22 ]       84   0.000%   0.009% 
1795187162.868	(      22,      34 ]       29   0.000%   0.009% 
1795187162.868	(      34,      51 ] 17835757  73.649%  73.659% ###############
1795187162.868	(      51,      76 ]  1175913   4.856%  78.514% #
1795187162.868	(      76,     110 ]  3921543  16.193%  94.708% ###
1795187162.868	(     110,     170 ]   791052   3.266%  97.974% #
1795187162.868	(     170,     250 ]   366620   1.514%  99.488% 
1795187162.868	(     250,     380 ]   104790   0.433%  99.921% 
1795187162.868	(     380,     580 ]    11648   0.048%  99.969% 
1795187162.868	(     580,     870 ]     2967   0.012%  99.981% 
1795187162.868	(     870,    1300 ]     1796   0.007%  99.988% 
1795187162.868	(    1300,    1900 ]      563   0.002%  99.991% 
1795187162.868	(    1900,    2900 ]      596   0.002%  99.993% 
1795187162.868	(    2900,    4400 ]      608   0.003%  99.996% 
1795187162.868	(    4400,    6600 ]      347   0.001%  99.997% 
1795187162.868	(    6600,    9900 ]      236   0.001%  99.998% 
1795187162.868	(    9900,   14000 ]       64   0.000%  99.998% 
1795187162.868	(   14000,   22000 ]       10   0.000%  99.998% 
1795187162.868	(   22000,   33000 ]        2   0.000%  99.998% 
1795187162.868	(   33000,   50000 ]        8   0.000%  99.999% 
1795187162.868	(   50000,   75000 ]       53   0.000%  99.999% 
1795187162.868	(   75000,  110000 ]      203   0.001% 100.000% 
1795187162.868	(  110000,  170000 ]       41   0.000% 100.000% 
1795187162.868	(  170000,  250000 ]      135   0.001% 100.000% 
1795187162.868	(  250000,  380000 ]      120   0.000% 100.001% 
1795187162.868	(  380000,  570000 ]        8   0.000% 100.001% 
1795187162.868	
1795187162.868	
1795187162.868	** DB Stats **
1795187162.868	Uptime(secs): 29760.2 total, 44.5 interval
1795187162.868	Cumulative writes: 30M writes, 30M keys, 23M commit groups, 1.3 writes per commit group, ingest: 29.97 GB, 1.03 MB/s
1795187162.868	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.97 GB, 1.03 MB/s
1795187162.868	Cumulative stall: 07:08:49.984 H:M:S, 86.5 percent
1795187162.868	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795187162.868	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795187162.868	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795187162.868	
1795187162.868	STATISTICS:
1795187162.868	rocksdb.block.cache.miss COUNT : 180223302
1795187162.868	rocksdb.block.cache.hit COUNT : 0
1795187162.868	rocksdb.block.cache.add COUNT : 0
1795187162.868	rocksdb.block.cache.add.failures COUNT : 0
1795187162.868	rocksdb.block.cache.index.miss COUNT : 0
1795187162.868	rocksdb.block.cache.index.hit COUNT : 0
1795187162.868	rocksdb.block.cache.index.add COUNT : 0
1795187162.868	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795187162.868	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795187162.868	rocksdb.block.cache.filter.miss COUNT : 0
1795187162.868	rocksdb.block.cache.filter.hit COUNT : 0
1795187162.868	rocksdb.block.cache.filter.add COUNT : 0
1795187162.868	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795187162.868	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795187162.868	rocksdb.block.cache.data.miss COUNT : 180223302
1795187162.868	rocksdb.block.cache.data.hit COUNT : 0
1795187162.868	rocksdb.block.cache.data.add COUNT : 0
1795187162.868	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795187162.868	rocksdb.block.cache.bytes.read COUNT : 0
1795187162.868	rocksdb.block.cache.bytes.write COUNT : 0
1795187162.868	rocksdb.bloom.filter.useful COUNT : 0
1795187162.868	rocksdb.bloom.filter.full.positive COUNT : 0
1795187162.868	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795187162.868	rocksdb.bloom.filter.micros COUNT : 0
1795187162.868	rocksdb.persistent.cache.hit COUNT : 0
1795187162.868	rocksdb.persistent.cache.miss COUNT : 0
1795187162.868	rocksdb.sim.block.cache.hit COUNT : 0
1795187162.868	rocksdb.sim.block.cache.miss COUNT : 0
1795187162.868	rocksdb.memtable.hit COUNT : 0
1795187162.868	rocksdb.memtable.miss COUNT : 0
1795187162.868	rocksdb.l0.hit COUNT : 0
1795187162.868	rocksdb.l1.hit COUNT : 0
1795187162.868	rocksdb.l2andup.hit COUNT : 0
1795187162.868	rocksdb.compaction.key.drop.new COUNT : 27788368
1795187162.868	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795187162.868	rocksdb.compaction.key.drop.range_del COUNT : 0
1795187162.868	rocksdb.compaction.key.drop.user COUNT : 0
1795187162.868	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795187162.868	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795187162.868	rocksdb.compaction.cancelled COUNT : 0
1795187162.868	rocksdb.number.keys.written COUNT : 30547908
1795187162.868	rocksdb.number.keys.read COUNT : 0
1795187162.868	rocksdb.number.keys.updated COUNT : 0
1795187162.868	rocksdb.bytes.written COUNT : 32176943376
1795187162.868	rocksdb.bytes.read COUNT : 0
1795187162.868	rocksdb.number.db.seek COUNT : 0
1795187162.868	rocksdb.number.db.next COUNT : 0
1795187162.868	rocksdb.number.db.prev COUNT : 0
1795187162.868	rocksdb.number.db.seek.found COUNT : 0
1795187162.868	rocksdb.number.db.next.found COUNT : 0
1795187162.868	rocksdb.number.db.prev.found COUNT : 0
1795187162.868	rocksdb.db.iter.bytes.read COUNT : 0
1795187162.868	rocksdb.no.file.closes COUNT : 0
1795187162.868	rocksdb.no.file.opens COUNT : 1664696
1795187162.868	rocksdb.no.file.errors COUNT : 0
1795187162.868	rocksdb.l0.slowdown.micros COUNT : 0
1795187162.868	rocksdb.memtable.compaction.micros COUNT : 0
1795187162.868	rocksdb.l0.num.files.stall.micros COUNT : 0
1795187162.868	rocksdb.stall.micros COUNT : 25729984311
1795187162.868	rocksdb.db.mutex.wait.micros COUNT : 0
1795187162.868	rocksdb.rate.limit.delay.millis COUNT : 0
1795187162.868	rocksdb.num.iterators COUNT : 0
1795187162.868	rocksdb.number.multiget.get COUNT : 0
1795187162.868	rocksdb.number.multiget.keys.read COUNT : 0
1795187162.868	rocksdb.number.multiget.bytes.read COUNT : 0
1795187162.868	rocksdb.number.deletes.filtered COUNT : 0
1795187162.868	rocksdb.number.merge.failures COUNT : 0
1795187162.868	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795187162.868	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795187162.868	rocksdb.number.reseeks.iteration COUNT : 0
1795187162.868	rocksdb.getupdatessince.calls COUNT : 0
1795187162.868	rocksdb.block.cachecompressed.miss COUNT : 0
1795187162.868	rocksdb.block.cachecompressed.hit COUNT : 0
1795187162.868	rocksdb.block.cachecompressed.add COUNT : 0
1795187162.868	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795187162.868	rocksdb.wal.synced COUNT : 0
1795187162.868	rocksdb.wal.bytes COUNT : 32176943376
1795187162.868	rocksdb.write.self COUNT : 23743952
1795187162.868	rocksdb.write.other COUNT : 6803956
1795187162.868	rocksdb.write.timeout COUNT : 0
1795187162.868	rocksdb.write.wal COUNT : 30547908
1795187162.868	rocksdb.compact.read.bytes COUNT : 757563766832
1795187162.868	rocksdb.compact.write.bytes COUNT : 728362483431
1795187162.868	rocksdb.flush.write.bytes COUNT : 32254642765
1795187162.868	rocksdb.compact.read.marked.bytes COUNT : 0
1795187162.868	rocksdb.compact.read.periodic.bytes COUNT : 0
1795187162.868	rocksdb.compact.read.ttl.bytes COUNT : 0
1795187162.868	rocksdb.compact.write.marked.bytes COUNT : 0
1795187162.868	rocksdb.compact.write.periodic.bytes COUNT : 0
1795187162.868	rocksdb.compact.write.ttl.bytes COUNT : 0
1795187162.868	rocksdb.number.direct.load.table.properties COUNT : 0
1795187162.868	rocksdb.number.superversion_acquires COUNT : 0
1795187162.868	rocksdb.number.superversion_releases COUNT : 0
1795187162.868	rocksdb.number.superversion_cleanups COUNT : 0
1795187162.868	rocksdb.number.block.compressed COUNT : 0
1795187162.868	rocksdb.number.block.decompressed COUNT : 0
1795187162.868	rocksdb.number.block.not_compressed COUNT : 0
1795187162.868	rocksdb.merge.operation.time.nanos COUNT : 0
1795187162.868	rocksdb.filter.operation.time.nanos COUNT : 0
1795187162.868	rocksdb.row.cache.hit COUNT : 0
1795187162.868	rocksdb.row.cache.miss COUNT : 0
1795187162.868	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795187162.868	rocksdb.read.amp.total.read.bytes COUNT : 0
1795187162.868	rocksdb.number.rate_limiter.drains COUNT : 0
1795187162.868	rocksdb.number.iter.skip COUNT : 0
1795187162.868	rocksdb.blobdb.num.put COUNT : 0
1795187162.868	rocksdb.blobdb.num.write COUNT : 0
1795187162.868	rocksdb.blobdb.num.get COUNT : 0
1795187162.868	rocksdb.blobdb.num.multiget COUNT : 0
1795187162.868	rocksdb.blobdb.num.seek COUNT : 0
1795187162.868	rocksdb.blobdb.num.next COUNT : 0
1795187162.868	rocksdb.blobdb.num.prev COUNT : 0
1795187162.868	rocksdb.blobdb.num.keys.written COUNT : 0
1795187162.868	rocksdb.blobdb.num.keys.read COUNT : 0
1795187162.868	rocksdb.blobdb.bytes.written COUNT : 0
1795187162.868	rocksdb.blobdb.bytes.read COUNT : 0
1795187162.868	rocksdb.blobdb.write.inlined COUNT : 0
1795187162.868	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795187162.868	rocksdb.blobdb.write.blob COUNT : 0
1795187162.868	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795187162.868	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795187162.868	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795187162.868	rocksdb.blobdb.blob.file.synced COUNT : 0
1795187162.868	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795187162.868	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795187162.868	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795187162.868	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795187162.868	rocksdb.blobdb.gc.num.files COUNT : 0
1795187162.868	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795187162.868	rocksdb.blobdb.gc.failures COUNT : 0
1795187162.868	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795187162.868	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795187162.868	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795187162.868	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795187162.868	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795187162.868	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795187162.868	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795187162.868	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795187162.868	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795187162.868	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795187162.868	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795187162.868	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795187162.868	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795187162.868	rocksdb.txn.get.tryagain COUNT : 0
1795187162.868	rocksdb.number.multiget.keys.found COUNT : 0
1795187162.868	rocksdb.num.iterator.created COUNT : 0
1795187162.868	rocksdb.num.iterator.deleted COUNT : 0
1795187162.868	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795187162.868	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795187162.868	rocksdb.block.cache.compression.dict.add COUNT : 0
1795187162.868	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795187162.868	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795187162.868	rocksdb.block.cache.add.redundant COUNT : 0
1795187162.868	rocksdb.block.cache.index.add.redundant COUNT : 0
1795187162.868	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795187162.868	rocksdb.block.cache.data.add.redundant COUNT : 0
1795187162.868	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795187162.868	rocksdb.files.marked.trash COUNT : 0
1795187162.868	rocksdb.files.deleted.immediately COUNT : 1658366
1795187162.868	rocksdb.error.handler.bg.errro.count COUNT : 0
1795187162.868	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795187162.868	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795187162.868	rocksdb.error.handler.autoresume.count COUNT : 0
1795187162.868	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795187162.868	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795187162.868	rocksdb.memtable.payload.bytes.at.flush COUNT : 32012985616
1795187162.868	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1958712
1795187162.868	rocksdb.secondary.cache.hits COUNT : 0
1795187162.868	rocksdb.verify_checksum.read.bytes COUNT : 0
1795187162.868	rocksdb.backup.read.bytes COUNT : 0
1795187162.868	rocksdb.backup.write.bytes COUNT : 0
1795187162.868	rocksdb.remote.compact.read.bytes COUNT : 0
1795187162.868	rocksdb.remote.compact.write.bytes COUNT : 0
1795187162.868	rocksdb.hot.file.read.bytes COUNT : 0
1795187162.868	rocksdb.warm.file.read.bytes COUNT : 0
1795187162.868	rocksdb.cold.file.read.bytes COUNT : 0
1795187162.869	rocksdb.hot.file.read.count COUNT : 0
1795187162.869	rocksdb.warm.file.read.count COUNT : 0
1795187162.869	rocksdb.cold.file.read.count COUNT : 0
1795187162.869	rocksdb.last.level.read.bytes COUNT : 0
1795187162.869	rocksdb.last.level.read.count COUNT : 0
1795187162.869	rocksdb.non.last.level.read.bytes COUNT : 757819397585
1795187162.869	rocksdb.non.last.level.read.count COUNT : 186882086
1795187162.869	rocksdb.block.checksum.compute.count COUNT : 183552694
1795187162.869	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.db.write.micros P50 : 48.321385 P95 : 15275.703217 P99 : 59136.552910 P100 : 5198672.000000 COUNT : 30547908 SUM : 118558051080
1795187162.869	rocksdb.compaction.times.micros P50 : 90755.641567 P95 : 214601.064556 P99 : 494741.104972 P100 : 4778543.000000 COUNT : 262182 SUM : 27103657647
1795187162.869	rocksdb.compaction.times.cpu_micros P50 : 89333.525363 P95 : 209326.879271 P99 : 490565.759939 P100 : 4607060.000000 COUNT : 262182 SUM : 26629629557
1795187162.869	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.table.sync.micros P50 : 28429.761905 P95 : 156357.541899 P99 : 442361.864407 P100 : 1098321.000000 COUNT : 16354 SUM : 699207099
1795187162.869	rocksdb.compaction.outfile.sync.micros P50 : 6554.613281 P95 : 13664.329754 P99 : 24000.469285 P100 : 1206793.000000 COUNT : 1616092 SUM : 13211740479
1795187162.869	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.manifest.file.sync.micros P50 : 488.844824 P95 : 757.202534 P99 : 286820.337815 P100 : 975953.000000 COUNT : 217534 SUM : 1588485065
1795187162.869	rocksdb.table.open.io.micros P50 : 230.320336 P95 : 378.926882 P99 : 571.466968 P100 : 484166.000000 COUNT : 1664696 SUM : 510580592
1795187162.869	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.read.block.compaction.micros P50 : 46.071082 P95 : 126.753462 P99 : 230.155719 P100 : 820356.000000 COUNT : 180223302 SUM : 12205549650
1795187162.869	rocksdb.read.block.get.micros P50 : 47.697765 P95 : 105.665612 P99 : 213.284220 P100 : 483950.000000 COUNT : 1664696 SUM : 111583722
1795187162.869	rocksdb.write.raw.block.micros P50 : 0.531804 P95 : 1.396159 P99 : 30.640761 P100 : 2016748.000000 COUNT : 185814543 SUM : 296562761
1795187162.869	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.numfiles.in.singlecompaction P50 : 5.772311 P95 : 9.570785 P99 : 9.922288 P100 : 44.000000 COUNT : 262841 SUM : 1626275
1795187162.869	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.db.write.stall P50 : 0.664452 P95 : 3438.932393 P99 : 14726.913737 P100 : 5194889.000000 COUNT : 23721974 SUM : 25733179152
1795187162.869	rocksdb.sst.read.micros P50 : 45.816482 P95 : 123.391614 P99 : 226.069578 P100 : 820349.000000 COUNT : 186882086 SUM : 12446388244
1795187162.869	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.bytes.per.write P50 : 1120.802782 P95 : 3465.743110 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23743952 SUM : 32176943376
1795187162.869	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.db.flush.micros P50 : 44976.305144 P95 : 205953.667954 P99 : 462639.711191 P100 : 5134106.000000 COUNT : 16352 SUM : 1023437029
1795187162.869	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795187162.869	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1625616 SUM : 0
1795187162.869	
