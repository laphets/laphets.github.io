(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{413:function(t,a,e){"use strict";e.r(a);var r=e(1),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("前天晚上参加了头条的后端面试，果然被拒了，在这里开个坑回忆一下")]),t._v(" "),e("h2",{attrs:{id:"流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),e("p",[t._v("面试官来的还挺准时，一开始我先自我介绍了一下，然后他问了一系列关于我为啥选择头条、为啥想去北京工作的问题，瞎扯以应付。\n接下来硬核开始：\n首先让我介绍了一下自己认为最有趣的项目，我说了ROP，顺便提到了走了两层负载均衡（一层网关nginx，一层集群上的traefik）。接着他开始问负载均衡如何实现负载均衡，这里不知道我是不是没理解到他的意思，然后就说了一个基于连接数和权重的随机分配请求的机制，但感觉说了半天他也不是很明白我的意思（或许是我表达能力比较差）。说完这个之后他又问我负载均衡如何转发请求，然后依然瞎答。最后在这个问题上又问了如何实现一个代理，然后我用着对envoy仅有的一些理解答了一个master+worker的模式，不过貌似他也不是很满意。\n接下来是送命题，他问我一个连接请求进来之后经过什么流程到达后端实例。我心想这不是贵潮面试必考题吗（误，然后就说了一通，到此为止一切还好，然后送命点来了，DNS是基于啥协议。这个我真不知道，我只感觉好像tcp和udp都有，但感觉tcp场景更多一些，然后就说了tcp，然后他说对还有啥，这时候我还以为他想问一种十分神妙的协议（直接滤了UDP），然后gg\n之后开始问我用没用过mysql，我说当然用过，然后他说那好我们来手写sql。一开始是一个比较简单的建表，我其实大概会写，但感觉没把握，之前也没这种技术面试经历，然后想着还是以稳为重，宁愿说不会也不要出错，然后就说都用orm的，然后跪。。。\n然后问我用没用过redis，我说用过。然后他说如果保证redis集群中每个节点的数据同步。这个我还真没研究过，然后又开始乱扯master和salve，感觉也没答道点子上。\n中间还问过一个我简历里说的用electron做了一个多线程下载器（误，我其实已经忘记了，但实际好像不是多线程，只是做了一个缓冲队列防止监听数太多），然后开始问如何实现上锁。依然没有并发编程的经验，一般都是用单线程(js)或是go这种(大部分数据接口安全+阻塞chan)的模式，所以也没回答上来。\n然后问一个100M进程拆成了一个父进程，一个子进程，问占多少内存。由于没上过os课，于是理所当然跪。\n最后出了一个足够简单的算法题，大概是从一个包含负数的单调数列中找不同元素的个数，要O(n)（一开始一直没理解题意2333），理解题意之后直接出解，大概还算简单。")]),t._v(" "),e("h2",{attrs:{id:"感想"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#感想","aria-hidden":"true"}},[t._v("#")]),t._v(" 感想")]),t._v(" "),e("p",[t._v("由于很多计算机底层课都还没开始上(os, 数据库, 计网, 分布式, 并行计算)，所以很多地方都是一知半解，具体又说不出个所以然，所以感觉自己很菜这个事实依然没有改变，以及ECE真是个电工专业（误），以及以后还是要主动的多接触一下这些玩意儿（想先从c++并行编程入手）。大概就是这样，最近还是太跳了，静下心来好好钻研东西才是出路。")]),t._v(" "),e("h2",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[t._v("#")]),t._v(" Update")]),t._v(" "),e("p",[t._v("准备更新下一惨遇 (直接不招21届而劝退)")])])},[],!1,null,null,null);a.default=s.exports}}]);