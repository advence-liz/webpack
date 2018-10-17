import React from 'react'

import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'

/* eslint-disable camelcase */

const DefaultPageSize = 2
class CoursePopup extends React.Component {
  static defaultProps = {
    getDataSource(options) {
      return new Promise(resolve => setTimeout(resolve, 200, {
        total: 3,
        list: [
          {
            id: 1,
            status: 2,
            start_at: '2018-10-13 17:03:44',
            course_name: '高中语文'
          },
          {
            id: 2,
            status: 1,
            start_at: '2018-10-13 17:03:44',
            course_name: 'math'
          },
          {
            id: 3,
            status: 1,
            start_at: '2018-10-13 17:03:44',
            course_name: 'orz'
          }
        ]
      }))
    },
    options: {
      order_id: 5,
      status: 0,
      user_id: 5
    },
    visible: false
  }

  state = {
    visible: true,
    loading: false,
    list: [],
    pagination: {
      hideOnSinglePage: true,
      current: 1,
      pageSize: DefaultPageSize,
      total: 0
    }
  }

  get columns() {
    return [
      {
        title: '课程',
        dataIndex: 'course_name',
        width: 220,
        render(text, item) {
          const { start_at } = item
          return (
            <div>
              {text}
              <br />
              {start_at}
            </div>
          )
        }
      },
      {
        title: '课程状态',
        dataIndex: 'status',
        width: 220
      }
    ]
  }

  handleTableChange = async (pagination) => {
    const { current: page, pageSize: page_size } = pagination

    this.setState({ loading: true })
    const { list, total } = await this.props.getDataSource({ page, page_size })
    this.setState({ list, pagination: { ...pagination, total }, loading: false })
  }

  async componentDidUpdate(prevProps) {
    const { pagination } = this.state
    if (this.props.visible && !prevProps.visible) {
      this.setState({ loading: true })
      const { list, total } = await this.props.getDataSource({
        page: 1,
        page_size: DefaultPageSize
      })
      this.setState({ list, pagination: { ...pagination, total }, loading: false })
    }
  }

  componentDidMount() {}

  render() {
    const { pagination, list, loading } = this.state
    const { visible, cancel } = this.props

    return (
      <Modal title="课程列表" footer={null} visible={visible} onCancel={cancel}>
        <Table
          // style={{ whiteSpace: 'normal' }}
          columns={this.columns}
          rowKey={record => record.id}
          dataSource={list}
          pagination={pagination}
          loading={loading}
          // bordered
          onChange={this.handleTableChange}
        />
      </Modal>
    )
  }
}
CoursePopup.propTypes = {
  getDataSource: PropTypes.func.isRequired
}
export default CoursePopup
