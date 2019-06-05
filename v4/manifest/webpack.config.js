const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')

// function MyPlugin (options) {
//   // Configure your plugin with options...
// }

// // MyPlugin.prototype.apply = function (compiler) {
//   compiler.plugin('compilation', compilation => {
//     console.log('The compiler is starting a new compilation...')

//     compilation.plugin(
//       'html-webpack-plugin-after-html-processing',
//       (data, cb) => {
//         data.html += 'The Magic Footer'

//         cb(null, data)
//       }
//     )
//   })
// }

module.exports = {
  entry: './src/',
  mode: 'development',
  context: __dirname,
  output: {
    filename: '[name].[contenthash].js',
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.scss']
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template/_layout.ejs',
      favicon: 'template/favicon.ico',
      inject: false,
      chunks: ['main', 'vendors', 'runtime'],
      title: 'manifest'
    }),
    new InlineManifestWebpackPlugin('runtime'),
    new webpack.DefinePlugin({
      PRODUCTION: true,
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
