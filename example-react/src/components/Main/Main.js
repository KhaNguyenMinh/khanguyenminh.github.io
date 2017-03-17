import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';

import BottomNavComponent from '../bottom-nav/bottom-nav';
import TopNavComponent from '../top-nav/top-nav';
import MainContentComponent from '../main-content/main-content';
//-------------
	const history = createBrowserHistory();

class MainComponent extends Component {

    render() {
        return (
        	<div>
        		<ul>
        			<li>
        				<a href="/main/home">Home</a>
        			</li>
        			<li>
        				<a href="/main/campaigns">About</a>
        			</li>
        		</ul>
        		{this.props.children}
        	</div>
        );
    }
}
 
export default MainComponent;