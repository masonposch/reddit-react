import React, { Component } from 'react';

import Form from './pageElements/form';

export default class Main extends Component {
	render(){

		return(
			<div className="container">
				
				<div className="jumbotron">
					<h1 className="text-center">Reddit Rebuild</h1>	
				</div>

				
				
					<Form />
				


				<div className="row">
					{this.props.children}
				</div>

			</div>
		)

	}
}