import React, { Component } from 'react';


import BottomNavComponent from '../bottom-nav/bottom-nav';
import TopNavComponent from '../top-nav/top-nav';

//--------------


// Logged.muiName = 'IconMenu';



class MainComponent extends Component {
    render() {
        return (
            <div>
            <TopNavComponent />
            <BottomNavComponent />
            </div>
            );
    }
}
 
export default MainComponent;