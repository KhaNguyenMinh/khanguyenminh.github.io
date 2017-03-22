import React, { Component } from 'react';

console.log(process.env.NODE_ENV);
class HomeComponent extends Component {
    render() {
        return (
        	<div>
        		<h2>Home page!</h2>
        	</div>
        );
    }
}
 
export default HomeComponent;