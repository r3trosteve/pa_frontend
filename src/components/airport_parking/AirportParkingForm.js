import React, { Component } from 'react'

export default class AirportParkingForm extends Component {
	render() {
		return (
			<form>

				<input type="text" placeholder="Type airport name or code" />

				<input type="date" placeholder="Start date" />

				<input type="time" placeholder="12:00 am" />

				<input type="date" placeholder="End date" />

				<input type="time" placeholder="12:00 am" />

				<h4>
					Choose dates and reservation times based on your departure and return to the
					parking facility - not your actual flight times.
				</h4>

				<input type="submit" value="Search airport parking" />

			</form>
		)
	}
}