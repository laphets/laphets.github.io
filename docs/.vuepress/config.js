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
            link: '/resume.pdf'
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