const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      './dll/alpha'
      //   'react-router-dom',
      //   'redux',
      //   'react-redux',
      //   'react-router'
    ],
    scope: ['./dll/beta', './dll/b', './dll/c']
  },
  mode: 'development',
  context: __dirname,
  output: {
    path: path.join(__dirname, 'vendor'),
    filename: 'dll.[name].js',
    library: '[name]_[hash:8]'
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss']
  },
  //   devtool: 'source-map',
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.join(__dirname, 'vendor', '[name]-manifest.json'),
      name: '[name]_[hash:8]'
    }),
    new CleanWebpackPlugin('vendor')
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
  ]
}
