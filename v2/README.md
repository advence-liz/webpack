# webpack 

## REF
- [webpack optimize example](https://github.com/advence-liz/webpack-optimize-example)
- [webpack](https://github.com/webpack/webpack)
## List
- bundleLoader //延迟按需加载
- dll  //性能优化 预先打包常用库，入口文件以类似dll 的方式引入依赖
- less //less->css->js 将样式嵌入到js 和分离俩种方案
- lib  //将常用库打包到一起并导出到全局 配置 externals
- module //测试组合公共component 在入口文件引入方案
## 关于性能优化

测试了六七种方案，最终只有 babelCache 和 文件拆分效果明显，

## Thinking

webapck 发展的极快不同版本API 接口会不兼容，当在网上检索别人的博客DEMO时有很大概率在你环境无效此时不要盲目的质疑自己，因为发展太快你能看到的博客过时的概率很大，
而此时常常要做的就是查看官方文档找找灵感改改对应配置的写法。

如果可以直接理解英文的话，或许看官方文档更好，但是很多时候尤其针对某个pulgin or loader 文档言简意赅到令人发指（估计作者的想法是懂的人不说也懂，不懂的人说了也不明白）这时候可以查看github webpack 官方的DEMO or 插件的github 寻找DEMO (很刺激的事情是官方DEMO也会有不好使的时候，有些不是很明显，有些DEMO很明显就很老需要改动，本来想吐槽一下后来想想自己平时写的DEMO就放弃了这个念头，
并且转念一想人家这是用心良苦呀，如果一copy就work那大家就不会思考，不能真正理解其本质而以不变应万变，DEMO不能运行实为刻意为之！！！)