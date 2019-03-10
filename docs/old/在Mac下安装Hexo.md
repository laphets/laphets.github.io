---
title: 在Mac下部署Hexo
date: 2017-07-24 20:14:26
tags: Hexo

categories: 理性
---

## 和windows下部署有何不同？

在windows下我们采用打开git bash的方式进行安装，并且并不需要用到sudo等取得管理员权限的命令。

而在mac下则比较麻烦，我们需要安装许多依赖包，并且在安装过程中会出现某些无厘头的错误。

## 安装步骤

1. 根据Hexo官方的doc，我们首先需要安装Xcode的CommandLine tools.

2. 配置安装源(recommand:淘宝源) 同样可以开SS的全局模式加以解决.

3. (可选)卸载之前安装(失败)的Hexo

   ```
   sudo npm uninstall hexo-cli -g 
   sudo npm uninstall hexo #previous versions
   ```

4. 进行安装

   ```
   sudo npm install hexo-cli -g
   hexo init Blog
   cd Blog
   sudo npm install
   ```

5. 本地部署

   ```c
   sudo hexo s
   ```

6. 配置SSH

   在Mac的配置过程中会遇到一些麻烦，我们大致可以遵循以下步骤

   ```
   git config --global user.name "laphets"
   git config --global user.email "768066323@qq.com"
   ssh-keygen -t rsa -b 4096 -C "768066323@qq.com"
   cat id_rsa.pu
   ssh -T git@git.coding.net
   cd Blog/
   hexo d
   ```

   ​

