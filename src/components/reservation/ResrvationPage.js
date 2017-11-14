import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class ReservationPage extends Component {
    render() {
        return (
            <div className="profile__new-password">
                <div className="container profile__new-password__container">

                  <Helmet title="Reservation Info" />

                  <h1>Your Reservation Info</h1>

                </div>
            </div>
        );
    }
}