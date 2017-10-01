import React, { Component } from 'react';
import RetinaImage from 'react-retina-image';

// import images
import fb from 'assets/images/modals/facebook/fb.png';
import fb2x from 'assets/images/modals/facebook/fb@2x.png';
import fb3x from 'assets/images/modals/facebook/fb@3x.png';
import gp from 'assets/images/modals/google-plus/gp.png';
import gp2x from 'assets/images/modals/google-plus/gp@2x.png';
import gp3x from 'assets/images/modals/google-plus/gp@3x.png';
import tw from 'assets/images/modals/twitter/tw.png';
import tw2x from 'assets/images/modals/twitter/tw@2x.png';
import tw3x from 'assets/images/modals/twitter/tw@3x.png';
import concur from 'assets/images/modals/concur/concur.png';
import concur2x from 'assets/images/modals/concur/concur@2x.png';
import concur3x from 'assets/images/modals/concur/concur@3x.png';
import tripit from 'assets/images/modals/tripit/tripit.png';
import tripit2x from 'assets/images/modals/tripit/tripit@2x.png';
import tripit3x from 'assets/images/modals/tripit/tripit@3x.png';
// end

export default class AuthModalFooter extends Component {

	render() {
		return (

			<div className="auth-modal-footer">
				<p>Or login with:</p>
				<div className="modal-social">
					<div className="modal-social-img">
						<RetinaImage src={[ fb, fb2x, fb3x ]} alt="Facebook" />
					</div>
					<div className="modal-social-img">
						<RetinaImage src={[ gp, gp2x, gp3x ]} alt="Google Plus" />
					</div>
					<div className="modal-social-img">
						<RetinaImage src={[ tw, tw2x, tw3x ]} alt="Twitter" />
					</div>
					<div className="modal-social-img">
						<RetinaImage src={[ concur, concur2x, concur3x ]} alt="Concur" />
					</div>
					<div className="modal-social-img">
						<RetinaImage src={[ tripit, tripit2x, tripit3x ]} alt="TripIt" />
					</div>
				</div>

				<p>
					{this.props.authText}
					<a href="#" data-toggle="modal" data-target={this.props.modalTarget}> {this.props.linkText} </a>
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