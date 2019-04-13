---
title: Latex
date: 2019-04-13 17:11:23
comments: true
tags: Latex
categories: 感性
---

## Foundamental

### 一级标题 
```latex
\section{Introduction}
```

### 二级标题 
```latex
\subsection{Problem Background}
```

### 三级标题 
```
\subsubsection{This is Third}
```

## 公式

### 行内公式 
```latex
$E=mc^2$
```

### 隔行公式 
```latex
\[ E=mc^2. \]
```

### 带标号公式
```latex
\begin{equation}
	\int ^{2}_{1}\oint^{b}_{a}dxd\theta
\end{equation}
```

### 矩阵
```latex
\[ \begin{pmatrix} a&b\\c&d \end{pmatrix} \quad
\begin{bmatrix} a&b\\c&d \end{bmatrix} \quad
\begin{Bmatrix} a&b\\c&d \end{Bmatrix} \quad
\begin{vmatrix} a&b\\c&d \end{vmatrix} \quad
\begin{Vmatrix} a&b\\c&d \end{Vmatrix} \]
```

### 公式组
align对齐，gather不对齐
```latex
\begin{gather}
a = b+c+d \\
x = y+z
\end{gather}
\begin{align}
a &= b+c+d \\
x &= y+z
\end{align}
```

### 分段函数
```latex
\begin{equation}
	y= \begin{cases}
	-x,\quad x\leq 0 \\
	x,\quad x>0
\end{cases} 
\end{equation}
```

## 图片和表格

### 设置默认路径
```latex
\graphicspath{{figures/}}
```
### 引入图片
```latex
\includegraphics[width = .8\textwidth]{a.jpg}
```

### An example
```latex
\subsection{Figure}
In this section we discuss how the structure can help determine the final loss function. And we show the result in \textbf{Figure \ref{fact}}.

\begin{figure}[!htbp]
\small
\centering
\includegraphics[width = 0.8\textwidth]{1.jpg}
\caption{A typical graph design}
	\label{fact}
\texttt{https://baidu.com}
\end{figure}
```

### tabular
```latex
\begin{tabular}{|l|c|r|}
 \hline
操作系统& 发行版& 编辑器\\
 \hline
Windows & MikTeX & TexMakerX \\
 \hline
Unix/Linux & teTeX & Kile \\
 \hline
Mac OS & MacTeX & TeXShop \\
 \hline
通用& TeX Live & TeXworks \\
 \hline
\end{tabular}
```


### Full table
```latex
\begin{table}[!htbp]
\begin{center}
\caption{The value of geometry size and temperature}
\begin{tabular}{lll}
    \toprule
    Class&Quantity&Value\\
    \midrule
    Size of the bathtub&Length&1.8m\\
    &Width&0.8m\\
    &Depth&0.6m\\
    \midrule
    Size of the human body&Length&0.8m\\
    (consist of two cubiods)&Width&0.2m\\
    \midrule
    Temperature&Human skin&36$^\circ$C\\
    &External (the wall and the air)&20$^\circ$C\\
    &The Water in bathtub&35$^\circ$C (Initial)\\
    \bottomrule
\end{tabular}\label{tb1}
\end{center}
\end{table}
```


## Others

### Citation
```latex
\cite{1}
```

```latex
\bibitem{1}Elisa T. Lee, Oscar T. Survival Analysis in Public Health Research. \emph{Go. College of Public Health}, 1997(18):105-134.
\bibitem{2}Wikipedia: Proportional hazards model. 2017.11.26. \texttt{\\https://en.wikipedia.org/wiki/Proportional\_{}hazards\_{}model}
```

### 枚举列表编号
```latex
For this figure, we can have the following two assumptions:
\begin{itemize}
	\item[*] 1111
	\item 22222
\end{itemize}

Also we have some \textbf{ordered list}:
\begin{enumerate}[\bfseries 1.]
	\item 11
	\item 222
\end{enumerate}
```