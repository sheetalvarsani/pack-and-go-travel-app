// webpack.config.js
const path = require('path');
require('dotenv').config();

const clientConfig = {
  mode: 'development',
  entry: {
    path: path.join(__dirname, './client/src/index.js')
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js',
    publicPath: '/' // <-- add public path here
  },
  devServer: {
    historyApiFallback: true // <-- add fallback here
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

module.exports = clientConfig;
