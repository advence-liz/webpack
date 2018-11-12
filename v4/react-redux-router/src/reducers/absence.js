import reducerFactory from 'reducers/reducer-factory'

const Namespace = 'ABSENCE'
const initState = { visible: false }
const absence = reducerFactory(initState, Namespace)
export default absence
