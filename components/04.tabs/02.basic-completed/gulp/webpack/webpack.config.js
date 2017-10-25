const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const dest = config.dest

module.exports = {
  devtool: 'cheap-source-map',
  entry: './src/js/main.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env'],
        plugins: []
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, dest),
    publicPath: '/'
  }
}
