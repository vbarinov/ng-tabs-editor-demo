const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(css|scss)$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize!resolve-url-loader?keepQuery!sass-loader?sourceMap!postcss-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.html$/,
        loaders: [
          'html-loader'
        ]
      },
      {
        include: /\.(pug|jade)$/,
        loaders: [
          'html-loader',
          'pug-html-loader'
        ]
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        include: [
          path.join(process.cwd(), conf.path.src('assets', 'fonts'))
        ],
        // don't code like this
        loader: 'file-loader?name=[name].[ext]&publicPath=../../&outputPath=assets/fonts/'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    FailPlugin,
    new HtmlWebpackPlugin({
      template: conf.path.src('index.pug')
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {comments: false},
      compress: {unused: true, dead_code: true, warnings: false} // eslint-disable-line camelcase
    }),
    new ExtractTextPlugin('assets/css/index-[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      }
    })
  ],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: 'assets/js/[name]-[hash].js'
  },
  entry: {
    app: `./${conf.path.src('index')}`,
    vendor: Object.keys(pkg.dependencies)
  }
};
