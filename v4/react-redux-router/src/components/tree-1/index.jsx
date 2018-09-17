import React from 'react'
import { Tree } from 'antd'
const TreeNode = Tree.TreeNode

export default class TreeComponent extends React.Component {
  state = {
    treeData: [
      { title: 'Expand to load', key: '0' },
      { title: 'Expand to load', key: '1' },
      { title: 'Tree Node', key: '2', isLeaf: true }
    ]
  }

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

  renderTreeNodes = data => {
    return data.map((item, index) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode key={`${index}`} {...item} dataRef={item} />
    })
  }

  render () {
    return (
      <Tree loadData={this.onLoadData} showLine>
        {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    )
  }
}
