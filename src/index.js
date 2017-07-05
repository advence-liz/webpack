 //import React from 'react.js';
// import ReactDOM from 'react-dom';
//import 'babel-polyfill';
//import a ,{fun,d}from "./a";
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
var load = require("bundle-loader?lazy&name=[name]!./aa/a.js");

// 只有在调用load的时候才会真正加载
load(function(a){ 
console.log(a);
})





ReactDOM.render(
        <h1>Hello, wodrld!</h1>,
        document.getElementById('root')
      );
//throw "ee";
//ReactDOM = {};
console.log('ddddsssss');
console.log('dddd');
      console.log('dssss');
      console.log('dddd');
     
      
console.log('dddddsssss');
console.log('dddddddsssss');





