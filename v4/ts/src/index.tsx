/// <reference types="../typings" />
import React from 'react'
import ReactDOM from 'react-dom'
import Text from './jsx/text'
import { log } from 'path-resolve/log-file'

import Button, { IButtonProps } from './components/button'
// import $ from 'jquery'
// store.lll = 'cc
// ddd.dd = 'cc'
// props 为 buttonProps 接口类型,当对象中的属性不符合规定的时候编译器会直接报错
log('eeee')

const props: IButtonProps = { name: 'ts-button' }

class ButtonDemo extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <Text {...props} />
        <Button {...props} />
      </div>
    )
  }
}
ReactDOM.render(<ButtonDemo />, document.getElementById('root'))
