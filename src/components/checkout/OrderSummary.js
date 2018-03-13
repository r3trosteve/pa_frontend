import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';

import Coupon from './Coupon';

export default class OrderSummary extends Component {

    constructor() {
        super();

        this.state = {
            showCoupon: false,
			redirect: false,
			coupon: '',
			couponBtnDisabled: true,
			couponError: ''
        };

		this.showCouponInput = this.showCouponInput.bind(this);
		this.handleCouponChange = this.handleCouponChange.bind(this);
		this.handleCouponSubmit = this.handleCouponSubmit.bind(this);
    }

    showCouponInput() {
        this.setState({
            showCoupon: !this.state.showCoupon
        });
	}
	
	handleCouponChange(e) {
        this.setState({
			coupon: e.target.value,
			couponBtnDisabled: e.target.value !== '' ? false : true
		});
    }
	
	handleCouponSubmit(e) {
		e.preventDefault();

		const coupon = this.state.coupon;
		const reservationId = this.props.reservation.id;
		
		this.props.requestCoupon(reservationId, coupon)
			.then(() => {
				if (this.props.couponData.error !== '') {
					this.setState({ couponError: this.props.couponData.error });
				}
			})
			.then(() => this.props.fetchReservation(reservationId));
	}

    render() {

		const reservation = this.props.reservation;
		const price_details = this.props.reservation && this.props.reservation.price_details;
		const rate = this.props.reservation && this.props.reservation.rate;

		let taxes, total_fee, subtotal;

		if (rate && rate.parking_lot && rate.parking_lot.payment_processor === 'wfg') {

            taxes = price_details && price_details.filter(x => x.kind === 'tax');
            total_fee = price_details && price_details.find(x => x.name === 'taxes');
            subtotal = price_details && price_details.find(x => x.name === 'subTotal');

		} else {

            taxes = price_details && price_details.filter(x => x.name === '5.6% state taxes');
			total_fee = price_details && price_details.find(x => x.name === '5.6% state taxes');

			// const taxableSubtotal = price_details && price_details.find(x => x.name === 'Taxable Sub-Total');
			// const nonTaxableSubtotal = price_details && price_details.find(x => x.name === 'Non-Taxable Sub-Total');
			// subtotal = price_details && nonTaxableSubtotal === 0 ? taxableSubtotal : nonTaxableSubtotal;
			subtotal = price_details && price_details.find(x => x.name === 'Non-Taxable Sub-Total');

		}

		return (
			<div className="order-summary card-custom card-custom--no-pad">

				{/*header*/}

				<div className="order-summary__header">
					<h3 className="title-normal-bold">Order Summary</h3>
				</div>

				<div className="order-summary__form">

					{/*title*/}

					<div className="order-summary__title">
						<h4>{reservation.rate && reservation.rate.parking_lot.name}</h4>
						<p>
							{reservation.rate && reservation.rate.parking_lot.location.address1}
							{' '}
                            {reservation.rate && reservation.rate.parking_lot.location.address2},
							{' '}
                            {reservation.rate && reservation.rate.parking_lot.location.city},
							{' '}
                            {reservation.rate && reservation.rate.parking_lot.location.state},
							{' '}
                            {reservation.rate && reservation.rate.parking_lot.location.zip_code}
						</p>
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
							<td>
								Days of parking:
							</td>
							<td>
                                {' '}
                                {reservation.rate && reservation.rate.search.days}
							</td>

						</tr>
						</tbody>
					</table>

                    {/*/!*2*!/*/}

					<table className="order-summary__table">
						<tbody>
						<tr>
							<td>
								Subtotal:
							</td>
							<td> ${subtotal && parseFloat(subtotal.amount).toFixed(2)}</td>
						</tr>
						<tr>
							<td>
								Coupon discount:
							</td>
							<td> ${parseFloat(reservation.bonus_amount).toFixed(2)}</td>
						</tr>
						</tbody>
					</table>

                    {/*/!*3*!/*/}

					<table className="order-summary__table">
						<tbody>
						<tr>
							<td className="taxes-fees">

                                {
                                    taxes && taxes.length > 0 ?
                                        <i className="fa fa-question-circle" aria-hidden="true"/> :
                                        null
                                }

                                Taxes & Fees:

                                {
                                    taxes && taxes.length > 0 ?
                                        (
                                            <div className="summary-tooltip">
                                                <h4>Taxes and Fees Details</h4>

                                                {taxes && taxes.map((tax, index) => {
                                                    return (
                                                        <p key={index}>
                                                            {tax.name}:
                                                            <b> ${parseFloat(tax.amount).toFixed(2)}</b>
                                                        </p>
                                                    );
                                                })}

                                                <i className="fa fa-caret-down" aria-hidden="true" />
                                            </div>
                                        ) :
										null
                                }

							</td>
							<td>
								${total_fee && parseFloat(total_fee.amount).toFixed(2) || 0}
							</td>
						</tr>
						</tbody>
					</table>

					{/*/!*total*!/*/}

					<table className="order-summary__table">
						<tbody>
						<tr>
							<td className="total">Total:</td>
							<td className="total"> 
								${ reservation.rate && parseFloat(reservation.rate.price.total).toFixed(2)}
							</td>
						</tr>
						</tbody>
					</table>

					{/*/!*coupon*!/*/}

					{ (this.props.auth && this.props.auth.isAuthenticated) && (reservation && !isEmpty(reservation.user))  ? 
						<Coupon
							showCouponInput={this.showCouponInput}
							handleCouponSubmit={this.handleCouponSubmit}
							showCoupon={this.state.showCoupon}
							handleCouponChange={this.handleCouponChange}
							couponBtnDisabled={this.state.couponBtnDisabled}
							couponError={this.state.couponError}
						/> : null
					}

				</div>
			</div>
		);

    }
}

OrderSummary.propTypes = {
	reservation: PropTypes.object.isRequired,
	requestCoupon: PropTypes.func.isRequired,
	couponData: PropTypes.object,
	auth: PropTypes.object
};