import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'

const style = {margin: 15, backgroundColor: '#34a853'};
class SileBarComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          open: props.openSlideBar
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        let flag = (nextProps.openSlideBar) ? true : false
        this.setState({ open:  flag})
        return
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
                    <Avatar style={style}>K</Avatar>Kha Nguyen
                    <MenuItem onTouchTap={this.props.chilOnChange} containerElement={<Link to="/campaigns" />}>Chiến Dịch</MenuItem>
                    <MenuItem onTouchTap={this.props.chilOnChange} containerElement={<Link to="/reports" />}>Thống Kê</MenuItem>
                    <MenuItem onTouchTap={this.props.chilOnChange} containerElement={<Link to="/link-accounts" />}>Liên Kết Tài Khoản</MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default SileBarComponent