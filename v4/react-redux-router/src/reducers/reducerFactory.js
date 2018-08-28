function reducerFactory (defaultState, namespace) {
  const reducer = (preState = defaultState, action) => {
    let { type, state } = action
    /**
     * 对action的处理分为三种情况
     * 1 `Set_STORE$${namespace}` 默认更新store actin
     * 2 `xxxx$${namespace}` 自定义名称action
     * 3 无匹配条件返回当前state
     */
    if (type === `Set_STORE$${namespace}`) {
      return { ...preState, ...state }
    } else if (type.includes(namespace)) {
      return { ...preState, ...state }
    } else {
      return preState
    }
  }

  return reducer
}

export default reducerFactory
