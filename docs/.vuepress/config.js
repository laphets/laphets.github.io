module.exports = {
    title: `Laphets's Blog`,
    description: 'Just playing around',
    head: [
        ['script', {
            src: '/totp.min.js'
        }]
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