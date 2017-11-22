import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <div className="ap-details__navigation">

                <ul className="ap-details__navigation__card nav card-custom card-custom--no-pad">

                    <li className="ap-details__navigation__item">
                        <a href="#apd-overview">Overview</a>
                    </li>
                    <li className="ap-details__navigation__item">
                        <a href="#apd-location">Location</a>
                    </li>
                    <li className="ap-details__navigation__item">
                        <a href="#apd-details">Details</a>
                    </li>
                    <li className="ap-details__navigation__item">
                        <a href="#apd-reviews">Reviews</a>
                    </li>
                    <li className="ap-details__navigation__item visible-xs">
                        <a href="#summary">Summary</a>
                    </li>

                </ul>
            </div>
        );
    }
}