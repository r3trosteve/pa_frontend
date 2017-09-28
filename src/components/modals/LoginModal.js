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
			checkboxChecked: false
		};

		this.changeChecked = this.changeChecked.bind(this);

	}

	changeChecked() {
		this.setState({checkboxChecked: !this.state.checkboxChecked});
	}

	render() {
		return (

			<div className="modal auth-modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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

							<form>

								<label>
									Username / Email
									<input type="text"/>
								</label>

								<label>
									Password
									<input type="password"/>
								</label>

								<div className="divider">
									<label className={classnames('checkbox-label', { 'checked': this.state.checkboxChecked })}>
										<input type="checkbox" checked={this.state.checkboxChecked} onClick={this.changeChecked}/>
										Remember me
									</label>
									<a href="#">
										Forgot password?
									</a>
								</div>

								<label>
									<button type="submit" className="modal-btn-orange">Log in</button>
								</label>

							</form>

							<AuthModalFooter />

						</div>
					</div>
				</div>
			</div>

		);
	}

}