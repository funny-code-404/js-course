const path = require("path");
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);

module.exports = {
  context: path.resolve(__dirname, `src`),
  entry: { main: `./index.js` },
  mode: `production`,
  output: {
    filename: `[name].[contenthash].bundle.js`,
    path: path.resolve(__dirname, `dist`),
  },
  resolve: { extensions: [`.js`, `.json`, `.jpg`, `.css`, `.scss`] },
  optimization: { splitChunks: { chunks: `all` } },
  devServer: { port: 8000 },
  plugins: [
    new HtmlWebpackPlugin({ template: `./index.html` }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [`file-loader`],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
