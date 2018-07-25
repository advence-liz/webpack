# css-modules

每当一个语言负责的任务越来越重的时候，模块化解决方案基本都会如期提上议程，当前的前端开发中
css 模块化的需求也越来越迫切，本次为了解决项目中 css 名字冲突问题对 css-moduels 进行了一些研究与探索

## [css-modules](https://github.com/css-modules/css-modules)

css-moduels 用起来大概是这个样子,一般通过 webpack 使用,开启 css-lodaer 的 modules 功能,
样式以一个 JavaScript 对象的形式传递给了引用样式的 js 文件

### webpack 配置

```js
 {
   loader: 'css-loader', // translates CSS into CommonJS
   options: {
     modules: true,
     localIdentName: `[path]___[name]__[local]___[hash:base64:5]`
   }
 },
```

### css 代码

```css
/* style.css */
.className {
  color: green;
}
```

### js 代码

```js
import styles from "./style.css"
// import { className } from "./style.css";

element.innerHTML = '<div class="' + styles.className + '">'
```

## css-modules in react

> 书写 react 许多人偏好 css in js 方案，而且 css-modules 看起来就是一个 css in js 的缓和方案，虽然书写的是 css 文件 但是使用的时候也是通过 js 对象，
> 而且这种方式完美的契合 JSX

### react code

```js
import React from "react"
import styles from "./table.css"

export default class Table extends React.Component {
  render() {
    return (
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.cell}>A0</div>
          <div className={styles.cell}>B0</div>
        </div>
      </div>
    )
  }
}
```

### output

```html
<div class="table__table___32osj">
    <div class="table__row___2w27N">
        <div class="table__cell___1oVw5">A0</div>
        <div class="table__cell___1oVw5">B0</div>
    </div>
</div>
```

## react-css-modules

> 上面的 css-modules in react 在输出结果上很完美，只不过书写代码就有些乏力,试想一下如果一个 DOM 元素有多个 class怎么搞?class 命名不是驼峰规则怎么?所以也就引入了 react-css-modules 方案

- `export` 组件的时候用 `CSSModules` 包装一下
- `<div className='global-css' styleName='local-module'></div>` `styleName` 是本地样式 `calssName` 代表全局样式

```jsx
import React from "react"
import CSSModules from "react-css-modules"
import styles from "./table.css"

class Table extends React.Component {
  render() {
    return (
      <div styleName="table">
        <div styleName="row">
          <div styleName="cell">A0</div>
          <div styleName="cell">B0</div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Table, styles)
```

## babel-plugin-react-css-modules

> 使用 react-css-modules 需要显示的引用 CSSModules 总是感觉不爽, 而 babel-plugin-react-css-modules 提供了更简单的方式在打包流程中转化处理,基本跟原来书写样式的方式一模一样

```jsx
import React from "react"
import styles from "./table.css"

class Table extends React.Component {
  render() {
    return (
      <div styleName="table">
        <div styleName="row">
          <div styleName="cell">A0</div>
          <div styleName="cell">B0</div>
        </div>
      </div>
    )
  }
}

export default Table
```

## 参考链接

- [css-modules](https://github.com/css-modules/css-modules)
- [react-css-modules](https://github.com/gajus/react-css-modules)
- [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)
- [CSS Modules 详解及 React 中实践](https://zhuanlan.zhihu.com/p/20495964)
