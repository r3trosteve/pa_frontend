import React, { Component } from 'react';
import logoImg3x from '../../assets/images/logo/logo@3x.png';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { resetPassword } from '../../modules/auth';
import 'url-search-params-polyfill';

class NewPasswordPage extends Component {

    constructor() {
        super();

        this.state = {
            password: '',
            passwordConfirm: '',
            errors: {},
            token: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const search = this.props.location.search;

        if (search.length > 0) {
            const params = new URLSearchParams(search);
            const token = params.get('perishable_token');
            console.log('token', token);
            this.setState({ token });
        }
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

        let errors = {};

        if (this.state.password === '') errors.password = " can't be empty";
        if (this.state.passwordConfirm === '') errors.passwordConfirm = " can't be empty";
        if (this.state.passwordConfirm !== '' && this.state.password !== this.state.passwordConfirm)
            errors.passwordConfirm = " doesn't match password above";

        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { token, password } = this.state;

            // api request
            this.props.resetPassword({
                perishable_token: token,
                password: password
            });
        }
    }

    render() {
        return (
            <div className="profile__new-password">
                <div className="container profile__new-password__container">
                    <div className="profile__new-password__card">
                        <div className="profile__new-password__card__header">
                            <img src={logoImg3x} alt="Logo"/>
                            <h4 className="title">Enter new password</h4>
                        </div>

                        <form onSubmit={this.handleSubmit} className="profile__new-password__form">

                            <label className={classnames('', { 'has-error': this.state.errors.password })}>
                                Enter new password
                                <span className="error-text">{this.state.errors.password}</span>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                />
                            </label>

                            <label className={classnames('', { 'has-error': this.state.errors.passwordConfirm })}>
                                Confirm new password
                                <span className="error-text">{this.state.errors.passwordConfirm}</span>
                                <input
                                    type="password"
                                    name="passwordConfirm"
                                    onChange={this.handleChange}
                                />
                            </label>

                            <button type="submit" className="btn-custom">
                                Submit
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        );
    }

}

export default connect(null, { resetPassword })(NewPasswordPage);