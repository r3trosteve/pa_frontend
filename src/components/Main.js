// This component is responsible for switching
// components depending on routing

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'components/home/HomePage';
import AirportParkingPage from 'components/airport-parking/AirportParkingPage';
import AirportParkingDetailsPage from 'components/airport-parking-details/AirportParkingDetailsPage';
import BookingPage from 'components/airport-parking-checkout/AirportParkingCheckoutPage';

export default class Main extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/airport_parking_results" component={AirportParkingPage} />
					<Route exact path="/airport_parking_details" component={AirportParkingDetailsPage} />
					<Route exact path="/airport_parking_booking" component={BookingPage} />
				</Switch>
			</div>
		);
	}
}