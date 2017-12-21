**top**
```
top - 22:46:51 up 258 days, 5 min,  2 users,  load average: 0.00, 0.00, 0.00
Tasks: 122 total,   1 running, 121 sleeping,   0 stopped,   0 zombie
Cpu(s):  6.0%us,  1.0%sy,  0.0%ni, 92.7%id,  0.3%wa,  0.0%hi,  0.0%si,  0.0%st
Mem:    996740k total,   723332k used,   273408k free,     8308k buffers
Swap:  4195320k total,   448524k used,  3746796k free,    52976k cached

   PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND                                                                         
125393 apache    20   0  298m  12m 3696 S  1.7  1.3   4:13.79 php-fpm                                                                          
116658 root      20   0  595m  10m 3760 S  0.3  1.1 273:23.55 searchd                                                                          
     1 root      20   0 19232  732  728 S  0.0  0.1   0:00.74 init                                                                       
```



**free -m -s 3**
```
             total       used       free     shared    buffers     cached
Mem:           973        646        326          0          7         59
-/+ buffers/cache:        579        393
Swap:         4096        474       3622

应以“-/+ buffers/cached”的used和free作为参考
973=646+326（os角度）
973=579+393（程序角度）
646=579+7+59
393=7+59+326
```



**cache buffer区别**
- cpu -> cache(L1 Cache,L2 Cache) -> memory -> disk
- cache => page cache(文件系统) buffer => disk cache(磁盘)



**netstat -apn**
```
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address               Foreign Address             State       PID/Program name   
tcp        0      0 127.0.0.1:9000              0.0.0.0:*                   LISTEN      112915/php-fpm      
tcp        0      0 127.0.0.1:6379              0.0.0.0:*                   LISTEN      16376/redis-server  
tcp        0      0 0.0.0.0:80                  0.0.0.0:*                   LISTEN      1738/nginx          
tcp        0      0 192.168.1.4:80              117.44.188.43:11085         SYN_RECV    -                   
tcp        0      0 127.0.0.1:25                0.0.0.0:*                   LISTEN      71439/master        
tcp        0      0 0.0.0.0:9306                0.0.0.0:*                   LISTEN      116658/searchd      
tcp        0      0 0.0.0.0:443                 0.0.0.0:*                   LISTEN      1738/nginx          
tcp        0      0 0.0.0.0:9312                0.0.0.0:*                   LISTEN      116658/searchd      
tcp        0      0 0.0.0.0:15522               0.0.0.0:*                   LISTEN      71226/sshd          
tcp        0      0 :::3306                     :::*                        LISTEN      101113/mysqld       

```


**lsof**
```
list open file

lsof -i 3306
COMMAND    PID  USER   FD   TYPE    DEVICE SIZE/OFF NODE NAME
sshd     74742  root    7u  IPv4 101081873      0t0  TCP localhost:40054->localhost:mysql (ESTABLISHED)
sshd     74742  root    8u  IPv4 101081876      0t0  TCP localhost:40055->localhost:mysql (ESTABLISHED)
mysqld  101113 mysql   14u  IPv6  67641750      0t0  TCP *:mysql (LISTEN)
mysqld  101113 mysql   22u  IPv6 101081874      0t0  TCP localhost:mysql->localhost:40054 (ESTABLISHED)
mysqld  101113 mysql   64u  IPv6 101081877      0t0  TCP localhost:mysql->localhost:40055 (ESTABLISHED)
```


**df -ha**
```
文件系统	      容量  已用  可用 已用%% 挂载点
/dev/xvda1             36G   17G   17G  50% /
proc                     0     0     0   -  /proc
sysfs                    0     0     0   -  /sys
devpts                   0     0     0   -  /dev/pts
tmpfs                 487M     0  487M   0% /dev/shm
/dev/xvdb1            158G   45G  105G  30% /data
none                     0     0     0   -  /proc/sys/fs/binfmt_misc
```