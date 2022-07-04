const Config = require('./lib/config');

const siteUrl = Config.url;

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {userAgent: "*", disallow: "/blog/category/*"},
            {userAgent: "*", allow: "/"},
        ],
    },
    exclude: ["/blog/category/*", "/googleecd7ade0a7184c71.html"]
};
