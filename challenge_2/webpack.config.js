const path = require('path');
<<<<<<< HEAD

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      include: path.join(__dirname, '/client'),
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
=======
const webpack = require('webpack');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  devtool: 'source-map',
  mode: 'development',
  cache: true,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: [ { loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
>>>>>>> 26f12b49c17d1543540da7f39ffcc7d2e19a79a8
};
