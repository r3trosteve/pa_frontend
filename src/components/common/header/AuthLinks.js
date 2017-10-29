import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AuthLinks extends Component {
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <span>
                        <Link to="/profile" className="navbar-shadowed">Hello, {this.props.user.name}</Link>
                    </span>
                </li>
                <li>
                    <span>
                        <a href="#" onClick={this.props.handleLogout}>Logout</a>
                    </span>
                </li>
                <li>
                    <span>
                        <a href="tel:8008515863">800-851-5863</a>
                    </span>
                </li>
            </ul>
        );
    }
}

AuthLinks.propTypes = {
    user: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired
};