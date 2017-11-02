import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import logoImg3x from '../../assets/images/logo/logo@3x.png';

export default class RegisterLogin extends Component {

	constructor() {
		super();

		this.handleOpenRegModal = this.handleOpenRegModal.bind(this);
		this.handleOpenLogModal = this.handleOpenLogModal.bind(this);
    }

	handleOpenLogModal() {
        this.props.openLogModal();
        this.props.closeModal();
	}

    handleOpenRegModal() {
        this.props.openRegModal();
        this.props.closeModal();
    }

	render() {
		return (

			<Modal
				className="auth-modal register-login-modal"
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
								<h4 className="title">Search results</h4>
							</div>

							<p>
								Rates are so low, only Members can see them.
								<br />
								Come join us. Signing up is Easy.
							</p>

                            {/*buttons*/}

							<div className="cta-buttons">
								<a
									href="#"
									className="modal-btn-orange"
									onClick={this.handleOpenRegModal}
								>
									Register
								</a>
								<a
									href="#"
									className="modal-btn-white"
									onClick={this.handleOpenLogModal}
								>
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
			</Modal>
		);
	}
}

RegisterLogin.propTypes = {
    openLogModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    openRegModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired
};