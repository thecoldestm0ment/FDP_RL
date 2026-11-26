1795611438.367	Initializing RocksDB Options from the specified file
1795611438.368	Initializing RocksDB Options from command-line flags
1795611449.024	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795611449.024	Values:     1024 bytes each (512 bytes after compression)
1795611449.024	Entries:    15273953
1795611449.024	Prefix:    0 bytes
1795611449.024	Keys per prefix:    0
1795611449.024	RawSize:    15149.0 MB (estimated)
1795611449.024	FileSize:   7691.0 MB (estimated)
1795611449.024	Write rate: 0 bytes/second
1795611449.024	Read rate: 0 ops/second
1795611449.024	Compression: NoCompression
1795611449.024	Compression sampling rate: 0
1795611449.024	Memtablerep: SkipListFactory
1795611449.024	Perf Level: 1
1795611449.024	------------------------------------------------
1795611449.024	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795643683.824	overwrite    :    4216.172 micros/op 947 ops/sec;    0.9 MB/s
1795643688.824	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795643688.827	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643698.829	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643708.827	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643718.830	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643728.828	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643738.828	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643748.828	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795643748.828	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795643748.828	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795643748.829	
1795643748.829	Level Files Size(MB)
1795643748.829	--------------------
1795643748.829	  0        0        0
1795643748.829	  1        5        2
1795643748.829	  2       59       25
1795643748.829	  3      605      250
1795643748.829	  4     5716     2500
1795643748.829	  5    32660    15394
1795643748.829	  6        0        0
1795643748.829	
1795643748.831	
1795643748.831	
1795643748.831	** Compaction Stats [default] **
1795643748.831	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795643748.831	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795643748.831	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     27.6   1116.95            713.52     16348    0.068     20K      3       0.0       0.0
1795643748.831	  L1      5/0    2.38 MB   1.0     49.7    30.0     19.7      49.7     30.1       0.0   1.7     26.5     26.6   1916.90           1868.91      8159    0.235     50M   6792       0.0       0.0
1795643748.831	  L2     59/0   24.60 MB   1.0    149.0    30.1    118.9     148.9     30.0       0.0   5.0     25.9     25.8   5900.95           5764.37     64352    0.092    151M    51K       0.0       0.0
1795643748.831	  L3    605/0   249.51 MB   1.0    194.6    30.0    164.5     194.0     29.5       0.0   6.5     26.2     26.1   7604.91           7426.78     68071    0.112    197M   518K       0.0       0.0
1795643748.831	  L4   5716/0    2.44 GB   1.0    197.2    29.5    167.7     192.2     24.5       0.0   6.5     26.5     25.8   7627.06           7452.75     68402    0.112    200M  5066K       0.0       0.0
1795643748.831	  L5  32660/0   15.03 GB   0.6    115.6    24.5     91.1      93.8      2.7       0.0   3.8     29.5     23.9   4015.86           3932.31     53165    0.076    117M    22M       0.0       0.0
1795643748.831	 Sum  39045/0   17.74 GB   0.0    706.0   144.1    561.9     708.7    146.8       0.0  23.6     25.7     25.8  28182.63          27158.65    278497    0.101    717M    27M       0.0       0.0
1795643748.831	 Int      0/0    0.00 KB   0.0      0.2     0.0      0.1       0.1      0.0       0.0 140460608.0     26.7     22.4      5.97              5.97        61    0.098    158K    25K       0.0       0.0
1795643748.831	
1795643748.831	** Compaction Stats [default] **
1795643748.831	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795643748.831	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795643748.831	 Low      0/0    0.00 KB   0.0    706.0   144.1    561.9     678.7    116.8       0.0   0.0     26.7     25.7  27067.24          26446.60    262151    0.103    717M    27M       0.0       0.0
1795643748.831	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     27.6   1115.38            712.05     16345    0.068       0      0       0.0       0.0
1795643748.831	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    140.8      0.01              0.00         1    0.006       0      0       0.0       0.0
1795643748.831	
1795643748.831	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795643748.831	
1795643748.831	Uptime(secs): 32310.4 total, 13.7 interval
1795643748.831	Flush(GB): cumulative 30.037, interval 0.000
1795643748.831	AddFile(GB): cumulative 0.000, interval 0.000
1795643748.831	AddFile(Total Files): cumulative 0, interval 0
1795643748.831	AddFile(L0 Files): cumulative 0, interval 0
1795643748.831	AddFile(Keys): cumulative 0, interval 0
1795643748.831	Cumulative compaction: 708.71 GB write, 22.46 MB/s write, 706.00 GB read, 22.37 MB/s read, 28182.6 seconds
1795643748.831	Interval compaction: 0.13 GB write, 9.79 MB/s write, 0.16 GB read, 11.67 MB/s read, 6.0 seconds
1795643748.831	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 311756 slowdown for pending_compaction_bytes, 19 memtable_compaction, 2 memtable_slowdown, interval 0 total count
1795643748.831	Block cache LRUCache@0x5e84cd72ba70#54650 capacity: 8.00 MB collections: 180 last_copies: 1 last_secs: 0.000121 secs_since: 73
1795643748.831	Block cache entry stats(count,size,portion): Misc(3,8.38 KB,0.102234%)
1795643748.831	
1795643748.831	** File Read Latency Histogram By Level [default] **
1795643748.831	** Level 0 read latency histogram (micros):
1795643748.831	Count: 7713955 Average: 66.4978  StdDev: 178.00
1795643748.831	Min: 7  Median: 45.7095  Max: 390849
1795643748.831	Percentiles: P50: 45.71 P75: 64.04 P99: 225.43 P99.9: 400.78 P99.99: 1023.18
1795643748.831	------------------------------------------------------
1795643748.831	(       6,      10 ]        4   0.000%   0.000% 
1795643748.831	(      10,      15 ]        9   0.000%   0.000% 
1795643748.831	(      15,      22 ]        2   0.000%   0.000% 
1795643748.831	(      22,      34 ]        1   0.000%   0.000% 
1795643748.831	(      34,      51 ]  5599574  72.590%  72.590% ###############
1795643748.831	(      51,      76 ]   356409   4.620%  77.211% #
1795643748.831	(      76,     110 ]  1327917  17.214%  94.425% ###
1795643748.831	(     110,     170 ]   278840   3.615%  98.040% #
1795643748.831	(     170,     250 ]   106878   1.386%  99.425% 
1795643748.831	(     250,     380 ]    35975   0.466%  99.892% 
1795643748.831	(     380,     580 ]     6083   0.079%  99.971% 
1795643748.831	(     580,     870 ]     1311   0.017%  99.988% 
1795643748.831	(     870,    1300 ]      507   0.007%  99.994% 
1795643748.831	(    1300,    1900 ]      128   0.002%  99.996% 
1795643748.831	(    1900,    2900 ]       50   0.001%  99.997% 
1795643748.831	(    2900,    4400 ]       36   0.000%  99.997% 
1795643748.831	(    4400,    6600 ]       11   0.000%  99.997% 
1795643748.831	(    6600,    9900 ]        9   0.000%  99.997% 
1795643748.831	(    9900,   14000 ]        7   0.000%  99.997% 
1795643748.831	(   14000,   22000 ]        5   0.000%  99.997% 
1795643748.831	(   33000,   50000 ]        2   0.000%  99.997% 
1795643748.831	(   50000,   75000 ]       22   0.000%  99.998% 
1795643748.831	(   75000,  110000 ]       68   0.001%  99.999% 
1795643748.831	(  110000,  170000 ]       15   0.000%  99.999% 
1795643748.831	(  170000,  250000 ]       40   0.001%  99.999% 
1795643748.831	(  250000,  380000 ]       51   0.001% 100.000% 
1795643748.831	(  380000,  570000 ]        1   0.000% 100.000% 
1795643748.831	
1795643748.831	** Level 1 read latency histogram (micros):
1795643748.831	Count: 13148627 Average: 66.8701  StdDev: 84.92
1795643748.831	Min: 5  Median: 45.6050  Max: 479129
1795643748.831	Percentiles: P50: 45.60 P75: 60.42 P99: 220.21 P99.9: 378.15 P99.99: 1016.62
1795643748.831	------------------------------------------------------
1795643748.831	(       4,       6 ]       10   0.000%   0.000% 
1795643748.831	(       6,      10 ]       55   0.000%   0.000% 
1795643748.831	(      10,      15 ]       44   0.000%   0.001% 
1795643748.831	(      15,      22 ]        8   0.000%   0.001% 
1795643748.831	(      22,      34 ]        5   0.000%   0.001% 
1795643748.831	(      34,      51 ]  9630469  73.243%  73.244% ###############
1795643748.831	(      51,      76 ]   612421   4.658%  77.902% #
1795643748.831	(      76,     110 ]  2206928  16.784%  94.686% ###
1795643748.831	(     110,     170 ]   456647   3.473%  98.159% #
1795643748.831	(     170,     250 ]   176150   1.340%  99.499% 
1795643748.831	(     250,     380 ]    53501   0.407%  99.906% 
1795643748.831	(     380,     580 ]     8980   0.068%  99.974% 
1795643748.831	(     580,     870 ]     1850   0.014%  99.988% 
1795643748.831	(     870,    1300 ]      716   0.005%  99.994% 
1795643748.831	(    1300,    1900 ]      189   0.001%  99.995% 
1795643748.831	(    1900,    2900 ]      107   0.001%  99.996% 
1795643748.831	(    2900,    4400 ]      100   0.001%  99.997% 
1795643748.831	(    4400,    6600 ]       16   0.000%  99.997% 
1795643748.831	(    6600,    9900 ]       25   0.000%  99.997% 
1795643748.831	(    9900,   14000 ]        9   0.000%  99.997% 
1795643748.831	(   14000,   22000 ]        5   0.000%  99.997% 
1795643748.831	(   22000,   33000 ]        3   0.000%  99.997% 
1795643748.831	(   33000,   50000 ]       10   0.000%  99.997% 
1795643748.831	(   50000,   75000 ]       44   0.000%  99.997% 
1795643748.831	(   75000,  110000 ]      130   0.001%  99.998% 
1795643748.831	(  110000,  170000 ]       42   0.000%  99.999% 
1795643748.831	(  170000,  250000 ]       85   0.001%  99.999% 
1795643748.831	(  250000,  380000 ]      102   0.001% 100.000% 
1795643748.831	(  380000,  570000 ]        4   0.000% 100.000% 
1795643748.831	
1795643748.831	** Level 2 read latency histogram (micros):
1795643748.831	Count: 39496040 Average: 66.6054  StdDev: 99.95
1795643748.831	Min: 5  Median: 45.7806  Max: 465693
1795643748.831	Percentiles: P50: 45.78 P75: 66.29 P99: 226.71 P99.9: 374.84 P99.99: 864.00
1795643748.831	------------------------------------------------------
1795643748.831	(       4,       6 ]      649   0.002%   0.002% 
1795643748.831	(       6,      10 ]     2703   0.007%   0.008% 
1795643748.831	(      10,      15 ]      661   0.002%   0.010% 
1795643748.831	(      15,      22 ]      142   0.000%   0.011% 
1795643748.831	(      22,      34 ]       62   0.000%   0.011% 
1795643748.831	(      34,      51 ] 28491287  72.137%  72.148% ##############
1795643748.831	(      51,      76 ]  1841942   4.664%  76.811% #
1795643748.831	(      76,     110 ]  6921249  17.524%  94.335% ####
1795643748.831	(     110,     170 ]  1427747   3.615%  97.950% #
1795643748.831	(     170,     250 ]   584880   1.481%  99.431% 
1795643748.831	(     250,     380 ]   192874   0.488%  99.919% 
1795643748.831	(     380,     580 ]    23841   0.060%  99.980% 
1795643748.831	(     580,     870 ]     4139   0.010%  99.990% 
1795643748.831	(     870,    1300 ]     1634   0.004%  99.994% 
1795643748.831	(    1300,    1900 ]      529   0.001%  99.996% 
1795643748.831	(    1900,    2900 ]      375   0.001%  99.997% 
1795643748.831	(    2900,    4400 ]      377   0.001%  99.998% 
1795643748.831	(    4400,    6600 ]       94   0.000%  99.998% 
1795643748.831	(    6600,    9900 ]       66   0.000%  99.998% 
1795643748.831	(    9900,   14000 ]       27   0.000%  99.998% 
1795643748.831	(   14000,   22000 ]       14   0.000%  99.998% 
1795643748.831	(   22000,   33000 ]       10   0.000%  99.998% 
1795643748.831	(   33000,   50000 ]       20   0.000%  99.998% 
1795643748.831	(   50000,   75000 ]       88   0.000%  99.998% 
1795643748.831	(   75000,  110000 ]      336   0.001%  99.999% 
1795643748.831	(  110000,  170000 ]      121   0.000% 100.000% 
1795643748.831	(  170000,  250000 ]      220   0.001% 100.000% 
1795643748.831	(  250000,  380000 ]      215   0.001% 100.001% 
1795643748.831	(  380000,  570000 ]       10   0.000% 100.001% 
1795643748.831	
1795643748.831	** Level 3 read latency histogram (micros):
1795643748.831	Count: 51483676 Average: 66.6182  StdDev: 61.67
1795643748.831	Min: 5  Median: 45.8458  Max: 484491
1795643748.831	Percentiles: P50: 45.85 P75: 68.68 P99: 223.89 P99.9: 370.05 P99.99: 804.46
1795643748.831	------------------------------------------------------
1795643748.831	(       4,       6 ]      810   0.002%   0.002% 
1795643748.831	(       6,      10 ]     2408   0.005%   0.006% 
1795643748.831	(      10,      15 ]      726   0.001%   0.008% 
1795643748.831	(      15,      22 ]      156   0.000%   0.008% 
1795643748.831	(      22,      34 ]       67   0.000%   0.008% 
1795643748.831	(      34,      51 ] 36936365  71.744%  71.752% ##############
1795643748.831	(      51,      76 ]  2364951   4.594%  76.346% #
1795643748.831	(      76,     110 ]  9227051  17.922%  94.268% ####
1795643748.831	(     110,     170 ]  1916825   3.723%  97.991% #
1795643748.831	(     170,     250 ]   771129   1.498%  99.489% 
1795643748.831	(     250,     380 ]   229252   0.445%  99.934% 
1795643748.831	(     380,     580 ]    25543   0.050%  99.984% 
1795643748.831	(     580,     870 ]     4192   0.008%  99.992% 
1795643748.831	(     870,    1300 ]     1722   0.003%  99.995% 
1795643748.831	(    1300,    1900 ]      662   0.001%  99.996% 
1795643748.831	(    1900,    2900 ]      417   0.001%  99.997% 
1795643748.831	(    2900,    4400 ]      388   0.001%  99.998% 
1795643748.831	(    4400,    6600 ]      109   0.000%  99.998% 
1795643748.831	(    6600,    9900 ]       96   0.000%  99.998% 
1795643748.831	(    9900,   14000 ]       35   0.000%  99.999% 
1795643748.831	(   14000,   22000 ]        9   0.000%  99.999% 
1795643748.831	(   22000,   33000 ]        7   0.000%  99.999% 
1795643748.831	(   33000,   50000 ]       22   0.000%  99.999% 
1795643748.831	(   50000,   75000 ]      130   0.000%  99.999% 
1795643748.831	(   75000,  110000 ]      401   0.001% 100.000% 
1795643748.831	(  110000,  170000 ]      132   0.000% 100.000% 
1795643748.831	(  170000,  250000 ]      324   0.001% 100.000% 
1795643748.831	(  250000,  380000 ]      271   0.001% 100.001% 
1795643748.831	(  380000,  570000 ]       11   0.000% 100.001% 
1795643748.831	
1795643748.831	** Level 4 read latency histogram (micros):
1795643748.831	Count: 50909390 Average: 66.0969  StdDev: 78.08
1795643748.831	Min: 5  Median: 45.8476  Max: 773002
1795643748.831	Percentiles: P50: 45.85 P75: 68.49 P99: 221.41 P99.9: 369.57 P99.99: 851.50
1795643748.831	------------------------------------------------------
1795643748.831	(       4,       6 ]      479   0.001%   0.001% 
1795643748.831	(       6,      10 ]     2121   0.004%   0.005% 
1795643748.831	(      10,      15 ]      560   0.001%   0.006% 
1795643748.831	(      15,      22 ]      103   0.000%   0.006% 
1795643748.831	(      22,      34 ]       41   0.000%   0.006% 
1795643748.831	(      34,      51 ] 36520012  71.735%  71.742% ##############
1795643748.831	(      51,      76 ]  2370912   4.657%  76.399% #
1795643748.831	(      76,     110 ]  9136156  17.946%  94.345% ####
1795643748.831	(     110,     170 ]  1901878   3.736%  98.081% #
1795643748.831	(     170,     250 ]   728380   1.431%  99.511% 
1795643748.831	(     250,     380 ]   215096   0.423%  99.934% 
1795643748.831	(     380,     580 ]    24335   0.048%  99.982% 
1795643748.831	(     580,     870 ]     4514   0.009%  99.991% 
1795643748.831	(     870,    1300 ]     2263   0.004%  99.995% 
1795643748.832	(    1300,    1900 ]      771   0.002%  99.997% 
1795643748.832	(    1900,    2900 ]      526   0.001%  99.998% 
1795643748.832	(    2900,    4400 ]      408   0.001%  99.998% 
1795643748.832	(    4400,    6600 ]      143   0.000%  99.999% 
1795643748.832	(    6600,    9900 ]       85   0.000%  99.999% 
1795643748.832	(    9900,   14000 ]       43   0.000%  99.999% 
1795643748.832	(   14000,   22000 ]       13   0.000%  99.999% 
1795643748.832	(   22000,   33000 ]        8   0.000%  99.999% 
1795643748.832	(   33000,   50000 ]       23   0.000%  99.999% 
1795643748.832	(   50000,   75000 ]      136   0.000%  99.999% 
1795643748.832	(   75000,  110000 ]      372   0.001% 100.000% 
1795643748.832	(  110000,  170000 ]      130   0.000% 100.000% 
1795643748.832	(  170000,  250000 ]      258   0.001% 100.001% 
1795643748.832	(  250000,  380000 ]      233   0.000% 100.001% 
1795643748.832	(  380000,  570000 ]       15   0.000% 100.001% 
1795643748.832	(  570000,  860000 ]        1   0.000% 100.001% 
1795643748.832	
1795643748.832	** Level 5 read latency histogram (micros):
1795643748.832	Count: 24218327 Average: 65.3913  StdDev: 82.18
1795643748.832	Min: 5  Median: 45.5150  Max: 385016
1795643748.832	Percentiles: P50: 45.51 P75: 56.63 P99: 223.44 P99.9: 374.83 P99.99: 1671.96
1795643748.832	------------------------------------------------------
1795643748.832	(       4,       6 ]      297   0.001%   0.001% 
1795643748.832	(       6,      10 ]     1639   0.007%   0.008% 
1795643748.832	(      10,      15 ]      363   0.001%   0.009% 
1795643748.832	(      15,      22 ]       84   0.000%   0.010% 
1795643748.832	(      22,      34 ]       22   0.000%   0.010% 
1795643748.832	(      34,      51 ] 17873697  73.802%  73.812% ###############
1795643748.832	(      51,      76 ]  1276242   5.270%  79.082% #
1795643748.832	(      76,     110 ]  3822829  15.785%  94.867% ###
1795643748.832	(     110,     170 ]   765019   3.159%  98.026% #
1795643748.832	(     170,     250 ]   353224   1.458%  99.484% 
1795643748.832	(     250,     380 ]   104866   0.433%  99.917% 
1795643748.832	(     380,     580 ]    11113   0.046%  99.963% 
1795643748.832	(     580,     870 ]     3419   0.014%  99.977% 
1795643748.832	(     870,    1300 ]     2607   0.011%  99.988% 
1795643748.832	(    1300,    1900 ]      781   0.003%  99.991% 
1795643748.832	(    1900,    2900 ]      596   0.002%  99.994% 
1795643748.832	(    2900,    4400 ]      568   0.002%  99.996% 
1795643748.832	(    4400,    6600 ]      317   0.001%  99.997% 
1795643748.832	(    6600,    9900 ]      201   0.001%  99.998% 
1795643748.832	(    9900,   14000 ]       69   0.000%  99.998% 
1795643748.832	(   14000,   22000 ]       11   0.000%  99.999% 
1795643748.832	(   22000,   33000 ]        3   0.000%  99.999% 
1795643748.832	(   33000,   50000 ]        3   0.000%  99.999% 
1795643748.832	(   50000,   75000 ]       51   0.000%  99.999% 
1795643748.832	(   75000,  110000 ]      210   0.001% 100.000% 
1795643748.832	(  110000,  170000 ]       52   0.000% 100.000% 
1795643748.832	(  170000,  250000 ]      149   0.001% 100.000% 
1795643748.832	(  250000,  380000 ]      127   0.001% 100.001% 
1795643748.832	(  380000,  570000 ]        6   0.000% 100.001% 
1795643748.832	
1795643748.832	
1795643748.832	** DB Stats **
1795643748.832	Uptime(secs): 32310.4 total, 13.7 interval
1795643748.832	Cumulative writes: 30M writes, 30M keys, 23M commit groups, 1.3 writes per commit group, ingest: 29.96 GB, 0.95 MB/s
1795643748.832	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.96 GB, 0.95 MB/s
1795643748.832	Cumulative stall: 07:46:16.035 H:M:S, 86.6 percent
1795643748.832	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795643748.832	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795643748.832	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795643748.832	
1795643748.832	STATISTICS:
1795643748.832	rocksdb.block.cache.miss COUNT : 180310145
1795643748.832	rocksdb.block.cache.hit COUNT : 0
1795643748.832	rocksdb.block.cache.add COUNT : 0
1795643748.832	rocksdb.block.cache.add.failures COUNT : 0
1795643748.832	rocksdb.block.cache.index.miss COUNT : 0
1795643748.832	rocksdb.block.cache.index.hit COUNT : 0
1795643748.832	rocksdb.block.cache.index.add COUNT : 0
1795643748.832	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795643748.832	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795643748.832	rocksdb.block.cache.filter.miss COUNT : 0
1795643748.832	rocksdb.block.cache.filter.hit COUNT : 0
1795643748.832	rocksdb.block.cache.filter.add COUNT : 0
1795643748.832	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795643748.832	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795643748.832	rocksdb.block.cache.data.miss COUNT : 180310145
1795643748.832	rocksdb.block.cache.data.hit COUNT : 0
1795643748.832	rocksdb.block.cache.data.add COUNT : 0
1795643748.832	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795643748.832	rocksdb.block.cache.bytes.read COUNT : 0
1795643748.832	rocksdb.block.cache.bytes.write COUNT : 0
1795643748.832	rocksdb.bloom.filter.useful COUNT : 0
1795643748.832	rocksdb.bloom.filter.full.positive COUNT : 0
1795643748.832	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795643748.832	rocksdb.bloom.filter.micros COUNT : 0
1795643748.832	rocksdb.persistent.cache.hit COUNT : 0
1795643748.832	rocksdb.persistent.cache.miss COUNT : 0
1795643748.832	rocksdb.sim.block.cache.hit COUNT : 0
1795643748.832	rocksdb.sim.block.cache.miss COUNT : 0
1795643748.832	rocksdb.memtable.hit COUNT : 0
1795643748.832	rocksdb.memtable.miss COUNT : 0
1795643748.832	rocksdb.l0.hit COUNT : 0
1795643748.832	rocksdb.l1.hit COUNT : 0
1795643748.832	rocksdb.l2andup.hit COUNT : 0
1795643748.832	rocksdb.compaction.key.drop.new COUNT : 27791922
1795643748.832	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795643748.832	rocksdb.compaction.key.drop.range_del COUNT : 0
1795643748.832	rocksdb.compaction.key.drop.user COUNT : 0
1795643748.832	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795643748.832	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795643748.832	rocksdb.compaction.cancelled COUNT : 0
1795643748.832	rocksdb.number.keys.written COUNT : 30547908
1795643748.832	rocksdb.number.keys.read COUNT : 0
1795643748.832	rocksdb.number.keys.updated COUNT : 0
1795643748.832	rocksdb.bytes.written COUNT : 32172435204
1795643748.832	rocksdb.bytes.read COUNT : 0
1795643748.832	rocksdb.number.db.seek COUNT : 0
1795643748.832	rocksdb.number.db.next COUNT : 0
1795643748.832	rocksdb.number.db.prev COUNT : 0
1795643748.832	rocksdb.number.db.seek.found COUNT : 0
1795643748.832	rocksdb.number.db.next.found COUNT : 0
1795643748.832	rocksdb.number.db.prev.found COUNT : 0
1795643748.832	rocksdb.db.iter.bytes.read COUNT : 0
1795643748.832	rocksdb.no.file.closes COUNT : 0
1795643748.832	rocksdb.no.file.opens COUNT : 1665684
1795643748.832	rocksdb.no.file.errors COUNT : 0
1795643748.832	rocksdb.l0.slowdown.micros COUNT : 0
1795643748.832	rocksdb.memtable.compaction.micros COUNT : 0
1795643748.832	rocksdb.l0.num.files.stall.micros COUNT : 0
1795643748.832	rocksdb.stall.micros COUNT : 27976035478
1795643748.832	rocksdb.db.mutex.wait.micros COUNT : 0
1795643748.832	rocksdb.rate.limit.delay.millis COUNT : 0
1795643748.832	rocksdb.num.iterators COUNT : 0
1795643748.832	rocksdb.number.multiget.get COUNT : 0
1795643748.832	rocksdb.number.multiget.keys.read COUNT : 0
1795643748.832	rocksdb.number.multiget.bytes.read COUNT : 0
1795643748.832	rocksdb.number.deletes.filtered COUNT : 0
1795643748.832	rocksdb.number.merge.failures COUNT : 0
1795643748.832	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795643748.832	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795643748.832	rocksdb.number.reseeks.iteration COUNT : 0
1795643748.832	rocksdb.getupdatessince.calls COUNT : 0
1795643748.832	rocksdb.block.cachecompressed.miss COUNT : 0
1795643748.832	rocksdb.block.cachecompressed.hit COUNT : 0
1795643748.832	rocksdb.block.cachecompressed.add COUNT : 0
1795643748.832	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795643748.832	rocksdb.wal.synced COUNT : 0
1795643748.832	rocksdb.wal.bytes COUNT : 32172435204
1795643748.832	rocksdb.write.self COUNT : 23368271
1795643748.832	rocksdb.write.other COUNT : 7179637
1795643748.832	rocksdb.write.timeout COUNT : 0
1795643748.832	rocksdb.write.wal COUNT : 30547908
1795643748.832	rocksdb.compact.read.bytes COUNT : 757929106371
1795643748.832	rocksdb.compact.write.bytes COUNT : 728723057756
1795643748.832	rocksdb.flush.write.bytes COUNT : 32255778238
1795643748.832	rocksdb.compact.read.marked.bytes COUNT : 0
1795643748.832	rocksdb.compact.read.periodic.bytes COUNT : 0
1795643748.832	rocksdb.compact.read.ttl.bytes COUNT : 0
1795643748.832	rocksdb.compact.write.marked.bytes COUNT : 0
1795643748.832	rocksdb.compact.write.periodic.bytes COUNT : 0
1795643748.832	rocksdb.compact.write.ttl.bytes COUNT : 0
1795643748.832	rocksdb.number.direct.load.table.properties COUNT : 0
1795643748.832	rocksdb.number.superversion_acquires COUNT : 0
1795643748.832	rocksdb.number.superversion_releases COUNT : 0
1795643748.832	rocksdb.number.superversion_cleanups COUNT : 0
1795643748.832	rocksdb.number.block.compressed COUNT : 0
1795643748.832	rocksdb.number.block.decompressed COUNT : 0
1795643748.832	rocksdb.number.block.not_compressed COUNT : 0
1795643748.832	rocksdb.merge.operation.time.nanos COUNT : 0
1795643748.832	rocksdb.filter.operation.time.nanos COUNT : 0
1795643748.832	rocksdb.row.cache.hit COUNT : 0
1795643748.832	rocksdb.row.cache.miss COUNT : 0
1795643748.832	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795643748.832	rocksdb.read.amp.total.read.bytes COUNT : 0
1795643748.832	rocksdb.number.rate_limiter.drains COUNT : 0
1795643748.832	rocksdb.number.iter.skip COUNT : 0
1795643748.832	rocksdb.blobdb.num.put COUNT : 0
1795643748.832	rocksdb.blobdb.num.write COUNT : 0
1795643748.832	rocksdb.blobdb.num.get COUNT : 0
1795643748.832	rocksdb.blobdb.num.multiget COUNT : 0
1795643748.832	rocksdb.blobdb.num.seek COUNT : 0
1795643748.832	rocksdb.blobdb.num.next COUNT : 0
1795643748.832	rocksdb.blobdb.num.prev COUNT : 0
1795643748.832	rocksdb.blobdb.num.keys.written COUNT : 0
1795643748.832	rocksdb.blobdb.num.keys.read COUNT : 0
1795643748.832	rocksdb.blobdb.bytes.written COUNT : 0
1795643748.832	rocksdb.blobdb.bytes.read COUNT : 0
1795643748.832	rocksdb.blobdb.write.inlined COUNT : 0
1795643748.832	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795643748.832	rocksdb.blobdb.write.blob COUNT : 0
1795643748.832	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795643748.832	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795643748.832	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795643748.832	rocksdb.blobdb.blob.file.synced COUNT : 0
1795643748.832	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795643748.832	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795643748.832	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795643748.832	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795643748.832	rocksdb.blobdb.gc.num.files COUNT : 0
1795643748.832	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795643748.832	rocksdb.blobdb.gc.failures COUNT : 0
1795643748.832	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795643748.832	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795643748.832	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795643748.832	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795643748.832	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795643748.832	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795643748.832	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795643748.832	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795643748.832	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795643748.832	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795643748.832	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795643748.832	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795643748.832	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795643748.832	rocksdb.txn.get.tryagain COUNT : 0
1795643748.832	rocksdb.number.multiget.keys.found COUNT : 0
1795643748.832	rocksdb.num.iterator.created COUNT : 0
1795643748.832	rocksdb.num.iterator.deleted COUNT : 0
1795643748.832	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795643748.832	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795643748.832	rocksdb.block.cache.compression.dict.add COUNT : 0
1795643748.832	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795643748.832	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795643748.832	rocksdb.block.cache.add.redundant COUNT : 0
1795643748.832	rocksdb.block.cache.index.add.redundant COUNT : 0
1795643748.832	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795643748.832	rocksdb.block.cache.data.add.redundant COUNT : 0
1795643748.832	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795643748.832	rocksdb.files.marked.trash COUNT : 0
1795643748.832	rocksdb.files.deleted.immediately COUNT : 1659385
1795643748.832	rocksdb.error.handler.bg.errro.count COUNT : 0
1795643748.832	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795643748.832	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795643748.832	rocksdb.error.handler.autoresume.count COUNT : 0
1795643748.832	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795643748.832	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795643748.832	rocksdb.memtable.payload.bytes.at.flush COUNT : 32014033616
1795643748.832	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1995392
1795643748.832	rocksdb.secondary.cache.hits COUNT : 0
1795643748.832	rocksdb.verify_checksum.read.bytes COUNT : 0
1795643748.832	rocksdb.backup.read.bytes COUNT : 0
1795643748.832	rocksdb.backup.write.bytes COUNT : 0
1795643748.832	rocksdb.remote.compact.read.bytes COUNT : 0
1795643748.832	rocksdb.remote.compact.write.bytes COUNT : 0
1795643748.832	rocksdb.hot.file.read.bytes COUNT : 0
1795643748.832	rocksdb.warm.file.read.bytes COUNT : 0
1795643748.832	rocksdb.cold.file.read.bytes COUNT : 0
1795643748.832	rocksdb.hot.file.read.count COUNT : 0
1795643748.832	rocksdb.warm.file.read.count COUNT : 0
1795643748.832	rocksdb.cold.file.read.count COUNT : 0
1795643748.832	rocksdb.last.level.read.bytes COUNT : 0
1795643748.832	rocksdb.last.level.read.count COUNT : 0
1795643748.832	rocksdb.non.last.level.read.bytes COUNT : 758184716422
1795643748.832	rocksdb.non.last.level.read.count COUNT : 186972881
1795643748.832	rocksdb.block.checksum.compute.count COUNT : 183641513
1795643748.832	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.832	rocksdb.db.write.micros P50 : 144.560968 P95 : 16922.915010 P99 : 63410.685549 P100 : 5392556.000000 COUNT : 30547908 SUM : 128741937216
1795643748.832	rocksdb.compaction.times.micros P50 : 90731.811420 P95 : 214087.792208 P99 : 494206.437927 P100 : 5400939.000000 COUNT : 262151 SUM : 27067243511
1795643748.832	rocksdb.compaction.times.cpu_micros P50 : 88857.996141 P95 : 206793.610761 P99 : 489396.336083 P100 : 5248484.000000 COUNT : 262151 SUM : 26446596184
1795643748.832	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.832	rocksdb.table.sync.micros P50 : 27863.911126 P95 : 145387.755102 P99 : 425471.497585 P100 : 1104538.000000 COUNT : 16346 SUM : 681457700
1795643748.832	rocksdb.compaction.outfile.sync.micros P50 : 6383.008650 P95 : 13548.249031 P99 : 24395.919380 P100 : 1139290.000000 COUNT : 1617112 SUM : 12995964402
1795643748.832	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.832	rocksdb.manifest.file.sync.micros P50 : 488.666660 P95 : 756.911341 P99 : 287409.965517 P100 : 1008286.000000 COUNT : 214947 SUM : 1589044010
1795643748.832	rocksdb.table.open.io.micros P50 : 236.234131 P95 : 410.403617 P99 : 589.395683 P100 : 487861.000000 COUNT : 1665684 SUM : 553564140
1795643748.832	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.832	rocksdb.read.block.compaction.micros P50 : 46.040131 P95 : 123.143394 P99 : 227.865738 P100 : 773012.000000 COUNT : 180310145 SUM : 12140443788
1795643748.832	rocksdb.read.block.get.micros P50 : 49.999255 P95 : 106.086591 P99 : 215.649829 P100 : 283218.000000 COUNT : 1665684 SUM : 112718789
1795643748.832	rocksdb.write.raw.block.micros P50 : 0.531308 P95 : 1.374428 P99 : 38.934350 P100 : 2036550.000000 COUNT : 185903611 SUM : 336635360
1795643748.832	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.832	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.832	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.832	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.numfiles.in.singlecompaction P50 : 5.774842 P95 : 9.571309 P99 : 9.922437 P100 : 58.000000 COUNT : 262865 SUM : 1627353
1795643748.833	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.db.write.stall P50 : 0.687297 P95 : 3731.158541 P99 : 16733.133825 P100 : 5382616.000000 COUNT : 23346074 SUM : 27979250974
1795643748.833	rocksdb.sst.read.micros P50 : 45.766031 P95 : 119.715698 P99 : 223.646400 P100 : 773002.000000 COUNT : 186972870 SUM : 12401523515
1795643748.833	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.bytes.per.write P50 : 1125.801809 P95 : 3507.358061 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23368271 SUM : 32172435204
1795643748.833	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.db.flush.micros P50 : 50713.545592 P95 : 221832.061069 P99 : 461620.229008 P100 : 5214213.000000 COUNT : 16345 SUM : 1115376127
1795643748.833	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643748.833	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1626639 SUM : 0
1795643748.833	
