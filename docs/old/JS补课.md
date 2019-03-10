---
title: JS补课
date: 2017-11-11 10:27:31
tags: JS
categories: 理性
---

## ES6

```js
a = [1, 2, 3, 4]
b = { a: 1, b: 2, c: 3 }
for (let [key, value] of a.entries())
{
    console.log(`${key} + ${value}`);
}    
for (let key of Object.keys(b))
{
    console.log(`${key} + ${b[key]}`);
}
```









数组（Array）字面量** 定义一个数组：

```javascript
[40, 100, 1, 5, 25, 10]
```

**对象（Object）字面量** 定义一个对象：

```javascript
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```

**函数（Function）字面量** 定义一个函数：

```javascript
function myFunction(a, b) { return a * b;}
```

**Value = undefined**

在计算机程序中，经常会声明无值的变量。未使用值来声明的变量，其值实际上是 undefined。

在执行过以下语句后，变量 carname 的值将是 undefined：

var carname;

**重新声明 JavaScript 变量**

如果重新声明 JavaScript 变量，该变量的值不会丢失：

在以下两条语句执行后，变量 carname 的值依然是 "Volvo"：

```javascript
var carname="Volvo"; 
var carname;
```

## 访问对象方法

你可以使用以下语法创建对象方法：

*methodName : function() { code lines }*

你可以使用以下语法访问对象方法：

*objectName.methodName()*

通常 fullName() 是作为 person 对象的一个方法， fullName 是作为一个属性。

直接fullName则会输出这个函数内容

```javascript
var person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() 
	{
       return this.firstName + " " + this.lastName;
    }
};
```

## 局部 JavaScript 变量

在 JavaScript 函数内部声明的变量（使用 var）是*局部*变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。

您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。

只要函数运行完毕，本地变量就会被删除。

------

## 全局 JavaScript 变量

在函数外声明的变量是*全局*变量，网页上的所有脚本和函数都能访问它。

------

## JavaScript 变量的生存期

JavaScript 变量的生命期从它们被声明的时间开始。

局部变量会在函数运行以后被删除。

全局变量会在页面关闭后被删除。

------

## 向未声明的 JavaScript 变量分配值

如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。

这条语句：

carname="Volvo";

将声明一个全局变量 carname，即使它在函数内执行。

## HTML 中的全局变量

在 HTML 中, 全局变量是 window 对象: 所有数据变量都属于 window 对象。

## 实例

//此处可使用 window.carName function myFunction() {    carName = "Volvo";}



```javascript
var a = 1
    function work()
    {
        a = 2
        console.log(a)
    }
```

在外面 不管var 还是直接赋值， 都是全局作用域，函数内可以访问到

在函数里面 如果var 那么就是局部，和全局的就不再有关系

如果是直接赋值， 那么就是全局

局部变量在函数执行完毕后销毁。

全局变量在页面关闭后销毁。



## 字符串

## 字符串长度

可以使用内置属性 **length** 来计算字符串的长度：

实例

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

## String方法

| [charAt()](http://www.runoob.com/jsref/jsref-charat.html) | 返回在指定位置的字符。                          |
| ---------------------------------------- | ------------------------------------ |
| [indexOf()](http://www.runoob.com/jsref/jsref-indexof.html) | 返回某个指定的字符串值在字符串中首次出现的位置。             |
| [lastIndexOf()](http://www.runoob.com/jsref/jsref-lastindexof.html) | 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。 |
| [slice()](http://www.runoob.com/jsref/jsref-slice-string.html) | 提取字符串的片断，并在新的字符串中返回被提取的部分。           |
| [split()](http://www.runoob.com/jsref/jsref-split.html) | 把字符串分割为字符串数组。                        |
| [substr()](http://www.runoob.com/jsref/jsref-substr.html) | 从起始索引号提取字符串中指定数目的字符。                 |
| [substring()](http://www.runoob.com/jsref/jsref-substring.html) | 提取字符串中两个指定的索引号之间的字符。                 |

### slice

slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分。

var str="Hello world!";
var n=str.slice(0);

提取所有

与python极其类似

### indexOf

indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。

如果没有找到匹配的字符串则返回 -1。

**注意：** indexOf() 方法区分大小写。

查找字符串 "welcome":

var str="Hello world, welcome to the universe.";
var n=str.indexOf("welcome");

### split

split() 方法用于把一个字符串分割成字符串数组。

把一个字符串分割成字符串数组:

var str="How are you doing today?";
var n=str.split(" ");

*n* 输出一个数组的值:

How,are,you,doing,today?



## 运算符

## 对字符串和数字进行加法运算

两个数字相加，返回数字相加的和，如果数字与字符串相加，返回字符串，如下实例：

## 实例

x=5+5;
y="5"+5;
z="Hello"+5;

*x*,*y*, 和 *z* 输出结果为:

10
55
Hello5

**规则:**如果把数字与字符串相加，结果将成为字符串！



## 逻辑运算符

逻辑运算符用于测定变量或值之间的逻辑。

给定 x=6 以及 y=3，下表解释了逻辑运算符：

| 运算符  | 描述   | 例子                       |
| ---- | ---- | ------------------------ |
| &&   | and  | (x < 10 && y > 1) 为 true |
| \|\| | or   | (x==5 \|\| y==5) 为 false |
| !    | not  | !(x==y) 为 true           |

## 条件运算符

JavaScript 还包含了基于某些条件对变量进行赋值的条件运算符。

### 语法

*variablename*=(*condition*)?*value1*:*value2* 

### 例子

如果变量 age 中的值小于 18，则向变量 voteable 赋值 "年龄太小"，否则赋值 "年龄已达到"。

voteable=(age<18)?"年龄太小":"年龄已达到";

## 循环

## For/In 循环

JavaScript for/in 语句循环遍历对象的属性：

## 实例

var person={fname:"John",lname:"Doe",age:25};  for (x in person)  // x 为属性名{    txt=txt + person[x];}

尝试一下 »

您将在有关 JavaScript 对象的章节学到更多有关 for / in 循环的知识。

```
var x
var nums = [1, 3, 5];
for (x in nums)
{
    document.write(x+ "<br />");
}
```

for in循环不仅可以遍历对象的属性，还可以遍历数组。

### Join

```
arrayObject.join(separator)
```

| 参数        | 描述                               |
| --------- | -------------------------------- |
| separator | 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。 |

x.split('').reverse().join('')





```
<script>{
  
}</script>
```

``

todo.count || 0  防止undefined

