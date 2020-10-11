<template>
    <div class="home-container">
        <v-container>
            <v-row>
                <v-col lg="3">
                    <v-img
                    contain
                    lazy-src="img/profile.jpg"
                    height="250"
                    src="img/profile.jpg"
                    ></v-img>
                </v-col>
                <v-col lg="9">
                    <h1>Wenqing Luo</h1>
                    <ul>
                        <li>Email: <a href="mailto:wenqing4@illinois.edu">wenqing4@illinois.edu</a></li>
                        <li>GitHub: <a target="_blank" href="https://github.com/laphets">laphets</a></li>
                        <li>Linkedin: <a target="_blank" href="https://www.linkedin.com/in/wenqing-luo-823788146/">Wenqing Luo</a></li>
                        <li>Blog: <router-link :to="'/blog'">Laphets's Blog</router-link></li>
                    </ul>
                    
                    <p></p>
                </v-col>   
            </v-row>

    <v-row class="card-row">
        <v-card
        class="mx-auto"
        outlined
        >
            <v-card-title class="headline">
                Education
            </v-card-title>
            <v-card-text>
            <v-list-item v-for="item in education" two-line>
                <v-list-item-content>
                    <v-list-item-title>
                    {{item.school}} {{item.location}} {{item.time}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{item.degree}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-card-text>
        </v-card>
    </v-row>

    <v-row class="card-row">
        <v-card
        class="mx-auto"
        outlined
        >
            <v-card-title class="headline">
                Experience
            </v-card-title>
            <v-card-text>
            <v-list-item v-for="item in experience" two-line>
                <v-list-item-content>
                    <v-list-item-title>
                    {{item.company}} {{item.location}} {{item.time}}
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

    <v-row class="card-row">
        <v-card
        class="mx-auto"
        outlined
        >
            <v-card-title class="headline">
                Project
            </v-card-title>
            <v-card-text>
            <v-list-item v-for="item in project" two-line>
                <v-list-item-content>
                    <v-list-item-title>
                    {{item.name}} {{item.time}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{item.tech}} {{item.category}}</v-list-item-subtitle>

                    <p v-for="content in item.content">
                        {{content}}
                    </p>

                </v-list-item-content>
            </v-list-item>
            </v-card-text>
        </v-card>
    </v-row>
    

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
                        "WeirdOS is a Linux like operating system under x86-32 instruction set, which is derived from final project of ECE391@UIUC. The project won 2nd place in ECE391 final competition sponsored by Microsoft. The following features were implemented in the OS,",
                        "Course required features: memory paging, read-only filesystem, context switch, Round-robin scheduler, interrupt handlers, system calls.",
                        "Extra features: dynamic memory allocator, DOM based GUI and layer1-5 network stack.",
                        "A plain Internet browser by combining GUI and network stack.",
                    ]
                },
                {
                    name: "WeirdOS",
                    time: "October. 2019 – December. 2019",
                    tech: "Pure C, Assemble(x86), Qemu",
                    content: [
                        "Brief introduction: Later 2018, I participated development of the open source project – VSCode, help the team fix several bugs related to git module and search widget. This experience brought me a strong interest in contributing for open source project. In 2019, I joined the Mozilla Developer community, making contribution for FireFox DevTools, which is challenging and also interesting.",
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
    .card-row {
        margin: 12px 0px;
        width: 100%;
    }
}
</style>
