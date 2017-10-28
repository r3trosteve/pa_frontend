import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rate from './Rate';

export default class RatesList extends Component {
    render() {

        if (this.props.isFetching) {
            return (
                <div className="rates__loading">
                    <div className="rates__loading__card">
                        <i className="fa fa-spinner" aria-hidden="true"></i>
                        Loading results
                    </div>
                </div>
            );
        } else {
            if (this.props.rates.length !== 0) {
                return (
                    <div className="rates__items-container">
                        {this.props.rates.map(rate => {
                            return <Rate key={rate.id} rate={rate} />;
                        })}
                    </div>
                );
            } else {
                return <div><h2>Sorry, nothing was found...</h2></div>;
            }
        }

    }
}

RatesList.propTypes = {
    rates: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    // ratesUpdating: PropTypes.bool
};