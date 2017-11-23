import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Private from '../profile/Private';
import Details from './Details';

import { fetchReservation } from '../../modules/reservations/reservation';

class ReservationPage extends Component {

    componentDidMount() {
        $(window).scrollTop(0); // jq to load page on top

        this.props.fetchReservation(this.props.match.params.id);
    }

    render() {

        if (this.props.auth && this.props.auth.isAuthenticated) {

            return (
                <div>

                    <Helmet title="Confirmation" />

                    <h1>Confirmation</h1>

                    <Details reservation={this.props.reservation} />

                </div>
            );

        } else {

            return <Private title={"Confirmation"} />;

        }

    }
}

ReservationPage.propTypes = {
    auth: PropTypes.object.isRequired,
    fetchReservation: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    reservation: state.reservation.item
});

export default connect(mapStateToProps, { fetchReservation })(ReservationPage);