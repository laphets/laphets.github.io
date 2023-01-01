(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{414:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"design-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-principle","aria-hidden":"true"}},[e._v("#")]),e._v(" Design principle")]),e._v(" "),a("p",[e._v("Only public function can access internal variable. For private(default is private), we can implement them inside the class. For public method, it's recommanded to implement them outside the function.")]),e._v(" "),a("p",[e._v("For example, if we have defined a function prototype inside the public sector, we can implement is as:")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("void Stock::acquire() {\n  // Your implement here\n}\n")])])]),a("p",[e._v("Using the scope-resolution operator ("),a("code",[e._v("::")]),e._v(") to indicate to which class the function belongs. Out of class, we need use "),a("em",[e._v("qualified name")]),e._v(" "),a("code",[e._v("Stock::acquire()")]),e._v(", inside class scope, we just use "),a("em",[e._v("abbreviation")]),e._v(" name "),a("code",[e._v("acquire()")]),e._v(".")]),e._v(" "),a("p",[e._v("Also, the method can access private data members.")]),e._v(" "),a("p",[e._v("Any function with a definition in the class declaration automatically becomes an inline function.")]),e._v(" "),a("h2",{attrs:{id:"how-to-create-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-object","aria-hidden":"true"}},[e._v("#")]),e._v(" How to create object")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Stock kate, joe;\n")])])]),a("h2",{attrs:{id:"a-typical-class-declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-typical-class-declaration","aria-hidden":"true"}},[e._v("#")]),e._v(" A typical class declaration")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class className { \nprivate:\n  data member declarations \npublic:\n  member function prototypes \n};\n")])])]),a("h2",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[e._v("#")]),e._v(" Constructor")]),e._v(" "),a("p",[e._v("A constructor has no declared type (nor "),a("code",[e._v("void")]),e._v(")\nWe can have an example")]),e._v(" "),a("p",[e._v("To avoid same name for member and constructor arguments, we have two practical ways:")]),e._v(" "),a("ul",[a("li",[e._v("Adding a "),a("code",[e._v("m_prefix")])]),e._v(" "),a("li",[e._v("Using a underbar suffix for member name, such as "),a("code",[e._v("name_")])])]),e._v(" "),a("p",[e._v("If we have define our own constructor to get rid of the default, so we also need to revise the default declaration. Otherwise, it may occur error.")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('class Player{\nprivate:\n    std::string name;\n    int age;\npublic:\n    Player(const std::string& n, int age);\n};\n\nPlayer::Player(const std::string &n, int age) {\n    name = n;\n    this->age = age;\n}\n\nint main() {\n    // Two ways for using constructor\n    Player p0 = Player("Laphets", 19);\n    // or\n    Player p1("Laphets", 19);\n    // or using new\n    Player* p2 = new Player("Laphets", 19);\n\n}\n')])])]),a("p",[e._v("If we just want to using default and give it "),a("code",[e._v("0")]),e._v(" value, we can have")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Player::Player() {\n  name =  "";\n  age = 0;\n}\n')])])]),a("blockquote",[a("p",[e._v("When you design a class, you should usually provide a default constructor that implicitly initializes all class members.\nThat means we need provide default and our own constructor (which has arguments).")])]),e._v(" "),a("p",[e._v("When you implicitly call the default constructor, you don’t use parentheses.")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Player* p = Player;\nPlayer* p = new Player("Laphets");\nPlayer p;\nPlayer p("Laphets");\nPlayer p = "Laphets"; // If only one argument\n')])])]),a("h3",{attrs:{id:"optional-initializer-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-initializer-list","aria-hidden":"true"}},[e._v("#")]),e._v(" Optional initializer list")]),e._v(" "),a("p",[e._v("(preceded by a colon)")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Player::Player(int arg, int second) : one(arg), two(second);\n")])])]),a("h3",{attrs:{id:"copy-constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-constructor","aria-hidden":"true"}},[e._v("#")]),e._v(" Copy Constructor")]),e._v(" "),a("p",[e._v("Accept one argument of the another object reference.")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Player::Player(Player& p);\n\nPlayer a = b;\nPlayer a(b);\n")])])]),a("h2",{attrs:{id:"destructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destructor","aria-hidden":"true"}},[e._v("#")]),e._v(" Destructor")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('class Player{\nprivate:\n    std::string name;\n    int age;\npublic:\n    Player(const std::string& n, int age);\n    ~Player();\n};\n\nPlayer::Player(const std::string &n, int age) {\n    name = n;\n    this->age = age;\n}\n\nPlayer::~Player() {\n    printf("Destructor~");\n}\n')])])]),a("p",[e._v("Preceded by a tilde "),a("code",[e._v("~")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"when-the-destructor-will-be-called"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-the-destructor-will-be-called","aria-hidden":"true"}},[e._v("#")]),e._v(" When the destructor will be called?")]),e._v(" "),a("ul",[a("li",[e._v("If it's an automatic storage class object, the detructor is called when exit that block.")]),e._v(" "),a("li",[e._v("If it's created by new, which resides in heap memory, it's called when calling delete.")])]),e._v(" "),a("h3",{attrs:{id:"object-assign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-assign","aria-hidden":"true"}},[e._v("#")]),e._v(" Object assign")]),e._v(" "),a("blockquote",[a("p",[e._v("When you assign one object to another of the same class, by default C++ copies the contents of each data member of the source object to the corresponding data member of the target object.")])]),e._v(" "),a("h2",{attrs:{id:"const-member-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const-member-function","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("const")]),e._v(" member function")]),e._v(" "),a("p",[e._v("It's used for function to promise that not to midify the invoking object.\nIn C++, we can place the "),a("code",[e._v("const")]),e._v(" keyword after the function parentheses.")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("void Player::show() const;\n")])])]),a("p",[e._v("Function defined this way is called "),a("code",[e._v("const")]),e._v(" member function.")]),e._v(" "),a("h2",{attrs:{id:"this-pointer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-pointer","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("this")]),e._v(" pointer")]),e._v(" "),a("p",[e._v("Try to explain which of each "),a("code",[e._v("const")]),e._v(" is used for.")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const Stock & topval(const Stock & s) const;\n")])])]),a("blockquote",[a("p",[e._v("Each member function, including constructors and destructors, has a this pointer. The special property of the this pointer is that it points to the invoking object. If a method needs to refer to the invoking object as a whole, it can use the expression *this. Using the const qualifier after the function argument parentheses qualifies this as being a pointer to const; in that case, you can’t use this to change the object’s value.")])]),e._v(" "),a("p",[e._v("So "),a("code",[e._v("this")]),e._v(" is a pointer to the object itself, to get the object, we have to use "),a("code",[e._v("*this")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"array-of-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-of-objects","aria-hidden":"true"}},[e._v("#")]),e._v(" Array of objects")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Player player_list[10];\n")])])]),a("p",[e._v("This declaration requires either that the class explicitly define no constructors at all, in which case the implicit do-nothing default constructor is used, or, as in this case, that an explicit default constructor be defined.")]),e._v(" "),a("h2",{attrs:{id:"class-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-scope","aria-hidden":"true"}},[e._v("#")]),e._v(" Class Scope")]),e._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("static const int a = 1;\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);