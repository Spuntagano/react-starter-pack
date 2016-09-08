import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/pages/home';

export default function(userLoggedIn){
	return (
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
		</Route>
	);
}