import React from 'react';

export default class Form extends React.Component {

	constructor(props){
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({value: event.target.title});
		this.setState({value: event.target.subreddit});
		this.setState({value: event.target.textbox});
	}

	handleSubmit(){
		alert('A new post was submitted');
		event.preventDefault();
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					
					<h2>Create a new post</h2>

					<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/><br />
					<input type="text" name="subreddit" placeholder="Subreddit" value={this.state.subreddit} onChange={this.handleChange}/><br />
					<input type="textbox" name="textbox" placeholder="Your Content Here" value={this.state.textbox} onChange={this.handleChange}/><br />
					<button className="btn btn-primary">Add new post</button>
				</form>
			</div>
		)
	}
}