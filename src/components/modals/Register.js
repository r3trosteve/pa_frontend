import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import logoImg3x from '../../assets/images/logo/logo@3x.png';

import ModalFooter from './ModalFooter';

import { signup, login } from '../../modules/auth/auth';

class Register extends Component {

    constructor() {
        super();

        this.state = {
            firstName: '',
			lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            errors: {},
            travelerChecked: true,
            isSignedUp: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

        if (this.state.firstName === '') errors.firstName = " can't be empty";
        if (this.state.lastName === '') errors.lastName = " can't be empty";
        if (this.state.email === '') errors.email = " can't be empty";
        if (this.state.password === '') errors.password = " can't be empty";
        if (this.state.password !== '' && this.state.password.length < 6) errors.password = " must contain at least 6 characters";
        if (this.state.passwordConfirm === '') errors.passwordConfirm = " can't be empty";
        if (this.state.passwordConfirm !== '' && this.state.password !== this.state.passwordConfirm)
            errors.passwordConfirm = " doesn't match password above";

        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { firstName, lastName, email, password } = this.state;

            this.props.signup({
				first_name: firstName,
				last_name: lastName,
				email,
				password
            })
                .then(() => {
                    if (!this.props.auth.error) {

						this.props.login({ email, password })
							.then(this.props.closeModal());
							
                    }
                });
        }
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
								<img src={logoImg3x} alt="Logo" />
								<h4 className="title">Register</h4>
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

								<label className={classnames('', { 'has-error': this.state.errors.firstName })}>
									First Name
									<span className="error-text">{this.state.errors.firstName}</span>
									<input type="text" name="firstName" onChange={this.handleChange} />
								</label>

								<label className={classnames('', { 'has-error': this.state.errors.lastName })}>
									Last Name
									<span className="error-text">{this.state.errors.lastName}</span>
									<input type="text" name="lastName" onChange={this.handleChange} />
								</label>

								<label className={classnames('', { 'has-error': this.state.errors.email })}>
									Email
									<span className="error-text">{this.state.errors.email}</span>
									<input type="email" name="email" onChange={this.handleChange} />
								</label>

								<label className={classnames('', { 'has-error': this.state.errors.password })}>
									Password
									<span className="error-text">{this.state.errors.password}</span>
									<input type="password" name="password" onChange={this.handleChange} />
								</label>

								<label className={classnames('', { 'has-error': this.state.errors.passwordConfirm })}>
									Confirm password
									<span className="error-text">{this.state.errors.passwordConfirm}</span>
									<input type="password" name="passwordConfirm" onChange={this.handleChange} />
								</label>

								<label>
									<button type="submit" className="modal-btn-orange">
										Register
									</button>
								</label>
							</form>

							<ModalFooter
								authText="Already have an account?"
								modalTarget="#login-modal"
								linkText="Login"
								openNextModal={this.props.openLogModal}
								closeModal={this.props.closeModal}
							/>

						</div>
					</div>
				</div>
			</Modal>
		);

    }
}

Register.propTypes = {
    signup: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    openLogModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { signup, login })(Register);