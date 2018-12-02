const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    dust: './src'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.(less|css)$/,
        use: [
          'vue-style-loader', // 看官网描述就是fork from style-loader ，过添加了对 ssr 的支持
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'vue-style-loader', // 看官网描述就是fork from style-loader ，过添加了对 ssr 的支持
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    // directories where to look for modules
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: { 'vue': 'vue/dist/vue.js' }
    // alias: {
    //   vue$: 'vue/dist/vue.esm.js',
    //   '@': path.resolve('src')
    // }
  },
  devServer: {
    contentBase: path.join(__dirname),
    // compress: true,
    port: 4567
  }
}
