//var webpack = require('webpack');

var path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    /**
     * @prop {String} path 绝对路径
     */
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },

  module: {
    rules: [
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
  devtool: 'source-map',
  target: 'web',
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: ['node_modules', path.resolve(__dirname, 'node_modules')],
    // directories where to look for modules
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/module.html'
    })
  ]

  // devServer: {
  //     contentBase: path.join(__dirname, "build"),
  //     compress: true,
  //     port: 9000
  // }
}
