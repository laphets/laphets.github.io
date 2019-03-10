---
title: PHP进阶

date: 2017-10-09 19:46:00

tags: PHP

---

## 多维数组

## 日期

### PHP date()函数

PHP date()可以将时间戳格式化为可读性更好的日期和时间

时间戳是一个字符序列，表示一定的事件发生的日期/时间。

```php
echo date("Y.m.d.l.G.i.s");
```

更多的细节可以查看官方文档

## 包含文件

在PHP中可以在服务器执行PHP脚本之前在该文件中插入一个文件的内容

此时可以用到include和require

- require 生成一个致命错误（E_COMPILE_ERROR），在错误发生后脚本会停止执行。
- include 生成一个警告（E_WARNING），在错误发生后脚本会继续执行。

一般情况下使用require以确保程序的安全性和完整性

### Synatx

```php
include "..."
require "..."
```

### Example

引入一个定义变量的包含文件

var.php

```php
<?php
$x=1;
$y=2;
$z=$x+$y;
?>
```

main.php

```php
<?php
require "show.php";
echo $x.$y.$z;
?>
```

或者考虑引入一个menu

```php
<?php
echo "<h1>Menu</h1>"
?>
```

```php+HTML
<html>
<head>
    <title>test</title>
</head>
<body>
    <h1>Origin</h1>
    <?php
    include "show.php";
    ?>
</body>
</html>
```

