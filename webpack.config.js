var webpack = require('webpack');
var path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        index: './src'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
    },

    module: {
        rules: [

            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        // options: {
                        //     presets: ['es2015', 'react', 'stage-2']

                        // }
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
            "Tools",
            "docave_modules",
            "node_modules"
        ],
        // directories where to look for modules
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template/_layout.html',
            favicon: "template/favicon.ico"
        }),
    ],
    externals: {
        'react': ' window.React',
        'react-dom': ' window.ReactDOM',
    },
  //  externals:/^react/,
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    }

};
