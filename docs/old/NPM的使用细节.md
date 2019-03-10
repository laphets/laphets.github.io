---
title: NPM的使用细节

date: 2017-09-16 19:01:00

tag: Node.js

---

## NPM的安装

一般随带Node.js安装，使用以下命令查看版本号

```bash
npm -v
```

## 安装模块

```bash
npm install <Module Name>
```

## 全局安装与本地安装

```bash
npm install ... -g  #Global
```

全局：直接安装在/usr/local 可以直接在命令行运行

本地：安装包保存在./node_modules内，通过require调用

## Save

之后运行npm install 会自动安装已有模块