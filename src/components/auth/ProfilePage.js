import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfilePage extends Component {
    render() {

        return (
            <div style={{paddingTop: 100, height: '100vh'}}>

                <div className="container">

                    <h1>Profile</h1>

                </div>

            </div>
        );

    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(ProfilePage);