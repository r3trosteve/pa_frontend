import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg3x from '../../../assets/images/logo/logo@3x.png';
import carIcon from '../../../assets/images/svg/car.svg';
import RegisterLogin from '../../modals/RegisterLogin';
import Login from '../../modals/Login';
import Register from '../../modals/Register';
import ForgotPassword from '../../modals/ForgotPassword';
import { connect } from 'react-redux';
import { logout } from '../../../modules/auth';
import NonAuthLinks from './NonAuthLinks';
import AuthLinks from './AuthLinks';

class Header extends Component {

	constructor() {
		super();

		this.state = {
            isRegLogModalOpen: false,
            isLogModalOpen: false,
            isRegModalOpen: false,
            isForgPwdOpen: false
		};

		this.handleLogout = this.handleLogout.bind(this);

        this.openRegLogModal = this.openRegLogModal.bind(this);
        this.openLogModal = this.openLogModal.bind(this);
        this.openRegModal = this.openRegModal.bind(this);
        this.openForgPwdModal = this.openForgPwdModal.bind(this);
        this.closeRegLogModal = this.closeRegLogModal.bind(this);
        this.closeLogModal = this.closeLogModal.bind(this);
        this.closeRegModal = this.closeRegModal.bind(this);
        this.closeForgPwdModal = this.closeForgPwdModal.bind(this);
	}

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    openRegLogModal() { this.setState({ isRegLogModalOpen: true }); }
    openLogModal() { this.setState({ isLogModalOpen: true }); }
    openRegModal() { this.setState({ isRegModalOpen: true }); }
    openForgPwdModal() { this.setState({ isForgPwdOpen: true }); }
    closeRegLogModal() { this.setState({ isRegLogModalOpen: false }); }
    closeLogModal() { this.setState({ isLogModalOpen: false }); }
    closeRegModal() { this.setState({ isRegModalOpen: false }); }
    closeForgPwdModal() { this.setState({ isForgPwdOpen: false }); }

	render() {
		return (
			<header>

				<nav className="navbar navbar-default" role="navigation">

					<div className="container">
						<div className="navbar-header">
							<button
								type="button"
								className="navbar-toggle"
								data-toggle="collapse"
								data-target="#bs-example-navbar-collapse-1"
							>
								<i className="fa fa-bars" aria-hidden="true" />
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

							{this.props.auth.isAuthenticated ?
								<AuthLinks
									handleLogout={this.handleLogout}
								/> :
								<NonAuthLinks
									openRegLogModal={this.openRegLogModal}
									openLogModal={this.openLogModal}
								/>
							}

						</div>
					</div>
					
				</nav>

				{/*modals*/}

				<RegisterLogin
					isModalOpen={this.state.isRegLogModalOpen}
					closeModal={this.closeRegLogModal}
					openLogModal={this.openLogModal}
					openRegModal={this.openRegModal}
				/>

				<Login
					isModalOpen={this.state.isLogModalOpen}
					closeModal={this.closeLogModal}
					openRegModal={this.openRegModal}
					openForgPwdModal={this.openForgPwdModal}
				/>

				<Register
					isModalOpen={this.state.isRegModalOpen}
					closeModal={this.closeRegModal}
					openLogModal={this.openLogModal}
				/>

				<ForgotPassword
					isModalOpen={this.state.isForgPwdOpen}
					closeModal={this.closeForgPwdModal}
					openLogModal={this.openLogModal}
				/>

			</header>
		);
	}

}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { logout })(Header);