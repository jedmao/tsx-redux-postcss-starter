import * as path from 'path';
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
import 'webpack';

export default {
	entry: {
		bundle: ['./entry'],
	},
	output: {
		path: __dirname,
		filename: '[name].js'
	},
	debug: true,
	devtool: 'source-map',
	module: {
		preLoaders: [
			{
				test: /\.tsx?$/,
				loader: 'tslint'
			}
		],
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.tsx?$/,
				loader: 'ts',
				exclude: [
					/node_modules/,
					nodeModulesPath
				]
			}
		]
	},
	externals: {
		// don't bundle the 'react' npm package with our bundle.js
		// but get it from a global 'React' variable
		react: 'React'
	},
	plugins: [],
	resolve: {
		root: [path.resolve('./src')],
		extensions: ['', '.ts', '.tsx', '.js', '.json']
	}
};
