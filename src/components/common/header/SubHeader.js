import React, { Component } from 'react'
import planeIcon from 'assets/images/svg/plane.svg'
import bedIcon from 'assets/images/svg/bed2.svg'
import carIcon from 'assets/images/svg/car2.svg'
import trainIcon from 'assets/images/svg/train.svg'

export default class SubHeader extends Component {
	render() {
		return (

			<div className="sub-header">
				<a href="#" className="sub-header__link container">
					<ul className="sub-header__list">
						<li className="sub-header__list-item">
							<img src={planeIcon} alt="Plane" />
						</li>
						<li className="sub-header__list-item">
							<img src={bedIcon} alt="Bed" />
						</li>
						<li className="sub-header__list-item">
							<img src={carIcon} alt="Car" />
						</li>
						<li className="sub-header__list-item">
							<img src={trainIcon} alt="Train" />
						</li>
						<li className="sub-header__list-item">
							<p className="sub-header__text">
								Book travel & Earn Cash
							</p>
						</li>
					</ul>
				</a>
			</div>

		)
	}
}