var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8001
  },
  entry: {
    main: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8001',
      path.resolve(__dirname, 'app/main.jsx')
    ],
    login: path.resolve(__dirname, 'app/login.jsx')
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './[name]/build.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
      { test: /\.scss$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
      { test: /.*\.(jpe?g|png|gif|svg)$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack-loader'] },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
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
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8001' })
  ]
};
