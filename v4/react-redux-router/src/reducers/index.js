import { combineReducers } from 'redux'
import reducerFactory from './reducer-factory'
import absence from './absence'
const reducers = combineReducers({
  root: reducerFactory({ name: 'root' }, 'ROOT'),
  absence
})
export default reducers
