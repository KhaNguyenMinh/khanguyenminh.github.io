import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './App.css';
import _ from 'lodash';
// import logo from './logo.svg'
// import TopNavComponent from './components/top-nav/top-nav'
import TopNavContainer from './containers/top-nav/top-nav-container'
import SystemNotifyContainer from './containers/system-notify/system-notify-container'
// import BottomNavComponent from './components/bottom-nav/bottom-nav';
import SileBarComponent from './components/slide-bar/slide-bar'
import SystemNotifyComponent from './components/system-notify/system-notify'

injectTapEventPlugin()
class App extends Component {
    render() {
        return (
            <div>
                <div className="top-nav"><TopNavContainer/></div>
    	        <SileBarComponent/>
                <div className="main-content">
                    {this.props.children}
                </div>
                <SystemNotifyContainer />
            </div>
        );
    }
}

export default App
