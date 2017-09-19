import React, { Component } from 'react'
import Search from 'components/common/search/Search'
import HotelParkingForm from 'components/hotel_parking/HotelParkingForm'

export default class HotelParkingPage extends Component {
	render() {
		return (
			<div>
				<Search
					title={'Parking Where and When You Need It.'}
					subtitle={'Find the best space at the lowest rate.'}
				/>

				<br />

				<HotelParkingForm />
			</div>
		)
	}
}