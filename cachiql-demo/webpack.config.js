const webpack = require('webpack')
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: './client/index.js',
  mode:'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8080,
    publicPath: '/',
    inline: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
      }
    }
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        }
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}