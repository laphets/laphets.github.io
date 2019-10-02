<template>
    <div class="container">
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
                            <router-link v-if="!item.nonroute" class="non-link" :to="item.link">{{item.text}}</router-link>
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
                    Pick up what is missed. Treasure what should be treasured!
                </div>
                
            </main>
        </div>


        <div class="post-list">
            <div v-for="(post, index) in $site.pages"  :key="index">
                <div class="title">
                    <router-link class="href" :to="post.path">
                        {{post.title}}
                    </router-link>
                    
                </div>
                <div class="content">

                </div>
                <div class="time">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Typed from 'typed.js';
export default {
    data() {
        return {
            bgObj: {
                background: '#3399ff'
                // background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(104,9,121,1) 42%, rgba(0,144,255,1) 100%)'
            }
        }
    },
    created() {
        // console.log(this)
        // console.log(this.$site)
        // console.log(this.$page)
    },
    mounted() {
        const typed = new Typed('.welcome', {
            strings: ["404 FOUND NOTHING", "404 FOUND EVERYTHING"],
            typeSpeed: 60,
            showCursor: false,
        });

        // setTimeout(() => {
        //     this.bgObj.background = 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(104,9,121,1) 90%, rgba(0,144,255,1) 100%)';
        // }, 2000);
    }
}
</script>

<style lang="stylus" scoped>
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
                margin: 2px 10px 0px 0px !important;
            }
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
                font-weight: 300;
                font-size: 26px;
                line-height: 1.3em;
                letter-spacing: 1px;
                a {
                    color: #fff !important;
                }
            }
            .right {
                display: flex;
                font-weight: 100;
                font-size: 17px;
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
.post-list {
    padding: 40px 60px;
    .title {
        font-family: medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important;
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
</style>
