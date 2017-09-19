import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import RetinaImage from 'react-retina-image'
import logoImg from 'assets/images/logo.png'
import logoImg2x from 'assets/images/logo@2x.png'
import logoImg3x from 'assets/images/logo@3x.png'

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">

				<div className="container footer__container">

					{/*top row*/}

					<div className="row footer__row footer__row--top">

						<div className="col-md-3 footer__column">
							<a href="https://www.parkingaccess.com/">
								<RetinaImage src={[ logoImg, logoImg2x, logoImg3x ]} alt="Logo" />
							</a>
						</div>

						<div className="col-md-6 footer__column">
							<ul className="footer__list-nav">
								<li><a href="#airports">Our Airports</a></li>
								<li><a href="#airtports-information">Airport Information</a></li>
								<li><a href="#help">Help/Faq</a></li>
								<li><a href="#">Affiliates</a></li>
								<li><a href="#hotel-operators">Hotel Operators</a></li>
								<li><a href="#">Parking Operators</a></li>
							</ul>
						</div>

						<div className="col-md-3 footer__column">
							<ul className="footer__list-social">
								<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
							</ul>
						</div>

					</div>

					{/*bottom row*/}

					<div className="row footer__row footer__row--bottom">
						<div className="col-md-4 footer__column">
							<span>
								New York, 12 Feesr Meadow Apt. 692
							</span>
						</div>
						<div className="col-md-4 footer__column">

						</div>
						<div className="col-md-4 footer__column">
							<p className="footer__copyright">© Copyright parkingaccess.com 2017</p>
						</div>
					</div>

				</div>

				<ul className="list-inline">

				</ul>
			</footer>
		)
	}
}