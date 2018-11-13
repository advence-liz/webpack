import React from 'react'
// import { connect } from 'react-redux'
// import actionFactory from 'actions/action-factory'
// import { push } from 'connected-react-router'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Radio } from 'antd'

/* eslint-disable camelcase */
class RadioGroup extends React.Component {
  static defaultProps = {
    // getCategory() {
    //   return new Promise(resolve => setTimeout(resolve, 500, [{ id: 0, name: '数学' }, { id: 1, name: '语文' }]))
    // },
    onChange(state) {
      console.log(state)
    },
    prefix: 'qxx',
    radios: [
      {
        name: '全部',
        value: 0
      },
      {
        name: '待付款',
        value: 1
      },
      {
        name: '已付款',
        value: 2
      },
      {
        name: '已完成',
        value: 3
      },
      {
        name: '已取消',
        value: 4
      }
    ]
  }

  state = {
    value: 0
  }

  get radios() {
    const { radios, prefix } = this.props

    return radios.map((item, index) => {
      const { name, value } = item

      return (
        <Radio.Button
          style={{ borderRadius: 2, margin: '12px 6px', marginTop: 0 }}
          key={`${prefix}-radio-group-${index}`}
          value={value}
        >
          {name}
        </Radio.Button>
      )
    })
  }

  onChange = (event) => {
    const {
      target: { value }
    } = event

    this.setState({ value })
    this.props.onChange({ value })
  }

  componentDidMount() {}

  render() {
    const { value } = this.state
    return (
      <Radio.Group onChange={this.onChange} value={value} buttonStyle="solid">
        {this.radios}
      </Radio.Group>
    )
  }
}
RadioGroup.propTypes = {
  onChange: PropTypes.func.isRequired
}
export default RadioGroup
