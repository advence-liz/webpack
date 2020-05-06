# 测试 babel env useBuiltIns 自动 polyfill 功能

## babel 配置

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "iOS >= 8", "Android >= 4"]
        },
        "modules": false,
        "useBuiltIns": true,
        "debug": true
      }
    ],
    "react",
    "stage-2"
  ]
}
```

## 排除插件配置

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 versions", "safari >= 7"]
        },
        "include": ["transform-es2015-arrow-functions", "es6.map"],
        "exclude": ["transform-regenerator", "es6.set"]
      }
    ]
  ]
}
```

## 文件大小比较

- 未引入的 polyfill 时文件大小 33k
- 引入 polyfill 大约 330 增加了 300k，压缩当做 30%的比例的话大约增加 100k 的文件
- 因为我配置的兼容的浏览器版本比较低，再加上排除一些转化的话，可以进一步缩小文件体积
