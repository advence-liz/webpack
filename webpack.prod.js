var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: {
        bundle: "./src/hello.js"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]

    },
    context: __dirname,
    devtool: "source-map",
    target: "web",
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)
        modules: [
            "node_modules",
            path.resolve(__dirname, "node_modules")
        ],
        // directories where to look for modules
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    // ,
    // plugins: [
    //     new webpack.NoErrorsPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ]
};
 /**
         * query 换为 options 也可，版本2.x 兼容1.x的部分写法总感觉会写出很奇怪的东西
         * @param presets { mdules：false } 代表babel 不处理跟模块相关的关键字由webpack处理而且可以AMD commonjs modules 三种方式混和
         */