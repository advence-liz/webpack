const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
        include: path.join(__dirname, 'src'),
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
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: { modules: true }
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.scss$/,
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
    extensions: ['.js', '.jsx', '.less', '.scss', '.ejs']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['build']),

    /**
     * manifest.json中包含DLL build 方案中module源相对config的位置，需要调整当前 context使其相对路径能对应module源
     * 从结果上看此方案依赖module 源必须存在，不能很方便的转移使用
     * - root
     *   + dll
     *   + ref
     * 如上述目录结果 modules 在 dll 下，在ref 中引用即使 context 对应关系对应也不行
     * 所有一般情况下 modules 应该在 dll 和ref 的父级
     */
    new webpack.DllReferencePlugin({
      // context: __dirname, // context 参数在 scope 模式下写什么都没有意义
      scope: 'abc',
      manifest: require('./vendor/scope-manifest.json'),
      extensions: ['.js', '.jsx'] // .js 看起来没有问题，但是如果解析其他后缀则必须填写,不过官方文档上根本就没有这个参数坑呀，F12 查看定义文件也没有这个差数的说明什么鬼
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: require('./vendor/vendor-manifest.json')
    }),

    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template/_layout.ejs',
      favicon: 'template/favicon.ico',
      title: 'webpack'
    }),
    new CopyWebpackPlugin([{ from: 'vendor/*.js' }])
  ]
}
