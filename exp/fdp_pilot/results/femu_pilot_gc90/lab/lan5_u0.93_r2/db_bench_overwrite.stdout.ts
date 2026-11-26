1795587165.783	Initializing RocksDB Options from the specified file
1795587165.783	Initializing RocksDB Options from command-line flags
1795587178.008	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795587178.008	Values:     1024 bytes each (512 bytes after compression)
1795587178.008	Entries:    17191679
1795587178.008	Prefix:    0 bytes
1795587178.010	Keys per prefix:    0
1795587178.010	RawSize:    17051.1 MB (estimated)
1795587178.010	FileSize:   8656.7 MB (estimated)
1795587178.010	Write rate: 0 bytes/second
1795587178.010	Read rate: 0 ops/second
1795587178.010	Compression: NoCompression
1795587178.010	Compression sampling rate: 0
1795587178.010	Memtablerep: SkipListFactory
1795587178.010	Perf Level: 1
1795587178.010	------------------------------------------------
1795587178.010	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795630286.482	overwrite    :    5011.528 micros/op 797 ops/sec;    0.8 MB/s
1795630291.483	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795630291.485	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795630301.497	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795630311.530	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795630321.531	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795630331.531	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795630341.531	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795630351.531	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795630361.531	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795630361.532	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795630361.532	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795630361.537	
1795630361.537	Level Files Size(MB)
1795630361.537	--------------------
1795630361.537	  0        1        2
1795630361.537	  1        5        2
1795630361.537	  2       60       25
1795630361.537	  3      600      250
1795630361.537	  4     5725     2500
1795630361.537	  5    36058    17326
1795630361.537	  6        0        0
1795630361.537	
1795630361.544	
1795630361.544	
1795630361.544	** Compaction Stats [default] **
1795630361.544	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795630361.544	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795630361.544	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     20.0   1732.79           1064.06     18401    0.094     26K      5       0.0       0.0
1795630361.544	  L1      5/0    2.41 MB   1.0     55.8    33.8     22.0      55.9     33.8       0.0   1.7     23.7     23.7   2415.20           2331.89      9187    0.263     56M   6837       0.0       0.0
1795630361.544	  L2     60/0   24.95 MB   1.0    167.2    33.8    133.3     167.1     33.8       0.0   4.9     23.1     23.1   7397.10           7152.07     72456    0.102    169M    51K       0.0       0.0
1795630361.544	  L3    600/0   249.57 MB   1.0    219.2    33.8    185.4     218.7     33.3       0.0   6.5     23.6     23.5   9527.85           9217.17     76764    0.124    222M   514K       0.0       0.0
1795630361.544	  L4   5725/0    2.44 GB   1.0    222.5    33.3    189.2     217.5     28.3       0.0   6.5     23.0     22.5   9903.58           9583.47     77130    0.128    226M  5053K       0.0       0.0
1795630361.544	  L5  36058/0   16.92 GB   0.7    144.9    28.3    116.6     119.3      2.7       0.0   4.2     25.0     20.6   5936.66           5752.51     62690    0.095    147M    25M       0.0       0.0
1795630361.544	 Sum  42449/0   19.63 GB   0.0    809.7   163.0    646.6     812.4    165.7       0.0  24.0     22.5     22.5  36913.19          35101.17    316628    0.117    822M    31M       0.0       0.0
1795630361.544	 Int      0/0    0.00 KB   0.0      0.4     0.1      0.4       0.4      0.0       0.0 391184102.0     24.0     20.4     18.30             18.23       150    0.122    436K    66K       0.0       0.0
1795630361.544	
1795630361.544	** Compaction Stats [default] **
1795630361.544	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795630361.544	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795630361.544	 Low      0/0    0.00 KB   0.0    809.7   163.0    646.6     778.6    131.9       0.0   0.0     23.6     22.7  35183.77          34040.42    298230    0.118    822M    31M       0.0       0.0
1795630361.544	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     20.0   1729.42           1060.75     18397    0.094       0      0       0.0       0.0
1795630361.544	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0      5.3      0.00              0.00         1    0.001       0      0       0.0       0.0
1795630361.544	
1795630361.544	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795630361.544	
1795630361.544	Uptime(secs): 43195.7 total, 34.3 interval
1795630361.544	Flush(GB): cumulative 33.807, interval 0.000
1795630361.544	AddFile(GB): cumulative 0.000, interval 0.000
1795630361.544	AddFile(Total Files): cumulative 0, interval 0
1795630361.544	AddFile(L0 Files): cumulative 0, interval 0
1795630361.544	AddFile(Keys): cumulative 0, interval 0
1795630361.544	Cumulative compaction: 812.37 GB write, 19.26 MB/s write, 809.66 GB read, 19.19 MB/s read, 36913.2 seconds
1795630361.544	Interval compaction: 0.36 GB write, 10.89 MB/s write, 0.43 GB read, 12.83 MB/s read, 18.3 seconds
1795630361.544	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 354038 slowdown for pending_compaction_bytes, 28 memtable_compaction, 5 memtable_slowdown, interval 18 total count
1795630361.544	Block cache LRUCache@0x64c4d7073a70#70642 capacity: 8.00 MB collections: 240 last_copies: 2 last_secs: 9.3e-05 secs_since: 154
1795630361.544	Block cache entry stats(count,size,portion): Misc(3,8.38 KB,0.102234%)
1795630361.544	
1795630361.544	** File Read Latency Histogram By Level [default] **
1795630361.544	** Level 0 read latency histogram (micros):
1795630361.544	Count: 8682189 Average: 74.2534  StdDev: 378.95
1795630361.544	Min: 8  Median: 45.8490  Max: 759860
1795630361.544	Percentiles: P50: 45.85 P75: 67.23 P99: 227.21 P99.9: 436.47 P99.99: 2021.96
1795630361.544	------------------------------------------------------
1795630361.544	(       6,      10 ]        1   0.000%   0.000% 
1795630361.544	(      10,      15 ]        5   0.000%   0.000% 
1795630361.544	(      15,      22 ]        4   0.000%   0.000% 
1795630361.544	(      22,      34 ]        1   0.000%   0.000% 
1795630361.544	(      34,      51 ]  6228229  71.736%  71.736% ##############
1795630361.544	(      51,      76 ]   436516   5.028%  76.764% #
1795630361.544	(      76,     110 ]  1520300  17.511%  94.274% ####
1795630361.544	(     110,     170 ]   323123   3.722%  97.996% #
1795630361.544	(     170,     250 ]   121916   1.404%  99.400% 
1795630361.544	(     250,     380 ]    41301   0.476%  99.876% 
1795630361.544	(     380,     580 ]     7476   0.086%  99.962% 
1795630361.544	(     580,     870 ]     1618   0.019%  99.980% 
1795630361.544	(     870,    1300 ]      658   0.008%  99.988% 
1795630361.544	(    1300,    1900 ]      164   0.002%  99.990% 
1795630361.544	(    1900,    2900 ]       72   0.001%  99.991% 
1795630361.544	(    2900,    4400 ]       67   0.001%  99.991% 
1795630361.544	(    4400,    6600 ]       13   0.000%  99.992% 
1795630361.544	(    6600,    9900 ]       10   0.000%  99.992% 
1795630361.544	(    9900,   14000 ]       11   0.000%  99.992% 
1795630361.544	(   14000,   22000 ]        5   0.000%  99.992% 
1795630361.544	(   22000,   33000 ]        2   0.000%  99.992% 
1795630361.544	(   33000,   50000 ]        3   0.000%  99.992% 
1795630361.544	(   50000,   75000 ]       36   0.000%  99.992% 
1795630361.544	(   75000,  110000 ]      459   0.005%  99.998% 
1795630361.544	(  110000,  170000 ]       47   0.001%  99.998% 
1795630361.544	(  170000,  250000 ]       66   0.001%  99.999% 
1795630361.544	(  250000,  380000 ]       61   0.001% 100.000% 
1795630361.544	(  380000,  570000 ]       24   0.000% 100.000% 
1795630361.544	(  570000,  860000 ]        2   0.000% 100.000% 
1795630361.544	
1795630361.544	** Level 1 read latency histogram (micros):
1795630361.544	Count: 14766598 Average: 86.1592  StdDev: 252.02
1795630361.544	Min: 5  Median: 45.7602  Max: 741093
1795630361.544	Percentiles: P50: 45.76 P75: 64.29 P99: 225.30 P99.9: 472.70 P99.99: 93190.08
1795630361.544	------------------------------------------------------
1795630361.544	(       4,       6 ]       10   0.000%   0.000% 
1795630361.544	(       6,      10 ]       98   0.001%   0.001% 
1795630361.544	(      10,      15 ]       70   0.000%   0.001% 
1795630361.544	(      15,      22 ]       12   0.000%   0.001% 
1795630361.544	(      22,      34 ]        2   0.000%   0.001% 
1795630361.544	(      34,      51 ] 10672677  72.276%  72.277% ##############
1795630361.544	(      51,      76 ]   756112   5.120%  77.398% #
1795630361.544	(      76,     110 ]  2519200  17.060%  94.458% ###
1795630361.544	(     110,     170 ]   530515   3.593%  98.050% #
1795630361.544	(     170,     250 ]   202883   1.374%  99.424% 
1795630361.544	(     250,     380 ]    64131   0.434%  99.859% 
1795630361.544	(     380,     580 ]    13207   0.089%  99.948% 
1795630361.544	(     580,     870 ]     3112   0.021%  99.969% 
1795630361.544	(     870,    1300 ]     1178   0.008%  99.977% 
1795630361.544	(    1300,    1900 ]      277   0.002%  99.979% 
1795630361.544	(    1900,    2900 ]      131   0.001%  99.980% 
1795630361.544	(    2900,    4400 ]      117   0.001%  99.981% 
1795630361.544	(    4400,    6600 ]       24   0.000%  99.981% 
1795630361.544	(    6600,    9900 ]       29   0.000%  99.981% 
1795630361.544	(    9900,   14000 ]       19   0.000%  99.981% 
1795630361.544	(   14000,   22000 ]        9   0.000%  99.981% 
1795630361.544	(   22000,   33000 ]        5   0.000%  99.981% 
1795630361.544	(   33000,   50000 ]       21   0.000%  99.981% 
1795630361.544	(   50000,   75000 ]      219   0.001%  99.983% 
1795630361.544	(   75000,  110000 ]     2046   0.014%  99.997% 
1795630361.544	(  110000,  170000 ]      118   0.001%  99.997% 
1795630361.544	(  170000,  250000 ]      239   0.002%  99.999% 
1795630361.544	(  250000,  380000 ]      114   0.001% 100.000% 
1795630361.544	(  380000,  570000 ]       55   0.000% 100.000% 
1795630361.544	(  570000,  860000 ]       18   0.000% 100.000% 
1795630361.544	
1795630361.544	** Level 2 read latency histogram (micros):
1795630361.545	Count: 44322357 Average: 76.6080  StdDev: 73.42
1795630361.545	Min: 5  Median: 45.9228  Max: 748264
1795630361.545	Percentiles: P50: 45.92 P75: 69.08 P99: 230.04 P99.9: 378.85 P99.99: 2745.79
1795630361.545	------------------------------------------------------
1795630361.545	(       4,       6 ]      417   0.001%   0.001% 
1795630361.545	(       6,      10 ]     2717   0.006%   0.007% 
1795630361.545	(      10,      15 ]     1035   0.002%   0.009% 
1795630361.545	(      15,      22 ]      176   0.000%   0.010% 
1795630361.545	(      22,      34 ]       58   0.000%   0.010% 
1795630361.545	(      34,      51 ] 31592019  71.278%  71.288% ##############
1795630361.545	(      51,      76 ]  2275328   5.134%  76.421% #
1795630361.545	(      76,     110 ]  7838638  17.686%  94.107% ####
1795630361.545	(     110,     170 ]  1653904   3.732%  97.838% #
1795630361.545	(     170,     250 ]   686051   1.548%  99.386% 
1795630361.545	(     250,     380 ]   229727   0.518%  99.905% 
1795630361.545	(     380,     580 ]    28774   0.065%  99.970% 
1795630361.545	(     580,     870 ]     5565   0.013%  99.982% 
1795630361.545	(     870,    1300 ]     2376   0.005%  99.987% 
1795630361.545	(    1300,    1900 ]      771   0.002%  99.989% 
1795630361.545	(    1900,    2900 ]      436   0.001%  99.990% 
1795630361.545	(    2900,    4400 ]      444   0.001%  99.991% 
1795630361.545	(    4400,    6600 ]      114   0.000%  99.991% 
1795630361.545	(    6600,    9900 ]       87   0.000%  99.992% 
1795630361.545	(    9900,   14000 ]       47   0.000%  99.992% 
1795630361.545	(   14000,   22000 ]       35   0.000%  99.992% 
1795630361.545	(   22000,   33000 ]        7   0.000%  99.992% 
1795630361.545	(   33000,   50000 ]       20   0.000%  99.992% 
1795630361.545	(   50000,   75000 ]      245   0.001%  99.992% 
1795630361.545	(   75000,  110000 ]     2984   0.007%  99.999% 
1795630361.545	(  110000,  170000 ]      254   0.001% 100.000% 
1795630361.545	(  170000,  250000 ]      441   0.001% 100.001% 
1795630361.545	(  250000,  380000 ]      279   0.001% 100.001% 
1795630361.545	(  380000,  570000 ]      135   0.000% 100.002% 
1795630361.545	(  570000,  860000 ]       23   0.000% 100.002% 
1795630361.545	
1795630361.545	** Level 3 read latency histogram (micros):
1795630361.545	Count: 58023022 Average: 76.5854  StdDev: 11.53
1795630361.545	Min: 5  Median: 45.9564  Max: 1237995
1795630361.545	Percentiles: P50: 45.96 P75: 70.86 P99: 224.96 P99.9: 374.56 P99.99: 2904.94
1795630361.545	------------------------------------------------------
1795630361.545	(       4,       6 ]      554   0.001%   0.001% 
1795630361.545	(       6,      10 ]     2780   0.005%   0.006% 
1795630361.545	(      10,      15 ]      999   0.002%   0.007% 
1795630361.545	(      15,      22 ]      214   0.000%   0.008% 
1795630361.545	(      22,      34 ]       82   0.000%   0.008% 
1795630361.545	(      34,      51 ] 41242951  71.080%  71.088% ##############
1795630361.545	(      51,      76 ]  2856987   4.924%  76.012% #
1795630361.545	(      76,     110 ] 10539986  18.165%  94.177% ####
1795630361.545	(     110,     170 ]  2205581   3.801%  97.979% #
1795630361.545	(     170,     250 ]   862704   1.487%  99.465% 
1795630361.545	(     250,     380 ]   263171   0.454%  99.919% 
1795630361.545	(     380,     580 ]    31558   0.054%  99.973% 
1795630361.545	(     580,     870 ]     5574   0.010%  99.983% 
1795630361.545	(     870,    1300 ]     2584   0.004%  99.987% 
1795630361.545	(    1300,    1900 ]      923   0.002%  99.989% 
1795630361.545	(    1900,    2900 ]      570   0.001%  99.990% 
1795630361.545	(    2900,    4400 ]      516   0.001%  99.991% 
1795630361.545	(    4400,    6600 ]      140   0.000%  99.991% 
1795630361.545	(    6600,    9900 ]      107   0.000%  99.991% 
1795630361.545	(    9900,   14000 ]       57   0.000%  99.991% 
1795630361.545	(   14000,   22000 ]       33   0.000%  99.991% 
1795630361.545	(   22000,   33000 ]       20   0.000%  99.992% 
1795630361.545	(   33000,   50000 ]       33   0.000%  99.992% 
1795630361.545	(   50000,   75000 ]      292   0.001%  99.992% 
1795630361.545	(   75000,  110000 ]     3858   0.007%  99.999% 
1795630361.545	(  110000,  170000 ]      280   0.000%  99.999% 
1795630361.545	(  170000,  250000 ]      624   0.001% 100.000% 
1795630361.545	(  250000,  380000 ]      401   0.001% 100.001% 
1795630361.545	(  380000,  570000 ]      153   0.000% 100.001% 
1795630361.545	(  570000,  860000 ]       40   0.000% 100.001% 
1795630361.545	(  860000, 1200000 ]        1   0.000% 100.001% 
1795630361.545	( 1200000, 1900000 ]        1   0.000% 100.001% 
1795630361.545	
1795630361.545	** Level 4 read latency histogram (micros):
1795630361.545	Count: 57639470 Average: 77.2177  StdDev: 72.63
1795630361.545	Min: 5  Median: 45.9892  Max: 916340
1795630361.545	Percentiles: P50: 45.99 P75: 71.36 P99: 224.33 P99.9: 374.75 P99.99: 3520.18
1795630361.545	------------------------------------------------------
1795630361.545	(       4,       6 ]      449   0.001%   0.001% 
1795630361.545	(       6,      10 ]     2055   0.004%   0.004% 
1795630361.545	(      10,      15 ]      798   0.001%   0.006% 
1795630361.545	(      15,      22 ]      178   0.000%   0.006% 
1795630361.545	(      22,      34 ]       56   0.000%   0.006% 
1795630361.545	(      34,      51 ] 40859795  70.889%  70.895% ##############
1795630361.545	(      51,      76 ]  2905169   5.040%  75.935% #
1795630361.545	(      76,     110 ] 10506373  18.228%  94.163% ####
1795630361.545	(     110,     170 ]  2211989   3.838%  98.000% #
1795630361.545	(     170,     250 ]   848387   1.472%  99.472% 
1795630361.545	(     250,     380 ]   256956   0.446%  99.918% 
1795630361.545	(     380,     580 ]    30449   0.053%  99.971% 
1795630361.545	(     580,     870 ]     6155   0.011%  99.982% 
1795630361.545	(     870,    1300 ]     3076   0.005%  99.987% 
1795630361.545	(    1300,    1900 ]     1009   0.002%  99.989% 
1795630361.545	(    1900,    2900 ]      583   0.001%  99.990% 
1795630361.545	(    2900,    4400 ]      554   0.001%  99.991% 
1795630361.545	(    4400,    6600 ]      198   0.000%  99.991% 
1795630361.545	(    6600,    9900 ]      127   0.000%  99.991% 
1795630361.545	(    9900,   14000 ]       55   0.000%  99.991% 
1795630361.545	(   14000,   22000 ]       32   0.000%  99.991% 
1795630361.545	(   22000,   33000 ]       24   0.000%  99.991% 
1795630361.545	(   33000,   50000 ]       39   0.000%  99.991% 
1795630361.545	(   50000,   75000 ]      382   0.001%  99.992% 
1795630361.545	(   75000,  110000 ]     3814   0.007%  99.999% 
1795630361.545	(  110000,  170000 ]      429   0.001%  99.999% 
1795630361.545	(  170000,  250000 ]      603   0.001% 100.000% 
1795630361.545	(  250000,  380000 ]      383   0.001% 100.001% 
1795630361.545	(  380000,  570000 ]      166   0.000% 100.001% 
1795630361.545	(  570000,  860000 ]       49   0.000% 100.001% 
1795630361.545	(  860000, 1200000 ]        1   0.000% 100.001% 
1795630361.545	
1795630361.545	** Level 5 read latency histogram (micros):
1795630361.545	Count: 30975434 Average: 72.9572  StdDev: 130.59
1795630361.545	Min: 5  Median: 45.6415  Max: 872535
1795630361.545	Percentiles: P50: 45.64 P75: 59.82 P99: 225.50 P99.9: 378.76 P99.99: 2596.59
1795630361.545	------------------------------------------------------
1795630361.545	(       4,       6 ]      308   0.001%   0.001% 
1795630361.545	(       6,      10 ]     2033   0.007%   0.008% 
1795630361.545	(      10,      15 ]      818   0.003%   0.010% 
1795630361.545	(      15,      22 ]      153   0.000%   0.011% 
1795630361.545	(      22,      34 ]       54   0.000%   0.011% 
1795630361.545	(      34,      51 ] 22611746  72.999%  73.010% ###############
1795630361.545	(      51,      76 ]  1746768   5.639%  78.649% #
1795630361.545	(      76,     110 ]  4974710  16.060%  94.709% ###
1795630361.545	(     110,     170 ]  1008976   3.257%  97.967% #
1795630361.545	(     170,     250 ]   461411   1.490%  99.456% 
1795630361.545	(     250,     380 ]   138806   0.448%  99.904% 
1795630361.545	(     380,     580 ]    15238   0.049%  99.953% 
1795630361.545	(     580,     870 ]     5523   0.018%  99.971% 
1795630361.545	(     870,    1300 ]     4330   0.014%  99.985% 
1795630361.545	(    1300,    1900 ]      963   0.003%  99.988% 
1795630361.545	(    1900,    2900 ]      717   0.002%  99.991% 
1795630361.545	(    2900,    4400 ]      669   0.002%  99.993% 
1795630361.545	(    4400,    6600 ]      311   0.001%  99.994% 
1795630361.545	(    6600,    9900 ]      200   0.001%  99.995% 
1795630361.545	(    9900,   14000 ]       52   0.000%  99.995% 
1795630361.545	(   14000,   22000 ]       13   0.000%  99.995% 
1795630361.545	(   22000,   33000 ]        2   0.000%  99.995% 
1795630361.545	(   33000,   50000 ]       11   0.000%  99.995% 
1795630361.545	(   50000,   75000 ]       23   0.000%  99.995% 
1795630361.545	(   75000,  110000 ]     1324   0.004%  99.999% 
1795630361.545	(  110000,  170000 ]      180   0.001% 100.000% 
1795630361.545	(  170000,  250000 ]      253   0.001% 100.001% 
1795630361.545	(  250000,  380000 ]      259   0.001% 100.001% 
1795630361.545	(  380000,  570000 ]       78   0.000% 100.002% 
1795630361.545	(  570000,  860000 ]       13   0.000% 100.002% 
1795630361.545	(  860000, 1200000 ]        1   0.000% 100.002% 
1795630361.545	
1795630361.545	
1795630361.545	** DB Stats **
1795630361.545	Uptime(secs): 43195.7 total, 34.3 interval
1795630361.545	Cumulative writes: 34M writes, 34M keys, 25M commit groups, 1.3 writes per commit group, ingest: 33.72 GB, 0.80 MB/s
1795630361.545	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.72 GB, 0.80 MB/s
1795630361.545	Cumulative stall: 10:23:52.650 H:M:S, 86.7 percent
1795630361.545	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795630361.545	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795630361.545	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795630361.545	
1795630361.546	STATISTICS:
1795630361.546	rocksdb.block.cache.miss COUNT : 206782209
1795630361.546	rocksdb.block.cache.hit COUNT : 0
1795630361.546	rocksdb.block.cache.add COUNT : 0
1795630361.546	rocksdb.block.cache.add.failures COUNT : 0
1795630361.546	rocksdb.block.cache.index.miss COUNT : 0
1795630361.546	rocksdb.block.cache.index.hit COUNT : 0
1795630361.546	rocksdb.block.cache.index.add COUNT : 0
1795630361.546	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795630361.546	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795630361.546	rocksdb.block.cache.filter.miss COUNT : 0
1795630361.546	rocksdb.block.cache.filter.hit COUNT : 0
1795630361.546	rocksdb.block.cache.filter.add COUNT : 0
1795630361.546	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795630361.546	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795630361.546	rocksdb.block.cache.data.miss COUNT : 206782209
1795630361.546	rocksdb.block.cache.data.hit COUNT : 0
1795630361.546	rocksdb.block.cache.data.add COUNT : 0
1795630361.546	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795630361.546	rocksdb.block.cache.bytes.read COUNT : 0
1795630361.546	rocksdb.block.cache.bytes.write COUNT : 0
1795630361.546	rocksdb.bloom.filter.useful COUNT : 0
1795630361.546	rocksdb.bloom.filter.full.positive COUNT : 0
1795630361.546	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795630361.546	rocksdb.bloom.filter.micros COUNT : 0
1795630361.546	rocksdb.persistent.cache.hit COUNT : 0
1795630361.546	rocksdb.persistent.cache.miss COUNT : 0
1795630361.546	rocksdb.sim.block.cache.hit COUNT : 0
1795630361.546	rocksdb.sim.block.cache.miss COUNT : 0
1795630361.546	rocksdb.memtable.hit COUNT : 0
1795630361.546	rocksdb.memtable.miss COUNT : 0
1795630361.546	rocksdb.l0.hit COUNT : 0
1795630361.546	rocksdb.l1.hit COUNT : 0
1795630361.546	rocksdb.l2andup.hit COUNT : 0
1795630361.546	rocksdb.compaction.key.drop.new COUNT : 31623459
1795630361.546	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795630361.546	rocksdb.compaction.key.drop.range_del COUNT : 0
1795630361.546	rocksdb.compaction.key.drop.user COUNT : 0
1795630361.546	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795630361.546	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795630361.546	rocksdb.compaction.cancelled COUNT : 0
1795630361.546	rocksdb.number.keys.written COUNT : 34383360
1795630361.546	rocksdb.number.keys.read COUNT : 0
1795630361.546	rocksdb.number.keys.updated COUNT : 0
1795630361.546	rocksdb.bytes.written COUNT : 36205841688
1795630361.546	rocksdb.bytes.read COUNT : 0
1795630361.546	rocksdb.number.db.seek COUNT : 0
1795630361.546	rocksdb.number.db.next COUNT : 0
1795630361.546	rocksdb.number.db.prev COUNT : 0
1795630361.546	rocksdb.number.db.seek.found COUNT : 0
1795630361.546	rocksdb.number.db.next.found COUNT : 0
1795630361.546	rocksdb.number.db.prev.found COUNT : 0
1795630361.546	rocksdb.db.iter.bytes.read COUNT : 0
1795630361.546	rocksdb.no.file.closes COUNT : 0
1795630361.546	rocksdb.no.file.opens COUNT : 1907861
1795630361.546	rocksdb.no.file.errors COUNT : 0
1795630361.546	rocksdb.l0.slowdown.micros COUNT : 0
1795630361.546	rocksdb.memtable.compaction.micros COUNT : 0
1795630361.546	rocksdb.l0.num.files.stall.micros COUNT : 0
1795630361.546	rocksdb.stall.micros COUNT : 37432649777
1795630361.546	rocksdb.db.mutex.wait.micros COUNT : 0
1795630361.546	rocksdb.rate.limit.delay.millis COUNT : 0
1795630361.546	rocksdb.num.iterators COUNT : 0
1795630361.546	rocksdb.number.multiget.get COUNT : 0
1795630361.546	rocksdb.number.multiget.keys.read COUNT : 0
1795630361.546	rocksdb.number.multiget.bytes.read COUNT : 0
1795630361.546	rocksdb.number.deletes.filtered COUNT : 0
1795630361.546	rocksdb.number.merge.failures COUNT : 0
1795630361.546	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795630361.546	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795630361.546	rocksdb.number.reseeks.iteration COUNT : 0
1795630361.546	rocksdb.getupdatessince.calls COUNT : 0
1795630361.546	rocksdb.block.cachecompressed.miss COUNT : 0
1795630361.546	rocksdb.block.cachecompressed.hit COUNT : 0
1795630361.546	rocksdb.block.cachecompressed.add COUNT : 0
1795630361.546	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795630361.546	rocksdb.wal.synced COUNT : 0
1795630361.546	rocksdb.wal.bytes COUNT : 36205841688
1795630361.546	rocksdb.write.self COUNT : 25801154
1795630361.546	rocksdb.write.other COUNT : 8582206
1795630361.546	rocksdb.write.timeout COUNT : 0
1795630361.546	rocksdb.write.wal COUNT : 34383360
1795630361.546	rocksdb.compact.read.bytes COUNT : 869208909796
1795630361.546	rocksdb.compact.write.bytes COUNT : 835975183710
1795630361.546	rocksdb.flush.write.bytes COUNT : 36305328327
1795630361.546	rocksdb.compact.read.marked.bytes COUNT : 0
1795630361.546	rocksdb.compact.read.periodic.bytes COUNT : 0
1795630361.546	rocksdb.compact.read.ttl.bytes COUNT : 0
1795630361.546	rocksdb.compact.write.marked.bytes COUNT : 0
1795630361.546	rocksdb.compact.write.periodic.bytes COUNT : 0
1795630361.546	rocksdb.compact.write.ttl.bytes COUNT : 0
1795630361.546	rocksdb.number.direct.load.table.properties COUNT : 0
1795630361.546	rocksdb.number.superversion_acquires COUNT : 0
1795630361.546	rocksdb.number.superversion_releases COUNT : 0
1795630361.546	rocksdb.number.superversion_cleanups COUNT : 0
1795630361.546	rocksdb.number.block.compressed COUNT : 0
1795630361.546	rocksdb.number.block.decompressed COUNT : 0
1795630361.546	rocksdb.number.block.not_compressed COUNT : 0
1795630361.546	rocksdb.merge.operation.time.nanos COUNT : 0
1795630361.546	rocksdb.filter.operation.time.nanos COUNT : 0
1795630361.546	rocksdb.row.cache.hit COUNT : 0
1795630361.546	rocksdb.row.cache.miss COUNT : 0
1795630361.546	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795630361.546	rocksdb.read.amp.total.read.bytes COUNT : 0
1795630361.546	rocksdb.number.rate_limiter.drains COUNT : 0
1795630361.546	rocksdb.number.iter.skip COUNT : 0
1795630361.546	rocksdb.blobdb.num.put COUNT : 0
1795630361.546	rocksdb.blobdb.num.write COUNT : 0
1795630361.546	rocksdb.blobdb.num.get COUNT : 0
1795630361.546	rocksdb.blobdb.num.multiget COUNT : 0
1795630361.546	rocksdb.blobdb.num.seek COUNT : 0
1795630361.546	rocksdb.blobdb.num.next COUNT : 0
1795630361.546	rocksdb.blobdb.num.prev COUNT : 0
1795630361.546	rocksdb.blobdb.num.keys.written COUNT : 0
1795630361.546	rocksdb.blobdb.num.keys.read COUNT : 0
1795630361.546	rocksdb.blobdb.bytes.written COUNT : 0
1795630361.546	rocksdb.blobdb.bytes.read COUNT : 0
1795630361.546	rocksdb.blobdb.write.inlined COUNT : 0
1795630361.546	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795630361.546	rocksdb.blobdb.write.blob COUNT : 0
1795630361.546	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795630361.546	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795630361.546	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795630361.546	rocksdb.blobdb.blob.file.synced COUNT : 0
1795630361.546	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795630361.546	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795630361.546	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795630361.546	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795630361.546	rocksdb.blobdb.gc.num.files COUNT : 0
1795630361.546	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795630361.546	rocksdb.blobdb.gc.failures COUNT : 0
1795630361.546	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795630361.546	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795630361.546	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795630361.546	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795630361.546	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795630361.546	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795630361.546	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795630361.546	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795630361.546	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795630361.546	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795630361.546	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795630361.546	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795630361.546	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795630361.546	rocksdb.txn.get.tryagain COUNT : 0
1795630361.546	rocksdb.number.multiget.keys.found COUNT : 0
1795630361.546	rocksdb.num.iterator.created COUNT : 0
1795630361.546	rocksdb.num.iterator.deleted COUNT : 0
1795630361.546	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795630361.546	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795630361.546	rocksdb.block.cache.compression.dict.add COUNT : 0
1795630361.546	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795630361.546	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795630361.546	rocksdb.block.cache.add.redundant COUNT : 0
1795630361.546	rocksdb.block.cache.index.add.redundant COUNT : 0
1795630361.546	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795630361.546	rocksdb.block.cache.data.add.redundant COUNT : 0
1795630361.546	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795630361.546	rocksdb.files.marked.trash COUNT : 0
1795630361.546	rocksdb.files.deleted.immediately COUNT : 1902266
1795630361.546	rocksdb.error.handler.bg.errro.count COUNT : 0
1795630361.546	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795630361.546	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795630361.546	rocksdb.error.handler.autoresume.count COUNT : 0
1795630361.546	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795630361.547	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795630361.547	rocksdb.memtable.payload.bytes.at.flush COUNT : 36032247968
1795630361.547	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1967096
1795630361.547	rocksdb.secondary.cache.hits COUNT : 0
1795630361.547	rocksdb.verify_checksum.read.bytes COUNT : 0
1795630361.547	rocksdb.backup.read.bytes COUNT : 0
1795630361.547	rocksdb.backup.write.bytes COUNT : 0
1795630361.547	rocksdb.remote.compact.read.bytes COUNT : 0
1795630361.547	rocksdb.remote.compact.write.bytes COUNT : 0
1795630361.547	rocksdb.hot.file.read.bytes COUNT : 0
1795630361.547	rocksdb.warm.file.read.bytes COUNT : 0
1795630361.547	rocksdb.cold.file.read.bytes COUNT : 0
1795630361.547	rocksdb.hot.file.read.count COUNT : 0
1795630361.547	rocksdb.warm.file.read.count COUNT : 0
1795630361.547	rocksdb.cold.file.read.count COUNT : 0
1795630361.547	rocksdb.last.level.read.bytes COUNT : 0
1795630361.547	rocksdb.last.level.read.count COUNT : 0
1795630361.547	rocksdb.non.last.level.read.bytes COUNT : 869496437926
1795630361.547	rocksdb.non.last.level.read.count COUNT : 214413653
1795630361.547	rocksdb.block.checksum.compute.count COUNT : 210597931
1795630361.547	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.db.write.micros P50 : 1425.392026 P95 : 20178.626086 P99 : 71812.184092 P100 : 5575224.000000 COUNT : 34383353 SUM : 172246767357
1795630361.547	rocksdb.compaction.times.micros P50 : 94779.887576 P95 : 270664.044424 P99 : 740112.936700 P100 : 6178774.000000 COUNT : 298230 SUM : 35183769430
1795630361.547	rocksdb.compaction.times.cpu_micros P50 : 92450.944657 P95 : 249568.892646 P99 : 728427.182718 P100 : 5805399.000000 COUNT : 298230 SUM : 34040419394
1795630361.547	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.table.sync.micros P50 : 29032.871164 P95 : 249612.903226 P99 : 648789.300412 P100 : 1337166.000000 COUNT : 18398 SUM : 1033627714
1795630361.547	rocksdb.compaction.outfile.sync.micros P50 : 6447.121697 P95 : 13702.450354 P99 : 29074.447514 P100 : 2475153.000000 COUNT : 1853210 SUM : 16626287299
1795630361.547	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.manifest.file.sync.micros P50 : 490.784604 P95 : 14346.142209 P99 : 423433.614865 P100 : 2346090.000000 COUNT : 243468 SUM : 2841196715
1795630361.547	rocksdb.table.open.io.micros P50 : 240.661478 P95 : 441.979704 P99 : 719.343562 P100 : 859273.000000 COUNT : 1907861 SUM : 901545631
1795630361.547	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.read.block.compaction.micros P50 : 46.215450 P95 : 125.350402 P99 : 230.043496 P100 : 1238015.000000 COUNT : 206782209 SUM : 15937540068
1795630361.547	rocksdb.read.block.get.micros P50 : 53.363521 P95 : 107.317069 P99 : 219.964512 P100 : 431213.000000 COUNT : 1907861 SUM : 138579270
1795630361.547	rocksdb.write.raw.block.micros P50 : 0.533821 P95 : 1.473114 P99 : 39.989662 P100 : 2096588.000000 COUNT : 213090439 SUM : 398354393
1795630361.547	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.numfiles.in.singlecompaction P50 : 5.785187 P95 : 9.572704 P99 : 9.922856 P100 : 43.000000 COUNT : 298975 SUM : 1866157
1795630361.547	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.db.write.stall P50 : 0.722780 P95 : 4145.598735 P99 : 20686.748832 P100 : 5574820.000000 COUNT : 25779281 SUM : 37436312270
1795630361.547	rocksdb.sst.read.micros P50 : 45.893877 P95 : 122.037932 P99 : 226.146281 P100 : 1237995.000000 COUNT : 214413653 SUM : 16467371490
1795630361.547	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.bytes.per.write P50 : 1130.469255 P95 : 3573.255455 P99 : 4188.000000 P100 : 4188.000000 COUNT : 25801154 SUM : 36205841688
1795630361.547	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.db.flush.micros P50 : 59548.057068 P95 : 348955.434783 P99 : 716721.345029 P100 : 5233090.000000 COUNT : 18397 SUM : 1729416603
1795630361.547	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795630361.547	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1865412 SUM : 0
1795630361.547	
