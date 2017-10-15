import React, { Component } from 'react';
import AirportParkingCheckoutPaymentDetails from 'components/airport-parking-checkout/PaymentDetails';
import AirportParkingCheckoutContactUs from 'components/airport-parking-checkout/ContactUs';
import OrderSummary from 'components/common/OrderSummary';

export default class AirportParkingCheckoutPage extends Component {
    render() {
        return (
          <div className="ap-checkout">
            <div className="container ap-checkout__container">

                <div className="row ap-checkout__row">

                    {/*right*/}

                    <div className="col-md-5 col-md-push-7 ap-checkout__column ap-checkout__column--summary">

                        {/*Contact Us*/}
                        <AirportParkingCheckoutContactUs />

                        {/*Order Summary*/}
                        <OrderSummary />

                    </div>

                    {/*left*/}

                    <div className="col-md-7 col-md-pull-5 ap-checkout__column ap-checkout__column--left">

                        {/*title*/}

                        <div className="ap-checkout__title">
                            <h4 className="title-small-mont hidden-xs">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                                Secure booking (only takes 2-3 minutes)
                            </h4>
                            <h2 className="title-normal-mont">
                                Seascape Resort & Spa
                            </h2>

                        </div>

                        {/*Payment details*/}
                        <AirportParkingCheckoutPaymentDetails />

                    </div>

                </div>
            </div>
          </div>
        );
    }
}