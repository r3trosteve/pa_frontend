import React, { Component } from 'react'

export default class HotelParkingForm extends Component {
	render() {
		return (
			<form>

				<input type="text" placeholder="Type airport name or code" />

				<input type="date" placeholder="Sleep on" />

				<span>Fly on</span>

				<input type="date" placeholder="Park until" />

				<input type="number" placeholder="Number of guests" />

				<input type="submit" value="Search airport hotel + Parking" />

			</form>
		)
	}
}