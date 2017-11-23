import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AuthLinks extends Component {
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="#" onClick={this.props.openRegLogModal} className="navbar-shadowed">Join</Link>
                </li>
                <li>
                    <Link to="#" onClick={this.props.openLogModal} >Login</Link>
                </li>
                <li>
                    <a href="http://parkingaccess.helpsite.io/">Help/Faq</a>
                </li>
                <li>
                    <a href="tel:8008515863">800-851-5863</a>
                </li>
            </ul>
        );
    }
}

AuthLinks.propTypes = {
    openRegLogModal: PropTypes.func.isRequired,
    openLogModal: PropTypes.func.isRequired
};