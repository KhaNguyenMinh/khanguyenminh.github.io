import { combineReducers } from 'redux'
import capaignTableReducer from '../containers/campaigns-table/campaigns-table-reducer'
import loginReducer from '../containers/login/login-reducer'
import topNavReducer from '../containers/top-nav/top-nav-reducer'

const App = combineReducers({
  	capaignTableReducer,
  	loginReducer,
  	topNavReducer
})

export default App