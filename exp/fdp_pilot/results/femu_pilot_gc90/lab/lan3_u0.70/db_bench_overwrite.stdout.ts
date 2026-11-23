1795380967.769	Initializing RocksDB Options from the specified file
1795380967.769	Initializing RocksDB Options from command-line flags
1795380975.736	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795380975.736	Values:     1024 bytes each (512 bytes after compression)
1795380975.736	Entries:    11678215
1795380975.736	Prefix:    0 bytes
1795380975.736	Keys per prefix:    0
1795380975.736	RawSize:    11582.7 MB (estimated)
1795380975.736	FileSize:   5880.4 MB (estimated)
1795380975.737	Write rate: 0 bytes/second
1795380975.737	Read rate: 0 ops/second
1795380975.737	Compression: NoCompression
1795380975.737	Compression sampling rate: 0
1795380975.737	Memtablerep: SkipListFactory
1795380975.737	Perf Level: 1
1795380975.737	------------------------------------------------
1795380975.737	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795400796.750	overwrite    :    3391.172 micros/op 1178 ops/sec;    1.2 MB/s
1795400801.751	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795400801.752	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795400811.751	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795400821.774	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795400831.777	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795400841.778	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795400851.778	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795400861.778	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795400861.778	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795400861.778	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795400861.779	
1795400861.779	Level Files Size(MB)
1795400861.779	--------------------
1795400861.779	  0        0        0
1795400861.779	  1        5        2
1795400861.779	  2       58       25
1795400861.779	  3      609      250
1795400861.779	  4     5526     2500
1795400861.779	  5    25890    11771
1795400861.779	  6        0        0
1795400861.779	
1795400861.784	
1795400861.784	
1795400861.784	** Compaction Stats [default] **
1795400861.784	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795400861.784	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795400861.784	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.0     29.8    791.09            392.42     13497    0.059     18K      5       0.0       0.0
1795400861.784	  L1      5/0    2.27 MB   0.9     39.7    23.0     16.8      39.8     23.0       0.0   1.7     29.3     29.3   1387.88           1325.18      6725    0.206     40M   6928       0.0       0.0
1795400861.784	  L2     58/0   24.86 MB   1.0    117.2    23.0     94.2     117.2     22.9       0.0   5.1     28.3     28.2   4246.93           4078.21     49437    0.086    119M    52K       0.0       0.0
1795400861.784	  L3    609/0   249.64 MB   1.0    148.9    22.9    126.0     148.4     22.4       0.0   6.5     28.7     28.6   5313.42           5083.28     52148    0.102    151M   525K       0.0       0.0
1795400861.784	  L4   5526/0    2.44 GB   1.0    149.8    22.4    127.4     144.8     17.4       0.0   6.5     29.1     28.1   5274.05           5045.86     52021    0.101    152M  5075K       0.0       0.0
1795400861.784	  L5  25890/0   11.49 GB   0.5     68.3    17.4     50.8      53.6      2.7       0.0   3.1     32.7     25.7   2137.84           2062.77     37121    0.058     69M    14M       0.0       0.0
1795400861.784	 Sum  32088/0   14.21 GB   0.0    524.0   108.7    415.3     526.7    111.4       0.0  22.9     28.0     28.2  19151.22          17987.72    210949    0.091    532M    20M       0.0       0.0
1795400861.784	 Int      0/0    0.00 KB   0.0      0.3     0.1      0.3       0.3      0.0       0.0 285643417.0     29.0     23.5     11.57             11.44       148    0.078    333K    63K       0.0       0.0
1795400861.784	
1795400861.784	** Compaction Stats [default] **
1795400861.784	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795400861.784	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795400861.784	 Low      0/0    0.00 KB   0.0    524.0   108.7    415.3     503.7     88.5       0.0   0.0     29.2     28.1  18360.95          17596.10    197454    0.093    532M    20M       0.0       0.0
1795400861.785	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     29.8    790.27            391.62     13494    0.059       0      0       0.0       0.0
1795400861.785	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    166.3      0.01              0.00         1    0.005       0      0       0.0       0.0
1795400861.785	
1795400861.785	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795400861.785	
1795400861.785	Uptime(secs): 19894.0 total, 22.5 interval
1795400861.785	Flush(GB): cumulative 22.965, interval 0.000
1795400861.785	AddFile(GB): cumulative 0.000, interval 0.000
1795400861.785	AddFile(Total Files): cumulative 0, interval 0
1795400861.785	AddFile(L0 Files): cumulative 0, interval 0
1795400861.785	AddFile(Keys): cumulative 0, interval 0
1795400861.785	Cumulative compaction: 526.68 GB write, 27.11 MB/s write, 523.96 GB read, 26.97 MB/s read, 19151.2 seconds
1795400861.785	Interval compaction: 0.27 GB write, 12.11 MB/s write, 0.33 GB read, 14.95 MB/s read, 11.6 seconds
1795400861.785	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 238286 slowdown for pending_compaction_bytes, 26 memtable_compaction, 4 memtable_slowdown, interval 0 total count
1795400861.785	Block cache LRUCache@0x5c65d31faa70#36652 capacity: 8.00 MB collections: 111 last_copies: 1 last_secs: 0.000139 secs_since: 82
1795400861.785	Block cache entry stats(count,size,portion): Misc(2,4.17 KB,0.0509262%)
1795400861.785	
1795400861.785	** File Read Latency Histogram By Level [default] **
1795400861.785	** Level 0 read latency histogram (micros):
1795400861.785	Count: 5902298 Average: 62.9688  StdDev: 296.62
1795400861.785	Min: 7  Median: 45.6119  Max: 135157
1795400861.785	Percentiles: P50: 45.61 P75: 60.06 P99: 226.06 P99.9: 403.03 P99.99: 867.64
1795400861.785	------------------------------------------------------
1795400861.785	(       6,      10 ]        7   0.000%   0.000% 
1795400861.785	(      10,      15 ]       10   0.000%   0.000% 
1795400861.785	(      15,      22 ]        1   0.000%   0.000% 
1795400861.785	(      34,      51 ]  4320510  73.200%  73.201% ###############
1795400861.785	(      51,      76 ]   293007   4.964%  78.165% #
1795400861.785	(      76,     110 ]   971588  16.461%  94.626% ###
1795400861.785	(     110,     170 ]   201386   3.412%  98.038% #
1795400861.785	(     170,     250 ]    81004   1.372%  99.411% 
1795400861.785	(     250,     380 ]    28306   0.480%  99.890% 
1795400861.785	(     380,     580 ]     5009   0.085%  99.975% 
1795400861.785	(     580,     870 ]      887   0.015%  99.990% 
1795400861.785	(     870,    1300 ]      303   0.005%  99.995% 
1795400861.785	(    1300,    1900 ]       67   0.001%  99.996% 
1795400861.785	(    1900,    2900 ]       25   0.000%  99.997% 
1795400861.785	(    2900,    4400 ]       38   0.001%  99.997% 
1795400861.785	(    4400,    6600 ]        1   0.000%  99.997% 
1795400861.785	(    6600,    9900 ]       14   0.000%  99.998% 
1795400861.785	(    9900,   14000 ]        4   0.000%  99.998% 
1795400861.785	(   14000,   22000 ]       13   0.000%  99.998% 
1795400861.785	(   22000,   33000 ]       11   0.000%  99.998% 
1795400861.785	(   33000,   50000 ]       27   0.000%  99.999% 
1795400861.785	(   50000,   75000 ]       60   0.001% 100.000% 
1795400861.785	(   75000,  110000 ]       14   0.000% 100.000% 
1795400861.785	(  110000,  170000 ]        7   0.000% 100.000% 
1795400861.785	
1795400861.785	** Level 1 read latency histogram (micros):
1795400861.785	Count: 10512685 Average: 62.4971  StdDev: 358.66
1795400861.785	Min: 6  Median: 45.4804  Max: 205803
1795400861.785	Percentiles: P50: 45.48 P75: 55.80 P99: 215.01 P99.9: 375.70 P99.99: 860.03
1795400861.785	------------------------------------------------------
1795400861.785	(       4,       6 ]       12   0.000%   0.000% 
1795400861.785	(       6,      10 ]       71   0.001%   0.001% 
1795400861.785	(      10,      15 ]       48   0.000%   0.001% 
1795400861.785	(      15,      22 ]       13   0.000%   0.001% 
1795400861.785	(      22,      34 ]        1   0.000%   0.001% 
1795400861.785	(      34,      51 ]  7783268  74.037%  74.038% ###############
1795400861.785	(      51,      76 ]   526995   5.013%  79.051% #
1795400861.785	(      76,     110 ]  1684345  16.022%  95.073% ###
1795400861.785	(     110,     170 ]   340271   3.237%  98.310% #
1795400861.785	(     170,     250 ]   128919   1.226%  99.536% 
1795400861.785	(     250,     380 ]    39538   0.376%  99.912% 
1795400861.785	(     380,     580 ]     6966   0.066%  99.979% 
1795400861.785	(     580,     870 ]     1229   0.012%  99.990% 
1795400861.785	(     870,    1300 ]      404   0.004%  99.994% 
1795400861.785	(    1300,    1900 ]      124   0.001%  99.995% 
1795400861.785	(    1900,    2900 ]       87   0.001%  99.996% 
1795400861.785	(    2900,    4400 ]       65   0.001%  99.997% 
1795400861.785	(    4400,    6600 ]        7   0.000%  99.997% 
1795400861.785	(    6600,    9900 ]       15   0.000%  99.997% 
1795400861.785	(    9900,   14000 ]       19   0.000%  99.997% 
1795400861.785	(   14000,   22000 ]       27   0.000%  99.998% 
1795400861.785	(   22000,   33000 ]       41   0.000%  99.998% 
1795400861.785	(   33000,   50000 ]       79   0.001%  99.999% 
1795400861.785	(   50000,   75000 ]       78   0.001%  99.999% 
1795400861.785	(   75000,  110000 ]       66   0.001% 100.000% 
1795400861.785	(  110000,  170000 ]       19   0.000% 100.000% 
1795400861.785	(  170000,  250000 ]        1   0.000% 100.000% 
1795400861.785	
1795400861.785	** Level 2 read latency histogram (micros):
1795400861.785	Count: 31070905 Average: 62.9248  StdDev: 127.54
1795400861.785	Min: 5  Median: 45.6442  Max: 377166
1795400861.785	Percentiles: P50: 45.64 P75: 61.13 P99: 222.12 P99.9: 376.45 P99.99: 837.12
1795400861.785	------------------------------------------------------
1795400861.785	(       4,       6 ]      764   0.002%   0.002% 
1795400861.785	(       6,      10 ]     3412   0.011%   0.013% 
1795400861.785	(      10,      15 ]      956   0.003%   0.017% 
1795400861.785	(      15,      22 ]      168   0.001%   0.017% 
1795400861.785	(      22,      34 ]       71   0.000%   0.017% 
1795400861.785	(      34,      51 ] 22673246  72.973%  72.990% ###############
1795400861.785	(      51,      76 ]  1541168   4.960%  77.950% #
1795400861.785	(      76,     110 ]  5221157  16.804%  94.754% ###
1795400861.785	(     110,     170 ]  1051953   3.386%  98.140% #
1795400861.785	(     170,     250 ]   410252   1.320%  99.460% 
1795400861.785	(     250,     380 ]   140529   0.452%  99.912% 
1795400861.785	(     380,     580 ]    20805   0.067%  99.979% 
1795400861.785	(     580,     870 ]     3741   0.012%  99.991% 
1795400861.785	(     870,    1300 ]     1418   0.005%  99.996% 
1795400861.785	(    1300,    1900 ]      441   0.001%  99.997% 
1795400861.785	(    1900,    2900 ]      242   0.001%  99.998% 
1795400861.785	(    2900,    4400 ]      239   0.001%  99.999% 
1795400861.785	(    4400,    6600 ]       30   0.000%  99.999% 
1795400861.785	(    6600,    9900 ]       21   0.000%  99.999% 
1795400861.785	(    9900,   14000 ]       25   0.000%  99.999% 
1795400861.785	(   14000,   22000 ]       53   0.000%  99.999% 
1795400861.785	(   22000,   33000 ]       75   0.000% 100.000% 
1795400861.785	(   33000,   50000 ]      200   0.001% 100.000% 
1795400861.785	(   50000,   75000 ]      218   0.001% 100.001% 
1795400861.785	(   75000,  110000 ]      131   0.000% 100.001% 
1795400861.785	(  110000,  170000 ]       27   0.000% 100.001% 
1795400861.785	(  250000,  380000 ]        1   0.000% 100.001% 
1795400861.785	
1795400861.785	** Level 3 read latency histogram (micros):
1795400861.785	Count: 39383061 Average: 63.3041  StdDev: 68.27
1795400861.785	Min: 5  Median: 45.7459  Max: 250892
1795400861.785	Percentiles: P50: 45.75 P75: 64.00 P99: 224.64 P99.9: 370.74 P99.99: 736.97
1795400861.785	------------------------------------------------------
1795400861.785	(       4,       6 ]      577   0.001%   0.001% 
1795400861.785	(       6,      10 ]     1821   0.005%   0.006% 
1795400861.785	(      10,      15 ]      539   0.001%   0.007% 
1795400861.785	(      15,      22 ]      102   0.000%   0.008% 
1795400861.785	(      22,      34 ]       37   0.000%   0.008% 
1795400861.785	(      34,      51 ] 28495410  72.354%  72.362% ##############
1795400861.785	(      51,      76 ]  1997392   5.072%  77.434% #
1795400861.785	(      76,     110 ]  6684786  16.974%  94.408% ###
1795400861.785	(     110,     170 ]  1398606   3.551%  97.959% #
1795400861.785	(     170,     250 ]   600236   1.524%  99.483% 
1795400861.785	(     250,     380 ]   176765   0.449%  99.932% 
1795400861.785	(     380,     580 ]    20993   0.053%  99.985% 
1795400861.785	(     580,     870 ]     3434   0.009%  99.994% 
1795400861.785	(     870,    1300 ]     1213   0.003%  99.997% 
1795400861.785	(    1300,    1900 ]      415   0.001%  99.998% 
1795400861.786	(    1900,    2900 ]      252   0.001%  99.999% 
1795400861.786	(    2900,    4400 ]      231   0.001%  99.999% 
1795400861.786	(    4400,    6600 ]       34   0.000%  99.999% 
1795400861.786	(    6600,    9900 ]       39   0.000% 100.000% 
1795400861.786	(    9900,   14000 ]       42   0.000% 100.000% 
1795400861.786	(   14000,   22000 ]       69   0.000% 100.000% 
1795400861.786	(   22000,   33000 ]       92   0.000% 100.000% 
1795400861.786	(   33000,   50000 ]      269   0.001% 100.001% 
1795400861.786	(   50000,   75000 ]      248   0.001% 100.001% 
1795400861.786	(   75000,  110000 ]      142   0.000% 100.002% 
1795400861.786	(  110000,  170000 ]       39   0.000% 100.002% 
1795400861.786	(  170000,  250000 ]        2   0.000% 100.002% 
1795400861.786	(  250000,  380000 ]        1   0.000% 100.002% 
1795400861.786	
1795400861.786	** Level 4 read latency histogram (micros):
1795400861.786	Count: 38332420 Average: 62.9774  StdDev: 86.31
1795400861.786	Min: 5  Median: 45.7073  Max: 156818
1795400861.786	Percentiles: P50: 45.71 P75: 62.58 P99: 220.90 P99.9: 371.67 P99.99: 803.57
1795400861.786	------------------------------------------------------
1795400861.786	(       4,       6 ]      613   0.002%   0.002% 
1795400861.786	(       6,      10 ]     2032   0.005%   0.007% 
1795400861.786	(      10,      15 ]      662   0.002%   0.009% 
1795400861.786	(      15,      22 ]      120   0.000%   0.009% 
1795400861.786	(      22,      34 ]       42   0.000%   0.009% 
1795400861.786	(      34,      51 ] 27825852  72.591%  72.600% ###############
1795400861.786	(      51,      76 ]  1985514   5.180%  77.780% #
1795400861.786	(      76,     110 ]  6443374  16.809%  94.589% ###
1795400861.786	(     110,     170 ]  1348423   3.518%  98.107% #
1795400861.786	(     170,     250 ]   538202   1.404%  99.511% 
1795400861.786	(     250,     380 ]   159473   0.416%  99.927% 
1795400861.786	(     380,     580 ]    21516   0.056%  99.983% 
1795400861.786	(     580,     870 ]     3585   0.009%  99.992% 
1795400861.786	(     870,    1300 ]     1629   0.004%  99.996% 
1795400861.786	(    1300,    1900 ]      546   0.001%  99.998% 
1795400861.786	(    1900,    2900 ]      350   0.001%  99.999% 
1795400861.786	(    2900,    4400 ]      295   0.001%  99.999% 
1795400861.786	(    4400,    6600 ]       90   0.000% 100.000% 
1795400861.786	(    6600,    9900 ]       69   0.000% 100.000% 
1795400861.786	(    9900,   14000 ]       44   0.000% 100.000% 
1795400861.786	(   14000,   22000 ]       62   0.000% 100.000% 
1795400861.786	(   22000,   33000 ]       80   0.000% 100.000% 
1795400861.786	(   33000,   50000 ]      267   0.001% 100.001% 
1795400861.786	(   50000,   75000 ]      273   0.001% 100.002% 
1795400861.786	(   75000,  110000 ]      113   0.000% 100.002% 
1795400861.786	(  110000,  170000 ]       42   0.000% 100.002% 
1795400861.786	
1795400861.786	** Level 5 read latency histogram (micros):
1795400861.786	Count: 13567526 Average: 61.6093  StdDev: 249.52
1795400861.786	Min: 5  Median: 45.3583  Max: 137595
1795400861.786	Percentiles: P50: 45.36 P75: 51.76 P99: 220.33 P99.9: 374.97 P99.99: 1834.95
1795400861.786	------------------------------------------------------
1795400861.786	(       4,       6 ]      166   0.001%   0.001% 
1795400861.786	(       6,      10 ]     1327   0.010%   0.011% 
1795400861.786	(      10,      15 ]      451   0.003%   0.014% 
1795400861.786	(      15,      22 ]       84   0.001%   0.015% 
1795400861.786	(      22,      34 ]       43   0.000%   0.015% 
1795400861.786	(      34,      51 ] 10150149  74.812%  74.827% ###############
1795400861.786	(      51,      76 ]   765805   5.644%  80.472% #
1795400861.786	(      76,     110 ]  1998625  14.731%  95.203% ###
1795400861.786	(     110,     170 ]   399593   2.945%  98.148% #
1795400861.786	(     170,     250 ]   183754   1.354%  99.502% 
1795400861.786	(     250,     380 ]    56135   0.414%  99.916% 
1795400861.786	(     380,     580 ]     7105   0.052%  99.968% 
1795400861.786	(     580,     870 ]     1609   0.012%  99.980% 
1795400861.786	(     870,    1300 ]      947   0.007%  99.987% 
1795400861.786	(    1300,    1900 ]      422   0.003%  99.990% 
1795400861.786	(    1900,    2900 ]      379   0.003%  99.993% 
1795400861.786	(    2900,    4400 ]      377   0.003%  99.996% 
1795400861.786	(    4400,    6600 ]      255   0.002%  99.998% 
1795400861.786	(    6600,    9900 ]      158   0.001%  99.999% 
1795400861.786	(    9900,   14000 ]       59   0.000%  99.999% 
1795400861.786	(   14000,   22000 ]       21   0.000% 100.000% 
1795400861.786	(   22000,   33000 ]       26   0.000% 100.000% 
1795400861.786	(   33000,   50000 ]       73   0.001% 100.000% 
1795400861.786	(   50000,   75000 ]       94   0.001% 100.001% 
1795400861.786	(   75000,  110000 ]       26   0.000% 100.001% 
1795400861.786	(  110000,  170000 ]        6   0.000% 100.001% 
1795400861.786	
1795400861.786	
1795400861.786	** DB Stats **
1795400861.786	Uptime(secs): 19894.0 total, 22.5 interval
1795400861.786	Cumulative writes: 23M writes, 23M keys, 18M commit groups, 1.3 writes per commit group, ingest: 22.91 GB, 1.18 MB/s
1795400861.786	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.91 GB, 1.18 MB/s
1795400861.786	Cumulative stall: 04:49:52.109 H:M:S, 87.4 percent
1795400861.786	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795400861.786	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795400861.786	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795400861.786	
1795400861.786	STATISTICS:
1795400861.786	rocksdb.block.cache.miss COUNT : 133819600
1795400861.786	rocksdb.block.cache.hit COUNT : 0
1795400861.786	rocksdb.block.cache.add COUNT : 0
1795400861.786	rocksdb.block.cache.add.failures COUNT : 0
1795400861.786	rocksdb.block.cache.index.miss COUNT : 0
1795400861.786	rocksdb.block.cache.index.hit COUNT : 0
1795400861.786	rocksdb.block.cache.index.add COUNT : 0
1795400861.786	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795400861.786	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795400861.786	rocksdb.block.cache.filter.miss COUNT : 0
1795400861.786	rocksdb.block.cache.filter.hit COUNT : 0
1795400861.786	rocksdb.block.cache.filter.add COUNT : 0
1795400861.786	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795400861.786	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795400861.786	rocksdb.block.cache.data.miss COUNT : 133819600
1795400861.786	rocksdb.block.cache.data.hit COUNT : 0
1795400861.786	rocksdb.block.cache.data.add COUNT : 0
1795400861.786	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795400861.786	rocksdb.block.cache.bytes.read COUNT : 0
1795400861.786	rocksdb.block.cache.bytes.write COUNT : 0
1795400861.786	rocksdb.bloom.filter.useful COUNT : 0
1795400861.786	rocksdb.bloom.filter.full.positive COUNT : 0
1795400861.786	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795400861.786	rocksdb.bloom.filter.micros COUNT : 0
1795400861.786	rocksdb.persistent.cache.hit COUNT : 0
1795400861.786	rocksdb.persistent.cache.miss COUNT : 0
1795400861.786	rocksdb.sim.block.cache.hit COUNT : 0
1795400861.786	rocksdb.sim.block.cache.miss COUNT : 0
1795400861.786	rocksdb.memtable.hit COUNT : 0
1795400861.786	rocksdb.memtable.miss COUNT : 0
1795400861.786	rocksdb.l0.hit COUNT : 0
1795400861.786	rocksdb.l1.hit COUNT : 0
1795400861.786	rocksdb.l2andup.hit COUNT : 0
1795400861.786	rocksdb.compaction.key.drop.new COUNT : 20599594
1795400861.786	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795400861.786	rocksdb.compaction.key.drop.range_del COUNT : 0
1795400861.786	rocksdb.compaction.key.drop.user COUNT : 0
1795400861.786	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795400861.786	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795400861.786	rocksdb.compaction.cancelled COUNT : 0
1795400861.786	rocksdb.number.keys.written COUNT : 23356432
1795400861.786	rocksdb.number.keys.read COUNT : 0
1795400861.786	rocksdb.number.keys.updated COUNT : 0
1795400861.786	rocksdb.bytes.written COUNT : 24602098884
1795400861.786	rocksdb.bytes.read COUNT : 0
1795400861.786	rocksdb.number.db.seek COUNT : 0
1795400861.786	rocksdb.number.db.next COUNT : 0
1795400861.786	rocksdb.number.db.prev COUNT : 0
1795400861.786	rocksdb.number.db.seek.found COUNT : 0
1795400861.786	rocksdb.number.db.next.found COUNT : 0
1795400861.786	rocksdb.number.db.prev.found COUNT : 0
1795400861.786	rocksdb.db.iter.bytes.read COUNT : 0
1795400861.787	rocksdb.no.file.closes COUNT : 0
1795400861.787	rocksdb.no.file.opens COUNT : 1238221
1795400861.787	rocksdb.no.file.errors COUNT : 0
1795400861.787	rocksdb.l0.slowdown.micros COUNT : 0
1795400861.787	rocksdb.memtable.compaction.micros COUNT : 0
1795400861.787	rocksdb.l0.num.files.stall.micros COUNT : 0
1795400861.787	rocksdb.stall.micros COUNT : 17392109203
1795400861.787	rocksdb.db.mutex.wait.micros COUNT : 0
1795400861.787	rocksdb.rate.limit.delay.millis COUNT : 0
1795400861.787	rocksdb.num.iterators COUNT : 0
1795400861.787	rocksdb.number.multiget.get COUNT : 0
1795400861.787	rocksdb.number.multiget.keys.read COUNT : 0
1795400861.787	rocksdb.number.multiget.bytes.read COUNT : 0
1795400861.787	rocksdb.number.deletes.filtered COUNT : 0
1795400861.787	rocksdb.number.merge.failures COUNT : 0
1795400861.787	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795400861.787	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795400861.787	rocksdb.number.reseeks.iteration COUNT : 0
1795400861.787	rocksdb.getupdatessince.calls COUNT : 0
1795400861.787	rocksdb.block.cachecompressed.miss COUNT : 0
1795400861.787	rocksdb.block.cachecompressed.hit COUNT : 0
1795400861.787	rocksdb.block.cachecompressed.add COUNT : 0
1795400861.787	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795400861.787	rocksdb.wal.synced COUNT : 0
1795400861.787	rocksdb.wal.bytes COUNT : 24602098884
1795400861.787	rocksdb.write.self COUNT : 18165323
1795400861.787	rocksdb.write.other COUNT : 5191109
1795400861.787	rocksdb.write.timeout COUNT : 0
1795400861.787	rocksdb.write.wal COUNT : 23356432
1795400861.787	rocksdb.compact.read.bytes COUNT : 562503791769
1795400861.787	rocksdb.compact.write.bytes COUNT : 540856136270
1795400861.787	rocksdb.flush.write.bytes COUNT : 24661882501
1795400861.787	rocksdb.compact.read.marked.bytes COUNT : 0
1795400861.787	rocksdb.compact.read.periodic.bytes COUNT : 0
1795400861.787	rocksdb.compact.read.ttl.bytes COUNT : 0
1795400861.787	rocksdb.compact.write.marked.bytes COUNT : 0
1795400861.787	rocksdb.compact.write.periodic.bytes COUNT : 0
1795400861.787	rocksdb.compact.write.ttl.bytes COUNT : 0
1795400861.787	rocksdb.number.direct.load.table.properties COUNT : 0
1795400861.787	rocksdb.number.superversion_acquires COUNT : 0
1795400861.787	rocksdb.number.superversion_releases COUNT : 0
1795400861.787	rocksdb.number.superversion_cleanups COUNT : 0
1795400861.787	rocksdb.number.block.compressed COUNT : 0
1795400861.787	rocksdb.number.block.decompressed COUNT : 0
1795400861.787	rocksdb.number.block.not_compressed COUNT : 0
1795400861.787	rocksdb.merge.operation.time.nanos COUNT : 0
1795400861.787	rocksdb.filter.operation.time.nanos COUNT : 0
1795400861.787	rocksdb.row.cache.hit COUNT : 0
1795400861.787	rocksdb.row.cache.miss COUNT : 0
1795400861.787	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795400861.787	rocksdb.read.amp.total.read.bytes COUNT : 0
1795400861.787	rocksdb.number.rate_limiter.drains COUNT : 0
1795400861.787	rocksdb.number.iter.skip COUNT : 0
1795400861.787	rocksdb.blobdb.num.put COUNT : 0
1795400861.787	rocksdb.blobdb.num.write COUNT : 0
1795400861.787	rocksdb.blobdb.num.get COUNT : 0
1795400861.787	rocksdb.blobdb.num.multiget COUNT : 0
1795400861.787	rocksdb.blobdb.num.seek COUNT : 0
1795400861.787	rocksdb.blobdb.num.next COUNT : 0
1795400861.787	rocksdb.blobdb.num.prev COUNT : 0
1795400861.787	rocksdb.blobdb.num.keys.written COUNT : 0
1795400861.787	rocksdb.blobdb.num.keys.read COUNT : 0
1795400861.787	rocksdb.blobdb.bytes.written COUNT : 0
1795400861.787	rocksdb.blobdb.bytes.read COUNT : 0
1795400861.787	rocksdb.blobdb.write.inlined COUNT : 0
1795400861.787	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795400861.787	rocksdb.blobdb.write.blob COUNT : 0
1795400861.787	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795400861.787	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795400861.787	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795400861.787	rocksdb.blobdb.blob.file.synced COUNT : 0
1795400861.787	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795400861.787	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795400861.787	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795400861.787	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795400861.787	rocksdb.blobdb.gc.num.files COUNT : 0
1795400861.787	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795400861.787	rocksdb.blobdb.gc.failures COUNT : 0
1795400861.787	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795400861.787	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795400861.787	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795400861.787	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795400861.787	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795400861.787	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795400861.787	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795400861.787	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795400861.787	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795400861.787	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795400861.787	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795400861.787	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795400861.787	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795400861.787	rocksdb.txn.get.tryagain COUNT : 0
1795400861.787	rocksdb.number.multiget.keys.found COUNT : 0
1795400861.787	rocksdb.num.iterator.created COUNT : 0
1795400861.787	rocksdb.num.iterator.deleted COUNT : 0
1795400861.787	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795400861.787	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795400861.787	rocksdb.block.cache.compression.dict.add COUNT : 0
1795400861.787	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795400861.787	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795400861.787	rocksdb.block.cache.add.redundant COUNT : 0
1795400861.787	rocksdb.block.cache.index.add.redundant COUNT : 0
1795400861.787	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795400861.787	rocksdb.block.cache.data.add.redundant COUNT : 0
1795400861.787	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795400861.787	rocksdb.files.marked.trash COUNT : 0
1795400861.787	rocksdb.files.deleted.immediately COUNT : 1233181
1795400861.787	rocksdb.error.handler.bg.errro.count COUNT : 0
1795400861.787	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795400861.787	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795400861.787	rocksdb.error.handler.autoresume.count COUNT : 0
1795400861.787	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795400861.787	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795400861.787	rocksdb.memtable.payload.bytes.at.flush COUNT : 24476504264
1795400861.787	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1808848
1795400861.787	rocksdb.secondary.cache.hits COUNT : 0
1795400861.787	rocksdb.verify_checksum.read.bytes COUNT : 0
1795400861.787	rocksdb.backup.read.bytes COUNT : 0
1795400861.787	rocksdb.backup.write.bytes COUNT : 0
1795400861.787	rocksdb.remote.compact.read.bytes COUNT : 0
1795400861.787	rocksdb.remote.compact.write.bytes COUNT : 0
1795400861.787	rocksdb.hot.file.read.bytes COUNT : 0
1795400861.787	rocksdb.warm.file.read.bytes COUNT : 0
1795400861.787	rocksdb.cold.file.read.bytes COUNT : 0
1795400861.787	rocksdb.hot.file.read.count COUNT : 0
1795400861.787	rocksdb.warm.file.read.count COUNT : 0
1795400861.787	rocksdb.cold.file.read.count COUNT : 0
1795400861.787	rocksdb.last.level.read.bytes COUNT : 0
1795400861.787	rocksdb.last.level.read.count COUNT : 0
1795400861.787	rocksdb.non.last.level.read.bytes COUNT : 562700225308
1795400861.787	rocksdb.non.last.level.read.count COUNT : 138772484
1795400861.787	rocksdb.block.checksum.compute.count COUNT : 136296042
1795400861.787	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.787	rocksdb.db.write.micros P50 : 42.018767 P95 : 13246.656737 P99 : 48946.535774 P100 : 5127391.000000 COUNT : 23356430 SUM : 79167448907
1795400861.787	rocksdb.compaction.times.micros P50 : 87917.478882 P95 : 174940.812721 P99 : 244712.544170 P100 : 5513018.000000 COUNT : 197454 SUM : 18360950307
1795400861.787	rocksdb.compaction.times.cpu_micros P50 : 84786.082986 P95 : 168249.304794 P99 : 239037.536732 P100 : 5504511.000000 COUNT : 197454 SUM : 17596102899
1795400861.787	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.787	rocksdb.table.sync.micros P50 : 24561.014116 P95 : 48783.102294 P99 : 138420.289855 P100 : 775098.000000 COUNT : 13495 SUM : 362593645
1795400861.787	rocksdb.compaction.outfile.sync.micros P50 : 6119.334772 P95 : 13234.563120 P99 : 21956.907557 P100 : 1127743.000000 COUNT : 1200188 SUM : 8083148853
1795400861.788	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.manifest.file.sync.micros P50 : 486.592150 P95 : 665.455746 P99 : 47213.645161 P100 : 1017205.000000 COUNT : 171462 SUM : 252165302
1795400861.788	rocksdb.table.open.io.micros P50 : 237.324229 P95 : 432.347956 P99 : 578.360278 P100 : 191777.000000 COUNT : 1238221 SUM : 360716331
1795400861.788	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.read.block.compaction.micros P50 : 45.902177 P95 : 119.127030 P99 : 225.741309 P100 : 377170.000000 COUNT : 133819600 SUM : 8553338616
1795400861.788	rocksdb.read.block.get.micros P50 : 50.841136 P95 : 106.975076 P99 : 225.034596 P100 : 101486.000000 COUNT : 1238221 SUM : 82251131
1795400861.788	rocksdb.write.raw.block.micros P50 : 0.532618 P95 : 1.420512 P99 : 39.584478 P100 : 1987745.000000 COUNT : 138153828 SUM : 253136333
1795400861.788	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.numfiles.in.singlecompaction P50 : 5.788116 P95 : 9.581512 P99 : 9.923911 P100 : 62.000000 COUNT : 198001 SUM : 1206680
1795400861.788	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.db.write.stall P50 : 0.646637 P95 : 3100.923113 P99 : 13786.776194 P100 : 5121412.000000 COUNT : 18129365 SUM : 17394505330
1795400861.788	rocksdb.sst.read.micros P50 : 45.647744 P95 : 115.775182 P99 : 222.177166 P100 : 377166.000000 COUNT : 138772484 SUM : 8727197377
1795400861.788	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.bytes.per.write P50 : 1122.372533 P95 : 3439.518896 P99 : 4188.000000 P100 : 4188.000000 COUNT : 18165323 SUM : 24602098884
1795400861.788	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.db.flush.micros P50 : 49935.737133 P95 : 141060.344828 P99 : 235299.200000 P100 : 4843776.000000 COUNT : 13494 SUM : 790267161
1795400861.788	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795400861.788	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1206133 SUM : 0
1795400861.788	
