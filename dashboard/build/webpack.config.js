const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
	return path.resolve(__dirname, "..", dir);
}

module.exports = {
	context: path.resolve(__dirname, "../"),
	mode: 'development',
	entry: [
		'./src/app.js'
	],
	resolve: {
		extensions: ['.js', '.json', '.vue'],
		alias: {
			"@": resolve('src')
		}	
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    './src',
                    './node_modules/webpack-dev-server/client',
                ],
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.(png|ico|gif|svg|jpe?g)(\?[a-z0-9]+)?$/,
				use: 'url-loader',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: 'url-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
}