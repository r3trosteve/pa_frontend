import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const GoogleMapMark = () => <div><i className="ion-ios-location"></i></div>;

export default class AirportParkingLot extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.parkingLot.name}</h2>
				<p>{this.props.parkingLot.address}</p>

				<img src={this.props.parkingLot.image} alt={this.props.parkingLot.name} />

				<div style={{width: '600px', height: '400px'}}>
					<GoogleMapReact
						defaultCenter={{lat: 33.640411, lng: -84.419853}}
						defaultZoom={13}
					>
						<GoogleMapMark
							lat={33.640411}
							lng={-84.419853}
						/>
					</GoogleMapReact>
				</div>

				<p>{this.props.parkingLot.distance} mile(s)</p>
				<p>{this.props.parkingLot.type}</p>
				<p>{this.props.parkingLot.shuttleFrequency}</p>

				<p>{this.props.parkingLot.description}</p>

				<p>${this.props.parkingLot.price}</p>

				<p>{this.props.parkingLot.available}</p>

				{this.props.parkingLot.options.map((option, index) => {
					return <p key={index}>{option}</p>;
				})}
			</div>
		);
	}
}

AirportParkingLot.propTypes = {
	parkingLot: PropTypes.object.isRequired
};