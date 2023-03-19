(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{495:function(t,n,a){"use strict";a.r(n);var i=a(1),r=Object(i.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"题目大意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目大意","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目大意")]),t._v(" "),a("p",[t._v("给出n中个药水的价格，其中只有可能A+B合成C，叫你求出合成0号药水的最少花费和方案数")]),t._v(" "),a("h2",{attrs:{id:"解题过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 解题过程")]),t._v(" "),a("p",[t._v("考虑图论模型，即如果A和B能转化成C，那么便在A.B和C中连一条边，然后就直接跑dijkstra，每次取出最小的花费val[i]去更新其他药水的花费，当然这里的其他药水必须是已经更新过了的，至于方案数的话乘法原理一用就跑出来了.")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v('所谓的最短路，并不一定只有在有实际的“路"的题目中才用得到，关键是把题目转化为图论模型，把更新条件转化为”路“。此题没有对dijkstra算法贪心的精髓理解深刻是难以转化为图论模型的。')]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include<iostream>\n#include<cstdio>\nusing namespace std;\nconst int maxn=1000+10;\nconst int INF=0x7f7f7f;\nint n,tot[maxn],val[maxn],a[maxn][maxn];\nint x,y,z;\nbool v[maxn];\nint main()\n{\n//\tfreopen("1.sb","r",stdin);\n\tscanf("%d",&n);\n\tfor(int i=0;i<n;i++)\n\t\tscanf("%d",&val[i]);\n\tfor(int i=0;i<n;i++)\n\t\tfor(int j=0;j<n;j++)\n\t\t\ta[i][j]=n+1;\n\tfor(int i=0;i<n;i++)\n\t\ttot[i]=1;\n\twhile(cin>>x>>y>>z)\n\t\ta[x][y]=a[y][x]=z;\n\tfor(int i=0;i<n;i++)\n\t{\n\t\tint minn=INF,k=0;\n\t\tfor(int j=0;j<n;j++)\n\t\t\tif(!v[j]&&val[j]<minn)\n\t\t\t{\n\t\t\t\tminn=val[j];\n\t\t\t\tk=j;\n\t\t\t}\n\t\tif(minn==INF)\n\t\t\tbreak;\n\t\tv[k]=true;\n\t\tfor(int j=0;j<n;j++)\n\t\t\tif(v[j]&&a[k][j]<n+1)\n\t\t\t{\n\t\t\t\tif(val[a[k][j]]>val[k]+val[j])\n\t\t\t\t{\n\t\t\t\t\tval[a[k][j]]=val[k]+val[j];\n\t\t\t\t\ttot[a[k][j]]=tot[k]*tot[j];\n\t\t\t\t}\n\t\t\t\telse if(val[a[k][j]]==val[k]+val[j])\n\t\t\t\t\ttot[a[k][j]]+=tot[k]*tot[j];\t\t\n\t\t\t}\n\n\t}\n\tprintf("%d %d",val[0],tot[0]);\n\treturn 0;\n}\n')])])])])},[],!1,null,null,null);n.default=r.exports}}]);