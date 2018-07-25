const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

function resolve(dir) {
	return path.resolve(__dirname, "..", dir);
}

module.exports = {
	context: path.resolve(__dirname, "../"),
	mode: 'development',
	entry: {
		main: './src/app.js',
	},
	resolve: {
		extensions: ['.js', '.json', '.vue'],
		alias: {
			"vue$": 'vue/dist/vue.esm.js',
			"@": resolve('src')
		}	
	},
	output: {
		path: resolve('dist'),
		filename: 'main.js'
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

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { screw_ie8: true, warnings: false },
			output: { comments: false },
			sourceMap: false,
		})
	])
}