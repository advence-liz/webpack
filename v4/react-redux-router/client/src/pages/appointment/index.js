import React from 'react'
// import { connect } from 'react-redux'
// import actionFactory from 'actions/action-factory'
// import { push } from 'connected-react-router'
import RadioGroup from 'radio-group'
import { Button } from 'antd'
import AppointmentFilter from './appointment-filter'
import OrderFilter from './order-filter'
import ChangeSchedule from './change-schedule'
import CoursePopup from './course-popup'

class Appointment extends React.Component {
  static defaultProps = {}

  state = {
    visible: false,
    isShowCoursePopup: false
  }

  toggle = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  toggle1 = () => {
    const { isShowCoursePopup } = this.state
    this.setState({ isShowCoursePopup: !isShowCoursePopup })
  }

  render() {
    return (
      <div>
        <h1>qxx</h1>
        <h2>AppointmentFilter</h2>
        <AppointmentFilter />
        <h2>OrderFilter</h2>
        <OrderFilter />
        <h2>ChangeSchedule</h2>
        <Button onClick={this.toggle}>Show ChangeSchedule</Button>
        <ChangeSchedule cancel={this.toggle} visible={this.state.visible} />
        <h2>RadioGroup</h2>
        <RadioGroup />
        <h2>CoursePopup</h2>
        <Button onClick={this.toggle1}>Show CoursePopup</Button>
        <CoursePopup cancel={this.toggle1} visible={this.state.isShowCoursePopup} />
      </div>
    )
  }
}
export default Appointment
