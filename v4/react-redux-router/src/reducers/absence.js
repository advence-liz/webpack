import reducerFactory from './reducerFactory'
const Namespace = 'ABSENCE'
const DefaultState = { visible: false }
const absence = reducerFactory(DefaultState, Namespace)
export default absence
