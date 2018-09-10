import React from 'react'
import { Radio, Input } from 'antd'
import PropTypes from 'prop-types'
const { TextArea } = Input
const RadioGroup = Radio.Group

export default class ReasonGroup extends React.Component {
  constructor (props) {
    super(props)
    // 初始化的时候触发一次onReasonChange 不然用户不操作 ReasonGroup无法获取到reason
    this.props.onReasonChange(this.reason)
  }
  state = {
    otherValue: '',
    radioValue: 0
  }
  onRadioChange = event => {
    let {
      target: { value }
    } = event

    this.setState({ radioValue: value }, () => {
      this.props.onReasonChange(this.reason)
    })
  }
  onChange = event => {
    let {
      target: { value }
    } = event

    this.setState({ otherValue: value.trim() }, () => {
      this.props.onReasonChange(this.reason)
    })
  }
  get reason () {
    // let { otherValue = '其它', radioValue } = this.state 因为state 中有otherValue属性所以，虽然为空但是也不会使用默认值
    let { otherValue = '其它', radioValue } = this.state
    otherValue = otherValue || '其它'
    let reasons = [
      '出去游玩',
      '家里网络出现状况',
      '来不及上课了',
      '孩子生病了',
      otherValue
    ]
    return reasons[radioValue]
  }
  render () {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    }

    const { otherValue, radioValue } = this.state
    return (
      <div>
        <RadioGroup onChange={this.onRadioChange} value={radioValue}>
          <Radio style={radioStyle} value={0}>
            出去游玩
          </Radio>
          <Radio style={radioStyle} value={1}>
            家里网络出现状况
          </Radio>
          <Radio style={radioStyle} value={2}>
            来不及上课了
          </Radio>
          <Radio style={radioStyle} value={3}>
            孩子生病了
          </Radio>
          <Radio style={radioStyle} value={4}>
            其他原因
          </Radio>
        </RadioGroup>
        {radioValue === 4 && (
          <TextArea rows={4} value={otherValue} onChange={this.onChange} />
        )}
      </div>
    )
  }
}
ReasonGroup.propTypes = {
  onReasonChange: PropTypes.func.isRequired
}
