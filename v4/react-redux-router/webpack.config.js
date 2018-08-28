const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/',
  mode: 'development',
  context: __dirname,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(art|ejs)$/,
        loader: 'art-template-loader',
        options: {
          compileDebug: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: ['node_modules', path.resolve(__dirname, 'src', 'components')],
    alias: {
      actions: path.resolve('src', 'actions'),
      reducers: path.resolve('src', 'reducers'),
      pages: path.resolve('src', 'pages')
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template/_layout.ejs',
      favicon: 'template/favicon.ico',
      // inject: false,
      title: 'webpack'
    })
    // new webpack.DefinePlugin({
    //   PRODUCTION: true,
    //   VERSION: JSON.stringify('5fa3b9'),
    //   BROWSER_SUPPORTS_HTML5: true,
    //   TWO: '1+1',
    //   'typeof window': JSON.stringify('object'),
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
  ]
}
