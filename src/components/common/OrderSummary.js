import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default class OrderSummary extends Component {

	constructor() {
		super();

		this.state = {
			showCoupon: false
		};

		this.showCouponInput = this.showCouponInput.bind(this);
	}

	showCouponInput() {
		this.setState({
			showCoupon: !this.state.showCoupon
		});
	}

	render() {

		const rate = this.props.rate;

		return (
			<div className="order-summary card-custom card-custom--no-pad">

				{/*header*/}

				<div className="order-summary__header">
					<h3 className="title-normal-bold">Order Summary</h3>
				</div>

				{/*form*/}

				<form className="order-summary__form">

					{/*title*/}

					<div className="order-summary__title">
						<h4>Hilton Atlanta Airport</h4>
					</div>

					{/*1*/}

					<table className="order-summary__table">
						<tbody>
							<tr>
								<td>Check-in:</td>
								<td>
									{rate.search && rate.search.arrive_at}
								</td>
							</tr>
							<tr>
								<td>Check-out:</td>
								<td>
                                    {rate.search && rate.search.exit_at}
								</td>
							</tr>
							<tr>
								<td>Days of parking:
									<span>
										{rate.search && rate.search.days}
									</span>
								</td>

								<td>Edit Times</td>
							</tr>
						</tbody>
					</table>

					{/*2*/}

					<table className="order-summary__table">
						<tbody>
							<tr>
								<td>
									Price per day:
									<span> ${rate.price && rate.price.daily_rate}</span>
								</td>
								<td> ${rate.price && rate.price.daily_rate}</td>
							</tr>
							<tr>
								<td>
									Service fee: <span> ${rate.price && rate.price.service_fee}</span>
								</td>
								<td> ${rate.price && rate.price.service_fee}</td>
							</tr>
						</tbody>
					</table>

					{/*total*/}

					<table className="order-summary__table">
						<tbody>
							<tr>
								<td className="total">Total:</td>
								<td className="total"> ${rate.price && rate.price.total}</td>
							</tr>
						</tbody>
					</table>

					{/*4*/}

					<table className="order-summary__table">
						<tbody>
							<tr>
								<td>Pay Now:</td>
								<td> ${rate.price && rate.price.pay_now}</td>
							</tr>
							<tr>
								<td>Due at Parking Lot:</td>
								<td> ${rate.price && rate.price.due_at_parking_lot}</td>
							</tr>
						</tbody>
					</table>

					{/*coupon*/}

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
						{/*<Link to={'/checkout'} className="btn-custom">*/}
							{/*BOOK NOW*/}
						{/*</Link>*/}
						<a href="#" onClick={() => alert('No checkout yet')} className="btn-custom">
							BOOK NOW
						</a>
					</div>
                    
				</form>
			</div>
		);
	}
}
