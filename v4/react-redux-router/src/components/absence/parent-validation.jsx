import React from 'react'
import { Input, Row, Col } from 'antd'
import PropTypes from 'prop-types'
export default class ParentValidation extends React.Component {
  // constructor (props) {
  //   super(props)

  //   // this.props.onValidationChange(false)
  // }

  numbers = [this.getRandomNum(0, 100), this.getRandomNum(0, 100)]
  handleChange = event => {
    let {
      target: { value }
    } = event
    let isPassValidation = parseInt(value.trim(), 10) === this.equation.result
    this.props.onValidationChange(isPassValidation)
    this.setState({ isPass: isPassValidation })
    // this.init = true
  }
  get equation () {
    let [a, b] = this.numbers
    let result = a + b
    let equation = `${a}+${b}=`
    return { result, equation }
  }
  getRandomNum (Min, Max) {
    let Range = Max - Min
    let Rand = Math.random()
    return Min + Math.round(Rand * Range)
  }
  render () {
    const { result, equation } = this.equation
    const { isInit, isPass } = this.props
    const equationStyle = { padding: 5, background: `#eaeaea`, width: 66 }
    return (
      <Row>
        <Col span={8} style={equationStyle}>
          {`${equation}`}
        </Col>
        <Col span={8} style={{ width: 90 }}>
          <Input
            style={{ borderRadius: 0 }}
            // placeholder={'请输入验证码'}
            onChange={this.handleChange}
          />
        </Col>
        <Col style={{ padding: 5, background: `#fff`, color: 'red' }} span={8}>
          {!isInit && !isPass ? '验证码错误' : ''}
        </Col>
      </Row>
    )
  }
}
ParentValidation.propTypes = {
  onValidationChange: PropTypes.func.isRequired
}
