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
                                    You can compare other sites and parking at the airport, we guarantee low rates, everyday!
                                </p>
                            </div>

                        </div>

                        {/*2*/}

                        <div className="airport__benefits__column">

                            <div className="airport__benefits__card">
                                <h4>Save Time</h4>
                                <p className="text-bigger">
                                    Compare multiple parking providers at over 2000 airports world wide and reserve in minutes.
                                </p>
                            </div>
                        </div>

                        {/*3*/}

                        <div className="airport__benefits__column">

                            <div className="airport__benefits__card">
                                <h4>Save Stress</h4>
                                <p className="text-bigger">
                                    Save your spot by booking ahead, plus there's no risk with our free cancellation policy.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}