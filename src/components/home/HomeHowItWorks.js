import React, { Component } from 'react';
import RetinaImage from 'react-retina-image';

// import images
import hiw11 from 'assets/images/home/how-it-works/hiw-11.png';
import hiw112x from 'assets/images/home/how-it-works/hiw-11@2x.png';
import hiw113x from 'assets/images/home/how-it-works/hiw-11@3x.png';
import hiw12 from 'assets/images/home/how-it-works/hiw-12.png';
import hiw122x from 'assets/images/home/how-it-works/hiw-12@2x.png';
import hiw123x from 'assets/images/home/how-it-works/hiw-12@3x.png';
import hiw21 from 'assets/images/home/how-it-works/hiw-21.png';
import hiw212x from 'assets/images/home/how-it-works/hiw-21@2x.png';
import hiw213x from 'assets/images/home/how-it-works/hiw-21@3x.png';
import hiw22 from 'assets/images/home/how-it-works/hiw-22.png';
import hiw222x from 'assets/images/home/how-it-works/hiw-22@2x.png';
import hiw223x from 'assets/images/home/how-it-works/hiw-22@3x.png';
import hiw31 from 'assets/images/home/how-it-works/hiw-31.png';
import hiw312x from 'assets/images/home/how-it-works/hiw-31@2x.png';
import hiw313x from 'assets/images/home/how-it-works/hiw-31@3x.png';
// end

export default class HomeHowItWorks extends Component {
	render() {
		return (
			<section>

				<h2>Book your Travel as you Normally do and Earn Cash back and FREE Airport Parking</h2>
				<h4>How it Works</h4>

				<div>
					<RetinaImage src={[ hiw11, hiw112x, hiw113x ]} alt="Guest" />
					<RetinaImage src={[ hiw12, hiw122x, hiw123x ]} alt="Hotel" />

					<p>
						Guest Jane L
						<b>Booked her hotel</b>
						on booking.com
					</p>
				</div>

				<div>
					<RetinaImage src={[ hiw21, hiw212x, hiw213x ]} alt="Parking" />
					<RetinaImage src={[ hiw22, hiw222x, hiw223x ]} alt="Cash" />

					<p>
						Returned to <b>parkingaccess.com</b>
						to book 6 days of parking $80.00 parking fee $40.00
						<b>cash reward $40.00</b> > $80 Expense through Concur
					</p>
				</div>

				<div>
					<RetinaImage src={[ hiw31, hiw312x, hiw313x ]} alt="PayPal" />

					<p>
						Jane choose to <b>transfer $40</b> to her personal Paypal
					</p>
				</div>

			</section>
		);
	}
}