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
		const lot = this.props.lot;

		return (
			<div className="ap-details__location card-custom" id="apd-location">

				<div className="ap-details__location__title">
					<h3 className="title-normal">Location</h3>
				</div>

				<div className="ap-details__location__address">
					<p className="text-mont-bold">Address</p>
					<p className="text-normal-upper">
                        {lot && lot.location && lot.location.address1}
                        {' '}
                        {lot && lot.location && lot.location.address2},
                        {' '}
                        {lot && lot.location && lot.location.city},
                        {' '}
                        {lot && lot.location && lot.location.state},
                        {' '}
                        {lot && lot.location && lot.location.country}
					</p>
				</div>

				<div className="ap-details__location__map">
					<div className="map">
						{
							!this.state.mapLoading ?
							(
								<GoogleMapReact center={{
                                    lat: lot && lot.location && parseFloat(lot.location.latitude),
                                    lng: lot && lot.location && parseFloat(lot.location.longitude)
                                }} zoom={13}>

									<ParkingLotMapMark
										lat={lot && lot.location && parseFloat(lot.location.latitude)}
										lng={lot && lot.location && parseFloat(lot.location.longitude)}
									/>

									{
										rate ?
											<AirportMapMark
												lat={rate && rate.search && rate.search.airport && rate.search.airport.location && parseFloat(rate.search.airport.location.latitude)}
												lng={rate && rate.search && rate.search.airport && rate.search.airport.location && parseFloat(rate.search.airport.location.longitude)}
											/> :
											null
									}

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
	rate: PropTypes.object,
	lot: PropTypes.object
};