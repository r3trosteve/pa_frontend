import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Search extends Component {
	render() {

		const currentPath = window.location.pathname

		return (
			<section>
				<br />

				<h1>{this.props.title}</h1>
				<h4>{this.props.subtitle}</h4>

				<br />

				<NavLink
					exact to="/airport_parking"
					className={ (currentPath === '/' || currentPath === '/airport_parking') ? 'active' : '' }
				>
					Airport Parking Only
				</NavLink>

				<NavLink exact to="/park_sleep_hotel_parking" activeClassName="active">Airport Hotel + Parking</NavLink>
				<NavLink exact to="/city_parking" activeClassName="active">City/Event Parking</NavLink>
			</section>
		)
	}
}