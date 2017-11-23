import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Private from '../profile/Private';

class ReservationPage extends Component {

    componentDidMount() {
        $(window).scrollTop(0); // jq to load page on top
    }

    render() {

        if (this.props.auth && this.props.auth.isAuthenticated) {

            return (
                <div>

                    <Helmet title="Confirmation" />

                    <h1>Confirmation</h1>

                </div>
            );

        } else {

            return <Private title={"Confirmation"} />;

        }

    }
}

ReservationPage.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(ReservationPage);