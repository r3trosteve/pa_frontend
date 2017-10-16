import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from './Form';
import Rate from './Rate';
import GoogleMapReact from 'google-map-react';
import classnames from 'classnames';
import { fetchAirports } from '../../modules/airports';
import { fetchRates } from '../../modules/rates';
import { fetchSearch } from '../../modules/search';

// google map mark

const GoogleMapMark = (props) =>
	<div className="airport-parking__map-price">
		<span><i className="fa fa-caret-down" aria-hidden="true"></i>${props.price}</span>
    </div>;
    
// end

class RatesPage extends Component {

	constructor() {
		super();

		this.showNothingFound = this.showNothingFound.bind(this);
		this.showLots = this.showLots.bind(this);
		this.mapTabActive = this.mapTabActive.bind(this);
		this.listTabActive = this.listTabActive.bind(this);

		this.loadMore = this.loadMore.bind(this);

		this.state = {
			activeMobileTabList: true,
			activeMobileTabMap: false,
			ratesLoading: false,
			mapLoading: false
		};

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
    
    loadMore() {
        const { paginator } = this.state;
        this.setState({ paginator: paginator + 1 });
    }

	mapTabActive() {
		this.setState({
			activeMobileTabList: false,
			activeMobileTabMap: true
		});
	}

	listTabActive() {
		this.setState({
			activeMobileTabList: true,
			activeMobileTabMap: false
		});
    }

	showNothingFound() {

		return (
			<h2 className="airport-parking__nothing-found">
				<i className="fa fa-frown-o" aria-hidden="true"></i>
				Sorry, nothing was found...
			</h2>
		);

	}

	showLots(rates) {

		return (
			<section className="airport-parking__lot-section">

				<div className="airport-parking__lot-section__row">

					<div className="airport-parking__lot-section__column-big">

						<Form
							airports={this.props.airports}
							search={this.props.search}
						/>

						{/*tabs*/}

						<ul className="airport-parking__mobile-tabs visible-xs visible-sm">
							<li
								className={classnames('airport-parking__mobile-tabs__list', { 'active': this.state.activeMobileTabList })}
								onClick={this.listTabActive}
							>
								<span>
									<i className="fa fa-list" aria-hidden="true"></i> List View
								</span>
							</li>
							<li
								className={classnames('airport-parking__mobile-tabs__map', { 'active': this.state.activeMobileTabMap })}
								onClick={this.mapTabActive}
							>
								<span>
									<i className="fa fa-map" aria-hidden="true"></i> Map
								</span>
							</li>
						</ul>

						{/*lots*/}

						<div className="airport-parking__lot-section__lots-container">

                            {rates.map((rate, index) => {
                                return <Rate
									activeMobileTabMap={this.state.activeMobileTabMap}
									key={index}
									rate={rate}
								/>;
							})}

						</div>

					</div>

					{/*map*/}

					<div className={classnames('airport-parking__lot-section__column-small', { 'mobile-map': this.state.activeMobileTabList })}>

                        { this.state.mapLoading ?

							<div className="map-container">
								<GoogleMapReact
									center={{
                                        lat: parseFloat(rates[0].search.airport.location.latitude),
										lng: parseFloat(rates[0].search.airport.location.longitude)
                                    }}
									zoom={7}
								>
                                    {rates.map((rate, index) => {
                                        return <GoogleMapMark
											key={index}
											lat={rate.parking_lot.location.latitude}
											lng={rate.parking_lot.location.longitude}
											price={rate.price.total}
										/>;
                                    })}
								</GoogleMapReact>
							</div>

                        : null }

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

					{ this.state.ratesLoading ? this.showLots(this.props.rates) : 'Loading...' }
					
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
	rates: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	return {
		airports: state.airports.items,
		search: state.search.data,
        rates: state.rates.items
	};
};


export default connect(mapStateToProps)(RatesPage);