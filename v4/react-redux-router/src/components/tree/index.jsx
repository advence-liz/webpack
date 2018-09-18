import React from 'react'
import { Tree, Modal, Button, Row, Col, Icon } from 'antd'
import { Node, guid } from './model'
import './style.scss'

// const DirectoryTree = Tree.DirectoryTree
const TreeNode = Tree.TreeNode

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
          isEmpty: true,
          updatedAt: '2018-08-09',
          name: 'new folder',
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
    dataRef: {} // 当前选中treeNode
  }
  constructor (props) {
    super(props)
    let { lists } = props
    this.state.lists = lists.map(item => new Node(item))
    console.log(this.state.lists)
  }
  get isFolder () {
    const {
      dataRef: { type }
    } = this.state
    return type === 'directory'
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
    const { isEmpty, children } = dataRef

    return new Promise(async (resolve, reject) => {
      if (isEmpty || children.length) {
        resolve()
        return
      }
      const childrenLists = await onLoadData(dataRef)
      dataRef.children = childrenLists.map(item => new Node(item))
      this.setState({ lists: [...this.state.lists] })
      // this.forceUpdate()
      resolve()
    })
  }
  _onNewDirectory = async () => {
    const { dataRef } = this.state
    const { onNewDirectory } = this.props
    const { children } = dataRef
    if (!this.isFolder) return
    return new Promise(async (resolve, reject) => {
      const node = await onNewDirectory(dataRef)
      /**
       * 0 能进入此处逻辑的一定是目录,当isEmpty 为true 不会有异步加载按钮
       * 1 当前目录children.length > 0即代表已经加载过数据直接在 children 中添加新创建的节点
       * 2 当前目录chidren.length ===0 时,将 isEmpty 设置为false 触发异步加载
       */
      if (children.length) {
        dataRef.children.push(new Node(node))
        dataRef.isEmpty = false
      } else {
        dataRef.isEmpty = false
      }
      this.setState({ lists: [...this.state.lists] })
      resolve()
    })
  }
  _onOk = () => {
    const { dataRef } = this.state
    const { onOk } = this.props
    onOk(dataRef)
  }
  _onCancel = () => {
    const { dataRef } = this.state
    const { onCancel } = this.props
    onCancel(dataRef)
  }
  renderTreeNode (node) {
    let { type, name, id, isEmpty } = node
    if (type === 'directory') {
      return (
        <TreeNode
          icon={
            <Icon style={{ color: '#FFCD2E' }} type="folder" theme="two-one" />
          }
          title={name}
          key={id}
          dataRef={node}
          isLeaf={isEmpty}
        />
      )
    } else {
      return (
        <TreeNode
          icon={
            <Icon style={{ color: '#FFCD2E' }} type="file" theme="filled" />
          }
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
      if (!isEmpty && children.length) {
        return (
          <TreeNode
            icon={
              <Icon
                style={{ color: '#FFCD2E' }}
                type="folder"
                theme="two-one"
              />
            }
            title={name}
            key={id}
            dataRef={node}
            isLeaf={false}
          >
            {this.renderTreeNodes(children)}
          </TreeNode>
        )
      }
      return this.renderTreeNode(node)
    })
  }

  render () {
    const { visible, onCancel, onOk, title } = this.props
    const { lists } = this.state
    return (
      <Modal
        title={title}
        width={485}
        footer={null}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        className="q-tree"
      >
        <Tree
          showLine
          showIcon
          loadData={this._onLoadData}
          onSelect={this.onSelect}
        >
          {this.renderTreeNodes(lists)}
        </Tree>
        <Row type="flex" justify="space-between" style={{ marginTop: 20 }}>
          <Col>
            <Button onClick={this._onNewDirectory} disabled={!this.isFolder}>
              新建文件夹
            </Button>
          </Col>
          <Col>
            <Button
              type="primary"
              style={{ marginRight: 30 }}
              disabled={!this.isFolder}
            >
              确认
            </Button>
            <Button> 取消</Button>
          </Col>
        </Row>
      </Modal>
    )
  }
}
