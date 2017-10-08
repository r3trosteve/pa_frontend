import React, { Component } from 'react';

export default class AirportParkingDetailsInfo extends Component {

    render() {
        return (

            <div className="ap-details__info card-custom">

                {/*title*/}

                <div className="ap-details__info__title">
                    <h3 className="title-normal-bold">
                        Hilton Atlanta Airport
                    </h3>
                </div>

                {/*info list*/}

                <ul className="info-list">
                    <li className="info-list__item text-bold">
                        <i className="fa fa-map" aria-hidden="true"></i>
                        Distance from airport:
                        <span>3 mile(s)</span>
                    </li>
                    <li className="info-list__item text-bold">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        Parking type:
                        <span>Self-park</span>
                    </li>
                    <li className="info-list__item text-bold">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        Shuttle frequency:
                        <span>5 to 10 Minutes</span>
                    </li>
                </ul>

            </div>
        );
    }

}