---
title: B-Tree
date: 2019-04-19 14:55:23
comments: true
tags: Programming
categories: DS 
---

## Intro
### Why BTree?
Since the speed to access memory is much more faster than the speed to access disk, therefore, we need a data structure to make the height as small as possible.

The hard disk support to load a chunk of data in one time

## Defination
order: the number of children of each node, or 1+max number of element of each node


## Find
Find is easy, we need only find the right interval through root to the leaf.
Also one property the BTree has is that for each chunk of data if one node, it's sorted. So we can use binary search to do it.

## Insert
Insert is also easy, just do same as find, and inert the element into the right place. If the children length is greater than order, we need split the batch.
### How to split?
For example, we have
```
|3|6|7|
```
where number represents the key, and `|` represents child node, here we need lift `6` up, and split the array to `|3|` and `|7|`, which becomes the new left node and right node. For the parent we insert `6|`, and the right child of `6`, we make it point to the new splited right child.
Then, total work done!