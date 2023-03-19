<template>
  <div class="theme-container">
        <!-- <div class="header">
            {{$site.title}}
        </div> -->
        <script src="./totp.min.js"></script>

        <div class="password" v-if="not_show">
            <h1>OTP is Required for this Operation</h1>
            <div class="input">
                <input v-for="i in 6" @input="(e) => input(e, i)" @keyup.delete="(e) => deleteval(e, i)" v-model="val[i]" :ref="`input-${i}`">
            </div>
            <div>
                You can check your token on Google Authenticator
            </div>
            <div class="res">
                {{res}}
            </div>
        </div>
        <div v-else>
        <div class="page-title-container">
            <div class="page-title">
                <router-link class="non-link" :to="'/blog'">{{$page.title}}</router-link>  
            </div>
            <div class="page-time">
                {{transTime($page.frontmatter.date)}}
            </div>
            <div class="page-avatar">
                <!-- <v-avatar>
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                >
                </v-avatar> -->
            </div>
                      
        </div>
        <div class="body-container">
            <!-- <div class="side-bar">
                <div class="side-title">
                    Related Topics
                </div>
                <div>
                    <div v-for="(item,index) in $page.headers" :key="index">
                        <a :href="`#${item.slug}`">
                            {{item.title}}
                        </a>
                    </div>
                </div>
            </div> -->
            <div class="content" style="width: 100%;">
                <div class="medium-zoom-container">
                    <Content/>
                </div>
                <div v-if="$page.frontmatter.comments" style="margin-top:40px;">
                    <Disqus  />
                </div>
                
            </div>


        </div>
        </div>

  </div>
</template>

<script>
import moment from 'moment';
// import totp from "./totp.js"
// import * as base32 from 'thirty-two';
// const jssha = require('jssha');
export default {
    data() {
        return {
            not_show: false,
            current_input: 0,
            val: {
                0: '',
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: ''
            },
            res: ' '
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        transTime(time) {
            return `${moment(time).format('LLLL')} (about ${moment(time).fromNow()})`;
        },
        input(e, index) {
            this.res = ''
            if(this.val[index].length == 0)
                return;
            if(this.val[index].length > 1)
                this.val[index] = this.val[index][0];
            if(index < 6)
                this.$refs[`input-${index+1}`][0].focus();
            else {
                const key = 'GAXGO3D2OAYDIODN';
                const totp = new TOTP(key);
                const token = totp.genOTP();
                let input = '';
                for(let i in this.val)
                    input += this.val[i];
                if(input == token) {
                    this.not_show = false;
                } else {
                    this.res = 'Wrong Token'
                }
            }
            
        },
        deleteval(e, index) {
            // console.log(this.val[index])
            if(this.val[index].length == 0 && index > 1) {
                this.$refs[`input-${index-1}`][0].focus();
            }
            // console.log(e, index)
        }
    }
}
</script>

<style lang="stylus" scoped>
body {
    margin: 0px;
}
.page-title-container {
    margin-top: 35px;
    border-bottom: 1px solid #eaeaea;
    padding: 0px 20px;
    .page-title {
        display: flex;
        justify-content: center;
        justify-items: center;
        font-size: 36px;
        font-weight: 600;
    }    
    .page-time {
        display: flex;
        justify-content: center;
        justify-items: center;
        font-size: 14px;
        color: #666666;
        margin: 20px 0 30px 0;
    }
}

.header-anchor {
    color: #3eaf7c;
    font-weight: 500;
    cursor: pointer;
    font-size: .85em;
    float: left;
    margin-left: -.87em;
    padding-right: .23em;
    margin-top: .125em;
}
.header {

}
.theme-container {
    .password {
        color: #fff;
        background: linear-gradient(to right, #4e54c8, #8f94fb);
        font-family: "Open Sans",Arial,sans-serif !important;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
        .res {
            height: 30px;
            color: red;
            font-size: 20px;
        }
        // h1 {
        //     font-weight: 100;
        //     font-size: 42px;
        //     margin-bottom: 5px;
        //     padding: 0px 18px;
        //     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif !important;
        // }
        input {
            width: 45px;
            height: 45px;
            font-size: 24px;
            padding: 0;
            text-align: center;
            margin: 10px;
            color: #494949;
            letter-spacing: 0;
            font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
            border: 1px solid #d6d6d6;
            border-radius: 4px;
            background: #fff;
            background-clip: padding-box;
        }
    }
    font-family: "Open Sans",X-LocaleSpecific,sans-serif;
    .body-container {
        margin-top: 20px;
        padding: 0px 14vw 40px 14vw;
        display: flex;
        .side-bar {
            padding: 20px 0px 0px 10px;
            .side-title {
                font-size: 1.11111rem;
                // font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif;
                display: inline-block;
                margin-bottom: 20px;
                width: 100%;
            }
            width: 250px;
            a {
                overflow: hidden;
                display: inline-block;
                font-size: 1em;
                font-weight: 400;
                color: #2c3e50;
                border-left: .25rem solid transparent;
                padding: .15rem 0.5rem .15rem 1.25rem;
                line-height: 1.2;
                width: 100%;
                box-sizing: border-box;
                text-decoration:none;
            }
        }
        .content {
            // font-family: zillaslab, Palatino,Helvetica Neue,Helvetica,Nimbus Sans L,Arial,Liberation Sans,Hiragino Sans GB,Source Han Sans CN,Source Han Sans SC,Microsoft YaHei,Wenquanyi Micro Hei,WenQuanYi Zen Hei,ST Heiti,SimHei,WenQuanYi Zen Hei Sharp,sans-serif, "Palatino Linotype" , x-locale-heading-secondary, serif;
            padding: 0px 20px;
            line-height: 2rem;
            p {
                font-weight: 400;
                font-size: 1rem;
                margin-top: 20px;
            }
            h2 {
                margin-top: 20px !important;
            }
            img {
                width: 60%;
            }
        }
    }
    @media (max-width: 767px) {
        .body-container {
            padding: 0px 40px 30px 40px;
        }
    }

    // .page-title {
    //     // font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif;
    //     background-color: #f5f9fa;
    //     font-size: 2.83333rem;
    //     padding: 30px 24px 30px 24px;
    // }
}

</style>
