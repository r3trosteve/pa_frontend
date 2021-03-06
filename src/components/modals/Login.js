import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import classnames from 'classnames';

import logoImg3x from '../../assets/images/logo/logo@3x.png';

import ModalFooter from './ModalFooter';

import { login } from '../../modules/auth/auth';


class Login extends Component {

	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			errors: {},
			checkboxChecked: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.changeChecked = this.changeChecked.bind(this);
	}

	handleChange(e) {
		if (this.state.errors[e.target.name]) {

			let errors = Object.assign({}, this.state.errors);
			delete errors[e.target.name];
			this.setState({
				[e.target.name]: e.target.value,
				errors
			});

		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	}

	handleSubmit(e) {

		e.preventDefault();

		let errors = {};

		if (this.state.email === '') errors.email = " can't be empty";
		if (this.state.password === '') errors.password = " can't be empty";

		this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
            const { email, password } = this.state;

            this.props.login({ email, password })
				.then(() => {
					if (!this.props.auth.error) {
                        this.props.closeModal();
                        this.setState({
                            email: '',
                            password: ''
                        });
					}
				});
		}

	}

	changeChecked() {
		this.setState({ checkboxChecked: !this.state.checkboxChecked });
	}

	render() {
		return (
			<Modal
				className="auth-modal"
				isOpen={this.props.isModalOpen}
				onRequestClose={this.props.closeModal}
				contentLabel="Modal"
			>
				<div className="dialog">
					<div className="content">
						<div className="body text-center">

							<button className="close" onClick={this.props.closeModal}>
								<i className="ion-ios-close" />
							</button>

							{/*header*/}

							<div className="header">
								<img src={logoImg3x} alt="Logo"/>
								<h4 className="title">Login</h4>
							</div>

							<form onSubmit={this.handleSubmit}>

                                {
                                    this.props.auth.error ?
                                        (
											<div className="alert alert-danger">
												<p>{this.props.auth.error}</p>
											</div>
                                        ) : null
                                }

								<label className={classnames('', {'has-error': this.state.errors.email})}>
									Username / Email
									<span className="error-text">{this.state.errors.email}</span>
									<input type="text" name="email" onChange={this.handleChange}/>
								</label>

								<label className={classnames('', {'has-error': this.state.errors.password})}>
									Password
									<span className="error-text">{this.state.errors.password}</span>
									<input type="password" name="password" onChange={this.handleChange}/>
								</label>

								<div className="divider">

									<label
										className={classnames('checkbox-label', {
											checked: this.state.checkboxChecked
										})}
									>
										<input
											type="checkbox"
											checked={this.state.checkboxChecked}
											onClick={this.changeChecked}
										/>
										Remember me

									</label>

									<a
										href="#"
										onClick={this.props.openForgPwdModal}
									>
										Forgot password?
									</a>

								</div>

								<label>
									<button type="submit" className="modal-btn-orange">
										Log in
									</button>
								</label>

							</form>

							<ModalFooter
								authText="Don't have an account?"
								modalTarget="#register-modal"
								linkText="Register"
								openNextModal={this.props.openRegModal}
								closeModal={this.props.closeModal}
							/>

						</div>
					</div>
				</div>
			</Modal>
		);
	}
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    openForgPwdModal: PropTypes.func.isRequired,
    openRegModal: PropTypes.func.isRequired,
	auth: PropTypes.object
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { login })(Login);
