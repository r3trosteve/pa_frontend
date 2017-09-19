import React, { Component } from 'react'
import Search from 'components/common/search/Search'
import AirportParkingForm from 'components/airport_parking/AirportParkingForm'

export default class AirportParkingPage extends Component {
	render() {
		return (
			<div>
				<Search
					title={'When you have to leave your car at the airport, your only turn is Right Here!'}
					subtitle={'Save a bundle. Get turn by turn directions on your phone.'}
				/>

				<br />

				<AirportParkingForm />

			</div>
		)
	}
}