const path = require('path');
const dist = path.join(__dirname, 'dist');
const webpack = require('webpack');
const webpackCleanupPlugin = require('webpack-cleanup-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const statsPlugin = require('stats-webpack-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
	{
		name: 'client',
		target: 'web',
		entry: './tools/client.js',
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
				// CSS
				{
					test: /\.css$/, 
					use: ['style-loader','css-loader?sourceMap']
				},
				// SASS
				{
					test: /\.sass$/,
					use: extractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
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
					})
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
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jquery: 'jquery',
				jQuery: 'jquery',
				'window.jquery': 'jquery',
				'window.jQuery': 'jquery'
			}),
			new extractTextPlugin({
				filename: 'bundle.css',
				allChunks: true
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					screw_ie8: true,
					drop_console: true,
					drop_debugger: true
				}
			}),
			new webpack.optimize.OccurrenceOrderPlugin(),
		]
	},
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
					use: ['isomorphic-style-loader','css-loader?sourceMap']
				},
				// SASS
				{
					test: /\.sass$/,
					use: extractTextPlugin.extract({
						fallback: 'isomorphic-style-loader',
						use: [
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
					})
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
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jquery: 'jquery',
				jQuery: 'jquery',
				'window.jquery': 'jquery',
				'window.jQuery': 'jquery'
			}),
			new extractTextPlugin({
				filename: 'bundle.css',
				allChunks: true
			}),
			new optimizeCssAssetsPlugin({
				cssProcessorOptions: { discardComments: { removeAll: true } }
			}),
			new statsPlugin('stats.json', {
				chunkModules: true,
				modules: true,
				chunks: true,
				exclude: [/node_modules[\\\/]react/],
			})
		]
	}
];