import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Form from './Form';
import Rate from './Rate';
import Tabs from './Tabs';
import GoogleMap from './GoogleMap';
import classnames from 'classnames';
import { fetchAirports } from '../../modules/airports';
import { fetchRates, sortRatesByDistance, sortRatesByLowPrice, sortRatesByHighPrice } from '../../modules/rates';
import { fetchSearch } from '../../modules/search';

class RatesPage extends Component {

    constructor() {
        super();

        this.state = {
            activeMobileTabList: true,
            activeMobileTabMap: false,
            ratesLoading: false,
            mapLoading: false
        };

        this.showLots = this.showLots.bind(this);

        this.mapTabActive = this.mapTabActive.bind(this);
        this.listTabActive = this.listTabActive.bind(this);
    }

    static fetchData(store, id) {
        return fetchRates(id);
    }

    componentDidMount() {
        this.props.dispatch(fetchAirports());
        const searchId = this.props.match.params.id;

        if (searchId) {
            this.props.dispatch(fetchSearch(searchId));
            this.props.dispatch(RatesPage.fetchData(null, searchId));
            this.setState({ ratesLoading: true });
        }

        setTimeout(() => {
            this.setState({ mapLoading: true });
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
    }

    mapTabActive() {
        this.setState({ activeMobileTabList: false, activeMobileTabMap: true });
    }

    listTabActive() {
        this.setState({ activeMobileTabList: true, activeMobileTabMap: false });
    }

    showLots(rates) {
        return (
			<div className="rates__row">

                {/*LEFT COLUMN*/}

				<div className="rates__column rates__column--content">

					<Form airports={this.props.airports} />

					{/*tabs*/}

					<Tabs
						listTabActive={this.listTabActive}
						mapTabActive={this.mapTabActive}
						activeMobileTabList={this.state.activeMobileTabList}
						activeMobileTabMap={this.state.activeMobileTabMap}
					/>

					{/*items*/}

					<div className={classnames('rates__items', { 'hidden-xs hidden-sm': this.state.activeMobileTabMap })}>

                        {/*sorting*/}

						<div className="rates__items-header">

							<div className="rates__items-header__title">
								<h3>Airport parking results</h3>
							</div>

                            {/*filters*/}

							<div className="dropdown">
								<span className="dropdown-toggle" data-toggle="dropdown">
									Filter Parking Types
									<i className="caret"></i>
								</span>
								<ul className="dropdown-menu filters">
                                    {rates.slice(0, 5).map(rate => {
                                        return (
											<li key={rate.id} onClick={() => alert('Not working yet, need real types')}>
                                                {rate.name}
											</li>
                                        );
                                    })}
								</ul>
							</div>

                            {/*sorting*/}

							<div className="dropdown">
								<span className="dropdown-toggle" data-toggle="dropdown">
									Sort by
									<i className="caret"></i>
								</span>
								<ul className="dropdown-menu sorting">
									<li onClick={() => alert('No rating provided for rates yet')}>
										Best Rating
									</li>
									<li onClick={() => this.props.dispatch(sortRatesByDistance(rates))}>
										Closest to Airport
									</li>
									<li onClick={() => this.props.dispatch(sortRatesByLowPrice(rates))}>
										Price: Low to High
									</li>
									<li onClick={() => this.props.dispatch(sortRatesByHighPrice(rates))}>
										Price: High to Low
									</li>
								</ul>
							</div>

						</div>
                        {rates.map(rate => {
                            return (
								<Rate
									key={rate.id}
									rate={rate}
								/>
                            );
                        })}
					</div>

				</div>

                {/*END LEFT COLUMN*/}

                {/*RIGHT COLUMN - MAP*/}

				<div className={classnames('rates__column rates__column--map', {'mobile-map': this.state.activeMobileTabList})}>

                    {this.state.mapLoading ? (

						<GoogleMap rates={rates}/>

					) : null}

				</div>

                {/*END RIGHT COLUMN*/}

			</div>
        );
    }

    render() {
        return (
			<div className="rates">

				<Helmet title="Results" />

				{this.state.ratesLoading ? this.showLots(this.props.rates) : 'Loading...'}

			</div>
        );
    }
}

RatesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    airports: PropTypes.array.isRequired,
    search: PropTypes.object.isRequired,
    rates: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        airports: state.airports.items,
        search: state.search.data,
        rates: state.rates.items
    };
};

export default connect(mapStateToProps)(RatesPage);