import React, { Component } from 'react';

export default class AuthModalFooter extends Component {

	render() {
		return (

			<div className="auth-modal-footer">
				<p>Or login with:</p>
				<div className="modal-social">
					Test text
				</div>

				<p>
					Don't have an account?
					<a href="#"> Register</a>
				</p>

				<div className="modal-terms-privacy">
					<p>
						Clicking Log in you accept
						<a href="#"> Terms of use </a>
						and
						<a href="#"> Privacy policy </a>
					</p>
				</div>

			</div>

		);
	}

}