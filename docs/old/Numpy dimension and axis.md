---
title: Numpy dimension and axis
date: 2017-12-08 12:53:07
categories: 理性
---

In numpy `array`s, dimensionality refers to the number of `axes` needed to index it, not the dimensionality of any geometrical space. For example, you can describe the locations of points in 3D space with a 2D array:

```
array([[0, 0, 0],
       [1, 2, 3],
       [2, 2, 2],
       [9, 9, 9]])
```

Which has `shape` of `(4, 3)` and dimension `2`. But it can describe 3D space because the length of each row (`axis` 1) is three, so each row can be the x, y, and z component of a point's location. The length of `axis` 0 indicates the number of points (here, 4). However, that is more of an application to the math that the code is describing, not an attribute of the array itself. In mathematics, the dimension of a vector would be its length (e.g., x, y, and z components of a 3d vector), but in numpy, any "vector" is really just considered a 1d array of varying length. The array doesn't care what the dimension of the space (if any) being described is.

You can play around with this, and see the number of dimensions and shape of an array like so:

```
In [262]: a = np.arange(9)

In [263]: a
Out[263]: array([0, 1, 2, 3, 4, 5, 6, 7, 8])

In [264]: a.ndim    # number of dimensions
Out[264]: 1

In [265]: a.shape
Out[265]: (9,)

In [266]: b = np.array([[0,0,0],[1,2,3],[2,2,2],[9,9,9]])

In [267]: b
Out[267]: 
array([[0, 0, 0],
       [1, 2, 3],
       [2, 2, 2],
       [9, 9, 9]])

In [268]: b.ndim
Out[268]: 2

In [269]: b.shape
Out[269]: (4, 3)
```

Arrays can have many dimensions, but they become hard to visualize above two or three:

```
In [276]: c = np.random.rand(2,2,3,4)

In [277]: c
Out[277]: 
array([[[[ 0.33018579,  0.98074944,  0.25744133,  0.62154557],
         [ 0.70959511,  0.01784769,  0.01955593,  0.30062579],
         [ 0.83634557,  0.94636324,  0.88823617,  0.8997527 ]],

        [[ 0.4020885 ,  0.94229555,  0.309992  ,  0.7237458 ],
         [ 0.45036185,  0.51943908,  0.23432001,  0.05226692],
         [ 0.03170345,  0.91317231,  0.11720796,  0.31895275]]],


       [[[ 0.47801989,  0.02922993,  0.12118226,  0.94488471],
         [ 0.65439109,  0.77199972,  0.67024853,  0.27761443],
         [ 0.31602327,  0.42678546,  0.98878701,  0.46164756]],

        [[ 0.31585844,  0.80167337,  0.17401188,  0.61161196],
         [ 0.74908902,  0.45300247,  0.68023488,  0.79672751],
         [ 0.23597218,  0.78416727,  0.56036792,  0.55973686]]]])

In [278]: c.ndim
Out[278]: 4

In [279]: c.shape
Out[279]: (2, 2, 3, 4)
```

## Axis

The easiest way is with an example:

```
In [8]: x = np.array([[1, 2, 3], [4,5,6],[7,8,9]], np.int32)

In [9]: x
Out[9]: 
array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]], dtype=int32)

In [10]: x.sum(axis=0)  # sum the columns [1,4,7] = 12, [2,5,8] = 15 [3,6,9] = 18  
Out[10]: array([12, 15, 18])

In [11]: x.sum(axis=1)    # sum the rows [1,2,3] = 6, [4,5,6] = 15 [7,8,9] = 24
Out[11]: array([ 6, 15, 24])
```

*axis 0* are the *columns* and *axis 1* are the *rows*.

axis0 纵轴 比如

array([[1, 2, 3],

​     	   [4, 5, 6],

   	   [7, 8, 9]], dtype=int32)

sum的话就是(12,15,18) 每一个纵求一次和 总共有三个纵方向的向量