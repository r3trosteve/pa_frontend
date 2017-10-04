import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AirportParkingLot extends Component {
	render() {
		return (
			<div className="airport-parking__lot">

				{/*image*/}

				<div className="airport-parking__lot__image">
					<img src={this.props.parkingLot.image} alt={this.props.parkingLot.name} />
				</div>

				{/*content*/}

				<div className="airport-parking__lot__content">

					{/*row*/}

					<div className="airport-parking__lot__row">

						{/*left*/}

						<div className="airport-parking__lot__column airport-parking__lot__column--left">

							{/*header*/}

							<div className="airport-parking__lot__header">
								<h2>{this.props.parkingLot.name}</h2>
								<p>{this.props.parkingLot.address}</p>
							</div>

							{/*info list*/}

							<ul className="airport-parking__lot__list">
								<li className="airport-parking__lot__list-item">
									<i className="fa fa-map" aria-hidden="true"></i>
									Distance from airport:
									<span>{this.props.parkingLot.distance} mile(s)</span>
								</li>
								<li className="airport-parking__lot__list-item">
									<i className="fa fa-car" aria-hidden="true"></i>
									Parking type:
									<span>{this.props.parkingLot.type}</span>
								</li>
								<li className="airport-parking__lot__list-item">
									<i className="fa fa-clock-o" aria-hidden="true"></i>
									Shuttle frequency:
									<span>{this.props.parkingLot.shuttleFrequency}</span>
								</li>
							</ul>

						</div>

						{/*right (price)*/}

						<div className="airport-parking__lot__column airport-parking__lot__column--price">

							<div className="airport-parking__lot__price">
								<p>${this.props.parkingLot.price}</p>
								<Link to={'/airport-parking-results/1'} className="btn-custom">
									View details
								</Link>
							</div>

						</div>

					</div>

					{/*description*/}

					<div className="airport-parking__lot__description">
						<p>{this.props.parkingLot.description}</p>
					</div>

					{/*options*/}

					{/*<div className="airport-parking__lot__options">*/}
						{/*{this.props.parkingLot.options.map((option, index) => {*/}
							{/*return <p key={index}>{option}</p>;*/}
						{/*})}*/}
					{/*</div>*/}

				</div>

			</div>
		);
	}
}

AirportParkingLot.propTypes = {
	parkingLot: PropTypes.object.isRequired
};