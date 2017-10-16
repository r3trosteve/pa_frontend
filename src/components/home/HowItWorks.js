import React, { Component } from 'react';

// import images
import hiw113x from '../../assets/images/home/how-it-works/hiw-11@3x.png';
import hiw123x from '../../assets/images/home/how-it-works/hiw-12@3x.png';
import hiw213x from '../../assets/images/home/how-it-works/hiw-21@3x.png';
import hiw223x from '../../assets/images/home/how-it-works/hiw-22@3x.png';
import hiw313x from '../../assets/images/home/how-it-works/hiw-31@3x.png';
// end

export default class HowItWorks extends Component {
	render() {
		return (
			<section className="home__how-it-works section-pad">

				<div className="container home__how-it-works__container">

					<div className="home__how-it-works__title">
						<h2>Book your Travel as you Normally do and Earn Cash back and FREE Airport Parking</h2>
						<h4>How it Works</h4>
					</div>

					<div className="home__how-it-works__row">

						{/*left*/}

						<div className="home__how-it-works__column home__how-it-works__column--small">

							<div className="home__how-it-works__card">
								<div className="home__how-it-works__card-images home__how-it-works__card-images--doubles">
									<img src={hiw113x} alt="Guest" width={100} height={100} />
									<img className="hidden-md" src={hiw123x} alt="Hotel"  width={100} height={100} />
								</div>

								<div className="home__how-it-works__card-description">
									<div className="home__how-it-works__card-text">
										Guest Jane L
										<b> Booked her hotel </b>
										on booking.com
									</div>
								</div>
							</div>

						</div>

						{/*divider*/}

						<div className="home__how-it-works__column home__how-it-works__column--arrow">
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</div>

						{/*center*/}

						<div className="home__how-it-works__column home__how-it-works__column--big">

							<div className="home__how-it-works__card home__how-it-works__card--center">
								<div className="home__how-it-works__card-images home__how-it-works__card-images--doubles">
									<img src={hiw213x} alt="Parking"  width={100} height={100} />
									<img src={hiw223x} alt="Cash"  width={100} height={100} />
								</div>

								<div className="home__how-it-works__card-description">
									<div className="home__how-it-works__card-text">
										Returned to <b> parkingaccess.com </b>
										to book 6 days of parking $80.00 parking fee $40.00
										<b> cash reward $40.00 </b> > $80 Expense through Concur
									</div>
								</div>
							</div>

						</div>

						{/*divider*/}

						<div className="home__how-it-works__column home__how-it-works__column--arrow">
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</div>

						{/*right*/}

						<div className="home__how-it-works__column home__how-it-works__column--small">

							<div className="home__how-it-works__card">
								<div className="home__how-it-works__card-images">
									<img src={hiw313x} alt="PayPal"  width={100} height={100} />
								</div>

								<div className="home__how-it-works__card-description">
									<div className="home__how-it-works__card-text">
										Jane choose to <b> transfer $40 </b> to her personal Paypal
									</div>
								</div>
							</div>

						</div>

					</div>

				</div>

			</section>
		);
	}
}