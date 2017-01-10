import React, { Component } from 'react';

import axios from 'axios';

import ListItem from './ListItem';



export default class Listing extends Component {

	constructor() {
		super();

		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		axios.get('/posts/by-sub/' + this.props.params.subId).then(posts => {
			this.setState({ posts: post.data });
		})
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.params.subId !== nextProps.props.params.subId){
			axios.get('/posts/by-sub/' + nextProps.props.params.subId).then(posts => {
				this.setState({ posts: post.data });
			})
		}
	}

	render(){
		return (
			<ul>
				{this.state.posts.map(post => <ListItem key={post._id} post={post} />)}
			</ul>
		)
	}
}