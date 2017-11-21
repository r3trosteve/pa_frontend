import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import AverageRating2 from './AverageRating2';

export default class Reviews extends Component {

	render() {
		return (
			<div className="ap-details__reviews card-custom" id="apd-reviews">

				{/*title*/}

				<div className="ap-details__reviews__title">
					<h3 className="title-normal">Reviews</h3>
				</div>

				<AverageRating2 lot={this.props.lot} />

				{/*review*/}

				{
					this.props.lot && this.props.lot.reviews && this.props.lot.reviews.length === 0 ?
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
									<p className="text-mont-bold">Sara Holt</p>
								</div>

								<div className="ap-details__reviews__review-date">
									<p className="text-mont-bold">07/03/2017</p>
								</div>

                                {/*rating*/}

								<div className="ap-details__reviews__rating">
									<div className="ap-details__reviews__rating-stars">
										<ReactStars
											className="stars"
											count={5}
											value={4}
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
									Motorhome or Trailer that is the question for you. Here are some of the advantages and
									disadvantages of both, so you will be confident when purchasing an RV. When comparing Rvs, a
									motorhome or a travel trailer, should you buy a motorhome or fifth wheeler? The advantages
									and disadvantages of both are studied so that you can make your choice wisely when
									purchasing an RV. Possessing a motorhome or fifth wheel is an achievement of a lifetime. It
									can be similar to sojourning with your residence as you search the various sites of our
									great land, America.
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
    lot: PropTypes.object.isRequired
};
