---
title: PHP Basic Details

date: 2017-09-27 22:35:00

tags: PHP

---

双引号可以直接$变量名 dang'ying'hao

## 变量

- 变量以 $ 符号开始，后面跟着变量的名称
- PHP是一门弱类型语言

### **Assigning by Reference**

PHP (from PHP4) offers another way to assign values to variables: assign by reference. This means that the new variable simply points the original variable. Changes to the new variable affect the original, and vice a verse.

**Using '&' to reference**

```php
<?php   
$foo='bob';  
$bar=&$foo;  
$bar="my $bar";  
echo $bar;  
echo '<br />';  
echo $foo;  
?> 
```

### 变量作用域

- local
- global
- static
- parameter

### 函数内调用全局变量

可以采用global的方式（重新定义？）

```php
$x=1;
function work()
{
  //echo $x;
  global $x;
  echo $x;
}
```

或者，PHP 将所有全局变量存储在一个名为 $GLOBALS[*index*] 的数组中。 *index* 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量。

```php
function work()
{
    echo $GLOBALS['x'];
 	echo $GLOBALS['y'];
}
```

### 而在函数内定义的变量均为局部变量(local)

### Static作用域(?)

当一个函数结束后，函数内定义的变量将会被删除，而使用了static，则可以使之不被内存回收。

```php
function Work()
{
    static $x=0;
    echo $x;
    $x++;
}
```

## Print&Echo

### echo

注意输出的均为HTML的标签形式

```php
function Work()
{
    global $txt1,$txt2,$cars;
    echo "<h1>HelloWorld</h1>";
    echo "Hello<br>";
    echo "Third<br>";
    echo "$txt2,$txt1,{$cars[0]}";
}
```

注意:变量可以直接在引号内输出，当在引号外输出时，采用comma连接

### print

只能够输出一个字符串，即without comma

## 数据类型

String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）

### Boolean

```php
$x=true;
$y=false;
```

### Array

```php
$cars=array("1","2","3");
cars[0]
```

### Null

NULL 值表示变量没有值。NULL 是数据类型为 NULL 的值。NULL 值指明一个变量是否为空值。 同样可用于数据空值和NULL值的区别。可以通过设置变量值为 NULL 来清空变量数据

## 常量

使用define定义一个常量（全局）

```php
define("Name", "Laphets");	//区分大小写
define("Name", "Laphets", true);	//不区分大小写
```

## 字符串

### 并置运算符(? differ from ',')

并置运算符 (.) 用于把两个字符串值连接起来。

```php
<?php 
$txt1="Hello world!"; 
$txt2="What a nice day!"; 
echo $txt1 . " " . $txt2; 
?>
```

### 获取字符串长度

strlen() 函数返回字符串的长度（字符数）

```php
$str[strlen($str)-1]；
```

## 查找子串

strpos() 函数用于在字符串内查找一个字符或一段指定的文本。

如果在字符串中找到匹配，该函数会返回第一个匹配的字符位置。如果未找到匹配，则返回 FALSE。

```php
<?php
$str="Hello";
echo strpos($str,"ll1o");
?>
```

## 运算符

- -x按位取反
- a.b 并置 连接两个字符串
- 区分==和===  !=和!==

```php
$x=1;
$y="1";
var_dump($x==$y);
var_dump($x===$y);
```

- 与&&
- 或||
- 非!
- 异或xor

### 数组运算符

| 运算符     | 名称   | 描述                                    |
| ------- | ---- | ------------------------------------- |
| x + y   | 集合   | x 和 y 的集合                             |
| x == y  | 相等   | 如果 x 和 y 具有相同的键/值对，则返回 true           |
| x === y | 恒等   | 如果 x 和 y 具有相同的键/值对，且顺序相同类型相同，则返回 true |
| x != y  | 不相等  | 如果 x 不等于 y，则返回 true                   |
| x <> y  | 不相等  | 如果 x 不等于 y，则返回 true                   |
| x !== y | 不恒等  | 如果 x 不等于 y，则返回 true                   |

### 三目运算符

```php
(expr1) ? (expr2) : (expr3) 
```

和C++类似，当expr1为true时，为expr2，else为expr3

### 组合比较符(PHP7新特性)

```php
echo 1<=>2;
echo 2<=>1;
echo 1<=>1;
```

小于是-1，等于是0，大于是1

## If语句

和C++类似，if else elseif

## Switch

不再赘述

## 数组

### 创建数组

```php
array();
```

### 数值数组

带有数字 ID 键的数组，即可以通过数值的index访问到元素

```php
$car=array("a","b","c");
$car[0];
```

#### 获取数组长度

count() 函数用于返回数组的长度（元素的数量），相当于C++ vector的size()

```php
$cars=array(1,2,3);
echo count($cars);
```

遍历数组

```php
for($i=0;$i<count($cars);$i++)
{
	echo $cars[$i]."<br>";
}
```

### 关联数组

带有指定的键（分配）的数组，每个键关联一个值，相当于C++的map

```php
$cars=array("a"=>"1","b"=>"2","c"=>"3");
echo $cars['b'];
```

#### 遍历数组

使用foreach进行遍历，其中注意x=>x_value，其中x代表键值，x_value代表对应的值

```php
$cars=array("a"=>"1","b"=>"2","c"=>"3");
foreach ($cars as $x=>$x_value)
{
    echo "Key ".$x."  Value  ".$x_value;
    echo "<br>";
}
```

**Foreach**方法

Foreach提供了遍历数组的简单方式，仅能应用于遍历数组与对象

```php
foreach (array_expression as $value)
	statement
//or
foreach (array_expression as $key=>$value
	statement
```

## 数组排序

sort()方法，直接对一个数组进行升序排序，rsort()方法，直接对一个数组降序排序。更多则参照[PHP Array 参考手册](http://www.runoob.com/php/php-ref-array.html)

## 超级全局变量

### $GLOBALS

$GLOBALS是PHP的超级全局变量组，在PHP的所有作用域内都可以进行访问；它是一个包含了全部变量的全局组合数组，变量的名字是数组的键值。

```php
$x=1;
$GLOBALS['x']
```

### $_SERVER

$_SERVER是一个包含了header,path,script locations的数组，由Web Sever创建。

| 元素/代码                           | 描述                                       |
| ------------------------------- | ---------------------------------------- |
| $_SERVER['PHP_SELF']            | 当前执行脚本的文件名，与 document root 有关。例如，在地址为 http://example.com/test.php/foo.bar 的脚本中使用 _SERVER['PHP_SELF'] 将得到 /test.php/foo.bar。__FILE__ 常量包含当前(例如包含)文件的完整路径和文件名。 从 PHP 4.3.0 版本开始，如果 PHP 以命令行模式运行，这个变量将包含脚本名。之前的版本该变量不可用。 |
| $_SERVER['GATEWAY_INTERFACE']   | 服务器使用的 CGI 规范的版本；例如，"CGI/1.1"。           |
| $_SERVER['SERVER_ADDR']         | 当前运行脚本所在的服务器的 IP 地址。                     |
| $_SERVER['SERVER_NAME']         | 当前运行脚本所在的服务器的主机名。如果脚本运行于虚拟主机中，该名称是由那个虚拟主机所设置的值决定。(如: www.runoob.com) |
| $_SERVER['SERVER_SOFTWARE']     | 服务器标识字符串，在响应请求时的头信息中给出。 (如：Apache/2.2.24) |
| $_SERVER['SERVER_PROTOCOL']     | 请求页面时通信协议的名称和版本。例如，"HTTP/1.0"。           |
| $_SERVER['REQUEST_METHOD']      | 访问页面使用的请求方法；例如，"GET", "HEAD"，"POST"，"PUT"。 |
| $_SERVER['REQUEST_TIME']        | 请求开始时的时间戳。从 PHP 5.1.0 起可用。 (如：1377687496) |
| $_SERVER['QUERY_STRING']        | query string（查询字符串），如果有的话，通过它进行页面访问。     |
| $_SERVER['HTTP_ACCEPT']         | 当前请求头中 Accept: 项的内容，如果存在的话。              |
| $_SERVER['HTTP_ACCEPT_CHARSET'] | 当前请求头中 Accept-Charset: 项的内容，如果存在的话。例如："iso-8859-1,*,utf-8"。 |
| $_SERVER['HTTP_HOST']           | 当前请求头中 Host: 项的内容，如果存在的话。                |
| $_SERVER['HTTP_REFERER']        | 引导用户代理到当前页的前一页的地址（如果存在）。由 user agent 设置决定。并不是所有的用户代理都会设置该项，有的还提供了修改 HTTP_REFERER 的功能。简言之，该值并不可信。) |
| $_SERVER['HTTPS']               | 如果脚本是通过 HTTPS 协议被访问，则被设为一个非空的值。          |
| $_SERVER['REMOTE_ADDR']         | 浏览当前页面的用户的 IP 地址。                        |
| $_SERVER['REMOTE_HOST']         | 浏览当前页面的用户的主机名。DNS 反向解析不依赖于用户的 REMOTE_ADDR。 |
| $_SERVER['REMOTE_PORT']         | 用户机器上连接到 Web 服务器所使用的端口号。                 |
| $_SERVER['SCRIPT_FILENAME']     | 当前执行脚本的绝对路径。                             |
| $_SERVER['SERVER_ADMIN']        | 该值指明了 Apache 服务器配置文件中的 SERVER_ADMIN 参数。如果脚本运行在一个虚拟主机上，则该值是那个虚拟主机的值。(如：someone@runoob.com) |
| $_SERVER['SERVER_PORT']         | Web 服务器使用的端口。默认值为 "80"。如果使用 SSL 安全连接，则这个值为用户设置的 HTTP 端口。 |
| $_SERVER['SERVER_SIGNATURE']    | 包含了服务器版本和虚拟主机名的字符串。                      |
| $_SERVER['PATH_TRANSLATED']     | 当前脚本所在文件系统（非文档根目录）的基本路径。这是在服务器进行虚拟到真实路径的映像后的结果。 |
| $_SERVER['SCRIPT_NAME']         | 包含当前脚本的路径。这在页面需要指向自己时非常有用。__FILE__ 常量包含当前脚本(例如包含文件)的完整路径和文件名。 |
| $_SERVER['SCRIPT_URI']          | URI 用来指定要访问的页面。例如 "/index.html"。         |

### $_REQUEST

用以收集HTML Form提交的数据

```php+HTML
<html>
    <head>
        <title>Test</title>
    </head>
    <body>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
            Name:<input type="text" name="fname">
            <input type="submit">
        </form>

        <?php
        $name = $_REQUEST['fname'];
        echo $name;
        ?>
    </body>
</html>
```

当点击Submit时，表单将数据发送至action中指定的PHP文件，也即$_SERVER['PHP_SELF']，接着使用_REQUEST来收集数据。

关于name属性：The **name** attribute specifies the **name** of a **form**. The **name** attribute is used to reference elements in a JavaScript, or to reference **form** data after a **form** is submitted.

### $_POST

$_POST用于收集表单数据，需要指定method=“post”.可以收集input字段数据.

**Difference Between _REQUEST and _POST**

_REQUEST contains: _COOKIE, _GET, and _POST variables

> Basically... never use _REQUEST, use _POST for post method forms, _GET for query string and get method forms, and $COOKIE to handle cookies.

### $_GET

$_GET可以收集method="get"的数据，或者收集URL发送的数据

```php+HTML
<html>
    <head>
        <title>Test</title>
    </head>
    <body>
    <?php
    echo "Study ".$_GET['subject']." at ".$_GET['web'];
    ?>
    </body>
</html>
```

```html
http://localhost:63342/Learning/test.php?subject=PHP&web=laphets.com
```

## While循环

### While

```php
$i=1;
while($i<=5)
{
  echo $i."<br>";
  $i++;
}
```

### do…while

至少执行一次

```php
$i=1;
do
{
  $i++;
  echo $i."<br>";

}while($i<=5);
```

## For循环

和C++类似

```php
for($i=1;$i<=10;$i++)
{
	echo $i."<br>";
}
```

### foreach

用于遍历数组

```php
$a=array();
for($i=1;$i<=10;$i++)
{
	$a[$i]=$i;
}
foreach ($a as $key=>$value)
	echo $a[$key]." ".$value."<br>";
```

每进行一次循环，当前数组的key将被赋值到$key变量，数组的值将被赋值给value变量，然后指针进行移动

## 函数

### 创建函数

```php
function functionName()
{
  
}
```

### 参数,返回值

和C++类似

```php
    function get_max($a,$b)
    {
        if($a>$b)
            return $a;
        elseif ($a<$b)
            return $b;
        else
            return $a;
    }
    $x=$_POST['x'];
    $y=$_POST['y'];
    echo get_max($x,$y);
```

## 魔术变量

可以理解为预定义常量，但随着在代码中的位置改变而改变，不区分大小写.

### __LINE__

显示文件中的当前行号

```php+HTML
<html>
    <head>
        <title>Test</title>
    </head>
    <body>
    <?php
    echo __LINE__;
    ?>
    </body>
</html>
```

output

```php
7
```

### __FILE__

文件的完整路径和文件名

```php
<?php
echo '该文件位于 " '  . __FILE__ . ' " ';
?>
```

```php
该文件位于 " /Users/laphets/Code/PHP/Learning/test.php "
```

### 还有FUNCTION,CLASS,METHOD等显示函数名,类名和类的方法名

## 命名空间

### 用途

1. 用户编写的代码与PHP内部的类/函数/常量或第三方类/函数/常量之间的名字冲突。
2. 为很长的标识符名称(通常是为了缓解第一类问题而定义的)创建一个别名（或简短）的名称，提高源代码的可读性。

### Define a Namespace

```php
namespace MyProject1;
```

….