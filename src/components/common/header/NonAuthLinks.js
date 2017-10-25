import React, { Component } from 'react';
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
                    <a href="tel:8008515863">800-851-5863</a>
                </li>
            </ul>
        );
    }
}