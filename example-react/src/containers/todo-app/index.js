import { combineReducers } from 'redux'
import todos from './todo-reducer'
import visibilityFilter from './visibility-filter-reducer'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp