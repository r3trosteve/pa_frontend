import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fb3x from '../../assets/images/modals/facebook/fb@3x.png';
import gp3x from '../../assets/images/modals/google-plus/gp@3x.png';
import tw3x from '../../assets/images/modals/twitter/tw@3x.png';
import concur3x from '../../assets/images/modals/concur/concur@3x.png';
import tripit3x from '../../assets/images/modals/tripit/tripit@3x.png';

export default class ModalFooter extends Component {

	constructor() {
		super();

		this.handleOpenNextModal = this.handleOpenNextModal.bind(this);
	}

	handleOpenNextModal() {
		this.props.openNextModal();
		this.props.closeModal();
	}

	render() {
		return (
			<div className="auth-modal-footer">

				{/*<p>Or login with:</p>*/}

				{/*<div className="modal-social">*/}

					{/*<div className="modal-social-img">*/}
						{/*<img src={fb3x} alt="Facebook" />*/}
					{/*</div>*/}
					{/*<div className="modal-social-img">*/}
						{/*<img src={gp3x} alt="Google Plus" />*/}
					{/*</div>*/}
					{/*<div className="modal-social-img">*/}
						{/*<img src={tw3x} alt="Twitter" />*/}
					{/*</div>*/}
					{/*<div className="modal-social-img">*/}
						{/*<img src={concur3x} alt="Concur" />*/}
					{/*</div>*/}
					{/*<div className="modal-social-img">*/}
						{/*<img src={tripit3x} alt="TripIt" />*/}
					{/*</div>*/}

				{/*</div>*/}

				<p>

					{this.props.authText}

					<a href="#" onClick={this.handleOpenNextModal}>
						{' '}
						{this.props.linkText}{' '}
					</a>

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

ModalFooter.propTypes = {
	authText: PropTypes.string.isRequired,
	modalTarget: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
    openNextModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
};
