import React, { Component } from 'react';
import PropTypes from 'prop-types';

import preloader from '../../assets/images/preloader/loader.gif';

import Rate from './Rate';
import RateMobile from './RateMobile';

export default class RatesList extends Component {
    render() {

        if (this.props.isFetching) {

            return (
                <div className="rates__loading">
                    <img src={preloader} alt="Preloader"/>
                </div>
            );

        } else {

            if (this.props.rates.length !== 0) {
                return (
                    <div className="rates__items-container">

                        <div className="hidden-xs">
                            {
                                this.props.rates.map(rate => {
                                    return (
                                        <Rate key={rate.id} rate={rate} />
                                    );
                                })
                            }
                        </div>

                        <div className="visible-xs">
                            {
                                this.props.rates.map(rate => {
                                    return (
                                        <RateMobile key={rate.id} rate={rate} />
                                    );
                                })
                            }
                        </div>

                    </div>
                );

            } else {

                return (
                    <div className="rates__nothing-found">
                        Sorry, nothing was found...
                    </div>
                );

            }
        }

    }
}

RatesList.propTypes = {
    rates: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
};