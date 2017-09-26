import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAirports } from 'actions/airports';
import HomeSearch from 'components/home/HomeSearch';
import HomeOptions from 'components/home/HomeOptions';
import HomeHowItWorks from 'components/home/HomeHowItWorks';
import HomeTopAirports from 'components/home/HomeTopAirports';

class HomePage extends Component {

	componentDidMount() {
		this.props.loadAirports();
	}

	render() {
		return (
			<div className="home">
				<HomeSearch airports={this.props.airports} />
				<HomeOptions />
				<HomeHowItWorks />
				{/*<HomeTopAirports airports={this.props.airports} />*/}
			</div>
		);
	}

}

HomeTopAirports.propTypes = {
	loadAirports: PropTypes.func.isRequired,
	airports: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		airports: state.airportsReducer
	};
};

export default connect(mapStateToProps, { loadAirports })(HomePage);