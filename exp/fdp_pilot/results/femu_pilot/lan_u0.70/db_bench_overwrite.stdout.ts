1794518283.135	Initializing RocksDB Options from the specified file
1794518283.136	Initializing RocksDB Options from command-line flags
1794518291.743	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1794518291.743	Values:     1024 bytes each (512 bytes after compression)
1794518291.743	Entries:    13675847
1794518291.743	Prefix:    0 bytes
1794518291.743	Keys per prefix:    0
1794518291.743	RawSize:    13564.0 MB (estimated)
1794518291.743	FileSize:   6886.3 MB (estimated)
1794518291.743	Write rate: 0 bytes/second
1794518291.743	Read rate: 0 ops/second
1794518291.743	Compression: NoCompression
1794518291.743	Compression sampling rate: 0
1794518291.743	Memtablerep: SkipListFactory
1794518291.743	Perf Level: 1
1794518291.743	------------------------------------------------
1794518291.743	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1794543159.279	overwrite    :    7258.878 micros/op 549 ops/sec;    0.5 MB/s
1794543164.279	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794543164.283	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543174.280	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543184.280	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543194.280	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543204.280	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543214.280	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543224.280	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543234.281	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543244.284	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543254.285	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543264.285	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543274.285	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794543284.286	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794543284.286	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794543284.286	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794543284.286	
1794543284.286	Level Files Size(MB)
1794543284.286	--------------------
1794543284.286	  0        0        0
1794543284.286	  1        7        2
1794543284.286	  2       63       25
1794543284.286	  3      605      250
1794543284.286	  4     5666     2500
1794543284.286	  5    30370    13778
1794543284.286	  6        0        0
1794543284.286	
1794543284.288	
1794543284.288	
1794543284.288	** Compaction Stats [default] **
1794543284.288	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794543284.288	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794543284.288	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      13.5     13.4       0.0   1.0      0.0      8.0   1727.32            377.78      7236    0.239     14K      4       0.0       0.0
1794543284.288	  L1      7/0    2.48 MB   1.0     22.5    13.4      9.1      22.5     13.5       0.0   1.7      9.8      9.8   2350.68            979.50      3603    0.652     22M   3733       0.0       0.0
1794543284.288	  L2     63/0   24.89 MB   1.0     65.8    13.5     52.3      65.7     13.4       0.0   4.9      7.4      7.4   9058.45           3162.41     28684    0.316     66M    26K       0.0       0.0
1794543284.288	  L3    605/0   249.92 MB   1.0     86.6    13.4     73.2      86.4     13.2       0.0   6.4      8.5      8.5  10396.32           4071.20     30493    0.341     87M   259K       0.0       0.0
1794543284.288	  L4   5666/0    2.44 GB   1.0     87.6    13.2     74.4      85.1     10.7       0.0   6.5      7.8      7.6  11452.31           4385.78     30547    0.375     88M  2490K       0.0       0.0
1794543284.288	  L5  30370/0   13.46 GB   0.6     45.8    10.7     35.0      37.7      2.7       0.0   3.5      8.4      6.9   5586.38           2269.85     23277    0.240     46M  8145K       0.0       0.0
1794543284.288	 Sum  36711/0   16.17 GB   0.0    308.3    64.2    244.1     311.0     66.9       0.0  23.1      7.8      7.8  40571.48          15246.52    123840    0.328    313M    10M       0.0       0.0
1794543284.288	 Int      0/0    0.00 KB   0.0      0.2     0.0      0.2       0.2      0.0       0.0 169903686.0     10.4      8.5     19.17              9.40        77    0.249    196K    36K       0.0       0.0
1794543284.288	
1794543284.288	** Compaction Stats [default] **
1794543284.288	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794543284.288	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794543284.288	 Low      0/0    0.00 KB   0.0    308.3    64.2    244.1     297.5     53.5       0.0   0.0      8.1      7.8  38844.92          14869.50    116606    0.333    313M    10M       0.0       0.0
1794543284.288	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      13.4     13.4       0.0   0.0      0.0      8.0   1726.55            377.03      7232    0.239       0      0       0.0       0.0
1794543284.288	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    185.7      0.01              0.00         2    0.004       0      0       0.0       0.0
1794543284.288	
1794543284.288	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1794543284.288	
1794543284.288	Uptime(secs): 25001.1 total, 23.7 interval
1794543284.288	Flush(GB): cumulative 13.447, interval 0.000
1794543284.288	AddFile(GB): cumulative 0.000, interval 0.000
1794543284.288	AddFile(Total Files): cumulative 0, interval 0
1794543284.288	AddFile(L0 Files): cumulative 0, interval 0
1794543284.288	AddFile(Keys): cumulative 0, interval 0
1794543284.288	Cumulative compaction: 311.00 GB write, 12.74 MB/s write, 308.29 GB read, 12.63 MB/s read, 40571.5 seconds
1794543284.288	Interval compaction: 0.16 GB write, 6.84 MB/s write, 0.19 GB read, 8.37 MB/s read, 19.2 seconds
1794543284.288	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 138638 slowdown for pending_compaction_bytes, 10 memtable_compaction, 2 memtable_slowdown, interval 0 total count
1794543284.299	Block cache LRUCache@0x6038900e3a70#49159 capacity: 8.00 MB collections: 139 last_copies: 1 last_secs: 4.8e-05 secs_since: 84
1794543284.299	Block cache entry stats(count,size,portion): Misc(5,16.73 KB,0.204277%)
1794543284.299	
1794543284.299	** File Read Latency Histogram By Level [default] **
1794543284.299	** Level 0 read latency histogram (micros):
1794543284.299	Count: 3454597 Average: 93.5068  StdDev: 591.74
1794543284.299	Min: 12  Median: 52.8263  Max: 2047629
1794543284.299	Percentiles: P50: 52.83 P75: 75.89 P99: 350.74 P99.9: 1169.25 P99.99: 18120.61
1794543284.299	------------------------------------------------------
1794543284.299	(      10,      15 ]        2   0.000%   0.000% 
1794543284.299	(      15,      22 ]        5   0.000%   0.000% 
1794543284.299	(      22,      34 ]        2   0.000%   0.000% 
1794543284.299	(      34,      51 ]  1658889  48.020%  48.020% ##########
1794543284.299	(      51,      76 ]   936328  27.104%  75.124% #####
1794543284.299	(      76,     110 ]   485378  14.050%  89.174% ###
1794543284.299	(     110,     170 ]   215299   6.232%  95.406% #
1794543284.299	(     170,     250 ]    93470   2.706%  98.112% #
1794543284.299	(     250,     380 ]    39589   1.146%  99.258% 
1794543284.299	(     380,     580 ]    13111   0.380%  99.637% 
1794543284.299	(     580,     870 ]     6642   0.192%  99.830% 
1794543284.299	(     870,    1300 ]     3488   0.101%  99.931% 
1794543284.299	(    1300,    1900 ]     1105   0.032%  99.963% 
1794543284.299	(    1900,    2900 ]      400   0.012%  99.974% 
1794543284.299	(    2900,    4400 ]      297   0.009%  99.983% 
1794543284.299	(    4400,    6600 ]       73   0.002%  99.985% 
1794543284.299	(    6600,    9900 ]       74   0.002%  99.987% 
1794543284.299	(    9900,   14000 ]       64   0.002%  99.989% 
1794543284.299	(   14000,   22000 ]       69   0.002%  99.991% 
1794543284.299	(   22000,   33000 ]        3   0.000%  99.991% 
1794543284.299	(   33000,   50000 ]        6   0.000%  99.991% 
1794543284.299	(   50000,   75000 ]        3   0.000%  99.991% 
1794543284.299	(   75000,  110000 ]      170   0.005%  99.996% 
1794543284.299	(  110000,  170000 ]       14   0.000%  99.997% 
1794543284.299	(  170000,  250000 ]       50   0.001%  99.998% 
1794543284.299	(  250000,  380000 ]       42   0.001%  99.999% 
1794543284.299	(  380000,  570000 ]       15   0.000% 100.000% 
1794543284.299	(  570000,  860000 ]        7   0.000% 100.000% 
1794543284.299	( 1900000, 2900000 ]        2   0.000% 100.000% 
1794543284.299	
1794543284.299	** Level 1 read latency histogram (micros):
1794543284.299	Count: 5955998 Average: 100.7348  StdDev: 140.50
1794543284.299	Min: 10  Median: 52.7517  Max: 2093982
1794543284.299	Percentiles: P50: 52.75 P75: 75.38 P99: 343.22 P99.9: 1083.19 P99.99: 84639.36
1794543284.299	------------------------------------------------------
1794543284.299	(       6,      10 ]       23   0.000%   0.000% 
1794543284.299	(      10,      15 ]       68   0.001%   0.002% 
1794543284.299	(      15,      22 ]       11   0.000%   0.002% 
1794543284.299	(      22,      34 ]       18   0.000%   0.002% 
1794543284.299	(      34,      51 ]  2862635  48.063%  48.065% ##########
1794543284.299	(      51,      76 ]  1644715  27.614%  75.680% ######
1794543284.299	(      76,     110 ]   797509  13.390%  89.070% ###
1794543284.299	(     110,     170 ]   363636   6.105%  95.175% #
1794543284.299	(     170,     250 ]   179572   3.015%  98.190% #
1794543284.299	(     250,     380 ]    67287   1.130%  99.320% 
1794543284.299	(     380,     580 ]    21857   0.367%  99.687% 
1794543284.299	(     580,     870 ]    10181   0.171%  99.858% 
1794543284.299	(     870,    1300 ]     5103   0.086%  99.943% 
1794543284.299	(    1300,    1900 ]     1471   0.025%  99.968% 
1794543284.299	(    1900,    2900 ]      521   0.009%  99.977% 
1794543284.299	(    2900,    4400 ]      271   0.005%  99.981% 
1794543284.299	(    4400,    6600 ]      101   0.002%  99.983% 
1794543284.299	(    6600,    9900 ]      113   0.002%  99.985% 
1794543284.299	(    9900,   14000 ]       92   0.002%  99.986% 
1794543284.299	(   14000,   22000 ]       42   0.001%  99.987% 
1794543284.299	(   22000,   33000 ]       13   0.000%  99.987% 
1794543284.299	(   33000,   50000 ]        7   0.000%  99.987% 
1794543284.299	(   50000,   75000 ]       22   0.000%  99.988% 
1794543284.299	(   75000,  110000 ]      488   0.008%  99.996% 
1794543284.299	(  110000,  170000 ]       29   0.000%  99.996% 
1794543284.299	(  170000,  250000 ]       79   0.001%  99.998% 
1794543284.299	(  250000,  380000 ]      108   0.002% 100.000% 
1794543284.299	(  380000,  570000 ]       55   0.001% 100.000% 
1794543284.299	(  570000,  860000 ]        9   0.000% 100.001% 
1794543284.299	(  860000, 1200000 ]        5   0.000% 100.001% 
1794543284.299	( 1200000, 1900000 ]        4   0.000% 100.001% 
1794543284.299	( 1900000, 2900000 ]        1   0.000% 100.001% 
1794543284.299	
1794543284.299	** Level 2 read latency histogram (micros):
1794543284.299	Count: 17433149 Average: 103.3871  StdDev: 77.67
1794543284.299	Min: 9  Median: 55.6301  Max: 2281364
1794543284.299	Percentiles: P50: 55.63 P75: 83.51 P99: 349.73 P99.9: 944.34 P99.99: 7431.89
1794543284.299	------------------------------------------------------
1794543284.299	(       6,      10 ]      143   0.001%   0.001% 
1794543284.299	(      10,      15 ]      621   0.004%   0.004% 
1794543284.299	(      15,      22 ]       72   0.000%   0.005% 
1794543284.299	(      22,      34 ]       46   0.000%   0.005% 
1794543284.299	(      34,      51 ]  7858610  45.079%  45.084% #########
1794543284.299	(      51,      76 ]  4627821  26.546%  71.630% #####
1794543284.299	(      76,     110 ]  2661510  15.267%  86.897% ###
1794543284.299	(     110,     170 ]  1249153   7.165%  94.062% #
1794543284.299	(     170,     250 ]   661290   3.793%  97.855% #
1794543284.299	(     250,     380 ]   260132   1.492%  99.348% 
1794543284.299	(     380,     580 ]    68762   0.394%  99.742% 
1794543284.299	(     580,     870 ]    25527   0.146%  99.888% 
1794543284.299	(     870,    1300 ]    11736   0.067%  99.956% 
1794543284.299	(    1300,    1900 ]     3428   0.020%  99.975% 
1794543284.299	(    1900,    2900 ]     1317   0.008%  99.983% 
1794543284.299	(    2900,    4400 ]      840   0.005%  99.988% 
1794543284.299	(    4400,    6600 ]      315   0.002%  99.990% 
1794543284.299	(    6600,    9900 ]      328   0.002%  99.991% 
1794543284.299	(    9900,   14000 ]      217   0.001%  99.993% 
1794543284.299	(   14000,   22000 ]       97   0.001%  99.993% 
1794543284.299	(   22000,   33000 ]       42   0.000%  99.993% 
1794543284.299	(   33000,   50000 ]       30   0.000%  99.994% 
1794543284.299	(   50000,   75000 ]       61   0.000%  99.994% 
1794543284.299	(   75000,  110000 ]     1293   0.007% 100.001% 
1794543284.299	(  110000,  170000 ]      158   0.001% 100.002% 
1794543284.299	(  170000,  250000 ]      343   0.002% 100.004% 
1794543284.299	(  250000,  380000 ]      301   0.002% 100.006% 
1794543284.299	(  380000,  570000 ]      140   0.001% 100.007% 
1794543284.299	(  570000,  860000 ]       25   0.000% 100.007% 
1794543284.299	(  860000, 1200000 ]        4   0.000% 100.007% 
1794543284.299	( 1200000, 1900000 ]        8   0.000% 100.007% 
1794543284.299	( 1900000, 2900000 ]        2   0.000% 100.007% 
1794543284.299	
1794543284.299	** Level 3 read latency histogram (micros):
1794543284.299	Count: 22919912 Average: 102.0748  StdDev: 98.61
1794543284.299	Min: 10  Median: 55.1492  Max: 2854877
1794543284.299	Percentiles: P50: 55.15 P75: 82.41 P99: 332.17 P99.9: 776.24 P99.99: 7400.43
1794543284.299	------------------------------------------------------
1794543284.299	(       6,      10 ]      156   0.001%   0.001% 
1794543284.299	(      10,      15 ]      493   0.002%   0.003% 
1794543284.299	(      15,      22 ]       72   0.000%   0.003% 
1794543284.299	(      22,      34 ]       68   0.000%   0.003% 
1794543284.299	(      34,      51 ] 10449254  45.590%  45.594% #########
1794543284.299	(      51,      76 ]  6084958  26.549%  72.143% #####
1794543284.299	(      76,     110 ]  3473483  15.155%  87.297% ###
1794543284.299	(     110,     170 ]  1602980   6.994%  94.291% #
1794543284.299	(     170,     250 ]   876234   3.823%  98.114% #
1794543284.299	(     250,     380 ]   321191   1.401%  99.516% 
1794543284.299	(     380,     580 ]    73174   0.319%  99.835% 
1794543284.299	(     580,     870 ]    22062   0.096%  99.931% 
1794543284.299	(     870,    1300 ]     8652   0.038%  99.969% 
1794543284.299	(    1300,    1900 ]     2496   0.011%  99.980% 
1794543284.299	(    1900,    2900 ]     1082   0.005%  99.984% 
1794543284.299	(    2900,    4400 ]      784   0.003%  99.988% 
1794543284.299	(    4400,    6600 ]      408   0.002%  99.990% 
1794543284.299	(    6600,    9900 ]      301   0.001%  99.991% 
1794543284.299	(    9900,   14000 ]      207   0.001%  99.992% 
1794543284.299	(   14000,   22000 ]      129   0.001%  99.992% 
1794543284.299	(   22000,   33000 ]       57   0.000%  99.993% 
1794543284.299	(   33000,   50000 ]       56   0.000%  99.993% 
1794543284.299	(   50000,   75000 ]      100   0.000%  99.993% 
1794543284.299	(   75000,  110000 ]     1621   0.007% 100.000% 
1794543284.299	(  110000,  170000 ]      179   0.001% 100.001% 
1794543284.299	(  170000,  250000 ]      491   0.002% 100.003% 
1794543284.299	(  250000,  380000 ]      485   0.002% 100.006% 
1794543284.299	(  380000,  570000 ]      152   0.001% 100.006% 
1794543284.299	(  570000,  860000 ]       47   0.000% 100.006% 
1794543284.299	(  860000, 1200000 ]        5   0.000% 100.006% 
1794543284.299	( 1200000, 1900000 ]        3   0.000% 100.006% 
1794543284.299	( 1900000, 2900000 ]        2   0.000% 100.006% 
1794543284.299	
1794543284.299	** Level 4 read latency histogram (micros):
1794543284.299	Count: 22562240 Average: 110.0228  StdDev: 92.57
1794543284.299	Min: 10  Median: 58.0566  Max: 8858990
1794543284.299	Percentiles: P50: 58.06 P75: 85.08 P99: 378.24 P99.9: 1174.94 P99.99: 9440.53
1794543284.299	------------------------------------------------------
1794543284.299	(       6,      10 ]      130   0.001%   0.001% 
1794543284.299	(      10,      15 ]      384   0.002%   0.002% 
1794543284.299	(      15,      22 ]       69   0.000%   0.003% 
1794543284.299	(      22,      34 ]       51   0.000%   0.003% 
1794543284.299	(      34,      51 ]  9417746  41.741%  41.744% ########
1794543284.299	(      51,      76 ]  6599250  29.249%  70.993% ######
1794543284.299	(      76,     110 ]  3384363  15.000%  85.993% ###
1794543284.299	(     110,     170 ]  1714214   7.598%  93.591% ##
1794543284.299	(     170,     250 ]   877120   3.888%  97.478% #
1794543284.299	(     250,     380 ]   348003   1.542%  99.021% 
1794543284.299	(     380,     580 ]   116580   0.517%  99.538% 
1794543284.299	(     580,     870 ]    62523   0.277%  99.815% 
1794543284.299	(     870,    1300 ]    27137   0.120%  99.935% 
1794543284.299	(    1300,    1900 ]     7229   0.032%  99.967% 
1794543284.299	(    1900,    2900 ]     2695   0.012%  99.979% 
1794543284.299	(    2900,    4400 ]     1458   0.006%  99.985% 
1794543284.299	(    4400,    6600 ]      610   0.003%  99.988% 
1794543284.299	(    6600,    9900 ]      490   0.002%  99.990% 
1794543284.299	(    9900,   14000 ]      268   0.001%  99.991% 
1794543284.299	(   14000,   22000 ]      154   0.001%  99.992% 
1794543284.299	(   22000,   33000 ]       65   0.000%  99.992% 
1794543284.299	(   33000,   50000 ]       35   0.000%  99.993% 
1794543284.299	(   50000,   75000 ]       87   0.000%  99.993% 
1794543284.299	(   75000,  110000 ]     1848   0.008% 100.001% 
1794543284.299	(  110000,  170000 ]      157   0.001% 100.002% 
1794543284.299	(  170000,  250000 ]      486   0.002% 100.004% 
1794543284.299	(  250000,  380000 ]      436   0.002% 100.006% 
1794543284.299	(  380000,  570000 ]      197   0.001% 100.007% 
1794543284.299	(  570000,  860000 ]       63   0.000% 100.007% 
1794543284.299	(  860000, 1200000 ]       19   0.000% 100.007% 
1794543284.299	( 1200000, 1900000 ]        2   0.000% 100.007% 
1794543284.299	( 1900000, 2900000 ]        3   0.000% 100.007% 
1794543284.299	( 6500000, 9800000 ]        1   0.000% 100.007% 
1794543284.299	
1794543284.299	** Level 5 read latency histogram (micros):
1794543284.299	Count: 9383726 Average: 122.2116  StdDev: 189.34
1794543284.299	Min: 9  Median: 61.9127  Max: 2486693
1794543284.299	Percentiles: P50: 61.91 P75: 84.71 P99: 661.40 P99.9: 1783.76 P99.99: 83303.77
1794543284.299	------------------------------------------------------
1794543284.299	(       6,      10 ]      127   0.001%   0.001% 
1794543284.299	(      10,      15 ]      677   0.007%   0.009% 
1794543284.299	(      15,      22 ]      108   0.001%   0.010% 
1794543284.299	(      22,      34 ]       82   0.001%   0.011% 
1794543284.299	(      34,      51 ]  3129738  33.353%  33.363% #######
1794543284.299	(      51,      76 ]  3576406  38.113%  71.476% ########
1794543284.299	(      76,     110 ]  1290671  13.754%  85.231% ###
1794543284.299	(     110,     170 ]   697774   7.436%  92.667% #
1794543284.299	(     170,     250 ]   352122   3.752%  96.419% #
1794543284.299	(     250,     380 ]   148614   1.584%  98.003% 
1794543284.299	(     380,     580 ]    76661   0.817%  98.820% 
1794543284.299	(     580,     870 ]    60241   0.642%  99.462% 
1794543284.299	(     870,    1300 ]    32841   0.350%  99.812% 
1794543284.299	(    1300,    1900 ]    10270   0.109%  99.921% 
1794543284.299	(    1900,    2900 ]     3554   0.038%  99.959% 
1794543284.299	(    2900,    4400 ]     1406   0.015%  99.974% 
1794543284.299	(    4400,    6600 ]      557   0.006%  99.980% 
1794543284.299	(    6600,    9900 ]      358   0.004%  99.984% 
1794543284.299	(    9900,   14000 ]      177   0.002%  99.986% 
1794543284.299	(   14000,   22000 ]       98   0.001%  99.987% 
1794543284.299	(   22000,   33000 ]       27   0.000%  99.987% 
1794543284.299	(   33000,   50000 ]       30   0.000%  99.987% 
1794543284.300	(   50000,   75000 ]       37   0.000%  99.988% 
1794543284.300	(   75000,  110000 ]      892   0.010%  99.997% 
1794543284.300	(  110000,  170000 ]       77   0.001%  99.998% 
1794543284.300	(  170000,  250000 ]      266   0.003% 100.001% 
1794543284.300	(  250000,  380000 ]      232   0.002% 100.003% 
1794543284.300	(  380000,  570000 ]       69   0.001% 100.004% 
1794543284.300	(  570000,  860000 ]       28   0.000% 100.004% 
1794543284.300	(  860000, 1200000 ]        7   0.000% 100.004% 
1794543284.300	( 1200000, 1900000 ]        1   0.000% 100.004% 
1794543284.300	( 1900000, 2900000 ]        2   0.000% 100.005% 
1794543284.300	
1794543284.300	
1794543284.300	** DB Stats **
1794543284.300	Uptime(secs): 25001.1 total, 24.0 interval
1794543284.300	Cumulative writes: 13M writes, 13M keys, 9616K commit groups, 1.4 writes per commit group, ingest: 13.40 GB, 0.55 MB/s
1794543284.300	Cumulative WAL: 13M writes, 0 syncs, 13675848.00 writes per sync, written: 13.40 GB, 0.55 MB/s
1794543284.300	Cumulative stall: 06:11:37.524 H:M:S, 89.2 percent
1794543284.300	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1794543284.300	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1794543284.300	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1794543284.300	
1794543284.300	STATISTICS:
1794543284.300	rocksdb.block.cache.miss COUNT : 78734075
1794543284.300	rocksdb.block.cache.hit COUNT : 0
1794543284.300	rocksdb.block.cache.add COUNT : 0
1794543284.300	rocksdb.block.cache.add.failures COUNT : 0
1794543284.300	rocksdb.block.cache.index.miss COUNT : 0
1794543284.300	rocksdb.block.cache.index.hit COUNT : 0
1794543284.300	rocksdb.block.cache.index.add COUNT : 0
1794543284.300	rocksdb.block.cache.index.bytes.insert COUNT : 0
1794543284.300	rocksdb.block.cache.index.bytes.evict COUNT : 0
1794543284.300	rocksdb.block.cache.filter.miss COUNT : 0
1794543284.300	rocksdb.block.cache.filter.hit COUNT : 0
1794543284.300	rocksdb.block.cache.filter.add COUNT : 0
1794543284.300	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1794543284.300	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1794543284.300	rocksdb.block.cache.data.miss COUNT : 78734075
1794543284.300	rocksdb.block.cache.data.hit COUNT : 0
1794543284.300	rocksdb.block.cache.data.add COUNT : 0
1794543284.300	rocksdb.block.cache.data.bytes.insert COUNT : 0
1794543284.300	rocksdb.block.cache.bytes.read COUNT : 0
1794543284.300	rocksdb.block.cache.bytes.write COUNT : 0
1794543284.300	rocksdb.bloom.filter.useful COUNT : 0
1794543284.300	rocksdb.bloom.filter.full.positive COUNT : 0
1794543284.300	rocksdb.bloom.filter.full.true.positive COUNT : 0
1794543284.300	rocksdb.bloom.filter.micros COUNT : 0
1794543284.300	rocksdb.persistent.cache.hit COUNT : 0
1794543284.300	rocksdb.persistent.cache.miss COUNT : 0
1794543284.300	rocksdb.sim.block.cache.hit COUNT : 0
1794543284.300	rocksdb.sim.block.cache.miss COUNT : 0
1794543284.300	rocksdb.memtable.hit COUNT : 0
1794543284.300	rocksdb.memtable.miss COUNT : 0
1794543284.300	rocksdb.l0.hit COUNT : 0
1794543284.300	rocksdb.l1.hit COUNT : 0
1794543284.300	rocksdb.l2andup.hit COUNT : 0
1794543284.300	rocksdb.compaction.key.drop.new COUNT : 10924729
1794543284.300	rocksdb.compaction.key.drop.obsolete COUNT : 0
1794543284.300	rocksdb.compaction.key.drop.range_del COUNT : 0
1794543284.300	rocksdb.compaction.key.drop.user COUNT : 0
1794543284.300	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1794543284.300	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1794543284.300	rocksdb.compaction.cancelled COUNT : 0
1794543284.300	rocksdb.number.keys.written COUNT : 13675848
1794543284.300	rocksdb.number.keys.read COUNT : 0
1794543284.300	rocksdb.number.keys.updated COUNT : 0
1794543284.300	rocksdb.bytes.written COUNT : 14392984164
1794543284.300	rocksdb.bytes.read COUNT : 0
1794543284.300	rocksdb.number.db.seek COUNT : 0
1794543284.300	rocksdb.number.db.next COUNT : 0
1794543284.300	rocksdb.number.db.prev COUNT : 0
1794543284.300	rocksdb.number.db.seek.found COUNT : 0
1794543284.300	rocksdb.number.db.next.found COUNT : 0
1794543284.300	rocksdb.number.db.prev.found COUNT : 0
1794543284.300	rocksdb.db.iter.bytes.read COUNT : 0
1794543284.300	rocksdb.no.file.closes COUNT : 0
1794543284.300	rocksdb.no.file.opens COUNT : 745470
1794543284.300	rocksdb.no.file.errors COUNT : 0
1794543284.300	rocksdb.l0.slowdown.micros COUNT : 0
1794543284.300	rocksdb.memtable.compaction.micros COUNT : 0
1794543284.300	rocksdb.l0.num.files.stall.micros COUNT : 0
1794543284.300	rocksdb.stall.micros COUNT : 22297524231
1794543284.300	rocksdb.db.mutex.wait.micros COUNT : 0
1794543284.300	rocksdb.rate.limit.delay.millis COUNT : 0
1794543284.300	rocksdb.num.iterators COUNT : 0
1794543284.300	rocksdb.number.multiget.get COUNT : 0
1794543284.300	rocksdb.number.multiget.keys.read COUNT : 0
1794543284.300	rocksdb.number.multiget.bytes.read COUNT : 0
1794543284.300	rocksdb.number.deletes.filtered COUNT : 0
1794543284.300	rocksdb.number.merge.failures COUNT : 0
1794543284.300	rocksdb.bloom.filter.prefix.checked COUNT : 0
1794543284.300	rocksdb.bloom.filter.prefix.useful COUNT : 0
1794543284.300	rocksdb.number.reseeks.iteration COUNT : 0
1794543284.300	rocksdb.getupdatessince.calls COUNT : 0
1794543284.300	rocksdb.block.cachecompressed.miss COUNT : 0
1794543284.300	rocksdb.block.cachecompressed.hit COUNT : 0
1794543284.300	rocksdb.block.cachecompressed.add COUNT : 0
1794543284.300	rocksdb.block.cachecompressed.add.failures COUNT : 0
1794543284.300	rocksdb.wal.synced COUNT : 0
1794543284.300	rocksdb.wal.bytes COUNT : 14392984164
1794543284.300	rocksdb.write.self COUNT : 9616571
1794543284.300	rocksdb.write.other COUNT : 4059277
1794543284.300	rocksdb.write.timeout COUNT : 0
1794543284.300	rocksdb.write.wal COUNT : 13675848
1794543284.300	rocksdb.compact.read.bytes COUNT : 330972465611
1794543284.300	rocksdb.compact.write.bytes COUNT : 319491705474
1794543284.300	rocksdb.flush.write.bytes COUNT : 14441179620
1794543284.300	rocksdb.compact.read.marked.bytes COUNT : 0
1794543284.300	rocksdb.compact.read.periodic.bytes COUNT : 0
1794543284.300	rocksdb.compact.read.ttl.bytes COUNT : 0
1794543284.300	rocksdb.compact.write.marked.bytes COUNT : 0
1794543284.300	rocksdb.compact.write.periodic.bytes COUNT : 0
1794543284.300	rocksdb.compact.write.ttl.bytes COUNT : 0
1794543284.300	rocksdb.number.direct.load.table.properties COUNT : 0
1794543284.300	rocksdb.number.superversion_acquires COUNT : 0
1794543284.300	rocksdb.number.superversion_releases COUNT : 0
1794543284.300	rocksdb.number.superversion_cleanups COUNT : 0
1794543284.300	rocksdb.number.block.compressed COUNT : 0
1794543284.300	rocksdb.number.block.decompressed COUNT : 0
1794543284.300	rocksdb.number.block.not_compressed COUNT : 0
1794543284.300	rocksdb.merge.operation.time.nanos COUNT : 0
1794543284.300	rocksdb.filter.operation.time.nanos COUNT : 0
1794543284.300	rocksdb.row.cache.hit COUNT : 0
1794543284.300	rocksdb.row.cache.miss COUNT : 0
1794543284.300	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1794543284.300	rocksdb.read.amp.total.read.bytes COUNT : 0
1794543284.300	rocksdb.number.rate_limiter.drains COUNT : 0
1794543284.300	rocksdb.number.iter.skip COUNT : 0
1794543284.300	rocksdb.blobdb.num.put COUNT : 0
1794543284.300	rocksdb.blobdb.num.write COUNT : 0
1794543284.300	rocksdb.blobdb.num.get COUNT : 0
1794543284.300	rocksdb.blobdb.num.multiget COUNT : 0
1794543284.300	rocksdb.blobdb.num.seek COUNT : 0
1794543284.300	rocksdb.blobdb.num.next COUNT : 0
1794543284.300	rocksdb.blobdb.num.prev COUNT : 0
1794543284.300	rocksdb.blobdb.num.keys.written COUNT : 0
1794543284.300	rocksdb.blobdb.num.keys.read COUNT : 0
1794543284.300	rocksdb.blobdb.bytes.written COUNT : 0
1794543284.300	rocksdb.blobdb.bytes.read COUNT : 0
1794543284.300	rocksdb.blobdb.write.inlined COUNT : 0
1794543284.300	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1794543284.300	rocksdb.blobdb.write.blob COUNT : 0
1794543284.300	rocksdb.blobdb.write.blob.ttl COUNT : 0
1794543284.300	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1794543284.300	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1794543284.300	rocksdb.blobdb.blob.file.synced COUNT : 0
1794543284.300	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1794543284.300	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1794543284.300	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1794543284.300	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1794543284.300	rocksdb.blobdb.gc.num.files COUNT : 0
1794543284.300	rocksdb.blobdb.gc.num.new.files COUNT : 0
1794543284.300	rocksdb.blobdb.gc.failures COUNT : 0
1794543284.300	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1794543284.300	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1794543284.300	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1794543284.300	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1794543284.300	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1794543284.300	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1794543284.300	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1794543284.300	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1794543284.300	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1794543284.300	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1794543284.300	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1794543284.300	rocksdb.txn.overhead.duplicate.key COUNT : 0
1794543284.300	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1794543284.300	rocksdb.txn.get.tryagain COUNT : 0
1794543284.300	rocksdb.number.multiget.keys.found COUNT : 0
1794543284.300	rocksdb.num.iterator.created COUNT : 0
1794543284.300	rocksdb.num.iterator.deleted COUNT : 0
1794543284.300	rocksdb.block.cache.compression.dict.miss COUNT : 0
1794543284.300	rocksdb.block.cache.compression.dict.hit COUNT : 0
1794543284.300	rocksdb.block.cache.compression.dict.add COUNT : 0
1794543284.300	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1794543284.300	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1794543284.300	rocksdb.block.cache.add.redundant COUNT : 0
1794543284.300	rocksdb.block.cache.index.add.redundant COUNT : 0
1794543284.300	rocksdb.block.cache.filter.add.redundant COUNT : 0
1794543284.300	rocksdb.block.cache.data.add.redundant COUNT : 0
1794543284.300	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1794543284.300	rocksdb.files.marked.trash COUNT : 0
1794543284.300	rocksdb.files.deleted.immediately COUNT : 723409
1794543284.300	rocksdb.error.handler.bg.errro.count COUNT : 0
1794543284.300	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1794543284.300	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1794543284.300	rocksdb.error.handler.autoresume.count COUNT : 0
1794543284.300	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1794543284.300	rocksdb.error.handler.autoresume.success.count COUNT : 0
1794543284.300	rocksdb.memtable.payload.bytes.at.flush COUNT : 14330929448
1794543284.300	rocksdb.memtable.garbage.bytes.at.flush COUNT : 997696
1794543284.300	rocksdb.secondary.cache.hits COUNT : 0
1794543284.300	rocksdb.verify_checksum.read.bytes COUNT : 0
1794543284.300	rocksdb.backup.read.bytes COUNT : 0
1794543284.300	rocksdb.backup.write.bytes COUNT : 0
1794543284.300	rocksdb.remote.compact.read.bytes COUNT : 0
1794543284.300	rocksdb.remote.compact.write.bytes COUNT : 0
1794543284.300	rocksdb.hot.file.read.bytes COUNT : 0
1794543284.300	rocksdb.warm.file.read.bytes COUNT : 0
1794543284.300	rocksdb.cold.file.read.bytes COUNT : 0
1794543284.300	rocksdb.hot.file.read.count COUNT : 0
1794543284.300	rocksdb.warm.file.read.count COUNT : 0
1794543284.300	rocksdb.cold.file.read.count COUNT : 0
1794543284.300	rocksdb.last.level.read.bytes COUNT : 0
1794543284.300	rocksdb.last.level.read.count COUNT : 0
1794543284.300	rocksdb.non.last.level.read.bytes COUNT : 331133070067
1794543284.300	rocksdb.non.last.level.read.count COUNT : 81715955
1794543284.300	rocksdb.block.checksum.compute.count COUNT : 80225015
1794543284.300	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.db.write.micros P50 : 2667.352346 P95 : 21884.731111 P99 : 88394.339152 P100 : 8778102.000000 COUNT : 13675848 SUM : 99235421107
1794543284.300	rocksdb.compaction.times.micros P50 : 202601.915185 P95 : 1022662.657343 P99 : 1673216.196674 P100 : 16462873.000000 COUNT : 116606 SUM : 38844916395
1794543284.300	rocksdb.compaction.times.cpu_micros P50 : 95221.687975 P95 : 368260.911736 P99 : 776269.532141 P100 : 13241937.000000 COUNT : 116606 SUM : 14869497385
1794543284.300	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.table.sync.micros P50 : 23701.486541 P95 : 227023.255814 P99 : 604489.285714 P100 : 3088208.000000 COUNT : 7234 SUM : 368401558
1794543284.300	rocksdb.compaction.outfile.sync.micros P50 : 5601.832332 P95 : 13609.439398 P99 : 65851.851852 P100 : 8904773.000000 COUNT : 709476 SUM : 6369026549
1794543284.300	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.manifest.file.sync.micros P50 : 493.548065 P95 : 835.974526 P99 : 107473.072917 P100 : 1585409.000000 COUNT : 88731 SUM : 420906596
1794543284.300	rocksdb.table.open.io.micros P50 : 242.887456 P95 : 509.405784 P99 : 1299.385007 P100 : 846913.000000 COUNT : 745470 SUM : 554894090
1794543284.300	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.read.block.compaction.micros P50 : 59.850709 P95 : 196.536553 P99 : 369.933626 P100 : 8859029.000000 COUNT : 78734075 SUM : 8256559503
1794543284.300	rocksdb.read.block.get.micros P50 : 60.777342 P95 : 142.437745 P99 : 369.133764 P100 : 322867.000000 COUNT : 745470 SUM : 67686701
1794543284.300	rocksdb.write.raw.block.micros P50 : 0.519570 P95 : 0.987182 P99 : 9.794070 P100 : 4576984.000000 COUNT : 81576122 SUM : 74930085
1794543284.300	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.numfiles.in.singlecompaction P50 : 5.683471 P95 : 9.565765 P99 : 9.925392 P100 : 67.000000 COUNT : 116942 SUM : 709095
1794543284.300	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.db.write.stall P50 : 0.918393 P95 : 7851.687679 P99 : 25931.864130 P100 : 7925532.000000 COUNT : 9594074 SUM : 22298528968
1794543284.300	rocksdb.sst.read.micros P50 : 56.834621 P95 : 192.187807 P99 : 367.602362 P100 : 8858990.000000 COUNT : 81715955 SUM : 8698154330
1794543284.300	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.bytes.per.write P50 : 1161.941634 P95 : 3690.773598 P99 : 4188.000000 P100 : 4188.000000 COUNT : 9616571 SUM : 14392984164
1794543284.300	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.300	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.db.flush.micros P50 : 92456.575682 P95 : 882186.440678 P99 : 1772333.333333 P100 : 7952549.000000 COUNT : 7232 SUM : 1726553516
1794543284.301	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794543284.301	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 708759 SUM : 0
1794543284.301	
