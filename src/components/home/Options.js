import React, { Component } from 'react';

// import images
import option113x from '../../assets/images/home/options/o-11@3x.png';
import option123x from '../../assets/images/home/options/o-12@3x.png';
import option133x from '../../assets/images/home/options/o-13@3x.png';
import option143x from '../../assets/images/home/options/o-14@3x.png';
import option23x from '../../assets/images/home/options/o-2@3x.png';
import option33x from '../../assets/images/home/options/o-3@3x.png';
// end

export default class HomeOptions extends Component {
	render() {
		return (
			<section className="home__options section-pad">

				<div className="container home__option__container">

					<div className="row home__options__row">

						{/*left*/}

						<div className="col-md-4 home__options__column">
							<div className="home__options__card">
								<div className="home__options__card-title">
									<span>01.</span>
									<h4>Book your travel</h4>
								</div>

								<p>Air, Hotel, Car, Cruise & more</p>

								<div className="home__options__card-images">
                                    <img src={option113x} alt="booking.com" width={122} height={21} />
									<img src={option123x} alt="Expedia" width={60} height={40} />
									<img src={option133x} alt="hotels.com" width={51} height={30} />
									<img src={option143x} alt="cruise.com" width={131} height={16} />
								</div>
							</div>
						</div>

						{/*center*/}

						<div className="col-md-4 home__options__column">
							<div className="home__options__card">
								<div className="home__options__card-title">
									<span>02.</span>
									<h4>Book airport parking</h4>
								</div>

								<p>Enter your booking confirmations and get instant savings</p>

								<div className="home__options__card-images">
                                    <img src={option23x} alt="Receipt" width={46} height={46} />
								</div>
							</div>
						</div>

						{/*right*/}

						<div className="col-md-4 home__options__column">
							<div className="home__options__card">
								<div className="home__options__card-title">
									<span>03.</span>
									<h4>Expense and track</h4>
								</div>

								<p>Quickly link your Tripit or Concur accounts</p>

								<div className="home__options__card-images">
                                    <img src={option33x} alt="Tripit" width={95} height={46} />
								</div>
							</div>
						</div>

					</div>

				</div>

			</section>
		);
	}
}