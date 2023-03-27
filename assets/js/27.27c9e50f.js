(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{421:function(e,a,n){"use strict";n.r(a);var r=n(1),s=Object(r.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"header-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#header-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Header File")]),e._v(" "),n("p",[e._v("In general, each "),n("code",[e._v(".cc")]),e._v(" should has an associated "),n("code",[e._v(".h")])]),e._v(" "),n("h2",{attrs:{id:"define"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#define","aria-hidden":"true"}},[e._v("#")]),e._v(" #define")]),e._v(" "),n("p",[e._v("In order to prevent multiple inclusion, should have "),n("code",[e._v("#ifndef")]),e._v(" "),n("code",[e._v("#define")]),e._v(" "),n("code",[e._v("#endif")]),e._v(".\n"),n("code",[e._v("<PROJECT>_<PATH>_<FILE>_H_")])]),e._v(" "),n("h2",{attrs:{id:"forward-declarations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#forward-declarations","aria-hidden":"true"}},[e._v("#")]),e._v(" Forward Declarations")]),e._v(" "),n("p",[e._v("Not understanding")]),e._v(" "),n("h2",{attrs:{id:"inline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inline","aria-hidden":"true"}},[e._v("#")]),e._v(" inline")]),e._v(" "),n("p",[e._v("Define functions inline only when they are small, say, 10 lines or fewer.\nrecursive functions: not inline\nvirtual function: inline")]),e._v(" "),n("blockquote",[n("p",[e._v("Review for inline")])]),e._v(" "),n("h2",{attrs:{id:"names-and-order-of-includes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#names-and-order-of-includes","aria-hidden":"true"}},[e._v("#")]),e._v(" Names and Order of Includes")]),e._v(" "),n("p",[e._v("File should be listed as descendants of the project's source directory\nFor example, google-awesome-project/src/base/logging.h should be included as:")]),e._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[e._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("include")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"base/logging.h"')])]),e._v("\n")])])]),n("p",[e._v("Do not use "),n("code",[e._v(".")]),e._v(" or "),n("code",[e._v("..")])]),e._v(" "),n("p",[e._v("In "),n("code",[e._v("dir/foo.cc")]),e._v(", you want implement "),n("code",[e._v("dir/foo.h")]),e._v("\nThe include order is:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("dir/foo.h")])]),e._v(" "),n("li",[e._v("A blank line")]),e._v(" "),n("li",[e._v("C system file")]),e._v(" "),n("li",[e._v("C++ system file")]),e._v(" "),n("li",[e._v("A blank line")]),e._v(" "),n("li",[e._v("Other libraries "),n("code",[e._v(".h")]),e._v(" files")]),e._v(" "),n("li",[e._v("Your project "),n("code",[e._v(".h")]),e._v(" files")])]),e._v(" "),n("p",[e._v("However, any includes present in the related header do not need to be included again in the related cc (i.e., foo.cc can rely on foo.h's includes).")]),e._v(" "),n("h2",{attrs:{id:"namespace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#namespace","aria-hidden":"true"}},[e._v("#")]),e._v(" Namespace")]),e._v(" "),n("p",[e._v("Do not use using-directives (e.g. "),n("code",[e._v("using namespace foo")]),e._v(").")]),e._v(" "),n("h3",{attrs:{id:"inline-namespace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inline-namespace","aria-hidden":"true"}},[e._v("#")]),e._v(" inline namespace")]),e._v(" "),n("p",[e._v("In the outer namesapce, can directly access methods/variable without using scope resolution "),n("code",[e._v("::")])])])},[],!1,null,null,null);a.default=s.exports}}]);