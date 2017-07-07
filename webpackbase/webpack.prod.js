var webpack = require('webpack');
var path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
    plugins: [
        new UglifyJSPlugin(
            {  sourceMap: true}
        )
    ]
};
 