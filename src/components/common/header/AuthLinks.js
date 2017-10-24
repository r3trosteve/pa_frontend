import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AuthLinks extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/profile" className="navbar-shadowed">Username</Link>
                </li>
                <li>
                    <a href="#" onClick={this.props.handleLogout}>Logout</a>
                </li>
                <li>
                    <a href="tel:8008515863">800-851-5863</a>
                </li>
            </ul>
        );
    }
}

AuthLinks.propTypes = {
    handleLogout: PropTypes.func.isRequired
};