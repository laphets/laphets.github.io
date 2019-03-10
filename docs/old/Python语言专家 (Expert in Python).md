---
title: Python语言砖家 (Expert in Python)
date: 2017-11-08 12:53:07
categories: 理性
---

### 注意函数的返回值

是否有return 还是直接print

### tuple

加下标进行索引

tuple('abc')[len('abc')]

### function的赋值问题

看这样一段代码

```python
def fun(ste):
    print(id(ste))
    ste = ['3']
    print(id(ste))
    # print("ste: %s  st: %s"%(ste,st))
    # ste += ['1']
st = ['2']
fun(st)
print(st)
```

ste新赋值，过程如下：

在内存中开辟一段空间给['3']

ste指向他

从而对新的ste进行操作不会再改变原来st的值

但是如果不赋值， ste仍然指向st，于是导致对ste的改变同时改变st

```python
def chase( chevy ):
    chevy.append( "arrow" )
    chevy.reverse()
    chevy = chevy.sort()
    print(chevy)
    print(earl)
    return chevy
earl = "cheviot hills".split(" ")
chase( earl )
```

### 翻车

```python
def f():
    print(a)
    a+=2
a = 1
f()
# UnboundLocalError: local variable 'a' referenced before assignment
```

```python
def f():
    print(a)
a = 1
f()
# 1
```

### dict的遍历

```python
d = {'a':'1', 'b':'2', 'c':'3'}

print("Way1")
for (index,key) in enumerate(d):
    print("index: %s key: %s value: %s"%(index,key,d[key]))

print("Way2")
for key in d:
    print("key: %s value: %s"%(key,d[key]))

print("Way3")
for key in d.keys():
    print("key: %s value: %s"%(key,d[key]))

print("Way4")
for value in d.values():
    print("value: %s"%(value))

print("Way5")
for value,key in d.items():
    print("key: %s value: %s"%(value,key))
```

### import

```python
from math import *
print(pi)

import math
print(math.pi)
```

### ASCII

```python
# Get the ASCII number of a character
number = ord(char)

# Get the character given by an ASCII number
char = chr(number)
```

## 优雅的python

```python
a, b = b, a	# 变量交换

age = 19 	# Chain compare
if 18 < age < 60:
    print('Youg man')
    
# 列表推导式
x = [i * 2 for i in range(6)]	# 可以取代 map 和 filter
# 同时列表推导式会消耗大量内存，数据多时建议使用生成器表达式
list = (x ** 2 for x in range(0, 100000))

# 字典推导式
numbers = [1, 2, 3]
my_dict = {number: number * 2 for number in numbers}
my_dict = {number: number * 2 for number in numbers if number > 1}

# 用 zip 同时遍历两个迭代器
list_a = ['a', 'b', 'c', 'd']
list_b = [1, 2, 3]
for letter, number in zip(list_a, list_b):
    print(letter, number)	# 只要有一个列表耗尽，迭代就会停止
    
# if/else 三目运算
text = '男' if gener == 'male' else '女'
```

### Lambda 匿名函数

```python
max = lambda x,y : x if x>y else y
```

```python
sorted(x, key = lambda x : abs(x))
```

### Sorted

```python
sorted(l, reverse=True)
```

```python
d = [‘one’:1, ‘two’:2, ‘three’:3]
sorted(d, key=lambda x:d[x])
```

默认以key来sort

### map

```python
#python2
# list
map(lambda x:x**2, range(10))
[i**2 for i in range(10)]
```

## Read File

```python
myfile = opne('auto.csv')
rows = myfile.readlines()
for row in rows:
  col = row.strip().split(',')
  col[0],col[1].....
```

### del

del(x[0])

## Numpy

### slice!

```python
array([[5, 4, 9, 2],
       [3, 4, 1, 2],
       [3, 2, 1, 8]])
>>> a = np.array([[5,4,9,2],[3,4,1,2],[3,2,1,8]])
>>> a[1:3][1:2]  #取两次行
array([[3, 2, 1, 8]])
```

### Random

```python
x = np.random.randint(0,100,size=(10000,1)) [0,99)
np.random.uniform( size=(4,3) ) # in array
# choise   取5个不代换
x = np.arange(1,53)
c = np.random.choice(x,size=5,replace=False)
默认为replace=true
x = np.arange(1,53)
# shuffle(x)
np.random.shuffle(x)

# rand
>>> np.random.rand(1,1)
array([[ 0.75323083]])
>>> np.random.rand(1)
array([ 0.30118861])
>>> np.random.rand()
0.2556185024473092

#randn randn returns a random number selected from the normal distribution with mean 0 and variance 1.

np.random.randn()+1  #mean = 1
np.random.randn()*4  #variance 4

```

```python
import itertools
a = [ 1,2,3,4 ]
# combination provide all subsets of size n
for x in itertools.combinations( a,2 ):
print( x )

# product  replace nested for loops.
a = [ 1,2,3,4 ]
b = [ 'g','h','i' ]
for x in itertools.product( a,b ):
    print( x )
for x in itertools.product( a, repeat=3 ):
	print( x )

# permutation
from itertools import permutations
for doublet in permutations( 'ABCD',2 ):
    print( doublet )
```

3*3