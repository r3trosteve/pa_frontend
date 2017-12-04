import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Route, Redirect, Link } from 'react-router-dom';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';

export default class PrsPayment extends Component {

    constructor() {
        super();

        this.state = {
            loading: false,
            cardNumber: '',
            cvvNumber: '',
            month: 1,
            year: parseInt(moment().format('YYYY')),
            address: '',
            city: '',
            state: '',
            country: 'US',
            zipCode: '',
            errors: {},
            isReservationPaid: false,
            isReservationFailed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const user = this.props.auth && this.props.auth.user;

        this.setState({
            name: user && user.name,
            email: user && user.email,
            phoneNumber: user && user.phone,
            address: user && user.location && (user.location.address1 + ', ' + user.location.address2),
            city: user && user.location && user.location.city,
            state: user && user.location && user.location.state,
            country: user && user.location && user.location.country,
            zipCode: user && user.location && user.location.zip_code
        });
    }

    componentWillReceiveProps(nextProps) {
        const user = nextProps.auth && nextProps.auth.user;

        this.setState({
            name: user && user.name,
            email: user && user.email,
            phoneNumber: user && user.phone,
            address: user && user.location && (user.location.address1 + ', ' + user.location.address2),
            city: user && user.location && user.location.city,
            state: user && user.location && user.location.state,
            country: user && user.location && user.location.country,
            zipCode: user && user.location && user.location.zip_code
        });
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

        const { address, city, state, country, zipCode, cardNumber, month, year, cvvNumber } = this.state;
        let errors = {};

        if (isEmpty(address)) { errors.address = " can't be empty"; }
        if (isEmpty(city)) { errors.city = " can't be empty"; }
        if (isEmpty(state)) { errors.state = " can't be empty"; }
        if (isEmpty(zipCode)) { errors.zipCode = " can't be empty"; }
        if (isEmpty(cardNumber)) { errors.cardNumber = " can't be empty"; }
        if (isEmpty(cvvNumber)) { errors.cvvNumber = " can't be empty"; }

        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        const checkoutData = {
            card: {
                name,
                number: cardNumber,
                cvv: cvvNumber,
                month,
                year
            },
            address: {
                address,
                city,
                state,
                country,
                zip: zipCode
            }
        };

        const id = this.props.reservation && this.props.reservation.id;

        if (isValid) {
            this.props.requestCheckout(id, checkoutData);
                // .then(() => {
                //     if (this.props.reservation && this.props.reservation.status === 'confirmed' && isEmpty(this.props.reservation.last_error_message)) {
                //         this.setState({isReservationPaid: true})
                //     }
                //
                //     if (this.props.reservation && this.props.reservation.status === 'pending' && !isEmpty(this.props.reservation.last_error_message)) {
                //         this.setState({isReservationFailed: true})
                //     }
                // });
        }
    }

    render() {

        const years = [];
        const currentYear = moment().format('YYYY');

        for (let i = 0; i <= 21; i++) {
            years.push(parseInt(currentYear) + i);
        }

        console.log(this.props.reservation);

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

                    {/*row 1*/}

                    <div className="row">
                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.state.errors.name })}>
                                Name
                                <span className="error-text">{this.state.errors.name}</span>
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.state.errors.email })}>
                                Email
                                <span className="error-text">{this.state.errors.email}</span>
                                <input
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/*row 2*/}

                    <div className="row">
                        <div className="col-md-12">
                            <label className={classnames('', { 'has-error': this.state.errors.address })}>
                                Address
                                <span className="error-text">{this.state.errors.address}</span>
                                <input
                                    type="text"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/*row 3*/}

                    <div className="row">
                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.state.errors.city })}>
                                City
                                <span className="error-text">{this.state.errors.city}</span>
                                <input
                                    type="text"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.state.errors.state })}>
                                State
                                <span className="error-text">{this.state.errors.state}</span>
                                <input
                                    type="text"
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/*row 4*/}

                    <div className="row">
                        <div className="col-md-6">
                            <label className="select-label">
                                Country
                                <select
                                    name="country"
                                    id="country"
                                    onChange={this.handleChange}
                                    value={this.state.country}
                                >
                                    <option value="USA">United States of America</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                </select>
                                <i className="ion-arrow-down-b" />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.state.errors.zipCode })}>
                                Zip/Postal code
                                <span className="error-text">{this.state.errors.zipCode}</span>
                                <input
                                    type="number"
                                    name="zipCode"
                                    value={this.state.zipCode}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/*row 5*/}

                    <div className="row">
                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.state.errors.cardNumber })}>
                                Credit Card Number
                                <span className="error-text">{this.state.errors.cardNumber}</span>
                                <input
                                    type="number"
                                    name="cardNumber"
                                    value={this.state.cardNumber}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/*row 3*/}

                    <div className="row">
                        <div className="col-md-6">
                            {/*1*/}
                            <label className="select-label">
                                Month
                                <select
                                    name="month"
                                    id="month"
                                    onChange={this.handleChange}
                                    value={this.state.month}
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, i) =>
                                        <option key={i} value={m}>{m}</option>
                                    )}
                                </select>
                                <i className="ion-arrow-down-b" />
                            </label>

                            {/*2*/}
                            <label className="select-label">
                                Year
                                <select
                                    name="year"
                                    id="year"
                                    onChange={this.handleChange}
                                    value={this.state.year}
                                >
                                    {years.map((y, i) =>
                                        <option key={i} value={y}>{y}</option>
                                    )}
                                </select>
                                <i className="ion-arrow-down-b" />
                            </label>

                            {/*3*/}
                            <label className={classnames('', { 'has-error': this.state.errors.cvvNumber })}>
                                CVV
                                <span className="error-text">{this.state.errors.cvvNumber}</span>
                                <input
                                    type="number"
                                    name="cvvNumber"
                                    value={this.state.cvvNumber}
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
                                        // disabled={this.state.isReservationPaid}
                                    >
                                        Complete Reservation
                                    </button>
                                )
                        }
                    </div>

                </div>

                {this.state.isReservationFailed ?
                    <div>
                        <br />
                        <div className="alert alert-danger">
                            <p>We are sorry but we cannot process your reservation at the moment. Please call 1-800-851-5863!</p>
                        </div>
                    </div> :
                    null
                }

            </form>
        );
    }
}

PrsPayment.propTypes = {
    requestCheckout: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired
};