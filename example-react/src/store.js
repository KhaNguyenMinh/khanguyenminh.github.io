import { createStore, applyMiddleware } from 'redux'
import App from './containers/'

// Import all services
import CampaignService from './services/campaign-service'
import LoginService from './services/auth-service'
import CoffeeShopService from './services/coffee-shop-service'

// Create app store
// Push all service into redux middleware
const store = createStore(App, {}, applyMiddleware(CampaignService, LoginService, CoffeeShopService))

export default store;