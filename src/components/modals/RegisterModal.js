import React, { Component } from 'react';
import RetinaImage from 'react-retina-image';
import logoImg from 'assets/images/logo/logo.png';
import logoImg2x from 'assets/images/logo/logo@2x.png';
import logoImg3x from 'assets/images/logo/logo@3x.png';
import AuthModalFooter from 'components/modals/AuthModalFooter';
import classnames from 'classnames';

export default class RegisterModal extends Component {

	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
			errors: {},
			travelerChecked: true,
			parkingLotChecked: false
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
		if (this.state.name === '') errors.name = " can't be empty";
		if (this.state.email === '') errors.email = " can't be empty";
		if (this.state.password === '') errors.password = " can't be empty";
		if (this.state.passwordConfirm === '') errors.passwordConfirm = " can't be empty";
		if (this.state.passwordConfirm !== '' && this.state.password !== this.state.passwordConfirm) errors.passwordConfirm = " doesn't match password above";
		this.setState({ errors });
		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
			const { email, password } = this.state;

			// api request
			alert('Auth request goes here');
		}
	}

	changeChecked() {
		this.setState({
			travelerChecked: !this.state.travelerChecked,
			parkingLotChecked: !this.state.parkingLotChecked
		});
	}

	render() {
		return (

			<div className="modal auth-modal" id="register-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
									Register
								</h4>
							</div>

							<form onSubmit={this.handleSubmit}>

								<label className={classnames('', { 'has-error': this.state.errors.name })}>
									Name
									<span className="error-text">{this.state.errors.name}</span>
									<input type="text" name="name" onChange={this.handleChange} />
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

								<div className="register-as">
									<div className="radio-title">Register as:</div>
									<label className={classnames('radio-label', { 'checked': this.state.travelerChecked })}>
										<input type="radio" name="reg-as" onChange={this.changeChecked} checked={this.state.travelerChecked}/>
										<span className="round"></span>
										Traveler
									</label>
									<label className={classnames('radio-label', { 'checked': this.state.parkingLotChecked })}>
										<input type="radio" name="reg-as" onChange={this.changeChecked} checked={this.state.parkingLotChecked}/>
										<span className="round"></span>
										Parking lot
									</label>
								</div>

								<label>
									<button type="submit" className="modal-btn-orange">Register</button>
								</label>

							</form>

							<AuthModalFooter
								authText="Already have an account?"
								modalTarget="#login-modal"
								linkText="Login"
							/>

						</div>
					</div>
				</div>
			</div>

		);
	}

}