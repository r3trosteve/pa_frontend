import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Form from './Form';
import Rate from './Rate';
import GoogleMapReact from 'google-map-react';
import GoogleMapMark from './GoogleMapMark';
import classnames from 'classnames';
import { fetchAirports } from '../../modules/airports';
import { fetchRates, sortRatesByDistance, sortRatesByLowPrice, sortRatesByHighPrice, filterRatesByTypes } from '../../modules/rates';
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
		}, 500);
	}

	mapTabActive() {
		this.setState({ activeMobileTabList: false, activeMobileTabMap: true });
	}

	listTabActive() {
		this.setState({ activeMobileTabList: true, activeMobileTabMap: false });
	}

	showLots(rates) {
		return (
			<section className="airport-parking__lot-section">
				<div className="airport-parking__lot-section__row">
					<div className="airport-parking__lot-section__column-big">

						<Form airports={this.props.airports} search={this.props.search} />

						{/*tabs*/}

						<ul className="airport-parking__mobile-tabs visible-xs visible-sm">
							<li
								className={classnames('airport-parking__mobile-tabs__list', {
									active: this.state.activeMobileTabList
								})}
								onClick={this.listTabActive}
							>
								<span>
									<i className="fa fa-list" aria-hidden="true" />
									List View
								</span>
							</li>
							<li
								className={classnames('airport-parking__mobile-tabs__map', {
									active: this.state.activeMobileTabMap
								})}
								onClick={this.mapTabActive}
							>
								<span>
									<i className="fa fa-map" aria-hidden="true" />
									Map
								</span>
							</li>
						</ul>

						{/*sorting*/}

						<div>
							Filter Parking Types
							<div>
								{rates.slice(0, 5).map(rate => {
									return (
										<span
											key={rate.id}
											onClick={() => this.props.dispatch(filterRatesByTypes(rates, rate.name))}
										>
											{rate.name}
										</span>
									);
								})}
							</div>
						</div>

						<div>
							Sort By
							<div>
								<span onClick={() => alert('No rating provided for rates yet')}>
									Best Rating
								</span>
								<span onClick={() => this.props.dispatch(sortRatesByDistance(rates))}>
									Closest to Airport
								</span>
								<span onClick={() => this.props.dispatch(sortRatesByLowPrice(rates))}>
									Price: Low to High
								</span>
								<span onClick={() => this.props.dispatch(sortRatesByHighPrice(rates))}>
									Price: High to Low
								</span>
							</div>
						</div>

                        {/*lots*/}
                        
						<div className="airport-parking__lot-section__lots-container">
							{rates.map(rate => {
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

					{/*map*/}

					<div
						className={classnames('airport-parking__lot-section__column-small', {
							'mobile-map': this.state.activeMobileTabList
						})}
					>
						{this.state.mapLoading ? (
							<div className="map-container">

								<GoogleMapReact
									center={{
										lat: parseFloat(rates[0].search.airport.location.latitude),
										lng: parseFloat(rates[0].search.airport.location.longitude)
									}}
									zoom={7}
								>
									{rates.map(rate => {
										return (
											<GoogleMapMark
												key={rate.id}
												lat={rate.parking_lot.location.latitude}
												lng={rate.parking_lot.location.longitude}
												rate={rate}
											/>
										);
									})}
								</GoogleMapReact>

							</div>
						) : null}
					</div>
				</div>
			</section>
		);
	}

	render() {
		return (
			<div className="airport-parking">

				<Helmet title="Results" />

				<div className="container airport-parking__container">
					{this.state.ratesLoading ? this.showLots(this.props.rates) : 'Loading...'}
				</div>
                
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
