import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfilePage extends Component {
    render() {
        return (
            <div style={{paddingTop: 100}}>

                <h1>Profile</h1>

                <div><pre>{JSON.stringify(this.props.auth, null, 2) }</pre></div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(ProfilePage);