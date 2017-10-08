import 'bootstrap/dist/js/bootstrap.js';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'components/App';


const renderApp = Component => {
	render(
		<Provider key={module.hot ? Date.now() : store} store={store}>
			<AppContainer>
				<BrowserRouter>
					<Component/>
				</BrowserRouter>
			</AppContainer>
		</Provider>,
		document.getElementById('root')
	);
};

renderApp(App);

if (module.hot) {
	module.hot.accept('components/App', () => {
		renderApp(App);
	});
}

