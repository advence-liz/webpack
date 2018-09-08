import React from 'react'
import { Table, Row, Col, List } from 'antd'

import PropTypes from 'prop-types'
import moment from 'moment'
import { connect } from 'react-redux'
import './style.scss'
import { Get, Post } from 'actions/user/my-account'
/* eslint-disable react/prop-types, camelcase */

const columns = [
  {
    title: '收支编号',
    dataIndex: 'code',
    width: 150
    // render: item => <div style={{ width: 100 }}>{item}</div>
  },
  {
    title: '日期',
    dataIndex: 'date',
    width: 120
  },
  {
    title: '收入(元)',
    dataIndex: 'in_money',
    width: 90,
    render(item) {
      let result = ''
      if (item > 0) result = `${item}`
      return result
    }
  },
  {
    title: '支出(元)',
    dataIndex: 'out_money',
    width: 90,
    render(item) {
      let result = ''
      if (item > 0) result = `-${item}`
      return result
    }
  },
  {
    title: '说明',
    dataIndex: 'title'
    // width: 100
  }
]
class MyAccount extends React.Component {
  state = { selecttipsedDate: moment(), selectedDurings: [] }
  get Tips() {
    const { tips } = this.props
    const tipStyle = { color: '#999' }
    return tips.map((item, index) => (
      <div style={tipStyle} key={`tip${index}`}>
        {index + 1}. {item}
      </div>
    ))
  }
  get Line() {
    return (
      <div
        style={{
          height: 1,
          background: '#D6D6D6',
          marginBottom: 15,
          marginTop: '1em',
          opacity: 0.5
        }}
      />
    )
  }
  componentDidMount() {
    const { dispatch, setStore, pagination } = this.props
    const { current: page, pageSize: page_size } = pagination
    dispatch(Get('getAccountBalance'), ({ data }) => {
      setStore(data)
    })
    dispatch(Get('getAccountLogs', { page, page_size }), ({ data }) => {
      const { data: dataSource, total } = data
      setStore({ dataSource, pagination: { ...pagination, total }, loading: false })
    })
  }
  handleTableChange = (pagination) => {
    const { dispatch, setStore } = this.props
    const { current: page, pageSize: page_size } = pagination
    setStore({ loading: true })
    dispatch(Get('getAccountLogs', { page, page_size }), ({ data }) => {
      const { data: dataSource, total } = data
      setStore({ dataSource, pagination: { ...pagination, total }, loading: false })
    })
  }
  render() {
    const {
      tips, balance, dataSource, pagination, loading
    } = this.props

    return (
      <div className="my-account" style={{ paddingTop: 20, paddingLeft: 20 }}>
        <Row>
          <h3>账号余额</h3>
          {this.Line}
        </Row>
        <Row>
          <h3 style={{ marginBottom: '1.2em' }}>
            课时费余额 : <span style={{ color: 'red' }}>{balance}元</span>
          </h3>
          <h3>温馨提示 :</h3>
          {this.Tips}
          {this.Line}
        </Row>
        <Row>
          <h3>课时费明细</h3>
          {this.Line}
        </Row>
        <Row style={{ whiteSpace: 'normal' }}>
          <Col span={22}>
            <Table
              columns={columns}
              rowKey={record => record.id}
              dataSource={dataSource}
              pagination={pagination}
              loading={loading}
              onChange={this.handleTableChange}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
MyAccount.propTypes = {
  durings: PropTypes.array,
  selectedDurings: PropTypes.array
}

function mapStateToProps(state) {
  // 过滤user数据状态，每当全局state发生变化，就会执行该回调
  const {
    user: { myAccount }
  } = state

  return myAccount
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch(action, callback) {
      if (callback) {
        return dispatch(action).then(callback)
      }
      return dispatch(action)
    },
    setStore(data) {
      dispatch({
        type: 'UPDATE_STORE$MY_ACCOUNT',
        data
      })
    }
  }
}
// 组件与Redux Store连接
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount)
