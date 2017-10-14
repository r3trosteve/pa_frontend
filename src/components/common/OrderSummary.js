import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default class OrderSummary extends Component {

    constructor() {
        super();

        this.state = {
            showCoupon: false
        };

        this.showCouponInput = this.showCouponInput.bind(this);
    }

    showCouponInput() {
        this.setState({
            showCoupon: !this.state.showCoupon
        });
    }

    render() {
        return (

            <div className="order-summary card-custom card-custom--no-pad">

                {/*header*/}

                <div className="order-summary__header">
                    <h3 className="title-normal-bold">
                        Order Summary
                    </h3>
                </div>

                {/*form*/}

                <form className="order-summary__form">

                    {/*title*/}

                    <div className="order-summary__title">
                        <h4>Hilton Atlanta Airport</h4>
                    </div>

                    {/*1*/}

                    <table className="order-summary__table">
                        <tbody>
                            <tr>
                                <td>Check-in:</td>
                                <td>06/14/2017 12:00 PM</td>
                            </tr>
                            <tr>
                                <td>Check-out:</td>
                                <td>06/15/2017 12:00 PM</td>
                            </tr>
                            <tr>
                                <td> Days of parking: <span>1 day</span></td>
                                <td>Edit Times</td>
                            </tr>
                        </tbody>
                    </table>

                    {/*2*/}

                    <table className="order-summary__table">
                        <tbody>
                            <tr>
                                <td>Price per day: <span>$8</span></td>
                                <td>$8.00</td>
                            </tr>
                            <tr>
                                <td> Service fee: <span>$5</span></td>
                                <td>$5.00</td>
                            </tr>
                        </tbody>
                    </table>

                    {/*total*/}

                    <table className="order-summary__table">
                        <tbody>
                            <tr>
                                <td className="total">Total:</td>
                                <td className="total">$13.00</td>
                            </tr>
                        </tbody>
                    </table>

                    {/*4*/}

                    <table className="order-summary__table">
                        <tbody>
                            <tr>
                                <td>Pay Now:</td>
                                <td>$13.00</td>
                            </tr>
                            <tr>
                                <td>Due at Parking Lot:</td>
                                <td>$0.00</td>
                            </tr>
                        </tbody>
                    </table>

                    {/*coupon*/}

                    <table className="order-summary__table coupon">
                        <tbody>
                            <tr>
                                <td>
                                    <span className="order-summary__coupon-btn" onClick={this.showCouponInput}>
                                        Have a Coupon Code?
                                    </span>
                                </td>
                                <td>
                                    <label className={classnames('order-summary__coupon-label', { 'visible': this.state.showCoupon })}>
                                        <input type="text"/>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/*submit*/}

                    <div className="order-summary__submit">
                        <Link to={'/airport_parking_booking'} className="btn-custom">
                            BOOK NOW
                        </Link>
                    </div>

                </form>



            </div>
        );
    }

}