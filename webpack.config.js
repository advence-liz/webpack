
var pkg = require("./package"),
    options = process.argv,
    config;

/**
 * pkg.pattern {dev|prod} 原计划package.json 中配置是否为product 目前没有使用
 */

console.log(options);

var env = options[2].slice(6);
console.log(env);
config = require("./webpack." + env);

module.exports = config;