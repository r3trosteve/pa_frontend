import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class PrivacyPolicyPage extends Component {

    componentDidMount() {
        $(window).scrollTop(0); // jq to load page on top
    }

    render() {
        return (
          <div>

              <Helmet title="Privacy Policy" />

              <h1>Privacy Policy</h1>

          </div>
        );
    }
}