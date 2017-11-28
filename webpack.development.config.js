const webpack = require('webpack');
const path = require('path');

module.exports = [

	// CLIENT CONFIG
	{
		name: 'client',
		target: 'web',
		entry: [
			'webpack-hot-middleware/client',
			'react-hot-loader/patch',
			'./tools/client.js'
		],
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'client.js',
			publicPath: '/static/',
		},
		devtool: 'source-map',
		module: {
			rules: [
				// JS
				{
					test: /\.js$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
                // {
                //     enforce: 'pre',
					// test: /\.js$/,
					// exclude: /(node_modules)/,
					// use: 'eslint-loader'
                // },
				// CSS
				{
					test: /\.css$/, 
					use: ['style-loader','css-loader?sourceMap']
				},
				// SASS
				{
					test: /\.sass$/,
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				},
				// FONTS
				{
					test: /\.(eot|ttf|otf|woff|woff2)$/,
					loader: 'url-loader?name=fonts/[name].[ext]'
				},
				// IMAGES
				{
					test: /\.(png|jpe?g|gif|svg)$/,
					use: [
						'file-loader?name=images/[name].[ext]',
						'image-webpack-loader'
					]
				},
			],
		},
		// PLUGINS
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jquery: 'jquery',
				jQuery: 'jquery',
				'window.jquery': 'jquery',
				'window.jQuery': 'jquery'
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify(process.env.NODE_ENV)
				}
			})
		]
	},

	// SERVER CONFIG
	{
		name: 'server',
		target: 'node',
		entry: './tools/server.js',
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'server.js',
			libraryTarget: 'commonjs2',
			publicPath: '/static/',
		},
		devtool: 'source-map',
		module: {
			rules: [
				// JS
				{
					test: /\.js$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
				// CSS
				{
					test: /\.css$/, 
					use: ['style-loader','css-loader?sourceMap']
				},
				// SASS
				{
					test: /\.sass$/,
					use: [
						{
							loader: 'isomorphic-style-loader',
						},
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				},
				// FONTS
				{
					test: /\.(eot|ttf|otf|woff|woff2)$/,
					loader: 'url-loader?name=fonts/[name].[ext]'
				},
				// IMAGES
				{
					test: /\.(png|jpe?g|gif|svg)$/,
					use: [
						'file-loader?name=images/[name].[ext]',
						'image-webpack-loader'
					]
				},   
			],
		},
		// PLUGINS
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jquery: 'jquery',
				jQuery: 'jquery',
				'window.jquery': 'jquery',
				'window.jQuery': 'jquery'
			})
		]
	}
];