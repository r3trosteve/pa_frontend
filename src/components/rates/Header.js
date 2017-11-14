import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {

    componentWillUpdate() {
        if (!this.props.isFetching) {
            // jq for header active links
            $('.dropdown-menu li').click(function () {
                $(this).parent().find('.active').removeClass('active');
                $(this).addClass('active');
            });
            // end
		}
	}

	render() {

		// prepare rate types for filter

		let filterTypes = [];

		this.props.rates.map(rate => {
			filterTypes.push(rate.name);
		});

		filterTypes = new Set(filterTypes);
		filterTypes = Array.from(filterTypes);

        // end

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
                            filterTypes.sort().map((type, index) => {
                                return (
									<li
										key={index}
										onClick={() => this.props.filterRates(this.props.rates, type)}
									>
                                        {type}
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
    isFetching: PropTypes.bool.isRequired,
	sortRatesByDistance: PropTypes.func.isRequired,
	sortRatesByLowPrice: PropTypes.func.isRequired,
	sortRatesByHighPrice: PropTypes.func.isRequired,
	filterRates: PropTypes.func.isRequired,
    filteredRates: PropTypes.array.isRequired
};