//var webpack = require('webpack');


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
        chunkFilename: '[name]-[id].js',
        library: "$d"
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
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-2']

                        }
                    }

                ]
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
            template: `../template/lib.html`
        })
    ],
    externals: {
       /**全局引用库 */
       'react': ' window.__lib.React',
       'react-dom': ' window.__lib.ReactDOM',
       'react-router-dom': ' window.__lib.ReactRouterDOM',
       'redux': ' window.__lib.Redux',
       'react-redux': ' window.__lib.ReactRedux',
       'react-router': ' window.__lib.ReactRouter',
       'crypto-js': 'window.__lib.CryptoJS',
       'copy-to-clipboard': 'window.__lib.Copy',
       'babel-polyfill': 'window.__lib.BabelPolyfill',
       'prop-types': 'window.__lib.PropTypes'
    }
    // devServer: {
    //     contentBase: path.join(__dirname, "build"),
    //     compress: true,
    //     port: 9000
    // }

};
