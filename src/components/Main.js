import React, { Component } from 'react';

export default class Main extends Component {
	render(){

		return(
			<div className="container">
				
				<div className="jumbotron">
					<h1>Reddit Rebuild</h1>	
				</div>

				<div className="row">
					{this.props.children}
				</div>

			</div>
		)

	}
}