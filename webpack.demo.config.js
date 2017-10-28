const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: [path.resolve(__dirname, 'examples', 'src', 'main.js')],
  output: {
    path: path.resolve(__dirname, 'examples/assets'),
    publicPath: '/examples/assets/',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              modules: false,
              useBuiltIns: true,
              targets: {
                browsers: [
                  'Chrome >= 60',
                  'Safari >= 11',
                  'iOS >= 10.3',
                  'Firefox >= 54',
                  'Edge >= 15',
                ],
              },
            }],
          ],
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
          }],
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/caniuse-lite\/data\/regions/),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
};
