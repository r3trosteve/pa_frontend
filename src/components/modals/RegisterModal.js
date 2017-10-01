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
			travelerChecked: true,
			parkingLotChecked: false
		};
		this.changeChecked = this.changeChecked.bind(this);

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

								<label>
									Name
									<input type="text"/>
									{/*<span className="error-text">{this.state.errors.email}</span>*/}
								</label>

								<label>
									Email
									<input type="email" name="email"/>
									{/*<span className="error-text">{this.state.errors.password}</span>*/}
								</label>

								<label>
									Password
									<input type="password"/>
									{/*<span className="error-text">{this.state.errors.email}</span>*/}
								</label>

								<label>
									Confirm password
									<input type="email" name="email"/>
									{/*<span className="error-text">{this.state.errors.password}</span>*/}
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