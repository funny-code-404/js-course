const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   context: path.resolve(__dirname, 'src'),
   entry: {
      main: './Todo List.js',
      HelloTodo: './Hello Todo List.js',
   },   
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   optimization: {
      splitChunks: {
         chunks: 'all'
      }
   },
   devServer: {
      port: 4200,
   },
   plugins: [
      new HTMLWebpackPlugin({
         title: 'My suite',
         template: './index ToDo List.html',
      }),
      new CleanWebpackPlugin(),
   ],
   resolve: {
      extensions: ['.js', '.css'],
      alias: {
         '@assets': path.resolve(__dirname, 'src/assets/'),
         '@fonts': path.resolve(__dirname, 'src/assets/Fonts'),
      }
   },
   module: {
      rules: [
         {
            test: /.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /.(png|jpg|svg|gif)$/,
            use: ['file-loader'],
         },
         {
            test: /.(ttf|otf)$/,
            use: ['file-loader'],
         },
      ],
   },
};

