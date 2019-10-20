import { combineReducers } from 'redux'
import reducerFactory from './reducer-factory'
import absence from './absence'

const reducers = combineReducers({
  root: reducerFactory({ name: 'root' }, 'ROOT'),
  absence,
  home: reducerFactory({ name: 'root', count: 0 }, 'HOME')
})
export default reducers
