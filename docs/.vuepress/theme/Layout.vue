<template>
  <div class="theme-container">
        <!-- <div class="header">
            {{$site.title}}
        </div> -->
        <div class="page-title">
            <router-link class="non-link" :to="'/'">{{$page.title}}</router-link>            
        </div>
        <div class="body-container">
            <div class="side-bar">
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
            </div>
            <div class="content">
                <Content/>
            </div>

        </div>
  </div>
</template>

<script>
export default {
    created() {
        // console.log(this.$site)
        // console.log(this.$page)
    }
}
</script>

<style lang="stylus">
body {
    margin: 0px;
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
    font-family: "Open Sans",X-LocaleSpecific,sans-serif;
    .body-container {
        display: flex;
        .side-bar {
            padding: 20px 0px 0px 10px;
            .side-title {
                font-size: 1.11111rem;
                font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif;
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
            font-family: zillaslab, Palatino,Helvetica Neue,Helvetica,Nimbus Sans L,Arial,Liberation Sans,Hiragino Sans GB,Source Han Sans CN,Source Han Sans SC,Microsoft YaHei,Wenquanyi Micro Hei,WenQuanYi Zen Hei,ST Heiti,SimHei,WenQuanYi Zen Hei Sharp,sans-serif, "Palatino Linotype" , x-locale-heading-secondary, serif;
            padding: 0px 20px;
        }
    }

    .page-title {
        font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif;
        background-color: #f5f9fa;
        font-size: 2.83333rem;
        padding: 30px 24px 30px 24px;
    }
}

</style>
