import React from 'react'
// import CSSModules from 'react-css-modules'
import './styles/index.scss'
// @CSSModules(styles, { allowMultiple: true })
class Bar extends React.Component {
  render () {
    return (
      <div>
        <h1 className="h1" styleName="title title--green">
          Hello, world!
        </h1>
      </div>
    )
  }
}
// export default CSSModules(Bar, styles, { allowMultiple: true })
export default Bar
