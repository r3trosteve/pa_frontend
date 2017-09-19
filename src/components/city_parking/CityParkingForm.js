import React, { Component } from 'react'

export default class CityParkingForm extends Component {
	render() {
		return (
			<form>

				<input type="text" placeholder="Search Address, Place or Event Example: Chicago, New York NBA arena or even Coldplay" />

				<input type="submit" value="Search airport hotel + Parking" />

			</form>
		)
	}
}