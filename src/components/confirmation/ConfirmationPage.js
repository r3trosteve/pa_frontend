import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class ReservationPage extends Component {

    componentDidMount() {
        $(window).scrollTop(0); // jq to load page on top
    }

    render() {
        return (
            <div>

                <Helmet title="Confirmation" />

                <h1>Confirmation</h1>

            </div>
        );
    }
}