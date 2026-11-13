1794470423.728	Initializing RocksDB Options from the specified file
1794470423.728	Initializing RocksDB Options from command-line flags
1794470432.672	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1794470432.672	Values:     1024 bytes each (512 bytes after compression)
1794470432.672	Entries:    13675847
1794470432.672	Prefix:    0 bytes
1794470432.672	Keys per prefix:    0
1794470432.672	RawSize:    13564.0 MB (estimated)
1794470432.672	FileSize:   6886.3 MB (estimated)
1794470432.672	Write rate: 0 bytes/second
1794470432.672	Read rate: 0 ops/second
1794470432.672	Compression: NoCompression
1794470432.672	Compression sampling rate: 0
1794470432.672	Memtablerep: SkipListFactory
1794470432.672	Perf Level: 1
1794470432.672	------------------------------------------------
1794470432.672	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1794508772.709	overwrite    :   11189.911 micros/op 356 ops/sec;    0.4 MB/s
1794508777.704	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794508777.710	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508787.704	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508797.704	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508807.705	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508817.705	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508827.705	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508837.705	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508847.706	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508857.706	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508867.706	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508877.707	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508887.707	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508897.709	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508908.001	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508918.001	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508928.001	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794508938.002	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794508938.004	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794508938.004	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794508938.011	
1794508938.011	Level Files Size(MB)
1794508938.011	--------------------
1794508938.011	  0        1        2
1794508938.011	  1        5        2
1794508938.011	  2       62       25
1794508938.011	  3      607      250
1794508938.011	  4     5641     2500
1794508938.011	  5    30293    13778
1794508938.011	  6        0        0
1794508938.011	
1794508938.020	
1794508938.020	
1794508938.020	** Compaction Stats [default] **
1794508938.020	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794508938.020	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794508938.020	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      13.5     13.4       0.0   1.0      0.0      5.0   2773.58            487.43      7816    0.355     13K      4       0.0       0.0
1794508938.020	  L1      5/0    2.00 MB   0.8     23.1    13.4      9.6      23.1     13.5       0.0   1.7      6.5      6.5   3621.66           1098.52      3893    0.930     23M   3585       0.0       0.0
1794508938.020	  L2     62/0   24.90 MB   1.0     67.8    13.5     54.4      67.8     13.4       0.0   5.0      5.0      5.0  13806.86           3576.58     28819    0.479     68M    26K       0.0       0.0
1794508938.020	  L3    607/0   249.51 MB   1.0     87.3    13.4     73.9      87.0     13.2       0.0   6.5      5.8      5.8  15386.19           4324.00     30578    0.503     88M   260K       0.0       0.0
1794508938.020	  L4   5641/0    2.44 GB   1.0     87.6    13.2     74.5      85.2     10.7       0.0   6.5      5.3      5.1  16981.25           4859.25     30509    0.557     89M  2491K       0.0       0.0
1794508938.020	  L5  30293/0   13.46 GB   0.6     45.6    10.7     34.9      37.6      2.7       0.0   3.5      5.9      4.9   7863.87           2410.18     23266    0.338     46M  8142K       0.0       0.0
1794508938.020	 Sum  36609/0   16.17 GB   0.0    311.5    64.2    247.3     314.2     66.9       0.0  23.4      5.3      5.3  60433.42          16755.95    124881    0.484    316M    10M       0.0       0.0
1794508938.020	 Int      0/0    0.00 KB   0.0      0.3     0.1      0.3       0.3      0.0       0.0 297968157.0      5.5      4.6     62.45             17.57       135    0.463    341K    59K       0.0       0.0
1794508938.020	
1794508938.020	** Compaction Stats [default] **
1794508938.020	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794508938.020	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794508938.020	 Low      0/0    0.00 KB   0.0    311.5    64.2    247.3     300.8     53.5       0.0   0.0      5.5      5.3  57662.21          16270.55    117067    0.493    316M    10M       0.0       0.0
1794508938.020	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      13.4     13.4       0.0   0.0      0.0      5.0   2771.21            485.40      7813    0.355       0      0       0.0       0.0
1794508938.020	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    189.6      0.00              0.00         1    0.002       0      0       0.0       0.0
1794508938.020	
1794508938.020	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1794508938.020	
1794508938.020	Uptime(secs): 38514.3 total, 54.5 interval
1794508938.020	Flush(GB): cumulative 13.447, interval 0.000
1794508938.020	AddFile(GB): cumulative 0.000, interval 0.000
1794508938.020	AddFile(Total Files): cumulative 0, interval 0
1794508938.020	AddFile(L0 Files): cumulative 0, interval 0
1794508938.020	AddFile(Keys): cumulative 0, interval 0
1794508938.020	Cumulative compaction: 314.22 GB write, 8.35 MB/s write, 311.51 GB read, 8.28 MB/s read, 60433.4 seconds
1794508938.020	Interval compaction: 0.28 GB write, 5.21 MB/s write, 0.34 GB read, 6.31 MB/s read, 62.4 seconds
1794508938.020	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 140814 slowdown for pending_compaction_bytes, 7 memtable_compaction, 2 memtable_slowdown, interval 0 total count
1794508938.020	Block cache LRUCache@0x576c39ba2a70#63922 capacity: 8.00 MB collections: 213 last_copies: 1 last_secs: 5.4e-05 secs_since: 114
1794508938.020	Block cache entry stats(count,size,portion): Misc(3,8.38 KB,0.102234%)
1794508938.020	
1794508938.020	** File Read Latency Histogram By Level [default] **
1794508938.020	** Level 0 read latency histogram (micros):
1794508938.020	Count: 3456409 Average: 98.5092  StdDev: 443.18
1794508938.020	Min: 13  Median: 54.5280  Max: 4448629
1794508938.020	Percentiles: P50: 54.53 P75: 77.91 P99: 394.97 P99.9: 1644.06 P99.99: 13741.40
1794508938.020	------------------------------------------------------
1794508938.020	(      10,      15 ]        2   0.000%   0.000% 
1794508938.020	(      15,      22 ]        5   0.000%   0.000% 
1794508938.020	(      22,      34 ]        4   0.000%   0.000% 
1794508938.020	(      34,      51 ]  1590735  46.023%  46.023% #########
1794508938.020	(      51,      76 ]   974049  28.181%  74.204% ######
1794508938.020	(      76,     110 ]   489731  14.169%  88.373% ###
1794508938.020	(     110,     170 ]   230109   6.657%  95.030% #
1794508938.020	(     170,     250 ]    95531   2.764%  97.794% #
1794508938.020	(     250,     380 ]    40499   1.172%  98.966% 
1794508938.020	(     380,     580 ]    15765   0.456%  99.422% 
1794508938.020	(     580,     870 ]     9569   0.277%  99.699% 
1794508938.020	(     870,    1300 ]     5645   0.163%  99.862% 
1794508938.020	(    1300,    1900 ]     2282   0.066%  99.928% 
1794508938.020	(    1900,    2900 ]     1083   0.031%  99.959% 
1794508938.020	(    2900,    4400 ]      647   0.019%  99.978% 
1794508938.020	(    4400,    6600 ]      166   0.005%  99.983% 
1794508938.020	(    6600,    9900 ]      113   0.003%  99.986% 
1794508938.020	(    9900,   14000 ]      137   0.004%  99.990% 
1794508938.020	(   14000,   22000 ]       69   0.002%  99.992% 
1794508938.020	(   22000,   33000 ]       20   0.001%  99.993% 
1794508938.020	(   33000,   50000 ]        9   0.000%  99.993% 
1794508938.020	(   50000,   75000 ]       11   0.000%  99.993% 
1794508938.020	(   75000,  110000 ]       77   0.002%  99.996% 
1794508938.020	(  110000,  170000 ]       22   0.001%  99.996% 
1794508938.020	(  170000,  250000 ]       45   0.001%  99.998% 
1794508938.020	(  250000,  380000 ]       42   0.001%  99.999% 
1794508938.020	(  380000,  570000 ]       23   0.001%  99.999% 
1794508938.021	(  570000,  860000 ]       13   0.000% 100.000% 
1794508938.021	(  860000, 1200000 ]        4   0.000% 100.000% 
1794508938.021	( 1200000, 1900000 ]        1   0.000% 100.000% 
1794508938.021	( 4300000, 6500000 ]        1   0.000% 100.000% 
1794508938.021	
1794508938.021	** Level 1 read latency histogram (micros):
1794508938.021	Count: 6107480 Average: 102.0046  StdDev: 544.28
1794508938.021	Min: 10  Median: 54.3879  Max: 4390705
1794508938.021	Percentiles: P50: 54.39 P75: 76.53 P99: 383.70 P99.9: 1473.47 P99.99: 13037.89
1794508938.021	------------------------------------------------------
1794508938.021	(       6,      10 ]       14   0.000%   0.000% 
1794508938.021	(      10,      15 ]       41   0.001%   0.001% 
1794508938.021	(      15,      22 ]       16   0.000%   0.001% 
1794508938.021	(      22,      34 ]       14   0.000%   0.001% 
1794508938.021	(      34,      51 ]  2816316  46.113%  46.114% #########
1794508938.021	(      51,      76 ]  1751362  28.676%  74.790% ######
1794508938.021	(      76,     110 ]   822279  13.463%  88.253% ###
1794508938.021	(     110,     170 ]   394441   6.458%  94.711% #
1794508938.021	(     170,     250 ]   186512   3.054%  97.765% #
1794508938.021	(     250,     380 ]    74887   1.226%  98.991% 
1794508938.021	(     380,     580 ]    28267   0.463%  99.454% 
1794508938.021	(     580,     870 ]    16831   0.276%  99.730% 
1794508938.021	(     870,    1300 ]     9352   0.153%  99.883% 
1794508938.021	(    1300,    1900 ]     3599   0.059%  99.942% 
1794508938.021	(    1900,    2900 ]     1540   0.025%  99.967% 
1794508938.021	(    2900,    4400 ]      765   0.013%  99.980% 
1794508938.021	(    4400,    6600 ]      282   0.005%  99.984% 
1794508938.021	(    6600,    9900 ]      189   0.003%  99.987% 
1794508938.021	(    9900,   14000 ]      212   0.003%  99.991% 
1794508938.021	(   14000,   22000 ]       85   0.001%  99.992% 
1794508938.021	(   22000,   33000 ]       40   0.001%  99.993% 
1794508938.021	(   33000,   50000 ]       13   0.000%  99.993% 
1794508938.021	(   50000,   75000 ]       19   0.000%  99.993% 
1794508938.021	(   75000,  110000 ]      130   0.002%  99.996% 
1794508938.021	(  110000,  170000 ]       41   0.001%  99.996% 
1794508938.021	(  170000,  250000 ]      105   0.002%  99.998% 
1794508938.021	(  250000,  380000 ]      106   0.002% 100.000% 
1794508938.021	(  380000,  570000 ]       74   0.001% 100.001% 
1794508938.021	(  570000,  860000 ]       18   0.000% 100.001% 
1794508938.021	(  860000, 1200000 ]        3   0.000% 100.001% 
1794508938.021	( 1200000, 1900000 ]        1   0.000% 100.001% 
1794508938.021	( 1900000, 2900000 ]        3   0.000% 100.001% 
1794508938.021	( 4300000, 6500000 ]        1   0.000% 100.001% 
1794508938.021	
1794508938.021	** Level 2 read latency histogram (micros):
1794508938.021	Count: 17985581 Average: 108.3589  StdDev: 138.60
1794508938.021	Min: 10  Median: 56.9911  Max: 7095164
1794508938.021	Percentiles: P50: 56.99 P75: 84.92 P99: 379.10 P99.9: 1282.04 P99.99: 6549.41
1794508938.021	------------------------------------------------------
1794508938.021	(       6,      10 ]      115   0.001%   0.001% 
1794508938.021	(      10,      15 ]      452   0.003%   0.003% 
1794508938.021	(      15,      22 ]       96   0.001%   0.004% 
1794508938.021	(      22,      34 ]       74   0.000%   0.004% 
1794508938.021	(      34,      51 ]  7800187  43.369%  43.373% #########
1794508938.021	(      51,      76 ]  4973488  27.653%  71.026% ######
1794508938.021	(      76,     110 ]  2725799  15.155%  86.181% ###
1794508938.021	(     110,     170 ]  1339760   7.449%  93.630% #
1794508938.021	(     170,     250 ]   686708   3.818%  97.449% #
1794508938.021	(     250,     380 ]   280992   1.562%  99.011% 
1794508938.021	(     380,     580 ]    89690   0.499%  99.509% 
1794508938.021	(     580,     870 ]    46520   0.259%  99.768% 
1794508938.021	(     870,    1300 ]    24748   0.138%  99.906% 
1794508938.021	(    1300,    1900 ]     8875   0.049%  99.955% 
1794508938.021	(    1900,    2900 ]     3688   0.021%  99.976% 
1794508938.021	(    2900,    4400 ]     1887   0.010%  99.986% 
1794508938.021	(    4400,    6600 ]      720   0.004%  99.990% 
1794508938.021	(    6600,    9900 ]      558   0.003%  99.993% 
1794508938.021	(    9900,   14000 ]      494   0.003%  99.996% 
1794508938.021	(   14000,   22000 ]      175   0.001%  99.997% 
1794508938.021	(   22000,   33000 ]       49   0.000%  99.997% 
1794508938.021	(   33000,   50000 ]       39   0.000%  99.997% 
1794508938.021	(   50000,   75000 ]       80   0.000%  99.998% 
1794508938.021	(   75000,  110000 ]      465   0.003% 100.000% 
1794508938.021	(  110000,  170000 ]      173   0.001% 100.001% 
1794508938.021	(  170000,  250000 ]      422   0.002% 100.004% 
1794508938.021	(  250000,  380000 ]      370   0.002% 100.006% 
1794508938.021	(  380000,  570000 ]      173   0.001% 100.007% 
1794508938.021	(  570000,  860000 ]       56   0.000% 100.007% 
1794508938.021	(  860000, 1200000 ]       28   0.000% 100.007% 
1794508938.021	( 1200000, 1900000 ]       10   0.000% 100.007% 
1794508938.021	( 1900000, 2900000 ]        7   0.000% 100.007% 
1794508938.021	( 2900000, 4300000 ]        2   0.000% 100.007% 
1794508938.021	( 6500000, 9800000 ]        1   0.000% 100.007% 
1794508938.021	
1794508938.021	** Level 3 read latency histogram (micros):
1794508938.021	Count: 23093475 Average: 105.7375  StdDev: 181.85
1794508938.021	Min: 9  Median: 57.0734  Max: 7423983
1794508938.021	Percentiles: P50: 57.07 P75: 84.62 P99: 365.46 P99.9: 1263.35 P99.99: 5866.64
1794508938.021	------------------------------------------------------
1794508938.021	(       6,      10 ]      110   0.000%   0.000% 
1794508938.021	(      10,      15 ]      388   0.002%   0.002% 
1794508938.021	(      15,      22 ]       86   0.000%   0.003% 
1794508938.021	(      22,      34 ]       68   0.000%   0.003% 
1794508938.021	(      34,      51 ]  9977230  43.204%  43.206% #########
1794508938.021	(      51,      76 ]  6457855  27.964%  71.170% ######
1794508938.021	(      76,     110 ]  3488246  15.105%  86.275% ###
1794508938.021	(     110,     170 ]  1721211   7.453%  93.729% #
1794508938.021	(     170,     250 ]   909803   3.940%  97.668% #
1794508938.021	(     250,     380 ]   346286   1.499%  99.168% 
1794508938.021	(     380,     580 ]    99108   0.429%  99.597% 
1794508938.021	(     580,     870 ]    47382   0.205%  99.802% 
1794508938.021	(     870,    1300 ]    24715   0.107%  99.909% 
1794508938.021	(    1300,    1900 ]    10194   0.044%  99.953% 
1794508938.021	(    1900,    2900 ]     5040   0.022%  99.975% 
1794508938.021	(    2900,    4400 ]     2749   0.012%  99.987% 
1794508938.021	(    4400,    6600 ]     1042   0.005%  99.992% 
1794508938.021	(    6600,    9900 ]      628   0.003%  99.994% 
1794508938.021	(    9900,   14000 ]      462   0.002%  99.996% 
1794508938.021	(   14000,   22000 ]      203   0.001%  99.997% 
1794508938.021	(   22000,   33000 ]       79   0.000%  99.997% 
1794508938.021	(   33000,   50000 ]       50   0.000%  99.998% 
1794508938.021	(   50000,   75000 ]      110   0.000%  99.998% 
1794508938.021	(   75000,  110000 ]      551   0.002% 100.001% 
1794508938.021	(  110000,  170000 ]      238   0.001% 100.002% 
1794508938.021	(  170000,  250000 ]      469   0.002% 100.004% 
1794508938.021	(  250000,  380000 ]      473   0.002% 100.006% 
1794508938.021	(  380000,  570000 ]      223   0.001% 100.007% 
1794508938.021	(  570000,  860000 ]       38   0.000% 100.007% 
1794508938.021	(  860000, 1200000 ]       34   0.000% 100.007% 
1794508938.021	( 1200000, 1900000 ]       26   0.000% 100.007% 
1794508938.021	( 1900000, 2900000 ]        3   0.000% 100.007% 
1794508938.021	( 4300000, 6500000 ]        1   0.000% 100.007% 
1794508938.021	( 6500000, 9800000 ]        1   0.000% 100.007% 
1794508938.021	
1794508938.021	** Level 4 read latency histogram (micros):
1794508938.021	Count: 22573043 Average: 120.9443  StdDev: 41.47
1794508938.021	Min: 9  Median: 61.3741  Max: 7424092
1794508938.021	Percentiles: P50: 61.37 P75: 89.69 P99: 634.80 P99.9: 2375.88 P99.99: 8823.19
1794508938.021	------------------------------------------------------
1794508938.021	(       6,      10 ]      105   0.000%   0.000% 
1794508938.021	(      10,      15 ]      382   0.002%   0.002% 
1794508938.021	(      15,      22 ]      101   0.000%   0.003% 
1794508938.021	(      22,      34 ]       66   0.000%   0.003% 
1794508938.021	(      34,      51 ]  8244566  36.524%  36.527% #######
1794508938.021	(      51,      76 ]  7329076  32.468%  68.995% ######
1794508938.021	(      76,     110 ]  3366856  14.915%  83.910% ###
1794508938.021	(     110,     170 ]  1897086   8.404%  92.315% ##
1794508938.021	(     170,     250 ]   938866   4.159%  96.474% #
1794508938.021	(     250,     380 ]   384963   1.705%  98.179% 
1794508938.021	(     380,     580 ]   162770   0.721%  98.900% 
1794508938.021	(     580,     870 ]   118942   0.527%  99.427% 
1794508938.021	(     870,    1300 ]    67785   0.300%  99.728% 
1794508938.021	(    1300,    1900 ]    31142   0.138%  99.866% 
1794508938.021	(    1900,    2900 ]    16315   0.072%  99.938% 
1794508938.021	(    2900,    4400 ]     8070   0.036%  99.974% 
1794508938.021	(    4400,    6600 ]     2893   0.013%  99.986% 
1794508938.021	(    6600,    9900 ]     1190   0.005%  99.992% 
1794508938.021	(    9900,   14000 ]      847   0.004%  99.995% 
1794508938.021	(   14000,   22000 ]      280   0.001%  99.997% 
1794508938.021	(   22000,   33000 ]      181   0.001%  99.998% 
1794508938.021	(   33000,   50000 ]       63   0.000%  99.998% 
1794508938.021	(   50000,   75000 ]       94   0.000%  99.998% 
1794508938.021	(   75000,  110000 ]      562   0.002% 100.001% 
1794508938.021	(  110000,  170000 ]      215   0.001% 100.002% 
1794508938.021	(  170000,  250000 ]      516   0.002% 100.004% 
1794508938.021	(  250000,  380000 ]      516   0.002% 100.006% 
1794508938.021	(  380000,  570000 ]      269   0.001% 100.007% 
1794508938.021	(  570000,  860000 ]       65   0.000% 100.008% 
1794508938.021	(  860000, 1200000 ]       38   0.000% 100.008% 
1794508938.021	( 1200000, 1900000 ]       19   0.000% 100.008% 
1794508938.021	( 1900000, 2900000 ]        7   0.000% 100.008% 
1794508938.021	( 2900000, 4300000 ]        2   0.000% 100.008% 
1794508938.021	( 4300000, 6500000 ]        1   0.000% 100.008% 
1794508938.021	( 6500000, 9800000 ]        1   0.000% 100.008% 
1794508938.021	
1794508938.021	** Level 5 read latency histogram (micros):
1794508938.021	Count: 9350701 Average: 132.4451  StdDev: 388.26
1794508938.021	Min: 9  Median: 62.7641  Max: 3291446
1794508938.021	Percentiles: P50: 62.76 P75: 88.28 P99: 837.71 P99.9: 2704.46 P99.99: 12712.26
1794508938.021	------------------------------------------------------
1794508938.021	(       6,      10 ]      149   0.002%   0.002% 
1794508938.021	(      10,      15 ]      637   0.007%   0.008% 
1794508938.021	(      15,      22 ]      129   0.001%   0.010% 
1794508938.021	(      22,      34 ]      102   0.001%   0.011% 
1794508938.021	(      34,      51 ]  3013907  32.232%  32.243% ######
1794508938.021	(      51,      76 ]  3528585  37.736%  69.979% ########
1794508938.021	(      76,     110 ]  1300183  13.905%  83.883% ###
1794508938.021	(     110,     170 ]   735003   7.860%  91.744% ##
1794508938.021	(     170,     250 ]   364946   3.903%  95.647% #
1794508938.021	(     250,     380 ]   157030   1.679%  97.326% 
1794508938.021	(     380,     580 ]    87595   0.937%  98.263% 
1794508938.021	(     580,     870 ]    77564   0.829%  99.092% 
1794508938.021	(     870,    1300 ]    48806   0.522%  99.614% 
1794508938.021	(    1300,    1900 ]    19479   0.208%  99.823% 
1794508938.021	(    1900,    2900 ]     8994   0.096%  99.919% 
1794508938.021	(    2900,    4400 ]     4095   0.044%  99.963% 
1794508938.021	(    4400,    6600 ]     1573   0.017%  99.979% 
1794508938.021	(    6600,    9900 ]      742   0.008%  99.987% 
1794508938.021	(    9900,   14000 ]      360   0.004%  99.991% 
1794508938.021	(   14000,   22000 ]      130   0.001%  99.993% 
1794508938.021	(   22000,   33000 ]       85   0.001%  99.994% 
1794508938.021	(   33000,   50000 ]       23   0.000%  99.994% 
1794508938.021	(   50000,   75000 ]       41   0.000%  99.994% 
1794508938.021	(   75000,  110000 ]      257   0.003%  99.997% 
1794508938.021	(  110000,  170000 ]       85   0.001%  99.998% 
1794508938.021	(  170000,  250000 ]      273   0.003% 100.001% 
1794508938.021	(  250000,  380000 ]      243   0.003% 100.003% 
1794508938.021	(  380000,  570000 ]      119   0.001% 100.005% 
1794508938.021	(  570000,  860000 ]       41   0.000% 100.005% 
1794508938.021	(  860000, 1200000 ]       15   0.000% 100.005% 
1794508938.021	( 1200000, 1900000 ]       14   0.000% 100.005% 
1794508938.021	( 1900000, 2900000 ]        2   0.000% 100.005% 
1794508938.021	( 2900000, 4300000 ]        3   0.000% 100.005% 
1794508938.021	
1794508938.021	
1794508938.021	** DB Stats **
1794508938.021	Uptime(secs): 38514.3 total, 54.5 interval
1794508938.021	Cumulative writes: 13M writes, 13M keys, 9278K commit groups, 1.5 writes per commit group, ingest: 13.40 GB, 0.36 MB/s
1794508938.021	Cumulative WAL: 13M writes, 0 syncs, 13675848.00 writes per sync, written: 13.40 GB, 0.36 MB/s
1794508938.021	Cumulative stall: 09:21:16.425 H:M:S, 87.4 percent
1794508938.021	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1794508938.021	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1794508938.021	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1794508938.021	
1794508938.021	STATISTICS:
1794508938.021	rocksdb.block.cache.miss COUNT : 79558029
1794508938.021	rocksdb.block.cache.hit COUNT : 0
1794508938.021	rocksdb.block.cache.add COUNT : 0
1794508938.021	rocksdb.block.cache.add.failures COUNT : 0
1794508938.021	rocksdb.block.cache.index.miss COUNT : 0
1794508938.021	rocksdb.block.cache.index.hit COUNT : 0
1794508938.021	rocksdb.block.cache.index.add COUNT : 0
1794508938.021	rocksdb.block.cache.index.bytes.insert COUNT : 0
1794508938.021	rocksdb.block.cache.index.bytes.evict COUNT : 0
1794508938.021	rocksdb.block.cache.filter.miss COUNT : 0
1794508938.021	rocksdb.block.cache.filter.hit COUNT : 0
1794508938.021	rocksdb.block.cache.filter.add COUNT : 0
1794508938.021	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1794508938.021	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1794508938.021	rocksdb.block.cache.data.miss COUNT : 79558029
1794508938.021	rocksdb.block.cache.data.hit COUNT : 0
1794508938.021	rocksdb.block.cache.data.add COUNT : 0
1794508938.021	rocksdb.block.cache.data.bytes.insert COUNT : 0
1794508938.021	rocksdb.block.cache.bytes.read COUNT : 0
1794508938.021	rocksdb.block.cache.bytes.write COUNT : 0
1794508938.021	rocksdb.bloom.filter.useful COUNT : 0
1794508938.021	rocksdb.bloom.filter.full.positive COUNT : 0
1794508938.021	rocksdb.bloom.filter.full.true.positive COUNT : 0
1794508938.021	rocksdb.bloom.filter.micros COUNT : 0
1794508938.021	rocksdb.persistent.cache.hit COUNT : 0
1794508938.021	rocksdb.persistent.cache.miss COUNT : 0
1794508938.021	rocksdb.sim.block.cache.hit COUNT : 0
1794508938.021	rocksdb.sim.block.cache.miss COUNT : 0
1794508938.021	rocksdb.memtable.hit COUNT : 0
1794508938.021	rocksdb.memtable.miss COUNT : 0
1794508938.021	rocksdb.l0.hit COUNT : 0
1794508938.021	rocksdb.l1.hit COUNT : 0
1794508938.021	rocksdb.l2andup.hit COUNT : 0
1794508938.021	rocksdb.compaction.key.drop.new COUNT : 10924827
1794508938.021	rocksdb.compaction.key.drop.obsolete COUNT : 0
1794508938.021	rocksdb.compaction.key.drop.range_del COUNT : 0
1794508938.021	rocksdb.compaction.key.drop.user COUNT : 0
1794508938.021	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1794508938.021	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1794508938.021	rocksdb.compaction.cancelled COUNT : 0
1794508938.021	rocksdb.number.keys.written COUNT : 13675848
1794508938.021	rocksdb.number.keys.read COUNT : 0
1794508938.021	rocksdb.number.keys.updated COUNT : 0
1794508938.021	rocksdb.bytes.written COUNT : 14388922464
1794508938.021	rocksdb.bytes.read COUNT : 0
1794508938.021	rocksdb.number.db.seek COUNT : 0
1794508938.021	rocksdb.number.db.next COUNT : 0
1794508938.021	rocksdb.number.db.prev COUNT : 0
1794508938.021	rocksdb.number.db.seek.found COUNT : 0
1794508938.021	rocksdb.number.db.next.found COUNT : 0
1794508938.021	rocksdb.number.db.prev.found COUNT : 0
1794508938.021	rocksdb.db.iter.bytes.read COUNT : 0
1794508938.021	rocksdb.no.file.closes COUNT : 0
1794508938.021	rocksdb.no.file.opens COUNT : 754063
1794508938.021	rocksdb.no.file.errors COUNT : 0
1794508938.021	rocksdb.l0.slowdown.micros COUNT : 0
1794508938.021	rocksdb.memtable.compaction.micros COUNT : 0
1794508938.021	rocksdb.l0.num.files.stall.micros COUNT : 0
1794508938.021	rocksdb.stall.micros COUNT : 33676425026
1794508938.021	rocksdb.db.mutex.wait.micros COUNT : 0
1794508938.021	rocksdb.rate.limit.delay.millis COUNT : 0
1794508938.021	rocksdb.num.iterators COUNT : 0
1794508938.021	rocksdb.number.multiget.get COUNT : 0
1794508938.021	rocksdb.number.multiget.keys.read COUNT : 0
1794508938.021	rocksdb.number.multiget.bytes.read COUNT : 0
1794508938.021	rocksdb.number.deletes.filtered COUNT : 0
1794508938.021	rocksdb.number.merge.failures COUNT : 0
1794508938.021	rocksdb.bloom.filter.prefix.checked COUNT : 0
1794508938.021	rocksdb.bloom.filter.prefix.useful COUNT : 0
1794508938.021	rocksdb.number.reseeks.iteration COUNT : 0
1794508938.021	rocksdb.getupdatessince.calls COUNT : 0
1794508938.021	rocksdb.block.cachecompressed.miss COUNT : 0
1794508938.021	rocksdb.block.cachecompressed.hit COUNT : 0
1794508938.021	rocksdb.block.cachecompressed.add COUNT : 0
1794508938.021	rocksdb.block.cachecompressed.add.failures COUNT : 0
1794508938.021	rocksdb.wal.synced COUNT : 0
1794508938.021	rocksdb.wal.bytes COUNT : 14388922464
1794508938.021	rocksdb.write.self COUNT : 9278096
1794508938.021	rocksdb.write.other COUNT : 4397752
1794508938.021	rocksdb.write.timeout COUNT : 0
1794508938.021	rocksdb.write.wal COUNT : 13675848
1794508938.021	rocksdb.compact.read.bytes COUNT : 334436097772
1794508938.021	rocksdb.compact.write.bytes COUNT : 322954113036
1794508938.021	rocksdb.flush.write.bytes COUNT : 14443949212
1794508938.021	rocksdb.compact.read.marked.bytes COUNT : 0
1794508938.021	rocksdb.compact.read.periodic.bytes COUNT : 0
1794508938.021	rocksdb.compact.read.ttl.bytes COUNT : 0
1794508938.021	rocksdb.compact.write.marked.bytes COUNT : 0
1794508938.021	rocksdb.compact.write.periodic.bytes COUNT : 0
1794508938.021	rocksdb.compact.write.ttl.bytes COUNT : 0
1794508938.021	rocksdb.number.direct.load.table.properties COUNT : 0
1794508938.021	rocksdb.number.superversion_acquires COUNT : 0
1794508938.021	rocksdb.number.superversion_releases COUNT : 0
1794508938.021	rocksdb.number.superversion_cleanups COUNT : 0
1794508938.021	rocksdb.number.block.compressed COUNT : 0
1794508938.021	rocksdb.number.block.decompressed COUNT : 0
1794508938.021	rocksdb.number.block.not_compressed COUNT : 0
1794508938.021	rocksdb.merge.operation.time.nanos COUNT : 0
1794508938.021	rocksdb.filter.operation.time.nanos COUNT : 0
1794508938.021	rocksdb.row.cache.hit COUNT : 0
1794508938.021	rocksdb.row.cache.miss COUNT : 0
1794508938.021	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1794508938.021	rocksdb.read.amp.total.read.bytes COUNT : 0
1794508938.021	rocksdb.number.rate_limiter.drains COUNT : 0
1794508938.021	rocksdb.number.iter.skip COUNT : 0
1794508938.021	rocksdb.blobdb.num.put COUNT : 0
1794508938.021	rocksdb.blobdb.num.write COUNT : 0
1794508938.021	rocksdb.blobdb.num.get COUNT : 0
1794508938.021	rocksdb.blobdb.num.multiget COUNT : 0
1794508938.021	rocksdb.blobdb.num.seek COUNT : 0
1794508938.021	rocksdb.blobdb.num.next COUNT : 0
1794508938.021	rocksdb.blobdb.num.prev COUNT : 0
1794508938.021	rocksdb.blobdb.num.keys.written COUNT : 0
1794508938.021	rocksdb.blobdb.num.keys.read COUNT : 0
1794508938.021	rocksdb.blobdb.bytes.written COUNT : 0
1794508938.021	rocksdb.blobdb.bytes.read COUNT : 0
1794508938.021	rocksdb.blobdb.write.inlined COUNT : 0
1794508938.021	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1794508938.021	rocksdb.blobdb.write.blob COUNT : 0
1794508938.021	rocksdb.blobdb.write.blob.ttl COUNT : 0
1794508938.021	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1794508938.021	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1794508938.021	rocksdb.blobdb.blob.file.synced COUNT : 0
1794508938.021	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1794508938.021	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1794508938.021	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1794508938.021	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1794508938.021	rocksdb.blobdb.gc.num.files COUNT : 0
1794508938.021	rocksdb.blobdb.gc.num.new.files COUNT : 0
1794508938.021	rocksdb.blobdb.gc.failures COUNT : 0
1794508938.021	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1794508938.021	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1794508938.021	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1794508938.021	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1794508938.021	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1794508938.021	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1794508938.021	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1794508938.021	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1794508938.022	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1794508938.022	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1794508938.022	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1794508938.022	rocksdb.txn.overhead.duplicate.key COUNT : 0
1794508938.022	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1794508938.022	rocksdb.txn.get.tryagain COUNT : 0
1794508938.022	rocksdb.number.multiget.keys.found COUNT : 0
1794508938.022	rocksdb.num.iterator.created COUNT : 0
1794508938.022	rocksdb.num.iterator.deleted COUNT : 0
1794508938.022	rocksdb.block.cache.compression.dict.miss COUNT : 0
1794508938.022	rocksdb.block.cache.compression.dict.hit COUNT : 0
1794508938.022	rocksdb.block.cache.compression.dict.add COUNT : 0
1794508938.022	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1794508938.022	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1794508938.022	rocksdb.block.cache.add.redundant COUNT : 0
1794508938.022	rocksdb.block.cache.index.add.redundant COUNT : 0
1794508938.022	rocksdb.block.cache.filter.add.redundant COUNT : 0
1794508938.022	rocksdb.block.cache.data.add.redundant COUNT : 0
1794508938.022	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1794508938.022	rocksdb.files.marked.trash COUNT : 0
1794508938.022	rocksdb.files.deleted.immediately COUNT : 733239
1794508938.022	rocksdb.error.handler.bg.errro.count COUNT : 0
1794508938.022	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1794508938.022	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1794508938.022	rocksdb.error.handler.autoresume.count COUNT : 0
1794508938.022	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1794508938.022	rocksdb.error.handler.autoresume.success.count COUNT : 0
1794508938.022	rocksdb.memtable.payload.bytes.at.flush COUNT : 14332058144
1794508938.022	rocksdb.memtable.garbage.bytes.at.flush COUNT : 914904
1794508938.022	rocksdb.secondary.cache.hits COUNT : 0
1794508938.022	rocksdb.verify_checksum.read.bytes COUNT : 0
1794508938.022	rocksdb.backup.read.bytes COUNT : 0
1794508938.022	rocksdb.backup.write.bytes COUNT : 0
1794508938.022	rocksdb.remote.compact.read.bytes COUNT : 0
1794508938.022	rocksdb.remote.compact.write.bytes COUNT : 0
1794508938.022	rocksdb.hot.file.read.bytes COUNT : 0
1794508938.022	rocksdb.warm.file.read.bytes COUNT : 0
1794508938.022	rocksdb.cold.file.read.bytes COUNT : 0
1794508938.022	rocksdb.hot.file.read.count COUNT : 0
1794508938.022	rocksdb.warm.file.read.count COUNT : 0
1794508938.022	rocksdb.cold.file.read.count COUNT : 0
1794508938.022	rocksdb.last.level.read.bytes COUNT : 0
1794508938.022	rocksdb.last.level.read.count COUNT : 0
1794508938.022	rocksdb.non.last.level.read.bytes COUNT : 334597194120
1794508938.022	rocksdb.non.last.level.read.count COUNT : 82574281
1794508938.022	rocksdb.block.checksum.compute.count COUNT : 81066155
1794508938.022	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.db.write.micros P50 : 4575.887567 P95 : 34312.148752 P99 : 121801.208920 P100 : 8638755.000000 COUNT : 13675848 SUM : 152970141117
1794508938.022	rocksdb.compaction.times.micros P50 : 271583.512435 P95 : 1636299.225483 P99 : 2608547.550432 P100 : 13253838.000000 COUNT : 117067 SUM : 57662210766
1794508938.022	rocksdb.compaction.times.cpu_micros P50 : 99729.359586 P95 : 458453.758290 P99 : 830362.016856 P100 : 8529114.000000 COUNT : 117067 SUM : 16270550785
1794508938.022	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.table.sync.micros P50 : 22090.659341 P95 : 264150.442478 P99 : 816535.802469 P100 : 3642786.000000 COUNT : 7814 SUM : 461606758
1794508938.022	rocksdb.compaction.outfile.sync.micros P50 : 5659.159184 P95 : 14823.112927 P99 : 48184.503182 P100 : 8187682.000000 COUNT : 717518 SUM : 7046586168
1794508938.022	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.manifest.file.sync.micros P50 : 494.242682 P95 : 847.703373 P99 : 7271.785714 P100 : 3289275.000000 COUNT : 87230 SUM : 329853080
1794508938.022	rocksdb.table.open.io.micros P50 : 261.574633 P95 : 649.488685 P99 : 2230.520424 P100 : 2455846.000000 COUNT : 754063 SUM : 619988662
1794508938.022	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.read.block.compaction.micros P50 : 61.145244 P95 : 211.080266 P99 : 514.806787 P100 : 7424144.000000 COUNT : 79558029 SUM : 8846189075
1794508938.022	rocksdb.read.block.get.micros P50 : 62.261338 P95 : 155.007528 P99 : 447.225439 P100 : 485658.000000 COUNT : 754063 SUM : 71669896
1794508938.022	rocksdb.write.raw.block.micros P50 : 0.527143 P95 : 1.094139 P99 : 13.279457 P100 : 14600036.000000 COUNT : 82425935 SUM : 107870860
1794508938.022	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.numfiles.in.singlecompaction P50 : 5.766080 P95 : 9.577390 P99 : 9.924951 P100 : 68.000000 COUNT : 117404 SUM : 717791
1794508938.022	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.db.write.stall P50 : 2136.166813 P95 : 12572.431214 P99 : 39158.224128 P100 : 6122018.000000 COUNT : 9255755 SUM : 33677468666
1794508938.022	rocksdb.sst.read.micros P50 : 58.836074 P95 : 207.017628 P99 : 507.617180 P100 : 7424092.000000 COUNT : 82574276 SUM : 9325644916
1794508938.022	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.bytes.per.write P50 : 1178.725409 P95 : 3770.078566 P99 : 4188.000000 P100 : 4188.000000 COUNT : 9278096 SUM : 14388922464
1794508938.022	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.db.flush.micros P50 : 116748.251748 P95 : 1357555.205047 P99 : 2816027.397260 P100 : 15946780.000000 COUNT : 7813 SUM : 2771205331
1794508938.022	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794508938.022	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 717454 SUM : 0
1794508938.022	
