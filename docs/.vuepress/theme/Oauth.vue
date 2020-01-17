<template>
    <div class="resume-container">
        <!-- <form id="redi" :action="post_url"> </form> -->

        <div class="element">
            {{message}}
        </div>
        
    </div>
</template>

<script>
import Typed from 'typed.js';
export default {
    data() {
        return {
            count_down: 5,
            code: null,
            post_url: "",
            client_id: "e1e6602503dc4c81f625",
            client_secret: "",
            access_token: "",
            message: "",
        }
    },
    created() {
        

    },
    async mounted() {
        if(window.location.hostname == 'localhost') {
            this.client_id = "d4ddef2f916b410ba5c5";
            this.client_secret = "9ac284b8c0ce845dab3189bd5902f73cedcc8ac5";
        }
        else {
            this.client_id = "e1e6602503dc4c81f625";
            this.client_secret = "f3baa14f0bee6fe881742457afe0d6f903ebc9e7";
        }
        this.code = this.getParameterByName("code");
        
        if(this.code) {
            console.log(this.code);
            this.message = "OAuth Step 1: Retrieving access token..."
            const { access_token } = await this.postAccessToken();
            console.log(access_token);
            if(access_token) {
                this.access_token = access_token;
                window.localStorage.setItem("access_token", access_token);
                this.message = "OAuth Step 2: Redirecting back..."
                window.location = "/admin"
            } else {
                this.message = "OAuth Step 1: Failed due to invaild code!"
            }
            
        } else {
            this.message = "No distinct code passed!"
        }
        // const id = setInterval(() => {
        //     this.count_down--;
        //     if(this.count_down == 0) {
        //         window.clearInterval(id);
        //         return;
        //     }
        // }, 1000)
    },
    methods: {
        getProfile() {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        resolve(JSON.parse(this.responseText));
                    }
                });

                xhr.open("GET", 
                `https://cors-anywhere.herokuapp.com/https://api.github.com/user`);
                // xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader("authorization", `token ${this.access_token}`);

                xhr.send("");
            })
        },
        postAccessToken() {
            return new Promise((resolve, reject) => {
                const req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == XMLHttpRequest.DONE) {
                        resolve(JSON.parse(req.responseText));
                    }
                }
                req.open('POST',
                `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`,
                true);
                req.setRequestHeader('Accept', 'application/json');
                req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                req.send('code=' + this.code +
                    `&client_id=${this.client_id}` +
                    `&client_secret=${this.client_secret}`);
                })
        },

        getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
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
