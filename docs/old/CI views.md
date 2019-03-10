---
title: CI views

date: 2017-10-15 23:33:00

tags: PHP

---

## 视图

简单来说，一个视图其实就是一个 Web 页面，或者页面的一部分，像页头、页脚、侧边栏等。 实际上，视图可以很灵活的嵌在另一个视图里，然后这个视图再嵌在另一个视图里，等等， 如果你想使用这种层次结构的话，可以这样做。

视图不是直接被调用的，它必须通过 [*控制器*](http://codeigniter.org.cn/user_guide/general/controllers.html) 来加载。在 MVC 框架里， 控制器扮演着类似于交警的角色，它专门负责读取特定的视图。如果你还没有读过 [*控制器*](http://codeigniter.org.cn/user_guide/general/controllers.html) 页面，你应该先看下这个。

## 创建视图

就是一个HTML页面

保存在 application/view 目录下

## 加载视图

```php
$this->load->view('name');
```

### 注解

文件的扩展名 .php 可以省略，除非你使用了其他的扩展名。

## 在子目录中存储视图

可以将视图文件置于view的子目录中，采用如下方式引入

```php
$this->load->view('directory_name/file_name');
```

## 向视图添加动态数据

通过视图加载方法的第二个参数可以从控制器中动态的向视图传入数据， 这个参数可以是一个 **数组** 或者一个 **对象**

```php
$data = array(
    'title' => 'My Title',
    'heading' => 'My Heading',
    'message' => 'My Message'
);

$this->load->view('blogview', $data);
```

也可以使用对象

即考虑将所有数据压缩到$data数组中去，例如data['title'],接着在view中可以直接通过title的方式进行访问

## 还可以使用foreach进行循环

## 将视图作为数据访问

```php
$string = $this->load->view('myfile', '', TRUE);
```

