module.exports = {
    title: `Laphets's Blog`,
    description: 'Just playing around',
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
            text: 'Old Posts',
            link: '/old/'
        },
        {
            text: 'Resume',
            link: '/resume/',
            // nonroute: true
        },
        {
            text: 'About',
            link: '/about/'
        }
        ],
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}