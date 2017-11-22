import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default class Info extends Component {
	render() {

		const rate = this.props.rate;
		const lot = this.props.lot;

		return (
			<div className="ap-details__info card-custom">

				{/*title*/}

				<div className="ap-details__info__title">
					<h1 className="title-normal-bold">
						{lot && lot.name}
					</h1>
				</div>

				<div className="ap-details__info__rating">
					<ReactStars
						className="ap-details__info__rating-stars"
						count={5}
						value={parseFloat(lot && lot.rating)}
						size={24}
						color1={'#c1c1c1'}
						color2={'#fdb509'}
						edit={false}
						half={true}
					/>
					<p>
                        {' '}
						|<span>( {lot && lot.reviews && lot.reviews.length} </span> reviews)
						| {lot && lot.location && lot.location.address1}
                        {' '}
                        {lot && lot.location && lot.location.address2},
                        {' '}
                        {lot && lot.location && lot.location.city},
                        {' '}
                        {lot && lot.location && lot.location.state},
                        {' '}
                        {lot && lot.location && lot.location.country}
					</p>
				</div>

				{/*info list*/}

				<ul className="info-list">

					{
						rate ?
							<li className="info-list__item text-bold">
								<i className="fa fa-map" aria-hidden="true" />
								Distance from airport:
								<span>{rate && rate.distance && rate.distance.toFixed(1)} mile(s)</span>
							</li> :
							null
					}

					{ rate ?
						<li className="info-list__item text-bold">
							<i className="fa fa-car" aria-hidden="true" />
							Parking type:
							<span>{rate && rate.name}</span>
						</li> :
						null
					}

					{/*<li className="info-list__item text-bold">*/}
						{/*<i className="fa fa-clock-o" aria-hidden="true" />*/}
						{/*Shuttle frequency:*/}
						{/*<span>5 to 10 Minutes</span>*/}
					{/*</li>*/}

				</ul>
			</div>
		);
	}
}

Info.propTypes = {
	rate: PropTypes.object,
    lot: PropTypes.object
};
