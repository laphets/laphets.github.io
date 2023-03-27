(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{433:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v('Typically, iterators are used to access elements of a container in linear fashion; however, with "random access iterators", it is possible to access any element in the same fashion as '),a("code",[e._v("operator[]")]),e._v(".")]),e._v(" "),a("p",[e._v("To "),a("strong",[e._v("access arbitrary elements in a vector")]),e._v(" "),a("code",[e._v("vec")]),e._v(", you can use the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vec.begin() // 1st vec.begin()+1 // 2nd // ... vec.begin()+(i-1) // ith // ... vec.begin()+(vec.size()-1) // last\n")])])]),a("p",[e._v("The following is an example of a "),a("strong",[e._v("typical access pattern")]),e._v(" (earlier versions of C++):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("int sum = 0; using Iter = std::vector\\<int\\>::const\\_iterator; for (Iter it = vec.begin(); it!=vec.end(); ++it) { sum += \\*it; }\n")])])]),a("p",[e._v("The advantage of using iterator is that you can apply the "),a("strong",[e._v("same pattern with other containers")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sum = 0; for (Iter it = lst.begin(); it!=lst.end(); ++it) { sum += \\*it; }\n")])])]),a("p",[e._v("For this reason, it is really easy to create template code that will work the same "),a("strong",[e._v("regardless of the container type")]),e._v(". Another advantage of iterators is that it doesn't assume the data is resident in memory; for example, one could create a forward iterator that can read data from an input stream, or that simply generates data on the fly (e.g. a range or random number generator).")]),e._v(" "),a("p",[e._v("Another option using "),a("code",[e._v("std::for_each")]),e._v(" and lambdas:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sum = 0; std::for\\_each(vec.begin(), vec.end(), [&sum](int i) { sum += i; });\n")])])]),a("p",[e._v("Since C++11 you can use "),a("code",[e._v("auto")]),e._v(" to avoid specifying a very long, complicated type name of the iterator as seen before (or even more complex):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sum = 0; for (auto it = vec.begin(); it!=vec.end(); ++it) { sum += \\*it; }\n")])])]),a("p",[e._v("And, in addition, there is a simpler for-each variant:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sum = 0; for (auto value : vec) { sum += value; }\n")])])]),a("p",[e._v("And finally there is also "),a("code",[e._v("std::accumulate")]),e._v(" where you have to be careful whether you are adding integer or floating point numbers.")])])},[],!1,null,null,null);t.default=r.exports}}]);