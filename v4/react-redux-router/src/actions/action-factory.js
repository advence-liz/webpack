export default function createSetStore (Namespace) {
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
   *     setStore (state, type) {
   *       dispatch(setStore(state, type))
   *     }
   *   }
   * }
   */
  const setStore = (state, type) => {
    return type
      ? {
        type: `${type}$${Namespace}`,
        state
      }
      : {
        type: `Set_STORE$${Namespace}`,
        state
      }
  }

  return setStore
}
