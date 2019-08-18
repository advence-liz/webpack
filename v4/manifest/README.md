# 测试 inline-manifest

```js
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
    new webpack.HashedModuleIdsPlugin(),// 防止文件并未改变而因为文件解析顺变化影响 hash 值改变
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template/_layout.ejs',
      favicon: 'template/favicon.ico',
      inject: false,
      chunks: ['main', 'vendors', 'runtime'],
      title: 'manifest'
    }),
    new InlineManifestWebpackPlugin('runtime'),//将run-time内联到html中要放在html-plugin之后
```    
## inline-manifest

if you use inject: false in your HtmlWebpackPlugin, you can access the runtime code like this:

```js
<%= htmlWebpackPlugin.files.runtime %>

<% for (var chunk in htmlWebpackPlugin.files.chunks) { %>
<script src="<%= htmlWebpackPlugin.files.chunks[chunk].entry %>"></script>
<% } %>
```


## ref

- https://webpack.docschina.org/guides/caching/#%E6%8F%90%E5%8F%96%E5%BC%95%E5%AF%BC%E6%A8%A1%E6%9D%BF-extracting-boilerplate-
- https://github.com/szrenwei/inline-manifest-webpack-plugin