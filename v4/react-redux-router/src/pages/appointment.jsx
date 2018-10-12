import React from 'react'
// import { connect } from 'react-redux'
// import actionFactory from 'actions/action-factory'
// import { push } from 'connected-react-router'
import AppointmentFilter from 'components/appointment-filter'
import { Button } from 'antd'

class Appointment extends React.Component {
  static defaultProps = {}

  render () {
    return (
      <div>
        <h1>Appointment</h1>
        <AppointmentFilter />
      </div>
    )
  }
}
export default Appointment
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
