const webpack = require('webpack');
const baseWebpack = require('./webpack.base');
const merge = require('webpack-merge');

const devWebpackConfig = merge(baseWebpack, {
  devServer: {
    port: 8080,
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    // proxy: proxy,
    disableHostCheck: true,
    contentBase: './dist',
    hot: true
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
module.exports = devWebpackConfig;
