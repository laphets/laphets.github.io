---
title: PHP MySQL

date: 2017-10-03 11:45:00

tags: PHP

---

## PHP 连接 MySQL

```php
<?php
$servername = "localhost:8889";
$username = "root";
$password = "root";

// 创建连接
$conn = mysqli_connect($servername, $username, $password);

// 检测连接
if (!$conn) {
    die("连接失败: " . $conn->connect_error);
}
echo "连接成功";
?>
```

面向对象的操作

```php
<?php
$servername = "localhost:8889";
$username = "root";
$password = "root";

// 创建连接
$conn = new mysqli($servername, $username, $password);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
echo "连接成功";
?>
```



```php
$conn->close();
```

