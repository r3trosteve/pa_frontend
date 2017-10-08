import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class AirportParkingDetailsLocation extends Component {

    render() {
        return (

            <div className="ap-details__location card-custom">

                <div className="ap-details__location__title">
                    <h3 className="title-normal">
                        Location
                    </h3>
                </div>

                <div className="ap-details__location__address">

                    <p className="text-mont-bold">
                        Address
                    </p>
                    <p className="text-normal-upper">
                        3889 HERSCHEL RD, COLLEGE PARK
                    </p>

                </div>

                <div className="ap-details__location__map">
                    <GoogleMapReact
                        center={{lat: 33.602485, lng: -84.473903}}
                        zoom={12}
                    >
                    </GoogleMapReact>

                </div>

            </div>
        );
    }

}