
var pkg = require("./package"),
    options = process.argv,
    config;

/**
 * pkg.pattern {dev|prod} 原计划package.json 中配置是否为product 目前没有使用
 */




config = require("./webpack." + pkg.env);

module.exports = config;