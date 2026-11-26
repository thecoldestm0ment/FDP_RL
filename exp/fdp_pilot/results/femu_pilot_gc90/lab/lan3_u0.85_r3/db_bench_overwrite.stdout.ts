1795614157.514	Initializing RocksDB Options from the specified file
1795614157.515	Initializing RocksDB Options from command-line flags
1795614168.389	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795614168.389	Values:     1024 bytes each (512 bytes after compression)
1795614168.389	Entries:    15273953
1795614168.389	Prefix:    0 bytes
1795614168.389	Keys per prefix:    0
1795614168.389	RawSize:    15149.0 MB (estimated)
1795614168.389	FileSize:   7691.0 MB (estimated)
1795614168.390	Write rate: 0 bytes/second
1795614168.390	Read rate: 0 ops/second
1795614168.390	Compression: NoCompression
1795614168.390	Compression sampling rate: 0
1795614168.390	Memtablerep: SkipListFactory
1795614168.390	Perf Level: 1
1795614168.390	------------------------------------------------
1795614168.390	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795647792.638	overwrite    :    4399.187 micros/op 908 ops/sec;    0.9 MB/s
1795647797.635	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795647797.635	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795647807.638	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795647817.652	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795647827.652	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795647837.652	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795647847.660	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795647857.660	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795647857.660	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795647857.660	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795647857.662	
1795647857.662	Level Files Size(MB)
1795647857.662	--------------------
1795647857.662	  0        0        0
1795647857.662	  1        6        2
1795647857.662	  2       61       25
1795647857.662	  3      610      250
1795647857.662	  4     5695     2500
1795647857.662	  5    32700    15394
1795647857.662	  6        0        0
1795647857.662	
1795647857.667	
1795647857.667	
1795647857.667	** Compaction Stats [default] **
1795647857.667	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795647857.667	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795647857.667	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.1     30.0       0.0   1.0      0.0     28.0   1097.57            710.61     17695    0.062     25K      5       0.0       0.0
1795647857.667	  L1      6/0    2.27 MB   0.9     51.3    30.0     21.3      51.4     30.1       0.0   1.7     26.2     26.2   2010.09           1969.41      8830    0.228     52M   6646       0.0       0.0
1795647857.667	  L2     61/0   24.53 MB   1.0    153.3    30.1    123.2     153.2     30.0       0.0   5.1     25.7     25.7   6115.70           5989.55     64576    0.095    155M    51K       0.0       0.0
1795647857.667	  L3    610/0   249.97 MB   1.0    195.7    30.0    165.7     195.1     29.5       0.0   6.5     25.9     25.8   7741.91           7588.93     68381    0.113    198M   518K       0.0       0.0
1795647857.667	  L4   5695/0    2.44 GB   1.0    197.4    29.5    167.9     192.4     24.5       0.0   6.5     26.0     25.4   7763.57           7620.34     68454    0.113    200M  5067K       0.0       0.0
1795647857.667	  L5  32700/0   15.03 GB   0.6    115.5    24.5     91.0      93.7      2.7       0.0   3.8     29.1     23.6   4059.44           3985.74     53176    0.076    117M    22M       0.0       0.0
1795647857.667	 Sum  39072/0   17.75 GB   0.0    713.2   144.1    569.1     715.9    146.8       0.0  23.8     25.4     25.5  28788.29          27864.59    281112    0.102    724M    27M       0.0       0.0
1795647857.667	 Int      0/0    0.00 KB   0.0      0.3     0.0      0.2       0.2      0.0       0.0 239639126.0     26.6     22.2     10.30             10.26       104    0.099    272K    45K       0.0       0.0
1795647857.667	
1795647857.667	** Compaction Stats [default] **
1795647857.667	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795647857.667	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795647857.667	 Low      0/0    0.00 KB   0.0    713.2   144.1    569.1     685.9    116.8       0.0   0.0     26.4     25.4  27692.83          27156.07    263420    0.105    724M    27M       0.0       0.0
1795647857.667	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      30.0     30.0       0.0   0.0      0.0     28.1   1095.45            708.52     17691    0.062       0      0       0.0       0.0
1795647857.667	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    178.6      0.00              0.00         1    0.005       0      0       0.0       0.0
1795647857.667	
1795647857.667	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795647857.667	
1795647857.667	Uptime(secs): 33700.1 total, 22.8 interval
1795647857.667	Flush(GB): cumulative 30.038, interval 0.000
1795647857.667	AddFile(GB): cumulative 0.000, interval 0.000
1795647857.667	AddFile(Total Files): cumulative 0, interval 0
1795647857.667	AddFile(L0 Files): cumulative 0, interval 0
1795647857.667	AddFile(Keys): cumulative 0, interval 0
1795647857.667	Cumulative compaction: 715.90 GB write, 21.75 MB/s write, 713.19 GB read, 21.67 MB/s read, 28788.3 seconds
1795647857.667	Interval compaction: 0.22 GB write, 10.04 MB/s write, 0.27 GB read, 12.05 MB/s read, 10.3 seconds
1795647857.667	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 317050 slowdown for pending_compaction_bytes, 31 memtable_compaction, 3 memtable_slowdown, interval 0 total count
1795647857.667	Block cache LRUCache@0x58d3f9ee1a70#57995 capacity: 8.00 MB collections: 188 last_copies: 0 last_secs: 0.000125 secs_since: 22
1795647857.667	Block cache entry stats(count,size,portion): Misc(3,8.34 KB,0.101852%)
1795647857.667	
1795647857.667	** File Read Latency Histogram By Level [default] **
1795647857.667	** Level 0 read latency histogram (micros):
1795647857.667	Count: 7720543 Average: 68.5645  StdDev: 316.36
1795647857.667	Min: 13  Median: 46.2360  Max: 375859
1795647857.667	Percentiles: P50: 46.24 P75: 69.89 P99: 227.55 P99.9: 414.87 P99.99: 1147.99
1795647857.667	------------------------------------------------------
1795647857.667	(      10,      15 ]        6   0.000%   0.000% 
1795647857.667	(      15,      22 ]        5   0.000%   0.000% 
1795647857.667	(      22,      34 ]        3   0.000%   0.000% 
1795647857.667	(      34,      51 ]  5363217  69.467%  69.467% ##############
1795647857.667	(      51,      76 ]   565453   7.324%  76.791% #
1795647857.667	(      76,     110 ]  1338081  17.331%  94.122% ###
1795647857.667	(     110,     170 ]   296230   3.837%  97.959% #
1795647857.667	(     170,     250 ]   111679   1.447%  99.406% 
1795647857.667	(     250,     380 ]    37002   0.479%  99.885% 
1795647857.667	(     380,     580 ]     6576   0.085%  99.970% 
1795647857.667	(     580,     870 ]     1197   0.016%  99.986% 
1795647857.667	(     870,    1300 ]      498   0.006%  99.992% 
1795647857.667	(    1300,    1900 ]      182   0.002%  99.995% 
1795647857.667	(    1900,    2900 ]      112   0.001%  99.996% 
1795647857.667	(    2900,    4400 ]       55   0.001%  99.997% 
1795647857.667	(    4400,    6600 ]       13   0.000%  99.997% 
1795647857.667	(    6600,    9900 ]        5   0.000%  99.997% 
1795647857.667	(    9900,   14000 ]        5   0.000%  99.997% 
1795647857.667	(   14000,   22000 ]        3   0.000%  99.997% 
1795647857.667	(   33000,   50000 ]        5   0.000%  99.997% 
1795647857.667	(   50000,   75000 ]       18   0.000%  99.997% 
1795647857.667	(   75000,  110000 ]       76   0.001%  99.998% 
1795647857.667	(  110000,  170000 ]       20   0.000%  99.999% 
1795647857.667	(  170000,  250000 ]       42   0.001%  99.999% 
1795647857.667	(  250000,  380000 ]       60   0.001% 100.000% 
1795647857.667	
1795647857.667	** Level 1 read latency histogram (micros):
1795647857.667	Count: 13581566 Average: 68.5680  StdDev: 300.76
1795647857.667	Min: 6  Median: 46.0923  Max: 384833
1795647857.667	Percentiles: P50: 46.09 P75: 67.32 P99: 223.63 P99.9: 391.24 P99.99: 1144.39
1795647857.667	------------------------------------------------------
1795647857.667	(       4,       6 ]        4   0.000%   0.000% 
1795647857.667	(       6,      10 ]       53   0.000%   0.000% 
1795647857.667	(      10,      15 ]       34   0.000%   0.001% 
1795647857.667	(      15,      22 ]       18   0.000%   0.001% 
1795647857.667	(      22,      34 ]       11   0.000%   0.001% 
1795647857.667	(      34,      51 ]  9546694  70.292%  70.292% ##############
1795647857.667	(      51,      76 ]   979433   7.211%  77.504% #
1795647857.667	(      76,     110 ]  2291538  16.872%  94.376% ###
1795647857.667	(     110,     170 ]   499524   3.678%  98.054% #
1795647857.667	(     170,     250 ]   191609   1.411%  99.465% 
1795647857.667	(     250,     380 ]    58488   0.431%  99.896% 
1795647857.667	(     380,     580 ]    10289   0.076%  99.971% 
1795647857.667	(     580,     870 ]     2010   0.015%  99.986% 
1795647857.667	(     870,    1300 ]      788   0.006%  99.992% 
1795647857.667	(    1300,    1900 ]      375   0.003%  99.995% 
1795647857.667	(    1900,    2900 ]      155   0.001%  99.996% 
1795647857.667	(    2900,    4400 ]      114   0.001%  99.997% 
1795647857.668	(    4400,    6600 ]       20   0.000%  99.997% 
1795647857.668	(    6600,    9900 ]       21   0.000%  99.997% 
1795647857.668	(    9900,   14000 ]        6   0.000%  99.997% 
1795647857.668	(   14000,   22000 ]        5   0.000%  99.997% 
1795647857.668	(   33000,   50000 ]       11   0.000%  99.997% 
1795647857.668	(   50000,   75000 ]       16   0.000%  99.997% 
1795647857.668	(   75000,  110000 ]      115   0.001%  99.998% 
1795647857.668	(  110000,  170000 ]       60   0.000%  99.999% 
1795647857.668	(  170000,  250000 ]       98   0.001%  99.999% 
1795647857.668	(  250000,  380000 ]      107   0.001% 100.000% 
1795647857.668	(  380000,  570000 ]        2   0.000% 100.000% 
1795647857.668	
1795647857.668	** Level 2 read latency histogram (micros):
1795647857.668	Count: 40629000 Average: 68.4064  StdDev: 82.87
1795647857.668	Min: 5  Median: 46.2925  Max: 388752
1795647857.668	Percentiles: P50: 46.29 P75: 70.92 P99: 229.58 P99.9: 376.54 P99.99: 905.75
1795647857.668	------------------------------------------------------
1795647857.668	(       4,       6 ]      296   0.001%   0.001% 
1795647857.668	(       6,      10 ]     2183   0.005%   0.006% 
1795647857.668	(      10,      15 ]     1456   0.004%   0.010% 
1795647857.668	(      15,      22 ]      352   0.001%   0.011% 
1795647857.668	(      22,      34 ]       97   0.000%   0.011% 
1795647857.668	(      34,      51 ] 28087978  69.133%  69.144% ##############
1795647857.668	(      51,      76 ]  2986638   7.351%  76.495% #
1795647857.668	(      76,     110 ]  7121711  17.529%  94.023% ####
1795647857.668	(     110,     170 ]  1546309   3.806%  97.829% #
1795647857.668	(     170,     250 ]   638729   1.572%  99.401% 
1795647857.668	(     250,     380 ]   208158   0.512%  99.914% 
1795647857.668	(     380,     580 ]    26503   0.065%  99.979% 
1795647857.668	(     580,     870 ]     4384   0.011%  99.990% 
1795647857.668	(     870,    1300 ]     1721   0.004%  99.994% 
1795647857.668	(    1300,    1900 ]      767   0.002%  99.996% 
1795647857.668	(    1900,    2900 ]      445   0.001%  99.997% 
1795647857.668	(    2900,    4400 ]      450   0.001%  99.998% 
1795647857.668	(    4400,    6600 ]      118   0.000%  99.998% 
1795647857.668	(    6600,    9900 ]       57   0.000%  99.998% 
1795647857.668	(    9900,   14000 ]       17   0.000%  99.998% 
1795647857.668	(   14000,   22000 ]        5   0.000%  99.998% 
1795647857.668	(   22000,   33000 ]        2   0.000%  99.998% 
1795647857.668	(   33000,   50000 ]       31   0.000%  99.999% 
1795647857.668	(   50000,   75000 ]       67   0.000%  99.999% 
1795647857.668	(   75000,  110000 ]      374   0.001% 100.000% 
1795647857.668	(  110000,  170000 ]      117   0.000% 100.000% 
1795647857.668	(  170000,  250000 ]      265   0.001% 100.001% 
1795647857.668	(  250000,  380000 ]      239   0.001% 100.001% 
1795647857.668	(  380000,  570000 ]        2   0.000% 100.001% 
1795647857.668	
1795647857.668	** Level 3 read latency histogram (micros):
1795647857.668	Count: 51779422 Average: 68.3718  StdDev: 72.96
1795647857.668	Min: 5  Median: 46.3508  Max: 803806
1795647857.668	Percentiles: P50: 46.35 P75: 72.42 P99: 227.13 P99.9: 372.25 P99.99: 816.67
1795647857.668	------------------------------------------------------
1795647857.668	(       4,       6 ]      408   0.001%   0.001% 
1795647857.668	(       6,      10 ]     2167   0.004%   0.005% 
1795647857.668	(      10,      15 ]     1325   0.003%   0.008% 
1795647857.668	(      15,      22 ]      363   0.001%   0.008% 
1795647857.668	(      22,      34 ]      112   0.000%   0.008% 
1795647857.668	(      34,      51 ] 35629421  68.810%  68.818% ##############
1795647857.668	(      51,      76 ]  3735203   7.214%  76.032% #
1795647857.668	(      76,     110 ]  9287361  17.936%  93.969% ####
1795647857.668	(     110,     170 ]  2021292   3.904%  97.872% #
1795647857.668	(     170,     250 ]   817771   1.579%  99.452% 
1795647857.668	(     250,     380 ]   246948   0.477%  99.928% 
1795647857.668	(     380,     580 ]    28301   0.055%  99.983% 
1795647857.668	(     580,     870 ]     4377   0.008%  99.992% 
1795647857.668	(     870,    1300 ]     1772   0.003%  99.995% 
1795647857.668	(    1300,    1900 ]      872   0.002%  99.997% 
1795647857.668	(    1900,    2900 ]      567   0.001%  99.998% 
1795647857.668	(    2900,    4400 ]      416   0.001%  99.999% 
1795647857.668	(    4400,    6600 ]      135   0.000%  99.999% 
1795647857.668	(    6600,    9900 ]       76   0.000%  99.999% 
1795647857.668	(    9900,   14000 ]       22   0.000%  99.999% 
1795647857.668	(   14000,   22000 ]       14   0.000%  99.999% 
1795647857.668	(   22000,   33000 ]       11   0.000%  99.999% 
1795647857.668	(   33000,   50000 ]       34   0.000%  99.999% 
1795647857.668	(   50000,   75000 ]       98   0.000%  99.999% 
1795647857.668	(   75000,  110000 ]      445   0.001% 100.000% 
1795647857.668	(  110000,  170000 ]      163   0.000% 100.000% 
1795647857.668	(  170000,  250000 ]      344   0.001% 100.001% 
1795647857.668	(  250000,  380000 ]      271   0.001% 100.002% 
1795647857.668	(  380000,  570000 ]        4   0.000% 100.002% 
1795647857.668	(  570000,  860000 ]        1   0.000% 100.002% 
1795647857.668	
1795647857.668	** Level 4 read latency histogram (micros):
1795647857.668	Count: 50980401 Average: 68.2005  StdDev: 78.35
1795647857.668	Min: 5  Median: 46.3351  Max: 473274
1795647857.668	Percentiles: P50: 46.34 P75: 71.67 P99: 224.23 P99.9: 372.18 P99.99: 893.23
1795647857.668	------------------------------------------------------
1795647857.668	(       4,       6 ]      236   0.000%   0.000% 
1795647857.668	(       6,      10 ]     1658   0.003%   0.004% 
1795647857.668	(      10,      15 ]      934   0.002%   0.006% 
1795647857.668	(      15,      22 ]      207   0.000%   0.006% 
1795647857.668	(      22,      34 ]       85   0.000%   0.006% 
1795647857.668	(      34,      51 ] 35125839  68.901%  68.907% ##############
1795647857.668	(      51,      76 ]  3757629   7.371%  76.278% #
1795647857.668	(      76,     110 ]  9089151  17.829%  94.106% ####
1795647857.668	(     110,     170 ]  1979783   3.883%  97.990% #
1795647857.668	(     170,     250 ]   759896   1.491%  99.480% 
1795647857.668	(     250,     380 ]   227694   0.447%  99.927% 
1795647857.668	(     380,     580 ]    27135   0.053%  99.980% 
1795647857.668	(     580,     870 ]     4919   0.010%  99.990% 
1795647857.668	(     870,    1300 ]     2535   0.005%  99.995% 
1795647857.668	(    1300,    1900 ]     1063   0.002%  99.997% 
1795647857.668	(    1900,    2900 ]      602   0.001%  99.998% 
1795647857.668	(    2900,    4400 ]      440   0.001%  99.999% 
1795647857.668	(    4400,    6600 ]      150   0.000%  99.999% 
1795647857.668	(    6600,    9900 ]       84   0.000%  99.999% 
1795647857.668	(    9900,   14000 ]       19   0.000%  99.999% 
1795647857.668	(   14000,   22000 ]       14   0.000%  99.999% 
1795647857.668	(   22000,   33000 ]        8   0.000%  99.999% 
1795647857.668	(   33000,   50000 ]       40   0.000%  99.999% 
1795647857.668	(   50000,   75000 ]      120   0.000% 100.000% 
1795647857.668	(   75000,  110000 ]      463   0.001% 100.001% 
1795647857.668	(  110000,  170000 ]      132   0.000% 100.001% 
1795647857.668	(  170000,  250000 ]      315   0.001% 100.001% 
1795647857.668	(  250000,  380000 ]      294   0.001% 100.002% 
1795647857.668	(  380000,  570000 ]        9   0.000% 100.002% 
1795647857.668	
1795647857.668	** Level 5 read latency histogram (micros):
1795647857.668	Count: 24190377 Average: 67.0980  StdDev: 90.88
1795647857.668	Min: 5  Median: 45.9812  Max: 382215
1795647857.668	Percentiles: P50: 45.98 P75: 63.58 P99: 225.15 P99.9: 377.65 P99.99: 1689.85
1795647857.668	------------------------------------------------------
1795647857.668	(       4,       6 ]      135   0.001%   0.001% 
1795647857.668	(       6,      10 ]     1094   0.005%   0.005% 
1795647857.668	(      10,      15 ]      623   0.003%   0.008% 
1795647857.668	(      15,      22 ]      155   0.001%   0.008% 
1795647857.668	(      22,      34 ]       39   0.000%   0.008% 
1795647857.669	(      34,      51 ] 17158839  70.932%  70.941% ##############
1795647857.669	(      51,      76 ]  1950672   8.064%  79.005% ##
1795647857.669	(      76,     110 ]  3801327  15.714%  94.719% ###
1795647857.669	(     110,     170 ]   788662   3.260%  97.979% #
1795647857.669	(     170,     250 ]   358168   1.481%  99.460% 
1795647857.669	(     250,     380 ]   108433   0.448%  99.908% 
1795647857.669	(     380,     580 ]    11828   0.049%  99.957% 
1795647857.669	(     580,     870 ]     4113   0.017%  99.974% 
1795647857.669	(     870,    1300 ]     3267   0.014%  99.988% 
1795647857.669	(    1300,    1900 ]      928   0.004%  99.991% 
1795647857.669	(    1900,    2900 ]      622   0.003%  99.994% 
1795647857.669	(    2900,    4400 ]      581   0.002%  99.996% 
1795647857.669	(    4400,    6600 ]      321   0.001%  99.998% 
1795647857.669	(    6600,    9900 ]      173   0.001%  99.998% 
1795647857.669	(    9900,   14000 ]       38   0.000%  99.999% 
1795647857.669	(   14000,   22000 ]       13   0.000%  99.999% 
1795647857.669	(   22000,   33000 ]        4   0.000%  99.999% 
1795647857.669	(   33000,   50000 ]        9   0.000%  99.999% 
1795647857.669	(   50000,   75000 ]       44   0.000%  99.999% 
1795647857.669	(   75000,  110000 ]      248   0.001% 100.000% 
1795647857.669	(  110000,  170000 ]       56   0.000% 100.000% 
1795647857.669	(  170000,  250000 ]      176   0.001% 100.001% 
1795647857.669	(  250000,  380000 ]      130   0.001% 100.001% 
1795647857.669	(  380000,  570000 ]        3   0.000% 100.001% 
1795647857.669	
1795647857.669	
1795647857.669	** DB Stats **
1795647857.669	Uptime(secs): 33700.1 total, 22.8 interval
1795647857.669	Cumulative writes: 30M writes, 30M keys, 23M commit groups, 1.3 writes per commit group, ingest: 29.96 GB, 0.91 MB/s
1795647857.669	Cumulative WAL: 30M writes, 0 syncs, 30547908.00 writes per sync, written: 29.96 GB, 0.91 MB/s
1795647857.669	Cumulative stall: 07:57:36.846 H:M:S, 85.0 percent
1795647857.669	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795647857.669	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795647857.669	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795647857.669	
1795647857.669	STATISTICS:
1795647857.669	rocksdb.block.cache.miss COUNT : 182145310
1795647857.669	rocksdb.block.cache.hit COUNT : 0
1795647857.669	rocksdb.block.cache.add COUNT : 0
1795647857.669	rocksdb.block.cache.add.failures COUNT : 0
1795647857.669	rocksdb.block.cache.index.miss COUNT : 0
1795647857.669	rocksdb.block.cache.index.hit COUNT : 0
1795647857.669	rocksdb.block.cache.index.add COUNT : 0
1795647857.669	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795647857.669	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795647857.669	rocksdb.block.cache.filter.miss COUNT : 0
1795647857.669	rocksdb.block.cache.filter.hit COUNT : 0
1795647857.669	rocksdb.block.cache.filter.add COUNT : 0
1795647857.669	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795647857.669	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795647857.669	rocksdb.block.cache.data.miss COUNT : 182145310
1795647857.669	rocksdb.block.cache.data.hit COUNT : 0
1795647857.669	rocksdb.block.cache.data.add COUNT : 0
1795647857.669	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795647857.669	rocksdb.block.cache.bytes.read COUNT : 0
1795647857.669	rocksdb.block.cache.bytes.write COUNT : 0
1795647857.669	rocksdb.bloom.filter.useful COUNT : 0
1795647857.669	rocksdb.bloom.filter.full.positive COUNT : 0
1795647857.669	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795647857.669	rocksdb.bloom.filter.micros COUNT : 0
1795647857.669	rocksdb.persistent.cache.hit COUNT : 0
1795647857.669	rocksdb.persistent.cache.miss COUNT : 0
1795647857.669	rocksdb.sim.block.cache.hit COUNT : 0
1795647857.669	rocksdb.sim.block.cache.miss COUNT : 0
1795647857.669	rocksdb.memtable.hit COUNT : 0
1795647857.669	rocksdb.memtable.miss COUNT : 0
1795647857.669	rocksdb.l0.hit COUNT : 0
1795647857.669	rocksdb.l1.hit COUNT : 0
1795647857.669	rocksdb.l2andup.hit COUNT : 0
1795647857.669	rocksdb.compaction.key.drop.new COUNT : 27791412
1795647857.669	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795647857.669	rocksdb.compaction.key.drop.range_del COUNT : 0
1795647857.669	rocksdb.compaction.key.drop.user COUNT : 0
1795647857.669	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795647857.669	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795647857.669	rocksdb.compaction.cancelled COUNT : 0
1795647857.669	rocksdb.number.keys.written COUNT : 30547908
1795647857.669	rocksdb.number.keys.read COUNT : 0
1795647857.669	rocksdb.number.keys.updated COUNT : 0
1795647857.669	rocksdb.bytes.written COUNT : 32169115320
1795647857.669	rocksdb.bytes.read COUNT : 0
1795647857.669	rocksdb.number.db.seek COUNT : 0
1795647857.669	rocksdb.number.db.next COUNT : 0
1795647857.669	rocksdb.number.db.prev COUNT : 0
1795647857.669	rocksdb.number.db.seek.found COUNT : 0
1795647857.669	rocksdb.number.db.next.found COUNT : 0
1795647857.669	rocksdb.number.db.prev.found COUNT : 0
1795647857.669	rocksdb.db.iter.bytes.read COUNT : 0
1795647857.669	rocksdb.no.file.closes COUNT : 0
1795647857.669	rocksdb.no.file.opens COUNT : 1684940
1795647857.669	rocksdb.no.file.errors COUNT : 0
1795647857.669	rocksdb.l0.slowdown.micros COUNT : 0
1795647857.669	rocksdb.memtable.compaction.micros COUNT : 0
1795647857.669	rocksdb.l0.num.files.stall.micros COUNT : 0
1795647857.669	rocksdb.stall.micros COUNT : 28656845605
1795647857.669	rocksdb.db.mutex.wait.micros COUNT : 0
1795647857.669	rocksdb.rate.limit.delay.millis COUNT : 0
1795647857.669	rocksdb.num.iterators COUNT : 0
1795647857.669	rocksdb.number.multiget.get COUNT : 0
1795647857.669	rocksdb.number.multiget.keys.read COUNT : 0
1795647857.669	rocksdb.number.multiget.bytes.read COUNT : 0
1795647857.669	rocksdb.number.deletes.filtered COUNT : 0
1795647857.669	rocksdb.number.merge.failures COUNT : 0
1795647857.669	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795647857.669	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795647857.669	rocksdb.number.reseeks.iteration COUNT : 0
1795647857.669	rocksdb.getupdatessince.calls COUNT : 0
1795647857.669	rocksdb.block.cachecompressed.miss COUNT : 0
1795647857.669	rocksdb.block.cachecompressed.hit COUNT : 0
1795647857.669	rocksdb.block.cachecompressed.add COUNT : 0
1795647857.669	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795647857.669	rocksdb.wal.synced COUNT : 0
1795647857.669	rocksdb.wal.bytes COUNT : 32169115320
1795647857.669	rocksdb.write.self COUNT : 23091614
1795647857.669	rocksdb.write.other COUNT : 7456294
1795647857.669	rocksdb.write.timeout COUNT : 0
1795647857.669	rocksdb.write.wal COUNT : 30547908
1795647857.669	rocksdb.compact.read.bytes COUNT : 765644112030
1795647857.669	rocksdb.compact.write.bytes COUNT : 736438356905
1795647857.669	rocksdb.flush.write.bytes COUNT : 32258075316
1795647857.669	rocksdb.compact.read.marked.bytes COUNT : 0
1795647857.669	rocksdb.compact.read.periodic.bytes COUNT : 0
1795647857.669	rocksdb.compact.read.ttl.bytes COUNT : 0
1795647857.669	rocksdb.compact.write.marked.bytes COUNT : 0
1795647857.669	rocksdb.compact.write.periodic.bytes COUNT : 0
1795647857.669	rocksdb.compact.write.ttl.bytes COUNT : 0
1795647857.669	rocksdb.number.direct.load.table.properties COUNT : 0
1795647857.670	rocksdb.number.superversion_acquires COUNT : 0
1795647857.670	rocksdb.number.superversion_releases COUNT : 0
1795647857.670	rocksdb.number.superversion_cleanups COUNT : 0
1795647857.670	rocksdb.number.block.compressed COUNT : 0
1795647857.670	rocksdb.number.block.decompressed COUNT : 0
1795647857.670	rocksdb.number.block.not_compressed COUNT : 0
1795647857.670	rocksdb.merge.operation.time.nanos COUNT : 0
1795647857.670	rocksdb.filter.operation.time.nanos COUNT : 0
1795647857.670	rocksdb.row.cache.hit COUNT : 0
1795647857.670	rocksdb.row.cache.miss COUNT : 0
1795647857.670	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795647857.670	rocksdb.read.amp.total.read.bytes COUNT : 0
1795647857.670	rocksdb.number.rate_limiter.drains COUNT : 0
1795647857.670	rocksdb.number.iter.skip COUNT : 0
1795647857.670	rocksdb.blobdb.num.put COUNT : 0
1795647857.670	rocksdb.blobdb.num.write COUNT : 0
1795647857.670	rocksdb.blobdb.num.get COUNT : 0
1795647857.670	rocksdb.blobdb.num.multiget COUNT : 0
1795647857.670	rocksdb.blobdb.num.seek COUNT : 0
1795647857.670	rocksdb.blobdb.num.next COUNT : 0
1795647857.670	rocksdb.blobdb.num.prev COUNT : 0
1795647857.670	rocksdb.blobdb.num.keys.written COUNT : 0
1795647857.670	rocksdb.blobdb.num.keys.read COUNT : 0
1795647857.670	rocksdb.blobdb.bytes.written COUNT : 0
1795647857.670	rocksdb.blobdb.bytes.read COUNT : 0
1795647857.670	rocksdb.blobdb.write.inlined COUNT : 0
1795647857.670	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795647857.670	rocksdb.blobdb.write.blob COUNT : 0
1795647857.670	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795647857.670	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795647857.670	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795647857.670	rocksdb.blobdb.blob.file.synced COUNT : 0
1795647857.670	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795647857.670	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795647857.670	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795647857.670	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795647857.670	rocksdb.blobdb.gc.num.files COUNT : 0
1795647857.670	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795647857.670	rocksdb.blobdb.gc.failures COUNT : 0
1795647857.670	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795647857.670	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795647857.670	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795647857.670	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795647857.670	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795647857.670	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795647857.670	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795647857.670	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795647857.670	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795647857.670	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795647857.670	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795647857.670	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795647857.670	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795647857.670	rocksdb.txn.get.tryagain COUNT : 0
1795647857.670	rocksdb.number.multiget.keys.found COUNT : 0
1795647857.670	rocksdb.num.iterator.created COUNT : 0
1795647857.670	rocksdb.num.iterator.deleted COUNT : 0
1795647857.670	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795647857.670	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795647857.670	rocksdb.block.cache.compression.dict.add COUNT : 0
1795647857.670	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795647857.670	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795647857.670	rocksdb.block.cache.add.redundant COUNT : 0
1795647857.670	rocksdb.block.cache.index.add.redundant COUNT : 0
1795647857.670	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795647857.670	rocksdb.block.cache.data.add.redundant COUNT : 0
1795647857.670	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795647857.670	rocksdb.files.marked.trash COUNT : 0
1795647857.670	rocksdb.files.deleted.immediately COUNT : 1681297
1795647857.670	rocksdb.error.handler.bg.errro.count COUNT : 0
1795647857.670	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795647857.670	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795647857.670	rocksdb.error.handler.autoresume.count COUNT : 0
1795647857.670	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795647857.670	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795647857.670	rocksdb.memtable.payload.bytes.at.flush COUNT : 32013935104
1795647857.670	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1803608
1795647857.670	rocksdb.secondary.cache.hits COUNT : 0
1795647857.670	rocksdb.verify_checksum.read.bytes COUNT : 0
1795647857.670	rocksdb.backup.read.bytes COUNT : 0
1795647857.670	rocksdb.backup.write.bytes COUNT : 0
1795647857.670	rocksdb.remote.compact.read.bytes COUNT : 0
1795647857.670	rocksdb.remote.compact.write.bytes COUNT : 0
1795647857.670	rocksdb.hot.file.read.bytes COUNT : 0
1795647857.670	rocksdb.warm.file.read.bytes COUNT : 0
1795647857.670	rocksdb.cold.file.read.bytes COUNT : 0
1795647857.670	rocksdb.hot.file.read.count COUNT : 0
1795647857.670	rocksdb.warm.file.read.count COUNT : 0
1795647857.670	rocksdb.cold.file.read.count COUNT : 0
1795647857.670	rocksdb.last.level.read.bytes COUNT : 0
1795647857.670	rocksdb.last.level.read.count COUNT : 0
1795647857.670	rocksdb.non.last.level.read.bytes COUNT : 765900949015
1795647857.670	rocksdb.non.last.level.read.count COUNT : 188885070
1795647857.670	rocksdb.block.checksum.compute.count COUNT : 185515190
1795647857.670	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.db.write.micros P50 : 900.523140 P95 : 18064.929058 P99 : 66277.132879 P100 : 4942784.000000 COUNT : 30547907 SUM : 134328570420
1795647857.670	rocksdb.compaction.times.micros P50 : 92854.526011 P95 : 217266.824822 P99 : 488276.682782 P100 : 5108328.000000 COUNT : 263420 SUM : 27692828309
1795647857.670	rocksdb.compaction.times.cpu_micros P50 : 91200.687285 P95 : 212443.764142 P99 : 483218.018721 P100 : 4927588.000000 COUNT : 263420 SUM : 27156067577
1795647857.670	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.table.sync.micros P50 : 26312.662996 P95 : 117073.684211 P99 : 367767.741935 P100 : 779526.000000 COUNT : 17692 SUM : 676409103
1795647857.670	rocksdb.compaction.outfile.sync.micros P50 : 6441.239882 P95 : 13627.240446 P99 : 24513.279595 P100 : 633088.000000 COUNT : 1634991 SUM : 13168025877
1795647857.670	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.manifest.file.sync.micros P50 : 488.037587 P95 : 749.122786 P99 : 266670.745777 P100 : 1049002.000000 COUNT : 213277 SUM : 1533527939
1795647857.670	rocksdb.table.open.io.micros P50 : 240.026160 P95 : 442.058601 P99 : 665.082278 P100 : 463892.000000 COUNT : 1684940 SUM : 559481234
1795647857.670	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.read.block.compaction.micros P50 : 46.806858 P95 : 127.159697 P99 : 230.659923 P100 : 803812.000000 COUNT : 182145310 SUM : 12633164938
1795647857.670	rocksdb.read.block.get.micros P50 : 57.045284 P95 : 107.799606 P99 : 221.113909 P100 : 375246.000000 COUNT : 1684940 SUM : 117435858
1795647857.670	rocksdb.write.raw.block.micros P50 : 0.537575 P95 : 1.584001 P99 : 40.279513 P100 : 2005470.000000 COUNT : 187796559 SUM : 363724025
1795647857.670	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.numfiles.in.singlecompaction P50 : 5.836598 P95 : 9.583960 P99 : 9.925879 P100 : 42.000000 COUNT : 264143 SUM : 1646591
1795647857.670	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.db.write.stall P50 : 0.703752 P95 : 3913.676117 P99 : 16149.195757 P100 : 4939777.000000 COUNT : 23069835 SUM : 28660239084
1795647857.670	rocksdb.sst.read.micros P50 : 46.262273 P95 : 123.542186 P99 : 226.519051 P100 : 803806.000000 COUNT : 188885025 SUM : 12880554832
1795647857.670	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.bytes.per.write P50 : 1127.530224 P95 : 3562.776227 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23091614 SUM : 32169115320
1795647857.670	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.670	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.db.flush.micros P50 : 46225.080100 P95 : 175629.032258 P99 : 394955.865922 P100 : 4705817.000000 COUNT : 17691 SUM : 1095452766
1795647857.671	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795647857.671	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1645868 SUM : 0
1795647857.671	
