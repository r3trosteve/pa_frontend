import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import InfoList from '../common/InfoList';

export default class Rate extends Component {
	render() {

		const rate = this.props.rate;
		const lot = this.props.rate.parking_lot;

		return (
			<div className="rates__item">

				<div className="rates__item__content">

					{/*row*/}

					<div className="rates__item__row">

						{/*image*/}

						<div className="rates__item__image">

							{lot.logo_url ?
								<img
									src={lot && lot.logo_url}
									alt={lot && lot.name}
								/> :
								<p className="no-image-text">No Image</p>
							}
							
						</div>

						{/*left*/}

						<div className="rates__item__column rates__item__column--left">

							{/*header*/}

							<div className="rates__item__header">

								<h2>
									{lot && lot.name}
									<span className="visible-xs">${parseFloat(rate.price.total).toFixed(2)}</span>
								</h2>

								<p>
									{lot && lot.location && lot.location.address1}
                                    {' '}
                                    {lot && lot.location && lot.location.address2},
                                    {' '}
                                    {lot && lot.location && lot.location.city},
                                    {' '}
                                    {lot && lot.location && lot.location.state},
                                    {' '}
                                    {lot && lot.location && lot.location.country}
								</p>

								<div className="rates__item__header__stars">
									<ReactStars
										className="stars"
										count={5}
										value={parseFloat(lot && lot.rating)}
										size={24}
										color1={'#c1c1c1'}
										color2={'#fdb509'}
										edit={false}
										half={true}
									/>
									<p>
										(<span>{lot && lot.reviews && lot.reviews.length}</span> reviews)
									</p>

								</div>

							</div>

							{/*info list*/}

							<InfoList
								distance={rate.distance.toFixed(1)}
								type={rate.name}
							/>

						</div>

						{/*right (price)*/}

						<div className="rates__item__column rates__item__column--price">

							<div className="rates__item__price">

								<span>${parseFloat(rate.price.total).toFixed(2)}</span>

								<p className="cancellation">
									<i className="ion-ios-checkmark" />
									Free Cancellation
								</p>

								<p className="taxes">Taxes and Fees included</p>

								<Link to={`/airport-parking/${rate.id}`} className="btn-custom">
									View details
								</Link>

							</div>

						</div>
					</div>
				</div>

				{/*description*/}

				<div className="rates__item__description hidden-xs">
					<p>{rate && rate.terminal_comment}</p>
				</div>

				{/*options*/}

				<div className="rates__item__options hidden-xs">

					{lot && lot.services && lot.services.map((option, index) => {

						return (
							<p key={index} className="rates__item__option-text">
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
	rate: PropTypes.object.isRequired
};
