import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PasswordForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handlePasswordUpdate}>

                <label className={classnames('', { 'has-error': this.props.errors.password })}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter new password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                    />
                    <span className="error-text">{this.props.errors.password}</span>
                </label>

                <label className={classnames('', { 'has-error': this.props.errors.confirmPassword })}>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm new password"
                        value={this.props.confirmPassword}
                        onChange={this.props.handleChange}
                    />
                    <span className="error-text">{this.props.errors.confirmPassword}</span>
                </label>

                <button type="submit">Submit</button>

            </form>
        );
    }
}

PasswordForm.propTypes = {
    handlePasswordUpdate: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired
};