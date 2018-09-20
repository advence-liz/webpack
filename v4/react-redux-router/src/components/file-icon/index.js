import React from 'react'
import PropTypes from 'prop-types'

// 引入样式
import './style.scss'

export default class FileIcon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iconMap: {
        directory: 'folder',
        folder: 'folder',
        xls: 'xls',
        xlsx: 'xls',
        ppt: 'ppt',
        pptx: 'ppt',
        doc: 'doc',
        docx: 'doc',
        txt: 'txt',
        pdf: 'pdf',
        jpg: 'image',
        gif: 'image',
        jpeg: 'image',
        png: 'image',
        bmp: 'image',
        mp3: 'video',
        mp4: 'video'
      }
    }
  }
  render() {
    const { type } = this.props
    const { iconMap } = this.state
    const iconClass = `file-icon icon--${iconMap[type] || 'default'}`

    return (
      <span className="file-icon-box">
        <i className={iconClass} />
      </span>
    )
  }
}

FileIcon.propTypes = {
  type: PropTypes.string
}
