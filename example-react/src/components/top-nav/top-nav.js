import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import IconButton from 'material-ui/IconButton';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';

import SileBarComponent from '../slide-bar/slide-bar'

// class Login extends Component {
//   static muiName = 'FlatButton';

//   render() {
//     return (
//       <FlatButton {...this.props} label="Login" />
//     );
//   }
// }

// const Logged = (props) => (
//     <IconMenu
//         {...props}
//         iconButtonElement = {
//           <IconButton><MoreVertIcon /></IconButton>
//         }
//         targetOrigin={{horizontal: 'right', vertical: 'top'}}
//         anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
//     <MenuItem primaryText="Refresh" />
//     <MenuItem primaryText="Help" />
//     <MenuItem primaryText="Sign out" />
//   </IconMenu>
// );

class TopNavComponent extends Component {

    open = false;

    handleToggle = () => {
        this.open = true;
        this.setState({ open: this.open });
    };

    render() {
        return (
          <div>
            <AppBar
                title="This is my site"
                onLeftIconButtonTouchTap={this.handleToggle}
            />
            <SileBarComponent open={this.open}/>
          </div>
        );
    }
}

export default TopNavComponent;