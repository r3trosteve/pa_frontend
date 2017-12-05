import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Details extends Component {
    render() {

        const reservation = this.props.reservation;
        const rate = reservation && reservation.rate;

        return (
            <div className="confirmation__details card-custom card-custom--no-pad">

                <div className="confirmation__details__row confirmation__details__row--top">

                    {/*left*/}

                    <div className="confirmation__details__column">

                        <h1>Booking #{reservation && reservation.id} details</h1>

                        <h2 className="title-normal-bold">
                            {rate && rate.parking_lot && rate.parking_lot.name}
                            {' - '}
                            {rate && rate.search && rate.search.airport && rate.search.airport.name}
                            {' '}
                            ({rate && rate.search && rate.search.airport && rate.search.airport.code})
                            <span>
                                {rate && rate.parking_lot && rate.parking_lot.location && rate.parking_lot.location.address1}
                                {' '}
                                {rate && rate.parking_lot && rate.parking_lot.location && rate.parking_lot.location.address2},
                                {' '}
                                {rate && rate.parking_lot && rate.parking_lot.location && rate.parking_lot.location.city},
                                {' '}
                                {rate && rate.parking_lot && rate.parking_lot.location && rate.parking_lot.location.state},
                                {' '}
                                {rate && rate.parking_lot && rate.parking_lot.location && rate.parking_lot.location.country}
                            </span>
                        </h2>

                        <div className="row confirmation__details__row-inside confirmation__details__row-inside--bottom">

                            {/*image*/}
                            <div className="col-sm-4">
                                <div className="confirmation__details__image">
                                    <img src={rate && rate.parking_lot && rate.parking_lot.logo_url} />
                                </div>
                            </div>

                            {/*info list*/}
                            <div className="col-sm-8">
                                <ul className="info-list">

                                    <li className="info-list__item text-bold">
                                        <i className="fa fa-map" aria-hidden="true" />
                                        <b>Distance from airport:</b>
                                        <span>{rate && rate.distance.toFixed(1)} mile(s)</span>
                                    </li>

                                    <li className="info-list__item text-bold">
                                        <i className="fa fa-car" aria-hidden="true" />
                                        <b>Parking type:</b>
                                        <span>{rate && rate.name}</span>
                                    </li>
                                </ul>
                            </div>

                        </div>



                    </div>


                    {/*right*/}

                    <div className="confirmation__details__column confirmation__details__column--right">

                        {/*item 1*/}

                        <div className="confirmation__details__item">
                            <p className="title-small-mont"><b>Reservation id:</b> {reservation && reservation.id}</p>
                            <p className="title-small-mont"><b>Confirmation number:</b> {reservation && reservation.confirmation_number}</p>
                            <p className="title-small-mont"><b>Status:</b> {reservation && reservation.status}</p>
                        </div>

                        {/*item 2*/}

                        <div className="confirmation__details__item">
                            <p className="title-small-mont">
                                <b>Check-in:</b> {moment(rate && rate.search && rate.search.arrive_at).format('MM/DD/YYYY hh:mm A')}
                            </p>

                            <p className="title-small-mont">
                                <b>Check-out:</b> {moment(rate && rate.search && rate.search.exit_at).format('MM/DD/YYYY hh:mm A')}
                            </p>
                        </div>

                        {/*item 3*/}



                        <div className="confirmation__details__item">
                            <p className="title-small-mont">
                                <b>Days of parking:</b> {rate && rate.search && rate.search.days}
                            </p>

                            <p className="title-small-mont">
                                <b>Total price:</b> ${rate && rate.price && rate.price.total}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

Details.propTypes = {
    reservation: PropTypes.object.isRequired
};