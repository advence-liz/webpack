const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {port} = require('../config')

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
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#00C697', // 全局主色
                'link-color': '#1890ff', // 链接色
                'success-color': '#52c41a', // 成功色
                'warning-color': '#faad14', // 警告色
                'error-color': '#f5222d', // 错误色
                'font-size-base': '14px', // 主字号
                'heading-color': 'rgba(0, 0, 0, .85)', // 标题色
                'text-color': 'rgba(0, 0, 0, .65)', // 主文本色
                'text-color-secondary ': 'rgba(0, 0, 0, .45)', // 次文本色
                'disabled-color ': 'rgba(0, 0, 0, .25)', // 失效色
                'border-radius-base': '4px', // 组件/浮层圆角
                'border-color-base': '#d9d9d9', // 边框色
                'box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)' // 浮层阴影
              },
              javascriptEnabled: true
            }
          }
        ],
        include: /node_modules/
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: ['node_modules', path.resolve(__dirname, 'src', 'components')],
    alias: {
      actions: path.resolve('src', 'actions'),
      reducers: path.resolve('src', 'reducers'),
      pages: path.resolve('src', 'pages'),
      components: path.resolve('src', 'components'),
      assets: path.resolve('src', 'assets')
    }
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    proxy: {
      // proxy URLs to backend development server
      '/api': {
        target: `http://localhost:${port}/`,
        pathRewrite: { '^/api': '' }
      },
      '/image': {
        target: `http://localhost:${port}/image`,
        pathRewrite: { '^/image': '' }
      }
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['build']),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest: path.resolve(__dirname, './vendor/vendor-manifest.json')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template/_layout.ejs',
      favicon: 'template/favicon.ico',
      title: 'react-redux-router'
    }),
    new CopyWebpackPlugin([{ from: 'vendor/*.js' }]),
    new CopyWebpackPlugin([{ from: 'image/**/*' }])
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
