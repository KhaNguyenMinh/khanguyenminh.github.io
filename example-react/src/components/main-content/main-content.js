import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';
import CampaignsTableComponent from '../campaigns-table/campaigns-table';
import HomeComponent from '../home/home';

const history = createBrowserHistory();

class MainContentComponent extends Component {

    render() {
        return (
            <Router history={history}>
                <Route path="/">
                    <Route component={CampaignsTableComponent} path="/campaigns" />
                </Route>
            </Router>
        )
    }
}
 
export default MainContentComponent