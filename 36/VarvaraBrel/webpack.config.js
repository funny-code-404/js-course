const path = require('path');
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  context: path.resolve(__dirname, `src`),
  entry: { main: `./index.js` },
  mode: `production`,
  output: {
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, `dist`),
  },
  resolve: { extensions: [`.js`, `.json`, `.jpg`, `.css`, `.scss`] },
  devServer: { port: 8000 },
  plugins: [new HtmlWebpackPlugin({ template: `./index.html` })],
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [`file-loader`],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
