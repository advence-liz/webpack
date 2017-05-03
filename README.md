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

```
### 启动local server

```
$ npm run server
```
### 运行test
```
$ npm run test//包含 build 并且启动server
```
## 结构简介:joy::joy:

+ root
  - package.json //[package.json](https://docs.npmjs.com/files/package.json) 项目描述及各种配置
  - .babelrc //[babel](https://babeljs.io/docs/setup/#installation)配置
  - .eslintrc //[eslint](http://eslint.org/) 配置
  - webpack.config.js webpack 入口文件
  - src 测试js存放目录
    + a.js
    + hello.js
  - build //build后自动生成
    + bundle.js //合并后的文件
    + bundle.js.map    

## 技术简介

### 可执行命令
所有的可执行命令都配置在 package.json 的scripts字段，如要运行build 命令则执行 npm run build。
```
"scripts": {
    "build": "npm run lint&&npm run webpack&&npm run copy",//执行这三个命令如果前面的失败则终止
    "restore": "npm install",//下载安装包依赖
    "build:dev": "webpack --env=dev --progress --colors",
    "build:dist": "webpack --env=prod --progress --profile --colors",
    "webpack": "gulp webpack",//执行webpack 合并js 文件
    "lint": "gulp lint",//执行语法检查
    "copy": "gulp copy"//将编辑后文件copy到运行环境
    "test":"npm run lint&&npm run webpack&&launch",//编译并启动sever且直接打开浏览器
    "server": "webpack-dev-server --inline"//启动server
  }
```  
### webpack配置
webpack 配置主要关注entry 和output 字段，目前有两个config 文件，webpack.dev.js&webpack.prod.js 默认使用前者，之后会提供package.json 配置，配置打包env。
``` 
 /**
 * @var entry {key:value} key为生成后文件的名字value 为文件入口
 */
    entry: {
            bundle: "./src/hello.js"，
            index: "./src/index.js
           },
 /**
 * output
 * @prop path {String} 输出文件路径
 * @prop filename {String} 输出文件命名规则
 * @desc 本例当生成
 * - build
 *   +bundle.js
 *   +index.js 
 */          
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
      
    }
```
![](./md/hh.gif)