const { merge } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const base = require('./webpack.web.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HTML_PATH = path.join('./webpack/html')

module.exports = () => {
  const config = {
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `${HTML_PATH}/index.dev.ejs`,
        inject: 'body',
        // chunks: ['bundle'],
        scriptLoading: 'blocking',
        minify: {
          collapseWhitespace: true
        }
      })
    ],
    optimization: { moduleIds: 'named' },
    devServer: {
      // contentBase: path.join(__dirname, '..', '..', 'build'),
      // compress: true,
      hot: true,
      // useLocalIp: true,
      // port: 8000,
   
    }
  }
  return merge(base(), config)
}
