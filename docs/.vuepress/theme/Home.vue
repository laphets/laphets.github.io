<template>
    <div class="container">
        <div class="outer">
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
                    404 FOUND EVERYTHING
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
export default {
    created() {
        console.log(this)
        // console.log(this.$site)
        // console.log(this.$page)
    }
}
</script>

<style lang="stylus" scoped>
.outer {
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
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAADCAYAAABfwxXFAAAAYklEQVQIWwFXAKj/AXRJff/8AvkA2/PoACQtLwDf5e0AEQYAABQP/gABgVyR/wkVBgDk9/QABwANAPj28QAO8PcAFwMHAAFbQ3T/+wL7AD4wOQDW4+QAIyQZANm8zQA2GicA1MwgQu1Sq8AAAAAASUVORK5CYII=");

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
