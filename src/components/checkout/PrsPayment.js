import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PrsPayment extends Component {
    render() {

        console.log(process.env.NODE_ENV);
        
        if (process.env.NODE_ENV === 'production') {

            return (
                <div>
                    <br />
                    <h4 className="title-small">Checkout for this lot is not available yet.</h4>
                </div>
            );

        } else if (process.env.NODE_ENV === 'development') {

            return (
                <div>
                    <br />
                    <h4 className="title-small">Checkout for this lot is under development.</h4>
                </div>
            );

        }

    }
}