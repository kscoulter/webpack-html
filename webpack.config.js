const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const variables = require('./variables.js');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'HTML Webpack Plugin',
      bar: 'bar',
      favWord: variables.word
    })
  ]
};
