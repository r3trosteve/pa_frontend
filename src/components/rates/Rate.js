import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import InfoList from '../common/InfoList';

export default class Rate extends Component {
	render() {
		return (
			<div className={classnames('airport-parking__lot', { 'hidden-xs hidden-sm': this.props.activeMobileTabMap })}>
				<div className="airport-parking__lot__content">

					{/*row*/}

					<div className="airport-parking__lot__row">

						{/*image*/}

						<div className="airport-parking__lot__image">
							<img src={this.props.rate.parking_lot.logo_url} alt={this.props.rate.parking_lot.name} />
						</div>

						{/*left*/}

						<div className="airport-parking__lot__column airport-parking__lot__column--left">

							{/*header*/}

							<div className="airport-parking__lot__header">
								<h2>
									{this.props.rate.parking_lot.name}
									<span>${this.props.rate.price.total}</span>
								</h2>
								<p>
									{this.props.rate.parking_lot.location.address1}{' '}
									{this.props.rate.parking_lot.location.address2}
								</p>
							</div>

							{/*info list*/}

							<InfoList
								distance={this.props.rate.distance.toFixed()}
								type={this.props.rate.name}
								// shuttleFrequency={this.props.rate.shuttleFrequency}
							/>

						</div>

						{/*right (price)*/}

						<div className="airport-parking__lot__column airport-parking__lot__column--price">

							<div className="airport-parking__lot__price">

								<span>${this.props.rate.price.total}</span>

								<p className="cancellation">
									<i className="ion-ios-checkmark" />
									Free Cancellation
								</p>

								<p className="taxes">Taxes and Fees included</p>

								<Link to={'/parking-lot'} className="btn-custom">
									View details
								</Link>

							</div>

						</div>
					</div>
				</div>

				{/*description*/}

				<div className="airport-parking__lot__description hidden-xs">
					<p>{this.props.rate.terminal_comment}</p>
				</div>

				{/*options*/}

				<div className="airport-parking__lot__options hidden-xs">

					{this.props.rate.parking_lot.services.map((option, index) => {

						return (
							<p key={index} className="airport-parking__lot__option-text">
								<i className="ion-ios-checkmark" />
								{option}
							</p>
						);

					})}

				</div>
			</div>
		);
	}
}

Rate.propTypes = {
	activeMobileTabMap: PropTypes.bool.isRequired,
	rate: PropTypes.object.isRequired
};
