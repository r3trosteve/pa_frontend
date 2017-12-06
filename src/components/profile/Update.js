import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

export default class ProfileUpdate extends Component {

    componentDidMount() {

        // jq to open/close items

        $('.profile__items-info__edit').click(function() {
            $(this).parent().parent().find('.profile__items-info__body').toggleClass('active');
            $(this).text(function(i, text){
                return text === "Edit" ? "Close" : "Edit";
            });
            $(this).parent().find('p').toggle();
        });

        // end
    }

    render() {
        return (
            <div className="profile__update profile__items-info">

                {/*YOUR DETAILS*/}

                <div className="profile__items-info__content">

                    {/*header*/}

                    <div className="profile__items-info__header">
                        <h3 className="text-bigger">Your details</h3>
                        <p className="text-bigger hidden-xs">{this.props.user.first_name} {this.props.user.last_name}</p>
                        <span className="text-bigger profile__items-info__edit">Edit</span>
                    </div>

                    {/*body*/}

                    <form onSubmit={this.props.handleProfileUpdate} className="profile__items-info__body">

                        {
                            this.props.isProfileUpdated ?
                                <div className="alert alert-success">
                                    <p>Your profile was updated.</p>
                                </div> :
                                null
                        }

                        {/*1 row*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label className={classnames('', { 'has-error': this.props.errors.firstName })}>
                                    First name
                                    <span className="error-text">{this.props.errors.firstName}</span>
                                    <input
                                        type="name"
                                        name="firstName"
                                        value={this.props.firstName}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <label className={classnames('', { 'has-error': this.props.errors.lastName })}>
                                    Last name
                                    <span className="error-text">{this.props.errors.lastName}</span>
                                    <input
                                        type="name"
                                        name="lastName"
                                        value={this.props.lastName}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                        </div>

                        {/*2 row*/}

                        <div className="row">
                            <div className="col-sm-12">
                                <label className={classnames('', { 'has-error': this.props.errors.email })}>
                                    Email address
                                    <span className="error-text">{this.props.errors.email}</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={this.props.email}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                        </div>

                        {/*3 row*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label>
                                    Address line 1
                                    <input
                                        type="text"
                                        name="address1"
                                        value={this.props.address1}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <label>
                                    Address line 2
                                    <input
                                        type="text"
                                        name="address2"
                                        value={this.props.address2}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                        </div>

                        {/*4 row*/}

                        <div className="row">
                            <div className="col-sm-6">
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
                            <div className="col-sm-6">
                                <label>
                                    Zip/Postal code
                                    <input
                                        type="number"
                                        name="zipCode"
                                        value={this.props.zipCode}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                        </div>

                        {/*5 row*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label className={classnames('', { 'has-error': this.props.errors.state })}>
                                    State
                                    <span className="error-text">{this.props.errors.state}</span>
                                    <input
                                        type="text"
                                        name="state"
                                        value={this.props.state}
                                        onChange={this.props.handleChange}
                                        placeholder="For example, CA for California"
                                    />
                                </label>
                            </div>
                            <div className="col-sm-6">
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
                        </div>

                        {/*6 row*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label className={classnames('', { 'has-error': this.props.errors.phone })}>
                                    Phone number
                                    <span className="error-text">{this.props.errors.phone}</span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={this.props.phone}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <label>
                                    Company name
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={this.props.companyName}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                        </div>

                        {/*submit*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label>
                                    <button type="submit" className="btn-custom">
                                        Save your details
                                    </button>
                                </label>
                            </div>
                        </div>

                    </form>

                </div>

                {/*END YOUR DETAILS*/}


                {/*PASSWORD*/}

                <div className="profile__items-info__content">

                    {/*header*/}

                    <div className="profile__items-info__header">
                        <h3 className="text-bigger">Password</h3>
                        <span className="text-bigger profile__items-info__edit">Edit</span>
                    </div>

                    {/*body*/}

                    <form onSubmit={this.props.handlePasswordUpdate} className="profile__items-info__body">

                        {
                            this.props.isPwdUpdated ?
                                <div className="alert alert-success">
                                    <p>Your password was updated.</p>
                                </div> :
                                null
                        }

                        {/*1*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label className={classnames('', { 'has-error': this.props.errors.password })}>
                                    New password
                                    <input
                                        type="password"
                                        name="password"
                                        value={this.props.password}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <label className={classnames('', { 'has-error': this.props.errors.password })}>
                                    Confirm new password
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={this.props.confirmPassword}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <span className="error-text">{this.props.errors.password}</span>
                            </div>
                        </div>


                        {/*submit*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <button type="submit" className="btn-custom">
                                    Save PASSWORD
                                </button>
                            </div>
                        </div>

                    </form>

                </div>

                {/*END PASSWORD*/}

            </div>
        );
    }
}

ProfileUpdate.propTypes = {
    user: PropTypes.object.isRequired,
    handleProfileUpdate: PropTypes.func.isRequired,
    handlePasswordUpdate: PropTypes.func.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    zipCode: PropTypes.string,
    companyName: PropTypes.string,
    password: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    isProfileUpdated: PropTypes.bool,
    isPwdUpdated: PropTypes.bool
};