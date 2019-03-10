---
title: Hexo文章的密码访问
date: 2016-06-18 21:29:52
tags: 
- html
- JavaScript
---
# 引言
由于最近处于发情期，写了好几篇带春的文章，被xie大氙好好嘲笑了一番
，因此便抖了个机灵，使用JavaScript实现了Hexo文章的密码访问。
# 正文
首先，在Hexo中Markdown语言和html是混用的，因此可以直接在Markdown中直接插入script。
## 方法实现
这里用到了windows对象的alert()方法和prompt()方法。prompt()方法的作用即是
显示一个可提示用户输入的对话框，而其本身的返回值就是你输入的那个字符串。
因此只需要将其与你默认的密码比较一下就好，如果不正确，则直接将当前页面的
loaction属性设为上一个页面即可。
## 代码
```javascript
<script>
	if("233"==prompt("Please input password"))
	{
		alert("Right");
	}
	else
	{
		alert("Wrong");
		location="http://blog.laphets.com";
	}
</script>
```