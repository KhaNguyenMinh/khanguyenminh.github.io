import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import logo from './logo.svg';
import './App.css';

import TopNavComponent from './components/top-nav/top-nav';
import BottomNavComponent from './components/bottom-nav/bottom-nav';
import SileBarComponent from './components/slide-bar/slide-bar'

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
        <div>
	        <TopNavComponent/>
	        <SileBarComponent/>
	        {this.props.children}
	        <BottomNavComponent/>
        </div>
    );
  }
}

export default App;
