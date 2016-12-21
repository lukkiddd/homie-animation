var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: true,
  context: __dirname,
  entry: "./app/app.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  },
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js"
  }
};