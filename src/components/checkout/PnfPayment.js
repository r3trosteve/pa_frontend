import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Route, Redirect, Link } from 'react-router-dom';
import classnames from 'classnames';

export default class PnfPayment extends Component {

	constructor() {
		super();

		this.state = {
			iframeShown: false,
			loading: false,
			isReservationPaid: false,
			errors: {},
			phoneNumber: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
        if (this.state.errors[e.target.name]) {

            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });

        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleSubmit(e) {
		e.preventDefault();

		let errors = {};
		if (this.state.phoneNumber === '') errors.phoneNumber = " can't be empty";

		this.setState({ errors });
		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
			this.setState({ loading: true });

			this.props.requestCheckout(this.props.reservation && this.props.reservation.id)
            	.then(() => this.setState({ loading: false, iframeShown: true }));

        	this.props.fetchPaidReservation(this.props.reservation && this.props.reservation.id);
		}
	}

    componentWillReceiveProps(nextProps) {
        if (!isEmpty(nextProps.paidReservation)) {
            this.setState({ isReservationPaid: true });
        }
    }

	render() {

		if (this.state.isReservationPaid) {

            return (

				<Route
					render={({ staticContext }) => {
                        if (staticContext) {
                            staticContext.status = 302;
                        }
                        return <Redirect to={`/confirmation/${this.props.paidReservation && this.props.paidReservation.id}`} />;
                    }}
				/>
            );

		} else {

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
									<input type="text" value={this.props.auth.user && this.props.auth.user.name} />
								</label>
							</div>

							<div className="col-md-6">
								<label>
									Email
									<input type="email" value={this.props.auth.user && this.props.auth.user.email} />
								</label>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6">
								<label className={classnames('', { 'has-error': this.state.errors.phoneNumber })}>
                                    Phone Number
                                    <span className="error-text">{this.state.errors.phoneNumber}</span>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        onChange={this.handleChange}
                                    />
                                </label>
							</div>
						</div>

                        {/*t&c*/}

						<p className="ap-checkout__payment-details__terms">
							I have read and accept the
							<Link to="/terms-of-service"> terms of use</Link>,
							and
							<Link to="/privacy-policy"> privacy policy</Link>
						</p>

                        {/*submit*/}

						{!this.state.iframeShown ?

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
							</div> :
							null
							
						}
						
					</div>

                    {
                        this.state.iframeShown && !this.state.isReservationPaid ?
							<p className="ap-checkout__payment-details__notification small">
								When you submit the payment form you will need to wait for a while till Wells Fargo completes the payment.
								Afterwards you will be redirected to confirmation page.
							</p> :
                            null
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
}

PnfPayment.propTypes = {
	requestCheckout: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired,
    checkout: PropTypes.object.isRequired,
    fetchPaidReservation: PropTypes.func.isRequired,
    paidReservation: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};