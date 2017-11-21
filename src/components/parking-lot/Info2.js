import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default class Info extends Component {
	render() {

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
						| {lot.location && lot.location.address1}
						{' '}
                        {lot.location && lot.location.address2},
                        {' '}
                        {lot.location && lot.location.city},
                        {' '}
                        {lot.location && lot.location.state},
                        {' '}
                        {lot.location && lot.location.country}
					</p>
				</div>

				{/*info list*/}

				<ul className="info-list">

					{/*<li className="info-list__item text-bold">*/}
						{/*<i className="fa fa-map" aria-hidden="true" />*/}
						{/*Distance from airport:*/}
						{/*<span>{rate.distance && rate.distance.toFixed(1)} mile(s)</span>*/}
					{/*</li>*/}

					{/*<li className="info-list__item text-bold">*/}
						{/*<i className="fa fa-car" aria-hidden="true" />*/}
						{/*Parking type:*/}
						{/*<span>{rate.name && rate.name}</span>*/}
					{/*</li>*/}

				</ul>
			</div>
		);
	}
}

Info.propTypes = {
    lot: PropTypes.object.isRequired
};
