import '../src/assets/styles/main.sass';
import 'bootstrap/dist/js/bootstrap.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../src/configureStore';
import App from '../src/components/App';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../src/modules/auth/auth';

const store = configureStore(window.__initialData__);

if (localStorage.jwtToken) {
	store.dispatch(setCurrentUser(localStorage.jwtToken));
}

const renderApp = Component => {
	ReactDOM.hydrate(
		<AppContainer>
			<Provider store={store}>
				<BrowserRouter>
					<Component/>
				</BrowserRouter>
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

renderApp(App);

if (module.hot) {
	module.hot.accept();
}