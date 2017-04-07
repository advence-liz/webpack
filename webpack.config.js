var pkg = require("./package"),
    options = process.argv,
    config;

/**
 * pkg.pattern {dev|prod} 原计划package.json 中配置是否为product 目前没有使用
 */
//console.dir(options);
options.indexOf('prod')>-1?
    (() => config = require("./webpack.prod.js"))()
    : (() => config = require("./webpack.dev.js"))();
module.exports = config;