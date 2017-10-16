import React, { Component } from 'react';
import ReactStars from 'react-stars';

export default class Info extends Component {

    render() {
        return (

            <div className="ap-details__info card-custom">

                {/*title*/}

                <div className="ap-details__info__title">
                    <h3 className="title-normal-bold">
                        Hilton Atlanta Airport
                    </h3>
                </div>

                <div className="ap-details__info__rating">
                    <ReactStars
                        className="ap-details__info__rating-stars"
                        count={5}
                        value={4.5}
                        size={24}
                        color1={'#c1c1c1'}
                        color2={'#fdb509'}
                        edit={false}
                        half={true}
                    />
                    <p> |<span>(41</span> reviews) | 3889 Herschel Rd, College Park</p>

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