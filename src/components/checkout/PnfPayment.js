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
			isReservationFailed: false,
			errors: {},
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

    componentWillMount() {
		const user = this.props.auth && this.props.auth.user;

        this.setState({
			firstName: user && user.first_name,
            lastName: user && user.last_name,
			email: user && user.email,
            phoneNumber: user && user.phone
        });
    }
    componentWillReceiveProps(nextProps) {
		const user = nextProps.auth && nextProps.auth.user;

        this.setState({
            firstName: user && user.first_name,
			lastName: user && user.last_name,
			email: user && user.email,
            phoneNumber: user && user.phone
        });

        if (!isEmpty(nextProps.paidReservation) && nextProps.paidReservation.status === 'confirmed') {
            this.setState({ isReservationPaid: true });
        }

        if (!isEmpty(nextProps.paidReservation) && !isEmpty(nextProps.paidReservation.last_error_message)) {
            this.setState({ isReservationFailed: true });
        }
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

        const { firstName, lastName, email, phoneNumber } = this.state;
		let errors = {};

        if (isEmpty(firstName)) errors.firstName = " can't be empty";
        if (isEmpty(lastName)) errors.lastName = " can't be empty";
        if (isEmpty(email)) errors.email = " can't be empty";
		if (isEmpty(phoneNumber)) errors.phoneNumber = " can't be empty";

		this.setState({ errors });
		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
            this.setState({ loading: true });

            this.props.requestCheckout(this.props.reservation && this.props.reservation.id, firstName, lastName, email, phoneNumber)
            	.then(() => this.setState({ loading: false, iframeShown: true }));

        	this.props.fetchPaidReservation(this.props.reservation && this.props.reservation.id);
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
                                <label className={classnames('', { 'has-error': this.state.errors.firstName })}>
									First Name
                                    <span className="error-text">{this.state.errors.firstName}</span>
									<input
										type="text"
										name="firstName"
										value={this.state.firstName}
                                        onChange={this.handleChange}
									/>
								</label>
							</div>
                            <div className="col-md-6">
                                <label className={classnames('', { 'has-error': this.state.errors.lastName })}>
                                    Last Name
                                    <span className="error-text">{this.state.errors.lastName}</span>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
						</div>

						<div className="row">
                            <div className="col-md-6">
                                <label className={classnames('', { 'has-error': this.state.errors.email })}>
                                    Email
                                    <span className="error-text">{this.state.errors.email}</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
							<div className="col-md-6">
								<label className={classnames('', { 'has-error': this.state.errors.phoneNumber })}>
                                    Phone Number
                                    <span className="error-text">{this.state.errors.phoneNumber}</span>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
										value={this.state.phoneNumber}
                                        onChange={this.handleChange}
                                    />
                                </label>
							</div>
						</div>

                        {/*t&c*/}

						<p className="ap-checkout__payment-details__terms">
							I have read and accept the
							<Link to="/terms-of-service" target="_blank"> terms of use</Link>,
							and
							<Link to="/privacy-policy" target="_blank"> privacy policy</Link>
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
                        this.state.iframeShown && !this.state.isReservationPaid && !this.state.isReservationFailed ?
							<div className="ap-checkout__payment-details__notification small">
								<p>
									Please enter your card details below and allow our system to securely process your transaction. 
									You'll then be directed to your confirmation page and also receive an email with your 
									reservation details with a bar code to present to the lot when you arrive.
								</p>
							</div> :
                            null
					}

					{
						this.state.isReservationFailed ?
							<div className="ap-checkout__payment-details__notification small small--red">
								<p>{this.props.paidReservation && this.props.paidReservation.last_error_message}</p>
                                <p>
                                    We are sorry but we cannot process your reservation at the moment. <br/>
                                    Please call <a href="tel:18008515863">1-800-851-5863</a>
                                </p>
                                <p>Or you can <a href="javascript:window.location.reload(true)">try again</a>.</p>
							</div> :
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