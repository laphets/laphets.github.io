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
            strings: ["Hello, I'm Laphets.", "An undergraduate student major in ECE.",
            "I like all the stuffs related to programming.", "I like Unix.", "I like C++.", "I like GoLang.", "I like docker.", "I like MicroService."],
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
        font-size: 40px;
        font-family: 'Fira Code', Monaco, Menlo, 'Courier New', monospace;
    }
}
</style>
