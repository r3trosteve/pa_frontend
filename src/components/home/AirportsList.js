import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class AirportsList extends Component {
	render() {
		console.log(this.props.airports)
		return (
			<section>

				<h3>Top Airports</h3>

				<ul className="list-unstyled">
					{this.props.airports.map((airport, index) => {
						return (
							<li key={index}>
								<a href="#">{airport.name}</a>
							</li>
						)
					})}
				</ul>

			</section>
		)
	}
}