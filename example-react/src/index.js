import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route} from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import store from './store'
import App from './App'
import './index.css'
import CamListContainer from './containers/campaigns-table/campaigns-table-container'
import HomeComponent from './components/home/home'
import CoffeeShopContainer from './containers/coffee-shop/coffee-shop-container'

const muiTheme = getMuiTheme({
  	fontFamily: 'Roboto, sans-serif',
  	palette: {
    primary1Color: '#34a853',
    accent1Color: "#ff7e00",
  }
})

ReactDOM.render((
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
		  	<Router history={browserHistory}>
		    	<Route path="/" component={App}>
			    	<Route path="home" component={HomeComponent} />
			    	<Route path="coffee-shop" component={CoffeeShopContainer} />
			    	<Route path="campaigns" component={CamListContainer}/>
		    	</Route>
		  	</Router>
	  	</MuiThemeProvider>
  	</Provider>
), document.getElementById('root'))
