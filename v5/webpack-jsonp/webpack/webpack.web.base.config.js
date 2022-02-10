const path = require('path')
const base = process.cwd()
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FileListPlugin = require('./plugins/FileList')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const HTML_PATH = path.join('./webpack/html')

module.exports = () => {
  return {
    resolve: {
      extensions: ['.js', '.vue', '.jsx'],
      alias: {
        '@': path.resolve('src')
      },
      fallback: { assert: false }
    },
    entry: './src',
    // externals: {
    //   '@eva/eva.js': 'EVA',
    //   'pixi.js': 'PIXI'
    // },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            // compilerOptions: {
            //   preserveWhitespace: false
            // },
            hotReload: true
          }
        },
        {
          test: /\.(js|ts)$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.(scss|sass|css)$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[id].js',
      path: path.resolve('./build')
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new FileListPlugin()
    ]
  }
}
