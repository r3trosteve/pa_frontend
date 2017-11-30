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
		const price_details = reservation.price_details;

		const taxes = price_details && price_details.filter(x => x.kind === 'tax');

        const total_fee = price_details && price_details.find(x => x.name === 'taxes');
        const subtotal = price_details && price_details.find(x => x.name === 'subTotal');

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
							<td> $0.00</td>
						</tr>
						</tbody>
					</table>

                    {/*/!*3*!/*/}

					<table className="order-summary__table">
						<tbody>
						<tr>
							<td className="taxes-fees">
								<i className="fa fa-question-circle" aria-hidden="true" />
                                Taxes & Fees:
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
							</td>
							<td>
								${total_fee && parseFloat(total_fee.amount).toFixed(2)}
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

				</form>
			</div>
		);

    }
}

OrderSummary.propTypes = {
    reservation: PropTypes.object.isRequired
};