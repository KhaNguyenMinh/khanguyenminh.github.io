import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Link } from 'react-router';

class SileBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.openSlideBar
    };
  }

  // testEvent = () => {
  //   let self = this;

  //   console.log('hihi');
  //   self.setState({open: false, flag: true});
  //   console.log('state:', self.state);
  // }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('change', nextProps);
    let flag = (nextProps.openSlideBar) ? true : false;
    this.setState({ open:  flag});
    return;
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
          <MenuItem onTouchTap={this.props.chilOnChange} containerElement={<Link to="/home" />}>Home</MenuItem>
          <MenuItem onTouchTap={this.props.chilOnChange} containerElement={<Link to="/campaigns" />}>Campaigns</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default SileBarComponent;