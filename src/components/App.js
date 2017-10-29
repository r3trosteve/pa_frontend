import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import routes from '../routes';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import {withRouter} from 'react-router-dom';

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

export default withRouter(App);