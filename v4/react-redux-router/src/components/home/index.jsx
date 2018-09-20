import React from 'react'

import FileTree from '../file-tree'
function guid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0

    var v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default class Home extends React.Component {
  static defaultProps = {
    setValidation (val) {
      // this.setState({ validation: value })
    },
    onRefresh (during) {
      console.log(during)
      // this.setState({ scheduleData: data1 })
    },
    click (date) {
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
  click = () => {
    this.setState({ searchKey: new Date().getTime(), visible: true })
  }
  cancel = () => {
    this.setState({ visible: false })
  }
  reset = () => {
    this.setState({
      lists: [
        {
          type: 'directory',
          size: '文件大小',
          path: '',
          id: guid(),
          isEmpty: false,
          updatedAt: '2018-08-09',
          name: 'folder',
          src: '/test/test/测试文件.pdf'
        }
      ]
    })
  }
  render () {
    const { searchKey, visible, lists } = this.state
    return (
      <div>
        <h1>Home</h1>
        <FileTree
          searchKey={searchKey}
          visible={visible}
          lists={lists}
          onCancel={this.cancel}
        />
        <button onClick={this.click}>searchKey</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}
