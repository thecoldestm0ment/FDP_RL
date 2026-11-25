1795478507.629	Initializing RocksDB Options from the specified file
1795478507.629	Initializing RocksDB Options from command-line flags
1795478519.176	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795478519.176	Values:     1024 bytes each (512 bytes after compression)
1795478519.176	Entries:    15273953
1795478519.176	Prefix:    0 bytes
1795478519.176	Keys per prefix:    0
1795478519.176	RawSize:    15149.0 MB (estimated)
1795478519.176	FileSize:   7691.0 MB (estimated)
1795478519.176	Write rate: 0 bytes/second
1795478519.176	Read rate: 0 ops/second
1795478519.176	Compression: NoCompression
1795478519.176	Compression sampling rate: 0
1795478519.176	Memtablerep: SkipListFactory
1795478519.176	Perf Level: 1
1795478519.176	------------------------------------------------
1795478519.176	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795512296.211	overwrite    :    4419.078 micros/op 904 ops/sec;    0.9 MB/s
1795512301.211	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795512301.249	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512311.285	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512321.288	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512331.303	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512341.303	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512351.303	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512361.303	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795512371.303	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795512371.303	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795512371.303	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795512371.305	
1795512371.305	Level Files Size(MB)
1795512371.305	--------------------
1795512371.305	  0        0        0
1795512371.305	  1        6        2
1795512371.305	  2       58       25
1795512371.305	  3      601      250
1795512371.305	  4     5703     2500
1795512371.305	  5    32666    15394
1795512371.305	  6        0        0
1795512371.305	
1795512371.310	
1795512371.310	
1795512371.310	** Compaction Stats [default] **
1795512371.310	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795512371.310	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795512371.310	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     24.8   1242.22            758.51     17712    0.070     37K      6       0.0       0.0
1795512371.310	  L1      6/0    2.34 MB   0.9     51.4    30.0     21.4      51.4     30.1       0.0   1.7     26.1     26.1   2015.79           1968.27      8830    0.228     52M   6694       0.0       0.0
1795512371.310	  L2     58/0   24.98 MB   1.0    153.3    30.1    123.2     153.3     30.0       0.0   5.1     25.5     25.5   6157.63           6008.28     64663    0.095    155M    51K       0.0       0.0
1795512371.310	  L3    601/0   249.57 MB   1.0    195.4    30.0    165.4     194.9     29.5       0.0   6.5     25.8     25.7   7762.09           7569.51     68267    0.114    198M   519K       0.0       0.0
1795512371.310	  L4   5703/0    2.44 GB   1.0    197.2    29.5    167.7     192.2     24.5       0.0   6.5     26.2     25.5   7716.03           7534.70     68401    0.113    200M  5070K       0.0       0.0
1795512371.310	  L5  32666/0   15.03 GB   0.6    115.5    24.5     91.0      93.7      2.7       0.0   3.8     29.0     23.5   4079.46           3989.02     53175    0.077    117M    22M       0.0       0.0
1795512371.310	 Sum  39034/0   17.74 GB   0.0    712.8   144.1    568.7     715.5    146.8       0.0  23.8     25.2     25.3  28973.21          27828.29    281048    0.103    724M    27M       0.0       0.0
1795512371.310	 Int      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0      0.0      0.00              0.00         0    0.000       0      0       0.0       0.0
1795512371.310	
1795512371.310	** Compaction Stats [default] **
1795512371.310	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795512371.310	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795512371.310	 Low      0/0    0.00 KB   0.0    712.8   144.1    568.7     685.5    116.8       0.0   0.0     26.3     25.3  27734.10          27072.88    263340    0.105    724M    27M       0.0       0.0
1795512371.310	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     24.8   1239.10            755.41     17706    0.070       0      0       0.0       0.0
1795512371.310	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    156.9      0.01              0.00         2    0.006       0      0       0.0       0.0
1795512371.310	
1795512371.310	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795512371.310	
1795512371.310	Uptime(secs): 33863.6 total, 5.1 interval
1795512371.310	Flush(GB): cumulative 30.038, interval 0.000
1795512371.310	AddFile(GB): cumulative 0.000, interval 0.000
1795512371.310	AddFile(Total Files): cumulative 0, interval 0
1795512371.310	AddFile(L0 Files): cumulative 0, interval 0
1795512371.310	AddFile(Keys): cumulative 0, interval 0
1795512371.310	Cumulative compaction: 715.55 GB write, 21.64 MB/s write, 712.83 GB read, 21.56 MB/s read, 28973.2 seconds
1795512371.310	Interval compaction: 0.00 GB write, 0.00 MB/s write, 0.00 GB read, 0.00 MB/s read, 0.0 seconds
1795512371.310	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 317003 slowdown for pending_compaction_bytes, 16 memtable_compaction, 3 memtable_slowdown, interval 0 total count
1795512371.310	Block cache LRUCache@0x6400d0bb8a70#57395 capacity: 8.00 MB collections: 189 last_copies: 0 last_secs: 7.9e-05 secs_since: 5
1795512371.310	Block cache entry stats(count,size,portion): Misc(1,0.00 KB,0%)
1795512371.310	
1795512371.310	** File Read Latency Histogram By Level [default] **
1795512371.310	** Level 0 read latency histogram (micros):
1795512371.310	Count: 7724223 Average: 67.1908  StdDev: 475.41
1795512371.310	Min: 6  Median: 45.7872  Max: 462736
1795512371.310	Percentiles: P50: 45.79 P75: 65.21 P99: 224.75 P99.9: 396.18 P99.99: 1029.93
1795512371.310	------------------------------------------------------
1795512371.310	(       4,       6 ]        1   0.000%   0.000% 
1795512371.310	(       6,      10 ]        2   0.000%   0.000% 
1795512371.310	(      10,      15 ]        7   0.000%   0.000% 
1795512371.310	(      15,      22 ]        7   0.000%   0.000% 
1795512371.310	(      34,      51 ]  5570090  72.112%  72.112% ##############
1795512371.310	(      51,      76 ]   392514   5.082%  77.194% #
1795512371.310	(      76,     110 ]  1334347  17.275%  94.469% ###
1795512371.310	(     110,     170 ]   280686   3.634%  98.102% #
1795512371.310	(     170,     250 ]   101307   1.312%  99.414% 
1795512371.310	(     250,     380 ]    37047   0.480%  99.894% 
1795512371.310	(     380,     580 ]     6065   0.079%  99.972% 
1795512371.310	(     580,     870 ]     1205   0.016%  99.988% 
1795512371.310	(     870,    1300 ]      464   0.006%  99.994% 
1795512371.310	(    1300,    1900 ]      118   0.002%  99.995% 
1795512371.310	(    1900,    2900 ]       65   0.001%  99.996% 
1795512371.310	(    2900,    4400 ]       62   0.001%  99.997% 
1795512371.310	(    4400,    6600 ]        9   0.000%  99.997% 
1795512371.310	(    6600,    9900 ]       13   0.000%  99.997% 
1795512371.310	(    9900,   14000 ]        5   0.000%  99.997% 
1795512371.310	(   14000,   22000 ]        2   0.000%  99.997% 
1795512371.310	(   22000,   33000 ]        1   0.000%  99.997% 
1795512371.310	(   33000,   50000 ]        1   0.000%  99.997% 
1795512371.310	(   50000,   75000 ]       13   0.000%  99.998% 
1795512371.310	(   75000,  110000 ]       69   0.001%  99.998% 
1795512371.310	(  110000,  170000 ]       16   0.000%  99.999% 
1795512371.310	(  170000,  250000 ]       45   0.001%  99.999% 
1795512371.310	(  250000,  380000 ]       56   0.001% 100.000% 
1795512371.310	(  380000,  570000 ]        6   0.000% 100.000% 
1795512371.310	
1795512371.310	** Level 1 read latency histogram (micros):
1795512371.310	Count: 13597352 Average: 67.9379  StdDev: 150.26
1795512371.310	Min: 6  Median: 45.6670  Max: 465561
1795512371.310	Percentiles: P50: 45.67 P75: 61.52 P99: 219.67 P99.9: 378.79 P99.99: 1047.95
1795512371.310	------------------------------------------------------
1795512371.310	(       4,       6 ]        7   0.000%   0.000% 
1795512371.310	(       6,      10 ]       64   0.000%   0.001% 
1795512371.310	(      10,      15 ]       38   0.000%   0.001% 
1795512371.310	(      15,      22 ]       11   0.000%   0.001% 
1795512371.310	(      22,      34 ]        5   0.000%   0.001% 
1795512371.310	(      34,      51 ]  9906199  72.854%  72.855% ###############
1795512371.310	(      51,      76 ]   693098   5.097%  77.952% #
1795512371.310	(      76,     110 ]  2285319  16.807%  94.759% ###
1795512371.310	(     110,     170 ]   469546   3.453%  98.212% #
1795512371.310	(     170,     250 ]   172489   1.269%  99.481% 
1795512371.310	(     250,     380 ]    57514   0.423%  99.904% 
1795512371.310	(     380,     580 ]     9807   0.072%  99.976% 
1795512371.310	(     580,     870 ]     1630   0.012%  99.988% 
1795512371.310	(     870,    1300 ]      641   0.005%  99.993% 
1795512371.310	(    1300,    1900 ]      223   0.002%  99.994% 
1795512371.310	(    1900,    2900 ]      136   0.001%  99.995% 
1795512371.310	(    2900,    4400 ]      130   0.001%  99.996% 
1795512371.310	(    4400,    6600 ]       31   0.000%  99.997% 
1795512371.310	(    6600,    9900 ]       24   0.000%  99.997% 
1795512371.310	(    9900,   14000 ]       22   0.000%  99.997% 
1795512371.310	(   14000,   22000 ]        8   0.000%  99.997% 
1795512371.310	(   22000,   33000 ]        1   0.000%  99.997% 
1795512371.310	(   33000,   50000 ]        6   0.000%  99.997% 
1795512371.310	(   50000,   75000 ]       23   0.000%  99.997% 
1795512371.310	(   75000,  110000 ]      108   0.001%  99.998% 
1795512371.310	(  110000,  170000 ]       63   0.000%  99.998% 
1795512371.310	(  170000,  250000 ]      100   0.001%  99.999% 
1795512371.310	(  250000,  380000 ]      133   0.001% 100.000% 
1795512371.310	(  380000,  570000 ]        7   0.000% 100.000% 
1795512371.310	
1795512371.310	** Level 2 read latency histogram (micros):
1795512371.310	Count: 40645585 Average: 67.6264  StdDev: 79.52
1795512371.310	Min: 5  Median: 45.8356  Max: 506342
1795512371.310	Percentiles: P50: 45.84 P75: 66.67 P99: 226.45 P99.9: 374.85 P99.99: 878.60
1795512371.310	------------------------------------------------------
1795512371.310	(       4,       6 ]      510   0.001%   0.001% 
1795512371.310	(       6,      10 ]     3227   0.008%   0.009% 
1795512371.310	(      10,      15 ]      996   0.002%   0.012% 
1795512371.310	(      15,      22 ]      166   0.000%   0.012% 
1795512371.310	(      22,      34 ]       83   0.000%   0.012% 
1795512371.310	(      34,      51 ] 29183484  71.800%  71.812% ##############
1795512371.310	(      51,      76 ]  2067736   5.087%  76.899% #
1795512371.310	(      76,     110 ]  7114105  17.503%  94.402% ####
1795512371.310	(     110,     170 ]  1461799   3.596%  97.999% #
1795512371.310	(     170,     250 ]   576857   1.419%  99.418% 
1795512371.310	(     250,     380 ]   204063   0.502%  99.920% 
1795512371.310	(     380,     580 ]    24426   0.060%  99.980% 
1795512371.310	(     580,     870 ]     4036   0.010%  99.990% 
1795512371.310	(     870,    1300 ]     1622   0.004%  99.994% 
1795512371.310	(    1300,    1900 ]      638   0.002%  99.995% 
1795512371.310	(    1900,    2900 ]      486   0.001%  99.997% 
1795512371.310	(    2900,    4400 ]      475   0.001%  99.998% 
1795512371.310	(    4400,    6600 ]      132   0.000%  99.998% 
1795512371.310	(    6600,    9900 ]       52   0.000%  99.998% 
1795512371.310	(    9900,   14000 ]       38   0.000%  99.998% 
1795512371.310	(   14000,   22000 ]       21   0.000%  99.998% 
1795512371.310	(   22000,   33000 ]        4   0.000%  99.998% 
1795512371.310	(   33000,   50000 ]       10   0.000%  99.998% 
1795512371.310	(   50000,   75000 ]       64   0.000%  99.999% 
1795512371.310	(   75000,  110000 ]      375   0.001% 100.000% 
1795512371.310	(  110000,  170000 ]      124   0.000% 100.000% 
1795512371.310	(  170000,  250000 ]      288   0.001% 100.001% 
1795512371.310	(  250000,  380000 ]      303   0.001% 100.001% 
1795512371.310	(  380000,  570000 ]       10   0.000% 100.001% 
1795512371.310	
1795512371.310	** Level 3 read latency histogram (micros):
1795512371.310	Count: 51701097 Average: 67.3133  StdDev: 53.54
1795512371.310	Min: 5  Median: 45.9115  Max: 525028
1795512371.310	Percentiles: P50: 45.91 P75: 69.22 P99: 223.64 P99.9: 370.46 P99.99: 837.48
1795512371.310	------------------------------------------------------
1795512371.310	(       4,       6 ]      625   0.001%   0.001% 
1795512371.310	(       6,      10 ]     2973   0.006%   0.007% 
1795512371.310	(      10,      15 ]      909   0.002%   0.009% 
1795512371.310	(      15,      22 ]      178   0.000%   0.009% 
1795512371.310	(      22,      34 ]       73   0.000%   0.009% 
1795512371.310	(      34,      51 ] 36887005  71.347%  71.356% ##############
1795512371.310	(      51,      76 ]  2585116   5.000%  76.356% #
1795512371.310	(      76,     110 ]  9278538  17.947%  94.302% ####
1795512371.310	(     110,     170 ]  1926647   3.727%  98.029% #
1795512371.311	(     170,     250 ]   748743   1.448%  99.477% 
1795512371.311	(     250,     380 ]   235896   0.456%  99.933% 
1795512371.311	(     380,     580 ]    25842   0.050%  99.983% 
1795512371.311	(     580,     870 ]     3809   0.007%  99.991% 
1795512371.311	(     870,    1300 ]     1849   0.004%  99.994% 
1795512371.311	(    1300,    1900 ]      735   0.001%  99.996% 
1795512371.311	(    1900,    2900 ]      554   0.001%  99.997% 
1795512371.311	(    2900,    4400 ]      492   0.001%  99.998% 
1795512371.311	(    4400,    6600 ]      170   0.000%  99.998% 
1795512371.311	(    6600,    9900 ]       76   0.000%  99.998% 
1795512371.311	(    9900,   14000 ]       38   0.000%  99.998% 
1795512371.311	(   14000,   22000 ]       23   0.000%  99.998% 
1795512371.311	(   22000,   33000 ]        3   0.000%  99.998% 
1795512371.311	(   33000,   50000 ]       11   0.000%  99.998% 
1795512371.311	(   50000,   75000 ]       94   0.000%  99.999% 
1795512371.311	(   75000,  110000 ]      455   0.001% 100.000% 
1795512371.311	(  110000,  170000 ]      148   0.000% 100.000% 
1795512371.311	(  170000,  250000 ]      348   0.001% 100.000% 
1795512371.311	(  250000,  380000 ]      323   0.001% 100.001% 
1795512371.311	(  380000,  570000 ]       23   0.000% 100.001% 
1795512371.311	
1795512371.311	** Level 4 read latency histogram (micros):
1795512371.311	Count: 50917944 Average: 67.0003  StdDev: 46.44
1795512371.311	Min: 5  Median: 45.9315  Max: 657302
1795512371.311	Percentiles: P50: 45.93 P75: 69.67 P99: 222.12 P99.9: 369.73 P99.99: 885.44
1795512371.311	------------------------------------------------------
1795512371.311	(       4,       6 ]      465   0.001%   0.001% 
1795512371.311	(       6,      10 ]     2436   0.005%   0.006% 
1795512371.311	(      10,      15 ]      761   0.001%   0.007% 
1795512371.311	(      15,      22 ]      139   0.000%   0.007% 
1795512371.311	(      22,      34 ]       61   0.000%   0.008% 
1795512371.311	(      34,      51 ] 36268308  71.229%  71.237% ##############
1795512371.311	(      51,      76 ]  2566354   5.040%  76.277% #
1795512371.311	(      76,     110 ]  9188391  18.045%  94.322% ####
1795512371.311	(     110,     170 ]  1913618   3.758%  98.080% #
1795512371.311	(     170,     250 ]   718679   1.411%  99.492% 
1795512371.311	(     250,     380 ]   225638   0.443%  99.935% 
1795512371.311	(     380,     580 ]    23822   0.047%  99.982% 
1795512371.311	(     580,     870 ]     4104   0.008%  99.990% 
1795512371.311	(     870,    1300 ]     2122   0.004%  99.994% 
1795512371.311	(    1300,    1900 ]      846   0.002%  99.996% 
1795512371.311	(    1900,    2900 ]      595   0.001%  99.997% 
1795512371.311	(    2900,    4400 ]      550   0.001%  99.998% 
1795512371.311	(    4400,    6600 ]      199   0.000%  99.998% 
1795512371.311	(    6600,    9900 ]      112   0.000%  99.999% 
1795512371.311	(    9900,   14000 ]       42   0.000%  99.999% 
1795512371.311	(   14000,   22000 ]       17   0.000%  99.999% 
1795512371.311	(   22000,   33000 ]        8   0.000%  99.999% 
1795512371.311	(   33000,   50000 ]        4   0.000%  99.999% 
1795512371.311	(   50000,   75000 ]       99   0.000%  99.999% 
1795512371.311	(   75000,  110000 ]      422   0.001% 100.000% 
1795512371.311	(  110000,  170000 ]      141   0.000% 100.000% 
1795512371.311	(  170000,  250000 ]      322   0.001% 100.001% 
1795512371.311	(  250000,  380000 ]      293   0.001% 100.001% 
1795512371.311	(  380000,  570000 ]       19   0.000% 100.001% 
1795512371.311	(  570000,  860000 ]        1   0.000% 100.001% 
1795512371.311	
1795512371.311	** Level 5 read latency histogram (micros):
1795512371.311	Count: 24200545 Average: 66.3086  StdDev: 137.34
1795512371.311	Min: 5  Median: 45.5830  Max: 530740
1795512371.311	Percentiles: P50: 45.58 P75: 58.20 P99: 222.56 P99.9: 371.57 P99.99: 1753.53
1795512371.311	------------------------------------------------------
1795512371.311	(       4,       6 ]      219   0.001%   0.001% 
1795512371.311	(       6,      10 ]     1805   0.007%   0.008% 
1795512371.311	(      10,      15 ]      542   0.002%   0.011% 
1795512371.311	(      15,      22 ]      114   0.000%   0.011% 
1795512371.311	(      22,      34 ]       49   0.000%   0.011% 
1795512371.311	(      34,      51 ] 17755138  73.367%  73.378% ###############
1795512371.311	(      51,      76 ]  1363868   5.636%  79.014% #
1795512371.311	(      76,     110 ]  3848736  15.904%  94.917% ###
1795512371.311	(     110,     170 ]   761821   3.148%  98.065% #
1795512371.311	(     170,     250 ]   344395   1.423%  99.488% 
1795512371.311	(     250,     380 ]   106572   0.440%  99.929% 
1795512371.311	(     380,     580 ]    10297   0.043%  99.971% 
1795512371.311	(     580,     870 ]     2729   0.011%  99.982% 
1795512371.311	(     870,    1300 ]     1462   0.006%  99.988% 
1795512371.311	(    1300,    1900 ]      500   0.002%  99.991% 
1795512371.311	(    1900,    2900 ]      575   0.002%  99.993% 
1795512371.311	(    2900,    4400 ]      584   0.002%  99.995% 
1795512371.311	(    4400,    6600 ]      412   0.002%  99.997% 
1795512371.311	(    6600,    9900 ]      232   0.001%  99.998% 
1795512371.311	(    9900,   14000 ]       74   0.000%  99.998% 
1795512371.311	(   14000,   22000 ]       14   0.000%  99.998% 
1795512371.311	(   22000,   33000 ]        2   0.000%  99.998% 
1795512371.311	(   33000,   50000 ]        1   0.000%  99.998% 
1795512371.311	(   50000,   75000 ]       20   0.000%  99.998% 
1795512371.311	(   75000,  110000 ]      265   0.001% 100.000% 
1795512371.311	(  110000,  170000 ]       62   0.000% 100.000% 
1795512371.311	(  170000,  250000 ]      203   0.001% 100.001% 
1795512371.311	(  250000,  380000 ]      143   0.001% 100.001% 
1795512371.311	(  380000,  570000 ]        7   0.000% 100.001% 
1795512371.311	
1795512371.311	
1795512371.311	** DB Stats **
1795512371.311	Uptime(secs): 33863.6 total, 5.1 interval
1795512371.311	Cumulative writes: 30M writes, 30M keys, 23M commit groups, 1.3 writes per commit group, ingest: 29.96 GB, 0.91 MB/s
1795512371.311	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.96 GB, 0.91 MB/s
1795512371.311	Cumulative stall: 08:04:19.324 H:M:S, 85.8 percent
1795512371.311	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795512371.311	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795512371.311	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795512371.311	
1795512371.311	STATISTICS:
1795512371.311	rocksdb.block.cache.miss COUNT : 182055116
1795512371.311	rocksdb.block.cache.hit COUNT : 0
1795512371.311	rocksdb.block.cache.add COUNT : 0
1795512371.311	rocksdb.block.cache.add.failures COUNT : 0
1795512371.311	rocksdb.block.cache.index.miss COUNT : 0
1795512371.311	rocksdb.block.cache.index.hit COUNT : 0
1795512371.311	rocksdb.block.cache.index.add COUNT : 0
1795512371.311	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795512371.311	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795512371.311	rocksdb.block.cache.filter.miss COUNT : 0
1795512371.311	rocksdb.block.cache.filter.hit COUNT : 0
1795512371.311	rocksdb.block.cache.filter.add COUNT : 0
1795512371.311	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795512371.311	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795512371.311	rocksdb.block.cache.data.miss COUNT : 182055116
1795512371.311	rocksdb.block.cache.data.hit COUNT : 0
1795512371.311	rocksdb.block.cache.data.add COUNT : 0
1795512371.311	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795512371.311	rocksdb.block.cache.bytes.read COUNT : 0
1795512371.311	rocksdb.block.cache.bytes.write COUNT : 0
1795512371.311	rocksdb.bloom.filter.useful COUNT : 0
1795512371.311	rocksdb.bloom.filter.full.positive COUNT : 0
1795512371.311	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795512371.311	rocksdb.bloom.filter.micros COUNT : 0
1795512371.311	rocksdb.persistent.cache.hit COUNT : 0
1795512371.311	rocksdb.persistent.cache.miss COUNT : 0
1795512371.311	rocksdb.sim.block.cache.hit COUNT : 0
1795512371.311	rocksdb.sim.block.cache.miss COUNT : 0
1795512371.311	rocksdb.memtable.hit COUNT : 0
1795512371.311	rocksdb.memtable.miss COUNT : 0
1795512371.311	rocksdb.l0.hit COUNT : 0
1795512371.311	rocksdb.l1.hit COUNT : 0
1795512371.311	rocksdb.l2andup.hit COUNT : 0
1795512371.311	rocksdb.compaction.key.drop.new COUNT : 27790571
1795512371.311	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795512371.311	rocksdb.compaction.key.drop.range_del COUNT : 0
1795512371.311	rocksdb.compaction.key.drop.user COUNT : 0
1795512371.311	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795512371.311	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795512371.311	rocksdb.compaction.cancelled COUNT : 0
1795512371.311	rocksdb.number.keys.written COUNT : 30547908
1795512371.311	rocksdb.number.keys.read COUNT : 0
1795512371.311	rocksdb.number.keys.updated COUNT : 0
1795512371.311	rocksdb.bytes.written COUNT : 32171001600
1795512371.311	rocksdb.bytes.read COUNT : 0
1795512371.311	rocksdb.number.db.seek COUNT : 0
1795512371.311	rocksdb.number.db.next COUNT : 0
1795512371.311	rocksdb.number.db.prev COUNT : 0
1795512371.311	rocksdb.number.db.seek.found COUNT : 0
1795512371.311	rocksdb.number.db.next.found COUNT : 0
1795512371.311	rocksdb.number.db.prev.found COUNT : 0
1795512371.311	rocksdb.db.iter.bytes.read COUNT : 0
1795512371.311	rocksdb.no.file.closes COUNT : 0
1795512371.311	rocksdb.no.file.opens COUNT : 1683717
1795512371.311	rocksdb.no.file.errors COUNT : 0
1795512371.311	rocksdb.l0.slowdown.micros COUNT : 0
1795512371.312	rocksdb.memtable.compaction.micros COUNT : 0
1795512371.312	rocksdb.l0.num.files.stall.micros COUNT : 0
1795512371.312	rocksdb.stall.micros COUNT : 29059323690
1795512371.312	rocksdb.db.mutex.wait.micros COUNT : 0
1795512371.312	rocksdb.rate.limit.delay.millis COUNT : 0
1795512371.312	rocksdb.num.iterators COUNT : 0
1795512371.312	rocksdb.number.multiget.get COUNT : 0
1795512371.312	rocksdb.number.multiget.keys.read COUNT : 0
1795512371.312	rocksdb.number.multiget.bytes.read COUNT : 0
1795512371.312	rocksdb.number.deletes.filtered COUNT : 0
1795512371.312	rocksdb.number.merge.failures COUNT : 0
1795512371.312	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795512371.312	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795512371.312	rocksdb.number.reseeks.iteration COUNT : 0
1795512371.312	rocksdb.getupdatessince.calls COUNT : 0
1795512371.312	rocksdb.block.cachecompressed.miss COUNT : 0
1795512371.312	rocksdb.block.cachecompressed.hit COUNT : 0
1795512371.312	rocksdb.block.cachecompressed.add COUNT : 0
1795512371.312	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795512371.312	rocksdb.wal.synced COUNT : 0
1795512371.312	rocksdb.wal.bytes COUNT : 32171001600
1795512371.312	rocksdb.write.self COUNT : 23248804
1795512371.312	rocksdb.write.other COUNT : 7299104
1795512371.312	rocksdb.write.timeout COUNT : 0
1795512371.312	rocksdb.write.wal COUNT : 30547908
1795512371.312	rocksdb.compact.read.bytes COUNT : 765266798309
1795512371.312	rocksdb.compact.write.bytes COUNT : 736062919063
1795512371.312	rocksdb.flush.write.bytes COUNT : 32256701419
1795512371.312	rocksdb.compact.read.marked.bytes COUNT : 0
1795512371.312	rocksdb.compact.read.periodic.bytes COUNT : 0
1795512371.312	rocksdb.compact.read.ttl.bytes COUNT : 0
1795512371.312	rocksdb.compact.write.marked.bytes COUNT : 0
1795512371.312	rocksdb.compact.write.periodic.bytes COUNT : 0
1795512371.312	rocksdb.compact.write.ttl.bytes COUNT : 0
1795512371.312	rocksdb.number.direct.load.table.properties COUNT : 0
1795512371.312	rocksdb.number.superversion_acquires COUNT : 0
1795512371.312	rocksdb.number.superversion_releases COUNT : 0
1795512371.312	rocksdb.number.superversion_cleanups COUNT : 0
1795512371.312	rocksdb.number.block.compressed COUNT : 0
1795512371.312	rocksdb.number.block.decompressed COUNT : 0
1795512371.312	rocksdb.number.block.not_compressed COUNT : 0
1795512371.312	rocksdb.merge.operation.time.nanos COUNT : 0
1795512371.312	rocksdb.filter.operation.time.nanos COUNT : 0
1795512371.312	rocksdb.row.cache.hit COUNT : 0
1795512371.312	rocksdb.row.cache.miss COUNT : 0
1795512371.312	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795512371.312	rocksdb.read.amp.total.read.bytes COUNT : 0
1795512371.312	rocksdb.number.rate_limiter.drains COUNT : 0
1795512371.312	rocksdb.number.iter.skip COUNT : 0
1795512371.312	rocksdb.blobdb.num.put COUNT : 0
1795512371.312	rocksdb.blobdb.num.write COUNT : 0
1795512371.312	rocksdb.blobdb.num.get COUNT : 0
1795512371.312	rocksdb.blobdb.num.multiget COUNT : 0
1795512371.312	rocksdb.blobdb.num.seek COUNT : 0
1795512371.312	rocksdb.blobdb.num.next COUNT : 0
1795512371.312	rocksdb.blobdb.num.prev COUNT : 0
1795512371.312	rocksdb.blobdb.num.keys.written COUNT : 0
1795512371.312	rocksdb.blobdb.num.keys.read COUNT : 0
1795512371.312	rocksdb.blobdb.bytes.written COUNT : 0
1795512371.312	rocksdb.blobdb.bytes.read COUNT : 0
1795512371.312	rocksdb.blobdb.write.inlined COUNT : 0
1795512371.312	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795512371.312	rocksdb.blobdb.write.blob COUNT : 0
1795512371.312	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795512371.312	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795512371.312	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795512371.312	rocksdb.blobdb.blob.file.synced COUNT : 0
1795512371.312	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795512371.312	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795512371.312	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795512371.312	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795512371.312	rocksdb.blobdb.gc.num.files COUNT : 0
1795512371.312	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795512371.312	rocksdb.blobdb.gc.failures COUNT : 0
1795512371.312	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795512371.312	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795512371.312	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795512371.312	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795512371.312	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795512371.312	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795512371.312	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795512371.312	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795512371.312	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795512371.312	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795512371.312	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795512371.312	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795512371.312	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795512371.312	rocksdb.txn.get.tryagain COUNT : 0
1795512371.312	rocksdb.number.multiget.keys.found COUNT : 0
1795512371.312	rocksdb.num.iterator.created COUNT : 0
1795512371.312	rocksdb.num.iterator.deleted COUNT : 0
1795512371.312	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795512371.312	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795512371.312	rocksdb.block.cache.compression.dict.add COUNT : 0
1795512371.312	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795512371.312	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795512371.312	rocksdb.block.cache.add.redundant COUNT : 0
1795512371.312	rocksdb.block.cache.index.add.redundant COUNT : 0
1795512371.312	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795512371.312	rocksdb.block.cache.data.add.redundant COUNT : 0
1795512371.312	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795512371.312	rocksdb.files.marked.trash COUNT : 0
1795512371.312	rocksdb.files.deleted.immediately COUNT : 1680139
1795512371.312	rocksdb.error.handler.bg.errro.count COUNT : 0
1795512371.312	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795512371.312	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795512371.312	rocksdb.error.handler.autoresume.count COUNT : 0
1795512371.312	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795512371.312	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795512371.312	rocksdb.memtable.payload.bytes.at.flush COUNT : 32013040112
1795512371.312	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1799416
1795512371.312	rocksdb.secondary.cache.hits COUNT : 0
1795512371.312	rocksdb.verify_checksum.read.bytes COUNT : 0
1795512371.312	rocksdb.backup.read.bytes COUNT : 0
1795512371.312	rocksdb.backup.write.bytes COUNT : 0
1795512371.312	rocksdb.remote.compact.read.bytes COUNT : 0
1795512371.312	rocksdb.remote.compact.write.bytes COUNT : 0
1795512371.312	rocksdb.hot.file.read.bytes COUNT : 0
1795512371.312	rocksdb.warm.file.read.bytes COUNT : 0
1795512371.312	rocksdb.cold.file.read.bytes COUNT : 0
1795512371.312	rocksdb.hot.file.read.count COUNT : 0
1795512371.312	rocksdb.warm.file.read.count COUNT : 0
1795512371.312	rocksdb.cold.file.read.count COUNT : 0
1795512371.312	rocksdb.last.level.read.bytes COUNT : 0
1795512371.312	rocksdb.last.level.read.count COUNT : 0
1795512371.312	rocksdb.non.last.level.read.bytes COUNT : 765523628997
1795512371.312	rocksdb.non.last.level.read.count COUNT : 188789984
1795512371.312	rocksdb.block.checksum.compute.count COUNT : 185422550
1795512371.312	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.312	rocksdb.db.write.micros P50 : 431.640688 P95 : 18082.813632 P99 : 66225.246935 P100 : 6206759.000000 COUNT : 30547908 SUM : 134937876145
1795512371.312	rocksdb.compaction.times.micros P50 : 91926.886582 P95 : 221386.311685 P99 : 505354.557207 P100 : 5033596.000000 COUNT : 263340 SUM : 27734099596
1795512371.312	rocksdb.compaction.times.cpu_micros P50 : 89937.328034 P95 : 214282.267793 P99 : 501354.016435 P100 : 4931228.000000 COUNT : 263340 SUM : 27072880091
1795512371.312	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.312	rocksdb.table.sync.micros P50 : 26078.471412 P95 : 169404.255319 P99 : 443995.454545 P100 : 1271047.000000 COUNT : 17708 SUM : 725455714
1795512371.312	rocksdb.compaction.outfile.sync.micros P50 : 6356.280490 P95 : 13640.084699 P99 : 25426.876670 P100 : 1368752.000000 COUNT : 1633768 SUM : 13337346636
1795512371.312	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.312	rocksdb.manifest.file.sync.micros P50 : 487.658635 P95 : 741.626947 P99 : 297643.414634 P100 : 1293220.000000 COUNT : 218392 SUM : 1811316409
1795512371.312	rocksdb.table.open.io.micros P50 : 239.027757 P95 : 422.780786 P99 : 576.979680 P100 : 485521.000000 COUNT : 1683717 SUM : 606541889
1795512371.312	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.312	rocksdb.read.block.compaction.micros P50 : 46.126989 P95 : 122.695065 P99 : 227.944887 P100 : 657305.000000 COUNT : 182055116 SUM : 12390510551
1795512371.312	rocksdb.read.block.get.micros P50 : 53.108415 P95 : 106.660169 P99 : 213.987311 P100 : 389496.000000 COUNT : 1683717 SUM : 115736789
1795512371.312	rocksdb.write.raw.block.micros P50 : 0.533022 P95 : 1.442551 P99 : 40.326855 P100 : 2080918.000000 COUNT : 187702968 SUM : 350824727
1795512371.312	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.312	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.312	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.312	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.numfiles.in.singlecompaction P50 : 5.835941 P95 : 9.582951 P99 : 9.924852 P100 : 48.000000 COUNT : 264029 SUM : 1645372
1795512371.313	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.db.write.stall P50 : 0.696784 P95 : 3868.077715 P99 : 17369.201561 P100 : 6204803.000000 COUNT : 23226872 SUM : 29062963220
1795512371.313	rocksdb.sst.read.micros P50 : 45.834660 P95 : 119.198333 P99 : 223.545277 P100 : 657302.000000 COUNT : 188789984 SUM : 12688188629
1795512371.313	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.bytes.per.write P50 : 1127.146103 P95 : 3524.824492 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23248804 SUM : 32171001600
1795512371.313	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.db.flush.micros P50 : 53714.449166 P95 : 228024.489796 P99 : 477389.801700 P100 : 5278174.000000 COUNT : 17706 SUM : 1239100868
1795512371.313	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795512371.313	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1644683 SUM : 0
1795512371.313	
