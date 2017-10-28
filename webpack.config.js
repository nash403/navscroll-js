const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PROD = (process.env.NODE_ENV === 'production');

const configureBabelLoader = (browserlist) => {
  return {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', {
            debug: true,
            modules: false,
            useBuiltIns: true,
            targets: {
              browsers: browserlist,
            },
          }],
        ]
      },
    },
  };
};

const baseConfig = {
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js',
    library: ['navscroll'],
    libraryTarget: 'umd',
  },
  plugins: PROD ? [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        mangle: {
          // Works around a Safari 10 bug:
          // https://github.com/mishoo/UglifyJS2/issues/1753
          safari10: true,
        },
      }
    }),
  ] : [],
};

const modernConfig = Object.assign({}, baseConfig, {
  entry: {
    'navscroll': path.resolve(__dirname, 'src', 'index.js'),
  },
  module: {
    rules: [
      configureBabelLoader([
        // The last two versions of each browser, excluding versions
        // that don't support <script type="module">.
        'last 2 Chrome versions', 'not Chrome < 60',
        'last 2 Safari versions', 'not Safari < 10.1',
        'last 2 iOS versions', 'not iOS < 10.3',
        'last 2 Firefox versions', 'not Firefox < 54',
        'last 2 Edge versions', 'not Edge < 15',
      ]),
    ],
  },
});

const legacyConfig = Object.assign({}, baseConfig, {
  entry: {
    'navscroll-legacy': path.resolve(__dirname, 'src', 'index.js'),
  },
  module: {
    rules: [
      configureBabelLoader([
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
      ]),
    ],
  },
});

module.exports = [
  modernConfig,
  legacyConfig
]
