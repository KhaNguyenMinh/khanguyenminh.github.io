import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'
import store from '../../store'
import {hideNotify} from '../../containers/system-notify/actions'

class SystemNotifyComponent extends Component {
	constructor(props) {
        super(props)
        this.state = {
          open: false,
          mgs: '',
          duration: 4000
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open) {
        	this.setState(nextProps)
        } else {
        	this.setState({open: nextProps.open})
        }
    }

    handleRequestClose = () => {
        store.dispatch(hideNotify(false))
    }

    render() {
        return (
        	<Snackbar
                open={this.state.open}
                message={this.state.mgs}
                onRequestClose={this.handleRequestClose}
                bodyStyle={{minWidth: 'auto'}}
            />
        );
    }
}
 
export default SystemNotifyComponent