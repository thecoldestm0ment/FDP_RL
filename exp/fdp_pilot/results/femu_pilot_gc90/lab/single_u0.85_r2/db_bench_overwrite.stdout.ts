1795476343.914	Initializing RocksDB Options from the specified file
1795476343.914	Initializing RocksDB Options from command-line flags
1795476355.225	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795476355.225	Values:     1024 bytes each (512 bytes after compression)
1795476355.225	Entries:    15273953
1795476355.225	Prefix:    0 bytes
1795476355.225	Keys per prefix:    0
1795476355.225	RawSize:    15149.0 MB (estimated)
1795476355.225	FileSize:   7691.0 MB (estimated)
1795476355.225	Write rate: 0 bytes/second
1795476355.225	Read rate: 0 ops/second
1795476355.225	Compression: NoCompression
1795476355.225	Compression sampling rate: 0
1795476355.225	Memtablerep: SkipListFactory
1795476355.225	Perf Level: 1
1795476355.225	------------------------------------------------
1795476355.225	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795511964.114	overwrite    :    4653.910 micros/op 857 ops/sec;    0.9 MB/s
1795511969.115	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795511969.116	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795511979.114	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795511989.114	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795511999.164	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512009.191	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512019.207	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512029.207	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512039.207	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512049.207	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795512049.207	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795512049.207	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795512049.209	
1795512049.209	Level Files Size(MB)
1795512049.209	--------------------
1795512049.209	  0        1        2
1795512049.209	  1        5        2
1795512049.209	  2       58       25
1795512049.209	  3      591      250
1795512049.209	  4     5707     2500
1795512049.209	  5    32717    15394
1795512049.209	  6        0        0
1795512049.209	
1795512049.214	
1795512049.214	
1795512049.214	** Compaction Stats [default] **
1795512049.214	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795512049.214	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795512049.214	  L0      1/0    1.82 MB   0.7      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     25.5   1206.99            710.99     17714    0.068     30K      6       0.0       0.0
1795512049.214	  L1      5/0    2.43 MB   1.0     51.3    30.0     21.3      51.3     30.1       0.0   1.7     26.2     26.2   2005.24           1956.10      8842    0.227     52M   6805       0.0       0.0
1795512049.214	  L2     58/0   24.94 MB   1.0    153.2    30.1    123.2     153.2     30.0       0.0   5.1     25.5     25.5   6142.33           5992.16     64628    0.095    155M    51K       0.0       0.0
1795512049.214	  L3    591/0   250.00 MB   1.0    195.7    30.0    165.6     195.1     29.5       0.0   6.5     25.7     25.6   7805.86           7617.79     68324    0.114    198M   517K       0.0       0.0
1795512049.214	  L4   5707/0    2.44 GB   1.0    197.3    29.5    167.8     192.3     24.5       0.0   6.5     26.3     25.6   7694.31           7519.19     68420    0.112    200M  5066K       0.0       0.0
1795512049.214	  L5  32717/0   15.03 GB   0.6    115.5    24.5     91.0      93.7      2.7       0.0   3.8     29.2     23.7   4044.63           3953.27     53217    0.076    117M    22M       0.0       0.0
1795512049.214	 Sum  39079/0   17.75 GB   0.0    713.0   144.1    568.9     715.7    146.8       0.0  23.8     25.3     25.4  28899.37          27749.50    281145    0.103    724M    27M       0.0       0.0
1795512049.214	 Int      0/0    0.00 KB   0.0      0.6     0.1      0.5       0.5      0.0       0.0 503914312.0     24.2     20.1     23.96             23.71       229    0.105    574K    97K       0.0       0.0
1795512049.214	
1795512049.214	** Compaction Stats [default] **
1795512049.214	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795512049.214	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795512049.214	 Low      0/0    0.00 KB   0.0    713.0   144.1    568.9     685.7    116.8       0.0   0.0     26.4     25.4  27695.87          27041.98    263434    0.105    724M    27M       0.0       0.0
1795512049.214	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     25.6   1203.49            707.52     17709    0.068       0      0       0.0       0.0
1795512049.214	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    192.1      0.01              0.00         2    0.005       0      0       0.0       0.0
1795512049.214	
1795512049.214	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795512049.214	
1795512049.214	Uptime(secs): 35705.3 total, 46.3 interval
1795512049.214	Flush(GB): cumulative 30.038, interval 0.000
1795512049.214	AddFile(GB): cumulative 0.000, interval 0.000
1795512049.214	AddFile(Total Files): cumulative 0, interval 0
1795512049.214	AddFile(L0 Files): cumulative 0, interval 0
1795512049.214	AddFile(Keys): cumulative 0, interval 0
1795512049.214	Cumulative compaction: 715.74 GB write, 20.53 MB/s write, 713.03 GB read, 20.45 MB/s read, 28899.4 seconds
1795512049.214	Interval compaction: 0.47 GB write, 10.37 MB/s write, 0.57 GB read, 12.50 MB/s read, 24.0 seconds
1795512049.214	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 317097 slowdown for pending_compaction_bytes, 25 memtable_compaction, 4 memtable_slowdown, interval 80 total count
1795512049.214	Block cache LRUCache@0x61284896ca70#59095 capacity: 8.00 MB collections: 199 last_copies: 0 last_secs: 0.000145 secs_since: 46
1795512049.214	Block cache entry stats(count,size,portion): Misc(1,0.00 KB,0%)
1795512049.214	
1795512049.214	** File Read Latency Histogram By Level [default] **
1795512049.214	** Level 0 read latency histogram (micros):
1795512049.214	Count: 7721449 Average: 67.3248  StdDev: 188.11
1795512049.214	Min: 8  Median: 45.8646  Max: 371660
1795512049.214	Percentiles: P50: 45.86 P75: 66.19 P99: 227.24 P99.9: 432.19 P99.99: 1193.04
1795512049.214	------------------------------------------------------
1795512049.214	(       6,      10 ]        3   0.000%   0.000% 
1795512049.214	(      10,      15 ]        6   0.000%   0.000% 
1795512049.214	(      15,      22 ]        4   0.000%   0.000% 
1795512049.214	(      22,      34 ]        2   0.000%   0.000% 
1795512049.214	(      34,      51 ]  5531756  71.641%  71.642% ##############
1795512049.214	(      51,      76 ]   426752   5.527%  77.168% #
1795512049.214	(      76,     110 ]  1331304  17.242%  94.410% ###
1795512049.214	(     110,     170 ]   282871   3.663%  98.074% #
1795512049.214	(     170,     250 ]    99979   1.295%  99.368% 
1795512049.214	(     250,     380 ]    39330   0.509%  99.878% 
1795512049.214	(     380,     580 ]     6594   0.085%  99.963% 
1795512049.214	(     580,     870 ]     1562   0.020%  99.983% 
1795512049.214	(     870,    1300 ]      684   0.009%  99.992% 
1795512049.214	(    1300,    1900 ]      198   0.003%  99.995% 
1795512049.214	(    1900,    2900 ]       93   0.001%  99.996% 
1795512049.214	(    2900,    4400 ]       62   0.001%  99.997% 
1795512049.214	(    4400,    6600 ]       13   0.000%  99.997% 
1795512049.214	(    6600,    9900 ]       16   0.000%  99.997% 
1795512049.214	(    9900,   14000 ]       12   0.000%  99.997% 
1795512049.214	(   14000,   22000 ]        3   0.000%  99.997% 
1795512049.214	(   33000,   50000 ]        2   0.000%  99.997% 
1795512049.214	(   50000,   75000 ]       21   0.000%  99.998% 
1795512049.214	(   75000,  110000 ]       50   0.001%  99.998% 
1795512049.214	(  110000,  170000 ]       27   0.000%  99.999% 
1795512049.214	(  170000,  250000 ]       63   0.001%  99.999% 
1795512049.214	(  250000,  380000 ]       43   0.001% 100.000% 
1795512049.214	
1795512049.214	** Level 1 read latency histogram (micros):
1795512049.214	Count: 13573290 Average: 67.7829  StdDev: 50.39
1795512049.214	Min: 5  Median: 45.7619  Max: 373580
1795512049.214	Percentiles: P50: 45.76 P75: 63.24 P99: 220.46 P99.9: 407.06 P99.99: 1222.91
1795512049.214	------------------------------------------------------
1795512049.214	(       4,       6 ]        5   0.000%   0.000% 
1795512049.214	(       6,      10 ]       47   0.000%   0.000% 
1795512049.214	(      10,      15 ]       40   0.000%   0.001% 
1795512049.214	(      15,      22 ]       14   0.000%   0.001% 
1795512049.214	(      22,      34 ]        4   0.000%   0.001% 
1795512049.214	(      34,      51 ]  9808906  72.266%  72.267% ##############
1795512049.214	(      51,      76 ]   757912   5.584%  77.851% #
1795512049.214	(      76,     110 ]  2283244  16.822%  94.672% ###
1795512049.214	(     110,     170 ]   479893   3.536%  98.208% #
1795512049.214	(     170,     250 ]   170409   1.255%  99.464% 
1795512049.214	(     250,     380 ]    57795   0.426%  99.889% 
1795512049.214	(     380,     580 ]    10700   0.079%  99.968% 
1795512049.214	(     580,     870 ]     2161   0.016%  99.984% 
1795512049.214	(     870,    1300 ]      978   0.007%  99.991% 
1795512049.214	(    1300,    1900 ]      369   0.003%  99.994% 
1795512049.214	(    1900,    2900 ]      181   0.001%  99.995% 
1795512049.214	(    2900,    4400 ]      133   0.001%  99.996% 
1795512049.214	(    4400,    6600 ]       38   0.000%  99.997% 
1795512049.214	(    6600,    9900 ]       25   0.000%  99.997% 
1795512049.214	(    9900,   14000 ]       17   0.000%  99.997% 
1795512049.214	(   14000,   22000 ]       10   0.000%  99.997% 
1795512049.214	(   22000,   33000 ]        1   0.000%  99.997% 
1795512049.214	(   33000,   50000 ]        3   0.000%  99.997% 
1795512049.214	(   50000,   75000 ]       18   0.000%  99.997% 
1795512049.214	(   75000,  110000 ]      129   0.001%  99.998% 
1795512049.214	(  110000,  170000 ]       74   0.001%  99.999% 
1795512049.214	(  170000,  250000 ]      109   0.001%  99.999% 
1795512049.214	(  250000,  380000 ]      106   0.001% 100.000% 
1795512049.214	
1795512049.214	** Level 2 read latency histogram (micros):
1795512049.214	Count: 40620812 Average: 67.0610  StdDev: 23.36
1795512049.214	Min: 5  Median: 45.9172  Max: 549125
1795512049.214	Percentiles: P50: 45.92 P75: 67.12 P99: 226.88 P99.9: 376.78 P99.99: 989.82
1795512049.214	------------------------------------------------------
1795512049.214	(       4,       6 ]      314   0.001%   0.001% 
1795512049.214	(       6,      10 ]     3028   0.007%   0.008% 
1795512049.214	(      10,      15 ]     1111   0.003%   0.011% 
1795512049.214	(      15,      22 ]      240   0.001%   0.012% 
1795512049.214	(      22,      34 ]       74   0.000%   0.012% 
1795512049.214	(      34,      51 ] 28966140  71.309%  71.320% ##############
1795512049.214	(      51,      76 ]  2318760   5.708%  77.029% #
1795512049.214	(      76,     110 ]  7048417  17.352%  94.380% ###
1795512049.214	(     110,     170 ]  1470965   3.621%  98.002% #
1795512049.214	(     170,     250 ]   570369   1.404%  99.406% 
1795512049.214	(     250,     380 ]   205868   0.507%  99.913% 
1795512049.214	(     380,     580 ]    26536   0.065%  99.978% 
1795512049.214	(     580,     870 ]     4428   0.011%  99.989% 
1795512049.214	(     870,    1300 ]     1794   0.004%  99.993% 
1795512049.214	(    1300,    1900 ]      716   0.002%  99.995% 
1795512049.214	(    1900,    2900 ]      569   0.001%  99.996% 
1795512049.214	(    2900,    4400 ]      509   0.001%  99.998% 
1795512049.214	(    4400,    6600 ]      188   0.000%  99.998% 
1795512049.214	(    6600,    9900 ]       70   0.000%  99.998% 
1795512049.214	(    9900,   14000 ]       33   0.000%  99.998% 
1795512049.214	(   14000,   22000 ]       18   0.000%  99.998% 
1795512049.214	(   22000,   33000 ]        8   0.000%  99.998% 
1795512049.214	(   33000,   50000 ]        7   0.000%  99.998% 
1795512049.214	(   50000,   75000 ]       72   0.000%  99.999% 
1795512049.214	(   75000,  110000 ]      350   0.001%  99.999% 
1795512049.214	(  110000,  170000 ]      160   0.000% 100.000% 
1795512049.214	(  170000,  250000 ]      300   0.001% 100.001% 
1795512049.214	(  250000,  380000 ]      186   0.000% 100.001% 
1795512049.214	(  380000,  570000 ]        1   0.000% 100.001% 
1795512049.214	
1795512049.214	** Level 3 read latency histogram (micros):
1795512049.214	Count: 51776468 Average: 67.1707  StdDev: 79.30
1795512049.214	Min: 5  Median: 46.0039  Max: 444414
1795512049.214	Percentiles: P50: 46.00 P75: 70.08 P99: 223.81 P99.9: 371.94 P99.99: 877.39
1795512049.214	------------------------------------------------------
1795512049.214	(       4,       6 ]      422   0.001%   0.001% 
1795512049.214	(       6,      10 ]     2872   0.006%   0.006% 
1795512049.214	(      10,      15 ]     1063   0.002%   0.008% 
1795512049.214	(      15,      22 ]      290   0.001%   0.009% 
1795512049.214	(      22,      34 ]       82   0.000%   0.009% 
1795512049.214	(      34,      51 ] 36656324  70.797%  70.806% ##############
1795512049.214	(      51,      76 ]  2844605   5.494%  76.300% #
1795512049.214	(      76,     110 ]  9297812  17.958%  94.258% ####
1795512049.214	(     110,     170 ]  1956618   3.779%  98.037% #
1795512049.214	(     170,     250 ]   741292   1.432%  99.469% 
1795512049.214	(     250,     380 ]   238069   0.460%  99.929% 
1795512049.214	(     380,     580 ]    27416   0.053%  99.981% 
1795512049.214	(     580,     870 ]     4391   0.008%  99.990% 
1795512049.214	(     870,    1300 ]     1998   0.004%  99.994% 
1795512049.214	(    1300,    1900 ]      894   0.002%  99.996% 
1795512049.214	(    1900,    2900 ]      673   0.001%  99.997% 
1795512049.214	(    2900,    4400 ]      577   0.001%  99.998% 
1795512049.214	(    4400,    6600 ]      244   0.000%  99.998% 
1795512049.214	(    6600,    9900 ]       83   0.000%  99.999% 
1795512049.214	(    9900,   14000 ]       38   0.000%  99.999% 
1795512049.214	(   14000,   22000 ]       16   0.000%  99.999% 
1795512049.214	(   22000,   33000 ]        9   0.000%  99.999% 
1795512049.214	(   33000,   50000 ]        7   0.000%  99.999% 
1795512049.214	(   50000,   75000 ]      137   0.000%  99.999% 
1795512049.214	(   75000,  110000 ]      430   0.001% 100.000% 
1795512049.214	(  110000,  170000 ]      194   0.000% 100.000% 
1795512049.214	(  170000,  250000 ]      376   0.001% 100.001% 
1795512049.214	(  250000,  380000 ]      229   0.000% 100.001% 
1795512049.214	(  380000,  570000 ]        1   0.000% 100.001% 
1795512049.214	
1795512049.214	** Level 4 read latency histogram (micros):
1795512049.214	Count: 50955393 Average: 66.5495  StdDev: 25.96
1795512049.214	Min: 5  Median: 46.0275  Max: 374631
1795512049.214	Percentiles: P50: 46.03 P75: 70.66 P99: 222.19 P99.9: 370.68 P99.99: 958.89
1795512049.214	------------------------------------------------------
1795512049.214	(       4,       6 ]      282   0.001%   0.001% 
1795512049.214	(       6,      10 ]     2217   0.004%   0.005% 
1795512049.214	(      10,      15 ]      857   0.002%   0.007% 
1795512049.214	(      15,      22 ]      227   0.000%   0.007% 
1795512049.214	(      22,      34 ]       84   0.000%   0.007% 
1795512049.214	(      34,      51 ] 36005557  70.661%  70.668% ##############
1795512049.214	(      51,      76 ]  2807456   5.510%  76.178% #
1795512049.214	(      76,     110 ]  9220668  18.096%  94.273% ####
1795512049.214	(     110,     170 ]  1942960   3.813%  98.086% #
1795512049.214	(     170,     250 ]   713605   1.400%  99.487% 
1795512049.214	(     250,     380 ]   226783   0.445%  99.932% 
1795512049.214	(     380,     580 ]    24532   0.048%  99.980% 
1795512049.214	(     580,     870 ]     4538   0.009%  99.989% 
1795512049.214	(     870,    1300 ]     2571   0.005%  99.994% 
1795512049.214	(    1300,    1900 ]     1018   0.002%  99.996% 
1795512049.214	(    1900,    2900 ]      672   0.001%  99.997% 
1795512049.214	(    2900,    4400 ]      533   0.001%  99.998% 
1795512049.214	(    4400,    6600 ]      247   0.000%  99.999% 
1795512049.214	(    6600,    9900 ]      107   0.000%  99.999% 
1795512049.214	(    9900,   14000 ]       44   0.000%  99.999% 
1795512049.214	(   14000,   22000 ]       20   0.000%  99.999% 
1795512049.214	(   22000,   33000 ]        5   0.000%  99.999% 
1795512049.214	(   33000,   50000 ]        8   0.000%  99.999% 
1795512049.214	(   50000,   75000 ]      150   0.000% 100.000% 
1795512049.214	(   75000,  110000 ]      374   0.001% 100.000% 
1795512049.214	(  110000,  170000 ]      161   0.000% 100.001% 
1795512049.214	(  170000,  250000 ]      309   0.001% 100.001% 
1795512049.214	(  250000,  380000 ]      185   0.000% 100.002% 
1795512049.214	
1795512049.214	** Level 5 read latency histogram (micros):
1795512049.214	Count: 24191427 Average: 65.7746  StdDev: 96.71
1795512049.215	Min: 5  Median: 45.6932  Max: 929678
1795512049.215	Percentiles: P50: 45.69 P75: 60.12 P99: 224.08 P99.9: 376.03 P99.99: 1729.38
1795512049.215	------------------------------------------------------
1795512049.215	(       4,       6 ]      129   0.001%   0.001% 
1795512049.215	(       6,      10 ]     1506   0.006%   0.007% 
1795512049.215	(      10,      15 ]      661   0.003%   0.009% 
1795512049.215	(      15,      22 ]      138   0.001%   0.010% 
1795512049.215	(      22,      34 ]       60   0.000%   0.010% 
1795512049.215	(      34,      51 ] 17581565  72.677%  72.687% ###############
1795512049.215	(      51,      76 ]  1533816   6.340%  79.027% #
1795512049.215	(      76,     110 ]  3825967  15.815%  94.843% ###
1795512049.215	(     110,     170 ]   772347   3.193%  98.036% #
1795512049.215	(     170,     250 ]   345179   1.427%  99.462% 
1795512049.215	(     250,     380 ]   109206   0.451%  99.914% 
1795512049.215	(     380,     580 ]    11813   0.049%  99.963% 
1795512049.215	(     580,     870 ]     3550   0.015%  99.977% 
1795512049.215	(     870,    1300 ]     2537   0.010%  99.988% 
1795512049.215	(    1300,    1900 ]      746   0.003%  99.991% 
1795512049.215	(    1900,    2900 ]      668   0.003%  99.994% 
1795512049.215	(    2900,    4400 ]      596   0.002%  99.996% 
1795512049.215	(    4400,    6600 ]      319   0.001%  99.997% 
1795512049.215	(    6600,    9900 ]      184   0.001%  99.998% 
1795512049.215	(    9900,   14000 ]       52   0.000%  99.998% 
1795512049.215	(   14000,   22000 ]        8   0.000%  99.998% 
1795512049.215	(   22000,   33000 ]        3   0.000%  99.998% 
1795512049.215	(   50000,   75000 ]       34   0.000%  99.999% 
1795512049.215	(   75000,  110000 ]      245   0.001% 100.000% 
1795512049.215	(  110000,  170000 ]       75   0.000% 100.000% 
1795512049.215	(  170000,  250000 ]      191   0.001% 100.001% 
1795512049.215	(  250000,  380000 ]       78   0.000% 100.001% 
1795512049.215	(  860000, 1200000 ]        1   0.000% 100.001% 
1795512049.215	
1795512049.215	
1795512049.215	** DB Stats **
1795512049.215	Uptime(secs): 35705.3 total, 46.3 interval
1795512049.215	Cumulative writes: 30M writes, 30M keys, 22M commit groups, 1.3 writes per commit group, ingest: 29.96 GB, 0.86 MB/s
1795512049.215	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.96 GB, 0.86 MB/s
1795512049.215	Cumulative stall: 08:25:13.035 H:M:S, 84.9 percent
1795512049.215	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795512049.215	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795512049.215	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795512049.215	
1795512049.215	STATISTICS:
1795512049.215	rocksdb.block.cache.miss COUNT : 182103989
1795512049.215	rocksdb.block.cache.hit COUNT : 0
1795512049.215	rocksdb.block.cache.add COUNT : 0
1795512049.215	rocksdb.block.cache.add.failures COUNT : 0
1795512049.215	rocksdb.block.cache.index.miss COUNT : 0
1795512049.215	rocksdb.block.cache.index.hit COUNT : 0
1795512049.215	rocksdb.block.cache.index.add COUNT : 0
1795512049.215	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795512049.215	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795512049.215	rocksdb.block.cache.filter.miss COUNT : 0
1795512049.215	rocksdb.block.cache.filter.hit COUNT : 0
1795512049.215	rocksdb.block.cache.filter.add COUNT : 0
1795512049.215	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795512049.215	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795512049.215	rocksdb.block.cache.data.miss COUNT : 182103989
1795512049.215	rocksdb.block.cache.data.hit COUNT : 0
1795512049.215	rocksdb.block.cache.data.add COUNT : 0
1795512049.215	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795512049.215	rocksdb.block.cache.bytes.read COUNT : 0
1795512049.215	rocksdb.block.cache.bytes.write COUNT : 0
1795512049.215	rocksdb.bloom.filter.useful COUNT : 0
1795512049.215	rocksdb.bloom.filter.full.positive COUNT : 0
1795512049.215	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795512049.215	rocksdb.bloom.filter.micros COUNT : 0
1795512049.215	rocksdb.persistent.cache.hit COUNT : 0
1795512049.215	rocksdb.persistent.cache.miss COUNT : 0
1795512049.215	rocksdb.sim.block.cache.hit COUNT : 0
1795512049.215	rocksdb.sim.block.cache.miss COUNT : 0
1795512049.215	rocksdb.memtable.hit COUNT : 0
1795512049.215	rocksdb.memtable.miss COUNT : 0
1795512049.215	rocksdb.l0.hit COUNT : 0
1795512049.215	rocksdb.l1.hit COUNT : 0
1795512049.215	rocksdb.l2andup.hit COUNT : 0
1795512049.215	rocksdb.compaction.key.drop.new COUNT : 27788022
1795512049.215	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795512049.215	rocksdb.compaction.key.drop.range_del COUNT : 0
1795512049.215	rocksdb.compaction.key.drop.user COUNT : 0
1795512049.215	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795512049.215	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795512049.215	rocksdb.compaction.cancelled COUNT : 0
1795512049.215	rocksdb.number.keys.written COUNT : 30547908
1795512049.215	rocksdb.number.keys.read COUNT : 0
1795512049.215	rocksdb.number.keys.updated COUNT : 0
1795512049.215	rocksdb.bytes.written COUNT : 32167830120
1795512049.215	rocksdb.bytes.read COUNT : 0
1795512049.215	rocksdb.number.db.seek COUNT : 0
1795512049.215	rocksdb.number.db.next COUNT : 0
1795512049.215	rocksdb.number.db.prev COUNT : 0
1795512049.215	rocksdb.number.db.seek.found COUNT : 0
1795512049.215	rocksdb.number.db.next.found COUNT : 0
1795512049.215	rocksdb.number.db.prev.found COUNT : 0
1795512049.215	rocksdb.db.iter.bytes.read COUNT : 0
1795512049.215	rocksdb.no.file.closes COUNT : 0
1795512049.215	rocksdb.no.file.opens COUNT : 1684573
1795512049.215	rocksdb.no.file.errors COUNT : 0
1795512049.215	rocksdb.l0.slowdown.micros COUNT : 0
1795512049.215	rocksdb.memtable.compaction.micros COUNT : 0
1795512049.215	rocksdb.l0.num.files.stall.micros COUNT : 0
1795512049.215	rocksdb.stall.micros COUNT : 30313035225
1795512049.215	rocksdb.db.mutex.wait.micros COUNT : 0
1795512049.215	rocksdb.rate.limit.delay.millis COUNT : 0
1795512049.215	rocksdb.num.iterators COUNT : 0
1795512049.215	rocksdb.number.multiget.get COUNT : 0
1795512049.215	rocksdb.number.multiget.keys.read COUNT : 0
1795512049.215	rocksdb.number.multiget.bytes.read COUNT : 0
1795512049.215	rocksdb.number.deletes.filtered COUNT : 0
1795512049.215	rocksdb.number.merge.failures COUNT : 0
1795512049.215	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795512049.215	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795512049.215	rocksdb.number.reseeks.iteration COUNT : 0
1795512049.215	rocksdb.getupdatessince.calls COUNT : 0
1795512049.215	rocksdb.block.cachecompressed.miss COUNT : 0
1795512049.215	rocksdb.block.cachecompressed.hit COUNT : 0
1795512049.215	rocksdb.block.cachecompressed.add COUNT : 0
1795512049.215	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795512049.215	rocksdb.wal.synced COUNT : 0
1795512049.215	rocksdb.wal.bytes COUNT : 32167830120
1795512049.215	rocksdb.write.self COUNT : 22984514
1795512049.215	rocksdb.write.other COUNT : 7563394
1795512049.215	rocksdb.write.timeout COUNT : 0
1795512049.215	rocksdb.write.wal COUNT : 30547908
1795512049.215	rocksdb.compact.read.bytes COUNT : 765471140831
1795512049.215	rocksdb.compact.write.bytes COUNT : 736269956007
1795512049.215	rocksdb.flush.write.bytes COUNT : 32257018379
1795512049.215	rocksdb.compact.read.marked.bytes COUNT : 0
1795512049.215	rocksdb.compact.read.periodic.bytes COUNT : 0
1795512049.215	rocksdb.compact.read.ttl.bytes COUNT : 0
1795512049.215	rocksdb.compact.write.marked.bytes COUNT : 0
1795512049.215	rocksdb.compact.write.periodic.bytes COUNT : 0
1795512049.215	rocksdb.compact.write.ttl.bytes COUNT : 0
1795512049.215	rocksdb.number.direct.load.table.properties COUNT : 0
1795512049.215	rocksdb.number.superversion_acquires COUNT : 0
1795512049.215	rocksdb.number.superversion_releases COUNT : 0
1795512049.216	rocksdb.number.superversion_cleanups COUNT : 0
1795512049.216	rocksdb.number.block.compressed COUNT : 0
1795512049.216	rocksdb.number.block.decompressed COUNT : 0
1795512049.216	rocksdb.number.block.not_compressed COUNT : 0
1795512049.216	rocksdb.merge.operation.time.nanos COUNT : 0
1795512049.216	rocksdb.filter.operation.time.nanos COUNT : 0
1795512049.216	rocksdb.row.cache.hit COUNT : 0
1795512049.216	rocksdb.row.cache.miss COUNT : 0
1795512049.216	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795512049.216	rocksdb.read.amp.total.read.bytes COUNT : 0
1795512049.216	rocksdb.number.rate_limiter.drains COUNT : 0
1795512049.216	rocksdb.number.iter.skip COUNT : 0
1795512049.216	rocksdb.blobdb.num.put COUNT : 0
1795512049.216	rocksdb.blobdb.num.write COUNT : 0
1795512049.216	rocksdb.blobdb.num.get COUNT : 0
1795512049.216	rocksdb.blobdb.num.multiget COUNT : 0
1795512049.216	rocksdb.blobdb.num.seek COUNT : 0
1795512049.216	rocksdb.blobdb.num.next COUNT : 0
1795512049.216	rocksdb.blobdb.num.prev COUNT : 0
1795512049.216	rocksdb.blobdb.num.keys.written COUNT : 0
1795512049.216	rocksdb.blobdb.num.keys.read COUNT : 0
1795512049.216	rocksdb.blobdb.bytes.written COUNT : 0
1795512049.216	rocksdb.blobdb.bytes.read COUNT : 0
1795512049.216	rocksdb.blobdb.write.inlined COUNT : 0
1795512049.216	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795512049.216	rocksdb.blobdb.write.blob COUNT : 0
1795512049.216	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795512049.216	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795512049.216	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795512049.216	rocksdb.blobdb.blob.file.synced COUNT : 0
1795512049.216	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795512049.216	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795512049.216	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795512049.216	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795512049.216	rocksdb.blobdb.gc.num.files COUNT : 0
1795512049.216	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795512049.216	rocksdb.blobdb.gc.failures COUNT : 0
1795512049.216	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795512049.216	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795512049.216	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795512049.216	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795512049.216	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795512049.216	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795512049.216	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795512049.216	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795512049.216	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795512049.216	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795512049.216	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795512049.216	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795512049.216	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795512049.216	rocksdb.txn.get.tryagain COUNT : 0
1795512049.216	rocksdb.number.multiget.keys.found COUNT : 0
1795512049.216	rocksdb.num.iterator.created COUNT : 0
1795512049.216	rocksdb.num.iterator.deleted COUNT : 0
1795512049.216	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795512049.216	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795512049.216	rocksdb.block.cache.compression.dict.add COUNT : 0
1795512049.216	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795512049.216	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795512049.216	rocksdb.block.cache.add.redundant COUNT : 0
1795512049.216	rocksdb.block.cache.index.add.redundant COUNT : 0
1795512049.216	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795512049.216	rocksdb.block.cache.data.add.redundant COUNT : 0
1795512049.216	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795512049.216	rocksdb.files.marked.trash COUNT : 0
1795512049.216	rocksdb.files.deleted.immediately COUNT : 1680966
1795512049.216	rocksdb.error.handler.bg.errro.count COUNT : 0
1795512049.216	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795512049.216	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795512049.216	rocksdb.error.handler.autoresume.count COUNT : 0
1795512049.216	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795512049.216	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795512049.216	rocksdb.memtable.payload.bytes.at.flush COUNT : 32013023344
1795512049.216	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1861248
1795512049.216	rocksdb.secondary.cache.hits COUNT : 0
1795512049.216	rocksdb.verify_checksum.read.bytes COUNT : 0
1795512049.216	rocksdb.backup.read.bytes COUNT : 0
1795512049.216	rocksdb.backup.write.bytes COUNT : 0
1795512049.216	rocksdb.remote.compact.read.bytes COUNT : 0
1795512049.216	rocksdb.remote.compact.write.bytes COUNT : 0
1795512049.216	rocksdb.hot.file.read.bytes COUNT : 0
1795512049.216	rocksdb.warm.file.read.bytes COUNT : 0
1795512049.216	rocksdb.cold.file.read.bytes COUNT : 0
1795512049.216	rocksdb.hot.file.read.count COUNT : 0
1795512049.216	rocksdb.warm.file.read.count COUNT : 0
1795512049.216	rocksdb.cold.file.read.count COUNT : 0
1795512049.216	rocksdb.last.level.read.bytes COUNT : 0
1795512049.216	rocksdb.last.level.read.count COUNT : 0
1795512049.216	rocksdb.non.last.level.read.bytes COUNT : 765727965061
1795512049.216	rocksdb.non.last.level.read.count COUNT : 188842281
1795512049.216	rocksdb.block.checksum.compute.count COUNT : 185473135
1795512049.216	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.db.write.micros P50 : 1192.294177 P95 : 19232.931667 P99 : 67942.075523 P100 : 5323352.000000 COUNT : 30547908 SUM : 142106402322
1795512049.216	rocksdb.compaction.times.micros P50 : 93029.094978 P95 : 222375.706909 P99 : 469670.237318 P100 : 5721258.000000 COUNT : 263434 SUM : 27695868725
1795512049.216	rocksdb.compaction.times.cpu_micros P50 : 91021.526789 P95 : 214973.002755 P99 : 462060.481259 P100 : 5360195.000000 COUNT : 263434 SUM : 27041982807
1795512049.216	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.table.sync.micros P50 : 26077.656273 P95 : 116902.097902 P99 : 366869.041769 P100 : 948011.000000 COUNT : 17711 SUM : 673377413
1795512049.216	rocksdb.compaction.outfile.sync.micros P50 : 6377.479716 P95 : 13713.089486 P99 : 25351.738109 P100 : 1223918.000000 COUNT : 1634636 SUM : 13101757087
1795512049.216	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.manifest.file.sync.micros P50 : 487.758187 P95 : 749.562399 P99 : 242267.587940 P100 : 1162338.000000 COUNT : 214275 SUM : 1553312996
1795512049.216	rocksdb.table.open.io.micros P50 : 242.498605 P95 : 444.683457 P99 : 639.100839 P100 : 372740.000000 COUNT : 1684573 SUM : 592728141
1795512049.216	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.read.block.compaction.micros P50 : 46.276116 P95 : 123.516686 P99 : 228.452476 P100 : 929683.000000 COUNT : 182103989 SUM : 12360515734
1795512049.216	rocksdb.read.block.get.micros P50 : 56.321698 P95 : 107.534130 P99 : 218.501923 P100 : 358593.000000 COUNT : 1684573 SUM : 117807740
1795512049.216	rocksdb.write.raw.block.micros P50 : 0.565124 P95 : 1.845532 P99 : 57.145565 P100 : 2099005.000000 COUNT : 187755042 SUM : 481811680
1795512049.216	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.numfiles.in.singlecompaction P50 : 5.839853 P95 : 9.584553 P99 : 9.925932 P100 : 49.000000 COUNT : 264117 SUM : 1646177
1795512049.216	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.db.write.stall P50 : 0.715572 P95 : 4019.558597 P99 : 17350.545013 P100 : 5320719.000000 COUNT : 22967066 SUM : 30316487832
1795512049.216	rocksdb.sst.read.micros P50 : 45.927754 P95 : 119.872422 P99 : 224.050240 P100 : 929678.000000 COUNT : 188842281 SUM : 12624636065
1795512049.216	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.bytes.per.write P50 : 1130.190628 P95 : 3562.130105 P99 : 4188.000000 P100 : 4188.000000 COUNT : 22984514 SUM : 32167830120
1795512049.216	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.db.flush.micros P50 : 54671.837709 P95 : 189174.825175 P99 : 379976.171079 P100 : 5177950.000000 COUNT : 17709 SUM : 1203486632
1795512049.216	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512049.216	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1645494 SUM : 0
1795512049.216	
