import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
	render() {
		return (
			<div className="rates__items-header">

				<div className="rates__items-header__title">
					<h3>Airport parking results</h3>
				</div>

				{/*filters*/}

				<div className="dropdown">

					<span className="dropdown-toggle" data-toggle="dropdown">
						Filter Parking Types
						<i className="caret" />
					</span>

					<ul className="dropdown-menu filters">

						<li onClick={() => this.props.filterRates(this.props.rates, '')}>Show All</li>

                        {
                            this.props.rates.slice(0, 5).map((rate) => {
                                return (
									<li
										key={rate.id}
										onClick={() => this.props.filterRates(this.props.rates, rate.name)}
									>
                                        {rate.name}
									</li>
                                );
                            })
                        }

					</ul>

				</div>

				{/*sorting*/}

				<div className="dropdown">

					<span className="dropdown-toggle" data-toggle="dropdown">
						Sort by
						<i className="caret" />
					</span>

					<ul className="dropdown-menu sorting">
						<li onClick={() => alert('No rating provided for rates yet')}>Best Rating</li>
						<li onClick={() => this.props.sortRatesByDistance(this.props.filteredRates)}>Closest to Airport</li>
						<li onClick={() => this.props.sortRatesByLowPrice(this.props.filteredRates)}>Price: Low to High</li>
						<li onClick={() => this.props.sortRatesByHighPrice(this.props.filteredRates)}>Price: High to Low</li>
					</ul>

				</div>

			</div>
		);
	}
}

Header.propTypes = {
	rates: PropTypes.array.isRequired,
	sortRatesByDistance: PropTypes.func.isRequired,
	sortRatesByLowPrice: PropTypes.func.isRequired,
	sortRatesByHighPrice: PropTypes.func.isRequired,
	filterRates: PropTypes.func.isRequired,
    filteredRates: PropTypes.array.isRequired
};