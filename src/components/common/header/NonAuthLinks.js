import React, { Component } from 'react';

export default class AuthLinks extends Component {
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a
                        href="#join"
                        className="navbar-shadowed"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#register-login-modal"
                    >
                        Join
                    </a>
                </li>
                <li>
                    <a
                        href="#login"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#login-modal"
                    >
                        Login
                    </a>
                </li>
                <li>
                    <a href="tel:8008515863">800-851-5863</a>
                </li>
            </ul>
        );
    }
}