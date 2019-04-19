---
title: AVL 
date: 2019-04-19 14:56:23
comments: true
tags: Programming
categories: DS
---

## Intro
AVL is a great data structure, which get rid of the disadvantage of ordinary BST. As we all know, for BST, when the data is bad enough, it's very likely become a linked list, which will make the time complexity very bad $O(n)$
The rotation of AVL can prevent us from this problem.

## Concept
Height: NULL? -1 : max{height(leftchild), height(rightchild}+1
Balance: $|height(left)-height(right)|$
If balance factor is greater than 1, we say this tree is unbalanced.

## Rotate
We define rotation by the relative position of the root. If the root is one the right(child is on the left), we say it's right rotation.

## Rebalance
The case is defined by the path from the root.
There are four cases we need to handle: LL (RightRotation), LR (LeftRotate+RightRotate), RL(RightRotate+LeftRotate), RR (LeftRotate)

### LL
`H(root->left)-H(root->right)>1 && H(root->left->left)>=H(root->left->right)`
`RotateRight(root)`
### LR
`H(root->left)-H(root->right)>1 && H(root->left->left)<H(root->left->right)`
`RotateLeft(root->left)`
`RotateRight(root)`
### RR
`H(root->right)-H(root->left)>1 && H(root->right->right)>=H(root->right->left)`
`RotateLeft(root)`
### RL
`H(root->right)-H(root->left)>1 && H(root->right->right)<H(root->right->left)`
`RotateRight(root->right)`
`RotateLeft(root)`

And remember update the height after the rebalance.

## Insert
We can do same as the insertion for BST, just first find the right leaf node, put the node there, and then do some rebalance.

## Remove
It has several cases:
### A node has no child
Just simply remove it
### A node has only one child
Replace it with the existing child
### A node has two child
Replace it with the inorder front (since we know for BST, inorder is the sorted list), call remove to delete the swaped node. 

Also remember to rebalance after call remove.