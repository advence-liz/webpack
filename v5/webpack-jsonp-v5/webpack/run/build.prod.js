const webpack = require('webpack')
const webpackBaseConfig = require('../webpack.web.base.config')
const webpackProdConfig = require('../webpack.web.prod.config')
const merge = require('webpack-merge')
// 备用
module.exports = function () {
  const compiler = webpack(merge(webpackBaseConfig, webpackBaseConfig))
  compiler.run((err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(
      stats.toString({
        chunks: false,
        colors: true,
        assets: false
      })
    )
  })
}
