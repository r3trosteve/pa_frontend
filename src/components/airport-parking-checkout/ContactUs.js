import React, { Component } from 'react';
import supportImg from 'assets/images/apch/support.png';

export default class AirportParkingCheckoutContactUs extends Component {
    render() {
        return (
            <div className="ap-checkout__contact-us">

                <div className="ap-checkout__contact-us__row">

                    <div className="ap-checkout__contact-us__image">
                        <img src={supportImg} alt="Support"/>
                    </div>

                    <div className="ap-checkout__contact-us__description">
                        <div className="ap-checkout__contact-us__card">
                            <h4>Contact us:</h4>
                            <p>Book online or call <a href="#" className="text-mont-bold"> 800-851-586 3</a> This call is free, 24 hours a day; 7 days a week.</p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}