import React, { Component } from 'react';
import HomeSearchForm from 'components/home/HomeSearchForm';

export default class HomeSearch extends Component {
	render() {
		return (
			<section>

				<h1>When you have to leave your car at the airport, your only turn is Right Here!</h1>
				<h4>Save a bundle. Get turn by turn directions on your phone.</h4>

				<HomeSearchForm />

			</section>
		);
	}
}