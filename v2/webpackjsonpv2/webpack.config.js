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
              presets: ['es2015', 'stage-2']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'vue-style-loader' },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true,
              modules: true,
              localIdentName: '[local]'
            }
          },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: [
              { loader: 'vue-style-loader' },
              {
                loader: 'css-loader'
              },
              { loader: 'sass-loader' }
            ]
          }
        }
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
    extensions: ['.js', '.vue', '.json', '.jsx', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/module.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  }
}
