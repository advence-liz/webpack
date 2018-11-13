import { Upload, Icon, Modal } from 'antd'
import React from 'react'
import { Get } from '../../assets/Fetcher'

export default class ComplaintPage extends React.Component {
  static defaultProps = {
    onOk(dataRef, state) {
      console.log('ok')
      console.log(dataRef, state)
    },
    onCancel() {},
    upload(file) {
      return Get('/api/upload').then(({ url }) => {
        file.url = url
      })
    }
  }

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: []
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    )
    return (
      <div className="clearfix">
      dfdfdfddd
        <Upload
          action={this.props.upload}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 6 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}
