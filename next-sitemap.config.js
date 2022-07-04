const siteUrl = 'https://www.ericturner.dev';

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {userAgent: "*", disallow: "/blog/category/*"},
            {userAgent: "*", allow: "/"},
        ],
    },
    exclude: ['/blog/category/*']
};
