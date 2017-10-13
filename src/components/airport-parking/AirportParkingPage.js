import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAirports } from 'actions/airports';
import { getRates } from 'actions/rates';
import AirportParkingLot from 'components/airport-parking/AirportParkingLot';
import AirportParkingSearchForm from 'components/airport-parking/AirportParkingSearchForm';
import GoogleMapReact from 'google-map-react';
import classnames from 'classnames';

// google map mark
const GoogleMapMark = (props) =>
	<div className="airport-parking__map-price">
		<span><i className="fa fa-caret-down" aria-hidden="true"></i>${props.price}</span>
	</div>;
// end

class AirportParkingResults extends Component {

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
			mapCenterLat: '',
			mapCenterLng: '',
            paginator: 1,
            itemsPerPage: 3
		};

	}
    loadMore() {
        const { paginator } = this.state
        this.setState({ paginator: paginator + 1 })
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

	componentDidMount() {
		this.props.loadAirports();
		this.props.getRates(this.props.searchData.id);
	}

	showNothingFound() {

		return (
			<h2 className="airport-parking__nothing-found">
				<i className="fa fa-frown-o" aria-hidden="true"></i>
				Sorry, nothing was found...
			</h2>
		);

	}

	showLots(rates, centerLat, centerLng) {

        const { paginator, itemsPerPage } = this.state;

		return (
			<section className="airport-parking__lot-section">

				<div className="airport-parking__lot-section__row">

					<div className="airport-parking__lot-section__column-big">

						<AirportParkingSearchForm
							airports={this.props.airports}
							searchData={this.props.searchData}
							getRates={this.props.getRates}
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

						{rates.slice(0, paginator * itemsPerPage).map((rate, index) => {
							return <AirportParkingLot
								activeMobileTabMap={this.state.activeMobileTabMap}
								key={index}
								rate={rate}
							/>;
						})}

						{/*load more button*/}

                        {paginator * itemsPerPage < rates.length
                            ? <span onClick={this.loadMore}>Show More</span>
                            : null
                        }
					</div>

					{/*map*/}

					<div className={classnames('airport-parking__lot-section__column-small', { 'hidden-xs hidden-sm': this.state.activeMobileTabList })}>

						<div className="map" style={{width: '100%', height: '100vh'}}>
							<GoogleMapReact
								center={{
									lat: centerLat,
									lng: centerLng
                                    // lat: parseFloat(rates[0].search.airport.location.latitude),
                                    // lng: parseFloat(rates[0].search.airport.location.longitude)
								}}
								zoom={7}
							>
								{rates.slice(0, paginator * itemsPerPage).map((rate, index) => {
									return <GoogleMapMark
										key={index}
										lat={rate.parking_lot.location.latitude}
										lng={rate.parking_lot.location.longitude}
										price={rate.price.total}
									/>;
								})}
							</GoogleMapReact>
						</div>

					</div>

				</div>

			</section>
		);
	}

	render() {

		let centerLat = parseFloat(this.props.searchData.airport.location.latitude);
		let centerLng = parseFloat(this.props.searchData.airport.location.longitude);

		console.log(this.props.searchData.airport.location);

		return (
			<div className="airport-parking">

				<div className="container airport-parking__container">

					{this.showLots(this.props.rates, centerLat, centerLng)}

					{/*{this.props.parkingLots.length === 0 ? this.showNothingFound() : this.showLots(this.props.parkingLots)}*/}

				</div>

			</div>
		);
	}
}

AirportParkingResults.propTypes = {
	loadAirports: PropTypes.func.isRequired,
	airports: PropTypes.array.isRequired,
    getRates: PropTypes.func.isRequired,
    rates: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
	return {
		searchData: ownProps.location.state.searchData,
		airports: state.airportsReducer,
        rates: state.ratesReducer
	};
};

export default connect(mapStateToProps, { loadAirports, getRates })(AirportParkingResults);