import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './App.css';
import _ from 'lodash';
// import logo from './logo.svg'
import TopNavComponent from './components/top-nav/top-nav'
// import BottomNavComponent from './components/bottom-nav/bottom-nav';
import SileBarComponent from './components/slide-bar/slide-bar'

injectTapEventPlugin()
class App extends Component {
    render() {
        return (
            <div>
                <div className="top-nav"><TopNavComponent/></div>
    	        <SileBarComponent/>
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App
