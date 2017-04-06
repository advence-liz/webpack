var webpack = require('webpack');

module.exports = {
    entry: [

        "./src/hello.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        // loaders: [
        //     { test: /\.css$/, loader: "style!css" },
        //     { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: "babel-loader",
        //         query:
        //         {
        //             presets: ['react', 'es2015']
        //         }
        //     }
        // ],
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [['es2015', { modules: false }],'react']
                    //plugins: ['syntax-dynamic-import']
                }
            }]
        }]

    },
    // babel: {
    //    presets: ['react', 'es2015']
    // },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    }
    // ,
    // plugins: [
    //     new webpack.NoErrorsPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ]
};
