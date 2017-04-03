import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import store from '../../store'
import {createCoffeeShop} from '../../containers/coffee-shop/actions'

class CoffeeShopComponent extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
		    name: '',
		    city: ''
	    }
	    this.handleName = this.handleName.bind(this)
	    this.handleCity = this.handleCity.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)
  	}

  	componentWillReceiveProps(nextProps) {
        console.log('shop data', nextProps)
    }

  	handleName(event) {
	  	this.setState({
	      	name: event.target.value
	    })
	}

	handleCity(event) {
	  	this.setState({
	      city: event.target.value
	    })
	}

	handleSubmit(event){
	    const shopObj = {
		    name: this.state.name,
		    city: this.state.city
	    }
	    store.dispatch(createCoffeeShop(shopObj))
  	}
	render() {
	    return (
		    <div>
	          	<TextField
	          		name="userName"
	          		value={this.state.name}
	          		onChange={this.handleName}
	          		fullWidth={true}
	          		floatingLabelText="Shop name"
	          		floatingLabelFixed={true}
			    /><br/>
	          	<TextField
	          		name="password"
	          		value={this.state.city}
	          		onChange={this.handleCity}
	          		fullWidth={true}
			      	floatingLabelText="City"
	          		floatingLabelFixed={true}
			    />
			    <FlatButton
			        label="Submit"
			        primary={true}
			        type='submit'
			        onTouchTap={this.handleSubmit}
		      	/>
		      	<p>ID: {this.props.shopData.id}</p>
		      	<p>Name: {this.props.shopData.name}</p>
		      	<p>City: {this.props.shopData.city}</p>
	        </div>
	    )
	}
}

export default CoffeeShopComponent