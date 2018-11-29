import React from 'react'
import { Button, Divider } from 'antd'
import Complaint from './components/axb-call'

// const Option = Select.Option;
export default class ComplaintPage extends React.Component {
  state = { visible: true }

  toggle = (...rest) => {
    console.table(rest)
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  render() {
    return (
      <div>
        <h1>申请投诉</h1>
        <Divider />
        <Button onClick={this.toggle}>show</Button>
        <Complaint visible={this.state.visible} onCancel={this.toggle} onOk={this.toggle} />
      </div>
    )
  }
}
