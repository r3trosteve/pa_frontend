import React, { Component } from 'react';
import RetinaImage from 'react-retina-image';

// import images
import option11 from 'assets/images/home/options/o-11.png';
import option112x from 'assets/images/home/options/o-11@2x.png';
import option113x from 'assets/images/home/options/o-11@3x.png';
import option12 from 'assets/images/home/options/o-12.png';
import option122x from 'assets/images/home/options/o-12@2x.png';
import option123x from 'assets/images/home/options/o-12@3x.png';
import option13 from 'assets/images/home/options/o-13.png';
import option132x from 'assets/images/home/options/o-13@2x.png';
import option133x from 'assets/images/home/options/o-13@3x.png';
import option14 from 'assets/images/home/options/o-14.png';
import option142x from 'assets/images/home/options/o-14@2x.png';
import option143x from 'assets/images/home/options/o-14@3x.png';
import option2 from 'assets/images/home/options/o-2.png';
import option22x from 'assets/images/home/options/o-2@2x.png';
import option23x from 'assets/images/home/options/o-2@3x.png';
import option3 from 'assets/images/home/options/o-3.png';
import option32x from 'assets/images/home/options/o-3@2x.png';
import option33x from 'assets/images/home/options/o-3@3x.png';
// end

export default class HomeOptions extends Component {
	render() {
		return (
			<section>

				<div>
					<span>01.</span>
					<h4>Book your travel</h4>
					<p>Air, Hotel, Car, Cruise & more</p>

					<RetinaImage src={[ option11, option112x, option113x ]} alt="booking.com" />
					<RetinaImage src={[ option12, option122x, option123x ]} alt="Expedia" />
					<RetinaImage src={[ option13, option132x, option133x ]} alt="hotels.com" />
					<RetinaImage src={[ option14, option142x, option143x ]} alt="cruise.com" />
				</div>

				<div>
					<span>02.</span>
					<h4>Book airport parking</h4>
					<p>Enter your booking confirmations and get instant savings</p>

					<RetinaImage src={[ option2, option22x, option23x ]} alt="Receipt" />
				</div>

				<div>
					<span>03.</span>
					<h4>Expense and track</h4>
					<p>Quickly link your Tripit or Concur accounts</p>

					<RetinaImage src={[ option3, option32x, option33x ]} alt="Tripit" />
				</div>

			</section>
		);
	}
}