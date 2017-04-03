import { createStore, applyMiddleware } from 'redux'
import App from './containers/'
import CampaignService from './services/campaign-service'
import LoginService from './services/auth-service'
import CoffeeShopService from './services/coffee-shop-service'

const store = createStore(App, {}, applyMiddleware(CampaignService, LoginService, CoffeeShopService))

export default store;