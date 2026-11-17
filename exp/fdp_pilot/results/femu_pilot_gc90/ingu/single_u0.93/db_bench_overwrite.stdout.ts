1794688493.619	Initializing RocksDB Options from the specified file
1794688493.619	Initializing RocksDB Options from command-line flags
1794688505.568	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1794688505.568	Values:     1024 bytes each (512 bytes after compression)
1794688505.568	Entries:    17191679
1794688505.568	Prefix:    0 bytes
1794688505.568	Keys per prefix:    0
1794688505.568	RawSize:    17051.1 MB (estimated)
1794688505.568	FileSize:   8656.7 MB (estimated)
1794688505.568	Write rate: 0 bytes/second
1794688505.568	Read rate: 0 ops/second
1794688505.568	Compression: NoCompression
1794688505.568	Compression sampling rate: 0
1794688505.568	Memtablerep: SkipListFactory
1794688505.568	Perf Level: 1
1794688505.568	------------------------------------------------
1794688505.568	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1794765894.519	overwrite    :    8979.675 micros/op 444 ops/sec;    0.4 MB/s
1794765899.509	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794765899.527	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765909.510	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765919.516	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765929.514	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765939.514	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765949.514	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765959.514	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765969.722	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765979.723	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765989.722	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794765999.724	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766009.725	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766019.725	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766029.725	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766039.726	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766049.728	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766059.728	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766069.728	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766079.728	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766089.729	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794766099.729	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794766099.733	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794766099.733	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794766099.733	
1794766099.733	Level Files Size(MB)
1794766099.733	--------------------
1794766099.733	  0        0        0
1794766099.733	  1        4        2
1794766099.733	  2       58       25
1794766099.733	  3      598      250
1794766099.733	  4     5714     2500
1794766099.733	  5    36042    17326
1794766099.733	  6        0        0
1794766099.733	
1794766099.756	
1794766099.756	
1794766099.756	** Compaction Stats [default] **
1794766099.756	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794766099.756	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794766099.756	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0      5.2   6725.92           2854.58     18309    0.367     22K      5       0.0       0.0
1794766099.756	  L1      4/0    2.02 MB   0.8     56.5    33.8     22.7      56.5     33.8       0.0   1.7      7.9      8.0   7277.63           5157.14      9132    0.797     57M   6977       0.0       0.0
1794766099.756	  L2     58/0   24.52 MB   1.0    164.8    33.8    130.9     164.7     33.8       0.0   4.9      6.9      6.9  24420.54          13060.27     72444    0.337    167M    51K       0.0       0.0
1794766099.756	  L3    598/0   249.59 MB   1.0    219.0    33.8    185.2     218.5     33.3       0.0   6.5      7.8      7.8  28830.26          16706.63     76623    0.376    222M   515K       0.0       0.0
1794766099.756	  L4   5714/0    2.44 GB   1.0    222.5    33.3    189.2     217.5     28.3       0.0   6.5      5.0      4.8  45961.52          38261.75     77206    0.595    225M  5051K       0.0       0.0
1794766099.756	  L5  36042/0   16.92 GB   0.7    145.1    28.3    116.8     119.5      2.7       0.0   4.2      5.2      4.3  28415.67          23237.99     62726    0.453    147M    26M       0.0       0.0
1794766099.756	 Sum  42416/0   19.63 GB   0.0    807.8   163.0    644.8     810.5    165.7       0.0  24.0      5.8      5.9 141631.55          99278.35    316440    0.448    820M    31M       0.0       0.0
1794766099.756	 Int      0/0    0.00 KB   0.0      0.1     0.0      0.1       0.1      0.0       0.0 132466564.0      5.6      4.8     26.36             25.66        49    0.538    146K    21K       0.0       0.0
1794766099.756	
1794766099.756	** Compaction Stats [default] **
1794766099.756	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794766099.756	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794766099.756	 Low      0/0    0.00 KB   0.0    807.8   163.0    644.8     776.7    131.9       0.0   0.0      6.1      5.9 134908.93          96426.80    298133    0.453    820M    31M       0.0       0.0
1794766099.756	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0      5.1   6722.62           2851.54     18306    0.367       0      0       0.0       0.0
1794766099.756	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    176.7      0.01              0.00         1    0.005       0      0       0.0       0.0
1794766099.756	
1794766099.757	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1794766099.757	
1794766099.757	Uptime(secs): 77606.1 total, 30.3 interval
1794766099.757	Flush(GB): cumulative 33.809, interval 0.000
1794766099.757	AddFile(GB): cumulative 0.000, interval 0.000
1794766099.757	AddFile(Total Files): cumulative 0, interval 0
1794766099.757	AddFile(L0 Files): cumulative 0, interval 0
1794766099.757	AddFile(Keys): cumulative 0, interval 0
1794766099.757	Cumulative compaction: 810.53 GB write, 10.69 MB/s write, 807.82 GB read, 10.66 MB/s read, 141631.6 seconds
1794766099.757	Interval compaction: 0.12 GB write, 4.17 MB/s write, 0.14 GB read, 4.88 MB/s read, 26.4 seconds
1794766099.757	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 353855 slowdown for pending_compaction_bytes, 9 memtable_compaction, 2 memtable_slowdown, interval 0 total count
1794766099.757	Block cache LRUCache@0x597570348a70#88199 capacity: 8.00 MB collections: 431 last_copies: 1 last_secs: 4.7e-05 secs_since: 90
1794766099.757	Block cache entry stats(count,size,portion): Misc(5,16.70 KB,0.203896%)
1794766099.757	
1794766099.757	** File Read Latency Histogram By Level [default] **
1794766099.757	** Level 0 read latency histogram (micros):
1794766099.757	Count: 8681298 Average: 183.5710  StdDev: 492.74
1794766099.757	Min: 12  Median: 64.5563  Max: 9019802
1794766099.757	Percentiles: P50: 64.56 P75: 95.61 P99: 754.42 P99.9: 6167.03 P99.99: 258941.08
1794766099.757	------------------------------------------------------
1794766099.757	(      10,      15 ]        1   0.000%   0.000% 
1794766099.757	(      15,      22 ]        5   0.000%   0.000% 
1794766099.757	(      22,      34 ]        4   0.000%   0.000% 
1794766099.757	(      34,      51 ]  2752181  31.702%  31.703% ######
1794766099.757	(      51,      76 ]  2929362  33.743%  65.446% #######
1794766099.757	(      76,     110 ]  1437747  16.561%  82.007% ###
1794766099.757	(     110,     170 ]   891219  10.266%  92.273% ##
1794766099.757	(     170,     250 ]   336512   3.876%  96.150% #
1794766099.757	(     250,     380 ]   147263   1.696%  97.846% 
1794766099.757	(     380,     580 ]    70448   0.811%  98.657% 
1794766099.757	(     580,     870 ]    49452   0.570%  99.227% 
1794766099.757	(     870,    1300 ]    27600   0.318%  99.545% 
1794766099.757	(    1300,    1900 ]    13300   0.153%  99.698% 
1794766099.757	(    1900,    2900 ]     9174   0.106%  99.804% 
1794766099.757	(    2900,    4400 ]     6062   0.070%  99.874% 
1794766099.757	(    4400,    6600 ]     2847   0.033%  99.906% 
1794766099.757	(    6600,    9900 ]     2014   0.023%  99.930% 
1794766099.757	(    9900,   14000 ]     1250   0.014%  99.944% 
1794766099.757	(   14000,   22000 ]     1113   0.013%  99.957% 
1794766099.757	(   22000,   33000 ]      638   0.007%  99.964% 
1794766099.757	(   33000,   50000 ]      436   0.005%  99.969% 
1794766099.757	(   50000,   75000 ]      328   0.004%  99.973% 
1794766099.757	(   75000,  110000 ]      549   0.006%  99.979% 
1794766099.757	(  110000,  170000 ]      409   0.005%  99.984% 
1794766099.757	(  170000,  250000 ]      481   0.006%  99.990% 
1794766099.757	(  250000,  380000 ]      507   0.006%  99.995% 
1794766099.757	(  380000,  570000 ]      214   0.002%  99.998% 
1794766099.757	(  570000,  860000 ]      125   0.001%  99.999% 
1794766099.757	(  860000, 1200000 ]       27   0.000% 100.000% 
1794766099.757	( 1200000, 1900000 ]       21   0.000% 100.000% 
1794766099.757	( 1900000, 2900000 ]        6   0.000% 100.000% 
1794766099.757	( 2900000, 4300000 ]        1   0.000% 100.000% 
1794766099.757	( 4300000, 6500000 ]        1   0.000% 100.000% 
1794766099.757	( 6500000, 9800000 ]        1   0.000% 100.000% 
1794766099.757	
1794766099.757	** Level 1 read latency histogram (micros):
1794766099.757	Count: 14939771 Average: 159.0746  StdDev: 91.55
1794766099.757	Min: 10  Median: 63.8925  Max: 3111102
1794766099.757	Percentiles: P50: 63.89 P75: 94.16 P99: 667.60 P99.9: 3912.24 P99.99: 198970.06
1794766099.757	------------------------------------------------------
1794766099.757	(       6,      10 ]       49   0.000%   0.000% 
1794766099.757	(      10,      15 ]      151   0.001%   0.001% 
1794766099.757	(      15,      22 ]       51   0.000%   0.002% 
1794766099.757	(      22,      34 ]       41   0.000%   0.002% 
1794766099.757	(      34,      51 ]  4865150  32.565%  32.567% #######
1794766099.757	(      51,      76 ]  5050302  33.804%  66.371% #######
1794766099.757	(      76,     110 ]  2413306  16.154%  82.525% ###
1794766099.757	(     110,     170 ]  1467945   9.826%  92.351% ##
1794766099.757	(     170,     250 ]   589393   3.945%  96.296% #
1794766099.757	(     250,     380 ]   257703   1.725%  98.021% 
1794766099.757	(     380,     580 ]   121563   0.814%  98.835% 
1794766099.757	(     580,     870 ]    81836   0.548%  99.382% 
1794766099.757	(     870,    1300 ]    43590   0.292%  99.674% 
1794766099.757	(    1300,    1900 ]    18310   0.123%  99.797% 
1794766099.757	(    1900,    2900 ]    10845   0.073%  99.869% 
1794766099.757	(    2900,    4400 ]     6811   0.046%  99.915% 
1794766099.757	(    4400,    6600 ]     3265   0.022%  99.937% 
1794766099.757	(    6600,    9900 ]     2345   0.016%  99.952% 
1794766099.757	(    9900,   14000 ]     1499   0.010%  99.962% 
1794766099.757	(   14000,   22000 ]     1077   0.007%  99.970% 
1794766099.757	(   22000,   33000 ]      631   0.004%  99.974% 
1794766099.757	(   33000,   50000 ]      450   0.003%  99.977% 
1794766099.757	(   50000,   75000 ]      375   0.003%  99.979% 
1794766099.757	(   75000,  110000 ]      824   0.006%  99.985% 
1794766099.757	(  110000,  170000 ]      509   0.003%  99.988% 
1794766099.757	(  170000,  250000 ]      707   0.005%  99.993% 
1794766099.757	(  250000,  380000 ]      637   0.004%  99.997% 
1794766099.757	(  380000,  570000 ]      350   0.002% 100.000% 
1794766099.757	(  570000,  860000 ]      157   0.001% 100.001% 
1794766099.757	(  860000, 1200000 ]       26   0.000% 100.001% 
1794766099.757	( 1200000, 1900000 ]       23   0.000% 100.001% 
1794766099.757	( 1900000, 2900000 ]       10   0.000% 100.001% 
1794766099.757	( 2900000, 4300000 ]        1   0.000% 100.001% 
1794766099.757	
1794766099.757	** Level 2 read latency histogram (micros):
1794766099.757	Count: 43687345 Average: 142.7986  StdDev: 90.46
1794766099.757	Min: 9  Median: 64.8517  Max: 3025969
1794766099.757	Percentiles: P50: 64.85 P75: 96.73 P99: 567.53 P99.9: 2566.95 P99.99: 78350.47
1794766099.757	------------------------------------------------------
1794766099.757	(       6,      10 ]      384   0.001%   0.001% 
1794766099.757	(      10,      15 ]     1564   0.004%   0.004% 
1794766099.757	(      15,      22 ]      317   0.001%   0.005% 
1794766099.757	(      22,      34 ]      230   0.001%   0.006% 
1794766099.757	(      34,      51 ] 13861495  31.729%  31.735% ######
1794766099.757	(      51,      76 ] 14401995  32.966%  64.701% #######
1794766099.757	(      76,     110 ]  7380765  16.895%  81.595% ###
1794766099.757	(     110,     170 ]  4455550  10.199%  91.794% ##
1794766099.757	(     170,     250 ]  1945274   4.453%  96.247% #
1794766099.757	(     250,     380 ]   878289   2.010%  98.257% 
1794766099.757	(     380,     580 ]   346185   0.792%  99.049% 
1794766099.757	(     580,     870 ]   207574   0.475%  99.525% 
1794766099.757	(     870,    1300 ]   106134   0.243%  99.767% 
1794766099.757	(    1300,    1900 ]    42503   0.097%  99.865% 
1794766099.757	(    1900,    2900 ]    23088   0.053%  99.918% 
1794766099.757	(    2900,    4400 ]    13867   0.032%  99.949% 
1794766099.757	(    4400,    6600 ]     6255   0.014%  99.964% 
1794766099.757	(    6600,    9900 ]     4561   0.010%  99.974% 
1794766099.757	(    9900,   14000 ]     2558   0.006%  99.980% 
1794766099.757	(   14000,   22000 ]     1779   0.004%  99.984% 
1794766099.757	(   22000,   33000 ]     1004   0.002%  99.986% 
1794766099.757	(   33000,   50000 ]      743   0.002%  99.988% 
1794766099.757	(   50000,   75000 ]      680   0.002%  99.990% 
1794766099.757	(   75000,  110000 ]     1904   0.004%  99.994% 
1794766099.757	(  110000,  170000 ]     1001   0.002%  99.996% 
1794766099.757	(  170000,  250000 ]     1642   0.004% 100.000% 
1794766099.757	(  250000,  380000 ]     1695   0.004% 100.004% 
1794766099.757	(  380000,  570000 ]      886   0.002% 100.006% 
1794766099.757	(  570000,  860000 ]      296   0.001% 100.007% 
1794766099.757	(  860000, 1200000 ]       53   0.000% 100.007% 
1794766099.757	( 1200000, 1900000 ]       35   0.000% 100.007% 
1794766099.757	( 1900000, 2900000 ]       11   0.000% 100.007% 
1794766099.757	( 2900000, 4300000 ]        2   0.000% 100.007% 
1794766099.757	
1794766099.757	** Level 3 read latency histogram (micros):
1794766099.757	Count: 57963782 Average: 167.2409  StdDev: 15.91
1794766099.757	Min: 9  Median: 66.0773  Max: 2612511
1794766099.757	Percentiles: P50: 66.08 P75: 99.23 P99: 578.99 P99.9: 3961.31 P99.99: 135152.64
1794766099.757	------------------------------------------------------
1794766099.757	(       6,      10 ]      374   0.001%   0.001% 
1794766099.757	(      10,      15 ]     1122   0.002%   0.003% 
1794766099.757	(      15,      22 ]      227   0.000%   0.003% 
1794766099.757	(      22,      34 ]      173   0.000%   0.003% 
1794766099.757	(      34,      51 ] 17114491  29.526%  29.529% ######
1794766099.757	(      51,      76 ] 19674457  33.943%  63.472% #######
1794766099.757	(      76,     110 ]  9778971  16.871%  80.343% ###
1794766099.757	(     110,     170 ]  6345978  10.948%  91.291% ##
1794766099.757	(     170,     250 ]  2797336   4.826%  96.117% #
1794766099.757	(     250,     380 ]  1220472   2.106%  98.223% 
1794766099.757	(     380,     580 ]   452830   0.781%  99.004% 
1794766099.757	(     580,     870 ]   256534   0.443%  99.447% 
1794766099.757	(     870,    1300 ]   128841   0.222%  99.669% 
1794766099.757	(    1300,    1900 ]    65019   0.112%  99.781% 
1794766099.757	(    1900,    2900 ]    47760   0.082%  99.863% 
1794766099.757	(    2900,    4400 ]    30010   0.052%  99.915% 
1794766099.757	(    4400,    6600 ]    13337   0.023%  99.938% 
1794766099.757	(    6600,    9900 ]     9335   0.016%  99.954% 
1794766099.757	(    9900,   14000 ]     5480   0.009%  99.964% 
1794766099.757	(   14000,   22000 ]     4596   0.008%  99.972% 
1794766099.757	(   22000,   33000 ]     2798   0.005%  99.976% 
1794766099.757	(   33000,   50000 ]     2074   0.004%  99.980% 
1794766099.757	(   50000,   75000 ]     1579   0.003%  99.983% 
1794766099.757	(   75000,  110000 ]     3279   0.006%  99.988% 
1794766099.757	(  110000,  170000 ]     2177   0.004%  99.992% 
1794766099.757	(  170000,  250000 ]     2992   0.005%  99.997% 
1794766099.757	(  250000,  380000 ]     3093   0.005% 100.003% 
1794766099.757	(  380000,  570000 ]     1365   0.002% 100.005% 
1794766099.757	(  570000,  860000 ]      594   0.001% 100.006% 
1794766099.757	(  860000, 1200000 ]      143   0.000% 100.006% 
1794766099.757	( 1200000, 1900000 ]      125   0.000% 100.007% 
1794766099.757	( 1900000, 2900000 ]       22   0.000% 100.007% 
1794766099.757	
1794766099.757	** Level 4 read latency histogram (micros):
1794766099.757	Count: 57620798 Average: 439.0117  StdDev: 65.72
1794766099.757	Min: 9  Median: 70.5424  Max: 3134306
1794766099.757	Percentiles: P50: 70.54 P75: 113.16 P99: 2102.05 P99.9: 49885.25 P99.99: 344499.46
1794766099.757	------------------------------------------------------
1794766099.757	(       6,      10 ]      439   0.001%   0.001% 
1794766099.757	(      10,      15 ]     1370   0.002%   0.003% 
1794766099.757	(      15,      22 ]      284   0.000%   0.004% 
1794766099.757	(      22,      34 ]      232   0.000%   0.004% 
1794766099.757	(      34,      51 ] 11211978  19.458%  19.462% ####
1794766099.757	(      51,      76 ] 22510104  39.066%  58.528% ########
1794766099.757	(      76,     110 ]  9120993  15.829%  74.358% ###
1794766099.757	(     110,     170 ]  7036853  12.212%  86.570% ##
1794766099.757	(     170,     250 ]  3299580   5.726%  92.296% #
1794766099.757	(     250,     380 ]  1666902   2.893%  95.189% #
1794766099.757	(     380,     580 ]   884654   1.535%  96.724% 
1794766099.757	(     580,     870 ]   669662   1.162%  97.887% 
1794766099.757	(     870,    1300 ]   372712   0.647%  98.533% 
1794766099.757	(    1300,    1900 ]   227793   0.395%  98.929% 
1794766099.757	(    1900,    2900 ]   203086   0.352%  99.281% 
1794766099.757	(    2900,    4400 ]   144995   0.252%  99.533% 
1794766099.757	(    4400,    6600 ]    73070   0.127%  99.660% 
1794766099.757	(    6600,    9900 ]    51411   0.089%  99.749% 
1794766099.757	(    9900,   14000 ]    31741   0.055%  99.804% 
1794766099.757	(   14000,   22000 ]    26861   0.047%  99.851% 
1794766099.757	(   22000,   33000 ]    16715   0.029%  99.880% 
1794766099.757	(   33000,   50000 ]    11822   0.021%  99.900% 
1794766099.757	(   50000,   75000 ]     9939   0.017%  99.917% 
1794766099.757	(   75000,  110000 ]    10928   0.019%  99.936% 
1794766099.757	(  110000,  170000 ]    11123   0.019%  99.956% 
1794766099.757	(  170000,  250000 ]    11220   0.019%  99.975% 
1794766099.757	(  250000,  380000 ]    11788   0.020%  99.996% 
1794766099.757	(  380000,  570000 ]     4959   0.009% 100.004% 
1794766099.757	(  570000,  860000 ]     2682   0.005% 100.009% 
1794766099.757	(  860000, 1200000 ]      879   0.002% 100.010% 
1794766099.757	( 1200000, 1900000 ]      709   0.001% 100.012% 
1794766099.757	( 1900000, 2900000 ]      136   0.000% 100.012% 
1794766099.757	( 2900000, 4300000 ]       10   0.000% 100.012% 
1794766099.757	
1794766099.757	** Level 5 read latency histogram (micros):
1794766099.757	Count: 31008700 Average: 465.6974  StdDev: 100.82
1794766099.757	Min: 9  Median: 69.6243  Max: 15584788
1794766099.757	Percentiles: P50: 69.62 P75: 108.29 P99: 2232.99 P99.9: 64766.62 P99.99: 370725.41
1794766099.757	------------------------------------------------------
1794766099.757	(       6,      10 ]      435   0.001%   0.001% 
1794766099.757	(      10,      15 ]     1874   0.006%   0.007% 
1794766099.757	(      15,      22 ]      419   0.001%   0.009% 
1794766099.757	(      22,      34 ]      334   0.001%   0.010% 
1794766099.757	(      34,      51 ]  5702425  18.390%  18.400% ####
1794766099.757	(      51,      76 ] 13153327  42.418%  60.818% ########
1794766099.757	(      76,     110 ]  4631060  14.935%  75.753% ###
1794766099.757	(     110,     170 ]  3384451  10.915%  86.667% ##
1794766099.757	(     170,     250 ]  1620049   5.224%  91.892% #
1794766099.757	(     250,     380 ]   839893   2.709%  94.600% #
1794766099.757	(     380,     580 ]   500712   1.615%  96.215% 
1794766099.757	(     580,     870 ]   430309   1.388%  97.603% 
1794766099.757	(     870,    1300 ]   255576   0.824%  98.427% 
1794766099.757	(    1300,    1900 ]   139922   0.451%  98.878% 
1794766099.757	(    1900,    2900 ]   113598   0.366%  99.244% 
1794766099.757	(    2900,    4400 ]    79957   0.258%  99.502% 
1794766099.757	(    4400,    6600 ]    39232   0.127%  99.629% 
1794766099.757	(    6600,    9900 ]    29605   0.095%  99.724% 
1794766099.757	(    9900,   14000 ]    18494   0.060%  99.784% 
1794766099.757	(   14000,   22000 ]    15592   0.050%  99.834% 
1794766099.757	(   22000,   33000 ]     9775   0.032%  99.866% 
1794766099.757	(   33000,   50000 ]     7204   0.023%  99.889% 
1794766099.757	(   50000,   75000 ]     5838   0.019%  99.908% 
1794766099.757	(   75000,  110000 ]     6519   0.021%  99.929% 
1794766099.757	(  110000,  170000 ]     6471   0.021%  99.950% 
1794766099.757	(  170000,  250000 ]     6464   0.021%  99.970% 
1794766099.757	(  250000,  380000 ]     6530   0.021%  99.992% 
1794766099.757	(  380000,  570000 ]     2782   0.009% 100.000% 
1794766099.757	(  570000,  860000 ]     1513   0.005% 100.005% 
1794766099.757	(  860000, 1200000 ]      505   0.002% 100.007% 
1794766099.757	( 1200000, 1900000 ]      413   0.001% 100.008% 
1794766099.757	( 1900000, 2900000 ]      115   0.000% 100.009% 
1794766099.757	( 2900000, 4300000 ]        8   0.000% 100.009% 
1794766099.757	( 4300000, 6500000 ]        1   0.000% 100.009% 
1794766099.757	( 6500000, 9800000 ]        1   0.000% 100.009% 
1794766099.757	( 14000000, 22000000 ]        1   0.000% 100.009% 
1794766099.757	
1794766099.757	
1794766099.757	** DB Stats **
1794766099.757	Uptime(secs): 77606.1 total, 30.3 interval
1794766099.757	Cumulative writes: 34M writes, 34M keys, 22M commit groups, 1.5 writes per commit group, ingest: 33.68 GB, 0.44 MB/s
1794766099.757	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.68 GB, 0.44 MB/s
1794766099.757	Cumulative stall: 20:06:56.715 H:M:S, 93.3 percent
1794766099.757	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1794766099.757	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1794766099.757	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1794766099.757	
1794766099.757	STATISTICS:
1794766099.757	rocksdb.block.cache.miss COUNT : 206312379
1794766099.757	rocksdb.block.cache.hit COUNT : 0
1794766099.757	rocksdb.block.cache.add COUNT : 0
1794766099.757	rocksdb.block.cache.add.failures COUNT : 0
1794766099.757	rocksdb.block.cache.index.miss COUNT : 0
1794766099.757	rocksdb.block.cache.index.hit COUNT : 0
1794766099.757	rocksdb.block.cache.index.add COUNT : 0
1794766099.757	rocksdb.block.cache.index.bytes.insert COUNT : 0
1794766099.757	rocksdb.block.cache.index.bytes.evict COUNT : 0
1794766099.757	rocksdb.block.cache.filter.miss COUNT : 0
1794766099.757	rocksdb.block.cache.filter.hit COUNT : 0
1794766099.757	rocksdb.block.cache.filter.add COUNT : 0
1794766099.757	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1794766099.757	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1794766099.757	rocksdb.block.cache.data.miss COUNT : 206312379
1794766099.757	rocksdb.block.cache.data.hit COUNT : 0
1794766099.757	rocksdb.block.cache.data.add COUNT : 0
1794766099.757	rocksdb.block.cache.data.bytes.insert COUNT : 0
1794766099.757	rocksdb.block.cache.bytes.read COUNT : 0
1794766099.757	rocksdb.block.cache.bytes.write COUNT : 0
1794766099.757	rocksdb.bloom.filter.useful COUNT : 0
1794766099.757	rocksdb.bloom.filter.full.positive COUNT : 0
1794766099.757	rocksdb.bloom.filter.full.true.positive COUNT : 0
1794766099.757	rocksdb.bloom.filter.micros COUNT : 0
1794766099.757	rocksdb.persistent.cache.hit COUNT : 0
1794766099.757	rocksdb.persistent.cache.miss COUNT : 0
1794766099.757	rocksdb.sim.block.cache.hit COUNT : 0
1794766099.757	rocksdb.sim.block.cache.miss COUNT : 0
1794766099.757	rocksdb.memtable.hit COUNT : 0
1794766099.757	rocksdb.memtable.miss COUNT : 0
1794766099.757	rocksdb.l0.hit COUNT : 0
1794766099.757	rocksdb.l1.hit COUNT : 0
1794766099.757	rocksdb.l2andup.hit COUNT : 0
1794766099.757	rocksdb.compaction.key.drop.new COUNT : 31627815
1794766099.757	rocksdb.compaction.key.drop.obsolete COUNT : 0
1794766099.757	rocksdb.compaction.key.drop.range_del COUNT : 0
1794766099.757	rocksdb.compaction.key.drop.user COUNT : 0
1794766099.757	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1794766099.757	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1794766099.757	rocksdb.compaction.cancelled COUNT : 0
1794766099.757	rocksdb.number.keys.written COUNT : 34383360
1794766099.757	rocksdb.number.keys.read COUNT : 0
1794766099.757	rocksdb.number.keys.updated COUNT : 0
1794766099.757	rocksdb.bytes.written COUNT : 36167540844
1794766099.757	rocksdb.bytes.read COUNT : 0
1794766099.757	rocksdb.number.db.seek COUNT : 0
1794766099.757	rocksdb.number.db.next COUNT : 0
1794766099.757	rocksdb.number.db.prev COUNT : 0
1794766099.757	rocksdb.number.db.seek.found COUNT : 0
1794766099.757	rocksdb.number.db.next.found COUNT : 0
1794766099.757	rocksdb.number.db.prev.found COUNT : 0
1794766099.757	rocksdb.db.iter.bytes.read COUNT : 0
1794766099.757	rocksdb.no.file.closes COUNT : 0
1794766099.757	rocksdb.no.file.opens COUNT : 1903301
1794766099.757	rocksdb.no.file.errors COUNT : 0
1794766099.757	rocksdb.l0.slowdown.micros COUNT : 0
1794766099.757	rocksdb.memtable.compaction.micros COUNT : 0
1794766099.757	rocksdb.l0.num.files.stall.micros COUNT : 0
1794766099.757	rocksdb.stall.micros COUNT : 72416714678
1794766099.758	rocksdb.db.mutex.wait.micros COUNT : 0
1794766099.758	rocksdb.rate.limit.delay.millis COUNT : 0
1794766099.758	rocksdb.num.iterators COUNT : 0
1794766099.758	rocksdb.number.multiget.get COUNT : 0
1794766099.758	rocksdb.number.multiget.keys.read COUNT : 0
1794766099.758	rocksdb.number.multiget.bytes.read COUNT : 0
1794766099.758	rocksdb.number.deletes.filtered COUNT : 0
1794766099.758	rocksdb.number.merge.failures COUNT : 0
1794766099.758	rocksdb.bloom.filter.prefix.checked COUNT : 0
1794766099.758	rocksdb.bloom.filter.prefix.useful COUNT : 0
1794766099.758	rocksdb.number.reseeks.iteration COUNT : 0
1794766099.758	rocksdb.getupdatessince.calls COUNT : 0
1794766099.758	rocksdb.block.cachecompressed.miss COUNT : 0
1794766099.758	rocksdb.block.cachecompressed.hit COUNT : 0
1794766099.758	rocksdb.block.cachecompressed.add COUNT : 0
1794766099.758	rocksdb.block.cachecompressed.add.failures COUNT : 0
1794766099.758	rocksdb.wal.synced COUNT : 0
1794766099.758	rocksdb.wal.bytes COUNT : 36167540844
1794766099.758	rocksdb.write.self COUNT : 22609417
1794766099.758	rocksdb.write.other COUNT : 11773943
1794766099.758	rocksdb.write.timeout COUNT : 0
1794766099.758	rocksdb.write.wal COUNT : 34383360
1794766099.758	rocksdb.compact.read.bytes COUNT : 867232996517
1794766099.758	rocksdb.compact.write.bytes COUNT : 833995703638
1794766099.758	rocksdb.flush.write.bytes COUNT : 36309492059
1794766099.758	rocksdb.compact.read.marked.bytes COUNT : 0
1794766099.758	rocksdb.compact.read.periodic.bytes COUNT : 0
1794766099.758	rocksdb.compact.read.ttl.bytes COUNT : 0
1794766099.758	rocksdb.compact.write.marked.bytes COUNT : 0
1794766099.758	rocksdb.compact.write.periodic.bytes COUNT : 0
1794766099.758	rocksdb.compact.write.ttl.bytes COUNT : 0
1794766099.758	rocksdb.number.direct.load.table.properties COUNT : 0
1794766099.758	rocksdb.number.superversion_acquires COUNT : 0
1794766099.758	rocksdb.number.superversion_releases COUNT : 0
1794766099.758	rocksdb.number.superversion_cleanups COUNT : 0
1794766099.758	rocksdb.number.block.compressed COUNT : 0
1794766099.758	rocksdb.number.block.decompressed COUNT : 0
1794766099.758	rocksdb.number.block.not_compressed COUNT : 0
1794766099.758	rocksdb.merge.operation.time.nanos COUNT : 0
1794766099.758	rocksdb.filter.operation.time.nanos COUNT : 0
1794766099.758	rocksdb.row.cache.hit COUNT : 0
1794766099.758	rocksdb.row.cache.miss COUNT : 0
1794766099.758	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1794766099.758	rocksdb.read.amp.total.read.bytes COUNT : 0
1794766099.758	rocksdb.number.rate_limiter.drains COUNT : 0
1794766099.758	rocksdb.number.iter.skip COUNT : 0
1794766099.758	rocksdb.blobdb.num.put COUNT : 0
1794766099.758	rocksdb.blobdb.num.write COUNT : 0
1794766099.758	rocksdb.blobdb.num.get COUNT : 0
1794766099.758	rocksdb.blobdb.num.multiget COUNT : 0
1794766099.758	rocksdb.blobdb.num.seek COUNT : 0
1794766099.758	rocksdb.blobdb.num.next COUNT : 0
1794766099.758	rocksdb.blobdb.num.prev COUNT : 0
1794766099.758	rocksdb.blobdb.num.keys.written COUNT : 0
1794766099.758	rocksdb.blobdb.num.keys.read COUNT : 0
1794766099.758	rocksdb.blobdb.bytes.written COUNT : 0
1794766099.758	rocksdb.blobdb.bytes.read COUNT : 0
1794766099.758	rocksdb.blobdb.write.inlined COUNT : 0
1794766099.758	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1794766099.758	rocksdb.blobdb.write.blob COUNT : 0
1794766099.758	rocksdb.blobdb.write.blob.ttl COUNT : 0
1794766099.758	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1794766099.758	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1794766099.758	rocksdb.blobdb.blob.file.synced COUNT : 0
1794766099.758	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1794766099.758	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1794766099.758	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1794766099.758	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1794766099.758	rocksdb.blobdb.gc.num.files COUNT : 0
1794766099.758	rocksdb.blobdb.gc.num.new.files COUNT : 0
1794766099.758	rocksdb.blobdb.gc.failures COUNT : 0
1794766099.758	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1794766099.758	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1794766099.758	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1794766099.758	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1794766099.758	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1794766099.758	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1794766099.758	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1794766099.758	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1794766099.758	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1794766099.758	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1794766099.758	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1794766099.758	rocksdb.txn.overhead.duplicate.key COUNT : 0
1794766099.758	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1794766099.758	rocksdb.txn.get.tryagain COUNT : 0
1794766099.758	rocksdb.number.multiget.keys.found COUNT : 0
1794766099.758	rocksdb.num.iterator.created COUNT : 0
1794766099.758	rocksdb.num.iterator.deleted COUNT : 0
1794766099.758	rocksdb.block.cache.compression.dict.miss COUNT : 0
1794766099.758	rocksdb.block.cache.compression.dict.hit COUNT : 0
1794766099.758	rocksdb.block.cache.compression.dict.add COUNT : 0
1794766099.758	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1794766099.758	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1794766099.758	rocksdb.block.cache.add.redundant COUNT : 0
1794766099.758	rocksdb.block.cache.index.add.redundant COUNT : 0
1794766099.758	rocksdb.block.cache.filter.add.redundant COUNT : 0
1794766099.758	rocksdb.block.cache.data.add.redundant COUNT : 0
1794766099.758	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1794766099.758	rocksdb.files.marked.trash COUNT : 0
1794766099.758	rocksdb.files.deleted.immediately COUNT : 1897722
1794766099.758	rocksdb.error.handler.bg.errro.count COUNT : 0
1794766099.758	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1794766099.758	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1794766099.758	rocksdb.error.handler.autoresume.count COUNT : 0
1794766099.758	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1794766099.758	rocksdb.error.handler.autoresume.success.count COUNT : 0
1794766099.758	rocksdb.memtable.payload.bytes.at.flush COUNT : 36033702592
1794766099.758	rocksdb.memtable.garbage.bytes.at.flush COUNT : 2013208
1794766099.758	rocksdb.secondary.cache.hits COUNT : 0
1794766099.758	rocksdb.verify_checksum.read.bytes COUNT : 0
1794766099.758	rocksdb.backup.read.bytes COUNT : 0
1794766099.758	rocksdb.backup.write.bytes COUNT : 0
1794766099.758	rocksdb.remote.compact.read.bytes COUNT : 0
1794766099.758	rocksdb.remote.compact.write.bytes COUNT : 0
1794766099.758	rocksdb.hot.file.read.bytes COUNT : 0
1794766099.758	rocksdb.warm.file.read.bytes COUNT : 0
1794766099.758	rocksdb.cold.file.read.bytes COUNT : 0
1794766099.758	rocksdb.hot.file.read.count COUNT : 0
1794766099.758	rocksdb.warm.file.read.count COUNT : 0
1794766099.758	rocksdb.cold.file.read.count COUNT : 0
1794766099.758	rocksdb.last.level.read.bytes COUNT : 0
1794766099.758	rocksdb.last.level.read.count COUNT : 0
1794766099.758	rocksdb.non.last.level.read.bytes COUNT : 867520509374
1794766099.758	rocksdb.non.last.level.read.count COUNT : 213925583
1794766099.758	rocksdb.block.checksum.compute.count COUNT : 210118981
1794766099.758	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.db.write.micros P50 : 3105.088830 P95 : 29745.406070 P99 : 127918.667592 P100 : 22788271.000000 COUNT : 34383360 SUM : 308507780622
1794766099.758	rocksdb.compaction.times.micros P50 : 338470.950084 P95 : 1223537.754114 P99 : 2515158.328056 P100 : 22148820.000000 COUNT : 298133 SUM : 134908927945
1794766099.758	rocksdb.compaction.times.cpu_micros P50 : 156410.708141 P95 : 1088930.826463 P99 : 2135934.791581 P100 : 16170177.000000 COUNT : 298133 SUM : 96426803220
1794766099.758	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.table.sync.micros P50 : 43287.079511 P95 : 729850.335570 P99 : 1780336.492891 P100 : 3750459.000000 COUNT : 18307 SUM : 2917055075
1794766099.758	rocksdb.compaction.outfile.sync.micros P50 : 8364.144354 P95 : 29761.804398 P99 : 356059.513031 P100 : 21759196.000000 COUNT : 1848712 SUM : 33100960246
1794766099.758	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.manifest.file.sync.micros P50 : 509.130468 P95 : 21376.360225 P99 : 396541.632653 P100 : 9403719.000000 COUNT : 239302 SUM : 3082661104
1794766099.758	rocksdb.table.open.io.micros P50 : 284.811200 P95 : 783.132237 P99 : 6854.655305 P100 : 2189298.000000 COUNT : 1903301 SUM : 2213395271
1794766099.758	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.read.block.compaction.micros P50 : 69.123289 P95 : 287.846965 P99 : 1148.135843 P100 : 15584913.000000 COUNT : 206312378 SUM : 58560397575
1794766099.758	rocksdb.read.block.get.micros P50 : 66.650106 P95 : 183.772809 P99 : 863.085035 P100 : 1801791.000000 COUNT : 1903301 SUM : 268556808
1794766099.758	rocksdb.write.raw.block.micros P50 : 0.531041 P95 : 1.430990 P99 : 14.974979 P100 : 18059112.000000 COUNT : 212606399 SUM : 338355796
1794766099.758	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.numfiles.in.singlecompaction P50 : 5.761508 P95 : 9.571606 P99 : 9.925841 P100 : 47.000000 COUNT : 298882 SUM : 1861634
1794766099.758	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.db.write.stall P50 : 935.144277 P95 : 10738.123250 P99 : 44025.022889 P100 : 22783237.000000 COUNT : 22588280 SUM : 72423872929
1794766099.758	rocksdb.sst.read.micros P50 : 67.547876 P95 : 277.379225 P99 : 1113.310378 P100 : 15584788.000000 COUNT : 213925583 SUM : 60104331087
1794766099.758	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.bytes.per.write P50 : 1163.626948 P95 : 3899.574808 P99 : 4188.000000 P100 : 4188.000000 COUNT : 22609417 SUM : 36167540844
1794766099.758	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.db.flush.micros P50 : 204525.212836 P95 : 1203833.671400 P99 : 2613687.315634 P100 : 22804091.000000 COUNT : 18306 SUM : 6722617402
1794766099.758	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794766099.758	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1860885 SUM : 0
1794766099.758	
