import React from 'react'

export default class Text extends React.Component {
  state = { name: 'Button' }
  render () {
    const { width, height, name } = this.props

    return (
      <div className="q-btn q-btn--primary">
        {name} {height} {width} JSX hot reload!!!
      </div>
    )
  }
}
