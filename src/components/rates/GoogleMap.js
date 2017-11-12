import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import GoogleMapMark from './GoogleMapMark';

const AirportMapMark = () => {
    return (
        <div className="rates__map-info" >
            <span className="rates__map-info__plane">
                <i className="fa fa-plane" aria-hidden="true" />
                <i className="fa fa-caret-down" aria-hidden="true" />
            </span>
        </div>
    );
};

export default class GoogleMap extends Component {
    render() {

        const airportLat = parseFloat(this.props.search.airport.location.latitude);
        const airportLng = parseFloat(this.props.search.airport.location.longitude);

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