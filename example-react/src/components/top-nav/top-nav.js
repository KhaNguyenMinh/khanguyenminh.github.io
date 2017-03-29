import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SileBarComponent from '../slide-bar/slide-bar'

import LoginContainer from '../../containers/login/login-container'
import {openLoginModal} from '../../containers/login/actions'
import {logout} from '../../containers/top-nav/actions'
import store from '../../store'

class Login extends Component {
    render() {
        return (
            <RaisedButton onTouchTap={this.props.loginOnclick} label="Login" secondary={true} />
        )
    }
}

class Logged extends Component {
    render() {
        return (
            <IconMenu
                iconButtonElement={
                  <IconButton ><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem onTouchTap={this.props.signOutOnclick} primaryText="Sign out" />
            </IconMenu>
        )
    }
}

class TopNavComponent extends Component {

    constructor() {
        super()
        this.state = {
            logged: false,
            openSlideBar : false,
            openLoginModal: false
        }
    }

    handleToggle = () => {
        this.setState({ openSlideBar: true })
    }

    chilOnChange = (data) => {
        console.log('data from chil', data)
        this.setState({openSlideBar: false})
    }

    loginOnclick = () => {
        store.dispatch(openLoginModal())
    }

    signOutOnclick = () => {
        store.dispatch(logout())
    }

    render() {
        return (
            <div>
                <AppBar
                    style={{position: 'fixed', top: '0'}}
                    title="This is my site"
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                    iconElementRight={this.props.logged ? <Logged signOutOnclick={this.signOutOnclick}/> : <Login loginOnclick={this.loginOnclick}/>}
                />
                <SileBarComponent openSlideBar={this.state.openSlideBar} chilOnChange={this.chilOnChange}/>
                <LoginContainer />
            </div>
        )
    }
}

export default TopNavComponent