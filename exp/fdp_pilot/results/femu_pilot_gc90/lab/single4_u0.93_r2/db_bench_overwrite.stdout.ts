1795526332.762	Initializing RocksDB Options from the specified file
1795526332.763	Initializing RocksDB Options from command-line flags
1795526346.199	Keys:       16 bytes each (+ 0 bytes user-defined timestamp)
1795526346.199	Values:     1024 bytes each (512 bytes after compression)
1795526346.199	Entries:    17191679
1795526346.199	Prefix:    0 bytes
1795526346.199	Keys per prefix:    0
1795526346.199	RawSize:    17051.1 MB (estimated)
1795526346.199	FileSize:   8656.7 MB (estimated)
1795526346.199	Write rate: 0 bytes/second
1795526346.199	Read rate: 0 ops/second
1795526346.199	Compression: NoCompression
1795526346.199	Compression sampling rate: 0
1795526346.199	Memtablerep: SkipListFactory
1795526346.199	Perf Level: 1
1795526346.199	------------------------------------------------
1795526346.199	DB path: [/home/femu/fdp_pilot_work/torfs_db]
1795572343.541	overwrite    :    5348.157 micros/op 747 ops/sec;    0.7 MB/s
1795572348.543	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795572348.544	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795572358.544	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795572368.544	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795572378.553	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795572388.553	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795572398.553	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): active(rocksdb.compaction-pending). Sleep 10 seconds
1795572408.553	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795572408.553	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): started
1795572408.553	waitforcompaction(/home/femu/fdp_pilot_work/torfs_db): finished
1795572408.554	
1795572408.554	Level Files Size(MB)
1795572408.554	--------------------
1795572408.554	  0        0        0
1795572408.554	  1        5        2
1795572408.554	  2       62       25
1795572408.554	  3      604      250
1795572408.554	  4     5719     2500
1795572408.554	  5    36082    17326
1795572408.554	  6        0        0
1795572408.554	
1795572408.557	
1795572408.557	
1795572408.557	** Compaction Stats [default] **
1795572408.557	Level    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795572408.557	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795572408.557	  L0      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   1.0      0.0     20.7   1673.81           1194.99     19932    0.084     18K      6       0.0       0.0
1795572408.557	  L1      5/0    2.16 MB   0.9     57.5    33.8     23.7      57.6     33.8       0.0   1.7     22.9     23.0   2567.67           2517.85      9950    0.258     58M   6696       0.0       0.0
1795572408.557	  L2     62/0   24.82 MB   1.0    171.9    33.8    138.0     171.8     33.8       0.0   5.1     22.2     22.2   7943.11           7780.37     72808    0.109    174M    51K       0.0       0.0
1795572408.557	  L3    604/0   249.89 MB   1.0    220.9    33.8    187.1     220.4     33.3       0.0   6.5     22.6     22.5  10013.25           9825.62     76822    0.130    224M   513K       0.0       0.0
1795572408.557	  L4   5719/0    2.44 GB   1.0    222.5    33.3    189.2     217.5     28.3       0.0   6.5     22.2     21.7  10251.97          10072.29     77220    0.133    226M  5048K       0.0       0.0
1795572408.557	  L5  36082/0   16.92 GB   0.7    145.1    28.3    116.8     119.5      2.7       0.0   4.2     24.4     20.1   6083.48           5969.46     62714    0.097    147M    26M       0.0       0.0
1795572408.557	 Sum  42472/0   19.63 GB   0.0    817.9   163.0    654.9     820.6    165.7       0.0  24.3     21.7     21.8  38533.28          37360.57    319446    0.121    830M    31M       0.0       0.0
1795572408.557	 Int      0/0    0.00 KB   0.0      0.5     0.1      0.4       0.4      0.0       0.0 466239475.0     23.2     19.7     22.62             22.52       175    0.129    521K    79K       0.0       0.0
1795572408.557	
1795572408.557	** Compaction Stats [default] **
1795572408.557	Priority    Files   Size     Score Read(GB)  Rn(GB) Rnp1(GB) Write(GB) Wnew(GB) Moved(GB) W-Amp Rd(MB/s) Wr(MB/s) Comp(sec) CompMergeCPU(sec) Comp(cnt) Avg(sec) KeyIn KeyDrop Rblob(GB) Wblob(GB)
1795572408.557	---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1795572408.557	 Low      0/0    0.00 KB   0.0    817.9   163.0    654.9     786.8    131.9       0.0   0.0     22.7     21.9  36861.83          36167.86    299516    0.123    830M    31M       0.0       0.0
1795572408.557	High      0/0    0.00 KB   0.0      0.0     0.0      0.0      33.8     33.8       0.0   0.0      0.0     20.7   1671.45           1192.71     19929    0.084       0      0       0.0       0.0
1795572408.557	User      0/0    0.00 KB   0.0      0.0     0.0      0.0       0.0      0.0       0.0   0.0      0.0      6.1      0.00              0.00         1    0.001       0      0       0.0       0.0
1795572408.557	
1795572408.557	Blob file count: 0, total size: 0.0 GB, garbage size: 0.0 GB, space amp: 0.0
1795572408.557	
1795572408.557	Uptime(secs): 46075.8 total, 31.9 interval
1795572408.557	Flush(GB): cumulative 33.809, interval 0.000
1795572408.557	AddFile(GB): cumulative 0.000, interval 0.000
1795572408.557	AddFile(Total Files): cumulative 0, interval 0
1795572408.557	AddFile(L0 Files): cumulative 0, interval 0
1795572408.557	AddFile(Keys): cumulative 0, interval 0
1795572408.557	Cumulative compaction: 820.60 GB write, 18.24 MB/s write, 817.89 GB read, 18.18 MB/s read, 38533.3 seconds
1795572408.557	Interval compaction: 0.43 GB write, 13.93 MB/s write, 0.51 GB read, 16.46 MB/s read, 22.6 seconds
1795572408.557	Stalls(count): 0 level0_slowdown, 0 level0_slowdown_with_compaction, 0 level0_numfiles, 0 level0_numfiles_with_compaction, 0 stop for pending_compaction_bytes, 359977 slowdown for pending_compaction_bytes, 2 memtable_compaction, 2 memtable_slowdown, interval 48 total count
1795572408.557	Block cache LRUCache@0x64778c16ca70#74587 capacity: 8.00 MB collections: 256 last_copies: 2 last_secs: 8.1e-05 secs_since: 151
1795572408.557	Block cache entry stats(count,size,portion): Misc(3,8.36 KB,0.102043%)
1795572408.557	
1795572408.557	** File Read Latency Histogram By Level [default] **
1795572408.557	** Level 0 read latency histogram (micros):
1795572408.557	Count: 8687159 Average: 80.2703  StdDev: 393.88
1795572408.557	Min: 10  Median: 46.5502  Max: 747643
1795572408.557	Percentiles: P50: 46.55 P75: 73.01 P99: 232.88 P99.9: 473.72 P99.99: 6152.27
1795572408.557	------------------------------------------------------
1795572408.557	(       6,      10 ]        1   0.000%   0.000% 
1795572408.557	(      15,      22 ]        6   0.000%   0.000% 
1795572408.557	(      22,      34 ]        4   0.000%   0.000% 
1795572408.557	(      34,      51 ]  5883608  67.728%  67.728% ##############
1795572408.557	(      51,      76 ]   717559   8.260%  75.988% ##
1795572408.557	(      76,     110 ]  1544676  17.781%  93.769% ####
1795572408.557	(     110,     170 ]   352002   4.052%  97.821% #
1795572408.557	(     170,     250 ]   130328   1.500%  99.321% 
1795572408.557	(     250,     380 ]    46518   0.535%  99.857% 
1795572408.557	(     380,     580 ]     8045   0.093%  99.949% 
1795572408.557	(     580,     870 ]     1936   0.022%  99.971% 
1795572408.557	(     870,    1300 ]      994   0.011%  99.983% 
1795572408.557	(    1300,    1900 ]      335   0.004%  99.987% 
1795572408.557	(    1900,    2900 ]      162   0.002%  99.989% 
1795572408.557	(    2900,    4400 ]       90   0.001%  99.990% 
1795572408.557	(    4400,    6600 ]       33   0.000%  99.990% 
1795572408.557	(    6600,    9900 ]       11   0.000%  99.990% 
1795572408.557	(    9900,   14000 ]        5   0.000%  99.990% 
1795572408.557	(   14000,   22000 ]        2   0.000%  99.990% 
1795572408.557	(   22000,   33000 ]        1   0.000%  99.990% 
1795572408.557	(   33000,   50000 ]        5   0.000%  99.990% 
1795572408.557	(   50000,   75000 ]       48   0.001%  99.991% 
1795572408.557	(   75000,  110000 ]      514   0.006%  99.997% 
1795572408.557	(  110000,  170000 ]       56   0.001%  99.997% 
1795572408.557	(  170000,  250000 ]       97   0.001%  99.999% 
1795572408.557	(  250000,  380000 ]       75   0.001%  99.999% 
1795572408.557	(  380000,  570000 ]       32   0.000% 100.000% 
1795572408.557	(  570000,  860000 ]       16   0.000% 100.000% 
1795572408.557	
1795572408.557	** Level 1 read latency histogram (micros):
1795572408.557	Count: 15218138 Average: 91.4833  StdDev: 165.14
1795572408.557	Min: 5  Median: 46.4711  Max: 863543
1795572408.557	Percentiles: P50: 46.47 P75: 71.55 P99: 231.26 P99.9: 524.65 P99.99: 94965.42
1795572408.557	------------------------------------------------------
1795572408.557	(       4,       6 ]        6   0.000%   0.000% 
1795572408.557	(       6,      10 ]       69   0.000%   0.000% 
1795572408.557	(      10,      15 ]       42   0.000%   0.001% 
1795572408.557	(      15,      22 ]       39   0.000%   0.001% 
1795572408.557	(      22,      34 ]       13   0.000%   0.001% 
1795572408.557	(      34,      51 ] 10372059  68.156%  68.157% ##############
1795572408.557	(      51,      76 ]  1266830   8.324%  76.481% ##
1795572408.557	(      76,     110 ]  2649721  17.412%  93.893% ###
1795572408.557	(     110,     170 ]   602613   3.960%  97.853% #
1795572408.557	(     170,     250 ]   227963   1.498%  99.351% 
1795572408.557	(     250,     380 ]    72435   0.476%  99.827% 
1795572408.557	(     380,     580 ]    15389   0.101%  99.928% 
1795572408.557	(     580,     870 ]     4366   0.029%  99.957% 
1795572408.557	(     870,    1300 ]     1911   0.013%  99.969% 
1795572408.557	(    1300,    1900 ]      972   0.006%  99.976% 
1795572408.557	(    1900,    2900 ]      327   0.002%  99.978% 
1795572408.557	(    2900,    4400 ]      205   0.001%  99.979% 
1795572408.557	(    4400,    6600 ]       51   0.000%  99.979% 
1795572408.557	(    6600,    9900 ]       34   0.000%  99.980% 
1795572408.557	(    9900,   14000 ]       17   0.000%  99.980% 
1795572408.557	(   14000,   22000 ]       16   0.000%  99.980% 
1795572408.557	(   22000,   33000 ]        8   0.000%  99.980% 
1795572408.557	(   33000,   50000 ]       26   0.000%  99.980% 
1795572408.557	(   50000,   75000 ]      292   0.002%  99.982% 
1795572408.557	(   75000,  110000 ]     2125   0.014%  99.996% 
1795572408.557	(  110000,  170000 ]      115   0.001%  99.997% 
1795572408.557	(  170000,  250000 ]      295   0.002%  99.999% 
1795572408.557	(  250000,  380000 ]      157   0.001% 100.000% 
1795572408.557	(  380000,  570000 ]       53   0.000% 100.000% 
1795572408.557	(  570000,  860000 ]       35   0.000% 100.000% 
1795572408.557	(  860000, 1200000 ]        1   0.000% 100.000% 
1795572408.557	
1795572408.557	** Level 2 read latency histogram (micros):
1795572408.557	Count: 45569492 Average: 79.9698  StdDev: 60.12
1795572408.557	Min: 5  Median: 46.6852  Max: 759416
1795572408.557	Percentiles: P50: 46.69 P75: 74.34 P99: 234.91 P99.9: 414.05 P99.99: 3696.48
1795572408.557	------------------------------------------------------
1795572408.557	(       4,       6 ]       60   0.000%   0.000% 
1795572408.557	(       6,      10 ]     1561   0.003%   0.004% 
1795572408.557	(      10,      15 ]     1277   0.003%   0.006% 
1795572408.557	(      15,      22 ]      337   0.001%   0.007% 
1795572408.557	(      22,      34 ]       87   0.000%   0.007% 
1795572408.557	(      34,      51 ] 30530421  66.998%  67.005% #############
1795572408.557	(      51,      76 ]  3902743   8.564%  75.569% ##
1795572408.557	(      76,     110 ]  8180665  17.952%  93.521% ####
1795572408.557	(     110,     170 ]  1868523   4.100%  97.622% #
1795572408.557	(     170,     250 ]   774129   1.699%  99.320% 
1795572408.557	(     250,     380 ]   258150   0.566%  99.887% 
1795572408.558	(     380,     580 ]    35065   0.077%  99.964% 
1795572408.558	(     580,     870 ]     6919   0.015%  99.979% 
1795572408.558	(     870,    1300 ]     2750   0.006%  99.985% 
1795572408.558	(    1300,    1900 ]     1295   0.003%  99.988% 
1795572408.558	(    1900,    2900 ]      678   0.001%  99.989% 
1795572408.558	(    2900,    4400 ]      518   0.001%  99.991% 
1795572408.558	(    4400,    6600 ]      154   0.000%  99.991% 
1795572408.558	(    6600,    9900 ]       69   0.000%  99.991% 
1795572408.558	(    9900,   14000 ]       30   0.000%  99.991% 
1795572408.558	(   14000,   22000 ]       18   0.000%  99.991% 
1795572408.558	(   22000,   33000 ]        7   0.000%  99.991% 
1795572408.558	(   33000,   50000 ]       43   0.000%  99.991% 
1795572408.558	(   50000,   75000 ]      320   0.001%  99.992% 
1795572408.558	(   75000,  110000 ]     3017   0.007%  99.999% 
1795572408.558	(  110000,  170000 ]      284   0.001%  99.999% 
1795572408.558	(  170000,  250000 ]      440   0.001% 100.000% 
1795572408.558	(  250000,  380000 ]      319   0.001% 100.001% 
1795572408.558	(  380000,  570000 ]      149   0.000% 100.001% 
1795572408.558	(  570000,  860000 ]       49   0.000% 100.001% 
1795572408.558	
1795572408.558	** Level 3 read latency histogram (micros):
1795572408.558	Count: 58477932 Average: 79.0836  StdDev: 69.53
1795572408.558	Min: 5  Median: 46.7137  Max: 757515
1795572408.558	Percentiles: P50: 46.71 P75: 75.76 P99: 231.43 P99.9: 378.49 P99.99: 2659.91
1795572408.558	------------------------------------------------------
1795572408.558	(       4,       6 ]      116   0.000%   0.000% 
1795572408.558	(       6,      10 ]     2164   0.004%   0.004% 
1795572408.558	(      10,      15 ]     1726   0.003%   0.007% 
1795572408.558	(      15,      22 ]      545   0.001%   0.008% 
1795572408.558	(      22,      34 ]      161   0.000%   0.008% 
1795572408.558	(      34,      51 ] 39090261  66.846%  66.854% #############
1795572408.558	(      51,      76 ]  4810008   8.225%  75.080% ##
1795572408.558	(      76,     110 ] 10784396  18.442%  93.521% ####
1795572408.558	(     110,     170 ]  2449060   4.188%  97.709% #
1795572408.558	(     170,     250 ]   982834   1.681%  99.390% 
1795572408.558	(     250,     380 ]   301691   0.516%  99.906% 
1795572408.558	(     380,     580 ]    36757   0.063%  99.969% 
1795572408.558	(     580,     870 ]     7406   0.013%  99.982% 
1795572408.558	(     870,    1300 ]     2864   0.005%  99.986% 
1795572408.558	(    1300,    1900 ]     1485   0.003%  99.989% 
1795572408.558	(    1900,    2900 ]      803   0.001%  99.990% 
1795572408.558	(    2900,    4400 ]      679   0.001%  99.991% 
1795572408.558	(    4400,    6600 ]      240   0.000%  99.992% 
1795572408.558	(    6600,    9900 ]      139   0.000%  99.992% 
1795572408.558	(    9900,   14000 ]       28   0.000%  99.992% 
1795572408.558	(   14000,   22000 ]       16   0.000%  99.992% 
1795572408.558	(   22000,   33000 ]        4   0.000%  99.992% 
1795572408.558	(   33000,   50000 ]       38   0.000%  99.992% 
1795572408.558	(   50000,   75000 ]      356   0.001%  99.993% 
1795572408.558	(   75000,  110000 ]     3565   0.006%  99.999% 
1795572408.558	(  110000,  170000 ]      328   0.001% 100.000% 
1795572408.558	(  170000,  250000 ]      618   0.001% 100.001% 
1795572408.558	(  250000,  380000 ]      371   0.001% 100.001% 
1795572408.558	(  380000,  570000 ]      180   0.000% 100.002% 
1795572408.558	(  570000,  860000 ]       61   0.000% 100.002% 
1795572408.558	
1795572408.558	** Level 4 read latency histogram (micros):
1795572408.558	Count: 57635522 Average: 80.5635  StdDev: 70.42
1795572408.558	Min: 5  Median: 46.7256  Max: 1848739
1795572408.558	Percentiles: P50: 46.73 P75: 75.68 P99: 229.90 P99.9: 377.62 P99.99: 3209.71
1795572408.558	------------------------------------------------------
1795572408.558	(       4,       6 ]       84   0.000%   0.000% 
1795572408.558	(       6,      10 ]     1514   0.003%   0.003% 
1795572408.558	(      10,      15 ]     1116   0.002%   0.005% 
1795572408.558	(      15,      22 ]      332   0.001%   0.005% 
1795572408.558	(      22,      34 ]      107   0.000%   0.005% 
1795572408.558	(      34,      51 ] 38493107  66.787%  66.793% #############
1795572408.558	(      51,      76 ]  4791223   8.313%  75.106% ##
1795572408.558	(      76,     110 ] 10635393  18.453%  93.558% ####
1795572408.558	(     110,     170 ]  2426902   4.211%  97.769% #
1795572408.558	(     170,     250 ]   947419   1.644%  99.413% 
1795572408.558	(     250,     380 ]   285914   0.496%  99.909% 
1795572408.558	(     380,     580 ]    34061   0.059%  99.968% 
1795572408.558	(     580,     870 ]     6675   0.012%  99.980% 
1795572408.558	(     870,    1300 ]     3220   0.006%  99.985% 
1795572408.558	(    1300,    1900 ]     1671   0.003%  99.988% 
1795572408.558	(    1900,    2900 ]      885   0.002%  99.990% 
1795572408.558	(    2900,    4400 ]      656   0.001%  99.991% 
1795572408.558	(    4400,    6600 ]      336   0.001%  99.991% 
1795572408.558	(    6600,    9900 ]      177   0.000%  99.992% 
1795572408.558	(    9900,   14000 ]       46   0.000%  99.992% 
1795572408.558	(   14000,   22000 ]       12   0.000%  99.992% 
1795572408.558	(   22000,   33000 ]        3   0.000%  99.992% 
1795572408.558	(   33000,   50000 ]       46   0.000%  99.992% 
1795572408.558	(   50000,   75000 ]      316   0.001%  99.993% 
1795572408.558	(   75000,  110000 ]     3514   0.006%  99.999% 
1795572408.558	(  110000,  170000 ]      458   0.001%  99.999% 
1795572408.558	(  170000,  250000 ]      726   0.001% 100.001% 
1795572408.558	(  250000,  380000 ]      452   0.001% 100.001% 
1795572408.558	(  380000,  570000 ]      198   0.000% 100.002% 
1795572408.558	(  570000,  860000 ]       66   0.000% 100.002% 
1795572408.558	(  860000, 1200000 ]        1   0.000% 100.002% 
1795572408.558	( 1200000, 1900000 ]        1   0.000% 100.002% 
1795572408.558	
1795572408.558	** Level 5 read latency histogram (micros):
1795572408.558	Count: 31012941 Average: 74.5714  StdDev: 90.69
1795572408.558	Min: 6  Median: 46.3008  Max: 1453276
1795572408.558	Percentiles: P50: 46.30 P75: 67.15 P99: 227.86 P99.9: 377.52 P99.99: 3055.14
1795572408.558	------------------------------------------------------
1795572408.558	(       4,       6 ]       42   0.000%   0.000% 
1795572408.558	(       6,      10 ]      981   0.003%   0.003% 
1795572408.558	(      10,      15 ]      800   0.003%   0.006% 
1795572408.558	(      15,      22 ]      217   0.001%   0.007% 
1795572408.558	(      22,      34 ]       71   0.000%   0.007% 
1795572408.558	(      34,      51 ] 21427422  69.092%  69.099% ##############
1795572408.558	(      51,      76 ]  2832433   9.133%  78.232% ##
1795572408.558	(      76,     110 ]  5009864  16.154%  94.386% ###
1795572408.558	(     110,     170 ]  1082138   3.489%  97.875% #
1795572408.558	(     170,     250 ]   482322   1.555%  99.430% 
1795572408.558	(     250,     380 ]   148476   0.479%  99.909% 
1795572408.558	(     380,     580 ]    16819   0.054%  99.963% 
1795572408.558	(     580,     870 ]     4054   0.013%  99.976% 
1795572408.558	(     870,    1300 ]     2256   0.007%  99.984% 
1795572408.558	(    1300,    1900 ]      979   0.003%  99.987% 
1795572408.558	(    1900,    2900 ]      875   0.003%  99.990% 
1795572408.558	(    2900,    4400 ]      877   0.003%  99.993% 
1795572408.558	(    4400,    6600 ]      509   0.002%  99.994% 
1795572408.558	(    6600,    9900 ]      266   0.001%  99.995% 
1795572408.558	(    9900,   14000 ]       84   0.000%  99.995% 
1795572408.558	(   14000,   22000 ]        7   0.000%  99.995% 
1795572408.558	(   50000,   75000 ]        6   0.000%  99.995% 
1795572408.558	(   75000,  110000 ]     1159   0.004%  99.999% 
1795572408.558	(  110000,  170000 ]      174   0.001% 100.000% 
1795572408.558	(  170000,  250000 ]      275   0.001% 100.001% 
1795572408.558	(  250000,  380000 ]      228   0.001% 100.001% 
1795572408.558	(  380000,  570000 ]       88   0.000% 100.002% 
1795572408.558	(  570000,  860000 ]       21   0.000% 100.002% 
1795572408.558	(  860000, 1200000 ]        1   0.000% 100.002% 
1795572408.558	( 1200000, 1900000 ]        1   0.000% 100.002% 
1795572408.558	
1795572408.558	
1795572408.558	** DB Stats **
1795572408.558	Uptime(secs): 46075.8 total, 31.9 interval
1795572408.558	Cumulative writes: 34M writes, 34M keys, 25M commit groups, 1.4 writes per commit group, ingest: 33.71 GB, 0.75 MB/s
1795572408.558	Cumulative WAL: 34M writes, 0 syncs, 34383360.00 writes per sync, written: 33.71 GB, 0.75 MB/s
1795572408.558	Cumulative stall: 10:50:19.196 H:M:S, 84.7 percent
1795572408.558	Interval writes: 0 writes, 0 keys, 0 commit groups, 0.0 writes per commit group, ingest: 0.00 MB, 0.00 MB/s
1795572408.558	Interval WAL: 0 writes, 0 syncs, 0.00 writes per sync, written: 0.00 GB, 0.00 MB/s
1795572408.558	Interval stall: 00:00:0.000 H:M:S, 0.0 percent
1795572408.558	
1795572408.558	STATISTICS:
1795572408.558	rocksdb.block.cache.miss COUNT : 208883880
1795572408.558	rocksdb.block.cache.hit COUNT : 0
1795572408.558	rocksdb.block.cache.add COUNT : 0
1795572408.558	rocksdb.block.cache.add.failures COUNT : 0
1795572408.558	rocksdb.block.cache.index.miss COUNT : 0
1795572408.558	rocksdb.block.cache.index.hit COUNT : 0
1795572408.558	rocksdb.block.cache.index.add COUNT : 0
1795572408.558	rocksdb.block.cache.index.bytes.insert COUNT : 0
1795572408.558	rocksdb.block.cache.index.bytes.evict COUNT : 0
1795572408.558	rocksdb.block.cache.filter.miss COUNT : 0
1795572408.558	rocksdb.block.cache.filter.hit COUNT : 0
1795572408.558	rocksdb.block.cache.filter.add COUNT : 0
1795572408.558	rocksdb.block.cache.filter.bytes.insert COUNT : 0
1795572408.558	rocksdb.block.cache.filter.bytes.evict COUNT : 0
1795572408.558	rocksdb.block.cache.data.miss COUNT : 208883880
1795572408.558	rocksdb.block.cache.data.hit COUNT : 0
1795572408.558	rocksdb.block.cache.data.add COUNT : 0
1795572408.558	rocksdb.block.cache.data.bytes.insert COUNT : 0
1795572408.558	rocksdb.block.cache.bytes.read COUNT : 0
1795572408.558	rocksdb.block.cache.bytes.write COUNT : 0
1795572408.558	rocksdb.bloom.filter.useful COUNT : 0
1795572408.558	rocksdb.bloom.filter.full.positive COUNT : 0
1795572408.558	rocksdb.bloom.filter.full.true.positive COUNT : 0
1795572408.558	rocksdb.bloom.filter.micros COUNT : 0
1795572408.558	rocksdb.persistent.cache.hit COUNT : 0
1795572408.558	rocksdb.persistent.cache.miss COUNT : 0
1795572408.558	rocksdb.sim.block.cache.hit COUNT : 0
1795572408.558	rocksdb.sim.block.cache.miss COUNT : 0
1795572408.558	rocksdb.memtable.hit COUNT : 0
1795572408.558	rocksdb.memtable.miss COUNT : 0
1795572408.558	rocksdb.l0.hit COUNT : 0
1795572408.558	rocksdb.l1.hit COUNT : 0
1795572408.558	rocksdb.l2andup.hit COUNT : 0
1795572408.558	rocksdb.compaction.key.drop.new COUNT : 31626348
1795572408.558	rocksdb.compaction.key.drop.obsolete COUNT : 0
1795572408.558	rocksdb.compaction.key.drop.range_del COUNT : 0
1795572408.558	rocksdb.compaction.key.drop.user COUNT : 0
1795572408.558	rocksdb.compaction.range_del.drop.obsolete COUNT : 0
1795572408.558	rocksdb.compaction.optimized.del.drop.obsolete COUNT : 0
1795572408.558	rocksdb.compaction.cancelled COUNT : 0
1795572408.558	rocksdb.number.keys.written COUNT : 34383360
1795572408.558	rocksdb.number.keys.read COUNT : 0
1795572408.558	rocksdb.number.keys.updated COUNT : 0
1795572408.558	rocksdb.bytes.written COUNT : 36199048860
1795572408.558	rocksdb.bytes.read COUNT : 0
1795572408.558	rocksdb.number.db.seek COUNT : 0
1795572408.558	rocksdb.number.db.next COUNT : 0
1795572408.558	rocksdb.number.db.prev COUNT : 0
1795572408.558	rocksdb.number.db.seek.found COUNT : 0
1795572408.558	rocksdb.number.db.next.found COUNT : 0
1795572408.558	rocksdb.number.db.prev.found COUNT : 0
1795572408.558	rocksdb.db.iter.bytes.read COUNT : 0
1795572408.558	rocksdb.no.file.closes COUNT : 0
1795572408.558	rocksdb.no.file.opens COUNT : 1930414
1795572408.558	rocksdb.no.file.errors COUNT : 0
1795572408.558	rocksdb.l0.slowdown.micros COUNT : 0
1795572408.558	rocksdb.memtable.compaction.micros COUNT : 0
1795572408.558	rocksdb.l0.num.files.stall.micros COUNT : 0
1795572408.558	rocksdb.stall.micros COUNT : 39019195748
1795572408.558	rocksdb.db.mutex.wait.micros COUNT : 0
1795572408.558	rocksdb.rate.limit.delay.millis COUNT : 0
1795572408.558	rocksdb.num.iterators COUNT : 0
1795572408.558	rocksdb.number.multiget.get COUNT : 0
1795572408.558	rocksdb.number.multiget.keys.read COUNT : 0
1795572408.558	rocksdb.number.multiget.bytes.read COUNT : 0
1795572408.558	rocksdb.number.deletes.filtered COUNT : 0
1795572408.558	rocksdb.number.merge.failures COUNT : 0
1795572408.558	rocksdb.bloom.filter.prefix.checked COUNT : 0
1795572408.558	rocksdb.bloom.filter.prefix.useful COUNT : 0
1795572408.558	rocksdb.number.reseeks.iteration COUNT : 0
1795572408.558	rocksdb.getupdatessince.calls COUNT : 0
1795572408.558	rocksdb.block.cachecompressed.miss COUNT : 0
1795572408.558	rocksdb.block.cachecompressed.hit COUNT : 0
1795572408.558	rocksdb.block.cachecompressed.add COUNT : 0
1795572408.558	rocksdb.block.cachecompressed.add.failures COUNT : 0
1795572408.558	rocksdb.wal.synced COUNT : 0
1795572408.558	rocksdb.wal.bytes COUNT : 36199048860
1795572408.558	rocksdb.write.self COUNT : 25235085
1795572408.558	rocksdb.write.other COUNT : 9148275
1795572408.558	rocksdb.write.timeout COUNT : 0
1795572408.558	rocksdb.write.wal COUNT : 34383360
1795572408.558	rocksdb.compact.read.bytes COUNT : 878044348413
1795572408.558	rocksdb.compact.write.bytes COUNT : 844807254275
1795572408.558	rocksdb.flush.write.bytes COUNT : 36309705338
1795572408.558	rocksdb.compact.read.marked.bytes COUNT : 0
1795572408.558	rocksdb.compact.read.periodic.bytes COUNT : 0
1795572408.558	rocksdb.compact.read.ttl.bytes COUNT : 0
1795572408.558	rocksdb.compact.write.marked.bytes COUNT : 0
1795572408.558	rocksdb.compact.write.periodic.bytes COUNT : 0
1795572408.558	rocksdb.compact.write.ttl.bytes COUNT : 0
1795572408.558	rocksdb.number.direct.load.table.properties COUNT : 0
1795572408.558	rocksdb.number.superversion_acquires COUNT : 0
1795572408.558	rocksdb.number.superversion_releases COUNT : 0
1795572408.558	rocksdb.number.superversion_cleanups COUNT : 0
1795572408.558	rocksdb.number.block.compressed COUNT : 0
1795572408.558	rocksdb.number.block.decompressed COUNT : 0
1795572408.558	rocksdb.number.block.not_compressed COUNT : 0
1795572408.558	rocksdb.merge.operation.time.nanos COUNT : 0
1795572408.558	rocksdb.filter.operation.time.nanos COUNT : 0
1795572408.558	rocksdb.row.cache.hit COUNT : 0
1795572408.558	rocksdb.row.cache.miss COUNT : 0
1795572408.558	rocksdb.read.amp.estimate.useful.bytes COUNT : 0
1795572408.558	rocksdb.read.amp.total.read.bytes COUNT : 0
1795572408.558	rocksdb.number.rate_limiter.drains COUNT : 0
1795572408.558	rocksdb.number.iter.skip COUNT : 0
1795572408.558	rocksdb.blobdb.num.put COUNT : 0
1795572408.558	rocksdb.blobdb.num.write COUNT : 0
1795572408.558	rocksdb.blobdb.num.get COUNT : 0
1795572408.558	rocksdb.blobdb.num.multiget COUNT : 0
1795572408.558	rocksdb.blobdb.num.seek COUNT : 0
1795572408.558	rocksdb.blobdb.num.next COUNT : 0
1795572408.558	rocksdb.blobdb.num.prev COUNT : 0
1795572408.558	rocksdb.blobdb.num.keys.written COUNT : 0
1795572408.558	rocksdb.blobdb.num.keys.read COUNT : 0
1795572408.558	rocksdb.blobdb.bytes.written COUNT : 0
1795572408.558	rocksdb.blobdb.bytes.read COUNT : 0
1795572408.558	rocksdb.blobdb.write.inlined COUNT : 0
1795572408.558	rocksdb.blobdb.write.inlined.ttl COUNT : 0
1795572408.558	rocksdb.blobdb.write.blob COUNT : 0
1795572408.558	rocksdb.blobdb.write.blob.ttl COUNT : 0
1795572408.558	rocksdb.blobdb.blob.file.bytes.written COUNT : 0
1795572408.558	rocksdb.blobdb.blob.file.bytes.read COUNT : 0
1795572408.558	rocksdb.blobdb.blob.file.synced COUNT : 0
1795572408.558	rocksdb.blobdb.blob.index.expired.count COUNT : 0
1795572408.558	rocksdb.blobdb.blob.index.expired.size COUNT : 0
1795572408.558	rocksdb.blobdb.blob.index.evicted.count COUNT : 0
1795572408.558	rocksdb.blobdb.blob.index.evicted.size COUNT : 0
1795572408.558	rocksdb.blobdb.gc.num.files COUNT : 0
1795572408.558	rocksdb.blobdb.gc.num.new.files COUNT : 0
1795572408.558	rocksdb.blobdb.gc.failures COUNT : 0
1795572408.558	rocksdb.blobdb.gc.num.keys.overwritten COUNT : 0
1795572408.558	rocksdb.blobdb.gc.num.keys.expired COUNT : 0
1795572408.558	rocksdb.blobdb.gc.num.keys.relocated COUNT : 0
1795572408.558	rocksdb.blobdb.gc.bytes.overwritten COUNT : 0
1795572408.558	rocksdb.blobdb.gc.bytes.expired COUNT : 0
1795572408.558	rocksdb.blobdb.gc.bytes.relocated COUNT : 0
1795572408.558	rocksdb.blobdb.fifo.num.files.evicted COUNT : 0
1795572408.558	rocksdb.blobdb.fifo.num.keys.evicted COUNT : 0
1795572408.558	rocksdb.blobdb.fifo.bytes.evicted COUNT : 0
1795572408.558	rocksdb.txn.overhead.mutex.prepare COUNT : 0
1795572408.558	rocksdb.txn.overhead.mutex.old.commit.map COUNT : 0
1795572408.558	rocksdb.txn.overhead.duplicate.key COUNT : 0
1795572408.558	rocksdb.txn.overhead.mutex.snapshot COUNT : 0
1795572408.558	rocksdb.txn.get.tryagain COUNT : 0
1795572408.558	rocksdb.number.multiget.keys.found COUNT : 0
1795572408.558	rocksdb.num.iterator.created COUNT : 0
1795572408.558	rocksdb.num.iterator.deleted COUNT : 0
1795572408.558	rocksdb.block.cache.compression.dict.miss COUNT : 0
1795572408.559	rocksdb.block.cache.compression.dict.hit COUNT : 0
1795572408.559	rocksdb.block.cache.compression.dict.add COUNT : 0
1795572408.559	rocksdb.block.cache.compression.dict.bytes.insert COUNT : 0
1795572408.559	rocksdb.block.cache.compression.dict.bytes.evict COUNT : 0
1795572408.559	rocksdb.block.cache.add.redundant COUNT : 0
1795572408.559	rocksdb.block.cache.index.add.redundant COUNT : 0
1795572408.559	rocksdb.block.cache.filter.add.redundant COUNT : 0
1795572408.559	rocksdb.block.cache.data.add.redundant COUNT : 0
1795572408.559	rocksdb.block.cache.compression.dict.add.redundant COUNT : 0
1795572408.559	rocksdb.files.marked.trash COUNT : 0
1795572408.559	rocksdb.files.deleted.immediately COUNT : 1927850
1795572408.559	rocksdb.error.handler.bg.errro.count COUNT : 0
1795572408.559	rocksdb.error.handler.bg.io.errro.count COUNT : 0
1795572408.559	rocksdb.error.handler.bg.retryable.io.errro.count COUNT : 0
1795572408.559	rocksdb.error.handler.autoresume.count COUNT : 0
1795572408.559	rocksdb.error.handler.autoresume.retry.total.count COUNT : 0
1795572408.559	rocksdb.error.handler.autoresume.success.count COUNT : 0
1795572408.559	rocksdb.memtable.payload.bytes.at.flush COUNT : 36033050736
1795572408.559	rocksdb.memtable.garbage.bytes.at.flush COUNT : 1808848
1795572408.559	rocksdb.secondary.cache.hits COUNT : 0
1795572408.559	rocksdb.verify_checksum.read.bytes COUNT : 0
1795572408.559	rocksdb.backup.read.bytes COUNT : 0
1795572408.559	rocksdb.backup.write.bytes COUNT : 0
1795572408.559	rocksdb.remote.compact.read.bytes COUNT : 0
1795572408.559	rocksdb.remote.compact.write.bytes COUNT : 0
1795572408.559	rocksdb.hot.file.read.bytes COUNT : 0
1795572408.559	rocksdb.warm.file.read.bytes COUNT : 0
1795572408.559	rocksdb.cold.file.read.bytes COUNT : 0
1795572408.559	rocksdb.hot.file.read.count COUNT : 0
1795572408.559	rocksdb.warm.file.read.count COUNT : 0
1795572408.559	rocksdb.cold.file.read.count COUNT : 0
1795572408.559	rocksdb.last.level.read.bytes COUNT : 0
1795572408.559	rocksdb.last.level.read.count COUNT : 0
1795572408.559	rocksdb.non.last.level.read.bytes COUNT : 878333344532
1795572408.559	rocksdb.non.last.level.read.count COUNT : 216605536
1795572408.559	rocksdb.block.checksum.compute.count COUNT : 212744708
1795572408.559	rocksdb.db.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.db.write.micros P50 : 2092.868987 P95 : 21324.556047 P99 : 73281.507123 P100 : 10423095.000000 COUNT : 34383360 SUM : 183814666471
1795572408.559	rocksdb.compaction.times.micros P50 : 97978.023407 P95 : 288834.933416 P99 : 769854.667445 P100 : 8275468.000000 COUNT : 299516 SUM : 36861830893
1795572408.559	rocksdb.compaction.times.cpu_micros P50 : 96379.851022 P95 : 280842.394822 P99 : 761143.224649 P100 : 8267273.000000 COUNT : 299516 SUM : 36167856171
1795572408.559	rocksdb.subcompaction.setup.times.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.table.sync.micros P50 : 27864.721485 P95 : 282242.063492 P99 : 730159.090909 P100 : 1612069.000000 COUNT : 19930 SUM : 1169784918
1795572408.559	rocksdb.compaction.outfile.sync.micros P50 : 6705.448218 P95 : 13880.496256 P99 : 29856.525936 P100 : 2951904.000000 COUNT : 1874115 SUM : 17676060326
1795572408.559	rocksdb.wal.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.manifest.file.sync.micros P50 : 490.620051 P95 : 13012.575406 P99 : 474093.481276 P100 : 2640498.000000 COUNT : 232176 SUM : 3161722924
1795572408.559	rocksdb.table.open.io.micros P50 : 245.384023 P95 : 454.664113 P99 : 579.461579 P100 : 866574.000000 COUNT : 1930414 SUM : 763492222
1795572408.559	rocksdb.db.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.read.block.compaction.micros P50 : 47.285523 P95 : 132.842688 P99 : 235.393512 P100 : 1849599.000000 COUNT : 208883880 SUM : 16949780525
1795572408.559	rocksdb.read.block.get.micros P50 : 59.884092 P95 : 108.931993 P99 : 216.384467 P100 : 503577.000000 COUNT : 1930414 SUM : 143483598
1795572408.559	rocksdb.write.raw.block.micros P50 : 0.545094 P95 : 1.708219 P99 : 43.106654 P100 : 2233296.000000 COUNT : 215258904 SUM : 445625381
1795572408.559	rocksdb.l0.slowdown.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.memtable.compaction.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.num.files.stall.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.hard.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.soft.rate.limit.delay.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.numfiles.in.singlecompaction P50 : 5.853069 P95 : 9.586223 P99 : 9.926165 P100 : 50.000000 COUNT : 300296 SUM : 1888722
1795572408.559	rocksdb.db.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.db.write.stall P50 : 0.771374 P95 : 4356.006555 P99 : 19059.958460 P100 : 10419242.000000 COUNT : 25213564 SUM : 39022674699
1795572408.559	rocksdb.sst.read.micros P50 : 46.626560 P95 : 129.393975 P99 : 231.411106 P100 : 1848739.000000 COUNT : 216605536 SUM : 17314893749
1795572408.559	rocksdb.num.subcompactions.scheduled P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.bytes.per.read P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.bytes.per.write P50 : 1134.221434 P95 : 3659.229584 P99 : 4188.000000 P100 : 4188.000000 COUNT : 25235085 SUM : 36199048860
1795572408.559	rocksdb.bytes.per.multiget P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.bytes.compressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.bytes.decompressed P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.compression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.decompression.times.nanos P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.read.num.merge_operands P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.key.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.value.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.get.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.multiget.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.seek.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.next.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.prev.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.blob.file.write.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.blob.file.read.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.blob.file.sync.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.gc.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.compression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.blobdb.decompression.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.db.flush.micros P50 : 49972.774781 P95 : 332839.563863 P99 : 750751.956522 P100 : 5395505.000000 COUNT : 19929 SUM : 1671445538
1795572408.559	rocksdb.sst.batch.size P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.num.index.and.filter.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.num.data.blocks.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.num.sst.read.per.level P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.error.handler.autoresume.retry.count P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.async.read.bytes P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.poll.wait.micros P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 0 SUM : 0
1795572408.559	rocksdb.prefetched.bytes.discarded P50 : 0.000000 P95 : 0.000000 P99 : 0.000000 P100 : 0.000000 COUNT : 1887942 SUM : 0
1795572408.559	
