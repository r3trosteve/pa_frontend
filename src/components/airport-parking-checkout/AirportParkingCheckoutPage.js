import React, { Component } from 'react';
import AirportParkingCheckoutPaymentDetails from 'components/airport-parking-checkout/PaymentDetails';
import AirportParkingCheckoutContactUs from 'components/airport-parking-checkout/ContactUs';
import OrderSummary from 'components/common/OrderSummary';

export default class AirportParkingCheckoutPage extends Component {
    render() {
        return (
          <div className="ap-checkout">
            <div className="container ap-checkout__container">

                <div className="ap-checkout__title">
                    <h4 className="title-small-mont">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        Secure booking (only takes 2-3 minutes)
                    </h4>
                    <h2 className="title-normal-mont">
                        Seascape Resort & Spa
                    </h2>

                </div>

                <div className="row ap-checkout__row">
                    <div className="col-md-7 ap-checkout__column">

                        <form className="ap-checkout__form card-custom">

                            {/*Payment details*/}
                            <AirportParkingCheckoutPaymentDetails />

                        </form>

                        {/*Contact Us*/}
                        <AirportParkingCheckoutContactUs />

                    </div>

                    <div className="col-md-5 ap-checkout__column ap-checkout__column--summary">

                        {/*Order Summary*/}
                        <OrderSummary />

                    </div>

                </div>
            </div>
          </div>
        );
    }
}