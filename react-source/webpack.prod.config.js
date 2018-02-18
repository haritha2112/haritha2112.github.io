const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        }, {
          loader: "postcss-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(pdf|jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]",
          },
        },
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/..',
    publicPath: '/',
    filename: 'bundle.js'
  }
};
