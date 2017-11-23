import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AirportsList extends Component {

	constructor() {
		super();

		this.state = {
			visible: false
		};

		this.showMore = this.showMore.bind(this);
		this.showList = this.showList.bind(this);
	}

	showMore() {
		this.setState({ visible: !this.state.visible });
	}

	showList(index, airport) {
		return (
			<li key={index} className="airports-list__list-item">
				<Link to={`/${airport.slug}`}>{airport.name}</Link>
			</li>
		);
	}

	render() {
		return (
			<div className="airports-list">
				<div className="row airports-list__row hidden-sm hidden-xs">
					
					{/*1*/}

					<div className="col-md-4 col-sm-4 airports-list__column">
						<ul className="airports-list__list">
							{this.props.airports.slice(0, 38).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>

					{/*2*/}

					<div className="col-md-4 col-sm-4 airports-list__column">
						<ul className="airports-list__list">
							{this.props.airports.slice(38, 75).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>

					{/*3*/}

					<div className="col-md-4 col-sm-4 airports-list__column">
						<ul className="airports-list__list">
							{this.props.airports.slice(75, 120).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>
				</div>

				{/*mobile*/}

				<div className="row airports-list__row visible-sm visible-xs">
					<div className="col-md-12 airports-list__column text-center">

						<ul className="airports-list__list">

							{
								this.state.visible ?
									this.props.airports.slice(0, 120).map((airport, index) => this.showList(index, airport)) :
									this.props.airports.slice(0, 10).map((airport, index) => this.showList(index, airport))
							}

							<span onClick={this.showMore} className="btn-custom">
								{this.state.visible ? 'Show less' : 'Show more'}
							</span>

						</ul>

					</div>
				</div>
			</div>
		);
	}
}

AirportsList.propTypes = {
	airports: PropTypes.array.isRequired
};
