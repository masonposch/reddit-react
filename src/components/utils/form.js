var React = require("react");

var Form = React.createClass({

	//Generic state is set on load
	getInitialState: function(){
		return { term: "" };
	},

	//Responds to user input
	handleChange: function(event){
		this.setState({ value: event.target.value });
	},


	//Sends the set search term to the parent
	handleSubmit:function(){
		alert('A new post was submitted');
		event.preventDefault();

		this.props.setTerm(this.state.term);
		this.setState({ term: "" });
	},

	render: function(){
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h2 className="panel-title">Create a new post</h2>
				</div>
				<div className="panel-body">
					<form onSubmit={this.handleSubmit}>

						<input type="text" class="form-control" id="term" placeholder="Title" value={this.state.term} onChange={this.handleChange} required/><br />
						<input type="text" class="form-control" id="term" placeholder="Subreddit" value={this.state.term} onChange={this.handleChange} required/><br />
						<input type="text" class="form-control" id="term" placeholder="Your post here" value={this.state.term} onChange={this.handleChange} required/><br />
						<button className="btn btn-primary">Add new post</button>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = Form;