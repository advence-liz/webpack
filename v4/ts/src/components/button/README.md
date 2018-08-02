# Button

## code

组件例子

```jsx
import * as React from "react"
import * as ReactDOM from "react-dom"
import Button, { ButtonProps } from "../index"

// props 为 buttonProps 接口类型,当对象中的属性不符合规定的时候编译器会直接报错
let props: ButtonProps = { name: "ts-button" }

// 如果有一些特殊需求也可以写一个class,对属性做一些个性化的处理,比如传入的数据为后台接口取回来的data
// class ButtonInit implements ButtonProps {
//   public name: string
//   public width: number
//   public height: number
//   constructor(data:object) {
//     /*........*/
//     this.name = xxx

//   }
// }
// let props: ButtonProps = new ButtonInit(data)

class ButtonDemo extends React.Component {
  state = {}

  render() {
    return <Button {...props} />
  }
}
// id 为 q-componentname ,之所以没有使用固定的id 比如（root) 是考虑如何以后将不同的DEMO 页面合并在一起如果id 相同那么渲染就会报错
ReactDOM.render(<ButtonDemo />, document.getElementById("q-button"))
```
