---
title: Hexo的简易部署
date: 2015-10-18 17:55:26
tags: html
categories: 理性
---
# Hexo的简易部署
> 由于机房电脑重启自动还原，每次都得重新部署一次，因此来写篇文章谈谈Hexo的简易部署方法

## 首先在电脑中装好**git**和**node.js**

## 接着在U盘的Hexo目录打开git命令行，输入以下命令

### 全局安装Hexo
```
npm install hexo -g
```
### 安装必要组件
```
npm install
```
## 接着就是在电脑上生成**SSHkey**了
### 设置git的user name和email：
```bash
git config --global user.name "laphets"
```
```
git config --global user.email "768066323@qq.com"
```
### 检查目录是否存在
```bash
ls -al ~/.ssh
```
### 生成**SSHkey**
```bash
ssh-keygen -t rsa -b 4096 -C "768066323@qq.com"
```
### 在GitHub上加入SSHkey

### 检测是否成功连接到GitHub 
```bash
ssh -T git@github.com
```
