import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { browserHistory, Router, Route,} from 'react-router'

import CampaignTableComponent from './components/campaigns-table/campaigns-table';
import HomeComponent from './components/home/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// const history = createBrowserHistory();
ReactDOM.render((
	<MuiThemeProvider>
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <Route path="home" component={HomeComponent} />
	      <Route path="campaigns" component={CampaignTableComponent}/>
	    </Route>
	  </Router>
  </MuiThemeProvider>
), document.getElementById('root'))