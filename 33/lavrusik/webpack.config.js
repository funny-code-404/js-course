const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: {
		main:'./src/index.js',
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname,'dist'),
	},
	resolve: {
		extensions:['.js', '.json', '.css', '.scss', '.png', '.jpeg'],	
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:'./src/index.html',
		}),
	
	new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use:['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.(jpeg|png|svg)$/,
				use:['file-loader']
			}
		]
	}
}