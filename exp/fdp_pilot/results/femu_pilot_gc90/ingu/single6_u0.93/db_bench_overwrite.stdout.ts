1794893600.341	Initializing RocksDB Options from the specified file
1794893600.341	Initializing RocksDB Options from command-line flags
1794893617.246	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1794893617.246	Values:     1024 bytes each (512 bytes after compression)
1794893617.246	Entries:    17191679
1794893617.246	Prefix:    0 bytes
1794893617.246	Keys per prefix:    0
1794893617.246	RawSize:    17051.1 MB (estimated)
1794893617.246	FileSize:   8656.7 MB (estimated)
1794893617.246	Write rate: 0 bytes/second
1794893617.246	Read rate: 0 ops/second
1794893617.246	Compression: NoCompression
1794893617.246	Compression sampling rate: 0
1794893617.246	Memtablerep: SkipListFactory
1794893617.246	Perf Level: 1
1794893617.246	------------------------------------------------
1794893617.246	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1794969586.849	overwrite    :    8829.883 micros/op 452 ops/sec;    0.4 MB/s
1794969591.836	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794969591.857	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969601.837	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969611.837	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969621.840	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969631.843	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969641.843	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969651.843	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969661.843	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969671.843	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969681.847	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969691.847	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969701.847	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969711.848	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969721.848	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969731.850	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969741.851	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969751.851	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969761.851	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969771.851	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794969781.852	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794969781.855	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794969781.855	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794969781.861	
1794969781.861	Level Files Size(MB)
1794969781.861	--------------------
1794969781.861	  0        1        2
1794969781.861	  1        5        2
1794969781.861	  2       59       25
1794969781.861	  3      602      250
1794969781.861	  4     5712     2500
1794969781.861	  5    36028    17326
1794969781.861	  6        0        0
1794969781.861	
1794969781.899	
1794969781.899	
1794969781.899	** Compaction Stats [default] **
1794969781.899	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794969781.899	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794969781.899	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0      5.5   6312.57           3396.51     18322    0.345     38K     10       0.0       0.0
1794969781.899	  L1      5/0    2.30 MB   0.9     56.5    33.8     22.7      56.6     33.8       0.0   1.7      7.9      7.9   7314.57           5677.34      9128    0.801     57M   6962       0.0       0.0
1794969781.899	  L2     59/0   24.82 MB   1.0    164.6    33.8    130.8     164.6     33.8       0.0   4.9      7.4      7.4  22925.52          13196.63     72410    0.317    167M    51K       0.0       0.0
1794969781.899	  L3    602/0   249.68 MB   1.0    219.0    33.8    185.2     218.5     33.3       0.0   6.5      8.3      8.2  27176.96          16483.60     76734    0.354    222M   515K       0.0       0.0
1794969781.899	  L4   5712/0    2.44 GB   1.0    222.5    33.3    189.2     217.5     28.3       0.0   6.5      4.3      4.2  52960.69          47251.25     77104    0.687    225M  5055K       0.0       0.0
1794969781.899	  L5  36028/0   16.92 GB   0.7    144.9    28.3    116.6     119.4      2.7       0.0   4.2      4.5      3.7  32711.60          29104.23     62798    0.521    147M    25M       0.0       0.0
1794969781.899	 Sum  42407/0   19.63 GB   0.0    807.6   163.0    644.6     810.3    165.7       0.0  24.0      5.5      5.6 149401.92         115109.57    316496    0.472    820M    31M       0.0       0.0
1794969781.899	 Int      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0 27103923.0      9.9      8.4      3.07              3.07        10    0.307     30K   4557       0.0       0.0
1794969781.899	
1794969781.899	** Compaction Stats [default] **
1794969781.899	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794969781.899	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794969781.899	 Low      0/0    0.00 KB   0.0    807.6   163.0    644.6     776.5    131.9       0.0   0.0      5.8      5.6 143093.73         111717.37    298178    0.480    820M    31M       0.0       0.0
1794969781.899	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0      5.5   6308.18           3392.19     18317    0.344       0      0       0.0       0.0
1794969781.899	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    200.6      0.00              0.00         1    0.005       0      0       0.0       0.0
1794969781.899	
1794969781.899	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1794969781.899	
1794969781.899	Uptime(secs): 76181.5 total, 5.5 interval
1794969781.899	Flush(GB): cumulative 33.808, interval 0.000
1794969781.899	AddFile(GB): cumulative 0.000, interval 0.000
1794969781.899	AddFile(Total Files): cumulative 0, interval 0
1794969781.899	AddFile(L0 Files): cumulative 0, interval 0
1794969781.899	AddFile(Keys): cumulative 0, interval 0
1794969781.899	Cumulative compaction: 810.32 GB write, 10.89 MB/s write, 807.61 GB read, 10.86 MB/s read, 149401.9 seconds
1794969781.899	Interval compaction: 0.03 GB write, 4.68 MB/s write, 0.03 GB read, 5.51 MB/s read, 3.1 seconds
1794969781.899	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 353881 slowdown for pending_compaction_bytes, 14 memtable_compaction, 3 memtable_slowdown, interval 0 total count
1794969781.899	Block cache LRUCache@0x5dfc6041ea70#79503 capacity: 8.00 MB collections: 423 last_copies: 2 last_secs: 7.3e-05 secs_since: 125
1794969781.900	Block cache entry stats(count,size,portion): Misc(5,16.69 KB,0.203705%)
1794969781.900	
1794969781.900	** File Read Latency Histogram By Level [default] **
1794969781.900	** Level 0 read latency histogram (micros):
1794969781.900	Count: 8684765 Average: 228.8958  StdDev: 340.45
1794969781.900	Min: 11  Median: 62.2131  Max: 2038024
1794969781.900	Percentiles: P50: 62.21 P75: 95.50 P99: 1028.23 P99.9: 20240.63 P99.99: 264333.43
1794969781.900	------------------------------------------------------
1794969781.900	(      10,      15 ]        3   0.000%   0.000% 
1794969781.900	(      15,      22 ]        2   0.000%   0.000% 
1794969781.900	(      22,      34 ]        3   0.000%   0.000% 
1794969781.900	(      34,      51 ]  3243896  37.352%  37.352% #######
1794969781.900	(      51,      76 ]  2449088  28.200%  65.551% ######
1794969781.900	(      76,     110 ]  1430400  16.470%  82.022% ###
1794969781.900	(     110,     170 ]   794723   9.151%  91.172% ##
1794969781.900	(     170,     250 ]   356056   4.100%  95.272% #
1794969781.900	(     250,     380 ]   176781   2.036%  97.308% 
1794969781.900	(     380,     580 ]    91908   1.058%  98.366% 
1794969781.900	(     580,     870 ]    47039   0.542%  98.908% 
1794969781.900	(     870,    1300 ]    21791   0.251%  99.159% 
1794969781.900	(    1300,    1900 ]    16115   0.186%  99.344% 
1794969781.900	(    1900,    2900 ]    17680   0.204%  99.548% 
1794969781.900	(    2900,    4400 ]    15299   0.176%  99.724% 
1794969781.900	(    4400,    6600 ]     7634   0.088%  99.812% 
1794969781.900	(    6600,    9900 ]     3659   0.042%  99.854% 
1794969781.900	(    9900,   14000 ]     2078   0.024%  99.878% 
1794969781.900	(   14000,   22000 ]     2468   0.028%  99.906% 
1794969781.900	(   22000,   33000 ]     1980   0.023%  99.929% 
1794969781.900	(   33000,   50000 ]     1436   0.017%  99.946% 
1794969781.900	(   50000,   75000 ]      908   0.010%  99.956% 
1794969781.900	(   75000,  110000 ]     1648   0.019%  99.975% 
1794969781.900	(  110000,  170000 ]      597   0.007%  99.982% 
1794969781.900	(  170000,  250000 ]      643   0.007%  99.989% 
1794969781.900	(  250000,  380000 ]      558   0.006%  99.996% 
1794969781.900	(  380000,  570000 ]      211   0.002%  99.998% 
1794969781.900	(  570000,  860000 ]       88   0.001%  99.999% 
1794969781.900	(  860000, 1200000 ]       45   0.001% 100.000% 
1794969781.900	( 1200000, 1900000 ]       27   0.000% 100.000% 
1794969781.900	( 1900000, 2900000 ]        1   0.000% 100.000% 
1794969781.900	
1794969781.900	** Level 1 read latency histogram (micros):
1794969781.900	Count: 14954347 Average: 192.4577  StdDev: 147.60
1794969781.900	Min: 10  Median: 60.9317  Max: 24987781
1794969781.900	Percentiles: P50: 60.93 P75: 92.47 P99: 685.97 P99.9: 9537.60 P99.99: 204765.89
1794969781.900	------------------------------------------------------
1794969781.900	(       6,      10 ]       69   0.000%   0.000% 
1794969781.900	(      10,      15 ]      221   0.001%   0.002% 
1794969781.900	(      15,      22 ]       50   0.000%   0.002% 
1794969781.900	(      22,      34 ]       32   0.000%   0.002% 
1794969781.900	(      34,      51 ]  5791368  38.727%  38.729% ########
1794969781.900	(      51,      76 ]  4242554  28.370%  67.100% ######
1794969781.900	(      76,     110 ]  2439531  16.313%  83.413% ###
1794969781.900	(     110,     170 ]  1322694   8.845%  92.258% ##
1794969781.900	(     170,     250 ]   594134   3.973%  96.231% #
1794969781.900	(     250,     380 ]   265114   1.773%  98.003% 
1794969781.900	(     380,     580 ]   124885   0.835%  98.838% 
1794969781.900	(     580,     870 ]    66094   0.442%  99.280% 
1794969781.900	(     870,    1300 ]    28703   0.192%  99.472% 
1794969781.900	(    1300,    1900 ]    17658   0.118%  99.590% 
1794969781.900	(    1900,    2900 ]    18653   0.125%  99.715% 
1794969781.900	(    2900,    4400 ]    16305   0.109%  99.824% 
1794969781.900	(    4400,    6600 ]     7896   0.053%  99.877% 
1794969781.900	(    6600,    9900 ]     3855   0.026%  99.903% 
1794969781.900	(    9900,   14000 ]     2051   0.014%  99.917% 
1794969781.900	(   14000,   22000 ]     2358   0.016%  99.932% 
1794969781.900	(   22000,   33000 ]     1822   0.012%  99.944% 
1794969781.900	(   33000,   50000 ]     1333   0.009%  99.953% 
1794969781.900	(   50000,   75000 ]      819   0.005%  99.959% 
1794969781.900	(   75000,  110000 ]     3607   0.024%  99.983% 
1794969781.900	(  110000,  170000 ]      684   0.005%  99.988% 
1794969781.900	(  170000,  250000 ]      832   0.006%  99.993% 
1794969781.900	(  250000,  380000 ]      665   0.004%  99.998% 
1794969781.900	(  380000,  570000 ]      304   0.002% 100.000% 
1794969781.900	(  570000,  860000 ]      130   0.001% 100.000% 
1794969781.900	(  860000, 1200000 ]       30   0.000% 100.001% 
1794969781.900	( 1200000, 1900000 ]       35   0.000% 100.001% 
1794969781.900	( 1900000, 2900000 ]        3   0.000% 100.001% 
1794969781.900	( 22000000, 33000000 ]        1   0.000% 100.001% 
1794969781.900	
1794969781.900	** Level 2 read latency histogram (micros):
1794969781.900	Count: 43645616 Average: 158.8478  StdDev: 80.53
1794969781.900	Min: 9  Median: 62.0559  Max: 24266392
1794969781.900	Percentiles: P50: 62.06 P75: 95.01 P99: 523.27 P99.9: 4371.56 P99.99: 105008.86
1794969781.900	------------------------------------------------------
1794969781.900	(       6,      10 ]      208   0.000%   0.000% 
1794969781.900	(      10,      15 ]     1617   0.004%   0.004% 
1794969781.900	(      15,      22 ]      273   0.001%   0.005% 
1794969781.900	(      22,      34 ]      168   0.000%   0.005% 
1794969781.900	(      34,      51 ] 16536404  37.888%  37.893% ########
1794969781.900	(      51,      76 ] 11948680  27.377%  65.270% #####
1794969781.900	(      76,     110 ]  7596162  17.404%  82.674% ###
1794969781.900	(     110,     170 ]  4170524   9.555%  92.229% ##
1794969781.900	(     170,     250 ]  1913980   4.385%  96.615% #
1794969781.900	(     250,     380 ]   826460   1.894%  98.508% 
1794969781.900	(     380,     580 ]   299690   0.687%  99.195% 
1794969781.900	(     580,     870 ]   148231   0.340%  99.534% 
1794969781.900	(     870,    1300 ]    62756   0.144%  99.678% 
1794969781.900	(    1300,    1900 ]    33922   0.078%  99.756% 
1794969781.900	(    1900,    2900 ]    34353   0.079%  99.835% 
1794969781.900	(    2900,    4400 ]    29094   0.067%  99.901% 
1794969781.900	(    4400,    6600 ]    13878   0.032%  99.933% 
1794969781.900	(    6600,    9900 ]     6751   0.015%  99.949% 
1794969781.900	(    9900,   14000 ]     3126   0.007%  99.956% 
1794969781.900	(   14000,   22000 ]     2946   0.007%  99.962% 
1794969781.900	(   22000,   33000 ]     2267   0.005%  99.968% 
1794969781.900	(   33000,   50000 ]     1688   0.004%  99.972% 
1794969781.900	(   50000,   75000 ]     1264   0.003%  99.974% 
1794969781.900	(   75000,  110000 ]     7942   0.018%  99.993% 
1794969781.900	(  110000,  170000 ]     1222   0.003%  99.995% 
1794969781.900	(  170000,  250000 ]     2060   0.005% 100.000% 
1794969781.900	(  250000,  380000 ]     1664   0.004% 100.004% 
1794969781.900	(  380000,  570000 ]      695   0.002% 100.006% 
1794969781.900	(  570000,  860000 ]      234   0.001% 100.006% 
1794969781.900	(  860000, 1200000 ]       50   0.000% 100.006% 
1794969781.900	( 1200000, 1900000 ]       35   0.000% 100.006% 
1794969781.900	( 1900000, 2900000 ]        4   0.000% 100.006% 
1794969781.900	( 22000000, 33000000 ]        1   0.000% 100.006% 
1794969781.900	
1794969781.900	** Level 3 read latency histogram (micros):
1794969781.900	Count: 57963123 Average: 187.9379  StdDev: 33.10
1794969781.900	Min: 10  Median: 62.4150  Max: 27172407
1794969781.900	Percentiles: P50: 62.42 P75: 95.74 P99: 591.19 P99.9: 8312.80 P99.99: 138240.40
1794969781.900	------------------------------------------------------
1794969781.900	(       6,      10 ]      182   0.000%   0.000% 
1794969781.900	(      10,      15 ]      989   0.002%   0.002% 
1794969781.900	(      15,      22 ]      177   0.000%   0.002% 
1794969781.900	(      22,      34 ]      132   0.000%   0.003% 
1794969781.900	(      34,      51 ] 21695057  37.429%  37.432% #######
1794969781.900	(      51,      76 ] 15954912  27.526%  64.958% ######
1794969781.900	(      76,     110 ] 10024424  17.294%  82.252% ###
1794969781.900	(     110,     170 ]  5497200   9.484%  91.736% ##
1794969781.900	(     170,     250 ]  2665167   4.598%  96.334% #
1794969781.900	(     250,     380 ]  1143595   1.973%  98.307% 
1794969781.900	(     380,     580 ]   395501   0.682%  98.989% 
1794969781.900	(     580,     870 ]   159553   0.275%  99.265% 
1794969781.900	(     870,    1300 ]    74635   0.129%  99.393% 
1794969781.900	(    1300,    1900 ]    76026   0.131%  99.525% 
1794969781.900	(    1900,    2900 ]    92394   0.159%  99.684% 
1794969781.900	(    2900,    4400 ]    79742   0.138%  99.822% 
1794969781.900	(    4400,    6600 ]    36777   0.063%  99.885% 
1794969781.900	(    6600,    9900 ]    16756   0.029%  99.914% 
1794969781.900	(    9900,   14000 ]     8179   0.014%  99.928% 
1794969781.900	(   14000,   22000 ]     8799   0.015%  99.943% 
1794969781.900	(   22000,   33000 ]     6983   0.012%  99.955% 
1794969781.900	(   33000,   50000 ]     4955   0.009%  99.964% 
1794969781.900	(   50000,   75000 ]     3485   0.006%  99.970% 
1794969781.900	(   75000,  110000 ]    10506   0.018%  99.988% 
1794969781.900	(  110000,  170000 ]     2551   0.004%  99.992% 
1794969781.900	(  170000,  250000 ]     3340   0.006%  99.998% 
1794969781.900	(  250000,  380000 ]     2848   0.005% 100.003% 
1794969781.900	(  380000,  570000 ]     1191   0.002% 100.005% 
1794969781.900	(  570000,  860000 ]      426   0.001% 100.006% 
1794969781.900	(  860000, 1200000 ]      135   0.000% 100.006% 
1794969781.900	( 1200000, 1900000 ]       94   0.000% 100.006% 
1794969781.900	( 1900000, 2900000 ]        9   0.000% 100.006% 
1794969781.900	( 22000000, 33000000 ]        2   0.000% 100.006% 
1794969781.900	
1794969781.900	** Level 4 read latency histogram (micros):
1794969781.900	Count: 57616243 Average: 582.0233  StdDev: 55.41
1794969781.900	Min: 9  Median: 71.2155  Max: 26426658
1794969781.900	Percentiles: P50: 71.22 P75: 141.79 P99: 4558.05 P99.9: 82097.50 P99.99: 287745.71
1794969781.900	------------------------------------------------------
1794969781.900	(       6,      10 ]      405   0.001%   0.001% 
1794969781.900	(      10,      15 ]     1769   0.003%   0.004% 
1794969781.900	(      15,      22 ]      357   0.001%   0.004% 
1794969781.900	(      22,      34 ]      244   0.000%   0.005% 
1794969781.900	(      34,      51 ] 14548103  25.250%  25.255% #####
1794969781.900	(      51,      76 ] 17631539  30.602%  55.857% ######
1794969781.900	(      76,     110 ]  8192101  14.218%  70.075% ###
1794969781.900	(     110,     170 ]  5355401   9.295%  79.370% ##
1794969781.900	(     170,     250 ]  4646151   8.064%  87.434% ##
1794969781.900	(     250,     380 ]  2607129   4.525%  91.959% #
1794969781.900	(     380,     580 ]  1519014   2.636%  94.595% #
1794969781.900	(     580,     870 ]   760501   1.320%  95.915% 
1794969781.900	(     870,    1300 ]   388194   0.674%  96.589% 
1794969781.900	(    1300,    1900 ]   424301   0.736%  97.325% 
1794969781.900	(    1900,    2900 ]   508251   0.882%  98.207% 
1794969781.900	(    2900,    4400 ]   441635   0.767%  98.974% 
1794969781.900	(    4400,    6600 ]   208596   0.362%  99.336% 
1794969781.900	(    6600,    9900 ]   100544   0.175%  99.511% 
1794969781.900	(    9900,   14000 ]    53513   0.093%  99.603% 
1794969781.900	(   14000,   22000 ]    61283   0.106%  99.710% 
1794969781.900	(   22000,   33000 ]    48959   0.085%  99.795% 
1794969781.900	(   33000,   50000 ]    34346   0.060%  99.854% 
1794969781.900	(   50000,   75000 ]    21067   0.037%  99.891% 
1794969781.900	(   75000,  110000 ]    25760   0.045%  99.936% 
1794969781.900	(  110000,  170000 ]    13952   0.024%  99.960% 
1794969781.900	(  170000,  250000 ]    13935   0.024%  99.984% 
1794969781.900	(  250000,  380000 ]    11818   0.021% 100.005% 
1794969781.900	(  380000,  570000 ]     4265   0.007% 100.012% 
1794969781.900	(  570000,  860000 ]     1923   0.003% 100.015% 
1794969781.900	(  860000, 1200000 ]      836   0.001% 100.017% 
1794969781.900	( 1200000, 1900000 ]      621   0.001% 100.018% 
1794969781.900	( 1900000, 2900000 ]       58   0.000% 100.018% 
1794969781.900	( 22000000, 33000000 ]        1   0.000% 100.018% 
1794969781.900	
1794969781.900	** Level 5 read latency histogram (micros):
1794969781.900	Count: 30974595 Average: 638.6506  StdDev: 73.34
1794969781.900	Min: 10  Median: 70.3093  Max: 2762766
1794969781.900	Percentiles: P50: 70.31 P75: 136.64 P99: 4543.60 P99.9: 101517.55 P99.99: 349092.90
1794969781.900	------------------------------------------------------
1794969781.900	(       6,      10 ]      387   0.001%   0.001% 
1794969781.900	(      10,      15 ]     2668   0.009%   0.010% 
1794969781.900	(      15,      22 ]      561   0.002%   0.012% 
1794969781.900	(      22,      34 ]      455   0.001%   0.013% 
1794969781.900	(      34,      51 ]  7417355  23.947%  23.960% #####
1794969781.900	(      51,      76 ] 10443015  33.715%  57.674% #######
1794969781.900	(      76,     110 ]  4185897  13.514%  71.188% ###
1794969781.900	(     110,     170 ]  2659267   8.585%  79.774% ##
1794969781.900	(     170,     250 ]  2432242   7.852%  87.626% ##
1794969781.900	(     250,     380 ]  1308890   4.226%  91.852% #
1794969781.900	(     380,     580 ]   792791   2.559%  94.411% #
1794969781.900	(     580,     870 ]   460692   1.487%  95.899% 
1794969781.900	(     870,    1300 ]   249537   0.806%  96.704% 
1794969781.900	(    1300,    1900 ]   221383   0.715%  97.419% 
1794969781.900	(    1900,    2900 ]   258761   0.835%  98.254% 
1794969781.900	(    2900,    4400 ]   224325   0.724%  98.979% 
1794969781.900	(    4400,    6600 ]   101467   0.328%  99.306% 
1794969781.900	(    6600,    9900 ]    49168   0.159%  99.465% 
1794969781.900	(    9900,   14000 ]    27465   0.089%  99.554% 
1794969781.900	(   14000,   22000 ]    33746   0.109%  99.663% 
1794969781.900	(   22000,   33000 ]    28323   0.091%  99.754% 
1794969781.900	(   33000,   50000 ]    20367   0.066%  99.820% 
1794969781.900	(   50000,   75000 ]    12999   0.042%  99.862% 
1794969781.900	(   75000,  110000 ]    15653   0.051%  99.912% 
1794969781.900	(  110000,  170000 ]     9146   0.030%  99.942% 
1794969781.900	(  170000,  250000 ]     9274   0.030%  99.972% 
1794969781.900	(  250000,  380000 ]     7430   0.024%  99.996% 
1794969781.900	(  380000,  570000 ]     2677   0.009% 100.004% 
1794969781.900	(  570000,  860000 ]     1131   0.004% 100.008% 
1794969781.900	(  860000, 1200000 ]      606   0.002% 100.010% 
1794969781.900	( 1200000, 1900000 ]      432   0.001% 100.011% 
1794969781.900	( 1900000, 2900000 ]       46   0.000% 100.011% 
1794969781.900	
1794969781.900	
1794969781.900	** DB Stats **
1794969781.900	Uptime(secs): 76181.5 total, 5.5 interval
1794969781.900	Cumulative writes: 34M writes, 34M keys, 21M commit groups, 1.6 writes per commit group, ingest: 33.67 GB, 0.45 MB/s
1794969781.900	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.67 GB, 0.45 MB/s
1794969781.900	Cumulative stall: 19:59:58.763 H:M:S, 94.5 percent
1794969781.900	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1794969781.900	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1794969781.900	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1794969781.900	
1794969781.900	STATISTICS:
1794969781.900	rocksdb.block.cache.miss COUNT : 206259468
1794969781.900	rocksdb.block.cache.hit COUNT : 0
1794969781.900	rocksdb.block.cache.add COUNT : 0
1794969781.900	rocksdb.block.cache.add.failures COUNT : 0
1794969781.900	rocksdb.block.cache.index.miss COUNT : 0
1794969781.900	rocksdb.block.cache.index.hit COUNT : 0
1794969781.900	rocksdb.block.cache.index.add COUNT : 0
1794969781.900	rocksdb.block.cache.index.bytes.insert COUNT : 0
1794969781.900	rocksdb.block.cache.index.bytes.evict COUNT : 0
1794969781.900	rocksdb.block.cache.filter.miss COUNT : 0
1794969781.900	rocksdb.block.cache.filter.hit COUNT : 0
1794969781.900	rocksdb.block.cache.filter.add COUNT : 0
1794969781.900	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1794969781.900	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1794969781.900	rocksdb.block.cache.data.miss COUNT : 206259468
1794969781.900	rocksdb.block.cache.data.hit COUNT : 0
1794969781.900	rocksdb.block.cache.data.add COUNT : 0
1794969781.901	rocksdb.block.cache.data.bytes.insert COUNT : 0
1794969781.901	rocksdb.block.cache.bytes.read COUNT : 0
1794969781.901	rocksdb.block.cache.bytes.write COUNT : 0
1794969781.901	rocksdb.bloom.filter.useful COUNT : 0
1794969781.901	rocksdb.bloom.filter.full.positive COUNT : 0
1794969781.901	rocksdb.bloom.filter.full.true.positive COUNT : 0
1794969781.901	rocksdb.bloom.filter.micros COUNT : 0
1794969781.901	rocksdb.persistent.cache.hit COUNT : 0
1794969781.901	rocksdb.persistent.cache.miss COUNT : 0
1794969781.901	rocksdb.sim.block.cache.hit COUNT : 0
1794969781.901	rocksdb.sim.block.cache.miss COUNT : 0
1794969781.901	rocksdb.memtable.hit COUNT : 0
1794969781.901	rocksdb.memtable.miss COUNT : 0
1794969781.901	rocksdb.l0.hit COUNT : 0
1794969781.901	rocksdb.l1.hit COUNT : 0
1794969781.901	rocksdb.l2andup.hit COUNT : 0
1794969781.901	rocksdb.compaction.key.drop.new COUNT : 31624890
1794969781.901	rocksdb.compaction.key.drop.obsolete COUNT : 0
1794969781.901	rocksdb.compaction.key.drop.range_del COUNT : 0
1794969781.901	rocksdb.compaction.key.drop.user COUNT : 0
1794969781.901	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1794969781.901	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1794969781.901	rocksdb.compaction.cancelled COUNT : 0
1794969781.901	rocksdb.number.keys.written COUNT : 34383360
1794969781.901	rocksdb.number.keys.read COUNT : 0
1794969781.901	rocksdb.number.keys.updated COUNT : 0
1794969781.901	rocksdb.bytes.written COUNT : 36153237576
1794969781.901	rocksdb.bytes.read COUNT : 0
1794969781.901	rocksdb.number.db.seek COUNT : 0
1794969781.901	rocksdb.number.db.next COUNT : 0
1794969781.901	rocksdb.number.db.prev COUNT : 0
1794969781.901	rocksdb.number.db.seek.found COUNT : 0
1794969781.901	rocksdb.number.db.next.found COUNT : 0
1794969781.901	rocksdb.number.db.prev.found COUNT : 0
1794969781.901	rocksdb.db.iter.bytes.read COUNT : 0
1794969781.901	rocksdb.no.file.closes COUNT : 0
1794969781.901	rocksdb.no.file.opens COUNT : 1902523
1794969781.901	rocksdb.no.file.errors COUNT : 0
1794969781.901	rocksdb.l0.slowdown.micros COUNT : 0
1794969781.901	rocksdb.memtable.compaction.micros COUNT : 0
1794969781.901	rocksdb.l0.num.files.stall.micros COUNT : 0
1794969781.901	rocksdb.stall.micros COUNT : 71998763246
1794969781.901	rocksdb.db.mutex.wait.micros COUNT : 0
1794969781.901	rocksdb.rate.limit.delay.millis COUNT : 0
1794969781.901	rocksdb.num.iterators COUNT : 0
1794969781.901	rocksdb.number.multiget.get COUNT : 0
1794969781.901	rocksdb.number.multiget.keys.read COUNT : 0
1794969781.901	rocksdb.number.multiget.bytes.read COUNT : 0
1794969781.901	rocksdb.number.deletes.filtered COUNT : 0
1794969781.901	rocksdb.number.merge.failures COUNT : 0
1794969781.901	rocksdb.bloom.filter.prefix.checked COUNT : 0
1794969781.901	rocksdb.bloom.filter.prefix.useful COUNT : 0
1794969781.901	rocksdb.number.reseeks.iteration COUNT : 0
1794969781.901	rocksdb.getupdatessince.calls COUNT : 0
1794969781.901	rocksdb.block.cachecompressed.miss COUNT : 0
1794969781.901	rocksdb.block.cachecompressed.hit COUNT : 0
1794969781.901	rocksdb.block.cachecompressed.add COUNT : 0
1794969781.901	rocksdb.block.cachecompressed.add.failures COUNT : 0
1794969781.901	rocksdb.wal.synced COUNT : 0
1794969781.901	rocksdb.wal.bytes COUNT : 36153237576
1794969781.901	rocksdb.write.self COUNT : 21417478
1794969781.901	rocksdb.write.other COUNT : 12965882
1794969781.901	rocksdb.write.timeout COUNT : 0
1794969781.901	rocksdb.write.wal COUNT : 34383360
1794969781.901	rocksdb.compact.read.bytes COUNT : 867011912526
1794969781.901	rocksdb.compact.write.bytes COUNT : 833777698245
1794969781.901	rocksdb.flush.write.bytes COUNT : 36307719486
1794969781.901	rocksdb.compact.read.marked.bytes COUNT : 0
1794969781.901	rocksdb.compact.read.periodic.bytes COUNT : 0
1794969781.901	rocksdb.compact.read.ttl.bytes COUNT : 0
1794969781.901	rocksdb.compact.write.marked.bytes COUNT : 0
1794969781.901	rocksdb.compact.write.periodic.bytes COUNT : 0
1794969781.901	rocksdb.compact.write.ttl.bytes COUNT : 0
1794969781.901	rocksdb.number.direct.load.table.properties COUNT : 0
1794969781.901	rocksdb.number.superversion_acquires COUNT : 0
1794969781.901	rocksdb.number.superversion_releases COUNT : 0
1794969781.901	rocksdb.number.superversion_cleanups COUNT : 0
1794969781.901	rocksdb.number.block.compressed COUNT : 0
1794969781.901	rocksdb.number.block.decompressed COUNT : 0
1794969781.901	rocksdb.number.block.not_compressed COUNT : 0
1794969781.901	rocksdb.merge.operation.time.nanos COUNT : 0
1794969781.901	rocksdb.filter.operation.time.nanos COUNT : 0
1794969781.901	rocksdb.row.cache.hit COUNT : 0
1794969781.901	rocksdb.row.cache.miss COUNT : 0
1794969781.901	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1794969781.901	rocksdb.read.amp.total.read.bytes COUNT : 0
1794969781.901	rocksdb.number.rate_limiter.drains COUNT : 0
1794969781.901	rocksdb.number.iter.skip COUNT : 0
1794969781.901	rocksdb.blobdb.num.put COUNT : 0
1794969781.901	rocksdb.blobdb.num.write COUNT : 0
1794969781.901	rocksdb.blobdb.num.get COUNT : 0
1794969781.901	rocksdb.blobdb.num.multiget COUNT : 0
1794969781.901	rocksdb.blobdb.num.seek COUNT : 0
1794969781.901	rocksdb.blobdb.num.next COUNT : 0
1794969781.901	rocksdb.blobdb.num.prev COUNT : 0
1794969781.901	rocksdb.blobdb.num.keys.written COUNT : 0
1794969781.901	rocksdb.blobdb.num.keys.read COUNT : 0
1794969781.901	rocksdb.blobdb.bytes.written COUNT : 0
1794969781.901	rocksdb.blobdb.bytes.read COUNT : 0
1794969781.901	rocksdb.blobdb.write.inlined COUNT : 0
1794969781.901	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1794969781.901	rocksdb.blobdb.write.blob COUNT : 0
1794969781.901	rocksdb.blobdb.write.blob.ttl COUNT : 0
1794969781.901	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1794969781.901	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1794969781.901	rocksdb.blobdb.blob.file.synced COUNT : 0
1794969781.901	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1794969781.901	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1794969781.901	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1794969781.901	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1794969781.901	rocksdb.blobdb.gc.num.files COUNT : 0
1794969781.901	rocksdb.blobdb.gc.num.new.files COUNT : 0
1794969781.901	rocksdb.blobdb.gc.failures COUNT : 0
1794969781.901	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1794969781.901	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1794969781.901	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1794969781.901	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1794969781.901	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1794969781.901	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1794969781.901	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1794969781.901	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1794969781.901	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1794969781.901	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1794969781.901	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1794969781.901	rocksdb.txn.overhead.duplicate.key COUNT : 0
1794969781.901	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1794969781.901	rocksdb.txn.get.tryagain COUNT : 0
1794969781.901	rocksdb.number.multiget.keys.found COUNT : 0
1794969781.901	rocksdb.num.iterator.created COUNT : 0
1794969781.901	rocksdb.num.iterator.deleted COUNT : 0
1794969781.901	rocksdb.block.cache.compression.dict.miss COUNT : 0
1794969781.901	rocksdb.block.cache.compression.dict.hit COUNT : 0
1794969781.901	rocksdb.block.cache.compression.dict.add COUNT : 0
1794969781.901	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1794969781.901	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1794969781.901	rocksdb.block.cache.add.redundant COUNT : 0
1794969781.901	rocksdb.block.cache.index.add.redundant COUNT : 0
1794969781.901	rocksdb.block.cache.filter.add.redundant COUNT : 0
1794969781.901	rocksdb.block.cache.data.add.redundant COUNT : 0
1794969781.901	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1794969781.901	rocksdb.files.marked.trash COUNT : 0
1794969781.901	rocksdb.files.deleted.immediately COUNT : 1896951
1794969781.901	rocksdb.error.handler.bg.errro.count COUNT : 0
1794969781.901	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1794969781.901	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1794969781.901	rocksdb.error.handler.autoresume.count COUNT : 0
1794969781.901	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1794969781.901	rocksdb.error.handler.autoresume.success.count COUNT : 0
1794969781.901	rocksdb.memtable.payload.bytes.at.flush COUNT : 36033249856
1794969781.901	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1979672
1794969781.901	rocksdb.secondary.cache.hits COUNT : 0
1794969781.901	rocksdb.verify_checksum.read.bytes COUNT : 0
1794969781.901	rocksdb.backup.read.bytes COUNT : 0
1794969781.901	rocksdb.backup.write.bytes COUNT : 0
1794969781.901	rocksdb.remote.compact.read.bytes COUNT : 0
1794969781.901	rocksdb.remote.compact.write.bytes COUNT : 0
1794969781.901	rocksdb.hot.file.read.bytes COUNT : 0
1794969781.901	rocksdb.warm.file.read.bytes COUNT : 0
1794969781.901	rocksdb.cold.file.read.bytes COUNT : 0
1794969781.901	rocksdb.hot.file.read.count COUNT : 0
1794969781.901	rocksdb.warm.file.read.count COUNT : 0
1794969781.901	rocksdb.cold.file.read.count COUNT : 0
1794969781.901	rocksdb.last.level.read.bytes COUNT : 0
1794969781.901	rocksdb.last.level.read.count COUNT : 0
1794969781.901	rocksdb.non.last.level.read.bytes COUNT : 867299436359
1794969781.901	rocksdb.non.last.level.read.count COUNT : 213869560
1794969781.901	rocksdb.block.checksum.compute.count COUNT : 210064514
1794969781.901	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.db.write.micros P50 : 3348.049950 P95 : 28962.129182 P99 : 120719.823091 P100 : 29006114.000000 COUNT : 34383358 SUM : 303442740461
1794969781.901	rocksdb.compaction.times.micros P50 : 382223.794619 P95 : 1304915.797915 P99 : 2424098.396662 P100 : 32862336.000000 COUNT : 298178 SUM : 143093731768
1794969781.901	rocksdb.compaction.times.cpu_micros P50 : 194659.645518 P95 : 1169975.962034 P99 : 2261427.434333 P100 : 30040281.000000 COUNT : 298178 SUM : 111717373796
1794969781.901	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.table.sync.micros P50 : 60327.924273 P95 : 793005.896226 P99 : 1670218.430034 P100 : 3422850.000000 COUNT : 18318 SUM : 3527718903
1794969781.901	rocksdb.compaction.outfile.sync.micros P50 : 8415.298084 P95 : 49288.350967 P99 : 314581.068999 P100 : 31507947.000000 COUNT : 1847916 SUM : 35277239411
1794969781.901	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.manifest.file.sync.micros P50 : 521.946410 P95 : 79789.434993 P99 : 337391.368318 P100 : 2625624.000000 COUNT : 248930 SUM : 3748836489
1794969781.901	rocksdb.table.open.io.micros P50 : 281.550769 P95 : 934.424231 P99 : 13577.248031 P100 : 2370437.000000 COUNT : 1902523 SUM : 2303425905
1794969781.901	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.read.block.compaction.micros P50 : 67.863405 P95 : 359.099896 P99 : 2735.789732 P100 : 27172521.000000 COUNT : 206259468 SUM : 74669936743
1794969781.901	rocksdb.read.block.get.micros P50 : 64.926939 P95 : 229.768526 P99 : 854.596832 P100 : 1516658.000000 COUNT : 1902521 SUM : 333161740
1794969781.901	rocksdb.write.raw.block.micros P50 : 0.529477 P95 : 1.315198 P99 : 14.642407 P100 : 18813983.000000 COUNT : 212551617 SUM : 308794704
1794969781.901	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.numfiles.in.singlecompaction P50 : 5.759225 P95 : 9.571298 P99 : 9.925787 P100 : 47.000000 COUNT : 298903 SUM : 1860841
1794969781.901	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.db.write.stall P50 : 1095.736621 P95 : 11637.308191 P99 : 47197.237539 P100 : 23251104.000000 COUNT : 21396200 SUM : 72003071641
1794969781.901	rocksdb.sst.read.micros P50 : 66.035334 P95 : 352.366616 P99 : 2680.273689 P100 : 27172407.000000 COUNT : 213869560 SUM : 76463481104
1794969781.901	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.bytes.per.write P50 : 1170.929589 P95 : 3992.080154 P99 : 4188.000000 P100 : 4188.000000 COUNT : 21417478 SUM : 36153237576
1794969781.901	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.db.flush.micros P50 : 221360.544218 P95 : 1102791.784703 P99 : 2126919.642857 P100 : 22904763.000000 COUNT : 18317 SUM : 6308180778
1794969781.901	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794969781.901	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1860116 SUM : 0
1794969781.901	
