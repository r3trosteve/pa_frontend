import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import PaymentDetails from './PaymentDetails';
import ContactUs from './ContactUs';
import OrderSummary from './OrderSummary';

import { fetchReservation } from '../../modules/reservations/reservation';
import { requestCheckout } from '../../modules/checkout/checkout';

class AirportParkingCheckoutPage extends Component {

    componentDidMount() {
        $(window).scrollTop(0); // jq to load page on top

        this.props.fetchReservation(this.props.match.params.id);
    }

	render() {
		return (
			<div className="ap-checkout">

				<Helmet title="Checkout" />

				{/*<div><pre>{JSON.stringify(this.props.checkout, null, 2) }</pre></div>*/}

				<div className="container ap-checkout__container">

					<div className="row ap-checkout__row">

						{/*right*/}

						<div className="col-md-5 col-md-push-7 ap-checkout__column ap-checkout__column--summary">
							<ContactUs />

							<OrderSummary reservation={this.props.reservation} />
						</div>

						{/*left*/}

						<div className="col-md-7 col-md-pull-5 ap-checkout__column ap-checkout__column--left">
                            
							{/*title*/}

							<div className="ap-checkout__title">
								<h4 className="title-small-mont hidden-xs">
									<i className="fa fa-lock" aria-hidden="true" />
									Secure booking (only takes 2-3 minutes)
								</h4>
								<h2 className="title-normal-mont">
                                    {this.props.reservation.rate && this.props.reservation.rate.parking_lot.name}
								</h2>
							</div>

							<PaymentDetails
								requestCheckout={this.props.requestCheckout}
								reservation={this.props.reservation}
								checkout={this.props.checkout}
							/>

						</div>
					</div>

				</div>
			</div>
		);
	}
}

AirportParkingCheckoutPage.propTypes = {
    match: PropTypes.object.isRequired,
    fetchReservation: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired,
    requestCheckout: PropTypes.func.isRequired,
	checkout: PropTypes.object
};

const mapStateToProps = state => ({
	reservation: state.reservation.item,
	checkout: state.checkout.item
});

export default connect(mapStateToProps, { fetchReservation, requestCheckout })(AirportParkingCheckoutPage);