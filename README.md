# webpack
构建一个使用webpack 打包解决方案 repository 持续更新...

## 运行准备
前提条件安装NODE
###  下载安装包依赖
```
$ npm run restore 
or
$ npm install
```
### build 代码
```
$ npm run build //build dev code

$ npm run build:dist //build prodction code 
```
## 结构简介

+ root
  - package.json //[package.json](https://docs.npmjs.com/files/package.json) 项目描述及各种配置
  - .babelrc //[babel](https://babeljs.io/docs/setup/#installation)配置
  - .eslintrc //[eslint](http://eslint.org/) 配置
  - webpack.config.js webpack 入口文件
  - src 测试js存放目录
    + a.js
    + hello.js
  - test //测试html
    + index.html
  - build //build后自动生成
    + bundle.js //合并后的文件
    + bundle.js.map    