import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ta13x from '../../assets/images/home/top-airports/ta-1@3x.png';
import ta23x from '../../assets/images/home/top-airports/ta-2@3x.png';
import ta33x from '../../assets/images/home/top-airports/ta-3@3x.png';
import ta43x from '../../assets/images/home/top-airports/ta-4@3x.png';

import AirportsList from './AirportsList';

export default class TopAirports extends Component {
	render() {
		return (
			<section className="home__top-airports section-pad">
				<div className="container home__top-airports__container">

					<div className="home__top-airports__title">
						<h2 className="title-upper-bold">Top Airports</h2>
					</div>

					{/*TOP*/}

					<div className="row home__top-airports__row">

						{/*1*/}

						<div className="col-md-3 col-sm-6 home__top-airports__column">
							<a className="home__top-airports__card">
								<img src={ta33x} alt="Atlanta" />
								<div className="home__top-airports__card-overlay">
									<h3>
										Atlanta
										<span>USA</span>
									</h3>
								</div>
							</a>
						</div>

						{/*2*/}

						<div className="col-md-3 col-sm-6 home__top-airports__column">
							<a className="home__top-airports__card">
								<img src={ta23x} alt="Newark" />
								<div className="home__top-airports__card-overlay">
									<h3>
										Newark
										<span>USA</span>
									</h3>
								</div>
							</a>
						</div>

						{/*3*/}

						<div className="col-md-3 col-sm-6 home__top-airports__column">
							<a className="home__top-airports__card">
								<img src={ta13x} alt="Laguardia" />
								<div className="home__top-airports__card-overlay">
									<h3>
										Laguardia
										<span>USA</span>
									</h3>
								</div>
							</a>
						</div>

						{/*4*/}

						<div className="col-md-3 col-sm-6 home__top-airports__column">
							<a className="home__top-airports__card">
								<img src={ta43x} alt="Seattle" />
								<div className="home__top-airports__card-overlay">
									<h3>
										Seattle
										<span>USA</span>
									</h3>
								</div>
							</a>
						</div>
					</div>

					{/*END TOP*/}

					{/*AIRPORTS LIST*/}

					<AirportsList airports={this.props.airports} />
					{/*END*/}

				</div>
			</section>
		);
	}
}

TopAirports.propTyeps = {
    airports: PropTypes.array.isRequired
};
