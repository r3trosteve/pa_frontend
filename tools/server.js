import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import template from './template';
import templateConfirmation from './template-confirmation';
import { Provider } from 'react-redux';
import configureStore from '../src/configureStore';
import App from '../src/components/App';
import routes from '../src/routes';

export default function serverRenderer({ clientStats, serverStats }) {

	return (req, res) => {

		const store = configureStore();
		const initialData = store.getState();

		const branch = matchRoutes(routes, req.url);

		const promises = branch.map(({route, match}) => {

			let fetchData = route.component.fetchData;

			return fetchData instanceof Function ? fetchData(store, match) : Promise.resolve(null);

		});

		return Promise.all(promises).then((data) => {

			let context = {};

			const markup = renderToString(
				<Provider store={store}>
					<StaticRouter location={req.url} context={context}>
						<App />
					</StaticRouter>
				</Provider>

			);

			const helmet = Helmet.renderStatic();

			if (context.status === 404) {
				res.status(404);
			}

			if (context.status === 302) {
				return res.redirect(302, context.url);
			}

			if (req.path.match(/^.confirmation.*$/)) {
                res.status(200).send(templateConfirmation({
                    markup,
                    helmet,
                    initialData
                }));
			} else {
                res.status(200).send(template({
                    markup,
                    helmet,
                    initialData
                }));
			}

		});

	};

}