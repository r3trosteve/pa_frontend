import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import EditFormModal from './EditFormModal';

import { createReservation } from '../../modules/reservations/reservation';

class OrderSummary extends Component {

	constructor() {
		super();

		this.state = {
			showCoupon: false,
			redirect: false,
            isEditFormModal: false,
			loading: false
		};

		this.openEditFormModal = this.openEditFormModal.bind(this);
		this.closeEditFormModal = this.closeEditFormModal.bind(this);
		this.showCouponInput = this.showCouponInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	openEditFormModal() {
		this.setState({ isEditFormModal: true });
	}

    closeEditFormModal() {
        this.setState({ isEditFormModal: false });
    }

	showCouponInput() {
		this.setState({
			showCoupon: !this.state.showCoupon
		});
	}

    handleSubmit(e) {
		e.preventDefault();

		this.setState({ loading: true });

		const id = this.props.rate.id;

		this.props.createReservation({ rate_id: id })
			.then(() => this.setState({ redirect: true, loading: false }));
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
										{rate.search && rate.search.days}
										{/*{' '}*/}
										{/*{rate.search && rate.search.days === null ?*/}
											{/*0 : rate.search && rate.search.days}*/}
									</span>
								</td>

								<td>
									<a href="#" onClick={this.openEditFormModal}>Edit Search</a>
								</td>
							</tr>
							</tbody>
						</table>

                        {/*2*/}

						<table className="order-summary__table">
							<tbody>
							<tr>
								<td>
									Price per day:
									{/*<span> ${rate.price && rate.price.daily_rate}</span>*/}
								</td>
								<td> ${rate.price && rate.price.daily_rate}</td>
							</tr>
							{/*<tr>*/}
								{/*<td>*/}
									{/*Service fee: <span> ${rate.price && rate.price.service_fee}</span>*/}
								{/*</td>*/}
								{/*<td> ${rate.price && rate.price.service_fee}</td>*/}
							{/*</tr>*/}
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

						{/*<table className="order-summary__table">*/}
							{/*<tbody>*/}
							{/*<tr>*/}
								{/*<td>Pay Now:</td>*/}
								{/*<td> ${rate.price && rate.price.pay_now}</td>*/}
							{/*</tr>*/}
							{/*<tr>*/}
								{/*<td>Due at Parking Lot:</td>*/}
								{/*<td> ${rate.price && rate.price.due_at_parking_lot}</td>*/}
							{/*</tr>*/}
							{/*</tbody>*/}
						{/*</table>*/}

                        {/*coupon*/}

						{/*<table className="order-summary__table coupon">*/}
							{/*<tbody>*/}
								{/*<tr>*/}
									{/*<td>*/}
										{/*<span className="order-summary__coupon-btn" onClick={this.showCouponInput}>*/}
											{/*Have a Coupon Code?*/}
										{/*</span>*/}
									{/*</td>*/}
									{/*<td>*/}
										{/*<label*/}
											{/*className={classnames('order-summary__coupon-label', {*/}
												{/*visible: this.state.showCoupon*/}
											{/*})}*/}
										{/*>*/}
											{/*<input type="text" />*/}
										{/*</label>*/}
									{/*</td>*/}
								{/*</tr>*/}
							{/*</tbody>*/}
						{/*</table>*/}

                        {/*submit*/}

						<div className="order-summary__submit">
							{this.props.auth && this.props.auth.isAuthenticated ?
								(
									<button
										type="submit"
										disabled={this.state.loading}
										className={classnames('btn-custom', { disabled: this.state.loading })}
									>
										{
											!this.state.loading ? 'Proceed to checkout' : 'Proceeding to checkout...'
										}
									</button>
								) :
								(
									<a className="btn-custom" onClick={this.props.openLogModal}>
										Proceed to checkout
									</a>
								)
							}
						</div>

					</form>

					{/*edit form modal*/}

					<EditFormModal
						isModalOpen={this.state.isEditFormModal}
						closeModal={this.closeEditFormModal}
						search={rate && rate.search}
					/>

				</div>
            );

		}

	}
}

OrderSummary.propTypes = {
	rate: PropTypes.object.isRequired,
    createReservation: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired,
	auth: PropTypes.object,
    openLogModal: PropTypes.func
};

const mapStateToProps = state => {
    return {
        reservation: state.reservation.item,
		auth: state.auth
    };
};

export default connect(mapStateToProps, { createReservation })(OrderSummary);
