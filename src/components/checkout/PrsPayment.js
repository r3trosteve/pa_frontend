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
            cardNumber1: '',
            cardNumber2: '',
            cardNumber3: '',
            cardNumber4: '',
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
            address: user && user.location && (user.location.address1 || user.location.address2) && (user.location.address1 + ', ' + user.location.address2),
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
            address: user && user.location && (user.location.address1 || user.location.address2) && (user.location.address1 + ', ' + user.location.address2),
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

        const { address, city, state, country, zipCode, cardNumber1, cardNumber2, cardNumber3, cardNumber4, month, year, cvvNumber } = this.state;
        let errors = {};

        if (isEmpty(address)) { errors.address = " can't be empty"; }
        if (isEmpty(city)) { errors.city = " can't be empty"; }
        if (isEmpty(state)) { errors.state = " can't be empty"; }
        if (isEmpty(zipCode)) { errors.zipCode = " can't be empty"; }
        if (isEmpty(cardNumber1) || isEmpty(cardNumber2) || isEmpty(cardNumber3) || isEmpty(cardNumber4)) { errors.cardNumber1 = " can't be empty"; }
        if (isEmpty(cvvNumber)) { errors.cvvNumber = " can't be empty"; }

        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const id = this.props.reservation && this.props.reservation.id;

            const cardNumber = cardNumber1 + cardNumber2 + cardNumber3 + cardNumber4;

            console.log(cardNumber);

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

            this.setState({ loading: true });

            this.props.requestCheckout(id, checkoutData)
                .then(() => {
                    if (!isEmpty(this.props.checkoutError)) {
                        this.setState({ isReservationFailed: true, loading: false });
                    } else {
                        this.setState({ isReservationPaid: true, loading: false });
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
                        name={this.state.name}
                        email={this.state.email}
                        address={this.state.address}
                        city={this.state.city}
                        state={this.state.state}
                        country={this.state.country}
                        zipCode={this.state.zipCode}
                        cardNumber1={this.state.cardNumber1}
                        cardNumber2={this.state.cardNumber2}
                        cardNumber3={this.state.cardNumber3}
                        cardNumber4={this.state.cardNumber4}
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