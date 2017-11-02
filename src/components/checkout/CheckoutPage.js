import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import PaymentDetails from './PaymentDetails';
import ContactUs from './ContactUs';
// import OrderSummary from '../common/OrderSummary';

import { fetchReservation } from '../../modules/reservations/reservation';

class AirportParkingCheckoutPage extends Component {

    componentDidMount() {
        this.props.loadReservation(this.props.match.params.id);
    }

	render() {
		return (
			<div className="ap-checkout">

				<Helmet title="Checkout" />

				<div><pre>{JSON.stringify(this.props.reservation, null, 2) }</pre></div>

				<div className="container ap-checkout__container">

					<div className="row ap-checkout__row">

						{/*right*/}

						<div className="col-md-5 col-md-push-7 ap-checkout__column ap-checkout__column--summary">
							<ContactUs />

							{/*<OrderSummary />*/}
						</div>

						{/*left*/}

						<div className="col-md-7 col-md-pull-5 ap-checkout__column ap-checkout__column--left">
                            
							{/*title*/}

							<div className="ap-checkout__title">
								<h4 className="title-small-mont hidden-xs">
									<i className="fa fa-lock" aria-hidden="true" />
									Secure booking (only takes 2-3 minutes)
								</h4>
								<h2 className="title-normal-mont">Seascape Resort & Spa</h2>
							</div>

							<PaymentDetails />

						</div>
					</div>

				</div>
			</div>
		);
	}
}

AirportParkingCheckoutPage.propTypes = {
    match: PropTypes.object.isRequired,
    loadReservation: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ reservation: state.reservations.data });

export default connect(mapStateToProps, { loadReservation: fetchReservation })(AirportParkingCheckoutPage);