import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import logoImg3x from '../../assets/images/logo/logo@3x.png';

import { resetPasswordRequest } from '../../modules/auth/auth';

class ForgotPassword extends Component {

	constructor() {
		super();

		this.state = {
			email: '',
			errors: {},
			isNewPwdRequseted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

		this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
			this.props.resetPasswordRequest({ email: this.state.email })
				.then(() => this.setState({ isNewPwdRequseted: true }));
		}
	}

	render() {
		return (

			<Modal
				className="auth-modal forgot-pwd-modal"
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
								<img src={logoImg3x} alt="Logo" />
								<h4 className="title">Reset Password</h4>
							</div>

							<p className="forgot-pwd-text">
								Enter the email address associated with your account,
								<br />
								we'll send you an email with reset password link.
							</p>

							<form onSubmit={this.handleSubmit}>

                                {
                                    this.state.isNewPwdRequseted ?
                                        (
											<div className="alert alert-success">
												<p>Please check your email. We sent you an email with reset password link.</p>
											</div>
                                        ) : null
                                }

								<label className={classnames('', { 'has-error': this.state.errors.email })}>
									Email
									<span className="error-text">{this.state.errors.email}</span>
									<input type="email" name="email" onChange={this.handleChange} />
								</label>

								{/*buttons*/}

								<div className="cta-buttons">
									<button type="submit" className="modal-btn-orange">
										Reset password
									</button>
									<a
										href="#"
										className="modal-btn-white"
										onClick={this.props.closeModal}
									>
										Back to log in
									</a>
								</div>
							</form>

							<div className="modal-terms-privacy">
								<p>
									Clicking Log in you accept
									<a href="#"> Terms of use </a>
									and
									<a href="#"> Privacy policy </a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		);
	}
}

ForgotPassword.propTypes = {
    resetPasswordRequest: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default connect(null, { resetPasswordRequest })(ForgotPassword);
