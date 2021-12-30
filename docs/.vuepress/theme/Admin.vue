<template>
<v-app id="inspire">
    
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Console</v-toolbar-title>

            <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
        v-if="user"
          size="32px"
          item
        >
          <v-img
            :src="user.avatar_url"
          /></v-avatar>
      </v-btn>

    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >


          <div class="editor-container">
           
        <v-card
        
            class="mx-auto"
            width="256"
            style="margin-right: 10px !important; width: 256px !important;"
            tile
        >
            <v-list style="max-height: 100%;overflow: scroll; " rounded dense>
            <v-subheader>Operations</v-subheader>

            <v-list-item-group v-model="operation_selected_idx" color="#2d68ba">
            <v-list-item @click="dialog = true">
                <v-list-item-icon>
                    <v-icon v-text="'mdi-plus'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="'Create'"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list-item-group>
            <v-divider style="margin-top: 10px;"></v-divider>
            <v-subheader>Files</v-subheader>

            
            <v-list-item-group v-model="current_selected_idx" color="#2d68ba">
                <v-list-item
                v-for="(file, i) in file_list"
                v-if="file.type == 'file'"
                :key="file.name"
                @click="loadFile(file.path)"
                >
                <v-list-item-icon>
                    <v-icon v-text="'mdi-file'"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="file.name"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>

                


            </v-list-item-group>
            </v-list>
        </v-card>

        <!-- <div v-for="file in file_list">
            <a @click="loadFile(file.path)" href="#">{{file.name}}</a> {{file.path}} {{file.sha}}
        </div> -->
        <div id="editor">
            <ClientOnly>
            <mavon-editor @save="mdSave" ref=md @imgAdd="imgAdd" v-model="content" language="en" style="height: 100%"></mavon-editor>
            </ClientOnly>
        </div>
    </div>



      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">
        Copyright &copy; 2015-{{ new Date().getFullYear() }}  <strong>Laphets</strong>. All Rights Reserved.


      </span>
    </v-footer>




    <!-- <div class="admin-container">
        <v-avatar v-if="user">
      <img  :src="user.avatar_url">
    </v-avatar>
    <div v-if="user">
{{user.name}} 
    </div> -->
         


    <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Create New Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col cols="12">
                <v-text-field 
                label="Title" 
                hint="title of the post"
                required
                v-model="dialog_form.title"
                ></v-text-field>
                </v-col>
                <v-col cols="12">
                <v-text-field 
                label="File Name" 
                hint="file name of the post"
                required
                v-model="dialog_form.file_name"
                ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                    <v-text-field
                    label="Tags"
                    hint="tags of the post"
                    required
                    v-model="dialog_form.tags"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Categories"
                  hint="categories of the post"
                  required
                  v-model="dialog_form.categories"
                ></v-text-field>
              </v-col>
                <v-col cols="12" sm="6" md="6">
                <v-switch v-model="dialog_form.comments" :label="`Enable Comments: ${dialog_form.comments.toString()}`"></v-switch>
              </v-col>

            </v-row>
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">Close</v-btn>
          <v-btn color="success" text @click="createFile()">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog_loading"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="#4054af"
        dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    </div>
        
</v-app>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
// import Octokit from '@octokit/rest'
import moment from 'moment';
// import COS from 'cos-js-sdk-v5'

export default {
    components: {
        mavonEditor
            // or 'mavon-editor': mavonEditor
    },
    data() {
        return {
            import: {
                COS: null,
                Octokit: null,
                moment: null,
            },
            

            cos: null,
            octokit: null,
            owner: 'laphets',
            repo: 'laphets.github.io',
            file_list: [],
            current_file: "",
            content: "",
            access_token: null,
            user: null,
            current_selected_idx: -1,
            operation_selected_idx: -1,
            current_file_path: "",
            redirect_url: "",
            item: 1,
            dialog: false,
            dialog_loading: false,
            drawer: null,
            dialog_form: {
                title: "",
                categories: "",
                tags: "",
                file_name: "",
                comments: false,
            },
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
        }
    },
    async mounted() {
        this.import.Octokit = require('@octokit/rest');
        this.import.COS = require('cos-js-sdk-v5');
        this.import.moment = require('moment');
        

        if(window.location.hostname == 'localhost')
            this.redirect_url = "https://github.com/login/oauth/authorize?client_id=d4ddef2f916b410ba5c5&redirect_uri=http://localhost:8080/oauth/&scope=user repo gist";
        else
            this.redirect_url = "https://github.com/login/oauth/authorize?client_id=e1e6602503dc4c81f625&redirect_uri=https://laphets.com/oauth/&scope=user repo gist";

        this.access_token = window.localStorage.getItem("access_token");
        if(!this.access_token) {
            window.location = this.redirect_url;
            return;
        }
        this.octokit = new this.import.Octokit({auth: this.access_token});

        try {
            this.user = (await this.octokit.users.getAuthenticated()).data;
            if(this.user.login != 'laphets')
                throw 'User Not Admin';
        } catch (error) {
            window.location = this.redirect_url;
            return;
        }
        await this.loadFileList();

        await this.initCOS();
    },
    methods: {
        async initCOS() {
            const cosData = JSON.parse((await this.octokit.gists.get({gist_id: "951130eccf85e828b5fd48f42645f088"})).data.files["COS.json"].content);
            this.cos = new this.import.COS({
                SecretId: cosData.SecretId,
                SecretKey: cosData.SecretKey
            });
        },
        async loadFileList() {
            this.file_list = (await this.octokit.repos.getContents({
                owner: this.owner,
                repo: this.repo,
                path: 'docs'
            })).data;
        },
        uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        uploadImgCOS(file) {
            return new Promise((resolve, reject) => {
                this.cos.putObject({
                    Bucket: 'audio-1257009668', /* 必须 */
                    Region: 'ap-shanghai',     /* 存储桶所在地域，必须字段 */
                    Key: `blog/${file.name}-${this.uuidv4()}`,              /* 必须 */
                    StorageClass: 'STANDARD',
                    Body: file, // 上传文件对象
                    onProgress: function(progressData) {
                        console.log(JSON.stringify(progressData));
                    }
                }, function(err, data) {
                    resolve(err || data);
                });
            })
        },
        uploadImg(file) {
            return new Promise((resolve, reject) => {
                const data = new FormData();
                data.append("smfile", file);
                // data.append('file_id', 0);
                const req = new XMLHttpRequest();
                req.open("POST", "https://cors-anywhere.herokuapp.com/https://sm.ms/api/v2/upload", true);

                req.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        resolve(this.responseText);
                    }
                });

                // req.setRequestHeader('Accept', 'application/json');
                // req.setRequestHeader('Content-Type', 'multipart/form-data');

                
                // xhr.setRequestHeader("Authorization", "FnGlwbjckNZ0iQ5e62VopYOCFHgXSfJ4");

                req.send(data);
            })
            
        },
        async imgAdd(pos, file) {
            console.log(pos, file)
            const url = `https://${(await this.uploadImgCOS(file)).Location}`;
            console.log(url);
            (this.$refs.md).$img2Url(pos, url);
        },
        createFile() {
            this.dialog = false;
            console.log(this.dialog_form)
            let avil_idx = 0;
            this.file_list.map((item) => { if(item.type == 'file') avil_idx++});
            const file_name = this.dialog_form.file_name == "" ? this.dialog_form.title : this.dialog_form.file_name;
            this.file_list = [{name: `${file_name}.md`, path: `docs/${file_name}.md`, sha: "", type: "file" }, ...this.file_list];
            this.current_file = this.file_list[0];
            
            this.current_selected_idx = avil_idx;
            this.operation_selected_idx = -1;
            this.content = `---
title: ${this.dialog_form.title} 
date: ${moment().format('YYYY-MM-DD HH:mm:ss')}
comments: ${this.dialog_form.comments.toString()}
tags: ${this.dialog_form.tags}
categories: ${this.dialog_form.categories}
---

`;
            console.log(this.file_list);

        },
        async loadFile(path) {
            console.log(path)
            this.current_file_path = path;
            this.current_file = (await this.octokit.repos.getContents({
                owner: this.owner,
                repo: this.repo,
                path: path
            })).data;
            console.log(this.current_file);
            this.content = this.base64Decode(this.current_file.content);
        },
        async updateFile() {
            this.dialog_loading = true;
            console.log(this.content)
            console.log(await this.octokit.repos.createOrUpdateFile({
                owner: this.owner,
                repo: this.repo,
                path: this.current_file.path,
                sha: this.current_file.sha,
                message: `Update ${this.current_file.type} ${this.current_file.path}`,
                content: this.base64Encode(this.content)
            }));

            await this.loadFileList();
            await this.loadFile(this.current_file.path);

            this.dialog_loading = false;
        },
        async mdSave(value, render) {
            this.updateFile();
        },
        base64Decode(base64) {
            return decodeURIComponent(escape(window.atob(base64)));
        },
        base64Encode(data) {
            return btoa(unescape(encodeURIComponent(data)));
        }
    }
}
</script>

<style lang="stylus" scoped>
.admin-container {
    padding: 40px 50px;
}
.editor-container {
    display: flex;
    width: 100%;
    height: calc(100vh - 136px);
}
#editor {
        margin: auto;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
</style>