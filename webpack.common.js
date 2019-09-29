const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),

	output: {
		filename: 'main.js',
		path: path.join(__dirname, '/dist')
	},
	devServer: {
		historyApiFallback: true
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
	plugins: [
		new CopyWebpackPlugin([
			'images/**',
			'node_modules/@webcomponents/webcomponentsjs/**',
			'manifest.json'
		]),
		new HtmlWebpackPlugin({
			chunksSortMode: 'none',
			template: 'index.html'
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			include: ['index.html', 'manifest.json', /\.js$/],
			exclude: [/\/@webcomponents\/webcomponentsjs\//],
			navigateFallback: 'index.html',
			swDest: 'service-worker.js',
			clientsClaim: true,
			skipWaiting: true,
			runtimeCaching: [
				{
					urlPattern: /\/@webcomponents\/webcomponentsjs\//,
					handler: 'StaleWhileRevalidate'
				},
				{
					urlPattern: /^https:\/\/fonts.gstatic.com\//,
					handler: 'StaleWhileRevalidate'
				}
			]
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src/index.js')],
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: { ie: '11' } }]],
						plugins: ['@babel/plugin-syntax-dynamic-import']
					}
				}
			},
			{
				test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}
			},
			{
				test: /\.svg$/,
				include: [/icons/],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'icons/'
						}
					}
				]
			},

			// this is used to import css files from node_modules and add them to get styles() with: unsafeCSS(testStyles),
			{
				test: /\.css$/,
				use: ['css-loader'],
				include: [/node_modules/]
			},

			// We need this loader to make the fonts work and apply css
			{
				test: /\.css$/i,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
				include: [path.resolve(__dirname, 'src/assets/css/fonts.css')]
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'css-loader' },
					{
						loader: 'sass-loader',
						options: {
							includePaths: ['./node_modules']
						}
					}
				]
			}
		]
	}
};
