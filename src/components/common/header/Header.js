import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from 'assets/images/logo.png'

export default class Header extends Component {
	render() {
		return (
			<header>
				<ul className="list-inline">

					<NavLink exact to="/" activeClassName="active"><img src={logoImg} /></NavLink>

					<NavLink exact to="/airport_parking.html" activeClassName="active">Airport Parking</NavLink>
					<NavLink exact to="/park_sleep_hotel_parking" activeClassName="active">Airports Hotels</NavLink>
					<NavLink exact to="/city_parking" activeClassName="active">City Parking</NavLink>

					<a href="#travel-partners">Book travel & Earn Cash</a>
					<a href="#join">Join</a>
					<a href="#login">Login</a>
					<a href="tel:8008515863">800-851-5863</a>

				</ul>
			</header>
		)
	}
}