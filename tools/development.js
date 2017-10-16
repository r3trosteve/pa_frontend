const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('../webpack.development.config.js');

const app = express();
const compiler = webpack(config);
const port = 8000;

app.use(webpackDevMiddleware(compiler, {
	publicPath: '/static/',
	stats: {
		colors: true
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: true
	},
}));

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(port, () => {
	console.log('Server is running in development mode on port: ' + port);
});