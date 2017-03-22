import { combineReducers } from 'redux'
import todos from '../containers/todo-app/todo-reducer'
import visibilityFilter from '../containers/todo-app/visibility-filter-reducer'
import capaignTableReducer from '../containers/campaigns-table/campaigns-table-reducer'

const App = combineReducers({
  	todos,
  	visibilityFilter,
  	capaignTableReducer
})

export default App