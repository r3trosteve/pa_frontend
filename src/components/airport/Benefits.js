import React, { Component } from 'react';

export default class AirportPageBenefits extends Component {
    render() {
        return (
            <div className="airport__benefits section-pad text-center">

                <div className="container airport__benefits__container">

                    {/*title*/}

                    <div className="airport__benefits__title">
                        <h1 className="section-title">What Can You Save with <b>parkingaccess.com</b>?</h1>
                    </div>

                    <div className="airport__benefits__row">

                        {/*1*/}

                        <div className="airport__benefits__column">

                            <div className="airport__benefits__card">
                                <h4>Save Money</h4>
                                <p className="text-bigger">
                                    Save up to 70% off on our site compared
                                    to the cost of on-airport parking.
                                </p>
                            </div>

                        </div>

                        {/*2*/}

                        <div className="airport__benefits__column">

                            <div className="airport__benefits__card">
                                <h4>Save Time</h4>
                                <p className="text-bigger">
                                    It's easy to compare parking at all major
                                    airports. Booking a reservation is quick & simple!
                                </p>
                            </div>
                        </div>

                        {/*3*/}

                        <div className="airport__benefits__column">

                            <div className="airport__benefits__card">
                                <h4>Save Stress</h4>
                                <p className="text-bigger">
                                    Guarantee your parking spot by booking in advance.
                                    Can't make it? Cancellations are free.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}