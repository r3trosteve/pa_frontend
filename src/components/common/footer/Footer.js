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

						<div className="col-md-2 footer__column">
							<NavLink exact to="/">
								<img src={logoImg3x} alt="Logo" width={117} height={38} />
							</NavLink>
						</div>

						<div className="col-md-8 footer__column footer__column--top-big text-center">
							<ul className="footer__list-nav">
								<li><a href="#airports">Our Airports</a></li>
								<li><a href="#airtports_information">Airport Information</a></li>
								<li><a href="#help">Help/Faq</a></li>
								<li><a href="#">Affiliates</a></li>
								<li><a href="#hotel_operators">Hotel Operators</a></li>
								<li><a href="#">Parking Operators</a></li>
							</ul>
						</div>

						<div className="col-md-2 footer__column text-right hidden-xs hidden-sm">
							<ul className="footer__list-social">
								<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
							</ul>
						</div>

					</div>

					<hr/>

					{/*bottom row*/}

					<div className="row footer__row footer__row--bottom">
						<div className="col-md-4 col-md-push-4 footer__column text-center">
							<BookTravel />
						</div>
						<div className="col-md-4 col-md-pull-4 footer__column">
							<span className="footer__address">
								New York, 12 Feesr Meadow Apt. 692
							</span>
						</div>
						<div className="col-md-4 footer__column text-right">
							<p className="footer__copyright">© Copyright parkingaccess.com 2017</p>
						</div>
					</div>

					<ul className="footer__list-social visible-sm visible-xs">
						<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
					</ul>

				</div>
			</footer>
		);
	}
}