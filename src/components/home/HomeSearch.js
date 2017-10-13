import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeSearchForm from 'components/home/HomeSearchForm';
import BookTravel from 'components/common/BookTravel';

export default class HomeSearch extends Component {
	render() {
		return (
			<section className="home__search">

				<div className="home__search__overlay">

					<div className="container home__search__container">

						<div className="home__search__book-travel-container hidden-xs">
							<BookTravel />
						</div>

						<div className="home__search__title">
							<h1 className="title-big">
								When you have to leave your car at the airport, your only turn is Right Here!
							</h1>
							<h4>
								Save a bundle. Get turn by turn directions on your phone.
								<br/>
								Free shuttle to the airport. Get started
							</h4>
						</div>

						<HomeSearchForm airports={this.props.airports} />

					</div>

				</div>

			</section>
		);
	}
}

HomeSearch.propTypes = {
	airports: PropTypes.array.isRequired
};