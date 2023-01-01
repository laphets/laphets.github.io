(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{523:function(n,t,e){"use strict";e.r(t);var i=e(1),r=Object(i.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"引子-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引子-1","aria-hidden":"true"}},[n._v("#")]),n._v(" 引子-1")]),n._v(" "),e("p",[n._v("这套题目从今天中午开始打，到刚刚为止A掉了前4道题，从整体来说难度稍有提高，出现了一些数据结构的题（虽然是裸的），以及一些需要思维量的题。其中A题用类似于前缀和的思想搞，B题直接模拟做，C题是Trie的模板题，D题则也是模拟，但其中可能也要用到一些Hash的东西吧。")]),n._v(" "),e("h2",{attrs:{id:"引子-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引子-2","aria-hidden":"true"}},[n._v("#")]),n._v(" 引子-2")]),n._v(" "),e("p",[n._v("不知道百度之星初赛难度怎么样，和这个相比会不会再难很多，反正加油啊啊啊啊！")]),n._v(" "),e("h2",{attrs:{id:"problem-a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-a","aria-hidden":"true"}},[n._v("#")]),n._v(" Problem A")]),n._v(" "),e("h3",{attrs:{id:"题解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题解","aria-hidden":"true"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),e("p",[n._v("前缀积？\n好坑")]),n._v(" "),e("h3",{attrs:{id:"代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#include<iostream>\n#include<cstdio>\n#include<cstring>\nusing namespace std;\nconst int maxn=100000+10;\nconst int prime=9973;\nint n,a,b,calc[maxn],cnt[maxn],pown[maxn];\nchar s[maxn];\ninline int quickpow(int m,int n,int k)\n{\n    int b=1;\n    while(n)\n    {\n        if(n&1)\n            b=(b*m)%k;\n        n>>=1;\n        m=(m*m)%k;\n    }\n    return b;\n}\nvoid make()\n{\n    for(int i=1;i<=prime;i++)\n        pown[i]=quickpow(i,prime-2,prime);\n}\nint main()\n{\n//    freopen("1.sb","r",stdin);\n    make();\n    while(~scanf("%d",&n))\n    {\n        scanf("%s",s+1);\n        //cout<<s<<endl;\n        calc[0]=cnt[0]=1;\n        int len=strlen(s+1);\n        for(int i=1;i<=len;i++)\n        {\n            calc[i]=(calc[i-1]*(int(s[i])-28))%prime;\n            cnt[i]=pown[calc[i]];\n        }\n        for(int i=1;i<=n;i++)\n        {\n            scanf("%d%d",&a,&b);\n            printf("%d\\n",(calc[b]*cnt[a-1])%prime);\n        }\n    }\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"problem-b"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-b","aria-hidden":"true"}},[n._v("#")]),n._v(" Problem B")]),n._v(" "),e("h3",{attrs:{id:"题解-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题解-2","aria-hidden":"true"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),e("p",[n._v("随便推几组下去，发现就是斐波那契嘛，然而n比较大，于是考虑高精度。")]),n._v(" "),e("h3",{attrs:{id:"代码-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码-2","aria-hidden":"true"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#include<iostream>\n#include<cstdio>\nusing namespace std;\ntypedef long long LL;\nconst int maxn=300+10;\nint a[maxn][maxn],len[maxn],N;\nvoid plus1(int x)    //a[x]=a[x-1]+a[x-2]\n{\n    int c=0;\n    len[x]=len[x-1];\n    for(int i=0;i<len[x];i++)\n    {\n        a[x][i]=a[x-1][i]+a[x-2][i]+c;\n        c=a[x][i]/10;\n        a[x][i]%=10;\n    }\n    if(c>0)\n        a[x][len[x]++]=c;\n}\nvoid make()\n{\n    a[1][0]=1,len[1]=1;\n    a[2][0]=2,len[2]=1;\n    for(int i=3;i<=200;i++)\n        plus1(i);        \n}\nvoid print(int x)\n{\n    for(int i=len[x]-1;i>=0;i--)\n        printf("%d",a[x][i]);\n    printf("\\n");\n}\nint main()\n{\n//    freopen("1.sb","r",stdin);\n    make();\n    while(~scanf("%I64d",&N))\n        print(N);\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"problem-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-c","aria-hidden":"true"}},[n._v("#")]),n._v(" Problem C")]),n._v(" "),e("h3",{attrs:{id:"题解-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题解-3","aria-hidden":"true"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),e("p",[n._v("Trie模板题，注意Delete操作，count也要--，（一开始被坑了…）")]),n._v(" "),e("h3",{attrs:{id:"代码-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码-3","aria-hidden":"true"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#include <stdio.h>\n#include <iostream>\nusing namespace std;\n#define  MAX    26\n\ntypedef struct TrieNode\n{\n    int nCount;  \n    struct TrieNode *next[MAX]; \n} TrieNode;\n\nTrieNode Memory[9000000];\nint allocp = 0;\n\n\nTrieNode * createTrieNode()\n{\n    TrieNode *tmp=&Memory[allocp++];\n    tmp->nCount=1;\n    for (int i=0;i<MAX;i++)\n        tmp->next[i]=NULL;\n    return tmp;\n}\n\nvoid insertTrie(TrieNode **pRoot,char *str)\n{\n    TrieNode *tmp=*pRoot;\n    int i =0,k;\n    \n    while (str[i])\n    {\n        k=str[i]-\'a\'; \n        if (tmp->next[k])\n            tmp->next[k]->nCount++;\n        else\n            tmp->next[k]=createTrieNode();\n        tmp=tmp->next[k];\n        i++; \n    }\n}\n\nint searchTrie(TrieNode *root,char *str)\n{\n    if(root==NULL)\n        return 0;\n    TrieNode *tmp=root;\n    int i=0,k;\n    while(str[i])\n    {\n        k=str[i]-\'a\';\n        if(tmp->next[k])\n        {\n            tmp=tmp->next[k];\n        }\n        else\n            return 0;\n        i++;\n    }\n    return tmp->nCount; \n}\nvoid deleteTrie(TrieNode **root,char *str)\n{\n    if(root==NULL)\n        return;\n    TrieNode *tmp=*root,*p=tmp;\n    int i=0,k,kt;\n    while(str[i])\n    {\n        k=str[i]-\'a\';\n        if(tmp->next[k])\n        {\n            p=tmp;\n            kt=k;\n            tmp=tmp->next[k];\n        }\n        else\n            return;\n        i++;\n    }\n    p->next[kt]=NULL;\n    p->nCount-=tmp->nCount;\n    \n    return;\n}\nint N;\nchar op[50],s[50];\nint main()\n{\n//    freopen("1.sb","r",stdin);\n    TrieNode *Root=createTrieNode();\n    scanf("%d",&N);\n    for(int i=1;i<=N;i++)\n    {\n        scanf("%s %s",op,s);\n        //cout<<op<<\' \'<<s<<endl;\n        if(op[0]==\'i\')        //insert\n            insertTrie(&Root,s);\n        else if(op[0]==\'s\')\n        {\n            if(searchTrie(Root,s))\n                printf("Yes\\n");\n            else\n                printf("No\\n");\n            //printf("%d\\n",searchTrie(Root,s));\n        }\n        else\n            deleteTrie(&Root,s);\n    }\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"problem-d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-d","aria-hidden":"true"}},[n._v("#")]),n._v(" Problem D")]),n._v(" "),e("h3",{attrs:{id:"题解-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题解-4","aria-hidden":"true"}},[n._v("#")]),n._v(" 题解")]),n._v(" "),e("p",[n._v("感觉最裸的一题了，直接把读进来的串排序，然后map++ 即可")]),n._v(" "),e("h3",{attrs:{id:"代码-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码-4","aria-hidden":"true"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#include<iostream>\n#include<cstdio>\n#include<cstring>\n#include<map>\n#include<vector>\n#include<algorithm>\nusing namespace std;\nconst int maxn=100000;\nmap<string,int>cnt;\nint N;\nchar ch[50];\nstring s;\ninline bool my_cmp(char a,char b)\n{\n    return a<b;\n}\nint main()\n{\n//    freopen("1.sb","r",stdin);\n    scanf("%d",&N);\n    for(int i=1;i<=N;i++)\n    {\n        scanf("%s",ch);\n        int len=strlen(ch);\n        sort(ch,ch+len,my_cmp);\n        s=ch;\n        printf("%d\\n",cnt[s]++);\n    }\n}\n')])])])])},[],!1,null,null,null);t.default=r.exports}}]);