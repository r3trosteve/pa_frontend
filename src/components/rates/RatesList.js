import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Rate from './Rate';

export default class RatesList extends Component {

    constructor() {
        super();

        this.state = {
            activeMobileTabList: true,
            activeMobileTabMap: false,
            ratesLoading: false
        };

        this.mapTabActive = this.mapTabActive.bind(this);
        this.listTabActive = this.listTabActive.bind(this);
    }

    mapTabActive() {
        this.setState({ activeMobileTabList: false, activeMobileTabMap: true });
    }

    listTabActive() {
        this.setState({ activeMobileTabList: true, activeMobileTabMap: false });
    }

    render() {
        if (this.props.rates.length === 0) {
            return <h4>Sorry, nothing was found. Please try search again</h4>;
        } else {
            return (

                <div>

                    <ul className="rates__mobile-tabs visible-xs visible-sm">
                        <li
                            className={classnames('rates__mobile-tabs__list', {active: this.state.activeMobileTabList})}
                            onClick={this.listTabActive}
                        >
                                <span>
                                    <i className="fa fa-list" aria-hidden="true" />
                                    List View
                                </span>
                        </li>

                        <li
                            className={classnames('rates__mobile-tabs__map', {active: this.state.activeMobileTabMap})}
                            onClick={this.mapTabActive}
                        >
                            <span><i className="fa fa-map" aria-hidden="true" />Map</span>
                        </li>
                    </ul>

                    <div className="rates__items">

                        {this.props.rates.map(rate => {
                            return (
                                <Rate
                                    activeMobileTabMap={this.state.activeMobileTabMap}
                                    key={rate.id}
                                    rate={rate}
                                />
                            );
                        })}

                    </div>

                </div>

            );
        }
    }
}

RatesList.propTypes = {
    rates: PropTypes.array.isRequired
};