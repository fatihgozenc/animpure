const path = require('path');

module.exports = {
	entry: './src/AnimPure.js',
	output: {
		filename: 'AnimPure.module.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'AnimPure',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}

};