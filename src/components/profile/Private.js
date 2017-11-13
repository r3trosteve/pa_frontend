import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default class Private extends Component {
    render() {
        return (
            <div className="profile">

                <Helmet title={this.props.title} />

                <div className="container profile__container">
                    <h2 className="profile__not-logged-in text-center title-normal-mont">
                        <i className="ion-ios-locked" />
                        You need to be logged in to access this page.
                    </h2>
                </div>
            </div>
        );
    }
}

Private.propTypes = {
  title: PropTypes.string.isRequired
};