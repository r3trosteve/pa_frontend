import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ProfileForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleProfileUpdate}>

                <label className={classnames('', { 'has-error': this.props.errors.name })}>
                    <input
                        type="name"
                        name="name"
                        placeholder="Name"
                        value={this.props.name}
                        onChange={this.props.handleChange}
                    />
                    <span className="error-text">{this.props.errors.name}</span>
                </label>

                <label className={classnames('', { 'has-error': this.props.errors.email })}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.props.email}
                        onChange={this.props.handleChange}
                    />
                    <span className="error-text">{this.props.errors.email}</span>
                </label>

                <button type="submit">Submit</button>

            </form>
        );
    }
}

ProfileForm.propTypes = {
    handleProfileUpdate: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired
};