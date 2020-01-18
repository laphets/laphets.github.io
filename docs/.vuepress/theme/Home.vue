<template>
    <div class="home-container">
        <div class="outer" :style="bgObj">
            <div class="circle xxlarge shade1"></div>
            <div class="circle xlarge shade2"></div>
            <div class="circle large shade3"></div>
            <div class="circle medium shade4"></div>
            <div class="circle small shade5"></div>
            <div class="container-outer">
                <div class="header">
                    <div class="left">
                        <router-link class="non-link" :to="'/'">{{$site.title}}</router-link>
                    </div >
                    <div class="right">
                        <div v-for="(item, index) in $site.themeConfig.nav" :key="index">
                            <router-link v-if="!item.nonroute" class="non-link" :to="item.link"><v-btn text color="#fff">{{item.text}}</v-btn></router-link>
                            <a class="non-link" target="_blank" :href="item.link" v-else>{{item.text}}</a>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div class="welcome">
                    <!-- 404 FOUND EVERYTHING -->
                </div>
                <div class="sub">
                    How a creative bug maker makes creative bugs -->
                </div>
                
            </main>
        </div>


        <div class="post-container">
            <v-container>
                <v-row>
                    <v-col cols="auto" md="8" >
                        <div class="post-list">
                            <div v-for="(post, index) in paged_posts" v-if="post.title" :key="index">
                                    <v-card
                                        style="margin-bottom: 30px;"
                                        width="700"
                                        :shaped="true"
                                    >
                                        <v-card-text>
                                        <div style="font-size: 30px; color: black; font-size: 28px; padding: 0px 0px 2px 0px;line-height: 30px;">{{post.title}}</div>
                                        <div style="color: rgba(0, 0, 0, 0.6); padding: 0px 0px 14px 0px;">{{transTime(post.frontmatter.date)}}</div>
                                        <!-- <div>{{post.excerpt}}</div> -->
                                        <div v-if="post.excerpt" v-html="post.excerpt"></div>
                                        <div v-else>No Excerpt</div>
                                        <div>
                                            <v-chip
                                            style="margin:10px 0px -20px 0px;"
                                            color="#5626e1"
                                            outlined
                                            small
                                            v-if="post.frontmatter.tags"
                                            >
                                            <!-- <v-icon left>mdi-label</v-icon> -->
                                                {{post.frontmatter.tags}}
                                            </v-chip>
                                        </div>
                                        </v-card-text>
                                        
                                        <v-card-actions>
                                        <v-btn
                                        :to="post.path"
                                            text
                                            color="deep-purple accent-4"
                                        >
                                            View More
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                <!-- <div class="title">
                                    <router-link class="href" :to="post.path">
                                        {{post.title}}
                                    </router-link>
                                    
                                </div>
                                <div class="content">

                                </div>
                                <div class="time">

                                </div> -->
                            </div>
                        </div>
                    </v-col>

                    <v-spacer></v-spacer>
                    <v-col cols="4"  md="4">
                        <div class="post-sidebar">
                            <v-card

                                width="300"
                                class="mx-auto"
                            >
                                <v-navigation-drawer width="300" permanent>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title class="title">
                                        Recommended Posts
                                    </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list
                                    dense
                                    nav
                                >
                                    <v-list-item
                                    v-for="(post, index) in recommand_posts"
                                    :key="index"
                                    :to="post.path"
                                    link
                                    >
                                    <!-- <v-list-item-icon> -->
                                        <!-- <v-icon>home</v-icon> -->
                                        <v-icon style="margin-right: 10px;">mdi-call-split</v-icon>
                                    <!-- </v-list-item-icon> -->

                                    <!-- <v-list-item-content> -->
                                        {{ post.title }}
                                        <!-- <v-list-item-title></v-list-item-title> -->
                                    <!-- </v-list-item-content> -->
                                    </v-list-item>
                                </v-list>
                                </v-navigation-drawer>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-container>

        


        </div>

        <div class="text-center" style="margin: 0px 10px 0px 10px;">
            <v-pagination
            v-model="page"
            color= "#2773eb"
            :length="page_length"
            prev-icon="mdi-chevron-left"
            next-icon="mdi-chevron-right"
            :total-visible="10"
            ></v-pagination>
        </div>



        <v-footer
            class="footer"
            color="#3875e3"
            padless
        >
        Copyright © 2015-{{ new Date().getFullYear() }} &nbsp; <strong>Laphets</strong>. All Rights Reserved.
        </v-footer>
    </div>
</template>

<script>
import Typed from 'typed.js';
import moment from 'moment';
export default {
    data() {
        return {
            bgObj: {
                background: '#3399ff'
                // background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(104,9,121,1) 42%, rgba(0,144,255,1) 100%)'
            },
            page: 1,
            posts: [],
            post_per_page: 12,
            recommand_posts: [],
            right: null,
        }
    },
    created() {
        // console.log(this)
        // console.log(this.$site)
        // console.log(this.$page)
    },
    mounted() {
        const typed = new Typed('.welcome', {
            strings: ["404 FOUND NOTHING", "418 I'M A TEAPOT"],
            typeSpeed: 60,
            showCursor: false,
        });

        for(let i = 0; i < 8; i++) {
            const post = this.$site.pages[Math.floor((Math.random()*this.$site.pages.length))]
            if(!post.title)
                continue;
            this.recommand_posts.push({title: post.title, path: post.path})
        }

        // setTimeout(() => {
        //     this.bgObj.background = 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(104,9,121,1) 90%, rgba(0,144,255,1) 100%)';
        // }, 2000);
    },
    methods: {
        transTime(time) {
            return moment(time).format('lll');
        }
    },
    computed: {
        paged_posts() {
            return (this.$site.pages).slice((this.page-1) * this.post_per_page, this.page * this.post_per_page);
        },
        page_length() {
            return Math.ceil(this.$site.pages.length / this.post_per_page)
        }
    }
}
</script>

<style lang="stylus" scoped>
.post-container {
    font-family: "Roboto", sans-serif !important;
    padding: 40px 120px;
    // display: flex;
    // justify-content: space-between;
    @media (max-width: 960px) {
        .post-sidebar {
            display: none;
        }
    }

    
    .title {
        // font-family: medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important;
        font-size: 24px!important;
        line-height: 28px!important;
        -webkit-transform: translateY(-.72px);
        transform: translateY(-.72px);
        letter-spacing: -.42px!important;
        text-overflow: ellipsis!important;
        .href {
            text-decoration:none;
            out-line: none;
            color: rgba(0,0,0,.84);
        }
    }
}
@media (max-width: 767px) {
    .post-container {
        padding: 20px 30px 0px;
    }
}

.footer {
    height: 58px;
    display: flex;
    justify-content: center;
    justify-items: center;
    color: white;
    margin-top: 40px;
}

.outer {

    .circle{
        position: absolute;
        border-radius: 50%;
        background: white;
        animation: ripple 15s infinite;
        box-shadow: 0px 0px 1px 0px #508fb9;
    }
    .small{
        width: 180px;
        height: 180px;
        left: -90px;
        bottom: -90px;
    }
    .medium{
        width: 400px;
        height: 400px;
        left: -200px;
        bottom: -200px;
    }
    .large{
        width: 600px;
        height: 600px;
        left: -300px;
        bottom: -300px;
    }
    .xlarge{
        width: 800px;
        height: 800px;
        left: -400px;
        bottom: -400px;
    }
    .xxlarge{
        width: 1000px;
        height: 1000px;
        left: -500px;
        bottom: -500px;
    }
    .shade1{
        opacity: 0.2;
    }
    .shade2{
        opacity: 0.3;
    }
    .shade3{
        opacity: 0.5;
    }
    .shade4{
        opacity: 0.6;
    }
    .shade5{
        opacity: 0.7;
    }
    @keyframes ripple{
        0%{
            transform: scale(0.8);
        }
        
        50%{
            transform: scale(1.2);
        }
        
        100%{
            transform: scale(0.8);
        }
    }



    @media (max-width: 767px) {
        .welcome {
            font-size: 50px !important;
        }  
        .sub {
            font-size: 18px !important;
        }
        .left {
            font-size: 28px !important;
        }
        .header {
            display: initial !important;
        }
        .right {
            font-size: 20px !important;
            div {
                margin: 2px 0px 0px 0px !important;
            }
        }
    }

    @media (max-width: 600px) {
        .small{
            width: 90px;
            height: 90px;
            left: -45px;
            bottom: -45px;
        }
        .medium{
            width: 200px;
            height: 200px;
            left: -100px;
            bottom: -100px;
        }
        .large{
            width: 300px;
            height: 300px;
            left: -150px;
            bottom: -150px;
        }
        .xlarge{
            width: 400px;
            height: 400px;
            left: -200px;
            bottom: -200px;
        }
        .xxlarge{
            width: 500px;
            height: 500px;
            left: -250px;
            bottom: -250px;
        }
    }

    color: #fff;
    height: 100vh;
    // width: 100vw;
    padding: 0px 10px;
    // bottom: 0;
    background-size: cover;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    .container-outer {
        top: 16px;
        position: absolute;
        width: 93%;
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left {
                font-weight: 400;
                font-size: 26px;
                line-height: 1.3em;
                letter-spacing: 1px;
                a {
                    color: #fff !important;
                }
            }
            .right {
                display: flex;
                flex-wrap: wrap;
                font-weight: 300;
                font-size: 18px;
                line-height: 1.3em;
                letter-spacing: 1px;
                div {
                    margin: 0px 12px;
                    a {
                        color: #fff !important;
                    }
                }
            }
        }
    }

    main {
        text-align: center;
        color: #fff;
        .welcome {
            margin: 0 0 10px;
            font-weight: 100;
            font-size: 70px;
            

            line-height: 1.1em;
            letter-spacing: 3px;
            padding: 0;
            
            margin-block-start: 0.67em;
            margin-block-end: 0.27em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            min-height: 77px;
        }
        .sub {
            margin: 0;
            font-weight: 200;
            font-size: 23px;
            line-height: 1.3em;
            letter-spacing: 1px;
            padding: 0;
            margin-block-start: 0.83em;
            margin-block-end: 0.83em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            
        }
    }
    transition: background 2s;
    // background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAADCAYAAABfwxXFAAAAYklEQVQIWwFXAKj/AXRJff/8AvkA2/PoACQtLwDf5e0AEQYAABQP/gABgVyR/wkVBgDk9/QABwANAPj28QAO8PcAFwMHAAFbQ3T/+wL7AD4wOQDW4+QAIyQZANm8zQA2GicA1MwgQu1Sq8AAAAAASUVORK5CYII=");

}
.ht {
    font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif;
    background-color: #f5f9fa;
    font-size: 2.83333rem;
    padding: 30px 24px 30px 24px;
    a {
        text-decoration:none;
        out-line: none;
        color: rgba(0,0,0,.84);
    }

}
</style>
