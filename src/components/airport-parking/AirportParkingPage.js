import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAirports } from 'actions/airports';
import { getParkingLots } from 'actions/parking-lots';
import AirportParkingLot from 'components/airport-parking/AirportParkingLot';
import AirportParkingSearchForm from 'components/airport-parking/AirportParkingSearchForm';
import GoogleMapReact from 'google-map-react';
import classnames from 'classnames';

// google map mark
const GoogleMapMark = (props) => <div><i className="ion-ios-location">${props.price}</i></div>;
// end

class AirportParkingResults extends Component {

	constructor() {
		super();

		this.showNothingFound = this.showNothingFound.bind(this);
		this.showLots = this.showLots.bind(this);
		this.mapTabActive = this.mapTabActive.bind(this);
		this.listTabActive = this.listTabActive.bind(this);

		this.state = {
			activeMobileTabList: true,
			activeMobileTabMap: false
		};

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
		this.props.getParkingLots(this.props.airportName);
	}

	showNothingFound() {

		return (
			<h2 className="airport-parking__nothing-found">
				<i className="fa fa-frown-o" aria-hidden="true"></i>
				Sorry, nothing was found...
			</h2>
		);

	}

	showLots(parkingLots) {
		return (
			<section className="airport-parking__lot-section">

				<div className="airport-parking__lot-section__row">

					<div className="airport-parking__lot-section__column-big">

						<AirportParkingSearchForm
							airports={this.props.airports}
							airportName={this.props.airportName}
							startDate={this.props.startDate}
							endDate={this.props.endDate}
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

						{parkingLots.map((parkingLot, index) => {
							return <AirportParkingLot
								activeMobileTabMap={this.state.activeMobileTabMap}
								key={index}
								parkingLot={parkingLot}
							/>;
						})}
					</div>

					{/*map*/}

					<div className={classnames('airport-parking__lot-section__column-small', { 'hidden-xs hidden-sm': this.state.activeMobileTabList })}>

						<div className="map" style={{width: '100%', height: '100vh'}}>
							<GoogleMapReact
								center={{lat: 33.640411, lng: -84.419853}}
								zoom={11}
							>
								{parkingLots.map((parkingLot, index) => {
									return <GoogleMapMark
										key={index}
										lat={parkingLot.lat}
										lng={parkingLot.lng}
										price={parkingLot.price}
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
		return (
			<div className="airport-parking">

				<div className="container airport-parking__container">

					{this.props.parkingLots.length === 0 ? this.showNothingFound() : this.showLots(this.props.parkingLots)}

				</div>

			</div>
		);
	}
}

AirportParkingResults.propTypes = {
	airportName: PropTypes.string.isRequired,
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	location: PropTypes.object.isRequired,
	loadAirports: PropTypes.func.isRequired,
	airports: PropTypes.array.isRequired,
	getParkingLots: PropTypes.func.isRequired,
	parkingLots: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
	return {
		airportName: ownProps.location.state.searchData.airportName,
		startDate: ownProps.location.state.searchData.startDate,
		endDate: ownProps.location.state.searchData.endDate,
		airports: state.airportsReducer,
		parkingLots: state.parkingLotsReducer
	};
};

export default connect(mapStateToProps, { loadAirports, getParkingLots })(AirportParkingResults);