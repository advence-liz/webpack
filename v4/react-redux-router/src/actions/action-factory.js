export default function createSetStore (Namespace, dispatch) {
  /**
   *
   * @param {object} state 要更新到store 的state
   * @param {string?} type 触发的action type
   * @example
   * class Page extends React.Component {
   *   static defaultProps = {}
   *   onClick = () => {
   *     let { setStore } = this.props
   *     setStore({ visible: true })
   *   }
   *   onChange = () => {
   *     let { setStore } = this.props
   *     setStore({ visible: false }, 'CHANGE')
   *   }
   * }
   * function mapDispatchToProps (dispatch) {
   *   return {
   *       setStore: actionFactory('ABSENCE', dispatch)
   *   }
   * }
   */
  return (state, type) => {
    let action = type
      ? {
        type: `${type}$${Namespace}`,
        state
      }
      : {
        type: `Set_STORE$${Namespace}`,
        state
      }
    dispatch(action)
  }
}
