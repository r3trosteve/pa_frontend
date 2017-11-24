import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logoImg3x from '../../../assets/images/logo/logo-dark@3x.png';

import BookTravel from '../BookTravel';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				
				<div className="container footer__container">

					{/*top row*/}

					<div className="row footer__row footer__row--top">
						<div className="col-md-2 footer__column footer__column--logo">

							<NavLink exact to="/">
								<img src={logoImg3x} alt="Logo" width={117} height={38} />
							</NavLink>

						</div>

						<div className="col-md-8 footer__column footer__column--top-big text-center">

							<ul className="footer__list-nav">

								<li>
									<NavLink to="/airports">Our Airports</NavLink>
								</li>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="http://parkingaccess.helpsite.io/">Help/Faq</a>
								</li>
								<li>
									<NavLink to="#">Terms of Service</NavLink>
								</li>
								<li>
									<NavLink to="#">Privacy Policy</NavLink>
								</li>
								<li>
									<a href="https://shuttlefare.typeform.com/to/YFXRs3">Convention Discounts</a>
								</li>
								<li>
									<a href="https://shuttlefare.typeform.com/to/M4BLXs">Corporate Discounts</a>
								</li>
								<li>
									<a href="#">International Airport Parking</a>
								</li>

							</ul>

						</div>

						<div className="col-md-2 footer__column text-right hidden-xs hidden-sm">

							<ul className="footer__list-social">

								<li>
									<a href="#">
										<i className="fa fa-facebook" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-twitter" aria-hidden="true" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-google-plus" aria-hidden="true" />
									</a>
								</li>

							</ul>

						</div>
					</div>

					<hr />

					{/*bottom row*/}

					<div className="row footer__row footer__row--bottom">

						<div className="col-md-4 col-md-push-4 footer__column text-center">
							<BookTravel />
						</div>
						<div className="col-md-4 col-md-pull-4 footer__column">
							<span className="footer__address">Made in Connecticut</span>
						</div>
						<div className="col-md-4 footer__column text-right">
							<p className="footer__copyright">© Copyright parkingaccess.com 2017</p>
						</div>

					</div>

					<ul className="footer__list-social visible-sm visible-xs">

						<li>
							<a href="#">
								<i className="fa fa-facebook" aria-hidden="true" />
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-twitter" aria-hidden="true" />
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-google-plus" aria-hidden="true" />
							</a>
						</li>

					</ul>

				</div>

			</footer>
		);
	}
}
