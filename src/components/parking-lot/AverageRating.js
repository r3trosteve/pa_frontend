import React, { Component } from 'react';
import ReactStars from 'react-stars';

export default class AverageRating extends Component {
	render() {
		return (
			<div className="ap-details__average-rating">

				<p className="text-normal">
					Rating:
					<span className="ap-details__average-rating__num">
						<b>2/5</b>
					</span>
				</p>

				<div className="ap-details__average-rating__stars">
					<ReactStars
						className="stars"
						count={5}
						value={4.5}
						size={24}
						color1={'#c1c1c1'}
						color2={'#fdb509'}
						edit={false}
						half={true}
					/>
					<p>
						(Based on <span>41</span> reviews)
					</p>
				</div>
                
			</div>
		);
	}
}
