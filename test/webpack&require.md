# 关于打包方案
此文意在简要描述一下目前对模块加载的研究成果（我把文件代码都粘贴上来了这样比较直观）

## 简要介绍目前js模块加载方式

- ES6采用的module 加载规范 improt & export 
- NODE实现commonjs 加载规范 require & module.export
- 浏览器端只能采用AMD,CMD 之类的加载规范   require & define


## 方案一require js 

假设有目录 js（包涵模块自定义的js文件），lib（公共js类库），dist（经过Babel转化后js存放目录）

- js
  + hello.js
  + a.js
- lib
  + react.js
  + react-dom.js
- dist
  + hello.js
  + a.js


```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <script data-main="../dist/hello" src="http://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.1/require.js"></script>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
      <script>
          require.config({
        //  baseUrl: "../dist/js/", // the path where the  scripts are present
          paths: {
            "react": "../lib/react",
            "react-dom": "../lib/react-dom"
          }
        });
      </script>
      <!--<script src="../dist/hello.js"></script>-->
  </body>
 
</html>
```    
```js
//hello.js 依赖 React ReactDom a
import React from 'react';
import ReactDOM from 'react-dom';
import a ,{fun,d}from "./a"
console.log(a);
console.log(d);
fun();
ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

```
```js
//a.js
function liz() {
    console.log("eeee");
}

var a = { liz: "eeee" };
 export var d ="eee";
export default a;
export { liz as fun };
/**
 * @prop default {a}
 * @prop fun {liz}
 */
```

## 方案二webpack

假设有目录 js（包涵模块自定义的js文件），lib（公共js类库），dist（经过Babel转化后js存放目录，使用webpack 转换的文件会合并）

- js
  + hello.js
  + a.js
- lib
  + react.js
  + react-dom.js
- dist
  + bundle.js
  


```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="../lib/react.js"></script>
    <script src="../lib/react-dom.js"></script>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
      <script src="../dist/bundle.js"></script>
  </body>
 
</html>

```    
```js
//hello.js 依赖 React ReactDom a 当使用webpack 的时候我react 和react-dom 作为公共部分就不需要模块自己引入了（默认肯定已经存在）
//import React from 'react';我可能有强迫症之前竟然觉得不手动引入会有什么不妥囧
//import ReactDOM from 'react-dom';
import a ,{fun,d}from "./a"
console.log(a);
console.log(d);
fun();
ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

```
```js
//a.js
function liz() {
    console.log("eeee");
}

var a = { liz: "eeee" };
 export var d ="eee";
export default a;
export { liz as fun };
/**
 * @prop default {a}
 * @prop fun {liz}
 */
```



