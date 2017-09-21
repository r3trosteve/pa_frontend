import React, { Component } from 'react';
import HomeSearch from 'components/home/HomeSearch';
import HomeOptions from 'components/home/HomeOptions';
import HomeHowItWorks from 'components/home/HomeHowItWorks';
import HomeTopAirports from 'components/home/HomeTopAirports';

export default class HomePage extends Component {

	render() {
		return (
			<div>
				<HomeSearch />
				<HomeOptions />
				<HomeHowItWorks />
				<HomeTopAirports />
			</div>
		);
	}

}