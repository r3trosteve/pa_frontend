import React, { Component } from 'react';
import AirportParkingDetailsInfo from 'components/airport-parking-details/Info';
import AirportParkingDetailsOverview from 'components/airport-parking-details/Overview';
import AirportParkingDetailsLocation from 'components/airport-parking-details/Location';
import AirportParkingDetailsDetails from 'components/airport-parking-details/Details';
import AirportParkingDetailsReviews from 'components/airport-parking-details/Reviews';
import AirportParkingDetailsSummary from 'components/airport-parking-details/Summary';



export default class AirportParkingDetailsPage extends Component {

    componentDidMount() {

        // jquery for fixed summary

		let apdSummary = $('.ap-details__summary');
		let apdSummaryTop = apdSummary.offset().top - 20;

        $(window).scroll(() => {

            let wScrollTop = $(window).scrollTop();

            if (wScrollTop >= apdSummaryTop) {
                apdSummary.css({
                    'position': 'fixed',
                    'top': '20px',
                    'margin-top': '0'
                });
            } else {
                apdSummary.css({
                    'position': 'relative',
                    'margin-top': '30px',
                    'top': 0
                });
            }
        });

        const dynamicWidth = () => {
            let apdSummaryColumnW = $('.ap-details__column--summary').width();
            apdSummary.css({
                'width': apdSummaryColumnW
            });
        };

        dynamicWidth();

        $(window).resize(function () {
            dynamicWidth();
        });

        // end

    }

	render() {
		return (
			<div className="ap-details">
				<div className="container ap-details__container">
					<div className="row ap-details__row">

                        {/*left column*/}

						<div className="col-md-7 ap-details__column">

							{/*Info*/}
							<AirportParkingDetailsInfo />

                            {/*Overview*/}
                            <AirportParkingDetailsOverview />

                            {/*Location*/}
							<AirportParkingDetailsLocation />

							{/*Details*/}
							<AirportParkingDetailsDetails />

                            {/*Reviews*/}
							<AirportParkingDetailsReviews />

						</div>

                        {/*right column*/}

						<div className="col-md-5 ap-details__column ap-details__column--summary">

                            {/*Summary*/}
							<AirportParkingDetailsSummary />

						</div>

					</div>
				</div>
			</div>
		);
	}

}