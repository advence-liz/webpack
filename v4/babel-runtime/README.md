# babel-runtime

## babel 配置

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "iOS >= 8", "Android >= 4"]
        }
      }
    ],
    "react",
    "stage-1"
  ],
  "plugins": [
    [
      "transform-runtime",
      {
        "helpers": true, // 重babel-runtime中引入工具函数，不适用内联的工具函数
        "polyfill": true, // 为 Promise Set Map 等 提供polyfill，但是不是全局polyfill  但是自动引入发范围我还不太确定 至少String 没有支持，而且实例方法也不支持没有 bable useBuiltIns  强大
        "regenerator": true,
        "moduleName": "babel-runtime"
      }
    ]
  ]
}
```

综合来看 最为 library 的应该使用 babel-runtime 而项目开发应该使用 useBuiltIns ,如果 library 在 babel-polyfill 之后引入就完美了（正常项目默认应该就是这样的）
