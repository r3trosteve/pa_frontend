import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AverageRating from './AverageRating';

export default class Overview extends Component {
	render() {

		const lot = this.props.lot;

		return (
			<div className="ap-details__overview card-custom" id="apd-overview">

				{/*title*/}

				<div className="ap-details__overview__title">
					<h3 className="title-normal">Overview</h3>
				</div>

				{/*carousel*/}

				<div className="ap-details__overview__carousel">
					<div id="ap-details-carousel" className="carousel slide" data-interval="6000" data-ride="carousel">
						<div className="carousel-inner">

                            {lot && lot.images && lot.images.slice(0, 8).map((image, index) => {
                                return (
									<div key={index} className={classnames('item', { 'active': index === 0 })}>
										<img src={image.url} />
									</div>
                                );
                            })}

						</div>

						{/*nav*/}

                        {
                            lot && lot.images && lot.images.length === 0 ?
								<p className="ap-details__reviews__no-reviews">No images yet</p> :
                                null
                        }

						{
							lot && lot.images && lot.images.length > 0 ?
								<a className="carousel-control left" href="#ap-details-carousel" data-slide="prev">
									<i className="ion-ios-arrow-back" />
								</a> :
								null
						}

                        {
                            lot && lot.images && lot.images.length > 0 ?
								<a className="carousel-control right" href="#ap-details-carousel" data-slide="next">
									<i className="ion-ios-arrow-forward"/>
								</a> :
                                null
                        }

						{/*indicators*/}

						<ol className="carousel-indicators">

                            {lot && lot.images && lot.images.slice(0, 8).map((image, index) => {
                                return (
									<li
										key={index}
										data-target="#ap-details-carousel"
										data-slide-to={index}
										className={classnames('', { 'active': index === 0 })}
									>
										<img src={image.url} />
									</li>
                                );
                            })}
                            
						</ol>
					</div>
				</div>

				<AverageRating lot={lot} />
                
			</div>
		);
	}
}

Overview.propTypes = {
	lot: PropTypes.object
};