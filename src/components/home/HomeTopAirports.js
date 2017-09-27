import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RetinaImage from 'react-retina-image';
import HomeAirportsList from 'components/home/HomeAirportsList';

// import images
import ta1 from 'assets/images/home/top-airports/ta-1.png';
import ta12x from 'assets/images/home/top-airports/ta-1@2x.png';
import ta13x from 'assets/images/home/top-airports/ta-1@3x.png';
import ta2 from 'assets/images/home/top-airports/ta-2.png';
import ta22x from 'assets/images/home/top-airports/ta-2@2x.png';
import ta23x from 'assets/images/home/top-airports/ta-2@3x.png';
import ta3 from 'assets/images/home/top-airports/ta-3.png';
import ta32x from 'assets/images/home/top-airports/ta-3@2x.png';
import ta33x from 'assets/images/home/top-airports/ta-3@3x.png';
import ta4 from 'assets/images/home/top-airports/ta-4.png';
import ta42x from 'assets/images/home/top-airports/ta-4@2x.png';
import ta43x from 'assets/images/home/top-airports/ta-4@3x.png';
// end

export default class HomeTopAirports extends Component {
	render() {
		return (
			<section className="home__top-airports">

				<div className="container home__top-airports__container">

					<div className="home__top-airports__title">
						<h2>Top Airports</h2>
					</div>

					{/*TOP*/}

					<div className="row home__top-airports__row">

						{/*1*/}

						<div className="col-md-3 col-sm-6 home__top-airports__column">

							<a className="home__top-airports__card">
								<RetinaImage src={[ ta1, ta12x, ta13x ]} alt="Atlanta" />
								<div className="home__top-airports__card-overlay">
									<h3>
										Dameonmouth
										<span>Swaziland</span>
									</h3>
								</div>
							</a>

						</div>

						{/*2*/}

						<div className="col-md-3 col-sm-6 home__top-airports__column">

							<a className="home__top-airports__card">
								<RetinaImage src={[ ta2, ta22x, ta23x ]} alt="Newark" />
								<div className="home__top-airports__card-overlay">
									<h3>
										New Forest
										<span>Swaziland</span>
									</h3>
								</div>
							</a>

						</div>

						{/*3*/}

						<div className="col-md-3 col-sm-6 home__top-airports__column">

							<a className="home__top-airports__card">
								<RetinaImage src={[ ta3, ta32x, ta33x ]} alt="Laguardia" />
								<div className="home__top-airports__card-overlay">
									<h3>
										New Forest
										<span>Swaziland</span>
									</h3>
								</div>
							</a>

						</div>

						{/*4*/}

						<div className="col-md-3 col-sm-6 home__top-airports__column">

							<a className="home__top-airports__card">
								<RetinaImage src={[ ta4, ta42x, ta43x ]} alt="Seattle" />
								<div className="home__top-airports__card-overlay">
									<h3>
										New Forest
										<span>Swaziland</span>
									</h3>
								</div>
							</a>

						</div>

					</div>

					{/*END TOP*/}

					{/*LIST*/}
					<HomeAirportsList airports={this.props.airports} />
					{/*END LIST*/}

				</div>

			</section>
		);
	}
}

HomeTopAirports.propTypes = {
	airports: PropTypes.array.isRequired
};