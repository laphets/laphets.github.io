---
title: MySQL Details
date: 2017-10-03 10:50:00
tags: PHP
---

## 概念区分

数据库 vs 数据表

数据表包含于数据库

## 连接MySQL服务器

- **-u : **所要登录的用户名;
- **-p : **告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。

```bash
sudo /Applications/MAMP/Library/bin/mysql -u root -p
```

## 检测MySQL服务器是否启动

```bash
ps -ef | grep mysqld
```

## 管理MySQL的命令

### use 数据库名

选择要操作的Mysql数据库，使用该命令后所有Mysql命令都只针对该数据库。

```mysql
mysql> use mysql;
Database changed
```

### show databases

列出 MySQL 数据库管理系统的数据库列表。

```mysql
mysql> show databases
```

### show tables

显示指定数据库的所有表，使用前需要use指定的数据库

```mysql
mysql> show tables;
+---------------------------+
| Tables_in_mysql           |
+---------------------------+
| columns_priv              |
| db                        |
| event                     |
| func                      |
| general_log               |
| help_category             |
| help_keyword              |
| help_relation             |
| help_topic                |
| innodb_index_stats        |
| innodb_table_stats        |
| ndb_binlog_index          |
| plugin                    |
| proc                      |
| procs_priv                |
| proxies_priv              |
| servers                   |
| slave_master_info         |
| slave_relay_log_info      |
| slave_worker_info         |
| slow_log                  |
| tables_priv               |
| time_zone                 |
| time_zone_leap_second     |
| time_zone_name            |
| time_zone_transition      |
| time_zone_transition_type |
| user                      |
+---------------------------+
28 rows in set (0.01 sec)
```

### show columns from 数据表

显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息。

```mysql
mysql> show columns from plugin;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(64)  | NO   | PRI |         |       |
| dl    | varchar(128) | NO   |     |         |       |
+-------+--------------+------+-----+---------+-------+
2 rows in set (0.01 sec)
```

### SHOW INDEX FROM 数据表

显示数据表的详细索引信息，包括PRIMARY KEY（主键）。

### 查询数据表所有数据

```mysql
select * from Users;
```

## Insert

insert [into] 表名 [(列名1, 列名2, 列名3, ...)] values (值1, 值2, 值3, ...);

```mysql
insert into students (name, password, age) values("laphets", "123456", 18);
```

## Select(query)

select 列名称 from 表名称 [查询条件];

```mysql
select userName,passWord from Users;
```

### select All

```
select * from Users;
```

## Where

```mysql
select * from Users where info='dad' or com='233'
```

## Update

update 表名称 set 列名称=新值 where 更新条件;

```
update Users set userName='new',passWord='123456' where info='dad' and com='123';
```

```mysql
update Users set id=id+1;
```

## Delete

delete from 表名称 where 删除条件;

