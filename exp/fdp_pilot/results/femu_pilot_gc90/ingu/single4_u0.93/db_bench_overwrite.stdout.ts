1795305374.474	Initializing RocksDB Options from the specified file
1795305374.474	Initializing RocksDB Options from command-line flags
1795305388.143	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795305388.143	Values:     1024 bytes each (512 bytes after compression)
1795305388.143	Entries:    17191679
1795305388.143	Prefix:    0 bytes
1795305388.143	Keys per prefix:    0
1795305388.144	RawSize:    17051.1 MB (estimated)
1795305388.144	FileSize:   8656.7 MB (estimated)
1795305388.144	Write rate: 0 bytes/second
1795305388.144	Read rate: 0 ops/second
1795305388.144	Compression: NoCompression
1795305388.144	Compression sampling rate: 0
1795305388.144	Memtablerep: SkipListFactory
1795305388.144	Perf Level: 1
1795305388.144	------------------------------------------------
1795305388.144	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795367934.310	overwrite    :    7266.873 micros/op 549 ops/sec;    0.5 MB/s
1795367939.286	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795367939.381	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795367949.286	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795367959.289	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795367969.316	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795367979.317	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795367989.317	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795367999.317	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368009.328	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368019.329	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368029.332	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368039.332	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368049.332	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368059.332	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368069.332	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368079.334	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368089.337	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368099.337	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368109.338	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795368119.339	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795368119.340	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795368119.340	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795368119.361	
1795368119.361	Level Files Size(MB)
1795368119.361	--------------------
1795368119.361	  0        1        2
1795368119.361	  1        5        2
1795368119.361	  2       61       25
1795368119.361	  3      598      250
1795368119.361	  4     5704     2500
1795368119.361	  5    36025    17326
1795368119.361	  6        0        0
1795368119.361	
1795368119.383	
1795368119.383	
1795368119.383	** Compaction Stats [default] **
1795368119.383	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795368119.383	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795368119.383	  L0      1/0    1.91 MB   0.8      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0      6.5   5366.17           2505.98     19959    0.269     15K      0       0.0       0.0
1795368119.383	  L1      5/0    2.23 MB   0.9     58.2    33.8     24.4      58.3     33.8       0.0   1.7      9.4      9.4   6370.32           4903.47      9930    0.642     59M   6799       0.0       0.0
1795368119.383	  L2     61/0   24.80 MB   1.0    170.4    33.8    136.6     170.3     33.8       0.0   5.0      8.3      8.3  20905.22          13319.06     72777    0.287    173M    51K       0.0       0.0
1795368119.383	  L3    598/0   249.56 MB   1.0    219.8    33.8    186.0     219.3     33.3       0.0   6.5      9.5      9.5  23703.25          15808.92     76874    0.308    223M   515K       0.0       0.0
1795368119.383	  L4   5704/0    2.44 GB   1.0    222.6    33.3    189.3     217.6     28.3       0.0   6.5      6.0      5.9  37768.91          32619.80     77244    0.489    226M  5054K       0.0       0.0
1795368119.383	  L5  36025/0   16.92 GB   0.7    144.9    28.3    116.6     119.3      2.7       0.0   4.2      6.5      5.3  22949.11          19482.36     62769    0.366    147M    25M       0.0       0.0
1795368119.383	 Sum  42394/0   19.63 GB   0.0    816.0   163.0    653.0     818.7    165.7       0.0  24.2      7.1      7.2 117062.98          88639.59    319553    0.366    828M    31M       0.0       0.0
1795368119.383	 Int      0/0    0.00 KB   0.0      0.2     0.0      0.1       0.1      0.0       0.0 151682537.0      3.9      3.3     43.77             41.41        57    0.768    168K    24K       0.0       0.0
1795368119.383	
1795368119.383	** Compaction Stats [default] **
1795368119.383	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795368119.383	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795368119.383	 Low      0/0    0.00 KB   0.0    816.0   163.0    653.0     784.9    131.9       0.0   0.0      7.5      7.2 111699.58          86136.27    299596    0.373    828M    31M       0.0       0.0
1795368119.383	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0      6.5   5363.40           2503.32     19955    0.269       0      0       0.0       0.0
1795368119.383	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    132.5      0.01              0.00         2    0.004       0      0       0.0       0.0
1795368119.383	
1795368119.383	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795368119.383	
1795368119.383	Uptime(secs): 62744.9 total, 33.6 interval
1795368119.383	Flush(GB): cumulative 33.810, interval 0.000
1795368119.383	AddFile(GB): cumulative 0.000, interval 0.000
1795368119.383	AddFile(Total Files): cumulative 0, interval 0
1795368119.383	AddFile(L0 Files): cumulative 0, interval 0
1795368119.383	AddFile(Keys): cumulative 0, interval 0
1795368119.383	Cumulative compaction: 818.71 GB write, 13.36 MB/s write, 816.00 GB read, 13.32 MB/s read, 117063.0 seconds
1795368119.383	Interval compaction: 0.14 GB write, 4.30 MB/s write, 0.17 GB read, 5.04 MB/s read, 43.8 seconds
1795368119.384	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 360245 slowdown for pending_compaction_bytes, 15 memtable_compaction, 3 memtable_slowdown, interval 0 total count
1795368119.384	Block cache LRUCache@0x5d06abbd7a70#77249 capacity: 8.00 MB collections: 349 last_copies: 0 last_secs: 0.013636 secs_since: 33
1795368119.384	Block cache entry stats(count,size,portion): Misc(4,12.53 KB,0.152969%)
1795368119.384	
1795368119.384	** File Read Latency Histogram By Level [default] **
1795368119.384	** Level 0 read latency histogram (micros):
1795368119.384	Count: 8686686 Average: 173.0262  StdDev: 357.04
1795368119.384	Min: 12  Median: 64.9516  Max: 9230135
1795368119.384	Percentiles: P50: 64.95 P75: 95.06 P99: 654.32 P99.9: 7812.50 P99.99: 210209.67
1795368119.384	------------------------------------------------------
1795368119.384	(      10,      15 ]        2   0.000%   0.000% 
1795368119.384	(      15,      22 ]        4   0.000%   0.000% 
1795368119.384	(      22,      34 ]        3   0.000%   0.000% 
1795368119.384	(      34,      51 ]  2631500  30.293%  30.294% ######
1795368119.384	(      51,      76 ]  3067444  35.312%  65.606% #######
1795368119.384	(      76,     110 ]  1455622  16.757%  82.363% ###
1795368119.384	(     110,     170 ]   882300  10.157%  92.519% ##
1795368119.384	(     170,     250 ]   333169   3.835%  96.355% #
1795368119.384	(     250,     380 ]   148628   1.711%  98.066% 
1795368119.384	(     380,     580 ]    69711   0.803%  98.868% 
1795368119.384	(     580,     870 ]    44626   0.514%  99.382% 
1795368119.384	(     870,    1300 ]    21282   0.245%  99.627% 
1795368119.384	(    1300,    1900 ]     8308   0.096%  99.723% 
1795368119.384	(    1900,    2900 ]     6179   0.071%  99.794% 
1795368119.384	(    2900,    4400 ]     4822   0.056%  99.849% 
1795368119.384	(    4400,    6600 ]     3390   0.039%  99.888% 
1795368119.384	(    6600,    9900 ]     2747   0.032%  99.920% 
1795368119.384	(    9900,   14000 ]     1724   0.020%  99.940% 
1795368119.384	(   14000,   22000 ]     1328   0.015%  99.955% 
1795368119.384	(   22000,   33000 ]      653   0.008%  99.963% 
1795368119.384	(   33000,   50000 ]      423   0.005%  99.968% 
1795368119.384	(   50000,   75000 ]      338   0.004%  99.971% 
1795368119.384	(   75000,  110000 ]      824   0.009%  99.981% 
1795368119.384	(  110000,  170000 ]      535   0.006%  99.987% 
1795368119.384	(  170000,  250000 ]      508   0.006%  99.993% 
1795368119.384	(  250000,  380000 ]      319   0.004%  99.997% 
1795368119.384	(  380000,  570000 ]      181   0.002%  99.999% 
1795368119.385	(  570000,  860000 ]       78   0.001% 100.000% 
1795368119.385	(  860000, 1200000 ]       25   0.000% 100.000% 
1795368119.385	( 1200000, 1900000 ]       10   0.000% 100.000% 
1795368119.385	( 1900000, 2900000 ]        1   0.000% 100.000% 
1795368119.385	( 6500000, 9800000 ]        2   0.000% 100.000% 
1795368119.385	
1795368119.385	** Level 1 read latency histogram (micros):
1795368119.385	Count: 15410312 Average: 155.7233  StdDev: 51.93
1795368119.385	Min: 10  Median: 64.2030  Max: 2124029
1795368119.385	Percentiles: P50: 64.20 P75: 93.28 P99: 578.79 P99.9: 5147.41 P99.99: 169607.45
1795368119.385	------------------------------------------------------
1795368119.385	(       6,      10 ]       85   0.001%   0.001% 
1795368119.385	(      10,      15 ]      229   0.001%   0.002% 
1795368119.385	(      15,      22 ]       46   0.000%   0.002% 
1795368119.385	(      22,      34 ]       41   0.000%   0.003% 
1795368119.385	(      34,      51 ]  4827964  31.329%  31.332% ######
1795368119.385	(      51,      76 ]  5447230  35.348%  66.680% #######
1795368119.385	(      76,     110 ]  2523117  16.373%  83.053% ###
1795368119.385	(     110,     170 ]  1490098   9.669%  92.722% ##
1795368119.385	(     170,     250 ]   591576   3.839%  96.561% #
1795368119.385	(     250,     380 ]   257503   1.671%  98.232% 
1795368119.385	(     380,     580 ]   119042   0.772%  99.005% 
1795368119.385	(     580,     870 ]    74777   0.485%  99.490% 
1795368119.385	(     870,    1300 ]    34530   0.224%  99.714% 
1795368119.385	(    1300,    1900 ]    12670   0.082%  99.796% 
1795368119.385	(    1900,    2900 ]     8378   0.054%  99.851% 
1795368119.385	(    2900,    4400 ]     6234   0.040%  99.891% 
1795368119.385	(    4400,    6600 ]     4067   0.026%  99.917% 
1795368119.385	(    6600,    9900 ]     3397   0.022%  99.939% 
1795368119.385	(    9900,   14000 ]     2155   0.014%  99.953% 
1795368119.385	(   14000,   22000 ]     1505   0.010%  99.963% 
1795368119.385	(   22000,   33000 ]      736   0.005%  99.968% 
1795368119.385	(   33000,   50000 ]      466   0.003%  99.971% 
1795368119.385	(   50000,   75000 ]      419   0.003%  99.974% 
1795368119.385	(   75000,  110000 ]     1742   0.011%  99.985% 
1795368119.385	(  110000,  170000 ]      769   0.005%  99.990% 
1795368119.385	(  170000,  250000 ]      708   0.005%  99.995% 
1795368119.385	(  250000,  380000 ]      538   0.003%  99.998% 
1795368119.385	(  380000,  570000 ]      256   0.002% 100.000% 
1795368119.385	(  570000,  860000 ]      126   0.001% 100.001% 
1795368119.385	(  860000, 1200000 ]       21   0.000% 100.001% 
1795368119.385	( 1200000, 1900000 ]        8   0.000% 100.001% 
1795368119.385	( 1900000, 2900000 ]        2   0.000% 100.001% 
1795368119.385	
1795368119.385	** Level 2 read latency histogram (micros):
1795368119.385	Count: 45172971 Average: 141.8181  StdDev: 33.43
1795368119.385	Min: 9  Median: 65.1847  Max: 1909090
1795368119.385	Percentiles: P50: 65.18 P75: 96.11 P99: 524.74 P99.9: 2744.11 P99.99: 99522.26
1795368119.385	------------------------------------------------------
1795368119.385	(       6,      10 ]      320   0.001%   0.001% 
1795368119.385	(      10,      15 ]     1882   0.004%   0.005% 
1795368119.385	(      15,      22 ]      388   0.001%   0.006% 
1795368119.385	(      22,      34 ]      196   0.000%   0.006% 
1795368119.385	(      34,      51 ] 13801367  30.552%  30.558% ######
1795368119.385	(      51,      76 ] 15478479  34.265%  64.823% #######
1795368119.385	(      76,     110 ]  7772577  17.206%  82.030% ###
1795368119.385	(     110,     170 ]  4569084  10.115%  92.144% ##
1795368119.385	(     170,     250 ]  1969789   4.361%  96.505% #
1795368119.385	(     250,     380 ]   884929   1.959%  98.464% 
1795368119.385	(     380,     580 ]   334707   0.741%  99.205% 
1795368119.385	(     580,     870 ]   185867   0.411%  99.616% 
1795368119.385	(     870,    1300 ]    84171   0.186%  99.803% 
1795368119.385	(    1300,    1900 ]    29373   0.065%  99.868% 
1795368119.385	(    1900,    2900 ]    17378   0.038%  99.906% 
1795368119.385	(    2900,    4400 ]    12437   0.028%  99.934% 
1795368119.385	(    4400,    6600 ]     7390   0.016%  99.950% 
1795368119.385	(    6600,    9900 ]     5855   0.013%  99.963% 
1795368119.385	(    9900,   14000 ]     3633   0.008%  99.971% 
1795368119.385	(   14000,   22000 ]     2663   0.006%  99.977% 
1795368119.385	(   22000,   33000 ]     1199   0.003%  99.979% 
1795368119.385	(   33000,   50000 ]      962   0.002%  99.982% 
1795368119.385	(   50000,   75000 ]      830   0.002%  99.983% 
1795368119.385	(   75000,  110000 ]     4250   0.009%  99.993% 
1795368119.385	(  110000,  170000 ]     1742   0.004%  99.997% 
1795368119.385	(  170000,  250000 ]     1774   0.004% 100.001% 
1795368119.385	(  250000,  380000 ]     1476   0.003% 100.004% 
1795368119.385	(  380000,  570000 ]      646   0.001% 100.005% 
1795368119.385	(  570000,  860000 ]      210   0.000% 100.006% 
1795368119.385	(  860000, 1200000 ]       34   0.000% 100.006% 
1795368119.385	( 1200000, 1900000 ]       17   0.000% 100.006% 
1795368119.385	( 1900000, 2900000 ]        1   0.000% 100.006% 
1795368119.385	
1795368119.385	** Level 3 read latency histogram (micros):
1795368119.385	Count: 58183862 Average: 155.2387  StdDev: 54.66
1795368119.385	Min: 9  Median: 65.8284  Max: 9241216
1795368119.385	Percentiles: P50: 65.83 P75: 97.29 P99: 504.12 P99.9: 4297.31 P99.99: 109879.01
1795368119.385	------------------------------------------------------
1795368119.385	(       6,      10 ]      301   0.001%   0.001% 
1795368119.385	(      10,      15 ]     1191   0.002%   0.003% 
1795368119.385	(      15,      22 ]      230   0.000%   0.003% 
1795368119.385	(      22,      34 ]      158   0.000%   0.003% 
1795368119.385	(      34,      51 ] 17080346  29.356%  29.359% ######
1795368119.385	(      51,      76 ] 20247868  34.800%  64.159% #######
1795368119.385	(      76,     110 ] 10072371  17.311%  81.470% ###
1795368119.385	(     110,     170 ]  6133659  10.542%  92.012% ##
1795368119.385	(     170,     250 ]  2668157   4.586%  96.598% #
1795368119.385	(     250,     380 ]  1154518   1.984%  98.582% 
1795368119.385	(     380,     580 ]   391932   0.674%  99.256% 
1795368119.385	(     580,     870 ]   195866   0.337%  99.592% 
1795368119.385	(     870,    1300 ]    86256   0.148%  99.740% 
1795368119.385	(    1300,    1900 ]    38214   0.066%  99.806% 
1795368119.385	(    1900,    2900 ]    32134   0.055%  99.861% 
1795368119.385	(    2900,    4400 ]    24129   0.041%  99.903% 
1795368119.385	(    4400,    6600 ]    14458   0.025%  99.928% 
1795368119.385	(    6600,    9900 ]    11574   0.020%  99.948% 
1795368119.385	(    9900,   14000 ]     7169   0.012%  99.960% 
1795368119.385	(   14000,   22000 ]     5448   0.009%  99.969% 
1795368119.385	(   22000,   33000 ]     2753   0.005%  99.974% 
1795368119.385	(   33000,   50000 ]     1947   0.003%  99.977% 
1795368119.385	(   50000,   75000 ]     1776   0.003%  99.980% 
1795368119.385	(   75000,  110000 ]     5608   0.010%  99.990% 
1795368119.385	(  110000,  170000 ]     2893   0.005%  99.995% 
1795368119.385	(  170000,  250000 ]     2902   0.005% 100.000% 
1795368119.385	(  250000,  380000 ]     2285   0.004% 100.004% 
1795368119.385	(  380000,  570000 ]      951   0.002% 100.006% 
1795368119.385	(  570000,  860000 ]      329   0.001% 100.006% 
1795368119.385	(  860000, 1200000 ]       95   0.000% 100.006% 
1795368119.385	( 1200000, 1900000 ]       45   0.000% 100.006% 
1795368119.385	( 6500000, 9800000 ]        1   0.000% 100.006% 
1795368119.385	
1795368119.385	** Level 4 read latency histogram (micros):
1795368119.385	Count: 57659036 Average: 371.5653  StdDev: 17.12
1795368119.385	Min: 9  Median: 70.3190  Max: 2587944
1795368119.385	Percentiles: P50: 70.32 P75: 108.76 P99: 1851.08 P99.9: 44581.31 P99.99: 280725.17
1795368119.385	------------------------------------------------------
1795368119.385	(       6,      10 ]      451   0.001%   0.001% 
1795368119.385	(      10,      15 ]     1762   0.003%   0.004% 
1795368119.385	(      15,      22 ]      322   0.001%   0.004% 
1795368119.385	(      22,      34 ]      259   0.000%   0.005% 
1795368119.385	(      34,      51 ] 10230493  17.743%  17.748% ####
1795368119.385	(      51,      76 ] 24064703  41.736%  59.484% ########
1795368119.385	(      76,     110 ]  9285177  16.104%  75.588% ###
1795368119.385	(     110,     170 ]  7016013  12.168%  87.756% ##
1795368119.385	(     170,     250 ]  3184744   5.523%  93.279% #
1795368119.385	(     250,     380 ]  1575822   2.733%  96.012% #
1795368119.385	(     380,     580 ]   800994   1.389%  97.401% 
1795368119.385	(     580,     870 ]   549819   0.954%  98.355% 
1795368119.385	(     870,    1300 ]   256612   0.445%  98.800% 
1795368119.385	(    1300,    1900 ]   125507   0.218%  99.018% 
1795368119.385	(    1900,    2900 ]   127931   0.222%  99.240% 
1795368119.385	(    2900,    4400 ]   116370   0.202%  99.441% 
1795368119.385	(    4400,    6600 ]    87774   0.152%  99.594% 
1795368119.385	(    6600,    9900 ]    72822   0.126%  99.720% 
1795368119.385	(    9900,   14000 ]    45422   0.079%  99.799% 
1795368119.385	(   14000,   22000 ]    34115   0.059%  99.858% 
1795368119.385	(   22000,   33000 ]    16763   0.029%  99.887% 
1795368119.385	(   33000,   50000 ]    11012   0.019%  99.906% 
1795368119.385	(   50000,   75000 ]     9650   0.017%  99.923% 
1795368119.385	(   75000,  110000 ]    13849   0.024%  99.947% 
1795368119.385	(  110000,  170000 ]    12475   0.022%  99.968% 
1795368119.385	(  170000,  250000 ]    10632   0.018%  99.987% 
1795368119.385	(  250000,  380000 ]     7519   0.013% 100.000% 
1795368119.385	(  380000,  570000 ]     2744   0.005% 100.005% 
1795368119.385	(  570000,  860000 ]     1645   0.003% 100.008% 
1795368119.385	(  860000, 1200000 ]      658   0.001% 100.009% 
1795368119.385	( 1200000, 1900000 ]      347   0.001% 100.009% 
1795368119.385	( 1900000, 2900000 ]       13   0.000% 100.009% 
1795368119.385	
1795368119.385	** Level 5 read latency histogram (micros):
1795368119.385	Count: 30967831 Average: 383.1187  StdDev: 88.98
1795368119.385	Min: 9  Median: 69.6881  Max: 2658760
1795368119.385	Percentiles: P50: 69.69 P75: 106.08 P99: 1978.51 P99.9: 52176.06 P99.99: 307226.72
1795368119.385	------------------------------------------------------
1795368119.385	(       6,      10 ]      419   0.001%   0.001% 
1795368119.385	(      10,      15 ]     2340   0.008%   0.009% 
1795368119.385	(      15,      22 ]      480   0.002%   0.010% 
1795368119.385	(      22,      34 ]      388   0.001%   0.012% 
1795368119.385	(      34,      51 ]  4864622  15.709%  15.720% ###
1795368119.385	(      51,      76 ] 14201070  45.857%  61.578% #########
1795368119.385	(      76,     110 ]  4698650  15.173%  76.751% ###
1795368119.385	(     110,     170 ]  3403351  10.990%  87.740% ##
1795368119.385	(     170,     250 ]  1568925   5.066%  92.807% #
1795368119.385	(     250,     380 ]   801979   2.590%  95.396% #
1795368119.385	(     380,     580 ]   468786   1.514%  96.910% 
1795368119.385	(     580,     870 ]   371373   1.199%  98.109% 
1795368119.385	(     870,    1300 ]   187568   0.606%  98.715% 
1795368119.385	(    1300,    1900 ]    82429   0.266%  98.981% 
1795368119.385	(    1900,    2900 ]    73525   0.237%  99.219% 
1795368119.385	(    2900,    4400 ]    63260   0.204%  99.423% 
1795368119.385	(    4400,    6600 ]    46615   0.151%  99.574% 
1795368119.385	(    6600,    9900 ]    40532   0.131%  99.704% 
1795368119.385	(    9900,   14000 ]    24751   0.080%  99.784% 
1795368119.385	(   14000,   22000 ]    19277   0.062%  99.847% 
1795368119.385	(   22000,   33000 ]     9512   0.031%  99.877% 
1795368119.385	(   33000,   50000 ]     6532   0.021%  99.898% 
1795368119.385	(   50000,   75000 ]     5505   0.018%  99.916% 
1795368119.385	(   75000,  110000 ]     7621   0.025%  99.941% 
1795368119.385	(  110000,  170000 ]     7249   0.023%  99.964% 
1795368119.385	(  170000,  250000 ]     6140   0.020%  99.984% 
1795368119.385	(  250000,  380000 ]     4169   0.013%  99.998% 
1795368119.385	(  380000,  570000 ]     1523   0.005% 100.002% 
1795368119.385	(  570000,  860000 ]      759   0.002% 100.005% 
1795368119.385	(  860000, 1200000 ]      370   0.001% 100.006% 
1795368119.385	( 1200000, 1900000 ]      176   0.001% 100.007% 
1795368119.385	( 1900000, 2900000 ]       18   0.000% 100.007% 
1795368119.385	
1795368119.385	
1795368119.385	** DB Stats **
1795368119.385	Uptime(secs): 62744.9 total, 33.6 interval
1795368119.385	Cumulative writes: 34M writes, 34M keys, 23M commit groups, 1.5 writes per commit group, ingest: 33.69 GB, 0.55 MB/s
1795368119.385	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.69 GB, 0.55 MB/s
1795368119.385	Cumulative stall: 16:11:51.746 H:M:S, 92.9 percent
1795368119.385	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795368119.385	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795368119.385	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795368119.385	
1795368119.385	STATISTICS:
1795368119.385	rocksdb.block.cache.miss COUNT : 208401415
1795368119.386	rocksdb.block.cache.hit COUNT : 0
1795368119.386	rocksdb.block.cache.add COUNT : 0
1795368119.386	rocksdb.block.cache.add.failures COUNT : 0
1795368119.386	rocksdb.block.cache.index.miss COUNT : 0
1795368119.386	rocksdb.block.cache.index.hit COUNT : 0
1795368119.386	rocksdb.block.cache.index.add COUNT : 0
1795368119.386	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795368119.386	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795368119.386	rocksdb.block.cache.filter.miss COUNT : 0
1795368119.386	rocksdb.block.cache.filter.hit COUNT : 0
1795368119.386	rocksdb.block.cache.filter.add COUNT : 0
1795368119.386	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795368119.386	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795368119.386	rocksdb.block.cache.data.miss COUNT : 208401415
1795368119.386	rocksdb.block.cache.data.hit COUNT : 0
1795368119.386	rocksdb.block.cache.data.add COUNT : 0
1795368119.386	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795368119.386	rocksdb.block.cache.bytes.read COUNT : 0
1795368119.386	rocksdb.block.cache.bytes.write COUNT : 0
1795368119.386	rocksdb.bloom.filter.useful COUNT : 0
1795368119.386	rocksdb.bloom.filter.full.positive COUNT : 0
1795368119.386	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795368119.386	rocksdb.bloom.filter.micros COUNT : 0
1795368119.386	rocksdb.persistent.cache.hit COUNT : 0
1795368119.386	rocksdb.persistent.cache.miss COUNT : 0
1795368119.386	rocksdb.sim.block.cache.hit COUNT : 0
1795368119.386	rocksdb.sim.block.cache.miss COUNT : 0
1795368119.386	rocksdb.memtable.hit COUNT : 0
1795368119.386	rocksdb.memtable.miss COUNT : 0
1795368119.386	rocksdb.l0.hit COUNT : 0
1795368119.386	rocksdb.l1.hit COUNT : 0
1795368119.386	rocksdb.l2andup.hit COUNT : 0
1795368119.386	rocksdb.compaction.key.drop.new COUNT : 31624904
1795368119.386	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795368119.386	rocksdb.compaction.key.drop.range_del COUNT : 0
1795368119.386	rocksdb.compaction.key.drop.user COUNT : 0
1795368119.386	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795368119.386	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795368119.386	rocksdb.compaction.cancelled COUNT : 0
1795368119.386	rocksdb.number.keys.written COUNT : 34383360
1795368119.386	rocksdb.number.keys.read COUNT : 0
1795368119.386	rocksdb.number.keys.updated COUNT : 0
1795368119.386	rocksdb.bytes.written COUNT : 36173187924
1795368119.386	rocksdb.bytes.read COUNT : 0
1795368119.386	rocksdb.number.db.seek COUNT : 0
1795368119.386	rocksdb.number.db.next COUNT : 0
1795368119.386	rocksdb.number.db.prev COUNT : 0
1795368119.386	rocksdb.number.db.seek.found COUNT : 0
1795368119.386	rocksdb.number.db.next.found COUNT : 0
1795368119.386	rocksdb.number.db.prev.found COUNT : 0
1795368119.386	rocksdb.db.iter.bytes.read COUNT : 0
1795368119.386	rocksdb.no.file.closes COUNT : 0
1795368119.386	rocksdb.no.file.opens COUNT : 1924718
1795368119.386	rocksdb.no.file.errors COUNT : 0
1795368119.386	rocksdb.l0.slowdown.micros COUNT : 0
1795368119.386	rocksdb.memtable.compaction.micros COUNT : 0
1795368119.386	rocksdb.l0.num.files.stall.micros COUNT : 0
1795368119.386	rocksdb.stall.micros COUNT : 58311746050
1795368119.386	rocksdb.db.mutex.wait.micros COUNT : 0
1795368119.386	rocksdb.rate.limit.delay.millis COUNT : 0
1795368119.386	rocksdb.num.iterators COUNT : 0
1795368119.386	rocksdb.number.multiget.get COUNT : 0
1795368119.386	rocksdb.number.multiget.keys.read COUNT : 0
1795368119.386	rocksdb.number.multiget.bytes.read COUNT : 0
1795368119.386	rocksdb.number.deletes.filtered COUNT : 0
1795368119.386	rocksdb.number.merge.failures COUNT : 0
1795368119.386	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795368119.386	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795368119.386	rocksdb.number.reseeks.iteration COUNT : 0
1795368119.386	rocksdb.getupdatessince.calls COUNT : 0
1795368119.386	rocksdb.block.cachecompressed.miss COUNT : 0
1795368119.386	rocksdb.block.cachecompressed.hit COUNT : 0
1795368119.386	rocksdb.block.cachecompressed.add COUNT : 0
1795368119.386	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795368119.386	rocksdb.wal.synced COUNT : 0
1795368119.386	rocksdb.wal.bytes COUNT : 36173187924
1795368119.386	rocksdb.write.self COUNT : 23080007
1795368119.386	rocksdb.write.other COUNT : 11303353
1795368119.386	rocksdb.write.timeout COUNT : 0
1795368119.386	rocksdb.write.wal COUNT : 34383360
1795368119.386	rocksdb.compact.read.bytes COUNT : 876014440121
1795368119.386	rocksdb.compact.write.bytes COUNT : 842779876235
1795368119.386	rocksdb.flush.write.bytes COUNT : 36310765756
1795368119.386	rocksdb.compact.read.marked.bytes COUNT : 0
1795368119.386	rocksdb.compact.read.periodic.bytes COUNT : 0
1795368119.386	rocksdb.compact.read.ttl.bytes COUNT : 0
1795368119.386	rocksdb.compact.write.marked.bytes COUNT : 0
1795368119.386	rocksdb.compact.write.periodic.bytes COUNT : 0
1795368119.386	rocksdb.compact.write.ttl.bytes COUNT : 0
1795368119.386	rocksdb.number.direct.load.table.properties COUNT : 0
1795368119.386	rocksdb.number.superversion_acquires COUNT : 0
1795368119.386	rocksdb.number.superversion_releases COUNT : 0
1795368119.386	rocksdb.number.superversion_cleanups COUNT : 0
1795368119.386	rocksdb.number.block.compressed COUNT : 0
1795368119.386	rocksdb.number.block.decompressed COUNT : 0
1795368119.386	rocksdb.number.block.not_compressed COUNT : 0
1795368119.386	rocksdb.merge.operation.time.nanos COUNT : 0
1795368119.386	rocksdb.filter.operation.time.nanos COUNT : 0
1795368119.386	rocksdb.row.cache.hit COUNT : 0
1795368119.386	rocksdb.row.cache.miss COUNT : 0
1795368119.386	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795368119.386	rocksdb.read.amp.total.read.bytes COUNT : 0
1795368119.386	rocksdb.number.rate_limiter.drains COUNT : 0
1795368119.386	rocksdb.number.iter.skip COUNT : 0
1795368119.386	rocksdb.blobdb.num.put COUNT : 0
1795368119.386	rocksdb.blobdb.num.write COUNT : 0
1795368119.386	rocksdb.blobdb.num.get COUNT : 0
1795368119.386	rocksdb.blobdb.num.multiget COUNT : 0
1795368119.386	rocksdb.blobdb.num.seek COUNT : 0
1795368119.386	rocksdb.blobdb.num.next COUNT : 0
1795368119.386	rocksdb.blobdb.num.prev COUNT : 0
1795368119.386	rocksdb.blobdb.num.keys.written COUNT : 0
1795368119.386	rocksdb.blobdb.num.keys.read COUNT : 0
1795368119.386	rocksdb.blobdb.bytes.written COUNT : 0
1795368119.386	rocksdb.blobdb.bytes.read COUNT : 0
1795368119.386	rocksdb.blobdb.write.inlined COUNT : 0
1795368119.386	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795368119.386	rocksdb.blobdb.write.blob COUNT : 0
1795368119.386	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795368119.386	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795368119.386	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795368119.386	rocksdb.blobdb.blob.file.synced COUNT : 0
1795368119.386	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795368119.386	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795368119.386	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795368119.386	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795368119.386	rocksdb.blobdb.gc.num.files COUNT : 0
1795368119.386	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795368119.386	rocksdb.blobdb.gc.failures COUNT : 0
1795368119.386	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795368119.386	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795368119.386	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795368119.386	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795368119.386	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795368119.386	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795368119.386	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795368119.386	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795368119.386	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795368119.386	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795368119.386	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795368119.386	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795368119.386	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795368119.386	rocksdb.txn.get.tryagain COUNT : 0
1795368119.386	rocksdb.number.multiget.keys.found COUNT : 0
1795368119.386	rocksdb.num.iterator.created COUNT : 0
1795368119.386	rocksdb.num.iterator.deleted COUNT : 0
1795368119.386	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795368119.386	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795368119.386	rocksdb.block.cache.compression.dict.add COUNT : 0
1795368119.386	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795368119.386	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795368119.386	rocksdb.block.cache.add.redundant COUNT : 0
1795368119.386	rocksdb.block.cache.index.add.redundant COUNT : 0
1795368119.386	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795368119.386	rocksdb.block.cache.data.add.redundant COUNT : 0
1795368119.386	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795368119.386	rocksdb.files.marked.trash COUNT : 0
1795368119.386	rocksdb.files.deleted.immediately COUNT : 1922432
1795368119.386	rocksdb.error.handler.bg.errro.count COUNT : 0
1795368119.386	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795368119.386	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795368119.386	rocksdb.error.handler.autoresume.count COUNT : 0
1795368119.386	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795368119.386	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795368119.386	rocksdb.memtable.payload.bytes.at.flush COUNT : 36033040256
1795368119.386	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1821424
1795368119.386	rocksdb.secondary.cache.hits COUNT : 0
1795368119.386	rocksdb.verify_checksum.read.bytes COUNT : 0
1795368119.386	rocksdb.backup.read.bytes COUNT : 0
1795368119.386	rocksdb.backup.write.bytes COUNT : 0
1795368119.386	rocksdb.remote.compact.read.bytes COUNT : 0
1795368119.386	rocksdb.remote.compact.write.bytes COUNT : 0
1795368119.386	rocksdb.hot.file.read.bytes COUNT : 0
1795368119.386	rocksdb.warm.file.read.bytes COUNT : 0
1795368119.386	rocksdb.cold.file.read.bytes COUNT : 0
1795368119.386	rocksdb.hot.file.read.count COUNT : 0
1795368119.386	rocksdb.warm.file.read.count COUNT : 0
1795368119.386	rocksdb.cold.file.read.count COUNT : 0
1795368119.386	rocksdb.last.level.read.bytes COUNT : 0
1795368119.386	rocksdb.last.level.read.count COUNT : 0
1795368119.386	rocksdb.non.last.level.read.bytes COUNT : 876303398112
1795368119.386	rocksdb.non.last.level.read.count COUNT : 216100287
1795368119.386	rocksdb.block.checksum.compute.count COUNT : 212250851
1795368119.386	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.db.write.micros P50 : 2671.143219 P95 : 24469.426886 P99 : 94555.596622 P100 : 12769223.000000 COUNT : 34383360 SUM : 249642487262
1795368119.386	rocksdb.compaction.times.micros P50 : 284634.434173 P95 : 1054882.099891 P99 : 1980095.011876 P100 : 13866114.000000 COUNT : 299596 SUM : 111699580874
1795368119.386	rocksdb.compaction.times.cpu_micros P50 : 160361.340186 P95 : 893568.345324 P99 : 1768305.529522 P100 : 11485667.000000 COUNT : 299596 SUM : 86136266181
1795368119.386	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.table.sync.micros P50 : 42390.181818 P95 : 593545.238095 P99 : 1178829.914530 P100 : 2517875.000000 COUNT : 19957 SUM : 2572375854
1795368119.386	rocksdb.compaction.outfile.sync.micros P50 : 8465.556881 P95 : 29547.356695 P99 : 253537.484812 P100 : 13599214.000000 COUNT : 1868484 SUM : 30705471529
1795368119.386	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.manifest.file.sync.micros P50 : 508.860815 P95 : 60399.860918 P99 : 361858.043336 P100 : 1811986.000000 COUNT : 247454 SUM : 3164952522
1795368119.386	rocksdb.table.open.io.micros P50 : 281.998799 P95 : 711.143226 P99 : 6586.861521 P100 : 2215654.000000 COUNT : 1924718 SUM : 2157143070
1795368119.386	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.read.block.compaction.micros P50 : 69.073929 P95 : 253.855812 P99 : 868.828864 P100 : 9241648.000000 COUNT : 208401415 SUM : 51352400461
1795368119.386	rocksdb.read.block.get.micros P50 : 67.079423 P95 : 171.688014 P99 : 715.066859 P100 : 2212692.000000 COUNT : 1924718 SUM : 275878990
1795368119.386	rocksdb.write.raw.block.micros P50 : 0.529297 P95 : 1.298365 P99 : 14.070754 P100 : 8944051.000000 COUNT : 214760234 SUM : 319282963
1795368119.386	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.numfiles.in.singlecompaction P50 : 5.823419 P95 : 9.582481 P99 : 9.926814 P100 : 50.000000 COUNT : 300355 SUM : 1883083
1795368119.386	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.db.write.stall P50 : 0.922285 P95 : 8730.885638 P99 : 31501.320478 P100 : 12765025.000000 COUNT : 23057708 SUM : 58318673176
1795368119.386	rocksdb.sst.read.micros P50 : 67.544511 P95 : 247.825235 P99 : 856.111013 P100 : 9241216.000000 COUNT : 216100287 SUM : 52893988557
1795368119.386	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.bytes.per.write P50 : 1153.279607 P95 : 3874.867989 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23080007 SUM : 36173187924
1795368119.386	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.386	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.db.flush.micros P50 : 149469.537815 P95 : 858448.930297 P99 : 1727240.000000 P100 : 12503003.000000 COUNT : 19955 SUM : 5363395201
1795368119.387	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795368119.387	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1882324 SUM : 0
1795368119.387	
