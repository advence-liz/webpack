import React from 'react'
import { Tree, Modal, Button, Row, Col, Icon } from 'antd'

// const DirectoryTree = Tree.DirectoryTree
const TreeNode = Tree.TreeNode
function guid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0

    var v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
export default class TreeComponent extends React.Component {
  static defaultProps = {
    onOk (options) {
      console.log('ok')
      console.log(options)
    },
    onCancel () {
      console.log('cancel')
    },
    onLoadData (dataRef) {
      return new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, [
          {
            type: 'directory',
            size: '文件大小',
            path: '',
            id: guid(),
            isEmpty: false,
            updatedAt: '2018-08-09',
            name: 'folder',
            src: '/test/test/测试文件.pdf'
          },
          {
            type: 'file',
            path: '早教视频',
            id: guid(),
            isEmpty: true,
            size: '文件大小',
            name: '早教视频',
            updatedAt: '2018-08-09'
          }
        ])
      })
    },
    onNewDirectory (dataRef) {
      return new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, {
          type: 'directory',
          size: '文件大小',
          path: '',
          id: guid(),
          updatedAt: '2018-08-09',
          name: '测试文件.pdf',
          src: '/test/test/测试文件.pdf'
        })
      })
    },
    visible: true,
    title: '移动到',
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
      },
      {
        type: 'directory',
        size: '文件大小',
        path: '',
        id: guid(),
        isEmpty: true,
        updatedAt: '2018-08-09',
        name: 'folder1',
        src: '/test/test/测试文件.pdf'
      },
      {
        type: 'file',
        path: '早教视频',
        id: guid(),
        isEmpty: true,
        size: '文件大小',
        name: '早教视频',
        updatedAt: '2018-08-09'
      }
    ]
  }
  state = {
    selectedKeys: [],
    lists: [],
    dataRef: {}
  }
  constructor (props) {
    super(props)
    let { lists } = props
    this.state.lists = lists
  }

  onSelect = (selectedKeys, info) => {
    const {
      node: {
        props: { dataRef }
      }
    } = info

    this.setState({ selectedKeys, dataRef })
  }
  _onLoadData = async treeNode => {
    const { onLoadData } = this.props
    const { dataRef } = treeNode.props
    const { isEmpty } = dataRef

    return new Promise(async (resolve, reject) => {
      if (isEmpty) {
        resolve()
        return
      }
      const childrenLists = await onLoadData(dataRef)

      if (childrenLists.length) {
        dataRef.children = childrenLists
      }

      // this.setState({ lists: [...this.state.lists] })
      this.forceUpdate()
      resolve()
    })
  }
  _onNewDirectory = async () => {
    const { dataRef } = this.state
    const { onNewDirectory } = this.props
    return new Promise(async (resolve, reject) => {
      const node = await onNewDirectory(dataRef)
      dataRef.children.push(node)
      this.setState({})
      resolve()
    })
  }
  renderTreeNode (node) {
    let { type, name, id, isEmpty } = node
    if (type === 'directory') {
      return (
        <TreeNode
          icon={<Icon type="folder" theme="outlined" />}
          title={name}
          key={id}
          dataRef={node}
          isLeaf={isEmpty}
        />
      )
    } else {
      return (
        <TreeNode
          icon={<Icon type="file" theme="outlined" />}
          title={name}
          key={id}
          dataRef={node}
          isLeaf={true}
        />
      )
    }
  }
  renderTreeNodes = lists => {
    return lists.map((node, index) => {
      let { isEmpty, children, name, id } = node
      if (!isEmpty && children) {
        return (
          <TreeNode title={name} key={id} dataRef={node} isLeaf={false}>
            {this.renderTreeNodes(children)}
          </TreeNode>
        )
      }
      return this.renderTreeNode(node)
    })
  }

  render () {
    const { visible, onCancel, onOk, title } = this.props
    const { selectedKeys, lists } = this.state
    return (
      <Modal
        title={title}
        width={485}
        footer={null}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
        <Tree
          // showLine
          showIcon
          loadData={this._onLoadData}
          onSelect={this.onSelect}
        >
          {this.renderTreeNodes(lists)}
        </Tree>
        <Row>
          <Button onClick={this._onNewDirectory}>新建文件夹</Button>{' '}
          <Button type="primary">确认</Button>
          <Button> 取消</Button>
        </Row>
      </Modal>
    )
  }
}
