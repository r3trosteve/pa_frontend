import React, { Component } from 'react';

import planeIcon from '../../assets/images/svg/plane.svg';
import bedIcon from '../../assets/images/svg/bed2.svg';
import carIcon from '../../assets/images/svg/car2.svg';
import trainIcon from '../../assets/images/svg/train.svg';

export default class BookTravel extends Component {
	render() {
		return (
			<div className="book-travel">

				<a href="#" className="book-travel__link">

					<ul className="book-travel__list">

						<li className="book-travel__list-item">
							<img src={planeIcon} alt="Plane" />
						</li>

						<li className="book-travel__list-item">
							<img src={bedIcon} alt="Bed" />
						</li>

						<li className="book-travel__list-item">
							<img src={carIcon} alt="Car" />
						</li>

						<li className="book-travel__list-item">
							<img src={trainIcon} alt="Train" />
						</li>

						<li className="book-travel__list-item">
							<p className="book-travel__text">Book travel & Earn Cash</p>
						</li>
						
					</ul>

				</a>

			</div>
		);
	}
}
