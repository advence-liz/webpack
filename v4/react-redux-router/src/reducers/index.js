import { combineReducers } from 'redux'
import reducerFactory from './reducerFactory'
import absence from './absence'
const reducers = combineReducers({
  root: reducerFactory({ name: 'root' }, 'ROOT'),
  absence
})
export default reducers
