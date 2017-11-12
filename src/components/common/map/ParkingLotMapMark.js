import React, { Component } from 'react';

export default class ParkingLotMapMark extends Component {
    render() {
        return (
            <div className="map-info" >
                <span className="map-info__car">
                    <i className="ion-model-s" />
                    <i className="fa fa-caret-down" aria-hidden="true" />
                </span>
            </div>
        );
    }
}