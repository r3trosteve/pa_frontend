import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import { Helmet } from 'react-helmet';
import {withRouter} from 'react-router-dom';

import Header from './common/header/Header';
import Footer from './common/footer/Footer';

import HomePage from './home/HomePage';
import RatesPage from './rates/RatesPage';
import ParkingLotPage from './parking-lot/ParkingLotPage';
import CheckoutPage from './checkout/CheckoutPage';
import ProfilePage from './profile/ProfilePage';
import NewPasswordPage from './profile/NewPasswordPage';
import AirportPage from './airport/AirportPage';
import AirportsPage from './airports/AirportsPage';

class App extends Component {

    constructor() {
		super();

        this.state = {
            isLogModalOpen: false,
        };

        this.openLogModal = this.openLogModal.bind(this);
        this.closeLogModal = this.closeLogModal.bind(this);
	}

    openLogModal() { this.setState({ isLogModalOpen: true }); }
    closeLogModal() { this.setState({ isLogModalOpen: false }); }

	render() {
		return (
			<div>
				
				<Helmet
					htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
					titleTemplate="ParkingAccess | %s"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "ParkingAccess provides discounted rates with park sleep and fly packages"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
				/>

				<Header
					currentPathname={this.props.location.pathname}
					isLogModalOpen={this.state.isLogModalOpen}
					openLogModal={this.openLogModal}
					closeLogModal={this.closeLogModal}
				/>
				
				{/*{routes.map((route, i) => <Route key={i} {...route} />)}*/}

				<Switch>

					<Route exact path="/" component={HomePage} />
					<Route path="/home" component={HomePage} />
					<Route path="/rates/search/:id" component={RatesPage} />

					<PropsRoute
						path="/airport-parking/:id"
						component={ParkingLotPage}
						openLogModal={this.openLogModal}
					/>

					<Route path="/reservation/:id" component={CheckoutPage} />
					<Route path="/profile" component={ProfilePage} />
					<Route path="/new-password" component={NewPasswordPage} />
					<Route path="/airport/:id" component={AirportPage} />
					<Route path="/airports" component={AirportsPage} />

				</Switch>

				<Footer />

			</div>
		);
	}
}

App.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(App);