(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{165:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("最近开始步入Linux的大坑，根据储兄的建议，用的是CentOS7，部署在我的老爷机上。\n其中需要通过我的台式远程到老爷机进行操控，于是便用到了Putty.")]),a._v(" "),t("h2",{attrs:{id:"window下配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window下配置","aria-hidden":"true"}},[a._v("#")]),a._v(" WIndow下配置")]),a._v(" "),t("p",[a._v("这里只需要下载一个putty，并在输入目标机的ip，并用SSH进行连接即可。\n获得目标机ip\nterminal内使用ifconfig来Get到ip地址")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifconfig")]),a._v(" -a\n")])])]),t("h2",{attrs:{id:"开启ssh服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启ssh服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 开启SSH服务")]),a._v(" "),t("p",[a._v("首先检查SSH是否已经安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rpm -qa "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v("\n")])])]),t("p",[a._v("接着，启动SSH服务")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" sshd restart\n")])])]),t("p",[a._v("设置为开机启动")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chkconfig")]),a._v(" sshd on\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);