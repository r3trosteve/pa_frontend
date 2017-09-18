const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const outputPath = path.resolve(__dirname, './dist')

const webpackConfig = {
	entry: {
		app: [
			'react-hot-loader/patch',
			path.resolve(__dirname, './src/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.sass/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer({
									browsers:['ie >= 8', 'last 4 version']
								})
							],
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/assets/'),
				use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/data/'),
				use: 'file-loader?name=data/[name].json'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'url-loader'
			},
			{
				test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/assets/'),
				loader: 'url-loader?name=assets/fonts/[name].[ext]'
			}
		]
	},
	resolve: {
		alias: {
			'components': path.resolve(__dirname, './src/components'),
			'containers': path.resolve(__dirname, './src/containers'),
			'actions': path.resolve(__dirname, './src/actions'),
			'reducers': path.resolve(__dirname, './src/reducers'),
			'store': path.resolve(__dirname, './src/store'),
			'assets': path.resolve(__dirname, './src/assets'),
			'utils': path.resolve(__dirname, './src/utils'),
			'data': path.resolve(__dirname, './src/data'),
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/assets/index.html'),
			filename: 'index.html',
			path: outputPath
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jquery: 'jquery',
			jQuery: 'jquery',
			'window.jquery': 'jquery',
			'window.jQuery': 'jquery'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		port: 8000,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: '0.0.0.0'
	}
}

module.exports = webpackConfig