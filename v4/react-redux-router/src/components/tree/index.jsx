import React from 'react'
import { Tree, Modal } from 'antd'

const DirectoryTree = Tree.DirectoryTree
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

    visible: true,
    title: '移动到',
    lists: [
      {
        type: 'file',
        size: '文件大小',
        path: '',
        id: '1',
        updatedAt: '2018-08-09',
        name: '测试文件.pdf',
        src: '/test/test/测试文件.pdf'
      },
      {
        type: 'tree', // tree：不需要再次请求，直接读取所有数据；directory：需要再次发起请求，才能获取下层数据；file: 最底层文件数据)
        path: '',
        id: '2',
        name: '知识点',
        data: [
          {
            name: '第一章',
            type: 'tree',
            id: '1',
            size: '文件大小',
            updatedAt: '2018-08-09',
            data: [
              {
                name: '勾股定理',
                type: 'tree',
                id: 2,
                updatedAt: '2018-08-09',
                size: '文件大小',
                data: [
                  {
                    name: '讲义1',
                    type: 'file',
                    src: '/test/test/测试文件.pdf',
                    size: '文件大小',
                    updatedAt: '2018-08-09',
                    id: 3
                  },
                  {
                    name: '讲义2',
                    type: 'file',
                    src: '/test/test/测试文件.pdf',
                    size: '文件大小',
                    updatedAt: '2018-08-09',
                    id: 4
                  }
                ]
              }
            ]
          },
          {
            name: '第二章',
            id: '5',
            updatedAt: '2018-08-09',
            type: 'tree',
            size: '文件大小',
            data: [
              {
                name: '勾股定理',
                id: 2,
                updatedAt: '2018-08-09',
                size: '文件大小',
                type: 'tree',
                data: [
                  {
                    name: '讲义1',
                    type: 'file',
                    size: '文件大小',
                    updatedAt: '2018-08-09',
                    src: '/test/test/测试文件.pdf',
                    id: 3
                  },
                  {
                    name: '讲义1',
                    type: 'file',
                    size: '文件大小',
                    updatedAt: '2018-08-09',
                    src: '/test/test/测试文件.pdf',
                    id: 4
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'directory',
        path: '早教视频',
        id: '3',
        size: '文件大小',
        name: '早教视频',
        updatedAt: '2018-08-09'
      }
    ]
  }
  state = {
    selectedKeys: []
  }
  // onSelect = e => {
  //   console.log(e)
  // }
  onLoadData = treeNode => {
    return new Promise(resolve => {
      if (treeNode.props.children) {
        resolve()
        return
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.props.eventKey}-1` }
        ]
        this.setState({
          treeData: [...this.state.treeData]
        })
        resolve()
      }, 1000)
    })
  }
  onExpand = () => {
    console.log('Trigger Expand')
  }

  renderTree (nodes = []) {
    return nodes.map((node, index) => {
      let { type, name, data, id } = node
      if (type === 'file') {
        return <TreeNode title={name} key={id} isLeaf />
      } else if (type === 'directory') {
        return <TreeNode title={name} key={id} />
      } else {
        return <TreeNode title={name} key={id} />
      }
    })
  }

  render () {
    const { visible, onCancel, onOk, title, lists } = this.props
    const { selectedKeys } = this.state
    return (
      <Modal
        title={title}
        width={485}
        footer={null}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
        <DirectoryTree
          defaultExpandAll
          // checkable

          multiple={false}
          selectedKeys={selectedKeys}
          onSelect={this.onSelect}
          onLoadData={this.onLoadData}
        >
          {this.renderTree(lists)}
        </DirectoryTree>
      </Modal>
    )
  }
}
