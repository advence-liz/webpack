import React from 'react'
import { connect } from 'react-redux'
import FetchAction from 'actions/fetch-action'
import actionFactory from 'actions/action-factory'
import { Modal } from 'antd'

class Home extends React.Component {
  static defaultProps = {
    books: []
  }

  plus=() => {
    const { setStore, count } = this.props
    setStore({ count: count + 1 })
  }

  getBooks=() => {
    const { setStore } = this.props
    setStore({ books: [{ no: '011111' }, { no: '011112' }, { no: '011113' }] })
  }

  componentDidMount() {
    const { Get } = this.props
    Get('/api/books/foo/bar')
  }

  render() {
    const { name, count, books } = this.props
    return (
      <div>
        <h1>{name}</h1>
        <div onClick={this.plus} >count:{count}</div>
        <div onClick = {this.getBooks}>books</div>
        <div>{books.map(item => <div key ={item.no}>{item.no}</div>)}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.home
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
