const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './explorer/index.js',
  output: {
    path: path.join(__dirname, 'explorer', 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './explorer/dist',
    open: true,
    hot: true,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./explorer/index.html'),
    }),
  ],
};
