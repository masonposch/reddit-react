import React from 'react';

export default class Form extends React.Component {

	handleLogin(){
		console.log('Clicked');
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleLogin}>
					
					<h2>Create a new post</h2>

					<input type="text" placeholder="Title"/><br />
					<input type="text" placeholder="Subreddit"/><br />
					<input type="textbox" placeholder="Your Content Here"/><br />
					<button className="btn btn-primary">Add new post</button>
				</form>
			</div>
		)
	}
}