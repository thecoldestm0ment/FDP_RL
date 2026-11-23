1795385666.518	Initializing RocksDB Options from the specified file
1795385666.518	Initializing RocksDB Options from command-line flags
1795385678.625	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795385678.625	Values:     1024 bytes each (512 bytes after compression)
1795385678.625	Entries:    17191679
1795385678.625	Prefix:    0 bytes
1795385678.625	Keys per prefix:    0
1795385678.625	RawSize:    17051.1 MB (estimated)
1795385678.625	FileSize:   8656.7 MB (estimated)
1795385678.625	Write rate: 0 bytes/second
1795385678.625	Read rate: 0 ops/second
1795385678.625	Compression: NoCompression
1795385678.625	Compression sampling rate: 0
1795385678.625	Memtablerep: SkipListFactory
1795385678.625	Perf Level: 1
1795385678.625	------------------------------------------------
1795385678.625	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795425260.787	overwrite    :    4598.268 micros/op 868 ops/sec;    0.9 MB/s
1795425265.788	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795425265.790	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795425275.811	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795425285.821	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795425295.821	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795425305.821	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795425315.821	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795425325.821	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795425325.822	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795425325.822	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795425325.823	
1795425325.823	Level Files Size(MB)
1795425325.823	--------------------
1795425325.823	  0        1        2
1795425325.823	  1        5        2
1795425325.823	  2       59       25
1795425325.823	  3      596      250
1795425325.823	  4     5746     2500
1795425325.823	  5    36006    17326
1795425325.823	  6        0        0
1795425325.823	
1795425325.829	
1795425325.829	
1795425325.829	** Compaction Stats [default] **
1795425325.829	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795425325.829	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795425325.829	  L0      1/0    1.91 MB   0.8      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     22.7   1526.59           1104.58     19917    0.077     25K      3       0.0       0.0
1795425325.829	  L1      5/0    2.43 MB   1.0     57.6    33.8     23.8      57.7     33.8       0.0   1.7     23.5     23.5   2510.53           2463.36      9941    0.253     58M   6778       0.0       0.0
1795425325.829	  L2     59/0   24.65 MB   1.0    172.1    33.8    138.3     172.1     33.8       0.0   5.1     23.0     23.0   7675.14           7523.85     72851    0.105    174M    51K       0.0       0.0
1795425325.829	  L3    596/0   249.63 MB   1.0    220.2    33.8    186.4     219.7     33.3       0.0   6.5     23.6     23.5   9554.60           9376.35     76859    0.124    223M   515K       0.0       0.0
1795425325.829	  L4   5746/0    2.44 GB   1.0    222.5    33.3    189.2     217.5     28.3       0.0   6.5     23.0     22.4   9927.06           9749.06     77168    0.129    226M  5050K       0.0       0.0
1795425325.829	  L5  36006/0   16.92 GB   0.7    144.9    28.3    116.6     119.3      2.7       0.0   4.2     25.1     20.7   5902.42           5797.42     62756    0.094    147M    26M       0.0       0.0
1795425325.829	 Sum  42413/0   19.63 GB   0.0    817.4   163.0    654.4     820.1    165.7       0.0  24.3     22.6     22.6  37096.34          36014.62    319492    0.116    830M    31M       0.0       0.0
1795425325.829	 Int      0/0    0.00 KB   0.0      0.6     0.1      0.5       0.5      0.0       0.0 558675405.0     23.0     19.5     27.30             26.89       211    0.129    622K    94K       0.0       0.0
1795425325.829	
1795425325.829	** Compaction Stats [default] **
1795425325.829	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795425325.829	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795425325.829	 Low      0/0    0.00 KB   0.0    817.4   163.0    654.4     786.3    131.9       0.0   0.0     23.5     22.6  35572.55          34912.70    299578    0.119    830M    31M       0.0       0.0
1795425325.829	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     22.7   1523.78           1101.92     19912    0.077       0      0       0.0       0.0
1795425325.829	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    121.7      0.01              0.00         2    0.004       0      0       0.0       0.0
1795425325.829	
1795425325.829	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795425325.829	
1795425325.829	Uptime(secs): 39659.3 total, 39.8 interval
1795425325.829	Flush(GB): cumulative 33.809, interval 0.000
1795425325.829	AddFile(GB): cumulative 0.000, interval 0.000
1795425325.829	AddFile(Total Files): cumulative 0, interval 0
1795425325.829	AddFile(L0 Files): cumulative 0, interval 0
1795425325.829	AddFile(Keys): cumulative 0, interval 0
1795425325.829	Cumulative compaction: 820.10 GB write, 21.17 MB/s write, 817.38 GB read, 21.10 MB/s read, 37096.3 seconds
1795425325.829	Interval compaction: 0.52 GB write, 13.39 MB/s write, 0.61 GB read, 15.78 MB/s read, 27.3 seconds
1795425325.829	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 359908 slowdown for pending_compaction_bytes, 23 memtable_compaction, 3 memtable_slowdown, interval 83 total count
1795425325.829	Block cache LRUCache@0x61bb10511a70#66315 capacity: 8.00 MB collections: 221 last_copies: 0 last_secs: 0.000141 secs_since: 39
1795425325.829	Block cache entry stats(count,size,portion): Misc(1,0.00 KB,0%)
1795425325.829	
1795425325.829	** File Read Latency Histogram By Level [default] **
1795425325.829	** Level 0 read latency histogram (micros):
1795425325.829	Count: 8688511 Average: 76.1420  StdDev: 337.78
1795425325.829	Min: 13  Median: 45.9510  Max: 760733
1795425325.829	Percentiles: P50: 45.95 P75: 70.53 P99: 230.88 P99.9: 448.69 P99.99: 4856.38
1795425325.829	------------------------------------------------------
1795425325.829	(      10,      15 ]        7   0.000%   0.000% 
1795425325.829	(      15,      22 ]        5   0.000%   0.000% 
1795425325.829	(      34,      51 ]  6179579  71.124%  71.124% ##############
1795425325.829	(      51,      76 ]   431198   4.963%  76.087% #
1795425325.829	(      76,     110 ]  1549164  17.830%  93.917% ####
1795425325.829	(     110,     170 ]   340703   3.921%  97.838% #
1795425325.829	(     170,     250 ]   132678   1.527%  99.365% 
1795425325.829	(     250,     380 ]    43775   0.504%  99.869% 
1795425325.829	(     380,     580 ]     7901   0.091%  99.960% 
1795425325.829	(     580,     870 ]     1649   0.019%  99.979% 
1795425325.829	(     870,    1300 ]      679   0.008%  99.986% 
1795425325.829	(    1300,    1900 ]      181   0.002%  99.989% 
1795425325.829	(    1900,    2900 ]       73   0.001%  99.989% 
1795425325.829	(    2900,    4400 ]       46   0.001%  99.990% 
1795425325.829	(    4400,    6600 ]       20   0.000%  99.990% 
1795425325.829	(    6600,    9900 ]       10   0.000%  99.990% 
1795425325.829	(    9900,   14000 ]        6   0.000%  99.990% 
1795425325.829	(   14000,   22000 ]        3   0.000%  99.990% 
1795425325.829	(   33000,   50000 ]        1   0.000%  99.990% 
1795425325.829	(   50000,   75000 ]       22   0.000%  99.991% 
1795425325.829	(   75000,  110000 ]      594   0.007%  99.998% 
1795425325.829	(  110000,  170000 ]       57   0.001%  99.998% 
1795425325.829	(  170000,  250000 ]       89   0.001%  99.999% 
1795425325.829	(  250000,  380000 ]       52   0.001% 100.000% 
1795425325.829	(  380000,  570000 ]       16   0.000% 100.000% 
1795425325.829	(  570000,  860000 ]        3   0.000% 100.000% 
1795425325.829	
1795425325.829	** Level 1 read latency histogram (micros):
1795425325.829	Count: 15242758 Average: 87.7287  StdDev: 127.21
1795425325.829	Min: 5  Median: 45.8502  Max: 745948
1795425325.829	Percentiles: P50: 45.85 P75: 67.64 P99: 228.21 P99.9: 464.43 P99.99: 94368.10
1795425325.829	------------------------------------------------------
1795425325.829	(       4,       6 ]       33   0.000%   0.000% 
1795425325.829	(       6,      10 ]      110   0.001%   0.001% 
1795425325.829	(      10,      15 ]       55   0.000%   0.001% 
1795425325.829	(      15,      22 ]       22   0.000%   0.001% 
1795425325.829	(      22,      34 ]       11   0.000%   0.002% 
1795425325.829	(      34,      51 ] 10933094  71.726%  71.728% ##############
1795425325.829	(      51,      76 ]   749186   4.915%  76.643% #
1795425325.829	(      76,     110 ]  2661530  17.461%  94.104% ###
1795425325.829	(     110,     170 ]   579842   3.804%  97.908% #
1795425325.829	(     170,     250 ]   228765   1.501%  99.409% 
1795425325.829	(     250,     380 ]    69273   0.454%  99.863% 
1795425325.829	(     380,     580 ]    13252   0.087%  99.950% 
1795425325.829	(     580,     870 ]     2922   0.019%  99.969% 
1795425325.829	(     870,    1300 ]     1107   0.007%  99.977% 
1795425325.829	(    1300,    1900 ]      286   0.002%  99.979% 
1795425325.829	(    1900,    2900 ]      149   0.001%  99.980% 
1795425325.829	(    2900,    4400 ]      116   0.001%  99.980% 
1795425325.829	(    4400,    6600 ]       25   0.000%  99.980% 
1795425325.829	(    6600,    9900 ]       27   0.000%  99.981% 
1795425325.829	(    9900,   14000 ]       11   0.000%  99.981% 
1795425325.829	(   14000,   22000 ]        2   0.000%  99.981% 
1795425325.829	(   22000,   33000 ]        1   0.000%  99.981% 
1795425325.829	(   33000,   50000 ]        7   0.000%  99.981% 
1795425325.829	(   50000,   75000 ]      182   0.001%  99.982% 
1795425325.829	(   75000,  110000 ]     2215   0.015%  99.996% 
1795425325.829	(  110000,  170000 ]       96   0.001%  99.997% 
1795425325.829	(  170000,  250000 ]      272   0.002%  99.999% 
1795425325.829	(  250000,  380000 ]      119   0.001% 100.000% 
1795425325.829	(  380000,  570000 ]       58   0.000% 100.000% 
1795425325.829	(  570000,  860000 ]       27   0.000% 100.000% 
1795425325.829	
1795425325.829	** Level 2 read latency histogram (micros):
1795425325.829	Count: 45633299 Average: 77.0320  StdDev: 57.73
1795425325.829	Min: 5  Median: 46.0297  Max: 851737
1795425325.829	Percentiles: P50: 46.03 P75: 72.81 P99: 232.64 P99.9: 379.07 P99.99: 2330.12
1795425325.829	------------------------------------------------------
1795425325.829	(       4,       6 ]      644   0.001%   0.001% 
1795425325.829	(       6,      10 ]     2774   0.006%   0.007% 
1795425325.829	(      10,      15 ]      712   0.002%   0.009% 
1795425325.829	(      15,      22 ]      162   0.000%   0.009% 
1795425325.829	(      22,      34 ]       50   0.000%   0.010% 
1795425325.829	(      34,      51 ] 32237745  70.645%  70.655% ##############
1795425325.829	(      51,      76 ]  2272893   4.981%  75.636% #
1795425325.829	(      76,     110 ]  8260612  18.102%  93.738% ####
1795425325.829	(     110,     170 ]  1799979   3.944%  97.682% #
1795425325.829	(     170,     250 ]   768051   1.683%  99.365% 
1795425325.829	(     250,     380 ]   245797   0.539%  99.904% 
1795425325.829	(     380,     580 ]    31102   0.068%  99.972% 
1795425325.829	(     580,     870 ]     5362   0.012%  99.984% 
1795425325.829	(     870,    1300 ]     1943   0.004%  99.988% 
1795425325.829	(    1300,    1900 ]      723   0.002%  99.990% 
1795425325.829	(    1900,    2900 ]      434   0.001%  99.991% 
1795425325.829	(    2900,    4400 ]      407   0.001%  99.991% 
1795425325.829	(    4400,    6600 ]       94   0.000%  99.992% 
1795425325.829	(    6600,    9900 ]       66   0.000%  99.992% 
1795425325.829	(    9900,   14000 ]       22   0.000%  99.992% 
1795425325.829	(   14000,   22000 ]       11   0.000%  99.992% 
1795425325.829	(   22000,   33000 ]        4   0.000%  99.992% 
1795425325.829	(   33000,   50000 ]       11   0.000%  99.992% 
1795425325.829	(   50000,   75000 ]      183   0.000%  99.992% 
1795425325.829	(   75000,  110000 ]     3113   0.007%  99.999% 
1795425325.829	(  110000,  170000 ]      238   0.001% 100.000% 
1795425325.829	(  170000,  250000 ]      412   0.001% 100.001% 
1795425325.829	(  250000,  380000 ]      273   0.001% 100.001% 
1795425325.829	(  380000,  570000 ]      149   0.000% 100.001% 
1795425325.829	(  570000,  860000 ]       34   0.000% 100.002% 
1795425325.829	
1795425325.829	** Level 3 read latency histogram (micros):
1795425325.829	Count: 58292648 Average: 77.1380  StdDev: 37.21
1795425325.829	Min: 5  Median: 46.0552  Max: 1016378
1795425325.829	Percentiles: P50: 46.06 P75: 74.40 P99: 229.12 P99.9: 375.03 P99.99: 2657.21
1795425325.829	------------------------------------------------------
1795425325.829	(       4,       6 ]      875   0.002%   0.002% 
1795425325.829	(       6,      10 ]     2720   0.005%   0.006% 
1795425325.829	(      10,      15 ]      782   0.001%   0.008% 
1795425325.829	(      15,      22 ]      223   0.000%   0.008% 
1795425325.829	(      22,      34 ]       77   0.000%   0.008% 
1795425325.829	(      34,      51 ] 41094899  70.498%  70.506% ##############
1795425325.829	(      51,      76 ]  2798925   4.802%  75.307% #
1795425325.829	(      76,     110 ] 10762293  18.463%  93.770% ####
1795425325.829	(     110,     170 ]  2337514   4.010%  97.780% #
1795425325.829	(     170,     250 ]   962637   1.651%  99.431% 
1795425325.829	(     250,     380 ]   284283   0.488%  99.919% 
1795425325.829	(     380,     580 ]    32825   0.056%  99.975% 
1795425325.829	(     580,     870 ]     5450   0.009%  99.984% 
1795425325.829	(     870,    1300 ]     2024   0.003%  99.988% 
1795425325.829	(    1300,    1900 ]      873   0.001%  99.989% 
1795425325.829	(    1900,    2900 ]      553   0.001%  99.990% 
1795425325.829	(    2900,    4400 ]      522   0.001%  99.991% 
1795425325.829	(    4400,    6600 ]      156   0.000%  99.991% 
1795425325.829	(    6600,    9900 ]       91   0.000%  99.992% 
1795425325.829	(    9900,   14000 ]       36   0.000%  99.992% 
1795425325.829	(   14000,   22000 ]       10   0.000%  99.992% 
1795425325.829	(   22000,   33000 ]        4   0.000%  99.992% 
1795425325.829	(   33000,   50000 ]       11   0.000%  99.992% 
1795425325.829	(   50000,   75000 ]      168   0.000%  99.992% 
1795425325.829	(   75000,  110000 ]     4044   0.007%  99.999% 
1795425325.829	(  110000,  170000 ]      307   0.001%  99.999% 
1795425325.829	(  170000,  250000 ]      624   0.001% 100.000% 
1795425325.829	(  250000,  380000 ]      328   0.001% 100.001% 
1795425325.829	(  380000,  570000 ]      167   0.000% 100.001% 
1795425325.829	(  570000,  860000 ]       47   0.000% 100.001% 
1795425325.829	(  860000, 1200000 ]        2   0.000% 100.001% 
1795425325.829	
1795425325.829	** Level 4 read latency histogram (micros):
1795425325.829	Count: 57633347 Average: 77.8316  StdDev: 39.90
1795425325.829	Min: 5  Median: 46.0772  Max: 1585445
1795425325.829	Percentiles: P50: 46.08 P75: 74.46 P99: 228.23 P99.9: 375.47 P99.99: 2664.64
1795425325.829	------------------------------------------------------
1795425325.829	(       4,       6 ]      633   0.001%   0.001% 
1795425325.829	(       6,      10 ]     1986   0.003%   0.005% 
1795425325.829	(      10,      15 ]      664   0.001%   0.006% 
1795425325.829	(      15,      22 ]      164   0.000%   0.006% 
1795425325.829	(      22,      34 ]       51   0.000%   0.006% 
1795425325.829	(      34,      51 ] 40557652  70.372%  70.378% ##############
1795425325.829	(      51,      76 ]  2839225   4.926%  75.304% #
1795425325.829	(      76,     110 ] 10650718  18.480%  93.784% ####
1795425325.829	(     110,     170 ]  2326794   4.037%  97.822% #
1795425325.829	(     170,     250 ]   933001   1.619%  99.440% 
1795425325.829	(     250,     380 ]   274384   0.476%  99.917% 
1795425325.829	(     380,     580 ]    32328   0.056%  99.973% 
1795425325.829	(     580,     870 ]     5779   0.010%  99.983% 
1795425325.829	(     870,    1300 ]     2826   0.005%  99.988% 
1795425325.829	(    1300,    1900 ]      913   0.002%  99.989% 
1795425325.829	(    1900,    2900 ]      609   0.001%  99.990% 
1795425325.829	(    2900,    4400 ]      500   0.001%  99.991% 
1795425325.829	(    4400,    6600 ]      172   0.000%  99.991% 
1795425325.829	(    6600,    9900 ]      101   0.000%  99.992% 
1795425325.829	(    9900,   14000 ]       47   0.000%  99.992% 
1795425325.829	(   14000,   22000 ]        8   0.000%  99.992% 
1795425325.829	(   22000,   33000 ]        1   0.000%  99.992% 
1795425325.829	(   33000,   50000 ]       11   0.000%  99.992% 
1795425325.829	(   50000,   75000 ]      195   0.000%  99.992% 
1795425325.829	(   75000,  110000 ]     3835   0.007%  99.999% 
1795425325.829	(  110000,  170000 ]      381   0.001%  99.999% 
1795425325.829	(  170000,  250000 ]      662   0.001% 100.001% 
1795425325.829	(  250000,  380000 ]      348   0.001% 100.001% 
1795425325.829	(  380000,  570000 ]      182   0.000% 100.001% 
1795425325.829	(  570000,  860000 ]       69   0.000% 100.002% 
1795425325.829	(  860000, 1200000 ]        1   0.000% 100.002% 
1795425325.829	( 1200000, 1900000 ]        1   0.000% 100.002% 
1795425325.829	
1795425325.829	** Level 5 read latency histogram (micros):
1795425325.829	Count: 30976393 Average: 72.8857  StdDev: 130.73
1795425325.829	Min: 5  Median: 45.6970  Max: 865469
1795425325.829	Percentiles: P50: 45.70 P75: 61.68 P99: 227.30 P99.9: 377.03 P99.99: 3186.39
1795425325.829	------------------------------------------------------
1795425325.829	(       4,       6 ]      365   0.001%   0.001% 
1795425325.829	(       6,      10 ]     1733   0.006%   0.007% 
1795425325.829	(      10,      15 ]      494   0.002%   0.008% 
1795425325.829	(      15,      22 ]      122   0.000%   0.009% 
1795425325.829	(      22,      34 ]       50   0.000%   0.009% 
1795425325.829	(      34,      51 ] 22505978  72.655%  72.664% ###############
1795425325.829	(      51,      76 ]  1693288   5.466%  78.131% #
1795425325.829	(      76,     110 ]  5061963  16.341%  94.472% ###
1795425325.829	(     110,     170 ]  1052363   3.397%  97.869% #
1795425325.829	(     170,     250 ]   489067   1.579%  99.448% 
1795425325.829	(     250,     380 ]   143262   0.462%  99.911% 
1795425325.829	(     380,     580 ]    15789   0.051%  99.962% 
1795425325.829	(     580,     870 ]     4338   0.014%  99.976% 
1795425325.829	(     870,    1300 ]     2741   0.009%  99.984% 
1795425325.829	(    1300,    1900 ]      822   0.003%  99.987% 
1795425325.829	(    1900,    2900 ]      768   0.002%  99.990% 
1795425325.829	(    2900,    4400 ]      798   0.003%  99.992% 
1795425325.829	(    4400,    6600 ]      429   0.001%  99.993% 
1795425325.829	(    6600,    9900 ]      226   0.001%  99.994% 
1795425325.829	(    9900,   14000 ]       69   0.000%  99.994% 
1795425325.829	(   14000,   22000 ]       12   0.000%  99.994% 
1795425325.829	(   33000,   50000 ]        1   0.000%  99.994% 
1795425325.829	(   50000,   75000 ]        4   0.000%  99.994% 
1795425325.829	(   75000,  110000 ]     1299   0.004%  99.999% 
1795425325.829	(  110000,  170000 ]      213   0.001%  99.999% 
1795425325.829	(  170000,  250000 ]      219   0.001% 100.000% 
1795425325.829	(  250000,  380000 ]      229   0.001% 100.001% 
1795425325.829	(  380000,  570000 ]       77   0.000% 100.001% 
1795425325.830	(  570000,  860000 ]       22   0.000% 100.001% 
1795425325.830	(  860000, 1200000 ]        1   0.000% 100.001% 
1795425325.830	
1795425325.830	
1795425325.830	** DB Stats **
1795425325.830	Uptime(secs): 39659.3 total, 39.8 interval
1795425325.830	Cumulative writes: 34M writes, 34M keys, 25M commit groups, 1.3 writes per commit group, ingest: 33.72 GB, 0.87 MB/s
1795425325.830	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.72 GB, 0.87 MB/s
1795425325.830	Cumulative stall: 09:29:58.519 H:M:S, 86.2 percent
1795425325.830	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795425325.830	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795425325.830	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795425325.830	
1795425325.830	STATISTICS:
1795425325.830	rocksdb.block.cache.miss COUNT : 208755567
1795425325.830	rocksdb.block.cache.hit COUNT : 0
1795425325.830	rocksdb.block.cache.add COUNT : 0
1795425325.830	rocksdb.block.cache.add.failures COUNT : 0
1795425325.830	rocksdb.block.cache.index.miss COUNT : 0
1795425325.830	rocksdb.block.cache.index.hit COUNT : 0
1795425325.830	rocksdb.block.cache.index.add COUNT : 0
1795425325.830	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795425325.830	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795425325.830	rocksdb.block.cache.filter.miss COUNT : 0
1795425325.830	rocksdb.block.cache.filter.hit COUNT : 0
1795425325.830	rocksdb.block.cache.filter.add COUNT : 0
1795425325.830	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795425325.830	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795425325.830	rocksdb.block.cache.data.miss COUNT : 208755567
1795425325.830	rocksdb.block.cache.data.hit COUNT : 0
1795425325.830	rocksdb.block.cache.data.add COUNT : 0
1795425325.830	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795425325.830	rocksdb.block.cache.bytes.read COUNT : 0
1795425325.830	rocksdb.block.cache.bytes.write COUNT : 0
1795425325.830	rocksdb.bloom.filter.useful COUNT : 0
1795425325.830	rocksdb.bloom.filter.full.positive COUNT : 0
1795425325.830	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795425325.830	rocksdb.bloom.filter.micros COUNT : 0
1795425325.830	rocksdb.persistent.cache.hit COUNT : 0
1795425325.830	rocksdb.persistent.cache.miss COUNT : 0
1795425325.830	rocksdb.sim.block.cache.hit COUNT : 0
1795425325.830	rocksdb.sim.block.cache.miss COUNT : 0
1795425325.830	rocksdb.memtable.hit COUNT : 0
1795425325.830	rocksdb.memtable.miss COUNT : 0
1795425325.830	rocksdb.l0.hit COUNT : 0
1795425325.830	rocksdb.l1.hit COUNT : 0
1795425325.830	rocksdb.l2andup.hit COUNT : 0
1795425325.830	rocksdb.compaction.key.drop.new COUNT : 31624368
1795425325.830	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795425325.830	rocksdb.compaction.key.drop.range_del COUNT : 0
1795425325.830	rocksdb.compaction.key.drop.user COUNT : 0
1795425325.830	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795425325.830	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795425325.830	rocksdb.compaction.cancelled COUNT : 0
1795425325.830	rocksdb.number.keys.written COUNT : 34383360
1795425325.830	rocksdb.number.keys.read COUNT : 0
1795425325.830	rocksdb.number.keys.updated COUNT : 0
1795425325.830	rocksdb.bytes.written COUNT : 36206962404
1795425325.830	rocksdb.bytes.read COUNT : 0
1795425325.830	rocksdb.number.db.seek COUNT : 0
1795425325.830	rocksdb.number.db.next COUNT : 0
1795425325.830	rocksdb.number.db.prev COUNT : 0
1795425325.830	rocksdb.number.db.seek.found COUNT : 0
1795425325.830	rocksdb.number.db.next.found COUNT : 0
1795425325.830	rocksdb.number.db.prev.found COUNT : 0
1795425325.830	rocksdb.db.iter.bytes.read COUNT : 0
1795425325.830	rocksdb.no.file.closes COUNT : 0
1795425325.830	rocksdb.no.file.opens COUNT : 1928879
1795425325.830	rocksdb.no.file.errors COUNT : 0
1795425325.830	rocksdb.l0.slowdown.micros COUNT : 0
1795425325.830	rocksdb.memtable.compaction.micros COUNT : 0
1795425325.830	rocksdb.l0.num.files.stall.micros COUNT : 0
1795425325.830	rocksdb.stall.micros COUNT : 34198518637
1795425325.830	rocksdb.db.mutex.wait.micros COUNT : 0
1795425325.830	rocksdb.rate.limit.delay.millis COUNT : 0
1795425325.830	rocksdb.num.iterators COUNT : 0
1795425325.830	rocksdb.number.multiget.get COUNT : 0
1795425325.830	rocksdb.number.multiget.keys.read COUNT : 0
1795425325.830	rocksdb.number.multiget.bytes.read COUNT : 0
1795425325.830	rocksdb.number.deletes.filtered COUNT : 0
1795425325.830	rocksdb.number.merge.failures COUNT : 0
1795425325.830	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795425325.830	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795425325.830	rocksdb.number.reseeks.iteration COUNT : 0
1795425325.830	rocksdb.getupdatessince.calls COUNT : 0
1795425325.830	rocksdb.block.cachecompressed.miss COUNT : 0
1795425325.830	rocksdb.block.cachecompressed.hit COUNT : 0
1795425325.830	rocksdb.block.cachecompressed.add COUNT : 0
1795425325.830	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795425325.830	rocksdb.wal.synced COUNT : 0
1795425325.830	rocksdb.wal.bytes COUNT : 36206962404
1795425325.830	rocksdb.write.self COUNT : 25894547
1795425325.830	rocksdb.write.other COUNT : 8488813
1795425325.830	rocksdb.write.timeout COUNT : 0
1795425325.830	rocksdb.write.wal COUNT : 34383360
1795425325.830	rocksdb.compact.read.bytes COUNT : 877504888012
1795425325.830	rocksdb.compact.write.bytes COUNT : 844270888731
1795425325.830	rocksdb.flush.write.bytes COUNT : 36307951121
1795425325.830	rocksdb.compact.read.marked.bytes COUNT : 0
1795425325.830	rocksdb.compact.read.periodic.bytes COUNT : 0
1795425325.830	rocksdb.compact.read.ttl.bytes COUNT : 0
1795425325.830	rocksdb.compact.write.marked.bytes COUNT : 0
1795425325.830	rocksdb.compact.write.periodic.bytes COUNT : 0
1795425325.830	rocksdb.compact.write.ttl.bytes COUNT : 0
1795425325.830	rocksdb.number.direct.load.table.properties COUNT : 0
1795425325.830	rocksdb.number.superversion_acquires COUNT : 0
1795425325.830	rocksdb.number.superversion_releases COUNT : 0
1795425325.830	rocksdb.number.superversion_cleanups COUNT : 0
1795425325.830	rocksdb.number.block.compressed COUNT : 0
1795425325.830	rocksdb.number.block.decompressed COUNT : 0
1795425325.830	rocksdb.number.block.not_compressed COUNT : 0
1795425325.830	rocksdb.merge.operation.time.nanos COUNT : 0
1795425325.830	rocksdb.filter.operation.time.nanos COUNT : 0
1795425325.830	rocksdb.row.cache.hit COUNT : 0
1795425325.830	rocksdb.row.cache.miss COUNT : 0
1795425325.830	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795425325.830	rocksdb.read.amp.total.read.bytes COUNT : 0
1795425325.830	rocksdb.number.rate_limiter.drains COUNT : 0
1795425325.830	rocksdb.number.iter.skip COUNT : 0
1795425325.830	rocksdb.blobdb.num.put COUNT : 0
1795425325.830	rocksdb.blobdb.num.write COUNT : 0
1795425325.830	rocksdb.blobdb.num.get COUNT : 0
1795425325.830	rocksdb.blobdb.num.multiget COUNT : 0
1795425325.830	rocksdb.blobdb.num.seek COUNT : 0
1795425325.830	rocksdb.blobdb.num.next COUNT : 0
1795425325.830	rocksdb.blobdb.num.prev COUNT : 0
1795425325.830	rocksdb.blobdb.num.keys.written COUNT : 0
1795425325.830	rocksdb.blobdb.num.keys.read COUNT : 0
1795425325.830	rocksdb.blobdb.bytes.written COUNT : 0
1795425325.830	rocksdb.blobdb.bytes.read COUNT : 0
1795425325.830	rocksdb.blobdb.write.inlined COUNT : 0
1795425325.830	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795425325.830	rocksdb.blobdb.write.blob COUNT : 0
1795425325.830	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795425325.830	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795425325.830	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795425325.830	rocksdb.blobdb.blob.file.synced COUNT : 0
1795425325.830	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795425325.830	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795425325.830	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795425325.830	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795425325.830	rocksdb.blobdb.gc.num.files COUNT : 0
1795425325.830	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795425325.830	rocksdb.blobdb.gc.failures COUNT : 0
1795425325.830	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795425325.831	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795425325.831	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795425325.831	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795425325.831	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795425325.831	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795425325.831	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795425325.831	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795425325.831	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795425325.831	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795425325.831	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795425325.831	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795425325.831	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795425325.831	rocksdb.txn.get.tryagain COUNT : 0
1795425325.831	rocksdb.number.multiget.keys.found COUNT : 0
1795425325.831	rocksdb.num.iterator.created COUNT : 0
1795425325.831	rocksdb.num.iterator.deleted COUNT : 0
1795425325.831	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795425325.831	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795425325.831	rocksdb.block.cache.compression.dict.add COUNT : 0
1795425325.831	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795425325.831	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795425325.831	rocksdb.block.cache.add.redundant COUNT : 0
1795425325.831	rocksdb.block.cache.index.add.redundant COUNT : 0
1795425325.831	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795425325.831	rocksdb.block.cache.data.add.redundant COUNT : 0
1795425325.831	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795425325.831	rocksdb.files.marked.trash COUNT : 0
1795425325.831	rocksdb.files.deleted.immediately COUNT : 1926350
1795425325.831	rocksdb.error.handler.bg.errro.count COUNT : 0
1795425325.831	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795425325.831	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795425325.831	rocksdb.error.handler.autoresume.count COUNT : 0
1795425325.831	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795425325.831	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795425325.831	rocksdb.memtable.payload.bytes.at.flush COUNT : 36032667168
1795425325.831	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1873824
1795425325.831	rocksdb.secondary.cache.hits COUNT : 0
1795425325.831	rocksdb.verify_checksum.read.bytes COUNT : 0
1795425325.831	rocksdb.backup.read.bytes COUNT : 0
1795425325.831	rocksdb.backup.write.bytes COUNT : 0
1795425325.831	rocksdb.remote.compact.read.bytes COUNT : 0
1795425325.831	rocksdb.remote.compact.write.bytes COUNT : 0
1795425325.831	rocksdb.hot.file.read.bytes COUNT : 0
1795425325.831	rocksdb.warm.file.read.bytes COUNT : 0
1795425325.831	rocksdb.cold.file.read.bytes COUNT : 0
1795425325.831	rocksdb.hot.file.read.count COUNT : 0
1795425325.831	rocksdb.warm.file.read.count COUNT : 0
1795425325.831	rocksdb.cold.file.read.count COUNT : 0
1795425325.831	rocksdb.last.level.read.bytes COUNT : 0
1795425325.831	rocksdb.last.level.read.count COUNT : 0
1795425325.831	rocksdb.non.last.level.read.bytes COUNT : 877793770020
1795425325.831	rocksdb.non.last.level.read.count COUNT : 216471083
1795425325.831	rocksdb.block.checksum.compute.count COUNT : 212613325
1795425325.831	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.db.write.micros P50 : 1183.543332 P95 : 19083.069462 P99 : 66572.611217 P100 : 5666184.000000 COUNT : 34383354 SUM : 158043842047
1795425325.831	rocksdb.compaction.times.micros P50 : 95286.256894 P95 : 274116.335045 P99 : 743119.686091 P100 : 5933486.000000 COUNT : 299578 SUM : 35572545701
1795425325.831	rocksdb.compaction.times.cpu_micros P50 : 93795.758832 P95 : 265511.189635 P99 : 733685.872768 P100 : 5714082.000000 COUNT : 299578 SUM : 34912701089
1795425325.831	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.table.sync.micros P50 : 27781.366105 P95 : 233645.161290 P99 : 623895.762712 P100 : 1440817.000000 COUNT : 19914 SUM : 1080693435
1795425325.831	rocksdb.compaction.outfile.sync.micros P50 : 6627.691745 P95 : 13847.653377 P99 : 29341.776218 P100 : 2728107.000000 COUNT : 1872698 SUM : 17224994819
1795425325.831	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.manifest.file.sync.micros P50 : 491.923622 P95 : 20809.645390 P99 : 425482.746632 P100 : 2585663.000000 COUNT : 242318 SUM : 2921716154
1795425325.831	rocksdb.table.open.io.micros P50 : 234.052065 P95 : 395.325907 P99 : 578.002202 P100 : 862822.000000 COUNT : 1928879 SUM : 727706471
1795425325.831	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.read.block.compaction.micros P50 : 46.311198 P95 : 130.190607 P99 : 233.226091 P100 : 1585457.000000 COUNT : 208755567 SUM : 16369190840
1795425325.831	rocksdb.read.block.get.micros P50 : 49.562072 P95 : 106.630111 P99 : 215.997764 P100 : 416795.000000 COUNT : 1928879 SUM : 138402983
1795425325.831	rocksdb.write.raw.block.micros P50 : 0.529761 P95 : 1.293683 P99 : 33.335661 P100 : 2182001.000000 COUNT : 215126981 SUM : 354515304
1795425325.831	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.numfiles.in.singlecompaction P50 : 5.850479 P95 : 9.585229 P99 : 9.925452 P100 : 44.000000 COUNT : 300292 SUM : 1887180
1795425325.831	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.db.write.stall P50 : 0.719184 P95 : 4041.874292 P99 : 18174.950939 P100 : 5664610.000000 COUNT : 25872488 SUM : 34201743494
1795425325.831	rocksdb.sst.read.micros P50 : 45.984520 P95 : 127.002236 P99 : 229.471074 P100 : 1585445.000000 COUNT : 216471083 SUM : 16754601727
1795425325.831	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.bytes.per.write P50 : 1126.834742 P95 : 3589.938429 P99 : 4188.000000 P100 : 4188.000000 COUNT : 25894547 SUM : 36206962404
1795425325.831	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.db.flush.micros P50 : 46277.182236 P95 : 292259.154930 P99 : 665863.380282 P100 : 5535185.000000 COUNT : 19912 SUM : 1523781778
1795425325.831	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795425325.831	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1886466 SUM : 0
1795425325.831	
