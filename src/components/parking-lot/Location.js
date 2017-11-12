import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import AirportMapMark from '../common/map/AirportMapMark';
import ParkingLotMapMark from '../common/map/ParkingLotMapMark';

export default class Location extends Component {

    constructor() {
        super();

        this.state = {
            mapLoading: true
        };
    }

	componentDidMount() {
        // jq to load google map properly
        setTimeout(() => {
            this.setState({ mapLoading: false });
        }, 500);
        // end
	}

	render() {

		const rate = this.props.rate;

		return (
			<div className="ap-details__location card-custom" id="apd-location">

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
					<div className="map">
						{
							!this.state.mapLoading ?
							(
								<GoogleMapReact center={{
                                    lat: rate.parking_lot && parseFloat(rate.parking_lot.location.latitude),
                                    lng: rate.parking_lot && parseFloat(rate.parking_lot.location.longitude)
                                }} zoom={11}>

									<ParkingLotMapMark
										lat={rate.parking_lot && parseFloat(rate.parking_lot.location.latitude)}
										lng={rate.parking_lot && parseFloat(rate.parking_lot.location.longitude)}
									/>

									<AirportMapMark
										lat={rate.search && parseFloat(rate.search.airport.location.latitude)}
										lng={rate.search && parseFloat(rate.search.airport.location.longitude)}
									/>

								</GoogleMapReact>
							) : null
						}
					</div>
				</div>
                
			</div>
		);
	}
}

Location.propTypes = {
	rate: PropTypes.object.isRequired
};