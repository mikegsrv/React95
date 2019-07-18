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
  resolve: {
    alias: {
      '@react95/core': path.resolve(__dirname, 'components'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.(png|jpe?g|gif|ico|ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./explorer/index.html'),
    }),
  ],
};
