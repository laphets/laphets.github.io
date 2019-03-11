(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{174:function(t,n,a){"use strict";a.r(n);var i=a(2),r=Object(i.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一道题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一道题目","aria-hidden":"true"}},[t._v("#")]),t._v(" 一道题目")]),t._v(" "),a("h3",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[t._v("长郡中学校长打算举行建校100周年的晚会。学校的职员是分等级的，也就是说职员之间的上下级关系组成一棵以校长为树根的树。校长要亲自邀请一些职员参见晚会。同时校长亲自到场欢庆这个节日。职员用1～n之间的整数编号，人事处给出了每个职员的搞笑指数。如果一个人和他上司一起参加，那么便可能产生麻烦。为了使晚会的每个参加者都高兴，校长不会同时邀请某个职员和他的顶头上司。\n你的任务是给出一个客人列表，使得客人的搞笑指数之和最大。")]),t._v(" "),a("h3",{attrs:{id:"输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入","aria-hidden":"true"}},[t._v("#")]),t._v(" 输入")]),t._v(" "),a("p",[t._v("第一行一个整数n（1≤n≤6000）。以下n行每行是相应编号职员的搞笑指数，该数的返回是[-128..127]。然后是职员的关系树，每行格式是"),a("code",[t._v("<x> <y>")]),t._v("，意思是第y个职员是第x个职员的顶头上司。输入以0 0结束。")]),t._v(" "),a("h3",{attrs:{id:"输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出","aria-hidden":"true"}},[t._v("#")]),t._v(" 输出")]),t._v(" "),a("p",[t._v("最大的搞笑指数之和。")]),t._v(" "),a("h2",{attrs:{id:"题目分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目分析")]),t._v(" "),a("p",[t._v("表示以前几乎就没接触过这种题目是什么鬼…，然后就开始傻逼bfs，然后就爆了。正解：用f[i][0]表示以i为根的子树，且i一定不取所产生的最大权值，用f[i][1]表示以i为根的子树，且i一定取所产生的最大权值，因此对于f[i][1]，它的子节点一定不能取，对于f[i][0]，它的子节点可以取也可以不取，因此最后的状态转移方程为：$f[i][0]=\\sum\\limits_{j=1}^{childsize}{\\max {f[j][1],f[j][0]}}$.")]),t._v(" "),a("h2",{attrs:{id:"一般解题方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般解题方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 一般解题方法")]),t._v(" "),a("ol",[a("li",[t._v("找出所有根节点并入队")]),t._v(" "),a("li",[t._v("取出队首元素，更新其父亲节点并将其父亲节点入度减1")]),t._v(" "),a("li",[t._v("判断其父亲节点入度是否为0，若是，则入队")]),t._v(" "),a("li",[t._v("重复步骤1")])]),t._v(" "),a("h2",{attrs:{id:"贴个代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贴个代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 贴个代码")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include<iostream>\n#include<cstdio>\nusing namespace std;\nconst int maxn=6000+10;\nint x,y,n,a,b,cnt,f[maxn][2],q[maxn],val[maxn],num[maxn],pre[maxn];\nint main()\n{\n\tfreopen("1.sb","r",stdin);\n\tscanf("%d",&n);\n\tfor(int i=1;i<=n;i++)\n\t\tscanf("%d",&val[i]);\n\twhile(cin>>x>>y&&x!=0)\n\t{\n\t\tpre[x]=y;\n\t\tnum[y]++;\n\t}\n\tfor(int i=1;i<=n;i++)\n\t\tif(num[i]==0)\n\t\t\tq[++cnt]=i;\n\tfor(int k=1;k<=cnt;k++)\n\t{\n\t\ta=q[k];\n\t\tf[a][1]+=val[a];\n\t\tb=pre[a];\n\t\tif(b==0)\n\t\t\tbreak;\n\t\tf[b][1]+=f[a][0];\n\t\tf[b][0]+=max(f[a][0],f[a][1]);\n\t\tnum[b]--;\n\t\tif(!num[b])\n\t\t\tq[++cnt]=b;\n\t}\n\tprintf("%d",f[a][1]);\n\treturn 0;\n}\n')])])])])},[],!1,null,null,null);n.default=r.exports}}]);