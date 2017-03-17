import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import { Link } from 'react-router';

class SileBarComponent extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  close = () => {
    console.log('close');
    this.setState((prevState, props) => {
      return { open: false };
    });
  }

  componentWillReceiveProps(nextProps, nextState) {
      this.setState((prevState, props) => {
        return { open:  nextProps.open};
      });
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <IconButton iconClassName="muidocs-icon-custom-github" onTouchTap={this.close}>Close</IconButton>
          <MenuItem containerElement={<Link to="/home" />}>Home</MenuItem>
          <MenuItem containerElement={<Link to="/campaigns" />}>Campaigns</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default SileBarComponent;