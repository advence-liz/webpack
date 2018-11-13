import React from 'react'
// import { connect } from 'react-redux'
// import actionFactory from 'actions/action-factory'
// import { push } from 'connected-react-router'
import moment from 'moment'
import PropTypes from 'prop-types'
import {
  Row, Col, Input, DatePicker, Button
} from 'antd'
/* eslint-disable camelcase */
class AppointmentFilter extends React.Component {
  static defaultProps = {
    onFilterChange(state) {
      console.dir(state)
    }
  }

  state = {
    selectedRange: [],
    userName: '',
    courseName: '',
    orderNumber: ''
  }

  get selectedRange() {
    const { selectedRange } = this.state
    return selectedRange.map(date => (date ? moment(date) : null))
  }

  onRangeChange = (moment, format) => {
    this.setState({ selectedRange: format })
  }

  onInputChange = (event) => {
    const {
      target: { name, value }
    } = event

    this.state[name] = value // eslint-disable-line
    this.setState({})
  }

  clear = () => {
    this.setState({
      selectedRange: [],
      userName: '',
      courseName: '',
      orderNumber: ''
    })
  }

  submit = () => {
    const { onFilterChange } = this.props
    const {
      courseName: course_name,
      orderNumber: order_number,
      userName: user_name,
      selectedRange: [time_from, time_to]
    } = this.state

    onFilterChange({
      user_name,
      course_name,
      order_number,
      time_from,
      time_to
    })
  }

  render() {
    const { userName, courseName, orderNumber } = this.state
    const inputStyle = {
      width: 220,
      marginLeft: 12
    }
    return (
      <div>
        <Row gutter={20} style={{ marginBottom: 12 }}>
          <Col span={8}>
            上课日期
            <DatePicker.RangePicker
              style={inputStyle}
              value={this.selectedRange}
              onChange={this.onRangeChange}
            />
          </Col>
          <Col span={8}>
            用户名称
            <Input
              name="userName"
              style={inputStyle}
              onChange={this.onInputChange}
              value={userName}
              placeholder="请输入用户名称"
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={8}>
            课程名称
            <Input
              name="courseName"
              style={inputStyle}
              value={courseName}
              onChange={this.onInputChange}
              placeholder="请输入商品名称"
            />
          </Col>
          <Col span={8}>
            订单编号
            <Input
              name="orderNumber"
              style={inputStyle}
              value={orderNumber}
              onChange={this.onInputChange}
              placeholder="请输入订单编号"
            />
          </Col>
          <Col span={2}>
            <Button type="primary" block onClick={this.submit}>
              查询
            </Button>
          </Col>
          <Col span={2}>
            <Button type="default" block onClick={this.clear}>
              清除
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}
AppointmentFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired
}
export default AppointmentFilter
