const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');

module.exports ={
  context: path.resolve(__dirname, 'src'), 
  entry: { 
    main: './index.js',
  }, 
  mode: 'production', 
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.jpg', '.css'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
};