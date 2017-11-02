import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {withRouter} from 'react-router-dom';

import routes from '../routes';

import Header from './common/header/Header';
import Footer from './common/footer/Footer';

class App extends Component {
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

				<Header currentPathname={this.props.location.pathname} />
				
				{routes.map((route, i) => <Route key={i} {...route} />)}

				<Footer />

			</div>
		);
	}
}

App.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(App);