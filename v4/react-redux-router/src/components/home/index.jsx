import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  static defaultProps = {
    setValidation (val) {
      // this.setState({ validation: value })
    },
    onRefresh (during) {
      console.log(during)
      // this.setState({ scheduleData: data1 })
    },
    onChange (date) {
      console.log(date)
    }
  }

  render () {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return state
}
function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: (...rest) => {
      console.log(rest)
      dispatch({ type: 'increase' })
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
export default App
