import React from 'react'
import { connect } from 'react-redux'
import Absence from 'absence'
import { push } from 'connected-react-router'
import { Button } from 'antd'
import actionFactory from 'actions/action-factory'

class Page extends React.Component {
  static defaultProps = {}
  onClick = () => {
    let { setStore } = this.props
    // this.props.history.goBack()
    setStore({ visible: true })
  }
  onPopupCancel = () => {
    let { setStore, dispatch } = this.props
    // dispatch(push('/'))
    setStore({ visible: false }, 'cancel')
  }
  render () {
    let { visible } = this.props
    return (
      <div>
        <Button onClick={this.onClick}>show</Button>
        <Absence visible={visible} onCancel={this.onPopupCancel} />
      </div>
    )
  }
}
function mapStateToProps (state) {
  let { absence } = state
  return absence
}
function mapDispatchToProps (dispatch) {
  return {
    setStore: actionFactory('ABSENCE', dispatch)
    // dispatch (action) {
    //   dispatch(action)
    // }
  }
}

const PageVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
export default PageVisible
