var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry:  {
    main: path.resolve(__dirname, 'app/main.jsx'),
    login: path.resolve(__dirname, 'app/login.jsx')
  },
  output: {
    path: __dirname + '/build',
    filename: './[name]/build.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
      { test: /\.scss$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      chunks: ['main'],
      title: '蓝莓会开发文档',
      template: 'app/templates/Base.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      inject: 'body',
      chunks: ['login'],
      title: '用户登录',
      hash: true,
      template: 'app/templates/Base.html'
    }),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // new CopyWebpackPlugin([
    //   { from: './app/index.html', to: 'index.html' },
    //   { from: './app/main.css', to: 'main.css' }
    // ]),
  ]
};
