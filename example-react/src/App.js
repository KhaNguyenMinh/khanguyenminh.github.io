import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import logo from './logo.svg';
import './App.css';

import MainComponent from './components/Main/Main';

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <MainComponent/>
        </MuiThemeProvider>
    );
  }
}

export default App;
