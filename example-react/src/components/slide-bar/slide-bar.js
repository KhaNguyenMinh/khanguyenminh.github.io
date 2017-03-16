import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class SileBarComponent extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  close = () => {
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
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default SileBarComponent;