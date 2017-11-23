import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class TermsConditionsPage extends Component {

    componentDidMount() {
        $(window).scrollTop(0); // jq to load page on top
    }

    render() {
        return (
            <div>

                <Helmet title="Terms Of Service" />

                <h1>Terms Of Service</h1>

            </div>
        );
    }
}