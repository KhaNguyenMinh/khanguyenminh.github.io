import React from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import store from '../../store'
import {login} from '../../containers/login/actions'

const customContentStyle = {
  maxWidth: '500px',
}

class LoginModalComponent extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
		    nameName: '',
		    password: '',
		    open: false
	    }
	    this.handleUserName = this.handleUserName.bind(this)
	    this.handlePassword = this.handlePassword.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)
  	}
  	componentWillReceiveProps(nextProps) {
        console.log('user data', nextProps)
        this.setState({open: nextProps.open})
    }

  	handleUserName(event) {
	  	this.setState({
	      	nameName: event.target.value
	    })
	}
	handlePassword(event) {
	  	this.setState({
	      password: event.target.value
	    })
	}
	handleClose = () => {
	    this.setState({open: false})
	}
	handleSubmit(event){
	    const loginData = {
		    email: this.state.nameName,
		    password: this.state.password,
		    rememberMe: false
	    }
	    // this.handleClose()
	    this.setState({nameName: '', password: ''})
	    store.dispatch(login(loginData))
  	}
	render() {
		const actions = [
	      	<FlatButton
		        label="Cancel"
		        primary={true}
		        onTouchTap={this.handleClose}
	      	/>,
	      	<FlatButton
		        label="Submit"
		        primary={true}
		        type='submit'
		        onTouchTap={this.handleSubmit}
	      	/>
	    ]

	    return (
		     <Dialog
		        title="Login Form"
		        actions={actions}
		        modal={true}
		        open={this.state.open}
		        contentStyle={customContentStyle}
		        bodyStyle={{maxHeight: 'auto', overflowX: 'auto'}}>
		        <form>
		          	<TextField
		          		name="userName"
		          		value={this.state.userName}
		          		onChange={this.handleUserName}
		          		fullWidth={true}
		          		floatingLabelText="UserName"
		          		floatingLabelFixed={true}
				    /><br/>
		          	<TextField
		          		name="password"
		          		value={this.state.password}
		          		onChange={this.handlePassword}
		          		fullWidth={true}
				      	type="password"
				      	floatingLabelText="Password"
		          		floatingLabelFixed={true}
				    />
		        </form>
		     </Dialog>
	    )
	}
}

export default LoginModalComponent