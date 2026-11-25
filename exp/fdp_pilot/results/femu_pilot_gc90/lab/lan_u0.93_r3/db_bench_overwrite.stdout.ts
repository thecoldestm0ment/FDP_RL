1795519066.495	Initializing RocksDB Options from the specified file
1795519066.495	Initializing RocksDB Options from command-line flags
1795519080.018	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795519080.019	Values:     1024 bytes each (512 bytes after compression)
1795519080.019	Entries:    17191679
1795519080.019	Prefix:    0 bytes
1795519080.019	Keys per prefix:    0
1795519080.019	RawSize:    17051.1 MB (estimated)
1795519080.019	FileSize:   8656.7 MB (estimated)
1795519080.019	Write rate: 0 bytes/second
1795519080.019	Read rate: 0 ops/second
1795519080.019	Compression: NoCompression
1795519080.019	Compression sampling rate: 0
1795519080.019	Memtablerep: SkipListFactory
1795519080.019	Perf Level: 1
1795519080.019	------------------------------------------------
1795519080.019	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795561170.161	overwrite    :    4893.187 micros/op 816 ops/sec;    0.8 MB/s
1795561175.161	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795561175.161	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795561185.161	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795561195.170	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795561205.172	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795561215.172	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795561225.172	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795561235.172	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795561245.172	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795561245.172	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795561245.172	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795561245.173	
1795561245.173	Level Files Size(MB)
1795561245.173	--------------------
1795561245.173	  0        0        0
1795561245.173	  1        5        2
1795561245.173	  2       57       25
1795561245.173	  3      606      250
1795561245.173	  4     5708     2500
1795561245.173	  5    36038    17326
1795561245.173	  6        0        0
1795561245.173	
1795561245.176	
1795561245.176	
1795561245.176	** Compaction Stats [default] **
1795561245.176	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795561245.176	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795561245.176	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     22.0   1578.49           1026.43     18410    0.086     36K      5       0.0       0.0
1795561245.176	  L1      5/0    2.40 MB   1.0     55.8    33.8     21.9      55.8     33.9       0.0   1.7     23.8     23.8   2403.44           2340.90      9185    0.262     56M   6850       0.0       0.0
1795561245.176	  L2     57/0   24.80 MB   1.0    167.3    33.8    133.5     167.3     33.8       0.0   4.9     23.2     23.2   7397.52           7215.23     72500    0.102    169M    51K       0.0       0.0
1795561245.176	  L3    606/0   249.76 MB   1.0    219.2    33.8    185.4     218.7     33.3       0.0   6.5     23.6     23.6   9496.05           9276.26     76711    0.124    222M   514K       0.0       0.0
1795561245.176	  L4   5708/0    2.44 GB   1.0    222.3    33.3    189.1     217.4     28.3       0.0   6.5     23.0     22.5   9904.01           9678.24     77143    0.128    225M  5053K       0.0       0.0
1795561245.176	  L5  36038/0   16.92 GB   0.7    144.9    28.3    116.6     119.3      2.7       0.0   4.2     25.1     20.7   5902.64           5762.20     62760    0.094    147M    25M       0.0       0.0
1795561245.176	 Sum  42414/0   19.63 GB   0.0    809.6   163.0    646.5     812.3    165.8       0.0  24.0     22.6     22.7  36682.14          35299.27    316709    0.116    822M    31M       0.0       0.0
1795561245.176	 Int      0/0    0.00 KB   0.0      0.5     0.1      0.4       0.4      0.0       0.0 455661303.0     22.7     19.3     22.57             22.49       174    0.130    508K    77K       0.0       0.0
1795561245.176	
1795561245.176	** Compaction Stats [default] **
1795561245.176	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795561245.176	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795561245.176	 Low      0/0    0.00 KB   0.0    809.6   163.0    646.5     778.5    131.9       0.0   0.0     23.6     22.7  35107.48          34276.63    298303    0.118    822M    31M       0.0       0.0
1795561245.176	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     22.0   1574.65           1022.64     18404    0.086       0      0       0.0       0.0
1795561245.176	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    129.0      0.01              0.00         2    0.007       0      0       0.0       0.0
1795561245.176	
1795561245.176	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795561245.176	
1795561245.176	Uptime(secs): 42178.6 total, 36.8 interval
1795561245.176	Flush(GB): cumulative 33.809, interval 0.000
1795561245.176	AddFile(GB): cumulative 0.000, interval 0.000
1795561245.176	AddFile(Total Files): cumulative 0, interval 0
1795561245.176	AddFile(L0 Files): cumulative 0, interval 0
1795561245.176	AddFile(Keys): cumulative 0, interval 0
1795561245.176	Cumulative compaction: 812.29 GB write, 19.72 MB/s write, 809.58 GB read, 19.65 MB/s read, 36682.1 seconds
1795561245.176	Interval compaction: 0.42 GB write, 11.81 MB/s write, 0.50 GB read, 13.93 MB/s read, 22.6 seconds
1795561245.176	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 354085 slowdown for pending_compaction_bytes, 23 memtable_compaction, 4 memtable_slowdown, interval 46 total count
1795561245.176	Block cache LRUCache@0x56491e9fca70#64081 capacity: 8.00 MB collections: 235 last_copies: 0 last_secs: 0.000109 secs_since: 36
1795561245.176	Block cache entry stats(count,size,portion): Misc(1,0.00 KB,0%)
1795561245.176	
1795561245.176	** File Read Latency Histogram By Level [default] **
1795561245.176	** Level 0 read latency histogram (micros):
1795561245.176	Count: 8685913 Average: 75.8801  StdDev: 440.00
1795561245.176	Min: 14  Median: 45.9255  Max: 634291
1795561245.176	Percentiles: P50: 45.93 P75: 68.34 P99: 229.09 P99.9: 436.16 P99.99: 4154.37
1795561245.176	------------------------------------------------------
1795561245.176	(      10,      15 ]        9   0.000%   0.000% 
1795561245.176	(      15,      22 ]        2   0.000%   0.000% 
1795561245.176	(      22,      34 ]        1   0.000%   0.000% 
1795561245.176	(      34,      51 ]  6190938  71.276%  71.276% ##############
1795561245.176	(      51,      76 ]   466414   5.370%  76.646% #
1795561245.176	(      76,     110 ]  1522075  17.523%  94.169% ####
1795561245.176	(     110,     170 ]   328750   3.785%  97.954% #
1795561245.176	(     170,     250 ]   123009   1.416%  99.370% 
1795561245.176	(     250,     380 ]    43955   0.506%  99.876% 
1795561245.176	(     380,     580 ]     7386   0.085%  99.961% 
1795561245.176	(     580,     870 ]     1454   0.017%  99.978% 
1795561245.176	(     870,    1300 ]      698   0.008%  99.986% 
1795561245.176	(    1300,    1900 ]      196   0.002%  99.988% 
1795561245.176	(    1900,    2900 ]       88   0.001%  99.989% 
1795561245.176	(    2900,    4400 ]       83   0.001%  99.990% 
1795561245.176	(    4400,    6600 ]       12   0.000%  99.990% 
1795561245.176	(    6600,    9900 ]       22   0.000%  99.991% 
1795561245.176	(    9900,   14000 ]       10   0.000%  99.991% 
1795561245.176	(   14000,   22000 ]        6   0.000%  99.991% 
1795561245.176	(   22000,   33000 ]        1   0.000%  99.991% 
1795561245.176	(   33000,   50000 ]        1   0.000%  99.991% 
1795561245.176	(   50000,   75000 ]       36   0.000%  99.991% 
1795561245.176	(   75000,  110000 ]      535   0.006%  99.997% 
1795561245.176	(  110000,  170000 ]       64   0.001%  99.998% 
1795561245.176	(  170000,  250000 ]       86   0.001%  99.999% 
1795561245.176	(  250000,  380000 ]       65   0.001% 100.000% 
1795561245.176	(  380000,  570000 ]       16   0.000% 100.000% 
1795561245.176	(  570000,  860000 ]        2   0.000% 100.000% 
1795561245.176	
1795561245.176	** Level 1 read latency histogram (micros):
1795561245.176	Count: 14751020 Average: 86.8538  StdDev: 215.13
1795561245.176	Min: 5  Median: 45.8758  Max: 743150
1795561245.176	Percentiles: P50: 45.88 P75: 66.74 P99: 226.69 P99.9: 487.29 P99.99: 93746.59
1795561245.176	------------------------------------------------------
1795561245.176	(       4,       6 ]       12   0.000%   0.000% 
1795561245.176	(       6,      10 ]       98   0.001%   0.001% 
1795561245.176	(      10,      15 ]       54   0.000%   0.001% 
1795561245.176	(      15,      22 ]       17   0.000%   0.001% 
1795561245.176	(      22,      34 ]        8   0.000%   0.001% 
1795561245.176	(      34,      51 ] 10557626  71.572%  71.573% ##############
1795561245.176	(      51,      76 ]   802645   5.441%  77.015% #
1795561245.176	(      76,     110 ]  2550920  17.293%  94.308% ###
1795561245.176	(     110,     170 ]   547012   3.708%  98.016% #
1795561245.176	(     170,     250 ]   204802   1.388%  99.405% 
1795561245.176	(     250,     380 ]    65818   0.446%  99.851% 
1795561245.176	(     380,     580 ]    13528   0.092%  99.943% 
1795561245.176	(     580,     870 ]     3505   0.024%  99.966% 
1795561245.176	(     870,    1300 ]     1365   0.009%  99.976% 
1795561245.176	(    1300,    1900 ]      365   0.002%  99.978% 
1795561245.176	(    1900,    2900 ]      149   0.001%  99.979% 
1795561245.176	(    2900,    4400 ]      140   0.001%  99.980% 
1795561245.176	(    4400,    6600 ]       32   0.000%  99.980% 
1795561245.176	(    6600,    9900 ]       36   0.000%  99.980% 
1795561245.177	(    9900,   14000 ]       31   0.000%  99.981% 
1795561245.177	(   14000,   22000 ]        4   0.000%  99.981% 
1795561245.177	(   22000,   33000 ]        7   0.000%  99.981% 
1795561245.177	(   33000,   50000 ]       17   0.000%  99.981% 
1795561245.177	(   50000,   75000 ]      205   0.001%  99.982% 
1795561245.177	(   75000,  110000 ]     2145   0.015%  99.997% 
1795561245.177	(  110000,  170000 ]      108   0.001%  99.997% 
1795561245.177	(  170000,  250000 ]      238   0.002%  99.999% 
1795561245.177	(  250000,  380000 ]      129   0.001% 100.000% 
1795561245.177	(  380000,  570000 ]       44   0.000% 100.000% 
1795561245.177	(  570000,  860000 ]       11   0.000% 100.000% 
1795561245.177	
1795561245.177	** Level 2 read latency histogram (micros):
1795561245.177	Count: 44359019 Average: 76.8755  StdDev: 94.83
1795561245.177	Min: 5  Median: 46.0634  Max: 738617
1795561245.177	Percentiles: P50: 46.06 P75: 71.67 P99: 231.71 P99.9: 382.44 P99.99: 3489.36
1795561245.177	------------------------------------------------------
1795561245.177	(       4,       6 ]      308   0.001%   0.001% 
1795561245.177	(       6,      10 ]     2738   0.006%   0.007% 
1795561245.177	(      10,      15 ]     1008   0.002%   0.009% 
1795561245.177	(      15,      22 ]      190   0.000%   0.010% 
1795561245.177	(      22,      34 ]       68   0.000%   0.010% 
1795561245.177	(      34,      51 ] 31249853  70.448%  70.457% ##############
1795561245.177	(      51,      76 ]  2437187   5.494%  75.952% #
1795561245.177	(      76,     110 ]  7975921  17.980%  93.932% ####
1795561245.177	(     110,     170 ]  1712324   3.860%  97.792% #
1795561245.177	(     170,     250 ]   694692   1.566%  99.358% 
1795561245.177	(     250,     380 ]   239998   0.541%  99.899% 
1795561245.177	(     380,     580 ]    30551   0.069%  99.968% 
1795561245.177	(     580,     870 ]     5948   0.013%  99.981% 
1795561245.177	(     870,    1300 ]     2214   0.005%  99.986% 
1795561245.177	(    1300,    1900 ]      818   0.002%  99.988% 
1795561245.177	(    1900,    2900 ]      549   0.001%  99.990% 
1795561245.177	(    2900,    4400 ]      550   0.001%  99.991% 
1795561245.177	(    4400,    6600 ]      158   0.000%  99.991% 
1795561245.177	(    6600,    9900 ]       85   0.000%  99.991% 
1795561245.177	(    9900,   14000 ]       60   0.000%  99.991% 
1795561245.177	(   14000,   22000 ]       17   0.000%  99.991% 
1795561245.177	(   22000,   33000 ]        5   0.000%  99.991% 
1795561245.177	(   33000,   50000 ]       21   0.000%  99.992% 
1795561245.177	(   50000,   75000 ]      205   0.000%  99.992% 
1795561245.177	(   75000,  110000 ]     3084   0.007%  99.999% 
1795561245.177	(  110000,  170000 ]      257   0.001% 100.000% 
1795561245.177	(  170000,  250000 ]      385   0.001% 100.000% 
1795561245.177	(  250000,  380000 ]      276   0.001% 100.001% 
1795561245.177	(  380000,  570000 ]      124   0.000% 100.001% 
1795561245.177	(  570000,  860000 ]       17   0.000% 100.001% 
1795561245.177	
1795561245.177	** Level 3 read latency histogram (micros):
1795561245.177	Count: 58033050 Average: 76.7886  StdDev: 62.04
1795561245.177	Min: 5  Median: 46.0834  Max: 1040639
1795561245.177	Percentiles: P50: 46.08 P75: 73.14 P99: 227.19 P99.9: 375.84 P99.99: 3184.50
1795561245.177	------------------------------------------------------
1795561245.177	(       4,       6 ]      427   0.001%   0.001% 
1795561245.177	(       6,      10 ]     2917   0.005%   0.006% 
1795561245.177	(      10,      15 ]      949   0.002%   0.007% 
1795561245.177	(      15,      22 ]      232   0.000%   0.008% 
1795561245.177	(      22,      34 ]       83   0.000%   0.008% 
1795561245.177	(      34,      51 ] 40816524  70.333%  70.341% ##############
1795561245.177	(      51,      76 ]  3053279   5.261%  75.602% #
1795561245.177	(      76,     110 ] 10674915  18.395%  93.997% ####
1795561245.177	(     110,     170 ]  2273425   3.917%  97.914% #
1795561245.177	(     170,     250 ]   881257   1.519%  99.433% 
1795561245.177	(     250,     380 ]   279966   0.482%  99.915% 
1795561245.177	(     380,     580 ]    32904   0.057%  99.972% 
1795561245.177	(     580,     870 ]     6125   0.011%  99.983% 
1795561245.177	(     870,    1300 ]     2519   0.004%  99.987% 
1795561245.177	(    1300,    1900 ]      967   0.002%  99.989% 
1795561245.177	(    1900,    2900 ]      653   0.001%  99.990% 
1795561245.177	(    2900,    4400 ]      552   0.001%  99.991% 
1795561245.177	(    4400,    6600 ]      212   0.000%  99.991% 
1795561245.177	(    6600,    9900 ]      131   0.000%  99.991% 
1795561245.177	(    9900,   14000 ]       54   0.000%  99.991% 
1795561245.177	(   14000,   22000 ]       22   0.000%  99.991% 
1795561245.177	(   22000,   33000 ]        9   0.000%  99.992% 
1795561245.177	(   33000,   50000 ]       15   0.000%  99.992% 
1795561245.177	(   50000,   75000 ]      248   0.000%  99.992% 
1795561245.177	(   75000,  110000 ]     4103   0.007%  99.999% 
1795561245.177	(  110000,  170000 ]      292   0.001% 100.000% 
1795561245.177	(  170000,  250000 ]      573   0.001% 100.001% 
1795561245.177	(  250000,  380000 ]      326   0.001% 100.001% 
1795561245.177	(  380000,  570000 ]      145   0.000% 100.001% 
1795561245.177	(  570000,  860000 ]       40   0.000% 100.001% 
1795561245.177	(  860000, 1200000 ]        2   0.000% 100.001% 
1795561245.177	
1795561245.177	** Level 4 read latency histogram (micros):
1795561245.177	Count: 57592679 Average: 77.3203  StdDev: 68.20
1795561245.177	Min: 5  Median: 46.1160  Max: 2514947
1795561245.177	Percentiles: P50: 46.12 P75: 73.68 P99: 227.00 P99.9: 376.21 P99.99: 3623.84
1795561245.177	------------------------------------------------------
1795561245.177	(       4,       6 ]      282   0.000%   0.000% 
1795561245.177	(       6,      10 ]     2014   0.003%   0.004% 
1795561245.177	(      10,      15 ]      693   0.001%   0.005% 
1795561245.177	(      15,      22 ]      161   0.000%   0.005% 
1795561245.177	(      22,      34 ]       45   0.000%   0.006% 
1795561245.177	(      34,      51 ] 40399786  70.147%  70.153% ##############
1795561245.177	(      51,      76 ]  3077080   5.343%  75.496% #
1795561245.177	(      76,     110 ] 10631170  18.459%  93.955% ####
1795561245.177	(     110,     170 ]  2287233   3.971%  97.926% #
1795561245.177	(     170,     250 ]   867778   1.507%  99.433% 
1795561245.177	(     250,     380 ]   276921   0.481%  99.914% 
1795561245.177	(     380,     580 ]    31948   0.055%  99.969% 
1795561245.177	(     580,     870 ]     6484   0.011%  99.981% 
1795561245.177	(     870,    1300 ]     3244   0.006%  99.986% 
1795561245.177	(    1300,    1900 ]     1080   0.002%  99.988% 
1795561245.177	(    1900,    2900 ]      689   0.001%  99.989% 
1795561245.177	(    2900,    4400 ]      646   0.001%  99.991% 
1795561245.177	(    4400,    6600 ]      175   0.000%  99.991% 
1795561245.177	(    6600,    9900 ]      104   0.000%  99.991% 
1795561245.177	(    9900,   14000 ]       45   0.000%  99.991% 
1795561245.177	(   14000,   22000 ]       29   0.000%  99.991% 
1795561245.177	(   22000,   33000 ]       11   0.000%  99.991% 
1795561245.177	(   33000,   50000 ]       18   0.000%  99.991% 
1795561245.177	(   50000,   75000 ]      303   0.001%  99.992% 
1795561245.177	(   75000,  110000 ]     3979   0.007%  99.999% 
1795561245.177	(  110000,  170000 ]      447   0.001%  99.999% 
1795561245.177	(  170000,  250000 ]      624   0.001% 100.001% 
1795561245.177	(  250000,  380000 ]      337   0.001% 100.001% 
1795561245.177	(  380000,  570000 ]      131   0.000% 100.001% 
1795561245.177	(  570000,  860000 ]       28   0.000% 100.001% 
1795561245.177	( 1900000, 2900000 ]        1   0.000% 100.001% 
1795561245.177	
1795561245.177	** Level 5 read latency histogram (micros):
1795561245.177	Count: 30967182 Average: 72.7228  StdDev: 102.43
1795561245.177	Min: 6  Median: 45.7677  Max: 748258
1795561245.177	Percentiles: P50: 45.77 P75: 62.44 P99: 227.78 P99.9: 378.60 P99.99: 3183.19
1795561245.177	------------------------------------------------------
1795561245.177	(       4,       6 ]      169   0.001%   0.001% 
1795561245.177	(       6,      10 ]     1858   0.006%   0.007% 
1795561245.177	(      10,      15 ]      722   0.002%   0.009% 
1795561245.177	(      15,      22 ]      145   0.000%   0.009% 
1795561245.177	(      22,      34 ]       75   0.000%   0.010% 
1795561245.177	(      34,      51 ] 22363753  72.218%  72.227% ##############
1795561245.177	(      51,      76 ]  1876337   6.059%  78.286% #
1795561245.177	(      76,     110 ]  5035088  16.259%  94.546% ###
1795561245.177	(     110,     170 ]  1040943   3.361%  97.907% #
1795561245.177	(     170,     250 ]   468572   1.513%  99.420% 
1795561245.177	(     250,     380 ]   150171   0.485%  99.905% 
1795561245.177	(     380,     580 ]    15998   0.052%  99.957% 
1795561245.177	(     580,     870 ]     5244   0.017%  99.974% 
1795561245.177	(     870,    1300 ]     3147   0.010%  99.984% 
1795561245.177	(    1300,    1900 ]      871   0.003%  99.987% 
1795561245.177	(    1900,    2900 ]      842   0.003%  99.990% 
1795561245.177	(    2900,    4400 ]      796   0.003%  99.992% 
1795561245.177	(    4400,    6600 ]      440   0.001%  99.994% 
1795561245.177	(    6600,    9900 ]      220   0.001%  99.994% 
1795561245.177	(    9900,   14000 ]       59   0.000%  99.994% 
1795561245.177	(   14000,   22000 ]       11   0.000%  99.994% 
1795561245.177	(   22000,   33000 ]        6   0.000%  99.994% 
1795561245.177	(   33000,   50000 ]        6   0.000%  99.994% 
1795561245.177	(   50000,   75000 ]       18   0.000%  99.995% 
1795561245.177	(   75000,  110000 ]     1403   0.005%  99.999% 
1795561245.177	(  110000,  170000 ]      243   0.001% 100.000% 
1795561245.177	(  170000,  250000 ]      209   0.001% 100.001% 
1795561245.177	(  250000,  380000 ]      196   0.001% 100.001% 
1795561245.177	(  380000,  570000 ]       63   0.000% 100.001% 
1795561245.177	(  570000,  860000 ]       14   0.000% 100.001% 
1795561245.177	
1795561245.177	
1795561245.177	** DB Stats **
1795561245.177	Uptime(secs): 42178.7 total, 36.8 interval
1795561245.177	Cumulative writes: 34M writes, 34M keys, 25M commit groups, 1.3 writes per commit group, ingest: 33.72 GB, 0.82 MB/s
1795561245.177	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.72 GB, 0.82 MB/s
1795561245.177	Cumulative stall: 10:08:50.274 H:M:S, 86.6 percent
1795561245.177	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795561245.177	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795561245.177	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795561245.177	
1795561245.177	STATISTICS:
1795561245.177	rocksdb.block.cache.miss COUNT : 206762476
1795561245.177	rocksdb.block.cache.hit COUNT : 0
1795561245.177	rocksdb.block.cache.add COUNT : 0
1795561245.177	rocksdb.block.cache.add.failures COUNT : 0
1795561245.177	rocksdb.block.cache.index.miss COUNT : 0
1795561245.177	rocksdb.block.cache.index.hit COUNT : 0
1795561245.177	rocksdb.block.cache.index.add COUNT : 0
1795561245.177	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795561245.177	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795561245.177	rocksdb.block.cache.filter.miss COUNT : 0
1795561245.177	rocksdb.block.cache.filter.hit COUNT : 0
1795561245.177	rocksdb.block.cache.filter.add COUNT : 0
1795561245.177	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795561245.177	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795561245.177	rocksdb.block.cache.data.miss COUNT : 206762476
1795561245.177	rocksdb.block.cache.data.hit COUNT : 0
1795561245.177	rocksdb.block.cache.data.add COUNT : 0
1795561245.177	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795561245.177	rocksdb.block.cache.bytes.read COUNT : 0
1795561245.177	rocksdb.block.cache.bytes.write COUNT : 0
1795561245.177	rocksdb.bloom.filter.useful COUNT : 0
1795561245.177	rocksdb.bloom.filter.full.positive COUNT : 0
1795561245.177	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795561245.177	rocksdb.bloom.filter.micros COUNT : 0
1795561245.177	rocksdb.persistent.cache.hit COUNT : 0
1795561245.177	rocksdb.persistent.cache.miss COUNT : 0
1795561245.177	rocksdb.sim.block.cache.hit COUNT : 0
1795561245.177	rocksdb.sim.block.cache.miss COUNT : 0
1795561245.177	rocksdb.memtable.hit COUNT : 0
1795561245.177	rocksdb.memtable.miss COUNT : 0
1795561245.177	rocksdb.l0.hit COUNT : 0
1795561245.177	rocksdb.l1.hit COUNT : 0
1795561245.177	rocksdb.l2andup.hit COUNT : 0
1795561245.177	rocksdb.compaction.key.drop.new COUNT : 31626266
1795561245.177	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795561245.177	rocksdb.compaction.key.drop.range_del COUNT : 0
1795561245.177	rocksdb.compaction.key.drop.user COUNT : 0
1795561245.177	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795561245.177	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795561245.177	rocksdb.compaction.cancelled COUNT : 0
1795561245.177	rocksdb.number.keys.written COUNT : 34383360
1795561245.177	rocksdb.number.keys.read COUNT : 0
1795561245.177	rocksdb.number.keys.updated COUNT : 0
1795561245.177	rocksdb.bytes.written COUNT : 36205339188
1795561245.177	rocksdb.bytes.read COUNT : 0
1795561245.177	rocksdb.number.db.seek COUNT : 0
1795561245.177	rocksdb.number.db.next COUNT : 0
1795561245.177	rocksdb.number.db.prev COUNT : 0
1795561245.177	rocksdb.number.db.seek.found COUNT : 0
1795561245.177	rocksdb.number.db.next.found COUNT : 0
1795561245.177	rocksdb.number.db.prev.found COUNT : 0
1795561245.178	rocksdb.db.iter.bytes.read COUNT : 0
1795561245.178	rocksdb.no.file.closes COUNT : 0
1795561245.178	rocksdb.no.file.opens COUNT : 1907707
1795561245.178	rocksdb.no.file.errors COUNT : 0
1795561245.178	rocksdb.l0.slowdown.micros COUNT : 0
1795561245.178	rocksdb.memtable.compaction.micros COUNT : 0
1795561245.178	rocksdb.l0.num.files.stall.micros COUNT : 0
1795561245.178	rocksdb.stall.micros COUNT : 36530274199
1795561245.178	rocksdb.db.mutex.wait.micros COUNT : 0
1795561245.178	rocksdb.rate.limit.delay.millis COUNT : 0
1795561245.178	rocksdb.num.iterators COUNT : 0
1795561245.178	rocksdb.number.multiget.get COUNT : 0
1795561245.178	rocksdb.number.multiget.keys.read COUNT : 0
1795561245.178	rocksdb.number.multiget.bytes.read COUNT : 0
1795561245.178	rocksdb.number.deletes.filtered COUNT : 0
1795561245.178	rocksdb.number.merge.failures COUNT : 0
1795561245.178	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795561245.178	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795561245.178	rocksdb.number.reseeks.iteration COUNT : 0
1795561245.178	rocksdb.getupdatessince.calls COUNT : 0
1795561245.178	rocksdb.block.cachecompressed.miss COUNT : 0
1795561245.178	rocksdb.block.cachecompressed.hit COUNT : 0
1795561245.178	rocksdb.block.cachecompressed.add COUNT : 0
1795561245.178	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795561245.178	rocksdb.wal.synced COUNT : 0
1795561245.178	rocksdb.wal.bytes COUNT : 36205339188
1795561245.178	rocksdb.write.self COUNT : 25759279
1795561245.178	rocksdb.write.other COUNT : 8624081
1795561245.178	rocksdb.write.timeout COUNT : 0
1795561245.178	rocksdb.write.wal COUNT : 34383360
1795561245.178	rocksdb.compact.read.bytes COUNT : 869123345883
1795561245.178	rocksdb.compact.write.bytes COUNT : 835888652055
1795561245.178	rocksdb.flush.write.bytes COUNT : 36306227093
1795561245.178	rocksdb.compact.read.marked.bytes COUNT : 0
1795561245.178	rocksdb.compact.read.periodic.bytes COUNT : 0
1795561245.178	rocksdb.compact.read.ttl.bytes COUNT : 0
1795561245.178	rocksdb.compact.write.marked.bytes COUNT : 0
1795561245.178	rocksdb.compact.write.periodic.bytes COUNT : 0
1795561245.178	rocksdb.compact.write.ttl.bytes COUNT : 0
1795561245.178	rocksdb.number.direct.load.table.properties COUNT : 0
1795561245.178	rocksdb.number.superversion_acquires COUNT : 0
1795561245.178	rocksdb.number.superversion_releases COUNT : 0
1795561245.178	rocksdb.number.superversion_cleanups COUNT : 0
1795561245.178	rocksdb.number.block.compressed COUNT : 0
1795561245.178	rocksdb.number.block.decompressed COUNT : 0
1795561245.178	rocksdb.number.block.not_compressed COUNT : 0
1795561245.178	rocksdb.merge.operation.time.nanos COUNT : 0
1795561245.178	rocksdb.filter.operation.time.nanos COUNT : 0
1795561245.178	rocksdb.row.cache.hit COUNT : 0
1795561245.178	rocksdb.row.cache.miss COUNT : 0
1795561245.178	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795561245.178	rocksdb.read.amp.total.read.bytes COUNT : 0
1795561245.178	rocksdb.number.rate_limiter.drains COUNT : 0
1795561245.178	rocksdb.number.iter.skip COUNT : 0
1795561245.178	rocksdb.blobdb.num.put COUNT : 0
1795561245.178	rocksdb.blobdb.num.write COUNT : 0
1795561245.178	rocksdb.blobdb.num.get COUNT : 0
1795561245.178	rocksdb.blobdb.num.multiget COUNT : 0
1795561245.178	rocksdb.blobdb.num.seek COUNT : 0
1795561245.178	rocksdb.blobdb.num.next COUNT : 0
1795561245.178	rocksdb.blobdb.num.prev COUNT : 0
1795561245.178	rocksdb.blobdb.num.keys.written COUNT : 0
1795561245.178	rocksdb.blobdb.num.keys.read COUNT : 0
1795561245.178	rocksdb.blobdb.bytes.written COUNT : 0
1795561245.178	rocksdb.blobdb.bytes.read COUNT : 0
1795561245.178	rocksdb.blobdb.write.inlined COUNT : 0
1795561245.178	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795561245.178	rocksdb.blobdb.write.blob COUNT : 0
1795561245.178	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795561245.178	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795561245.178	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795561245.178	rocksdb.blobdb.blob.file.synced COUNT : 0
1795561245.178	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795561245.178	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795561245.178	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795561245.178	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795561245.178	rocksdb.blobdb.gc.num.files COUNT : 0
1795561245.178	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795561245.178	rocksdb.blobdb.gc.failures COUNT : 0
1795561245.178	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795561245.178	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795561245.178	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795561245.178	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795561245.178	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795561245.178	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795561245.178	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795561245.178	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795561245.178	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795561245.178	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795561245.178	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795561245.178	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795561245.178	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795561245.178	rocksdb.txn.get.tryagain COUNT : 0
1795561245.178	rocksdb.number.multiget.keys.found COUNT : 0
1795561245.178	rocksdb.num.iterator.created COUNT : 0
1795561245.178	rocksdb.num.iterator.deleted COUNT : 0
1795561245.178	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795561245.178	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795561245.178	rocksdb.block.cache.compression.dict.add COUNT : 0
1795561245.178	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795561245.178	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795561245.178	rocksdb.block.cache.add.redundant COUNT : 0
1795561245.178	rocksdb.block.cache.index.add.redundant COUNT : 0
1795561245.178	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795561245.178	rocksdb.block.cache.data.add.redundant COUNT : 0
1795561245.178	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795561245.178	rocksdb.files.marked.trash COUNT : 0
1795561245.178	rocksdb.files.deleted.immediately COUNT : 1902146
1795561245.178	rocksdb.error.handler.bg.errro.count COUNT : 0
1795561245.178	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795561245.178	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795561245.178	rocksdb.error.handler.autoresume.count COUNT : 0
1795561245.178	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795561245.178	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795561245.178	rocksdb.memtable.payload.bytes.at.flush COUNT : 36033052832
1795561245.178	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1983864
1795561245.178	rocksdb.secondary.cache.hits COUNT : 0
1795561245.178	rocksdb.verify_checksum.read.bytes COUNT : 0
1795561245.178	rocksdb.backup.read.bytes COUNT : 0
1795561245.178	rocksdb.backup.write.bytes COUNT : 0
1795561245.178	rocksdb.remote.compact.read.bytes COUNT : 0
1795561245.178	rocksdb.remote.compact.write.bytes COUNT : 0
1795561245.178	rocksdb.hot.file.read.bytes COUNT : 0
1795561245.178	rocksdb.warm.file.read.bytes COUNT : 0
1795561245.178	rocksdb.cold.file.read.bytes COUNT : 0
1795561245.178	rocksdb.hot.file.read.count COUNT : 0
1795561245.178	rocksdb.warm.file.read.count COUNT : 0
1795561245.178	rocksdb.cold.file.read.count COUNT : 0
1795561245.178	rocksdb.last.level.read.bytes COUNT : 0
1795561245.178	rocksdb.last.level.read.count COUNT : 0
1795561245.178	rocksdb.non.last.level.read.bytes COUNT : 869410965568
1795561245.178	rocksdb.non.last.level.read.count COUNT : 214393304
1795561245.178	rocksdb.block.checksum.compute.count COUNT : 210577890
1795561245.178	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.db.write.micros P50 : 1292.093052 P95 : 19866.111891 P99 : 70283.199892 P100 : 7601431.000000 COUNT : 34383360 SUM : 168178427899
1795561245.178	rocksdb.compaction.times.micros P50 : 95436.339861 P95 : 274300.565673 P99 : 713841.542238 P100 : 6580428.000000 COUNT : 298303 SUM : 35107477301
1795561245.178	rocksdb.compaction.times.cpu_micros P50 : 93392.269233 P95 : 262271.451900 P99 : 702726.774675 P100 : 6272758.000000 COUNT : 298303 SUM : 34276628954
1795561245.178	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.table.sync.micros P50 : 29179.893298 P95 : 211525.773196 P99 : 602933.663366 P100 : 3254595.000000 COUNT : 18406 SUM : 996030541
1795561245.178	rocksdb.compaction.outfile.sync.micros P50 : 6570.461132 P95 : 13871.482246 P99 : 30130.635153 P100 : 3622070.000000 COUNT : 1852959 SUM : 16663600651
1795561245.178	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.manifest.file.sync.micros P50 : 491.237332 P95 : 18723.004695 P99 : 385376.006036 P100 : 3495311.000000 COUNT : 241375 SUM : 2687895170
1795561245.178	rocksdb.table.open.io.micros P50 : 240.695357 P95 : 437.625711 P99 : 675.925589 P100 : 747966.000000 COUNT : 1907707 SUM : 778718559
1795561245.178	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.read.block.compaction.micros P50 : 46.401986 P95 : 127.897603 P99 : 232.229496 P100 : 2514958.000000 COUNT : 206762476 SUM : 16118525506
1795561245.178	rocksdb.read.block.get.micros P50 : 54.078211 P95 : 107.626608 P99 : 220.439390 P100 : 387243.000000 COUNT : 1907707 SUM : 137946035
1795561245.178	rocksdb.write.raw.block.micros P50 : 0.539182 P95 : 1.607901 P99 : 40.144544 P100 : 2022073.000000 COUNT : 213069947 SUM : 414702367
1795561245.178	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.numfiles.in.singlecompaction P50 : 5.788759 P95 : 9.572747 P99 : 9.922264 P100 : 48.000000 COUNT : 299008 SUM : 1865998
1795561245.178	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.db.write.stall P50 : 0.724005 P95 : 4119.918666 P99 : 19867.499421 P100 : 7601132.000000 COUNT : 25737676 SUM : 36534093894
1795561245.178	rocksdb.sst.read.micros P50 : 46.020641 P95 : 124.471433 P99 : 228.299154 P100 : 2514947.000000 COUNT : 214393304 SUM : 16512367812
1795561245.178	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.bytes.per.write P50 : 1130.307862 P95 : 3585.127947 P99 : 4188.000000 P100 : 4188.000000 COUNT : 25759279 SUM : 36205339188
1795561245.178	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.db.flush.micros P50 : 58930.788330 P95 : 287000.000000 P99 : 673604.332130 P100 : 7314870.000000 COUNT : 18404 SUM : 1574645536
1795561245.178	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795561245.178	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1865293 SUM : 0
1795561245.178	
