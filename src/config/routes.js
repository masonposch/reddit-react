import React from ('react');

import {IndexRoute, Route, Router, hashHistory} from 'react-router';

import Main from '../components/Main';

import Listing from '../components/sub/Listing';

module.exports = {
	<Router history = {hashHistory}>
	
		<Route path = '/' component={Main}>

			<Route path = '/:subId' component = {Listing}/>

			<IndexRoute compnent = {Listing}/>

		</Route>

	</Router>
}