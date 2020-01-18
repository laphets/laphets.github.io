(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{443:function(n,a,e){"use strict";e.r(a);var t=e(1),s=Object(t.a)({},function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("In numpy "),e("code",[n._v("array")]),n._v("s, dimensionality refers to the number of "),e("code",[n._v("axes")]),n._v(" needed to index it, not the dimensionality of any geometrical space. For example, you can describe the locations of points in 3D space with a 2D array:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("array([[0, 0, 0],\n       [1, 2, 3],\n       [2, 2, 2],\n       [9, 9, 9]])\n")])])]),e("p",[n._v("Which has "),e("code",[n._v("shape")]),n._v(" of "),e("code",[n._v("(4, 3)")]),n._v(" and dimension "),e("code",[n._v("2")]),n._v(". But it can describe 3D space because the length of each row ("),e("code",[n._v("axis")]),n._v(" 1) is three, so each row can be the x, y, and z component of a point's location. The length of "),e("code",[n._v("axis")]),n._v(' 0 indicates the number of points (here, 4). However, that is more of an application to the math that the code is describing, not an attribute of the array itself. In mathematics, the dimension of a vector would be its length (e.g., x, y, and z components of a 3d vector), but in numpy, any "vector" is really just considered a 1d array of varying length. The array doesn\'t care what the dimension of the space (if any) being described is.')]),n._v(" "),e("p",[n._v("You can play around with this, and see the number of dimensions and shape of an array like so:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("In [262]: a = np.arange(9)\n\nIn [263]: a\nOut[263]: array([0, 1, 2, 3, 4, 5, 6, 7, 8])\n\nIn [264]: a.ndim    # number of dimensions\nOut[264]: 1\n\nIn [265]: a.shape\nOut[265]: (9,)\n\nIn [266]: b = np.array([[0,0,0],[1,2,3],[2,2,2],[9,9,9]])\n\nIn [267]: b\nOut[267]: \narray([[0, 0, 0],\n       [1, 2, 3],\n       [2, 2, 2],\n       [9, 9, 9]])\n\nIn [268]: b.ndim\nOut[268]: 2\n\nIn [269]: b.shape\nOut[269]: (4, 3)\n")])])]),e("p",[n._v("Arrays can have many dimensions, but they become hard to visualize above two or three:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("In [276]: c = np.random.rand(2,2,3,4)\n\nIn [277]: c\nOut[277]: \narray([[[[ 0.33018579,  0.98074944,  0.25744133,  0.62154557],\n         [ 0.70959511,  0.01784769,  0.01955593,  0.30062579],\n         [ 0.83634557,  0.94636324,  0.88823617,  0.8997527 ]],\n\n        [[ 0.4020885 ,  0.94229555,  0.309992  ,  0.7237458 ],\n         [ 0.45036185,  0.51943908,  0.23432001,  0.05226692],\n         [ 0.03170345,  0.91317231,  0.11720796,  0.31895275]]],\n\n\n       [[[ 0.47801989,  0.02922993,  0.12118226,  0.94488471],\n         [ 0.65439109,  0.77199972,  0.67024853,  0.27761443],\n         [ 0.31602327,  0.42678546,  0.98878701,  0.46164756]],\n\n        [[ 0.31585844,  0.80167337,  0.17401188,  0.61161196],\n         [ 0.74908902,  0.45300247,  0.68023488,  0.79672751],\n         [ 0.23597218,  0.78416727,  0.56036792,  0.55973686]]]])\n\nIn [278]: c.ndim\nOut[278]: 4\n\nIn [279]: c.shape\nOut[279]: (2, 2, 3, 4)\n")])])]),e("h2",{attrs:{id:"axis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#axis","aria-hidden":"true"}},[n._v("#")]),n._v(" Axis")]),n._v(" "),e("p",[n._v("The easiest way is with an example:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("In [8]: x = np.array([[1, 2, 3], [4,5,6],[7,8,9]], np.int32)\n\nIn [9]: x\nOut[9]: \narray([[1, 2, 3],\n       [4, 5, 6],\n       [7, 8, 9]], dtype=int32)\n\nIn [10]: x.sum(axis=0)  # sum the columns [1,4,7] = 12, [2,5,8] = 15 [3,6,9] = 18  \nOut[10]: array([12, 15, 18])\n\nIn [11]: x.sum(axis=1)    # sum the rows [1,2,3] = 6, [4,5,6] = 15 [7,8,9] = 24\nOut[11]: array([ 6, 15, 24])\n")])])]),e("p",[e("em",[n._v("axis 0")]),n._v(" are the "),e("em",[n._v("columns")]),n._v(" and "),e("em",[n._v("axis 1")]),n._v(" are the "),e("em",[n._v("rows")]),n._v(".")]),n._v(" "),e("p",[n._v("axis0 纵轴 比如")]),n._v(" "),e("p",[n._v("array([[1, 2, 3],")]),n._v(" "),e("p",[n._v("​     \t   [4, 5, 6],")]),n._v(" "),e("pre",[e("code",[n._v("   [7, 8, 9]], dtype=int32)\n")])]),n._v(" "),e("p",[n._v("sum的话就是(12,15,18) 每一个纵求一次和 总共有三个纵方向的向量")])])},[],!1,null,null,null);a.default=s.exports}}]);