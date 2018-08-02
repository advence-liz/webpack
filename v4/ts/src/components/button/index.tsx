import React from 'react'

export interface IButtonProps {
  name: string
  height?: number
  width?: number
}
/**
 * Button
 * @prop {Number} width desc
 * @prop {Number} height desc
 * @example
 * import Button, { ButtonProps } from 'q-react'
 *    let props:ButtonProps ={ name:'ts-button' }
 *    <Button {...props} />
 */
export default class Button extends React.Component<IButtonProps, any> {
  static defaultProps = {
    height: 100,
    width: 100
  }
  state = { name: 'Button' }
  render() {
    const { width, height, name } = this.props

    return (
      <div className="q-btn q-btn--primary">
        {name} {height} {width} JSX hot reload!!!
      </div>
    )
  }
}
