import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class HomeAirportsList extends Component {
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
				<a href="#">{airport.name}</a>
			</li>
		);
	}

	render() {

		return (

			<div className="home__top-airports__list-section">

				<div className="row home__top-airports__row home__top-airports__row--list-part hidden-xs">

					{/*1*/}

					<div className="col-md-3 col-sm-6 home__top-airports__column">
						<ul className="home__top-airports__list">
							{this.props.airports.slice(0, 20).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>

					{/*2*/}

					<div className="col-md-3 col-sm-6 home__top-airports__column">
						<ul className="home__top-airports__list">
							{this.props.airports.slice(20, 40).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>

					{/*3*/}

					<div className="col-md-3 col-sm-6 home__top-airports__column">
						<ul className="home__top-airports__list">
							{this.props.airports.slice(40, 60).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>

					{/*4*/}

					<div className="col-md-3 col-sm-6 home__top-airports__column">
						<ul className="home__top-airports__list">
							{this.props.airports.slice(60, 80).map((airport, index) => this.showList(index, airport))}
						</ul>
					</div>

				</div>

				{/*mobile*/}

				<div className="row home__top-airports__row home__top-airports__row--list-part visible-xs">

					<div className="col-md-3 col-sm-6 home__top-airports__column">
						<ul className="home__top-airports__list">

							{
								this.state.visible ?
								this.props.airports.slice(0, 80).map((airport, index) => this.showList(index, airport)) :
								this.props.airports.slice(0, 10).map((airport, index) => this.showList(index, airport))
							}

							<span onClick={this.showMore} className="btn-custom">{this.state.visible ? "Show less" : "Show more"}</span>

						</ul>
					</div>

				</div>

			</div>
		);
	}
}

HomeAirportsList.propTypes = {
	airports: PropTypes.array.isRequired
};