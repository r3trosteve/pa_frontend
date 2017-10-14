import React, { Component } from 'react';
import RetinaImage from 'react-retina-image';
import logoImg from 'assets/images/logo/logo.png';
import logoImg2x from 'assets/images/logo/logo@2x.png';
import logoImg3x from 'assets/images/logo/logo@3x.png';
import AuthModalFooter from 'components/modals/AuthModalFooter';
import classnames from 'classnames';

export default class LoginModal extends Component {

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

		// validation
		let errors = {};
		if (this.state.email === '') errors.email = " can't be empty";
		if (this.state.password === '') errors.password = " can't be empty";
		this.setState({ errors });
		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
			const { email, password } = this.state;

			// api request
			alert('Auth request goes here');
		}
	}

	changeChecked() {
		this.setState({checkboxChecked: !this.state.checkboxChecked});
	}

	render() {
		return (

			<div className="modal auth-modal" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body text-center">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
								<i className="ion-ios-close"></i>
							</button>

							{/*header*/}
							<div className="header-modal">
								<RetinaImage src={[ logoImg, logoImg2x, logoImg3x ]} alt="Logo" />
								<h4 className="title">
									Login
								</h4>
							</div>

							<form onSubmit={this.handleSubmit}>

								<label className={classnames('', { 'has-error': this.state.errors.email })}>
									Username / Email
									<span className="error-text">{this.state.errors.email}</span>
									<input type="text" name="email" onChange={this.handleChange} />

								</label>

								<label className={classnames('', { 'has-error': this.state.errors.password })}>
									Password
									<span className="error-text">{this.state.errors.password}</span>
									<input type="password" name="password" onChange={this.handleChange} />
								</label>

								<div className="divider">
									<label className={classnames('checkbox-label', { 'checked': this.state.checkboxChecked })}>
										<input type="checkbox" checked={this.state.checkboxChecked} onClick={this.changeChecked}/>
										Remember me
									</label>
									<a href="#" data-toggle="modal" data-dismiss="modal" data-target="#forgot-pwd-modal">
										Forgot password?
									</a>
								</div>

								<label>
									<button type="submit" className="modal-btn-orange">Log in</button>
								</label>

							</form>

							<AuthModalFooter
								authText="Don't have an account?"
								modalTarget="#register-modal"
								linkText="Register"
							/>

						</div>
					</div>
				</div>
			</div>

		);
	}

}