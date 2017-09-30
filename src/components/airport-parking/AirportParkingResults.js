import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getParkingLots } from 'actions/parking-lots';
import AirportParkingLot from 'components/airport-parking/AirportParkingLot';

class AirportParkingResults extends Component {

	componentDidMount() {
		this.props.getParkingLots();
	}

	render() {
		return (
			<div style={{marginTop: 100}}>

				{this.props.parkingLots.map((parkingLot, index) => {
					return <AirportParkingLot key={index}  parkingLot={parkingLot} />;
				})}

			</div>
		);
	}
}

AirportParkingResults.propTypes = {
	getParkingLots: PropTypes.func.isRequired,
	parkingLots: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		parkingLots: state.parkingLotsReducer
	};
};

export default connect(mapStateToProps, { getParkingLots })(AirportParkingResults);