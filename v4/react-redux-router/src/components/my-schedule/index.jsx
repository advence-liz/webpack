import React from 'react'
import PropTypes from 'prop-types'
import { Calendar, Row, Col } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import converData from './converData'
moment.locale('zh-cn')
// let OldProps = {}
/**
 * 我的课表
 * @prop {Object|Array}   scheduleData 已经选课的日期
 * @prop {function} onChange 选中日期变化事件
 * @prop {function} onRefresh 选中区间发生变化默认是当前年月，当发生变化时重新获取数据
 */
export default class Schedule extends React.Component {
  static defaultProps = {
    onRefresh: function (v) {
      console.log(v)
    }
  }
  static getDerivedStateFromProps (nextProps, prevState) {
    let { scheduleData } = nextProps

    return { scheduleData: converData(scheduleData) }
  }
  state = { scheduleData: {} }
  currenDuring = moment().format('YYYY-MM')
  dateCellRender = date => {
    let key = date.format('YYYY-MM-DD')
    let text = ''
    try {
      text =
        this.state.scheduleData[key] !== undefined
          ? `${this.state.scheduleData[key]}节`
          : ''
    } catch (error) {}

    return text
  }
  onChange = date => {
    let during = date.format('YYYY-MM')
    if (this.currenDuring !== during) {
      this.props.onRefresh(during)
      this.currenDuring = during
      return
    }
    this.props.onChange(date.format('YYYY-MM-DD'))
  }

  render () {
    return (
      <div className={this.props.className || ''}>
        <Row style={{ background: '#F8F8F8' }}>
          <h3 style={{ margin: '15px 30px' }}>我的课程表</h3>
        </Row>

        <Row type="flex" justify="center">
          <Col span={12}>
            <div
              style={{
                minWidth: 300
              }}
            >
              <Calendar
                fullscreen={false}
                locale={locale}
                onChange={this.onChange}
                dateCellRender={this.dateCellRender}
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
Schedule.propTypes = {
  scheduleData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  onRefresh: PropTypes.func,
  className: PropTypes.string
}
