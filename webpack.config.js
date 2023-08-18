const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', 
    }),
  ],
};