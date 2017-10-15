import React, { Component } from 'react';
import RetinaImage from 'react-retina-image';
import logoImg from 'assets/images/logo/logo.png';
import logoImg2x from 'assets/images/logo/logo@2x.png';
import logoImg3x from 'assets/images/logo/logo@3x.png';
import classnames from 'classnames';

export default class ForgotPwdModal extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // validation
        let errors = {};
        if (this.state.email === '') errors.email = " can't be empty";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const email = this.state;

            // api request
            alert('Auth request goes here');
        }
    }

    render() {
        return (

            <div className="modal auth-modal" id="forgot-pwd-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                    Reset Password
                                </h4>
                            </div>

                            <p className="forgot-pwd-text">
                                Enter the email address associated with your account,
                                <br/>
                                we'll send you an email with reset password link.
                            </p>

                            <form onSubmit={this.handleSubmit}>

                                <label className={classnames('', { 'has-error': this.state.errors.email })}>
                                    Email
                                    <span className="error-text">{this.state.errors.email}</span>
                                    <input type="email" onChange={this.handleChange}/>
                                </label>

                                {/*buttons*/}
                                <div className="cta-buttons">
                                    <button type="submit" className="modal-btn-orange">
                                        Reset password
                                    </button>
                                    <a href="#" className="modal-btn-white" data-toggle="modal" data-target="#login-modal" data-dismiss="modal">
                                        Back to log in
                                    </a>
                                </div>

                            </form>

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