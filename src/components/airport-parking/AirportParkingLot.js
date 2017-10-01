import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AirportParkingLot extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.parkingLot.name}</h2>
				<p>{this.props.parkingLot.address}</p>

				<p>{this.props.parkingLot.distance} mile(s)</p>
				<p>{this.props.parkingLot.type}</p>
				<p>{this.props.parkingLot.shuttleFrequency}</p>

				<p>{this.props.parkingLot.description}</p>

				<p>{this.props.parkingLot.price}</p>

				<p>{this.props.parkingLot.available}</p>

				{this.props.parkingLot.options.map(option => {
					return <p>{option}</p>;
				})}
			</div>
		);
	}
}

AirportParkingLot.propTypes = {
	parkingLot: PropTypes.object.isRequired
};