const { merge } = require('webpack-merge')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const base = require('./webpack.web.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTML_PATH = path.join('./webpack/html')

module.exports = (_, options) => {
  console.log('process.env.HOST_ENV', process.env.HOST_ENV)

  let env = ''
  const config = {
    mode: 'development',
    target: 'web',
    devtool: false,
    output: {
      chunkFilename: '[name][contenthash].js',
      filename: '[contenthash].js',
      publicPath: ''
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `${HTML_PATH}/index.ejs`,
        inject: 'body',
        // chunks: ['bundle'],
        scriptLoading: 'blocking',
        minify: {
          collapseWhitespace: true
        }
      })
    ],
    optimization: {
      moduleIds: 'deterministic',
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false
            }
          },
          extractComments: false
        })
      ]
    }
  }
  return merge(base(env, options), config)
}
