import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import RetinaImage from 'react-retina-image'
import logoImg from 'assets/images/logo.png'
import logoImg2x from 'assets/images/logo@2x.png'
import logoImg3x from 'assets/images/logo@3x.png'
import carIcon from 'assets/images/car.svg'
import bedIcon from 'assets/images/bed.svg'
import cityIcon from 'assets/images/city.svg'
import SubHeader from 'components/common/header/SubHeader'

export default class Header extends Component {
	render() {
		return (
			<header>

				<nav className="navbar navbar-default" role="navigation">
					<div className="container">

						<div className="navbar-header">

							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<i className="ion-android-menu"></i>
							</button>

							<NavLink exact to="/" className="navbar-brand">
								<RetinaImage src={[ logoImg, logoImg2x, logoImg3x ]} alt="Logo" />
							</NavLink>

						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

							<ul className="nav navbar-nav">
								<li>
									<NavLink exact to="/airport_parking">
										<img src={carIcon} alt="Car" />
										Airport Parking
									</NavLink>
								</li>
								<li>
									<NavLink exact to="/park_sleep_hotel_parking">
										<img src={bedIcon} alt="Bed" />
										Airports Hotels
									</NavLink>
								</li>
								<li>
									<NavLink exact to="/city_parking">
										<img src={cityIcon} alt="City" />
										City Parking
									</NavLink>
								</li>
							</ul>

							<ul className="nav navbar-nav navbar-right">
								<li><a href="#join" className="navbar-join">Join</a></li>
								<li><a href="#login">Login</a></li>
								<li><a href="tel:8008515863">800-851-5863</a></li>
							</ul>

						</div>

					</div>
				</nav>

				<SubHeader />

			</header>
		)
	}
}