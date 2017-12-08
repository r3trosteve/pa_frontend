import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import PnfPayment from './PnfPayment';
import PrsPayment from './PrsPayment';
import ContactUs from './ContactUs';
import OrderSummary from './OrderSummary';
import Private from '../profile/Private';

import { fetchReservation, fetchPaidReservation } from '../../modules/reservations/reservation';
import { requestPnfCheckout, requestPrsCheckout } from '../../modules/checkout/checkout';

class AirportParkingCheckoutPage extends Component {

    componentDidMount() {
        $(window).scrollTop(0); // jq to load page on top

		this.props.fetchReservation(this.props.match.params.id);
    }

	render() {

        // if (this.props.auth && this.props.auth.isAuthenticated) {

			const reservation = this.props.reservation;
			const rate = this.props.reservation && this.props.reservation.rate;

            return (
				<div className="ap-checkout">

					<Helmet title="Checkout" />

					<div className="container ap-checkout__container">

						<div className="row ap-checkout__row">

                            {/*left*/}

							<div className="col-md-7 ap-checkout__column ap-checkout__column--left">

                                {/*title*/}

								<div className="ap-checkout__title">
									<h4 className="title-small-mont hidden-xs">
										<i className="fa fa-lock" aria-hidden="true" />
										Secure booking (only takes 2-3 minutes)
									</h4>
									<h2 className="title-normal-mont">
                                        {rate && rate.parking_lot && rate.parking_lot.name}
									</h2>
								</div>

								{rate && rate.parking_lot && rate.parking_lot.payment_processor === 'wfg' ?
									<PnfPayment
										requestCheckout={this.props.requestPnfCheckout}
										reservation={reservation}
										checkout={this.props.checkout}
										fetchPaidReservation={this.props.fetchPaidReservation}
										paidReservation={this.props.paidReservation}
										auth={this.props.auth}
									/> :
									null
								}

								{rate && rate.parking_lot && rate.parking_lot.payment_processor === 'prs' ?
									<PrsPayment
                                        auth={this.props.auth}
                                        requestCheckout={this.props.requestPrsCheckout}
                                        reservation={reservation}
                                        checkoutError={this.props.checkoutError}
									/> :
									null
								}

							</div>

                            {/*right*/}

							<div className="col-md-5 ap-checkout__column ap-checkout__column--summary">
								<ContactUs />

								<OrderSummary reservation={reservation} />
							</div>

						</div>

					</div>
				</div>
            );

		// } else {
        //
		// 	return <Private title={"Checkout"} />;
        //
		// }
	}
}

AirportParkingCheckoutPage.propTypes = {
    match: PropTypes.object.isRequired,
    fetchReservation: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired,
    requestPnfCheckout: PropTypes.func.isRequired,
    requestPrsCheckout: PropTypes.func.isRequired,
	checkout: PropTypes.object,
	auth: PropTypes.object.isRequired,
    fetchPaidReservation: PropTypes.func.isRequired,
    paidReservation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	reservation: state.reservation.item,
    paidReservation: state.reservation.paidItem,
	checkout: state.checkout.item,
	checkoutError: state.checkout.error,
    auth: state.auth
});

export default connect(mapStateToProps, {
	fetchReservation,
	fetchPaidReservation,
    requestPnfCheckout,
    requestPrsCheckout
})(AirportParkingCheckoutPage);