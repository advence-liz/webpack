const path = require('path')
const base = process.cwd()
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HTML_PATH = path.join('./webpack/html')

module.exports = () => {
  return {
    resolve: {
      extensions: ['.js', '.jsx'],
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
          test: /\.(js|jsx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        },
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        //   options: {
        //     // compilerOptions: {
        //     //   preserveWhitespace: false
        //     // },
        //     hotReload: true
        //   }
        // },
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
    plugins: [new CleanWebpackPlugin()]
  }
}
