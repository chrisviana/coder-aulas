const path = require('path'); 
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',  
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'  
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins:  [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public','index.html'),
    })
  ],
  module: {
    rules: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }
    ]
  },
  devServer:{
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
}