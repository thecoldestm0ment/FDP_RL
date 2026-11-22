1795231342.172	Initializing RocksDB Options from the specified file
1795231342.172	Initializing RocksDB Options from command-line flags
1795231356.334	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795231356.335	Values:     1024 bytes each (512 bytes after compression)
1795231356.335	Entries:    17191679
1795231356.335	Prefix:    0 bytes
1795231356.335	Keys per prefix:    0
1795231356.335	RawSize:    17051.1 MB (estimated)
1795231356.335	FileSize:   8656.7 MB (estimated)
1795231356.335	Write rate: 0 bytes/second
1795231356.335	Read rate: 0 ops/second
1795231356.335	Compression: NoCompression
1795231356.335	Compression sampling rate: 0
1795231356.335	Memtablerep: SkipListFactory
1795231356.335	Perf Level: 1
1795231356.335	------------------------------------------------
1795231356.335	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795293050.179	overwrite    :    7163.573 micros/op 557 ops/sec;    0.6 MB/s
1795293055.178	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795293055.182	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293065.179	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293075.180	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293085.180	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293095.180	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293105.180	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293115.186	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293125.183	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293135.184	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293145.184	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293155.194	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293165.194	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293175.195	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293185.195	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795293195.195	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795293195.195	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795293195.195	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795293195.195	
1795293195.195	Level Files Size(MB)
1795293195.195	--------------------
1795293195.195	  0        0        0
1795293195.195	  1        5        2
1795293195.195	  2       59       25
1795293195.195	  3      610      250
1795293195.195	  4     5680     2500
1795293195.195	  5    36045    17326
1795293195.195	  6        0        0
1795293195.195	
1795293195.208	
1795293195.208	
1795293195.208	** Compaction Stats [default] **
1795293195.208	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795293195.208	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795293195.208	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0      6.7   5200.71           2134.14     19956    0.261     20K      1       0.0       0.0
1795293195.208	  L1      5/0    2.27 MB   0.9     58.2    33.8     24.4      58.2     33.9       0.0   1.7      9.7      9.7   6119.13           4456.44      9929    0.616     59M   7009       0.0       0.0
1795293195.208	  L2     59/0   24.53 MB   1.0    170.8    33.8    136.9     170.7     33.8       0.0   5.0      8.6      8.6  20328.76          11740.09     72785    0.279    173M    51K       0.0       0.0
1795293195.208	  L3    610/0   249.88 MB   1.0    219.8    33.8    186.0     219.3     33.3       0.0   6.5      9.7      9.6  23314.50          14454.24     76867    0.303    223M   514K       0.0       0.0
1795293195.208	  L4   5680/0    2.44 GB   1.0    222.6    33.3    189.3     217.6     28.3       0.0   6.5      6.9      6.8  32819.00          26521.99     77194    0.425    226M  5052K       0.0       0.0
1795293195.208	  L5  36045/0   16.92 GB   0.7    144.9    28.3    116.6     119.3      2.7       0.0   4.2      6.7      5.5  22235.77          18733.25     62713    0.355    147M    26M       0.0       0.0
1795293195.208	 Sum  42399/0   19.63 GB   0.0    816.3   163.0    653.3     819.1    165.8       0.0  24.2      7.6      7.6 110017.88          78040.14    319444    0.344    829M    31M       0.0       0.0
1795293195.208	 Int      0/0    0.00 KB   0.0      0.2     0.0      0.2       0.2      0.0       0.0 168461706.0      5.6      4.7     34.10             32.38        65    0.525    187K    28K       0.0       0.0
1795293195.208	
1795293195.208	** Compaction Stats [default] **
1795293195.208	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795293195.208	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795293195.208	 Low      0/0    0.00 KB   0.0    816.3   163.0    653.3     785.2    131.9       0.0   0.0      8.0      7.7 104820.12          75908.85    299491    0.350    829M    31M       0.0       0.0
1795293195.208	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0      6.7   5197.75           2131.29     19952    0.261       0      0       0.0       0.0
1795293195.208	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0    114.5      0.01              0.00         1    0.008       0      0       0.0       0.0
1795293195.208	
1795293195.208	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795293195.208	
1795293195.208	Uptime(secs): 61853.0 total, 28.3 interval
1795293195.208	Flush(GB): cumulative 33.810, interval 0.000
1795293195.208	AddFile(GB): cumulative 0.000, interval 0.000
1795293195.208	AddFile(Total Files): cumulative 0, interval 0
1795293195.208	AddFile(L0 Files): cumulative 0, interval 0
1795293195.208	AddFile(Keys): cumulative 0, interval 0
1795293195.208	Cumulative compaction: 819.06 GB write, 13.56 MB/s write, 816.35 GB read, 13.51 MB/s read, 110017.9 seconds
1795293195.208	Interval compaction: 0.16 GB write, 5.69 MB/s write, 0.18 GB read, 6.70 MB/s read, 34.1 seconds
1795293195.209	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 85 stop for pending_compaction_bytes, 360041 slowdown for pending_compaction_bytes, 17 memtable_compaction, 5 memtable_slowdown, interval 0 total count
1795293195.209	Block cache LRUCache@0x608196295a70#66414 capacity: 8.00 MB collections: 344 last_copies: 0 last_secs: 0.000829 secs_since: 28
1795293195.209	Block cache entry stats(count,size,portion): Misc(2,4.17 KB,0.0509262%)
1795293195.209	
1795293195.209	** File Read Latency Histogram By Level [default] **
1795293195.209	** Level 0 read latency histogram (micros):
1795293195.209	Count: 8688435 Average: 160.6836  StdDev: 274.42
1795293195.209	Min: 12  Median: 63.4067  Max: 1863464
1795293195.209	Percentiles: P50: 63.41 P75: 94.90 P99: 678.20 P99.9: 4874.48 P99.99: 214018.09
1795293195.209	------------------------------------------------------
1795293195.209	(      10,      15 ]        2   0.000%   0.000% 
1795293195.209	(      15,      22 ]        1   0.000%   0.000% 
1795293195.209	(      22,      34 ]        1   0.000%   0.000% 
1795293195.209	(      34,      51 ]  3014526  34.696%  34.696% #######
1795293195.209	(      51,      76 ]  2679366  30.838%  65.534% ######
1795293195.209	(      76,     110 ]  1479475  17.028%  82.562% ###
1795293195.209	(     110,     170 ]   866102   9.968%  92.531% ##
1795293195.209	(     170,     250 ]   330784   3.807%  96.338% #
1795293195.209	(     250,     380 ]   145439   1.674%  98.012% 
1795293195.209	(     380,     580 ]    70256   0.809%  98.820% 
1795293195.209	(     580,     870 ]    46063   0.530%  99.351% 
1795293195.209	(     870,    1300 ]    22949   0.264%  99.615% 
1795293195.209	(    1300,    1900 ]    10179   0.117%  99.732% 
1795293195.209	(    1900,    2900 ]     7903   0.091%  99.823% 
1795293195.209	(    2900,    4400 ]     6046   0.070%  99.892% 
1795293195.209	(    4400,    6600 ]     3035   0.035%  99.927% 
1795293195.209	(    6600,    9900 ]     1709   0.020%  99.947% 
1795293195.209	(    9900,   14000 ]      912   0.010%  99.958% 
1795293195.209	(   14000,   22000 ]      645   0.007%  99.965% 
1795293195.209	(   22000,   33000 ]      377   0.004%  99.969% 
1795293195.209	(   33000,   50000 ]      252   0.003%  99.972% 
1795293195.209	(   50000,   75000 ]      270   0.003%  99.975% 
1795293195.209	(   75000,  110000 ]      617   0.007%  99.982% 
1795293195.209	(  110000,  170000 ]      398   0.005%  99.987% 
1795293195.209	(  170000,  250000 ]      471   0.005%  99.992% 
1795293195.209	(  250000,  380000 ]      401   0.005%  99.997% 
1795293195.209	(  380000,  570000 ]      158   0.002%  99.999% 
1795293195.209	(  570000,  860000 ]       66   0.001% 100.000% 
1795293195.209	(  860000, 1200000 ]       23   0.000% 100.000% 
1795293195.209	( 1200000, 1900000 ]        8   0.000% 100.000% 
1795293195.209	
1795293195.209	** Level 1 read latency histogram (micros):
1795293195.209	Count: 15397499 Average: 143.5150  StdDev: 190.16
1795293195.209	Min: 10  Median: 62.7855  Max: 1990282
1795293195.209	Percentiles: P50: 62.79 P75: 93.71 P99: 604.21 P99.9: 3746.44 P99.99: 154186.27
1795293195.209	------------------------------------------------------
1795293195.209	(       6,      10 ]       50   0.000%   0.000% 
1795293195.209	(      10,      15 ]      169   0.001%   0.001% 
1795293195.209	(      15,      22 ]       36   0.000%   0.002% 
1795293195.209	(      22,      34 ]       48   0.000%   0.002% 
1795293195.209	(      34,      51 ]  5456398  35.437%  35.439% #######
1795293195.209	(      51,      76 ]  4755930  30.888%  66.327% ######
1795293195.209	(      76,     110 ]  2563648  16.650%  82.976% ###
1795293195.209	(     110,     170 ]  1479212   9.607%  92.583% ##
1795293195.209	(     170,     250 ]   602130   3.911%  96.494% #
1795293195.209	(     250,     380 ]   258459   1.679%  98.172% 
1795293195.210	(     380,     580 ]   120919   0.785%  98.958% 
1795293195.210	(     580,     870 ]    78153   0.508%  99.465% 
1795293195.210	(     870,    1300 ]    37371   0.243%  99.708% 
1795293195.210	(    1300,    1900 ]    15135   0.098%  99.806% 
1795293195.210	(    1900,    2900 ]    10213   0.066%  99.873% 
1795293195.210	(    2900,    4400 ]     7497   0.049%  99.921% 
1795293195.210	(    4400,    6600 ]     3618   0.023%  99.945% 
1795293195.210	(    6600,    9900 ]     2235   0.015%  99.959% 
1795293195.210	(    9900,   14000 ]     1150   0.007%  99.967% 
1795293195.210	(   14000,   22000 ]      875   0.006%  99.972% 
1795293195.210	(   22000,   33000 ]      497   0.003%  99.976% 
1795293195.210	(   33000,   50000 ]      356   0.002%  99.978% 
1795293195.210	(   50000,   75000 ]      328   0.002%  99.980% 
1795293195.210	(   75000,  110000 ]     1125   0.007%  99.987% 
1795293195.210	(  110000,  170000 ]      553   0.004%  99.991% 
1795293195.210	(  170000,  250000 ]      655   0.004%  99.995% 
1795293195.210	(  250000,  380000 ]      597   0.004%  99.999% 
1795293195.210	(  380000,  570000 ]      218   0.001% 100.000% 
1795293195.210	(  570000,  860000 ]       73   0.000% 100.001% 
1795293195.210	(  860000, 1200000 ]       17   0.000% 100.001% 
1795293195.210	( 1200000, 1900000 ]        5   0.000% 100.001% 
1795293195.210	( 1900000, 2900000 ]        1   0.000% 100.001% 
1795293195.210	
1795293195.210	** Level 2 read latency histogram (micros):
1795293195.210	Count: 45276290 Average: 131.4429  StdDev: 79.40
1795293195.210	Min: 9  Median: 63.7348  Max: 1661764
1795293195.210	Percentiles: P50: 63.73 P75: 96.09 P99: 543.75 P99.9: 2608.69 P99.99: 77980.84
1795293195.210	------------------------------------------------------
1795293195.210	(       6,      10 ]      396   0.001%   0.001% 
1795293195.210	(      10,      15 ]     1892   0.004%   0.005% 
1795293195.210	(      15,      22 ]      381   0.001%   0.006% 
1795293195.210	(      22,      34 ]      229   0.001%   0.006% 
1795293195.210	(      34,      51 ] 15694925  34.665%  34.671% #######
1795293195.210	(      51,      76 ] 13624755  30.092%  64.764% ######
1795293195.210	(      76,     110 ]  7845458  17.328%  82.092% ###
1795293195.210	(     110,     170 ]  4492548   9.923%  92.014% ##
1795293195.210	(     170,     250 ]  1996480   4.410%  96.424% #
1795293195.210	(     250,     380 ]   885841   1.957%  98.380% 
1795293195.210	(     380,     580 ]   342754   0.757%  99.137% 
1795293195.210	(     580,     870 ]   197623   0.436%  99.574% 
1795293195.210	(     870,    1300 ]    94844   0.209%  99.783% 
1795293195.210	(    1300,    1900 ]    36534   0.081%  99.864% 
1795293195.210	(    1900,    2900 ]    23076   0.051%  99.915% 
1795293195.210	(    2900,    4400 ]    15650   0.035%  99.949% 
1795293195.210	(    4400,    6600 ]     7506   0.017%  99.966% 
1795293195.210	(    6600,    9900 ]     4506   0.010%  99.976% 
1795293195.210	(    9900,   14000 ]     2405   0.005%  99.981% 
1795293195.210	(   14000,   22000 ]     1631   0.004%  99.985% 
1795293195.210	(   22000,   33000 ]      838   0.002%  99.987% 
1795293195.210	(   33000,   50000 ]      633   0.001%  99.988% 
1795293195.210	(   50000,   75000 ]      635   0.001%  99.990% 
1795293195.210	(   75000,  110000 ]     2611   0.006%  99.995% 
1795293195.210	(  110000,  170000 ]     1281   0.003%  99.998% 
1795293195.210	(  170000,  250000 ]     1647   0.004% 100.002% 
1795293195.210	(  250000,  380000 ]     1361   0.003% 100.005% 
1795293195.210	(  380000,  570000 ]      505   0.001% 100.006% 
1795293195.210	(  570000,  860000 ]      152   0.000% 100.006% 
1795293195.210	(  860000, 1200000 ]       23   0.000% 100.006% 
1795293195.210	( 1200000, 1900000 ]       12   0.000% 100.006% 
1795293195.210	
1795293195.210	** Level 3 read latency histogram (micros):
1795293195.210	Count: 58180091 Average: 142.1521  StdDev: 30.77
1795293195.210	Min: 9  Median: 64.4256  Max: 7490037
1795293195.210	Percentiles: P50: 64.43 P75: 97.23 P99: 523.19 P99.9: 3494.47 P99.99: 93694.28
1795293195.210	------------------------------------------------------
1795293195.210	(       6,      10 ]      440   0.001%   0.001% 
1795293195.210	(      10,      15 ]     1260   0.002%   0.003% 
1795293195.210	(      15,      22 ]      212   0.000%   0.003% 
1795293195.210	(      22,      34 ]      165   0.000%   0.004% 
1795293195.210	(      34,      51 ] 19609062  33.704%  33.708% #######
1795293195.210	(      51,      76 ] 17650776  30.338%  64.046% ######
1795293195.210	(      76,     110 ] 10206019  17.542%  81.588% ####
1795293195.210	(     110,     170 ]  6022357  10.351%  91.939% ##
1795293195.210	(     170,     250 ]  2681337   4.609%  96.548% #
1795293195.210	(     250,     380 ]  1141275   1.962%  98.509% 
1795293195.210	(     380,     580 ]   398621   0.685%  99.195% 
1795293195.210	(     580,     870 ]   209194   0.360%  99.554% 
1795293195.210	(     870,    1300 ]   100487   0.173%  99.727% 
1795293195.210	(    1300,    1900 ]    48589   0.084%  99.810% 
1795293195.210	(    1900,    2900 ]    40310   0.069%  99.880% 
1795293195.210	(    2900,    4400 ]    29792   0.051%  99.931% 
1795293195.210	(    4400,    6600 ]    13846   0.024%  99.955% 
1795293195.210	(    6600,    9900 ]     7504   0.013%  99.968% 
1795293195.210	(    9900,   14000 ]     3799   0.007%  99.974% 
1795293195.210	(   14000,   22000 ]     3021   0.005%  99.979% 
1795293195.210	(   22000,   33000 ]     1671   0.003%  99.982% 
1795293195.210	(   33000,   50000 ]     1327   0.002%  99.984% 
1795293195.210	(   50000,   75000 ]     1229   0.002%  99.987% 
1795293195.210	(   75000,  110000 ]     3707   0.006%  99.993% 
1795293195.210	(  110000,  170000 ]     2054   0.004%  99.996% 
1795293195.210	(  170000,  250000 ]     2396   0.004% 100.001% 
1795293195.210	(  250000,  380000 ]     2272   0.004% 100.005% 
1795293195.210	(  380000,  570000 ]      788   0.001% 100.006% 
1795293195.210	(  570000,  860000 ]      245   0.000% 100.006% 
1795293195.210	(  860000, 1200000 ]       65   0.000% 100.006% 
1795293195.210	( 1200000, 1900000 ]       23   0.000% 100.006% 
1795293195.210	( 1900000, 2900000 ]        2   0.000% 100.006% 
1795293195.210	( 4300000, 6500000 ]        1   0.000% 100.006% 
1795293195.210	( 6500000, 9800000 ]        1   0.000% 100.006% 
1795293195.210	
1795293195.210	** Level 4 read latency histogram (micros):
1795293195.210	Count: 57659645 Average: 294.0631  StdDev: 61.60
1795293195.210	Min: 9  Median: 69.5739  Max: 2580756
1795293195.210	Percentiles: P50: 69.57 P75: 108.51 P99: 1636.04 P99.9: 16332.85 P99.99: 249761.81
1795293195.210	------------------------------------------------------
1795293195.210	(       6,      10 ]      489   0.001%   0.001% 
1795293195.210	(      10,      15 ]     1497   0.003%   0.003% 
1795293195.210	(      15,      22 ]      336   0.001%   0.004% 
1795293195.210	(      22,      34 ]      210   0.000%   0.004% 
1795293195.210	(      34,      51 ] 13082716  22.690%  22.694% #####
1795293195.210	(      51,      76 ] 21191817  36.753%  59.447% #######
1795293195.210	(      76,     110 ]  9377669  16.264%  75.711% ###
1795293195.210	(     110,     170 ]  6878639  11.930%  87.641% ##
1795293195.210	(     170,     250 ]  3164463   5.488%  93.129% #
1795293195.210	(     250,     380 ]  1580212   2.741%  95.870% #
1795293195.210	(     380,     580 ]   836709   1.451%  97.321% 
1795293195.210	(     580,     870 ]   581460   1.008%  98.329% 
1795293195.210	(     870,    1300 ]   292315   0.507%  98.836% 
1795293195.210	(    1300,    1900 ]   168757   0.293%  99.129% 
1795293195.210	(    1900,    2900 ]   178147   0.309%  99.438% 
1795293195.210	(    2900,    4400 ]   145885   0.253%  99.691% 
1795293195.210	(    4400,    6600 ]    67285   0.117%  99.807% 
1795293195.210	(    6600,    9900 ]    34114   0.059%  99.867% 
1795293195.210	(    9900,   14000 ]    15769   0.027%  99.894% 
1795293195.210	(   14000,   22000 ]    11990   0.021%  99.915% 
1795293195.210	(   22000,   33000 ]     7562   0.013%  99.928% 
1795293195.210	(   33000,   50000 ]     5947   0.010%  99.938% 
1795293195.210	(   50000,   75000 ]     5434   0.009%  99.948% 
1795293195.210	(   75000,  110000 ]     8484   0.015%  99.962% 
1795293195.210	(  110000,  170000 ]     7948   0.014%  99.976% 
1795293195.210	(  170000,  250000 ]     8049   0.014%  99.990% 
1795293195.210	(  250000,  380000 ]     7361   0.013% 100.003% 
1795293195.210	(  380000,  570000 ]     2340   0.004% 100.007% 
1795293195.210	(  570000,  860000 ]      990   0.002% 100.009% 
1795293195.210	(  860000, 1200000 ]      320   0.001% 100.009% 
1795293195.210	( 1200000, 1900000 ]      137   0.000% 100.009% 
1795293195.210	( 1900000, 2900000 ]       17   0.000% 100.009% 
1795293195.210	
1795293195.210	** Level 5 read latency histogram (micros):
1795293195.210	Count: 30972323 Average: 371.1505  StdDev: 73.86
1795293195.210	Min: 9  Median: 68.8131  Max: 2143202
1795293195.210	Percentiles: P50: 68.81 P75: 106.24 P99: 1877.56 P99.9: 47617.33 P99.99: 305226.03
1795293195.210	------------------------------------------------------
1795293195.210	(       6,      10 ]      466   0.002%   0.002% 
1795293195.210	(      10,      15 ]     1874   0.006%   0.008% 
1795293195.210	(      15,      22 ]      351   0.001%   0.009% 
1795293195.210	(      22,      34 ]      315   0.001%   0.010% 
1795293195.210	(      34,      51 ]  6675661  21.554%  21.563% ####
1795293195.210	(      51,      76 ] 12360983  39.910%  61.473% ########
1795293195.210	(      76,     110 ]  4709882  15.207%  76.680% ###
1795293195.210	(     110,     170 ]  3324632  10.734%  87.414% ##
1795293195.210	(     170,     250 ]  1577432   5.093%  92.507% #
1795293195.210	(     250,     380 ]   807080   2.606%  95.113% #
1795293195.210	(     380,     580 ]   494893   1.598%  96.711% 
1795293195.210	(     580,     870 ]   397169   1.282%  97.993% 
1795293195.210	(     870,    1300 ]   212415   0.686%  98.679% 
1795293195.210	(    1300,    1900 ]   103311   0.334%  99.012% 
1795293195.210	(    1900,    2900 ]    96040   0.310%  99.323% 
1795293195.210	(    2900,    4400 ]    78676   0.254%  99.577% 
1795293195.210	(    4400,    6600 ]    42745   0.138%  99.715% 
1795293195.210	(    6600,    9900 ]    24848   0.080%  99.795% 
1795293195.210	(    9900,   14000 ]    12428   0.040%  99.835% 
1795293195.210	(   14000,   22000 ]     9776   0.032%  99.867% 
1795293195.210	(   22000,   33000 ]     6200   0.020%  99.887% 
1795293195.210	(   33000,   50000 ]     4854   0.016%  99.902% 
1795293195.210	(   50000,   75000 ]     4622   0.015%  99.917% 
1795293195.210	(   75000,  110000 ]     6559   0.021%  99.938% 
1795293195.210	(  110000,  170000 ]     6777   0.022%  99.960% 
1795293195.210	(  170000,  250000 ]     6916   0.022%  99.983% 
1795293195.210	(  250000,  380000 ]     5463   0.018% 100.000% 
1795293195.210	(  380000,  570000 ]     1549   0.005% 100.005% 
1795293195.210	(  570000,  860000 ]      689   0.002% 100.007% 
1795293195.210	(  860000, 1200000 ]      268   0.001% 100.008% 
1795293195.210	( 1200000, 1900000 ]      114   0.000% 100.009% 
1795293195.210	( 1900000, 2900000 ]        9   0.000% 100.009% 
1795293195.210	
1795293195.210	
1795293195.210	** DB Stats **
1795293195.210	Uptime(secs): 61853.0 total, 28.3 interval
1795293195.210	Cumulative writes: 34M writes, 34M keys, 23M commit groups, 1.5 writes per commit group, ingest: 33.69 GB, 0.56 MB/s
1795293195.210	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.69 GB, 0.56 MB/s
1795293195.210	Cumulative stall: 16:03:12.924 H:M:S, 93.4 percent
1795293195.210	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795293195.210	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795293195.210	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795293195.210	
1795293195.210	STATISTICS:
1795293195.210	rocksdb.block.cache.miss COUNT : 208490784
1795293195.210	rocksdb.block.cache.hit COUNT : 0
1795293195.210	rocksdb.block.cache.add COUNT : 0
1795293195.210	rocksdb.block.cache.add.failures COUNT : 0
1795293195.210	rocksdb.block.cache.index.miss COUNT : 0
1795293195.210	rocksdb.block.cache.index.hit COUNT : 0
1795293195.210	rocksdb.block.cache.index.add COUNT : 0
1795293195.210	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795293195.210	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795293195.210	rocksdb.block.cache.filter.miss COUNT : 0
1795293195.210	rocksdb.block.cache.filter.hit COUNT : 0
1795293195.210	rocksdb.block.cache.filter.add COUNT : 0
1795293195.210	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795293195.210	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795293195.210	rocksdb.block.cache.data.miss COUNT : 208490784
1795293195.210	rocksdb.block.cache.data.hit COUNT : 0
1795293195.210	rocksdb.block.cache.data.add COUNT : 0
1795293195.210	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795293195.210	rocksdb.block.cache.bytes.read COUNT : 0
1795293195.210	rocksdb.block.cache.bytes.write COUNT : 0
1795293195.210	rocksdb.bloom.filter.useful COUNT : 0
1795293195.210	rocksdb.bloom.filter.full.positive COUNT : 0
1795293195.210	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795293195.210	rocksdb.bloom.filter.micros COUNT : 0
1795293195.210	rocksdb.persistent.cache.hit COUNT : 0
1795293195.210	rocksdb.persistent.cache.miss COUNT : 0
1795293195.210	rocksdb.sim.block.cache.hit COUNT : 0
1795293195.210	rocksdb.sim.block.cache.miss COUNT : 0
1795293195.210	rocksdb.memtable.hit COUNT : 0
1795293195.210	rocksdb.memtable.miss COUNT : 0
1795293195.210	rocksdb.l0.hit COUNT : 0
1795293195.210	rocksdb.l1.hit COUNT : 0
1795293195.210	rocksdb.l2andup.hit COUNT : 0
1795293195.210	rocksdb.compaction.key.drop.new COUNT : 31627258
1795293195.210	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795293195.210	rocksdb.compaction.key.drop.range_del COUNT : 0
1795293195.210	rocksdb.compaction.key.drop.user COUNT : 0
1795293195.210	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795293195.210	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795293195.210	rocksdb.compaction.cancelled COUNT : 0
1795293195.210	rocksdb.number.keys.written COUNT : 34383360
1795293195.210	rocksdb.number.keys.read COUNT : 0
1795293195.210	rocksdb.number.keys.updated COUNT : 0
1795293195.210	rocksdb.bytes.written COUNT : 36174086472
1795293195.210	rocksdb.bytes.read COUNT : 0
1795293195.210	rocksdb.number.db.seek COUNT : 0
1795293195.210	rocksdb.number.db.next COUNT : 0
1795293195.210	rocksdb.number.db.prev COUNT : 0
1795293195.210	rocksdb.number.db.seek.found COUNT : 0
1795293195.210	rocksdb.number.db.next.found COUNT : 0
1795293195.210	rocksdb.number.db.prev.found COUNT : 0
1795293195.210	rocksdb.db.iter.bytes.read COUNT : 0
1795293195.210	rocksdb.no.file.closes COUNT : 0
1795293195.210	rocksdb.no.file.opens COUNT : 1926135
1795293195.210	rocksdb.no.file.errors COUNT : 0
1795293195.210	rocksdb.l0.slowdown.micros COUNT : 0
1795293195.210	rocksdb.memtable.compaction.micros COUNT : 0
1795293195.210	rocksdb.l0.num.files.stall.micros COUNT : 0
1795293195.210	rocksdb.stall.micros COUNT : 57792923579
1795293195.210	rocksdb.db.mutex.wait.micros COUNT : 0
1795293195.210	rocksdb.rate.limit.delay.millis COUNT : 0
1795293195.210	rocksdb.num.iterators COUNT : 0
1795293195.210	rocksdb.number.multiget.get COUNT : 0
1795293195.210	rocksdb.number.multiget.keys.read COUNT : 0
1795293195.210	rocksdb.number.multiget.bytes.read COUNT : 0
1795293195.210	rocksdb.number.deletes.filtered COUNT : 0
1795293195.210	rocksdb.number.merge.failures COUNT : 0
1795293195.210	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795293195.210	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795293195.210	rocksdb.number.reseeks.iteration COUNT : 0
1795293195.210	rocksdb.getupdatessince.calls COUNT : 0
1795293195.210	rocksdb.block.cachecompressed.miss COUNT : 0
1795293195.210	rocksdb.block.cachecompressed.hit COUNT : 0
1795293195.210	rocksdb.block.cachecompressed.add COUNT : 0
1795293195.210	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795293195.210	rocksdb.wal.synced COUNT : 0
1795293195.210	rocksdb.wal.bytes COUNT : 36174086472
1795293195.210	rocksdb.write.self COUNT : 23154886
1795293195.210	rocksdb.write.other COUNT : 11228474
1795293195.210	rocksdb.write.timeout COUNT : 0
1795293195.210	rocksdb.write.wal COUNT : 34383360
1795293195.210	rocksdb.compact.read.bytes COUNT : 876392491957
1795293195.210	rocksdb.compact.write.bytes COUNT : 843155414913
1795293195.210	rocksdb.flush.write.bytes COUNT : 36311967594
1795293195.210	rocksdb.compact.read.marked.bytes COUNT : 0
1795293195.210	rocksdb.compact.read.periodic.bytes COUNT : 0
1795293195.210	rocksdb.compact.read.ttl.bytes COUNT : 0
1795293195.210	rocksdb.compact.write.marked.bytes COUNT : 0
1795293195.210	rocksdb.compact.write.periodic.bytes COUNT : 0
1795293195.210	rocksdb.compact.write.ttl.bytes COUNT : 0
1795293195.210	rocksdb.number.direct.load.table.properties COUNT : 0
1795293195.210	rocksdb.number.superversion_acquires COUNT : 0
1795293195.210	rocksdb.number.superversion_releases COUNT : 0
1795293195.210	rocksdb.number.superversion_cleanups COUNT : 0
1795293195.210	rocksdb.number.block.compressed COUNT : 0
1795293195.210	rocksdb.number.block.decompressed COUNT : 0
1795293195.210	rocksdb.number.block.not_compressed COUNT : 0
1795293195.210	rocksdb.merge.operation.time.nanos COUNT : 0
1795293195.210	rocksdb.filter.operation.time.nanos COUNT : 0
1795293195.210	rocksdb.row.cache.hit COUNT : 0
1795293195.210	rocksdb.row.cache.miss COUNT : 0
1795293195.210	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795293195.210	rocksdb.read.amp.total.read.bytes COUNT : 0
1795293195.210	rocksdb.number.rate_limiter.drains COUNT : 0
1795293195.210	rocksdb.number.iter.skip COUNT : 0
1795293195.210	rocksdb.blobdb.num.put COUNT : 0
1795293195.210	rocksdb.blobdb.num.write COUNT : 0
1795293195.210	rocksdb.blobdb.num.get COUNT : 0
1795293195.211	rocksdb.blobdb.num.multiget COUNT : 0
1795293195.211	rocksdb.blobdb.num.seek COUNT : 0
1795293195.211	rocksdb.blobdb.num.next COUNT : 0
1795293195.211	rocksdb.blobdb.num.prev COUNT : 0
1795293195.211	rocksdb.blobdb.num.keys.written COUNT : 0
1795293195.211	rocksdb.blobdb.num.keys.read COUNT : 0
1795293195.211	rocksdb.blobdb.bytes.written COUNT : 0
1795293195.211	rocksdb.blobdb.bytes.read COUNT : 0
1795293195.211	rocksdb.blobdb.write.inlined COUNT : 0
1795293195.211	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795293195.211	rocksdb.blobdb.write.blob COUNT : 0
1795293195.211	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795293195.211	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795293195.211	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795293195.211	rocksdb.blobdb.blob.file.synced COUNT : 0
1795293195.211	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795293195.211	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795293195.211	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795293195.211	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795293195.211	rocksdb.blobdb.gc.num.files COUNT : 0
1795293195.211	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795293195.211	rocksdb.blobdb.gc.failures COUNT : 0
1795293195.211	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795293195.211	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795293195.211	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795293195.211	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795293195.211	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795293195.211	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795293195.211	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795293195.211	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795293195.211	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795293195.211	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795293195.211	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795293195.211	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795293195.211	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795293195.211	rocksdb.txn.get.tryagain COUNT : 0
1795293195.211	rocksdb.number.multiget.keys.found COUNT : 0
1795293195.211	rocksdb.num.iterator.created COUNT : 0
1795293195.211	rocksdb.num.iterator.deleted COUNT : 0
1795293195.211	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795293195.211	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795293195.211	rocksdb.block.cache.compression.dict.add COUNT : 0
1795293195.211	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795293195.211	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795293195.211	rocksdb.block.cache.add.redundant COUNT : 0
1795293195.211	rocksdb.block.cache.index.add.redundant COUNT : 0
1795293195.211	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795293195.211	rocksdb.block.cache.data.add.redundant COUNT : 0
1795293195.211	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795293195.211	rocksdb.files.marked.trash COUNT : 0
1795293195.211	rocksdb.files.deleted.immediately COUNT : 1923830
1795293195.211	rocksdb.error.handler.bg.errro.count COUNT : 0
1795293195.211	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795293195.211	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795293195.211	rocksdb.error.handler.autoresume.count COUNT : 0
1795293195.211	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795293195.211	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795293195.211	rocksdb.memtable.payload.bytes.at.flush COUNT : 36033610368
1795293195.211	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1880112
1795293195.211	rocksdb.secondary.cache.hits COUNT : 0
1795293195.211	rocksdb.verify_checksum.read.bytes COUNT : 0
1795293195.211	rocksdb.backup.read.bytes COUNT : 0
1795293195.211	rocksdb.backup.write.bytes COUNT : 0
1795293195.211	rocksdb.remote.compact.read.bytes COUNT : 0
1795293195.211	rocksdb.remote.compact.write.bytes COUNT : 0
1795293195.211	rocksdb.hot.file.read.bytes COUNT : 0
1795293195.211	rocksdb.warm.file.read.bytes COUNT : 0
1795293195.211	rocksdb.cold.file.read.bytes COUNT : 0
1795293195.211	rocksdb.hot.file.read.count COUNT : 0
1795293195.211	rocksdb.warm.file.read.count COUNT : 0
1795293195.211	rocksdb.cold.file.read.count COUNT : 0
1795293195.211	rocksdb.last.level.read.bytes COUNT : 0
1795293195.211	rocksdb.last.level.read.count COUNT : 0
1795293195.211	rocksdb.non.last.level.read.bytes COUNT : 876681459713
1795293195.211	rocksdb.non.last.level.read.count COUNT : 216195324
1795293195.211	rocksdb.block.checksum.compute.count COUNT : 212343054
1795293195.211	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.db.write.micros P50 : 2693.811062 P95 : 23317.563073 P99 : 92677.253229 P100 : 45048176.000000 COUNT : 34383359 SUM : 246115927018
1795293195.211	rocksdb.compaction.times.micros P50 : 274543.037462 P95 : 962914.491654 P99 : 1671585.265700 P100 : 45974148.000000 COUNT : 299491 SUM : 104820123837
1795293195.211	rocksdb.compaction.times.cpu_micros P50 : 149242.737499 P95 : 809704.687422 P99 : 1404639.615385 P100 : 10075006.000000 COUNT : 299491 SUM : 75908852102
1795293195.211	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.table.sync.micros P50 : 39497.179432 P95 : 500635.102533 P99 : 986323.076923 P100 : 2381627.000000 COUNT : 19953 SUM : 2192237728
1795293195.211	rocksdb.compaction.outfile.sync.micros P50 : 8390.593621 P95 : 26023.013012 P99 : 263786.150737 P100 : 45661411.000000 COUNT : 1869893 SUM : 28882806395
1795293195.211	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.manifest.file.sync.micros P50 : 504.889231 P95 : 11490.873874 P99 : 327594.659207 P100 : 45551317.000000 COUNT : 243253 SUM : 2582909239
1795293195.211	rocksdb.table.open.io.micros P50 : 276.847939 P95 : 708.747979 P99 : 4225.892359 P100 : 2354335.000000 COUNT : 1926135 SUM : 1880450183
1795293195.211	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.read.block.compaction.micros P50 : 68.155715 P95 : 260.674309 P99 : 926.340010 P100 : 7490175.000000 COUNT : 208490784 SUM : 45249530637
1795293195.211	rocksdb.read.block.get.micros P50 : 65.622807 P95 : 175.345647 P99 : 772.000078 P100 : 2353921.000000 COUNT : 1926135 SUM : 250065251
1795293195.211	rocksdb.write.raw.block.micros P50 : 0.527535 P95 : 1.132387 P99 : 13.585862 P100 : 15009914.000000 COUNT : 214853325 SUM : 293102275
1795293195.211	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.numfiles.in.singlecompaction P50 : 5.829639 P95 : 9.583897 P99 : 9.927396 P100 : 49.000000 COUNT : 300261 SUM : 1884506
1795293195.211	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.db.write.stall P50 : 0.938158 P95 : 8438.773670 P99 : 30242.272701 P100 : 22970037.000000 COUNT : 23133463 SUM : 57798355498
1795293195.211	rocksdb.sst.read.micros P50 : 66.413228 P95 : 249.819921 P99 : 887.608980 P100 : 7490037.000000 COUNT : 216195324 SUM : 46534439653
1795293195.211	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.bytes.per.write P50 : 1156.647346 P95 : 3857.422488 P99 : 4188.000000 P100 : 4188.000000 COUNT : 23154886 SUM : 36174086472
1795293195.211	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.db.flush.micros P50 : 154053.738318 P95 : 816760.719225 P99 : 1612540.145985 P100 : 18207328.000000 COUNT : 19952 SUM : 5197751061
1795293195.211	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795293195.211	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1883736 SUM : 0
1795293195.211	
