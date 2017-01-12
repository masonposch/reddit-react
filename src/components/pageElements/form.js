import React from 'react';

export default class Form extends React.Component {
	render(){
		return(
			<div>
				<panel>
					<panel-header>
						<h2>Create a new post</h2>
					</panel-header>
					<panel-body>
						<input type="text" placeholder="Title"/><br />
						<input type="text" placeholder="Subreddit"/><br />
						<input type="textbox" placeholder="Your Content Here"/><br />
						<button className="btn btn-primary">Add new post</button>
					</panel-body>
				</panel>
			</div>
		)
	}
}