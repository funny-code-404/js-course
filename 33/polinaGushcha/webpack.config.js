const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');

module.exports ={
  context: path.resolve(__dirname, 'src'), //заносим в контекст src
  entry: { //входящие файлы
    main: './index.js',
  }, 
  mode: 'production', //сборка
  output: { //готовые файлы
    filename: '[name].[contenthash].bundle.js', //[шаблон name].[непересобирать файлы].сжатая версия сайта
    path: path.resolve(__dirname, 'dist'), //путь, где файл находиться
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
        use: ['style-loader', 'css-loader'], //порядок load-еров имеет значение
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/, //лоадер на изображения
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|otf)$/, //лоадер на шрифты
        use: ['file-loader'],
      },
    ],
  },
};