import React from 'react'
// import { connect } from 'react-redux'
// import actionFactory from 'actions/action-factory'
// import { push } from 'connected-react-router'
import moment from 'moment'
import PropTypes from 'prop-types'
import {
  Calendar, Modal, Row, Col, Radio
} from 'antd'
/* eslint-disable camelcase */
class ChangeSchedule extends React.Component {
  static defaultProps = {
    submit(state) {
      console.dir(state)
    },
    cancel() {},
    getPeriods() {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 500, [
          {
            date: '2018-09-10',
            time_from: '09:00',
            time_to: '10:00'
          },
          {
            date: '2018-09-10',
            time_from: '10:00',
            time_to: '11:00'
          },
          {
            date: '2018-09-10',
            time_from: '11:00',
            time_to: '12:00'
          },
          {
            date: '2018-09-10',
            time_from: '12:00',
            time_to: '13:00'
          }
        ])
      })
    },
    visible: false
  }

  state = {
    selectedDate: moment().format('YYYY-MM-DD'),
    periods: [],
    selectedPeriodIndex: 0 // 默认值设置为0 防止没选还得加验证
  }

  get selectedDate() {
    const { selectedDate } = this.state
    return !selectedDate ? null : moment(selectedDate)
  }

  get periods() {
    const { periods } = this.state
    // const periodStyle = {
    //   padding: '12px 0px',

    //   borderRadius: 2,
    //   marginBottom: 12,
    //   textAlign: 'center'
    // }
    return periods.map((period, index) => {
      const { time_from, time_to } = period
      // const background = '#D9D9D9'
      // return (
      //   <Col span={8} key={`qxx-period-${index}`}>
      //     <div style={{ ...periodStyle, background }} onClick>
      //       {time_from}-{time_to}
      //     </div>
      //   </Col>
      // )
      return (
        <Radio.Button
          style={{ borderRadius: 2, margin: '12px 6px', marginTop: 0 }}
          key={`qxx-period-${index}`}
          value={index}
        >
          {time_from}-{time_to}
        </Radio.Button>
      )
    })
  }

  onSelectedDateChange = async (moment) => {
    const { getPeriods } = this.props
    const { selectedDate: date } = this.state
    const periods = await getPeriods({ date })
    this.setState({
      selectedDate: moment.format('YYYY-MM-DD'),
      periods,
      selectedPeriodIndex: 0
    })
  }

  onSelectedPeriodChange = (event) => {
    const {
      target: { value }
    } = event
    this.setState({ selectedPeriodIndex: value })
  }

  submit = () => {
    const { submit } = this.props
    const { selectedDate, selectedPeriodIndex, periods } = this.state
    const selectedPeriod = periods[selectedPeriodIndex]
    submit({ selectedDate, ...selectedPeriod })
  }

  async componentDidUpdate(prevProps, prevState) {
    const { visible, getPeriods } = this.props
    if (prevProps.visible === false && visible === true) {
      const { selectedDate: date } = this.state
      const periods = await getPeriods({ date })
      this.setState({ periods })
    }
  }

  // async componentDidMount() {}
  render() {
    const { selectedPeriodIndex } = this.state
    const bodyStyle = { padding: 0 }

    return (
      <Modal
        title="选择上课日期"
        visible={this.props.visible}
        onOk={this.submit}
        onCancel={this.props.cancel}
        bodyStyle={bodyStyle}
        okText="确认"
        cancelText="取消"
      >
        <Row style={{ padding: '0 80px' }}>
          <Calendar
            fullscreen={false}
            value={this.selectedDate}
            onChange={this.onSelectedDateChange}
          />
        </Row>
        <Row>
          <div className="ant-modal-header">
            <div className="ant-modal-title">选择时间段</div>
          </div>
        </Row>
        <Row style={{ paddingLeft: 70, margin: '12px 0' }}>
          <Radio.Group
            onChange={this.onSelectedPeriodChange}
            value={selectedPeriodIndex}
            buttonStyle="solid"
          >
            {this.periods}
          </Radio.Group>
        </Row>
      </Modal>
    )
  }
}
ChangeSchedule.propTypes = {
  submit: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
  // getPeriods: PropTypes.func.getPeriods
}
export default ChangeSchedule
