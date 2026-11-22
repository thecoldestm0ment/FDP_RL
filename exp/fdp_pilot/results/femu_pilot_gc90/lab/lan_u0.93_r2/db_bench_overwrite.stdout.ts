1795312961.186	Initializing RocksDB Options from the specified file
1795312961.186	Initializing RocksDB Options from command-line flags
1795312973.061	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795312973.061	Values:     1024 bytes each (512 bytes after compression)
1795312973.061	Entries:    17191679
1795312973.061	Prefix:    0 bytes
1795312973.061	Keys per prefix:    0
1795312973.061	RawSize:    17051.1 MB (estimated)
1795312973.061	FileSize:   8656.7 MB (estimated)
1795312973.061	Write rate: 0 bytes/second
1795312973.061	Read rate: 0 ops/second
1795312973.061	Compression: NoCompression
1795312973.061	Compression sampling rate: 0
1795312973.061	Memtablerep: SkipListFactory
1795312973.061	Perf Level: 1
1795312973.061	------------------------------------------------
1795312973.061	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795355154.906	overwrite    :    4899.038 micros/op 815 ops/sec;    0.8 MB/s
1795355159.907	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795355159.915	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355169.955	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355179.956	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355189.956	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355199.996	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355210.000	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355220.000	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795355230.001	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795355230.001	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795355230.001	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795355230.004	
1795355230.004	Level Files Size(MB)
1795355230.004	--------------------
1795355230.004	  0        0        0
1795355230.004	  1        5        2
1795355230.004	  2       61       25
1795355230.004	  3      610      250
1795355230.004	  4     5731     2500
1795355230.004	  5    36001    17326
1795355230.004	  6        0        0
1795355230.004	
1795355230.009	
1795355230.009	
1795355230.009	** Compaction Stats [default] **
1795355230.009	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795355230.009	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795355230.009	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     22.2   1561.94           1073.93     18405    0.085     30K      6       0.0       0.0
1795355230.009	  L1      5/0    2.13 MB   0.9     55.7    33.8     21.9      55.8     33.9       0.0   1.6     23.6     23.6   2415.50           2359.18      9191    0.263     56M   6886       0.0       0.0
1795355230.009	  L2     61/0   24.55 MB   1.0    167.3    33.8    133.4     167.2     33.8       0.0   4.9     22.6     22.6   7587.01           7415.40     72479    0.105    169M    51K       0.0       0.0
1795355230.009	  L3    610/0   249.93 MB   1.0    219.2    33.8    185.4     218.7     33.3       0.0   6.5     23.5     23.5   9536.18           9333.68     76759    0.124    222M   513K       0.0       0.0
1795355230.009	  L4   5731/0    2.44 GB   1.0    222.5    33.3    189.3     217.6     28.3       0.0   6.5     22.8     22.3  10008.67           9800.41     77136    0.130    226M  5053K       0.0       0.0
1795355230.009	  L5  36001/0   16.92 GB   0.7    144.9    28.3    116.6     119.3      2.7       0.0   4.2     24.7     20.3   6017.61           5897.10     62692    0.096    147M    26M       0.0       0.0
1795355230.009	 Sum  42408/0   19.63 GB   0.0    809.7   163.0    646.7     812.4    165.7       0.0  24.0     22.3     22.4  37126.90          35879.70    316662    0.117    822M    31M       0.0       0.0
1795355230.009	 Int      0/0    0.00 KB   0.0      0.1     0.0      0.1       0.1      0.0       0.0 57697561.0     29.1     24.6      2.24              2.24        22    0.102     64K    10K       0.0       0.0
1795355230.009	
1795355230.009	** Compaction Stats [default] **
1795355230.009	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795355230.009	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795355230.009	 Low      0/0    0.00 KB   0.0    809.7   163.0    646.7     778.6    131.9       0.0   0.0     23.3     22.4  35567.41          34808.20    298260    0.119    822M    31M       0.0       0.0
1795355230.009	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     22.2   1559.48           1071.50     18400    0.085       0      0       0.0       0.0
1795355230.009	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    171.5      0.01              0.00         2    0.006       0      0       0.0       0.0
1795355230.009	
1795355230.009	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795355230.009	
1795355230.009	Uptime(secs): 42268.8 total, 8.2 interval
1795355230.009	Flush(GB): cumulative 33.809, interval 0.000
1795355230.009	AddFile(GB): cumulative 0.000, interval 0.000
1795355230.009	AddFile(Total Files): cumulative 0, interval 0
1795355230.009	AddFile(L0 Files): cumulative 0, interval 0
1795355230.009	AddFile(Keys): cumulative 0, interval 0
1795355230.009	Cumulative compaction: 812.44 GB write, 19.68 MB/s write, 809.73 GB read, 19.62 MB/s read, 37126.9 seconds
1795355230.009	Interval compaction: 0.05 GB write, 6.70 MB/s write, 0.06 GB read, 7.94 MB/s read, 2.2 seconds
1795355230.009	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 354104 slowdown for pending_compaction_bytes, 25 memtable_compaction, 4 memtable_slowdown, interval 0 total count
1795355230.009	Block cache LRUCache@0x640f6ba88a70#66915 capacity: 8.00 MB collections: 235 last_copies: 2 last_secs: 0.000182 secs_since: 128
1795355230.009	Block cache entry stats(count,size,portion): Misc(1,0.00 KB,0%)
1795355230.009	
1795355230.009	** File Read Latency Histogram By Level [default] **
1795355230.009	** Level 0 read latency histogram (micros):
1795355230.009	Count: 8684388 Average: 78.4355  StdDev: 169.84
1795355230.009	Min: 9  Median: 45.8390  Max: 746430
1795355230.009	Percentiles: P50: 45.84 P75: 68.36 P99: 227.59 P99.9: 437.30 P99.99: 79057.04
1795355230.009	------------------------------------------------------
1795355230.009	(       6,      10 ]        1   0.000%   0.000% 
1795355230.009	(      10,      15 ]        7   0.000%   0.000% 
1795355230.009	(      15,      22 ]        5   0.000%   0.000% 
1795355230.009	(      22,      34 ]        1   0.000%   0.000% 
1795355230.009	(      34,      51 ]  6235068  71.796%  71.796% ##############
1795355230.009	(      51,      76 ]   400665   4.614%  76.410% #
1795355230.009	(      76,     110 ]  1539718  17.730%  94.140% ####
1795355230.009	(     110,     170 ]   331388   3.816%  97.956% #
1795355230.009	(     170,     250 ]   125983   1.451%  99.406% 
1795355230.009	(     250,     380 ]    40753   0.469%  99.876% 
1795355230.009	(     380,     580 ]     7381   0.085%  99.961% 
1795355230.009	(     580,     870 ]     1440   0.017%  99.977% 
1795355230.009	(     870,    1300 ]      612   0.007%  99.984% 
1795355230.009	(    1300,    1900 ]      160   0.002%  99.986% 
1795355230.009	(    1900,    2900 ]       67   0.001%  99.987% 
1795355230.009	(    2900,    4400 ]       69   0.001%  99.988% 
1795355230.009	(    4400,    6600 ]       15   0.000%  99.988% 
1795355230.009	(    6600,    9900 ]       16   0.000%  99.988% 
1795355230.009	(    9900,   14000 ]       11   0.000%  99.988% 
1795355230.009	(   14000,   22000 ]        4   0.000%  99.988% 
1795355230.009	(   22000,   33000 ]        1   0.000%  99.988% 
1795355230.009	(   33000,   50000 ]        3   0.000%  99.988% 
1795355230.009	(   50000,   75000 ]       71   0.001%  99.989% 
1795355230.009	(   75000,  110000 ]      695   0.008%  99.997% 
1795355230.009	(  110000,  170000 ]       61   0.001%  99.998% 
1795355230.009	(  170000,  250000 ]      106   0.001%  99.999% 
1795355230.009	(  250000,  380000 ]       61   0.001% 100.000% 
1795355230.009	(  380000,  570000 ]       22   0.000% 100.000% 
1795355230.009	(  570000,  860000 ]        4   0.000% 100.000% 
1795355230.009	
1795355230.009	** Level 1 read latency histogram (micros):
1795355230.009	Count: 14741840 Average: 93.8618  StdDev: 275.14
1795355230.009	Min: 5  Median: 45.7720  Max: 728502
1795355230.009	Percentiles: P50: 45.77 P75: 65.88 P99: 227.16 P99.9: 503.56 P99.99: 99276.99
1795355230.009	------------------------------------------------------
1795355230.009	(       4,       6 ]       21   0.000%   0.000% 
1795355230.009	(       6,      10 ]      103   0.001%   0.001% 
1795355230.009	(      10,      15 ]       54   0.000%   0.001% 
1795355230.009	(      15,      22 ]       12   0.000%   0.001% 
1795355230.009	(      22,      34 ]        8   0.000%   0.001% 
1795355230.009	(      34,      51 ] 10644057  72.203%  72.204% ##############
1795355230.009	(      51,      76 ]   692194   4.695%  76.900% #
1795355230.009	(      76,     110 ]  2559382  17.361%  94.261% ###
1795355230.009	(     110,     170 ]   546340   3.706%  97.967% #
1795355230.009	(     170,     250 ]   213099   1.446%  99.413% 
1795355230.009	(     250,     380 ]    63099   0.428%  99.841% 
1795355230.009	(     380,     580 ]    14129   0.096%  99.937% 
1795355230.009	(     580,     870 ]     3427   0.023%  99.960% 
1795355230.009	(     870,    1300 ]     1356   0.009%  99.969% 
1795355230.009	(    1300,    1900 ]      325   0.002%  99.971% 
1795355230.009	(    1900,    2900 ]      128   0.001%  99.972% 
1795355230.009	(    2900,    4400 ]      126   0.001%  99.973% 
1795355230.009	(    4400,    6600 ]       15   0.000%  99.973% 
1795355230.009	(    6600,    9900 ]       35   0.000%  99.973% 
1795355230.009	(    9900,   14000 ]       15   0.000%  99.973% 
1795355230.009	(   14000,   22000 ]        9   0.000%  99.974% 
1795355230.009	(   22000,   33000 ]        4   0.000%  99.974% 
1795355230.009	(   33000,   50000 ]       18   0.000%  99.974% 
1795355230.009	(   50000,   75000 ]      365   0.002%  99.976% 
1795355230.009	(   75000,  110000 ]     2948   0.020%  99.996% 
1795355230.009	(  110000,  170000 ]      128   0.001%  99.997% 
1795355230.009	(  170000,  250000 ]      291   0.002%  99.999% 
1795355230.009	(  250000,  380000 ]      122   0.001% 100.000% 
1795355230.009	(  380000,  570000 ]       47   0.000% 100.000% 
1795355230.009	(  570000,  860000 ]       18   0.000% 100.000% 
1795355230.009	
1795355230.009	** Level 2 read latency histogram (micros):
1795355230.009	Count: 44351454 Average: 79.8972  StdDev: 49.34
1795355230.009	Min: 5  Median: 45.9545  Max: 2762386
1795355230.009	Percentiles: P50: 45.95 P75: 71.66 P99: 231.32 P99.9: 384.62 P99.99: 77387.06
1795355230.009	------------------------------------------------------
1795355230.009	(       4,       6 ]      458   0.001%   0.001% 
1795355230.009	(       6,      10 ]     2632   0.006%   0.007% 
1795355230.009	(      10,      15 ]      671   0.002%   0.008% 
1795355230.009	(      15,      22 ]      149   0.000%   0.009% 
1795355230.009	(      22,      34 ]       61   0.000%   0.009% 
1795355230.009	(      34,      51 ] 31529415  71.090%  71.099% ##############
1795355230.009	(      51,      76 ]  2093633   4.721%  75.819% #
1795355230.009	(      76,     110 ]  8008245  18.056%  93.876% ####
1795355230.009	(     110,     170 ]  1716506   3.870%  97.746% #
1795355230.009	(     170,     250 ]   725583   1.636%  99.382% 
1795355230.009	(     250,     380 ]   229050   0.516%  99.898% 
1795355230.009	(     380,     580 ]    30307   0.068%  99.967% 
1795355230.009	(     580,     870 ]     5781   0.013%  99.980% 
1795355230.009	(     870,    1300 ]     2148   0.005%  99.985% 
1795355230.009	(    1300,    1900 ]      592   0.001%  99.986% 
1795355230.009	(    1900,    2900 ]      375   0.001%  99.987% 
1795355230.009	(    2900,    4400 ]      514   0.001%  99.988% 
1795355230.009	(    4400,    6600 ]      121   0.000%  99.988% 
1795355230.009	(    6600,    9900 ]       70   0.000%  99.988% 
1795355230.009	(    9900,   14000 ]       39   0.000%  99.988% 
1795355230.009	(   14000,   22000 ]       10   0.000%  99.989% 
1795355230.009	(   22000,   33000 ]        5   0.000%  99.989% 
1795355230.009	(   33000,   50000 ]       18   0.000%  99.989% 
1795355230.009	(   50000,   75000 ]      355   0.001%  99.989% 
1795355230.009	(   75000,  110000 ]     4118   0.009%  99.999% 
1795355230.010	(  110000,  170000 ]      337   0.001%  99.999% 
1795355230.010	(  170000,  250000 ]      499   0.001% 100.001% 
1795355230.010	(  250000,  380000 ]      270   0.001% 100.001% 
1795355230.010	(  380000,  570000 ]      125   0.000% 100.001% 
1795355230.010	(  570000,  860000 ]       21   0.000% 100.001% 
1795355230.010	(  860000, 1200000 ]        1   0.000% 100.001% 
1795355230.010	( 1900000, 2900000 ]        1   0.000% 100.001% 
1795355230.010	
1795355230.010	** Level 3 read latency histogram (micros):
1795355230.010	Count: 58031657 Average: 79.1142  StdDev: 43.72
1795355230.010	Min: 5  Median: 45.9700  Max: 2305682
1795355230.010	Percentiles: P50: 45.97 P75: 73.28 P99: 226.94 P99.9: 376.27 P99.99: 77086.94
1795355230.010	------------------------------------------------------
1795355230.010	(       4,       6 ]      714   0.001%   0.001% 
1795355230.010	(       6,      10 ]     2902   0.005%   0.006% 
1795355230.010	(      10,      15 ]      811   0.001%   0.008% 
1795355230.010	(      15,      22 ]      211   0.000%   0.008% 
1795355230.010	(      22,      34 ]       53   0.000%   0.008% 
1795355230.010	(      34,      51 ] 41202071  70.999%  71.007% ##############
1795355230.010	(      51,      76 ]  2600053   4.480%  75.488% #
1795355230.010	(      76,     110 ] 10716907  18.467%  93.955% ####
1795355230.010	(     110,     170 ]  2275436   3.921%  97.876% #
1795355230.010	(     170,     250 ]   916271   1.579%  99.455% 
1795355230.010	(     250,     380 ]   265825   0.458%  99.913% 
1795355230.010	(     380,     580 ]    33081   0.057%  99.970% 
1795355230.010	(     580,     870 ]     6307   0.011%  99.981% 
1795355230.010	(     870,    1300 ]     2329   0.004%  99.985% 
1795355230.010	(    1300,    1900 ]      763   0.001%  99.986% 
1795355230.010	(    1900,    2900 ]      504   0.001%  99.987% 
1795355230.010	(    2900,    4400 ]      509   0.001%  99.988% 
1795355230.010	(    4400,    6600 ]      204   0.000%  99.988% 
1795355230.010	(    6600,    9900 ]       82   0.000%  99.989% 
1795355230.010	(    9900,   14000 ]       46   0.000%  99.989% 
1795355230.010	(   14000,   22000 ]       17   0.000%  99.989% 
1795355230.010	(   22000,   33000 ]        9   0.000%  99.989% 
1795355230.010	(   33000,   50000 ]       20   0.000%  99.989% 
1795355230.010	(   50000,   75000 ]      418   0.001%  99.989% 
1795355230.010	(   75000,  110000 ]     5213   0.009%  99.998% 
1795355230.010	(  110000,  170000 ]      390   0.001%  99.999% 
1795355230.010	(  170000,  250000 ]      686   0.001% 100.000% 
1795355230.010	(  250000,  380000 ]      336   0.001% 100.001% 
1795355230.010	(  380000,  570000 ]      126   0.000% 100.001% 
1795355230.010	(  570000,  860000 ]       37   0.000% 100.001% 
1795355230.010	( 1200000, 1900000 ]        1   0.000% 100.001% 
1795355230.010	( 1900000, 2900000 ]        1   0.000% 100.001% 
1795355230.010	
1795355230.010	** Level 4 read latency histogram (micros):
1795355230.010	Count: 57646602 Average: 79.6151  StdDev: 31.46
1795355230.010	Min: 5  Median: 45.9974  Max: 858711
1795355230.010	Percentiles: P50: 46.00 P75: 73.79 P99: 226.49 P99.9: 376.42 P99.99: 77111.44
1795355230.010	------------------------------------------------------
1795355230.010	(       4,       6 ]      375   0.001%   0.001% 
1795355230.010	(       6,      10 ]     1688   0.003%   0.004% 
1795355230.010	(      10,      15 ]      474   0.001%   0.004% 
1795355230.010	(      15,      22 ]      109   0.000%   0.005% 
1795355230.010	(      22,      34 ]       35   0.000%   0.005% 
1795355230.010	(      34,      51 ] 40838044  70.842%  70.847% ##############
1795355230.010	(      51,      76 ]  2626368   4.556%  75.403% #
1795355230.010	(      76,     110 ] 10675913  18.520%  93.922% ####
1795355230.010	(     110,     170 ]  2291586   3.975%  97.898% #
1795355230.010	(     170,     250 ]   900111   1.561%  99.459% 
1795355230.010	(     250,     380 ]   261459   0.454%  99.913% 
1795355230.010	(     380,     580 ]    32335   0.056%  99.969% 
1795355230.010	(     580,     870 ]     6396   0.011%  99.980% 
1795355230.010	(     870,    1300 ]     2705   0.005%  99.984% 
1795355230.010	(    1300,    1900 ]      921   0.002%  99.986% 
1795355230.010	(    1900,    2900 ]      528   0.001%  99.987% 
1795355230.010	(    2900,    4400 ]      575   0.001%  99.988% 
1795355230.010	(    4400,    6600 ]      214   0.000%  99.988% 
1795355230.010	(    6600,    9900 ]      115   0.000%  99.988% 
1795355230.010	(    9900,   14000 ]       49   0.000%  99.989% 
1795355230.010	(   14000,   22000 ]       16   0.000%  99.989% 
1795355230.010	(   22000,   33000 ]        8   0.000%  99.989% 
1795355230.010	(   33000,   50000 ]       41   0.000%  99.989% 
1795355230.010	(   50000,   75000 ]      466   0.001%  99.989% 
1795355230.010	(   75000,  110000 ]     5078   0.009%  99.998% 
1795355230.010	(  110000,  170000 ]      552   0.001%  99.999% 
1795355230.010	(  170000,  250000 ]      698   0.001% 100.000% 
1795355230.010	(  250000,  380000 ]      335   0.001% 100.001% 
1795355230.010	(  380000,  570000 ]      135   0.000% 100.001% 
1795355230.010	(  570000,  860000 ]       32   0.000% 100.001% 
1795355230.010	
1795355230.010	** Level 5 read latency histogram (micros):
1795355230.010	Count: 30973778 Average: 73.6999  StdDev: 118.69
1795355230.010	Min: 5  Median: 45.6363  Max: 740482
1795355230.010	Percentiles: P50: 45.64 P75: 60.39 P99: 227.21 P99.9: 378.49 P99.99: 3597.44
1795355230.010	------------------------------------------------------
1795355230.010	(       4,       6 ]      264   0.001%   0.001% 
1795355230.010	(       6,      10 ]     1777   0.006%   0.007% 
1795355230.010	(      10,      15 ]      467   0.002%   0.008% 
1795355230.010	(      15,      22 ]       91   0.000%   0.008% 
1795355230.010	(      22,      34 ]       30   0.000%   0.008% 
1795355230.010	(      34,      51 ] 22621598  73.035%  73.043% ###############
1795355230.010	(      51,      76 ]  1613005   5.208%  78.251% #
1795355230.010	(      76,     110 ]  5041838  16.278%  94.529% ###
1795355230.010	(     110,     170 ]  1037143   3.348%  97.877% #
1795355230.010	(     170,     250 ]   486390   1.570%  99.447% 
1795355230.010	(     250,     380 ]   141846   0.458%  99.905% 
1795355230.010	(     380,     580 ]    15843   0.051%  99.956% 
1795355230.010	(     580,     870 ]     5219   0.017%  99.973% 
1795355230.010	(     870,    1300 ]     3385   0.011%  99.984% 
1795355230.010	(    1300,    1900 ]      742   0.002%  99.987% 
1795355230.010	(    1900,    2900 ]      686   0.002%  99.989% 
1795355230.010	(    2900,    4400 ]      767   0.002%  99.991% 
1795355230.010	(    4400,    6600 ]      369   0.001%  99.993% 
1795355230.010	(    6600,    9900 ]      186   0.001%  99.993% 
1795355230.010	(    9900,   14000 ]       51   0.000%  99.993% 
1795355230.010	(   14000,   22000 ]        9   0.000%  99.993% 
1795355230.010	(   22000,   33000 ]        3   0.000%  99.993% 
1795355230.010	(   33000,   50000 ]        2   0.000%  99.993% 
1795355230.010	(   50000,   75000 ]       16   0.000%  99.993% 
1795355230.010	(   75000,  110000 ]     1679   0.005%  99.999% 
1795355230.010	(  110000,  170000 ]      280   0.001% 100.000% 
1795355230.010	(  170000,  250000 ]      239   0.001% 100.000% 
1795355230.010	(  250000,  380000 ]      199   0.001% 100.001% 
1795355230.010	(  380000,  570000 ]       60   0.000% 100.001% 
1795355230.010	(  570000,  860000 ]       17   0.000% 100.001% 
1795355230.010	
1795355230.010	
1795355230.010	** DB Stats **
1795355230.010	Uptime(secs): 42268.8 total, 8.2 interval
1795355230.010	Cumulative writes: 34M writes, 34M keys, 25M commit groups, 1.3 writes per commit group, ingest: 33.72 GB, 0.82 MB/s
1795355230.010	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.72 GB, 0.82 MB/s
1795355230.010	Cumulative stall: 10:06:7.029 H:M:S, 86.0 percent
1795355230.010	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795355230.010	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795355230.010	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795355230.010	
1795355230.010	STATISTICS:
1795355230.010	rocksdb.block.cache.miss COUNT : 206800453
1795355230.010	rocksdb.block.cache.hit COUNT : 0
1795355230.010	rocksdb.block.cache.add COUNT : 0
1795355230.010	rocksdb.block.cache.add.failures COUNT : 0
1795355230.010	rocksdb.block.cache.index.miss COUNT : 0
1795355230.010	rocksdb.block.cache.index.hit COUNT : 0
1795355230.010	rocksdb.block.cache.index.add COUNT : 0
1795355230.010	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795355230.010	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795355230.010	rocksdb.block.cache.filter.miss COUNT : 0
1795355230.010	rocksdb.block.cache.filter.hit COUNT : 0
1795355230.010	rocksdb.block.cache.filter.add COUNT : 0
1795355230.010	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795355230.010	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795355230.010	rocksdb.block.cache.data.miss COUNT : 206800453
1795355230.010	rocksdb.block.cache.data.hit COUNT : 0
1795355230.010	rocksdb.block.cache.data.add COUNT : 0
1795355230.010	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795355230.010	rocksdb.block.cache.bytes.read COUNT : 0
1795355230.010	rocksdb.block.cache.bytes.write COUNT : 0
1795355230.010	rocksdb.bloom.filter.useful COUNT : 0
1795355230.010	rocksdb.bloom.filter.full.positive COUNT : 0
1795355230.010	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795355230.010	rocksdb.bloom.filter.micros COUNT : 0
1795355230.010	rocksdb.persistent.cache.hit COUNT : 0
1795355230.010	rocksdb.persistent.cache.miss COUNT : 0
1795355230.010	rocksdb.sim.block.cache.hit COUNT : 0
1795355230.010	rocksdb.sim.block.cache.miss COUNT : 0
1795355230.010	rocksdb.memtable.hit COUNT : 0
1795355230.010	rocksdb.memtable.miss COUNT : 0
1795355230.010	rocksdb.l0.hit COUNT : 0
1795355230.010	rocksdb.l1.hit COUNT : 0
1795355230.010	rocksdb.l2andup.hit COUNT : 0
1795355230.010	rocksdb.compaction.key.drop.new COUNT : 31626430
1795355230.010	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795355230.010	rocksdb.compaction.key.drop.range_del COUNT : 0
1795355230.010	rocksdb.compaction.key.drop.user COUNT : 0
1795355230.010	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795355230.010	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795355230.010	rocksdb.compaction.cancelled COUNT : 0
1795355230.010	rocksdb.number.keys.written COUNT : 34383360
1795355230.010	rocksdb.number.keys.read COUNT : 0
1795355230.010	rocksdb.number.keys.updated COUNT : 0
1795355230.010	rocksdb.bytes.written COUNT : 36206107416
1795355230.010	rocksdb.bytes.read COUNT : 0
1795355230.010	rocksdb.number.db.seek COUNT : 0
1795355230.010	rocksdb.number.db.next COUNT : 0
1795355230.010	rocksdb.number.db.prev COUNT : 0
1795355230.010	rocksdb.number.db.seek.found COUNT : 0
1795355230.010	rocksdb.number.db.next.found COUNT : 0
1795355230.010	rocksdb.number.db.prev.found COUNT : 0
1795355230.010	rocksdb.db.iter.bytes.read COUNT : 0
1795355230.010	rocksdb.no.file.closes COUNT : 0
1795355230.010	rocksdb.no.file.opens COUNT : 1908287
1795355230.010	rocksdb.no.file.errors COUNT : 0
1795355230.010	rocksdb.l0.slowdown.micros COUNT : 0
1795355230.010	rocksdb.memtable.compaction.micros COUNT : 0
1795355230.010	rocksdb.l0.num.files.stall.micros COUNT : 0
1795355230.010	rocksdb.stall.micros COUNT : 36367028859
1795355230.010	rocksdb.db.mutex.wait.micros COUNT : 0
1795355230.010	rocksdb.rate.limit.delay.millis COUNT : 0
1795355230.010	rocksdb.num.iterators COUNT : 0
1795355230.010	rocksdb.number.multiget.get COUNT : 0
1795355230.010	rocksdb.number.multiget.keys.read COUNT : 0
1795355230.010	rocksdb.number.multiget.bytes.read COUNT : 0
1795355230.010	rocksdb.number.deletes.filtered COUNT : 0
1795355230.010	rocksdb.number.merge.failures COUNT : 0
1795355230.010	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795355230.010	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795355230.010	rocksdb.number.reseeks.iteration COUNT : 0
1795355230.010	rocksdb.getupdatessince.calls COUNT : 0
1795355230.010	rocksdb.block.cachecompressed.miss COUNT : 0
1795355230.010	rocksdb.block.cachecompressed.hit COUNT : 0
1795355230.010	rocksdb.block.cachecompressed.add COUNT : 0
1795355230.010	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795355230.010	rocksdb.wal.synced COUNT : 0
1795355230.011	rocksdb.wal.bytes COUNT : 36206107416
1795355230.011	rocksdb.write.self COUNT : 25823298
1795355230.011	rocksdb.write.other COUNT : 8560062
1795355230.011	rocksdb.write.timeout COUNT : 0
1795355230.011	rocksdb.write.wal COUNT : 34383360
1795355230.011	rocksdb.compact.read.bytes COUNT : 869284999057
1795355230.011	rocksdb.compact.write.bytes COUNT : 836050140837
1795355230.011	rocksdb.flush.write.bytes COUNT : 36305838515
1795355230.011	rocksdb.compact.read.marked.bytes COUNT : 0
1795355230.011	rocksdb.compact.read.periodic.bytes COUNT : 0
1795355230.011	rocksdb.compact.read.ttl.bytes COUNT : 0
1795355230.011	rocksdb.compact.write.marked.bytes COUNT : 0
1795355230.011	rocksdb.compact.write.periodic.bytes COUNT : 0
1795355230.011	rocksdb.compact.write.ttl.bytes COUNT : 0
1795355230.011	rocksdb.number.direct.load.table.properties COUNT : 0
1795355230.011	rocksdb.number.superversion_acquires COUNT : 0
1795355230.011	rocksdb.number.superversion_releases COUNT : 0
1795355230.011	rocksdb.number.superversion_cleanups COUNT : 0
1795355230.011	rocksdb.number.block.compressed COUNT : 0
1795355230.011	rocksdb.number.block.decompressed COUNT : 0
1795355230.011	rocksdb.number.block.not_compressed COUNT : 0
1795355230.011	rocksdb.merge.operation.time.nanos COUNT : 0
1795355230.011	rocksdb.filter.operation.time.nanos COUNT : 0
1795355230.011	rocksdb.row.cache.hit COUNT : 0
1795355230.011	rocksdb.row.cache.miss COUNT : 0
1795355230.011	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795355230.011	rocksdb.read.amp.total.read.bytes COUNT : 0
1795355230.011	rocksdb.number.rate_limiter.drains COUNT : 0
1795355230.011	rocksdb.number.iter.skip COUNT : 0
1795355230.011	rocksdb.blobdb.num.put COUNT : 0
1795355230.011	rocksdb.blobdb.num.write COUNT : 0
1795355230.011	rocksdb.blobdb.num.get COUNT : 0
1795355230.011	rocksdb.blobdb.num.multiget COUNT : 0
1795355230.011	rocksdb.blobdb.num.seek COUNT : 0
1795355230.011	rocksdb.blobdb.num.next COUNT : 0
1795355230.011	rocksdb.blobdb.num.prev COUNT : 0
1795355230.011	rocksdb.blobdb.num.keys.written COUNT : 0
1795355230.011	rocksdb.blobdb.num.keys.read COUNT : 0
1795355230.011	rocksdb.blobdb.bytes.written COUNT : 0
1795355230.011	rocksdb.blobdb.bytes.read COUNT : 0
1795355230.011	rocksdb.blobdb.write.inlined COUNT : 0
1795355230.011	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795355230.011	rocksdb.blobdb.write.blob COUNT : 0
1795355230.011	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795355230.011	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795355230.011	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795355230.011	rocksdb.blobdb.blob.file.synced COUNT : 0
1795355230.011	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795355230.011	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795355230.011	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795355230.011	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795355230.011	rocksdb.blobdb.gc.num.files COUNT : 0
1795355230.011	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795355230.011	rocksdb.blobdb.gc.failures COUNT : 0
1795355230.011	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795355230.011	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795355230.011	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795355230.011	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795355230.011	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795355230.011	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795355230.011	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795355230.011	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795355230.011	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795355230.011	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795355230.011	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795355230.011	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795355230.011	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795355230.011	rocksdb.txn.get.tryagain COUNT : 0
1795355230.011	rocksdb.number.multiget.keys.found COUNT : 0
1795355230.011	rocksdb.num.iterator.created COUNT : 0
1795355230.011	rocksdb.num.iterator.deleted COUNT : 0
1795355230.011	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795355230.011	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795355230.011	rocksdb.block.cache.compression.dict.add COUNT : 0
1795355230.011	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795355230.011	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795355230.011	rocksdb.block.cache.add.redundant COUNT : 0
1795355230.011	rocksdb.block.cache.index.add.redundant COUNT : 0
1795355230.011	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795355230.011	rocksdb.block.cache.data.add.redundant COUNT : 0
1795355230.011	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795355230.011	rocksdb.files.marked.trash COUNT : 0
1795355230.011	rocksdb.files.deleted.immediately COUNT : 1902734
1795355230.011	rocksdb.error.handler.bg.errro.count COUNT : 0
1795355230.011	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795355230.011	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795355230.011	rocksdb.error.handler.autoresume.count COUNT : 0
1795355230.011	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795355230.011	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795355230.011	rocksdb.memtable.payload.bytes.at.flush COUNT : 36032565512
1795355230.011	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1952424
1795355230.011	rocksdb.secondary.cache.hits COUNT : 0
1795355230.011	rocksdb.verify_checksum.read.bytes COUNT : 0
1795355230.011	rocksdb.backup.read.bytes COUNT : 0
1795355230.011	rocksdb.backup.write.bytes COUNT : 0
1795355230.011	rocksdb.remote.compact.read.bytes COUNT : 0
1795355230.011	rocksdb.remote.compact.write.bytes COUNT : 0
1795355230.011	rocksdb.hot.file.read.bytes COUNT : 0
1795355230.011	rocksdb.warm.file.read.bytes COUNT : 0
1795355230.011	rocksdb.cold.file.read.bytes COUNT : 0
1795355230.011	rocksdb.hot.file.read.count COUNT : 0
1795355230.011	rocksdb.warm.file.read.count COUNT : 0
1795355230.011	rocksdb.cold.file.read.count COUNT : 0
1795355230.011	rocksdb.last.level.read.bytes COUNT : 0
1795355230.011	rocksdb.last.level.read.count COUNT : 0
1795355230.011	rocksdb.non.last.level.read.bytes COUNT : 869572584051
1795355230.011	rocksdb.non.last.level.read.count COUNT : 214433601
1795355230.011	rocksdb.block.checksum.compute.count COUNT : 210617027
1795355230.011	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.db.write.micros P50 : 1459.482434 P95 : 19677.136705 P99 : 70790.516087 P100 : 5411649.000000 COUNT : 34383157 SUM : 168380168218
1795355230.011	rocksdb.compaction.times.micros P50 : 95797.691846 P95 : 286952.267303 P99 : 721350.280224 P100 : 5675097.000000 COUNT : 298260 SUM : 35567413285
1795355230.011	rocksdb.compaction.times.cpu_micros P50 : 94039.815565 P95 : 278050.815320 P99 : 709804.520720 P100 : 5598844.000000 COUNT : 298260 SUM : 34808201785
1795355230.011	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.table.sync.micros P50 : 29601.951381 P95 : 232225.806452 P99 : 642783.829787 P100 : 1414765.000000 COUNT : 18402 SUM : 1048599677
1795355230.011	rocksdb.compaction.outfile.sync.micros P50 : 6605.128297 P95 : 13837.936008 P99 : 30103.760085 P100 : 3705563.000000 COUNT : 1853577 SUM : 16710379501
1795355230.011	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.manifest.file.sync.micros P50 : 492.290132 P95 : 26896.060730 P99 : 395248.150025 P100 : 2733411.000000 COUNT : 238566 SUM : 2673121796
1795355230.011	rocksdb.table.open.io.micros P50 : 236.754642 P95 : 409.992241 P99 : 604.850905 P100 : 868222.000000 COUNT : 1908287 SUM : 789066894
1795355230.011	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.read.block.compaction.micros P50 : 46.176340 P95 : 128.273450 P99 : 231.627303 P100 : 2762992.000000 COUNT : 206800453 SUM : 16640310474
1795355230.011	rocksdb.read.block.get.micros P50 : 50.094599 P95 : 106.469431 P99 : 214.096965 P100 : 353271.000000 COUNT : 1908287 SUM : 135179648
1795355230.011	rocksdb.write.raw.block.micros P50 : 0.536249 P95 : 1.533765 P99 : 43.276817 P100 : 2047859.000000 COUNT : 213109531 SUM : 423910275
1795355230.011	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.numfiles.in.singlecompaction P50 : 5.791617 P95 : 9.574341 P99 : 9.923461 P100 : 49.000000 COUNT : 299032 SUM : 1866651
1795355230.011	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.db.write.stall P50 : 0.724501 P95 : 4114.077361 P99 : 19335.589371 P100 : 5411191.000000 COUNT : 25801050 SUM : 36370725363
1795355230.011	rocksdb.sst.read.micros P50 : 45.905875 P95 : 125.064363 P99 : 227.900917 P100 : 2762386.000000 COUNT : 214433601 SUM : 17073189786
1795355230.011	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.bytes.per.write P50 : 1129.262602 P95 : 3579.707219 P99 : 4188.000000 P100 : 4188.000000 COUNT : 25823298 SUM : 36206107416
1795355230.011	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.db.flush.micros P50 : 55406.936215 P95 : 303940.298507 P99 : 700128.205128 P100 : 5202408.000000 COUNT : 18400 SUM : 1559479762
1795355230.011	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795355230.011	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1865879 SUM : 0
1795355230.011	
