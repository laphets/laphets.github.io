<template>
    <div class="about-container">
        <div class="element">

        </div>
    </div>
</template>

<script>
import Typed from 'typed.js';
export default {
    mounted() {
        const typed = new Typed('.element', {
            strings: ["Hello, I'm Laphets.", "A junior student major in CompE.",
            "I like all the stuffs related to programming.", "I like *nix.", "I like C++/GoLang.", "I like docker/k8s.", "I like micro-service and build scalable Apps.",
            "Welcome!"],
            typeSpeed: 40
        });
    }
}
</script>

<style lang="stylus" scoped>
.about-container {
    padding: 0px 30px;
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .element {
        color: #fff;
        font-size: 50px;
        font-weight: 200;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    }
}
</style>
