(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{217:function(e,t,n){},372:function(e,t,n){"use strict";var a=n(217);n.n(a).a},393:function(e,t,n){"use strict";n.r(t);var a={data:function(){return{education:[{school:"Zhejiang University",location:"Hangzhou, China",time:"2017 – Present",degree:"B.E. in Computer Engineering, expected May 2021"}],experience:[{company:"Alibaba Group.",location:"Hangzhou, China",time:"June. 2020 – Present",tech:"C++, Clang, LLVM, Tensorflow",bu:"Intern at Search and Recommendation Business Unit",content:["Take optimization on online rank service for search infrastructure of Taobao, Tmall, Aliexpress, which support over 100K query per second.","Build up an automated JIT compilation system for the online rank service, which uses Clang/LLVM based toolchain to rewrite dynamic part of the origin code and generate equivalent high performance static representation, and finally boosted more than 10% performance of rank service."]},{company:"Bytedance Inc.",location:"Beijing, China",time:"April. 2020 – June. 2020",tech:"Golang, Thrift, Protobuf",bu:"Intern at Lark Core Services Team",content:["",""]},{company:"Tencent Inc.",location:"Shenzhen, China",time:"June. 2019 – August. 2019",tech:"Golang, Kubernetes, Python, Protobuf",bu:"Intern at Cloud & Smart Industries Business Group (CSIG)",content:["Implement a distributed performance testing tool for an inner RPC framework by providing a JavaScript Runtime(ES6+) and realtime serialization, which became an inner opensource project in Tencent.","Build several RPC services with Golang covering more than 30 million target users, which take requests into batches and schedule&distribute them to machine learning engines by message queue.","Build up a unified log collecting platform by logstash, Elasticsearch and Kibana, implement a Golang SDK.","Adapt Protobuf+RPC pattern into message queue, and orchestrate auto-scalable ML engines on Kubernetes."]},{company:"YiWise Inc.",location:"Hangzhou, China",time:"June. 2018 – September. 2018",tech:"Vue, WebSocket, Electron.js, Typescript",bu:"Software Developer of Summer Intern",content:["Building an AI call platform application with Vue and Typescript, as well as a multi-thread record audio downloader with electron.js.","Implement the authentication and permission part of the platform.","Lead the restructure for original codebase with TypeScript.","Implement real-time call service by using WebSocket and WebRTC.","Build up CI/CD pipeline for the front-end application by using docker."]}],project:[{name:"WeirdOS",time:"October. 2019 – December. 2019",tech:"Pure C, Assemble(x86), Qemu",category:"Course Project",content:["WeirdOS is a Linux like operating system under x86-32 instruction set, which is derived from final project of ECE391@UIUC. The project won 2nd place in ECE391 final competition sponsored by Microsoft. The following features were implemented in the OS,","Course required features: memory paging, read-only filesystem, context switch, Round-robin scheduler, interrupt handlers, system calls.","Extra features: dynamic memory allocator, DOM based GUI and layer1-5 network stack.","A plain Internet browser by combining GUI and network stack."]},{name:"Open Source Contribution for VSCode and FireFox",time:"August. 2018 – Present",tech:"TypeScript, Electron.js, React",category:"Fixed several bugs as well as adding features",content:["Brief introduction: Later 2018, I participated development of the open source project – VSCode, help the team fix several bugs related to git module and search widget. This experience brought me a strong interest in contributing for open source project. In 2019, I joined the Mozilla Developer community, making contribution for FireFox DevTools, which is challenging and also interesting."]},{name:"Recruit Open Platform",time:"May. 2018 – Present",tech:"Golang, Vue, NodeJS, Docker Swarm, gRPC, Prometheus",category:"Major Developer",content:["The project is aimed at providing a platform for associations to manage their annual recruitment which supports form edit, interview and association management.","Divide the large system into several micro-services by using gRPC and Traefik(service discovery + load balancing).","Implement server side rendering for the form submit page (running Vue.js on server side).","Manage the deployment on clusters by Docker Swarm, supporting realtime monitor and alert with Prometheus, Grafana."]}]}},mounted:function(){}},r=(n(372),n(1)),i=Object(r.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-container"},[n("v-container",{staticClass:"main-container"},[n("v-row",{staticStyle:{"line-height":"1.4"}},[n("v-col",{staticStyle:{margin:"20px 0px"},attrs:{lg:"3"}},[n("v-img",{attrs:{contain:"","lazy-src":"img/photo.jpg",height:"250",src:"img/photo.jpg"}})],1),e._v(" "),n("v-col",{attrs:{lg:"9"}},[n("h1",[e._v("Wenqing Luo "),n("a",{staticStyle:{"font-size":"20px"},attrs:{target:"_blank",href:"resume.pdf"}},[e._v("[CV]")])]),e._v(" "),n("ul",[n("li",[e._v("Email: "),n("a",{attrs:{href:"mailto:wenqing4@illinois.edu"}},[e._v("wenqing4@illinois.edu")])]),e._v(" "),n("li",[e._v("GitHub: "),n("a",{attrs:{target:"_blank",href:"https://github.com/laphets"}},[e._v("laphets")])]),e._v(" "),n("li",[e._v("Linkedin: "),n("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/wenqing-luo-823788146/"}},[e._v("Wenqing Luo")])]),e._v(" "),n("li",[e._v("Blog: "),n("router-link",{attrs:{to:"/blog"}},[e._v("Laphets's Blog")])],1)]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("\n                        I'm Wenqing, a first year M.S. student in the "),n("a",{attrs:{target:"_blank",href:"https://cs.illinois.edu"}},[e._v(" Department of Computer Science")]),e._v(" at "),n("a",{attrs:{target:"_blank",href:"https://illinois.edu/"}},[e._v("University of Illinois at Urbana-Champaign")]),e._v(".\n                        I am advised by  "),n("a",{attrs:{target:"_blank",href:"https://tianyin.github.io"}},[e._v("Prof. Tianyin Xu")]),e._v(".\n                        I have recently graduated from the joint institute of "),n("a",{attrs:{target:"_blank",href:"https://www.zju.edu.cn/english/"}},[e._v("Zhejiang University")]),e._v(" - "),n("a",{attrs:{target:"_blank",href:"https://illinois.edu/"}},[e._v("University of Illinois at Urbana-Champaign")]),e._v(", \n                        major in Computer Engineering. \n                    ")]),e._v(" "),n("p",[e._v("\n                        I'm now working on the "),n("a",{attrs:{target:"_blank",href:"https://github.com/sieve-project/sieve"}},[e._v("Sieve project")]),e._v(", which systematically tests "),n("a",{attrs:{target:"_blank",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"}},[e._v("Kubernetes operators")]),e._v(" to harden them against\nscenarios like asynchrony, unexpected failures, networking issues, and controller restarts. So far, our project has already discovered (and led to fixes for) more than 30 safety-critical bugs in popular\nKubernetes controllers for Zookeeper, Cassandra, RabbitMQ, MongoDB, XtraDB, etc.\n                    ")]),e._v(" "),n("p",[e._v("\n                        During my undergraduate study, I worked at the Search Engine team of "),n("a",{attrs:{target:"_blank",href:"https://www.alibabagroup.com/en/global/home"}},[e._v("Alibaba")]),e._v(", building large-scale search infrastructure supporting "),n("a",{attrs:{target:"_blank",href:"https://www.taobao.com/"}},[e._v("Taobao")]),e._v(", "),n("a",{attrs:{target:"_blank",href:"https://www.tmall.com/"}},[e._v("Tmall")]),e._v(", "),n("a",{attrs:{target:"_blank",href:"https://www.aliexpress.com"}},[e._v("Aliexpress")]),e._v(" etc with over 100K QPS in total.\n                        Before joining Alibaba, I also worked with "),n("a",{attrs:{target:"_blank",href:"https://www.tencent.com/en-us"}},[e._v("Tencent")]),e._v(" to build a distributed performance testing system which attaches a JavaScript Runtime backed by "),n("a",{attrs:{target:"_blank",href:"https://golang.org/"}},[e._v("Golang")]),e._v(". The project later becomes a popular production-grade project used by many teams at Tencent.\n                        I also worked at the networking and virtualization team of "),n("a",{attrs:{target:"_blank",href:"https://www.bytedance.com/en/"}},[e._v("ByteDance")]),e._v(", using the "),n("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/TCP_offload_engine"}},[e._v("Kernel-Bypass strategy")]),e._v(" to optimize "),n("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/Service_mesh"}},[e._v("service mesh")]),e._v(" performance.\n                        ")]),e._v(" "),n("p",[e._v("\n                        I love open-source, and enjoy the process of building a project which can benefit many others' lives. \n                        \n                        I'm also a contributor of "),n("a",{attrs:{target:"_blank",href:"https://github.com/microsoft/vscode/pulls?q=is%3Apr+author%3Alaphets"}},[e._v("VSCode")]),e._v(" and "),n("a",{attrs:{target:"_blank",href:"https://hg.mozilla.org/mozilla-central/log?rev=laphets"}},[e._v("FireFox")]),e._v(". If you are using them, you are running some code written by me :)\n                    ")])])],1)],1)],1)},[],!1,null,"2548eb0d",null);t.default=i.exports}}]);