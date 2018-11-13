import React from 'react'
import { Tree, Modal, Button, Row, Col, Icon, Input } from 'antd'
import { Node, guid } from './model'
import FileIcon from 'components/file-icon'
import './style.scss'

// const DirectoryTree = Tree.DirectoryTree
const TreeNode = Tree.TreeNode

export default class TreeComponent extends React.Component {
  static defaultProps = {
    onOk (dataRef, state) {
      console.log('ok')
      console.log(dataRef, state)
    },
    onCancel (dataRef, state) {
      console.log('cancel')
      console.log(dataRef, state)
    },
    onInputChange (event) {},
    onLoadData (dataRef) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, [
          {
            type: 'directory',
            size: '文件大小',
            path: '',
            id: guid(),
            isEmpty: false,
            updatedAt: '2018-08-09',
            name: 'folder',
            fileType: 'folder',
            src: 'folder'
          },
          {
            type: 'pdf',
            size: '文件大小',
            fileType: 'pdf',
            path: '',
            id: '1',
            isEmpty: false,
            updatedAt: '2018-08-09',
            name: 'folder',
            src: '/test/test/测试文件.pdf'
          }
        ])
      })
    },
    // onNewDirectory (dataRef) {
    //   return new Promise(function (resolve, reject) {
    //     setTimeout(resolve, 1000, {
    //       type: 'directory',
    //       size: '文件大小',
    //       path: '',
    //       id: guid(),
    //       isEmpty: true,
    //       updatedAt: '2018-08-09',
    //       name: 'new folder',
    //       src: '/test/test/测试文件.pdf'
    //     })
    //   })
    // },
    visible: true,
    title: '移动到',
    searchKey: '',
    lists: []
  }
  static getDerivedStateFromProps (props, state) {
    const prevProps = state.prevProps
    // Compare the incoming prop to previous prop

    if (prevProps.lists !== props.lists) {
      state.lists = props.lists.map(item => new Node(item))
      state.prevProps = props
    }

    if (prevProps.searchKey !== props.searchKey) {
      state.searchKey = props.searchKey
      state.prevProps = props
    }
    return state
  }
  state = {
    prevProps: {},
    selectedKeys: [],
    lists: [],
    dataRef: {} // 当前选中treeNode
  }

  get title () {
    return this.state.title || this.isSave ? '保存到' : '移动到'
  }
  get isFolder () {
    const {
      dataRef: { type }
    } = this.state
    return type === 'directory'
  }
  get isSave () {
    const { searchKey, onNewDirectory } = this.props
    return !!searchKey
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
      const childrenLists = await onLoadData(dataRef, this.state)
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
      const node = await onNewDirectory(dataRef, this.state)
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
    onOk(dataRef, this.state)
  }
  _onCancel = () => {
    const { dataRef } = this.state
    const { onCancel } = this.props

    onCancel(dataRef, this.state)
  }
  _onInputChange = event => {
    const {
      target: { value }
    } = event
    this.setState({ searchKey: value })
  }
  renderTreeNode (node) {
    const { type, name, uuid, isEmpty, fileType } = node
    if (type === 'directory') {
      return (
        <TreeNode
          icon={<FileIcon type={fileType} />}
          title={name}
          key={uuid}
          dataRef={node}
          isLeaf={isEmpty}
        />
      )
    }
    return (
      <TreeNode
        icon={<FileIcon type={fileType} />}
        title={name}
        key={uuid}
        dataRef={node}
        isLeaf={true}
      />
    )
  }
  renderTreeNodes = lists =>
    lists.map((node, index) => {
      const { isEmpty, children, name, uuid } = node
      if (!isEmpty && children.length) {
        return (
          <TreeNode
            icon={<FileIcon type="folder" />}
            title={name}
            key={uuid}
            dataRef={node}
            isLeaf={false}
          >
            {this.renderTreeNodes(children)}
          </TreeNode>
        )
      }
      return this.renderTreeNode(node)
    })

  render () {
    const { visible, onCancel, onOk, title } = this.props
    const { lists, searchKey } = this.state
    return (
      <Modal
        title={title}
        footer={null}
        visible={visible}
        onCancel={onCancel}
        className="q-tree"
        width={600}
      >
        <Tree
          showLine
          showIcon
          loadData={this._onLoadData}
          onSelect={this.onSelect}
        >
          <TreeNode
            icon={<FileIcon type="folder" />}
            title={'全部文件'}
            key={'1024'}
            dataRef={{ root: true, type: 'directory', children: lists }}
            isLeaf={!lists.length}
          >
            {this.renderTreeNodes(lists)}
          </TreeNode>
        </Tree>
        {this.isSave ? (
          <Row type="flex" justify="space-between" style={{ marginTop: 20 }}>
            <Col>
              <label htmlFor="q-file-name">
                文件名
                <Input
                  id="q-file-name"
                  onChange={this._onInputChange}
                  value={searchKey}
                  style={{ width: 200, marginLeft: 20 }}
                />
              </label>
            </Col>
            <Col>
              <Button
                type="primary"
                onClick={this._onOk}
                style={{ marginRight: 30, padding: '0px 35px' }}
                disabled={!this.isFolder}
              >
                确认
              </Button>
              <Button onClick={this._onCancel} style={{ padding: '0px 35px' }}>
                取消
              </Button>
            </Col>
          </Row>
        ) : (
          <Row type="flex" justify="end" style={{ marginTop: 20 }}>
            <Col>
              <Button
                type="primary"
                onClick={this._onOk}
                style={{ marginRight: 30, padding: '0px 35px' }}
                disabled={!this.isFolder}
              >
                确认
              </Button>
            </Col>
            <Col>
              <Button
                style={{ marginRight: 0, padding: '0px 35px' }}
                onClick={this._onCancel}
              >
                取消
              </Button>
            </Col>
          </Row>
        )}
      </Modal>
    )
  }
}
