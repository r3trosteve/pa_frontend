import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Info from './Info';
import Overview from './Overview';
import Location from './Location';
import Details from './Details';
import Reviews from './Reviews';
import OrderSummary from '../common/OrderSummary';

export default class ParkingLotPage extends Component {

	componentDidMount() {

		// jquery for fixed summary

		let apdSummary = $('.order-summary');
		let apdSummaryTop = apdSummary.offset().top - 30;

		$(window).scroll(() => {
			let wScrollTop = $(window).scrollTop();

			if (wScrollTop >= apdSummaryTop) {
				apdSummary.css({
					position: 'fixed',
					top: '30px',
					'margin-top': '0'
				});
			} else {
				apdSummary.css({
					position: 'relative',
					'margin-top': '30px',
					top: 0
				});
			}
		});

		// end
	}

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
