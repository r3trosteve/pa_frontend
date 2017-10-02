// This component is responsible for switching
// components depending on routing

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'components/home/HomePage';
import AirportParkingPage from 'components/airport-parking/AirportParkingPage';

export default class Main extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/airport-parking-results" component={AirportParkingPage} />
				</Switch>
			</div>
		);
	}
}