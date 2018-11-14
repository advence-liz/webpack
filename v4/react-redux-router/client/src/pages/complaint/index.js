import {
  Upload, Icon, Modal, Select, Form, Input
} from 'antd'
import React from 'react'
import { error } from 'util'

// const Option = Select.Option;
export default class ComplaintPage extends React.Component {
  static defaultProps = {
    onOk(...rest) {
      console.log(rest)
    },
    onCancel() {},
    upload(file) {
      return new Promise(resolve => setTimeout(resolve, 1000)).then(() => '/api/teacherComplaint/uploadPic')
    },
    getCategory() {
      return new Promise(resolve => setTimeout(resolve, 500, [
        { id: 1, name: '言语骚扰' },
        { id: 2, name: '人身攻击' },
        { id: 3, name: '诈骗' },
        { id: 4, name: '要求不当' }
      ]))
    }
  }

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
    category: [],
    categoryId: -1,
    desc: '' // 控制 ok button 是否disabled 和验证状态是否通过
  }

  get category() {
    const { category } = this.state

    return category.map((item, index) => {
      const { id, name } = item
      return (
        <Select.Option key={`${id}-${index}`} value={id}>
          {name}
        </Select.Option>
      )
    })
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    })
  }

  handleChange = ({ fileList }) => (file, fileList, event) => {
    console.log(event)
    this.setState({ previewVisible: false })
  }


  onSelectChange = (categoryId) => {
    this.setState({ categoryId })
  }

  submit = () => {
    const { onOk } = this.props
    const { categoryId, fileList, desc } = this.state
    onOk({ categoryId, fileList, desc })
  }

  async componentDidMount() {
    const { getCategory } = this.props
    const category = await getCategory()
    const [{ id = -1 }] = category
    this.setState({ category, categoryId: id })
  }

  render() {
    const {
      previewVisible, previewImage, fileList, categoryId, desc
    } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    )
    const formItemLayout = {
      labelCol: {
        sm: { span: 5 }
      },
      wrapperCol: {
        sm: { span: 15 }
      }
    }
    return (
      <div>
        <Modal
          title="申请投诉"
          okText="确认"
          cancelText="取消"
          visible
          width={600}
          onOk={this.submit}
          onCancel={this.props.onCancel}
          okButtonProps={{ disabled: !desc }}
        >
          <Form>
            <Form.Item
              {...formItemLayout}
              label="投诉类型"
              validateStatus="success"
              // help="Should be combination of numbers & alphabets"
            >
              <Select
                placeholder="请选择类目"
                onChange={this.onSelectChange}
                style={{ width: 200 }}
                value={categoryId}
              >
                {this.category}
              </Select>
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="投诉描述"
              value={desc}
              validateStatus={desc ? 'success' : 'error'}
              help={!desc && '请填写投诉说明'}
            >
              <Input.TextArea
                rows={4}
                maxLength={200}
                onChange={({ target: { value } }) => {
                  this.setState({ desc: value })
                }}
                placeholder="描述具体情况，有助于投诉快速处理"
              />
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="上传图片"
              validateStatus="success"
              // help="Should be combination of numbers & alphabets"
            >
              <div style={{ color: '#bfbfbf' }}>提供相关凭证（如聊天截图，上课时间截图等）</div>
              <Upload
                action={this.props.upload}
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 6 ? null : uploadButton}
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}
