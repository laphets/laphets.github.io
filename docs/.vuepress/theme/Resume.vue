<template>
    <div class="resume-container">
        <div class="element">
            Redirecting to Résumé in {{count_down}} seconds...
            <a href="/resume-zh_CN.pdf" class="chinese">Try Chinese version instead</a>
        </div>
        
    </div>
</template>

<script>
import Typed from 'typed.js';
export default {
    data() {
        return {
            count_down: 5
        }
    },
    mounted() {
        const id = setInterval(() => {
            console.log(id);
            this.count_down--;
            if(this.count_down == 0) {
                window.clearInterval(id);
                window.location = "/resume.pdf";
                return;
            }

        }, 1000)
    }
}
</script>

<style lang="stylus" scoped>
.resume-container {
    padding: 0px 30px;
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        color: #42affa;
        text-decoration: none;
        -webkit-transition: color .15s ease;
        -moz-transition: color .15s ease;
        transition: color .15s ease;
        &:hover {
            color: #9acef8;
        }
    }

    .element {
        color: #fff;
        font-size: 50px;
        font-weight: 200;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
        .chinese {
            display: block;
            text-align: center;
            font-size: 30px;
        }
    }
}
</style>
