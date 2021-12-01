const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
   entry: {
      main:'./src/index.js',
      
   },
   mode: 'production',
   output: {
      filename: 'bundle.js',
      path:path.resolve(__dirname,'dist'),
   },
   plugins: [
      new HtmlWebpackPlugin({
         template:'./src/index.html'
      }),
      new CleanWebpackPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: ['file-loader'],
         },
          {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader'],
         },
         
      ]
   }
}