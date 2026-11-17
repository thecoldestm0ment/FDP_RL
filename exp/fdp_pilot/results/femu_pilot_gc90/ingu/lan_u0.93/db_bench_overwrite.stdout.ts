1794781344.829	Initializing RocksDB Options from the specified file
1794781344.829	Initializing RocksDB Options from command-line flags
1794781358.755	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1794781358.755	Values:     1024 bytes each (512 bytes after compression)
1794781358.755	Entries:    17191679
1794781358.755	Prefix:    0 bytes
1794781358.755	Keys per prefix:    0
1794781358.755	RawSize:    17051.1 MB (estimated)
1794781358.755	FileSize:   8656.7 MB (estimated)
1794781358.755	Write rate: 0 bytes/second
1794781358.755	Read rate: 0 ops/second
1794781358.755	Compression: NoCompression
1794781358.755	Compression sampling rate: 0
1794781358.755	Memtablerep: SkipListFactory
1794781358.755	Perf Level: 1
1794781358.755	------------------------------------------------
1794781358.755	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1794851748.885	overwrite    :    8174.902 micros/op 488 ops/sec;    0.5 MB/s
1794851753.865	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794851753.873	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851763.867	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851773.871	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851783.868	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851793.868	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851803.868	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851813.868	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851823.869	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851833.875	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851843.873	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851853.874	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851863.875	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851873.873	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851883.874	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851893.877	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851903.877	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851913.877	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851923.954	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851933.953	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851943.953	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1794851953.955	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794851953.965	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1794851953.965	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1794851953.966	
1794851953.966	Level Files Size(MB)
1794851953.966	--------------------
1794851953.966	  0        1        2
1794851953.966	  1        5        2
1794851953.966	  2       59       25
1794851953.966	  3      598      250
1794851953.966	  4     5726     2500
1794851953.966	  5    36007    17326
1794851953.966	  6        0        0
1794851953.966	
1794851953.977	
1794851953.977	
1794851953.977	** Compaction Stats [default] **
1794851953.977	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794851953.977	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794851953.977	  L0      1/0    1.88 MB   0.8      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0      5.1   6779.70           3012.46     19938    0.340    6870      0       0.0       0.0
1794851953.977	  L1      5/0    2.19 MB   0.9     58.2    33.8     24.4      58.2     33.8       0.0   1.7      8.6      8.6   6962.19           5045.43      9933    0.701     59M   6743       0.0       0.0
1794851953.977	  L2     59/0   24.91 MB   1.0    170.6    33.8    136.8     170.6     33.8       0.0   5.0      7.8      7.8  22309.05          12822.81     72781    0.307    173M    51K       0.0       0.0
1794851953.977	  L3    598/0   249.51 MB   1.0    219.8    33.8    186.0     219.3     33.3       0.0   6.5      8.5      8.5  26425.61          15875.00     76828    0.344    223M   513K       0.0       0.0
1794851953.977	  L4   5726/0    2.44 GB   1.0    222.6    33.3    189.4     217.7     28.3       0.0   6.5      5.2      5.1  43481.85          36696.65     77109    0.564    226M  5056K       0.0       0.0
1794851953.977	  L5  36007/0   16.92 GB   0.7    145.0    28.3    116.7     119.4      2.7       0.0   4.2      5.8      4.8  25517.50          21359.92     62734    0.407    147M    25M       0.0       0.0
1794851953.977	 Sum  42396/0   19.63 GB   0.0    816.3   163.0    653.3     819.0    165.7       0.0  24.2      6.4      6.4 131475.90          94812.27    319323    0.412    829M    31M       0.0       0.0
1794851953.977	 Int      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0 18939312.0      9.1      7.8      2.31              2.31         7    0.330     20K   3070       0.0       0.0
1794851953.977	
1794851953.977	** Compaction Stats [default] **
1794851953.977	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1794851953.977	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1794851953.977	 Low      0/0    0.00 KB   0.0    816.3   163.0    653.3     785.2    131.9       0.0   0.0      6.7      6.4 124697.54          91801.14    299386    0.417    829M    31M       0.0       0.0
1794851953.977	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0      5.1   6778.35           3011.14     19935    0.340       0      0       0.0       0.0
1794851953.977	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    149.3      0.01              0.00         2    0.006       0      0       0.0       0.0
1794851953.977	
1794851953.977	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1794851953.977	
1794851953.977	Uptime(secs): 70609.1 total, 6.1 interval
1794851953.977	Flush(GB): cumulative 33.810, interval 0.000
1794851953.977	AddFile(GB): cumulative 0.000, interval 0.000
1794851953.977	AddFile(Total Files): cumulative 0, interval 0
1794851953.977	AddFile(L0 Files): cumulative 0, interval 0
1794851953.977	AddFile(Keys): cumulative 0, interval 0
1794851953.977	Cumulative compaction: 819.01 GB write, 11.88 MB/s write, 816.29 GB read, 11.84 MB/s read, 131475.9 seconds
1794851953.977	Interval compaction: 0.02 GB write, 2.97 MB/s write, 0.02 GB read, 3.47 MB/s read, 2.3 seconds
1794851953.977	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 360120 slowdown for pending_compaction_bytes, 14 memtable_compaction, 4 memtable_slowdown, interval 0 total count
1794851953.978	Block cache LRUCache@0x58d2e69f9a70#95924 capacity: 8.00 MB collections: 392 last_copies: 2 last_secs: 5.4e-05 secs_since: 126
1794851953.978	Block cache entry stats(count,size,portion): Misc(7,25.03 KB,0.305557%)
1794851953.978	
1794851953.978	** File Read Latency Histogram By Level [default] **
1794851953.978	** Level 0 read latency histogram (micros):
1794851953.978	Count: 8684434 Average: 181.3343  StdDev: 277.04
1794851953.978	Min: 20  Median: 64.7282  Max: 2843448
1794851953.978	Percentiles: P50: 64.73 P75: 94.29 P99: 603.18 P99.9: 7239.29 P99.99: 241975.22
1794851953.978	------------------------------------------------------
1794851953.978	(      15,      22 ]        2   0.000%   0.000% 
1794851953.978	(      22,      34 ]       11   0.000%   0.000% 
1794851953.978	(      34,      51 ]  2664755  30.684%  30.684% ######
1794851953.978	(      51,      76 ]  3054747  35.175%  65.859% #######
1794851953.978	(      76,     110 ]  1475502  16.990%  82.850% ###
1794851953.978	(     110,     170 ]   872391  10.045%  92.895% ##
1794851953.978	(     170,     250 ]   322046   3.708%  96.603% #
1794851953.978	(     250,     380 ]   138148   1.591%  98.194% 
1794851953.978	(     380,     580 ]    66531   0.766%  98.960% 
1794851953.978	(     580,     870 ]    43239   0.498%  99.458% 
1794851953.978	(     870,    1300 ]    19523   0.225%  99.683% 
1794851953.978	(    1300,    1900 ]     6833   0.079%  99.762% 
1794851953.978	(    1900,    2900 ]     4416   0.051%  99.812% 
1794851953.978	(    2900,    4400 ]     3788   0.044%  99.856% 
1794851953.978	(    4400,    6600 ]     3267   0.038%  99.894% 
1794851953.978	(    6600,    9900 ]     2842   0.033%  99.926% 
1794851953.978	(    9900,   14000 ]     1744   0.020%  99.946% 
1794851953.978	(   14000,   22000 ]     1026   0.012%  99.958% 
1794851953.978	(   22000,   33000 ]      424   0.005%  99.963% 
1794851953.978	(   33000,   50000 ]      291   0.003%  99.967% 
1794851953.978	(   50000,   75000 ]      234   0.003%  99.969% 
1794851953.978	(   75000,  110000 ]      846   0.010%  99.979% 
1794851953.978	(  110000,  170000 ]      543   0.006%  99.985% 
1794851953.978	(  170000,  250000 ]      463   0.005%  99.991% 
1794851953.978	(  250000,  380000 ]      418   0.005%  99.995% 
1794851953.978	(  380000,  570000 ]      211   0.002%  99.998% 
1794851953.978	(  570000,  860000 ]      104   0.001%  99.999% 
1794851953.978	(  860000, 1200000 ]       47   0.001% 100.000% 
1794851953.978	( 1200000, 1900000 ]       36   0.000% 100.000% 
1794851953.978	( 1900000, 2900000 ]        6   0.000% 100.000% 
1794851953.978	
1794851953.978	** Level 1 read latency histogram (micros):
1794851953.978	Count: 15396629 Average: 161.3449  StdDev: 230.30
1794851953.978	Min: 10  Median: 63.9696  Max: 2291249
1794851953.978	Percentiles: P50: 63.97 P75: 92.75 P99: 550.64 P99.9: 4637.93 P99.99: 184217.21
1794851953.978	------------------------------------------------------
1794851953.978	(       6,      10 ]       58   0.000%   0.000% 
1794851953.978	(      10,      15 ]      220   0.001%   0.002% 
1794851953.978	(      15,      22 ]       31   0.000%   0.002% 
1794851953.978	(      22,      34 ]       50   0.000%   0.002% 
1794851953.978	(      34,      51 ]  4903629  31.849%  31.851% ######
1794851953.978	(      51,      76 ]  5386310  34.984%  66.835% #######
1794851953.978	(      76,     110 ]  2551886  16.574%  83.409% ###
1794851953.978	(     110,     170 ]  1470952   9.554%  92.963% ##
1794851953.978	(     170,     250 ]   582453   3.783%  96.746% #
1794851953.978	(     250,     380 ]   248660   1.615%  98.361% 
1794851953.978	(     380,     580 ]   115348   0.749%  99.110% 
1794851953.978	(     580,     870 ]    70627   0.459%  99.569% 
1794851953.978	(     870,    1300 ]    30509   0.198%  99.767% 
1794851953.978	(    1300,    1900 ]     9830   0.064%  99.831% 
1794851953.978	(    1900,    2900 ]     5722   0.037%  99.868% 
1794851953.978	(    2900,    4400 ]     4555   0.030%  99.897% 
1794851953.978	(    4400,    6600 ]     3628   0.024%  99.921% 
1794851953.978	(    6600,    9900 ]     3285   0.021%  99.942% 
1794851953.978	(    9900,   14000 ]     1887   0.012%  99.955% 
1794851953.978	(   14000,   22000 ]     1223   0.008%  99.963% 
1794851953.978	(   22000,   33000 ]      515   0.003%  99.966% 
1794851953.978	(   33000,   50000 ]      371   0.002%  99.968% 
1794851953.978	(   50000,   75000 ]      315   0.002%  99.970% 
1794851953.978	(   75000,  110000 ]     2038   0.013%  99.984% 
1794851953.978	(  110000,  170000 ]      872   0.006%  99.989% 
1794851953.978	(  170000,  250000 ]      649   0.004%  99.993% 
1794851953.978	(  250000,  380000 ]      604   0.004%  99.997% 
1794851953.978	(  380000,  570000 ]      296   0.002%  99.999% 
1794851953.978	(  570000,  860000 ]      144   0.001% 100.000% 
1794851953.978	(  860000, 1200000 ]       51   0.000% 100.001% 
1794851953.978	( 1200000, 1900000 ]       23   0.000% 100.001% 
1794851953.978	( 1900000, 2900000 ]        3   0.000% 100.001% 
1794851953.978	
1794851953.978	** Level 2 read latency histogram (micros):
1794851953.978	Count: 45238735 Average: 143.2356  StdDev: 40.01
1794851953.978	Min: 10  Median: 64.8074  Max: 3249963
1794851953.978	Percentiles: P50: 64.81 P75: 95.34 P99: 498.92 P99.9: 2146.13 P99.99: 105273.30
1794851953.978	------------------------------------------------------
1794851953.978	(       6,      10 ]      317   0.001%   0.001% 
1794851953.978	(      10,      15 ]     1733   0.004%   0.005% 
1794851953.978	(      15,      22 ]      287   0.001%   0.005% 
1794851953.978	(      22,      34 ]      202   0.000%   0.006% 
1794851953.978	(      34,      51 ] 14148404  31.275%  31.281% ######
1794851953.978	(      51,      76 ] 15333140  33.894%  65.174% #######
1794851953.978	(      76,     110 ]  7812952  17.270%  82.445% ###
1794851953.978	(     110,     170 ]  4475049   9.892%  92.337% ##
1794851953.978	(     170,     250 ]  1950536   4.312%  96.649% #
1794851953.978	(     250,     380 ]   870283   1.924%  98.572% 
1794851953.978	(     380,     580 ]   325323   0.719%  99.292% 
1794851953.978	(     580,     870 ]   175662   0.388%  99.680% 
1794851953.978	(     870,    1300 ]    73582   0.163%  99.842% 
1794851953.978	(    1300,    1900 ]    23053   0.051%  99.893% 
1794851953.978	(    1900,    2900 ]    12080   0.027%  99.920% 
1794851953.978	(    2900,    4400 ]     8953   0.020%  99.940% 
1794851953.978	(    4400,    6600 ]     5970   0.013%  99.953% 
1794851953.978	(    6600,    9900 ]     4950   0.011%  99.964% 
1794851953.978	(    9900,   14000 ]     3053   0.007%  99.971% 
1794851953.978	(   14000,   22000 ]     2048   0.005%  99.975% 
1794851953.978	(   22000,   33000 ]      973   0.002%  99.977% 
1794851953.978	(   33000,   50000 ]      684   0.002%  99.979% 
1794851953.978	(   50000,   75000 ]      738   0.002%  99.981% 
1794851953.978	(   75000,  110000 ]     4901   0.011%  99.991% 
1794851953.978	(  110000,  170000 ]     1956   0.004%  99.996% 
1794851953.978	(  170000,  250000 ]     1754   0.004% 100.000% 
1794851953.978	(  250000,  380000 ]     1577   0.003% 100.003% 
1794851953.978	(  380000,  570000 ]      668   0.001% 100.005% 
1794851953.978	(  570000,  860000 ]      232   0.001% 100.005% 
1794851953.978	(  860000, 1200000 ]       61   0.000% 100.005% 
1794851953.978	( 1200000, 1900000 ]       30   0.000% 100.005% 
1794851953.978	( 1900000, 2900000 ]        2   0.000% 100.005% 
1794851953.978	( 2900000, 4300000 ]        1   0.000% 100.005% 
1794851953.978	
1794851953.978	** Level 3 read latency histogram (micros):
1794851953.978	Count: 58179474 Average: 165.1727  StdDev: 32.84
1794851953.978	Min: 9  Median: 65.4983  Max: 7849562
1794851953.978	Percentiles: P50: 65.50 P75: 96.46 P99: 460.12 P99.9: 3963.26 P99.99: 147005.26
1794851953.978	------------------------------------------------------
1794851953.978	(       6,      10 ]      302   0.001%   0.001% 
1794851953.978	(      10,      15 ]     1302   0.002%   0.003% 
1794851953.978	(      15,      22 ]      218   0.000%   0.003% 
1794851953.978	(      22,      34 ]      127   0.000%   0.003% 
1794851953.978	(      34,      51 ] 17461895  30.014%  30.017% ######
1794851953.978	(      51,      76 ] 20046960  34.457%  64.474% #######
1794851953.978	(      76,     110 ] 10176822  17.492%  81.966% ###
1794851953.978	(     110,     170 ]  6024061  10.354%  92.321% ##
1794851953.978	(     170,     250 ]  2623493   4.509%  96.830% #
1794851953.978	(     250,     380 ]  1116412   1.919%  98.749% 
1794851953.978	(     380,     580 ]   364669   0.627%  99.376% 
1794851953.978	(     580,     870 ]   174371   0.300%  99.675% 
1794851953.978	(     870,    1300 ]    71116   0.122%  99.798% 
1794851953.978	(    1300,    1900 ]    27410   0.047%  99.845% 
1794851953.978	(    1900,    2900 ]    20345   0.035%  99.880% 
1794851953.978	(    2900,    4400 ]    16635   0.029%  99.908% 
1794851953.978	(    4400,    6600 ]    12498   0.021%  99.930% 
1794851953.978	(    6600,    9900 ]    10658   0.018%  99.948% 
1794851953.978	(    9900,   14000 ]     6495   0.011%  99.959% 
1794851953.978	(   14000,   22000 ]     4525   0.008%  99.967% 
1794851953.978	(   22000,   33000 ]     2177   0.004%  99.971% 
1794851953.978	(   33000,   50000 ]     1469   0.003%  99.973% 
1794851953.978	(   50000,   75000 ]     1255   0.002%  99.975% 
1794851953.978	(   75000,  110000 ]     6547   0.011%  99.987% 
1794851953.978	(  110000,  170000 ]     3071   0.005%  99.992% 
1794851953.978	(  170000,  250000 ]     2937   0.005%  99.997% 
1794851953.978	(  250000,  380000 ]     2641   0.005% 100.002% 
1794851953.978	(  380000,  570000 ]     1194   0.002% 100.004% 
1794851953.978	(  570000,  860000 ]      606   0.001% 100.005% 
1794851953.978	(  860000, 1200000 ]      199   0.000% 100.005% 
1794851953.978	( 1200000, 1900000 ]      136   0.000% 100.005% 
1794851953.978	( 1900000, 2900000 ]       17   0.000% 100.005% 
1794851953.978	( 2900000, 4300000 ]        1   0.000% 100.005% 
1794851953.978	( 6500000, 9800000 ]        1   0.000% 100.005% 
1794851953.978	
1794851953.978	** Level 4 read latency histogram (micros):
1794851953.978	Count: 57667549 Average: 426.8452  StdDev: 12.97
1794851953.978	Min: 9  Median: 70.0872  Max: 7849546
1794851953.978	Percentiles: P50: 70.09 P75: 107.09 P99: 1290.49 P99.9: 53957.13 P99.99: 374025.39
1794851953.978	------------------------------------------------------
1794851953.978	(       6,      10 ]      418   0.001%   0.001% 
1794851953.978	(      10,      15 ]     1760   0.003%   0.004% 
1794851953.978	(      15,      22 ]      264   0.000%   0.004% 
1794851953.978	(      22,      34 ]      268   0.000%   0.005% 
1794851953.978	(      34,      51 ] 10073486  17.468%  17.473% ###
1794851953.978	(      51,      76 ] 24568267  42.603%  60.076% #########
1794851953.978	(      76,     110 ]  9412888  16.323%  76.399% ###
1794851953.978	(     110,     170 ]  7088715  12.292%  88.691% ##
1794851953.978	(     170,     250 ]  3036317   5.265%  93.956% #
1794851953.978	(     250,     380 ]  1434355   2.487%  96.444% 
1794851953.978	(     380,     580 ]   742769   1.288%  97.732% 
1794851953.978	(     580,     870 ]   512875   0.889%  98.621% 
1794851953.978	(     870,    1300 ]   223432   0.387%  99.009% 
1794851953.978	(    1300,    1900 ]    94807   0.164%  99.173% 
1794851953.978	(    1900,    2900 ]    87667   0.152%  99.325% 
1794851953.978	(    2900,    4400 ]    88523   0.154%  99.478% 
1794851953.978	(    4400,    6600 ]    83275   0.144%  99.623% 
1794851953.978	(    6600,    9900 ]    72208   0.125%  99.748% 
1794851953.978	(    9900,   14000 ]    40986   0.071%  99.819% 
1794851953.978	(   14000,   22000 ]    26342   0.046%  99.865% 
1794851953.978	(   22000,   33000 ]    11315   0.020%  99.884% 
1794851953.978	(   33000,   50000 ]     7801   0.014%  99.898% 
1794851953.978	(   50000,   75000 ]     7224   0.013%  99.911% 
1794851953.978	(   75000,  110000 ]    13744   0.024%  99.934% 
1794851953.978	(  110000,  170000 ]    12112   0.021%  99.955% 
1794851953.978	(  170000,  250000 ]    10275   0.018%  99.973% 
1794851953.978	(  250000,  380000 ]    10156   0.018%  99.991% 
1794851953.978	(  380000,  570000 ]     4197   0.007%  99.998% 
1794851953.978	(  570000,  860000 ]     2837   0.005% 100.003% 
1794851953.978	(  860000, 1200000 ]     1452   0.003% 100.006% 
1794851953.978	( 1200000, 1900000 ]      929   0.002% 100.007% 
1794851953.978	( 1900000, 2900000 ]      133   0.000% 100.007% 
1794851953.978	( 2900000, 4300000 ]        4   0.000% 100.007% 
1794851953.978	( 6500000, 9800000 ]        1   0.000% 100.007% 
1794851953.978	
1794851953.978	** Level 5 read latency histogram (micros):
1794851953.978	Count: 30995811 Average: 429.1279  StdDev: 126.11
1794851953.978	Min: 9  Median: 69.4019  Max: 10004089
1794851953.978	Percentiles: P50: 69.40 P75: 104.26 P99: 1486.29 P99.9: 63129.24 P99.99: 376627.45
1794851953.978	------------------------------------------------------
1794851953.978	(       6,      10 ]      400   0.001%   0.001% 
1794851953.978	(      10,      15 ]     2187   0.007%   0.008% 
1794851953.978	(      15,      22 ]      405   0.001%   0.010% 
1794851953.978	(      22,      34 ]      323   0.001%   0.011% 
1794851953.978	(      34,      51 ]  4903801  15.821%  15.832% ###
1794851953.978	(      51,      76 ] 14388193  46.420%  62.251% #########
1794851953.978	(      76,     110 ]  4753891  15.337%  77.589% ###
1794851953.978	(     110,     170 ]  3399621  10.968%  88.557% ##
1794851953.978	(     170,     250 ]  1501640   4.845%  93.401% #
1794851953.978	(     250,     380 ]   743418   2.398%  95.800% 
1794851953.978	(     380,     580 ]   448932   1.448%  97.248% 
1794851953.978	(     580,     870 ]   355405   1.147%  98.395% 
1794851953.978	(     870,    1300 ]   167646   0.541%  98.936% 
1794851953.978	(    1300,    1900 ]    64387   0.208%  99.143% 
1794851953.978	(    1900,    2900 ]    49724   0.160%  99.304% 
1794851953.978	(    2900,    4400 ]    47326   0.153%  99.456% 
1794851953.978	(    4400,    6600 ]    45164   0.146%  99.602% 
1794851953.978	(    6600,    9900 ]    40520   0.131%  99.733% 
1794851953.978	(    9900,   14000 ]    23606   0.076%  99.809% 
1794851953.978	(   14000,   22000 ]    15383   0.050%  99.859% 
1794851953.978	(   22000,   33000 ]     6355   0.021%  99.879% 
1794851953.978	(   33000,   50000 ]     4356   0.014%  99.893% 
1794851953.978	(   50000,   75000 ]     4060   0.013%  99.906% 
1794851953.978	(   75000,  110000 ]     7645   0.025%  99.931% 
1794851953.978	(  110000,  170000 ]     6994   0.023%  99.953% 
1794851953.978	(  170000,  250000 ]     5976   0.019%  99.973% 
1794851953.978	(  250000,  380000 ]     5496   0.018%  99.990% 
1794851953.978	(  380000,  570000 ]     2235   0.007%  99.998% 
1794851953.978	(  570000,  860000 ]     1364   0.004% 100.002% 
1794851953.978	(  860000, 1200000 ]      670   0.002% 100.004% 
1794851953.978	( 1200000, 1900000 ]      485   0.002% 100.006% 
1794851953.978	( 1900000, 2900000 ]       57   0.000% 100.006% 
1794851953.978	( 9800000, 14000000 ]        1   0.000% 100.006% 
1794851953.978	
1794851953.978	
1794851953.978	** DB Stats **
1794851953.978	Uptime(secs): 70609.1 total, 6.1 interval
1794851953.978	Cumulative writes: 34M writes, 34M keys, 22M commit groups, 1.5 writes per commit group, ingest: 33.68 GB, 0.49 MB/s
1794851953.978	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.68 GB, 0.49 MB/s
1794851953.978	Cumulative stall: 18:13:7.216 H:M:S, 92.9 percent
1794851953.978	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1794851953.979	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1794851953.979	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1794851953.979	
1794851953.979	STATISTICS:
1794851953.979	rocksdb.block.cache.miss COUNT : 208477349
1794851953.979	rocksdb.block.cache.hit COUNT : 0
1794851953.979	rocksdb.block.cache.add COUNT : 0
1794851953.979	rocksdb.block.cache.add.failures COUNT : 0
1794851953.979	rocksdb.block.cache.index.miss COUNT : 0
1794851953.979	rocksdb.block.cache.index.hit COUNT : 0
1794851953.979	rocksdb.block.cache.index.add COUNT : 0
1794851953.979	rocksdb.block.cache.index.bytes.insert COUNT : 0
1794851953.979	rocksdb.block.cache.index.bytes.evict COUNT : 0
1794851953.979	rocksdb.block.cache.filter.miss COUNT : 0
1794851953.979	rocksdb.block.cache.filter.hit COUNT : 0
1794851953.979	rocksdb.block.cache.filter.add COUNT : 0
1794851953.979	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1794851953.979	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1794851953.979	rocksdb.block.cache.data.miss COUNT : 208477349
1794851953.979	rocksdb.block.cache.data.hit COUNT : 0
1794851953.979	rocksdb.block.cache.data.add COUNT : 0
1794851953.979	rocksdb.block.cache.data.bytes.insert COUNT : 0
1794851953.979	rocksdb.block.cache.bytes.read COUNT : 0
1794851953.979	rocksdb.block.cache.bytes.write COUNT : 0
1794851953.979	rocksdb.bloom.filter.useful COUNT : 0
1794851953.979	rocksdb.bloom.filter.full.positive COUNT : 0
1794851953.979	rocksdb.bloom.filter.full.true.positive COUNT : 0
1794851953.979	rocksdb.bloom.filter.micros COUNT : 0
1794851953.979	rocksdb.persistent.cache.hit COUNT : 0
1794851953.979	rocksdb.persistent.cache.miss COUNT : 0
1794851953.979	rocksdb.sim.block.cache.hit COUNT : 0
1794851953.979	rocksdb.sim.block.cache.miss COUNT : 0
1794851953.979	rocksdb.memtable.hit COUNT : 0
1794851953.979	rocksdb.memtable.miss COUNT : 0
1794851953.979	rocksdb.l0.hit COUNT : 0
1794851953.979	rocksdb.l1.hit COUNT : 0
1794851953.979	rocksdb.l2andup.hit COUNT : 0
1794851953.979	rocksdb.compaction.key.drop.new COUNT : 31623765
1794851953.979	rocksdb.compaction.key.drop.obsolete COUNT : 0
1794851953.979	rocksdb.compaction.key.drop.range_del COUNT : 0
1794851953.979	rocksdb.compaction.key.drop.user COUNT : 0
1794851953.979	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1794851953.979	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1794851953.979	rocksdb.compaction.cancelled COUNT : 0
1794851953.979	rocksdb.number.keys.written COUNT : 34383360
1794851953.979	rocksdb.number.keys.read COUNT : 0
1794851953.979	rocksdb.number.keys.updated COUNT : 0
1794851953.979	rocksdb.bytes.written COUNT : 36167681556
1794851953.979	rocksdb.bytes.read COUNT : 0
1794851953.979	rocksdb.number.db.seek COUNT : 0
1794851953.979	rocksdb.number.db.next COUNT : 0
1794851953.979	rocksdb.number.db.prev COUNT : 0
1794851953.979	rocksdb.number.db.seek.found COUNT : 0
1794851953.979	rocksdb.number.db.next.found COUNT : 0
1794851953.979	rocksdb.number.db.prev.found COUNT : 0
1794851953.979	rocksdb.db.iter.bytes.read COUNT : 0
1794851953.979	rocksdb.no.file.closes COUNT : 0
1794851953.979	rocksdb.no.file.opens COUNT : 1925709
1794851953.979	rocksdb.no.file.errors COUNT : 0
1794851953.979	rocksdb.l0.slowdown.micros COUNT : 0
1794851953.979	rocksdb.memtable.compaction.micros COUNT : 0
1794851953.979	rocksdb.l0.num.files.stall.micros COUNT : 0
1794851953.979	rocksdb.stall.micros COUNT : 65587216404
1794851953.979	rocksdb.db.mutex.wait.micros COUNT : 0
1794851953.979	rocksdb.rate.limit.delay.millis COUNT : 0
1794851953.979	rocksdb.num.iterators COUNT : 0
1794851953.979	rocksdb.number.multiget.get COUNT : 0
1794851953.979	rocksdb.number.multiget.keys.read COUNT : 0
1794851953.979	rocksdb.number.multiget.bytes.read COUNT : 0
1794851953.979	rocksdb.number.deletes.filtered COUNT : 0
1794851953.979	rocksdb.number.merge.failures COUNT : 0
1794851953.979	rocksdb.bloom.filter.prefix.checked COUNT : 0
1794851953.979	rocksdb.bloom.filter.prefix.useful COUNT : 0
1794851953.979	rocksdb.number.reseeks.iteration COUNT : 0
1794851953.979	rocksdb.getupdatessince.calls COUNT : 0
1794851953.979	rocksdb.block.cachecompressed.miss COUNT : 0
1794851953.979	rocksdb.block.cachecompressed.hit COUNT : 0
1794851953.979	rocksdb.block.cachecompressed.add COUNT : 0
1794851953.979	rocksdb.block.cachecompressed.add.failures COUNT : 0
1794851953.979	rocksdb.wal.synced COUNT : 0
1794851953.979	rocksdb.wal.bytes COUNT : 36167681556
1794851953.979	rocksdb.write.self COUNT : 22621143
1794851953.979	rocksdb.write.other COUNT : 11762217
1794851953.979	rocksdb.write.timeout COUNT : 0
1794851953.979	rocksdb.write.wal COUNT : 34383360
1794851953.979	rocksdb.compact.read.bytes COUNT : 876335068764
1794851953.979	rocksdb.compact.write.bytes COUNT : 843102666971
1794851953.979	rocksdb.flush.write.bytes COUNT : 36310522827
1794851953.979	rocksdb.compact.read.marked.bytes COUNT : 0
1794851953.979	rocksdb.compact.read.periodic.bytes COUNT : 0
1794851953.979	rocksdb.compact.read.ttl.bytes COUNT : 0
1794851953.979	rocksdb.compact.write.marked.bytes COUNT : 0
1794851953.979	rocksdb.compact.write.periodic.bytes COUNT : 0
1794851953.979	rocksdb.compact.write.ttl.bytes COUNT : 0
1794851953.979	rocksdb.number.direct.load.table.properties COUNT : 0
1794851953.979	rocksdb.number.superversion_acquires COUNT : 0
1794851953.979	rocksdb.number.superversion_releases COUNT : 0
1794851953.979	rocksdb.number.superversion_cleanups COUNT : 0
1794851953.979	rocksdb.number.block.compressed COUNT : 0
1794851953.979	rocksdb.number.block.decompressed COUNT : 0
1794851953.979	rocksdb.number.block.not_compressed COUNT : 0
1794851953.979	rocksdb.merge.operation.time.nanos COUNT : 0
1794851953.979	rocksdb.filter.operation.time.nanos COUNT : 0
1794851953.979	rocksdb.row.cache.hit COUNT : 0
1794851953.979	rocksdb.row.cache.miss COUNT : 0
1794851953.979	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1794851953.979	rocksdb.read.amp.total.read.bytes COUNT : 0
1794851953.979	rocksdb.number.rate_limiter.drains COUNT : 0
1794851953.979	rocksdb.number.iter.skip COUNT : 0
1794851953.979	rocksdb.blobdb.num.put COUNT : 0
1794851953.979	rocksdb.blobdb.num.write COUNT : 0
1794851953.979	rocksdb.blobdb.num.get COUNT : 0
1794851953.979	rocksdb.blobdb.num.multiget COUNT : 0
1794851953.979	rocksdb.blobdb.num.seek COUNT : 0
1794851953.979	rocksdb.blobdb.num.next COUNT : 0
1794851953.979	rocksdb.blobdb.num.prev COUNT : 0
1794851953.979	rocksdb.blobdb.num.keys.written COUNT : 0
1794851953.979	rocksdb.blobdb.num.keys.read COUNT : 0
1794851953.979	rocksdb.blobdb.bytes.written COUNT : 0
1794851953.979	rocksdb.blobdb.bytes.read COUNT : 0
1794851953.979	rocksdb.blobdb.write.inlined COUNT : 0
1794851953.979	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1794851953.979	rocksdb.blobdb.write.blob COUNT : 0
1794851953.979	rocksdb.blobdb.write.blob.ttl COUNT : 0
1794851953.979	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1794851953.979	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1794851953.979	rocksdb.blobdb.blob.file.synced COUNT : 0
1794851953.979	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1794851953.979	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1794851953.979	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1794851953.979	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1794851953.979	rocksdb.blobdb.gc.num.files COUNT : 0
1794851953.979	rocksdb.blobdb.gc.num.new.files COUNT : 0
1794851953.979	rocksdb.blobdb.gc.failures COUNT : 0
1794851953.979	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1794851953.979	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1794851953.979	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1794851953.979	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1794851953.979	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1794851953.979	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1794851953.979	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1794851953.979	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1794851953.979	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1794851953.979	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1794851953.979	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1794851953.979	rocksdb.txn.overhead.duplicate.key COUNT : 0
1794851953.979	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1794851953.979	rocksdb.txn.get.tryagain COUNT : 0
1794851953.979	rocksdb.number.multiget.keys.found COUNT : 0
1794851953.979	rocksdb.num.iterator.created COUNT : 0
1794851953.979	rocksdb.num.iterator.deleted COUNT : 0
1794851953.979	rocksdb.block.cache.compression.dict.miss COUNT : 0
1794851953.979	rocksdb.block.cache.compression.dict.hit COUNT : 0
1794851953.979	rocksdb.block.cache.compression.dict.add COUNT : 0
1794851953.979	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1794851953.979	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1794851953.979	rocksdb.block.cache.add.redundant COUNT : 0
1794851953.979	rocksdb.block.cache.index.add.redundant COUNT : 0
1794851953.979	rocksdb.block.cache.filter.add.redundant COUNT : 0
1794851953.979	rocksdb.block.cache.data.add.redundant COUNT : 0
1794851953.979	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1794851953.979	rocksdb.files.marked.trash COUNT : 0
1794851953.979	rocksdb.files.deleted.immediately COUNT : 1923458
1794851953.979	rocksdb.error.handler.bg.errro.count COUNT : 0
1794851953.979	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1794851953.979	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1794851953.979	rocksdb.error.handler.autoresume.count COUNT : 0
1794851953.979	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1794851953.979	rocksdb.error.handler.autoresume.success.count COUNT : 0
1794851953.979	rocksdb.memtable.payload.bytes.at.flush COUNT : 36031969200
1794851953.979	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1813040
1794851953.979	rocksdb.secondary.cache.hits COUNT : 0
1794851953.979	rocksdb.verify_checksum.read.bytes COUNT : 0
1794851953.979	rocksdb.backup.read.bytes COUNT : 0
1794851953.979	rocksdb.backup.write.bytes COUNT : 0
1794851953.979	rocksdb.remote.compact.read.bytes COUNT : 0
1794851953.979	rocksdb.remote.compact.write.bytes COUNT : 0
1794851953.979	rocksdb.hot.file.read.bytes COUNT : 0
1794851953.979	rocksdb.warm.file.read.bytes COUNT : 0
1794851953.979	rocksdb.cold.file.read.bytes COUNT : 0
1794851953.979	rocksdb.hot.file.read.count COUNT : 0
1794851953.979	rocksdb.warm.file.read.count COUNT : 0
1794851953.979	rocksdb.cold.file.read.count COUNT : 0
1794851953.979	rocksdb.last.level.read.bytes COUNT : 0
1794851953.979	rocksdb.last.level.read.count COUNT : 0
1794851953.979	rocksdb.non.last.level.read.bytes COUNT : 876624032730
1794851953.979	rocksdb.non.last.level.read.count COUNT : 216180185
1794851953.979	rocksdb.block.checksum.compute.count COUNT : 212328767
1794851953.979	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.db.write.micros P50 : 2899.362278 P95 : 27338.654206 P99 : 104652.108024 P100 : 12462258.000000 COUNT : 34383360 SUM : 280870568241
1794851953.979	rocksdb.compaction.times.micros P50 : 301364.164219 P95 : 1159441.759223 P99 : 2544055.133839 P100 : 18273974.000000 COUNT : 299386 SUM : 124697537009
1794851953.979	rocksdb.compaction.times.cpu_micros P50 : 159808.240477 P95 : 1023031.659927 P99 : 2356239.822354 P100 : 15029294.000000 COUNT : 299386 SUM : 91801138117
1794851953.979	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.table.sync.micros P50 : 42502.262982 P95 : 740306.170886 P99 : 1768906.976744 P100 : 3958473.000000 COUNT : 19937 SUM : 3110670490
1794851953.979	rocksdb.compaction.outfile.sync.micros P50 : 8486.863781 P95 : 28686.755057 P99 : 293721.429531 P100 : 13849897.000000 COUNT : 1869478 SUM : 32208680638
1794851953.979	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.manifest.file.sync.micros P50 : 510.796417 P95 : 70592.213115 P99 : 353542.513661 P100 : 12470812.000000 COUNT : 243144 SUM : 3284686548
1794851953.979	rocksdb.table.open.io.micros P50 : 274.858771 P95 : 622.273483 P99 : 5803.325055 P100 : 2375988.000000 COUNT : 1925709 SUM : 2037825450
1794851953.979	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.read.block.compaction.micros P50 : 68.904453 P95 : 244.667120 P99 : 794.207785 P100 : 10004202.000000 COUNT : 208477323 SUM : 56882600475
1794851953.979	rocksdb.read.block.get.micros P50 : 66.765206 P95 : 165.227620 P99 : 594.837663 P100 : 1453767.000000 COUNT : 1925709 SUM : 280780362
1794851953.979	rocksdb.write.raw.block.micros P50 : 0.526346 P95 : 1.003647 P99 : 13.156414 P100 : 8207131.000000 COUNT : 214839397 SUM : 286823583
1794851953.979	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.numfiles.in.singlecompaction P50 : 5.828726 P95 : 9.583127 P99 : 9.926696 P100 : 49.000000 COUNT : 300209 SUM : 1884136
1794851953.979	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.db.write.stall P50 : 0.990489 P95 : 9817.562880 P99 : 36640.397147 P100 : 12461135.000000 COUNT : 22598784 SUM : 65593198025
1794851953.979	rocksdb.sst.read.micros P50 : 67.285232 P95 : 241.152439 P99 : 781.150444 P100 : 10004089.000000 COUNT : 216180185 SUM : 58352771863
1794851953.979	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.bytes.per.write P50 : 1161.760205 P95 : 3901.338888 P99 : 4188.000000 P100 : 4188.000000 COUNT : 22621143 SUM : 36167681556
1794851953.979	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.db.flush.micros P50 : 173433.179724 P95 : 1254291.338583 P99 : 2452610.966057 P100 : 11489354.000000 COUNT : 19935 SUM : 6778353927
1794851953.979	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.979	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.980	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.980	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.980	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.980	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1794851953.980	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1883313 SUM : 0
1794851953.980	
