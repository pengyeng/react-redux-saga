const { apm } = require('@elastic/apm-rum');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = env => {
  
  var appTarget = process.argv[5] || 'VERSION_NORMAL';
  var appMode = process.argv[7] || 'GENERAL';

  if (process.argv[5] == 'VERSION_RUM'){
    console.log("including apm.init()...");
  }
  if (process.argv[7] == 'PROTECTED'){
    console.log("including PROTECTED UIs...");
  }
  return {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NormalModuleReplacementPlugin(
      /(.*)-APP_TARGET(\.*)/,
      function (resource) {
        resource.request = resource.request.replace(
          /-APP_TARGET/,
          `-${appTarget}`
        );
      }
    ),  
    new webpack.NormalModuleReplacementPlugin(
      /(.*)-APP_MODE(\.*)/,
      function (resource) {
        resource.request = resource.request.replace(
          /-APP_MODE/,
          `-${appMode}`
        );
      }
    ),     
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
    ],
  },
};
};
  
