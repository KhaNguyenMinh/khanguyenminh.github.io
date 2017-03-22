import { createStore, applyMiddleware } from 'redux'
import App from './containers/'
import CampaignService from './services/campaign-service'

const store = createStore(App, {}, applyMiddleware(CampaignService))

export default store;