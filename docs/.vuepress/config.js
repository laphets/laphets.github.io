module.exports = {
    title: `Laphets's Blog`,
    description: 'Just playing around',
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
            link: '/resume.pdf',
            nonroute: true
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