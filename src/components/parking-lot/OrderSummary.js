import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import EditFormModal from './EditFormModal';
import SubmitButton from './SubmitButton';

import { createReservation } from '../../modules/reservations/reservation';

class OrderSummary extends Component {

	constructor() {
		super();

		this.state = {
			showCoupon: false,
			redirect: false,
            isEditFormModal: false,
			loading: false,
			nonAuthProceedClicked: false,
		};

		this.openEditFormModal = this.openEditFormModal.bind(this);
		this.closeEditFormModal = this.closeEditFormModal.bind(this);
		this.showCouponInput = this.showCouponInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNonAuthProceed = this.handleNonAuthProceed.bind(this);
	}

    handleNonAuthProceed(e) {
		e.preventDefault();

        this.props.openLogModal();

        this.setState({ nonAuthProceedClicked: true });
	}

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.auth.isAuthenticated === true && nextState.nonAuthProceedClicked === true) {

            setTimeout(() => {
                $('.order-summary__submit button').trigger('click');
			}, 300);
        }
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
                        return <Redirect from="/" to={`/checkout/${this.props.reservation.id}`} />;
                    }}
				/>
			);

		} else {

            const rate = this.props.rate;

            return (
				<div className="order-summary card-custom card-custom--no-pad" id="summary">

                    {/*header*/}

					<div className="order-summary__header">
						<h3 className="title-normal-bold">Order Summary</h3>
					</div>

                    {/*form*/}

					<form onSubmit={this.handleSubmit} className="order-summary__form">

                        {/*title*/}

						<div className="order-summary__title">
							<h4>{rate.parking_lot && rate.parking_lot.name}</h4>
							<p>
								{rate.parking_lot && rate.parking_lot.location.address1}
								{' '}
                                {rate.parking_lot && rate.parking_lot.location.address2},
                                {' '}
                                {rate.parking_lot && rate.parking_lot.location.city},
                                {' '}
                                {rate.parking_lot && rate.parking_lot.location.state},
                                {' '}
                                {rate.parking_lot && rate.parking_lot.location.zip_code}
							</p>
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
										{rate.search && rate.search.days}
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
								</td>
								<td> ${rate.price && parseFloat(rate.price.daily_rate).toFixed(2)}</td>
							</tr>
							</tbody>
						</table>

                        {/*total*/}

						<table className="order-summary__table">
							<tbody>
							<tr>
								<td className="total">Total:</td>
								<td className="total"> ${rate.price && parseFloat(rate.price.total).toFixed(2)}</td>
							</tr>
							</tbody>
						</table>

                        {/*submit*/}

						<SubmitButton
							auth={this.props.auth}
							loading={this.state.loading}
							// handleNonAuthProceed={this.handleNonAuthProceed}
							onClick={this.handleSubmit}
							rate={rate}
						/>

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
