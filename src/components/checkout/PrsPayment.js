import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Route, Redirect, Link } from 'react-router-dom';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';

import PrsForm from './PrsForm';

export default class PrsPayment extends Component {

    constructor() {
        super();

        this.state = {
            loading: false,
            cardType: '',
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
            firstName: user && user.first_name,
            lastName: user && user.last_name,
            email: user && user.email,
            phoneNumber: user && user.phone,

            address: user && user.location &&
                (user.location.address1 || user.location.address2) &&
                ((isEmpty(user.location.address1) ? '' : user.location.address1) + ' ' + (isEmpty(user.location.address2) ? '' : user.location.address2)),

            city: user && user.location && user.location.city,
            state: user && user.location && user.location.state,
            country: user && user.location && user.location.country,
            zipCode: user && user.location && user.location.zip_code
        });
    }

    componentWillReceiveProps(nextProps) {
        const user = nextProps.auth && nextProps.auth.user;

        this.setState({
            firstName: user && user.first_name,
            lastName: user && user.last_name,
            email: user && user.email,
            phoneNumber: user && user.phone,

            address: user && user.location &&
                (user.location.address1 || user.location.address2) &&
                ((isEmpty(user.location.address1) ? '' : user.location.address1) + ' ' + (isEmpty(user.location.address2) ? '' : user.location.address2)),

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

        const { firstName, lastName, email, phoneNumber, address, city, state, country, zipCode, cardType, cardNumber, month, year, cvvNumber } = this.state;
        let errors = {};

        if (isEmpty(firstName)) { errors.firstName = " can't be empty"; }
        if (isEmpty(lastName)) { errors.lastName = " can't be empty"; }
        if (isEmpty(email)) { errors.email = " can't be empty"; }
        if (isEmpty(phoneNumber)) { errors.phoneNumber = " can't be empty"; }
        if (isEmpty(address)) { errors.address = " can't be empty"; }
        if (isEmpty(city)) { errors.city = " can't be empty"; }
        if (isEmpty(state)) { errors.state = " can't be empty"; }
        if (isEmpty(zipCode)) { errors.zipCode = " can't be empty"; }
        if (isEmpty(cardType)) { errors.cardType = " can't be empty"; }
        if (isEmpty(cardNumber)) { errors.cardNumber = " can't be empty"; }
        if (isEmpty(cvvNumber)) { errors.cvvNumber = " can't be empty"; }

        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const id = this.props.reservation && this.props.reservation.id;

            console.log(cardNumber);

            const checkoutData = {
                user: {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    phone: phoneNumber
                },
                card: {
                    type: cardType,
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

            this.setState({ loading: true });

            this.props.requestCheckout(id, checkoutData)
                .then(() => {
                    if (!isEmpty(this.props.checkoutError)) {
                        this.setState({ isReservationFailed: true, loading: false });
                    } else {
                        this.setState({ loading: false });
                        //this.setState({ isReservationPaid: true, loading: false });
                    }
                });
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
                        return <Redirect to={`/confirmation/${this.props.reservation && this.props.reservation.id}`} />;
                    }}
                />
            );

        } else {

            return (
                <div>

                    <PrsForm
                        handleSubmit={this.handleSubmit}
                        errors={this.state.errors}
                        handleChange={this.handleChange}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        phoneNumber={this.state.phoneNumber}
                        address={this.state.address}
                        city={this.state.city}
                        state={this.state.state}
                        country={this.state.country}
                        zipCode={this.state.zipCode}
                        cardType={this.state.cardType}
                        cardNumber={this.state.cardNumber}
                        month={this.state.month}
                        year={this.state.year}
                        cvvNumber={this.state.cvvNumber}
                        loading={this.state.loading}
                        isReservationFailed={this.state.isReservationFailed}
                    />

                </div>
            );

        }
    }
}

PrsPayment.propTypes = {
    requestCheckout: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired,
    paidReservation: PropTypes.object
};