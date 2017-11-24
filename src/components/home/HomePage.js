import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from './Search';
import Options from './Options';
import HowItWorks from './HowItWorks';
import TopAirports from './TopAirports';
import LotsList from './LotsList';

import { fetchAirports } from '../../modules/airports/airports';
import { fetchLots } from '../../modules/lots/lots';

class HomePage extends Component {

	static fetchData(store) {
		// return store.dispatch(fetchAirports());
        return Promise.all([
            store.dispatch(fetchAirports()),
            store.dispatch(fetchLots())
        ]);
	}

	componentDidMount() {
        this.props.fetchAirports();
        this.props.fetchLots();

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

		$('.home__top-airports .show-more').click(function () {
			$(this).parent().parent().find('.airports-list__list-item a').toggleClass('visible');
            $(this).text(function(i, text){
                return text === 'Show less' ? 'Show more' : 'Show less';
            });
        });

	}

	render() {
		return (
			<div className="home">

				<Helmet title="ParkingAccess" />

				<Search />
				
				<Options />

				<HowItWorks />

				<TopAirports airports={this.props.airports} />

				<LotsList lots={this.props.lots} />

			</div>
		);
	}
}

HomePage.propTypes = {
    fetchAirports: PropTypes.func.isRequired,
	airports: PropTypes.array.isRequired,
    fetchLots: PropTypes.func.isRequired,
    lots: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	airports: state.airports.items,
	lots: state.lots.items
});
const mapDispatchToProps = dispatch => bindActionCreators({
	fetchAirports,
	fetchLots }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
