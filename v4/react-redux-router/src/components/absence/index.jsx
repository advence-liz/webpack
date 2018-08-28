import React from 'react'
import { Modal, Row, Col } from 'antd'
import ReasonGroup from './reason-group'
import ParentValidation from './parent-validation'
import PropTypes from 'prop-types'
export default class Absence extends React.Component {
  static defaultProps = {
    options: {
      time_from: '2018-09-10 10:00:00',
      course: {
        title: '朗文试听课-我的宠物'
      }
    },
    visible: true,
    onCancel () {
      console.log('cancle')
    },
    onOK (...rest) {
      console.log(rest)
    }
  }
  state = { isPass: false, reason: '', isInit: true }
  onReasonChange = reason => {
    this.setState({ reason })
  }
  onValidationChange = isPass => {
    this.setState({ isPass, isInit: false })
  }
  onOKClick = () => {
    let { isPass, isInit } = this.state
    let { options, onOK } = this.props
    isInit && this.setState({ isInit: false })
    if (!isPass) {
      return
    }
    onOK(this.state, options)
  }
  render () {
    const { options } = this.props
    const { time_from: absenceTime, course } = options
    const { title: asbenceCourse } = course || {}
    return (
      <div>
        <Modal
          title="我要请假"
          visible={this.props.visible}
          onOk={this.onOKClick}
          onCancel={this.props.onCancel}
          okText="确认"
          cancelText="取消"
        >
          <Row>
            <Col span={6}>请假时间</Col>
            <Col span={10}>{absenceTime}</Col>
          </Row>
          <Row>
            <Col span={6}>请假课程</Col>
            <Col span={10}>{asbenceCourse}</Col>
          </Row>
          <Row>
            <Col span={6}>请假原因</Col>
            <Col span={10}>
              <ReasonGroup onReasonChange={this.onReasonChange} />
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>家长验证</Col>
            <Col span={12}>
              <ParentValidation
                isInit={this.state.isInit}
                isPass={this.state.isPass}
                onValidationChange={this.onValidationChange}
              />
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}

Absence.propTypes = {
  options: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  onOK: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}
