module.exports = {
    title: `Wenqing's Homepage`,
    description: 'Just playing around',
    plugins: {
        'disqus': {
            shortname: 'laphetss-blog'
        },
        '@vuepress/google-analytics': {
            'ga': 'UA-166069151-1'
        }
    },
    head: [
        ['script', {
            src: '/totp.min.js'
        }],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
            }
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css'
            }
        ]
    ],
    //   head: [
    //       ['link', {
    //           rel: 'icon',
    //           href: '/logo.png'
    //       }]
    //   ],
    themeConfig: {
        displayAllHeaders: true,
        nav: [{
            text: 'Home',
            link: '/',
        },
        {
            text: 'Resume',
            link: '/resume/',
            // nonroute: true
        },
        {
            text: 'About',
            link: '/about/'
            },
        {
            text: 'Admin',
            link: '/admin/'
        },
        ],
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }, 
    markdown: {
        // extendMarkdown: md => {
        //     // md.use(function (md) {
        //         md.renderer.rules.image = function (tokens, idx, options, env, slf) {
        //             var token = tokens[idx];
        //             // "alt" attr MUST be set, even if empty. Because it's mandatory and
        //             // should be placed on proper position for tests.
        //             //
        //             // Replace content with actual value
        //             token.attrs[token.attrIndex('alt')][1] =
        //                 slf.renderInlineAsText(token.children, options, env);
        //             token.attrPush(['style', `display: block; margin: 20px auto; width: 60%;`]);
        //             return slf.renderToken(tokens, idx, options);
        //         };

        //     md.core.ruler.push("hbeautify", function (state) {
        //         state.tokens.forEach(function (token) {
                    
        //             if (token.tag == 'h1') {
        //                 token.attrPush(['style', `margin: 10px 0px; font-size:24px;`]);
        //             } else if (token.tag == 'h2') {
        //                 token.attrPush(['style', `margin: 6px 0px 2px 0px; font-size:22px;font-weight: 400;`]);
        //             } else if (token.tag == 'h3') {
        //                 token.attrPush(['style', `margin: 4px 0px 0px 0px; font-size:18px;font-weight: 400;`]);
        //             }
        //         });
        //     });
        //     // })
        // }
    }
}