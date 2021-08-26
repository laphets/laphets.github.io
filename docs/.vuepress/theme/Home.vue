<template>
    <div class="home-container">
        <v-container class="main-container">
            <v-row style="line-height: 1.4;">
                <v-col lg="3" style="margin: 20px 0px;">
                    <v-img
                    contain
                    lazy-src="img/photo.jpg"
                    height="250"
                    src="img/photo.jpg"
                    ></v-img>
                </v-col>
                <v-col lg="9">
                    <h1>Wenqing Luo <a style="font-size: 20px;" target="_blank" href="resume.pdf">[CV]</a></h1>  
                    <ul>
                        <li>Email: <a href="mailto:wenqing4@illinois.edu">wenqing4@illinois.edu</a></li>
                        <li>GitHub: <a target="_blank" href="https://github.com/laphets">laphets</a></li>
                        <li>Linkedin: <a target="_blank" href="https://www.linkedin.com/in/wenqing-luo-823788146/">Wenqing Luo</a></li>
                        <li>Blog: <router-link :to="'/blog'">Laphets's Blog</router-link></li>
                    </ul>
                    <br>
                    <p>
                        I'm Wenqing, a first year M.S. student in the <a target="_blank" href="https://cs.illinois.edu"> Department of Computer Science</a> at <a target="_blank" href="https://illinois.edu/">University of Illinois at Urbana-Champaign</a>.
                        I am advised by  <a target="_blank" href="https://tianyin.github.io">Prof. Tianyin Xu</a>.
                        I have recently graduated from the joint institute of <a target="_blank" href="https://www.zju.edu.cn/english/">Zhejiang University</a> - <a target="_blank" href="https://illinois.edu/">University of Illinois at Urbana-Champaign</a>, 
                        major in Computer Engineering. 
                    </p>

                    <p>
                        I'm now working on the <a target="_blank" href="https://github.com/sieve-project/sieve">Sieve project</a>, which uses partial histories to automatically detect and replay bugs in <a target="_blank" href="https://kubernetes.io/docs/concepts/extend-kubernetes/operator/">Kubernetes operators</a>. 
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
                        I love open-source, and enjoy the process of building a project which can benefit many others' lives. 
                        
                        I'm also a contributor of <a target="_blank" href="https://github.com/microsoft/vscode/pulls?q=is%3Apr+author%3Alaphets">VSCode</a> and <a target="_blank" href="https://hg.mozilla.org/mozilla-central/log?rev=laphets">FireFox</a>. If you are using them, you are running some code written by me :)
                    </p>
                </v-col>
            </v-row>

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
    @media screen and (min-width: 800px) {
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
            margin: 1px 0px;
        }
    }
</style>
