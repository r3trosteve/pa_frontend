import React, { Component } from 'react';

export default class PaymentDetails extends Component {

	maxMonthChange(e) {
		let value = e.target.value;
		if (value > 12) {
			e.target.value = 12;
		} else if (value < 1) {
			e.target.value = 1;
		}
	}

	render() {
		return (
			<form className="ap-checkout__payment-details card-custom">

				{/*notification*/}

				{/*<div*/}
				{/*className="ap-checkout__payment-details__notification big">*/}
				{/*If you don't book now, this amazing deal could be gone.*/}
				{/*</div>*/}

				{/*title*/}

				<div className="ap-checkout__payment-details__title">
					<h3 className="title-normal">
						<i className="fa fa-lock" aria-hidden="true" />
						Payment details
						<span>your reservation is safe and secure</span>
					</h3>
				</div>

				{/*notification*/}

				{/*<div className="ap-checkout__payment-details__notification small">*/}
				{/*Hurry, that’s the cheapest room at the Seascape Resort & Spa!*/}
				{/*</div>*/}

				{/*inputs*/}

				<div className="ap-checkout__payment-details__inputs">
					{/*radio header*/}

					<div className="ap-checkout__payment-details__inputs__header">
						<label>
							<input type="radio" name="card" checked />
							<span>
								<b className="text-mont-bold">Credit & Debit cards</b>
								Transiction fee may apply
							</span>
						</label>
						<div className="ap-checkout__payment-details__inputs-header__img" />
					</div>

					{/*inputs body*/}

					<div className="row">
						<div className="col-md-6">
							<label>
								Cardholder Name<input type="text" />
							</label>
						</div>

						<div className="col-md-6">
							<label>
								Card Number
								<input type="num" />
								<span className="cards-image" />
							</label>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-8">
							<p className="label-title">End Date</p>
							<div className="row">
								<div className="col-xs-6">
									<label>
										<input
											onChange={this.maxMonthChange}
											type="number"
											placeholder="mm"
											maxLength="2"
											max="12"
											min="1"
										/>
									</label>
								</div>
								<div className="col-xs-6">
									<label>
										<input type="number" placeholder="yyyy" maxLength="4" />
									</label>
								</div>
							</div>
						</div>

						<div className="col-xs-4">
							<label>
								CVV
								<input type="num" maxLength="3" />
							</label>
						</div>
					</div>

					{/*t&c*/}

					<p className="ap-checkout__payment-details__terms">
						I have read and accept the
						<a href="#"> terms of use</a>,
						<a href="#"> rules of flight </a>
						and
						<a href="#"> privacy policy</a>
					</p>

					{/*submit*/}

					<div className="ap-checkout__payment-details__submit">
						<button type="submit" className="btn-custom">
							Pay Now <i className="fa fa-chevron-right" aria-hidden="true" />
						</button>
					</div>
				</div>
                
			</form>
		);
	}
}
