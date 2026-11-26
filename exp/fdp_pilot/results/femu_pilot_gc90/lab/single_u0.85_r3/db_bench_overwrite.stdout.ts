1795610928.714	Initializing RocksDB Options from the specified file
1795610928.714	Initializing RocksDB Options from command-line flags
1795610939.449	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795610939.449	Values:     1024 bytes each (512 bytes after compression)
1795610939.449	Entries:    15273953
1795610939.449	Prefix:    0 bytes
1795610939.449	Keys per prefix:    0
1795610939.450	RawSize:    15149.0 MB (estimated)
1795610939.450	FileSize:   7691.0 MB (estimated)
1795610939.450	Write rate: 0 bytes/second
1795610939.450	Read rate: 0 ops/second
1795610939.450	Compression: NoCompression
1795610939.450	Compression sampling rate: 0
1795610939.450	Memtablerep: SkipListFactory
1795610939.450	Perf Level: 1
1795610939.450	------------------------------------------------
1795610939.450	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795643415.648	overwrite    :    4248.100 micros/op 940 ops/sec;    0.9 MB/s
1795643420.649	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795643420.650	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643430.648	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643440.648	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643450.689	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643460.697	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643470.723	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643480.724	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795643490.724	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795643490.725	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795643490.725	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795643490.725	
1795643490.725	Level Files Size(MB)
1795643490.725	--------------------
1795643490.725	  0        0        0
1795643490.725	  1        5        2
1795643490.725	  2       62       25
1795643490.725	  3      606      250
1795643490.725	  4     5682     2500
1795643490.725	  5    32636    15394
1795643490.725	  6        0        0
1795643490.725	
1795643490.727	
1795643490.727	
1795643490.727	** Compaction Stats [default] **
1795643490.727	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795643490.727	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795643490.727	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     26.8   1149.11            705.92     17683    0.065     23K      1       0.0       0.0
1795643490.727	  L1      5/0    2.44 MB   1.0     51.4    30.0     21.3      51.4     30.1       0.0   1.7     26.4     26.4   1991.74           1943.41      8824    0.226     52M   6846       0.0       0.0
1795643490.727	  L2     62/0   24.80 MB   1.0    153.4    30.1    123.3     153.3     30.0       0.0   5.1     25.9     25.9   6070.19           5927.04     64610    0.094    155M    51K       0.0       0.0
1795643490.727	  L3    606/0   249.91 MB   1.0    195.4    30.0    165.4     194.9     29.5       0.0   6.5     26.0     25.9   7698.61           7504.69     68227    0.113    198M   519K       0.0       0.0
1795643490.727	  L4   5682/0    2.44 GB   1.0    197.5    29.5    168.0     192.5     24.5       0.0   6.5     26.4     25.7   7660.80           7478.59     68402    0.112    200M  5067K       0.0       0.0
1795643490.727	  L5  32636/0   15.03 GB   0.6    115.6    24.5     91.0      93.8      2.7       0.0   3.8     29.5     24.0   4007.49           3918.29     53180    0.075    117M    22M       0.0       0.0
1795643490.727	 Sum  38991/0   17.74 GB   0.0    713.2   144.1    569.1     715.9    146.8       0.0  23.8     25.6     25.7  28577.94          27477.94    280926    0.102    724M    27M       0.0       0.0
1795643490.727	 Int      0/0    0.00 KB   0.0      0.3     0.0      0.2       0.2      0.0       0.0 238996593.0     26.9     22.4     10.16             10.14       108    0.094    270K    44K       0.0       0.0
1795643490.727	
1795643490.727	** Compaction Stats [default] **
1795643490.727	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795643490.727	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795643490.727	 Low      0/0    0.00 KB   0.0    713.2   144.1    569.1     685.9    116.8       0.0   0.0     26.6     25.6  27430.80          26773.91    263246    0.104    724M    27M       0.0       0.0
1795643490.727	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     26.8   1147.13            704.03     17678    0.065       0      0       0.0       0.0
1795643490.727	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    199.9      0.01              0.00         2    0.005       0      0       0.0       0.0
1795643490.727	
1795643490.727	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795643490.727	
1795643490.727	Uptime(secs): 32562.0 total, 25.1 interval
1795643490.727	Flush(GB): cumulative 30.039, interval 0.000
1795643490.727	AddFile(GB): cumulative 0.000, interval 0.000
1795643490.727	AddFile(Total Files): cumulative 0, interval 0
1795643490.727	AddFile(L0 Files): cumulative 0, interval 0
1795643490.727	AddFile(Keys): cumulative 0, interval 0
1795643490.727	Cumulative compaction: 715.94 GB write, 22.51 MB/s write, 713.23 GB read, 22.43 MB/s read, 28577.9 seconds
1795643490.727	Interval compaction: 0.22 GB write, 9.07 MB/s write, 0.27 GB read, 10.87 MB/s read, 10.2 seconds
1795643490.727	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 316832 slowdown for pending_compaction_bytes, 29 memtable_compaction, 7 memtable_slowdown, interval 0 total count
1795643490.727	Block cache LRUCache@0x654a63891a70#53718 capacity: 8.00 MB collections: 181 last_copies: 2 last_secs: 0.000124 secs_since: 145
1795643490.727	Block cache entry stats(count,size,portion): Misc(1,0.00 KB,0%)
1795643490.727	
1795643490.727	** File Read Latency Histogram By Level [default] **
1795643490.727	** Level 0 read latency histogram (micros):
1795643490.727	Count: 7720725 Average: 67.6657  StdDev: 472.38
1795643490.727	Min: 8  Median: 45.7701  Max: 377221
1795643490.727	Percentiles: P50: 45.77 P75: 65.34 P99: 224.36 P99.9: 408.18 P99.99: 1027.05
1795643490.727	------------------------------------------------------
1795643490.727	(       6,      10 ]        1   0.000%   0.000% 
1795643490.727	(      10,      15 ]       13   0.000%   0.000% 
1795643490.727	(      15,      22 ]        3   0.000%   0.000% 
1795643490.727	(      34,      51 ]  5575652  72.217%  72.217% ##############
1795643490.727	(      51,      76 ]   374604   4.852%  77.069% #
1795643490.727	(      76,     110 ]  1339963  17.355%  94.424% ###
1795643490.727	(     110,     170 ]   282975   3.665%  98.089% #
1795643490.727	(     170,     250 ]   103465   1.340%  99.429% 
1795643490.728	(     250,     380 ]    35433   0.459%  99.888% 
1795643490.728	(     380,     580 ]     6355   0.082%  99.971% 
1795643490.728	(     580,     870 ]     1318   0.017%  99.988% 
1795643490.728	(     870,    1300 ]      468   0.006%  99.994% 
1795643490.728	(    1300,    1900 ]      115   0.001%  99.995% 
1795643490.728	(    1900,    2900 ]       52   0.001%  99.996% 
1795643490.728	(    2900,    4400 ]       29   0.000%  99.996% 
1795643490.728	(    4400,    6600 ]       15   0.000%  99.997% 
1795643490.728	(    6600,    9900 ]        5   0.000%  99.997% 
1795643490.728	(    9900,   14000 ]        1   0.000%  99.997% 
1795643490.728	(   14000,   22000 ]        7   0.000%  99.997% 
1795643490.728	(   33000,   50000 ]        1   0.000%  99.997% 
1795643490.728	(   50000,   75000 ]       15   0.000%  99.997% 
1795643490.728	(   75000,  110000 ]       90   0.001%  99.998% 
1795643490.728	(  110000,  170000 ]       22   0.000%  99.998% 
1795643490.728	(  170000,  250000 ]       69   0.001%  99.999% 
1795643490.728	(  250000,  380000 ]       54   0.001% 100.000% 
1795643490.728	
1795643490.728	** Level 1 read latency histogram (micros):
1795643490.728	Count: 13595983 Average: 67.2584  StdDev: 184.49
1795643490.728	Min: 6  Median: 45.6528  Max: 376582
1795643490.728	Percentiles: P50: 45.65 P75: 61.66 P99: 218.22 P99.9: 377.42 P99.99: 903.09
1795643490.728	------------------------------------------------------
1795643490.728	(       4,       6 ]       13   0.000%   0.000% 
1795643490.728	(       6,      10 ]       96   0.001%   0.001% 
1795643490.728	(      10,      15 ]       35   0.000%   0.001% 
1795643490.728	(      15,      22 ]       10   0.000%   0.001% 
1795643490.728	(      22,      34 ]        3   0.000%   0.001% 
1795643490.728	(      34,      51 ]  9917214  72.942%  72.943% ###############
1795643490.728	(      51,      76 ]   656006   4.825%  77.768% #
1795643490.728	(      76,     110 ]  2304469  16.950%  94.718% ###
1795643490.728	(     110,     170 ]   476611   3.506%  98.224% #
1795643490.728	(     170,     250 ]   175141   1.288%  99.512% 
1795643490.728	(     250,     380 ]    53856   0.396%  99.908% 
1795643490.728	(     380,     580 ]     9352   0.069%  99.977% 
1795643490.728	(     580,     870 ]     1773   0.013%  99.990% 
1795643490.728	(     870,    1300 ]      577   0.004%  99.994% 
1795643490.728	(    1300,    1900 ]      200   0.001%  99.995% 
1795643490.728	(    1900,    2900 ]       80   0.001%  99.996% 
1795643490.728	(    2900,    4400 ]       81   0.001%  99.997% 
1795643490.728	(    4400,    6600 ]       14   0.000%  99.997% 
1795643490.728	(    6600,    9900 ]       15   0.000%  99.997% 
1795643490.728	(    9900,   14000 ]       11   0.000%  99.997% 
1795643490.728	(   14000,   22000 ]        5   0.000%  99.997% 
1795643490.728	(   22000,   33000 ]        3   0.000%  99.997% 
1795643490.728	(   33000,   50000 ]        7   0.000%  99.997% 
1795643490.728	(   50000,   75000 ]       23   0.000%  99.997% 
1795643490.728	(   75000,  110000 ]      123   0.001%  99.998% 
1795643490.728	(  110000,  170000 ]       63   0.000%  99.999% 
1795643490.728	(  170000,  250000 ]      123   0.001%  99.999% 
1795643490.728	(  250000,  380000 ]      105   0.001% 100.000% 
1795643490.728	
1795643490.728	** Level 2 read latency histogram (micros):
1795643490.728	Count: 40666729 Average: 66.9941  StdDev: 26.52
1795643490.728	Min: 5  Median: 45.8251  Max: 376143
1795643490.728	Percentiles: P50: 45.83 P75: 67.08 P99: 225.77 P99.9: 374.52 P99.99: 845.21
1795643490.728	------------------------------------------------------
1795643490.728	(       4,       6 ]      756   0.002%   0.002% 
1795643490.728	(       6,      10 ]     3226   0.008%   0.010% 
1795643490.728	(      10,      15 ]      824   0.002%   0.012% 
1795643490.728	(      15,      22 ]      151   0.000%   0.012% 
1795643490.728	(      22,      34 ]       83   0.000%   0.012% 
1795643490.728	(      34,      51 ] 29224479  71.863%  71.876% ##############
1795643490.728	(      51,      76 ]  1975689   4.858%  76.734% #
1795643490.728	(      76,     110 ]  7163710  17.616%  94.350% ####
1795643490.728	(     110,     170 ]  1481778   3.644%  97.993% #
1795643490.728	(     170,     250 ]   587228   1.444%  99.437% 
1795643490.728	(     250,     380 ]   196416   0.483%  99.920% 
1795643490.728	(     380,     580 ]    24517   0.060%  99.981% 
1795643490.728	(     580,     870 ]     4161   0.010%  99.991% 
1795643490.728	(     870,    1300 ]     1609   0.004%  99.995% 
1795643490.728	(    1300,    1900 ]      571   0.001%  99.996% 
1795643490.728	(    1900,    2900 ]      341   0.001%  99.997% 
1795643490.728	(    2900,    4400 ]      381   0.001%  99.998% 
1795643490.728	(    4400,    6600 ]       87   0.000%  99.998% 
1795643490.728	(    6600,    9900 ]       31   0.000%  99.998% 
1795643490.728	(    9900,   14000 ]       14   0.000%  99.998% 
1795643490.728	(   14000,   22000 ]        7   0.000%  99.998% 
1795643490.728	(   22000,   33000 ]        7   0.000%  99.998% 
1795643490.728	(   33000,   50000 ]        8   0.000%  99.998% 
1795643490.728	(   50000,   75000 ]       68   0.000%  99.999% 
1795643490.728	(   75000,  110000 ]      388   0.001% 100.000% 
1795643490.728	(  110000,  170000 ]      147   0.000% 100.000% 
1795643490.728	(  170000,  250000 ]      301   0.001% 100.001% 
1795643490.728	(  250000,  380000 ]      230   0.001% 100.001% 
1795643490.728	
1795643490.728	** Level 3 read latency histogram (micros):
1795643490.728	Count: 51705590 Average: 67.2104  StdDev: 51.11
1795643490.728	Min: 5  Median: 45.9099  Max: 374628
1795643490.728	Percentiles: P50: 45.91 P75: 69.91 P99: 224.12 P99.9: 370.35 P99.99: 811.78
1795643490.728	------------------------------------------------------
1795643490.728	(       4,       6 ]      731   0.001%   0.001% 
1795643490.728	(       6,      10 ]     2610   0.005%   0.006% 
1795643490.728	(      10,      15 ]      732   0.001%   0.008% 
1795643490.728	(      15,      22 ]      188   0.000%   0.008% 
1795643490.728	(      22,      34 ]       66   0.000%   0.008% 
1795643490.728	(      34,      51 ] 36895577  71.357%  71.365% ##############
1795643490.728	(      51,      76 ]  2485011   4.806%  76.171% #
1795643490.728	(      76,     110 ]  9324730  18.034%  94.206% ####
1795643490.728	(     110,     170 ]  1954602   3.780%  97.986% #
1795643490.728	(     170,     250 ]   774928   1.499%  99.485% 
1795643490.728	(     250,     380 ]   231926   0.449%  99.933% 
1795643490.728	(     380,     580 ]    26028   0.050%  99.984% 
1795643490.728	(     580,     870 ]     4117   0.008%  99.992% 
1795643490.728	(     870,    1300 ]     1771   0.003%  99.995% 
1795643490.728	(    1300,    1900 ]      686   0.001%  99.996% 
1795643490.728	(    1900,    2900 ]      503   0.001%  99.997% 
1795643490.728	(    2900,    4400 ]      411   0.001%  99.998% 
1795643490.728	(    4400,    6600 ]      103   0.000%  99.998% 
1795643490.728	(    6600,    9900 ]       30   0.000%  99.998% 
1795643490.728	(    9900,   14000 ]       23   0.000%  99.998% 
1795643490.728	(   14000,   22000 ]       14   0.000%  99.998% 
1795643490.728	(   22000,   33000 ]        7   0.000%  99.998% 
1795643490.728	(   33000,   50000 ]        6   0.000%  99.998% 
1795643490.728	(   50000,   75000 ]      147   0.000%  99.999% 
1795643490.728	(   75000,  110000 ]      471   0.001% 100.000% 
1795643490.728	(  110000,  170000 ]      253   0.000% 100.000% 
1795643490.728	(  170000,  250000 ]      400   0.001% 100.001% 
1795643490.728	(  250000,  380000 ]      246   0.000% 100.001% 
1795643490.728	
1795643490.728	** Level 4 read latency histogram (micros):
1795643490.728	Count: 50993407 Average: 66.7370  StdDev: 47.14
1795643490.728	Min: 5  Median: 45.9506  Max: 751594
1795643490.728	Percentiles: P50: 45.95 P75: 70.88 P99: 223.24 P99.9: 369.18 P99.99: 828.59
1795643490.728	------------------------------------------------------
1795643490.728	(       4,       6 ]      621   0.001%   0.001% 
1795643490.728	(       6,      10 ]     2245   0.004%   0.006% 
1795643490.728	(      10,      15 ]      627   0.001%   0.007% 
1795643490.728	(      15,      22 ]      124   0.000%   0.007% 
1795643490.728	(      22,      34 ]       40   0.000%   0.007% 
1795643490.728	(      34,      51 ] 36264401  71.116%  71.123% ##############
1795643490.728	(      51,      76 ]  2485777   4.875%  75.998% #
1795643490.728	(      76,     110 ]  9267719  18.174%  94.172% ####
1795643490.728	(     110,     170 ]  1958015   3.840%  98.012% #
1795643490.728	(     170,     250 ]   757198   1.485%  99.497% 
1795643490.728	(     250,     380 ]   224313   0.440%  99.937% 
1795643490.728	(     380,     580 ]    23594   0.046%  99.983% 
1795643490.728	(     580,     870 ]     4239   0.008%  99.991% 
1795643490.728	(     870,    1300 ]     2117   0.004%  99.995% 
1795643490.728	(    1300,    1900 ]      777   0.002%  99.997% 
1795643490.728	(    1900,    2900 ]      476   0.001%  99.998% 
1795643490.728	(    2900,    4400 ]      458   0.001%  99.999% 
1795643490.728	(    4400,    6600 ]      129   0.000%  99.999% 
1795643490.728	(    6600,    9900 ]       71   0.000%  99.999% 
1795643490.728	(    9900,   14000 ]       30   0.000%  99.999% 
1795643490.728	(   14000,   22000 ]       13   0.000%  99.999% 
1795643490.728	(   22000,   33000 ]       11   0.000%  99.999% 
1795643490.728	(   33000,   50000 ]        9   0.000%  99.999% 
1795643490.728	(   50000,   75000 ]      151   0.000% 100.000% 
1795643490.728	(   75000,  110000 ]      409   0.001% 100.000% 
1795643490.728	(  110000,  170000 ]      189   0.000% 100.001% 
1795643490.728	(  170000,  250000 ]      378   0.001% 100.001% 
1795643490.728	(  250000,  380000 ]      194   0.000% 100.002% 
1795643490.728	(  380000,  570000 ]        1   0.000% 100.002% 
1795643490.728	(  570000,  860000 ]        2   0.000% 100.002% 
1795643490.728	
1795643490.728	** Level 5 read latency histogram (micros):
1795643490.728	Count: 24207295 Average: 65.4836  StdDev: 26.15
1795643490.728	Min: 5  Median: 45.5983  Max: 369925
1795643490.728	Percentiles: P50: 45.60 P75: 58.88 P99: 223.79 P99.9: 374.87 P99.99: 1699.95
1795643490.728	------------------------------------------------------
1795643490.728	(       4,       6 ]      324   0.001%   0.001% 
1795643490.728	(       6,      10 ]     1727   0.007%   0.008% 
1795643490.728	(      10,      15 ]      457   0.002%   0.010% 
1795643490.728	(      15,      22 ]      121   0.000%   0.011% 
1795643490.728	(      22,      34 ]       30   0.000%   0.011% 
1795643490.728	(      34,      51 ] 17736834  73.271%  73.282% ###############
1795643490.728	(      51,      76 ]  1320437   5.455%  78.736% #
1795643490.728	(      76,     110 ]  3886973  16.057%  94.793% ###
1795643490.728	(     110,     170 ]   778841   3.217%  98.011% #
1795643490.728	(     170,     250 ]   356137   1.471%  99.482% 
1795643490.728	(     250,     380 ]   105367   0.435%  99.917% 
1795643490.728	(     380,     580 ]    11002   0.045%  99.963% 
1795643490.728	(     580,     870 ]     3675   0.015%  99.978% 
1795643490.728	(     870,    1300 ]     2434   0.010%  99.988% 
1795643490.728	(    1300,    1900 ]      773   0.003%  99.991% 
1795643490.728	(    1900,    2900 ]      633   0.003%  99.994% 
1795643490.728	(    2900,    4400 ]      653   0.003%  99.996% 
1795643490.728	(    4400,    6600 ]      282   0.001%  99.998% 
1795643490.728	(    6600,    9900 ]      196   0.001%  99.998% 
1795643490.728	(    9900,   14000 ]       55   0.000%  99.999% 
1795643490.728	(   14000,   22000 ]       10   0.000%  99.999% 
1795643490.728	(   22000,   33000 ]        1   0.000%  99.999% 
1795643490.728	(   33000,   50000 ]        2   0.000%  99.999% 
1795643490.728	(   50000,   75000 ]       38   0.000%  99.999% 
1795643490.728	(   75000,  110000 ]      232   0.001% 100.000% 
1795643490.728	(  110000,  170000 ]       83   0.000% 100.000% 
1795643490.728	(  170000,  250000 ]      162   0.001% 100.001% 
1795643490.728	(  250000,  380000 ]      100   0.000% 100.001% 
1795643490.728	
1795643490.728	
1795643490.728	** DB Stats **
1795643490.728	Uptime(secs): 32562.0 total, 25.1 interval
1795643490.728	Cumulative writes: 30M writes, 30M keys, 23M commit groups, 1.3 writes per commit group, ingest: 29.96 GB, 0.94 MB/s
1795643490.728	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.96 GB, 0.94 MB/s
1795643490.728	Cumulative stall: 07:45:50.938 H:M:S, 85.8 percent
1795643490.728	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795643490.728	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795643490.728	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795643490.728	
1795643490.728	STATISTICS:
1795643490.728	rocksdb.block.cache.miss COUNT : 182156451
1795643490.728	rocksdb.block.cache.hit COUNT : 0
1795643490.728	rocksdb.block.cache.add COUNT : 0
1795643490.728	rocksdb.block.cache.add.failures COUNT : 0
1795643490.728	rocksdb.block.cache.index.miss COUNT : 0
1795643490.728	rocksdb.block.cache.index.hit COUNT : 0
1795643490.728	rocksdb.block.cache.index.add COUNT : 0
1795643490.728	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795643490.728	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795643490.728	rocksdb.block.cache.filter.miss COUNT : 0
1795643490.728	rocksdb.block.cache.filter.hit COUNT : 0
1795643490.728	rocksdb.block.cache.filter.add COUNT : 0
1795643490.728	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795643490.728	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795643490.728	rocksdb.block.cache.data.miss COUNT : 182156451
1795643490.728	rocksdb.block.cache.data.hit COUNT : 0
1795643490.728	rocksdb.block.cache.data.add COUNT : 0
1795643490.728	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795643490.728	rocksdb.block.cache.bytes.read COUNT : 0
1795643490.728	rocksdb.block.cache.bytes.write COUNT : 0
1795643490.728	rocksdb.bloom.filter.useful COUNT : 0
1795643490.728	rocksdb.bloom.filter.full.positive COUNT : 0
1795643490.728	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795643490.728	rocksdb.bloom.filter.micros COUNT : 0
1795643490.728	rocksdb.persistent.cache.hit COUNT : 0
1795643490.728	rocksdb.persistent.cache.miss COUNT : 0
1795643490.728	rocksdb.sim.block.cache.hit COUNT : 0
1795643490.728	rocksdb.sim.block.cache.miss COUNT : 0
1795643490.728	rocksdb.memtable.hit COUNT : 0
1795643490.728	rocksdb.memtable.miss COUNT : 0
1795643490.728	rocksdb.l0.hit COUNT : 0
1795643490.728	rocksdb.l1.hit COUNT : 0
1795643490.728	rocksdb.l2andup.hit COUNT : 0
1795643490.728	rocksdb.compaction.key.drop.new COUNT : 27791519
1795643490.728	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795643490.728	rocksdb.compaction.key.drop.range_del COUNT : 0
1795643490.728	rocksdb.compaction.key.drop.user COUNT : 0
1795643490.728	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795643490.728	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795643490.728	rocksdb.compaction.cancelled COUNT : 0
1795643490.728	rocksdb.number.keys.written COUNT : 30547908
1795643490.728	rocksdb.number.keys.read COUNT : 0
1795643490.728	rocksdb.number.keys.updated COUNT : 0
1795643490.728	rocksdb.bytes.written COUNT : 32171529300
1795643490.728	rocksdb.bytes.read COUNT : 0
1795643490.728	rocksdb.number.db.seek COUNT : 0
1795643490.728	rocksdb.number.db.next COUNT : 0
1795643490.728	rocksdb.number.db.prev COUNT : 0
1795643490.728	rocksdb.number.db.seek.found COUNT : 0
1795643490.728	rocksdb.number.db.next.found COUNT : 0
1795643490.728	rocksdb.number.db.prev.found COUNT : 0
1795643490.728	rocksdb.db.iter.bytes.read COUNT : 0
1795643490.728	rocksdb.no.file.closes COUNT : 0
1795643490.728	rocksdb.no.file.opens COUNT : 1684285
1795643490.728	rocksdb.no.file.errors COUNT : 0
1795643490.728	rocksdb.l0.slowdown.micros COUNT : 0
1795643490.728	rocksdb.memtable.compaction.micros COUNT : 0
1795643490.728	rocksdb.l0.num.files.stall.micros COUNT : 0
1795643490.728	rocksdb.stall.micros COUNT : 27950937686
1795643490.728	rocksdb.db.mutex.wait.micros COUNT : 0
1795643490.728	rocksdb.rate.limit.delay.millis COUNT : 0
1795643490.728	rocksdb.num.iterators COUNT : 0
1795643490.728	rocksdb.number.multiget.get COUNT : 0
1795643490.728	rocksdb.number.multiget.keys.read COUNT : 0
1795643490.728	rocksdb.number.multiget.bytes.read COUNT : 0
1795643490.728	rocksdb.number.deletes.filtered COUNT : 0
1795643490.728	rocksdb.number.merge.failures COUNT : 0
1795643490.728	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795643490.728	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795643490.728	rocksdb.number.reseeks.iteration COUNT : 0
1795643490.728	rocksdb.getupdatessince.calls COUNT : 0
1795643490.728	rocksdb.block.cachecompressed.miss COUNT : 0
1795643490.728	rocksdb.block.cachecompressed.hit COUNT : 0
1795643490.728	rocksdb.block.cachecompressed.add COUNT : 0
1795643490.728	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795643490.728	rocksdb.wal.synced COUNT : 0
1795643490.728	rocksdb.wal.bytes COUNT : 32171529300
1795643490.728	rocksdb.write.self COUNT : 23292779
1795643490.728	rocksdb.write.other COUNT : 7255129
1795643490.728	rocksdb.write.timeout COUNT : 0
1795643490.728	rocksdb.write.wal COUNT : 30547908
1795643490.728	rocksdb.compact.read.bytes COUNT : 765692247890
1795643490.728	rocksdb.compact.write.bytes COUNT : 736487390270
1795643490.728	rocksdb.flush.write.bytes COUNT : 32257634383
1795643490.728	rocksdb.compact.read.marked.bytes COUNT : 0
1795643490.728	rocksdb.compact.read.periodic.bytes COUNT : 0
1795643490.728	rocksdb.compact.read.ttl.bytes COUNT : 0
1795643490.728	rocksdb.compact.write.marked.bytes COUNT : 0
1795643490.728	rocksdb.compact.write.periodic.bytes COUNT : 0
1795643490.728	rocksdb.compact.write.ttl.bytes COUNT : 0
1795643490.728	rocksdb.number.direct.load.table.properties COUNT : 0
1795643490.728	rocksdb.number.superversion_acquires COUNT : 0
1795643490.728	rocksdb.number.superversion_releases COUNT : 0
1795643490.728	rocksdb.number.superversion_cleanups COUNT : 0
1795643490.728	rocksdb.number.block.compressed COUNT : 0
1795643490.728	rocksdb.number.block.decompressed COUNT : 0
1795643490.728	rocksdb.number.block.not_compressed COUNT : 0
1795643490.728	rocksdb.merge.operation.time.nanos COUNT : 0
1795643490.728	rocksdb.filter.operation.time.nanos COUNT : 0
1795643490.728	rocksdb.row.cache.hit COUNT : 0
1795643490.728	rocksdb.row.cache.miss COUNT : 0
1795643490.728	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795643490.728	rocksdb.read.amp.total.read.bytes COUNT : 0
1795643490.728	rocksdb.number.rate_limiter.drains COUNT : 0
1795643490.728	rocksdb.number.iter.skip COUNT : 0
1795643490.728	rocksdb.blobdb.num.put COUNT : 0
1795643490.728	rocksdb.blobdb.num.write COUNT : 0
1795643490.728	rocksdb.blobdb.num.get COUNT : 0
1795643490.728	rocksdb.blobdb.num.multiget COUNT : 0
1795643490.728	rocksdb.blobdb.num.seek COUNT : 0
1795643490.728	rocksdb.blobdb.num.next COUNT : 0
1795643490.728	rocksdb.blobdb.num.prev COUNT : 0
1795643490.728	rocksdb.blobdb.num.keys.written COUNT : 0
1795643490.728	rocksdb.blobdb.num.keys.read COUNT : 0
1795643490.728	rocksdb.blobdb.bytes.written COUNT : 0
1795643490.728	rocksdb.blobdb.bytes.read COUNT : 0
1795643490.728	rocksdb.blobdb.write.inlined COUNT : 0
1795643490.728	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795643490.728	rocksdb.blobdb.write.blob COUNT : 0
1795643490.728	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795643490.728	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795643490.728	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795643490.728	rocksdb.blobdb.blob.file.synced COUNT : 0
1795643490.728	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795643490.728	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795643490.728	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795643490.728	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795643490.728	rocksdb.blobdb.gc.num.files COUNT : 0
1795643490.728	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795643490.728	rocksdb.blobdb.gc.failures COUNT : 0
1795643490.728	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795643490.728	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795643490.728	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795643490.728	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795643490.728	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795643490.728	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795643490.728	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795643490.728	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795643490.728	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795643490.728	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795643490.728	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795643490.728	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795643490.728	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795643490.728	rocksdb.txn.get.tryagain COUNT : 0
1795643490.728	rocksdb.number.multiget.keys.found COUNT : 0
1795643490.728	rocksdb.num.iterator.created COUNT : 0
1795643490.728	rocksdb.num.iterator.deleted COUNT : 0
1795643490.728	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795643490.728	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795643490.728	rocksdb.block.cache.compression.dict.add COUNT : 0
1795643490.728	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795643490.728	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795643490.728	rocksdb.block.cache.add.redundant COUNT : 0
1795643490.728	rocksdb.block.cache.index.add.redundant COUNT : 0
1795643490.728	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795643490.728	rocksdb.block.cache.data.add.redundant COUNT : 0
1795643490.728	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795643490.728	rocksdb.files.marked.trash COUNT : 0
1795643490.728	rocksdb.files.deleted.immediately COUNT : 1680706
1795643490.728	rocksdb.error.handler.bg.errro.count COUNT : 0
1795643490.728	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795643490.728	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795643490.728	rocksdb.error.handler.autoresume.count COUNT : 0
1795643490.728	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795643490.728	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795643490.728	rocksdb.memtable.payload.bytes.at.flush COUNT : 32013964448
1795643490.728	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1755400
1795643490.728	rocksdb.secondary.cache.hits COUNT : 0
1795643490.728	rocksdb.verify_checksum.read.bytes COUNT : 0
1795643490.728	rocksdb.backup.read.bytes COUNT : 0
1795643490.728	rocksdb.backup.write.bytes COUNT : 0
1795643490.729	rocksdb.remote.compact.read.bytes COUNT : 0
1795643490.729	rocksdb.remote.compact.write.bytes COUNT : 0
1795643490.729	rocksdb.hot.file.read.bytes COUNT : 0
1795643490.729	rocksdb.warm.file.read.bytes COUNT : 0
1795643490.729	rocksdb.cold.file.read.bytes COUNT : 0
1795643490.729	rocksdb.hot.file.read.count COUNT : 0
1795643490.729	rocksdb.warm.file.read.count COUNT : 0
1795643490.729	rocksdb.cold.file.read.count COUNT : 0
1795643490.729	rocksdb.last.level.read.bytes COUNT : 0
1795643490.729	rocksdb.last.level.read.count COUNT : 0
1795643490.729	rocksdb.non.last.level.read.bytes COUNT : 765949068710
1795643490.729	rocksdb.non.last.level.read.count COUNT : 188893591
1795643490.729	rocksdb.block.checksum.compute.count COUNT : 185525021
1795643490.729	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.db.write.micros P50 : 134.961726 P95 : 17359.095101 P99 : 64157.169051 P100 : 5514302.000000 COUNT : 30547908 SUM : 129713778366
1795643490.729	rocksdb.compaction.times.micros P50 : 92151.650534 P95 : 221903.798134 P99 : 473078.589316 P100 : 5716896.000000 COUNT : 263246 SUM : 27430797337
1795643490.729	rocksdb.compaction.times.cpu_micros P50 : 90175.356385 P95 : 214600.753842 P99 : 465253.758644 P100 : 4832511.000000 COUNT : 263246 SUM : 26773913122
1795643490.729	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.table.sync.micros P50 : 26123.986437 P95 : 129887.640449 P99 : 364533.957845 P100 : 1287631.000000 COUNT : 17680 SUM : 674929894
1795643490.729	rocksdb.compaction.outfile.sync.micros P50 : 6434.262487 P95 : 13633.528410 P99 : 24231.918932 P100 : 1035755.000000 COUNT : 1634356 SUM : 13109340341
1795643490.729	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.manifest.file.sync.micros P50 : 487.513825 P95 : 732.079401 P99 : 242632.189974 P100 : 958536.000000 COUNT : 218524 SUM : 1533477622
1795643490.729	rocksdb.table.open.io.micros P50 : 236.944384 P95 : 417.385299 P99 : 600.612223 P100 : 376379.000000 COUNT : 1684285 SUM : 576809057
1795643490.729	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.read.block.compaction.micros P50 : 46.126796 P95 : 124.128971 P99 : 228.081034 P100 : 751598.000000 COUNT : 182156451 SUM : 12346109594
1795643490.729	rocksdb.read.block.get.micros P50 : 50.505894 P95 : 106.655415 P99 : 218.830744 P100 : 369087.000000 COUNT : 1684285 SUM : 116889343
1795643490.729	rocksdb.write.raw.block.micros P50 : 0.532067 P95 : 1.411506 P99 : 38.510236 P100 : 2061762.000000 COUNT : 187805907 SUM : 338649675
1795643490.729	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.numfiles.in.singlecompaction P50 : 5.841680 P95 : 9.583129 P99 : 9.924198 P100 : 54.000000 COUNT : 263955 SUM : 1646003
1795643490.729	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.db.write.stall P50 : 0.687889 P95 : 3772.500383 P99 : 16689.081656 P100 : 5498801.000000 COUNT : 23270690 SUM : 27954104525
1795643490.729	rocksdb.sst.read.micros P50 : 45.837375 P95 : 120.666842 P99 : 223.893447 P100 : 751594.000000 COUNT : 188893591 SUM : 12625122757
1795643490.729	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.bytes.per.write P50 : 1126.515920 P95 : 3519.607949 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23292779 SUM : 32171529300
1795643490.729	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.db.flush.micros P50 : 48528.388645 P95 : 206868.421053 P99 : 394604.324324 P100 : 5396113.000000 COUNT : 17678 SUM : 1147130774
1795643490.729	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795643490.729	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1645294 SUM : 0
1795643490.729	
