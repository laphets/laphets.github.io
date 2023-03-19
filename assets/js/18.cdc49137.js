(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{403:function(t,e,a){"use strict";a.r(e);var r=a(1),o=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),a("p",[t._v("AVL is a great data structure, which get rid of the disadvantage of ordinary BST. As we all know, for BST, when the data is bad enough, it's very likely become a linked list, which will make the time complexity very bad $O(n)$\nThe rotation of AVL can prevent us from this problem.")]),t._v(" "),a("h2",{attrs:{id:"concept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concept","aria-hidden":"true"}},[t._v("#")]),t._v(" Concept")]),t._v(" "),a("p",[t._v("Height: NULL? -1 : max{height(leftchild), height(rightchild}+1\nBalance: $|height(left)-height(right)|$\nIf balance factor is greater than 1, we say this tree is unbalanced.")]),t._v(" "),a("h2",{attrs:{id:"rotate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rotate","aria-hidden":"true"}},[t._v("#")]),t._v(" Rotate")]),t._v(" "),a("p",[t._v("We define rotation by the relative position of the root. If the root is one the right(child is on the left), we say it's right rotation.")]),t._v(" "),a("h2",{attrs:{id:"rebalance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebalance","aria-hidden":"true"}},[t._v("#")]),t._v(" Rebalance")]),t._v(" "),a("p",[t._v("The case is defined by the path from the root.\nThere are four cases we need to handle: LL (RightRotation), LR (LeftRotate+RightRotate), RL(RightRotate+LeftRotate), RR (LeftRotate)")]),t._v(" "),a("h3",{attrs:{id:"ll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ll","aria-hidden":"true"}},[t._v("#")]),t._v(" LL")]),t._v(" "),a("p",[a("code",[t._v("H(root->left)-H(root->right)>1 && H(root->left->left)>=H(root->left->right)")]),t._v(" "),a("code",[t._v("RotateRight(root)")])]),t._v(" "),a("h3",{attrs:{id:"lr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lr","aria-hidden":"true"}},[t._v("#")]),t._v(" LR")]),t._v(" "),a("p",[a("code",[t._v("H(root->left)-H(root->right)>1 && H(root->left->left)<H(root->left->right)")]),t._v(" "),a("code",[t._v("RotateLeft(root->left)")]),t._v(" "),a("code",[t._v("RotateRight(root)")])]),t._v(" "),a("h3",{attrs:{id:"rr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rr","aria-hidden":"true"}},[t._v("#")]),t._v(" RR")]),t._v(" "),a("p",[a("code",[t._v("H(root->right)-H(root->left)>1 && H(root->right->right)>=H(root->right->left)")]),t._v(" "),a("code",[t._v("RotateLeft(root)")])]),t._v(" "),a("h3",{attrs:{id:"rl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rl","aria-hidden":"true"}},[t._v("#")]),t._v(" RL")]),t._v(" "),a("p",[a("code",[t._v("H(root->right)-H(root->left)>1 && H(root->right->right)<H(root->right->left)")]),t._v(" "),a("code",[t._v("RotateRight(root->right)")]),t._v(" "),a("code",[t._v("RotateLeft(root)")])]),t._v(" "),a("p",[t._v("And remember update the height after the rebalance.")]),t._v(" "),a("h2",{attrs:{id:"insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert","aria-hidden":"true"}},[t._v("#")]),t._v(" Insert")]),t._v(" "),a("p",[t._v("We can do same as the insertion for BST, just first find the right leaf node, put the node there, and then do some rebalance.")]),t._v(" "),a("h2",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove","aria-hidden":"true"}},[t._v("#")]),t._v(" Remove")]),t._v(" "),a("p",[t._v("It has several cases:")]),t._v(" "),a("h3",{attrs:{id:"a-node-has-no-child"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-node-has-no-child","aria-hidden":"true"}},[t._v("#")]),t._v(" A node has no child")]),t._v(" "),a("p",[t._v("Just simply remove it")]),t._v(" "),a("h3",{attrs:{id:"a-node-has-only-one-child"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-node-has-only-one-child","aria-hidden":"true"}},[t._v("#")]),t._v(" A node has only one child")]),t._v(" "),a("p",[t._v("Replace it with the existing child")]),t._v(" "),a("h3",{attrs:{id:"a-node-has-two-child"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-node-has-two-child","aria-hidden":"true"}},[t._v("#")]),t._v(" A node has two child")]),t._v(" "),a("p",[t._v("Replace it with the inorder front (since we know for BST, inorder is the sorted list), call remove to delete the swaped node.")]),t._v(" "),a("p",[t._v("Also remember to rebalance after call remove.")])])},[],!1,null,null,null);e.default=o.exports}}]);