import React, { Component } from 'react'
import AddChoreForm from '../test-form/test-form'
import TextField from 'material-ui/TextField'

console.log(process.env.NODE_ENV);
class HomeComponent extends Component {
    render() {
        return (
        	<div>
        		<AddChoreForm />
        	</div>
        );
    }
}
 
export default HomeComponent