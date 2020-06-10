//var webpack = require('webpack');

var path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './index'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
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
  context: __dirname,
  devtool: 'source-map',
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
      template: `../template/_layout.html`
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  }
}
