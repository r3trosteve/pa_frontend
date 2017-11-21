import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default class AverageRating extends Component {
	render() {
		return (
			<div className="ap-details__average-rating">

				<p className="text-normal">
					Rating:
					<span className="ap-details__average-rating__num">
						<b>{this.props.lot && this.props.lot.rating || 0}/5</b>
					</span>
				</p>

				<div className="ap-details__average-rating__stars">
					<ReactStars
						className="stars"
						count={5}
						value={parseFloat(this.props.lot && this.props.lot.rating)}
						size={24}
						color1={'#c1c1c1'}
						color2={'#fdb509'}
						edit={false}
						half={true}
					/>
					<p>
						(Based on
						<span> {this.props.lot && this.props.lot.reviews && this.props.lot.reviews.length || 0} </span>
						reviews)
					</p>
				</div>
                
			</div>
		);
	}
}

AverageRating.propTypes = {
    lot: PropTypes.object.isRequired
};