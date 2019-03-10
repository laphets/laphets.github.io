---
title: Wshark
date: 2017-10-08 12:53:07
categories: 理性
---

# Vue.js

## MVVM

Model-View-Viewmodel

## HelloWorld

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>

    <body>
        <!--这是我们的View-->
        <div id="app">
            {{ message }}
        </div>
    </body>
    <script src="js/vue.js"></script>
    <script>
        // 这是我们的Model
        var exampleData = {
            message: 'Hello World!'
        }

        // 创建一个 Vue 实例或 "ViewModel"
        // 它连接 View 与 Model
        new Vue({
            el: '#app',
            data: exampleData
        })
    </script>
</html>
```

### Procedure

1. 定义view
2. 定义model
3. 定义viewmodel(一个vue实例)

在这个示例中，**选项对象**的**el属性**指向View，`el: '#app'`表示该Vue实例将挂载到`<div id="app">...</div>`这个元素；**data属性**指向Model，`data: exampleData`表示我们的Model是exampleData对象。 