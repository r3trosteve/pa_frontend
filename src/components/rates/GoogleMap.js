import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import GoogleMapMark from './GoogleMapMark';
import AirportMapMark from '../common/map/AirportMapMark';

export default class GoogleMap extends Component {
    render() {

        const search = this.props.search;

        const airportLat = search && search.airport && search.airport.location && parseFloat(search.airport.location.latitude);
        const airportLng = search && search.airport && search.airport.location && parseFloat(search.airport.location.longitude);

        return (
            <div className="map-container">

                <GoogleMapReact
                    center={{
                        lat: airportLat,
                        lng: airportLng
                    }}
                    zoom={13}
                >

                    <AirportMapMark
                        lat={airportLat}
                        lng={airportLng}
                    />

                    {this.props.rates.map(rate => {
                        return (
                            <GoogleMapMark
                                key={rate.id}
                                lat={rate.parking_lot.location.latitude}
                                lng={rate.parking_lot.location.longitude}
                                rate={rate}
                            />
                        );
                    })}
                </GoogleMapReact>

            </div>
        );
    }
}

GoogleMap.propTypes = {
    search: PropTypes.object.isRequired,
    rates: PropTypes.array.isRequired
};