const path = require('path');

module.exports = {
  entry: './explorer/index.js',
  output: {
    path: path.join(__dirname, 'explorer', 'doc'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: path.join(__dirname, 'explorer', 'doc'),
    contentBase: path.join(__dirname, 'explorer'),
    open: true,
    hot: true,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
    ],
  },
};
