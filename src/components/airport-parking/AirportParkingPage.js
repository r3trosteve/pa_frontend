import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAirports } from 'actions/airports';
import { getParkingLots } from 'actions/parking-lots';
import AirportParkingLot from 'components/airport-parking/AirportParkingLot';
import AirportParkingSearchForm from 'components/airport-parking/AirportParkingSearchForm';

class AirportParkingResults extends Component {

	constructor() {
		super();

		this.showNothingFound = this.showNothingFound.bind(this);
		this.showLots = this.showLots.bind(this);

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
			parkingLots.map((parkingLot, index) => {
				return <AirportParkingLot key={index}  parkingLot={parkingLot} /> ;
			})
		);
	}

	render() {
		return (
			<div className="airport-parking">

				<div className="container airport-parking__container">

					<AirportParkingSearchForm
						airports={this.props.airports}
						airportName={this.props.airportName}
						startDate={this.props.startDate}
						endDate={this.props.endDate}
					/>

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