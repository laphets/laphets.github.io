(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{217:function(e,t,n){},372:function(e,t,n){"use strict";var a=n(217);n.n(a).a},393:function(e,t,n){"use strict";n.r(t);var a={data:function(){return{education:[{school:"Zhejiang University",location:"Hangzhou, China",time:"2017 – Present",degree:"B.E. in Computer Engineering, expected May 2021"}],experience:[{company:"Alibaba Group.",location:"Hangzhou, China",time:"June. 2020 – Present",tech:"C++, Clang, LLVM, Tensorflow",bu:"Intern at Search and Recommendation Business Unit",content:["Take optimization on online rank service for search infrastructure of Taobao, Tmall, Aliexpress, which support over 100K query per second.","Build up an automated JIT compilation system for the online rank service, which uses Clang/LLVM based toolchain to rewrite dynamic part of the origin code and generate equivalent high performance static representation, and finally boosted more than 10% performance of rank service."]},{company:"Bytedance Inc.",location:"Beijing, China",time:"April. 2020 – June. 2020",tech:"Golang, Thrift, Protobuf",bu:"Intern at Lark Core Services Team",content:["",""]},{company:"Tencent Inc.",location:"Shenzhen, China",time:"June. 2019 – August. 2019",tech:"Golang, Kubernetes, Python, Protobuf",bu:"Intern at Cloud & Smart Industries Business Group (CSIG)",content:["Implement a distributed performance testing tool for an inner RPC framework by providing a JavaScript Runtime(ES6+) and realtime serialization, which became an inner opensource project in Tencent.","Build several RPC services with Golang covering more than 30 million target users, which take requests into batches and schedule&distribute them to machine learning engines by message queue.","Build up a unified log collecting platform by logstash, Elasticsearch and Kibana, implement a Golang SDK.","Adapt Protobuf+RPC pattern into message queue, and orchestrate auto-scalable ML engines on Kubernetes."]},{company:"YiWise Inc.",location:"Hangzhou, China",time:"June. 2018 – September. 2018",tech:"Vue, WebSocket, Electron.js, Typescript",bu:"Software Developer of Summer Intern",content:["Building an AI call platform application with Vue and Typescript, as well as a multi-thread record audio downloader with electron.js.","Implement the authentication and permission part of the platform.","Lead the restructure for original codebase with TypeScript.","Implement real-time call service by using WebSocket and WebRTC.","Build up CI/CD pipeline for the front-end application by using docker."]}],project:[{name:"WeirdOS",time:"October. 2019 – December. 2019",tech:"Pure C, Assemble(x86), Qemu",category:"Course Project",content:["WeirdOS is a Linux like operating system under x86-32 instruction set, which is derived from final project of ECE391@UIUC. The project won 2nd place in ECE391 final competition sponsored by Microsoft. The following features were implemented in the OS,","Course required features: memory paging, read-only filesystem, context switch, Round-robin scheduler, interrupt handlers, system calls.","Extra features: dynamic memory allocator, DOM based GUI and layer1-5 network stack.","A plain Internet browser by combining GUI and network stack."]},{name:"Open Source Contribution for VSCode and FireFox",time:"August. 2018 – Present",tech:"TypeScript, Electron.js, React",category:"Fixed several bugs as well as adding features",content:["Brief introduction: Later 2018, I participated development of the open source project – VSCode, help the team fix several bugs related to git module and search widget. This experience brought me a strong interest in contributing for open source project. In 2019, I joined the Mozilla Developer community, making contribution for FireFox DevTools, which is challenging and also interesting."]},{name:"Recruit Open Platform",time:"May. 2018 – Present",tech:"Golang, Vue, NodeJS, Docker Swarm, gRPC, Prometheus",category:"Major Developer",content:["The project is aimed at providing a platform for associations to manage their annual recruitment which supports form edit, interview and association management.","Divide the large system into several micro-services by using gRPC and Traefik(service discovery + load balancing).","Implement server side rendering for the form submit page (running Vue.js on server side).","Manage the deployment on clusters by Docker Swarm, supporting realtime monitor and alert with Prometheus, Grafana."]}]}},mounted:function(){}},i=(n(372),n(1)),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-container"},[n("v-container",{staticClass:"main-container"},[n("v-row",[n("v-col",{attrs:{lg:"3"}},[n("v-img",{attrs:{contain:"","lazy-src":"img/photo.jpg",height:"250",src:"img/photo.jpg"}})],1),e._v(" "),n("v-col",{attrs:{lg:"9"}},[n("h1",[e._v("Wenqing Luo "),n("a",{staticStyle:{"font-size":"20px"},attrs:{target:"_blank",href:"resume.pdf"}},[e._v("[CV]")])]),e._v(" "),n("ul",[n("li",[e._v("Email: "),n("a",{attrs:{href:"mailto:wenqing4@illinois.edu"}},[e._v("wenqing4@illinois.edu")])]),e._v(" "),n("li",[e._v("GitHub: "),n("a",{attrs:{target:"_blank",href:"https://github.com/laphets"}},[e._v("laphets")])]),e._v(" "),n("li",[e._v("Linkedin: "),n("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/wenqing-luo-823788146/"}},[e._v("Wenqing Luo")])]),e._v(" "),n("li",[e._v("Blog: "),n("router-link",{attrs:{to:"/blog"}},[e._v("Laphets's Blog")])],1)]),e._v(" "),n("p",[e._v("\n                    I'm Wenqing, a senior student at the joint institute of "),n("a",{attrs:{target:"_blank",href:"https://www.zju.edu.cn/english/"}},[e._v("Zhejiang University")]),e._v("/"),n("a",{attrs:{target:"_blank",href:"https://illinois.edu/"}},[e._v("University of Illinois at Urbana-Champaign")]),e._v(", \n                    major in Computer Engineering. \n                    I'm currently intern at Search Engine Team of "),n("a",{attrs:{target:"_blank",href:"https://www.alibabagroup.com/en/global/home"}},[e._v("Alibaba")]),e._v(", building huge scale search infrastructure supporting "),n("a",{attrs:{target:"_blank",href:"https://www.taobao.com/"}},[e._v("Taobao")]),e._v(", "),n("a",{attrs:{target:"_blank",href:"https://www.tmall.com/"}},[e._v("Tmall")]),e._v(", "),n("a",{attrs:{target:"_blank",href:"https://www.aliexpress.com"}},[e._v("Aliexpress")]),e._v(" etc with over 100K QPS.\n                    Before joining Alibaba, I spent my sophomore summer at  "),n("a",{attrs:{target:"_blank",href:"https://www.tencent.com/en-us"}},[e._v("Tencent")]),e._v(" building a distributed performance testing tool with JavaScript Runtime attached by "),n("a",{attrs:{target:"_blank",href:"https://golang.org/"}},[e._v("Golang")]),e._v(", which later popularized as an inner opensource project in Tencent.\n                    During my junior year, I also spent 3 month at Lark Core Service Team of "),n("a",{attrs:{target:"_blank",href:"https://www.bytedance.com/en/"}},[e._v("ByteDance")]),e._v(", building the core backend service for a "),n("a",{attrs:{target:"_blank",href:"https://www.larksuite.com/"}},[e._v("Next-Gen Collaboration Suite")]),e._v(".\n                    ")]),e._v(" "),n("p",[e._v("\n                    I love opensource, I'm also the contributor of "),n("a",{attrs:{target:"_blank",href:"https://github.com/microsoft/vscode/pulls?q=is%3Apr+author%3Alaphets"}},[e._v("VSCode")]),e._v(" and "),n("a",{attrs:{target:"_blank",href:"https://hg.mozilla.org/mozilla-central/log?rev=laphets"}},[e._v("FireFox")]),e._v(". If you are using them, I promise there should be some code by me running on your PC :)\n                ")])])],1),e._v(" "),n("v-row",[n("v-card",{staticClass:"mx-auto card-row",attrs:{outlined:""}},[n("v-card-title",{staticClass:"headline"},[e._v("\n            Education\n        ")]),e._v(" "),n("v-card-text",e._l(e.education,function(t){return n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"item-title"},[n("div",[e._v("\n                        "+e._s(t.school)+" "+e._s(t.location)+"\n                    ")]),e._v(" "),n("div",[e._v("\n                        "+e._s(t.time)+"\n                    ")])]),e._v(" "),n("v-list-item-subtitle",[e._v(e._s(t.degree))])],1)],1)}),1)],1)],1),e._v(" "),n("v-row",[n("v-card",{staticClass:"mx-auto card-row",attrs:{outlined:""}},[n("v-card-title",{staticClass:"headline"},[e._v("\n            Experience\n        ")]),e._v(" "),n("v-card-text",e._l(e.experience,function(t){return n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"item-title"},[n("div",[e._v("\n                        "+e._s(t.company)+" "+e._s(t.location)+"\n                    ")]),e._v(" "),n("div",[e._v("\n                        "+e._s(t.time)+"\n                    ")])]),e._v(" "),n("v-list-item-subtitle",[e._v(e._s(t.tech)+" "+e._s(t.bu))]),e._v(" "),e._l(t.content,function(t){return n("p",[e._v("\n                    "+e._s(t)+"\n                ")])})],2)],1)}),1)],1)],1),e._v(" "),n("v-row",[n("v-card",{staticClass:"mx-auto card-row",attrs:{outlined:""}},[n("v-card-title",{staticClass:"headline"},[e._v("\n            Project\n        ")]),e._v(" "),n("v-card-text",e._l(e.project,function(t){return n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"item-title"},[n("div",[e._v("\n                        "+e._s(t.name)+"\n                    ")]),e._v(" "),n("div",[e._v("\n                        "+e._s(t.time)+"\n                    ")])]),e._v(" "),n("v-list-item-subtitle",[e._v(e._s(t.tech)+" "+e._s(t.category))]),e._v(" "),e._l(t.content,function(t){return n("p",[e._v("\n                    "+e._s(t)+"\n                ")])})],2)],1)}),1)],1)],1)],1)],1)},[],!1,null,"3e69bff8",null);t.default=r.exports}}]);