import React from 'react'
// import { connect } from 'react-redux'
// import actionFactory from 'actions/action-factory'
// import { push } from 'connected-react-router'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Row, Col, Input, DatePicker, Button } from 'antd'

class AppointmentFilter extends React.Component {
  static defaultProps = {
    onFilterChange (state) {
      console.dir(state)
    }
  }
  state = {
    selectedDate: moment().format('YYYY-MM-DD'), // 有一个小问题就是当datepicker 点X 清空时 selectedDate 被赋值为 "" 下面的render 方法加了如下判断  value={!selectedDate ? null : moment(selectedDate)}
    userName: '',
    productName: '',
    orderNumber: ''
  }
  onChange = (moment, format) => {
    this.setState({ selectedDate: format })
  }
  onInputChange = event => {
    const {
      target: { name, value }
    } = event

    this.state[name] = value // eslint-disable-line
    this.setState({})
  }
  submit = () => {
    const { onFilterChange } = this.props
    onFilterChange(this.state)
  }
  render () {
    const { selectedDate, userName, productName, orderNumber } = this.state
    const inputStyle = {
      width: 125,
      marginLeft: 12
    }
    return (
      <Row gutter={20}>
        <Col span={5}>
          上课日期
          <DatePicker
            style={inputStyle}
            value={!selectedDate ? null : moment(selectedDate)}
            onChange={this.onChange}
          />
        </Col>
        <Col span={5}>
          用户名称
          <Input
            name="userName"
            style={inputStyle}
            onChange={this.onInputChange}
            value={userName}
            placeholder="请输入用户名称"
          />
        </Col>
        <Col span={5}>
          商品名称
          <Input
            name="productName"
            style={inputStyle}
            value={productName}
            onChange={this.onInputChange}
            placeholder="请输入商品名称"
          />
        </Col>
        <Col span={5}>
          商品名称
          <Input
            name="orderNumber"
            style={inputStyle}
            value={orderNumber}
            onChange={this.onInputChange}
            placeholder="请输入订单编号"
          />
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={this.submit}>
            查询
          </Button>
        </Col>
      </Row>
    )
  }
}
AppointmentFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired
}
export default AppointmentFilter

// function mapStateToProps (state) {
//   let { absence } = state
//   return absence
// }
// function mapDispatchToProps (dispatch) {
//   return {
//     setStore: actionFactory('ABSENCE', dispatch)
//   }
// }

// const PageVisible = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Page)
// export default PageVisible
