// This component is responsible for switching
// components depending on routing

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'components/home/HomePage';

export default class Main extends Component {
	render() {
		return (
			<div className="container">
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</div>
		);
	}
}