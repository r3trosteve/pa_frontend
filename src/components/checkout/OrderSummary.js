import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';

export default class OrderSummary extends Component {

    constructor() {
        super();

        this.state = {
            showCoupon: false,
            redirect: false
        };

        this.showCouponInput = this.showCouponInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showCouponInput() {
        this.setState({
            showCoupon: !this.state.showCoupon
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {

		const reservation = this.props.reservation;

		return (
			<div className="order-summary card-custom card-custom--no-pad">

				{/*header*/}

				<div className="order-summary__header">
					<h3 className="title-normal-bold">Order Summary</h3>
				</div>

				{/*form*/}

				<form onSubmit={this.handleSubmit} className="order-summary__form">

					{/*title*/}

					<div className="order-summary__title">
						<h4>{reservation.rate && reservation.rate.search.airport.name}</h4>
					</div>

					{/*1*/}

					<table className="order-summary__table">
						<tbody>
						<tr>
							<td>Check-in:</td>
							<td>
								{moment(reservation.rate && reservation.rate.search.arrive_at).format('MM/DD/YYYY hh:mm A')}
							</td>
						</tr>
						<tr>
							<td>Check-out:</td>
							<td>
								{moment(reservation.rate && reservation.rate.search.exit_at).format('MM/DD/YYYY hh:mm A')}
							</td>
						</tr>
						<tr>
							<td>Days of parking:
								<span>
                                    {reservation.rate && reservation.rate.search.days}
									{/*{' '}*/}
									{/*{reservation.rate.search && reservation.rate.search.days === null ?*/}
										{/*0 : reservation.rate.search && reservation.rate.search.days}*/}
								</span>
							</td>

							{/*<td>Edit Times</td>*/}
						</tr>
						</tbody>
					</table>

					{/*/!*2*!/*/}

					<table className="order-summary__table">
						<tbody>
						<tr>
							<td>
								Price per day:
								<span> ${reservation.rate && reservation.rate.price.daily_rate}</span>
							</td>
							<td> ${reservation.rate && reservation.rate.price.daily_rate}</td>
						</tr>
						<tr>
							<td>
								Service fee: <span> ${reservation.rate && reservation.rate.price.service_fee}</span>
							</td>
							<td> ${reservation.rate && reservation.rate.price.service_fee}</td>
						</tr>
						</tbody>
					</table>

					{/*/!*total*!/*/}

					<table className="order-summary__table">
						<tbody>
						<tr>
							<td className="total">Total:</td>
							<td className="total"> ${reservation.rate && reservation.rate.price.total}</td>
						</tr>
						</tbody>
					</table>

					{/*/!*4*!/*/}

					<table className="order-summary__table">
						<tbody>
						<tr>
							<td>Pay Now:</td>
							<td> ${reservation.rate && reservation.rate.price.pay_now}</td>
						</tr>
						<tr>
							<td>Due at Parking Lot:</td>
							<td> ${reservation.rate && reservation.rate.price.due_at_parking_lot}</td>
						</tr>
						</tbody>
					</table>

					{/*/!*coupon*!/*/}

					<table className="order-summary__table coupon">
						<tbody>
							<tr>
								<td>
									<span className="order-summary__coupon-btn" onClick={this.showCouponInput}>
										Have a Coupon Code?
									</span>
								</td>
								<td>
									<label
										className={classnames('order-summary__coupon-label', {
											visible: this.state.showCoupon
										})}
									>
										<input type="text" />
									</label>
								</td>
							</tr>
						</tbody>
					</table>

					{/*submit*/}

					<div className="order-summary__submit">
						<button onClick={() => alert('No checkout yet')} className="btn-custom">
							Check out
						</button>
					</div>

				</form>
			</div>
		);

    }
}

OrderSummary.propTypes = {
    reservation: PropTypes.object.isRequired
};