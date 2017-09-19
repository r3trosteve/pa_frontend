import React, { Component } from 'react'
import Search from 'components/common/search/Search'
import CityParkingForm from 'components/city_parking/CityParkingForm'

export default class CityParkingPage extends Component {
	render() {
		return (
			<div>
				<Search
					title={'Free Airport Parking'}
					subtitle={'Stay One Night at an Airport Hotel'}
				/>

				<br />

				<CityParkingForm />
			</div>
		)
	}
}