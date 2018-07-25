# css-modules

每当一个语言负责的任务越来越重的时候，模块化解决方案基本都会如期提上议程，当前的前端开发中
css 模块化的需求也越来越迫切，本次为了解决项目中 css 名字冲突问题对 css-moduels 进行了一些研究与探索

## [css-modules](https://github.com/css-modules/css-modules)

> css-moduels 用起来大概是这个样子,一般通过 webpack 使用,开启 css-lodaer 的 modules 功能

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
/* 本地样式输出后名字为指定规则加上hash值 */
.className {
  color: green;
}
/* 全局样式输出后不会改变名字 */
:global {
  .global-class-name {
    color: green;
  }
}
```

### js 代码

```js
import styles from "./style.css"
// import { className } from "./style.css";

element.innerHTML = '<div class="' + styles.className + '">'

//styles.className 大约这个样子（可以个性化配置）  .src-styles-___index__className___3riMm
```

#### css-modules in react

css-modules很好的契合JSX,在react中可以充分发挥其力量，其大体形式如下

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

渲染结果

```html
<div class="table__table___32osj">
    <div class="table__row___2w27N">
        <div class="table__cell___1oVw5">A0</div>
        <div class="table__cell___1oVw5">B0</div>
    </div>
</div>
```

## [react-css-modules](https://github.com/gajus/react-css-modules)

> 上面的css-modules in react在输出结果上很完美,只不过书写代码就有些乏力,试想一下如果一个DOM元素有多个class怎么搞?class命名不是驼峰规则怎么搞?所以也就引入了 react-css-modules方案

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

## [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)

> 使用 react-css-modules 需要显示的引用CSSModules总是感觉不爽,而babel-plugin-react-css-module提供了更简单的方式在打包流程中转化处理,基本跟原来书写样式的方式一模一样

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
