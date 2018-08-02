import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Button, { IButtonProps } from './components/button'

// props 为 buttonProps 接口类型,当对象中的属性不符合规定的时候编译器会直接报错
const props: IButtonProps = { name: 'ts-button' }

class ButtonDemo extends React.Component {
  state = {}

  render() {
    return <Button {...props} />
  }
}
ReactDOM.render(<ButtonDemo />, document.getElementById('root'))
