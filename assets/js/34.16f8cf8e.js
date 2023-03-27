(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{431:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("Inheritance (public, private, or protected) and containment aren’t always the solution when you want to reuse code. Consider, for example, the Stack class (see Chapter 10) and the Queue class (see Chapter 12).These are examples of container classes, which are classes designed to hold other objects or data types.The Stack class from Chapter 10, for example, stores unsigned long values.You could just as easily define a stack class for storing double values or string objects.The code would be identical except for the type of object stored. However, rather than write new class declarations, it would be nice if you could define a stack in a generic (that is, type-independent) fashion and then provide a specific type as a parameter to the class.Then you could use the same generic code to produce stacks of different kinds of values. In Chapter 10, the Stack example uses typedef as a first pass at dealing with this desire. However, that approach has a couple drawbacks. First, you have to edit the header file each time you change the type. Second, you can use the technique to generate just one kind of stack per program.That is, you can’t have a typedef represent two different types simultaneously, so you can’t use the method to define a stack of ints and a stack of strings in the same program.")]),this._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("template <typename AnyType> void Swap(AnyType &a, AnyType &b) {\n  AnyType temp;\n  temp = a;\n  a = b;\n  b = temp; \n}\n")])])]),t("p",[this._v("unique_ptr and share_ptr")])])},[],!1,null,null,null);t.default=n.exports}}]);