const express = require('express');
const path = require('path');

const clientstatsPath = path.join(__dirname, '../static/stats.json');
const serverRendererPath = path.join(__dirname, '../static/server.js');
const serverRenderer = require(serverRendererPath).default;
const stats = require(clientstatsPath);

const app = express();
const port = 8001;

app.use('/static', express.static(path.join(__dirname, '../static')));

app.use(serverRenderer(stats));

app.listen(port, () => {
	console.log('Server is running in production mode on port: ' + port);
});