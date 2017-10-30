import React, { Component } from 'react';
import classnames from 'classnames';

export default class ProfileUpdate extends Component {

    componentDidMount() {
        $('.profile__items-info__edit').click(function () {
            $(this).parent().parent().find('.profile__items-info__body').toggleClass('active');
            $(this).text(function(i, text){
                return text === "Edit" ? "Close" : "Edit";
            });
            $(this).parent().find('p').toggle();
        });
    }

    render() {
        return (
            <div className="profile__update profile__items-info">

                {/*YOUR DETAILS*/}

                <div className="profile__items-info__content">

                    {/*header*/}

                    <div className="profile__items-info__header">
                        <h3 className="text-bigger">Your details</h3>
                        <p className="text-bigger hidden-xs">{this.props.user.name}</p>
                        <span className="text-bigger profile__items-info__edit">Edit</span>
                    </div>

                    {/*body*/}

                    <form onSubmit={this.props.handleProfileUpdate} className="profile__items-info__body">

                        {/*1 row*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label className={classnames('', { 'has-error': this.props.errors.name })}>
                                    Full name
                                    <input
                                        type="name"
                                        name="name"
                                        value={this.props.name}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <label className={classnames('', { 'has-error': this.props.errors.email })}>
                                    Email address
                                    <input
                                        type="email"
                                        name="email"
                                        value={this.props.email}
                                        onChange={this.props.handleChange}
                                    />
                                </label>
                            </div>
                        </div>

                        {/*2 row*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label>
                                    Address line 1
                                    <input type="text"/>
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <label>
                                    Address line 2
                                    <input type="text"/>
                                </label>
                            </div>
                        </div>

                        {/*3 row*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label>
                                    City
                                    <input type="text"/>
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <label>
                                    Zip/Postal code
                                    <input type="text"/>
                                </label>
                            </div>
                        </div>

                        {/*4 row*/}

                        <div className="row">
                            <div className="col-sm-12">
                                <label className="select-label">
                                    Country
                                    <select name="country" id="country">
                                        <option value="USA">United States of America</option>
                                        <option value="Canada">Canada</option>
                                        <option value="UK">United Kingdom</option>
                                    </select>
                                    <i className="ion-arrow-down-b"></i>
                                </label>
                            </div>
                        </div>

                        {/*5 row*/}

                        <div className="row">
                            <div className="col-sm-6">
                                <label>
                                    Phone number
                                    <input type="text" placeholder="e.g. +1 234 567 8910"/>
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <label>
                                    Company name
                                    <input type="text"/>
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
                                <label className={classnames('', { 'has-error': this.props.errors.confirmPassword })}>
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
                                <span className="error-text">{this.props.errors.confirmPassword}</span>
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