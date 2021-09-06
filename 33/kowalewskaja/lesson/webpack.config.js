const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssets = require("optimize-css-assets-webpack-plugin");

const optimazeApp = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (process.env.NODE_ENV === "development") {
    config.minimizer = [new TerserWebpackPlugin(), new OptimizeCssAssets()];
  }
  return config;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
    timer: "./timer.js",
  },
  mode: "production",
  resolve: {
    extensions: [".json", ".js", ".css", ".png","scss"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  optimization: optimazeApp(),

  devServer: {
    port: 8090,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "/index.html",
    }),

    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              pulicPath: "",
            },
          }, "css-loader"],
      },
      {
        test: /.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              pulicPath: "",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /.(png|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
