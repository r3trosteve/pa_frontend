import React, { Component } from 'react';

export default class AirportParkingCheckoutPaymentDetails extends Component {
    render() {
        return (
            <div className="ap-checkout__payment-details">

                {/*notification*/}

                {/*<div*/}
                    {/*className="ap-checkout__payment-details__notification big">*/}
                    {/*If you don't book now, this amazing deal could be gone.*/}
                {/*</div>*/}

                {/*title*/}

                <div className="ap-checkout__payment-details__title">
                    <h3 className="title-normal">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        Payment details
                        <span>your reservation is safe and secure</span>
                    </h3>
                </div>

                {/*notification*/}

                {/*<div className="ap-checkout__payment-details__notification small">*/}
                    {/*Hurry, that’s the cheapest room at the Seascape Resort & Spa!*/}
                {/*</div>*/}

                {/*inputs*/}

                <div className="ap-checkout__payment-details__inputs">

                    {/*radio header*/}

                    <div className="ap-checkout__payment-details__inputs__header">
                        <label>
                            <input type="radio" name="card" checked/>
                            <span>
                                <b className="text-mont-bold">Credit & Debit cards</b>
                                Transiction fee may apply
                            </span>
                        </label>
                        <div className="ap-checkout__payment-details__inputs-header__img">

                        </div>
                    </div>

                    {/*inputs body*/}

                    <label>Cardholder Name<input type="text"/></label>

                    <label>
                        Card Number
                        <input type="num"/>
                        <span className="cards-image">

                        </span>
                    </label>

                    <div className="row">
                        <div className="col-sm-4">
                            <p className="label-title">
                                End Date
                            </p>
                            <div className="row">
                                <div className="col-xs-6">
                                    <label>
                                        <input type="num" placeholder="mm" maxLength="2"/>
                                    </label>
                                </div>
                                <div className="col-xs-6">
                                    <label>
                                        <input type="num" placeholder="yyyy" maxLength="4"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <label>
                                CVV
                                <input type="num" maxLength="3"/>
                            </label>
                        </div>
                    </div>

                    {/*t&c*/}

                    <p className="ap-checkout__payment-details__terms">
                        I have read and accept the
                        <a href="#"> terms of use</a>,
                        rules of flight  and
                        <a href="#"> privacy policy</a>
                    </p>

                    {/*submit*/}

                    <div className="ap-checkout__payment-details__submit">
                        <button type="submit" className="btn-custom">
                            Pay Now <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </button>
                    </div>

                </div>


            </div>
        );
    }
}