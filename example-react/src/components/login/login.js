import React from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

class LoginModalComponent extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
		    nameName: '',
		    password: ''
	    }
	    this.handleUserName = this.handleUserName.bind(this)
	    this.handlePassword = this.handlePassword.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)
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
	    const newChore = {
		    nameName: this.state.nameName,
		    password: this.state.password,
	    }
	    // this.props.actions.addEvent(newChore)
	    this.handleClose()
	    this.setState({nameName: '', password: ''});
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
	    <div>
		     <Dialog
		        title="Login Form"
		        actions={actions}
		        modal={true}
		        open={this.props.openLoginModal}>
		        <form>
		          	<TextField hintText="Hint Text" value={this.state.userName} onChange={this.handleUserName} multiLine={true}/>
		        </form>
		     </Dialog>
	     </div>
	    )
	}
}

export default LoginModalComponent