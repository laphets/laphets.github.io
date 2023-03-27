<template>
    <div class="home-container">
        <v-container class="main-container">
            <v-row style="line-height: 1.4;">
                <v-col lg="3" class="img-container">
                    <v-img
                    contain
                    lazy-src="img/photo.jpg"
                    height="250"
                    src="img/photo.jpg"
                    ></v-img>
                    <div class="img-caption">Aug 2020 @ Hulunbuir</div>
                </v-col>
                <v-col lg="9">
                    <h1>Wenqing Luo <a style="font-size: 20px; font-weight: 500;" target="_blank" href="resume.pdf">[CV]</a></h1>  
                    <!-- <h2>Connect</h2> -->
                    <ul>
                        <li>Email: <a href="mailto:wenqing4@illinois.edu">wenqing4@illinois.edu</a></li>
                        <li>GitHub: <a target="_blank" href="https://github.com/laphets">laphets</a></li>
                        <li>Linkedin: <a target="_blank" href="https://www.linkedin.com/in/wenqingluo">Wenqing Luo</a></li>
                        <li>Blog: <router-link :to="'/blog'">Laphets's Blog</router-link></li>
                    </ul>
                    <h2>About</h2>
                    <p>
                        I'm Wenqing, a second year M.S. student in the <a target="_blank" href="https://cs.illinois.edu"> Department of Computer Science</a> at <a target="_blank" href="https://illinois.edu/">University of Illinois at Urbana-Champaign</a>.
                        I am co-advised by <a target="_blank" href="https://tianyin.github.io">Prof. Tianyin Xu</a>, <a target="_blank" href="https://aishwaryaganesan.github.io">Prof. Aishwarya Ganesan</a>, and <a target="_blank" href="https://ramalagappan.github.io">Prof. Ramnatthan Alagappan</a>.
                        I got my bachelor degree from the joint institute of <a target="_blank" href="https://www.zju.edu.cn/english/">Zhejiang University</a> - <a target="_blank" href="https://illinois.edu/">University of Illinois at Urbana-Champaign</a>, 
                        major in Computer Engineering. 
                    </p>

                    <p>
                        I was working on the <a target="_blank" href="https://github.com/sieve-project/sieve">Sieve project</a> during the past year, which systematically tests <a target="_blank" href="https://kubernetes.io/docs/concepts/extend-kubernetes/operator/">Kubernetes operators</a> to harden them against
scenarios like asynchrony, unexpected failures, networking issues, and controller restarts. So far, our project has already discovered (and led to fixes for) more than 30 safety-critical bugs in popular
Kubernetes controllers for Zookeeper, Cassandra, RabbitMQ, MongoDB, XtraDB, etc. The <a style="cursor: pointer;" @click="dialog = true">Sieve paper</a> was accepted to <a target="_blank" href="https://www.usenix.org/conference/osdi22/presentation/sun">OSDI'22</a>!
                    </p>


                    <p>
                        I spent a wonderful summer at <a target="_blank" href="https://en.wikipedia.org/wiki/Apple_Park"> Park</a> working on <a target="_blank" href="https://www.apple.com/safari">Safari</a> and <a target="_blank" href="https://webkit.org">WebKit</a>. I added support for web extension <a target="_blank" href="https://webkit.org/blog/13966/webkit-features-in-safari-16-4/#session-storage">session storage API</a> in Safari, which was shipped with <a target="_blank" href="https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-16_4-release-notes#Safari-Web-Extensions">iOS 16</a> and <a target="_blank" href="https://developer.apple.com/documentation/macos-release-notes/macos-13_3-release-notes#Safari-Web-Extensions">macOS Ventura 13</a>.
                        <!-- <span style="color: white;"> Switching to use Safari these days ::</span> -->
                        <!-- Although building products living on billions of devices is definitely interesting and impactful, I believe working on large-scale infrastructure and dealing with complexity of distributed systems would be a better fit for me, and hence, I decided to join <a target="_blank" href="https://www.apple.com"></a> Cloud Infrastructure team after graduation. -->
                    </p>

                    <p>
                        I will be back to <a target="_blank" href="https://en.wikipedia.org/wiki/Cupertino,_California">Cupertino</a> and join <a target="_blank" href="https://www.apple.com"></a> Cloud Infrastructure team starting from the coming summer.
                    </p>

                    <p>
                        During my undergraduate study, I worked at the Search Engine team of <a target="_blank" href="https://www.alibabagroup.com/en/global/home">Alibaba</a>, building large-scale search infrastructure supporting <a target="_blank" href="https://www.taobao.com/">Taobao</a>, <a target="_blank" href="https://www.tmall.com/">Tmall</a>, <a target="_blank" href="https://www.aliexpress.com">Aliexpress</a> etc with over 100K QPS in total.
                        Before joining Alibaba, I also worked with <a target="_blank" href="https://www.tencent.com/en-us">Tencent</a> to build a distributed performance testing system which attaches a JavaScript Runtime backed by <a target="_blank" href="https://golang.org/">Golang</a>. The project later becomes a popular production-grade project used by many teams at Tencent.
                        I also worked at the networking and virtualization team of <a target="_blank" href="https://www.bytedance.com/en/">ByteDance</a>, using the <a target="_blank" href="https://en.wikipedia.org/wiki/TCP_offload_engine">Kernel-Bypass strategy</a> to optimize <a target="_blank" href="https://en.wikipedia.org/wiki/Service_mesh">service mesh</a> performance.
                        <!-- During my junior year, I also spent 3 month at Lark Core Service Team of <a target="_blank" href="https://www.bytedance.com/en/">ByteDance</a>, building the core backend service for a <a target="_blank" href="https://www.larksuite.com/">Next-Gen Collaboration Suite</a>. -->
                        <!-- I have a widely industrial experience.  -->
                        <!-- Also I'm now intern at search engine team  -->
                    </p>
                    <p>
                        I love open-source, and enjoy the process of building something that can benefit many others' lives. 
                        
                        I'm also a contributor of <a target="_blank" href="https://github.com/microsoft/vscode/pulls?q=is%3Apr+author%3Alaphets">VSCode</a> and <a target="_blank" href="https://hg.mozilla.org/mozilla-central/log?rev=laphets">FireFox</a>. If you are using them, you are running some code written by me :)
                    </p>
                </v-col>
            </v-row>

            <div data-app>
                <v-dialog v-model="dialog" max-width="800">
                <v-card>
                    <div style="padding: 10px 12px;">
                        <div>
                            <b style="font-size: 18px;">Automatic Reliability Testing for Cluster Management Controllers</b>
                        </div>
                        <div style="margin: 1px 0px;">
                            Xudong Sun, <b>Wenqing Luo</b>, Jiawei Tyler Gu, Aishwarya Ganesan, Ramnatthan Alagappan, Michael Gasch, Lalith Suresh, and Tianyin Xu
                        </div>
                        <div>
                            In Proceedings of the 16th USENIX Symposium on Operating Systems Design and Implementation (OSDI'22), Carlsbad, CA, USA, Jul. 2022.
                        </div>
                    </div>
                </v-card>
                </v-dialog>
            </div>


    <!-- <v-row>
        <v-card
        class="mx-auto card-row"
        outlined
        >
            <v-card-title class="headline">
                Education
            </v-card-title>
            <v-card-text>
            <v-list-item v-for="item in education" two-line>
                <v-list-item-content>
                    <v-list-item-title class="item-title">
                        <div>
                            {{item.school}} {{item.location}}
                        </div>
                        <div>
                            {{item.time}}
                        </div>
                     
                    </v-list-item-title>
                    <v-list-item-subtitle>{{item.degree}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-card-text>
        </v-card>
    </v-row>

    <v-row>
        <v-card
        class="mx-auto card-row"
        outlined
        >
            <v-card-title class="headline">
                Experience
            </v-card-title>
            <v-card-text>
            <v-list-item v-for="item in experience" two-line>
                <v-list-item-content>
                    <v-list-item-title class="item-title">
                        <div>
                            {{item.company}} {{item.location}}
                        </div>
                        <div>
                            {{item.time}}
                        </div>
                     
                    </v-list-item-title>
                    <v-list-item-subtitle>{{item.tech}} {{item.bu}}</v-list-item-subtitle>

                    <p v-for="content in item.content">
                        {{content}}
                    </p>

                </v-list-item-content>
            </v-list-item>
            </v-card-text>
        </v-card>
    </v-row>

    <v-row>
        <v-card
        class="mx-auto card-row"
        outlined
        >
            <v-card-title class="headline">
                Project
            </v-card-title>
            <v-card-text>
            <v-list-item v-for="item in project" two-line>
                <v-list-item-content>
                    <v-list-item-title class="item-title">
                        <div>
                            {{item.name}}
                        </div>
                        <div>
                            {{item.time}}
                        </div>
                     
                    </v-list-item-title>
                    <v-list-item-subtitle>{{item.tech}} {{item.category}}</v-list-item-subtitle>

                    <p v-for="content in item.content">
                        {{content}}
                    </p>

                </v-list-item-content>
            </v-list-item>
            </v-card-text>
        </v-card>
    </v-row> -->
    

        </v-container>
        
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            education: [
                {
                    school: "Zhejiang University",
                    location: "Hangzhou, China",
                    time: "2017 – Present",
                    degree: "B.E. in Computer Engineering, expected May 2021"
                }
            ],
            experience: [
                {
                    company: "Alibaba Group.",
                    location: "Hangzhou, China",
                    time: "June. 2020 – Present",
                    tech: "C++, Clang, LLVM, Tensorflow",
                    bu: "Intern at Search and Recommendation Business Unit",
                    content: [
                        "Take optimization on online rank service for search infrastructure of Taobao, Tmall, Aliexpress, which support over 100K query per second.",
                        "Build up an automated JIT compilation system for the online rank service, which uses Clang/LLVM based toolchain to rewrite dynamic part of the origin code and generate equivalent high performance static representation, and finally boosted more than 10% performance of rank service."
                    ]
                },
                {
                    company: "Bytedance Inc.",
                    location: "Beijing, China",
                    time: "April. 2020 – June. 2020",
                    tech: "Golang, Thrift, Protobuf",
                    bu: "Intern at Lark Core Services Team",
                    content: [
                        "",
                        "",

                    ]
                },
                {
                    company: "Tencent Inc.",
                    location: "Shenzhen, China",
                    time: "June. 2019 – August. 2019",
                    tech: "Golang, Kubernetes, Python, Protobuf",
                    bu: "Intern at Cloud & Smart Industries Business Group (CSIG)",
                    content: [
                        "Implement a distributed performance testing tool for an inner RPC framework by providing a JavaScript Runtime(ES6+) and realtime serialization, which became an inner opensource project in Tencent.",
                        "Build several RPC services with Golang covering more than 30 million target users, which take requests into batches and schedule&distribute them to machine learning engines by message queue.",
                        "Build up a unified log collecting platform by logstash, Elasticsearch and Kibana, implement a Golang SDK.",
                        "Adapt Protobuf+RPC pattern into message queue, and orchestrate auto-scalable ML engines on Kubernetes.",
                    ]
                },
                {
                    company: "YiWise Inc.",
                    location: "Hangzhou, China",
                    time: "June. 2018 – September. 2018",
                    tech: "Vue, WebSocket, Electron.js, Typescript",
                    bu: "Software Developer of Summer Intern",
                    content: [
                        "Building an AI call platform application with Vue and Typescript, as well as a multi-thread record audio downloader with electron.js.",
                        "Implement the authentication and permission part of the platform.",
                        "Lead the restructure for original codebase with TypeScript.",
                        "Implement real-time call service by using WebSocket and WebRTC.",
                        "Build up CI/CD pipeline for the front-end application by using docker.",
                    ]
                },
            ],
            project: [
                {
                    name: "WeirdOS",
                    time: "October. 2019 – December. 2019",
                    tech: "Pure C, Assemble(x86), Qemu",
                    category: "Course Project",
                    content: [
                        "WeirdOS is a Linux like operating system under x86-32 instruction set, which is derived from final project of ECE391@UIUC. The project won 2nd place in ECE391 final competition sponsored by Microsoft. The following features were implemented in the OS,",
                        "Course required features: memory paging, read-only filesystem, context switch, Round-robin scheduler, interrupt handlers, system calls.",
                        "Extra features: dynamic memory allocator, DOM based GUI and layer1-5 network stack.",
                        "A plain Internet browser by combining GUI and network stack.",
                    ]
                },
                {
                    name: "Open Source Contribution for VSCode and FireFox",
                    time: "August. 2018 – Present",
                    tech: "TypeScript, Electron.js, React",
                    category: "Fixed several bugs as well as adding features",
                    content: [
                        "Brief introduction: Later 2018, I participated development of the open source project – VSCode, help the team fix several bugs related to git module and search widget. This experience brought me a strong interest in contributing for open source project. In 2019, I joined the Mozilla Developer community, making contribution for FireFox DevTools, which is challenging and also interesting.",
                    ]
                },
                {
                    name: "Recruit Open Platform",
                    time: "May. 2018 – Present",
                    tech: "Golang, Vue, NodeJS, Docker Swarm, gRPC, Prometheus",
                    category: "Major Developer",
                    content: [
                        "The project is aimed at providing a platform for associations to manage their annual recruitment which supports form edit, interview and association management.",
                        "Divide the large system into several micro-services by using gRPC and Traefik(service discovery + load balancing).",
                        "Implement server side rendering for the form submit page (running Vue.js on server side).",
                        "Manage the deployment on clusters by Docker Swarm, supporting realtime monitor and alert with Prometheus, Grafana.",
                    ]
                },
            ]
        }
    },
    mounted() {
        
    }
}
</script>

<style lang="stylus" scoped>
.home-container {
    @media screen and (min-width: 1264px) {
        height: 100vh;
        display: flex;
        align-items: center;
        
    }
    
    padding: 0px 20px;
    .card-row {
        margin: 12px 0px;
        width: 100%;
    }
    .item-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }

    
}
.main-container {
        @media screen and (min-width: 1264px) {
            margin-bottom: 50px;
        }
        p {
            margin: 5px 0px;
        }
    }

.apple {
    color:#555555;
}
.apple:hover {
    color:#d6d6d6;
}
a:hover {
    // color:#3d5afe;
    // text-decoration: underline;
    background: #e3f2fd;
}
h1 {
    // font-family: "Open Sans", sans-serif;
    font-weight: 400;
    margin: 0px 0px 2px 0px;
}
h2 {
    // font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 1.45em;
    margin: 6px 0px 3px 0px;
}
ul {
  list-style-type: none !important; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}
.img-caption {
    text-align: center;
    font-size: 12px;
    line-height: 10px;
    margin-top: 3px;
    color: white;
}
.img-container {
    margin: 20px 0px 0px 0px;
    @media screen and (min-width: 1264px) {
        margin: 10px 0px;
    }
}
// a:visited { 
//   color: pink;
// }
</style>
