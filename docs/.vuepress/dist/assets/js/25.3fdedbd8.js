(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{465:function(e,a,t){"use strict";t.r(a);var n=t(1),r=Object(n.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[e._v("#")]),e._v(" reference")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("int rats;\nint& r = rats;  // make r an ali\n")])])]),t("p",[t("code",[e._v("int&")]),e._v(" means reference to int, it serves as part of the type identifier.\nAnd in this case, "),t("code",[e._v("rats")]),e._v(" and "),t("code",[e._v("r")]),e._v(" refer to the same value and same memory location. (Kind of making difference on symbol table?)")]),e._v(" "),t("p",[e._v("Also, it's necessary to initialize the reference when declare it.")]),e._v(" "),t("p",[e._v("The reference relation will not change by assign other value.")]),e._v(" "),t("h3",{attrs:{id:"reference-as-funtion-parameter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference-as-funtion-parameter","aria-hidden":"true"}},[e._v("#")]),e._v(" reference as funtion parameter")]),e._v(" "),t("p",[e._v("or we call it "),t("code",[e._v("passing by reference")]),e._v(", diff from "),t("code",[e._v("passing by value")]),e._v(". One variable, two names.\nIf you want to pass by reference, and do not modify the variable unintendedly, you can use "),t("code",[e._v("const int& a")]),e._v(".")]),e._v(" "),t("p",[e._v("Also, do not do like this:")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("int foo(int& a) {\n  return a;\n}\nint main() {\n  int a = 1;\n  foo(a+2);   // wrong\n}\n")])])]),t("h3",{attrs:{id:"temporary-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#temporary-variable","aria-hidden":"true"}},[e._v("#")]),e._v(" Temporary variable")]),e._v(" "),t("p",[t("strong",[e._v("An argument that’s an lvalue is a data object that can be referenced by address.")]),e._v("\nBoth regular and constant variable can be considered as lvalue. (Although constant variable can't be modified)")]),e._v(" "),t("p",[e._v("For "),t("code",[e._v("rvalue")]),e._v(", such as common return value of function, or some expression like "),t("code",[e._v("1+1")]),e._v(" and "),t("code",[e._v("x+y")]),e._v(", they resides in a temporary memory location that doesn't necessarily persist even until next statement. Also for array "),t("code",[e._v("a[10]")]),e._v(" for example, a is also not a "),t("code",[e._v("lvalue")]),e._v(", since you can't try to access its memory location(it's stored in symbol table), neither can modify the store value of them.")]),e._v(" "),t("blockquote",[t("p",[e._v("Note: If a function call argument isn’t an lvalue or does not match the type of the corresponding const reference parameter, C++ creates an anonymous variable of the correct type, assigns the value of the function call argument to the anonymous variable, and has the parameter refer to that variable.")])]),e._v(" "),t("p",[e._v("We can have an example:")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const int& w(const int&a) {\n    return a;\n}\n\nint main() {\n    long b = 1;\n    w(b);\n    w(b + 2);\n}\n")])])]),t("p",[e._v("In this case, since it's argument is defined as const, so although the call argument isn't a lvalue nor a matching type, the C++ will create an anonymous variable assign to the argument.")]),e._v(" "),t("p",[e._v("Assigning a value to a function call—works because the return value is a reference.")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("int& test(int& a) {\n    return a;\n}\n\nint main() {\n\n    int a = 1;\n    test(a) = 2;\n\n    return 0;\n}\n")])])]),t("h3",{attrs:{id:"constant-for-reference-return"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constant-for-reference-return","aria-hidden":"true"}},[e._v("#")]),e._v(" Constant for reference return")]),e._v(" "),t("p",[e._v("In last example, we found that we can modify the return reference by "),t("code",[e._v("test(a) = 2")]),e._v(", but that may occur some problem, therefore, if we do not want the return reference be modified, we can use "),t("code",[e._v("const int&")]),e._v(" instead.")]),e._v(" "),t("blockquote",[t("p",[e._v("Making the return type a const reference therefore protects you from the temptation of obfuscation")])]),e._v(" "),t("p",[e._v("Let's see an example")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("int a = 1;\nconst auto& b = a;\na = 2;\nb = 2;  // wrong\n")])])]),t("h3",{attrs:{id:"using-reference-with-a-class-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-reference-with-a-class-object","aria-hidden":"true"}},[e._v("#")]),e._v(" Using reference with a class object")]),e._v(" "),t("p",[e._v("The usual c++ practice for passing class object to a function is using reference.")]),e._v(" "),t("p",[e._v("For example, we have")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("string combine(const string& a, const string& b) {\n  return a + b;\n}\n\nstring another_combine(string a, string b) {\n  return a + b;\n}\n")])])]),t("p",[e._v("The second way will copy all the data into the stack, which is not efficient.")]),e._v(" "),t("h3",{attrs:{id:"why-do-we-need-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-do-we-need-reference","aria-hidden":"true"}},[e._v("#")]),e._v(" Why do we need reference?")]),e._v(" "),t("ul",[t("li",[e._v("Allow you to alter a data object calling by function")]),e._v(" "),t("li",[e._v("When in C++ class, passing by reference can speed up, instead of passing an entire date object.")])]),e._v(" "),t("h3",{attrs:{id:"some-guidelines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#some-guidelines","aria-hidden":"true"}},[e._v("#")]),e._v(" Some guidelines:")]),e._v(" "),t("p",[e._v("A function uses passed data without modifying it:")]),e._v(" "),t("ul",[t("li",[e._v("If the data object is small, such as a built-in data type or a small structure, pass it by value.")]),e._v(" "),t("li",[e._v("If the data object is an array, use a pointer because that’s your only choice. Make the pointer a pointer to const.")]),e._v(" "),t("li",[e._v("If the data object is a good-sized structure, use a const pointer or a const reference to increase program efficiency.You save the time and space needed to copy a structure or a class design. Make the pointer or reference const.")]),e._v(" "),t("li",[e._v("If the data object is a class object, use a const reference.The semantics of class design often require using a reference, which is the main reason C++ added this feature.Thus, the standard way to pass class object arguments is by reference.")])]),e._v(" "),t("p",[e._v("A function modifies data in the calling function:")]),e._v(" "),t("ul",[t("li",[e._v("If the data object is a built-in data type, use a pointer. If you spot code like fixit(&x), where x is an int, it’s pretty clear that this function intends to modify x.")]),e._v(" "),t("li",[e._v("If the data object is an array, use your only choice: a pointer.")]),e._v(" "),t("li",[e._v("If the data object is a structure, use a reference or a pointer.")]),e._v(" "),t("li",[e._v("If the data object is a class object, use a reference.")])]),e._v(" "),t("p",[e._v("In conclusion, if the data is a class object, just passing by reference. If it's a small type, using pointer to clearify that the function may change the value of the variable. If the data is array, you must use pointer. If it's a structure, both pointer and reference will be OK.")])])},[],!1,null,null,null);a.default=r.exports}}]);