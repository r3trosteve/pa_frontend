import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class HomeAirportsList extends Component {
	render() {
		return (
			<section>

				<h3>Top Airports</h3>
				{this.props.airports.length}

				<ul className="list-unstyled">

					<ul className="first-column">
						{this.props.airports.slice(0, 19).map((airport, index) => {
							return (
								<li key={index}>
									<a href="#">{airport.name}</a>
								</li>
							);
						})}
					</ul>

					<ul className="second-column">
						{this.props.airports.slice(19, 38).map((airport, index) => {
							return (
								<li key={index}>
									<a href="#">{airport.name}</a>
								</li>
							);
						})}
					</ul>

					<ul className="third-column">
						{this.props.airports.slice(38, 57).map((airport, index) => {
							return (
								<li key={index}>
									<a href="#">{airport.name}</a>
								</li>
							);
						})}
					</ul>

					<ul className="fourth-column">
						{this.props.airports.slice(57, 78).map((airport, index) => {
							return (
								<li key={index}>
									<a href="#">{airport.name}</a>
								</li>
							);
						})}
					</ul>

				</ul>

			</section>
		);
	}
}

HomeAirportsList.propTypes = {
	airports: PropTypes.array.isRequired
};