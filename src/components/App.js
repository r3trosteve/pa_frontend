import 'assets/styles/main.sass';

import React, { Component } from 'react';
import Header from 'components/common/header/Header';
import Main from 'components/Main';
import Footer from 'components/common/footer/Footer';

export default class App extends Component {
	constructor() {
		super();
		this.state = { loading: true };
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ loading: false });
		}, 200);
	}

	render() {
		if (!this.state.loading) {
			return (
				<div>
					<Header />
					<Main />
					<Footer />
				</div>
			);
		} else {
			return null;
		}
	}
}