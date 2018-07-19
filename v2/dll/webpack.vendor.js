var webpack = require('webpack');
var path = require("path");



module.exports = {
    entry: {

        vendor: ["react","react-dom","react-router-dom","redux","react-redux","react-router"]
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        library: "[name]_[hash]"

    },
    context: __dirname,
    devtool: "source-map",
    plugins: [
        new webpack.DllPlugin({
            context:__dirname,
            path: path.join(__dirname,"[name]-manifest.json"),
            name: "[name]_[hash]"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },


};
