import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
import { Link } from 'react-router'

const style = {margin: 15, backgroundColor: '#34a853'};
class SileBarComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          open: props.openSlideBar,
          open1: false
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        let flag = (nextProps.openSlideBar) ? true : false
        this.setState({ open:  flag})
        return
    }

    handleTouchTap = (event) => {
      // This prevents ghost click.
      event.preventDefault();

      this.setState({
        open1: true,
        anchorEl: event.currentTarget,
      });
    };

    handleRequestClose = () => {
      this.setState({
        open1: false,
      });
    };

    render() {
        return (
            <div>
                <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
                    <Avatar style={style}>K</Avatar>Kha Nguyen
                    <IconButton style={{position: 'absolute', marginTop: 12}} onTouchTap={this.handleTouchTap}><FontIcon className="material-icons" >keyboard_arrow_down</FontIcon></IconButton>
                    <Popover
                      open={this.state.open1}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                      onRequestClose={this.handleRequestClose}
                    >
                      <Menu>
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help &amp; feedback" />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Sign out" />
                      </Menu>
                    </Popover>
                    <MenuItem onTouchTap={this.props.chilOnChange} containerElement={<Link to="/campaigns" />}>Chiến Dịch</MenuItem>
                    <MenuItem onTouchTap={this.props.chilOnChange} containerElement={<Link to="/reports" />}>Thống Kê</MenuItem>
                    <MenuItem onTouchTap={this.props.chilOnChange} containerElement={<Link to="/link-accounts" />}>Liên Kết Tài Khoản</MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default SileBarComponent