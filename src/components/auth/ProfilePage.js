import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../modules/auth';

class ProfilePage extends Component {

    handleLogout(e) {
        e.preventDefault();
        console.log('logout');
        this.props.logout();
    }

    render() {

        const { isAuthenticated } = this.props.auth;

        return (
          <div style={{paddingTop: 100}}>
              <h1>Profile</h1>

              {isAuthenticated ? <h2>Logged in</h2> : <h2>Nope</h2>}

              <div><pre>{JSON.stringify(this.props.auth, null, 2) }</pre></div>

              <a href='#' onClick={this.handleLogout.bind(this)}>Logout</a>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { logout })(ProfilePage);