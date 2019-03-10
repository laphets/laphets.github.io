---
title: CI控制器

date: 2017-10-15 21:57:00

tags: PHP

---

## 文件位置

*application/controllers/* 目录

文件名必须是大写字母开头，如：'Blog.php' 

类名必须以大写字母开头

## URL

example.com/index.php/class/method/parameter1/parameter2

## Index method

index方法总是在method及后面为空时使用，默认调用index方法

## 默认控制器

CI可以定义一个默认控制器，当URL没有分段参数时加载

```php
$route['default_controller'] = 'Blog';
```

这样当直接访问index.php时会直接跳转到index.php/blog

## 重映射方法

如果你的控制包含一个 _remap() 方法，那么无论 URI 中包含什么参数时都会调用该方法。 它允许你定义你自己的路由规则，重写默认的使用 URI 中的分段来决定调用哪个方法这种行为

## [处理输出](http://codeigniter.org.cn/user_guide/general/controllers.html#id20) ？

## 私有方法

将方法声明为private或者protected，就不能够再被URL访问

## 将控制器放入子目录

例如存在以下控制器

```php
application/controllers/products/Shoes.php
```

那么你需要这样访问

```php
example.com/index.php/products/shoes/method/123
```

## 构造函数

如果打算使用构造函数，那么需要手动继承父类的构造函数，也即将下面这段话加入到子类的构造函数中去

```php
parent::__construct();
```

## 注意一个逻辑

如果加了两个参数，那么在URL中必须包含，否则会报错

如果没加参数，再加其他东西，那么是没有问题的

