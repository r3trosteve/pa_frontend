import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeSearch from 'components/home/HomeSearch';

class HomePage extends Component {
	render() {
		return (
			<div>
				<HomeSearch />
				{/*<AirportsList airports={this.props.airports} />*/}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		airports: state.airportsReducer
	};
};

export default connect(mapStateToProps)(HomePage);