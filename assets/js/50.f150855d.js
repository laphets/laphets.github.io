(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{434:function(t,a,s){"use strict";s.r(a);var r=s(1),e=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视图","aria-hidden":"true"}},[t._v("#")]),t._v(" 视图")]),t._v(" "),s("p",[t._v("简单来说，一个视图其实就是一个 Web 页面，或者页面的一部分，像页头、页脚、侧边栏等。 实际上，视图可以很灵活的嵌在另一个视图里，然后这个视图再嵌在另一个视图里，等等， 如果你想使用这种层次结构的话，可以这样做。")]),t._v(" "),s("p",[t._v("视图不是直接被调用的，它必须通过 "),s("a",{attrs:{href:"http://codeigniter.org.cn/user_guide/general/controllers.html",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("控制器")]),s("OutboundLink")],1),t._v(" 来加载。在 MVC 框架里， 控制器扮演着类似于交警的角色，它专门负责读取特定的视图。如果你还没有读过 "),s("a",{attrs:{href:"http://codeigniter.org.cn/user_guide/general/controllers.html",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("控制器")]),s("OutboundLink")],1),t._v(" 页面，你应该先看下这个。")]),t._v(" "),s("h2",{attrs:{id:"创建视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建视图","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建视图")]),t._v(" "),s("p",[t._v("就是一个HTML页面")]),t._v(" "),s("p",[t._v("保存在 application/view 目录下")]),t._v(" "),s("h2",{attrs:{id:"加载视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载视图","aria-hidden":"true"}},[t._v("#")]),t._v(" 加载视图")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注解","aria-hidden":"true"}},[t._v("#")]),t._v(" 注解")]),t._v(" "),s("p",[t._v("文件的扩展名 .php 可以省略，除非你使用了其他的扩展名。")]),t._v(" "),s("h2",{attrs:{id:"在子目录中存储视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在子目录中存储视图","aria-hidden":"true"}},[t._v("#")]),t._v(" 在子目录中存储视图")]),t._v(" "),s("p",[t._v("可以将视图文件置于view的子目录中，采用如下方式引入")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'directory_name/file_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"向视图添加动态数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向视图添加动态数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 向视图添加动态数据")]),t._v(" "),s("p",[t._v("通过视图加载方法的第二个参数可以从控制器中动态的向视图传入数据， 这个参数可以是一个 "),s("strong",[t._v("数组")]),t._v(" 或者一个 "),s("strong",[t._v("对象")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'My Title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'heading'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'My Heading'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'message'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'My Message'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'blogview'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("也可以使用对象")]),t._v(" "),s("p",[t._v("即考虑将所有数据压缩到$data数组中去，例如data['title'],接着在view中可以直接通过title的方式进行访问")]),t._v(" "),s("h2",{attrs:{id:"还可以使用foreach进行循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#还可以使用foreach进行循环","aria-hidden":"true"}},[t._v("#")]),t._v(" 还可以使用foreach进行循环")]),t._v(" "),s("h2",{attrs:{id:"将视图作为数据访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将视图作为数据访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 将视图作为数据访问")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'myfile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);