import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Info from './Info';
import Overview from './Overview';
import Location from './Location';
import Details from './Details';
import Reviews from './Reviews';
import OrderSummary from '../common/OrderSummary';

export default class ParkingLotPage extends Component {

	render() {
		return (
			<div className="ap-details">

				<Helmet title="Parking Lot" />

				<div className="container ap-details__container">

					<div className="row ap-details__row">

						{/*left column*/}

						<div className="col-md-7 ap-details__column">

							<Info />

							<Overview />

							<Location />

							<Details />

							<Reviews />
                            
						</div>

						{/*right column*/}

						<div className="col-md-5 ap-details__column ap-details__column--summary">
							<OrderSummary />
						</div>

					</div>

				</div>
			</div>
		);
	}
}
