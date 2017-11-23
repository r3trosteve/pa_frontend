import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Details extends Component {
    render() {

        const reservation = this.props.reservation;
        const rate = reservation && reservation.rate;

        return (
            <div>

                <div className="ap-checkout__payment-details__success">
                    <h4 className="title-normal">Your reservation was successfully paid!</h4>
                    <p className="title-small-mont">Reservation id: <b>{reservation && reservation.id}</b></p>
                    {/*<p className="title-small-mont">PNF confirm number: <b></b></p>*/}
                    <p className="title-small-mont">Status: <b>{reservation && reservation.status}</b></p>
                </div>

                <div>
                    <p>
                        Please check your email for your reservation receipt which you need to present to the parking lot upon arrival.
                    </p>
                </div>

                <div>
                    <h4 className="title-normal">Parking details:</h4>

                    <p className="title-small-mont">
                        Parking Lot:
                        {' '}
                        <b>{rate && rate.parking_lot && rate.parking_lot.name}</b>
                        {' '}
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
                    </p>

                    <p className="title-small-mont">
                        Airport:
                        <b>
                            {' '}
                            {rate && rate.search && rate.search.airport && rate.search.airport.name}
                            {' '}
                            ({rate && rate.search && rate.search.airport && rate.search.airport.code})
                        </b>
                    </p>

                    <p className="title-small-mont">
                        Distance from airport: <b>{rate && rate.distance.toFixed(1)} mile(s)</b>
                    </p>

                    <p className="title-small-mont">
                        Parking type: <b>{rate && rate.name}</b>
                    </p>

                    <p className="title-small-mont">
                        Check-in: <b>{moment(rate && rate.search && rate.search.arrive_at).format('MM/DD/YYYY hh:mm A')}</b>
                    </p>

                    <p className="title-small-mont">
                        Check-out: <b>{moment(rate && rate.search && rate.search.exit_at).format('MM/DD/YYYY hh:mm A')}</b>
                    </p>

                    <p className="title-small-mont">
                        Days of parking: <b>{rate && rate.search && rate.search.days}</b>
                    </p>

                    <p className="title-small-mont">
                        Total price: <b>${rate && rate.price && rate.price.total}</b>
                    </p>
                </div>

            </div>
        );
    }
}

Details.propTypes = {
    reservation: PropTypes.object.isRequired
};