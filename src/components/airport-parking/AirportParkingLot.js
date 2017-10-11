import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import InfoList from 'components/common/info-list';

export default class AirportParkingLot extends Component {
	render() {
		return (
			<div className={classnames('airport-parking__lot', { 'hidden-xs hidden-sm': this.props.activeMobileTabMap })}>

				<div className="airport-parking__lot__content">

					{/*row*/}

					<div className="airport-parking__lot__row">

						{/*image*/}

						<div className="airport-parking__lot__image">
							<img src={this.props.parkingLot.image} alt={this.props.parkingLot.name} />
						</div>

						{/*left*/}

						<div className="airport-parking__lot__column airport-parking__lot__column--left">

							{/*header*/}

							<div className="airport-parking__lot__header">
								<h2>
									{this.props.parkingLot.name}
									<span>${this.props.parkingLot.price}</span>
									</h2>
								<p>{this.props.parkingLot.address}</p>
							</div>

							{/*info list*/}
							<InfoList
								distance={this.props.parkingLot.distance}
                                type={this.props.parkingLot.type}
								shuttleFrequency={this.props.parkingLot.shuttleFrequency}
							/>

						</div>

						{/*right (price)*/}

						<div className="airport-parking__lot__column airport-parking__lot__column--price">

							<div className="airport-parking__lot__price">
								<p>${this.props.parkingLot.price}</p>
								<Link to={'/airport_parking_details'} className="btn-custom">
									View details
								</Link>
							</div>

						</div>

					</div>

				</div>

				{/*description*/}


				<div className="airport-parking__lot__description hidden-xs">
					<p>{this.props.parkingLot.description}</p>
				</div>

				{/*options*/}

				<div className="airport-parking__lot__options hidden-xs">
					{this.props.parkingLot.options.map((option, index) => {
						return (
							<p key={index} className="airport-parking__lot__option-text">
								<i className="ion-ios-checkmark"></i>
								{option}
							</p>
						);
					})}
				</div>

			</div>
		);
	}
}

AirportParkingLot.propTypes = {
	parkingLot: PropTypes.object.isRequired
};