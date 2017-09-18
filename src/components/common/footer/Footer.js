import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import logoImg from 'assets/images/logo.png'

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<ul className="list-inline">

					<a href="https://www.parkingaccess.com/"><img src={logoImg} /></a>

					<a href="#airports">Our Airports</a>
					<a href="#airtports-information">Airport Information</a>
					<a href="#help">Help/Faq</a>
					<a href="#">Affiliates</a>
					<a href="#hotel-operators">Hotel Operators</a>
					<a href="#">Parking Operators</a>

					<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>

					<span>New York, 12 Feesr Meadow Apt. 692</span>
					<a href="#travel-partners">Book travel & Earn Cash</a>
					<span>© Copyright parkingaccess.com 2017</span>

				</ul>
			</footer>
		)
	}
}