---
title: JavaScript DOM编程艺术
date: 2016-07-11 13:06:09
tags: JavaScript
categories: 理性
---
## 前言

由于登峰杯正好涉及到JavaScript的canvas，因此在答辩前再来突击一下，避免到时候被问倒…

## 何谓DOM？

DOM(Document Object Model)即文档对象模型，简单说来就是一套对文档内容进行抽象和概念化的方法。它由W3C联盟制定，目的是为了解决各个浏览器对JavaScript语法兼容不一致的问题。

## JavaScript语法

### JS引入

简单说来有两种方法：
1.直接插入到HTML里

```html
<script type="text/javascript">
	...
</script>
```
2.HTML引入外部JS文件

```html
<script type="text/javascript" src="1.js"></script>
```
可以把这个语句放到head或者title里，但据说放到HTML的最后会快一些。