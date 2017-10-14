import React, { Component } from 'react';
import AirportParkingCheckoutPaymentDetails from 'components/airport-parking-checkout/PaymentDetails';

export default class AirportParkingCheckoutPage extends Component {
    render() {
        return (
          <div className="ap-checkout">
            <div className="container ap-checkout__container">
                <div className="row ap-checkout__row">
                    <div className="col-md-7 ap-checkout__column">

                        <div className="ap-checkout__title">
                            <h4 className="title-small-mont">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                                Secure booking (only takes 2-3 minutes)
                            </h4>
                            <h2 className="title-normal-mont">
                                Seascape Resort & Spa
                            </h2>

                            <form className="ap-checkout__form card-custom">

                                {/*Payment details*/}
                                <AirportParkingCheckoutPaymentDetails />

                            </form>

                        </div>

                    </div>

                    <div className="col-md-5 ap-checkout__column ap-checkout__column--summary">

                    </div>

                </div>
            </div>
          </div>
        );
    }
}