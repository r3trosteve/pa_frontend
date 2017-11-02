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
			<li key={index} className="home__top-airports__list-item">
				<Link to={`airport/${airport.id}`}>{airport.name}</Link>
			</li>
		);
	}

	render() {
		return (
			<div className="home__top-airports__list-section">
				<div className="row home__top-airports__row home__top-airports__row--list-part hidden-sm hidden-xs">
					
					{/*1*/}

					<div className="col-md-4 col-sm-4 home__top-airports__column">
						<ul className="home__top-airports__list">
							{this.props.airports.slice(0, 9).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>

					{/*2*/}

					<div className="col-md-4 col-sm-4 home__top-airports__column">
						<ul className="home__top-airports__list">
							{this.props.airports.slice(9, 18).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>

					{/*3*/}

					<div className="col-md-4 col-sm-4 home__top-airports__column">
						<ul className="home__top-airports__list">
							{this.props.airports.slice(18, 25).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>
				</div>

				{/*mobile*/}

				<div className="row home__top-airports__row home__top-airports__row--list-part visible-sm visible-xs">
					<div className="col-md-12 home__top-airports__column text-center">

						<ul className="home__top-airports__list">

							{
								this.state.visible ?
									this.props.airports.slice(0, 25).map((airport, index) => this.showList(index, airport)) :
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
