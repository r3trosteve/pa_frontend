import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg3x from '../../../assets/images/logo/logo@3x.png';
import carIcon from '../../../assets/images/svg/car.svg';
import RegisterLogin from '../../modals/RegisterLogin';
import Login from '../../modals/Login';
import Register from '../../modals/Register';
import ForgotPassword from '../../modals/ForgotPassword';

export default class Header extends Component {
	render() {
		return (
			<header>

				<nav className="navbar navbar-default" role="navigation">
					<div className="container">

						<div className="navbar-header">

							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<i className="fa fa-bars" aria-hidden="true"></i>
							</button>

							<NavLink exact to="/" className="navbar-brand">
								<img src={logoImg3x} alt="Logo" />
							</NavLink>

						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

							<ul className="nav navbar-nav">
								<li>
									<NavLink exact to="/">
										<img src={carIcon} alt="Car" />
										Airport Parking
									</NavLink>
								</li>
							</ul>

							<ul className="nav navbar-nav navbar-right">
								<li>
									<a href="#join" className="navbar-join" data-toggle="modal" data-dismiss="modal" data-target="#register-login-modal">
										Join
									</a>
								</li>
								<li><a href="#login" data-toggle="modal" data-dismiss="modal" data-target="#login-modal">Login</a></li>
								<li><a href="tel:8008515863">800-851-5863</a></li>
							</ul>

						</div>

					</div>
				</nav>

				{/*modals*/}

				<RegisterLogin />
				<Login />
				<Register />
				<ForgotPassword />

			</header>
		);
	}
}