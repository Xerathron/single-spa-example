const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
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