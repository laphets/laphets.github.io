---
title: Linux Bash Shell
date: 2016-09-15 17:01:51
tags: Linux
categories: 理性
---
## 切换用户

su +用户名
root 用户  su -


## 管理员运行 

sudo


## 当前用户信息

id


## 修改密码

passwd


## 提示符
普通用户 $
超级用户 #

logout—— exit
laphets@localhost ~  laphets_用户名   localhost 当前目录


## 列出当前目录下文件

ls

## 进入目录
cd

## 删除文件
rm -rf


## 参数方式

-a == --all


## 终止当前命令

Ctrl c


## 后台运行

命令 + &
firefox &


## 管理后台

Jobs


## 暂停进程

Ctrl+z
开始运行 bg
前台运行 fg


## 命令补全 && 命令查找 && 补全文件名

Tab


## 查看执行的命令

history


## 命令重复
!字符  重复前一以该字符开头的命令
!num 重复序号命令
!?abc 包含abc的命令

## 搜索命令
Ctrl+r 

## 重复上一参数
Esc+.

## 通配符
*匹配0个或多个字符