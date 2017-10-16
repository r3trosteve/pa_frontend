import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { fetchAirports } from '../../modules/airports';
import Search from './Search';
import Options from './Options';
import HowItWorks from './HowItWorks';
import TopAirports from './TopAirports';

class HomePage extends Component {

	static fetchData(store) {
		return fetchAirports();
	}
	
	componentDidMount() {
		this.props.dispatch(HomePage.fetchData());

		$(window).scroll(function () {
			let posYZero = 0;
			let wScrollTop = $(window).scrollTop();
		
			$('.home__search').css({
				'background-position-y': posYZero + wScrollTop/3
			});
		});
	}

	render() {
		return (
			<div className="home">

				<Helmet title="Home" />
				
				<Search airports={this.props.airports} />
				<Options />
				<HowItWorks />
				<TopAirports airports={this.props.airports} />

			</div>
		);
	}

}

HomePage.propTypes = {
	airports: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	airports: state.airports.items
});

export default connect(mapStateToProps)(HomePage);