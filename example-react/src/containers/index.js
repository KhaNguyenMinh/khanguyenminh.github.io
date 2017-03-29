import { combineReducers } from 'redux'
import todos from '../containers/todo-app/todo-reducer'
import visibilityFilter from '../containers/todo-app/visibility-filter-reducer'
import capaignTableReducer from '../containers/campaigns-table/campaigns-table-reducer'
import loginReducer from '../containers/login/login-reducer'
import topNavReducer from '../containers/top-nav/top-nav-reducer'

const App = combineReducers({
  	todos,
  	visibilityFilter,
  	capaignTableReducer,
  	loginReducer,
  	topNavReducer
})

export default App