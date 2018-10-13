import React from 'react'
// import { connect } from 'react-redux'
// import actionFactory from 'actions/action-factory'
// import { push } from 'connected-react-router'
import moment from 'moment'
import PropTypes from 'prop-types'
import {
  Row, Col, Input, DatePicker, Button, Select
} from 'antd'

/* eslint-disable camelcase */
class OrderFilter extends React.Component {
  static defaultProps = {
    onFilterChange(state) {
      console.dir(state)
    },
    getCategory() {
      return new Promise(resolve => setTimeout(resolve, 500, [{ id: 0, name: '数学' }, { id: 1, name: '语文' }]))
    }
  }

  state = {
    selectedRange: [],
    userName: '',
    courseName: '',
    category: [],
    categoryId: -1
  }

  get selectedRange() {
    const { selectedRange } = this.state
    return selectedRange.map(date => (date ? moment(date) : null))
  }

  get category() {
    const { category } = this.state

    return category.map((item, index) => {
      const { id, name } = item
      return (
        <Select.Option key={`${id}-${index}`} value={id}>
          {name}
        </Select.Option>
      )
    })
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

  onSelectChange = (categoryId) => {
    this.setState({ categoryId })
  }

  submit = () => {
    const { onFilterChange } = this.props
    const {
      userName: student_name,
      courseName: course_name,
      categoryId: category_id,
      selectedRange: [time_from, time_to]
    } = this.state

    onFilterChange({
      student_name,
      course_name,
      category_id,
      time_from,
      time_to
    })
  }

  async componentDidMount() {
    const { getCategory } = this.props
    const category = await getCategory()

    this.setState({ category })
  }

  render() {
    const { userName, courseName } = this.state
    const inputStyle = {
      width: 220,
      marginLeft: 12
    }
    return (
      <div>
        <Row gutter={20} style={{ marginBottom: 12 }}>
          <Col span={8}>
            所属类目
            <Select placeholder="请选择类目" onChange={this.onSelectChange} style={inputStyle}>
              {this.category}
            </Select>
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
              onChange={this.onInputChange}
              value={courseName}
              placeholder="请输入课程名称"
            />
          </Col>
          <Col span={8}>
            下单时间
            <DatePicker.RangePicker
              style={inputStyle}
              value={this.selectedRange}
              onChange={this.onRangeChange}
            />
          </Col>

          <Col span={4}>
            <Button type="primary" onClick={this.submit}>
              查询
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}
OrderFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired
}
export default OrderFilter
