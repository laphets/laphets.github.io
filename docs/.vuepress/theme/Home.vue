<template>
    <div class="container">
        <div class="ht">
            <router-link class="non-link" :to="'/'">{{$site.title}}</router-link>
        </div>

        <div class="post-list">
            <!-- v-if="index < 20" -->
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
        // console.log(this.$site)
        // console.log(this.$page)
    }
}
</script>

<style lang="stylus" scoped>
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
    padding: 20px 30px;
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
