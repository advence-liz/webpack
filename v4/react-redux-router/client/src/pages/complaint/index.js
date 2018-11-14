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
      return new Promise(resolve => setTimeout(resolve, 1000))
      // return Get('/api/upload').then(({ url }) => {
      //   file.url = url //eslint-disable-line
      // })
    },
    beforeUpload(file) {
      console.log('beforeUpload', file.name)
    },
    onStart: (file) => {
      console.log('onStart', file.name)
      // this.refs.inner.abort(file);
    },
    onSuccess(file) {
      console.log('onSuccess', file)
    },
    onProgress(step, file) {
      console.log('onProgress', Math.round(step.percent), file.name)
    },
    onError(err) {
      console.log('onError', err)
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
