const { merge } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const base = require('./webpack.web.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTML_PATH = path.join('./webpack/html')

module.exports = (_, options) => {
  console.log('process.env.HOST_ENV', process.env.HOST_ENV)

  let env = ''
  const config = {
    target: ['web', 'es5'],
    mode: 'production',
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
    optimization: { moduleIds: 'deterministic' }
  }
  return merge(base(env, options), config)
}
