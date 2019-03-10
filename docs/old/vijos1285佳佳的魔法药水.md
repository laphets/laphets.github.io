---
title: vijos1285 佳佳的魔法药水
date: 2015-11-02 17:45:49
tags: 图论
categories: 理性
---
## 题目大意
给出n中个药水的价格，其中只有可能A+B合成C，叫你求出合成0号药水的最少花费和方案数
## 解题过程
考虑图论模型，即如果A和B能转化成C，那么便在A.B和C中连一条边，然后就直接跑dijkstra，每次取出最小的花费val[i]去更新其他药水的花费，当然这里的其他药水必须是已经更新过了的，至于方案数的话乘法原理一用就跑出来了.
## 总结
所谓的最短路，并不一定只有在有实际的“路"的题目中才用得到，关键是把题目转化为图论模型，把更新条件转化为”路“。此题没有对dijkstra算法贪心的精髓理解深刻是难以转化为图论模型的。
## 代码
```c++
#include<iostream>
#include<cstdio>
using namespace std;
const int maxn=1000+10;
const int INF=0x7f7f7f;
int n,tot[maxn],val[maxn],a[maxn][maxn];
int x,y,z;
bool v[maxn];
int main()
{
//	freopen("1.sb","r",stdin);
	scanf("%d",&n);
	for(int i=0;i<n;i++)
		scanf("%d",&val[i]);
	for(int i=0;i<n;i++)
		for(int j=0;j<n;j++)
			a[i][j]=n+1;
	for(int i=0;i<n;i++)
		tot[i]=1;
	while(cin>>x>>y>>z)
		a[x][y]=a[y][x]=z;
	for(int i=0;i<n;i++)
	{
		int minn=INF,k=0;
		for(int j=0;j<n;j++)
			if(!v[j]&&val[j]<minn)
			{
				minn=val[j];
				k=j;
			}
		if(minn==INF)
			break;
		v[k]=true;
		for(int j=0;j<n;j++)
			if(v[j]&&a[k][j]<n+1)
			{
				if(val[a[k][j]]>val[k]+val[j])
				{
					val[a[k][j]]=val[k]+val[j];
					tot[a[k][j]]=tot[k]*tot[j];
				}
				else if(val[a[k][j]]==val[k]+val[j])
					tot[a[k][j]]+=tot[k]*tot[j];		
			}

	}
	printf("%d %d",val[0],tot[0]);
	return 0;
}
```
