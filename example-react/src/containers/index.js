import { combineReducers } from 'redux'
import todos from '../containers/todo-app/todo-reducer'
import visibilityFilter from '../containers/todo-app/visibility-filter-reducer'
import capaignTableReducer from '../containers/campaigns-table/campaigns-table-reducer'
import loginReducer from '../containers/login/login-reducer'

const App = combineReducers({
  	todos,
  	visibilityFilter,
  	capaignTableReducer,
  	loginReducer
})

export default App