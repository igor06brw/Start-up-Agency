const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: "./src/index.ts",
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  stats: {
    colors: true
  },
  devServer: {
    contentBase: './dist',
    writeToDisk: true,
    watchContentBase: true,
    port: 3456
  },
  output: {
    path: path.resolve("dist"),
    filename: "from-typescript.js",
    publicPath: "/dist"
  },
};