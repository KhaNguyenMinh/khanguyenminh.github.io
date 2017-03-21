import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './store'
import { browserHistory, Router, Route} from 'react-router'

// import CampaignTableComponent from './components/campaigns-table/campaigns-table'
import CamListContainer from './containers/campaigns-table/campaigns-table-container'
import HomeComponent from './components/home/home'
import TodoApp from './components/todo-app/app'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './containers/'
import CampaignService from './services/campaign-service'

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    // primary1Color: '#0288D1',
    // accent1Color: "#FFC107",
  }
})

/*
Applying our middleware to the store
*/
// let storeCampaign = createStore(capaignTableReducer,{}, applyMiddleware(CampaignService))
// let store = createStore(todoApp, {}, applyMiddleware(CampaignService))

ReactDOM.render((
	<Provider store={store}>
		<MuiThemeProvider>
		  <Router history={browserHistory}>
		    <Route path="/" component={App}>
		      <Route path="todo" component={TodoApp} />
		      <Route path="campaigns" component={CamListContainer}/>
		    </Route>
		  </Router>
	  </MuiThemeProvider>
  </Provider>
), document.getElementById('root'))
