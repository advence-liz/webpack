import React from 'react'
import { connect } from 'react-redux'

import FetchAction from 'actions/fetch-action'
import actionFactory from 'actions/action-factory'

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
    searchKey: '',
    visible: true,
    lists: [
      {
        type: 'directory',
        size: '文件大小',
        path: '',
        id: '1',
        isEmpty: false,
        updatedAt: '2018-08-09',
        name: 'folder',
        src: '/test/test/测试文件.pdf'
      },
      {
        type: 'file',
        path: '早教视频',
        id: '2',
        isEmpty: true,
        size: '文件大小',
        name: '早教视频',
        updatedAt: '2018-08-09'
      }
    ]
  }

  componentDidMount() {
    const { Get } = this.props
    // Get('/api/books/foo/bar')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
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
