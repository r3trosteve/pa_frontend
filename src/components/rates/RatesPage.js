import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import Form from './Form';
import RatesList from './RatesList';
import Tabs from './Tabs';
import Header from './Header';
import GoogleMap from './GoogleMap';

import { fetchAirports } from '../../modules/airports/airports';
import { fetchRates, sortRatesByDistance, sortRatesByLowPrice, sortRatesByHighPrice, filterRates, sortRatesByRating } from '../../modules/rates/rates';
import { fetchSearch } from '../../modules/search/search';

class RatesPage extends Component {

    constructor() {
        super();

        this.state = {
            activeMobileTabList: true,
            activeMobileTabMap: false,
            mapLoading: true,
            ratesUpdating: false
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
            this.props.fetchRates(this.props.match.params.id);
        }

        // jq to load google map properly

        setTimeout(() => {
            this.setState({ mapLoading: false });
            fixedMapScroll();
        }, 500);

        let fixedMapScroll = () => {
            const wScrollTop = $(window).scrollTop();
            const posZero = 111;

            if (wScrollTop > 110) {
                $('.map-container').css('top', wScrollTop-posZero);
            } else {
                $('.map-container').css('top', '0');
            }
        };

        $(window).scroll(() => {
            fixedMapScroll();
        });

        // end

        $('.rates__m-search-info').click(function () {
           $('.rates__search-form').show();
        });

        $('.close-m-header').click(function () {
            $('.rates__search-form').hide();
        });

        let closeFormOnMobile = function () {
            let wWidth = $(window).width();
            if (wWidth < 767) {
                $('.rates__search-form .submit button').click(function () {
                    $('.rates__search-form').hide();
                });
            } else {
                $('.rates__search-form .submit button').click(function () {
                    $('.rates__search-form').show();
                });
                $('.rates__search-form').show();
            }
        };

        closeFormOnMobile();

        $(window).resize(function () {
            closeFormOnMobile();
        });

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

                        <div className="rates__m-search-info visible-xs">
                            <i className="ion-ios-search" />
                            <b>
                                {this.props.search && this.props.search.airport && this.props.search.airport.name}
                                {' '}
                                ({this.props.search && this.props.search.airport && this.props.search.airport.code})
                            </b>
                            <p>
                                {moment(this.props.search && this.props.search.arrive_at).format('MM/DD/YYYY hh:mm A')}
                                <i className="ion-ios-arrow-thin-right" />
                                {moment(this.props.search && this.props.search.exit_at).format('MM/DD/YYYY hh:mm A')}
                            </p>
                        </div>

                        <Form
                            airports={this.props.airports}
                            search={this.props.search}
                        />

                        {/*Tabs*/}

                        <Tabs
                            listTabActive={this.listTabActive}
                            mapTabActive={this.mapTabActive}
                            activeMobileTabList={this.state.activeMobileTabList}
                            activeMobileTabMap={this.state.activeMobileTabMap}
                        />

                        {/*Items*/}

                        <div className={classnames('rates__items', { 'hidden-xs hidden-sm': this.state.activeMobileTabMap })}>

                            {/*header*/}

                            <Header
                                rates={this.props.rates}
                                isFetching={this.props.ratesFetching}
                                filteredRates={this.props.filteredRates}
                                filterRates={this.props.filterRates}
                                sortRatesByDistance={this.props.sortRatesByDistance}
                                sortRatesByLowPrice={this.props.sortRatesByLowPrice}
                                sortRatesByHighPrice={this.props.sortRatesByHighPrice}
                                sortRatesByRating={this.props.sortRatesByRating}
                            />

                            {/*rates*/}

                            <RatesList
                                rates={this.props.filteredRates}
                                isFetching={this.props.ratesFetching}
                                ratesUpdating={this.state.ratesUpdating}
                            />

                        </div>
                    </div>

                    {/*END LEFT COLUMN*/}


                    {/*RIGHT COLUMN - MAP*/}

                    <div className={classnames('rates__column rates__column--map', {'mobile-map': this.state.activeMobileTabList})}>

                        {
                            !this.state.mapLoading ?
                                ( <GoogleMap
                                    search={this.props.search}
                                    rates={this.props.filteredRates}
                                /> ) :
                                null
                        }

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
    fetchSearch: PropTypes.func.isRequired,
    search: PropTypes.object.isRequired,
    fetchRates: PropTypes.func.isRequired,
    rates: PropTypes.array,
    ratesFetching: PropTypes.bool.isRequired,
    sortRatesByDistance: PropTypes.func.isRequired,
    sortRatesByLowPrice: PropTypes.func.isRequired,
    sortRatesByHighPrice: PropTypes.func.isRequired,
    filterRates: PropTypes.func.isRequired,
    filteredRates: PropTypes.array.isRequired,
    sortRatesByRating: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    airports: state.airports.items,
    search: state.search.data,
    rates: state.rates.items,
    ratesFetching: state.rates.isFetching,
    filteredRates: state.rates.filteredItems
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAirports,
    fetchSearch,
    fetchRates,
    sortRatesByDistance,
    sortRatesByHighPrice,
    sortRatesByLowPrice,
    filterRates,
    sortRatesByRating
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RatesPage);