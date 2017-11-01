import React, { Component } from 'react';
import BookTravel from '../common/BookTravel';
import Form from '../common/form/Form';

export default class Search extends Component {
	render() {
		return (
			<section className="home__search">

				<div className="container home__search__container">

					<div className="home__search__book-travel-container hidden-xs">
						<BookTravel />
					</div>

					<div className="home__search__title">
						<h1 className="title-big">
							When you have to leave your car at the airport, your only turn is Right Here!
						</h1>
						<h4>
							Save a bundle. Get turn by turn directions on your phone.
							<br />
							Free shuttle to the airport. Get started
						</h4>
					</div>

					<Form />
					
				</div>
			</section>
		);
	}
}
