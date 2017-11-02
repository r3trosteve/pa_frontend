import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

export default class Location extends Component {
	render() {

		const rate = this.props.rate;

		return (
			<div className="ap-details__location card-custom">

				<div className="ap-details__location__title">
					<h3 className="title-normal">Location</h3>
				</div>

				<div className="ap-details__location__address">
					<p className="text-mont-bold">Address</p>
					<p className="text-normal-upper">
						{rate.parking_lot && rate.parking_lot.location.address1}
						{' '}
                        {rate.parking_lot && rate.parking_lot.location.address2}
					</p>
				</div>

				<div className="ap-details__location__map">
					<GoogleMapReact center={{
						lat: rate.parking_lot && parseFloat(rate.parking_lot.location.latitude),
						lng: rate.parking_lot && parseFloat(rate.parking_lot.location.longitude)
					}} zoom={14} />
				</div>
                
			</div>
		);
	}
}

Location.propTypes = {
	rate: PropTypes.object.isRequired
};