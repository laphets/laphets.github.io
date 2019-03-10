(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{176:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"hexo的简易部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hexo的简易部署","aria-hidden":"true"}},[a._v("#")]),a._v(" Hexo的简易部署")]),a._v(" "),t("blockquote",[t("p",[a._v("由于机房电脑重启自动还原，每次都得重新部署一次，因此来写篇文章谈谈Hexo的简易部署方法")])]),a._v(" "),t("h2",{attrs:{id:"首先在电脑中装好git和node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先在电脑中装好git和node-js","aria-hidden":"true"}},[a._v("#")]),a._v(" 首先在电脑中装好"),t("strong",[a._v("git")]),a._v("和"),t("strong",[a._v("node.js")])]),a._v(" "),t("h2",{attrs:{id:"接着在u盘的hexo目录打开git命令行，输入以下命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接着在u盘的hexo目录打开git命令行，输入以下命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 接着在U盘的Hexo目录打开git命令行，输入以下命令")]),a._v(" "),t("h3",{attrs:{id:"全局安装hexo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装hexo","aria-hidden":"true"}},[a._v("#")]),a._v(" 全局安装Hexo")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install hexo -g\n")])])]),t("h3",{attrs:{id:"安装必要组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装必要组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装必要组件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install\n")])])]),t("h2",{attrs:{id:"接着就是在电脑上生成sshkey了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接着就是在电脑上生成sshkey了","aria-hidden":"true"}},[a._v("#")]),a._v(" 接着就是在电脑上生成"),t("strong",[a._v("SSHkey")]),a._v("了")]),a._v(" "),t("h3",{attrs:{id:"设置git的user-name和email："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置git的user-name和email：","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置git的user name和email：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"laphets"')]),a._v("\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('git config --global user.email "768066323@qq.com"\n')])])]),t("h3",{attrs:{id:"检查目录是否存在"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查目录是否存在","aria-hidden":"true"}},[a._v("#")]),a._v(" 检查目录是否存在")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -al ~/.ssh\n")])])]),t("h3",{attrs:{id:"生成sshkey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成sshkey","aria-hidden":"true"}},[a._v("#")]),a._v(" 生成"),t("strong",[a._v("SSHkey")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ssh-keygen -t rsa -b 4096 -C "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"768066323@qq.com"')]),a._v("\n")])])]),t("h3",{attrs:{id:"在github上加入sshkey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在github上加入sshkey","aria-hidden":"true"}},[a._v("#")]),a._v(" 在GitHub上加入SSHkey")]),a._v(" "),t("h3",{attrs:{id:"检测是否成功连接到github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测是否成功连接到github","aria-hidden":"true"}},[a._v("#")]),a._v(" 检测是否成功连接到GitHub")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" -T git@github.com\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);