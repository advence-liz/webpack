import * as React from 'react'
import Button, { IButtonProps } from '../index'

// props 为 buttonProps 接口类型,当对象中的属性不符合规定的时候编译器会直接报错
const props: IButtonProps = { name: 'ts-button' }

export default class ButtonDemo extends React.Component {
  state = {}

  render() {
    return <Butt on {...props} />
  }
}
