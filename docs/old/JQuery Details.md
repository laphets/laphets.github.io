---
title: jQuery Details

date: 2017-09-08 19:08:00

tags: jQuery

---



## 元素选择器

### 基础语法

```javascript
$(selector).action()
```

其中$定义了jQuery

selcetor表示选择符，用以查找和选择HTML元素，可以理解为JS DOM的操作

action()表示执行对元素的操作

### Example

```javascript
$(this).hide() //hide当前元素
$("p").hide()  //hide P 标签
$(".test").hide()  //hide class="test"的元素
$("#test").hide()  //hide id="test"的元素
```

## 文档就绪运行

```javascript
$(docunment).ready(function(){
  //jQuery here
});
```

## 属性选择器

jQuery使用XPath来选择具有特定属性的元素

```javascript
$("href")	//选择所有具有href属性的元素
$("href='#'")	//选取所有href属性为‘#’的元素

```

## 更多选择器

### CSS选择器

```javascript
$("p").css("background-color","red")
```

### this选择器

```javascript
$(this)
```

## 事件处理器

### Example

```javascript
$(docunment).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
```

当点击button即会隐藏p元素

### jQuery事件

- $(document).ready(function)     将函数绑定到文档的就绪事件
- $(selector).click(function)     将函数绑定到元素的点击事件

And More...

## jQuery获取

```javascript
$(selecter).text()     //获取元素的文本内容
$(selector).html()     //获取元素内容(包括标记)
$(selector).val()     //获取输入字段的value
$(selector).attr("href")     //获取属性
```





