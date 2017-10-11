const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = [
	'style-loader',
	'css-loader?sourceMap',
	{
		loader: 'postcss-loader',
		options: {
			plugins: [
				autoprefixer({
					browsers: ['ie >= 8', 'last 4 version']
				})
			],
			sourceMap: true
		}
	},
	'sass-loader?sourceMap'
];
const cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader', 
	use: [
		'css-loader?sourceMap',
		{
			loader: 'postcss-loader',
			options: {
				plugins: [
					autoprefixer({
						browsers: ['ie >= 8', 'last 4 version']
					})
				],
				sourceMap: true
			}
		},
		'sass-loader?sourceMap'
	],
	publicPath: './'
});
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			// CSS
			{
				test: /\.css$/, 
				use: ['style-loader','css-loader?sourceMap']
			},
			// SASS
			{
				test: /\.sass$/, 
				use: cssConfig
			},
			// JS
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			// {
            // 	enforce: 'pre',
            // 	test: /\.js$/,
            // 	exclude: /node_modules/,
            // 	use: 'eslint-loader'
            // },
			// IMAGES
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					'file-loader?name=images/[name].[ext]',
					'image-webpack-loader'
				]
			},
			// FONTS
			{
				test: /\.(eot|ttf|otf|woff|woff2)$/,
				loader: 'url-loader?name=fonts/[name].[ext]'
			},
			// JSON
			{
				test: /\.json$/,
				use: 'file-loader?name=data/[name].json'
			}
		]
	},
	// DEV SERVER
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8000,
		stats: 'errors-only',
		hot: true,
		historyApiFallback: true
	},
	// PLUGINS
	plugins: [
		new HtmlWebpackPlugin({
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: './src/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'bundle.css',
			disable: !isProd,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jquery: 'jquery',
			jQuery: 'jquery',
			'window.jquery': 'jquery',
			'window.jQuery': 'jquery'
		})
	],
	// PATHS
	resolve: {
		alias: {
			'components': path.resolve(__dirname, './src/components'),
			'containers': path.resolve(__dirname, './src/containers'),
			'actions': path.resolve(__dirname, './src/actions'),
			'reducers': path.resolve(__dirname, './src/reducers'),
			'store': path.resolve(__dirname, './src/store'),
			'assets': path.resolve(__dirname, './src/assets'),
			'utils': path.resolve(__dirname, './src/utils'),
			'data': path.resolve(__dirname, './src/data')
		}
	}
};