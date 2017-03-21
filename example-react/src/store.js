import { createStore, applyMiddleware } from 'redux'
import todoApp from './containers/'
import CampaignService from './services/campaign-service'

const store = createStore(todoApp, {}, applyMiddleware(CampaignService))

export default store;