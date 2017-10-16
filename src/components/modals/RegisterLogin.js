import React, { Component } from 'react';
import logoImg3x from '../../assets/images/logo/logo@3x.png';

export default class RegisterLoginModal extends Component {

	render() {
		return (

			<div className="modal auth-modal" id="register-login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body text-center">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
								<i className="ion-ios-close"></i>
							</button>

							{/*header*/}

							<div className="header-modal">
								<img src={logoImg3x} alt="Logo" />
								<h4 className="title">
									Search results
								</h4>
							</div>

							<p>
								Rates are so low, only Members can see them.
								<br/>
								Come join us. Signing up is Easy.
							</p>

							{/*buttons*/}
							
							<div className="cta-buttons">
								<a href="#" className="modal-btn-orange" data-toggle="modal" data-target="#register-modal" data-dismiss="modal">
									Register
								</a>
								<a href="#" className="modal-btn-white" data-toggle="modal" data-target="#login-modal" data-dismiss="modal">
									Log in
								</a>
							</div>

							<p>to view best offers</p>

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
			</div>

		);
	}

}