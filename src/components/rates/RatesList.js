import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rate from './Rate';

export default class RatesList extends Component {
    render() {

        if (this.props.isFetching) {
            return <div><h2>Loading results...</h2></div>;
        } else {
            if (this.props.rates.length !== 0) {
                return (
                    <div>
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