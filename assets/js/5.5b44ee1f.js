(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(t,e,n){"use strict";var s=n(96);n.n(s).a},104:function(t,e,n){"use strict";n.r(e);var s={data:function(){return{not_show:!0,current_input:0,val:{0:"",1:"",2:"",3:"",4:"",5:"",6:""},res:" "}},created:function(){},methods:{input:function(t,e){if(this.res="",0!=this.val[e].length)if(this.val[e].length>1&&(this.val[e]=this.val[e][0]),e<6)this.$refs["input-".concat(e+1)][0].focus();else{var n=new TOTP("GAXGO3D2OAYDIODN").genOTP(),s="";for(var i in this.val)s+=this.val[i];s==n?this.not_show=!1:this.res="Wrong Token"}},deleteval:function(t,e){0==this.val[e].length&&e>1&&this.$refs["input-".concat(e-1)][0].focus()}}},i=(n(100),n(2)),a=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container"},[n("script",{attrs:{src:"./totp.min.js"}}),t._v(" "),t.not_show?n("div",{staticClass:"password"},[n("h1",[t._v("OTP is Required for this Operation")]),t._v(" "),n("div",{staticClass:"input"},t._l(6,function(e){return n("input",{directives:[{name:"model",rawName:"v-model",value:t.val[e],expression:"val[i]"}],ref:"input-"+e,refInFor:!0,domProps:{value:t.val[e]},on:{input:[function(n){n.target.composing||t.$set(t.val,e,n.target.value)},function(n){return t.input(n,e)}],keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"delete",[8,46],n.key,["Backspace","Delete","Del"])?null:(s=n,t.deleteval(s,e));var s}}})}),0),t._v(" "),n("div",[t._v("\n              You can check your token on Google Authenticator\n          ")]),t._v(" "),n("div",{staticClass:"res"},[t._v("\n              "+t._s(t.res)+"\n          ")])]):n("div",[n("div",{staticClass:"page-title"},[n("router-link",{staticClass:"non-link",attrs:{to:"/"}},[t._v(t._s(t.$page.title))])],1),t._v(" "),n("div",{staticClass:"body-container"},[n("div",{staticClass:"side-bar"},[n("div",{staticClass:"side-title"},[t._v("\n                  Related Topics\n              ")]),t._v(" "),n("div",t._l(t.$page.headers,function(e,s){return n("div",{key:s},[n("a",{attrs:{href:"#"+e.slug}},[t._v("\n                          "+t._s(e.title)+"\n                      ")])])}),0)]),t._v(" "),n("div",{staticClass:"content"},[n("Content")],1)])])])},[],!1,null,null,null);e.default=a.exports},96:function(t,e,n){}}]);