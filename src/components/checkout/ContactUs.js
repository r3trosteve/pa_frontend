import React, { Component } from 'react';
import supportImg from '../../assets/images/checkout/support.png';

export default class ContactUs extends Component {
	render() {
		return (
			<div className="ap-checkout__contact-us hidden-sm hidden-xs">

				<div className="ap-checkout__contact-us__row">

					<div className="ap-checkout__contact-us__image">
						<img src={supportImg} alt="Support" />
					</div>

					<div className="ap-checkout__contact-us__description">
						<h4>Contact us:</h4>
						<p>
							Book online or call{' '}
							<a href="tel:8008515863" className="text-mont-bold">
								800-851-5863
							</a>.
							<br/>
							This call is free 24 hours a day, 7 days a week.
						</p>
					</div>
                    
				</div>

			</div>
		);
	}
}
