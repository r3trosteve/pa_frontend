import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './Form';
import RatesList from './RatesList';
import Tabs from './Tabs';
import Header from './Header';
import GoogleMap from './GoogleMap';

import { fetchAirports } from '../../modules/airports';
import { fetchRates, sortRatesByDistance, sortRatesByLowPrice, sortRatesByHighPrice } from '../../modules/rates';
import { fetchSearch } from '../../modules/search';

class RatesPage extends Component {

    constructor() {
        super();

        this.state = {
            activeMobileTabList: true,
            activeMobileTabMap: false,
            mapLoading: true,
            ratesLoading: true
        };

        this.mapTabActive = this.mapTabActive.bind(this);
        this.listTabActive = this.listTabActive.bind(this);
    }

    static fetchData(store, match) {
        return store.dispatch(fetchRates(match.params.id));
    }

    componentDidMount() {
        this.props.fetchAirports();

        if (this.props.match.params.id) {
            this.props.fetchSearch(this.props.match.params.id);

            setTimeout(() => {
                this.props.fetchRates(this.props.match.params.id);
                this.setState({ ratesLoading: false });
            }, 5000);
        }

        // jquery

        setTimeout(() => {
            this.setState({ mapLoading: false });
            fixedMapScroll();
        }, 500);

        let fixedMapScroll = function () {
            let wScrollTop = $(window).scrollTop();
            if(wScrollTop > 110) {
                $('.map-container').addClass('fixed-map');
            } else {
                $('.map-container').removeClass('fixed-map');
            }
        };

        $(window).scroll(() => {
            let wScrollTop = $(window).scrollTop();
            fixedMapScroll();
        });

        // end
    }

    mapTabActive() {
        this.setState({ activeMobileTabList: false, activeMobileTabMap: true });
    }

    listTabActive() {
        this.setState({ activeMobileTabList: true, activeMobileTabMap: false });
    }

    render() {
        return (
            <div className="rates">

                <Helmet title="Results" />

                <div className="rates__row">

                    {/*LEFT COLUMN*/}

                    <div className="rates__column rates__column--content">

                        <Form airports={this.props.airports} search={this.props.search} />

                        {/*tabs*/}

                        <Tabs
                            listTabActive={this.listTabActive}
                            mapTabActive={this.mapTabActive}
                            activeMobileTabList={this.state.activeMobileTabList}
                            activeMobileTabMap={this.state.activeMobileTabMap}
                        />

                        <div className={classnames('rates__items', { 'hidden-xs hidden-sm': this.state.activeMobileTabMap })}>

                            <Header
                                rates={this.props.rates}
                                sortRatesByDistance={this.props.sortRatesByDistance}
                                sortRatesByLowPrice={this.props.sortRatesByLowPrice}
                                sortRatesByHighPrice={this.props.sortRatesByHighPrice}
                            />

                            {/*rates*/}

                            <RatesList
                                rates={this.props.rates}
                                ratesLoading={this.state.ratesLoading}
                            />

                        </div>
                    </div>

                    {/*END LEFT COLUMN*/}

                    {/*RIGHT COLUMN - MAP*/}

                    <div className={classnames('rates__column rates__column--map', {'mobile-map': this.state.activeMobileTabList})}>

                        {!this.state.mapLoading ? (

                            <GoogleMap
                                search={this.props.search}
                                rates={this.props.rates}
                            />

                        ) : null}

                    </div>

                    {/*END RIGHT COLUMN*/}

                </div>
            </div>
        );
    }
}

RatesPage.propTypes = {
    match: PropTypes.object.isRequired,
    airports: PropTypes.array.isRequired,
    search: PropTypes.object.isRequired,
    rates: PropTypes.array
};

const mapStateToProps = (state) => ({
    airports: state.airports.items,
    search: state.search.data,
    rates: state.rates.items
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchAirports,
    fetchSearch,
    fetchRates,
    sortRatesByDistance,
    sortRatesByHighPrice,
    sortRatesByLowPrice
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RatesPage);