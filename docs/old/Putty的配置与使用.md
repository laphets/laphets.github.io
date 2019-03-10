---
title: Putty的配置与使用
date: 2016-09-15 16:44:23
tags: Linux
categories: 理性
---
## 前言
最近开始步入Linux的大坑，根据储兄的建议，用的是CentOS7，部署在我的老爷机上。
其中需要通过我的台式远程到老爷机进行操控，于是便用到了Putty.
## WIndow下配置
这里只需要下载一个putty，并在输入目标机的ip，并用SSH进行连接即可。
获得目标机ip
terminal内使用ifconfig来Get到ip地址
```bash
ifconfig -a
```
## 开启SSH服务
首先检查SSH是否已经安装
```bash
rpm -qa | grep ssh
```
接着，启动SSH服务
```bash
service sshd restart
```
设置为开机启动
```bash
chkconfig sshd on
```