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

		const lot = this.props.lot;

		return (
			<div className="ap-details__location card-custom" id="apd-location">

				<div className="ap-details__location__title">
					<h3 className="title-normal">Location</h3>
				</div>

				<div className="ap-details__location__address">
					<p className="text-mont-bold">Address</p>
					<p className="text-normal-upper">
						{lot.location && lot.location.address1}
						{' '}
                        {lot.location && lot.location.address2},
                        {' '}
                        {lot.location && lot.location.city},
                        {' '}
                        {lot.location && lot.location.state},
                        {' '}
                        {lot.location && lot.location.country}
					</p>
				</div>

				<div className="ap-details__location__map">
					<div className="map">
						{
							!this.state.mapLoading ?
							(
								<GoogleMapReact center={{
                                    lat: lot.location && parseFloat(lot.location.latitude),
                                    lng: lot.location && parseFloat(lot.location.longitude)
                                }} zoom={11}>

									<ParkingLotMapMark
										lat={lot.location && parseFloat(lot.location.latitude)}
										lng={lot.location && parseFloat(lot.location.longitude)}
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
	lot: PropTypes.object.isRequired
};