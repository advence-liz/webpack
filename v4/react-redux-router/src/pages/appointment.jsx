import React from 'react'
// import { connect } from 'react-redux'
// import actionFactory from 'actions/action-factory'
// import { push } from 'connected-react-router'
import AppointmentFilter from 'components/appointment-filter'
import OrderFilter from 'components/order-filter'
import ChangeSchedule from 'components/change-schedule'
import { Button } from 'antd'

class Appointment extends React.Component {
  static defaultProps = {}

  state = {
    visible: false
  }

  toggle = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  render() {
    return (
      <div>
        <h1>qxx 3.0</h1>
        <h2>AppointmentFilter</h2>
        <AppointmentFilter />
        <h2>OrderFilter</h2>
        <OrderFilter />
        <h2>ChangeSchedule</h2>
        <Button onClick={this.toggle}>Show ChangeSchedule</Button>
        <ChangeSchedule cancel={this.toggle} visible={this.state.visible} />
      </div>
    )
  }
}
export default Appointment
