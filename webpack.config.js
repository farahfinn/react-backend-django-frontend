const webpack = require("webpack");
var path = require('path')

module.exports = {
  entry: "./starter/frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, "./starter/frontend/static/frontend"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        'process.env.NODE_ENV': JSON.stringify("production"),
      },
    }),
  ],
};