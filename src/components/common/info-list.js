import React, { Component } from 'react';

export default class InfoList extends Component {

    render() {
        return (
            <ul className="info-list">
                <li className="info-list__item text-bold">
                    <i className="fa fa-map" aria-hidden="true"></i>
                    Distance from airport:
                    <span>{this.props.distance} mile(s)</span>
                </li>
                <li className="info-list__item text-bold">
                    <i className="fa fa-car" aria-hidden="true"></i>
                    Parking type:
                    <span>{this.props.type}</span>
                </li>
                <li className="info-list__item text-bold">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    Shuttle frequency:
                    <span>{this.props.shuttleFrequency}</span>
                </li>
            </ul>
        );
    }

}