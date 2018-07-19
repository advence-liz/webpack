//var webpack = require('webpack');
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });
var path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: "./index.js",
       
    },
    output: {
        /**
         * @prop {String} path 绝对路径
         */
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
      //  publicPath:"build/",
        chunkFilename : '[name]-[id].js'
       
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                enforce: "pre",
                loader: "eslint-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use:{  loader: 'happypack/loader?id=jsx'}
                // use: [
                //     {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['es2015', 'react', 'stage-2']

                //         }
                //     }
                // ]
            }
        ]

    },
    context:__dirname,
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `../template/_layout.html`
        }),
        new HappyPack({
            id: 'jsx',
            threads: 2,
            loaders: ['babel-loader?presets[]=react,presets[]=stage-2&cacheDirectory=./babel_cache/dev'],
            threadPool: happyThreadPool
           
       
        })
    ]


};
