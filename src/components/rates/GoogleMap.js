import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import GoogleMapMark from './GoogleMapMark';

export default class GoogleMap extends Component {
    render() {
        return (
            <div className="map-container">

                <GoogleMapReact
                    center={{
                        lat: parseFloat(this.props.search.airport.location.latitude),
                        lng: parseFloat(this.props.search.airport.location.longitude)
                    }}
                    zoom={7}
                >
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