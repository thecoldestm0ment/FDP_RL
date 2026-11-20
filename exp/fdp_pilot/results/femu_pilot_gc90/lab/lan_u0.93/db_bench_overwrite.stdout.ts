1795051281.184	Initializing RocksDB Options from the specified file
1795051281.184	Initializing RocksDB Options from command-line flags
1795051292.831	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795051292.831	Values:     1024 bytes each (512 bytes after compression)
1795051292.831	Entries:    17191679
1795051292.831	Prefix:    0 bytes
1795051292.831	Keys per prefix:    0
1795051292.831	RawSize:    17051.1 MB (estimated)
1795051292.831	FileSize:   8656.7 MB (estimated)
1795051292.831	Write rate: 0 bytes/second
1795051292.831	Read rate: 0 ops/second
1795051292.831	Compression: NoCompression
1795051292.831	Compression sampling rate: 0
1795051292.831	Memtablerep: SkipListFactory
1795051292.831	Perf Level: 1
1795051292.831	------------------------------------------------
1795051292.831	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795088614.375	overwrite    :    4338.797 micros/op 921 ops/sec;    0.9 MB/s
1795088619.371	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795088619.371	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795088629.403	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795088639.403	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795088649.449	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795088659.448	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795088669.448	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795088679.448	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795088679.449	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795088679.449	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795088679.449	
1795088679.449	Level Files Size(MB)
1795088679.449	--------------------
1795088679.449	  0        1        2
1795088679.449	  1        6        2
1795088679.449	  2       60       25
1795088679.449	  3      602      250
1795088679.449	  4     5737     2500
1795088679.449	  5    36024    17326
1795088679.449	  6        0        0
1795088679.449	
1795088679.452	
1795088679.452	
1795088679.452	** Compaction Stats [default] **
1795088679.452	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795088679.452	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795088679.452	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     24.7   1404.38           1125.96     19855    0.071     17K      3       0.0       0.0
1795088679.452	  L1      6/0    2.48 MB   1.0     57.5    33.8     23.7      57.6     33.9       0.0   1.7     23.6     23.6   2494.57           2463.03      9906    0.252     58M   6779       0.0       0.0
1795088679.452	  L2     60/0   24.88 MB   1.0    172.1    33.8    138.3     172.1     33.8       0.0   5.1     22.8     22.8   7729.62           7636.11     72818    0.106    174M    51K       0.0       0.0
1795088679.452	  L3    602/0   249.63 MB   1.0    219.9    33.8    186.1     219.4     33.3       0.0   6.5     23.5     23.4   9599.71           9488.84     76831    0.125    223M   514K       0.0       0.0
1795088679.452	  L4   5737/0    2.44 GB   1.0    222.7    33.3    189.4     217.7     28.3       0.0   6.5     22.9     22.4   9960.67           9847.10     77261    0.129    226M  5052K       0.0       0.0
1795088679.452	  L5  36024/0   16.92 GB   0.7    144.9    28.3    116.6     119.3      2.7       0.0   4.2     24.9     20.5   5953.30           5880.35     62727    0.095    147M    25M       0.0       0.0
1795088679.452	 Sum  42430/0   19.63 GB   0.0    817.2   163.0    654.2     819.9    165.7       0.0  24.2     22.5     22.6  37142.24          36441.39    319398    0.116    830M    31M       0.0       0.0
1795088679.452	 Int      0/0    0.00 KB   0.0      1.1     0.2      0.9       0.9      0.0       0.0 992893139.0     21.1     17.8     53.09             52.89       390    0.136   1108K   169K       0.0       0.0
1795088679.452	
1795088679.452	** Compaction Stats [default] **
1795088679.452	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795088679.452	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795088679.452	 Low      0/0    0.00 KB   0.0    817.2   163.0    654.2     786.1    131.9       0.0   0.0     23.4     22.5  35739.97          35317.49    299545    0.119    830M    31M       0.0       0.0
1795088679.452	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     24.7   1402.26           1123.90     19851    0.071       0      0       0.0       0.0
1795088679.452	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    247.8      0.01              0.00         2    0.004       0      0       0.0       0.0
1795088679.452	
1795088679.452	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795088679.452	
1795088679.452	Uptime(secs): 37398.2 total, 59.8 interval
1795088679.452	Flush(GB): cumulative 33.811, interval 0.000
1795088679.452	AddFile(GB): cumulative 0.000, interval 0.000
1795088679.452	AddFile(Total Files): cumulative 0, interval 0
1795088679.452	AddFile(L0 Files): cumulative 0, interval 0
1795088679.452	AddFile(Keys): cumulative 0, interval 0
1795088679.452	Cumulative compaction: 819.92 GB write, 22.45 MB/s write, 817.20 GB read, 22.38 MB/s read, 37142.2 seconds
1795088679.452	Interval compaction: 0.92 GB write, 15.83 MB/s write, 1.09 GB read, 18.68 MB/s read, 53.1 seconds
1795088679.452	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 359743 slowdown for pending_compaction_bytes, 21 memtable_compaction, 5 memtable_slowdown, interval 261 total count
1795088679.452	Block cache LRUCache@0x643b6d012a70#48704 capacity: 8.00 MB collections: 208 last_copies: 1 last_secs: 9.6e-05 secs_since: 119
1795088679.452	Block cache entry stats(count,size,portion): Misc(3,8.36 KB,0.102043%)
1795088679.452	
1795088679.452	** File Read Latency Histogram By Level [default] **
1795088679.452	** Level 0 read latency histogram (micros):
1795088679.452	Count: 8687193 Average: 77.7496  StdDev: 260.94
1795088679.452	Min: 9  Median: 46.2887  Max: 751275
1795088679.452	Percentiles: P50: 46.29 P75: 74.62 P99: 234.07 P99.9: 458.34 P99.99: 3646.04
1795088679.452	------------------------------------------------------
1795088679.452	(       6,      10 ]        1   0.000%   0.000% 
1795088679.452	(      15,      22 ]        9   0.000%   0.000% 
1795088679.452	(      34,      51 ]  6008869  69.169%  69.169% ##############
1795088679.452	(      51,      76 ]   536220   6.173%  75.342% #
1795088679.452	(      76,     110 ]  1579501  18.182%  93.524% ####
1795088679.452	(     110,     170 ]   361355   4.160%  97.684% #
1795088679.452	(     170,     250 ]   142808   1.644%  99.327% 
1795088679.452	(     250,     380 ]    46340   0.533%  99.861% 
1795088679.452	(     380,     580 ]     8687   0.100%  99.961% 
1795088679.452	(     580,     870 ]     1513   0.017%  99.978% 
1795088679.452	(     870,    1300 ]      588   0.007%  99.985% 
1795088679.452	(    1300,    1900 ]      231   0.003%  99.988% 
1795088679.452	(    1900,    2900 ]      161   0.002%  99.990% 
1795088679.452	(    2900,    4400 ]       83   0.001%  99.990% 
1795088679.452	(    4400,    6600 ]       23   0.000%  99.991% 
1795088679.452	(    6600,    9900 ]       20   0.000%  99.991% 
1795088679.452	(    9900,   14000 ]        5   0.000%  99.991% 
1795088679.452	(   14000,   22000 ]        1   0.000%  99.991% 
1795088679.452	(   33000,   50000 ]        2   0.000%  99.991% 
1795088679.452	(   50000,   75000 ]       25   0.000%  99.991% 
1795088679.452	(   75000,  110000 ]      532   0.006%  99.997% 
1795088679.452	(  110000,  170000 ]       47   0.001%  99.998% 
1795088679.452	(  170000,  250000 ]       77   0.001%  99.999% 
1795088679.452	(  250000,  380000 ]       58   0.001% 100.000% 
1795088679.452	(  380000,  570000 ]       31   0.000% 100.000% 
1795088679.452	(  570000,  860000 ]        6   0.000% 100.000% 
1795088679.452	
1795088679.452	** Level 1 read latency histogram (micros):
1795088679.452	Count: 15219858 Average: 87.8986  StdDev: 137.10
1795088679.452	Min: 6  Median: 46.1530  Max: 749845
1795088679.452	Percentiles: P50: 46.15 P75: 72.16 P99: 230.47 P99.9: 458.82 P99.99: 93409.00
1795088679.452	------------------------------------------------------
1795088679.452	(       4,       6 ]        3   0.000%   0.000% 
1795088679.452	(       6,      10 ]       71   0.000%   0.000% 
1795088679.452	(      10,      15 ]       30   0.000%   0.001% 
1795088679.452	(      15,      22 ]       44   0.000%   0.001% 
1795088679.452	(      22,      34 ]        6   0.000%   0.001% 
1795088679.452	(      34,      51 ] 10644785  69.940%  69.941% ##############
1795088679.452	(      51,      76 ]   909852   5.978%  75.919% #
1795088679.452	(      76,     110 ]  2717466  17.855%  93.774% ####
1795088679.452	(     110,     170 ]   612049   4.021%  97.795% #
1795088679.452	(     170,     250 ]   242561   1.594%  99.389% 
1795088679.452	(     250,     380 ]    72377   0.476%  99.865% 
1795088679.452	(     380,     580 ]    13687   0.090%  99.954% 
1795088679.452	(     580,     870 ]     2364   0.016%  99.970% 
1795088679.452	(     870,    1300 ]      871   0.006%  99.976% 
1795088679.452	(    1300,    1900 ]      452   0.003%  99.979% 
1795088679.452	(    1900,    2900 ]      234   0.002%  99.980% 
1795088679.452	(    2900,    4400 ]      149   0.001%  99.981% 
1795088679.452	(    4400,    6600 ]       27   0.000%  99.981% 
1795088679.452	(    6600,    9900 ]       19   0.000%  99.982% 
1795088679.452	(    9900,   14000 ]        6   0.000%  99.982% 
1795088679.452	(   22000,   33000 ]        2   0.000%  99.982% 
1795088679.452	(   33000,   50000 ]        7   0.000%  99.982% 
1795088679.452	(   50000,   75000 ]      170   0.001%  99.983% 
1795088679.452	(   75000,  110000 ]     2099   0.014%  99.997% 
1795088679.452	(  110000,  170000 ]      114   0.001%  99.997% 
1795088679.452	(  170000,  250000 ]      259   0.002%  99.999% 
1795088679.452	(  250000,  380000 ]      112   0.001% 100.000% 
1795088679.452	(  380000,  570000 ]       57   0.000% 100.000% 
1795088679.452	(  570000,  860000 ]       24   0.000% 100.000% 
1795088679.452	
1795088679.452	** Level 2 read latency histogram (micros):
1795088679.452	Count: 45635290 Average: 78.3706  StdDev: 51.38
1795088679.452	Min: 5  Median: 46.3917  Max: 766205
1795088679.452	Percentiles: P50: 46.39 P75: 76.77 P99: 235.28 P99.9: 390.10 P99.99: 2542.21
1795088679.452	------------------------------------------------------
1795088679.452	(       4,       6 ]      124   0.000%   0.000% 
1795088679.452	(       6,      10 ]     2757   0.006%   0.006% 
1795088679.452	(      10,      15 ]      753   0.002%   0.008% 
1795088679.452	(      15,      22 ]      239   0.001%   0.008% 
1795088679.452	(      22,      34 ]       93   0.000%   0.009% 
1795088679.452	(      34,      51 ] 31297839  68.583%  68.591% ##############
1795088679.452	(      51,      76 ]  2730518   5.983%  74.575% #
1795088679.452	(      76,     110 ]  8540892  18.716%  93.290% ####
1795088679.452	(     110,     170 ]  1939918   4.251%  97.541% #
1795088679.452	(     170,     250 ]   815875   1.788%  99.329% 
1795088679.452	(     250,     380 ]   258933   0.567%  99.896% 
1795088679.452	(     380,     580 ]    33922   0.074%  99.971% 
1795088679.452	(     580,     870 ]     5357   0.012%  99.982% 
1795088679.452	(     870,    1300 ]     2132   0.005%  99.987% 
1795088679.452	(    1300,    1900 ]      993   0.002%  99.989% 
1795088679.452	(    1900,    2900 ]      594   0.001%  99.990% 
1795088679.452	(    2900,    4400 ]      497   0.001%  99.992% 
1795088679.452	(    4400,    6600 ]      116   0.000%  99.992% 
1795088679.452	(    6600,    9900 ]       64   0.000%  99.992% 
1795088679.452	(    9900,   14000 ]       31   0.000%  99.992% 
1795088679.453	(   14000,   22000 ]        6   0.000%  99.992% 
1795088679.453	(   22000,   33000 ]        4   0.000%  99.992% 
1795088679.453	(   33000,   50000 ]       22   0.000%  99.992% 
1795088679.453	(   50000,   75000 ]      192   0.000%  99.993% 
1795088679.453	(   75000,  110000 ]     2979   0.007%  99.999% 
1795088679.453	(  110000,  170000 ]      280   0.001% 100.000% 
1795088679.453	(  170000,  250000 ]      418   0.001% 100.001% 
1795088679.453	(  250000,  380000 ]      266   0.001% 100.001% 
1795088679.453	(  380000,  570000 ]      157   0.000% 100.001% 
1795088679.453	(  570000,  860000 ]       22   0.000% 100.002% 
1795088679.453	
1795088679.453	** Level 3 read latency histogram (micros):
1795088679.453	Count: 58218866 Average: 78.1644  StdDev: 61.36
1795088679.453	Min: 4  Median: 46.3779  Max: 864661
1795088679.453	Percentiles: P50: 46.38 P75: 76.91 P99: 232.82 P99.9: 377.38 P99.99: 2285.35
1795088679.453	------------------------------------------------------
1795088679.453	(       3,       4 ]        2   0.000%   0.000% 
1795088679.453	(       4,       6 ]      143   0.000%   0.000% 
1795088679.453	(       6,      10 ]     2684   0.005%   0.005% 
1795088679.453	(      10,      15 ]      702   0.001%   0.006% 
1795088679.453	(      15,      22 ]      379   0.001%   0.007% 
1795088679.453	(      22,      34 ]      102   0.000%   0.007% 
1795088679.453	(      34,      51 ] 39973977  68.662%  68.668% ##############
1795088679.453	(      51,      76 ]  3393682   5.829%  74.498% #
1795088679.453	(      76,     110 ] 10964870  18.834%  93.332% ####
1795088679.453	(     110,     170 ]  2483536   4.266%  97.597% #
1795088679.453	(     170,     250 ]  1039910   1.786%  99.384% 
1795088679.453	(     250,     380 ]   306841   0.527%  99.911% 
1795088679.453	(     380,     580 ]    36933   0.063%  99.974% 
1795088679.453	(     580,     870 ]     5556   0.010%  99.984% 
1795088679.453	(     870,    1300 ]     2272   0.004%  99.988% 
1795088679.453	(    1300,    1900 ]     1153   0.002%  99.989% 
1795088679.453	(    1900,    2900 ]      784   0.001%  99.991% 
1795088679.453	(    2900,    4400 ]      559   0.001%  99.992% 
1795088679.453	(    4400,    6600 ]      157   0.000%  99.992% 
1795088679.453	(    6600,    9900 ]       96   0.000%  99.992% 
1795088679.453	(    9900,   14000 ]       23   0.000%  99.992% 
1795088679.453	(   14000,   22000 ]        5   0.000%  99.992% 
1795088679.453	(   22000,   33000 ]        2   0.000%  99.992% 
1795088679.453	(   33000,   50000 ]       15   0.000%  99.992% 
1795088679.453	(   50000,   75000 ]      177   0.000%  99.993% 
1795088679.453	(   75000,  110000 ]     3782   0.006%  99.999% 
1795088679.453	(  110000,  170000 ]      327   0.001% 100.000% 
1795088679.453	(  170000,  250000 ]      566   0.001% 100.001% 
1795088679.453	(  250000,  380000 ]      346   0.001% 100.001% 
1795088679.453	(  380000,  570000 ]      190   0.000% 100.002% 
1795088679.453	(  570000,  860000 ]       37   0.000% 100.002% 
1795088679.453	(  860000, 1200000 ]        1   0.000% 100.002% 
1795088679.453	
1795088679.453	** Level 4 read latency histogram (micros):
1795088679.453	Count: 57688693 Average: 78.9526  StdDev: 18.29
1795088679.453	Min: 5  Median: 46.4173  Max: 861665
1795088679.453	Percentiles: P50: 46.42 P75: 76.99 P99: 232.02 P99.9: 377.38 P99.99: 2996.69
1795088679.453	------------------------------------------------------
1795088679.453	(       4,       6 ]      105   0.000%   0.000% 
1795088679.453	(       6,      10 ]     1825   0.003%   0.003% 
1795088679.453	(      10,      15 ]      482   0.001%   0.004% 
1795088679.453	(      15,      22 ]      230   0.000%   0.005% 
1795088679.453	(      22,      34 ]       62   0.000%   0.005% 
1795088679.453	(      34,      51 ] 39486009  68.447%  68.451% ##############
1795088679.453	(      51,      76 ]  3461097   6.000%  74.451% #
1795088679.453	(      76,     110 ] 10889257  18.876%  93.327% ####
1795088679.453	(     110,     170 ]  2490819   4.318%  97.645% #
1795088679.453	(     170,     250 ]  1008597   1.748%  99.393% 
1795088679.453	(     250,     380 ]   298530   0.517%  99.910% 
1795088679.453	(     380,     580 ]    35550   0.062%  99.972% 
1795088679.453	(     580,     870 ]     5666   0.010%  99.982% 
1795088679.453	(     870,    1300 ]     2657   0.005%  99.986% 
1795088679.453	(    1300,    1900 ]     1222   0.002%  99.989% 
1795088679.453	(    1900,    2900 ]      779   0.001%  99.990% 
1795088679.453	(    2900,    4400 ]      576   0.001%  99.991% 
1795088679.453	(    4400,    6600 ]      208   0.000%  99.991% 
1795088679.453	(    6600,    9900 ]      113   0.000%  99.991% 
1795088679.453	(    9900,   14000 ]       27   0.000%  99.992% 
1795088679.453	(   14000,   22000 ]        2   0.000%  99.992% 
1795088679.453	(   22000,   33000 ]        7   0.000%  99.992% 
1795088679.453	(   33000,   50000 ]       13   0.000%  99.992% 
1795088679.453	(   50000,   75000 ]      267   0.000%  99.992% 
1795088679.453	(   75000,  110000 ]     3911   0.007%  99.999% 
1795088679.453	(  110000,  170000 ]      394   0.001% 100.000% 
1795088679.453	(  170000,  250000 ]      579   0.001% 100.001% 
1795088679.453	(  250000,  380000 ]      367   0.001% 100.001% 
1795088679.453	(  380000,  570000 ]      175   0.000% 100.001% 
1795088679.453	(  570000,  860000 ]       35   0.000% 100.002% 
1795088679.453	(  860000, 1200000 ]        1   0.000% 100.002% 
1795088679.453	
1795088679.453	** Level 5 read latency histogram (micros):
1795088679.453	Count: 30968222 Average: 74.3763  StdDev: 79.48
1795088679.453	Min: 5  Median: 46.0322  Max: 762103
1795088679.453	Percentiles: P50: 46.03 P75: 67.40 P99: 231.19 P99.9: 393.13 P99.99: 4063.38
1795088679.453	------------------------------------------------------
1795088679.453	(       4,       6 ]       88   0.000%   0.000% 
1795088679.453	(       6,      10 ]     1662   0.005%   0.006% 
1795088679.453	(      10,      15 ]      482   0.002%   0.007% 
1795088679.453	(      15,      22 ]      175   0.001%   0.008% 
1795088679.453	(      22,      34 ]       62   0.000%   0.008% 
1795088679.453	(      34,      51 ] 21873571  70.632%  70.640% ##############
1795088679.453	(      51,      76 ]  2057889   6.645%  77.285% #
1795088679.453	(      76,     110 ]  5199714  16.790%  94.076% ###
1795088679.453	(     110,     170 ]  1124393   3.631%  97.707% #
1795088679.453	(     170,     250 ]   523657   1.691%  99.398% 
1795088679.453	(     250,     380 ]   154396   0.499%  99.896% 
1795088679.453	(     380,     580 ]    17738   0.057%  99.954% 
1795088679.453	(     580,     870 ]     5268   0.017%  99.971% 
1795088679.453	(     870,    1300 ]     3695   0.012%  99.982% 
1795088679.453	(    1300,    1900 ]      939   0.003%  99.985% 
1795088679.453	(    1900,    2900 ]      830   0.003%  99.988% 
1795088679.453	(    2900,    4400 ]      730   0.002%  99.991% 
1795088679.453	(    4400,    6600 ]      342   0.001%  99.992% 
1795088679.453	(    6600,    9900 ]      197   0.001%  99.992% 
1795088679.453	(    9900,   14000 ]       53   0.000%  99.992% 
1795088679.453	(   14000,   22000 ]        8   0.000%  99.992% 
1795088679.453	(   33000,   50000 ]        3   0.000%  99.992% 
1795088679.453	(   50000,   75000 ]       18   0.000%  99.993% 
1795088679.453	(   75000,  110000 ]     1387   0.004%  99.997% 
1795088679.453	(  110000,  170000 ]      215   0.001%  99.998% 
1795088679.453	(  170000,  250000 ]      211   0.001%  99.998% 
1795088679.453	(  250000,  380000 ]      200   0.001%  99.999% 
1795088679.453	(  380000,  570000 ]       92   0.000%  99.999% 
1795088679.453	(  570000,  860000 ]       13   0.000%  99.999% 
1795088679.453	
1795088679.453	
1795088679.453	** DB Stats **
1795088679.453	Uptime(secs): 37398.2 total, 59.8 interval
1795088679.453	Cumulative writes: 34M writes, 34M keys, 26M commit groups, 1.3 writes per commit group, ingest: 33.72 GB, 0.92 MB/s
1795088679.453	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.72 GB, 0.92 MB/s
1795088679.453	Cumulative stall: 08:53:48.361 H:M:S, 85.6 percent
1795088679.453	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795088679.453	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795088679.453	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795088679.453	
1795088679.453	STATISTICS:
1795088679.453	rocksdb.block.cache.miss COUNT : 208709869
1795088679.453	rocksdb.block.cache.hit COUNT : 0
1795088679.453	rocksdb.block.cache.add COUNT : 0
1795088679.453	rocksdb.block.cache.add.failures COUNT : 0
1795088679.453	rocksdb.block.cache.index.miss COUNT : 0
1795088679.453	rocksdb.block.cache.index.hit COUNT : 0
1795088679.453	rocksdb.block.cache.index.add COUNT : 0
1795088679.453	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795088679.453	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795088679.453	rocksdb.block.cache.filter.miss COUNT : 0
1795088679.453	rocksdb.block.cache.filter.hit COUNT : 0
1795088679.453	rocksdb.block.cache.filter.add COUNT : 0
1795088679.453	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795088679.453	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795088679.453	rocksdb.block.cache.data.miss COUNT : 208709869
1795088679.453	rocksdb.block.cache.data.hit COUNT : 0
1795088679.453	rocksdb.block.cache.data.add COUNT : 0
1795088679.453	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795088679.453	rocksdb.block.cache.bytes.read COUNT : 0
1795088679.453	rocksdb.block.cache.bytes.write COUNT : 0
1795088679.453	rocksdb.bloom.filter.useful COUNT : 0
1795088679.453	rocksdb.bloom.filter.full.positive COUNT : 0
1795088679.453	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795088679.453	rocksdb.bloom.filter.micros COUNT : 0
1795088679.453	rocksdb.persistent.cache.hit COUNT : 0
1795088679.453	rocksdb.persistent.cache.miss COUNT : 0
1795088679.453	rocksdb.sim.block.cache.hit COUNT : 0
1795088679.453	rocksdb.sim.block.cache.miss COUNT : 0
1795088679.453	rocksdb.memtable.hit COUNT : 0
1795088679.453	rocksdb.memtable.miss COUNT : 0
1795088679.453	rocksdb.l0.hit COUNT : 0
1795088679.453	rocksdb.l1.hit COUNT : 0
1795088679.453	rocksdb.l2andup.hit COUNT : 0
1795088679.453	rocksdb.compaction.key.drop.new COUNT : 31625165
1795088679.453	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795088679.453	rocksdb.compaction.key.drop.range_del COUNT : 0
1795088679.453	rocksdb.compaction.key.drop.user COUNT : 0
1795088679.453	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795088679.453	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795088679.453	rocksdb.compaction.cancelled COUNT : 0
1795088679.453	rocksdb.number.keys.written COUNT : 34383360
1795088679.453	rocksdb.number.keys.read COUNT : 0
1795088679.453	rocksdb.number.keys.updated COUNT : 0
1795088679.453	rocksdb.bytes.written COUNT : 36211652040
1795088679.453	rocksdb.bytes.read COUNT : 0
1795088679.453	rocksdb.number.db.seek COUNT : 0
1795088679.453	rocksdb.number.db.next COUNT : 0
1795088679.453	rocksdb.number.db.prev COUNT : 0
1795088679.453	rocksdb.number.db.seek.found COUNT : 0
1795088679.453	rocksdb.number.db.next.found COUNT : 0
1795088679.453	rocksdb.number.db.prev.found COUNT : 0
1795088679.453	rocksdb.db.iter.bytes.read COUNT : 0
1795088679.453	rocksdb.no.file.closes COUNT : 0
1795088679.453	rocksdb.no.file.opens COUNT : 1928150
1795088679.453	rocksdb.no.file.errors COUNT : 0
1795088679.453	rocksdb.l0.slowdown.micros COUNT : 0
1795088679.453	rocksdb.memtable.compaction.micros COUNT : 0
1795088679.453	rocksdb.l0.num.files.stall.micros COUNT : 0
1795088679.453	rocksdb.stall.micros COUNT : 32028360700
1795088679.453	rocksdb.db.mutex.wait.micros COUNT : 0
1795088679.453	rocksdb.rate.limit.delay.millis COUNT : 0
1795088679.453	rocksdb.num.iterators COUNT : 0
1795088679.453	rocksdb.number.multiget.get COUNT : 0
1795088679.453	rocksdb.number.multiget.keys.read COUNT : 0
1795088679.453	rocksdb.number.multiget.bytes.read COUNT : 0
1795088679.453	rocksdb.number.deletes.filtered COUNT : 0
1795088679.453	rocksdb.number.merge.failures COUNT : 0
1795088679.454	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795088679.454	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795088679.454	rocksdb.number.reseeks.iteration COUNT : 0
1795088679.454	rocksdb.getupdatessince.calls COUNT : 0
1795088679.454	rocksdb.block.cachecompressed.miss COUNT : 0
1795088679.454	rocksdb.block.cachecompressed.hit COUNT : 0
1795088679.454	rocksdb.block.cachecompressed.add COUNT : 0
1795088679.454	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795088679.454	rocksdb.wal.synced COUNT : 0
1795088679.454	rocksdb.wal.bytes COUNT : 36211652040
1795088679.454	rocksdb.write.self COUNT : 26285350
1795088679.454	rocksdb.write.other COUNT : 8098010
1795088679.454	rocksdb.write.timeout COUNT : 0
1795088679.454	rocksdb.write.wal COUNT : 34383360
1795088679.454	rocksdb.compact.read.bytes COUNT : 877312446023
1795088679.454	rocksdb.compact.write.bytes COUNT : 844078585569
1795088679.454	rocksdb.flush.write.bytes COUNT : 36308597626
1795088679.454	rocksdb.compact.read.marked.bytes COUNT : 0
1795088679.454	rocksdb.compact.read.periodic.bytes COUNT : 0
1795088679.454	rocksdb.compact.read.ttl.bytes COUNT : 0
1795088679.454	rocksdb.compact.write.marked.bytes COUNT : 0
1795088679.454	rocksdb.compact.write.periodic.bytes COUNT : 0
1795088679.454	rocksdb.compact.write.ttl.bytes COUNT : 0
1795088679.454	rocksdb.number.direct.load.table.properties COUNT : 0
1795088679.454	rocksdb.number.superversion_acquires COUNT : 0
1795088679.454	rocksdb.number.superversion_releases COUNT : 0
1795088679.454	rocksdb.number.superversion_cleanups COUNT : 0
1795088679.454	rocksdb.number.block.compressed COUNT : 0
1795088679.454	rocksdb.number.block.decompressed COUNT : 0
1795088679.454	rocksdb.number.block.not_compressed COUNT : 0
1795088679.454	rocksdb.merge.operation.time.nanos COUNT : 0
1795088679.454	rocksdb.filter.operation.time.nanos COUNT : 0
1795088679.454	rocksdb.row.cache.hit COUNT : 0
1795088679.454	rocksdb.row.cache.miss COUNT : 0
1795088679.454	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795088679.454	rocksdb.read.amp.total.read.bytes COUNT : 0
1795088679.454	rocksdb.number.rate_limiter.drains COUNT : 0
1795088679.454	rocksdb.number.iter.skip COUNT : 0
1795088679.454	rocksdb.blobdb.num.put COUNT : 0
1795088679.454	rocksdb.blobdb.num.write COUNT : 0
1795088679.454	rocksdb.blobdb.num.get COUNT : 0
1795088679.454	rocksdb.blobdb.num.multiget COUNT : 0
1795088679.454	rocksdb.blobdb.num.seek COUNT : 0
1795088679.454	rocksdb.blobdb.num.next COUNT : 0
1795088679.454	rocksdb.blobdb.num.prev COUNT : 0
1795088679.454	rocksdb.blobdb.num.keys.written COUNT : 0
1795088679.454	rocksdb.blobdb.num.keys.read COUNT : 0
1795088679.454	rocksdb.blobdb.bytes.written COUNT : 0
1795088679.454	rocksdb.blobdb.bytes.read COUNT : 0
1795088679.454	rocksdb.blobdb.write.inlined COUNT : 0
1795088679.454	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795088679.454	rocksdb.blobdb.write.blob COUNT : 0
1795088679.454	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795088679.454	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795088679.454	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795088679.454	rocksdb.blobdb.blob.file.synced COUNT : 0
1795088679.454	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795088679.454	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795088679.454	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795088679.454	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795088679.454	rocksdb.blobdb.gc.num.files COUNT : 0
1795088679.454	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795088679.454	rocksdb.blobdb.gc.failures COUNT : 0
1795088679.454	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795088679.454	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795088679.454	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795088679.454	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795088679.454	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795088679.454	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795088679.454	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795088679.454	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795088679.454	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795088679.454	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795088679.454	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795088679.454	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795088679.454	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795088679.454	rocksdb.txn.get.tryagain COUNT : 0
1795088679.454	rocksdb.number.multiget.keys.found COUNT : 0
1795088679.454	rocksdb.num.iterator.created COUNT : 0
1795088679.454	rocksdb.num.iterator.deleted COUNT : 0
1795088679.454	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795088679.454	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795088679.454	rocksdb.block.cache.compression.dict.add COUNT : 0
1795088679.454	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795088679.454	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795088679.454	rocksdb.block.cache.add.redundant COUNT : 0
1795088679.454	rocksdb.block.cache.index.add.redundant COUNT : 0
1795088679.454	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795088679.454	rocksdb.block.cache.data.add.redundant COUNT : 0
1795088679.454	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795088679.454	rocksdb.files.marked.trash COUNT : 0
1795088679.454	rocksdb.files.deleted.immediately COUNT : 1925483
1795088679.454	rocksdb.error.handler.bg.errro.count COUNT : 0
1795088679.454	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795088679.454	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795088679.454	rocksdb.error.handler.autoresume.count COUNT : 0
1795088679.454	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795088679.454	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795088679.454	rocksdb.memtable.payload.bytes.at.flush COUNT : 36033677440
1795088679.454	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1794176
1795088679.454	rocksdb.secondary.cache.hits COUNT : 0
1795088679.454	rocksdb.verify_checksum.read.bytes COUNT : 0
1795088679.454	rocksdb.backup.read.bytes COUNT : 0
1795088679.454	rocksdb.backup.write.bytes COUNT : 0
1795088679.454	rocksdb.remote.compact.read.bytes COUNT : 0
1795088679.454	rocksdb.remote.compact.write.bytes COUNT : 0
1795088679.454	rocksdb.hot.file.read.bytes COUNT : 0
1795088679.454	rocksdb.warm.file.read.bytes COUNT : 0
1795088679.454	rocksdb.cold.file.read.bytes COUNT : 0
1795088679.454	rocksdb.hot.file.read.count COUNT : 0
1795088679.454	rocksdb.warm.file.read.count COUNT : 0
1795088679.454	rocksdb.cold.file.read.count COUNT : 0
1795088679.454	rocksdb.last.level.read.bytes COUNT : 0
1795088679.454	rocksdb.last.level.read.count COUNT : 0
1795088679.454	rocksdb.non.last.level.read.bytes COUNT : 877601297903
1795088679.454	rocksdb.non.last.level.read.count COUNT : 216422469
1795088679.454	rocksdb.block.checksum.compute.count COUNT : 212566169
1795088679.454	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.db.write.micros P50 : 90.490955 P95 : 18132.833623 P99 : 66610.644927 P100 : 5932499.000000 COUNT : 34383360 SUM : 149128635728
1795088679.454	rocksdb.compaction.times.micros P50 : 96146.300276 P95 : 280898.432031 P99 : 726720.573882 P100 : 5478088.000000 COUNT : 299545 SUM : 35739971016
1795088679.454	rocksdb.compaction.times.cpu_micros P50 : 95345.094837 P95 : 274142.722392 P99 : 716612.086360 P100 : 5274399.000000 COUNT : 299545 SUM : 35317486362
1795088679.454	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.table.sync.micros P50 : 28662.282657 P95 : 245411.764706 P99 : 628324.896266 P100 : 1181701.000000 COUNT : 19853 SUM : 1103537265
1795088679.454	rocksdb.compaction.outfile.sync.micros P50 : 6915.246470 P95 : 14116.218703 P99 : 29752.203890 P100 : 4143182.000000 COUNT : 1872012 SUM : 17519332935
1795088679.454	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.manifest.file.sync.micros P50 : 492.913892 P95 : 18033.480176 P99 : 397733.944069 P100 : 4084450.000000 COUNT : 243142 SUM : 2760508505
1795088679.454	rocksdb.table.open.io.micros P50 : 231.868078 P95 : 381.504000 P99 : 578.611005 P100 : 871710.000000 COUNT : 1928150 SUM : 628196800
1795088679.454	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.read.block.compaction.micros P50 : 46.687687 P95 : 135.105382 P99 : 236.378496 P100 : 865159.000000 COUNT : 208709869 SUM : 16681364405
1795088679.454	rocksdb.read.block.get.micros P50 : 48.934745 P95 : 107.366767 P99 : 220.630343 P100 : 574051.000000 COUNT : 1928150 SUM : 141675765
1795088679.454	rocksdb.write.raw.block.micros P50 : 0.527289 P95 : 1.101615 P99 : 23.369556 P100 : 2104487.000000 COUNT : 215079332 SUM : 301502025
1795088679.454	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.numfiles.in.singlecompaction P50 : 5.846434 P95 : 9.585214 P99 : 9.926124 P100 : 49.000000 COUNT : 300312 SUM : 1886487
1795088679.454	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.db.write.stall P50 : 0.691419 P95 : 3845.538509 P99 : 17147.502208 P100 : 5929584.000000 COUNT : 26262963 SUM : 32031295032
1795088679.454	rocksdb.sst.read.micros P50 : 46.321071 P95 : 132.105170 P99 : 232.859035 P100 : 864661.000000 COUNT : 216422469 SUM : 16998952140
1795088679.454	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.bytes.per.write P50 : 1121.799625 P95 : 3562.318885 P99 : 4188.000000 P100 : 4188.000000 COUNT : 26285350 SUM : 36211652040
1795088679.454	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.db.flush.micros P50 : 40302.040494 P95 : 300145.645646 P99 : 666484.341637 P100 : 5619728.000000 COUNT : 19851 SUM : 1402258809
1795088679.454	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795088679.454	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1885720 SUM : 0
1795088679.454	
