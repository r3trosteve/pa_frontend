import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import { createReservation } from '../../modules/reservations/reservation';

class OrderSummary extends Component {

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

		const id = this.props.rate.id;

		this.props.createReservation({ rate_id: id })
			.then(() => this.setState({ redirect: true }));
	}

	render() {

		if (this.state.redirect) {

			return (
				<Route
					render={({ staticContext }) => {
                        if (staticContext) {
                            staticContext.status = 302;
                        }
                        return <Redirect from="/" to={`/reservation/${this.props.reservation.id}`} />;
                    }}
				/>
			);

		} else {

            const rate = this.props.rate;

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
							<h4>{rate.search && rate.search.airport.name}</h4>
						</div>

                        {/*1*/}

						<table className="order-summary__table">
							<tbody>
							<tr>
								<td>Check-in:</td>
								<td>
                                    {moment(rate.search && rate.search.arrive_at).format('MM/DD/YYYY hh:mm A')}
								</td>
							</tr>
							<tr>
								<td>Check-out:</td>
								<td>
                                    {moment(rate.search && rate.search.exit_at).format('MM/DD/YYYY hh:mm A')}
								</td>
							</tr>
							<tr>
								<td>Days of parking:
									<span>
										{' '}
										{rate.search && rate.search.days === null ?
											0 : rate.search && rate.search.days}
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
							{this.props.auth && this.props.auth.isAuthenticated ?
									<button type="submit" className="btn-custom">Submit</button> :
									<p>
										Please
										<a href="#" onClick={this.props.openLogModal}> log in </a>
										to book this parking
									</p>
							}
						</div>

					</form>
				</div>
            );

		}

	}
}

OrderSummary.propTypes = {
	rate: PropTypes.object.isRequired,
    createReservation: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired,
	auth: PropTypes.object
};

const mapStateToProps = state => {
    return {
        reservation: state.reservation.data,
		auth: state.auth
    };
};

export default connect(mapStateToProps, { createReservation })(OrderSummary);
