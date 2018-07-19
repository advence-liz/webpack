var webpack = require('webpack');
var path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        bundle: "./index.jsx",

        //   vendor: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
       

    },

    module: {
        rules: [
            // {
            //     test: /\.jsx$/,
            //     enforce: "pre",
            //     loader: "eslint-loader"
            // },
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '../template/dll.html'
        }),
        /**
         * manifest.json中包含DLL build 方案中module源相对config的位置，需要调整当前 context使其相对路径能对应module源
         * 从结果上看此方案依赖module 源必须存在，不能很方便的转移使用
         * - root
         *   + dll
         *   + ref 
         * 如上述目录结果 modules 在 dll 下，在ref 中引用即使 context 对应关系对应也不行
         * 所有一般情况下 modules 应该在 dll 和ref 的父级  
         */
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest: require('./vendor-manifest.json'),
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }

};
