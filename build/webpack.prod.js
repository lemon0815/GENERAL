'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const prodWebpackConfig = merge(baseWebpack, {
  devtool: 'source-map',
  performance: {
    hints: false
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve('dist')], {
      root: path.resolve('.')
    }),
    // 从 webpack 4 开始，也可以通过 "mode" 配置选项轻松切换到压缩输出，只需设置为 "production"。
    // new UglifyJsPlugin({
    //   sourceMap: true,
    //   uglifyOptions: {
    //     ie8: true
    //   }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})
module.exports = prodWebpackConfig;
