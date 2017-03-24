import { createStore, applyMiddleware } from 'redux'
import App from './containers/'
import CampaignService from './services/campaign-service'
import LoginService from './services/auth-service'

const store = createStore(App, {}, applyMiddleware(CampaignService, LoginService))

export default store;