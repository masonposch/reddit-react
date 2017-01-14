import React, { Component } from 'react';

import Form from './utils/form';

import ListItem from './subs/ListItem';
import Listing from './subs/Listing';

import helpers from './utils/helpers';

var Main = React.createClass({

	//Set the inital state of Main
	getInitialState: function(){
		return { searchTerm: "", title: [], subreddit: [], content: []};
	},

	//When the page renders, get all current entries
	conponentDidMount: function() {

		helpers.getInformation().then(function(response){
			console.log(response);
			if(response !== this.state.listing){
				console.log("Listing", response.data);
				this.setState({ listing: response.data });
			}
		}.bind(this));
	},

	//Whenever a search is entered, retrieve each entry
	componentDidUpdate: function(){
		helpers.postInformation(this.state.searchTerm).then(function(){
			console.log("Updated");

			helpers.getInformation().then(function(response){
				console.log("Current Entries: ", response.data);

				console.log("Listing", response.data);

				this.setState({ listing: response.data });
			}).bind(this)
		}).bind(this)
	},



	//Create a function that allows children to pass information to their parent
	setTerm: function(term){
		this.setState({ searchTerm: term });
	},

	render(){	

		return(
			<div className="container">
				
				<div className="jumbotron">
					<h1 className="text-center">Reddit Rebuild</h1>	
				</div>

				
				<div>
					<Form setTerm={this.setTerm}/>
				</div>


				<div className="row">
					<Listing setTerm={this.props.children}/>
				</div>

			</div>
		)

	}
});

module.exports = Main;