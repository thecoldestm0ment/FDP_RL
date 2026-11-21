1795203306.051	Initializing RocksDB Options from the specified file
1795203306.052	Initializing RocksDB Options from command-line flags
1795203314.176	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795203314.176	Values:     1024 bytes each (512 bytes after compression)
1795203314.176	Entries:    11678215
1795203314.176	Prefix:    0 bytes
1795203314.176	Keys per prefix:    0
1795203314.176	RawSize:    11582.7 MB (estimated)
1795203314.176	FileSize:   5880.4 MB (estimated)
1795203314.176	Write rate: 0 bytes/second
1795203314.176	Read rate: 0 ops/second
1795203314.176	Compression: NoCompression
1795203314.176	Compression sampling rate: 0
1795203314.176	Memtablerep: SkipListFactory
1795203314.176	Perf Level: 1
1795203314.176	------------------------------------------------
1795203314.176	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795223066.248	overwrite    :    3379.445 micros/op 1182 ops/sec;    1.2 MB/s
1795223071.246	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795223071.246	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795223081.246	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795223091.248	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795223101.246	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795223111.246	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795223121.246	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795223121.252	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795223121.252	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795223121.252	
1795223121.252	Level Files Size(MB)
1795223121.252	--------------------
1795223121.252	  0        1        2
1795223121.252	  1        6        2
1795223121.252	  2       60       25
1795223121.252	  3      611      250
1795223121.252	  4     5543     2500
1795223121.252	  5    25840    11770
1795223121.252	  6        0        0
1795223121.252	
1795223121.252	
1795223121.252	
1795223121.252	** Compaction Stats [default] **
1795223121.252	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795223121.252	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795223121.252	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      23.0     23.0       0.0   1.0      0.0     36.0    653.78            408.70     12488    0.052     14K      6       0.0       0.0
1795223121.252	  L1      6/0    2.43 MB   1.0     38.5    23.0     15.5      38.5     23.0       0.0   1.7     28.8     28.8   1370.29           1335.46      6223    0.220     39M   7098       0.0       0.0
1795223121.252	  L2     60/0   24.63 MB   1.0    114.1    23.0     91.1     114.1     22.9       0.0   5.0     27.6     27.6   4228.40           4130.33     49199    0.086    115M    52K       0.0       0.0
1795223121.252	  L3    611/0   249.63 MB   1.0    148.0    22.9    125.1     147.5     22.4       0.0   6.4     28.2     28.1   5378.05           5256.17     52103    0.103    150M   524K       0.0       0.0
1795223121.253	  L4   5543/0    2.44 GB   1.0    149.8    22.4    127.4     144.8     17.4       0.0   6.5     28.4     27.5   5398.86           5276.84     51931    0.104    152M  5074K       0.0       0.0
1795223121.253	  L5  25840/0   11.49 GB   0.5     68.2    17.4     50.8      53.5      2.7       0.0   3.1     31.8     24.9   2196.91           2155.84     37132    0.059     69M    14M       0.0       0.0
1795223121.253	 Sum  32061/0   14.21 GB   0.0    518.7   108.7    410.0     521.5    111.4       0.0  22.7     27.6     27.8  19226.28          18563.34    209076    0.092    526M    20M       0.0       0.0
1795223121.253	 Int      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0      0.0      0.00              0.00         0    0.000       0      0       0.0       0.0
1795223121.253	
1795223121.253	** Compaction Stats [default] **
1795223121.253	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795223121.253	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795223121.253	 Low      0/0    0.00 KB   0.0    518.7   108.7    410.0     498.5     88.5       0.0   0.0     28.6     27.5  18573.94          18156.06    196590    0.094    526M    20M       0.0       0.0
1795223121.253	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      23.0     23.0       0.0   0.0      0.0     36.0    652.33            407.28     12484    0.052       0      0       0.0       0.0
1795223121.253	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    228.7      0.01              0.00         2    0.004       0      0       0.0       0.0
1795223121.253	
1795223121.253	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795223121.253	
1795223121.253	Uptime(secs): 19815.2 total, 3.2 interval
1795223121.253	Flush(GB): cumulative 22.966, interval 0.000
1795223121.253	AddFile(GB): cumulative 0.000, interval 0.000
1795223121.253	AddFile(Total Files): cumulative 0, interval 0
1795223121.253	AddFile(L0 Files): cumulative 0, interval 0
1795223121.253	AddFile(Keys): cumulative 0, interval 0
1795223121.253	Cumulative compaction: 521.46 GB write, 26.95 MB/s write, 518.74 GB read, 26.81 MB/s read, 19226.3 seconds
1795223121.253	Interval compaction: 0.00 GB write, 0.00 MB/s write, 0.00 GB read, 0.00 MB/s read, 0.0 seconds
1795223121.253	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 234427 slowdown for pending_compaction_bytes, 17 memtable_compaction, 5 memtable_slowdown, interval 0 total count
1795223121.253	Block cache LRUCache@0x56d6a0317a70#31899 capacity: 8.00 MB collections: 111 last_copies: 0 last_secs: 0.000101 secs_since: 3
1795223121.253	Block cache entry stats(count,size,portion): Misc(1,0.00 KB,0%)
1795223121.253	
1795223121.253	** File Read Latency Histogram By Level [default] **
1795223121.253	** Level 0 read latency histogram (micros):
1795223121.253	Count: 5896949 Average: 66.0614  StdDev: 475.38
1795223121.253	Min: 15  Median: 46.1190  Max: 139321
1795223121.253	Percentiles: P50: 46.12 P75: 66.41 P99: 228.41 P99.9: 439.62 P99.99: 1123.86
1795223121.253	------------------------------------------------------
1795223121.253	(      10,      15 ]        1   0.000%   0.000% 
1795223121.253	(      15,      22 ]        1   0.000%   0.000% 
1795223121.253	(      22,      34 ]        1   0.000%   0.000% 
1795223121.253	(      34,      51 ]  4135999  70.138%  70.138% ##############
1795223121.253	(      51,      76 ]   465281   7.890%  78.028% ##
1795223121.253	(      76,     110 ]   966788  16.395%  94.423% ###
1795223121.253	(     110,     170 ]   209762   3.557%  97.980% #
1795223121.253	(     170,     250 ]    82381   1.397%  99.377% 
1795223121.253	(     250,     380 ]    29167   0.495%  99.872% 
1795223121.253	(     380,     580 ]     5606   0.095%  99.967% 
1795223121.253	(     580,     870 ]     1158   0.020%  99.986% 
1795223121.253	(     870,    1300 ]      363   0.006%  99.993% 
1795223121.253	(    1300,    1900 ]      135   0.002%  99.995% 
1795223121.253	(    1900,    2900 ]       73   0.001%  99.996% 
1795223121.253	(    2900,    4400 ]       44   0.001%  99.997% 
1795223121.253	(    4400,    6600 ]        9   0.000%  99.997% 
1795223121.253	(    6600,    9900 ]        6   0.000%  99.997% 
1795223121.253	(    9900,   14000 ]        1   0.000%  99.997% 
1795223121.253	(   14000,   22000 ]        4   0.000%  99.997% 
1795223121.253	(   33000,   50000 ]       16   0.000%  99.997% 
1795223121.253	(   50000,   75000 ]       91   0.002%  99.999% 
1795223121.253	(   75000,  110000 ]       15   0.000%  99.999% 
1795223121.253	(  110000,  170000 ]       47   0.001% 100.000% 
1795223121.253	
1795223121.253	** Level 1 read latency histogram (micros):
1795223121.253	Count: 10187392 Average: 65.1542  StdDev: 253.61
1795223121.253	Min: 7  Median: 45.9415  Max: 139886
1795223121.253	Percentiles: P50: 45.94 P75: 63.36 P99: 218.81 P99.9: 379.73 P99.99: 1006.36
1795223121.253	------------------------------------------------------
1795223121.253	(       6,      10 ]       31   0.000%   0.000% 
1795223121.253	(      10,      15 ]       29   0.000%   0.001% 
1795223121.253	(      15,      22 ]       29   0.000%   0.001% 
1795223121.253	(      22,      34 ]       12   0.000%   0.001% 
1795223121.253	(      34,      51 ]  7251297  71.179%  71.180% ##############
1795223121.253	(      51,      76 ]   786973   7.725%  78.905% ##
1795223121.253	(      76,     110 ]  1622816  15.930%  94.835% ###
1795223121.253	(     110,     170 ]   344518   3.382%  98.217% #
1795223121.253	(     170,     250 ]   130807   1.284%  99.501% 
1795223121.253	(     250,     380 ]    40777   0.400%  99.901% 
1795223121.253	(     380,     580 ]     7607   0.075%  99.975% 
1795223121.253	(     580,     870 ]     1326   0.013%  99.989% 
1795223121.253	(     870,    1300 ]      477   0.005%  99.993% 
1795223121.253	(    1300,    1900 ]      207   0.002%  99.995% 
1795223121.253	(    1900,    2900 ]      101   0.001%  99.996% 
1795223121.253	(    2900,    4400 ]       90   0.001%  99.997% 
1795223121.253	(    4400,    6600 ]       13   0.000%  99.997% 
1795223121.253	(    6600,    9900 ]        5   0.000%  99.997% 
1795223121.253	(    9900,   14000 ]        7   0.000%  99.997% 
1795223121.253	(   14000,   22000 ]        1   0.000%  99.997% 
1795223121.253	(   22000,   33000 ]        1   0.000%  99.997% 
1795223121.253	(   33000,   50000 ]       28   0.000%  99.998% 
1795223121.253	(   50000,   75000 ]      124   0.001%  99.999% 
1795223121.253	(   75000,  110000 ]       48   0.000%  99.999% 
1795223121.253	(  110000,  170000 ]       93   0.001% 100.000% 
1795223121.254	
1795223121.254	** Level 2 read latency histogram (micros):
1795223121.254	Count: 30252579 Average: 65.7839  StdDev: 108.57
1795223121.254	Min: 5  Median: 46.1948  Max: 208155
1795223121.254	Percentiles: P50: 46.19 P75: 67.70 P99: 225.60 P99.9: 379.94 P99.99: 862.64
1795223121.254	------------------------------------------------------
1795223121.254	(       4,       6 ]       61   0.000%   0.000% 
1795223121.254	(       6,      10 ]     2315   0.008%   0.008% 
1795223121.254	(      10,      15 ]     1802   0.006%   0.014% 
1795223121.254	(      15,      22 ]      362   0.001%   0.015% 
1795223121.254	(      22,      34 ]       93   0.000%   0.015% 
1795223121.254	(      34,      51 ] 21080061  69.680%  69.696% ##############
1795223121.254	(      51,      76 ]  2402848   7.943%  77.638% ##
1795223121.254	(      76,     110 ]  5087482  16.817%  94.455% ###
1795223121.254	(     110,     170 ]  1080604   3.572%  98.027% #
1795223121.254	(     170,     250 ]   423669   1.400%  99.427% 
1795223121.254	(     250,     380 ]   143096   0.473%  99.900% 
1795223121.254	(     380,     580 ]    23348   0.077%  99.977% 
1795223121.254	(     580,     870 ]     3912   0.013%  99.990% 
1795223121.254	(     870,    1300 ]     1345   0.004%  99.995% 
1795223121.254	(    1300,    1900 ]      594   0.002%  99.997% 
1795223121.254	(    1900,    2900 ]      421   0.001%  99.998% 
1795223121.254	(    2900,    4400 ]      305   0.001%  99.999% 
1795223121.254	(    4400,    6600 ]       55   0.000%  99.999% 
1795223121.254	(    6600,    9900 ]       24   0.000%  99.999% 
1795223121.254	(    9900,   14000 ]       12   0.000%  99.999% 
1795223121.254	(   14000,   22000 ]        9   0.000%  99.999% 
1795223121.254	(   22000,   33000 ]       12   0.000% 100.000% 
1795223121.254	(   33000,   50000 ]       80   0.000% 100.000% 
1795223121.254	(   50000,   75000 ]      433   0.001% 100.001% 
1795223121.254	(   75000,  110000 ]       82   0.000% 100.001% 
1795223121.254	(  110000,  170000 ]      181   0.001% 100.002% 
1795223121.254	(  170000,  250000 ]        8   0.000% 100.002% 
1795223121.254	
1795223121.254	** Level 3 read latency histogram (micros):
1795223121.254	Count: 39142254 Average: 65.9832  StdDev: 68.36
1795223121.254	Min: 5  Median: 46.2494  Max: 209578
1795223121.254	Percentiles: P50: 46.25 P75: 68.60 P99: 226.35 P99.9: 374.59 P99.99: 823.33
1795223121.254	------------------------------------------------------
1795223121.254	(       4,       6 ]       47   0.000%   0.000% 
1795223121.254	(       6,      10 ]     1369   0.003%   0.004% 
1795223121.254	(      10,      15 ]      999   0.003%   0.006% 
1795223121.254	(      15,      22 ]      295   0.001%   0.007% 
1795223121.254	(      22,      34 ]       79   0.000%   0.007% 
1795223121.254	(      34,      51 ] 27157454  69.381%  69.389% ##############
1795223121.254	(      51,      76 ]  3119297   7.969%  77.358% ##
1795223121.254	(      76,     110 ]  6595841  16.851%  94.209% ###
1795223121.254	(     110,     170 ]  1445116   3.692%  97.901% #
1795223121.254	(     170,     250 ]   610895   1.561%  99.461% 
1795223121.254	(     250,     380 ]   179182   0.458%  99.919% 
1795223121.254	(     380,     580 ]    24532   0.063%  99.982% 
1795223121.254	(     580,     870 ]     3854   0.010%  99.992% 
1795223121.254	(     870,    1300 ]     1456   0.004%  99.995% 
1795223121.254	(    1300,    1900 ]      743   0.002%  99.997% 
1795223121.254	(    1900,    2900 ]      468   0.001%  99.998% 
1795223121.254	(    2900,    4400 ]      373   0.001%  99.999% 
1795223121.254	(    4400,    6600 ]       74   0.000% 100.000% 
1795223121.254	(    6600,    9900 ]       33   0.000% 100.000% 
1795223121.254	(    9900,   14000 ]       12   0.000% 100.000% 
1795223121.254	(   14000,   22000 ]       14   0.000% 100.000% 
1795223121.254	(   22000,   33000 ]        6   0.000% 100.000% 
1795223121.254	(   33000,   50000 ]      132   0.000% 100.000% 
1795223121.254	(   50000,   75000 ]      566   0.001% 100.001% 
1795223121.254	(   75000,  110000 ]       98   0.000% 100.002% 
1795223121.254	(  110000,  170000 ]      230   0.001% 100.002% 
1795223121.254	(  170000,  250000 ]        8   0.000% 100.002% 
1795223121.254	
1795223121.254	** Level 4 read latency histogram (micros):
1795223121.254	Count: 38346152 Average: 66.3988  StdDev: 96.69
1795223121.254	Min: 5  Median: 46.3973  Max: 211181
1795223121.254	Percentiles: P50: 46.40 P75: 70.82 P99: 229.14 P99.9: 375.05 P99.99: 849.30
1795223121.255	------------------------------------------------------
1795223121.255	(       4,       6 ]       41   0.000%   0.000% 
1795223121.255	(       6,      10 ]     1434   0.004%   0.004% 
1795223121.255	(      10,      15 ]     1032   0.003%   0.007% 
1795223121.255	(      15,      22 ]      293   0.001%   0.007% 
1795223121.255	(      22,      34 ]       84   0.000%   0.008% 
1795223121.255	(      34,      51 ] 26287346  68.553%  68.560% ##############
1795223121.255	(      51,      76 ]  3114784   8.123%  76.683% ##
1795223121.255	(      76,     110 ]  6603015  17.219%  93.903% ###
1795223121.255	(     110,     170 ]  1485907   3.875%  97.778% #
1795223121.255	(     170,     250 ]   634109   1.654%  99.431% 
1795223121.255	(     250,     380 ]   186879   0.487%  99.919% 
1795223121.255	(     380,     580 ]    23677   0.062%  99.980% 
1795223121.255	(     580,     870 ]     4002   0.010%  99.991% 
1795223121.255	(     870,    1300 ]     1709   0.004%  99.995% 
1795223121.255	(    1300,    1900 ]      797   0.002%  99.997% 
1795223121.255	(    1900,    2900 ]      517   0.001%  99.999% 
1795223121.255	(    2900,    4400 ]      433   0.001% 100.000% 
1795223121.255	(    4400,    6600 ]       96   0.000% 100.000% 
1795223121.255	(    6600,    9900 ]       49   0.000% 100.000% 
1795223121.255	(    9900,   14000 ]       24   0.000% 100.000% 
1795223121.255	(   14000,   22000 ]        9   0.000% 100.000% 
1795223121.255	(   22000,   33000 ]       12   0.000% 100.000% 
1795223121.255	(   33000,   50000 ]       81   0.000% 100.000% 
1795223121.255	(   50000,   75000 ]      523   0.001% 100.002% 
1795223121.255	(   75000,  110000 ]       86   0.000% 100.002% 
1795223121.255	(  110000,  170000 ]      210   0.001% 100.003% 
1795223121.255	(  170000,  250000 ]        5   0.000% 100.003% 
1795223121.255	
1795223121.255	** Level 5 read latency histogram (micros):
1795223121.255	Count: 13555599 Average: 65.1412  StdDev: 277.97
1795223121.255	Min: 6  Median: 46.0779  Max: 203729
1795223121.255	Percentiles: P50: 46.08 P75: 63.70 P99: 228.45 P99.9: 398.52 P99.99: 1872.81
1795223121.255	------------------------------------------------------
1795223121.255	(       4,       6 ]        6   0.000%   0.000% 
1795223121.255	(       6,      10 ]      638   0.005%   0.005% 
1795223121.255	(      10,      15 ]      633   0.005%   0.009% 
1795223121.255	(      15,      22 ]      126   0.001%   0.010% 
1795223121.255	(      22,      34 ]       49   0.000%   0.011% 
1795223121.255	(      34,      51 ]  9537947  70.362%  70.372% ##############
1795223121.255	(      51,      76 ]  1234482   9.107%  79.479% ##
1795223121.255	(      76,     110 ]  2054152  15.154%  94.633% ###
1795223121.255	(     110,     170 ]   434809   3.208%  97.840% #
1795223121.255	(     170,     250 ]   215144   1.587%  99.427% 
1795223121.255	(     250,     380 ]    63334   0.467%  99.895% 
1795223121.255	(     380,     580 ]     7811   0.058%  99.952% 
1795223121.255	(     580,     870 ]     2708   0.020%  99.972% 
1795223121.255	(     870,    1300 ]     1866   0.014%  99.986% 
1795223121.255	(    1300,    1900 ]      564   0.004%  99.990% 
1795223121.255	(    1900,    2900 ]      426   0.003%  99.993% 
1795223121.255	(    2900,    4400 ]      437   0.003%  99.997% 
1795223121.255	(    4400,    6600 ]      231   0.002%  99.998% 
1795223121.255	(    6600,    9900 ]      111   0.001%  99.999% 
1795223121.255	(    9900,   14000 ]       27   0.000%  99.999% 
1795223121.255	(   14000,   22000 ]        4   0.000%  99.999% 
1795223121.255	(   33000,   50000 ]       23   0.000%  99.999% 
1795223121.255	(   50000,   75000 ]      193   0.001% 100.001% 
1795223121.255	(   75000,  110000 ]       15   0.000% 100.001% 
1795223121.255	(  110000,  170000 ]       78   0.001% 100.002% 
1795223121.255	(  170000,  250000 ]        2   0.000% 100.002% 
1795223121.255	
1795223121.255	
1795223121.255	** DB Stats **
1795223121.255	Uptime(secs): 19815.2 total, 3.2 interval
1795223121.255	Cumulative writes: 23M writes, 23M keys, 18M commit groups, 1.3 writes per commit group, ingest: 22.91 GB, 1.18 MB/s
1795223121.255	Cumulative WAL: 23M writes, 0 syncs, 23356432.00 writes per sync, written: 22.91 GB, 1.18 MB/s
1795223121.255	Cumulative stall: 04:44:31.845 H:M:S, 86.2 percent
1795223121.255	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795223121.255	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795223121.255	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795223121.255	
1795223121.255	STATISTICS:
1795223121.255	rocksdb.block.cache.miss COUNT : 132486983
1795223121.255	rocksdb.block.cache.hit COUNT : 0
1795223121.255	rocksdb.block.cache.add COUNT : 0
1795223121.255	rocksdb.block.cache.add.failures COUNT : 0
1795223121.255	rocksdb.block.cache.index.miss COUNT : 0
1795223121.255	rocksdb.block.cache.index.hit COUNT : 0
1795223121.255	rocksdb.block.cache.index.add COUNT : 0
1795223121.255	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795223121.255	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795223121.255	rocksdb.block.cache.filter.miss COUNT : 0
1795223121.255	rocksdb.block.cache.filter.hit COUNT : 0
1795223121.255	rocksdb.block.cache.filter.add COUNT : 0
1795223121.255	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795223121.255	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795223121.255	rocksdb.block.cache.data.miss COUNT : 132486983
1795223121.255	rocksdb.block.cache.data.hit COUNT : 0
1795223121.255	rocksdb.block.cache.data.add COUNT : 0
1795223121.255	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795223121.255	rocksdb.block.cache.bytes.read COUNT : 0
1795223121.255	rocksdb.block.cache.bytes.write COUNT : 0
1795223121.255	rocksdb.bloom.filter.useful COUNT : 0
1795223121.255	rocksdb.bloom.filter.full.positive COUNT : 0
1795223121.255	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795223121.255	rocksdb.bloom.filter.micros COUNT : 0
1795223121.255	rocksdb.persistent.cache.hit COUNT : 0
1795223121.255	rocksdb.persistent.cache.miss COUNT : 0
1795223121.255	rocksdb.sim.block.cache.hit COUNT : 0
1795223121.255	rocksdb.sim.block.cache.miss COUNT : 0
1795223121.255	rocksdb.memtable.hit COUNT : 0
1795223121.255	rocksdb.memtable.miss COUNT : 0
1795223121.255	rocksdb.l0.hit COUNT : 0
1795223121.255	rocksdb.l1.hit COUNT : 0
1795223121.255	rocksdb.l2andup.hit COUNT : 0
1795223121.255	rocksdb.compaction.key.drop.new COUNT : 20598477
1795223121.255	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795223121.255	rocksdb.compaction.key.drop.range_del COUNT : 0
1795223121.255	rocksdb.compaction.key.drop.user COUNT : 0
1795223121.255	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795223121.255	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795223121.255	rocksdb.compaction.cancelled COUNT : 0
1795223121.255	rocksdb.number.keys.written COUNT : 23356432
1795223121.255	rocksdb.number.keys.read COUNT : 0
1795223121.255	rocksdb.number.keys.updated COUNT : 0
1795223121.255	rocksdb.bytes.written COUNT : 24604286328
1795223121.255	rocksdb.bytes.read COUNT : 0
1795223121.255	rocksdb.number.db.seek COUNT : 0
1795223121.255	rocksdb.number.db.next COUNT : 0
1795223121.255	rocksdb.number.db.prev COUNT : 0
1795223121.255	rocksdb.number.db.seek.found COUNT : 0
1795223121.255	rocksdb.number.db.next.found COUNT : 0
1795223121.256	rocksdb.number.db.prev.found COUNT : 0
1795223121.256	rocksdb.db.iter.bytes.read COUNT : 0
1795223121.256	rocksdb.no.file.closes COUNT : 0
1795223121.256	rocksdb.no.file.opens COUNT : 1224378
1795223121.256	rocksdb.no.file.errors COUNT : 0
1795223121.256	rocksdb.l0.slowdown.micros COUNT : 0
1795223121.256	rocksdb.memtable.compaction.micros COUNT : 0
1795223121.256	rocksdb.l0.num.files.stall.micros COUNT : 0
1795223121.256	rocksdb.stall.micros COUNT : 17071844617
1795223121.256	rocksdb.db.mutex.wait.micros COUNT : 0
1795223121.256	rocksdb.rate.limit.delay.millis COUNT : 0
1795223121.256	rocksdb.num.iterators COUNT : 0
1795223121.256	rocksdb.number.multiget.get COUNT : 0
1795223121.256	rocksdb.number.multiget.keys.read COUNT : 0
1795223121.256	rocksdb.number.multiget.bytes.read COUNT : 0
1795223121.256	rocksdb.number.deletes.filtered COUNT : 0
1795223121.256	rocksdb.number.merge.failures COUNT : 0
1795223121.256	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795223121.256	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795223121.256	rocksdb.number.reseeks.iteration COUNT : 0
1795223121.256	rocksdb.getupdatessince.calls COUNT : 0
1795223121.256	rocksdb.block.cachecompressed.miss COUNT : 0
1795223121.256	rocksdb.block.cachecompressed.hit COUNT : 0
1795223121.256	rocksdb.block.cachecompressed.add COUNT : 0
1795223121.256	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795223121.256	rocksdb.wal.synced COUNT : 0
1795223121.256	rocksdb.wal.bytes COUNT : 24604286328
1795223121.256	rocksdb.write.self COUNT : 18347610
1795223121.256	rocksdb.write.other COUNT : 5008822
1795223121.256	rocksdb.write.timeout COUNT : 0
1795223121.256	rocksdb.write.wal COUNT : 23356432
1795223121.256	rocksdb.compact.read.bytes COUNT : 556900708678
1795223121.256	rocksdb.compact.write.bytes COUNT : 535255390712
1795223121.256	rocksdb.flush.write.bytes COUNT : 24660705261
1795223121.256	rocksdb.compact.read.marked.bytes COUNT : 0
1795223121.256	rocksdb.compact.read.periodic.bytes COUNT : 0
1795223121.256	rocksdb.compact.read.ttl.bytes COUNT : 0
1795223121.256	rocksdb.compact.write.marked.bytes COUNT : 0
1795223121.256	rocksdb.compact.write.periodic.bytes COUNT : 0
1795223121.256	rocksdb.compact.write.ttl.bytes COUNT : 0
1795223121.256	rocksdb.number.direct.load.table.properties COUNT : 0
1795223121.256	rocksdb.number.superversion_acquires COUNT : 0
1795223121.256	rocksdb.number.superversion_releases COUNT : 0
1795223121.256	rocksdb.number.superversion_cleanups COUNT : 0
1795223121.256	rocksdb.number.block.compressed COUNT : 0
1795223121.256	rocksdb.number.block.decompressed COUNT : 0
1795223121.256	rocksdb.number.block.not_compressed COUNT : 0
1795223121.256	rocksdb.merge.operation.time.nanos COUNT : 0
1795223121.256	rocksdb.filter.operation.time.nanos COUNT : 0
1795223121.256	rocksdb.row.cache.hit COUNT : 0
1795223121.256	rocksdb.row.cache.miss COUNT : 0
1795223121.256	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795223121.256	rocksdb.read.amp.total.read.bytes COUNT : 0
1795223121.256	rocksdb.number.rate_limiter.drains COUNT : 0
1795223121.256	rocksdb.number.iter.skip COUNT : 0
1795223121.256	rocksdb.blobdb.num.put COUNT : 0
1795223121.256	rocksdb.blobdb.num.write COUNT : 0
1795223121.256	rocksdb.blobdb.num.get COUNT : 0
1795223121.256	rocksdb.blobdb.num.multiget COUNT : 0
1795223121.256	rocksdb.blobdb.num.seek COUNT : 0
1795223121.256	rocksdb.blobdb.num.next COUNT : 0
1795223121.256	rocksdb.blobdb.num.prev COUNT : 0
1795223121.256	rocksdb.blobdb.num.keys.written COUNT : 0
1795223121.256	rocksdb.blobdb.num.keys.read COUNT : 0
1795223121.256	rocksdb.blobdb.bytes.written COUNT : 0
1795223121.256	rocksdb.blobdb.bytes.read COUNT : 0
1795223121.256	rocksdb.blobdb.write.inlined COUNT : 0
1795223121.256	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795223121.256	rocksdb.blobdb.write.blob COUNT : 0
1795223121.256	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795223121.256	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795223121.256	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795223121.256	rocksdb.blobdb.blob.file.synced COUNT : 0
1795223121.256	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795223121.256	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795223121.256	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795223121.256	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795223121.256	rocksdb.blobdb.gc.num.files COUNT : 0
1795223121.256	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795223121.256	rocksdb.blobdb.gc.failures COUNT : 0
1795223121.256	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795223121.256	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795223121.256	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795223121.256	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795223121.256	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795223121.256	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795223121.256	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795223121.256	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795223121.256	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795223121.256	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795223121.256	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795223121.256	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795223121.256	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795223121.256	rocksdb.txn.get.tryagain COUNT : 0
1795223121.256	rocksdb.number.multiget.keys.found COUNT : 0
1795223121.256	rocksdb.num.iterator.created COUNT : 0
1795223121.256	rocksdb.num.iterator.deleted COUNT : 0
1795223121.256	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795223121.256	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795223121.256	rocksdb.block.cache.compression.dict.add COUNT : 0
1795223121.256	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795223121.256	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795223121.256	rocksdb.block.cache.add.redundant COUNT : 0
1795223121.256	rocksdb.block.cache.index.add.redundant COUNT : 0
1795223121.256	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795223121.256	rocksdb.block.cache.data.add.redundant COUNT : 0
1795223121.256	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795223121.256	rocksdb.files.marked.trash COUNT : 0
1795223121.256	rocksdb.files.deleted.immediately COUNT : 1217357
1795223121.256	rocksdb.error.handler.bg.errro.count COUNT : 0
1795223121.256	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795223121.256	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795223121.256	rocksdb.error.handler.autoresume.count COUNT : 0
1795223121.256	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795223121.256	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795223121.256	rocksdb.memtable.payload.bytes.at.flush COUNT : 24477048176
1795223121.256	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1919936
1795223121.256	rocksdb.secondary.cache.hits COUNT : 0
1795223121.256	rocksdb.verify_checksum.read.bytes COUNT : 0
1795223121.256	rocksdb.backup.read.bytes COUNT : 0
1795223121.256	rocksdb.backup.write.bytes COUNT : 0
1795223121.256	rocksdb.remote.compact.read.bytes COUNT : 0
1795223121.256	rocksdb.remote.compact.write.bytes COUNT : 0
1795223121.257	rocksdb.hot.file.read.bytes COUNT : 0
1795223121.257	rocksdb.warm.file.read.bytes COUNT : 0
1795223121.257	rocksdb.cold.file.read.bytes COUNT : 0
1795223121.257	rocksdb.hot.file.read.count COUNT : 0
1795223121.257	rocksdb.warm.file.read.count COUNT : 0
1795223121.257	rocksdb.cold.file.read.count COUNT : 0
1795223121.257	rocksdb.last.level.read.bytes COUNT : 0
1795223121.257	rocksdb.last.level.read.count COUNT : 0
1795223121.257	rocksdb.non.last.level.read.bytes COUNT : 557096265412
1795223121.257	rocksdb.non.last.level.read.count COUNT : 137384495
1795223121.257	rocksdb.block.checksum.compute.count COUNT : 134935739
1795223121.257	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.db.write.micros P50 : 27.704122 P95 : 12756.201965 P99 : 53563.135071 P100 : 5267662.000000 COUNT : 23356432 SUM : 78894984417
1795223121.257	rocksdb.compaction.times.micros P50 : 87767.689418 P95 : 191228.088160 P99 : 285678.346457 P100 : 6945842.000000 COUNT : 196590 SUM : 18573935978
1795223121.257	rocksdb.compaction.times.cpu_micros P50 : 85953.747468 P95 : 185709.725474 P99 : 268551.834862 P100 : 6945316.000000 COUNT : 196590 SUM : 18156061134
1795223121.257	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.table.sync.micros P50 : 26437.884379 P95 : 50107.361963 P99 : 161818.947368 P100 : 1062423.000000 COUNT : 12486 SUM : 379957983
1795223121.257	rocksdb.compaction.outfile.sync.micros P50 : 6198.921462 P95 : 13303.483778 P99 : 22395.253755 P100 : 1253684.000000 COUNT : 1187323 SUM : 8314759788
1795223121.257	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.manifest.file.sync.micros P50 : 487.226070 P95 : 709.998843 P99 : 89596.739130 P100 : 1226381.000000 COUNT : 167055 SUM : 409832713
1795223121.257	rocksdb.table.open.io.micros P50 : 240.195675 P95 : 444.525266 P99 : 645.540000 P100 : 212958.000000 COUNT : 1224378 SUM : 366591318
1795223121.257	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.read.block.compaction.micros P50 : 46.748717 P95 : 125.616175 P99 : 230.512510 P100 : 211186.000000 COUNT : 132486983 SUM : 8889769617
1795223121.257	rocksdb.read.block.get.micros P50 : 58.071719 P95 : 108.344927 P99 : 228.918939 P100 : 132741.000000 COUNT : 1224378 SUM : 83518837
1795223121.257	rocksdb.write.raw.block.micros P50 : 0.543887 P95 : 1.697338 P99 : 36.594495 P100 : 2024869.000000 COUNT : 136780243 SUM : 259657264
1795223121.257	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.numfiles.in.singlecompaction P50 : 5.712605 P95 : 9.570991 P99 : 9.922581 P100 : 61.000000 COUNT : 197130 SUM : 1192857
1795223121.257	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.db.write.stall P50 : 0.633266 P95 : 2899.551053 P99 : 13100.755554 P100 : 5267282.000000 COUNT : 18325209 SUM : 17073950212
1795223121.257	rocksdb.sst.read.micros P50 : 46.232194 P95 : 121.984929 P99 : 226.975092 P100 : 211181.000000 COUNT : 137384495 SUM : 9055686533
1795223121.257	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.bytes.per.write P50 : 1118.672486 P95 : 3428.119692 P99 : 4188.000000 P100 : 4188.000000 COUNT : 18347610 SUM : 24604286328
1795223121.257	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.db.flush.micros P50 : 44323.522137 P95 : 115884.931507 P99 : 225336.585366 P100 : 5151744.000000 COUNT : 12484 SUM : 652334185
1795223121.257	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795223121.257	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1192317 SUM : 0
1795223121.257	
