import {
  Button, Icon, Modal, Tooltip, Form, Input
} from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
// const Option = Select.Option;
export default class Complaint extends React.Component {
  static defaultProps = {
    // visible:true,
    onOk() {},
    onCancel() {}
  }

  state = {
    isEditAble: false,
    phone: 18504411849
  }

  get isPhone() {
    const { phone } = this.state
    return phone.toString().length === 11
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handleInputChange = (event) => {
    let {
      target: { value: phone }
    } = event
    phone = phone.replace(/(^s|\D)/g, '')
    this.setState({ phone })
  }

  submit = () => {}

  async componentDidMount() {
    // const { getCategory } = this.props
    // const category = await getCategory()
    // const [{ id = -1 }] = category
    // this.setState({ category, categoryId: id })
  }

  render() {
    const { isEditAble, phone } = this.state
    const { onCancel, visible } = this.props

    return (
      <div>
        <Modal
          title="联系学生"
          okText="确认"
          cancelText="取消"
          visible={visible}
          width={600}
          onOk={this.submit}
          onCancel={onCancel}
          okButtonProps={{ disabled: !this.isPhone }}
        >
          <Form.Item
            validateStatus={this.isPhone ? 'success' : 'error'}
            help={!this.isPhone && '请输入正确的手机号码！'}
          >
            <h3>进行外呼的手机号是?</h3>
            <Input
              placeholder="请输入手机号码"
              value={phone}
              onChange={this.handleInputChange}
              onBlur={() => {
                this.setState({ isEditAble: false })
              }}
              disabled={!isEditAble}
              style={{ width: 220 }}
              maxLength={11}
            />
            {!isEditAble ? (
              <Tooltip title="编辑号码">
                <Icon
                  style={{
                    fontSize: 28,
                    margin: 5,
                    position: 'relative',
                    top: 5,
                    left: 5,
                    color: '#00C697'
                  }}
                  onClick={() => {
                    this.setState({ isEditAble: !this.state.isEditAble })
                  }}
                  type="edit"
                />
              </Tooltip>
            ) : (
              <Tooltip title="确认号码">
                <Icon
                  style={{
                    fontSize: 28,
                    margin: 5,
                    position: 'relative',
                    top: 5,
                    left: 5,
                    color: '#00C697'
                  }}
                  onClick={() => {
                    this.setState({ isEditAble: !this.state.isEditAble })
                  }}
                  type="check-circle"
                />
              </Tooltip>
            )}
          </Form.Item>
        </Modal>
      </div>
    )
  }
}
Complaint.propTypes = {
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
}
