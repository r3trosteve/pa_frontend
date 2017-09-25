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
			<section>

				<h3>Top Airports</h3>

				<div>
					<RetinaImage src={[ ta1, ta12x, ta13x ]} alt="Atlanta" />
					<span>Atlanta</span>
				</div>

				<div>
					<RetinaImage src={[ ta2, ta22x, ta23x ]} alt="Newark" />
					<span>Newark</span>
				</div>

				<div>
					<RetinaImage src={[ ta3, ta32x, ta33x ]} alt="Laguardia" />
					<span>Laguardia</span>
				</div>

				<div>
					<RetinaImage src={[ ta4, ta42x, ta43x ]} alt="Seattle" />
					<span>Seattle</span>
				</div>

				<HomeAirportsList airports={this.props.airports} />

			</section>
		);
	}
}

HomeTopAirports.propTypes = {
	airports: PropTypes.array.isRequired
};