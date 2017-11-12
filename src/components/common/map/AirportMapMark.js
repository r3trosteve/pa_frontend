import React, { Component } from 'react';

export default class AirportMapMark extends Component {
    render() {
        return (
            <div className="map-info" >
                <span className="map-info__plane">
                    <i className="fa fa-plane" aria-hidden="true" />
                    <i className="fa fa-caret-down" aria-hidden="true" />
                </span>
            </div>
        );
    }
}