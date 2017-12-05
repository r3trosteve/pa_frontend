import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from "moment/moment";
import { Link } from 'react-router-dom';

export default class PrsForm extends Component {
    render() {

        const years = [];
        const currentYear = moment().format('YYYY');

        for (let i = 0; i <= 21; i++) {
            years.push(parseInt(currentYear) + i);
        }

        return (
            <form onSubmit={this.props.handleSubmit} className="ap-checkout__payment-details card-custom">

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
                            <label className={classnames('', { 'has-error': this.props.errors.name })}>
                                Name
                                <span className="error-text">{this.props.errors.name}</span>
                                <input
                                    type="text"
                                    value={this.props.name}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.props.errors.email })}>
                                Email
                                <span className="error-text">{this.props.errors.email}</span>
                                <input
                                    type="email"
                                    value={this.props.email}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/*row 2*/}

                    <div className="row">
                        <div className="col-md-12">
                            <label className={classnames('', { 'has-error': this.props.errors.address })}>
                                Address
                                <span className="error-text">{this.props.errors.address}</span>
                                <input
                                    type="text"
                                    name="address"
                                    value={this.props.address}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/*row 3*/}

                    <div className="row">
                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.props.errors.city })}>
                                City
                                <span className="error-text">{this.props.errors.city}</span>
                                <input
                                    type="text"
                                    name="city"
                                    value={this.props.city}
                                    onChange={this.props.handleChange}
                                />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.props.errors.state })}>
                                State
                                <span className="error-text">{this.props.errors.state}</span>
                                <input
                                    type="text"
                                    name="state"
                                    value={this.props.state}
                                    onChange={this.props.handleChange}
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
                                    onChange={this.props.handleChange}
                                    value={this.props.country}
                                >
                                    <option value="USA">United States of America</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                </select>
                                <i className="ion-arrow-down-b" />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className={classnames('', { 'has-error': this.props.errors.zipCode })}>
                                Zip/Postal code
                                <span className="error-text">{this.props.errors.zipCode}</span>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={this.props.zipCode}
                                    onChange={this.props.handleChange}
                                    maxLength="10"
                                    pattern="\d*"
                                    title="Only digits allowed"
                                />
                            </label>
                        </div>
                    </div>

                    {/*row 5*/}

                    <div className="row">
                        <div className="col-md-6">
                            <div className={classnames('label-title', { 'has-error': this.props.errors.cardNumber1 })}>
                                Credit Card Number
                                <span className="error-text">{this.props.errors.cardNumber1}</span>
                            </div>

                            <div className={classnames('inline-inputs', { 'has-error': this.props.errors.cardNumber1 })}>
                                <label>
                                    <input
                                        className="col-sm-3"
                                        type="text"
                                        name="cardNumber1"
                                        value={this.props.cardNumber1}
                                        onChange={this.props.handleChange}
                                        placeholder="0000"
                                        maxLength="4"
                                        pattern="\d*"
                                        title="Only digits allowed"
                                    />
                                </label>

                                <label>
                                    <input
                                        className="col-sm-3"
                                        type="text"
                                        name="cardNumber2"
                                        value={this.props.cardNumber2}
                                        onChange={this.props.handleChange}
                                        placeholder="0000"
                                        maxLength="4"
                                        pattern="\d*"
                                        title="Only digits allowed"
                                        />
                                </label>

                                <label>
                                    <input
                                        className="col-sm-3"
                                        type="text"
                                        name="cardNumber3"
                                        value={this.props.cardNumber3}
                                        onChange={this.props.handleChange}
                                        placeholder="0000"
                                        maxLength="4"
                                        pattern="\d*"
                                        title="Only digits allowed"
                                    />
                                </label>

                                <label>
                                    <input
                                        className="col-sm-3"
                                        type="text"
                                        name="cardNumber4"
                                        value={this.props.cardNumber4}
                                        onChange={this.props.handleChange}
                                        placeholder="0000"
                                        maxLength="4"
                                        pattern="\d*"
                                        title="Only digits allowed"
                                    />
                                </label>

                            </div>
                        </div>

                    </div>

                    {/*row 6*/}

                    <div className="row">

                        <div className="col-md-6">

                            <div className="row inline-inputs">

                                <div className="col-sm-4">
                                    <label className="select-label">
                                        Month
                                        <select
                                            name="month"
                                            id="month"
                                            onChange={this.props.handleChange}
                                            value={this.props.month}
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, i) =>
                                                <option key={i} value={m}>{m < 10 ? '0' + m : m}</option>
                                            )}
                                        </select>
                                        <i className="ion-arrow-down-b" />
                                    </label>
                                </div>

                                <div className="col-sm-4">
                                    <label className="select-label">
                                        Year
                                        <select
                                            name="year"
                                            id="year"
                                            onChange={this.props.handleChange}
                                            value={this.props.year}
                                        >
                                            {years.map((y, i) =>
                                                <option key={i} value={y}>{y}</option>
                                            )}
                                        </select>
                                        <i className="ion-arrow-down-b" />
                                    </label>
                                </div>

                                <div className="col-sm-4">
                                    <label className={classnames('', { 'has-error': this.props.errors.cvvNumber })}>
                                        CVV
                                        <input
                                            type="text"
                                            name="cvvNumber"
                                            value={this.props.cvvNumber}
                                            onChange={this.props.handleChange}
                                            maxLength="3"
                                            pattern="\d*"
                                            title="Only digits allowed"
                                        />
                                    </label>
                                </div>

                            </div>
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
                            this.props.loading ?
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
                                        style={this.props.isReservationFailed ? {'display': 'none'} : {}}
                                    >
                                        Complete Reservation
                                    </button>
                                )
                        }
                    </div>

                    {this.props.isReservationFailed ?
                        <div className="ap-checkout__payment-details__notification small small--red">
                            <p>
                                We are sorry but we cannot process your reservation at the moment. <br/>
                                Please call <a href="tel:18008515863">1-800-851-5863</a>
                            </p>
                            <p>Or you can <a href="javascript:window.location.reload(true)">try again</a>.</p>
                        </div> :
                        null
                    }

                </div>

            </form>
        );
    }
}

PrsForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    zipCode: PropTypes.string,
    cardNumber1: PropTypes.string,
    cardNumber2: PropTypes.string,
    cardNumber3: PropTypes.string,
    cardNumber4: PropTypes.string,
    month: PropTypes.number,
    year: PropTypes.number,
    cvvNumber: PropTypes.string,
    loading: PropTypes.bool,
    isReservationFailed: PropTypes.bool
};