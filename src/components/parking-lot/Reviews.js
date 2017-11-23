import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import moment from 'moment';

import AverageRating from './AverageRating';

export default class Reviews extends Component {

	render() {

		const lot = this.props.lot;

		return (
			<div className="ap-details__reviews card-custom" id="apd-reviews">

				{/*title*/}

				<div className="ap-details__reviews__title">
					<h3 className="title-normal">Reviews</h3>
				</div>

				<AverageRating lot={lot} />

				{/*review*/}

                {
                    lot && lot.reviews && lot.reviews.length === 0 ?
						<p className="ap-details__reviews__no-reviews">No reviews yet</p> :
                        null
                }

                {this.props.lot && this.props.lot.reviews && this.props.lot.reviews.map((review, index) => {
                    return (
						<div key={index} className="ap-details__reviews__review">

                            {/*review header*/}

							<div className="ap-details__reviews__review-header">

                                {/*Name*/}

								<div className="ap-details__reviews__review-name">
									<p className="text-mont-bold">{review.author_name}</p>
								</div>

								<div className="ap-details__reviews__review-date">
									<p className="text-mont-bold">
                                        {moment(review.time).format('MM/DD/YYYY')}
									</p>
								</div>

                                {/*rating*/}

								<div className="ap-details__reviews__rating">
									<div className="ap-details__reviews__rating-stars">
										<ReactStars
											className="stars"
											count={5}
											value={parseFloat(review.rating)}
											size={24}
											color1={'#c1c1c1'}
											color2={'#fdb509'}
											edit={false}
											half={true}
										/>
									</div>
								</div>
							</div>

                            {/*review body*/}

							<div className="ap-details__reviews__review-body">
								<p className="text-normal">
									{review.text}
								</p>
							</div>
						</div>
                    );
                })}

			</div>
		);
	}
}

Reviews.propTypes = {
    lot: PropTypes.object
};