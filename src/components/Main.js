// This component is responsible for switching
// components depending on routing

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from 'components/home/HomePage'
import AirportParkingPage from 'components/airport_parking/AirportParkingPage'
import HotelParkingPage from 'components/hotel_parking/HotelParkingPage'
import CityParkingPage from 'components/city_parking/CityParkingPage'

export default class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/airport_parking.html" component={AirportParkingPage} />
				<Route exact path="/park_sleep_hotel_parking" component={HotelParkingPage} />
				<Route exact path="/city_parking" component={CityParkingPage} />
			</Switch>
		)
	}
}