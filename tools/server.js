import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import template from './template';
import { Provider } from 'react-redux';
import configureStore from '../src/configureStore';
import App from '../src/components/App';
import routes from '../src/routes';

export default function serverRenderer({ clientStats, serverStats }) {

	return (req, res) => {

		const store = configureStore();
		const initialData = store.getState();
		const context = {};
		const helmet = Helmet.renderStatic();

		const promises = routes.reduce((acc, route) => {
			if (matchPath(req.url, route) && route.component && route.component.fetchData) {
				acc.push(Promise.resolve(store.dispatch(route.component.fetchData())));
			}
			return acc;
		}, []);
	
		Promise.all(promises)

			.then(() => {
				
				const context = {};
				const markup = renderToString(
					<Provider store={store}>
						<StaticRouter location={req.url} context={context}>
							<App />
						</StaticRouter>
					</Provider>
				);

				if (context.status === 404) {
					res.status(404);
				}
				if (context.status === 302) {
					return res.redirect(302, context.url);
				}

				res.status(200).send(template({ 
					markup, 
					helmet, 
					initialData 
				}));
			
		});

	}
}