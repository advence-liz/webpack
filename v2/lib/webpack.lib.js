var webpack = require('webpack');
var path = require("path");



module.exports = {
    entry: {
        lib: "./lib.entry.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js"


    },
    devtool: "source-map",
    context: __dirname,
    // plugins: [
    //     new webpack.DllPlugin({
    //         context:path.resolve(__dirname,"..","vender"),
    //         path: path.join(__dirname, "js", "[name]-manifest.json"),
    //         name: "[name]_[hash]"
    //     })
    // ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin()
    ]

};
