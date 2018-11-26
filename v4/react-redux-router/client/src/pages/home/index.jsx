import React from 'react'
import { connect } from 'react-redux'

import FetchAction from 'actions/fetch-action'
import actionFactory from 'actions/action-factory'
import { Modal } from 'antd'

class Home extends React.Component {
  static defaultProps = {
    setValidation(val) {
      // this.setState({ validation: value })
    },
    onRefresh(during) {
      console.log(during)
      // this.setState({ scheduleData: data1 })
    },
    click(date) {
      console.log(date)
    }
  }

  state = {
    visible: true,
    visible1: true
  }

  componentDidMount() {
    const { Get } = this.props
    Get('/api/books/foo/bar')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Modal
          title="Basic Modal A"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={() => {
            this.setState({ visible: false })
          }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Basic Modal B"
          visible={this.state.visible1}
          onOk={this.handleOk}
          onCancel={() => {
            this.setState({ visible1: false })
          }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state
}

function mapDispatchToProps(dispatch) {
  const setStore = actionFactory('HOME', dispatch)
  const { Get, Post } = new FetchAction(dispatch)
  return {
    Get,
    Post,
    setStore
  }
}

// 组件与Redux Store连接
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
