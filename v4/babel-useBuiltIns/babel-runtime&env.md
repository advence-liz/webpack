# runtime & preset-env

## [preset-env](https://www.babeljs.cn/docs/babel-preset-env)

- `targets`根据[browsersilist](https://github.com/browserslist/browserslist)配置你所要兼容的浏览器以此为凭证引入对应的`polyfill`，不过配置完毕`targets`并不代表万事大吉因为这个字段要跟`useBuiltIns`配合使用
- `useBuiltIns`默认值为`false`即不引人任何`polyfill`，还有俩个值可选`entry`和`usage`区别在于`entry`在入口文件统一引入所有要用到的`polyfill`而`useage`作用于打包产生多个文件的场景每个文件只引入当前文件所需的`polyfill`（看起来很酷炫仔细想想好像又没有那么实用，如果入口文件包含的`polyfill`覆盖了80%，那么怎么看都是直接在入口引入所有的`polyfill`划算）
- modules
- debug
- `import 'core-js/modules/es6.map'`
  
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "iOS >= 8", "Android >= 4"]
        },
        "useBuiltIns": false,
        "corejs": 3,// 指定所使用的corejs 的版本
        "debug": true
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "helpers": true,
        "regenerator": true
      }
    ]
  ]
}
```

未完待续

## 关于symbol 报错

- 检查了一下我们的配置看起来都没有毛病
- 在单独搭建的环境做了一些测试看起依然觉得配置没毛病
- 想到可行方案大不了在入口默认引入`polyfill`,`import 'core-js/modules/es6.symbol'`
- 猜想也许 `useBuiltIns`换成 `entry`能成
- 由于不好验证先搁置