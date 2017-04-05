import { combineReducers } from 'redux'
import capaignTableReducer from '../containers/campaigns-table/campaigns-table-reducer'
import loginReducer from '../containers/login/login-reducer'
import topNavReducer from '../containers/top-nav/top-nav-reducer'
import coffeeShopReducer from '../containers/coffee-shop/coffee-shop-reducer'

// Combibe all reducer for App
const App = combineReducers({
  	capaignTableReducer,
  	loginReducer,
  	topNavReducer,
  	coffeeShopReducer
})

export default App