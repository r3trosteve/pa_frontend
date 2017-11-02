import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default class Info extends Component {
	render() {

		const rate = this.props.rate;

		return (
			<div className="ap-details__info card-custom">

				{/*title*/}

				<div className="ap-details__info__title">
					<h3 className="title-normal-bold">
						{rate.parking_lot && rate.parking_lot.name}
					</h3>
				</div>

				<div className="ap-details__info__rating">
					<ReactStars
						className="ap-details__info__rating-stars"
						count={5}
						value={4.5}
						size={24}
						color1={'#c1c1c1'}
						color2={'#fdb509'}
						edit={false}
						half={true}
					/>
					<p>
						{' '}
						|<span>(41</span> reviews)
						| {rate.parking_lot && rate.parking_lot.location.address1}
						{' '}
                        {rate.parking_lot && rate.parking_lot.location.address2}
					</p>
				</div>

				{/*info list*/}

				<ul className="info-list">

					<li className="info-list__item text-bold">
						<i className="fa fa-map" aria-hidden="true" />
						Distance from airport:
						<span>{rate.distance && rate.distance.toFixed()} mile(s)</span>
					</li>
                    
					<li className="info-list__item text-bold">
						<i className="fa fa-car" aria-hidden="true" />
						Parking type:
						<span>{rate.name && rate.name}</span>
					</li>

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
    rate: PropTypes.object.isRequired
};
