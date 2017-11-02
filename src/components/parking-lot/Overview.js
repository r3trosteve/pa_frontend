import React, { Component } from 'react';

import AverageRating from './AverageRating';

export default class Overview extends Component {
	render() {
		return (
			<div className="ap-details__overview card-custom">

				{/*title*/}

				<div className="ap-details__overview__title">
					<h3 className="title-normal">Overview</h3>
				</div>

				{/*carousel*/}

				<div className="ap-details__overview__carousel">
					<div id="ap-details-carousel" className="carousel slide" data-interval="6000" data-ride="carousel">
						<div className="carousel-inner">

							{/*1*/}

							<div className="active item">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01039.jpg?w=2210&quality=50"
									alt=""
								/>
							</div>

							{/*2*/}

							<div className="item">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC00996.jpg?w=2210&quality=50"
									alt=""
								/>
							</div>

							{/*3*/}

							<div className="item">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC00908.jpg?w=2210&quality=50"
									alt=""
								/>
							</div>

							{/*4*/}

							<div className="item">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01192.jpg?w=2210&quality=50"
									alt=""
								/>
							</div>

							{/*5*/}

							<div className="item">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC00913.jpg?w=2210&quality=50"
									alt=""
								/>
							</div>

							{/*6*/}

							<div className="item">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01164.jpg?w=2210&quality=50"
									alt=""
								/>
							</div>

							{/*7*/}

							<div className="item">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01137.jpg?w=2210&quality=50"
									alt=""
								/>
							</div>

							{/*8*/}

							<div className="item">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01044.jpg?w=2210&quality=50"
									alt=""
								/>
							</div>
						</div>

						{/*nav*/}

						<a className="carousel-control left" href="#ap-details-carousel" data-slide="prev">
							<i className="ion-ios-arrow-back" />
						</a>
						<a className="carousel-control right" href="#ap-details-carousel" data-slide="next">
							<i className="ion-ios-arrow-forward" />
						</a>

						{/*indicators*/}

						<ol className="carousel-indicators">

							<li data-target="#ap-details-carousel" data-slide-to="0" className="active">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01039.jpg?w=2210&quality=50"
									alt=""
								/>
							</li>
							<li data-target="#ap-details-carousel" data-slide-to="1">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC00996.jpg?w=2210&quality=50"
									alt=""
								/>
							</li>
							<li data-target="#ap-details-carousel" data-slide-to="2">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC00908.jpg?w=2210&quality=50"
									alt=""
								/>
							</li>
							<li data-target="#ap-details-carousel" data-slide-to="3">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01192.jpg?w=2210&quality=50"
									alt=""
								/>
							</li>
							<li data-target="#ap-details-carousel" data-slide-to="4">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC00913.jpg?w=2210&quality=50"
									alt=""
								/>
							</li>
							<li data-target="#ap-details-carousel" data-slide-to="5">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01164.jpg?w=2210&quality=50"
									alt=""
								/>
							</li>
							<li data-target="#ap-details-carousel" data-slide-to="6">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01137.jpg?w=2210&quality=50"
									alt=""
								/>
							</li>
							<li data-target="#ap-details-carousel" data-slide-to="7">
								<img
									src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC01044.jpg?w=2210&quality=50"
									alt=""
								/>
							</li>
                            
						</ol>
					</div>
				</div>

				<AverageRating />
                
			</div>
		);
	}
}
