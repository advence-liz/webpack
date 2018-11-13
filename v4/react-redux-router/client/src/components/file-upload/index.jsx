import React from 'react'
import { Checkbox, Row, Col, Modal, Radio, Button, Upload } from 'antd'

export default class QUpload extends React.Component {
  static defaultProps = {
    onOk (options) {
      console.log('ok')
      console.log(options)
    },
    onCancel () {
      console.log('cancel')
    },
    visible: true
  }
  state = {
    fileList: [],
    isDefault: 0,
    isMotionalPPT: 0
  }
  onCheckChange = event => {
    const {
      target: { name }
    } = event
    this.state[name] = this.state[name] ? 0 : 1 // eslint-disable-line
    this.forceUpdate()
  }
  handleChange = info => {
    // let { file, fileList } = info
    let { file } = info

    this.setState({ fileList: [file] })
  }

  beforeUpload = file => {
    // this.setState(({ fileList }) => ({
    //   fileList: [...fileList, file]
    // }))
    return false
  }
  handleUpload = () => {
    const { fileList, isDefault, isMotionalPPT } = this.state
    const { onOk } = this.props
    // const formData = new FormData()
    // fileList.forEach(file => {
    //   formData.append('files[]', file)
    // })

    onOk({ fileList, isDefault, isMotionalPPT })
  }

  render () {
    const { onOk, onCancel, visible } = this.props
    const { isDefault, isMotionalPPT } = this.state
    const rowStyle = {
      margin: '15px 75px'
    }
    return (
      <Modal
        title="上传课件"
        width={485}
        footer={null}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
        <Row style={rowStyle}>
          <Col span={6}>操作类型</Col>
          <Col span={6}>
            <Radio checked>本地上传</Radio>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col span={6}>选择文件</Col>
          <Col span={18}>
            <Upload
              fileList={this.state.fileList}
              beforeUpload={this.beforeUpload}
              onChange={this.handleChange}
            >
              <Button>选择文件</Button>
            </Upload>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col span={6}>文件属性</Col>
          <Col span={7}>
            <Checkbox
              checked={!!isDefault}
              name="isDefault"
              onChange={this.onCheckChange}
            >
              动态ppt
            </Checkbox>
          </Col>
          <Col span={10}>
            <Checkbox
              checked={!!isMotionalPPT}
              name="isMotionalPPT"
              onChange={this.onCheckChange}
            >
              缺省显示文件
            </Checkbox>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col span={3} />
          <Col span={8}>
            <Button
              type="primary"
              disabled={this.state.fileList.length === 0}
              onClick={this.handleUpload}
            >
              上传
            </Button>
          </Col>
          <Col span={6}>
            <Button onClick={onCancel}>取消</Button>
          </Col>
        </Row>
      </Modal>
    )
  }
}
