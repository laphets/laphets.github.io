(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{521:function(n,t,e){"use strict";e.r(t);var a=e(1),i=Object(a.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"引子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引子","aria-hidden":"true"}},[n._v("#")]),n._v(" 引子")]),n._v(" "),e("p",[n._v("这套题目是我在上个星期五期中考以后做的，整体难度还行，其中A题是递推，C题是Hash，D题则是简单的模拟，但从难度来讲也都不算很大，另外我们也可以看出题目难度并不一定是按顺序递增的（好吧，其实我只看出了这一点）")]),n._v(" "),e("h2",{attrs:{id:"problem-a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-a","aria-hidden":"true"}},[n._v("#")]),n._v(" Problem A")]),n._v(" "),e("h3",{attrs:{id:"题解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题解","aria-hidden":"true"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),e("p",[n._v("可以发现要使结果相同，则必须为A->B->A，于是在每次加入一个新数i时，它可以自己和自己配对，这样有F[i-1]种情况，或者和i-1个数进行配对，这样有$(i-1)*F[i-2]$种情况。")]),n._v(" "),e("h3",{attrs:{id:"代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#include<iostream>\n#include<cstdio>\nusing namespace std;\ntypedef long long LL;\nconst int maxn=2000000+10;\nconst LL prime=1000000007;\nLL T,n,casen;\nLL F[maxn];\nvoid solve()\n{\n    F[1]=1;\n    F[2]=2;\n    for(int i=3;i<=maxn-1;i++)\n    {\n        F[i]=(F[i-1]+(i-1)*F[i-2])%prime;\n        if(F[i]<0)\n            F[i]+=prime;\n    }\n}\nint main()\n{\n//    freopen("1.sb","r",stdin);\n    solve();\n    scanf("%I64d",&T);\n    while(T--)\n    {\n        casen++;\n        scanf("%d",&n);\n        printf("Case #%I64d:\\n%I64d\\n",casen,F[n]);\n    }\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"problem-b"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-b","aria-hidden":"true"}},[n._v("#")]),n._v(" Problem B")]),n._v(" "),e("p",[n._v("看着烦，然后就没做….")]),n._v(" "),e("h2",{attrs:{id:"problem-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-c","aria-hidden":"true"}},[n._v("#")]),n._v(" Problem C")]),n._v(" "),e("h3",{attrs:{id:"题解-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题解-2","aria-hidden":"true"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),e("p",[n._v("把字符串处理一下取出数来，进行&操作，再hash，insert到set里去即可，较裸。")]),n._v(" "),e("h3",{attrs:{id:"代码-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码-2","aria-hidden":"true"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#include<iostream>\n#include<cstdio>\n#include<string>\n#include<vector>\n#include<cstring>\n#include<set>\nusing namespace std;\ntypedef long long LL;\nconst int maxn=1000+10;\nstring s;\nvector<int>G1[maxn],G2[maxn];\nset<LL>D;\nint T,n,m,casen=0;\nchar ch[100];\nLL x;\n\nint main()\n{\n//    freopen("1.sb","r",stdin);\n    scanf("%d",&T);\n    while(T--)\n    {\n        casen++;\n        printf("Case #%d:\\n",casen);\n        scanf("%d%d",&n,&m);\n        for(int i=1;i<=n;i++)\n            G1[i].clear();\n        for(int i=1;i<=m;i++)\n            G2[i].clear();\n        for(int k=1;k<=n;k++)\n        {\n            scanf("%s",&ch);\n            //printf("%s\\n",ch); \n            int len=strlen(ch);\n            x=0;\n            ch[len]=\'.\';\n            //printf("%s\\n",ch);\n            for(int i=0;i<=len;i++)\n            {\n                if(ch[i]!=\'.\')\n                {\n                    x*=10;\n                    x+=ch[i]-\'0\';    \n                }\n                else\n                {\n                    G1[k].push_back(x);\n                    //cout<<x<<endl;\n                    x=0;\n                }\n            }\n        }\n        for(int k=1;k<=m;k++)\n        {\n            scanf("%s",&ch);\n            int len=strlen(ch);\n            x=0;\n            ch[len]=\'.\';\n            for(int i=0;i<=len;i++)\n            {\n                if(ch[i]!=\'.\')\n                {\n                    x*=10;\n                    x+=ch[i]-\'0\';\n                }\n                else\n                {\n                    G2[k].push_back(x);\n                    x=0;\n                }\n            }\n        }\n//        cout<<"-----"<<endl;\n//        for(int i=1;i<=n;i++)\n//        {\n//            for(int k=0;k<4;k++)\n//            {\n//                cout<<G1[i][k]<<\' \';\n//            }\n//            cout<<endl;\n//        }\n//        cout<<"-----"<<endl;\n//        for(int i=1;i<=m;i++)\n//        {\n//            for(int k=0;k<4;k++)\n//            {\n//                cout<<G2[i][k]<<\' \';\n//            }\n//            cout<<endl;\n//        }\n//        cout<<"-----"<<endl;\n        \n        for(int i=1;i<=m;i++)\n        {\n            D.clear();\n            for(int j=1;j<=n;j++)\n            {\n                x=1;\n                for(int k=0;k<4;k++)\n                {\n                    LL cur=(G2[i][k]&G1[j][k]);\n                    //cout<<cur<<endl;\n                    x*=1000;\n                    x+=cur;\n                }\n                D.insert(x);\n                //cout<<x<<endl;\n            }\n            //for(int i=1;i<=\n            printf("%d\\n",D.size());\n            \n        }\n    }\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"problem-d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-d","aria-hidden":"true"}},[n._v("#")]),n._v(" Problem D")]),n._v(" "),e("h3",{attrs:{id:"题解-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题解-3","aria-hidden":"true"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),e("p",[n._v("Hint里写的很清楚，只要直径小于等于对角线长度即可。")]),n._v(" "),e("h3",{attrs:{id:"代码-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码-3","aria-hidden":"true"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#include<iostream>\n#include<cstdio>\n#include<cmath>\nusing namespace std;\n#define Pi 3.1415926\nconst int maxn=1000+10;\nint T,n,casen;\ndouble a,r;\nint main()\n{\n//    freopen("1.sb","r",stdin);\n    scanf("%d",&T);\n    while(T--)\n    {\n        casen++;\n        printf("Case #%d:\\n",casen);\n        scanf("%d%lf%lf",&n,&a,&r);\n        double R=a/2/tan(Pi/n);\n        if(R>=r)\n            printf("Give me a kiss!\\n");\n        else\n            printf("I want to kiss you!\\n");\n    }\n}\n')])])])])},[],!1,null,null,null);t.default=i.exports}}]);