import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class AuthLinks extends Component {

    constructor() {
        super();

        this.handleProfileLogout = this.handleProfileLogout.bind(this);
    }

    handleProfileLogout(e) {
        this.props.history.push('/');
        this.props.handleLogout(e);
    }

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <span>
                        <Link to="/profile" className="navbar-shadowed"><b className="hello">Hello,</b> {this.props.user.name}</Link>
                    </span>
                </li>
                <li>
                    <span>
                        {
                            this.props.currentPathname === '/profile' || this.props.currentPathname.match(/\/checkout\/*/) ?
                                <a href="#" onClick={this.handleProfileLogout}>Logout</a> :
                                <a href="#" onClick={this.props.handleLogout}>Logout</a>
                        }
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
    handleLogout: PropTypes.func.isRequired,
    currentPathname: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(AuthLinks);