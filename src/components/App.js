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
import ParkingLotPage2 from './parking-lot/ParkingLotPage2';
import CheckoutPage from './checkout/CheckoutPage';
import ProfilePage from './profile/ProfilePage';
import NewPasswordPage from './profile/NewPasswordPage';
import AirportPage from './airport/AirportPage';
import AirportsPage from './airports/AirportsPage';
import NotFoundPage from './notofund/NotFoundPage';
import ConfirmationPage from './confirmation/ConfirmationPage';
import PrivacyPolicyPage from './static-pages/PrivacyPolicyPage';
import TermsConditionsPage from './static-pages/TermsConditionsPage';

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
					titleTemplate="%s"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{
							name: "description",
							content: "Book airport parking services at over 2,000 airports worldwide for off-airport parking such as self-park, long term, valet and covered airport parking offering free shuttles."
						},
						{
							name: "viewport",
							content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
						},

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

					{/*<Route path="/checkout/:id" component={CheckoutPage} />*/}
                    <PropsRoute
                        path="/checkout/:id"
                        component={CheckoutPage}
                        openLogModal={this.openLogModal}
                    />

					<Route path="/confirmation/:id" component={ConfirmationPage} />

					<Route path="/profile" component={ProfilePage} />
					<Route path="/new-password" component={NewPasswordPage} />

					<Route path="/airports" component={AirportsPage} />

					<Route path="/privacy-policy" component={PrivacyPolicyPage} />
					<Route path="/terms-of-service" component={TermsConditionsPage} />

					<Route
						path="/:slug"
						exact
						// strict
						render= {({ match }) => {
							if (/-airport$/.test(match.params.slug)) {
								return <AirportPage />;
							} else if (/lot-/.test(match.params.slug)) {
								return <ParkingLotPage2 />;
							} else {
								return <NotFoundPage />;
							}
                        }}
					/>

					<Route path="*" component={NotFoundPage} />

				</Switch>

				{
					!this.props.location.pathname.match(/\/rates\/search\/*/) ?
						<Footer /> :
						null
				}

			</div>
		);
	}
}

App.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(App);