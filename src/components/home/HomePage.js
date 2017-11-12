import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from './Search';
import Options from './Options';
import HowItWorks from './HowItWorks';
import TopAirports from './TopAirports';

import { fetchAirports } from '../../modules/airports/airports';

class HomePage extends Component {

	static fetchData(store) {
		return store.dispatch(fetchAirports());
	}

	componentDidMount() {
		this.props.fetchAirports();

        $(window).scrollTop(0); // jq to load page on top

		// jq parallax on home bg

		$(window).scroll(() => {
			const posYZero = 0;
            const wScrollTop = $(window).scrollTop();

			$('.home__search').css({
				'background-position-y': posYZero + wScrollTop / 3
			});
		});

		// end

		let calendarDropdown = $('.daterangepicker.dropdown-menu');

        calendarDropdown.append('<i class="ion-ios-close close-calendar-dropdown"></i>');
		$('.ion-ios-close.close-calendar-dropdown').click(function () {
            calendarDropdown.css({
				'display': 'none'
			});
        });

	}

	render() {
		return (
			<div className="home">



				<Helmet title="Home" />

				<Search />
				
				<Options />

				<HowItWorks />

				<TopAirports airports={this.props.airports} />

			</div>
		);
	}
}

HomePage.propTypes = {
    fetchAirports: PropTypes.func.isRequired,
	airports: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ airports: state.airports.items });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchAirports }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
