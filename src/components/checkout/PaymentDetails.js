import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

export default class PaymentDetails extends Component {

	constructor() {
		super();

		this.state = {
			iframeShown: false,
			loading: false,
			isReservationPaid: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

    handleSubmit(e) {
		e.preventDefault();

		this.setState({ loading: true });

		const id = this.props.reservation && this.props.reservation.id;

        this.props.requestCheckout(id)
			.then(() => this.setState({ loading: false, iframeShown: true }));

        this.props.fetchPaidReservation(id);
	}

    componentWillReceiveProps(nextProps) {
        if (!isEmpty(nextProps.paidReservation)) {
            console.log('paid reservation:', this.props.paidReservation);
            this.setState({ isReservationPaid: true });
        }
    }

	render() {

		return (

			<form onSubmit={this.handleSubmit} className="ap-checkout__payment-details card-custom">

				{/*title*/}

				<div className="ap-checkout__payment-details__title">
					<h3 className="title-normal">
						<i className="fa fa-lock" aria-hidden="true" />
						Payment details
						<span>your reservation is safe and secure</span>
					</h3>
				</div>

				{/*inputs*/}

				<div className="ap-checkout__payment-details__inputs">

					{/*inputs body*/}

					<div className="row">
						<div className="col-md-6">
							<label>
								Name
								<input type="text" />
							</label>
						</div>

						<div className="col-md-6">
							<label>
								Email
								<input type="email" />
							</label>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6">
							<label>
								Phone Number
								<input type="tel" />
							</label>
						</div>
					</div>

					{/*t&c*/}

					<p className="ap-checkout__payment-details__terms">
						I have read and accept the
						<a href="#"> terms of use</a>,
						<a href="#"> rules of flight </a>
						and
						<a href="#"> privacy policy</a>
					</p>

					{/*submit*/}

					<div className="ap-checkout__payment-details__submit">

						{
							this.state.loading ?
								(
									<button type="submit" className="btn-custom" disabled>
										<i className="fa fa-spinner" aria-hidden="true" />
										Please wait...
									</button>
								) :
								(
									<button
										type="submit"
										className="btn-custom"
										disabled={this.state.isReservationPaid}
									>
										Pay Now <i className="fa fa-chevron-right" aria-hidden="true" />
									</button>
								)
						}

					</div>
				</div>

                {
                    this.state.isReservationPaid ?
                        (
							<div className="ap-checkout__payment-details__success">
								<h4 className="title-normal">Your reservation was successfully paid!</h4>
								<p className="title-small-mont">Reservation Id: <b>{this.props.paidReservation && this.props.paidReservation.id}</b></p>
								<p className="title-small-mont">Status: <b>{this.props.paidReservation && this.props.paidReservation.status}</b></p>
							</div>
                        ) : null
                }

                {
                    this.state.iframeShown && !this.state.isReservationPaid ?
                        (

							<div className="ap-checkout__payment-details__pnf-payment">
								<iframe src={this.props.checkout && this.props.checkout.payment_url} width="100%" height="512" align="left">
									Your browser does not support iframes!
								</iframe>
							</div>

                        ) : null
                }

			</form>
		);
	}
}

PaymentDetails.propTypes = {
	requestCheckout: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired,
    checkout: PropTypes.object.isRequired,
    fetchPaidReservation: PropTypes.func.isRequired,
    paidReservation: PropTypes.object.isRequired
};